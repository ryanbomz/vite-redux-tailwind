import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchToDo } from "../../reducer/todoSlice";

const ToDoComponent= () =>{
    const dispatch = useDispatch()
    const todo =useSelector((state) => state.todos.todo)
    const status =useSelector((state) => state.todos.status)
    const error = useSelector((state)=> state.todos.error)

    useEffect (()=>{
        dispatch(fetchToDo())
    },[dispatch])
    return(  <div className="container">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, nesciunt!
    </div>
    
)}

export default ToDoComponent