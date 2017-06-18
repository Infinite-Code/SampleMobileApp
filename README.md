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

 * ESLint
 * Jest
	 * Added tests with mocking
