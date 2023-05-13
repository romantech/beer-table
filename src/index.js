import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ThemeProvider } from 'styled-components/macro';
import { createRoot } from 'react-dom/client';
import { Analytics } from '@vercel/analytics/react';
import theme from './Styles/theme';
import GlobalStyle from './Styles/globalStyle';
import Routes from './Routes';
import rootReducer, { rootSaga } from './Modules';
import 'antd/dist/antd.min.css';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);

const sagaMiddleware = createSagaMiddleware();
const enhancer =
  process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(sagaMiddleware))
    : composeWithDevTools(applyMiddleware(sagaMiddleware));

const store = createStore(rootReducer, enhancer);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Routes />
        </ThemeProvider>
      </PersistGate>
      <Analytics />
    </Provider>
  </React.StrictMode>,
);
