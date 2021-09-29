import React, { Component } from 'react'

export default class Contact extends Component {
    render() {

        const a_list = ['1','2','3']

        return (
            <div>
                <h3>Contact Page</h3>
                <hr />

                <ul className='list-group'>
                    { a_list.map( num => (
                        <li className="list-group-item">Item</li>
                    ) ) }
                </ul>

            </div>
        )
    }
}
