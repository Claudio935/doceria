import { useState, useEffect } from 'react'
import {
    collection,
    addDoc,
    deleteDoc,
    doc,
    getDocs,
    query,
    limit,
    orderBy
} from 'firebase/firestore';
import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { db, storage } from '../../utils/data/firebase/config';
import {
    CartHook,
    CommentHook,
    Product,
    commentData,
    productFormData
} from '../../pages/menu/types/types';
import Compressor from 'compressorjs';
import { getAuth, onAuthStateChanged } from 'firebase/auth';





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

export const compressorImage = async (image: File): Promise<Blob> => {
    return new Promise((resolve, reject) => {
        new Compressor(image, {
            quality: 0.8,
            success: (compressedResult) => {
                resolve(compressedResult as Blob);
            },
            error: (error) => {
                reject(new Error(`Erro ao comprimir a imagem: ${error.message}`));
            },
        });
    });
};

export const useProductData = ({ numberOfProduct, order, sortBy }: CartHook) => {
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
            const imageCompressed = compressorImage(file).then((result) => { return result })
            console.log(imageCompressed)
            await uploadBytes(storageRef, await compressorImage(file))
        }
        catch (error) {
            console.error('Erro ao fazer upload da imagem:', error);
        }

    }

    const fetchDataProduct = async () => {
        const cardapioRef = collection(db, 'cardapio')

        const q = numberOfProduct ?
            query(cardapioRef, orderBy(sortBy ? sortBy : 'titleProduct',
                order ? order : 'desc'), limit(numberOfProduct)) :
            query(cardapioRef, orderBy('titleProduct', order ? order : 'desc'));



        setLoading(true);

        try {
            const snapshot = await getDocs(q);
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
                            productArray.push({
                                ...doc.data(),
                                id: doc.id,
                                image: null,
                            } as productFormData);
                            console.log(error.code)

                        });


                    promises.push(downloadUrlPromise);
                });

                Promise.all(promises).then(() => {
                    console.log(productArray)
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





export const useCommentData = ({ numberOfComment, order, sortBy }: CommentHook) => {
    const [loading, setLoading] = useState(false);
    const [commentData, setCommentData] = useState<commentData[]>([]);



    const addComment = async (comment: commentData) => {

        const doc = await addDoc(collection(db, 'comentarios'), {
            name: comment.name,
            job: comment.job,
            comment: comment.comment,
        })

        if (comment.image instanceof File) await uploadPhotos(comment.image, doc.id)

        fetchDataComment()


    }


    const deleteComment = async (id: string) => {
        const imageRef = ref(storage, `avatarComment/${id}`);



        deleteDoc(doc(db, 'comentarios', id)).then(() => {
            deleteObject(imageRef)

                .catch((err) => {
                    switch (err.code) {
                        case 'storage/object-not-found':

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
                fetchDataComment()
            })

    };

    const uploadPhotos = async (file: File, id: string) => {


        const storageRef = ref(storage, `avatarComment/${id}`);
        try {
            const imageCompressed = compressorImage(file).then((result) => { return result })
            console.log(imageCompressed)
            await uploadBytes(storageRef, await compressorImage(file))
        }
        catch (error) {
            console.error('Erro ao fazer upload da imagem:', error);
        }

    }

    const fetchDataComment = async () => {
        const comentarioRef = collection(db, 'comentarios')

        const q = numberOfComment ?
            query(comentarioRef, orderBy(sortBy ? sortBy : 'name',
                order ? order : 'desc'), limit(numberOfComment)) :
            query(comentarioRef, orderBy('name', order ? order : 'desc'));



        setLoading(true);

        try {
            const snapshot = await getDocs(q);
            const commentArray: commentData[] = [];

            if (!snapshot.empty) {

                const promises: Promise<void>[] = [];

                snapshot.forEach((doc) => {

                    const downloadUrlPromise = getDownloadURL(
                        ref(storage, `avatarComment/${doc.id}`)
                    )
                        .then((url) => {


                            commentArray.push({
                                ...doc.data(),
                                id: doc.id,
                                image: url,
                            } as commentData);
                        })
                        .catch((error) => {
                            commentArray.push({
                                ...doc.data(),
                                id: doc.id,
                                image: null,
                            } as commentData);
                            console.log(error.code)

                        });


                    promises.push(downloadUrlPromise);
                });

                Promise.all(promises).then(() => {
                    console.log(commentArray)
                    setCommentData(commentArray);

                });


            } else {
                setCommentData(commentArray)
            }


        } catch (error) {

            console.error('Erro ao buscar dados:', error);
        } finally {
            setLoading(false);
        }

    }


    useEffect(() => {
        fetchDataComment()
    }, []);



    return {
        loading,
        commentArray: commentData,
        addComment,
        deleteComment,
        uploadPhotos

    };

}


export const useLogin = () => {
    const [login, setLogin] = useState(false)

    const auth = getAuth();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {

                setLogin(true)

            } else {
                setLogin(false)
            }
        });
    }, [])

    return {
        login
    }
}
