//write rce
import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";




export class News extends Component {
    // articles = [
    //     {
    //         "source": { "id": "news24", "name": "News24" },
    //         "author": "Sibusiso Mjikeliso",
    //         "title": "Cricket SA wants to 'get to the bottom' of Nkwe resignation concerns, says CEO | Sport",
    //         "description": "Acting Cricket South Africa CEO Pholetsi Moseki says the board is concerned about the issues former Proteas assistant coach Enoch Nkwe raised in his resignation.",
    //         "url": "https://www.news24.com/sport/Cricket/Proteas/cricket-sa-wants-to-get-to-the-bottom-of-nkwe-resignation-concerns-says-ceo-this.props.pageSize210826",
    //         "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/10743/97d776dc91734e98906c0e1b7f3b1afa.jpg",
    //         "publishedAt": "this.props.pageSize21-08-26T11:40:16+00:00",
    //         "content": "<ul><li>Cricket South Africa has committed to \"getting to the bottom\" of Enoch Nkwe's sudden resignation as Proteas assistant coach. </li><li>Nkwe voiced concerns with the current culture and working… [+3497 chars]"
    //     },
    //     {
    //         "source": { "id": "abc-news-au", "name": "ABC News (AU)" },
    //         "author": "ABC News",
    //         "title": "England cricket great Ted Dexter dies aged 86",
    //         "description": "The former England captain, nicknamed \"Lord Ted\", is fondly remembered as a giant of the game and one of his country's greatest players.",
    //         "url": "http://www.abc.net.au/news/this.props.pageSize21-08-26/england-cricket-great-ted-dexter-dies-aged-86/100411276",
    //         "urlToImage": "https://live-production.wcms.abc-cdn.net.au/1006c7ecf34ec0935eef2aade5017711?impolicy=wcms_crop_resize&cropH=2815&cropW=5004&xPos=0&yPos=223&width=862&height=485",
    //         "publishedAt": "this.props.pageSize21-08-26T09:07:52Z",
    //         "content": "Former England captain Ted Dexter has died aged 86 following a recent illness.\r\n<ul><li>Dexter played 62 Tests for England and was captain on 30 occasions</li><li>He was inducted into the ICC Hall of… [+1746 chars]"
    //     },
    //     {
    //         "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
    //         "author": null,
    //         "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
    //         "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
    //         "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
    //         "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
    //         "publishedAt": "this.props.pageSizethis.props.pageSize-04-27T11:41:47Z",
    //         "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    //     },
    //     {
    //         "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
    //         "author": null,
    //         "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
    //         "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
    //         "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
    //         "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
    //         "publishedAt": "this.props.pageSizethis.props.pageSize-03-30T15:26:05Z",
    //         "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    //     }
    // ]

    static defaultProps = {
        country: "in",
        pageSize: 20,
        category: "general"

    }

