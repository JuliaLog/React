import React from "react";
import styless from './Paginator.module.css';


let Paginator = (totalUsersCount, pageSize, currentPage, onPageChanget) => {
    let pagesCount = Meth.ceil(totalUsersCount / pageSize);

    let pages = [];

    for (let i = 0; i <= pagesCount; i++) {
        pages.push(i);
    }
  return <div>
        {pages.map((p) => {
          return (
            <span
              className={currentPage === p && selectedPage}
              onClick={(e) => {
                onPageChanget(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div> 
}

export default Paginator;