import React, { Component } from 'react'
import loadingImage from './loading.webp';


export class Spinner extends Component {
  render() {
    return (
      <div className='text-center container' >
         <img style={{height:'180px'}} src={loadingImage} alt= "loading" />   
      </div>
    )
  }
}

export default Spinner
