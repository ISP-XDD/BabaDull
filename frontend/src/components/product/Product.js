import React, {Fragment} from 'react'
import {Link} from "react-router-dom"

const Product = () => {
  return (
    <Fragment>
        

        <div class="row f-flex justify-content-around">
            <div class="col-12 col-lg-5 img-fluid" id="product_image">
                <img src="https://m.media-amazon.com/images/I/617NtexaW2L._AC_UY218_.jpg" alt="sdf" height="300" width="350"></img>
            </div>

            <div class="col-12 col-lg-5 mt-5">
                <h3>128GB Solid Storage Memory card - SanDisk Ultra</h3>
                <p id="product_id">Product # sklfjdk35fsdf5090</p>


                <p id="product_price">€45.67</p>
                
                <button type="button" id="cart_btn" class="btn btn-primary">Add to Cart</button>


                <p>Status: <span id="stock_status">In Stock</span></p>


                <h4 class="mt-2">Description:</h4>
                <p>Great for compact-to-midrange point-and-shoot digital cameras and camcorders
                    Twice As Fast As Ordinary SDHC Cards, Allowing You To Take Pictures And Transfer Files Quickly
                    Exceptional video recording performance with Class 10 rating for Full HD video (1080p). Built-in write-protect switch prevents accidental data loss</p>
                <p id="product_seller mb-3">Sold by: <strong>Kazys</strong></p>

                </div>
        </div>
        <div style={{height: '100px'}}></div>

        <button id="review_btn" type="button" class="btn btn-primary mt-4" data-toggle="modal" data-target="#ratingModal">
            Submit Your Review
        </button>
				
        <div class="modal fade" id="ratingModal" tabIndex="-1" role="dialog" aria-labelledby="ratingModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="ratingModalLabel">Submit Review</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <textarea name="review" id="review" class="form-control mt-3">
                        </textarea>
                        <button class="btn my-3 float-right review-btn px-4 text-white" data-dismiss="modal" aria-label="Close">Submit</button>
                    </div>
                </div>
            </div>
        </div>

        <div style={{height: '50px'}}></div>
    
        <div class="container container-fluid">
            <div class="reviews w-75">
                <h3>Other's Reviews:</h3>
                <hr />
                    <div class="review-card my-3">
                        <div class="rating-outer">
                            <div class="rating-inner"></div>
                        </div>
                        <p class="review_user">by Petras</p>
                        <p class="review_comment">Visai patiko, xdd komandai rašyčiau 10</p>

                        <hr />
                    </div>
            </div>
        </div>
        
    </Fragment>
  )
}

export default Product
