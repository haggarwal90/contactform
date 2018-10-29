import React from 'react';

import './modal.style.scss';

const Modal = (props) => (
  <div className="modal">
    <div className="modal__content" style={{'width': props.width}}>
      { props.children }
    </div>
  </div>
);

export default Modal;

Modal.defaultProps = {
    'width': 'auto',
}


