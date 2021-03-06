import React, { Component } from 'react';
import dynamic from "next/dynamic";
const QrReader = dynamic(() => import("react-qr-reader"), { ssr: false });

class scanner extends Component {
    constructor(props){
        super(props);
        this.state = {
            result : ''
        }
    }
    handleScan = data => {
        if (data) {
            this.setState({
                result: data
            })
        }
    }
    handleError = err => {
        console.error(err)
    }
    render() {
        return (
            <div>
                <QrReader
                    delay={300}
                    onError={this.handleError}
                    onScan={this.handleScan}
                    style={{ width: '100%' }}
                />
                <p>{this.state.result}</p>
            </div>
        )
    }
}

export default scanner;