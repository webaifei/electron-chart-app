import React, { Component } from 'react';
import {Tabs} from "element-react";
import utils from "./utils/";
import PvUv from "./components/pvUv";
import Upload from "./components/Upload";
import "./App.css";
import 'element-theme-default';

// mock use local data
const data = require("./data/data.json");
const handledData = utils.convertData(data);
class App extends Component {
    
  render() {
    return (
      <div className="App">
        <Tabs type="border-card" activeName="1">
          <Tabs.Pane label="PV-UV" name="1">
            <PvUv handledData={handledData}/>
          </Tabs.Pane>
          <Tabs.Pane label="漏斗模型" name="2">
            <p>1. 申卡页PV/UV - 下单 - 进件</p>
            <p>2. UV - 会员注册 - 不同的会员占比</p>
          </Tabs.Pane>
          <Tabs.Pane label="事件埋点" name="3">aaa</Tabs.Pane>
          <Tabs.Pane label="更新数据" name="4">
            <Upload/>
          </Tabs.Pane>
        </Tabs>
      </div>
    );
  }
}

export default App;
