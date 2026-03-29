Update personal details in the portfolio.

The personal data is in `src/data/personal.ts`. Fields available:
- **name**: Full name
- **title**: Job title shown in sidebar (e.g. "Software Engineer & Architect")
- **headline**: LinkedIn-style one-liner shown on Overview page
- **email**: Contact email
- **phone**: Phone number
- **location**: City, State, Country
- **summary**: Multi-paragraph bio shown on Overview page (uses backtick string, paragraphs separated by `\n\n`)

Ask the user which field(s) they want to update and what the new value(s) should be.

Then:
1. Read `src/data/personal.ts`
2. Update only the specified field(s)
3. For the `summary` field: use a template literal (backtick string), preserve paragraph breaks as `\n\n`
4. Run `yarn build` to verify no TypeScript errors
5. Show the updated field(s)
