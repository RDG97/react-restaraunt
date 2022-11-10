export default function Desmenu(props) {
        let DesFil = props.data.filter(des =>
            des.category.title === 'dessert'
            );
            return (
            <>
            <div className=" container p-5 my-5 border border-3" id="Desmenu">
            <div className="row bg-warning">
                    {DesFil.map(product => (
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