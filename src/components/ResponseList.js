import React from "react";
import PropTypes from "prop-types";
import Response from "./Response";
import { useSelector } from "react-redux";
import { useFirestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";

function ResponseList(props) {

  useFirestoreConnect([{ collection: "responses" }]);

  const responses = useSelector((state) => state.firestore.ordered.responses);

  if (isLoaded(responses)) {
    return (
      <React.Fragment>
        <hr />
        {responses.map((response))}
      </React.Fragment >
    )
  }
}