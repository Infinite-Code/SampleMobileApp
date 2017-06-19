Sample React Native Mobile App
==============================

Just a starter project that defines a simple structure that should be usable for future projects.

The following plugins have been added:

 * `react-navigation`
	 * Added `DrawerNavigator` and `TabNavigator`
 * `redux`, `react-redux`, `redux-persist`, `redux-thunk`
	 * Please check code in `main.js` and also the following folders
		 * `containers`, `reducers`, `actions`
	 * App will automatically load data from storage
	 * A loading screen will be shown, _deliberately slowed down_
	 * Only `test` reducer is whitelisted to be persisted

Also configured the following:

 * Jest
	 * Added tests with mocking
 * ESLint
 * Flow
	 * Basic configuration

Setup ESLint
------------
To make ESLint work properly with Flow, follow the instructions below. Normally it is easier to setup `eslint` globally, so that your editors can access it, most modern editors should have support for `eslint`:

```
npm install -g eslint
npm install -g babel-eslint
npm install -g eslint-plugin-flowtype
npm install -g eslint-plugin-react
```

refs https://github.com/gajus/eslint-plugin-flowtype#installation
