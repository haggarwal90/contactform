import React from 'react';
import FlatButton from 'material-ui/FlatButton';

import './formdetails.style.scss';

const FormDetails = (props) => {
  const { data, onClose } = props;
  console.log('****Display form id**** ', data._id);
  return (
    <div className="form-details">
      <div className="form-details__header">
        <h4> Details </h4>
      </div>
      <div className="form-details__content">
        <div className="form-details__content--row">
          <div className="label"> First name </div> <div className="value"> {data.firstname} </div>
        </div>
        <div className="form-details__content--row">
          <div className="label">  Last name </div> <div className="value"> {data.lastname} </div>
        </div>
        <div className="form-details__content--row">
          <div className="label">  Email </div> <div className="value"> {data.email} </div>
        </div>
        <div className="form-details__content--row">
          <div className="label">  Telephone </div> <div className="value"> {data.telephone} </div>
        </div>
        <div className="form-details__content--row">
          <div className="label"> Address </div> <div className="value"> {data.address} </div>
        </div>
        <div className="form-details__content--row">
          <div className="label"> City </div> <div className="value"> {data.city} </div>
        </div>
        <div className="form-details__content--row">
          <div className="label"> State </div> <div className="value"> {data.state} </div>
        </div>
        <div className="form-details__content--row">
          <div className="label"> Zip </div> <div className="value"> {data.zip} </div>
        </div>
        <div className="form-details__content--row">
          <div className="label"> Comments </div> <div className="value"> {data.comments} </div>
        </div>
        <div className="form-details__close">
          <FlatButton label="Close" className="close" onClick={onClose}/>
        </div>
      </div>
    </div>
  )
}

export default FormDetails;