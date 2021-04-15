import React from 'react'
import './Product.css'

function Product({id, title, price, rating, image}) {
          return (
                    <div className='product'>
                             <div className="product__info">
                                  <p className="product__title">{title}</p>
                             <p className="product__price">
                                       <small>$</small>
                                       <strong>{price}</strong>
                             </p>
                             <div className="product__rating">
                                       {rating}
                             </div>
                               
                             </div>
                             <img src={image} alt="" className="product__image"/>
                             <div  className="product__button">
                             <button>Add to cart</button>
                             </div>
                    </div>
          )
}

export default Product

