import React from 'react';
import list from "./products.json";

const ProductList = () => {
    const mappedProducts = list.map((product) => <link to={`/products"${porduct._id}`}></link>)
    return (
        <div className='product-list'>
            <h1>Products</h1>
        </div>
    );
};

export default ProductList;