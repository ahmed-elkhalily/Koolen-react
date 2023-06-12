// react
import React, { useEffect, useState } from 'react';

// third-party
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// apis
import { getAllCategories } from '../../api/categories';

// application
import BlockHeader from '../shared/BlockHeader';
import { toastError } from '../toast/toastComponent';

export default function BlockCategories(props) {
    const { title, layout, categories } = props;
    const [mycategories, setCategories] = useState([]);
    // eslint-disable-next-line
    console.log('my categories are: ', mycategories, categories);

    useEffect(() => {
        getAllCategories((success) => {
            if (success.success) {
                setCategories(success.data);
            } else {
                toastError(success);
            }
        }, (fail) => toastError(fail));
    }, []);

    let counter = 0;
    let level = 0;
    const categoriesList = categories.map((category, index) => {
        let classes = 'col-xs-11';

        counter += 1;
        if (counter === 6) {
            counter = 0;
            level += 1;
        }
        if (level % 2 === 0 && counter % 5 === 0 && counter !== 0 && level !== 0) {
            classes += ' col-md-8';
        } else {
            classes += ' col-md-4';
        }

        return (
            <div key={index} className={classes}>
                <div className="cm-category">
                    <figure className="cm-category__figure ">
                        <Link to="/">
                            <img src={category.image} alt={category.name} />
                        </Link>
                    </figure>
                    <div className="cm-category__title">
                        {category.title}
                    </div>
                </div>
            </div>
        // <div key={index} className={classes}>
        //     <div className=" category-card__body">
        //         <div className=" category-card__image">
        //             <Link to={category.url}><img src={category.image} alt={category.name} /></Link>
        //         </div>
        //         <div className=" category-card__content">
        //             <div className=" category-card__name">
        //                 <Link to={`/category/${category.slug}`}>{category.name}</Link>
        //             </div>
        //             <ul className="category-card__links">
        //                 {subcategories}
        //             </ul>
        //             <div className="category-card__all">
        //                 <Link to={category.url}>Show All</Link>
        //             </div>
        //             {/* TODO: number of products  */}
        //             <div className="category-card__products">
        //                 {`${category.products} Products`}
        //             </div>
        //         </div>
        //     </div>
        // </div>
        );
    });

    return (
        <div className={`block block--highlighted block-categories block-categories--layout--${layout}`}>
            <div className="container">
                <BlockHeader title={title} />

                {/* <div className="block-categories__list"> */}
                <div className="row cm-categories">
                    {categoriesList}
                </div>
                {/* </div> */}
            </div>
        </div>
    );
}

BlockCategories.propTypes = {
    title: PropTypes.string.isRequired,
    categories: PropTypes.array,
    layout: PropTypes.oneOf(['classic', 'compact']),
};

BlockCategories.defaultProps = {
    categories: [],
    layout: 'classic',
};
