import { useGlobalContex } from "../../context/TasksContext"
import Task from "../task/Task";
import AddTask from "../addTask/AddTask";

const Tasks=()=>{

    const {tasks,isOpen,handleForm}=useGlobalContex();
    
    console.log(isOpen)

    return(
        <div className="container">
        <h2 className="m-5 text-center">Tasks list</h2>
            <div className="m-3 text-center">
                {!isOpen && <button className="btn btn-primary" onClick={()=>{handleForm(true)}}>Add task</button>}
            </div>
            {isOpen?(<AddTask/>):(
            <ul className="list-group">
                {tasks.length && tasks.map((task,i)=>(
                    <Task 
                    key={i}
                    id={task.id}
                    title={task.title} 
                    desc={task.description} 
                    />
                ))}
            </ul>
            )}
        </div>
    )
}

export default Tasks