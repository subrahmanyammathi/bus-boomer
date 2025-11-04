# Deploying frontend and backend to Vercel

This project contains two separate Vercel deployments:

- frontend/  -> React app (Create React App)
- backend/   -> Express app exposed as Vercel Serverless Function

## Frontend (frontend/)

1. In the Vercel dashboard, import the `frontend` folder as a new project.
2. Set Framework Preset to "Create React App" (or let Vercel auto-detect).
3. Build command: `npm run build` (default)
4. Output directory: `build`
5. Environment variables: add any variables your frontend expects (e.g., REACT_APP_API_URL).

Or deploy from CLI:

```bash
# from project root
cd frontend
vercel --prod
```

## Backend (backend/)

The backend is deployed as a serverless function using `serverless-http`.

1. Ensure `serverless-http` is installed (it's added in `backend/package.json`).
2. In Vercel, import the `backend` folder as a new project.
3. Vercel will use `vercel.json` to deploy `api/index.js` as a Node serverless function.
4. Environment variables (required):
   - `MongoURI` : set your MongoDB connection string
   - `JWT_SECRET` (optional) : if you want to override the hardcoded secret used for passport

Or deploy from CLI:

```bash
cd backend
vercel --prod
```

Notes:
- Your `backend/config/keys.js` currently contains a hard-coded connection string. For security, replace it to read from `process.env.MongoURI`.
- Vercel serverless functions have cold starts and a limited execution time. For heavy/long-running DB workloads, consider using a dedicated hosted server or another platform.

## Recommended small change
Replace the hard-coded Mongo URI in `backend/config/keys.js` with:

```js
module.exports = {
  MongoURI: process.env.MongoURI || "your-fallback-uri"
};
```

Set `MongoURI` in Vercel project's Environment Variables.
