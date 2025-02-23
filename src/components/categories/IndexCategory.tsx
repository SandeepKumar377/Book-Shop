import axios from "axios";
import { useEffect, useState } from "react"
import { CategoryDTO } from "../../models/category.model";
import { Link } from "react-router-dom";
import { getCategoryURL } from "../../endpoints";

export default function IndexCategory()
{
    const [categories, setCategories]=useState<CategoryDTO[]>([]);
    const [loading, setLoading]= useState(true);
    const [error, setError] = useState<string | null>(null)
    

    useEffect(()=>{
        getCategories();
    },[]);

    async function getCategories(){
        try {
            const response = await axios.get<CategoryDTO[]>(getCategoryURL)
            setCategories(response.data);
            setLoading(false);
        } 
        catch (error) {
            console.log(error);
            setError("Failed to fetch Categories!");
            setLoading(false);
        }
    };

    if (loading) return <p> Loading categories...!</p>
    if (error) return <p>Something went wrong...!</p>

        return(
        <>
        <h2>Categories</h2>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {categories.map((category)=>
                (
                    <tr key={category.categoryId}>
                        <td>{category.categoryId}</td>
                        <td>{category.categoryName}</td>
                        <td>
                            <Link to={`/update-category/${category.categoryId}`} className="btn btn-primary" >Update</Link> &nbsp; 
                            <Link to='/categories' className="btn btn-danger" >Delete</Link>   
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    )
}