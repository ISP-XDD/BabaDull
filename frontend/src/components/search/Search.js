import React, {Fragment} from "react"
import {Route, Link} from "react-router-dom"


const Search = () => {
    return (
<Fragment>
        
            <h3 id="products_heading" class="text-center">Search Results</h3>

            <section id="products" class="container mt-5">
            <div class="row">
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 my-3">
                <div class="card p-3 rounded">
                    <img
                    class="card-img-top mx-auto"
                    src="https://m.media-amazon.com/images/I/617NtexaW2L._AC_UY218_.jpg"
                    />
                    <div class="card-body d-flex flex-column card-text text-truncate">
                    <h5 class="card-title">
                        <Link to="/product">128GB Solid Storage Memory card - SanDisk Ultra </Link>
                    </h5>
                    <p class="card-text">€45.67</p>
                    <Link to="/product" id="view_btn" class="btn btn-block">View Details</Link>
                    </div>
                </div>
                </div>

                <div class="col-12 col-sm-6 col-md-4 col-lg-3 my-3">
                <div class="card p-3 rounded">
                    <img
                    class="card-img-top mx-auto"
                    src="https://i.imgur.com/eH2qe98.png"
                    />
                    <div class="card-body d-flex flex-column card-text text-truncate">
                    <h5 class="card-title card-text">
                        <Link to="/product">HGST Ultrastar He10 10TB SATA 6Gb/s 7200 RPM 256MB Cache 3.5-Inch Enterprise Hard Drive (HUH721010ALE604) (Renewed)</Link>
                    </h5>
                    <p class="card-text">€102.45</p>
                    <Link to="/product" id="view_btn" class="btn btn-block">View Details</Link>
                    </div>
                </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 my-3">
                <div class="card p-3 rounded">
                    <img
                    class="card-img-top mx-auto"
                    src="https://i.imgur.com/qhCI3Yj.png"
                    />
                    <div class="card-body d-flex flex-column card-text text-truncate">
                    <h5 class="card-title">
                        <Link to="/product">Seagate IronWolf 8TB NAS Internal Hard Drive HDD – 3.5 Inch SATA 6Gb/s 7200 RPM 256MB Cache for RAID Network Attached Storage – Frustration Free Packaging (ST8000VNZ04/N004)</Link>
                    </h5>
                    <p class="card-text">€159.99</p>
                    <Link to="/product" id="view_btn" class="btn btn-block">View Details</Link>
                    </div>
                </div>
                </div>

                <div class="col-12 col-sm-6 col-md-4 col-lg-3 my-3">
                <div class="card p-3 rounded">
                    <img
                    class="card-img-top mx-auto"
                    src="https://i.imgur.com/N6sMA0w.png"
                    />
                    <div class="card-body d-flex flex-column card-text text-truncate">
                    <h5 class="card-title">
                        <Link to="/product">Seagate Exos X22 20TB SATA 6Gb/s 7200RPM 3.5-inch Enterprise HDD - ST20000NM004E (Renewed)</Link>
                    </h5>
                    <p class="card-text">€279.99</p>
                    <Link to="/product" id="view_btn" class="btn btn-block">View Details</Link>
                    </div>
                </div>
                </div>

                <div class="col-12 col-sm-6 col-md-4 col-lg-3 my-3">
                <div class="card p-3 rounded">
                    <img
                    class="card-img-top mx-auto"
                    src="https://i.imgur.com/ZtAnP7N.png"/>
                    <div class="card-body d-flex flex-column card-text text-truncate">
                    <h5 class="card-title">
                        <Link to="/product">HGST Ultrastar He8 Helium (HUH728080ALE601) 8TB 7200RPM 128MB Cache SATA 6.0Gb/s 3.5in Enterprise Hard Drive - 5 Year Warranty (Renewed)</Link>
                    </h5>
                    <p class="card-text">€68.25</p>
                    <Link to="/product" id="view_btn" class="btn btn-block">View Details</Link>
                    </div>
                </div>
                </div>

                <div class="col-12 col-sm-6 col-md-4 col-lg-3 my-3">
                <div class="card p-3 rounded">
                    <img
                    class="card-img-top mx-auto"
                    src="https://i.imgur.com/6DNXNwa.png"/>
                    <div class="card-body d-flex flex-column card-text text-truncate">
                    <h5 class="card-title">
                        <Link to="/product">Western Digital 10TB WD Red Plus NAS Internal Hard Drive HDD - 7200 RPM, SATA 6 Gb/s, CMR, 256 MB</Link>
                    </h5>
                    <p class="card-text">€189.99</p>
                    <Link to="/product" id="view_btn" class="btn btn-block">View Details</Link>
                    </div>
                </div>
                </div>

                <div class="col-sm-12 col-md-6 col-lg-3 my-3">
                <div class="card p-3 rounded">
                    <img
                    class="card-img-top mx-auto"
                    src="https://i.imgur.com/pTGpWgx.png"/>
                    <div class="card-body d-flex flex-column card-text text-truncate">
                    <h5 class="card-title">
                        <Link to="/product">HGST Ultrastar He8 Helium (HUH728080ALE601) 8TB 7200RPM 128MB Cache SATA 6.0Gb/s 3.5in Enterprise Hard Drive - 5 Year Warranty (Renewed)</Link>
                    </h5>
                    <p class="card-text">€65.06</p>
                    <Link to="/product" id="view_btn" class="btn btn-block">View Details</Link>
                    </div>
                </div>
                </div>

                <div class="col-sm-12 col-md-6 col-lg-3 my-3">
                <div class="card p-3 rounded">
                    <img
                    class="card-img-top mx-auto"
                    src="https://i.imgur.com/6DNXNwa.png"/>
                    <div class="card-body d-flex flex-column card-text text-truncate">
                    <h5 class="card-title">
                        <Link to="/product">Western Digital 10TB WD Red Plus NAS Internal Hard Drive HDD - 7200 RPM, SATA 6 Gb/s, CMR, 256 MB Cache, 3.5" - WD101EFBX</Link>
                    </h5>
                    <p class="card-text">€189.99</p>

                    <Link to="/product" type="button" id="view_btn" class="btn btn-block">View Details</Link>
                    </div>
                </div>
                </div>

                <div class="col-12 col-sm-6 col-md-4 col-lg-3 my-3">
                <div class="card p-3 rounded">
                    <img
                    class="card-img-top mx-auto"
                    src="https://i.imgur.com/pTGpWgx.png"/>
                    <div class="card-body d-flex flex-column card-text text-truncate">
                    <h5 class="card-title">
                        <Link to="/product">Western Digital 2TB WD Blue PC Internal Hard Drive - 7200 RPM Class, SATA 6 Gb/s, 256 MB Cache, 3.5" - WD20EZBX</Link>
                    </h5>
                    <p class="card-text">€65.06</p>
                    <Link to="/product" id="view_btn" class="btn btn-block">View Details</Link>
                    </div>
                </div>
                </div>

                <div class="col-12 col-sm-6 col-md-4 col-lg-3 my-3">
                <div class="card p-3 rounded">
                    <img
                    class="card-img-top mx-auto"
                    src="https://i.imgur.com/BlS09wP.png"/>
                    <div class="card-body d-flex flex-column card-text text-truncate">
                    <h5 class="card-title">
                        <Link to="/product">Seagate IronWolf Pro 22TB Enterprise NAS Internal HDD Hard Drive – CMR 3.5 Inch SATA 6Gb/s 7200 RPM 256MB Cache for RAID Network Attached Storage (ST22000NT001) (Renewed)</Link>
                    </h5>
                    <p class="card-text">€369.99</p>
                    <Link to="/product" id="view_btn" class="btn btn-block">View Details</Link>
                    </div>
                </div>
                </div>
                
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 my-3">
                <div class="card p-3 rounded">
                    <img
                    class="card-img-top mx-auto"
                    src="https://i.imgur.com/3sjqH9u.png"
                    />
                    <div class="card-body d-flex flex-column card-text text-truncate">
                    <h5 class="card-title">
                        <Link to="/product">HGST Ultrastar He8 HUH728080ALE601 8TB 7200RPM 128MB Cache SATA 6.0Gb/s 3.5inch Enterprise Hard Drive - 5 Year Warranty (Renewed), Mechanical Hard Disk</Link>
                    </h5>
                    <p class="card-text">€69.35</p>
                    <Link to="/product" id="view_btn" class="btn btn-block">View Details</Link>
                    </div>
                </div>
                </div>

                <div class="col-12 col-sm-6 col-md-4 col-lg-3 my-3">
                <div class="card p-3 rounded">
                    <img
                    class="card-img-top mx-auto"
                    src="https://i.imgur.com/5sdFBXw.png"
                    />
                    <div class="card-body d-flex flex-column card-text text-truncate">
                    <h5 class="card-title">
                        <Link to="/product">Seagate Video 3.5 HDD Internal Hard Drive Bare Drive - 1000GB (ST1000VM002)</Link>
                    </h5>
                    <p class="card-text">€22.08</p>
                    <Link to="/product" id="view_btn" class="btn btn-block">View Details</Link>
                    </div>
                </div>
                </div>

                <div class="col-12 col-sm-6 col-md-4 col-lg-3 my-3">
                <div class="card p-3 rounded">
                    <img
                    class="card-img-top mx-auto"
                    src="https://i.imgur.com/5sdFBXw.png"
                    />
                    <div class="card-body d-flex flex-column card-text text-truncate">
                    <h5 class="card-title">
                        <Link to="/product">Toshiba X300 10TB Performance & Gaming 3.5-Inch Internal Hard Drive - CMR SATA 6 GB/s 7200 RPM 256 MB Cache - HDWR11AXZSTA</Link>
                    </h5>
                    <p class="card-text">€144.99</p>
                    <Link to="/product" id="view_btn" class="btn btn-block">View Details</Link>
                    </div>
                </div>
                </div>

                <div class="col-12 col-sm-6 col-md-4 col-lg-3 my-3">
                <div class="card p-3 rounded">
                    <img
                    class="card-img-top mx-auto"
                    src="https://i.imgur.com/Kcjc6Jw.png"
                    />
                    <div class="card-body d-flex flex-column card-text text-truncate">
                    <h5 class="card-title">
                        <Link to="/product">Western Digital RE 4TB 7200RPM 64MB Cache SATA 6.0Gb/s 3.5" Enterprise Internal Hard Drive (WD4000FYYZ) OE</Link>
                    </h5>
                    <p class="card-text">€45.67</p>
                    <Link to="/product" id="view_btn" class="btn btn-block">View Details</Link>
                    </div>
                </div>
                </div>

                <div class="col-12 col-sm-6 col-md-4 col-lg-3 my-3">
                <div class="card p-3 rounded">
                    <img
                    class="card-img-top mx-auto"
                    src="https://i.imgur.com/tjXcsE5.png"/>
                    <div class="card-body d-flex flex-column card-text text-truncate">
                    <h5 class="card-title">
                        <Link to="/product">Toshiba N300 16TB NAS 3.5-Inch Internal Hard Drive - CMR SATA 6 GB/s 7200 RPM 512 MB Cache - HDWG31GXZSTA</Link>
                    </h5>
                    <p class="card-text">€269.99</p>
                    <Link to="/product" id="view_btn" class="btn btn-block">View Details</Link>
                    </div>
                </div>
                </div>

                <div class="col-12 col-sm-6 col-md-4 col-lg-3 my-3">
                <div class="card p-3 rounded">
                    <img
                    class="card-img-top mx-auto"
                    src="https://i.imgur.com/bkfhF8z.png"/>
                    <div class="card-body d-flex flex-column card-text text-truncate">
                    <h5 class="card-title">
                        <Link to="/product">WD Ultrastar DC HC530 14TB 7200RPM SATA 6Gb/s 3.5-inch Enterprise HDD - WUH721414ALE6L4 (Renewed)</Link>
                    </h5>
                    <p class="card-text">€229.99</p>
                    <Link to="/product" id="view_btn" class="btn btn-block">View Details</Link>
                    </div>
                </div>
                </div>

                <div class="col-12 col-sm-6 col-md-4 col-lg-3 my-3">
                <div class="card p-3 rounded">
                    <img
                    class="card-img-top mx-auto"
                    src="https://i.imgur.com/bkfhF8z.png"
                    />
                    <div class="card-body d-flex flex-column card-text text-truncate">
                    <h5 class="card-title">
                        <Link to="/product">Western Digital DC HC550 16TB SATA 6Gb/s 7200RPM 3.5-inch Enterprise HDD - WUH721816ALE604 (0F38456) (Renewed)</Link>
                    </h5>
                    <p class="card-text">€197.99</p>
                    <Link to="/product" id="view_btn" class="btn btn-block">View Details</Link>
                    </div>
                </div>
                </div>

                <div class="col-12 col-sm-6 col-md-4 col-lg-3 my-3">
                <div class="card p-3 rounded">
                    <img
                    class="card-img-top mx-auto"
                    src="https://i.imgur.com/L8EiP6m.png"
                    />
                    <div class="card-body d-flex flex-column card-text text-truncate">
                    <h5 class="card-title">
                        <Link to="/product">Toshiba MK3276GSX 320 GB Internal Hard Drive (MK3276GSX)</Link>
                    </h5>
                    <p class="card-text">€9.98</p>
                    <Link to="/product" id="view_btn" class="btn btn-block">View Details</Link>
                    </div>
                </div>
                </div>

                <div class="col-12 col-sm-6 col-md-4 col-lg-3 my-3">
                <div class="card p-3 rounded">
                    <img
                    class="card-img-top mx-auto"
                    src="https://i.imgur.com/eH2qe98.png"
                    />
                    <div class="card-body d-flex flex-column card-text text-truncate">
                    <h5 class="card-title">
                        <Link to="/product">Seagate ST8000DM008</Link>
                    </h5>
                    <p class="card-text">€109.99</p>
                    <Link to="/product" id="view_btn" class="btn btn-block">View Details</Link>
                    </div>
                </div>
                </div>

                <div class="col-12 col-sm-6 col-md-4 col-lg-3 my-3">
                <div class="card p-3 rounded">
                    <img
                    class="card-img-top mx-auto"
                    src="https://i.imgur.com/eH2qe98.png"
                    />
                    <div class="card-body d-flex flex-column card-text text-truncate">
                    <h5 class="card-title">
                        <Link to="/product">Seagate ST8000DM008</Link>
                    </h5>
                    <p class="card-text">€109.99</p>
                    <Link to="/product" id="view_btn" class="btn btn-block">View Details</Link>
                    </div>
                </div>
                </div>

            </div>
            </section>

        </Fragment>
   )
}

export default Search