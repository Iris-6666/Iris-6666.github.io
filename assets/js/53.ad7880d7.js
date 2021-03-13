(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{507:function(t,e,s){"use strict";s.r(e);var a=s(10),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("Github作为全球最大的代码托管平台和开源社区，它的服务器在国外，所以一直存在访问速度过慢、甚至有时候无法访问的问题，非常让人头疼！！！慢有时候还可以忍受，但是对于最近几天发生的大片地区无法正常访问Github的问题，就必须有一个好的方法去解决了。")]),t._v(" "),s("h1",{attrs:{id:"解决方案一-使用gitee的镜像仓库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决方案一-使用gitee的镜像仓库"}},[t._v("#")]),t._v(" 解决方案一：使用Gitee的镜像仓库")]),t._v(" "),s("p",[t._v("大家都知道国内正在积极推动开源社区的发展，其中Gitee就是我们国家支持推动的国内开源生态系统，经过这么多年的发展，大部分实用的仓库都可以在Gitee上找到镜像，而且由于其服务器是在国内，所以访问速度非常快速！！")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://gitee.com/",title:"Gitee传送门",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Gitee传送门"),s("OutboundLink")],1)]),t._v(" "),s("h1",{attrs:{id:"解决方案二-配置本地的hosts文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决方案二-配置本地的hosts文件"}},[t._v("#")]),t._v(" 解决方案二：配置本地的Hosts文件")]),t._v(" "),s("p",[s("strong",[t._v("原理：")]),t._v(" 绕过DNS解析，直接使用本地的DNS记录进行直接跳转。")]),t._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"http://ping.chinaz.com/github.com",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("DNS查询"),s("OutboundLink")],1),t._v(" http://ping.chinaz.com/github.com")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://oscimg.oschina.net/oscnet/up-115ff6bd2e826a06ded84b34ba73c7e2a4f.png",alt:"Ping检测",title:"Ping检测"}})]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("选择TTL和响应时间都比较小的两个响应IP")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://oscimg.oschina.net/oscnet/up-86c3c5f48f9c7bae78a2c12cf78d84167bd.png",alt:"Ping选择IP",title:"Ping选择IP"}})]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[t._v("修改HOST")])]),t._v(" "),s("p",[t._v("使用管理员权限打开位于 "),s("code",[t._v("C:\\Windows\\System32\\drivers\\etc")]),t._v(" 下的 "),s("code",[t._v("hosts")]),t._v(" 文件 ，添加对应的IP映射。")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Add to Github node")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("15.164")]),t._v(".81.167 github.com   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#改为当下查询最快的节点IP")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("52.74")]),t._v(".223.119 github.com   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#改为当下查询最快的节点IP")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("如下图所示：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://oscimg.oschina.net/oscnet/up-2c949ef36ff6f54347aebe96f6c8db52244.png",alt:"Hosts文件添加IP映射",title:"Hosts文件添加IP映射"}})]),t._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[t._v("刷新本地DNS缓存\n使用 "),s("code",[t._v("Win+R")]),t._v(" 输入 "),s("code",[t._v("cmd")]),t._v(" ，打开命令提示符，输入："),s("code",[t._v("ipconfig /flushdns")])])]),t._v(" "),s("p",[t._v("返回显示：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://oscimg.oschina.net/oscnet/up-7d217a24c2960036ab7aba3c607286d59ca.png",alt:"成功刷新DNS配置返回图",title:"成功刷新DNS配置返回图"}})]),t._v(" "),s("h1",{attrs:{id:"成功优化-解决无法连接github的问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#成功优化-解决无法连接github的问题"}},[t._v("#")]),t._v(" 成功优化/解决无法连接Github的问题")]),t._v(" "),s("p",[t._v("至此，我们就成功加速了访问Github，或者解决了Github无法连接的问题，是不是很简单呢？")]),t._v(" "),s("p",[t._v("更多精彩技术分享欢迎访问我的"),s("a",{attrs:{href:"https://china-fanxin.gitee.io",title:"技术博客",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("技术博客"),s("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=n.exports}}]);