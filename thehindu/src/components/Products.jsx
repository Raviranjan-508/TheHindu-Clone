import React from 'react';
import { useEffect, useState } from 'react';
import homemodule from "../components/Products.module.css";

const Products = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/articles")
      .then((r) => r.json())
      .then((d) => setData(d))
  }, []);

  console.log(data.author);
  return (
    <div  className={homemodule.honeFront}>
      {
        data.map((val) => {
          return (
        <div>
        <div className="card " style={{ width: "18rem"}}>
        <img src={val.urlToImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{val.source.name}</h5>
          <p>{val.author}</p>
          <p className="card-text">{val.title}</p>
        
        </div>

        </div>

     
        </div>
          )
        })
      }
    </div>
  )
}

export default Products;