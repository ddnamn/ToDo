
import { useState,ChangeEvent } from "react"
import { ITask } from "../interfaces/HomeInterfaces"
// import AddButton from "../components/AddButton"
// import TodoTask from "../components/TodoTask"


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
            <h1 className="font-bold text-4xl text-green-500 cursor-default"> TODO LIST 📝 </h1>

            <ul className="list-disc ">
               {/* try to split code */}
               {/* {todo.map((task:ITask,key:number )=><TodoTask task={task} key={key} />)} */}

               {todos.map((todo:ITask)=><li key={todo.id} onClick={()=>toggle(todo.id)} className={!todo.status?'line-through':''}>{todo.text}</li>) }

   
            </ul>

            {/* <AddButton/> */}
            <div className="flex gap-4 mt-4">
               <input value={task} type="text" placeholder="add todo item..." className="border-b-2 border-b-slate-400 h-8 bg-black bg-opacity-5   px-3  focus:outline-none" onChange={changeHandler}/>
               <button className="h-8 bg-green-400 w-20 p-2 rounded-lg hover:bg-green-500 flex items-center justify-center" onClick={addHandler}>ADD</button>
            </div> 
         </div>
     </>
   )
 }