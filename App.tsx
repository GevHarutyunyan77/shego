import React from "react";
import Main from "./Shego/Main";
import { Provider } from "react-redux";
import store, { persistor } from "./Shego/src/store/configureStore";
import { PersistGate } from "redux-persist/integration/react";
import Navigation from "./Shego/src/screens/navigation";


function App() {


  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigation/>
      </PersistGate>

    </Provider>


  );
}

export default App;
