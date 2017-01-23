import React from "react";

export default class AvatarBox extends React.Component {

  onAvatarImageClick = () => {
    console.log("Avatar Image Selected");
    console.log(this);
  }

  render() {
    return (
      <div class="avatar-box row">
          <div class="thumbnail" onClick={this.onAvatarImageClick}></div>
        <div class="row">
          <div class="avatar-handle">
            <span>TestName123</span>
          </div>
        </div>
      </div>
    );
  }
}
