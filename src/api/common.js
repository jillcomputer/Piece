import request from './config/request';

// 测试
//导航栏
/*{
      list: [
        {
          key: "0",
          title: "投标管理",
          icon: "a",
          children: [
            {
              key: "0-0",
              title: "投标管理1",
              router: "/home/1"
            },
            {
              key: "0-1",
              title: "投标管理2",
              router: "/home/2"
            },
            {
              key: "0-2",
              title: "投标管理3",
              router: "/home/3"
            }
          ]
        },
        {
          key: "1",
          title: "Option 2",
          icon: "b",
          router: "/home/4"
        },
        {
          key: "2",
          title: "首页",
          icon: "d",
          router: "/"
        },
        {
          key: "3",
          title: "Navigation 2",
          icon: "c",
          children: [
            {
              key: "3-0",
              title: "Navigation 3",
              icon: "e",
              children: [
                {
                  key: "3-0-0", title: "Option 2.1.1", router: "/home/5"
                }
              ]
            },
            {
              key: "3-1",
              title: "Navigation 4",
              router: "/home/6"
            },
            {
              key: "3-2",
              title: "Navigation 5",
              router: "/form/1"
            }
          ]
        }
      ]
    }*/
export function dateOne(data = {}) {
    return request.get('/test-one', data)
}

// 动态的表单
/*
*  form: {
        formTitle: "表单标题",
        //提交的api
        submitApi: "",
        //提交后跳转的路由
        submitUrl: "",
        labelLeft:4,
        labelRight:10,
        formList: [
          {
            label: "名称", tag: "input", submit: "name", defaultVal: "",
            //条件
            condition: [
              { required: true, message: "名称是必传字段", trigger: "blur" },
              { min: 3, max: 5, message: "限制长度为3-5", trigger: "blur" }
            ]
            // 自定义条件
          },
          {
            label: "密码", tag: "password", submit: "password", defaultVal: "",
            condition: [
              { required: true, message: "密码是必传字段", trigger: "blur" }
            ]
          },
          {
            label: "喜欢的食物", tag: "select", submit: "food", defaultVal: undefined,
            condition: [
              { required: true,type:'number', message: "喜欢的食物是必传字段", trigger: "blur" }
            ],
            selectArr: [
              { label: "苹果", value: 0 },
              { label: "香蕉", value: 1 },
              { label: "米饭", value: 2 }
            ]
          },
          {
            label: "单个时间", tag: "datePicker", submit: "date1",
            defaultVal: undefined,
            format: "YYYY-MM-DD",
            condition: [
              { required: true,type:'object', message: "单个时间是必传字段", trigger: "change" }
            ]
          },
          {
            label: "时间范围", tag: "rangePicker", submit: "date2",
            format: "YYYY-MM-DD", defaultVal: undefined
          },
          {
            label: "开关", tag: "switch", submit: "switch1",  defaultVal: false,
            condition: [
              { required: true,type:'boolean', message: "单个时间是必传字段", trigger: 'change' }
            ]
          },
          {
            label: "多选框", tag: "checkbox", submit: "checkbox1",
            defaultVal: [],
            condition: [
              { required: true,type:'array', message: "多选框是必传字段", trigger: "blur" }
            ],
            selectArr: [
              { label: "苹果", value: 0 },
              { label: "香蕉", value: 1 },
              { label: "米饭", value: 2 }
            ]
          {
            label: "单选框", tag: "radio", submit: "radio1", required: true,
            defaultVal: "",
            condition: [
              { required: true,type:'number', message: "多选框是必传字段", trigger: "blur" }
            ],
            selectArr: [
              { label: "苹果1", value: 0 },
              { label: "香蕉1", value: 1 },
              { label: "米饭1", value: 2 }
            ]
          },
          {
            label: "数字输入框", tag: "number", submit: "number1", defaultVal: "",
            condition: [
              { required: false,type:'number' }
            ],
          },
          {
            label: "备注", tag: "textarea", submit: "textarea1", required: null,
            defaultVal:'',
          }

        ]
      }
* */
export function dateTwo(url = '', data = {}) {
    return request.get(url, data)
}

// 配置数据
export function dataApi1(url = '', data = {}) {
    return request.get('/test-one/home/allocation/' + url, data)
}

// 业务数据
export function dataApi2(url = '', data = {}) {
    return request.get('/test-one/home/business/' + url, data)
}

// 接口1
export function dataApi3(data = {}) {
    return request.get('/test-one/home1', data)
}

// 接口2
export function dataApi4(data = {}) {
    return request.get('/test-one/home2', data)
}

// 接口拿到文件
export function dataAp5(data = {}) {
    return request.get('/public/edit.js', data)
}

// UI数据
export function dataApi6(data = {}) {
    return request.get('/test-one/pageConfig', data)
}
// ceshi
// UI数据
export function dataApi7(data = {}) {
    return request.get('/test-one/aa', data)
}
