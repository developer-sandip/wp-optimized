import React from "react";
import faker from "faker";
import "./CommentView.css";

const rowCount = 1000;
class CommentView extends React.Component {
  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
    this.list = Array(rowCount)
      .fill()
      .map((val, idx) => {
        return {
          id: idx,
          name: faker.name.findName(),
          avatar: faker.image.avatar(),
          comment: faker.lorem.paragraphs()
        };
      });
  }

  renderRow(item) {
    return (
      <div key={item.id} className="row comment">
        <a className="avatar">
          {" "}
          <img src={item.avatar} alt="Avatar" />
        </a>
        <div className="content">
          <div className="author">
            <h3>{item.name}</h3>
          </div>
          <div className="text">{item.comment}</div>
        </div>
      </div>
    );
  }

  render() {
    return <div className="list">{this.list.map(this.renderRow)}</div>;
  }
}
export default CommentView;
