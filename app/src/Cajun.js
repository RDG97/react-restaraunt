export default function Cajmenu(props) {
    let CajFil = props.data.filter(caj =>
        caj.cuisine.title === 'cajun'
        );
        return (
        <>
        <div className=" container p-5 my-5 border border-3" id="Cajmenu">
        <div className="row bg-warning">
                {CajFil.map(product => (
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