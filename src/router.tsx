import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import AboutPage from './pages/about';
import HomePage from './pages/home';
import ErrorPage from './pages/error';

// for lazy loading
// import LoadingScreen from './LoadingScreen';
// const Loadable = (Component: any) => (props: JSX.IntrinsicAttributes) =>
// (
//   <Suspense fallback={<LoadingScreen />}>
//     <Component {...props} />
//   </Suspense>
// );

// //  * HOME PAGE
// const HomePage = Loadable(lazy(() => import('./pages/home')));
// const AboutPage = Loadable(lazy(() => import('./pages/about')));

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "",
                element: <HomePage />,
            },
            {
                path: "about",
                element: <AboutPage />,
            },
        ],
    },
])

export default router
