// for applied filter to skip digit 3 from the ary and display all reamin digit
import React from "react"

function Filter(){
    const ary=[1,2,3,4,5,6,3,8,9,7,3]
    const nary=ary.filter((num)=>
    {
        if(num==3)
            {return false}
        else
        {return true}
    })
    var ary1=ary.join(",")
    var ary2=nary.join(",")
    return(<>
       <h2>Before Filter: {ary1}</h2>
       <h2>After Filter: {ary2}</h2>
    </>);
}

export default Filter