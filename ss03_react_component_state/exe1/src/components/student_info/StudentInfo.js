import React, { Component } from 'react'
 

export default class StudentInfo extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
      <div>
        <table className='table'>
            <thead>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Address</th>
            </thead>
            <tbody>
                {
                    this.props.list.map(item => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.address}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
      </div>
    )
  }
}
