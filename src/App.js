import React, { Component } from 'react';
import {Tabs} from "element-react";
import PvUv from "./components/pvUv";
import Upload from "./components/Upload";
import "./App.css";
import 'element-theme-default';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Tabs type="border-card" activeName="1">
          <Tabs.Pane label="上传表格" name="1">
            <Upload/>
          </Tabs.Pane>
          <Tabs.Pane label="PV-UV" name="2">
            <PvUv/>
          </Tabs.Pane>
          <Tabs.Pane label="漏斗模型" name="3">漏斗模型</Tabs.Pane>
          <Tabs.Pane label="定时补偿任务" name="4">定时补偿任务</Tabs.Pane>
        </Tabs>
      </div>
    );
  }
}

export default App;
