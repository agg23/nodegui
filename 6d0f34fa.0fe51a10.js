(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{195:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"rightToc",(function(){return p})),a.d(t,"metadata",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a(1),c=a(6),b=(a(0),a(329)),r={id:"qapplication",title:"QApplication",sidebar_label:"QApplication"},p=[{value:"Example",id:"example",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Index",id:"index",children:[{value:"Constructors",id:"constructors",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Methods",id:"methods",children:[]}]},{value:"Constructors",id:"constructors-1",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"native",id:"native",children:[]},{value:"nodeChildren",id:"nodechildren",children:[]},{value:"<code>Optional</code> nodeParent",id:"optional-nodeparent",children:[]}]},{value:"Methods",id:"methods-1",children:[{value:"exec",id:"exec",children:[]},{value:"exit",id:"exit",children:[]},{value:"processEvents",id:"processevents",children:[]},{value:"quit",id:"quit",children:[]},{value:"quitOnLastWindowClosed",id:"quitonlastwindowclosed",children:[]},{value:"setNodeParent",id:"setnodeparent",children:[]},{value:"setQuitOnLastWindowClosed",id:"setquitonlastwindowclosed",children:[]},{value:"<code>Static</code> clipboard",id:"static-clipboard",children:[]},{value:"<code>Static</code> instance",id:"static-instance",children:[]},{value:"<code>Static</code> style",id:"static-style",children:[]}]}],l={id:"api/generated/classes/qapplication",title:"QApplication",description:"> QApplication is the root object for the entire application. It manages app level settings.",source:"@site/docs/api/generated/classes/qapplication.md",permalink:"/docs/api/generated/classes/qapplication",sidebar_label:"QApplication",sidebar:"api",previous:{title:"QAction",permalink:"/docs/api/generated/classes/qaction"},next:{title:"QBoxLayout",permalink:"/docs/api/generated/classes/qboxlayout"}},i={rightToc:p,metadata:l},o="wrapper";function s(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(b.b)(o,Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"QApplication is the root object for the entire application. It manages app level settings.")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"This class is a JS wrapper around Qt's ",Object(b.b)("a",Object(n.a)({parentName:"strong"},{href:"https://doc.qt.io/qt-5/qapplication.html"}),"QApplication class"))),Object(b.b)("p",null,"The QApplication class manages the GUI application's control flow and main settings. In NodeGui you will never create an instance of it manually. NodeGui's internal runtime ",Object(b.b)("inlineCode",{parentName:"p"},"Qode")," does it for you on app start. You can access the initialised QApplication though if needed."),Object(b.b)("h3",{id:"example"},"Example"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'const { QApplication } = require("@nodegui/nodegui");\n\nconst qApp = QApplication.instance();\nqApp.quit();\n')),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/generated/classes/component"}),"Component")),Object(b.b)("p",{parentName:"li"},"\u21b3 ",Object(b.b)("strong",{parentName:"p"},"QApplication")))),Object(b.b)("h2",{id:"index"},"Index"),Object(b.b)("h3",{id:"constructors"},"Constructors"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/qapplication#constructor"}),"constructor"))),Object(b.b)("h3",{id:"properties"},"Properties"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/qapplication#native"}),"native")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/qapplication#nodechildren"}),"nodeChildren")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/qapplication#optional-nodeparent"}),"nodeParent"))),Object(b.b)("h3",{id:"methods"},"Methods"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/qapplication#exec"}),"exec")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/qapplication#exit"}),"exit")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/qapplication#processevents"}),"processEvents")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/qapplication#quit"}),"quit")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/qapplication#quitonlastwindowclosed"}),"quitOnLastWindowClosed")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/qapplication#setnodeparent"}),"setNodeParent")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/qapplication#setquitonlastwindowclosed"}),"setQuitOnLastWindowClosed")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/qapplication#static-clipboard"}),"clipboard")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/qapplication#static-instance"}),"instance")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/qapplication#static-style"}),"style"))),Object(b.b)("h2",{id:"constructors-1"},"Constructors"),Object(b.b)("h3",{id:"constructor"},"constructor"),Object(b.b)("p",null,"+"," ",Object(b.b)("strong",{parentName:"p"},"new QApplication"),"(): ",Object(b.b)("em",{parentName:"p"},Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/qapplication"}),"QApplication"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Overrides ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/component"}),"Component"),".",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/component#constructor"}),"constructor"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/qapplication"}),"QApplication"))),Object(b.b)("p",null,"+"," ",Object(b.b)("strong",{parentName:"p"},"new QApplication"),"(",Object(b.b)("inlineCode",{parentName:"p"},"native"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/generated/globals#nativeelement"}),"NativeElement"),"): ",Object(b.b)("em",{parentName:"p"},Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/qapplication"}),"QApplication"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Overrides ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/component"}),"Component"),".",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/component#constructor"}),"constructor"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"native")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api/generated/globals#nativeelement"}),"NativeElement"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/qapplication"}),"QApplication"))),Object(b.b)("h2",{id:"properties-1"},"Properties"),Object(b.b)("h3",{id:"native"},"native"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("strong",{parentName:"p"},"native"),": ",Object(b.b)("em",{parentName:"p"},Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/globals#nativeelement"}),"NativeElement"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Overrides ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/component"}),"Component"),".",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/component#abstract-native"}),"native"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"nodechildren"},"nodeChildren"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("strong",{parentName:"p"},"nodeChildren"),": ",Object(b.b)("em",{parentName:"p"},"Set\u2039",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/component"}),"Component"),"\u203a")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/component"}),"Component"),".",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/component#nodechildren"}),"nodeChildren"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"optional-nodeparent"},Object(b.b)("inlineCode",{parentName:"h3"},"Optional")," nodeParent"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("strong",{parentName:"p"},"nodeParent"),"? : ",Object(b.b)("em",{parentName:"p"},Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/component"}),"Component"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/component"}),"Component"),".",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/component#optional-nodeparent"}),"nodeParent"))),Object(b.b)("h2",{id:"methods-1"},"Methods"),Object(b.b)("h3",{id:"exec"},"exec"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"exec"),"(): ",Object(b.b)("em",{parentName:"p"},"number")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"number")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"exit"},"exit"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"exit"),"(",Object(b.b)("inlineCode",{parentName:"p"},"exitCode"),": number): ",Object(b.b)("em",{parentName:"p"},"number")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"exitCode")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"number")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"processevents"},"processEvents"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"processEvents"),"(): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"quit"},"quit"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"quit"),"(): ",Object(b.b)("em",{parentName:"p"},"number")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"number")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"quitonlastwindowclosed"},"quitOnLastWindowClosed"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"quitOnLastWindowClosed"),"(): ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"setnodeparent"},"setNodeParent"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"setNodeParent"),"(",Object(b.b)("inlineCode",{parentName:"p"},"parent?"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/generated/classes/component"}),"Component"),"): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/component"}),"Component"),".",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/component#setnodeparent"}),"setNodeParent"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"parent?")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api/generated/classes/component"}),"Component"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"setquitonlastwindowclosed"},"setQuitOnLastWindowClosed"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"setQuitOnLastWindowClosed"),"(",Object(b.b)("inlineCode",{parentName:"p"},"quit"),": boolean): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"quit")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"static-clipboard"},Object(b.b)("inlineCode",{parentName:"h3"},"Static")," clipboard"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"clipboard"),"(): ",Object(b.b)("em",{parentName:"p"},Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/qclipboard"}),"QClipboard"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/qclipboard"}),"QClipboard"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"static-instance"},Object(b.b)("inlineCode",{parentName:"h3"},"Static")," instance"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"instance"),"(): ",Object(b.b)("em",{parentName:"p"},Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/qapplication"}),"QApplication"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/qapplication"}),"QApplication"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"static-style"},Object(b.b)("inlineCode",{parentName:"h3"},"Static")," style"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"style"),"(): ",Object(b.b)("em",{parentName:"p"},Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/qstyle"}),"QStyle"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/qstyle"}),"QStyle"))))}s.isMDXComponent=!0},329:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return s}));var n=a(0),c=a.n(n),b=c.a.createContext({}),r=function(e){var t=c.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},p=function(e){var t=r(e.components);return c.a.createElement(b.Provider,{value:t},e.children)};var l="mdxType",i={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},o=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,p=e.parentName,l=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}(e,["components","mdxType","originalType","parentName"]),o=r(a),s=n,d=o[p+"."+s]||o[s]||i[s]||b;return a?c.a.createElement(d,Object.assign({},{ref:t},l,{components:a})):c.a.createElement(d,Object.assign({},{ref:t},l))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,r=new Array(b);r[0]=o;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[l]="string"==typeof e?e:n,r[1]=p;for(var s=2;s<b;s++)r[s]=a[s];return c.a.createElement.apply(null,r)}return c.a.createElement.apply(null,a)}o.displayName="MDXCreateElement"}}]);