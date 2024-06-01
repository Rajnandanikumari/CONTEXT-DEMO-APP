import {useContext} from "react"
import { CounterContext } from "../context/counter-context"


// eslint-disable-next-line react/prop-types
export const Message = ({msg,flag='S'})=>{
   const context = useContext(CounterContext);
    if(flag =='H'){
        return  (<h1 className ='alert alert-info'>{msg}</h1>)
    }
    return (<h3 className ='alert alert-success'>{msg}{context.countValue}</h3>)
}