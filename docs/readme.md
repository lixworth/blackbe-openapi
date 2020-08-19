# BlackBE 云黑 OpenAPI

> 夢ならばどれほどよかったでしょう 

## **API正在快速迭代中，所有内容均不代表最终成果**

## 概要

V2API与V1相比增加了数种功能，并且大大提高的安全性，有关这方面介绍请查看网站主页。
我们仅对V1部分API做出兼容处理，所以希望开发者尽快更新，关于更新帮助请查看侧栏中 "升级到V2" 。

版本：2nd Edition Version 1.0 [CodeName: Kamiyama Shiki ]

适用于 v2-xxx API

v2 api 返回统一使用JSON数据格式，并返回固定的相应模板，如下例子。


### [GET] /api 获取API服务状态

#### 响应
```json
{
    "success": true,
    "message": "OK",
    "error": 0,
    "data": [],
    "version": 2,
    "codename": "Kamiyama Shiki",
    "time": 1597795415,
    "delay": 0.14484596252441406
}
```

其中元素解析

|  名字   | 返回 |  详情   |  
|  ----  | ----  | ----  |
| success  | 布尔 | 表示该请求 |
| message  | string | 返回信息 用于debug |
| error | int | 错误代码 便于debug 0即为正常 |
| data | array | 返回的数据 |
| version | int | API 版本号 |
| codename | string | codename |
| time | unix timestamp | 当前时间戳 |
| delay | time | 响应时间 | 

建议开发者根据固定的几种HTTP状态码再中间层进行监听，其余情况均会返回HTTP 200。每个请求操作再对success进行判断，再根据error匹配对于的错误。

## 联系我们
欢迎开发者加入QQ群，一起交流，参与改进API。