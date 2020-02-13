import React, { Component } from 'react';

import AddUser from './components/AddUser';

class Users extends Component {
    constructor(props){
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <div>
                users page

                <AddUser/>
                
            </div>
        );
    }
}
export default Users;  