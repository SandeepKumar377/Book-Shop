import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { authorDTO, saveAuthorDTO } from "../../authors/author.model";
import axios from "axios";
import { getAuthorURL, updateAuthorURL } from "../../endpoints";
import AuthorForm from "./AuthorForm";

export default function UpdateAuthor() {
  const { authorId } = useParams<{ authorId: string }>();
  const [author, setAuthor] = useState<saveAuthorDTO | null>(null);

  useEffect(() => {
    const getAuthor = async () => {
      try {
        const response = await axios.get<authorDTO>(
          `${getAuthorURL}/${authorId}`
        );
        setAuthor({
          authorName: response.data.authorName,
          biography: response.data.biography,
          dateOfBirth: response.data.dateOfBirth,
          profileURL: response.data.profileURL,
        });
      } catch (error) {
        console.error("Error due to getting author:", error);
        console.log("Something went wrong!");
      }
    };
    getAuthor();
  }, [authorId]);

  const handleSubmit = async (values: saveAuthorDTO) => {
    try {
      console.log("Updating Author:", values);

      const formData = new FormData();
      formData.append("name", values.authorName);
      if (values.biography) formData.append("biography", values.biography);
      if (values.dateOfBirth)
        formData.append("dateOfBirth", values.dateOfBirth.toISOString());
      if (values.profile) formData.append("picture", values.profile);

      const response = await axios.put(`${updateAuthorURL}/${authorId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Author updated successfully:", response.data);
      alert("Author updated successfully!");
    } catch (error) {
      console.error("Error updating author:", error);
      alert("An error occurred while updating the author.");
    }
  };

  if (!author) return <p>Loading...</p>;

  return (
    <div>
      <h2>Edit Author</h2>
      {author && <AuthorForm model={author} onSubmit={handleSubmit} />}
    </div>
  );
}
