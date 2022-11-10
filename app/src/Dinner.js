export default function Dmenu(props) {
        let DinFil = props.data.filter(din =>
            din.category.title === 'dinner'
            );
            console.log(DinFil)
            return (
            <>
            <div className=" container p-5 my-5 border border-3" id="Dmenu">
            <div className="row bg-warning">
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