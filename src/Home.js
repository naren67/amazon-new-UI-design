import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
          return (
                    // http://placeimg.com/640/360/any
                    <div className='home'>
                            <div className="home__image" id='comeUp'>
                            <img className='home__img' src="https://i.pinimg.com/originals/b7/60/65/b76065c978317292b1ecde58fc2b6939.jpg" alt=""/>
                            </div>

                       
                                 <div className="home__row">
                                 <Product
                                    id='12345'
                                    title='startup: How constant innovation creates a major difference'
                                    price={40.5}
                                    rating='⭐⭐⭐⭐'
                                    image='https://m.media-amazon.com/images/I/41HmRC2YBIL._AC_SY200_.jpg'
                                 />
                                 <Product
                                    id='12345'
                                    title='startup: How constant innovation creates a major difference'
                                    price={40.5}
                                    rating='⭐⭐⭐⭐'
                                    image='https://m.media-amazon.com/images/I/313CFbI-YjL._AC_SY200_.jpg'
                                 />
                                 </div>

                                 <div className="home__row">
                                 <Product
                                    id='12345'
                                    title='startup: How constant innovation creates a major difference'
                                    price={40.5}
                                    rating='⭐⭐⭐⭐'
                                    image='https://images-eu.ssl-images-amazon.com/images/I/71kwL2yKU6L._AC_UL160_SR160,160_.jpg'
                                 />
                                 <Product
                                    id='12345'
                                    title='startup: How constant innovation creates a major difference'
                                    price={40.5}
                                    rating='⭐⭐⭐⭐'
                                    image='https://images-eu.ssl-images-amazon.com/images/I/71I6p3xRAZL._AC_UL160_SR160,160_.jpg'
                                 />
                                  <Product
                                    id='12345'
                                    title='startup: How constant innovation creates a major difference'
                                    price={40.5}
                                    rating='⭐⭐⭐⭐'
                                    image='https://m.media-amazon.com/images/I/61VTdpSYuSL._AC_UY218_.jpg'
                                 />
                                 </div>

                                 <div className="home__row">
                                 <Product
                                    id='12345'
                                    title='startup: How constant innovation creates a major difference'
                                    price={40.5}
                                    rating='⭐⭐⭐⭐'
                                    image='https://m.media-amazon.com/images/I/41tWwRhkZiL._AC_SY200_.jpg'
                                 />
                                 <Product
                                    id='12345'
                                    title='startup: How constant innovation creates a major difference'
                                    price={40.5}
                                    rating='⭐⭐⭐⭐'
                                    image='https://m.media-amazon.com/images/I/A1OUm0nT0uL._AC_UY218_.jpg'
                                 />
                                  <Product
                                    id='12345'
                                    title='startup: How constant innovation creates a major difference'
                                    price={40.5}
                                    rating='⭐⭐⭐⭐'
                                    image='https://images-eu.ssl-images-amazon.com/images/I/71kwL2yKU6L._AC_UL160_SR160,160_.jpg'
                                 />
                                 <Product
                                    id='12345'
                                    title='startup: How constant innovation creates a major difference'
                                    price={40.5}
                                    rating='⭐⭐⭐⭐'
                                    image='https://images-eu.ssl-images-amazon.com/images/I/71I6p3xRAZL._AC_UL160_SR160,160_.jpg'
                                 />
                                 </div>

                       
                    </div>
          )
}

export default Home
