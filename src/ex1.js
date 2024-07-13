function example1(){
    const date=new Date().toLocaleDateString()
    const time =new Date().toLocaleTimeString()
    return(
        <div>
            <h1 style={{color:"blue",fontStyle:"italic",fontSize:"15px",backgroundColor:"red"}}>Demo code for Que1 ex1</h1>
            <ol style={{textAlign:"center",display:"inline-block"}}>
                <li>Apple</li>
                <li>lichi</li>
                <li>kiwi</li>
                <li>pineapple</li>
                <li>strawberry</li>
            </ol>
            <h6>current Date:{date}</h6>
            <h6>current time:{time}</h6>
        </div>
    )
}
export default example1