import { authorDTO } from "../../authors/author.model";
import { getAuthorURL } from "../../endpoints";
import IndexEntity from "../utilities/IndexEntity";
export default function IndexAuthors() {
    return (
        <IndexEntity<authorDTO>
            URL={getAuthorURL} createURL='/authors/create' title="Authors"
            entityName="Author"
        >
            {(authors, buttons) => <>
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {authors?.map(author => <tr key={author.authorId}>
                        <td>
                            {buttons(`/authors/edit-author/${author.authorId}`, author.authorId)}
                        </td>
                        <td>
                            {author.authorName}
                        </td>
                    </tr>)}
                </tbody>
            </>}
        </IndexEntity>
    )
}


// export default function IndexAuthor()
// {
//     const [authors, setAuthors]=useState<authorDTO[]>([]);
//     const [loading, setLoading]= useState(true);
//     const [error, setError] = useState<string | null>(null)
    

//     useEffect(()=>{
//         getAuthors();
//     },[]);

//     async function getAuthors(){
//         try {
//             const response = await axios.get<authorDTO[]>(getAuthorURL)
//             setAuthors(response.data);
//             setLoading(false);
//         } 
//         catch (error) {
//             console.log(error);
//             setError("Failed to fetch Authors!");
//             setLoading(false);
//         }
//     };

//     if (loading) return <p> Loading Authors...!</p>
//     if (error) return <p>Something went wrong...!</p>

//         return(
//         <>
//         <h2>Authors</h2>
//         <table className="table table-striped">
//             <thead>
//                 <tr>
//                     <th>Id</th>
//                     <th>Name</th>
//                     <th>Action</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {authors.map((author)=>
//                 (
//                     <tr key={author.authorId}>
//                         <td>{author.authorId}</td>
//                         <td>{author.authorName}</td>
//                         <td>
//                             <Link to={`/update-author/${author.authorId}`} className="btn btn-primary" >Update</Link> &nbsp; 
//                             <Link to='/authors' className="btn btn-danger" >Delete</Link>   
//                         </td>
//                     </tr>
//                 ))}
//             </tbody>
//         </table>
//         </>
//     )
// }