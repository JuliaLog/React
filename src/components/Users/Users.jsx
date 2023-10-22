import React from "react";
import Paginator from "../commen/Paginator/Paginator";


let Users = ( {currentPage, totalUsersCount, pageSize, onPageChanget, users, ...props} ) => {
  return (
    <div>
      <Paginator currentPage={currentPage} onPageChanget={onPageChanget} totalUsersCount={totalUsersCount} pageSize={pageSize} />
      <div>
          {users.map((u) => <User user = {u} 
                                  followingInProgress={props.followingInProgress} 
                                  key={u.id} 
                                  unfollow={props.unfollow}
                                  follow={props.follow}
                                  /> 
                )}
      </div>
    </div>
  );
}

export default Users;