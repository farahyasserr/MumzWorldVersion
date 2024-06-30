import { useEffect, useState } from "react";
import { SimpleProduct } from "../../../types/Product";
import axiosInstance from "../../../services";
import { PRODUCT_LIST_LARGE } from "../../../services/api";

export const useGetProductsList = () => {
    const [products, setProducts] = useState<SimpleProduct[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchProductListLargeData = async () => {
        try {
            setLoading(true);
            let response = await axiosInstance.get(PRODUCT_LIST_LARGE);
            let data = response.data.data.products.items;
            setProducts(data);
        } catch (error) {
            console.error('Error fetching product list large data:', error);
            setError('Error fetching product list large data');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProductListLargeData();
    }, []);

    return { products, loading, error };
};
