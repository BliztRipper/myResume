import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>{this.props.pageTitle} - Web and Mobile solution for your business and advertise </title>
                    <meta name="description" content={this.props.pageDesc} />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
