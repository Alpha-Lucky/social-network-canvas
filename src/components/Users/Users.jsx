import React from 'react';
import Paginator from "../common/Paginator/Paginator";
import Preloader from '../common/Preloader/Preloader';
import User from "./User";
import styles from "./users.module.css"

let Users = ({ currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props }) => {
    return <div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
            totalItemsCount={totalUsersCount} pageSize={pageSize} />
        {props.isFetching ? <Preloader /> : <div className={styles.container__users}>{
                users.map(u => <User user={u}
                    followingInProgress={props.followingInProgress}
                    key={u.id}
                    unfollow={props.unfollow}
                    follow={props.follow}
                />
                )
            }
        </div>}
    </div>
}

export default Users;