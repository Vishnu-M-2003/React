function Array({fruit}){
    return(
        <div>
            <p>{
               fruit.map((item) => 
               <li>{item}</li>
               )
            }</p>
        </div>
    )
}

export default Array