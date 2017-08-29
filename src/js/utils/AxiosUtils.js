/*
 * axios封装
 * */
import {Message} from "element-ui";
import  {PasWord, basicParam} from "../data/basicParam.js";
import {API_URL} from  "../data/Url.js";

export default function axiosUtil(service, options) {
      if(JSON.parse(localStorage.getItem('docObj'))){
        options.yyr = JSON.parse(localStorage.getItem('docObj')).yyr;
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
            /*if(errCallback){//发生错误时执行的回掉函数
             errCallback(res.data);
             }
             if(res.data.code == "00000010"){
             localStorage.removeItem("docId");
             localStorage.removeItem("userInfo");
             localStorage.removeItem("token");
             window.location = HOST_URL;
             }*/
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
