

import React, { createContext } from "react";
import UC3 from './UC3'
const c2 = createContext()
function UC2() {
    return (
        <>
            <c2.Provider value="student">
                <UC3 />
            </c2.Provider>
        </>
    )
}
export default UC2
export { c2 }
