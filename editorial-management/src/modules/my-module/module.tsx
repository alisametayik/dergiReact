import { FC, useEffect, useState } from "react";
import { getWeather } from "./store";

interface MyModuleProps{
    name: string
}

export const MyModule:FC<MyModuleProps> = (props) => {
    const {name} = props;
    const [count,setCount] = useState(0);

    useEffect(()=>{
        console.log("deneme")
        getWeather().then(weather => {
            console.log(weather);
        })
    },[])
    return <p>
        <button onClick={()=>{setCount(count+1)}}> count'u artır</button>
        {name}
        {count}
        </p>
}