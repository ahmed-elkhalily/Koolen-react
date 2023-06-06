export default function productSchema(products) {
    // change thumbnail_image to be an array
    // add rating
    const schema = [];

    products.forEach((product) => {
        const {
            id, name, slug, base_discounted_price, base_price, thumbnail_image, stock, rating,

        } = product;
        const payload = {
            id,
            name,
            slug,
            price: base_discounted_price,

            images: [thumbnail_image],
            rating,
            stock,
            availability: stock > 0 ? 'in-stock' : 'out-of-stock',
            reviews: 0,
            brand: null,
            badges: [],
            categories: [],
            attributes: [],
        };

        if (base_price - base_discounted_price > 0) {
            payload.compareAtPrice = base_price;
        }

        schema.push(payload);
    });

    return schema;
}

//  {
//         id: getId(),
//         name: productDef.name,
//         sku: '83690/32',
//         slug: productDef.slug,
//         price: productDef.price,
//         compareAtPrice: productDef.compareAtPrice || null,
//         images: productDef.images.slice(),
//         badges: badges.slice(),
//         rating: productDef.rating,
//         reviews: productDef.reviews,
//         availability: productDef.availability,
//         brand: brandsData.find((x) => x.slug === productDef.brand) || null,
//         categories,
//         attributes,
//         customFields: {},
//     };
