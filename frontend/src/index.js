import React from 'react';
import Route from './routes';
import {ApplicationProvider} from '@ui-kitten/components';
import {mapping, light as lightTheme} from '@eva-design/eva';

function App() {
  return (
    <>
      <ApplicationProvider mapping={mapping} theme={lightTheme}>
        <Route />
      </ApplicationProvider>
    </>
  );
}

export default App;
