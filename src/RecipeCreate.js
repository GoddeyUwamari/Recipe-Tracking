import React, { useState } from "react";

function RecipeCreate({action: setRecipes}) {

  const [form, setForm] = useState({
    name: '',
    cuisine: '',
    photo: '',
    ingredients: '',
    preparation: ''
  });
  
  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    
    setForm((values) => ({...values, [name]: value}));
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setRecipes(oldValues => {
      return [...oldValues, form]
    });
    setForm({
      name: '',
      cuisine: '',
      photo: '',
      ingredients: '',
      preparation: ''
    });
  }
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input name="name" value={form.name} onChange={handleChange}/>
            </td>
            <td>
              <input name="cuisine" value={form.cuisine} onChange={handleChange}/>
            </td>
            <td>
              <input name="photo" value={form.photo} onChange={handleChange}/>
             </td>
            <td className="content_td">
                <textarea name="ingredients" value={form.ingredients} onChange={handleChange}></textarea>
            </td>
            <td className="content_td">
                <textarea name="preparation" value={form.preparation} onChange={handleChange}></textarea>
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
