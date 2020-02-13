import React, { Component } from 'react';

import Card2  from './Card2';
import Clock  from './Clock';
import Test1  from './Test1';
import TodoList  from './TodoList/ToDoList';

class AddUser extends Component {
    // constructor(props){
    //     super(props);

    //     this.state = {
    //     }
    // }

    render() {
        return (
            <div>
                <Card2 
                    title = "title2"
                    paragraph = "paragraph" />

                <Clock/>

                <Test1/>

                <TodoList/>
            </div>
        );
    }
}
export default AddUser;  