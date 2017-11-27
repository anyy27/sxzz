<template>
    <div>
        <div class=" marginP remote-consultation-wrap content-bg-color">
            <div class="base-top">
                <div
                    style="box-sizing:border-box;padding:0px 20px;width:100%;background: #F9F9F9;border:1px solid #E3E1E2;">
                    <p style="line-height: 40px;font-size: 14px;">基本信息</p>
                </div>
                <div class="base-message">
                    <div class="base-doc">
                        <el-button class="btn" type="primary" style="padding:5px 20px;">读市民卡</el-button>
                    </div>
                    <div class="base-docs" style="margin-top:10px;">
                        <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                            <div class="base-con">
                                <label><span class="fee-num">*</span>就诊卡号:</label>
                                <el-select v-model="ruleForm.klx" style="width:150px;" placeholder="请选择卡号">
                                    <el-option label="省医保" value="0"></el-option>
                                    <el-option label="市医保" value="1"></el-option>
                                    <el-option label="市民卡" value="2"></el-option>
                                    <el-option label="就诊卡" value="3"></el-option>
                                </el-select>
                                <el-input
                                    v-model="ruleForm.kh"
                                    style="width:200px;"
                                    size="small"
                                ></el-input>

                                <label style="margin-left:65px;"><span class="fee-num">*</span>姓名:</label>
                                <el-input
                                    v-model="ruleForm.yhxm"
                                    style="width:100px;"
                                    size="small"
                                ></el-input>
                                <label style="margin-left:68px;"><span class="fee-num">*</span>身份证号:</label>
                                <el-input
                                    v-model="ruleForm.zjhm"
                                    style="width:160px;"
                                    size="small"
                                    @blur="getUser(ruleForm.zjhm)"
                                ></el-input>
                            </div>
                            <div class="base-con">
                                <label><span class="fee-num">*</span>性&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp别:</label>
                                <el-radio class="radio" v-model="ruleForm.xb" label="男">男</el-radio>
                                <el-radio class="radio" v-model="ruleForm.xb" label="女">女</el-radio>
                                <label style="margin-left:118px;"><span class="fee-num"></span>年龄:</label>
                                <el-input
                                    v-model="ruleForm.age"
                                    style="width:100px;"
                                    size="small"
                                ></el-input>
                                <label style="margin-left:30px;"><span class="fee-num">*</span>患者手机号:</label>
                                <el-input
                                    v-model="ruleForm.sjhm"
                                    style="width:100px;"
                                    size="small"
                                ></el-input>
                                <label style="margin-left:45px;">其他联系方式:</label>
                                <el-input
                                    v-model="ruleForm.lxdh"
                                    style="width:160px;"
                                    size="small"
                                ></el-input>
                            </div>
                            <div class="base-con">
                                <label><span class="fee-num">*</span>家庭住址:</label>
                                <area-plugin :ruleForm="ruleForm" @change="areaChange"></area-plugin>
                                <!--<el-select v-model="ruleForm.provinceId" @change="getProvincess"
                                           style="width: 114px">
                                    <el-option label="请选择" value=""></el-option>
                                    <el-option
                                        v-for="item in provinces"
                                        :key="item.id"
                                        :label="item.name"
                                        :value="item.id">
                                    </el-option>
                                </el-select>
                                <el-select v-model="ruleForm.cityId" @change="getEaras"
                                           style="width: 114px">
                                    <el-option label="请选择" value=""></el-option>
                                    <el-option
                                        v-for="item in citys"
                                        :key="item.id"
                                        :label="item.name"
                                        :value="item.id">
                                    </el-option>
                                </el-select>
                                <el-select v-model="ruleForm.regionId" style="width: 114px">
                                    <el-option label="请选择" value=""></el-option>
                                    <el-option
                                        v-for="item in earas"
                                        :key="item.id"
                                        :label="item.name"
                                        :value="item.id">
                                    </el-option>
                                </el-select>-->
                                <el-input
                                    v-model="ruleForm.lxdz"
                                    style="width:212px;"
                                    size="small"
                                    placeholder="街道等详细地址选择填写"
                                ></el-input>
                                <label style="margin-left:76px;"><span class="fee-num"></span>医生电话:</label>
                                <el-input
                                    v-model="ruleForm.sqysdh"
                                    style="width:160px;"
                                    size="small"
                                ></el-input>
                            </div>
                        </el-form>
                    </div>
                </div>
                <div
                    style="box-sizing:border-box;margin-top:10px;padding:0px 20px;width:100%;background: #F9F9F9;border:1px solid #E3E1E2;">
                    <p style="line-height: 40px;font-size: 14px;">病情资料</p>
                </div>
                <div class="base-message">
                    <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm"
                             style="position: relative">
                        <div class="base-con" style="height:60px;margin-top:10px;">
                            <div style="width:76%;margin-left:70px;resize: none;">
                                <label><span
                                    style="font-size: 14px;color: #48576a;position:absolute;left:0;top:0;"><span
                                    class="fee-num">*</span>初步诊断:</span></label>
                                <el-autocomplete popper-class="my-autocomplete"
                                                 size="50"
                                                 custom-item="my-item-zh"
                                                 v-model="ruleForm.zdjg"
                                                 :fetch-suggestions="querySearchAsync"
                                                 placeholder="请输入内容,最多输入50个字,必填项"
                                ></el-autocomplete>


                                <!--<el-select
                                        :maxlength=zd_maxlength
                                           @blur="addDiagnose"
                                           size="400"
                                           v-model="ruleForm.zdjg"
                                           :multiple=multiple_cbzd
                                           filterable
                                           allow-create
                                           placeholder="最多输入50个字,必填项">
                                    <el-option
                                            v-for="item in diagnoseList"
                                            :key="item.zdxx"
                                            :label="item.zdxx"
                                            :value="item.zdxx">
                                    </el-option>
                                </el-select>-->
                            </div>
                        </div>
                        <div class="base-con" style="height:60px;margin-top:10px;">
                            <span style="font-size: 14px;color: #48576a;position:absolute;left:0;top:0;">病情描述:</span>
                            <el-input placeholder="最多输入500个字"
                                      type="textarea"
                                      style="width:76%;margin-left:70px;resize: none;"
                                      v-model="ruleForm.bqms"
                                      width="400"
                                      :maxlength=maxlength
                                      size="small"
                            ></el-input>
                        </div>
                        <div style="margin-top:10px;position:relative;">
                            <span style="font-size: 14px;color: #48576a;position:absolute;left:0;top:0;">病历附件:</span>
                            <div class="add-pic-list">
                               <span v-show="oldImgList" class="showImg" v-for="(item,index) in oldImgList">
                                <img :src="item.wjdz" alt="">
                               </span>
                                <span class="showImg" v-for="(item,index) in imgList">
                                   <span class="showImgSon">
                                       <img @click="delImg(index)"
                                            style="width: 50%;height: 50%;margin-left: 15px;margin-top: 15px"
                                            src="../../../static/img/del.png" alt="">
                                   </span>
                                <img :src="item" alt="">
                               </span>
                                <el-upload
                                    :action="uploadUrl"
                                    list-type="picture-card"
                                    :data="uploadData"
                                    accept="image/gif,image/jpg,image/jpeg,image/png,image/bmp"
                                    :before-upload="beforeUpload"
                                    :on-success="onSuccessimg"
                                    :on-remove="onRemoveImg"
                                    :file-list="imgUploadList">
                                    <i class="el-icon-plus"></i>
                                </el-upload>
                            </div>
                            <div class="ghost-btn-wrap">
                                <el-upload
                                    :action="uploadUrl"
                                    :data="uploadData"
                                    :before-upload="beforeUploadFile"
                                    :on-success="onSuccessFile"
                                    :on-remove="onRemoveFile"
                                    :file-list="fileUploadList">
                                   <span v-show="oldNameList" class="showText" v-for="(item,index) of oldNameList">
                                       {{item.name}}
                                   </span>
                                    <div @click.stop="getFile(item.wjdz)" v-for="(item,index) in nameList"
                                         style="margin-top:5px;">
                                       <span class="showText">
                                       <span @click.stop="delText(index)" class="showTextSon">X</span>
                                       {{item}}
                                      </span>
                                    </div>
                                    <span v-show="flag" style="font-size: 14px;color: grey">上传中.....</span>
                                    <el-button size="small" type="primary" style="margin-top:5px;">点击上传</el-button>
                                </el-upload>
                            </div>
                            <p style="color:#afafaf;font-size: 12px;">
                                仅支持pdf、zip、xls、xlsx、doc、docx、txt、rar、RAR格式，文件小于500M。</p>
                        </div>
                    </el-form>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
    .my-autocomplete {
        li {
            line-height: normal;
            padding: 7px;

            .name {
                text-overflow: ellipsis;
                overflow: hidden;
                float: left;
            }
            .addr {
                font-size: 12px;
                color: #01ABAC;
                float: right;
            }

            .highlighted .addr {
                color: #ddd;
            }
        }
    }
