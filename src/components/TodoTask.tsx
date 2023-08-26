
import { ITodo } from "../interfaces/TodoInterface";

  export default function TodoTask({value}:ITodo) {
   
    return (
      <>
        <p >{value.text}</p>
      </>
    )
  }
