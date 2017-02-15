webpackJsonp([3,4],{

/***/ 184:
/***/ function(module, exports) {

	module.exports = {
	  "content": [
	    "section",
	    [
	      "p",
	      "单个连续模块垂直排列，显示当前的内容、状态和可进行的操作。eg：联系人列表。"
	    ],
	    [
	      "h3",
	      "规则"
	    ],
	    [
	      "ul",
	      [
	        "li",
	        [
	          "p",
	          "一般由主要信息、主要操作、次要信息、次要操作组成。"
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          "主要信息和主要操作放在列表的左边，次要信息和次要操作放在列表的右边。"
	        ]
	      ]
	    ]
	  ],
	  "meta": {
	    "category": "Components",
	    "type": "Data Display",
	    "chinese": "列表",
	    "english": "List",
	    "source": "design",
	    "filename": "components/list/index.md"
	  },
	  "api": [
	    "section",
	    [
	      "h2",
	      "API ( 适用平台：WEB、React-Native )"
	    ],
	    [
	      "h3",
	      "List"
	    ],
	    [
	      "table",
	      [
	        "thead",
	        [
	          "tr",
	          [
	            "th",
	            "成员"
	          ],
	          [
	            "th",
	            "说明"
	          ],
	          [
	            "th",
	            "类型"
	          ],
	          [
	            "th",
	            "默认值"
	          ]
	        ]
	      ],
	      [
	        "tbody",
	        [
	          "tr",
	          [
	            "td",
	            "renderHeader"
	          ],
	          [
	            "td",
	            "list heder"
	          ],
	          [
	            "td",
	            "(): void"
	          ],
	          [
	            "td",
	            "无"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "renderFooter"
	          ],
	          [
	            "td",
	            "list footer"
	          ],
	          [
	            "td",
	            "(): void"
	          ],
	          [
	            "td",
	            "无"
	          ]
	        ]
	      ]
	    ],
	    [
	      "h3",
	      "List.Item"
	    ],
	    [
	      "table",
	      [
	        "thead",
	        [
	          "tr",
	          [
	            "th",
	            "成员"
	          ],
	          [
	            "th",
	            "说明"
	          ],
	          [
	            "th",
	            "类型"
	          ],
	          [
	            "th",
	            "默认值"
	          ]
	        ]
	      ],
	      [
	        "tbody",
	        [
	          "tr",
	          [
	            "td",
	            "thumb"
	          ],
	          [
	            "td",
	            "缩略图(当为 string 类型时作为 img src)"
	          ],
	          [
	            "td",
	            "String/React.Element"
	          ],
	          [
	            "td",
	            "无"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "extra"
	          ],
	          [
	            "td",
	            "右边内容"
	          ],
	          [
	            "td",
	            "String/React.Element"
	          ],
	          [
	            "td",
	            "无"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "arrow"
	          ],
	          [
	            "td",
	            "箭头方向(右,上,下), 可选",
	            [
	              "code",
	              "horizontal"
	            ],
	            ",",
	            [
	              "code",
	              "up"
	            ],
	            ",",
	            [
	              "code",
	              "down"
	            ],
	            ",",
	            [
	              "code",
	              "empty"
	            ],
	            "，如果是",
	            [
	              "code",
	              "empty"
	            ],
	            "则存在对应的dom,但是不显示"
	          ],
	          [
	            "td",
	            "String"
	          ],
	          [
	            "td",
	            "无"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "align"
	          ],
	          [
	            "td",
	            "Flex 子元素垂直对齐，可选",
	            [
	              "code",
	              "top"
	            ],
	            ",",
	            [
	              "code",
	              "middle"
	            ],
	            ",",
	            [
	              "code",
	              "bottom"
	            ]
	          ],
	          [
	            "td",
	            "String"
	          ],
	          [
	            "td",
	            [
	              "code",
	              "middle"
	            ]
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "onClick"
	          ],
	          [
	            "td",
	            "点击事件的回调函数"
	          ],
	          [
	            "td",
	            "(): void"
	          ],
	          [
	            "td",
	            "无"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "error"
	          ],
	          [
	            "td",
	            "报错样式,右侧文字颜色变成橙色"
	          ],
	          [
	            "td",
	            "Boolean"
	          ],
	          [
	            "td",
	            [
	              "code",
	              "false"
	            ]
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "multipleLine"
	          ],
	          [
	            "td",
	            "多行"
	          ],
	          [
	            "td",
	            "Boolean"
	          ],
	          [
	            "td",
	            [
	              "code",
	              "false"
	            ]
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "wrap"
	          ],
	          [
	            "td",
	            "是否换行，默认情况下，文字超长会被隐藏，"
	          ],
	          [
	            "td",
	            "Boolean"
	          ],
	          [
	            "td",
	            [
	              "code",
	              "false"
	            ]
	          ]
	        ]
	      ]
	    ],
	    [
	      "h3",
	      "List.Item.Brief"
	    ],
	    [
	      "p",
	      "辅助说明"
	    ]
	  ]
	};

/***/ }

});