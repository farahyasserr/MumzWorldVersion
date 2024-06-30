import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axiosInstance from '../../../services';
import { PRODUCT_DETAILS } from '../../../services/api';
import { SimpleProduct } from '../../../types/Product';

const useGetProductDetails = () => {
    const [product, setProduct] = useState<SimpleProduct | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchProductDetails = async () => {
        try {
            setLoading(true);
            let response = await axiosInstance.get(PRODUCT_DETAILS);
            const lang = await AsyncStorage.getItem('lang');
            setProduct(response.data.data.product[lang === 'ar' ? 0 : 1]);
        } catch (error) {
            console.error('Error fetching product details:', error);
            setError('Error fetching product details');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProductDetails();
    }, []);

    return { product, loading, error };
};

export default useGetProductDetails;