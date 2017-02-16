webpackJsonp([7,12],{

/***/ 229:
/***/ function(module, exports) {

	module.exports = {
	  "content": [
	    "article",
	    [
	      "h3",
	      "定义／Definition"
	    ],
	    [
	      "p",
	      "字体是界面设计中不可缺少的基本组件。ant design根据字体在界面设计中的功能定义字体的样式，以达到视觉设计上的整体性和一致性，以及信息的对比和阅读层次感。此外，在字体的设计中还考虑了跨系统的展现效果而对默认字体和备用字体做了详细的定义。 "
	    ],
	    [
	      "h3",
	      "构成／Composition"
	    ],
	    [
	      "p",
	      "字体由五部分构成："
	    ],
	    [
	      "ol",
	      [
	        "li",
	        [
	          "p",
	          "字体家族"
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          "字号 "
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          "行高 "
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          "字重  "
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          "颜色"
	        ]
	      ]
	    ],
	    [
	      "h3",
	      "字体家族／Font Family"
	    ],
	    [
	      "p",
	      "字体家族由首选字体和备选字体构成，同时包括内容字体和代码字体。AntD Mobile的UI字体家族总共定义了首选字体，备用字体和次级备用字体，考虑到中英文的情况，一共入选了六种字体。选择上有几方面考量：1）跨系统以及平台表现尽量一致；2）系统默认字体；3）数字显示等宽 4）代码显示字体。\nant design跨系统的字体对照表如下： "
	    ],
	    [
	      "p",
	      [
	        "img",
	        {
	          "title": null,
	          "src": "https://os.alipayobjects.com/rmsportal/wUNjrNJvHvjyIuT.png",
	          "alt": null
	        }
	      ]
	    ],
	    [
	      "h3",
	      "字号／Font Size"
	    ],
	    [
	      "p",
	      "在页面设计中通过处理文字信息字体的大小表达信息间的对比关系和信息的层级关系。AntD Mobile选用的从10px到20px的字号，共7种，基本可以满足产品界面设计的文字字号需求。在运营类页面的设计中，字号可以有更大的自由度。  "
	    ],
	    [
	      "p",
	      [
	        "img",
	        {
	          "title": null,
	          "src": "https://os.alipayobjects.com/rmsportal/mpEsCtSiZTkotIv.png",
	          "alt": null
	        }
	      ],
	      "  "
	    ],
	    [
	      "h3",
	      "行高／Line Height"
	    ],
	    [
	      "p",
	      "AntD Mobile建议设计师们在设计稿中对字体设置行高，这样可以减少前端在开发过程中的成本和不必要的排版损耗。对于字体行高的建议值有两种："
	    ],
	    [
	      "ol",
	      [
	        "li",
	        [
	          "p",
	          "字体的1倍"
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          "字号的1.5倍"
	        ]
	      ]
	    ],
	    [
	      "p",
	      "在具体设计过程中可以根据页面中信息量的多少进行挑选。AntD Mobile的字体统一都选用1.5倍的行高。只有当出现展示类字体设计需求且字体大于等于40sp的时候，可将行高调整为1。\nAntD Mobile的行高单位是倍数的概念，有些时候设计师会对某些特定字体定义固定数值的行高，只需要把单位调整为dp即可。"
	    ],
	    [
	      "p",
	      [
	        "img",
	        {
	          "title": null,
	          "src": "https://os.alipayobjects.com/rmsportal/enguHFEcahawqAO.png",
	          "alt": null
	        }
	      ],
	      " "
	    ],
	    [
	      "h3",
	      "字体重量／Font Weight"
	    ],
	    [
	      "p",
	      "字体重量对应的概念就是设计中的regular、medium、light、bold等概念，不同的设计体系可以根据自身的需求设定字体的重量分类。在AntD Mobile对于重量只定义了两类，normal和bold。 "
	    ],
	    [
	      "p",
	      [
	        "img",
	        {
	          "title": null,
	          "src": "https://os.alipayobjects.com/rmsportal/HYyebeGLHGCXXgF.png",
	          "alt": null
	        }
	      ],
	      "  "
	    ],
	    [
	      "p",
	      "状态色用于文字上的情况往往是当文字信息需要被从颜色上强调不同的状态，主要还是通过对比处理达到视觉引导的目的。比如，出错提醒，警告提示信息，文字链等。  "
	    ],
	    [
	      "p",
	      [
	        "img",
	        {
	          "title": null,
	          "src": "https://os.alipayobjects.com/rmsportal/nxEhcgdpkkzriLm.png",
	          "alt": null
	        }
	      ],
	      "  "
	    ],
	    [
	      "p",
	      "中性色在界面设计文字中的应用是最为广泛的，中性色中的6种颜色是目前AntD Mobile最为常用的字体颜色。 "
	    ],
	    [
	      "p",
	      [
	        "img",
	        {
	          "title": null,
	          "src": "https://os.alipayobjects.com/rmsportal/BVhUntftClLrsRy.png",
	          "alt": null
	        }
	      ],
	      "    "
	    ],
	    [
	      "h3",
	      "使用案例以及标注方法／Examples"
	    ],
	    [
	      "p",
	      "字体的标注公式如下：   "
	    ],
	    [
	      "p",
	      [
	        "img",
	        {
	          "title": null,
	          "src": "https://os.alipayobjects.com/rmsportal/MLBfAtclYODlTQX.png",
	          "alt": null
	        }
	      ]
	    ],
	    [
	      "p",
	      "按照上面的定义公式，要得到40sp的行高1倍的加粗品牌色字体的标注方式如下："
	    ],
	    [
	      "p",
	      [
	        "img",
	        {
	          "title": null,
	          "src": "https://os.alipayobjects.com/rmsportal/rCWgFZBVCpFztFL.png",
	          "alt": null
	        }
	      ]
	    ],
	    [
	      "h3",
	      "AntD Mobile 常用字体表／Table of fonts"
	    ],
	    [
	      "p",
	      [
	        "img",
	        {
	          "title": null,
	          "src": "https://os.alipayobjects.com/rmsportal/ULOaOMhSCYOnknT.png",
	          "alt": null
	        }
	      ]
	    ]
	  ],
	  "meta": {
	    "order": 3,
	    "chinese": "字体",
	    "english": "Font",
	    "filename": "docs/pattern/font.md"
	  },
	  "toc": [
	    "ul"
	  ]
	};

/***/ }

});