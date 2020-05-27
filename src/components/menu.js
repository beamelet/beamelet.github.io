import React, {Component} from "react"
import { Link } from "gatsby"
import menu from "./menu.module.css"

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {showModal: false, showOpen: true};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      showModal: !prevState.showModal
    }));
    this.setState(prevState => ({
      showOpen: !prevState.showOpen
    }));
  }

  render() {
    const modal = (
        <div className={menu.group}>
          <Link to={`/`} className={menu.item} >HOME</Link>
          <Link to={`/projects/`} className={menu.item}>FOLIO</Link>
          <Link to={`/about/`} className={menu.item}>ABOUT</Link>
        </div>
    );

    const open = (
      <div className={menu.open}>MENU</div>
    );
    
    return (
      <div className={menu.main} onClick={this.handleClick} onKeyDown={this.handleClick} role="button" tabIndex={0}>
        {this.state.showOpen ? open : ''}
        {this.state.showModal ? modal : ''}
      </div> 
    );
  }   
}

export default Menu