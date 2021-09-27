import React, { useEffect, useState } from "react"
import './../../styleCont.css'

const ProfileStatusHooks = React.memo((props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status) 
    }, [props.status])
    
    
    let activeteEditMode = () => {
        setEditMode(true)
    }
    let  deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatusThunk(status)
    }

    let onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <span className="profile__Status" onClick={ activeteEditMode } >{props.status}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input autoFocus={true} placeholder="status" value={status} onChange={onStatusChange} onBlur={deactivateEditMode} type="text"  />
                </div>
            }
        </div>
    )
})

export default ProfileStatusHooks