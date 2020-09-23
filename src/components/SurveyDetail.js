import React from 'react';
import PropTypes from 'prop-types';


function SurveyDetail(props) {
  const { survey } = props;

  return (
    <React.Fragment>
      <h1>{survey.name}</h1>
        < form >
          <label>{survey.q1}</label>
          <select>
            <option value=''>{survey.q1a1}</option>
            <option value=''>{survey.q1a2}</option>
            <option value=''>{survey.q1a3}</option>
          </select >

          <label>{survey.q2}</label>
          <select>
            <option value=''>{survey.q2a1}</option>
            <option value=''>{survey.q2a2}</option>
            <option value=''>{survey.q2a3}</option>
          </select >

          <label>{survey.q3}</label>
          <select>
            <option value=''>{survey.q3a1}</option>
            <option value=''>{survey.q3a2}</option>
            <option value=''>{survey.q3a3}</option>
          </select >
        </form >
      </React.Fragment>
  );
}

export default SurveyDetail;