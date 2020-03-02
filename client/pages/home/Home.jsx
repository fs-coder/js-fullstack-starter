import React from "react";
import { Row, Col, Button, Input, Card, message } from "antd";
import "./style.less";

const { TextArea } = Input;

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      message: "",
      comments: this.getCommentsFromLS()
    };
  }

  setMessage = message => this.setState({ message });

  setName = name => this.setState({ name });

  saveCommentsToLS = comments => {
    try {
      window.localStorage.setItem("COMMEMTS", JSON.stringify(comments));
    } catch (e) {
      message.error("An error occurred while caching data.");
    }
  };

  getCommentsFromLS = () => {
    let comments = [];
    try {
      const str = window.localStorage.getItem("COMMEMTS");
      if (str) {
        comments = JSON.parse(str);
      }
    } catch (e) {
      message.error("An error occurred while get cached data.");
    }
    return comments;
  };

  onSubmit = () => {
    const { name, message, comments } = this.state;
    const comment = {
      name,
      message,
      date: +new Date()
    };
    const newComments = [comment, ...comments];
    this.saveCommentsToLS(newComments);
    this.setState({
      name: "",
      message: "",
      comments: newComments
    });
  };

  render() {
    const { name, message, comments } = this.state;
    return (
      <div className="home-page">
        <Row>
          <Col md={{ span: 12, offset: 6 }} sm={{ span: 24 }} xs={{ span: 24 }}>
            <div className="board">
              <h1 id="T_Title" className="board__title">
                A simple message board
              </h1>
              <div className="board__row">
                <Input id="T_Name" placeholder="Your Name" value={name} onChange={e => this.setName(e.target.value)} />
              </div>
              <div className="board__row">
                <TextArea
                  id="T_Message"
                  rows={8}
                  placeholder="Your Message"
                  value={message}
                  onChange={e => this.setMessage(e.target.value)}
                  maxLength={256}
                />
              </div>
              <div className="board__actions">
                <Button disabled={!message.length} id="T_SubmitBtn" type="primary" onClick={this.onSubmit}>
                  Submit
                </Button>
              </div>
            </div>

            <div className="comment">
              <h2 className="comment__title">Comments List</h2>
              {comments.map((item, i) => (
                <Card
                  key={i}
                  size="small"
                  title={
                    <span>
                      <b>{item.name}</b> Said:
                    </span>
                  }
                  extra={item.date}
                >
                  {item.message}
                </Card>
              ))}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
