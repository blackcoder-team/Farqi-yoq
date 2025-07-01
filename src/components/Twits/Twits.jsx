import { Component, Fragment } from "react";
import "../Twits/Twits.css";
import axios from "axios";

import TwitCard from "./Twit-card/Twit-card";
class Twits extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      twit: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
    console.log(this.state);
  };

  handleSumbit = async () => {
    const { name, twit } = this.state;

    if (!name || !twit) {
      alert("Iltimos, ism va twit yozing");
      return;
    }

    await axios.post("http://localhost:3001/twits", {
      name,
      twit,
    });

    this.setState({ name: "", twit: "" });
  };


  render() {
    return (
      <Fragment>
        <div className="twit m-5" id="twits">
          <h1 className="text-center mb-3">Share with us</h1>

          <div className="share-with">
            <div className="container">
              <div className="row">
                <div className="col-12 share-with-cards">
                  <h2>Yangi Twit qoldiring</h2>
                  <div className="d-flex align-items-center input-icons mt-3">
                    <i className="fa-regular fa-user"></i>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={this.state.name}
                      placeholder="Ismingiz"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="d-flex input-icons mt-3 fffff">
                    <i className="fa-regular fa-comment"></i>
                    <textarea
                      type="text"
                      placeholder="Twit qoldiring "
                      className="form-control"
                      name="twit"
                      value={this.state.twit}
                      onChange={this.handleChange}
                    />
                  </div>

                  <button
                    type="button"
                    className="twit-btn"
                    onClick={this.handleSumbit}
                  >
                    Add Twit
                  </button>

                  <div className="twid-card mt-5">
                    <TwitCard handleSumbit = {this.handleSumbit}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Twits;
