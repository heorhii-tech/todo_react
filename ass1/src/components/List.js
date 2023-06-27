import React, {Component} from 'react';
import './List.css'


class List extends Component {
    
    

    render() {
        const { tasks } = this.props;
        console.log(this.props)

        console.log(tasks)


        return (
            <div className='container'>
                <div className="list_wrapper">
                    <ul>
                        {tasks.map((task , index)=>

                        <li key={index}>{task.task}{task.desc}
                        <button onClick={this.props.deleteTask}>Delete</button></li>
                        )}

                    </ul>
                </div>

            </div>
        );
    }
    
}

export default List;