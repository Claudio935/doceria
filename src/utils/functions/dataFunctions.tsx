import { useState, useEffect } from 'react'
import { collection, addDoc, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { db } from '../../utils/data/firebase/config';
import { Product, productFormData } from '../../pages/menu/types/types';





export const findCategory: (product: Product[]) => string[] = (product) => {
    const category: string[] = []

    product.forEach((item) => {
        !category.includes(item.category) && category.push(item.category)
    })

    return category
}


export const findArrayPerCategory =
    (products: productFormData[], category: string): Product[] => {
        const arrayProduct: Product[] = []
        products.forEach((product) => {
            !(product.category === category) &&
                arrayProduct.push({ ...product, quantify: 1, category: category })
        })
        return arrayProduct
    }


export const useProductData = () => {
    const [loading, setLoading] = useState(false);
    const [productData, setProductData] = useState<productFormData[]>([]);

    const fetchProductData = async () => {
        setLoading(true);

        try {
            const querySnapshot = await getDocs(collection(db, 'cardapio'));
            const productArray: productFormData[] = [];
            console.log('oi')
            if (querySnapshot.docs.length > 0) {

                querySnapshot.forEach((doc) => {
                    productArray.push({ ...doc.data(), id: doc.id } as productFormData);
                });

                setProductData(productArray);
            }
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
        } finally {
            setLoading(false);
        }
    };

    const addProductToCart = async (product: productFormData) => {
        try {
            await addDoc(collection(db, 'cardapio'), {
                titleProduct: product.titleProduct,
                price: product.price,
                category: product.category,
            });
            setProductData((prevProductArray) => [...prevProductArray, product]);

            await fetchProductData();
        } catch (error) {
            console.error('Erro ao adicionar produto:', error);
        }
    };

    const deleteProduct = async (id: string) => {
        try {
            await deleteDoc(doc(db, 'cardapio', id));
            await fetchProductData();
        } catch (error) {
            console.error('Erro ao excluir produto:', error);
        }
    };

    useEffect(() => {
        fetchProductData();
    }, []);



    return {
        loading,
        productArray: productData,
        addProductToCart,
        deleteProduct,
    };
};

