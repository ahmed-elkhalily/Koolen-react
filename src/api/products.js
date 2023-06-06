import { getRequest } from './network';

export function getAllProducts(onSuccess, onFail) {
    const path = '/api/v1/product/search?&page=1&brand_ids=&attribute_values=&sort_by=popular';
    getRequest(path, onSuccess, onFail);
}

export function getBestSellingProducts(onSuccess, onFail) {
    const path = '/api/v1/product/search?&page=1&brand_ids=&attribute_values=&sort_by=popular';
    getRequest(path, onSuccess, onFail);
}

export function getNewArrivalProducts(limit, onSuccess, onFail) {
    const path = `/api/v1/product/latest/${limit}`;
    getRequest(path, onSuccess, onFail);
}

export function getRelatedProducts(id, onSuccess, onFail) {
    const path = `/api/v1/product/related/${id}`;
    getRequest(path, onSuccess, onFail);
}

export function getSearchedProduct(searchVal, onSuccess, onFail) {
    const path = `/api/v1/search.ajax/${searchVal}`;
    getRequest(path, onSuccess, onFail);
}

export function getProductDetails(slug, onSuccess, onFail) {
    const path = `/api/v1/product/details/${slug}`;
    getRequest(path, onSuccess, onFail);
}
