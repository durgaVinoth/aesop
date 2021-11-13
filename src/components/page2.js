import React from 'react';

const Page2=()=>{
    return(
        <div className="container-fluid">
            <div className="row pages-2">
                <div className="col-sm-6">
                    <div className="images-pages">
                    <img src="./image/page2.jpg" alt="page2" height="500" width="650"/>
                    </div>
                </div>
                <div className="col-sm-6">
                <div className="page2-page">

                    <h6>How to Use</h6>
                    <h2 className="page2-p">Morning and evening, shake before use; then dispense a small amount 
                        onto hands and massage over face and neck.
                        Rinse with tepid water, or remove using a damp cloth.</h2>
                        <h6>Dosage</h6>
                         <span className="text-muted">Half a teaspoon</span>
                         <hr/>
                         <h6>Texture</h6>
                         <span className="text-muted">Non-foaming, water-soluble emulsion</span>
                         <hr/>
                         <h6>Aroma</h6>
                         <span className="text-muted">Mild, woody, herbaceous</span>
                         
                </div>
                </div>
            </div>
        </div>
    )
}
export default Page2;