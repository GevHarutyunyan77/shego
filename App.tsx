import React from "react";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {SafeAreaView} from "react-native";

import store, {persistor} from "./src/store/configureStore";
import Navigation from "./src/screens/navigation";

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <SafeAreaView style={{flex: 1}}>
                    <Navigation/>
                </SafeAreaView>
            </PersistGate>
        </Provider>
    );
}

export default App;
