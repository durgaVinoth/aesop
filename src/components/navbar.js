import React from 'react';

const Navbar=()=>{
    return(
        <div className="navbar">
            <ul className="left">
                <li className="navbar-left">Skin Care</li>
                <li className="navbar-left">Body & Hand</li>
                <li className="navbar-left">Hair</li>
                <li className="navbar-left">Fragrance</li>
                <li className="navbar-left">Home</li>
                <li className="navbar-left">Kits & Travels</li>
                <li className="navbar-left">Gifts</li>
                <li className="navbar-left">Read</li>
                <li className="navbar-left">Stores</li>
                <li className="navbar-left"><i className="fa fa-search" aria-hidden="true"></i>
</li>
            
                <li className="navbar-right">Login</li>
                <li className="navbar-right">Cart</li>
            </ul>
         </div>
    )
}
export default Navbar;