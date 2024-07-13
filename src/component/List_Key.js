import React from "react"

function List_Key(){
    
   const ary=[{id:1,name:"Ken"},{id:2,name:"Noah"},{id:3,name:"Mark"}]
    return(<ul>
       {
        ary.map((value)=>{
            return <li key={value.id.toString()}>
                {value.name}
            </li>
        })
        }
    </ul>);
}

export default List_Key