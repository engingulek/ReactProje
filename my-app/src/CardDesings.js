import React, { Component } from 'react';
import "./Card.css";
export default class CardDesings extends Component {

  render() {
    
    return (
      

      
      <div className="row">
      
       {this.props.productList.map((product) => (
        
         <div className="col-lg-4" key={product.productId}>
           <div className="card mb-4 shadow-sm">
             <img
               src={product.productUrl}
               className="card-img-top"
               alt="Sample Movie"
             />
             <div className="card-body">
               <h5 className="card-title">{product.productName}</h5>
               <p className="card-count">{product.productCount}</p>
               <div className="d-flex justify-content-between align-items-center">
                 <button
                
                   type="button"
                   className="btn btn-md btn-outline-success"
                   onClick={()=>this.props.addProducttoJson(product)}
                 >
                   Add to Cart
                 </button>
               

                 <h2>
                   <span className="badge badge-info">{product.rating}</span>
                 </h2>
               </div>
             </div>
           </div>
         </div>
       ))}
     </div>
    
    )
  }
}
