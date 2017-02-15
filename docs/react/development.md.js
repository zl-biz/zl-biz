webpackJsonp([5,14],{

/***/ 233:
/***/ function(module, exports) {

	module.exports = {
	  "content": [
	    "article",
	    [
	      "h2",
	      "环境"
	    ],
	    [
	      "pre",
	      {
	        "lang": null,
	        "highlighted": "node <span class=\"token operator\">=</span> <span class=\"token number\">4</span><span class=\"token operator\">+</span>\nnpm <span class=\"token operator\">=</span> <span class=\"token number\">3</span><span class=\"token operator\">+</span>"
	      },
	      [
	        "code",
	        "node = 4+\nnpm = 3+"
	      ]
	    ],
	    [
	      "h2",
	      "代码风格"
	    ],
	    [
	      "p",
	      "TypeScript"
	    ],
	    [
	      "pre",
	      {
	        "lang": "bash",
	        "highlighted": "$ <span class=\"token function\">npm</span> run lint"
	      },
	      [
	        "code",
	        "$ npm run lint"
	      ]
	    ],
	    [
	      "h3",
	      "API 规范"
	    ],
	    [
	      "p",
	      "设计原则"
	    ],
	    [
	      "p",
	      "组件名以 ",
	      [
	        "code",
	        "-"
	      ],
	      " 分割, 例如 ",
	      [
	        "code",
	        "date-picker"
	      ],
	      "，文件后缀名统一为 ",
	      [
	        "code",
	        ".tsx"
	      ],
	      "。"
	    ],
	    [
	      "h3",
	      "组件实现"
	    ],
	    [
	      "ul",
	      [
	        "li",
	        [
	          "p",
	          "尽量使用知名开源组件"
	        ]
	      ]
	    ],
	    [
	      "h3",
	      "web 组件规范"
	    ],
	    [
	      "ul",
	      [
	        "li",
	        [
	          "p",
	          [
	            "code",
	            "components/button/index.web.tsx"
	          ]
	        ]
	      ]
	    ],
	    [
	      "pre",
	      {
	        "lang": "js",
	        "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token operator\">*</span> <span class=\"token keyword\">as</span> React <span class=\"token keyword\">from</span> <span class=\"token string\">'react'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">Button</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">static</span> propTypes <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token keyword\">static</span> defaultProps <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  onClick <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token operator\">&lt;</span>a onClick<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onClick<span class=\"token punctuation\">}</span><span class=\"token operator\">></span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> Button<span class=\"token punctuation\">;</span>"
	      },
	      [
	        "code",
	        "import * as React from 'react';\n\nclass Button extends React.Component {\n  static propTypes = {};\n  static defaultProps = {};\n  onClick = () => {};\n  render() {\n    return <a onClick={this.onClick}>;\n  }\n}\n\nexport default Button;"
	      ]
	    ],
	    [
	      "ul",
	      [
	        "li",
	        [
	          "p",
	          [
	            "code",
	            "components/button/style/index.web.tsx"
	          ]
	        ]
	      ]
	    ],
	    [
	      "pre",
	      {
	        "lang": "js",
	        "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token string\">'../../style/'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token string\">'./index.less'</span><span class=\"token punctuation\">;</span>"
	      },
	      [
	        "code",
	        "import '../../style/';\nimport './index.less';"
	      ]
	    ],
	    [
	      "ul",
	      [
	        "li",
	        [
	          "p",
	          [
	            "code",
	            "components/button/style/index.less"
	          ]
	        ]
	      ]
	    ],
	    [
	      "pre",
	      {
	        "lang": "less",
	        "highlighted": "<span class=\"token variable\">@import</span> <span class=\"token string\">'../../../style/variables'</span><span class=\"token punctuation\">;</span>\n<span class=\"token variable\">@import</span> <span class=\"token string\">'../../../style/mixins'</span><span class=\"token punctuation\">;</span>\n<span class=\"token atrule\">@buttonPrefixClass<span class=\"token punctuation\">:</span> am-button\n\n@</span><span class=\"token punctuation\">{</span>buttonPrefixClass<span class=\"token punctuation\">}</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token mixin-usage function\">.button</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
	      },
	      [
	        "code",
	        "@import '../../../style/variables';\n@import '../../../style/mixins';\n@buttonPrefixClass: am-button\n\n@{buttonPrefixClass} {\n  .button();\n}"
	      ]
	    ],
	    [
	      "h2",
	      "开发流程"
	    ],
	    [
	      "pre",
	      {
	        "lang": "bash",
	        "highlighted": "$ <span class=\"token function\">npm</span> <span class=\"token function\">install</span>"
	      },
	      [
	        "code",
	        "$ npm install"
	      ]
	    ],
	    [
	      "h3",
	      "web 流程"
	    ],
	    [
	      "pre",
	      {
	        "lang": "bash",
	        "highlighted": "$ <span class=\"token function\">npm</span> start"
	      },
	      [
	        "code",
	        "$ npm start"
	      ]
	    ],
	    [
	      "p",
	      "访问：",
	      [
	        "a",
	        {
	          "title": null,
	          "href": "http://localhost:8001/"
	        },
	        "http://localhost:8001/"
	      ]
	    ],
	    [
	      "p",
	      "如果需要开发新的组件，编辑./index.js"
	    ],
	    [
	      "h3",
	      "提交代码"
	    ],
	    [
	      "p",
	      "自己从 master 新开一个分支开发."
	    ],
	    [
	      "pre",
	      {
	        "lang": "bash",
	        "highlighted": "<span class=\"token function\">git</span> checkout -b xx-feature"
	      },
	      [
	        "code",
	        "git checkout -b xx-feature"
	      ]
	    ],
	    [
	      "p",
	      "开发完成后。"
	    ],
	    [
	      "pre",
	      {
	        "lang": "bash",
	        "highlighted": "$ <span class=\"token function\">git</span> add --all\n$ <span class=\"token function\">git</span> commit -am <span class=\"token string\">\"描述\"</span>\n$ <span class=\"token function\">git</span> pull --rebase origin master\n// 解决冲突\n$ <span class=\"token function\">git</span> push origin xx-feature:xx-feature"
	      },
	      [
	        "code",
	        "$ git add --all\n$ git commit -am \"描述\"\n$ git pull --rebase origin master\n// 解决冲突\n$ git push origin xx-feature:xx-feature"
	      ]
	    ],
	    [
	      "p",
	      "提交 mr, 指定相应人员 review, 根据反馈进一步修改提交."
	    ],
	    [
	      "p",
	      "由 review 人合并进主干后"
	    ],
	    [
	      "pre",
	      {
	        "lang": "bash",
	        "highlighted": "$ <span class=\"token function\">git</span> checkout master\n$ <span class=\"token function\">git</span> pull"
	      },
	      [
	        "code",
	        "$ git checkout master\n$ git pull"
	      ]
	    ]
	  ],
	  "meta": {
	    "order": 3,
	    "title": "开发规范",
	    "filename": "docs/react/development.md"
	  },
	  "toc": [
	    "ul",
	    [
	      "li",
	      [
	        "a",
	        {
	          "href": "#环境"
	        },
	        "环境"
	      ]
	    ],
	    [
	      "li",
	      [
	        "a",
	        {
	          "href": "#代码风格"
	        },
	        "代码风格"
	      ]
	    ],
	    [
	      "li",
	      [
	        "a",
	        {
	          "href": "#开发流程"
	        },
	        "开发流程"
	      ]
	    ]
	  ]
	};

/***/ }

});