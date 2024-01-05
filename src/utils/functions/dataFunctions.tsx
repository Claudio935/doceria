import { useState, useEffect } from 'react'
import { collection, addDoc, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { db, storage } from '../../utils/data/firebase/config';
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
            (product.category === category) &&
                arrayProduct.push({ ...product, quantify: 1, category: category })
        })
        return arrayProduct
    }


export const useProductData = () => {
    const [loading, setLoading] = useState(false);
    const [productData, setProductData] = useState<productFormData[]>([]);



    const addProductToCart = async (product: productFormData, image: File | null) => {

        const doc = await addDoc(collection(db, 'cardapio'), {
            titleProduct: product.titleProduct,
            price: product.price,
            category: product.category,
            description: product.description
        })

        if (image) await uploadPhotos(image, doc.id)

        fetchDataProduct()


    }


    const deleteProduct = async (id: string) => {
        const imageRef = ref(storage, `image/${id}`);



        deleteDoc(doc(db, 'cardapio', id)).then(() => {
            deleteObject(imageRef)

                .catch((err) => {
                    switch (err.code) {
                        case 'storage/object-not-found':
                            console.log('oi')
                            break;

                        default:
                            console.log(err.code)
                            // Ocorreu um erro desconhecido
                            break;
                    }


                })
        })
            .catch((err) =>
                console.log('ouve erro na exclusão de algum item', err)
            )


            .finally(() => {
                fetchDataProduct()
            })






    };
    const uploadPhotos = async (file: File, id: string) => {


        const storageRef = ref(storage, `image/${id}`);
        try {
            // 'file' comes from the Blob or File API
            await uploadBytes(storageRef, file)
        }
        catch (error) {
            console.error('Erro ao fazer upload da imagem:', error);
        }

    }

    const fetchDataProduct = async () => {

        setLoading(true);

        try {
            const snapshot = await getDocs(collection(db, 'cardapio'));
            const productArray: productFormData[] = [];

            if (!snapshot.empty) {

                const promises: Promise<void>[] = [];

                snapshot.forEach((doc) => {

                    const downloadUrlPromise = getDownloadURL(
                        ref(storage, `image/${doc.id}`)
                    )
                        .then((url) => {


                            productArray.push({
                                ...doc.data(),
                                id: doc.id,
                                image: url,
                            } as productFormData);
                        })
                        .catch((error) => {
                            switch (error.code) {
                                case 'storage/object-not-found':
                                    productArray.push({
                                        ...doc.data(),
                                        id: doc.id,
                                        image: null,
                                    } as productFormData);
                                    break;

                                default:
                                    console.log(error.code)
                                    // Ocorreu um erro desconhecido
                                    break;
                            }

                        });


                    promises.push(downloadUrlPromise);
                });

                Promise.all(promises).then(() => {
                    setProductData(productArray);

                });


            } else {
                setProductData(productArray)
            }


        } catch (error) {

            console.error('Erro ao buscar dados:', error);
        } finally {
            setLoading(false);
        }

    }


    useEffect(() => {
        fetchDataProduct()
    }, []);



    return {
        loading,
        productArray: productData,
        addProductToCart,
        deleteProduct,
        uploadPhotos

    };
};

