<template>
    <div>
        <div class="login-back">
            <img src="../../images/back.png" alt="">
            <div class="login-box">
                <div class="login-img">
                    <img src="../../images/tylogo.png" alt="">
                </div>
                <form class="login-form clearfix">
                    <div class="login-tit marginT20"><h1 style="font-size: 32px;color:#01abac;text-align: center;">
                        双向转诊管理平台</h1></div>
                    <!--<div class="login-tit"><p style="font-size: 20px;color:#c6c6c6;text-align: center;">Welcome  Login</p></div>-->
                    <div class="clearfix login-tit  login-item-wrap " style="margin-top:50px;">
                        <label class="login-icon-label login-icon-id w30 h34 fl"></label>
                        <input type="text" v-model="docMobile" style="width:90%;" class="login-input h34  fl"
                               placeholder="请输入手机号" required>
                    </div>
                    <div class="clearfix login-tit  login-item-wrap" style="margin-top:30px;">
                        <label class="login-icon-label login-icon-pwd w30 h34 fl"></label>
                        <input type="password" v-model="oauthKey" style="width:90%;" class="login-input h34  fl"
                               placeholder="请输入密码" required>
                    </div>
                    <!--<div class="clearfix marginT25">-->
                    <!--<div class="fl login-item-wrap">-->
                    <!--<label class="login-icon-label login-icon-captcha w30 h34 fl"></label>-->
                    <!--<input type="text" v-model="captcha" class="login-input h34 w120 fl" placeholder="请输入验证吗">-->
                    <!--</div>-->
                    <!--<img class="login-captcha-img marginL20 h34 w80 fl" src="">-->
                    <!--</div>-->
                    <el-button type="primary" style="margin-top:30px;" class="login-btn  login-tit " @click="login"
                               :loading="isSuccess">立即登录
                    </el-button>
                    <div class="link-wrap login-tit  fontSize12" style="margin-top:30px;">
                        <router-link to="/password">找回密码</router-link>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<style>
</style>
<script>
    import {Message} from 'element-ui';
    import axiosUtil from "../utils/AxiosUtils.js";
    import ajax from "../utils/ajax.js";
    import Vue from "vue";
    import {docCache, shztCache} from "../lib/cache"

    export default {
        data() {
            return {
                docMobile: "",//用户身份证
                captcha: "", //验证码
                isSuccess: false,
                oauthKey: ""
            }
        },
        mounted: function () {
            let _this = this;
            document.addEventListener("keyup", _this.enterKeyUpHandler, false);
        },
        beforeDestroy: function () {//组件销毁前解除事件绑定
            let _this = this;
            document.removeEventListener("keyup", _this.enterKeyUpHandler, false);
        },
        components: {},
        methods: {
            enterKeyUpHandler(ev) {// 回车事件
                let e = ev || event;
                if (e.keyCode === 13 || e.which == 13) {
                    this.login();//调用登录函数
                }
            },
            async login() {//点击按钮登录
                let _this = this;
                let options = {
                    dlzh: this.docMobile,
                    dlmm: this.oauthKey
                }
                let res = await ajax("smarthos.sxzz.login.info", options);
                if (res.succ) {
                    docCache.set(res.obj)
                    shztCache.set(res.obj.shzt);
                    localStorage.setItem('docObj', JSON.stringify(res.obj));
                    localStorage.setItem('shzt', JSON.stringify(res.obj.shzt));
                    _this.$router.push("/main");
                } else {
                    alert(res.msg)
                }
            },
        }
    }
</script>
