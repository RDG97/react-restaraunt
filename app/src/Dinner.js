export default function Dmenu(props) {
    // console.log(props.data)
        let DinFil = props.data.filter(din =>
            din.category.title === 'Dinner'
            );
            console.log(DinFil)
            
            
        
            return (
            <>
            <div className=" container p-5 my-5 border border-3" id="Dmenu">
            <div className="row bg-primary">
                    {DinFil.map(product => (
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