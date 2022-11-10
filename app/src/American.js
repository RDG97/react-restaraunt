export default function Amermenu(props) {
    let Amerfil = props.data.filter(ame =>
        ame.cuisine.title === 'american'
        );
        return (
        <>
        <div className=" container p-5 my-5 border border-3" id="Cajmenu">
        <div className="row bg-warning">
                {Amerfil.map(product => (
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