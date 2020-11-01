import React from 'react';
import { Component } from 'react';
import Employees from './Employees.js';
import Search from './Search.js'

class Directory extends Component {

    state = {
        employees: [],
        
    };

    componentDidMount = () => {
        fetch(`https://randomuser.me/api/?results=25&nat=us&inc=name,email,phone,id,picture`)
            .then(res => res.json())
            .then(json => {
                this.setState({ employees: json.results })
            })
    };

   
}

export default Directory;



