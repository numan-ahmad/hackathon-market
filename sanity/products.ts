export const products = {
    name: "products",
    type: "document",
    title: "Product",
    fields: [
        {
            name: "title",
            title: "Product Title",
            type: "string"
        },
        {
            name: "gender",
            title: "Product Use For",
            type: "string"
        },
        {
            name: "price",
            title: "Product Price",
            type: "number"
        },
        {
            name: "description",
            title: "Product Description",
            type: "string"
        },
        {
            name: "image",
            title: "Product Image",
            type: "image"
        }
    ]
}