</style>
<script type="text/ecmascript-6">
    import Vue from "vue";
    import {API_URL} from "../../data/Url.js";
    import {basicParam} from "../../data/basicParam";
    import {docCache} from "../../lib/cache";
    import axiosUtil from "../../utils/AxiosUtils.js";
    import idCardFilter from "../../filters/idcard.js"
    import {Form, FormItem, Button, Select, Option, DatePicker, Input, Message, MessageBox, Upload} from "element-ui";
    import AreaPlugin from "../../plugin/area.vue"

    Vue.use(Form);
    Vue.use(FormItem);
    Vue.use(Button);
    Vue.use(Input);
    Vue.use(Select);
    Vue.use(Option);
    Vue.use(DatePicker);
    Vue.use(Upload);
    const upLoadFileCountMax = 9;//最大上传数量


    Vue.component('my-item-zh', {
        functional: true,
        render: function (h, ctx) {
            var item = ctx.props.item;
            console.log("item:--------", item);
            return h('li', ctx.data, [
                h('div', {attrs: {class: 'name'}}, [item.zdxx]),
                h('span', {
                    attrs: {class: 'addr'}, on: {
                        click: (event) => {
                            event.stopPropagation();
                            MessageBox.confirm('此操作将永久删除信息, 是否继续?', '提示', {
                                confirmButtonText: '确定',
                                cancelButtonText: '取消',
                                type: 'warning'
                            }).then(() => {
                                axiosUtil('smarthos.sxzz.cbzdDelete.info', {
                                    "yyid": docCache.get().yyid,
                                    "jgid": docCache.get().yyid,
                                    "zdid": item.zdid
                                }).then(res => {
                                    if (res.succ) {

                                    } else {
                                        Message.message({
                                            type: 'success',
                                            message: '删除成功!'
                                        });
                                    }
                                })
                            }).catch(() => {
                                Message({
                                    type: 'info',
                                    message: '已取消删除'
                                });
                            });
                        }
                    }
                }, ["删除"])
            ]);
        },
        props: {
            item: {type: Object, required: true}
        }
    });

    export default {
        data() {
            return {
                flag: false,
                multiple_cbzd: false,
                num: '',
                zd_maxlength: 50,
                maxlength: 500,
                oldImgList: [],
                oldNameList: [],
                imgList: [],
                nameList: [],
                imgIdList: [],
                textIdList: [],
                userDetail: {},
                zdxx: '',
                diagnoseList: [],
                value1: '',
                value2: "",
                value3: '',
                citys: [],
                provinces: [],
                earas: [],
                fileList1: [],
                fileList2: [],
                imgSrc: '',
                type: '',
                uploadData: {},//up-load组件的data数据
                attaIdList: [],//需要提交的附件列表
                imgUploadList: [],//需上传的图片列表
                fileUploadList: [],//需上传的文件列表
                uploadFileCount: 0,//上传的文件数量，最大为9个
                uploadUrl: API_URL,//上传图片action地址
                selectedOptions: [],
                options: [],
                patient: {},
                value8: '',
                ruleForm: {
                    klx: '',
                    kh: '',
                    yhxm: '',
                    zjhm: '',
                    xb: '',
                    cityId: '',
                    provinceId: '',
                    regionId: '',
                    age: '',
                    sjhm: '',
                    zdjg: "",
                    lxdz: '',
                    lxdh: '',
                    bqms: '',
                    wjidList: [],
                    sqysdh: '',
                    yhid: ''
                },
            }
        },
        components:{
            AreaPlugin
        },
        props: ['index', 'applyDetail'],
        watch: {
            index: function () {
                console.log(5656565);
                let _this = this;
                console.log(_this.ruleForm.wjidList, _this.imgIdList, _this.textIdList)
                var arr = _this.ruleForm.wjidList.concat(_this.imgIdList);
                var arr1 = arr.concat(_this.textIdList);

                _this.ruleForm.wjidList = arr1;
                console.log("66666666", _this.ruleForm.wjidList);
                _this.$emit("getDetail", _this.ruleForm);
            },
            applyDetail: function () {
                if (this.applyDetail) {
                    this.ruleForm = {
                        ...this.ruleForm,
                        ...this.applyDetail
                    }
                    console.log(this.ruleForm, 99);
                    this.oldImgList = this.applyDetail.tpwjdzs
                    this.oldNameList = this.applyDetail.fjwjdzs
                    this.ruleForm.provinceId = parseInt(this.applyDetail.provinceId)
                    this.ruleForm.cityId = parseInt(this.applyDetail.cityId)
                    this.ruleForm.regionId = parseInt(this.applyDetail.regionId)
                }
            }
        },
        mounted() {
            this.ruleForm.sqysdh = JSON.parse(localStorage.getItem("docObj")).sqysdh;
            this.getData();
            console.log(this.applyDetail, '看看有数据没');
            if (this.applyDetail) {
                this.ruleForm = {
                    ...this.ruleForm,
                    ...this.applyDetail
                }
                console.log(this.ruleForm, 99);
                this.oldImgList = this.applyDetail.tpwjdzs
                this.oldNameList = this.applyDetail.fjwjdzs
                this.ruleForm.provinceId = parseInt(this.applyDetail.provinceId)
                this.ruleForm.cityId = parseInt(this.applyDetail.cityId)
                this.ruleForm.regionId = parseInt(this.applyDetail.regionId)
                this.ruleForm.klx = this.applyDetail.klx + "";
            }
            this.diagnoseList = this.getDiagnoseList();
        },
        computed: {
            upLoadList: function () {
                return this.imgUploadList.concat(this.fileUploadList);
            }

        },
        filters: {
            idCardFilter
        },
        methods: {
            areaChange(data) {
                this.ruleForm = Object.assign({}, this.ruleForm, data);
            },
            //下载文件
            getFile(url) {
                console.log(url, '路径')
//                window.location.href=url;
            },
            getValue(value) {
                console.log(value, 8888)
                this.$set(this.$data.ruleForm, 'zdjg', value);
            },
            querySearchAsync(queryString, cb) {
                this.getDiagnoseList().then((res) => {
                        console.log(res);
                        var restaurants = res;
                        var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;
                        console.log("-------------", results, restaurants)
                        cb(results);
                    }
                )

            },
            createStateFilter(queryString) {
                return (state) => {
                    return (state.zdxx.indexOf(queryString.toLowerCase()) === 0);
                };
            },

            addDiagnose() {
                if (this.ruleForm.zdjg == "") {
                    return;
                }
                axiosUtil('smarthos.sxzz.cbzdAdd.info', {
                    "yyid": docCache.get().yyid,
                    "jgid": docCache.get().yyid,
                    "ysid": docCache.get().ysid,
                    "zdxx": this.ruleForm.zdjg
                }).then(res => {
                    console.log("=======================" + res);
                    if (res.succ) {
                        this.getDiagnoseList();
                    } else {
                        alert(res.msg)
                    }
                })
            },
            delDiagnose(id) {
                console.log(id, 212121);


                this.$confirm('此操作将永久删除信息, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    axiosUtil('smarthos.sxzz.cbzdDelete.info', {
                        "yyid": docCache.get().yyid,
                        "jgid": docCache.get().yyid,
                        "zdid": id
                    }).then(res => {
                        if (res.succ) {
                            this.getDiagnoseList()
                        } else {
                            this.$message({
                                type: 'success',
                                message: '删除成功!'
                            });
                        }
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });


            },
            getDiagnoseList() {
                return axiosUtil('smarthos.sxzz.cbzdSelect.info', {
                    "yyid": docCache.get().yyid,
                    "jgid": docCache.get().yyid,
                    "yyr": docCache.get().ysid
                }).then(res => {
                    console.log("*******************************************", res.list);
                    if (res.succ) {
                        let list = res.list.map((res) => {
                                res.value = res.zdxx;
                                return res;
                            }
                        )
                        this.$set(this.$data, 'diagnoseList', list)
                        return list
                    } else {
                        alert(res.msg)
                        return []
                    }
                })
            },
            getUser(id) {
                console.log(7878787878878)
                axiosUtil('smarthos.sxzz.user.list', {
                    "sfzh": id
                }).then(res => {
                    if (res.succ) {
                        this.patient = res.list[0];
                        this.$set(this.$data, 'userDetail', res.list[0])
                        this.ruleForm.provinceId = parseInt(res.list[0].provinceId)
                        this.citys = this.getCity(res.list[0].provinceId);
                        this.earas = this.earasList(res.list[0].cityId);
//                        this.ruleForm.cityId = parseInt(res.list[0].cityId)
//                        this.ruleForm.regionId = parseInt(res.list[0].regionId)
                        this.$set(this.$data.ruleForm, 'xb', res.list[0].xb)
                        this.$set(this.$data.ruleForm, 'yhxm', res.list[0].yhxm)
                        this.$set(this.$data.ruleForm, 'sjhm', res.list[0].sjhm)
                        this.$set(this.$data.ruleForm, 'lxdh', res.list[0].lxdh)
                        this.$set(this.$data.ruleForm, 'klx', res.list[0].klx)
                        this.$set(this.$data.ruleForm, 'lxdz', res.list[0].lxdz)
                        this.$set(this.$data.ruleForm, 'kh', res.list[0].kh)
                        this.$set(this.$data.ruleForm, 'yhid', res.list[0].yhid)
                        this.$set(this.$data.ruleForm, 'age', res.list[0].age)
                    } else {
                        alert(res.msg)
                    }
                })
            },
            getData(id) {
                axiosUtil('smarthos.sxzz.province.list', {}).then(res => {
                    if (res.succ) {
                        console.log(res, 123123123)
                        var list = res.list;
                        this.provinces = list;
                    } else {
                        alert(res.msg)
                    }
                })
            },
            getProvincess(value) {
                this.getCity(value)
            },
            getEaras(value) {
                this.earasList(value)
            },
            earasList(value, id) {
                if (value == "") {
                    return;
                }
                this.ruleForm.regionId = "";
                axiosUtil('smarthos.sxzz.region.list', {
                    cityId: value
                }).then(res => {
                    if (res.succ) {
                        var list = res.list;
                        this.earas = list;
                        if (this.patient != null) {
                            this.ruleForm.regionId = parseInt(this.patient.regionId);
                        }
                    } else {
                        alert(res.msg)
                    }
                })
            },
            getCity(value, id) {
                this.ruleForm.cityId = "";
                this.ruleForm.regionId = "";
                axiosUtil('smarthos.sxzz.city.list', {
                    provinceId: value
                }).then(res => {
                    if (res.succ) {
                        var list = res.list;
                        this.citys = list;
                        if (this.patient != null) {
                            this.ruleForm.cityId = parseInt(this.patient.cityId);
                        }
                    } else {
                        alert(res.msg)
                    }
                })
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            },
            handleChange(file, fileList) {
                this.fileList2 = fileList.slice(-3);
            },
            beforeUpload: function (file) {//上传图片前钩子函数
                console.log('656565')
                let _this = this;//传递this,确保下方闭包函数this正确
                if (typeof FileReader === 'undefined') {
                    alert("抱歉，你的浏览器版本过低，请升级浏览器或更换其它浏览器！");
                }
                if (!/image\/\w+/.test(file.type)) {
                    alert("请确保文件为图像类型");
                    return false;
                }
                if (_this.imgList.length >= 9) {
                    _this.$message("最多上传九张图片!");
                    return
                }
                let name = file.name;
                let type = file.name.replace(/.+\./, "");
                let reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function () {
                    _this.src = this.result;
                    console.log("dfdfdfd", this.result);
                    _this.imgSrc = this.result;
                    let options = {
                        baseString: _this.src,
                        type: type,
                        fileName: name
                    }
                    axiosUtil("smarthos.sxzz.blzlUpdata.info", options).then(function (res) {
                        console.log("444444", res);
                        if (res.succ) {
                            _this.imgList.push(_this.src);
                            _this.imgIdList.push(res.obj.tid);
                        }
                    })
                }
                return false
            },
            delImg(index) {
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.imgList.splice(index, 1)
                    this.imgIdList.splice(index, 1);
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });

            },
            delText(index) {
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.nameList.splice(index, 1)
                    this.textIdList.splice(index, 1);
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            beforeUploadFile: function (file) {//上传文件前钩子函数
                let _this = this;
                let maxsize = 1024 * 500;
                console.log("5555", file.size / 1024);
                if (file.size / 1024 > maxsize) {
                    Message({
                        showClose: true,
                        message: "附件大小不能大于500mb",
                        type: "error"
                    })
                    return false;
                } else {
                    console.log(file, 3333);
                    _this.flag = true;
                    let name = file.name;
                    let type = file.name.replace(/.+\./, "");
                    let reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = function () {
                        _this.src = this.result;
                        _this.imgSrc = this.result;
                        let options = {
                            baseString: _this.src,
                            type: type,
                            fileName: name
                        }
                        axiosUtil("smarthos.sxzz.blzlUpdata.info", options).then(function (res) {
                            console.log("444444", res);
                            if (res.succ) {
                                _this.flag = false;
                                _this.nameList.push(name)
                                _this.textIdList.push(res.obj.tid)
                            }
                        })
                    }
                    return false
                }
            },
            onRemoveImg: function (file, fileList) {//删除上传图片
                this.imgUploadList = fileList;
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            onSuccessimg: function (response, file, fileList) {//上传图片成功后钩子
                console.log("imgUploadList--", this.imgUploadList.length);
                console.log("fileList--", fileList.length);
                alert(this.imgUploadList.length + "--" + fileList.length);
                if (response.succ) {
                    this.imgUploadList = fileList;
                } else {
                    Message({
                        showClose: true,
                        message: response.msg,
                        type: "error"
                    });
                }
            },
            onSuccessFile: function (response, file, fileList) {//上传文件成功后钩子
                console.log(898989898)
                if (response.succ) {
                    this.fileUploadList = fileList;
                } else {
                    Message({
                        showClose: true,
                        message: response.msg,
                        type: "error"
                    });
                }
            },
            onRemoveFile: function (file, fileList) {//删除上传文件
                this.fileUploadList = fileList;
            },
        }
    }
</script>