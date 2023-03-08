import { API, broadcast } from "./util";

export default class FollowToggle {
  constructor(toggleButton) {
    // Your code here
    this.theToggleButtonContainer = toggleButton;
    // console.log("hello from followtoggle xonsdfvasfgas");
    // console.log(toggleButton);
    this.theToggleButtonContainer.addEventListener("click", this.handleClick)
  }

  async handleClick(event) {
    // Your code here
    // console.log(event)
    let a = event;
    setTimeout(() => {debugger}, 1000);
    debugger
    
  }

  async follow() {
    // Your code here
  }

  async unfollow() {
    // Your code here
  }

  render() {
    switch (this.followState) {
      // Your code here

    }
  }

  get followState() {
    return this.toggleButton.dataset.followState;
  }

  set followState(newState) {
    this.toggleButton.dataset.followState = newState;
    this.render();
  }
}