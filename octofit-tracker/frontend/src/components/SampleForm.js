import React from 'react';

const SampleForm = () => (
  <form>
    <div className="mb-3">
      <label htmlFor="inputName" className="form-label">Name</label>
      <input type="text" className="form-control" id="inputName" placeholder="Enter name" />
    </div>
    <div className="mb-3">
      <label htmlFor="inputActivity" className="form-label">Activity</label>
      <select className="form-select" id="inputActivity">
        <option>Running</option>
        <option>Cycling</option>
        <option>Swimming</option>
      </select>
    </div>
    <button type="submit" className="btn btn-success">Submit</button>
  </form>
);

export default SampleForm;
