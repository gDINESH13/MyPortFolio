import React from 'react'
import {
    Card,
    CardActions,
    CardMedia,
    CardTitle,
    CardText
  } from "material-ui/Card"

const style = {}
const titleStyle = {}
const imageStyleDiv = {}
const imageStyle = {}
const styleCardFooter = {}

const Template=({Name,github,image,alt,youtube,description})=>{
    return (
        <Card style={style} className="cardDiv">
          <CardMedia
            overlay={
              <CardTitle style={titleStyle} title={Name} />
            }
          >
            <div className="paperImageClass" style={imageStyleDiv}>
              <img
                src={image}
                alt={alt}
                style={imageStyle}
              />
            </div>
          </CardMedia>
          <CardText className="cardTextDiv">
            {description}
          </CardText>
          <CardActions style={styleCardFooter}>
            
                <a href={github} target="_blank" style={{ display: github!=="#"?'Block':'None'}}>
                    <i className="fa fa-github" aria-hidden="true" /> Github
                </a>
            
                    
                <a href={youtube} target="_blank" style={{ display: youtube!=="#"?'Block':'None'}}>
                    <i className="fa fa-youtube" aria-hidden="true" /> YouTube
                </a>
            
          </CardActions>
        </Card>
      )
}

export default Template

