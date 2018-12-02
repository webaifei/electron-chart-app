

import React, { Component } from 'react';
import "./style.css";

export default class Upload extends Component{

  componentDidMount() {
    const uploadRoot = this.refs['upload-container'];
    const dragEvents = ['dragend', 'dragenter', 'dragleave', 'drop'];
    // dragEvents.forEach((item)=> {
    //   document.addEventListener(item, function (e) {
    //     e.preventDefault();
    //   });
    // });
    document.addEventListener("drop", function(event) {
      event.preventDefault();
      
    });
    uploadRoot.addEventListener('drop', function (e) {
      console.log(e);
      e.preventDefault();
    });

  }
  render() {
    return <div className="source" id="33oif7">
      <div 
        ref="upload-container"
        className="upload-demo">
        <div className="el-upload el-upload--text">
          <div className="el-upload-dragger">
            <i className="el-icon-upload"></i>
            <div className="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          </div>
        </div>
        <div className="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </div>
    </div>;
  }
}
