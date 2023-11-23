import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {
    constructor() {
        super()
        
        this.state = {
            count: 0
        }
  }
  
  increase=()=>{
    if(this.state.count<2){
        this.setState({count: this.state.count+1})
    }else if(this.state.count>=2){
        this.setState({count:0})
    }
}

decrease=()=>{
    if(this.state.count>0){
        this.setState({count: this.state.count-1})
    }else if(this.state.count<=0){
        this.setState({count:2})
    }
}

render(){
    return(
        <>
            <div className="Container">
                <div className="leftbutton" onClick={this.decrease}>
                    <ArrowBackIosIcon/>
                </div>
                <img src={images[this.state.count].img} alt="" />
                <div className="rightbutton" onClick={this.increase}>
                    <ArrowForwardIosIcon/>
                </div>
            </div>
            <div className="caption">
                <h3>{images[this.state.count].subtitle}</h3>
            </div>
        </>
    )
  }
}

export default Carousel;