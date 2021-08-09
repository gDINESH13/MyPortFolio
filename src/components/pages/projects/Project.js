import React from 'react'
import Paper from "material-ui/Paper"
import {
  Networks,
  eyantra,
  CardForAll,
  SinglePageMail,
  LandingPage,
  WhatsAppClone,
  Auctions
}from './ProjectsInfo'

import Template from './ProjectCard'



const style = {}


class Project extends React.Component{

    render(){
        return (
          <div id="divBeforeProjectContent">
            <div id="projectContent" className="flex-container">
              <div id="projectDiv0" className="projectDiv flex-item">
                <Paper style={style} zDepth={2} className="projectPaperDiv">
                  <Template {...Networks}/>
                </Paper>
              </div>
              <div id="projectDiv0" className="projectDiv flex-item">
                <Paper style={style} zDepth={2} className="projectPaperDiv">
                  <Template {...WhatsAppClone}/>
                </Paper>
              </div>
              <div id="projectDiv0" className="projectDiv flex-item">
                <Paper style={style} zDepth={2} className="projectPaperDiv">
                  <Template {...Auctions}/>
                </Paper>
              </div>
              <div id="projectDiv0" className="projectDiv flex-item">
                <Paper style={style} zDepth={2} className="projectPaperDiv">
                  <Template {...CardForAll}/>
                </Paper>
              </div>
              <div id="projectDiv0" className="projectDiv flex-item">
                <Paper style={style} zDepth={2} className="projectPaperDiv">
                  <Template {...SinglePageMail}/>
                </Paper>
              </div>
              
              <div id="projectDiv0" className="projectDiv flex-item">
                <Paper style={style} zDepth={2} className="projectPaperDiv">
                  <Template {...LandingPage}/>
                </Paper>
              </div>

              <div id="projectDiv0" className="projectDiv flex-item">
                <Paper style={style} zDepth={2} className="projectPaperDiv">
                  <Template {...eyantra}/>
                </Paper>
              </div>
            </div>
          </div>
        )
    }
    
}

export default Project

