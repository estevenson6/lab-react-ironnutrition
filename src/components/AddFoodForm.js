import { Divider, Input } from 'antd';
import {useState} from 'react'

// Iteration 4
function AddFoodForm(props) {

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState("");
    const [servings, setServings] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newFood = {
          name: name,
          image: image,
          calories: calories,
          servings: servings
        };
    
        props.addFood(newFood)
    
        setName("");
        setImage("");
        setCalories("");
        setServings("")
      };
  
  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" onChange={(e) => {setName(e.target.value)}} />

      <label>Image</label>
      <Input value={image} type="text" onChange={(e) => {setImage(e.target.value)}} />

      <label>Calories</label>
      <Input value={calories} type="number" onChange={(e) => {setCalories(e.target.value)}} />

      <label>Servings</label>
      <Input value={servings} type="number"  onChange={(e) => {setServings(e.target.value)}} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
