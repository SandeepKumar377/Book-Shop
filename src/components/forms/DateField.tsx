import { useFormikContext } from "formik";

export default function DateField(props:dateFieldProps)
{
    const {values,touched,errors}=useFormikContext<any>();
    return (
        <>
        <div className="m-1">
            <label htmlFor={props.field}>{props.display}</label>
            <input type="date" name={props.field} id={props.field}
            defaultValue={values[props.field]?.toLocalDateString('en-us')} 
            className="form-control" 
            onChange={e=>{
                const date = new Date(e.currentTarget.value + 'T00:00:00');
                values[props.field]=date;
            }}
            />
            {touched[props.field] && errors[props.field]?
        <div className="text-danger">{errors[props.field]?.toString()}</div>:null}
        </div>
        </>
    )
}

interface dateFieldProps{
    field:string;
    display:string;
}

