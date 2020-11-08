import React from 'react';
import { Component } from 'react';
import Search from './Search';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            originalList: []
        }
        this.sortArray = this.sortArray.bind(this);
        this.sortByName = this.sortByName.bind(this);
        this.searchByName = this.searchByName.bind(this);
    }


    componentDidMount() {
        fetch(`https://randomuser.me/api/?results=25&nat=us&inc=name,email,phone,id,picture`)
            .then(res => res.json())
            .then(json => {
                this.setState({ employees: this.sortArray(json.results) })
                this.setState({ originalList: this.sortArray(json.results) })
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

    searchByName(name) {
        if (!name) {
            this.setState({ employees: this.state.originalList });
            return;
        }
        let searchResults = this.state.employees.filter(employee => {
            return (employee.name.first.toUpperCase() === name.toUpperCase())
        })
        this.setState({ employees: searchResults });
    }


    render() {
        let employeeTable = this.state.employees.map((employee, index) => {
            return (

                <tr key={index}>
                    <td><img src={ employee.picture.thumbnail } /></td>
                    <td>{`${ employee.name.first } ${ employee.name.last }`} </td>
                    <td>{ employee.email } </td>
                    <td>{ employee.phone } </td>
                </tr>
            )
        })
        return (

            <div className='Container'>
                <Search searchHandler={ this.searchByName } />
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
                        { employeeTable }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Directory;



