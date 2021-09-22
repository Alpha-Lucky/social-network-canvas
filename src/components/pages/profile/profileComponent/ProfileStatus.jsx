import React from "react"
import './../styleCont.css'

class ProfileStatus extends React.Component {


    state = {
        editMode: false,
        status: this.props.status
    }

    activeteEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatusThunk(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status){
        this.setState({
            status: this.props.status
        })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span className="profile__Status" onClick={ this.activeteEditMode }>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onChange={this.onStatusChange} value={this.state.status} type="text"  onBlur={this.deactivateEditMode.bind(this)} />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus