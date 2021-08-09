import React, { Component } from "react"

class TitleLogo extends Component {
  titleClick() {
    if (this.props.showPage) {
      this.props.resetPage()
    }
  }
  
  render() {
    var titleId = "titleLogoDiv"
    const Name="< DINESH />"
    
    titleId += this.props.showPage ? " titleLogoDiv-small" : ""
    titleId += this.props.showPage === false ? " titleLogoDiv-big" : ""
    return (
      <div className={titleId} onClick={this.titleClick.bind(this)}>
        <h1 id="titleLogoH1">
            {Name}
        </h1>
      </div>
    )
  }
}

export default TitleLogo
