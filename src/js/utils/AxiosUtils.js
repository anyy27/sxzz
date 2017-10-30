/*
 * axios封装
 * */
import {Message} from "element-ui";
// import  {PasWord, basicParam} from "../data/basicParam.js";
import {API_URL} from "../data/Url.js";
import {docCache} from "../lib/cache";

export default function axiosUtil(service, options) {
    let randoms = "";
    for (let i = 0; i < 4; i++) {
        randoms += "1234567890".substr(Math.floor(Math.random() * 10), 1);
    }
    var yymm = '';
    var jgid = '';
    var sign = '';
    let docStr = docCache.get();
    if (docStr) {
        yymm = docStr.yymm;
        jgid = docStr.jgid;
        sign = hex_md5(hex_md5(yymm) + jgid + randoms)
    } else {
        sign = ''
    }
    ;
    const basicParam = {//服务器交互基本参数
        "format": "JSON",
        "random": randoms,
        "sign": sign,
    };

    if (docStr) {
        options.yyr = docStr.yyr;
        options.jgid = docStr.jgid;
    }
    return axios({
        //url: "http://api.test.zjwlyy.cn/api/app",
        url: API_URL,
        method: "post",
        data: {service, ...basicParam, ...options}
    }).then(function (res) {
        console.log("res", res);
        if (res.data.succ) {
            return res.data
            //succCallback(res.data);
        } else {
            Message({
                showClose: true,
                message: res.data.msg,
                type: "warning"
            });
        }
    }).catch(function (err) {
        console.log(err);
    });
}
