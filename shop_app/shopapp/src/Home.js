import React, { Component } from 'react';


class Home extends Component {

  render() {
    const noUserName = (userName) => {
      if (!userName) {
        return (<div className="formCenter">
          <form onSubmit={this.props.handleSubmit}>
            <input className="" type="text" name="userName" />
            <button className="btn catButtonText navBar" type="submit">
              Submit
          </button>
            <label className="enterName">
              Please enter your name.
          </label>
          </form>
          <p className="randomName">Please enter your name before you can begin shopping!!</p>
          <p className="randomName top">Don't like your own name?</p>
          <p className="randomName">Try our random Derby Name generator!</p>
          <button type="button" className="btn  catButtonText" onClick={this.props.generateName}>
            Try Me!
          </button>
          <p className="randomName">{this.props.randomName}</p>
        </div>)
      } else {
        return (<div>
          <p className="centerText welcome">Welcome {userName}</p>
          <img className="pictureCenter" src="images/fight.jpg" />
          <p className="centerText welcome">If you can't play nice, play Roller Derby!</p>
        </div>
        )
      }
    }
    return (
      <div className=" container-fluid background">
        {noUserName(this.props.userName)}
      </div>
    )
  }
}
export default Home