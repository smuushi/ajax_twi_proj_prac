import { API, broadcast } from "./util";

export default class FollowToggle {
  constructor(toggleButton) {
    // Your code here
    this.theToggleButtonContainer = toggleButton;
    // console.log("hello from followtoggle xonsdfvasfgas");
    // console.log(toggleButton);
    // this.followState = this.followState()
    this.theToggleButtonContainer.addEventListener("click", this.handleClick.bind(this))
  }

  async handleClick(event) {
    // Your code here
    // console.log(event)
    event.preventDefault();
    // console.log(this.followState);

    let a = event;
    // setTimeout(() => {debugger}, 1000);
    // debugger

    let theTargetUserId = event.target.dataset.userId;
    // debugger

    if (this.followState === 'true') {
      this.unfollow(theTargetUserId);
    } else {
      this.follow(theTargetUserId);
    }
    
  }

  async follow(userId) {
    // Your code here
    // API.followUser(userId)
    // .then(this.followState = true)
    // .then(this.render)
    const serverUpdate = await API.followUser(userId)
    this.followState = 'true'
    
    this.render();

  }

  async unfollow(userId) {
    // Your code here
    // API.unfollowUser(userId)
    // .then(this.followState = false)
    // .then(this.render)
    const serverUpdate = await API.unfollowUser(userId)
    this.followState = 'false'
    
    this.render();
  }

  render() {
    switch (this.followState) {
      // Your code here
      case 'true':
        this.theToggleButtonContainer.innerText = 'Unfollow!'
        break;
      case 'false':
        this.theToggleButtonContainer.innerText = 'Follow!'
        break;

    }
  }

  get followState() {
    return this.theToggleButtonContainer.dataset.followState;
  }

  set followState(newState) {
    this.theToggleButtonContainer.dataset.followState = newState;
    this.render();
  }
}