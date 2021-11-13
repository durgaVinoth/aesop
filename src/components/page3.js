import React from  'react';

const Page3=()=>{
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-4">
                    <div className="page3-page">
                    <h2 className="page3-title">Accompany with</h2>
                    <p className="page3-p">Gently dissolve eye makeup with Remove; 
                    after cleansing with Gentle Facial Cleansing Milk, apply alcohol-free B & Tea Balancing Toner to refine pores and prepare skin for hydration; and finish with soothing Camellia Nut Facial Hydrating Cream. Twice weekly, 
                    blend in a few drops of Damascan Rose Facial Treatment for additional nourishment</p>
                </div>
                </div>
                <div className="col-sm-4">
                    <img src="./image/remove.jpg" alt="remove" height="350" width="400" />
                    <div className="page3-img-txt">
                        <h5 className="remove-text text-center mt-5 pt-4">Remove</h5>
                        <p className="text-muted text-center">Makeup remover for the delicated eye area</p>
                    </div>
                </div>
                <div className="col-sm-4">
                <img src="./image/b-tea.jpg" alt="b-tea" height="450" width="350" />
                    <div className="page3-img-txt">
                        <h5 className="b-text text-center">B-Tea Balancinng Toner</h5>
                        <p className="text-muted  text-center">Balancing and hydrating,a light finish</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Page3;