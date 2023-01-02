import React, { useEffect, useState } from 'react';
import Loader from '../component/Loader';
import Master from '../Master';
import axios from 'axios';

export default function Home() {
    const [loader, setLoader] = useState(true);
    const [product, setProduct] = useState([]);
    useEffect(() => {
        axios.get('https://dummyjson.com/products')
            .then((res) => {
                setProduct(res.data.products);
                setLoader(false);
            });
        
    }, []);
    return (
            <Master>
        {loader && <Loader />}
        {!loader && (
            <div className='container mt-4'>
                <div className='row'>
                    {product.map(d => (
                        <div className='col-12 col-md-3 col-lg-3' key={d.id}>
                        <div className="card" style={{ maxWidth: "18rem" }}>
                        <img src={d.images[0]} className="card-img-top" alt="..." />
                        <div className="card-body">
                                    <h5 className="card-title">{d.title}</h5>
                                    <div className='d-flex justify-content-evenly p-2'>
                                        <span className='btn btn-primary'>{d.price}$</span>
                                        <span className='btn btn-primary'>
                                            <i className="fa-solid fa-cart-shopping" />
                                        </span>

                                    </div>
                        </div>
                        </div>
                    </div>
                    )
                        
                    )}
                </div>
            </div>
        )}
    </Master>
  )
}
