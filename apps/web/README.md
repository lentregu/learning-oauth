# apps/web

Next.js web application for **learning-oauth**.

## Requirements

- Node 20
- pnpm (managed via Corepack — run `corepack enable` once)

## Environment Variables

Copy `.env.example` to `.env.local` and fill in the values. **Never commit `.env.local`.**

| Variable | Description |
|---|---|
| `NEXTAUTH_SECRET` | Random secret for JWT signing. Generate with `openssl rand -base64 32` |
| `NEXTAUTH_URL` | Public URL of the app (e.g. `http://localhost:3000`) |
| `GOOGLE_CLIENT_ID` | Google OAuth 2.0 client ID |
| `GOOGLE_CLIENT_SECRET` | Google OAuth 2.0 client secret |
| `AZURE_AD_CLIENT_ID` | Microsoft Entra ID application (client) ID |
| `AZURE_AD_CLIENT_SECRET` | Microsoft Entra ID client secret |
| `AZURE_AD_TENANT_ID` | Tenant ID or `common` for multi-tenant |

## OAuth Provider Setup

### Google

1. Go to [Google Cloud Console → Credentials](https://console.cloud.google.com/apis/credentials)
2. Create an **OAuth 2.0 Client ID** (Web application)
3. Add authorised redirect URI:
   - Local: `http://localhost:3000/api/auth/callback/google`
   - Production: `https://<your-domain>/api/auth/callback/google`

### Microsoft Entra ID

1. Go to [Azure Portal → App registrations](https://portal.azure.com/#view/Microsoft_AAD_RegisteredApps)
2. Register a new application
3. Add redirect URI (Web):
   - Local: `http://localhost:3000/api/auth/callback/azure-ad`
   - Production: `https://<your-domain>/api/auth/callback/azure-ad`
4. Create a client secret under **Certificates & secrets**

## Local Development

```bash
# From repo root
corepack enable
pnpm install

# Copy and fill env vars
cp apps/web/.env.example apps/web/.env.local

# Start dev server
pnpm --filter web dev
```

The app runs at `http://localhost:3000`.

## Build

```bash
# From repo root
pnpm build
```

## Auth Flow

- All routes except `/signin` and `/api/auth/**` require authentication.
- Unauthenticated users are redirected to `/signin`.
- Sessions use JWT stored in an `HttpOnly` cookie (Auth.js default).
- CSRF protection is built in to Auth.js.
