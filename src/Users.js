import React from 'react'
import './users.css'

export default function Users({ idd,name, type, node_id }) {
    return (
        <>
            <div className="usersList">
                <span className="id">{idd}</span>
                <span className="name">{name}</span>
                <span className="type">{type}</span>
                <span className="node">{node_id}</span>
            </div>
        </>
    )
}
