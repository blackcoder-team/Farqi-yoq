import { Component } from "react";
import "../Twit-card/Twit-card.css";
import img from "../Twit-card/user.jpg";
import axios from "axios";

class TwitCard extends Component {
  constructor() {
    super();
    this.state = {
      comments: [],
      likes: {},
      replies: {},
      replyInputs: {},
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/twits")
      .then((response) => {
        this.setState({ comments: response.data });
      })
      .catch((error) => {
        console.error("Xatolik bor:", error);
      });
  }

  handleLike = (id) => {
    this.setState((prevState) => ({
      likes: {
        ...prevState.likes,
        [id]: (prevState.likes[id] || 0) + 1,
      },
    }));
  };

  toggleReplyInput = (id) => {
    this.setState((prevState) => ({
      replyInputs: {
        ...prevState.replyInputs,
        [id]: prevState.replyInputs[id] ? undefined : { name: "", reply: "" },
      },
    }));
  };

  handleReplyChange = (e, id) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      replyInputs: {
        ...prevState.replyInputs,
        [id]: {
          ...prevState.replyInputs[id],
          [name]: value,
        },
      },
    }));
  };

  handleReplySubmit = (id) => {
    const replyData = this.state.replyInputs[id];
    if (!replyData || !replyData.name || !replyData.reply) return;

    const newReply = {
      name: replyData.name,
      reply: replyData.reply,
    };

    this.setState((prevState) => ({
      replies: {
        ...prevState.replies,
        [id]: [...(prevState.replies[id] || []), newReply],
      },
      replyInputs: {
        ...prevState.replyInputs,
        [id]: undefined,
      },
    }));
  };

  render() {
    return (
      <div>
        {this.state.comments.map((item) => (
          <div
            className="d-flex twit-card-mini"
            key={item.id}
            style={{ marginTop: "15px" }}
          >
            <div className="twit-img">
              <img src={img} alt="user" />
            </div>
            <div className="twit-card-mini-content">
              <div className="d-flex align-items-center justify-content-between">
                <h5>{item.name}</h5>
                <p className="time">
                  {new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
              <p>{item.twit}</p>

              <button
                type="button"
                onClick={() => this.toggleReplyInput(item.id)}
              >
                <i className="fa-regular fa-comment"></i>
              </button>

              <button type="button" onClick={() => this.handleLike(item.id)}>
                <i className="fa-regular fa-heart"></i>{" "}
                {this.state.likes[item.id] || 0}
              </button>

              {/* Reply input */}
              {this.state.replyInputs[item.id] && (
                <div style={{ marginTop: "10px" }}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Ismingiz"
                    value={this.state.replyInputs[item.id].name}
                    onChange={(e) => this.handleReplyChange(e, item.id)}
                    style={{ width: "100%", marginBottom: "5px" }}
                  />
                  <input
                    type="text"
                    name="reply"
                    placeholder="Javob yozing..."
                    value={this.state.replyInputs[item.id].reply}
                    onChange={(e) => this.handleReplyChange(e, item.id)}
                    style={{ width: "100%", marginBottom: "5px" }}
                  />
                  <button onClick={() => this.handleReplySubmit(item.id)}>
                    Yuborish
                  </button>
                </div>
              )}

              {/* Show replies */}
              {this.state.replies[item.id] &&
                this.state.replies[item.id].map((r, index) => (
                  <div
                    key={index}
                    className="d-flex align-items-start mt-2"
                    style={{
                      paddingLeft: "10px",
                      borderLeft: "2px solid #ccc",
                    }}
                  >
                    <div
                      className="twit-img"
                      style={{ width: "35px", marginRight: "8px" }}
                    >
                      <img
                        src={img}
                        alt="user"
                        style={{ width: "100%", borderRadius: "50%" }}
                      />
                    </div>
                    <div>
                      <strong>{r.name}</strong>
                      <p style={{ margin: 0 }}>{r.reply}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default TwitCard;
