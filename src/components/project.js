import React, {Component} from "react"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import project from "./project.module.css"

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {showModal: false, showMore: true};
    this.handleClick = this.handleClick.bind(this);
    this.Part = this.Part.bind(this);
    this.Ref = this.Ref.bind(this);
  }
  
  handleClick() {
    this.setState(prevState => ({
      showModal: !prevState.showModal
    }));
    this.setState(prevState => ({
        showMore: !prevState.showMore
    }));
  }

  Part(props) { // Conditionally render part if the detail of the part is not null
    if (props.detail == null )
      return (
        ''
      )
    else
      return (
        <div id={project.part}>
          <div className={project.header}>{props.header}</div>
          <div className={project.detail}>{props.detail}</div> 
        </div>
      )
  }

  Ref(props) {
    if (props.references == null )
      return (
        ''
      )
    else
      return (
        <div id={project.part}> 
          <OutboundLink className={project.header} href={require("../../content/pdfs/" + props.references + ".pdf")} type="application/pdf" target="_blank" rel="noopener noreferrer">REFERENCES</OutboundLink> 
        </div>
      )
  }

  render() {
    console.log(this.props)
    const modal = (
      <div>
        <this.Part
          header="TECHNOLOGIES"
          detail={this.props.technologies} />
        <this.Part
          header="DATASET(S)"
          detail={this.props.dataset} />
        <this.Part
          header="APPROACH"
          detail={this.props.approach} />
        <this.Part
          header="PROJECT PARTNER(S)"
          detail={this.props.partners} />
        <this.Ref references={this.props.references} />
      </div>
    );

    const more = (
      <div className={project.more} onClick={this.handleClick} onKeyDown={this.handleClick} role="button" tabIndex="0">&#9660;</div>
    );

    const less = (
      <div className={project.less} onClick={this.handleClick} onKeyDown={this.handleClick} role="button" tabIndex="0">&#9650;</div>
    );
    
    return (
      <div className={project.main}>
        <div id={project.topic}>
          <div className={project.number}>Project - {this.props.id}</div>
          <div className={project.name}>{this.props.title}</div> 
        </div>
        <div className={project.content}>
          <img className={project.image} src={require("../../content/projects/" + this.props.image + "/" + this.props.image + ".png")} alt={this.props.image} />
          <div className={project.intro}>
            {this.props.excerpt}   
          </div>
          
          {this.state.showModal ? modal : ''}
          <div>{this.state.showMore ? more : less}</div>
          
        </div>
      </div> 
    );
  }
}

export default Project;