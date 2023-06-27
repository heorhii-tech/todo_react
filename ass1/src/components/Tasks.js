import './Tasks.css'
import List from "./List";
import React, { useState, useEffect, useRef } from 'react';

function Tasks() {
    const [tasks, setTasks] = useState([])
    const [errors, setErrors] = useState([])
    const taskRef = useRef(null);
    const descRef = useRef(null);




    let addTask = () => {
        let taskValue = taskRef.current.value;
        let descValue = descRef.current.value;
        
        if (taskValue.trim() === '' ){
           setErrors('can not be empty')



        }else if(descValue.trim() === ''){
            setErrors('can not be empty')
        }


        else {
            const newTask = {task: taskValue, desc: descValue}

            let updateTasks = [...tasks, newTask]
            setTasks(updateTasks)
            setErrors('');
        }
        


        taskRef.current.value = ''
        descRef.current.value = ''
    }
    const deleteTask = (index) => {
        const updateTasks = [...tasks];
        updateTasks.splice(index, 1)
        setTasks(updateTasks)
    }

    return (
        <div className='container'>
            <div className="form_wrapper">
                <input   ref={taskRef}   maxLength={20} type="text"/>
                {errors}
                <input  ref={descRef}   maxLength={50} type="text"/>
                <button onClick={addTask}>Send</button>
            </div>
            <div className="output_wrapper"><List tasks={tasks} deleteTask={deleteTask}/>

            </div>

        </div>)
}

export default Tasks
