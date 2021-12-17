import React, { useState, useEffect } from 'react'
import { users } from './dummydata'
import './App.css';
import './users.css'
import Users from './Users';

function App() {

  const [currentpage, setCurrentPage] = useState(1)
  const [itemperpage, setItemPerPage] = useState(5)

  //some indexes
  const lastitemindex = currentpage * itemperpage
  const firstitemindex = lastitemindex - itemperpage
  const currentitem = users.slice(firstitemindex, lastitemindex)
  //currentitem will have items between first and last index

  return (
    <>
      <div className="Info">
        <span className="id">ID</span>
        <span className="name">NAME</span>
        <span className="type">TYPE</span>
        <span className="node">NODE_ID</span>
      </div>
      {
        currentitem.map((user) => (
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
