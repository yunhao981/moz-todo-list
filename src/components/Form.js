import React, { useState } from "react";

// class Form extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   handleSubmit(e) {
//     e.preventDefault();
//     alert("Hello World");
//   }
//   render(){
//     return (
//       <form>
//       <h2 className="label-wrapper">
//         <label htmlFor="new-todo-input" className="label__lg">
//           What needs to be done?
//         </label>
//       </h2>

//       <input
//         type="text"
//         id="new-todo-input"
//         className="input input__lg"
//         name="text"
//         autoComplete="off"
//       />

//       <button type="submit" className="btn btn__primary btn__lg">
//         Add
//       </button>
//       </form>
//    );
//   }
// }

function Form(props) {
  const [name, setName] = useState('');

  function handleChange(e) {
    setName(e.target.value);
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    props.addTask(name);
    setName('');
  }
  return(
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
       <label htmlFor="new-todo-input" className="label__lg">
           What needs to be done?
         </label>
       </h2>

       <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />

      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;