import React from 'react';
import AppNavigator from "./app/navigation/AppNavigator";
import AppProvider from "./app/context/AppProvider";
import {Root} from "./app/theme/components/Root/Root";

const App = () => {
  return (
      <Root>
          <AppProvider>
              <AppNavigator />
          </AppProvider>
      </Root>
  );
};

export default App;
