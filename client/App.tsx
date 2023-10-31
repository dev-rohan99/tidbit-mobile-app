/* eslint-disable */
import React, { useEffect } from 'react';
import { LogBox } from 'react-native';
import { StatusBar } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import Main from './src/navigations/Main';
import Auth from './src/navigations/Auth';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './src/redux/store';
import { loadUser } from './src/redux/actions/userAction';
import Loader from './src/components/Loader';
LogBox.ignoreAllLogs();

const App = () => {

  return (
    <Provider store={store}>
      <AppStack/>
    </Provider>
  )
}

const AppStack = () => {
  
  const { isAuthenticated, loading } = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  
  useEffect(() => {
    loadUser()(dispatch);
  }, []);

  return (
    <>
    
      <>
        <StatusBar
          animated={true}
          backgroundColor={"#fff"}
          barStyle={"dark-content"}
          showHideTransition={"fade"}
        />
      </>
      <>
        {
          loading ? (
            <Loader />
          ) : (
            <>
              {
                isAuthenticated ? (
                  <NavigationContainer>
                    <Main/>
                  </NavigationContainer>
                ) : (
                  <NavigationContainer>
                    <Auth/>
                  </NavigationContainer>
                )
              }
            </>
          )
        }
      </>
      
    
    </>
  );
}

export default App;
