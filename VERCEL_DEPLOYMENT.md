# Vercel Deployment Guide

## Prerequisites

Before deploying to Vercel, ensure you have:

1. A PostgreSQL database (e.g., Vercel Postgres, Neon, Supabase, Railway)
2. All required environment variables ready

## Required Environment Variables

Add these environment variables in your Vercel project settings:

### Required Variables

```bash
# Database connection string
DATABASE_URL=postgresql://user:password@host:port/database

# Base URL of your deployed app (e.g., https://your-app.vercel.app)
VITE_BASE_URL=https://your-app.vercel.app

# Generate with: pnpm run auth:secret
BETTER_AUTH_SECRET=your-secret-here
```

### Optional OAuth Variables

Only add these if you're using OAuth authentication:

```bash
# GitHub OAuth (optional)
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret

# Google OAuth (optional)
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

## Deployment Steps

### 1. Set Up Database

Choose one of these options:

#### Option A: Vercel Postgres

1. Go to your Vercel project dashboard
2. Navigate to Storage → Create Database → Postgres
3. Copy the `DATABASE_URL` connection string

#### Option B: External Database (Neon, Supabase, etc.)

1. Create a PostgreSQL database on your preferred provider
2. Copy the connection string

### 2. Configure Environment Variables

1. Go to your Vercel project settings
2. Navigate to Settings → Environment Variables
3. Add all required variables listed above
4. Make sure to add them for all environments (Production, Preview, Development)

### 3. Update OAuth Callback URLs

If using OAuth, update your OAuth app settings:

**GitHub:**

- Authorization callback URL: `https://your-app.vercel.app/api/auth/callback/github`

**Google:**

- Authorized redirect URIs: `https://your-app.vercel.app/api/auth/callback/google`

### 4. Push Database Schema

After deployment, you need to push your database schema:

```bash
# Set your production DATABASE_URL locally (temporarily)
export DATABASE_URL="your-production-database-url"

# Push the schema
pnpm db push
```

Alternatively, you can use Vercel CLI:

```bash
vercel env pull .env.local
pnpm db push
```

### 5. Deploy

Push to your connected Git repository, or use Vercel CLI:

```bash
vercel --prod
```

## Troubleshooting

### 500 Error: "HTTPError"

This usually means environment variables are missing or invalid. Check:

1. **Vercel Logs**: Go to your deployment → Runtime Logs
2. **Environment Variables**: Ensure all required variables are set
3. **Database Connection**: Verify `DATABASE_URL` is correct and accessible

### Database Connection Issues

If you see database connection errors:

1. Ensure your database allows connections from Vercel's IP ranges
2. Check if your database requires SSL (most do)
3. Verify the connection string format is correct

### Build Errors

If the build fails:

1. Check the build logs in Vercel dashboard
2. Ensure all dependencies are in `dependencies` (not `devDependencies`)
3. Try building locally: `pnpm build`

### OAuth Not Working

1. Verify callback URLs are correctly set in OAuth app settings
2. Ensure `VITE_BASE_URL` matches your deployed URL
3. Check that OAuth client ID and secret are correct

## Verifying Deployment

After deployment:

1. Visit your deployed URL
2. Check the homepage loads correctly
3. Try signing up/logging in
4. Check Vercel logs for any errors

## Local Testing with Production Build

Test the production build locally:

```bash
# Build the app
pnpm build

# Start the production server
pnpm start
```

Visit `http://localhost:3000` to test.

## Additional Resources

- [Nitro Vercel Deployment](https://nitro.unjs.io/deploy/providers/vercel)
- [TanStack Start Hosting Guide](https://tanstack.com/start/latest/docs/framework/react/guide/hosting)
- [Vercel Environment Variables](https://vercel.com/docs/projects/environment-variables)
