import { Formik, FormikHelpers } from "formik";
import { saveAuthorDTO } from "../../authors/author.model"
import TextField from "../forms/TextField";
import Button from "../forms/Button";
import DateField from "../forms/DateField";
import ImageField from "../forms/ImageField";
import MarkDownField from "../forms/MarkDownField";
import "../../assets/css/AuthorForm.css"

export default function AuthorForm({model,onSubmit}:authorFormProps) {
    return (
        <>
            <Formik initialValues={model} onSubmit={(values,actions)=>{
            onSubmit(values,actions);
        }}>
                {(formikProps) => (
                    <form>
                        {model?<h2>Save Author</h2>:<h2>Update Author</h2>}
                        <TextField type="text" field="authorName" display="Author Name" />
                        <DateField field="dateOfBirth" display="Date of Birth"></DateField>
                        <ImageField field="profileURL" display="Profile Picture" url={model.profileURL!} />
                        <MarkDownField field="biography" display="Author Biography"></MarkDownField>
                        <Button type="submit" className="btn btn-primary" disabled={formikProps.isSubmitting} >
                            Save Changes
                        </Button>
                    </form>
                )}
            </Formik>
        </>
    )
}

interface authorFormProps {
    model: saveAuthorDTO;
    onSubmit(values: saveAuthorDTO, action: FormikHelpers<saveAuthorDTO>): void;
}