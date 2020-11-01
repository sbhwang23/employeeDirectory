import React from 'react';
import { Component } from 'react';

import Search from './Search.js'

class Directory extends Component {

    constructor(props) {
        super(props)
        this.state = {
            employees: [],
            
        };
        this.sortArray = this.sortArray.bind(this);
        this.sortByName = this.sortByName.bind(this);
    }


    componentDidMount() {
        fetch(`https://randomuser.me/api/?results=25&nat=us&inc=name,email,phone,id,picture`)
            .then(res => res.json())
            .then(json => {
                this.setState({ employees: this.sortArray(json.results) })
            })
    };

    sortArray(arr) {
        return arr.sort((a, b) => {
            let keyA = a.name.first,
                keyB = b.name.first;

            if (keyA < keyB) return -1;
            if (keyA > keyB) return 1;
            return 0
        });
    }
    sortByName() {
        let sortedEmployee = this.sortArray(this.state.employees);
        this.setState({ employees: sortedEmployee });
    }



    render() {
        let employeeTable = this.state.employees.map((employee) => {
            return (

                <tr>
                    <th scope ='row'><img src={employee.picture.thumbnail} /> </th>
                    <th>{`${employee.name.first} ${employee.name.last}`} </th>
                    <th>{employee.email} </th>
                    <th>{employee.phone} </th>
                </tr>
            )
        })
        return (
            
            <div className='Container'>
                <table className='table'>
                    <thead className='thead'>
                        <tr>
                            <th scope='col'>Headshot </th>
                            <th scope='col'>Name </th>
                            <th scope='col'>Email </th>
                            <th scope='col'>Phone </th>
                        </tr>
                    </thead>
                    <tbody>
                        {employeeTable}
                    </tbody>
                </table>
            </div>
           
        )

    }

}

export default Directory;



