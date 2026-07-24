#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ENV_FILE="$ROOT_DIR/.env"

read_env(){
  awk -F= -v key="$1" '$0 !~ /^[[:space:]]*#/ && $1 == key { value=substr($0,index($0,"=")+1); gsub(/^[[:space:]]+|[[:space:]]+$/,"",value); gsub(/^["\047]|["\047]$/,"",value); print value; exit }' "$ENV_FILE"
}
load_key(){
  local key="$1" value
  [ -n "${!key-}" ] && return
  [ -f "$ENV_FILE" ] || return
  value="$(read_env "$key")"
  [ -z "$value" ] || export "$key=$value"
}
for key in DATABASE_URL GOVERNANCE_GATEWAY_SECRET SECRET_KEY PGSSLROOTCERT ALLOW_SCHEMA_MIGRATION BACKEND_PORT FRONTEND_PORT OPENROUTER_API_KEY OPENROUTER_MODEL OPENROUTER_BASE_URL PROVISION_ADMIN_EMAIL PROVISION_ADMIN_PASSWORD PROVISION_ADMIN_NAME BOOTSTRAP_ACKNOWLEDGEMENT; do
  load_key "$key"
done
GOVERNANCE_GATEWAY_SECRET="${GOVERNANCE_GATEWAY_SECRET:-${SECRET_KEY:-}}"
export GOVERNANCE_GATEWAY_SECRET

fail(){ printf 'error: %s\n' "$*" >&2; exit 1; }
check(){
  local secret="${GOVERNANCE_GATEWAY_SECRET:-}"
  [ -n "${DATABASE_URL:-}" ] || fail "DATABASE_URL required"
  [ "${#secret}" -ge 32 ] || fail "GOVERNANCE_GATEWAY_SECRET must be 32+ characters"
  [[ "${BACKEND_PORT:-}" =~ ^[0-9]+$ ]] || fail "BACKEND_PORT must be an explicit integer"
  [[ "${FRONTEND_PORT:-}" =~ ^[0-9]+$ ]] || fail "FRONTEND_PORT must be an explicit integer"
  [ "$BACKEND_PORT" -ge 1024 ] && [ "$BACKEND_PORT" -le 65535 ] || fail "BACKEND_PORT must be between 1024 and 65535"
  [ "$FRONTEND_PORT" -ge 1024 ] && [ "$FRONTEND_PORT" -le 65535 ] || fail "FRONTEND_PORT must be between 1024 and 65535"
  [ "$BACKEND_PORT" != "$FRONTEND_PORT" ] || fail "BACKEND_PORT and FRONTEND_PORT must be different"
  command -v node >/dev/null || fail "node required"
  printf 'configuration valid\n'
}
migrate(){
  check
  [ "${ALLOW_SCHEMA_MIGRATION:-0}" = 1 ] || fail "set ALLOW_SCHEMA_MIGRATION=1"
  command -v psql >/dev/null || fail "psql required"
  for migration in "$ROOT_DIR"/migrations/*.sql; do
    [ -f "$migration" ] || continue
    psql "$DATABASE_URL" -v ON_ERROR_STOP=1 -f "$migration"
  done
}
start(){
  check
  [ -d "$ROOT_DIR/frontend/node_modules" ] || fail "dependencies missing; install explicitly"
  for port in "$BACKEND_PORT" "$FRONTEND_PORT"; do
    lsof -nP -iTCP:"$port" -sTCP:LISTEN >/dev/null 2>&1 && fail "assigned port $port is occupied"
  done
  printf 'Starting AI Data Center Construction Coordinator API on %s and UI on %s; persistent state is unchanged.\n' "$BACKEND_PORT" "$FRONTEND_PORT"
  exec node "$ROOT_DIR/frontend/scripts/runtime-api-proxy.mjs"
}
case "${1:-start}" in
  check) check ;;
  migrate) migrate ;;
  start) start ;;
  *) fail "usage: $0 {check|migrate|start}" ;;
esac
