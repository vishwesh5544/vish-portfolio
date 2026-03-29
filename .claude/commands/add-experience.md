Add a new work experience entry to the portfolio.

Ask the user for the following details:
- **company**: Company name (include location if relevant, e.g. "Acme Corp, UK")
- **role**: Job title with work arrangement (e.g. "Senior Engineer (Remote)")
- **duration**: Date range (e.g. "Jan 2024 - Present" or "Mar 2023 - Dec 2023")
- **highlights**: 3-5 bullet points describing key achievements. Make them specific and impactful — include:
  - Technologies used
  - Systems built or problems solved
  - Scale or impact where relevant

Then:
1. Read `src/data/experience.ts`
2. Add the new experience as the **first** entry in the `experience` array (most recent first)
3. Follow the existing TypeScript shape:
   ```ts
   {
     company: string,
     role: string,
     duration: string,
     highlights: string[]
   }
   ```
4. Run `yarn build` to verify no TypeScript errors
5. Confirm the entry was added and show the new entry
