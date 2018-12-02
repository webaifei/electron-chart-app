import React, { Component } from 'react';
import {Tabs, Upload} from "element-react";
import "./App.css";
import 'element-theme-default';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Tabs type="border-card" activeName="1">
          <Tabs.Pane label="上传表格" name="1">
          <Upload
            className="upload-demo"
            drag
            action="//jsonplaceholder.typicode.com/posts/"
            multiple
            tip={<div className="el-upload__tip">上传CVS EXCEL格式</div>}
          >
            <i className="el-icon-upload"></i>
            <div className="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          </Upload>
          </Tabs.Pane>
          <Tabs.Pane label="PV-UV" name="2">PV-UV</Tabs.Pane>
          <Tabs.Pane label="漏斗模型" name="3">漏斗模型</Tabs.Pane>
          <Tabs.Pane label="定时补偿任务" name="4">定时补偿任务</Tabs.Pane>
        </Tabs>
      </div>
    );
  }
}

export default App;
