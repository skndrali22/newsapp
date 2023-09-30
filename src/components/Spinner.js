import React, { Component } from 'react'
import loadingImage from './loading.webp';


export class Spinner extends Component {
  render() {
    return (
      <div>
         <img src={loadingImage} alt= "loading" />   
      </div>
    )
  }
}

export default Spinner
