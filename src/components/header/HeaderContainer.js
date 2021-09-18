import React from 'react';
import { connect } from 'react-redux';
import { headerApi } from '../../api/api';
import { setAutoUserData } from '../../redux/authReducer';
import Header from './Header';


class HeaderContainer extends React.Component {

    componentDidMount() {
            headerApi.auth().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login } = data.data
                this.props.setAutoUserData(id, email, login)
            }
        })
      }

    render() { 
        return(
            <Header {...this.props} />
    )}
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {setAutoUserData}) (HeaderContainer)