import { RouteObject } from "react-router-dom";
import IndexCategory from "./components/categories/IndexCategory";
import IndexAuthor from "./components/authors/IndexAuthors";
import SaveAuthor from "./components/authors/SaveAuthor";
import Home from "./components/home/Home";
import SaveCategory from "./components/categories/SaveCategory";
import UpdateCategory from "./components/categories/UpdateCategory";
import UpdateAuthor from "./components/authors/UpdateAuthor";

const routes:RouteObject[]=[
    {path:'/', element:<Home/>},
    //Authors
    {path:'authors', element:<IndexAuthor/>},
    {path:'save-author', element:<SaveAuthor/>},
    {path:'update-author/:authorId', element:<UpdateAuthor/>},
    //categories
    {path:'categories', element:<IndexCategory/>},
    {path:'save-category', element:<SaveCategory/>},
    {path:'update-category/:categoryId', element:<UpdateCategory/>}
]

export default routes; 