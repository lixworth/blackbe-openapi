# BlackBE 云黑 OpenAPI

**API正在快速迭代中，所有内容均不代表最终成果**

## 概要

V2API与V1相比增加了数种功能，并且大大提高的安全性，有关这方面介绍请查看网站主页。

V2API相比与V1API改动巨大，我们编写了"从V1升级"协助开发者快速更换到V2，如果读者是第一次接触，无需查看。
<br/>本文为作者彻夜所敲，非专业人士，用词不当、语句不通、错别字多尽情见谅，本文档开源于Github，也欢迎提pr。

版本：2nd Edition Version 1.0 [CodeName: Kamiyama Shiki ] <br/>
适用版本: v2-xxx API <br/>
维护者: LixWorth <lixworth@outlook.com> <br/>

v2 api 返回统一使用JSON数据格式，并返回固定响应模板，如下例子。例子中JSON对格式进行美化，便于阅读。

### [GET] /api/v2 获取API服务状态

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
| success  | boolean | 表示该请求是否成功 |
| message  | string | 返回信息 用于debug |
| error | int | 错误代码 便于debug 0即为正常 |
| data | array | 返回的数据 |
| version | int | API 版本号 |
| codename | string | codename |
| time | unix timestamp | 当前时间戳 |
| delay | time | 响应时间 | 

请按照文档中我们所写的请求类型进行操作，其中POST需向API传递JSON请求，只要将请求头中的 Content-Type 设置为 application/json，
此处推荐开发者使用Postman软件测试API，类似于下图:


另外建议开发者使用HTTP请求类，对固定的几种HTTP状态码再中间层进行监听，其余情况均会返回HTTP 200。每个请求操作再对success进行判断，再根据error匹配对应的错误。 

如果你对上述内容并不太理解。也不要担心，我们官方会尽量制作主流语言的SDK，便于参考。（列表会写在下面的）

## 联系我们
欢迎开发者加入QQ群：887921071与tg群(https://t.me/BlackBEGroup)，一起交流，参与改进API。