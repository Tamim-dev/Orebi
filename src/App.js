import RootLayOut from "./components/layout/RootLayOut";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
    createRoutesFromElements,
} from "react-router-dom";

let router = createBrowserRouter(
    createRoutesFromElements(<Route path="/" element={<RootLayOut />}></Route>)
);
function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
