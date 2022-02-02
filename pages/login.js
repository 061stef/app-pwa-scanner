import React, { Component } from 'react';
import Layout from '../components/Layout/Layout';
import LoginComponent from '../components/LoginComponent/LoginComponent';

class Login extends Component {
    render() {
        return (
            <Layout>
                <LoginComponent />
            </Layout>
        );
    }
}

export default Login;