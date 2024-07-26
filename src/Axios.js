// npm install axios
// api to fetch data for display without stringify or parser
// axios get(url) then(data) catch()catch for if get error

import axios from 'axios'
import React, { useState, useEffect } from "react";
const baseURL = "https://dog.ceo/api/breeds/image/random"
export default function API(){
    const [post, setpost] = useState(" ")
    useEffect(() => {
        axios.get(baseURL).then((response) => {
            console.log(response.data);
            setpost(response.data)
        })
            .catch((error) => {
                console.log(error)
            })
    })

    return(
        <div>
            <img src={post.message} width={"500px"} height={"640px"} />
        </div>
    )
}