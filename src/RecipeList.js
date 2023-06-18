import React from "react";

function RecipeList({data: recipes, action: setRecipes}) {
  
  function deleteRecipe(index){
     setRecipes(oldValues => {
      return oldValues.filter((_, i) => i !== index)
     });
  }
  
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
        <tbody>
          {recipes.map((recipe,index)=> {
            return (<tr>
                        <td>{recipe.name}</td>
                        <td>{recipe.cuisine}</td>
                        <td><img src={recipe.photo} alt="photo"/></td>
                        <td className="content_td"><p>{recipe.ingredients}</p></td>
                        <td className="content_td"><p>{recipe.preparation}</p></td>
                        <td><button name="delete" onClick={()=>deleteRecipe(index)}>Delete</button></td>
                    </tr>)
          })}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
