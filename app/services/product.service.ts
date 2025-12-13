type ProductInput = {
    name: string;
    price: number;
    stock: number;
}

type Product = ProductInput & {
    id: string;
  };


export function addProduct(input: ProductInput): Product {
    return {
        id: "1",
        ...input
    };
}