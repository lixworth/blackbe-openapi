# 从内部文件复制出来 能用就行
<center>
    <img src="http://api.blackbe.xyz:8890/logo-tm.png" width="300px"/> <br>
    BlackBE OpenAPI V2
</center>

> 夢ならばどれほどよかったでしょう 

# **API正在快速迭代中，所有内容均不代表最终成果**
V2API与V1相比增加了数种功能，并且大大提高的安全性，有关这方面介绍请查看网站主页。
所以我们对V1部分API仅做出兼容处理，希望开发者尽快更新。
该文档仅面向于官方开发人员，用于根据最为完整最贴切于项目策划理念开发官方插件。

## 版本：2nd Edition Version 1.0 [CodeName: Kamiyama Shiki ]
## 适用于 v2-xxx API

## 随便扯几句
OpenAPI与readme中内部使用API不同之处不经csrf验证，可跨域请求等，但是API会限制访问次数，初步定于 1s x次，超过次数会返回 HTTP 403，其余情况都会返回 200 （现在还没写） <br>
这边建议开发者在网络处理的中间层，进行403与200判断，后续错误代码会在返回内容中的 "success" 与 "error" 中体现。<br>
success所代表的请求是否成功，error为错误代码供平台开发者调试用，插件开发者建议根据本 "message" 中返回的信息判读错误原因，返回内容暂仅为中文(其实是我懒得去给每个API的error写表格，后期会满满补完可能)。 <br>
另外建议开发者若有精力，可使用其开发对应语言的SDK或API，便于开发者扩展。

## API：http://api.blackbe.xyz/
**由于API变化过快，请根据当时请求情况为主，仅能保证大体不会改变。**

## OpenAPI
* [x] [GET] /api API状态
* [x] [GET] /api/check 查询ID 
* [x] [GET] /api/qqcheck 查询qq
* [ ] [POST] /api/new 新增云黑，需携带secret  


* [x] [GET] /api/banlevel 查询等级  仅做兼容
* [x] [GET] /api/baninfo 查询封禁详情 仅做兼容
* [x] [GET] /api/text 封禁全部信息 （重定向新路由) 
* [x] [GET] /api/bot qq机器人 仅做兼容
* [x] ~~[GET] /api/idall 遍历云黑~~ 


## [GET] /api API状态
```json
{
    "error": 0,
    "message": "运行正常"
}
```
## [GET] /api/check?v2=true 查询ID 
| 参数 | 类型 | 注释 |
| :-----| :----: | :----: |
| v2 | bool | true 必填 |
| id | string | 所查玩家的ID |

ep: http://api.blackbe.xyz/api/check?v2=true&id=TEST 
**UUID 为1只是方便测试 具体应该是字符串**
```json
{
    "success": true,
    "error": 2002,
    "message": "存在违规行为",
    "version": "v2",
    "data": {
        "name": "TEST",
        "xbox_id": null,
        "level": 0,
        "info": "测试信息",
        "qq": 11030503,
        "trial": 1,
        "server": "测试"
    }
}
```
Errorcode：

| Code | 类型 | 内容 |
| :-----| :----: | :----: |
| 4030 | 错误 | 缺少参数 |
| 4031 | 错误 | 用户不存在 |
| 4032 | 远坂时臣 | 尚未创建云黑库 用户注册之后理论上会自动创建的 |
| 2001 | 成功 | 正在审核中 |
| 2002 | 成功 | 存在违规行为 |
| 2003 | 成功 | 无违规行为 |

## [GET] http://api.blackbe.xyz/api/qqcheck?v2=true 查询qq
| 参数 | 类型 | 注释 |
| :-----| :----: | :----: |
| v2 | bool | true 必填 |
| qq | string | 所查玩家的qq |

ep: http://test.blackbe.xyz:8890/api/qqcheck?v2=true&qq=11030503
**UUID 为1只是方便测试 具体应该是字符串**
```json
{ 
    "success": true,
    "error": 2002,
    "message": "存在违规行为",
    "version": "v2",
    "data": {
        "name": "TEST",
        "xbox_id": null,
        "level": 0,
        "info": "测试信息",
        "qq": 11030503,
        "trial": 1,
        "server": "测试"
    }
}
```
Errorcode：

| Code | 类型 | 内容 |
| :-----| :----: | :----: |
| 4030 | 错误 | 缺少参数 |
| 4031 | 错误 | 用户不存在 |
| 4032 | 远坂时臣 | 尚未创建云黑库 用户注册之后理论上会自动创建的 |
| 2001 | 成功 | 正在审核中 |
| 2002 | 成功 | 存在违规行为 |
| 2003 | 成功 | 无违规行为 |
