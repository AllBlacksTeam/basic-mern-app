//http://eslint.org/docs/user-guide/configuring

module.exports = {
  //By default, ESLint uses Espree as its parser. You can optionally specify that a different parser should be used
  "parser": 'babel-eslint',
  //environment defines global variables that are predefined.
  "env": {
    //browser global variables.
    "browser": true,
    //CommonJS global variables and CommonJS scoping (use this for browser-only code that uses Browserify/WebPack).
    "commonjs": true,
    //enable all ECMAScript 6 features except for modules (this automatically sets the ecmaVersion parser option to 6).
    "es6": true,
    //Node.js global variables and Node.js scoping.
    "node": true
  },
  //An extends property value "eslint:recommended" enables a subset of core rules that report common problems, which have a check mark  on the rules page. The recommended subset can change only at major versions of ESLint.
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  //Setting parser options helps ESLint determine what is a parsing error.
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  //ESLint supports the use of third-party plugins. Before using the plugin you have to install it using npm.
  "plugins": [ "react" ],
  //ESLint comes with a large number of rules. You can modify which rules your project uses either using configuration comments or configuration files.
  "rules": {
    "linebreak-style": ["error","unix"],
    "semi": ["error","always"],
    "no-console": ["warn", { "allow": ["info", "error"] }]
  },
  //globals: The no-undef rule will warn on variables that are accessed but not defined within the same file. If you are using global variables inside of a file then it’s worthwhile to define those globals so that ESLint will not warn about their usage. You can define global variables either using comments inside of a file or in the configuration file.
};
