import React, { useState } from "react";

function RecipeCreate({ recipes, setRecipes }) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers.

  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [formData, setFormData] = useState({ ...initialFormState });

  const handleChange = ({ target }) => {
    const value = target.value;

    console.log(value);

    setFormData({ ...formData, [target.name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setRecipes([...recipes, formData]);
    setFormData({ ...initialFormState });
    console.log(formData);
    console.log(recipes);
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                placeholder="Name"
                onChange={handleChange}
                required
              />
            </td>
            <td>
              <input
                id="cuisine"
                name="cuisine"
                type="text"
                value={formData.cuisine}
                placeholder="Cuisine"
                onChange={handleChange}
                required
              />
            </td>
            <td>
              <input
                id="photo"
                name="photo"
                type="url"
                value={formData.photo}
                placeholder="URL"
                onChange={handleChange}
                required
              />
            </td>
            <td>
              <textarea
                id="ingredients"
                name="ingredients"
                value={formData.ingredients}
                placeholder="Ingredients"
                onChange={handleChange}
                required
              />
            </td>
            <td>
              <textarea
                id="preparation"
                name="preparation"
                value={formData.preparation}
                placeholder="Preparation"
                onChange={handleChange}
                required
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
