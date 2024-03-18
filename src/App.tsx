import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';

import { Provider } from 'react-redux';
import Home from './pages/home';
import Menu from './pages/menu';
import './index.css';
import { store } from './store';
import Cart from './pages/cart';
import Login from './pages/login';
import AddProduto from './pages/admin/addProduto';
import './App.css'
import ProductPage from './pages/product';
import AddComentario from './pages/admin/addComentario';
import Admin from './pages/admin';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/menu',
        element: <Menu />,
    },
    {
        path: '/cart',
        element: <Cart />,
    },
    {
        path: '/admin/login',
        element: <Login />,
    },
    {
        path: '/admin',
        element: <Admin />,
        children: [
            {
                path: '/admin/addComentario',
                element: <AddComentario />,
            },
            {
                path: '/admin',
                element: <AddProduto />,
            }
        ]
    },
    {
        path: '/product/:productId',
        element: <ProductPage />
    }


]);
const App = () => {


    return (
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    )
}

export default App;