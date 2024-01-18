import { useContext,useReducer } from "react";
import React from "react";
import TodoReducer from "../reducers/TodoReducer";
import { newTask,deleteTask,openForm } from "../actions/TodoActions";

const AppContext=React.createContext(); //Contex'as

const initialState={
    tasks:[
        {
            id:1,
            title:"Test task 1",
            description:"Test task 1 description"
        },
        {
            id:2,
            title:"Test task 2",
            description:"Test task 3 description"
        },
        {
            id:3,
            title:"Test task 3",
            description:"Test task 3 description"
        }
    ],
    isOpen:false
}

const AppProvider=({children})=>{  //duomenu tiekejas

    const [state,dispatch]=useReducer(TodoReducer,initialState) //dispatch-funckcija kuri gauna duomenis ir atlieka funkcija
    const addTask=(data)=>{
        dispatch(newTask(data))
    }
    const handleForm=(formStatus)=>{
        dispatch(openForm(formStatus))
    }
    const removeTask=(id)=>{
        dispatch(deleteTask(id))
    }
    return(
        <AppContext.Provider value={{
            ...state,
            addTask,
            handleForm,
            removeTask
        }}>
            {children}
        </AppContext.Provider>

    )
}

export const useGlobalContex=()=>{
    return useContext(AppContext)
}

export {AppContext,AppProvider}