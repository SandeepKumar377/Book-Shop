import { useNavigate } from "react-router-dom";
import { saveAuthorDTO } from "../../authors/author.model";
import AuthorForm from "./AuthorForm";
import { FormikHelpers } from "formik";
import axios from "axios";
import { saveAuthorURL } from "../../endpoints";


export default function SaveAuthor()
{
    const navigate = useNavigate(); 

    const handleSubmit = async (
      values: saveAuthorDTO,
      actions: FormikHelpers<saveAuthorDTO> 
    ) => {
     
        try {
            console.log("Creating Author:", values);
        
            // Create FormData object
            const formData = new FormData();
            formData.append("name", values.authorName);
            if (values.biography) formData.append("biography", values.biography);
            if (values.dateOfBirth)
              formData.append("dateOfBirth", values.dateOfBirth.toISOString());
            if (values.profile) formData.append("picture", values.profile);
        
            //Send the form data to the server
            const response = await axios.post(
                saveAuthorURL,
              formData,
              {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              }
            );
        
            console.log("Author created successfully:", response.data);
            navigate("/");
          } catch (error) {
            console.error("Error creating author:", error);
          }
    };
  
    const initialModel: saveAuthorDTO = { authorName: "",biography:"",dateOfBirth:undefined }; 
  

    return(
        <div>
        <AuthorForm model={initialModel} onSubmit={handleSubmit} />
      </div>
    )
}