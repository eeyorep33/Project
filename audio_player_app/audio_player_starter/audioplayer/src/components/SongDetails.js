import React, { Component } from 'react';

class SongDetails extends Component {
    //uses the track id to identify which song details to display
    songDetails = (i) => {
        let index = this.props.songs.findIndex((el) => {
            return el.trackId === i
        })
        return <div>
            <div>
                <p className="center songTitle">{this.props.songs[index].name}</p>
                <img className="cover" src={this.props.songs[index].cover} alt='album cover' />
                <p className="center detailInfo">Artist: {this.props.songs[index].Artist}</p>
                <p className="center detailInfo">Album: {this.props.songs[index].Album}</p>
                <p className="center detailInfo">Release Date: {this.props.songs[index].Release}</p>
                <p className="center detailInfo">Genre: {this.props.songs[index].Genre}</p>
            </div>
        </div>
    }
    render() {
        const { match, location } = this.props
        let param = parseInt(this.props.match.params.trackId)       
        return (
            <div className="details" >
                {this.songDetails(param)}
                <button className="controlButtons detailButton" onClick={() => this.props.change(param)}><i className="fas fa-play"></i></button>
            </div>
        )
    }
}

export default SongDetails;