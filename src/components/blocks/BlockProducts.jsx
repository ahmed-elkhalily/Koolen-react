// react
import React, { useEffect, useState } from 'react';

// application
import BlockHeader from '../shared/BlockHeader';
import ProductCard from '../shared/ProductCard';
// api
import { getAllProducts } from '../../api/products';
// components
import Pagination from '../shared/Pagination';
import BlockLoader from './BlockLoader';
import { toastError } from '../toast/toastComponent';
// schema
import productSchema from '../../helpers/productSchema';

export default function BlockProducts(props) {
    const [allProducts, setAllProducts] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [selectedPages, setSelectedPages] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    function getProductsDueToPages() {
        setIsLoading(true);
        getAllProducts(selectedPages, (success) => {
            setIsLoading(false);
            if (success.success) {
                const products = productSchema(success.products.data);
                setAllProducts(products);
                setTotalPages(success.totalPage);
            } else {
                toastError(success);
            }
        }, (fail) => {
            setIsLoading(false);
            toastError(fail);
        });
    }

    useEffect(() => {
        getProductsDueToPages();
    }, [selectedPages]);

    const {
        title,
        layout,
    } = props;

    let smalls;

    if (allProducts.length > 0) {
        const productsList = allProducts.slice(0, 6).map((product, index) => (
            <div key={index} className="block-products__list-item">
                <ProductCard product={product} />
            </div>
        ));

        smalls = (
            <div className="block-products__list">
                {productsList}
            </div>
        );
    }
    function onPageChange(page) {
        setSelectedPages(page);
    }

    return (
        <div className={`block block-products block-products--layout--${layout}`}>
            <div className="container">
                <BlockHeader title={title} />
                {
                    isLoading
                        ? <BlockLoader />
                        : (
                            <div className="block-products__body">
                                {smalls}
                            </div>
                        )
                }
                <div className="mt-4">
                    <Pagination total={totalPages} current={selectedPages} onPageChange={(e) => onPageChange(e)} />
                </div>

            </div>
        </div>
    );
}
