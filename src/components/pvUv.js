import React, { Component } from 'react';
import echarts from "echarts";
import {Tabs} from "element-react";
import "./style.css";
export default class PvUv extends Component{
    constructor(props) {
        super(props);
        this.state = {
            // 申请办卡页面数据
            applyCardData: {
                title: {
                    text: '申请办卡PV-UV'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        animation: false,
                        label: {
                            backgroundColor: '#505765'
                        }
                    }
                },
                legend: {
                    data:['PV','UV']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: 40,
                    containLabel: true
                },
                toolbox: {
                    feature: {
                        dataZoom: {
                            yAxisIndex: 'none'
                        },
                        restore: {},
                        saveAsImage: {}
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: this.props.handledData.date
                },
                yAxis: {
                    type: 'value',
                    boundaryGap: [0, '100%']
                },
                dataZoom: [{
                    show: true,
                    realtime: true,
                    start: 75,
                    end: 100
                },
                {
                    type: 'inside',
                    realtime: true,
                    start: 65,
                    end: 85
                }],
                series: [
                     this.props.handledData.PV,
                     this.props.handledData.UV
                    
                ]
            }
        }
    }
    componentDidMount() {
        const containerRef = this.refs.container;
        console.log(containerRef);
        
        const myChart = echarts.init(containerRef);
        myChart.setOption(this.state.applyCardData);
    }
    render() {
        return <div>
            <Tabs type="card" activeName="1">
                <Tabs.Pane label="申请办卡" name="1">
                    <div ref="container" className="echart-container"></div>
                </Tabs.Pane>
                <Tabs.Pane label="个人中心" name="2">
                </Tabs.Pane>
            </Tabs>
        </div>;
    }
}