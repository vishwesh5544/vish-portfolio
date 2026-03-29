Add a new project entry to the portfolio.

Ask the user for the following details (all required unless marked optional):
- **name**: Project name
- **description**: One-sentence description — what it is and what role you played
- **stack**: Comma-separated list of technologies (e.g. "React, Node.js, MongoDB")
- **cloud**: Comma-separated cloud services (optional, e.g. "AWS EC2, AWS S3")
- **notes**: Key bullet points about the project (optional, ask for 1-3 highlights)
- **type**: Contract | Freelance | Full-Time

Then:
1. Read `src/data/projects.ts`
2. Add the new project as the **first** entry in the `projects` array (most recent first)
3. Follow the existing TypeScript shape:
   ```ts
   {
     name: string,
     description?: string,
     stack: string[],
     cloud?: string[],
     notes?: string[],
     type: "Contract" | "Freelance" | "Full-Time"
   }
   ```
4. Run `yarn build` to verify no TypeScript errors
5. Confirm the project was added and show a diff of the change
