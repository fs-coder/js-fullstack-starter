import React from "react";
import { Row, Col, Button, Input, Card, Spin, message } from "antd";
import axios from "axios";
import "./style.less";

const { TextArea } = Input;

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      initializing: true,
      name: "",
      message: "",
      comments: []
    };
  }

  async componentDidMount() {
    await this.getMessages();
    await this.setState({ initializing: false });
  }

  setMessage = message => this.setState({ message });

  setName = name => this.setState({ name });

  setLoading = loading => this.setState({ loading });

  getMessages = async () => {
    const res = await axios.get("/api/message-board");
    if (res.status !== 200) {
      message.error("An unexpected error has occurred.");
      return;
    }
    if (res.data.code !== 200) {
      message.error(res.data.msg);
      return;
    }
    this.setState({ comments: res.data.data });
  };

  onSubmit = async () => {
    const { name } = this.state;
    await this.setLoading(true);
    try {
      const res = await axios.post("/api/message-board", {
        name,
        message: this.state.message
      });
      if (res.status === 200 && res.data.code === 200) {
        message.success(res.data.msg);
        await this.setState({
          loading: false,
          name: "",
          message: ""
        });
        await this.getMessages();
      } else {
        this.setLoading(false);
        message.error(res.data.msg);
      }
    } catch (e) {
      this.setLoading(false);
      message.error("An unexpected error has occurred.");
    }
  };

  render() {
    const { loading, initializing, name, message, comments } = this.state;
    return (
      <div className="home-page">
        <Row>
          <Col md={{ span: 12, offset: 6 }} sm={{ span: 24 }} xs={{ span: 24 }}>
            <div className="board">
              <h1 id="T_Title" className="board__title">
                简易留言板
              </h1>
              <p>
                <span>此网页是一份示例代码, 用于展示 JavaScript 在全栈开发中的能力, 源代码托管在 </span>
                <a target="_blank" href="https://github.com/rmlzy/js-fullstack-starter">
                  Github
                </a>
                <span>.</span>
              </p>
              <div className="board__row">
                <Input
                  id="T_Name"
                  placeholder="你的姓名 (最长20个字符)"
                  value={name}
                  onChange={e => this.setName(e.target.value)}
                  maxLength={20}
                />
              </div>
              <div className="board__row">
                <TextArea
                  id="T_Message"
                  rows={4}
                  placeholder="随便写点什么 (最长255个字符)"
                  value={message}
                  onChange={e => this.setMessage(e.target.value)}
                  maxLength={255}
                />
              </div>
              <div className="board__actions">
                <Button
                  disabled={!message.length}
                  loading={loading}
                  id="T_SubmitBtn"
                  type="primary"
                  onClick={this.onSubmit}
                >
                  提交
                </Button>
              </div>
            </div>

            <div className="comment">
              <h2 className="comment__title">留言列表</h2>
              <Spin spinning={initializing}>
                {comments.map((item, i) => (
                  <Card
                    key={i}
                    size="small"
                    title={
                      <span>
                        <b>{item.name}</b> 说:
                      </span>
                    }
                    extra={item.createAt}
                  >
                    {item.message}
                  </Card>
                ))}
              </Spin>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
