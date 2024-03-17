import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { RouterProvider } from 'react-router-dom';
import { routerPager } from './router/router';
import { ConfigProvider, theme } from 'antd';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { IsLoadingAuth } from './features/auth/IsLoadingAuth';
const router = routerPager
const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider theme={{algorithm:theme.darkAlgorithm}}>
        <IsLoadingAuth>
          <RouterProvider router={router}/>
        </IsLoadingAuth>
      </ConfigProvider>
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
