export interface Product {
    id : Number,
    title : String,
    description : String,
    price: Number,
    discount: Number,
    rating: Number,
    stock: Number,
    brand: String,
    category: String,
    thumbnail: String
}

export interface User {
    id : Number,
    first_name : String,
    last_name : String,
    email : String,
    gender : String,
    catchphrase : String,
    job : String,
    title : String,
    fav_color : String
}

export interface Order {
    id : Number,
    first_name : String,
    last_name : String,
    quantity: Number,
    object: String,
    date: String,
    price: String
}