import Bmenu from "./Breakfast";

function handleClick() {
    console.log('test')
}


let Break = document.getElementById('Bmenu')
function MealOptions() {
    const handleB = event => {
        let Break = document.getElementById('Bmenu')
        let menu = document.getElementById('menu')
        menu.remove()
        Break.classList.toggle('invis');
    }
    const handleL = event => {
        
        console.log('lunch');
    }
    const handleDin = event => {
        
        console.log('dinner');
    }
    const handleDes = event => {
        
        console.log('dessert');
    }
    return (
        <div className="container">
        <div className="d-flex justify-content-center"  >
            
            <div onClick={handleB} className="d-flex bg-primary border my-3 mx-3 justify-content-center align-items-center display-6" id="MealOp">
                <p>Breakfast</p>
            
            </div>
            <div onClick={handleL} className="d-flex bg-primary border my-3 mx-3 justify-content-center align-items-center display-6" id="MealOp">
                <p>Lunch</p>
            </div>
            </div>
            <div className="d-flex justify-content-center"  >
            <div onClick={handleDin} className="d-flex bg-primary border my-3 mx-3 justify-content-center align-items-center display-6" id="MealOp">
                <p>Dinner</p>
            </div>
            <div onClick={handleDes} className="d-flex bg-primary border my-3 mx-3 justify-content-center align-items-center display-6" id="MealOp">
                <p>Sweet Treats</p>
            </div>
            
        </div>
        </div>
    )
}

export default MealOptions
