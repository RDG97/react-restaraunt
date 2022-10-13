//import pageTest from "."
//let facts
//pageTest()


export default function Bmenu(props) {
// console.log(props.data)
    let BreakFil = props.data.filter(brek =>
        brek.category.title === 'Breakfast'
        );
        console.log(BreakFil)
        // let breakItems = [];
        // for (let i = 0; i < BreakFil.length; i++) {
        //     breakItems.push(
        
    
        return (
        <>
        <div className="invis container p-5 my-5 border border-3" id="Bmenu">
        <div className="row bg-primary">
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