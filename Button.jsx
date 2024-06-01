import { useContext } from "react"
import { CounterContext } from "../context/counter-context";

// eslint-disable-next-line react/prop-types
export const Button = ({val})=>{
   const context = useContext(CounterContext);
    return (<button onClick={()=>{
        context.updateCount(val);
     }} className = 'btn btn-primary'>{val}</button>)
}