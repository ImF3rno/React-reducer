export const newTask=(data)=>{
    return{
        type:"Add task",
        payload:data
    }
}

export const deleteTask=(id)=>{
    return{
        type:"Remove task",
        payload:id
    }
}

export const openForm=(formStatus)=>{
    return{
        type:"Open form",
        payload:formStatus
    }
}