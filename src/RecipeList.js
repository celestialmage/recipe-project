import React from "react";

function RecipeList({ recipes, setRecipes }) {
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked.

  const handleDelete = (name) => {

    setRecipes(recipes.filter(recipe => recipe.name !== name));

  }

  const formatRecipes = recipes.map((recipe) => (
    <tr>
      <td>{recipe.name}</td>
      <td>{recipe.cuisine}</td>
      <td>
        <img src={recipe.photo} alt="recipe"></img>
      </td>
      <td className="content_td thirty">
        <p>{recipe.ingredients}</p>
      </td>
      <td className="content_td thirty">
        <p>{recipe.preparation}</p>
      </td>
      <td>
        <button name="delete" onClick={() => handleDelete(recipe.name)}>
          Delete
        </button>
      </td>
    </tr>
  ));



  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{formatRecipes}</tbody>
      </table>
    </div>
  );
}

export default RecipeList;
