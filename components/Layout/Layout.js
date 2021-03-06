import React, { Component } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

class Layout extends Component {
    render() {
        const { children } = this.props
        return (
            <div className={styles.container}>
                <Head>
                    <title>Create  App</title>
                    <meta name="description" content="Generated by create next app" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                {children}
                <footer>
                    
                </footer>
            </div>
        );
    }
}

export default Layout;