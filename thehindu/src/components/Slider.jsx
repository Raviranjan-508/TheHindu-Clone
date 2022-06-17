import React from 'react';
import { useState, useEffect } from 'react';

const Slider = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8080/articles")
            .then((r) => r.json())
            .then((d) => setData(d))
    }, []);

    return (
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000" >
                    <img src="Images/sli (1).png" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" data-bs-interval="2000" >
                    <img src="Images/sli (2).png" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="Images/sli (3).png" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="Images/sli (4).png" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="Images/sli (5).png" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="Images/sli (6).png" className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Slider