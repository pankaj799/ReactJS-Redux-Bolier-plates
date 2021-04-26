import './App.css';
import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 

import { 
    withRouter
} from "react-router-dom";
import "antd/dist/antd.css";
import AppLayout from '../../hoc/Layout/Layout';

class App extends React.Component<any>{
    // componentDidMount(){
        
    // }

    render(){
        return(<AppLayout>
            Hello
        </AppLayout>)
    }
}

export default App;