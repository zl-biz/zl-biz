webpackJsonp([7,14],{

/***/ 231:
/***/ function(module, exports) {

	module.exports = {
	  "content": [
	    "article",
	    {

	    },
	    [
	      "blockquote",
	      [
	        "p",
	        "注 ",
	        [
	          "code",
	          "@brand-primary 10%"
	        ],
	        " less 中用 ",
	        [
	          "code",
	          "rgba(@brand-primary, 10%)"
	        ],
	        " 实现。"
	      ]
	    ]
	  ],
	  "meta": {
	    "order": 4,
	    "title": "变量命名规范",
	    "filename": "docs/react/conventions.md"
	  },
	  "description": [
	    "section",
	    [
	      "h2",
	      "变量命名规范"
	    ],
	    [
	      "p",
	      [
	        "code",
	        "@{组件}-{属性}-{场景}-{状态}-{大小}-{反色}"
	      ]
	    ],
	    [
	      "h3",
	      "组件"
	    ],
	    [
	      "p",
	      "可选，具体组件名：如 ",
	      [
	        "code",
	        "button"
	      ],
	      " ",
	      [
	        "code",
	        "tabs"
	      ],
	      " ",
	      [
	        "code",
	        "list"
	      ],
	      " ",
	      [
	        "code",
	        "input"
	      ],
	      " 等。未指定时表示全局通用。"
	    ],
	    [
	      "blockquote",
	      [
	        "p",
	        "组件名可以复合，例如 ",
	        [
	          "code",
	          "default-button"
	        ],
	        " ",
	        [
	          "code",
	          "table"
	        ],
	        " ",
	        [
	          "code",
	          "tabs-current"
	        ],
	        " ",
	        [
	          "code",
	          "link-button"
	        ],
	        " 以表示更精确的主体。"
	      ]
	    ],
	    [
	      "h3",
	      "属性"
	    ],
	    [
	      "p",
	      "必选，变量实际内容。"
	    ],
	    [
	      "ul",
	      [
	        "li",
	        [
	          "p",
	          [
	            "code",
	            "brand"
	          ],
	          " 通用品牌色"
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          [
	            "code",
	            "fill"
	          ],
	          " 背景色"
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          [
	            "code",
	            "border-color"
	          ],
	          " 边框色"
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          [
	            "code",
	            "color"
	          ],
	          " 色彩。优先使用上面三种。"
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          [
	            "code",
	            "border-width"
	          ],
	          " 边框大小"
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          [
	            "code",
	            "font-size"
	          ],
	          " 文字大小"
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          [
	            "code",
	            "radius"
	          ],
	          " 圆角大小"
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          [
	            "code",
	            "height"
	          ],
	          " 容器高度"
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          [
	            "code",
	            "v-spacing"
	          ],
	          " 垂直间距"
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          [
	            "code",
	            "h-spacing"
	          ],
	          " 水平间距"
	        ]
	      ]
	    ],
	    [
	      "h3",
	      "场景"
	    ],
	    [
	      "ul",
	      [
	        "li",
	        [
	          "p",
	          [
	            "code",
	            "text"
	          ],
	          " 文本"
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          [
	            "code",
	            "heading"
	          ],
	          " 标题"
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          [
	            "code",
	            "subhead"
	          ],
	          " 子标题"
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          [
	            "code",
	            "caption"
	          ],
	          " 辅助说明文字"
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          [
	            "code",
	            "paragraph"
	          ],
	          " 段落文字"
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          [
	            "code",
	            "placeholder"
	          ],
	          " 占位符"
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          [
	            "code",
	            "display"
	          ],
	          " 广告/展示"
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          [
	            "code",
	            "icontext"
	          ],
	          " 图标文字"
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          [
	            "code",
	            "link"
	          ],
	          " 链接"
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          [
	            "code",
	            "body"
	          ],
	          " 页面"
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          [
	            "code",
	            "overlay"
	          ],
	          " 浮层"
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          [
	            "code",
	            "mask"
	          ],
	          " 遮罩"
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          [
	            "code",
	            "shadow"
	          ],
	          " 阴影"
	        ]
	      ]
	    ],
	    [
	      "h3",
	      "状态"
	    ],
	    [
	      "p",
	      "可选。"
	    ],
	    [
	      "ul",
	      [
	        "li",
	        [
	          "p",
	          [
	            "code",
	            "base"
	          ],
	          " 基本/默认"
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          [
	            "code",
	            "tap"
	          ],
	          " 按下"
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          [
	            "code",
	            "disabled"
	          ],
	          " 失效"
	        ]
	      ],
	      [
	        "li",
	        [
	          "pre",
	          {
	            "lang": null,
	            "highlighted": ""
	          },
	          [
	            "code",
	            ""
	          ]
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          [
	            "code",
	            "priamry"
	          ],
	          " 主要"
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          [
	            "code",
	            "success"
	          ],
	          " 成功"
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          [
	            "code",
	            "warning"
	          ],
	          " 警告"
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          [
	            "code",
	            "info"
	          ],
	          " 信息"
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          [
	            "code",
	            "important"
	          ],
	          " 重要/强调"
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          [
	            "code",
	            "error"
	          ],
	          " 错误"
	        ]
	      ]
	    ],
	    [
	      "h3",
	      "大小"
	    ],
	    [
	      "p",
	      "约定的大小选项。可选，一般和 ",
	      [
	        "code",
	        "font-size"
	      ],
	      " ",
	      [
	        "code",
	        "radius"
	      ],
	      " ",
	      [
	        "code",
	        "height"
	      ],
	      " ",
	      [
	        "code",
	        "spacing"
	      ],
	      " ",
	      [
	        "code",
	        "border-width"
	      ],
	      " 进行配合。"
	    ],
	    [
	      "ul",
	      [
	        "li",
	        [
	          "p",
	          [
	            "code",
	            "xl"
	          ],
	          " 超大"
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          [
	            "code",
	            "lg"
	          ],
	          " 大"
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          [
	            "code",
	            "md"
	          ],
	          " 中"
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          [
	            "code",
	            "sm"
	          ],
	          " 小"
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          [
	            "code",
	            "xs"
	          ],
	          " 超小"
	        ]
	      ]
	    ],
	    [
	      "h3",
	      "反色"
	    ],
	    [
	      "p",
	      "可选。"
	    ],
	    [
	      "ul",
	      [
	        "li",
	        [
	          "p",
	          [
	            "code",
	            "inverse"
	          ],
	          " 用于深色背景"
	        ]
	      ]
	    ]
	  ],
	  "toc": [
	    "ul"
	  ]
	};

/***/ }

});