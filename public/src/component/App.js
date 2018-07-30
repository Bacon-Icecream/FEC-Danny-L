import React, {Component} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import ImageEntry from './ImageEntry'
import Image from './Image'
import style from '../style/App.css'

class Gallery extends React.Component{
	constructor(props){
		super(props)
		console.log(this.props)
    this.fetchImageEntry();
		this.state = {
      imagesEntry: [],
      image:''
    }
    this.handleHover = this.handleHover.bind(this);

	}
   
   fetchImageEntry(){
   	axios.get('/image/5b5bb3b058b6a8203a68270a')
   	.then(response =>{
   		//console.log('below is response',response);
   		let images = [];
       console.log('response data from db', response.data)
       let imagesSplit = response.data.imageUrl[0].split(',');
    
      for(let i = 0; i < imagesSplit.length; i++){
        //trim get rid of spaces (my input typo)
        let imageUrl = imagesSplit[i].trim();
        images.push(imageUrl);
      }
      this.setState({
        imagesEntry: images,
        image: images[0]
      });
		   
   		console.log('imageUrl in Array: ',this.state.images)
   	})
   	.catch(err =>{
      console.log(err);
   	});
   }

   handleHover(newImage) {
     //console.log('Hi from hover', newImage);
     this.setState({
       image: newImage
     });
   }

   render(){
    return(
      <span className = {style.gallery}>
			  <div className = {style.thumbnail}>
        {this.state.imagesEntry.map(image => (
          <ImageEntry 
            image = {image}
            //key is unique by URL
            key = {image}
            hover={this.handleHover}
          />
        ))}
        </div> 	
        <Image image={this.state.image}/>	
			</span>
		 );
    }
  }
  
  // Gallery.propTypes = {
    //   imageUrls: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
    // };
    
    export default Gallery;
// renderImage(){
// 	 let images = [];
// 	 for (let i = 0; i < this.props.imageUrls.length; i++){
// 	 	images.push(
//         <div key = {i}>

// 	 		<img src = {this.props.imageUrls[i]} />
// 	 		</div>)
// 	 };
//    return images;
// }
// renderImage(imageUrl){
// 	return (
//          <div>
//          	<img src = {imageUrl} />
//          </div>   
//     )
// }