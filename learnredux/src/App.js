import React from "react";
import { Provider } from "react-redux";

/*Imports required for basic redux application*/
// import FirstRedux from "./redux/FirstRedux";
// import store from "./redux/store";

/*Imports required for cart application*/
import Home from "./reduxtoolkit/Home";
import { cartStore } from "./reduxtoolkit/redux/Store";

const App = () => {
  return (
    <div>
      {/* Provider is used to give access to the store for the components which are
    wrapped inside it. It is similar to the context api. */}

      {/* Application built using redux */}
      {/* <Provider store={store}>
        <FirstRedux />
      </Provider> */}

      {/* Application built using reduxtoolkit */}
      <Provider store={cartStore}>
        <Home />
      </Provider>
    </div>
  );
};

export default App;
