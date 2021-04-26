import Layout from "antd/lib/layout/layout";
import React, { Component } from "react";
import './Layout.css';
import AppHeader from "../../containers/header/header";
import AppSideBar from "../../containers/side-bar/side-bar";

class AppLayout extends Component<any>{
    render(){
        return(
            <Layout className="layout" style={{backgroundColor: 'white'}}>
                <AppHeader />
                    <Layout>
                        <AppSideBar />
                        {this.props.children}    
                    </Layout>
            </Layout>
        )
    }
}

export default AppLayout;