import React from "react";
import MyFace from "../images/about.jpg";
import { Navigation } from "./Navigation";
import "./Home.css";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "What do you do next?"
    };
  }
  
  render() {
    return (
      <div>
        <div className="App">
          <div className="home">
            <h1>You've Bumped into this guy</h1>
            <img src={MyFace} alt={"MyFace"} className="myface" />
            <p>Something about him is <span>alluring</span>, you approach him.</p>
            <h1>{this.state.message}</h1>
            <h1><Navigation /></h1>
            Contact Details:
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/></svg>
            
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </span>          
          </div>
        </div>
      </div>
    );
  }
}
export { Home };
