export default function Bmenu(props) {
    let BreakFil = props.data.filter(brek =>
        brek.category.title === 'breakfast'
        );
        console.log(BreakFil)
        return (
        <>
        <div className="container p-5 my-5 border border-3" id="Bmenu">
        <div className="row bg-warning">
                {BreakFil.map(product => (
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