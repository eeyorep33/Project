import React, { Component } from 'react';

class Details extends Component {
      //Would format description paragraphbetter if I had more time
      findId = (i) => {
            let index = this.props.items.findIndex((e) => { return e.id === i });
            return <div className="row">
                  <div className="col-lg-3">
                        <img className="top3 " src={this.props.items[index].img} />
                  </div>
                  <div className=" col-lg-9 top3 detailsBackground detailsDiv">
                        <p className="detailInfo">{this.props.items[index].name}</p>
                        <p>{this.props.items[index].description}</p>
                  </div>
            </div>
      }
      render() {
            const { match, location } = this.props
            let param = parseInt(this.props.match.params.id)
            return (<div className="container-fluid position">
                  {this.findId(param)}
            </div>
            )
      }
}
export default Details