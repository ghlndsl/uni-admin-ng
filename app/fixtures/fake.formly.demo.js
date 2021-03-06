{
    "formOptions": {
        "key": "autoNgform",
        "submitCopy": "Save"
    },
    "formFields": [{
        "label": "封面",
        "key": "cover",
        "type": "input",
        "placeholder": "http://weibo.com/1siva",
        "validate": {
            "required": true,
            "maxlength": 10
        },
        "msg": {
            "help": "这里是普通的help文档",
            "xrequired": "必填项",
            "maxlength": "最长长度超过了",
            "pattern": "pattern不正确"
        }
    }, {
        "label": "片名",
        "key": "videoTitle",
        "type": "textarea",
        "attr": {
            "text-area-elastic": true,
            "rows": "4",
            "cols": "50"
        },
        "validate": {
            "required": true,
            "maxlength": 20,
            "minlength": 4
        },
        "msg": {
            "help": "这里是textarea的help文档",
            "xrequired": "必填项",
            "maxlength": "最长长度超过了"
        }
    }, {
        "type": "select",
        "label": "电影类型",
        "key": "videoType",
        "info": "请选择电影类型",
        "options": [{
            "name": "type1",
            "value": "搞笑"
        }, {
            "name": "Helicopter",
            "value": "喜剧"
        }, {
            "name": "Sport Utility Vehicle",
            "value": "动作"
        }, {
            "name": "Bicycle",
            "value": "动作"
        }, {
            "name": "Skateboard",
            "value": "爱情"
        }]
    }, {
        "type": "input",
        "label": "发行时间",
        "key": "publishDate"
    }, {
        "type": "hidden",
        "default": "secret_code",
        "key": "secretCode"
    }]
}