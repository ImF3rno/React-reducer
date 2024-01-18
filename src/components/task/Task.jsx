import { useGlobalContex } from "../../context/TasksContext";

const Task = (props) => {
  const {removeTask}=useGlobalContex()
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">{props.title}:{props.desc}
        <button className="btn btn-danger" onClick={()=>removeTask(props.id)}>Salinti</button>
    </li>
  );
};

export default Task;
