import axios, { AxiosResponse } from "axios";
import { ReactElement, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import GenericList from "./GenericList";
import Button from "../forms/Button";
import customConfirm from "./customConfirm";

export default function IndexEntity<T>(props:indexEntityProps<T>) {
    const [entities, setEntities] = useState<T[] | undefined>(undefined);
    const [totalAmountOfPages, setTotalAmountOfPages] = useState(0);
    const [recordPerPage, setRecordPerPage] = useState(5);
    const [page, setPage] =useState(1);

    useEffect(()=>{
        fetchData();
    },[page,recordPerPage]);

    function fetchData(){
        console.log(props.URL);
        axios.get<T[]>(props.URL,{
            params:{page,recordPerPage}
        }).then((response:AxiosResponse<T[]>)=>{
            const totalAmountOfPages= parseInt(response.headers['totalamountofrecords'],10);
            setTotalAmountOfPages(Math.ceil(totalAmountOfPages/recordPerPage));
            setEntities(response.data);
        })
    }
    async function deleteEntity(id: number) {
        try {
            await axios.delete(`${props.URL}/${id}`);
            fetchData();
        }
        catch (error) {
            console.log(error);
        }
    }

    const buttons = (editUrl: string, id: number) => <>
    <Link className="btn btn-success"
        to={editUrl}>Edit</Link>

    <Button type="button" className="btn btn-danger" disabled={false}
        onClick={() => customConfirm(() => deleteEntity(id))}
        >Delete</Button>
    </>
    return ( 
        <>
        <h2>{props.title}</h2>
        {props.createURL?<Link className="btn btn-primary" to={props.createURL}>  Create {props.entityName}</Link>:null}
        <Pagination radius={3} currentPage={page} totalAmountOfPages={totalAmountOfPages} onChange={newPage=>setPage(newPage)} />
        <GenericList list={entities}>
                <table className="table table-striped">
                    {props.children(entities!, buttons)}
                </table>
        </GenericList>
        </>
     );
}


interface indexEntityProps<T>{
    URL:string;
    title:string;
    createURL:string;
    entityName:string;
    children(entities: T[],
        buttons: (editUrl: string, id: number) => ReactElement): ReactElement;
}