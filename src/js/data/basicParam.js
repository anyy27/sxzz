let random = Math.round(Math.random()*10000);
const PasWord = function(options,random){
    const basicParam = {//服务器交互基本参数
        "jgid": "0571001",
        "format": "JSON",
        "random": "ouws",
        "sign": "a3b4157710586cb168d20c7a8e44dcff",
        "sqysbh": "1001",
    };
    //const _options = Object.assign(options,basicParam);
};
const basicParam = {//服务器交互基本参数
    "jgid": "59411511191ce23575a63218",
    "format": "JSON",
    "random": "ouws",
    "sign": "19c84baf0a1bf73d189734f3e93f9cd5",
};
const upLoadBasicParam = {
    spid: "1001",
    channel: "4",
    format: "JSON",
    oper: "127.0.0.1",
    random: Math.round(Math.random()*10000),
    sign: hex_md5(hex_md5("aAr9MVS9j1") + 1001 + random),
};
export { PasWord, basicParam,upLoadBasicParam };

