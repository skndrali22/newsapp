import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'




export class News extends Component {
  // articles = [

  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Forbes"
  //     },
  //     "author": "Tristan Lavalette, Contributor, \n Tristan Lavalette, Contributor\n https://www.forbes.com/sites/tristanlavalette/",
  //     "title": "Forgotten Cameron Bancroft Aims For Test Cricket Recall Amid David Warner Uncertainty",
  //     "description": "Cameron Bancroft controversially was overlooked for the Ashes tour, but has a chance for a recall to Australia's Test team amid veteran David Warner's struggles.",
  //     "url": "https://www.forbes.com/sites/tristanlavalette/2023/08/28/forgotten-cameron-bancroft-aims-for-test-cricket-recall-amid-david-warner-uncertainty/",
  //     "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/64ec40abd4d54e3788d8ae21/0x0.jpg?format=jpg&width=1200",
  //     "publishedAt": "2023-08-28T14:22:48Z",
  //     "content": "Cameron Bancroft made a bad start for Australia A as he looks for a national recall (Photo by Albert ... [+] Perez/Getty Images)\r\nGetty Images\r\nAlbion is a hip inner north-eastern suburb of Brisbane,… [+4176 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Forbes"
  //     },
  //     "author": "Tim Ellis, Contributor, \n Tim Ellis, Contributor\n https://www.forbes.com/sites/timellis/",
  //     "title": "How England’s One-Day Cricket Transformed From Cart And Horse To Supersonic",
  //     "description": "England are the kings of the white-ball game after being the jokers of the 50-over format. It all changed after the 2015 World Cup.",
  //     "url": "https://www.forbes.com/sites/timellis/2023/09/13/how-englands-one-day-cricket--transformed-from-cart-and-horse-to-supersonic/",
  //     "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/65009aae66677f0e474f3f18/0x0.jpg?format=jpg&width=1200",
  //     "publishedAt": "2023-09-13T11:02:33Z",
  //     "content": "England are currently playing New Zealand in a warm-up ODI series before the two teams meet in Gujarat to kick off the World Cup roadshow in October. It has been eight years since Eoin Morgans Three … [+5611 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Forbes"
  //     },
  //     "author": "Tristan Lavalette, Contributor, \n Tristan Lavalette, Contributor\n https://www.forbes.com/sites/tristanlavalette/",
  //     "title": "New York, Dallas And Florida Will Host Matches At Next Year’s Historic T20 Cricket World Cup",
  //     "description": "Next year's T20 World Cup in the U.S. and Caribbean will feature matches in New York, Dallas and Lauderhill, Florida, amid a defining period for the sport in America.",
  //     "url": "https://www.forbes.com/sites/tristanlavalette/2023/09/20/new-york-dallas-and-florida-will-host-matches-at-next-years-historic-t20-cricket-world-cup/",
  //     "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/650af345097c40b47b59e63f/0x0.jpg?format=jpg&width=1200",
  //     "publishedAt": "2023-09-20T15:42:23Z",
  //     "content": "The T20 World Cup will be co-hosted by the U.S. (AP Photo/LM Otero)\r\nCopyright 2023 The Associated Press. All rights reserved.\r\nSix years ago, then Cricket Australia boss James Sutherland had a rathe… [+3957 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Forbes"
  //     },
  //     "author": "Tristan Lavalette, Contributor, \n Tristan Lavalette, Contributor\n https://www.forbes.com/sites/tristanlavalette/",
  //     "title": "Australian Cricket Looks To The Future As Allrounder Aaron Hardie Gets His Chance",
  //     "description": "Emerging allrounder Aaron Hardie is on the cusp of his international debut with the 24-year-old looming as a tantalizing option for Australia across formats.",
  //     "url": "https://www.forbes.com/sites/tristanlavalette/2023/08/30/australian-cricket-looks-to-the-future-as-allrounder-aaron-hardie-gets-his-chance/",
  //     "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/64eee1f234708bc7cfd8ae1f/0x0.jpg?format=jpg&width=1200",
  //     "publishedAt": "2023-08-30T14:36:27Z",
  //     "content": "Aaron Hardie has starred in domestic cricket (Photo by James Worsfold/Getty Images)\r\nGetty Images\r\nEarly last Sheffield Shield season, Aaron Hardie found himself in some of the most difficult batting… [+3596 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Forbes"
  //     },
  //     "author": "Tim Ellis, Contributor, \n Tim Ellis, Contributor\n https://www.forbes.com/sites/timellis/",
  //     "title": "England Play Bingo With Harry Brook’s Numbers For Cricket World Cup",
  //     "description": "Harry Brook isn't in England's initial World Cup squad. There may be other batsmen ahead of him on merit, but Brook has something that can't be quantified.",
  //     "url": "https://www.forbes.com/sites/timellis/2023/09/10/england-play-bingo-with-harry-brooks-numbers-for-cricket-world-cup/",
  //     "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/64fdd14fd38167dd0edcb97f/0x0.jpg?format=jpg&width=1200",
  //     "publishedAt": "2023-09-10T14:52:08Z",
  //     "content": "If theres one refreshing thing about Harry Brook, its his simple manner. Thats a compliment in a complex world. Hes a bit dumb,\" said Test captain Ben Stokes on the eve of Brooks Test debut. The newb… [+4906 chars]"
  //   }
  // ]

  static defaultProps = {
    country : "in",
    pageSize:8,
    category: 'general',
    
  }

  static propTypes = {
    country : PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,    
  }

  constructor() {
    super();
    this.state = {
      // articles: this.articles,
      articles: this.articles = [],
      loading: false,
      page: 1,
    }
  }

  async updateNews(){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9eb944a19de04d5fb7f715fb7f78a969&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    this.setState({loading:true});

    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading:false
    })
  }

  async componentDidMount() {
    this.updateNews();
  }

  handlePrevPage = async () => {
    this.setState({page:this.state.page - 1});
    this.updateNews();
  }

  handleNextpage = async () => {
    this.setState({page:this.state.page + 1});
    this.updateNews();
  }
  render() {
    // console.log("render");
    return (
      <div>
        <div className="container my-3">
          <h1 className='text-center' style={{margin:'30px 0'}} >News app - Top headlines</h1>
          {this.state.loading && <Spinner/>}
          <div className="row box1">
            {!this.state.loading &&  this.state.articles.map((element) => {
              return <div className="col-lg-4 col-md-4 my-3 my-3 my-2 inner-box" key={element.url}>
                <NewsItem title={element.title ? element.title.slice(0, 30) : " "} description={element.description ? element.description : " "} imgUrl={element.urlToImage} newsUrl={element.url} author = {element.author} date = {element.publishedAt} source = {element.source.name} />
              </div>
            })
            }
          </div>

          <div className="container d-flex justify-content-between">
            <button disabled={this.state.page <= 1} type='button' className="btn btn-dark" onClick={this.handlePrevPage}>&larr; Previous</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type='button' className="btn btn-dark" onClick={this.handleNextpage}>Next &rarr;</button>
          </div>
        </div>
      </div>
    )
  }
}

export default News
