import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import SongDetails from './SongDetails';
class SongsList extends Component {
    render() {
        const { match, location } = this.props
        const songList = (path) => {
            if (path === "/") {
                return <div>
                    {this.props.songs.map((item, i) =>
                        <div key={i} className="divBorder">
                            <button className="controlButtons" onClick={() => this.props.change(item.trackId)}><i className="fas fa-play"></i></button>
                            <Link to={'/' + item.trackId}><p className="songs">{item.name}</p></Link>
                        </div>)}
                </div>
            }
        }
        return (
            <div>
                {songList(location.pathname)}
                <Switch>
                    <Route path='/:trackId' render={(props) => <SongDetails 
                    change={this.props.change} 
                    songs={this.state.songs}{...props} />} />
                </Switch>
            </div>
        )
    }
}

export default SongsList;