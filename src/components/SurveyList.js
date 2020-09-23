import React from "react";
import PropTypes from "prop-types";
import Survey from "./Survey";
import { useFirestoreConnect, isLoaded } from "react-redux-firebase";
import { useSelector } from "react-redux";

function SurveyList(props) {
  useFirestoreConnect([{ collection: "surveys" }]);

  const surveys = useSelector((state) => state.firestore.ordered.surveys);

  if (isLoaded(surveys)) {
    return (
      <React.Fragment>
        { surveys.map((survey) => {
          return (
            <Survey
              whenSurveyClicked={props.onSurveySelection}
              name={survey.name}
              id={survey.id}
              key={survey.key}
            />
          );
        })}
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h3>Loading... Jesus! Be patient!</h3>
      </React.Fragment>
    );
  }
}
SurveyList.propTypes = {
  onSurveySelection: PropTypes.func,
};

export default SurveyList;