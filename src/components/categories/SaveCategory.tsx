import axios from "axios";
import { SaveCategoryDTO } from "../../models/category.model";
import CategoryForm from "./CategoryForm";
import { saveCategoryURL } from "../../endpoints";
import { useNavigate } from "react-router-dom";
import { FormikHelpers } from "formik";
//import { useState } from "react";

export default function SaveCategory()
{
    const navigate = useNavigate(); 
    //const [errors,setErrors]=useState<string[]>([]);
    const handleSubmit = async (
        values: SaveCategoryDTO,
        actions: FormikHelpers<SaveCategoryDTO> 
      ) => {
        try {
              const response = await axios.post(saveCategoryURL, values); 
              console.log("Category saved successfully:", response.data);
              actions.setSubmitting(false);
              navigate("/categories");
        } 
        catch (err) {
            console.error("Error creating category:", err);
            actions.setSubmitting(false); 
          }
        };
        const initialModel: SaveCategoryDTO = { categoryName: "" }; 

        return (
          <div>
            <h2>Create a New Category</h2>
            <CategoryForm model={initialModel} onSubmit={handleSubmit} />
          </div>
        );
      }