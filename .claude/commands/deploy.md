Build the portfolio and deploy it to Firebase Hosting.

Steps:
1. Run `yarn build` — TypeScript check + Vite production build into `dist/`
2. If the build fails, show the errors and stop. Do NOT proceed to deploy.
3. Run `firebase deploy` — deploys `dist/` to Firebase Hosting (project: vish-portfolio-9156b)
4. Confirm the deployment succeeded and print the live URL: https://vishcodes.live/

Always use `yarn build`, not `npm run build`.
