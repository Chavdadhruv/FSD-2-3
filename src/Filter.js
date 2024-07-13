// for applied filter to skip digit 3 from the ary and display all reamin digit
import React from "react"

function Filter(){
    const arr=[1,2,3,4,5,6,3,8,9,7,3]
    const newary=arr.filter((num)=>
    {
        if(num==3)
            {return false}
        else
        {return true}
    })
    var ary1=arr.join(",")
    var ary2=newary.join(",")
    return(<>
       <h2>Before Filter: {ary1}</h2>
       <h2>After Filter: {ary2}</h2>
    </>);
}

export default Filter