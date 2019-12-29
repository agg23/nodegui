(window.webpackJsonp=window.webpackJsonp||[]).push([[212],{302:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(6),o=(n(0),n(324)),i={},c=[],s={id:"development/common_errors",title:"common_errors",description:"# Common errors",source:"@site/docs/development/common_errors.md",permalink:"/docs/development/common_errors"},l={rightToc:c,metadata:s},m="wrapper";function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)(m,Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"common-errors"},"Common errors"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Segmentation fault:")," Segmentation fault occurs when you access a Pointer that is pointing to an invalid memory address. One major reason for this can be that JS garbage collector would have garbage collected the addon generated value and you try accessing it after a while. This is mostly the case if you see seg fault happening randomly after some time of startup.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Widget not visible in Flex layout")," Widget might have gotten zero height/width. This can occur if yoga was not able to get the default height/width of the widget. Make sure you have implemented",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"YGNodeSetMeasureFunc(this->instance->getFlexNode(), &flexutils::measureQtWidget);"),"\nif its a leaf node widget(doesnt contain any children)."))))}p.isMDXComponent=!0},324:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return p}));var r=n(0),a=n.n(r),o=a.a.createContext({}),i=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},c=function(e){var t=i(e.components);return a.a.createElement(o.Provider,{value:t},e.children)};var s="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),m=i(n),p=r,u=m[c+"."+p]||m[p]||l[p]||o;return n?a.a.createElement(u,Object.assign({},{ref:t},s,{components:n})):a.a.createElement(u,Object.assign({},{ref:t},s))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);