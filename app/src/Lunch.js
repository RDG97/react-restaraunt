export default function Lmenu(props) {
    // console.log(props.data)
        let LunchFil = props.data.filter(lunch =>
            lunch.category.title === 'Lunch'
            );
            console.log(LunchFil)
            
            
        
            return (
            <>
            <div className="invis container p-5 my-5 border border-3" id="Lmenu">
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