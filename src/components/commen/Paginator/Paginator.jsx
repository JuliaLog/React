import React from "react";
import styless from './Paginator.module.css';


let Paginator = (totalUsersCount, pageSize, currentPage, onPageChanget) => {
    let pagesCount = Meth.ceil(totalUsersCount / pageSize);

    let pages = [];

    for (let i = 0; i <= pagesCount; i++) {
        pages.push(i);
    }
  return <div className={cn(styles.paginator)}>
    { portionNumber > 1 &&
    <button onClick={() => { setPortionNumber(portionNumber - 1)}}>PREV</button>}
        {pages
        .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map((p) => {
          return (
            <span
              className={cn ({
                [style.selectedPage]: currentPage === p}, styles.pageNumber) }
                key={p}
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