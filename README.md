# Monorepo workspaces experiments

Simple repo to check and validate all possible concerns regarding npm workspaces usage.

### Problems

1. Will the common lock file add useless dependencies to node_modules?
   The answer is no. To verify it, please run the next command:

   ```sh
   npm i -w ./packages/is-even
   ```

   `is-even` package have the next tree of dependencies:

   - is-event
     - is-odd
       - shared
         - bignumber.js

   As you can see, in the `node_modules` only dependencies of `is-even` package. There no `pino`, which is dependency of `is-even-loud` package.

2. Building of packages before installation
   To build shared package before installation, we have to add `preinstall` script to package json of the project, for example:

   ```json
   // from is-odd package.json
    "scripts": {
      "preinstall": "npm run build --prefix ../shared",
    },
   ```

   and shared package HAVE TO have the build script predefined. To verify it you can ran `npm i -w ./packages/is-even` again and find `dist` folder for `shared` package and `is-odd` package. This logic can work in cascade style: `is-even` package triggers build of `is-odd` package and `is-odd` package triggers build of `shared` package.
