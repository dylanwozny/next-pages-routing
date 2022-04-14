import { createContext, useState } from "react";

const ToDoContext = createContext();

const ToDoProvider =({children}) =>{

  const [todos,setTodos] = useState({});
  const [editTodo, setEditTodo] = useState({});
  const [userId,setUserId] = useState();
 

  // test
  const accessContext = ()=>{
    console.log("you've accessed the context ");
  }

  // push current to dos
  const usersTodos = ({children})=>{
      setTodos({children});
  }


  return(
  <ToDoContext.Provider value={{
    accessContext,
    setTodos,
    todos,
    editTodo,
    setEditTodo,
    setUserId,
    userId,

  }}>{children}
  </ToDoContext.Provider>)

}

export {ToDoProvider,ToDoContext}