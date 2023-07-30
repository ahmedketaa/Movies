import React, { useState } from 'react';

const TodoList = () => {
  const [todoTitle, setTodoTitle] = useState('');
  const [btnValue, setBtnValue] = useState('Add');
  const [product, setProduct] = useState([]);
  const [todo, setTodo] = useState(null); // Store the todo in the state

  const getInputValue = (e) => {
    setTodoTitle(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (todoTitle) {
      setProduct([...product, { title: todoTitle }]);
      setTodoTitle('');
    }
  };

  const setUpdateMode = (todo) => {
    setTodoTitle(todo.title);
    setBtnValue('Update');
    setTodo(todo); // Store the todo in the state when entering update mode
  };

  const updateTodo = (e) => {
    e.preventDefault();

    // Check if the todo is available in the state (set in setUpdateMode)
    if (!todo) {
      console.log("Todo not found!");
      return;
    }

    // Find the index of the todo to update in the 'product' array using the original title
    const todoIndexToUpdate = product.findIndex((t) => t.title === todo.title);

    // Check if the todo with the given title was found
    if (todoIndexToUpdate !== -1) {
      // Create a copy of the todo to update
      const updatedTodo = { ...product[todoIndexToUpdate] };

      // Update the todo properties using the updated title from 'todoTitle'
      updatedTodo.title = todoTitle; // Assuming you want to update the title
      // Add more properties to update as needed

      // Create a copy of the 'product' array and update the specific todo
      const updatedProduct = [...product];
      updatedProduct[todoIndexToUpdate] = updatedTodo;

      // Update the 'product' state with the modified array
      setProduct(updatedProduct);
      setTodoTitle('');
      setBtnValue('Add');
      setTodo(null); // Reset the todo in the state after update
    } else {
      console.log("Todo not found!");
    }
  };

  const deleteTodo = (index) => {
    const updatedProduct = product.filter((item, idx) => idx !== index);
    setProduct(updatedProduct);
  };

  return (
    <>
      <form>
        <div className="input-data my-4">
          <label htmlFor="name">Name</label>
          <input onChange={getInputValue} value={todoTitle} type="text" name="name" className='form-control my-2' />
        </div>
        <button className='btn btn-info my-3 float-end' onClick={btnValue === 'Add' ? handleAddTodo : updateTodo}>{btnValue}</button>
        <div className="clear-fix"></div>
      </form>
      <div className="container">
        <table className='table'>
          <thead>
            <tr>
              <th>قائمة المهام</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {product.length === 0 ? (
              <tr>
                <td colSpan="2">not found</td>
              </tr>
            ) : (
              product.map((item, index) => (
                <tr key={index}>
                  <td className='table-warning'>{item.title}</td>
                  <td>
                    <button className='btn btn-danger m-2' onClick={() => deleteTodo(index)}>Delete</button>
                    <button className='btn btn-warning' onClick={(e) => setUpdateMode(item)}>Update</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TodoList;
