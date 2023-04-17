# Project

## Upload products

Design an interface for a user to upload a list of products / prices and view their existing products.

The prices for these products will change overtime, so please design an interface that accounts for the need to change pricing beginning at a certain date.

Other constraints from my line of questions:

-   Focus on UI over backend
-   Data largely consist of product, price, date of price beginning (nullable?)
-   Multiple companies per authorized user!

## Zach Blume for Confido

Boilerplate configurations I started with:

-   Tailwind
-   useSWR
-   Prettier and .prettierignore; 4 spaces, 100 width
-   Pre-git-commit lint-staged, unit, and e2e test with husky
-   Jest for unit and Playwright for e2e
-   tests/unit and tests/e2e directories
-   .nvmrc and .npmrc set for heroku or vercel deploy
-   src directory
-   global layout in components/Layout/Layout
-   Inter for font in \_app
-   /health and /ping (pong) api routes

db:

-   SWR default config is keepPrevious: true
-   useQuery hook for postgrest-js wrapped with useSWR
