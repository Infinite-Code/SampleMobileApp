Sample React Native Mobile App
==============================

Just a starter project that defines a simple structure that should be usable for future projects.

The following plugins have been added:

 * `react-navigation`
	 * Added `DrawerNavigator` and `TabNavigator`
 * `redux`, `react-redux`
	 * Please check `main.js` and also the following folders
		 * `containers`, `reducers`, `actions`
	 * For `redux-persist`
		 * App will automatically load data from storage
		 * A loading screen will be shown (NOTE: deliberately slowed down)
		 * Only `test` reducer is whitelisted to be saved

Also configured the following:

 * ESLint
 * Jest
	 * Added tests with mocking
