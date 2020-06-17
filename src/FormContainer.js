import React, { Component } from "react";
import FormComponent from './FormComponent';
class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      favCountry: "",
      isVegetable: true,
      isPepper: true,
    };
  }

  handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({
          [name]: value,
        });
  };
  render() {
    return <FormComponent 
    handleChange = {this.handleChange}
    data = {this.state}
    />;
  }
}
export default FormContainer;