    static propTypes = {
        //pts,ptn
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    capitalizeFirstLetter ( string ) {
        return string.charAt( 0 ).toUpperCase() + string.slice( 1 );
    }
    constructor( props ) {
        super( props );
        console.log( "hello i am constructor" );
        this.state = {
            // articles: this.articles,
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0

        }
        document.title = `${ this.capitalizeFirstLetter( this.props.category ) }-News Monkey`;
    }


    // async updateNews () {
    //     const url = `https://newsapi.org/v2/top-headlines?country=${ this.props.country }&category=${ this.props.category }&apikey=dbe57b028aeb41e285a226a94865f7a7&page=${ this.state.page }&pageSize=${ this.props.pageSize }`;
    //     this.setState( { loading: true } );
    //     let data = await fetch( url );
    //     let parsedData = await data.json()
    //     this.setState( {
    //         articles: parsedData.articles,
    //         totalResults: parsedData.totalResults,
    //         loading: false
    //     } )
    // }

    //ye ek lifecycle methos hai,aur render() ke bad run hota h
    //ek aysnc func apni body mei wait kr skta h kuch promises ke solve hone ka
    async componentDidMount () {
        this.props.setProgress( 10 );
        console.log( "cdm" );
        let url = `https://newsapi.org/v2/top-headlines?country=${ this.props.country }&category=${ this.props.category }&apikey=5468fc62d84343d9adaaaf961b54cb7b&page=${ this.props.page + 1 }&pageSize=${ this.props.pageSize }`;
        this.setState( { loading: true } )
        let data = await fetch( url );
        this.props.setProgress( 30 );
        let parsedData = await data.json()
        this.props.setProgress( 50 );
        console.log( parsedData );
        this.setState(
            {
                articles: parsedData.articles,
                totalResults: parsedData.totalResults,
                loading: false

            } )
        this.props.setProgress( 1000 );
        // this.updateNews();
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    // handlePrevClick = async () => {
    //     console.log( "Prev" );


    //     let url = `https://newsapi.org/v2/top-headlines?country=${ this.props.country }&category=${ this.props.category }&apikey=5468fc62d84343d9adaaaf961b54cb7b&page=${ this.state.page - 1 }&pageSize=${ this.props.pageSize }`;
    //     this.setState( { loading: true } )
    //     let data = await fetch( url );
    //     let parsedData = await data.json()
    //     console.log( parsedData );
    //     this.setState( {
    //         page: this.state.page - 1,
    //         articles: parsedData.articles,
    //         loading: false
    //     } )
    //     // this.setState( { page: this.state.page - 1 } );
    //     // this.updateNews();

    // }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



    // handleNextClick = async () => {
    //     console.log( "Next" );
    //     if ( this.state.page + 1 > Math.ceil( this.state.totalResults / this.props.pageSize ) ) {

    //     }
    //     else {
    //         let url = `https://newsapi.org/v2/top-headlines?country=${ this.props.country }&category=${ this.props.category }&apikey=5468fc62d84343d9adaaaf961b54cb7b&page=${ this.state.page + 1 }&pageSize=${ this.props.pageSize }`;
    //         this.setState( { loading: true } )
    //         let data = await fetch( url );
    //         let parsedData = await data.json()
    //         console.log( parsedData );
    //         this.setState( {
    //             page: this.state.page + 1,
    //             articles: parsedData.articles,
    //             loading: false
    //         } )
    //     }

    //     // this.setState( { page: this.state.page + 1 } );
    //     // this.updateNews();
    // }



    fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${ this.props.country }&category=${ this.props.category }&apikey=5468fc62d84343d9adaaaf961b54cb7b&page=${ this.props.page + 1 }&pageSize=${ this.props.pageSize }`;
        this.setState( {
            page: this.state.page + 1
        } );
        // this.setState( { loading: true } )
        let data = await fetch( url );
        let parsedData = await data.json()
        console.log( parsedData );
        this.setState(
            {
                articles: this.state.articles.concat( parsedData.articles ),
                totalResults: parsedData.totalResults,
                loading: false

            } )



    };


    render () {
        return (
            <>
                {/* pahle infinte scroll mei margin aaari thi to hamne sabko ek ghost containner mei rakh dia */}

                <h1 className="text-center" style={{ margin: '30px 0px', marginTop: '90px' }}>NewsMonkey -Top {this.capitalizeFirstLetter( this.props.category )} Headlines</h1>

                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                >

                    {/* whenver loading is true then only show spineer */}
                    {this.state.loading && <Spinner />}



                    {/* {this.state.articles.map( ( element ) => {
                    console.log( element );
                } )} */}



                    {/* whenever loadinng is false tabhhi content dikao,,agr loading chlri hai to content mat dikao */}
                    {/* {!this.state.loading && this.state.articles.map( ( element ) => { */}
                    <div className="container my-3">

                        <div className="row">
                            {this.state.articles.map( ( element ) => {
                                return <div className="col-md-4" key={element.url}>
                                    <NewsItem key={element.urlToImage} title={element.title ? element.title.slice( 0, 45 ) : ""}
                                        description={element.description ? element.description.slice( 0, 88 ) : ""} imageUrl={element.urlToImage}
                                        newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                </div>
                                // <div className="col md-4">
                                //     <NewsItem title="myTitle" description="mydesc" imageurl="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg" newsUrl="TODO" />
                                // </div>
                            } )}
                        </div>
                    </div >
                </InfiniteScroll >
                {/* <div className="container d-flex justify-content-between">
                    <button type="button" disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                    <button type="button" disabled={this.state.page + 1 > Math.ceil( this.state.totalResults / this.props.pageSize )} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div> */}






            </>




        )
    }
}

export default News
