import React from 'react';

const DataTable = () => {
  const data = [
    { id: 1, name: 'Alice', activity: 'Running' },
    { id: 2, name: 'Bob', activity: 'Cycling' },
    { id: 3, name: 'Charlie', activity: 'Swimming' },
  ];

  return (
    <table className="table table-striped table-bordered">
      <thead className="table-dark">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Activity</th>
        </tr>
      </thead>
      <tbody>
        {data.map(row => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td>{row.activity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
