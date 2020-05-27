import React, {Component} from "react"
import contact from "./contact.module.css"

import Linkedin from "../../static/linkedin.png"

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {showModal: false, showExit: false};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      showModal: !prevState.showModal
    }));
    this.setState(prevState => ({
        showExit: !prevState.showExit
    }));
  }

  render() {
    const modal = (
      <div className={contact.body}>
        <div className={contact.content}>
          <p>EMAIL: nuttha.cs@gmail.com
          <br />LINE: beam.ns</p>
        </div>
        <a href="https://www.linkedin.com/in/nuttha-sirilertworakul" target="_blank" rel="noopener noreferrer"><img className={contact.icon} src={Linkedin} alt="LinkedIn icon" /></a>
      </div>
    );

    const exit = (
        <div className={contact.exit}>x</div>
    );
    
    return (
      <div id={contact.container}>
        <div className={contact.button} onClick={this.handleClick} onKeyDown={this.handleClick} role="button" tabIndex="0">
          CONTACT
          {this.state.showExit ? exit : ''}
        </div>
        {this.state.showModal ? modal : ''}
      </div> 
    );
  }  
}

export default Contact;