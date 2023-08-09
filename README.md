![cypress workflow](https://github.com/claudivanfilho/next-server-rendering-app/actions/workflows/main.yaml/badge.svg)
![playwright workflow](https://github.com/claudivanfilho/next-server-rendering-app/actions/workflows/playwright.yaml/badge.svg)

[![Node.js](https://img.shields.io/badge/Node.js-18-brightgreen)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB)](https://reactjs.org/)
[![Next.js](https://img.shields.io/badge/Next.js-13-blueviolet)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-007ACC)](https://www.typescriptlang.org/)

[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.3.2-38B2AC)](https://tailwindcss.com/)
[![Cypress](https://img.shields.io/badge/Cypress-12.17.2-FF5A5F)](https://www.cypress.io/)
[![Percy.io](https://img.shields.io/badge/Percy.io-Visual%20Testing-5236C5)](https://percy.io/)
[![Internationalization](https://img.shields.io/badge/Internationalization-next--intl-007acc)](https://github.com/vriad/next-intl)

## Next 13 SSG Sample App

Technologies and Concepts Utilized in This Project:

- Next 13 + React 18 + Typescript + Tailwind
- New `app` Directory Feature Enabled
- i18n With `next-intl` (Route-Based Internationalization)
- [Cypress](https://www.cypress.io/) + [Playwright](https://playwright.dev/) Tests
- Visual Testing With [percy.io](https://percy.io/)
- Continuous Integration - Github Actions
  - Cypress Cloud + Percy + Parallelization
  - Playwright Workflow
- Branch Preview With Vercel Configured
- Scroll Preservation in the Main Listing

## General APP Strategy

Since all the data sources for building this application come from an imutable API called [POKE API](https://pokeapi.co/), I have chosen to adopt the concept of `Static Site Generation` (SSG) This decision is based on the exceptionally fast response it provides to end users, as well as the numerous advantages it offers for improving a better SEO of my website.

In version 13 of Next.js the concept of SSG is easily implemented using the `fetch` function within the components. This can be observerd in all the `page.tsx` files located within the `src/app` folder.

## Folder Structure

<pre>
📦.github // Github Actions workflows are defined here
📦cypress // Cypress end-to-end (e2e) tests
📦playwright // Playwright end-to-end (e2e) tests 
📦src 
 ┣ 📂app // All the base page routes and API requests are managed here
 ┣ 📂components // All server and client components are defined here, categorized into general components at the root of the folder, and specific page components for each application page
 ┣ 📂config // Configuration files, including constants, are defined here
 ┣ 📂hooks // React custom hooks, such as scroll position preserver, are defined here 
 ┣ 📂messages // Internationalization (intl) strings for each language are defined here
 ┣ 📂models // Typescript types are defined here
 ┗ 📂services // The layer responsible for fetching and processing external data is defined here
</pre>

## Testing strategy

In all of my Front End projects (SPAs), I prefer to follow the [testing trophy](https://kentcdodds.com/blog/the-testing-trophy-and-testing-classifications) strategy, which prioritizes [integrated tests over unit tests](https://kentcdodds.com/blog/write-tests). However, due to the collaborative nature of a Next.js application, where the server and front-end work together, it's not practical to mock the server side for isolated front-end testing. As a result, I have chosen to adopt End-to-End (E2E) tests using `cypress`, as it offers a robust way to test real-world scenarios that end users will encounter.

All test cases are behaviorally oriented, following the principles of [Behavior-Driven Development (BDD)](https://medium.com/javascript-scene/behavior-driven-development-bdd-and-functional-testing-62084ad7f1f2), with a focus on capturing user interactions with the system.

For visual testing of the pages, I have decided to adopt the [visual testing](https://percy.io/visual-testing) strategy. I used a third-party tool called [Percy.io](https://percy.io/) for this purpose. Percy.io integrates seamlessly with GitHub, and by configuring the GitHub Action workflow appropriately, I can ensure that each pull request undergoes a visual review process. This involves comparing current screenshots with previous versions to identify any visual modifications. Only after successfully passing the visual review on the Percy platform, is a pull request allowed to proceed.

## Development

Install the dependencies

```bash
npm install
# or
yarn install
```

Run the development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
