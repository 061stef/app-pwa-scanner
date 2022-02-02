import React, { Component } from 'react';
import { call, CDN_BASE_PATH } from '../../pages/utils/lib';
import styles from './login.module.css'
import Image from 'next/image';

class LoginComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: null,
            password: null
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    async componentDidMount(){
        const api_call = await call('GET', null, 'articoli/congressi', {});
        console.log(api_call);
    }

    onChange(evt){
        const { name, value } = evt.target;
        this.setState({
            [name]: value
        })
    }
    async onSubmit(e){
        e.preventDefault();
        const call_result = await call('GET', null, 'articoli/congressi', {});

    }
    render() {
        return (
            <div className={styles.container}>
                <img src={`${CDN_BASE_PATH}/content/nuovo-logo-fisascat.png`} alt='Logo Fisascat' title='Logo Fisascat' />
                <form className={styles.form} onSubmit={(e) => this.onSubmit(e)}>
                    <label>
                        <small>Email</small>
                        <input type={'email'} name='email' placeholder='Inserisci la tua email' onChange={(e) => this.onChange} />
                    </label>
                    <label>
                        <small>Password</small>
                        <input type={'password'} name='password' placeholder='Inserisci la password' onChange={(e) => this.onChange} />
                    </label>
                    <button type='submit'>Login</button>
                </form>
            </div>
        );
    }
}

export default LoginComponent;