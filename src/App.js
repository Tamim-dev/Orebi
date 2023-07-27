import RootLayOut from "./components/layout/RootLayOut";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
    createRoutesFromElements,
} from "react-router-dom";
import Home from "./components/pages/Home";

let router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayOut />}>
        <Route index element={<Home/>}/>
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
