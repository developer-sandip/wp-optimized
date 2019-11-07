import React from "react";
import faker from "faker/locale/nep";
import {
  List,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache
} from "react-virtualized";

import "./CommentView.css";

const rowCount = 1000;
const listHeight = 600;
const rowHeight = 250;
const rowWidth = 800;

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
    this.cache = new CellMeasurerCache({
      fixedWidth: true,
      defaultHeight: 200
    });
  }

  renderRow({ index, key, style, parent }) {
    return (
      <CellMeasurer
        key={key}
        cache={this.cache}
        parent={parent}
        columnIndex={0}
        rowIndex={index}>
        <div key={key} style={style} className="row comment">
          <a className="avatar">
            {" "}
            <img src={this.list[index].avatar} alt="Avatar" />
          </a>
          <div className="content">
            <div className="author">
              <h3>{this.list[index].name}</h3>
            </div>
            <div className="text">{this.list[index].comment}</div>
          </div>
        </div>
      </CellMeasurer>
    );
  }

  render() {
    return (
      <div className="list">
        <AutoSizer>
          {({ width, height }) => {
            return (
              <List
                width={width}
                height={height}
                deferredMeasurementCache={this.cache}
                rowHeight={rowHeight}
                rowRenderer={this.renderRow}
                rowCount={this.list.length}
                overscanRowCount={3}
              />
            );
          }}
        </AutoSizer>
      </div>
    );
  }
}
export default CommentView;
