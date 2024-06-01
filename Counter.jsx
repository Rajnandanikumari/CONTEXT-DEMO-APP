import {useState} from "react";
import {CounterContext} from "../context/counter-context"
import { Button } from "./Button"
import { Message } from "./Message"

export const Counter = ()=>{
    //let count=0;
    const [count,setCount] = useState(0);
    const changeCount = (val)=>{
        // console.log(val);
        val =='+'? setCount(count + 1):setCount(count - 1);
        // count++;
    //    setCount(count + 1); //Re-Render
        console.log('Change Count Call', count);
    }
    return(<>
    <CounterContext.Provider value={{countValue:count,updateCount:changeCount}}>
    <div className="container">
    <h1 className = 'alert alert-info text-center'>Counter App</h1>
     <Message msg = 'Counter App' flag = 'H'/>
    <Message msg = 'Count Value is' />
    <Button val= '+'/> &nbsp;
    <Button val= '-'/>
    </div>
    </CounterContext.Provider>
    </>
    )
}