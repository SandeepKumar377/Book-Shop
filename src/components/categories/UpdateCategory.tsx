import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SaveCategoryDTO } from "../../models/category.model";
import { getCategoryURL, updateCategoryURL } from "../../endpoints";
import CategoryForm from "./CategoryForm";
import { FormikHelpers } from "formik";
import axios from "axios";

export default function UpdateCategory() {
    const navigate = useNavigate();
    const { categoryId }: any = useParams();
    const [category, setCategory] = useState<SaveCategoryDTO | null>(null);
    const [loading, setloading] = useState(true);
    const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get<SaveCategoryDTO>(`${getCategoryURL}/${categoryId}`);
        setCategory(response.data);
        setloading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch category details");
        setloading(false);
      }
    };
    fetchCategory();
  }, [categoryId]);

  const handleSubmit = async (
    values: SaveCategoryDTO,
    actions: FormikHelpers<SaveCategoryDTO>
  ) => {
    try {
      await axios.put(`${updateCategoryURL}/${categoryId}`, values);
      console.log("category updated successfully", values);
      actions.setSubmitting(false);
      navigate("/");
    } catch (err) {
      console.error("Error updating category", err);
      actions.setSubmitting(false);
    }
  };
  if (loading) return <p>loading......</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <>
      <div className="row">
        <h2>Update category</h2>
        {category && <CategoryForm model={category} onSubmit={handleSubmit} />}
      </div>
    </>
  );
}
