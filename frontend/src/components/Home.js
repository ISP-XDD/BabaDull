import React, { Fragment } from "react"
import {Link} from "react-router-dom"

const Home = () => {
    return (
        <Fragment>
            <h1 id="products_heading">Latest Products</h1>

            <section id="products" class="container mt-5">
            <div class="row">
                <div class="col-sm-12 col-md-6 col-lg-3 my-3">
                <div class="card p-3 rounded">
                    <img
                    class="card-img-top mx-auto"
                    src="https://m.media-amazon.com/images/I/617NtexaW2L._AC_UY218_.jpg"
                    />
                    <div class="card-body d-flex flex-column">
                    <h5 class="card-title">
                        <Link to="/product">128GB Solid Storage Memory card - SanDisk Ultra</Link>
                    </h5>
                    <div class="ratings mt-auto">
                        {/* <div class="rating-outer">
                        <div class="rating-inner"></div>
                        </div>
                        <span id="no_of_reviews">(5 Reviews)</span> */}
                    </div>
                    <p class="card-text">€45.67</p>
                    <Link to="/product" id="view_btn" class="btn btn-block">View Details</Link>
                    </div>
                </div>
                </div>

                <div class="col-sm-12 col-md-6 col-lg-3 my-3">
                <div class="card p-3 rounded">
                    <img
                    class="card-img-top mx-auto"
                    src="https://m.media-amazon.com/images/I/61B04f0ALWL._AC_UY218_.jpg"
                    />
                    <div class="card-body d-flex flex-column">
                    <h5 class="card-title">
                        <Link to="/product">Wyze Cam 1080p HD Indoor Wireless Smart Home Camera Wyze Cam 1080p HD Indoor Wireless Smart Home Camera</Link>
                    </h5>
                    <div class="ratings mt-auto">
                    {/* <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star-half-o"></i>
                        <i class="fa fa-star-o"></i>
                        <span id="no_of_reviews">(5 Reviews)</span> */}
                    </div>
                    <p class="card-text">€965.67</p>
                    <Link to="/product" id="view_btn" class="btn btn-block">View Details</Link>
                    </div>
                </div>
                </div>

                <div class="col-sm-12 col-md-6 col-lg-3 my-3">
                <div class="card p-3 rounded">
                    <img
                    class="card-img-top mx-auto"
                    src="https://m.media-amazon.com/images/I/61pBvlYVPxL._AC_UY218_.jpg"
                    />
                    <div class="card-body d-flex flex-column">
                    <h5 class="card-title">
                        <Link to="/product">AmazonBasics High-Speed HDMI Cable</Link>
                    </h5>
                    <div class="ratings mt-auto">
                    {/* <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star-half-o"></i>
                        <i class="fa fa-star-o"></i>
                        <span id="no_of_reviews">(5 Reviews)</span> */}
                    </div>
                    <p class="card-text">€75.56</p>

                    <Link to="/product" type="button" id="view_btn" class="btn btn-block">View Details</Link>
                    </div>
                </div>
                </div>

            </div>
            </section>

        </Fragment>
    )
}

export default Home