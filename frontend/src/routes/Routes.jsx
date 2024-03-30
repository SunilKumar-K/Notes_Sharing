import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from '../App';
import Home from '../pages/Home';


const Router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>                     {/*  below all the components that are going to be rendered in the App component */}
            <Route index element={<Home />} />
        </Route>
    )
);

export default Router;