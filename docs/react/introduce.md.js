webpackJsonp([2,14],{

/***/ 236:
/***/ function(module, exports) {

	module.exports = {
	  "content": [
	    "article",
	    [
	      "p",
	      [
	        "code",
	        "biz-mobile"
	      ],
	      " 是左邻电商移动端的 React 实现。"
	    ],
	    [
	      "h2",
	      "安装"
	    ],
	    [
	      "h2",
	      "使用"
	    ],
	    [
	      "h4",
	      "Web 使用方式"
	    ],
	    [
	      "ol",
	      [
	        "li",
	        [
	          "p",
	          "首先需要引入『高清方案』设置：具体方法"
	        ],
	        [
	          "p",
	          "见 wiki 里 ",
	          [
	            "a",
	            {
	              "title": null,
	              "href": "https://github.com/ant-design/ant-design-mobile/wiki/biz-mobile-0.8-%E4%BB%A5%E4%B8%8A%E7%89%88%E6%9C%AC%E3%80%8C%E9%AB%98%E6%B8%85%E3%80%8D%E6%96%B9%E6%A1%88%E8%AE%BE%E7%BD%AE"
	            },
	            "biz-mobile-0.8-以上版本「高清」方案设置"
	          ]
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          "Set webpack to resolve .web.js suffix"
	        ],
	        [
	          "pre",
	          {
	            "lang": null,
	            "highlighted": "resolve<span class=\"token punctuation\">:</span> {\n  modulesDirectories<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token string\">'node_modules'</span><span class=\"token punctuation\">,</span> path<span class=\"token punctuation\">.</span><span class=\"token function\">join</span><span class=\"token punctuation\">(</span>__dirname<span class=\"token punctuation\">,</span> <span class=\"token string\">'../node_modules'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  extensions<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token string\">''</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'.web.js'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'.js'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'.json'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">,</span>"
	          },
	          [
	            "code",
	            "resolve: {\n  modulesDirectories: ['node_modules', path.join(__dirname, '../node_modules')],\n  extensions: ['', '.web.js', '.js', '.json'],\n},"
	          ]
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          "无需单独引入样式，使用 ",
	          [
	            "a",
	            {
	              "title": null,
	              "href": "https://github.com/ant-design/babel-plugin-import"
	            },
	            "babel-plugin-import"
	          ],
	          " 按需加载，插件设置如下："
	        ],
	        [
	          "pre",
	          {
	            "lang": "js",
	            "highlighted": "<span class=\"token comment\" spellcheck=\"true\">// .babelrc</span>\n<span class=\"token punctuation\">{</span><span class=\"token string\">\"plugins\"</span><span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">[</span><span class=\"token string\">\"import\"</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span> <span class=\"token string\">\"style\"</span><span class=\"token punctuation\">:</span> <span class=\"token string\">\"css\"</span><span class=\"token punctuation\">,</span> <span class=\"token string\">\"libraryName\"</span><span class=\"token punctuation\">:</span> <span class=\"token string\">\"biz-mobile\"</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span>\n<span class=\"token comment\" spellcheck=\"true\">// or webpack config file</span>\nwebpackConfig<span class=\"token punctuation\">.</span>babel<span class=\"token punctuation\">.</span>plugins<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">[</span><span class=\"token string\">'import'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span> libraryName<span class=\"token punctuation\">:</span> <span class=\"token string\">'biz-mobile'</span><span class=\"token punctuation\">,</span> style<span class=\"token punctuation\">:</span> <span class=\"token string\">'css'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	          },
	          [
	            "code",
	            "// .babelrc\n{\"plugins\": [[\"import\", { \"style\": \"css\", \"libraryName\": \"biz-mobile\" }]]}\n// or webpack config file\nwebpackConfig.babel.plugins.push(['import', { libraryName: 'biz-mobile', style: 'css' }]);"
	          ]
	        ]
	      ]
	    ],
	    [
	      "p",
	      "实例："
	    ],
	    [
	      "pre",
	      {
	        "lang": "jsx",
	        "highlighted": "<span class=\"token comment\" spellcheck=\"true\">// import js and css modularly, parsed by babel-plugin-import</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Button <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'biz-mobile'</span><span class=\"token punctuation\">;</span>\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span><span class=\"token punctuation\">></span></span>Start<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	      },
	      [
	        "code",
	        "// import js and css modularly, parsed by babel-plugin-import\nimport { Button } from 'biz-mobile';\nReactDOM.render(<Button>Start</Button>, mountNode);"
	      ]
	    ],
	    [
	      "p",
	      "如何自定义主题？",
	      [
	        "a",
	        {
	          "title": null,
	          "href": "https://github.com/ant-design/antd-init/blob/master/examples/customize-antd-theme/README.md"
	        },
	        "见此文档"
	      ]
	    ],
	    [
	      "h2",
	      "版本"
	    ]
	  ],
	  "meta": {
	    "order": 0,
	    "title": "项目介绍",
	    "filename": "docs/react/introduce.md"
	  },
	  "toc": [
	    "ul",
	    [
	      "li",
	      [
	        "a",
	        {
	          "href": "#安装"
	        },
	        "安装"
	      ]
	    ],
	    [
	      "li",
	      [
	        "a",
	        {
	          "href": "#使用"
	        },
	        "使用"
	      ]
	    ],
	    [
	      "li",
	      [
	        "a",
	        {
	          "href": "#版本"
	        },
	        "版本"
	      ]
	    ]
	  ]
	};

/***/ }

});