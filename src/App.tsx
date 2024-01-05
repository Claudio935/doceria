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
import AddProduto from './pages/addProduto';
import './App.css'

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
        path: '/admin/addProduto',
        element: <AddProduto />,
    },


]);
const App = () => {

    return (
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    )
}

export default App;