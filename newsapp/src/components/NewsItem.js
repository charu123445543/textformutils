//write rce
import React, { Component } from 'react'

export class NewsItem extends Component {

    render () {
        // let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        let { title, description, imageUrl, newsUrl, author, date } = this.props;
        return (
            <div className='my-3'>
                <div className="card" >
                    {/* <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '90%', zIndex: '1' }}> {source}</span> */}
                    {/* <img className="card-img-top" src={imageUrl} alt=".." /> */}
                    <img src={!imageUrl ? "https://www.xda-developers.com/files/2022/08/steam-deck-design-2.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date( date ).toGMTString()}</small></p>
                        <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
