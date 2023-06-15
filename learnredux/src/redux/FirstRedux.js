import React from "react";
import { connect } from "react-redux";
import { IncAction, DecAction } from "./actions";

function FirstRedux({ local_variable, IncAction, DecAction }) {
  return (
    <div>
      <center>
        <h1>{local_variable}</h1>
        <button onClick={() => IncAction(5)}>Increment</button>
        <button onClick={DecAction}>Decrement</button>
      </center>
    </div>
  );
}

//mapStateToProps: enables to use store values in react component(i.e, to be able to use state values as props)
const mapStateToProps = (state) => ({
  local_variable: state,
});

//mapDispatchToProps: for getting all functionalities (the functions which needs to be dispatched by the action creators)
export default connect(mapStateToProps, { IncAction, DecAction })(FirstRedux);
