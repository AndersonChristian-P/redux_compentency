import React, { Component } from "react"
import { connect } from "react-redux"
import { requestProducts } from "./../redux/productReducer"

class ProductListing extends Component {
  constructor() {
    super()
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    this.handleGetProducts()
  }

  handleGetProducts = async () => {
    await this.props.requestProducts()
    await this.setState({
      products: this.props.products
    })
  }

  render() {
    console.log("THIS IS THE PRODUCT LIST", this.state.products)
    return (
      <div>Jello World</div>
    )
  }
}

function mapStateToProps(state) {
  const { products } = state.productReducer
  return {
    products
  }
}

export default connect(mapStateToProps, { requestProducts })(ProductListing)