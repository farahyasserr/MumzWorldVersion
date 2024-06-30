import { SimpleProduct } from "../../../../types/Product";

export const searchProducts = ({ searchValue, products }: { searchValue: string, products: SimpleProduct[] }): SimpleProduct[] => {
    const searchTerm = searchValue.toLowerCase().trim();
    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm)
    );
    return filteredProducts;
};