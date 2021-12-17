import React, { useState, useEffect } from 'react'
import { users } from './dummydata'
import './App.css';
import './users.css'
import Users from './Users';

function App() {


  return (
    <>
      <div className="Info">
        <span className="id">ID</span>
        <span className="name">NAME</span>
        <span className="type">TYPE</span>
        <span className="node">NODE_ID</span>
      </div>
      {
        users.map((user) => (
          <Users key={user.node_id}
            idd={user.id}
            name={user.login}
            type={user.type}
            node_id={user.node_id}
          />
        ))
      }
    </>
  );
}

export default App;
