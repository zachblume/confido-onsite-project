-   Tailwind
-   useSWR
-   Prettier and .prettierignore; 4 spaces, 100 width
-   Pre-git-commit lint-staged, unit, and e2e test with husky
-   Jest for unit and Playwright for e2e
-   tests/unit and tests/e2e directories
-   .nvmrc and .npmrc set for heroku versioning
-   src directory
-   global layout in components/Layout/Layout
-   Inter for font in \_app
-   /health and /ping (pong) api routes

db:

-   SWR default config is keepPrevious: true
-   useQuery hook for postgrest-js wrapped with useSWR
