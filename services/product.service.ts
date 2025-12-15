type ProductInput = {
    name: string;
    price: number;
    stock: number;
}

type Product = ProductInput & {
    id: string;
  };


export function addProduct(input: ProductInput): Product {
    if (input.price < 0) {
        throw new Error("Invalid price");
    }
    
    return {
        id: "1",
        ...input
    };
}