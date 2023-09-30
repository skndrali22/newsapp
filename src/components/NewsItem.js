import React, { Component } from 'react'

export class NewsItem extends Component {
   
  render() {
    let {title , description , imgUrl ,newsUrl} = this.props;
    return (
      <div>
        <div className="card"  style= {{ width:"18rem"}}>
          <img src={!imgUrl?"https://www.hindustantimes.com/ht-img/img/2023/09/29/1600x900/air_india_1695963602560_1695963602832.jpg":imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description} . . .</p>
            <a rel='noreferrer' href={newsUrl}  target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
