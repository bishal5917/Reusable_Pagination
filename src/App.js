import React, { useState } from 'react'
import { users } from './dummydata'
import './App.css';
import './users.css'
import Users from './Users';
import Pagination from './Pagination';

function App() {

  const [currentpage, setCurrentPage] = useState(1)
  const itemperpage = 5

  //some indexes
  const lastitemindex = currentpage * itemperpage
  const firstitemindex = lastitemindex - itemperpage
  const currentitem = users.slice(firstitemindex, lastitemindex)
  //currentitem will have items between first and last index

  //length of our users array
  //console.log(users.length) 

  //getting nums from paginate as it is called there
  const paginate = (nums) => {
    setCurrentPage(nums)
  }

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
      <div className="Nums">
        <Pagination
          itemperpage={itemperpage}
          totalitems={users.length}
          paginate={paginate}
        />
      </div>

    </>
  );
}

export default App;
