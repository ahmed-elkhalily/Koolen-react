import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllCategories } from '../../api/categories';
import { toastError } from '../toast/toastComponent';
import BlockLoader from '../blocks/BlockLoader';

function Categories() {
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getAllCategories((success) => {
            setIsLoading(false);
            if (success) {
                setCategories(success.data);
            }
        }, (fail) => {
            // setIsLoading(false);
            toastError(fail);
        });
    }, []);
    let items;
    if (categories?.length) {
        items = categories.map((item) => (
            <div className="category">
                <div className="category__item">
                    <div>
                        <Link to={`/shop/catalog/${item.slug}`}>
                            {item.name}

                        </Link>
                    </div>
                </div>
            </div>
        ));
    }
    if (isLoading) return <BlockLoader />;
    return (
        <div className="container">
            <div className="categories-page categories">
                {items}
            </div>
        </div>
    );
}
export default Categories;
