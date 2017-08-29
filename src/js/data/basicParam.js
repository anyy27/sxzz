let random = Math.round(Math.random()*10000);
let randoms = "";
for (let i = 0; i < 4; i++) {
    randoms += "1234567890".substr(Math.floor(Math.random() * 10), 1);
}
if(JSON.parse(localStorage.getItem('docObj'))){
 var  yymm = JSON.parse(localStorage.getItem('docObj')).yymm;
 var  jgid = JSON.parse(localStorage.getItem('docObj')).jgid;
}
let sign = hex_md5(hex_md5(yymm)+jgid+randoms)
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
    "format": "JSON",
    "random": randoms,
    "sign": sign,
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

