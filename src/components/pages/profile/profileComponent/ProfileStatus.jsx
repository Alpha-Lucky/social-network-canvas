import React from "react"
import './../styleCont.css'

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        title: "yooo"
    }

    activeteEditMode (){
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode (){
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={ this.activeteEditMode.bind(this) }>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true}  value={this.props.status} type="text"  onBlur={this.deactivateEditMode.bind(this)} />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus