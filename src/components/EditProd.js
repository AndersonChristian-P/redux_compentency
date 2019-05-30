import React, { Component } from "react"
import axios from "axios"
import "./EditProd.css"

class EditProd extends Component {
  state = {
    editName: "",
    prodId: ""
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  handleEditProduct = () => {
    const { editName: newName, prodId } = this.state
    axios.put(`/api/product/${prodId}`, { newName })
      .then(res => {
        this.setState({
          editName: "",
          prodId: ""
        })
      })
  }

  render() {
    return (
      <div className="edit-prod">
        <input
          type="text"
          placeholder="product id"
          onChange={this.handleChange}
          value={this.state.prodId}
          name="prodId"
        />
        <input
          type="text"
          placeholder="new product name"
          onChange={this.handleChange}
          value={this.state.editName}
          name="editName"
        />
        <button onClick={this.handleEditProduct}>Click to Edit Product Name</button>
      </div>
    )
  }
}

export default EditProd