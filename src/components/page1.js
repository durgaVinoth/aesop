import React from 'react';

const Page1=()=>{
    return(
        <div className="container">
            <div className="row">
                <div  className="col-sm-3">
                    <h1>Aesop</h1>
                </div>
                <div  className="col-sm-5">
                    <img src="./image/page1.jpg" alt="page1" height="600" width="500"/>
                </div>
                <div  className="col-sm-4">    
                <div className="page">
                <ul>
                    <li className="skin">Skin</li>
                    <li>Cleanser</li>
                </ul>
                <div className="head-page">
                    <h2>Gentle Facial Cleansing Milk</h2>
                    <p>An exceptionally gentle cleanser for daily use, enhanced with botanicals
                         renowned for their soothing properties.
                         Removes makeup effortlessly and rinses with ease</p>
                         
                         <h6>Suited to</h6>
                         <span className="text-muted">Most skin types, particularly dry and sensitive</span>
                         <hr/>
                         <h6>Skin Feel</h6>
                         <span className="text-muted">Cleansed, softened and refreshed</span>
                         <hr/>
                         <h6>Key ingredients    <i className="fas fa-plus-circle "></i></h6>
                         <span className="text-muted">Panthenol, Grape Seed, Sandalwood</span>
                         <hr/>
                         <h6>Sizes</h6>
                         <div className="rd-choose"><input type="radio" className="rd1" />100ml  
                         <input type="radio" className="rd2" />200ml</div>
                         <button className ="btn form-control rd-button">Add to Your Cart-$255.00</button>
                        
                </div>
                </div></div>            
               

            </div>
        </div>
    )
}
export default Page1;