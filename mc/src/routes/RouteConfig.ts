import Home from '@/content/Home';
import Shop from '@/content/Shop';
import ProductDetails from '@/content/ProductDetails';
import Cart from '@/content/Cart';
import Login from '@/content/Login';
import Register from '@/content/Register';
import Checkout from '@/content/Checkout';
import Dashboard from '@/content/Dashboard';
import Orders from '@/content/Orders';
import Wishlist from '@/content/Wishlist';
import Addresses from '@/content/Addresses';
import AccountDetails from '@/content/AccountDetails';
import Logout from '@/content/Logout';
import BlogListing from '@/content/BlogListing';
import BlogDetails from '@/content/BlogDetails';
import About from '@/content/About';
import Contact from '@/content/Contact';
import FAQ from '@/content/FAQ';
import Terms from '@/content/Terms';
import Privacy from '@/content/Privacy';
import Maintenance from '@/content/Maintenance';

export interface RouteConfig {
  path: string;
  component: React.ComponentType;
  title: string;
}

export const routes: RouteConfig[] = [
  { path: '/', component: Home, title: 'Home' },
  { path: '/shop', component: Shop, title: 'Shop' },
  { path: '/product/:id', component: ProductDetails, title: 'Product Details' },
  { path: '/cart', component: Cart, title: 'Cart' },
  { path: '/checkout', component: Checkout, title: 'Checkout' },
  { path: '/login', component: Login, title: 'Login' },
  { path: '/register', component: Register, title: 'Register' },
  { path: '/dashboard', component: Dashboard, title: 'Dashboard' },
  { path: '/orders', component: Orders, title: 'Orders' },
  { path: '/wishlist', component: Wishlist, title: 'Wishlist' },
  { path: '/addresses', component: Addresses, title: 'Addresses' },
  { path: '/account-details', component: AccountDetails, title: 'Account Details' },
  { path: '/logout', component: Logout, title: 'Logout' },
  { path: '/blog', component: BlogListing, title: 'Blog' },
  { path: '/blog/:id', component: BlogDetails, title: 'Blog Post' },
  { path: '/about', component: About, title: 'About' },
  { path: '/contact', component: Contact, title: 'Contact' },
  { path: '/faq', component: FAQ, title: 'FAQ' },
  { path: '/terms', component: Terms, title: 'Terms of Service' },
  { path: '/privacy', component: Privacy, title: 'Privacy Policy' },
  { path: '/maintenance', component: Maintenance, title: 'Maintenance' },
];
