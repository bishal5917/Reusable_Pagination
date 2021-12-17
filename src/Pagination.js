import React from 'react'

export default function Pagination({ itemperpage, totalitems }) {
    const itemarray = []

    for (let i = 1; i <= Math.ceil(totalitems / itemperpage); i++) {
        itemarray.push(i)
    }
    return (
        <>
            {
                itemarray.map(nums => (
                    <span key={nums}>{nums}</span>
                ))
            }
        </>
    )
}
