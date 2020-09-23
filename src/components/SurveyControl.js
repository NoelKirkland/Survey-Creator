import React from 'react';
import AddSurveyForm from "./AddSurveyForm";
import SurveyList from "./SurveyList";
import SurveyDetail from "./SurveyDetail";
import SurveyEdit from "./SurveyEdit";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from "./../actions";
import { withFirestore, isLoaded } from "react-redux-firebase";

// Need to update the import statements ^

class SurveyControl extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      selectedSurvey: null,
      editing: false
    };
  }


}

export default SurveyControl;