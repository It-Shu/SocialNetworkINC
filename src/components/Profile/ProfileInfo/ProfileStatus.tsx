import React from 'react';
import {UpdateStatusUserType} from "../../../redux/profile-reducer";

type ProfileStatusType = {
   // status: UpdateStatusUserType | null
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusType> {

    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
        // this.state.editMode = true
        // this.forceUpdate() // метод forceUpdate() перерисовывает стейт, но лучше его не использовать!!!
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status}/>
                </div>
                }
            </div>
        )
    }
}
