import React, { Component } from "react"

class Contact extends Component {
  render() {
    return (
      <div id="contactContent">
        <div id="contactdiv">
          <h2>
            <a id="mailtag" href="mailto:dinesh13g@gmail.com">
            dinesh13g@gmail.com            </a>
          </h2>
          <span id="SocialMediaSpan">
            <SocialMedia />
          </span>
        </div>
        
      </div>
    )
  }
}
class SocialMedia extends Component {
  render() {
    return (
      <div id="socialMediaContact">
        <a
          href="https://www.linkedin.com/in/dinesh-g-9026441b4/"
          target="_blank"
        >
          <i className="fa fa-linkedin-square" aria-hidden="true" />
        </a>
        
        <a href="https://github.com/gDINESH13" target="_blank">
          <i className="fa fa-github-square" aria-hidden="true" />
        </a>
      </div>
    )
  }
}
export default Contact
