import React from 'react';
import PropTypes from 'prop-types';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";

function reusableSurveyForm(props) {
  return (
    <React.Fragment>
      <Form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='q1'
          placeholder='Survey Question 1' />
        <input
          type='text'
          name='q1a1'
          placeholder='Question 1 Value 1' />
        <input
          type='text'
          name='q1a2'
          placeholder='Question 1 Value 2' />
        <input
          type='text'
          name='q1a3'
          placeholder='Question 1 Value 3' />
        <input
          type='text'
          name='q2'
          placeholder='Survey Question 2' />
        <input
          type='text'
          name='q2a1'
          placeholder='Question 2 Value 1' />
        <input
          type='text'
          name='q2a2'
          placeholder='Question 2 Value 2' />
        <input
          type='text'
          name='q2a3'
          placeholder='Question 2 Value 3' />
        <input
          type='text'
          name='q3'
          placeholder='Survey Question 3' />
        <input
          type='text'
          name='q3a1'
          placeholder='Question 3 Value 1' />
        <input
          type='text'
          name='q3a2'
          placeholder='Question 3 Value 2' />
        <input
          type='text'
          name='q3a3'
          placeholder='Question 3 Value 3' />
        <Button type='submit'>{props.buttonText}</Button>
      </Form>
    </React.Fragment >
  );
}
reusableSurveyForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default reusableSurveyForm;