export default function Lmenu(props) {
    // console.log(props.data)
        let LunchFil = props.data.filter(lunch => //change name to meal (more genaric)
            lunch.category.title === 'Lunch'  //fix this line to make more dynamic change lunch to state (page)
            );
            console.log(LunchFil)
            
            
        
            return (
            <>
            <div className=" container p-5 my-5 border border-3" id="Lmenu">
            <div className="row bg-primary">
                    {LunchFil.map(product => (
                        <>
                <h1>{product.title}</h1>
                <h4>{product.description}</h4>
                <p>$ {product.price}</p>
                </>
              ))} 
                </div>
        </div>
              </>
            )
    }