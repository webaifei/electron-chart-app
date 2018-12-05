

import React, { Component } from 'react';
import "./style.css";
// 因为webpack  无法区分是原生的require 还是webpack的require
const electron = window.require("electron");
const ipcRenderer = electron.ipcRenderer;

export default class Upload extends Component{
    bindEvent() {
        const uploadBox = this.refs['upload-box'];
        const uploadInput = this.refs['upload-input'];
        uploadBox.addEventListener('click', function () {
            uploadInput.click();
        })
        // change
        uploadInput.addEventListener('change', (e)=> {
            console.log(e.target.files[0]);
            const file = e.target.files[0];
            this.uploadFile(file.path);
        })
        
    }
    uploadFile(filePath) {
        console.log(filePath);
        ipcRenderer.send('drop', filePath)
    }
    componentDidMount() {
        
        const uploadRoot = this.refs['upload-container'];
        this.bindEvent();
        uploadRoot.addEventListener('dragenter', function (e) {
            e.preventDefault();
        });
        uploadRoot.addEventListener('dragover', function (e) {
            e.preventDefault();
        });

        uploadRoot.addEventListener('drop', (e)=> {
            console.log(e);
            e.preventDefault();
            // const file = e.dataTransfer.files[0];
            // console.log(this);
            // this.uploadFile(file.path);
        });

    }
  render() {
    return <div className="source" id="33oif7">
      <div 
        ref="upload-container"
        className="upload-demo">
        <div className="el-upload el-upload--text">
          <div className="el-upload-dragger" ref="upload-box">
            <i className="el-icon-upload"></i>
            <div className="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          </div>
          <input type="file" ref="upload-input" className="upload-input"/>
        </div>
        <div className="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </div>
    </div>;
  }
}
