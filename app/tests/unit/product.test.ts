import { addProduct } from '../../services/product.service'

describe("Product Service", () => {
    test("should add a product with valid data", () => {
        const product = addProduct({
            name: "Rasgulla",
            price: 130,
            stock: 100
        });

        expect(product.name).toBe("Rasgulla");
    });
});