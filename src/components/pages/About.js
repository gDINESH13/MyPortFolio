import React, { Component } from "react"
import Avatar from "material-ui/Avatar"
import Paper from "material-ui/Paper"
import Chip from "material-ui/Chip"

class About extends Component {
  constructor(props) {
    super(props)
    this.state = { secondsSinceMyBirth: 0, yearsSinceMyBirth: 0 }
  }
  setTime() {
    var birthday = new Date(2002, 3, 13, 0,0, 0).getTime()
    var today = new Date().getTime()
    var time = today / 1000 - birthday / 1000
    var years = Math.floor(time / 31536000)
    var seconds = Math.round(time)
    this.setState({ secondsSinceMyBirth: seconds, yearsSinceMyBirth: years })
  }
  componentWillMount() {
    this.setTime()
  }
  componentDidMount() {
    window.setInterval(
      function() {
        this.setTime()
      }.bind(this),
      1000
    )
  }
  render() {
    return (
      <div id="aboutContentDiv">
        <Paper id="paperContent" zDepth={2}>
          <Paper
            id="paperAvatar"
            className="desktopOnly"
            zDepth={2}
            circle={true}
          >
                <Avatar id="avatarImage" src="images/Dinesh1.jfif" />
          </Paper>
          <div id="aboutTextDiv">
            <h2>Hello World!</h2>
            <p>
              <Paper
                id="paperAvatar"
                className="mobileOnly"
                zDepth={1}
                circle={true}
              >
                <Avatar id="avatarImage" src="images/Dinesh1.jfif" alt="My Photo"/>
          </Paper>
              I'm <span className="heavyFont">Dinesh</span> a{" "}
              <span className="heavyFont">
                {this.state.yearsSinceMyBirth} year old Software Developer,
              </span>{" "}
              on my third year CSE  @ Sri SairamInstitute of technology.{" "}
              A kind of person who is passionate to learn new tech and stuffs.I 
              have been learning web dev for last 5 months not a pro though ;).
              I like problem solving and always excited to work as team. 
              <br />I love programming and everything that has to do with
              technology, the internet and writing code.
            </p>

            <Chips />
            <SocialMediaPhone />
          </div>
          <SocialMediaDesktop />
        </Paper>
      </div>
    )
  }
}
const styles = {
  chip: {
    margin: 10
  },
  wrapper: {
    display: "flex",
    flexWrap: "wrap"
  }
}
class Chips extends Component {
  render() {
    return (
      <div id="listAbout">
        <h3>skills/Knowledge (Intermediate)</h3>
        <div style={styles.wrapper}>
          <Chip style={styles.chip}>JavaScript</Chip>
          <Chip style={styles.chip}>ReactJS</Chip>
          <Chip style={styles.chip}>HTML</Chip>
          <Chip style={styles.chip}>Python</Chip>
          <Chip style={styles.chip}>Django</Chip>
          
        </div>
      </div>
    )
  }
}
class SocialMediaPhone extends Component {
  render() {
    return (
      <span className="mobileOnly">
        <SocialMedia />
      </span>
    )
  }
}
class SocialMediaDesktop extends Component {
  render() {
    return (
      <span className="desktopOnly">
        <SocialMedia />
      </span>
    )
  }
}
class SocialMedia extends Component {
  render() {
    return (
      <div id="socialMediaAbout">
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
export default About
