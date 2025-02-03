import { ErrorMessage, Field, Formik, FormikHelpers } from "formik";
import { SaveCategoryDTO } from "../../models/category.model";
import * as Yup from 'yup';

interface categoryFormProps{
    model:SaveCategoryDTO;
    onSubmit(values:SaveCategoryDTO, 
        action:FormikHelpers<SaveCategoryDTO>):void;
}

export default function CategoryForm({model,onSubmit}:categoryFormProps)
{
    const validationSchema= Yup.object({
        categoryName:Yup.string().required("Category Name is required").min(3, "Category name must be  at least 3 characters!"),
    });



    return(
        <Formik initialValues={model} 
        validationSchema={validationSchema} 
        onSubmit={(values, actions)=>{
            onSubmit(values, actions);
        }}>
            {({isSubmitting, isValid, handleSubmit})=>(
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                    <label htmlFor="categoryName" className="form-label">Category Name:</label>
                    <Field type="text" name="categoryName" id="categoryName" placeholder="Enter Category Name" className="form-control"></Field>
                    <ErrorMessage name="categoryName" component="div" className="text-danger"></ErrorMessage>
                    </div>
                    <button className="btn btn-primary" type="submit" disabled={!isValid || isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
                </form>
            )}
        </Formik>
    )
}

