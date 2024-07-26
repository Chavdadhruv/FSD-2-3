

import React, { useContext } from "react";
import { cc } from './UC1'
import { c2 } from './UC2'
function UC3() {
    const mycss = useContext(cc)
    const data = useContext(c2)
    return (
        <h1 style={mycss}>Welcome to useContext tutorial {data}</h1>
    )
}
export default UC3