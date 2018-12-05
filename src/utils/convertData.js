/**
 * 转换arr成业务要使用的数据
 */
export default function convertData (arr) {
    const ret = {
        PV: {
            name: "PV",
            type: "line",
            data: []
        },
        UV: {
            name:"UV",
            type: "line",
            data: []
        },
        date: []
    };
    if(Array.isArray(arr)) {
        const filterArr = arr.filter((item)=> item["统计日期"] !== "合计");
        
        filterArr.reverse().forEach(item=> {
            ret.PV.data.push(item["首页pv"]);
            ret.UV.data.push(item["首页uv"]);
            ret.date.push(item["统计日期"]);
        })
    } else {
        throw new Error("arr must be an array!");
    }
    return ret;
}