import React from 'react';
import AddSurveyForm from "./NewSurveyForm";
import SurveyList from "./SurveyList";
import SurveyDetail from "./SurveyDetail";
import SurveyEdit from "./SurveyUpdate";
import { connect } from 'react-redux';
import * as a from "./../actions";
import { withFirestore, isLoaded } from "react-redux-firebase";



class SurveyControl extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      selectedSurvey: null,
      editing: false
    };
  }

  /*   componentDidMount() {
      this.waitTimeUpdateTimer = setInterval(
        () => this.updateTicketElapsedWaitTime(),
        6000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.waitTimeUpdateTimer);
    }
  
    updateTicketElapsedWaitTime = () => {
      const { dispatch } = this.props;
    }; */

  handleClick = () => {
    if (this.state.selectedSurvey != null) {
      this.setState({
        selectedSurvey: null,
        editing: false,
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  };

  handleAddingNewSurveyToList = () => {
    const { dispatch } = this.props;
    const action = a.toggleForm();
    dispatch(action);
  };

  handleChangingSelectedSurvey = (id) => {
    this.props.firestore
      .get({ collection: "surveys", doc: id })
      .then((survey) => {
        const firestoreSurvey = {
          name: survey.get("name"),
          id: survey.id,
        };
        this.setState({ selectedSurvey: firestoreSurvey });
      });
  };

  handleEditClick = () => {
    this.setState({ editing: true });
  };

  handleEditingSurveyInList = () => {
    this.setState({
      editing: false,
      selectedSurvey: null,
    });
  };

  handleDeletingSurvey = (id) => {
    this.props.firestore.delete({ collection: "surveys", doc: id });
    this.setState({ selectedSurvey: null });
  };

  render() {
    const auth = this.props.firebase.auth();
    if (!isLoaded(auth)) {
      return (
        <React.Fragment>
          <h1>Loading...</h1>
        </React.Fragment>
      );
    }
    if (isLoaded(auth) && auth.currentUser == null) {
      return (
        <React.Fragment>
          <h1>You must be signed in to access the surveys.</h1>
        </React.Fragment>
      );
    }
    if (isLoaded(auth) && auth.currentUser != null) {
      let currentlyVisibleState = null;
      let buttonText = null;
      if (this.state.editing) {
        currentlyVisibleState = (
          <SurveyEdit
            survey={this.state.selectedSurvey}
            onEditSurvey={this.handleEditingSurveyInList}
          />
        );
        buttonText = "Return to Survey List";
      } else if (this.state.selectedSurvey != null) {
        currentlyVisibleState = (
          <SurveyDetail
            survey={this.state.selectedSurvey}
            onClickingDelete={this.handleDeletingSurvey}
            onClickingEdit={this.handleEditClick}
          />
        );
        buttonText = "Return to Survey List";
      } else if (this.props.formVisibleOnPage) {
        currentlyVisibleState = (
          <AddSurveyForm
            onNewSurveyCreation={this.handleAddingNewSurveyToList}
          />
        );
        buttonText = "Return to Survey List";
      } else {
        currentlyVisibleState = (
          <SurveyList onSurveySelection={this.handleChangingSelectedSurvey} />
        );
        buttonText = "Add Survey";
      }

      return (
        <React.Fragment>
          {currentlyVisibleState}
          <button onClick={this.handleClick}>{buttonText}</button>
        </React.Fragment>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    formVisibleOnPage: state.formVisibleOnPage,
  };
};

SurveyControl = connect(mapStateToProps)(SurveyControl);

export default withFirestore(SurveyControl);