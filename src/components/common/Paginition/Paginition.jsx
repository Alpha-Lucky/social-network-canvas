import React from 'react';
import './paginition.css'



let Paginition = ({ totalUsersCount, pageSize, currentPage, onPageChange }) => {

  let pagesCount = Math.ceil(totalUsersCount / pageSize)
  let pages = []
  for (let i = 1; i <= pagesCount; i++) { pages.push(i) }

  return (
    <div className="colorText" >
      {pages.map(p => {
        return <span className={currentPage === p && "activ__span"} key={p} onClick={(e) => { onPageChange(p) }} >{p}</span>
      })}
    </div>
  )
}

export default Paginition


