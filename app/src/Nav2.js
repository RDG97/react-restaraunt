function Nav2() {
    return (
        <div className="nav bg-dark text-light text-centerd-flex  mx-auto justify-content-center" id="nav">
       <ul className="nav flex-row">
           <h2>The Ghouls Grub</h2>
           <div className="dropdown" id="drop">
               <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown">
                 Events
               </button>
               <ul className="dropdown-menu">
                 <li><a className="dropdown-item" href="https://www.youtube.com/shorts/E-BBX1q83FQ">little German boy plays fortnite and drinks cola</a></li>
                 <li><a className="dropdown-item" href="#">Link 2</a></li>
                 <li><a className="dropdown-item" href="#">Link 3</a></li>
               </ul>
             </div>
           
           <div className="dropdown">
               <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown">
                 Links
               </button>
               <ul className="dropdown-menu">
                 <li><a className="dropdown-item" href="#">Link 1</a></li>
                 <li><a className="dropdown-item" href="#">Link 2</a></li>
                 <li><a className="dropdown-item" href="#">Link 3</a></li>
               </ul>
             </div>
             
             <div className="dropdown">
               <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown">
                 The Staff
               </button>
               <ul className="dropdown-menu">
                 <li><a className="dropdown-item" href="#">Link 1</a></li>
                 <li><a className="dropdown-item" href="#">Link 2</a></li>
                 <li><a className="dropdown-item" href="#">Link 3</a></li>
               </ul>
             </div>
             
             <div className="dropdown">
               <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown">
                 Contact us
               </button>
               <ul className="dropdown-menu">
                 <li><a className="dropdown-item" href="#">Link 1</a></li>
                 <li><a className="dropdown-item" href="#">Link 2</a></li>
                 <li><a className="dropdown-item" href="#">Link 3</a></li>
               </ul>
             </div>
           
         </ul>
         </div>
    )
}
export default Nav2