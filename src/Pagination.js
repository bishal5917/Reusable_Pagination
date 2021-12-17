import React from 'react'

export default function Pagination({ itemperpage, totalitems ,paginate}) {
    const itemarray = []

    for (let i = 1; i <= Math.ceil(totalitems / itemperpage); i++) {
        itemarray.push(i)
    }
    return (
        <>
            {
                itemarray.map(nums => (
                    <span onClick={() => paginate(nums)}
                        key={nums}>{nums}</span>
                ))
            }
        </>
    )
}
