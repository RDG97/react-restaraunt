import Bmenu from "./Breakfast";

function handleClick() {
    console.log('test')
}


let Break = document.getElementById('Bmenu')
function MealOptions(props) {
    const handleB = event => {
        
        let Break = document.getElementById('Bmenu')
        let menu = document.getElementById('menu')
        if (menu != null) {
        menu.remove()
        }
        
        Break.classList.toggle('invis');
        
    }
    const handleL = event => {
        let Break = document.getElementById('Bmenu')
        let Break2 = document.getElementById('Lmenu')
        let menu = document.getElementById('menu')
        if (Break != null) {
            Break.remove()
        }
        if (menu != null) {
            menu.remove()
            }
        Break2.classList.toggle('invis');
       
    }
    const handleDin = event => {
        let Break = document.getElementById('Bmenu')
        let Break2 = document.getElementById('Lmenu')
        let Break3 = document.getElementById('Dmenu')
        let menu = document.getElementById('menu')
        if (Break != null) {
            Break.remove()
        }
        if (Break2 != null) {
            Break2.remove()
        }
        if (menu != null) {
            menu.remove()
            }
        
        Break3.classList.toggle('invis');
    }
    const handleDes = event => {
        let Break = document.getElementById('Bmenu')
        let Break2 = document.getElementById('Lmenu')
        let Break3 = document.getElementById('Dmenu')
        let Break4 = document.getElementById('Desmenu')
        let menu = document.getElementById('menu')
        if (Break != null) {
            Break.remove()
        }
        if (Break2 != null) {
            Break2.remove()
        }
        if (Break3 != null) {
            Break3.remove()
        }
        if (menu != null) {
            menu.remove()
            }
        Break4.classList.toggle('invis');
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
