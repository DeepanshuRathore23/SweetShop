export type User = {
    email: string,
    password: string,
    name: string,
    dob: string, 
    phone: string
}

export type Product = {
    product_name: string,
    price: number,
    category: string,
    in_stock: number
}

export type Order = {
    product_id: number,
    customer_id: number
}