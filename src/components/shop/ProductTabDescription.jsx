// react
import React from 'react';

function ProductTabDescription({ product }) {
    console.log(product);
    return (
        <div className="typography">
            {product?.description}
        </div>
    );
}

export default ProductTabDescription;
