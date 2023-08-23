  import { ITask } from "../interfaces/HomeInterfaces";

  type data = {
  
    value:ITask
  }

  export default function TodoTask({value}:data) {
   
    return (
      <>
        <p >{value.text}</p>
      </>
    )
  }
