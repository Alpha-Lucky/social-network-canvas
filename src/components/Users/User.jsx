import React from 'react';
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";

let User = ({user, followingInProgress, unfollow, follow}) => {
    return (
       <div className={styles.container__oneUser}>
                    <div className={styles.box_ava}>
                       <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto}
                             className={styles.userPhoto}/>
                       </NavLink>
                       <div>
                        {user.followed
                            ? <button className="submit" disabled={followingInProgress
                                .some(id => id === user.id)}
                                      onClick={() => { unfollow(user.id) }}>
                                Unfollow</button>
                            : <button className="submit" disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => { follow(user.id) }}>
                                      Follow</button>}

                    </div>
                    </div>

                <div className={styles.box_description}>
                    <div>
                        <div className={styles.description__username}>
                        <span>{user.name}</span>
                        </div>
                        <div className={styles.description__status}>
                        <span className={styles.span__status}>{user.status}</span>
                        </div>
{/*                         <span>{"user.location.country"}</span>
                        <span>{"user.location.city"}</span> */}
                    </div>
                </div>
            </div>)
}

export default User;