(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{324:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return p}));var a=n(0),i=n.n(a),r=i.a.createContext({}),o=function(e){var t=i.a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},s=function(e){var t=o(e.components);return i.a.createElement(r.Provider,{value:t},e.children)};var l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},c=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,l=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),c=o(n),p=a,u=c[s+"."+p]||c[p]||d[p]||r;return n?i.a.createElement(u,Object.assign({},{ref:t},l,{components:n})):i.a.createElement(u,Object.assign({},{ref:t},l))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=c;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[l]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},98:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(1),i=n(6),r=(n(0),n(324)),o={title:"FAQ",sidebar_label:"FAQ"},s=[{value:"Why am I having trouble installing Qode?",id:"why-am-i-having-trouble-installing-qode",children:[]},{value:"Javascript widgets are missing methods and properties as compared to QT widget?",id:"javascript-widgets-are-missing-methods-and-properties-as-compared-to-qt-widget",children:[]},{value:"When will Qode upgrade to latest Node.js / Qt version?",id:"when-will-qode-upgrade-to-latest-nodejs--qt-version",children:[]},{value:"My app's window/widgets/tray disappeared after a few minutes.",id:"my-apps-windowwidgetstray-disappeared-after-a-few-minutes",children:[]}],l={id:"faq",title:"FAQ",description:"## Why am I having trouble installing Qode?",source:"@site/docs/faq.md",permalink:"/docs/faq",sidebar_label:"FAQ"},d={rightToc:s,metadata:l},c="wrapper";function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)(c,Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"why-am-i-having-trouble-installing-qode"},"Why am I having trouble installing Qode?"),Object(r.b)("p",null,"When running ",Object(r.b)("inlineCode",{parentName:"p"},"npm install @nodegui/qode"),", some users occasionally encounter\ninstallation errors."),Object(r.b)("p",null,"In almost all cases, these errors are the result of network problems and not\nactual issues with the ",Object(r.b)("inlineCode",{parentName:"p"},"@nodegui/qode")," npm package. Errors like ",Object(r.b)("inlineCode",{parentName:"p"},"ELIFECYCLE"),",\n",Object(r.b)("inlineCode",{parentName:"p"},"EAI_AGAIN"),", ",Object(r.b)("inlineCode",{parentName:"p"},"ECONNRESET"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"ETIMEDOUT")," are all indications of such\nnetwork problems. The best resolution is to try switching networks, or\nwait a bit and try installing again."),Object(r.b)("p",null,"You can also attempt to download Qode directly from\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/nodegui/qode/releases"}),"nodegui/qode/releases"),"\nif installing via ",Object(r.b)("inlineCode",{parentName:"p"},"npm")," is failing."),Object(r.b)("h2",{id:"javascript-widgets-are-missing-methods-and-properties-as-compared-to-qt-widget"},"Javascript widgets are missing methods and properties as compared to QT widget?"),Object(r.b)("p",null,"As you would have noticed, the list of methods and properties are less compared to what is present in the Qt's corresponding widget class. This is because we havent written wrappers for them yet. You can help add more methods by following the development guide for contributors. Overtime this gap would reduce."),Object(r.b)("h2",{id:"when-will-qode-upgrade-to-latest-nodejs--qt-version"},"When will Qode upgrade to latest Node.js / Qt version?"),Object(r.b)("p",null,"When a new version of Node.js/Qt gets released, we usually wait for about a month\nbefore upgrading the one in Qode. So we can avoid getting affected by bugs\nintroduced in new Node.js/Qt versions, which happens very often."),Object(r.b)("h2",{id:"my-apps-windowwidgetstray-disappeared-after-a-few-minutes"},"My app's window/widgets/tray disappeared after a few minutes."),Object(r.b)("p",null,"This happens when the variable which is used to store the window/tray gets\ngarbage collected."),Object(r.b)("p",null,"If you encounter this problem, the following articles may prove helpful:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management"}),"Memory Management")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://msdn.microsoft.com/library/bzt2dkta(v=vs.94).aspx"}),"Variable Scope"))),Object(r.b)("p",null,"If you want a quick fix, you can make the variables global by changing your\ncode from this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'const { QWidget } = require("@nodegui/nodegui");\n\nconst view = new QWidget();\nview.setObjectName("container");\nview.setLayout(new FlexLayout());\n')),Object(r.b)("p",null,"to this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'const { QWidget } = require("@nodegui/nodegui");\n\nconst view = new QWidget();\nview.setObjectName("container");\nview.setLayout(new FlexLayout());\n\nglobal.view = view; //prevent GC\n')))}p.isMDXComponent=!0}}]);