
import { useState,ChangeEvent } from "react"
import { ITask } from "../interfaces/HomeInterfaces"
import TodoTask from "../components/TodoTask"
// import AddButton from "../components/AddButton"


export default function HomePage() {
   const [task, setTask] = useState<string>("")
   const [todos,setTodos]=useState<ITask[]>([{ id: 1, text: "tidur", status: false },
   { id: 2, text: "belajar", status: true },
   { id: 3, text: "ngoding", status: false },])

// get text 
   const changeHandler =(e:ChangeEvent<HTMLInputElement>) =>{
      setTask(e.target.value)
   }
   // add task
   const addHandler = ():void=>{   
      const newTask = {id:todos.length+1,text:task,status:true}
      setTodos([...todos,newTask])
      setTask('')
      console.table(todos)
   }
// mark as done 
   const toggle = (id:number)=>{
      setTodos(
         todos.map((todo)=>{if (todo.id === id ){
            return {...todo,status:!todo.status}
           
         }
         return todo
      })
      )
   }

   return (
      <>
         <div className="h-[100vh] flex justify-center items-center flex-col gap-2 bg-slate-200">
            <h1 className="font-bold text-4xl text-green-500 cursor-default "> TODO LIST 📝 </h1>

            <ul >
               
               {/* {todos.map((todo:ITask)=><li key={todo.id}  className={!todo.status?'line-through text-red-500 ':''}>{todo.text} <p onClick={()=>toggle(todo.id)}>✅</p></li>) } */}
               {/* try to split code */}
               {todos.map((todo:ITask)=><li key={todo.id} onClick={()=>toggle(todo.id)}  className={!todo.status?'bg-slate-400 text-red-500 hover:text-red-500 ':''} ><TodoTask  value={todo}/></li>)}
            </ul>

 
            <div className="flex gap-4 mt-4">
               <input value={task} type="text" placeholder="add todo..." className="border-b-2 border-b-slate-400 h-8 bg-black bg-opacity-5   px-3  focus:outline-none" onChange={changeHandler}/>
               <button className="outline-black outline text-black hover:text-white hover:outline-white h-8 bg-green-400 w-20 p-2 rounded-lg hover:bg-green-600 flex items-center justify-center font-bold"  onClick={addHandler}>ADD</button>
            </div> 


            {/* try to split code */}
            {/* <AddButton/> */}
         </div>
     </>
   )
 }