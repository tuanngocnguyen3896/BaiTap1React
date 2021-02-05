import React, { Component } from 'react'
import BT3Header from './BT3Header'
import BT3Footer from './BT3Footer'
import BT3Content from './BT3Content'

export default class BaiTapLayout extends Component {
    render() {
        return (
            <div>
                <BT3Header/>
                <BT3Content/>
                <BT3Footer/>
            </div>
        )
    }
}
