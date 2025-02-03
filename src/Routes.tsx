import { RouteObject } from "react-router-dom";
import IndexCategory from "./components/categories/IndexCategory";
import IndexAuthor from "./components/authors/IndexAuthors";
import SaveAuthor from "./components/authors/SaveAuthor";
import Home from "./components/home/Home";
import SaveCategory from "./components/categories/SaveCategory";
import UpdateCategory from "./components/categories/UpdateCategory";

const routes:RouteObject[]=[
    {path:'/', element:<Home/>},
    {path:'authors', element:<IndexAuthor/>},
    {path:'save-author', element:<SaveAuthor/>},
    {path:'categories', element:<IndexCategory/>},
    {path:'save-category', element:<SaveCategory/>},
    {path:'update-category/:categoryId', element:<UpdateCategory/>}
]

export default routes; 