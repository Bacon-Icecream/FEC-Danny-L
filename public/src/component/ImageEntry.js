import React, {Component} from 'react'
import style from '../style/ImageEntry.css'

class ImageEntry extends Component{
  constructor(props) {
    super(props)
    console.log('props in ImageEntry', this.props)
  }
  

  render(){
    return (
      <div onMouseOver={() => this.props.hover(this.props.image)}>
        <img className = {style.imageEntry} src = {this.props.image} />
      </div>
    )
  }
}


export default ImageEntry;