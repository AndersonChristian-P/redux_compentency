import React, { Component } from "react"
import { connect } from "react-redux"
import { requestProducts } from "./../redux/productReducer"

import "./ProductListing.css"

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
    const list = this.state.products.map((product, i) => {
      return (
        <div className="image" key={i}>
          <img src={product.img0} alt="" />
        </div>
      )
    })

    return (
      <div>
        <h1>Product Images</h1>
        <div className="prod-images">
          {list}
        </div>

      </div>

    )
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, { requestProducts })(ProductListing)