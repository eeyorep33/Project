import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import SongsList from './components/SongList';
import SongDetails from './components/SongDetails';
import './App.css';
import axios from 'axios'

class App extends Component {
  constructor() {
    super()
    this.state = {
      songs: [],
      current: { name: "Achy Breaky Heart", Artist: "Billy Ray Cyrus", Album: "Some Gave All", Release: 1992, Genre: "Country", source: "./achy.mp3", trackId: 1 },
      playStatus: "pause"
    }
  }
  //maintains current playStatus if app is updated
  componentDidUpdate(prev_props, prev_state) {
    if (prev_state.current.trackId !== this.state.current.trackId) {
      if (prev_state.playStatus === "play") {
        this.setState({ playStatus: "play" })
        this.audioPlay.play();
      }
    }
  }
  componentDidMount() {
    axios.get('http://localhost:8080/songs')
      .then(res => {
        console.log(res.data)
        this.setState({
          songs: res.data

        })
      })
      .catch((error) => {
        console.log("error")
        console.log(error)
      });
    this.audioPlay.onended = () => { this.advancePlay() }
  };



  // automatically starts next song when previous song ends and loops songlist
  advancePlay = () => {
    let next = this.state.current.trackId
    next += 1
    let track = this.state.songs.find((el) => {
      return el.trackId === next
    })
    if (this.state.current.trackId === this.state.songs.length) {
      this.setState({ current: this.state.songs[0] }, () => this.audioPlay.play())
    } else {
      this.setState({ current: track }, () => this.audioPlay.play())
    }

  }
  //advances current track by 10 seconds
  changeTime = (time) => {
    this.audioPlay.currentTime = this.audioPlay.currentTime + time
  }
  // finds the id of the next song and plays that song when the next or previous track button is clicked
  changeTrack = (id) => {
    let track = this.state.songs.find((el) => {
      return el.trackId === id
    })
    this.setState({ current: track })
  }
  //fins the id of the sons associated with the mapped play button and plays that song
  findSong = (id) => {
    let track = this.state.songs.find((el) => {
      return el.trackId === id
    })
    this.setState({ playStatus: "play", current: track }, () => { this.audioPlay.play() })
  }
  play = () => {
    this.audioPlay.play()
    this.setState({ playStatus: "play" })

  }
  pause = () => {
    this.audioPlay.pause()
    this.setState({ playStatus: "pause" })
  }
  render() {
    const { match, location } = this.props
    //passed argument for changeTrack function to advance to next song
    let next = this.state.current.trackId
    if (next === this.state.songs.length) {
      next = 1
    } else {
      next += 1
    };
    //passed argument for changeTrack function to go back a song
    let previous = this.state.current.trackId
    if (previous === 1) {
      previous = this.state.songs.length
    } else {
      previous -= 1
    };
    return (
      <div>
        <h1 className="mainTitle">Annoying Songs You Love To Hate</h1>
        <div className="center">
          <audio ref={(audio) => { this.audioPlay = audio }} src={this.state.current.source}></audio>
          <button className="controlButtons" onClick={() => this.changeTime(-10)}><i className="fas fa-fast-backward"></i></button>
          <button className="controlButtons" onClick={() => this.changeTrack(previous)}><i className="fas fa-backward"></i></button>
          <button className="controlButtons" onClick={() => this.play()}><i className="fas fa-play"></i></button>
          <button className="controlButtons" onClick={() => this.pause()}><i className="fas fa-pause"></i></button>
          <button className="controlButtons" onClick={() => this.changeTrack(next)}><i className="fas fa-forward"></i></button>
          <button className="controlButtons" onClick={() => this.changeTime(10)}><i className="fas fa-fast-forward"></i></button>
        </div>
        <p className="songTitle center">{this.state.current.name}</p>
        <div className="navBar">
          <button className="btn songButton"><Link className="buttonText" to="/">Songs</Link></button>
        </div>
        <Switch>
          <Route exact path="/" render={(props) => <SongsList 
          details={this.songDetails} 
          change={this.findSong} 
          songs={this.state.songs}{...props} />} />
          <Route path='/:trackId' render={(props) => <SongDetails 
          songs={this.state.songs} 
          change={this.findSong}{...props} />} />
        </Switch>
      </div>
    );
  }
}

export default App;