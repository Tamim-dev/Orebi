import RootLayOut from "./components/layout/RootLayOut";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
    createRoutesFromElements,
} from "react-router-dom";
import Home from "./components/pages/Home";
import Shop from "./components/pages/Shop";

let router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayOut />}>
        <Route index element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}/>
    </Route>)
);
function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
