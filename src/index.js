import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './views/Home/Home';
import Products from './views/Products/Products';
import Categories from './views/Categories/Categories';
import Account from './views/Account/Account';
import Cart from './views/Add Cart/Cart';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/products',
    element: <Products />
  },
  {
    path: '/categories',
    element: <Categories />
  },
  {
    path: '/account',
    element: <Account />
  },
  {
    path: '/cart',
    element: <Cart />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}>
    
    <Home />
    <Products />
    <Categories />
    <Account />
    <Cart />
  </RouterProvider>
);
