import React from 'react'

const ImageSlider = () => {
    return (
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div className="carousel-item active">
                    <img src="Images/slider1 (1).png" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="Images/slider1 (2).png" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="Images/slider1 (3).png" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="Images/slider1 (4).png" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="Images/slider1 (5).png" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="Images/slider1 (6).png" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="Images/slider1 (7).png" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="Images/slider1 (8).png" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="Images/slider1 (9).png" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="Images/slider1 (10).png" className="d-block w-100" alt="..." />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>


    )
}

export default ImageSlider