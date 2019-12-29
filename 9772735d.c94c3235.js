(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{229:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"rightToc",(function(){return s})),t.d(n,"metadata",(function(){return l})),t.d(n,"default",(function(){return p}));var a=t(1),o=t(6),r=(t(0),t(324)),i={sidebar_label:"Synopsis",title:"Synopsis"},s=[{value:"Destructuring assignment",id:"destructuring-assignment",children:[]}],l={id:"api/manual/synopsis",title:"Synopsis",description:"> How to use Node.js and NodeGui's APIs.",source:"@site/docs/api/manual/synopsis.md",permalink:"/docs/api/manual/synopsis",sidebar_label:"Synopsis",sidebar:"api",next:{title:"Component",permalink:"/docs/api/generated/classes/component"}},c={rightToc:s,metadata:l},u="wrapper";function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)(u,Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"How to use Node.js and NodeGui's APIs.")),Object(r.b)("p",null,"All of ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://nodejs.org/api/"}),"Node.js's built-in modules")," are available in\nNodeGui. Also, third-party node modules that are known to work with Node.Js are fully supported as well (including\nthe native node modules)."),Object(r.b)("p",null,"Apart from Node.Js ecosystem, NodeGui also provides some extra built-in widget and modules for developing native\ndesktop applications. So, you can think of NodeGui as NodeJs + Gui Widgets powered by Qt."),Object(r.b)("p",null,"The app script is like a normal Node.js script:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'const { QMainWindow } = require("@nodegui/nodegui");\n\nconst win = new QMainWindow();\n\nwin.show();\n\nglobal.win = win; // To prevent win from being garbage collected.\n')),Object(r.b)("p",null,"To run your app, read ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/guides/tutorial"}),"Run your app"),"."),Object(r.b)("h2",{id:"destructuring-assignment"},"Destructuring assignment"),Object(r.b)("p",null,"You can use\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment"}),"destructuring assignment")," to make it easier to use\nbuilt-in modules."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'const {\n  QMainWindow,\n  QWidget,\n  QLabel,\n  FlexLayout\n} = require("@nodegui/nodegui");\n\nconst win = new QMainWindow();\n\nconst centralWidget = new QWidget();\ncentralWidget.setObjectName("myroot");\nconst rootLayout = new FlexLayout();\ncentralWidget.setLayout(rootLayout);\n\nconst label = new QLabel();\nlabel.setInlineStyle("font-size: 16px; font-weight: bold;");\nlabel.setText("Hello World");\n\nrootLayout.addWidget(label);\nwin.setCentralWidget(centralWidget);\nwin.setStyleSheet(\n  `\n    #myroot {\n      background-color: #009688;\n    }\n  `\n);\nwin.show();\n\nglobal.win = win;\n')))}p.isMDXComponent=!0},324:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return p}));var a=t(0),o=t.n(a),r=o.a.createContext({}),i=function(e){var n=o.a.useContext(r),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},s=function(e){var n=i(e.components);return o.a.createElement(r.Provider,{value:n},e.children)};var l="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},u=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,l=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===n.indexOf(a)&&(t[a]=e[a]);return t}(e,["components","mdxType","originalType","parentName"]),u=i(t),p=a,d=u[s+"."+p]||u[p]||c[p]||r;return t?o.a.createElement(d,Object.assign({},{ref:n},l,{components:t})):o.a.createElement(d,Object.assign({},{ref:n},l))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[l]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=t[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);