import React, { useState } from 'react';
import NavBar from './components/NavBar';
import DataTable from './components/DataTable';
import SampleForm from './components/SampleForm';
import SampleCard from './components/SampleCard';
import SampleModal from './components/SampleModal';

// new API components
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';

import './App.css';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <NavBar />
      <div className="container my-4">
        <h1 className="mb-4">OctoFit Tracker Dashboard</h1>
        <SampleCard />
        <SampleForm />
        <DataTable />
        {/* include API components to ensure they are used */}
        <Activities />
        <Leaderboard />
        <Teams />
        <Users />
        <Workouts />
        <button
          className="btn btn-primary mt-3"
          onClick={() => setShowModal(true)}
        >
          Show Modal
        </button>
        <SampleModal show={showModal} onHide={() => setShowModal(false)} />
      </div>
    </>
  );
}

export default App;
