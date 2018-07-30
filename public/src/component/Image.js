import React, {Component} from 'react'
import ImageZoom from './ImageZoom'
import style from '../style/Image.css'
import ReactImageMagnify from 'react-image-magnify';

export default class Image extends Component {
  constructor(props){
    super(props)
    console.log('Image Props', this.props)
    this.state = {
      imageZoom: '',
      backgroundPosition: '30% 30%'
    }
  
    this.handleHoverZoom = this.handleHoverZoom.bind(this);
    this.handleHoverZoomEnd = this.handleHoverZoomEnd.bind(this);
  }
  
  handleHoverZoom(imageZoom){
    console.log('hover zoom', imageZoom);
    this.setState({
      imageZoom:imageZoom
    });
  } 
  
  handleHoverZoomEnd(imageZoom){
    console.log('hover zoom end', imageZoom)
    this.setState({
      imageZoom: ''
    });
  }

  // handleMouseMove = e => {
  //   const { left, top, width, height } = e.target.getBoundingClientRect()
  //   const x = (e.pageX - left) / width * 100
  //   const y = (e.pageY - top) / height * 100
  //   this.setState({ backgroundPosition: `${x}% ${y}%` })
  // }
  render(){
    return(
    <div className={style.imageContainer}>
      <span>
        {/* both style.renderImage / perimeter doesn't control Magnify */}
      <div className = {style.perimeter}>
        <div className={style.renderImage}>
      <ReactImageMagnify {...{
        smallImage: {
        src: this.props.image,
        width:420,
        height:550

      },
      largeImage: {
        src: this.props.image,
        width: 1200,
        height: 1800,
        enlargedImageStyle:{
          height:700,
          width:420
        },
        enlargedImageContainerDimensions:{
          width:'80%',
          height:'80%'
        }
    }
}} />
     </div>
    </div>
      </span>
      <ImageZoom zoomedImage = {this.state.imageZoom} backgroundPosition = {this.state.backgroundPosition}/>
    </div>
      );
  }
}

// render(){
//   return(
//   <div className={style.imageContainer}>
//     <span>
//       <img className = {style.image} src = {this.props.image} 
//            onMouseMove = {() => this.handleHoverZoom(this.props.image)} onMouseLeave = {() => this.handleHoverZoomEnd()}/>
//            onMouseOver = {() => this.handleHoverZoom(this.props.image)} onMouseLeave = {() => this.handleHoverZoomEnd()}/>
//     </span>
//     <ImageZoom zoomedImage = {this.state.imageZoom} backgroundPosition = {this.state.backgroundPosition}/>
//   </div>