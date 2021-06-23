import React from 'react';
import {connect} from "react-redux";
import { postLogin } from "../../redux/auth-reducer";
import Login from "./login";

class ContainerLogin extends React.Component<any, any> {
    render() {
        return <Login login={this.props.postLogin}/>;
    }
}

export default connect(null, {postLogin})(ContainerLogin)