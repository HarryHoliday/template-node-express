## setting

```bash
npm init -y
npm install --save-dev eslint typescript
npx tsc --init
npx eslint --init
```

```text
? How would you like to use ESLint? To check syntax, find problems, and enforce code style
? What type of modules does your project use? JavaScript modules (import/export)
? Which framework does your project use? None of these
? Does your project use TypeScript? Yes
? Where does your code run? Node
? How would you like to define a style for your project? Use a popular style guide
? Which style guide do you want to follow? Airbnb (https://github.com/airbnb/javascript)
? What format do you want your config file to be in? JavaScript
Checking peerDependencies of eslint-config-airbnb-base@latest
The config that you've selected requires the following dependencies:

@typescript-eslint/eslint-plugin@latest eslint-config-airbnb-base@latest eslint@^5.16.0 || ^6.1.0 eslint-plugin-import@^2.18.2 @typescript-eslint/parser@latest
? Would you like to install them now with npm? Yes
Installing @typescript-eslint/eslint-plugin@latest, eslint-config-airbnb-base@latest, eslint@^5.16.0 || ^6.1.0, eslint-plugin-import@^2.18.2, @typescript-eslint/parser@latest
npm WARN template-node@1.0.0 No description
npm WARN template-node@1.0.0 No repository field.

+ eslint-config-airbnb-base@14.0.0
+ eslint-plugin-import@2.18.2
+ eslint@6.4.0
+ @typescript-eslint/parser@2.3.1
+ @typescript-eslint/eslint-plugin@2.3.1
added 67 packages from 45 contributors, updated 1 package and audited 412 packages in 5.841s
found 0 vulnerabilities

Successfully created .eslintrc.js file in /Users/harryholiday/dev/project/template-node
```

```bash
npm install --save-dev @types/node
npm install --save-dev prettier eslint-plugin-prettier eslint-config-prettier

mkdir -p ./src && touch ./src/index.ts
vim index.ts
```

```js
import path from 'path';

console.log(path.resolve(__dirname, './'));
```

```bash
npm install --save-dev webpack webpack-cli
npm install --save-dev eslint-loader
npm install --save-dev @babel/core babel-loader @babel/preset-typescript
npm install --save-dev dotenv dotenv-expand nodemon nodemon-webpack-plugin webpack-node-externals
npm install --save-dev ts-config-webpack-plugin
npm install --save-dev husky lint-staged
```

<!-- ```bash
npm install express
npm install --save-dev @types/express
npm install compression helmet
npm install --save-dev @types/helmet @types/compression
npm install @sentry/node@5.5.0
npm install pino pino-pretty
npm install --save-dev @types/pino
npm install express-pino-logger
``` -->
