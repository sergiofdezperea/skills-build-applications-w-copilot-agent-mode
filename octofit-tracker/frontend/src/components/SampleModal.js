import React from 'react';

const SampleModal = ({ show, onHide }) => {
  if (!show) return null;
  return (
    <div className="modal d-block" tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button type="button" className="btn-close" aria-label="Close" onClick={onHide}></button>
          </div>
          <div className="modal-body">
            <p>Modal body content goes here.</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onHide}>Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SampleModal;
