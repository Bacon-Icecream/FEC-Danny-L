import React, {Component} from 'react'
import style from '../style/ImageZoom.css'


export default class ImageZoom extends Component{
    constructor(props){
      super(props)
      console.log('ImageZoom props', this.props)
    }
 
    render(){
        return (
         <span >
           <img className = {style.ImageZoom} src = {this.props.zoomedImage} style = {this.props}/>
         </span>
        );
    }
}