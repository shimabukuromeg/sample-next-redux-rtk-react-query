import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../reducers';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { useMount } from '../hooks/pages/useApp';

const MyApp:NextPage<AppProps> = ({ Component, router }) => {
  const mounted = useMount(router);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ChakraProvider>
          {mounted ? <Component /> : null}
        </ChakraProvider>
      </PersistGate>
    </Provider>
  );
};

export default MyApp;
