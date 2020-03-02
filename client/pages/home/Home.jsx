import React from "react";
import { Row, Col, Button, Input } from "antd";
import "./style.less";

const { TextArea } = Input;

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: "",
      list: []
    };
  }

  setComment = comment => this.setState({ comment });

  onSubmit = () => {
    const { comment, list } = this.state;
    this.setState({
      list: [comment, ...list],
      comment: ""
    });
  };

  render() {
    const { comment, list } = this.state;
    return (
      <div className="home-page">
        <Row>
          <Col md={{ span: 12, offset: 6 }} sm={{ span: 24 }} xs={{ span: 24 }}>
            <div className="msg-board">
              <h1 id="T_Title" className="msg-board__title">
                A simple message board
              </h1>
              <div className="msg-board__area">
                <TextArea
                  id="T_TextArea"
                  rows={8}
                  placeholder="Just write something..."
                  value={comment}
                  onChange={e => this.setComment(e.target.value)}
                />
              </div>
              <div className="msg-board__actions">
                <Button id="T_SubmitBtn" type="primary" onClick={this.onSubmit}>
                  Submit
                </Button>
              </div>
            </div>

            <div className="comment">
              <h2 className="comment__title">Comments</h2>
              <ul id="T_CommentList" className="comment__list">
                {list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
