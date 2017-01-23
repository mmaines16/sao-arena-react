import React from "react";
import ReactDOM from "react-dom";

export default class Skill extends React.Component {

  onSkillImageClick = () => {
    var thumbnail = ReactDOM.findDOMNode(this).getElementsByClassName("thumbnail-skill")[0];
    console.log('Skill Thumbnail Selected');
    console.log(thumbnail);


    if(thumbnail.className == "thumbnail-skill selected"){
      thumbnail.className = "thumbnail-skill"
    }
    else {
      thumbnail.className = "thumbnail-skill selected"
    }
  }

  render() {
    return (
      <div class="col-md-3 skill">
        <div class="thumbnail-skill" onClick={this.onSkillImageClick}>
        </div>
      </div>
    );
  }
}
