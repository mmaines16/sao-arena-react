import React from "react";

export default class AvatarBox extends React.Component {
  render() {
    return (
      <div class="avatar-box row">
          <div class="thumbnail"></div>
        <div class="row">
          <div class="avatar-handle">
            <span>TestName123</span>
          </div>
        </div>
      </div>
    );
  }
}
