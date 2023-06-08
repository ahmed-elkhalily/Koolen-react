// react
import React from 'react';

// third-party
import classNames from 'classnames';
import PropTypes from 'prop-types';

// application
import Collapse from '../shared/Collapse';
import FilterCategory from '../filters/FilterCategory';
// import FilterCheck from '../filters/FilterCheck';
// import FilterColor from '../filters/FilterColor';
// import FilterRadio from '../filters/FilterRadio';
// import FilterRange from '../filters/FilterRange';
// import getFilterHandler from '../../services/filters';
import { ArrowRoundedDown12x7Svg } from '../../svg';

// const filterComponents = {
//     category: FilterCategory,
// range: FilterRange,
// check: FilterCheck,
// radio: FilterRadio,
// color: FilterColor,
// };

function WidgetFilters(props) {
    const {
        title,
        offcanvas,
        changeSelectedCategory,
        selectedCategory,
    } = props;

    // const handleValueChange = useCallback(({ filter, value }) => {
    //     console.log(filter, value);
    // }, []);

    const handleResetFilters = () => {
        changeSelectedCategory(null);
    };

    const filtersList = (
        <div className="widget-filters__item">
            <Collapse
                toggleClass="filter--opened"
                render={({ toggle, setItemRef, setContentRef }) => (
                    <div className="filter filter--opened" ref={setItemRef}>
                        <button type="button" className="filter__title" onClick={toggle}>
                            Categories
                            <ArrowRoundedDown12x7Svg className="filter__arrow" />
                        </button>
                        <div className="filter__body" ref={setContentRef}>
                            <div className="filter__container">
                                <FilterCategory selectedCategory={selectedCategory} changeSelectedCategory={changeSelectedCategory} />
                            </div>
                        </div>
                    </div>
                )}
            />
        </div>
    );

    const classes = classNames('widget-filters widget', {
        'widget-filters--offcanvas--always': offcanvas === 'always',
        'widget-filters--offcanvas--mobile': offcanvas === 'mobile',
    });

    return (
        <div className={classes}>
            <h4 className="widget-filters__title widget__title">{title}</h4>

            <div className="widget-filters__list">
                {filtersList}
            </div>

            <div className="widget-filters__actions d-flex mb-n2">
                <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={handleResetFilters}
                >
                    Reset
                </button>
            </div>
        </div>
    );
}

WidgetFilters.propTypes = {
    /**
     * widget title
     */
    title: PropTypes.node,
    /**
     * indicates when sidebar bar should be off canvas
     */
    offcanvas: PropTypes.oneOf(['always', 'mobile']),
};

WidgetFilters.defaultProps = {
    offcanvas: 'mobile',
};

export default WidgetFilters;
