import React from "react";
import Form from './FormContainer';



export default function App() {
  return (
    <div>
      <Form />


    </div>
  )
}















// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       firstName: "",
//       lastName: "",
//       age: "",
//       favCountry: "",
//       isVegetable: true,
//       isPepper: true
      
//     };
//   }

//   handleChange = (e)=>{
//     const {name, value, checked, type} = e.target
   
//      type === "checkbox" ? this.setState({ [name]: checked }) :this.setState({

//  [name]: value}) 
   
//   }
//   render() {
//     return (
//       <React.Fragment>
//         <form>
//           <input
//             type="text"
//             name="firstName"
//             value={this.state.firstName}
//             placeholder="firstName"
//             onChange={this.handleChange}
//           />
//           <br />
//           <input
//             type="text"
//             name="lastName"
//             value={this.state.lastName}
//             placeholder="lastName"
//             onChange={this.handleChange}
//           />
//           <br />
//           <input
//             type="text"
//             name="age"
//             value={this.state.age}
//             placeholder="age"
//             onChange={this.handleChange}
//           />

//           <label>
//             <input
//               type="radio"
//               name="gender"
//               value="male"
//               checked={this.state.gender === "male"}
//               onChange={this.handleChange}
//             />
//             Male
//           </label>
//           <br />

//           <label>
//             <input
//               type="radio"
//               name="gender"
//               value="female"
//               checked={this.state.gender === "female"}
//               onChange={this.handleChange}
//             />
//             Female
//           </label>
//           <br />

//           <label>
//             <input
//               type="checkbox"
//               name="isVegetable"
//               checked={this.state.isVegetable}
//               onChange={this.handleChange}
//             />
//             Vegetables
//           </label>

//           <label>
//             <input
//               type="checkbox"
//               name = "isPepper"
//               checked={this.state.isPepper}
//               onChange={this.handleChange}
//             />
//             Pepper
//           </label>

//           <br />
//           <button>Submit</button>
//         </form>

//         <h4> {this.state.firstName} </h4>
//         <h4>{this.state.lastName} </h4>
//         <h4> {this.state.age}</h4>
//         <h4>{this.state.gender}</h4>
//         <h4>{this.state.favCountry}</h4>
//         <h4>You selected :{this.state.isVegetable}</h4>
//         <br />
//         <select
//           value={this.state.favCountry}
//           name="favCountry"
//           onChange={this.handleChange}
//         >
//           <option>Please choose a country...</option>
//           <option value="naija">Nigeria</option>
//           <option value="germane">Germany</option>
//           <option value="itly">Italy</option>
//           <option value="jand">America</option>
//         </select>
//       </React.Fragment>
//     );
//   }
// }
 
// export default App;

















// import React, { Component } from 'react'
// class App extends Component {
// constructor(){
//   super();
//   this.state = {
//     firstName: "",
//     isFriendly: true,
//     gender: "",
//     favColor: "",
//     destination: "",
//     age: 0,
//     dietryRestriction: []
//   };
// }

// handleChange = (e)=>{
//   const {name, type, checked, value} = e.target
//  type === "checkbox"
//    ? this.setState({ [name]: checked })
//    : this.setState({ [name]: value });
// }

//   render() { 
//     return (
//       <form>
//         <input
//           type="text"
//           value={this.state.firstName}
//           name="firstName"
//           placeholder="First Name"
//           onChange={this.handleChange}
//         />
//         <input
//           type="text"
//           value={this.state.lastName}
//           placeholder="last Name"
//           name="lastName"
//           onChange={this.handleChange}
//         />
//         <h3>
//           {this.state.firstName} {this.state.lastName}
//         </h3>

//         <textarea value="some text..." />
//         <br />

//         <label>
//           <input
//             type="checkbox"
//             name="isFriendly"
//             checked={this.state.isFriendly}
//             onChange={this.handleChange}
//           />{" "}
//           Is Friendly ?
//         </label>
//         <br />
//         <label>
//           <input
//             type="radio"
//             name="gender"
//             value="male"
//             checked={this.state.gender === "male"}
//             onChange={this.handleChange}
//           />{" "}
//           Male
//         </label>
//         <br />
//         <label>
//           <input
//             type="radio"
//             name="gender"
//             value="female"
//             checked={this.state.gender === "female"}
//             onChange={this.handleChange}
//           />{" "}
//           Female
//         </label>
//         <br />

//         <label>Favorite color</label>
//         <select 
//           value={this.state.favColor}
//           onChange = {this.handleChange}
//           name = "favColor"
//           >
//           <option value="blue">Blue</option>
//           <option value="green">Green</option>
//           <option value="red">Red</option>
//         </select>

//         <h3>You fav color is : {this.state.favColor}</h3>
//         <button>Submit</button>
//       </form>
      
//     );
//   }
// }
 
// export default App;