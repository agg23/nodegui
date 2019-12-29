(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{205:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"default",(function(){return p}));var i=n(1),a=n(6),o=(n(0),n(324)),s={},l=[],c={id:"development/signal_and_event_handling",title:"signal_and_event_handling",description:"# Event handling",source:"@site/docs/development/signal_and_event_handling.md",permalink:"/docs/development/signal_and_event_handling"},r={rightToc:l,metadata:c},d="wrapper";function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)(d,Object(i.a)({},r,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"event-handling"},"Event handling"),Object(o.b)("p",null,"In Qt you can respond to an external event like a key press via event handling. Events always are processed by the event loop. Alongside events Qt also has a concept of Signals/Slots. Signals and slots are used to primarily communicate between widgets (more precisely QObjects). So the most common way of interacting between Qt Widgets is done through signals/slots. (More details here: ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://doc.qt.io/qt-5/signalsandslots.html"}),"https://doc.qt.io/qt-5/signalsandslots.html"),"). Hence we would be implementing support for both events and signals."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Technicals:")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},'An event is a message encapsulated in a class (QEvent) which is processed in an event loop and dispatched to a recipient that can either accept the message or pass it along to others to process. They are usually created in response to external system events like mouse clicks.\nSignals and Slots are a convenient way for QObjects to communicate with one another and are more similar to callback functions. In most circumstances, when a "signal" is emitted, any slot function connected to it is called directly. The exception is when signals and slots cross thread boundaries. In this case, the signal will essentially be converted into an event.')),Object(o.b)("h1",{id:"implementing-signal-handling"},"Implementing Signal handling"),Object(o.b)("p",null,"In Qt signals and slots are used to communicate between different qt widgets. So they can be used to implement things like\nonClick, onHover etc."),Object(o.b)("p",null,"The way Qt Signals work is explained here:"),Object(o.b)("p",null,Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://doc.qt.io/qt-5/signalsandslots.html"}),"https://doc.qt.io/qt-5/signalsandslots.html")),Object(o.b)("p",null,"The way you use them in Qt for a PushButton is explained here:\n",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://wiki.qt.io/How_to_Use_QPushButton#Signals"}),"https://wiki.qt.io/How_to_Use_QPushButton#Signals")),Object(o.b)("h1",{id:"adding-signalevent-handling-support-to-a-nodewidget"},"Adding signal/event handling support to a NodeWidget"),Object(o.b)("p",null,"We will take the example of PushButton"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Javascript")),Object(o.b)("p",null,"Steps:"),Object(o.b)("p",null,"The widget should inherit from ",Object(o.b)("inlineCode",{parentName:"p"},"NodeWidget"),". NodeWidget inherits from EventWidget internally. EventWidget constructor needs native object while initialising. So arrange your code such that native object gets initialised before calling ",Object(o.b)("inlineCode",{parentName:"p"},"super(native)"),"."),Object(o.b)("p",null,"EventWidget adds ",Object(o.b)("inlineCode",{parentName:"p"},"addEventListener")," method to the widget which can be called\nlike this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"button.addEventListener('clicked', () => {\n    console.log('clicked');\n});\n")),Object(o.b)("p",null,"To help the user know what all signals/events are supported, export an enum like ",Object(o.b)("inlineCode",{parentName:"p"},"QPushButtonEvents")," as shown below."),Object(o.b)("p",null,"So the user can then use it as below:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"button.addEventListener(QPushButtonEvents.clicked, () => {\n    console.log('clicked');\n});\n")),Object(o.b)("p",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"import addon from '../../core/addon';\nimport { NodeWidget } from '../../QtGui/QWidget';\nimport { BaseWidgetEvents } from '../../core/EventWidget';\n\nexport const QPushButtonEvents = Object.freeze({\n    ...BaseWidgetEvents,\n    clicked: 'clicked',\n    pressed: 'pressed',\n    released: 'released',\n    toggled: 'toggled',\n});\n\nexport class QPushButton extends NodeWidget {\n    native: NativeElement;\n    constructor(parent?: NodeWidget) {\n        let native;\n        if (parent) {\n            native = new addon.QPushButton(parent.native);\n        } else {\n            native = new addon.QPushButton();\n        }\n        super(native);\n        this.parent = parent;\n        this.native = native;\n    }\n\n    setText(text: string | number) {\n        this.native.setText(`${text}`);\n    }\n}\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"C++")),Object(o.b)("p",null,"Steps:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"NPushButton"))),Object(o.b)("p",null,"Inherit from both QPushButton and NodeWidget. Make sure you have added NODEWIDGET_IMPLEMENTATIONS macro. This adds a crucial method for events support. It will override ",Object(o.b)("inlineCode",{parentName:"p"},"event(QEvent *)")," method of QPushbutton so that nodejs can listen to the events of this widget. This makes sure we convert all the QEvent's of this widget to an event for the nodejs event emitter."),Object(o.b)("p",null,"Also make sure to connect all the signals of the widgets to the event emitter instance from NodeJS. This way we kindof convert the signal to a simple nodejs event."),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-cpp"}),'#pragma once\n\n#include <QPushButton>\n#include "src/cpp/core/NodeWidget/nodewidget.h"\n#include "napi.h"\n\nclass NPushButton: public QPushButton, public NodeWidget\n{\n    NODEWIDGET_IMPLEMENTATIONS(QPushButton)\npublic:\n    using QPushButton::QPushButton; //inherit all constructors of QPushButton\n\n    // override this method and implement all signals here\n    void connectSignalsToEventEmitter() {\n        // Qt Connects: Implement all signal connects here\n        QObject::connect(this, &QPushButton::clicked, [=](bool checked) {\n            Napi::Env env = this->emitOnNode.Env();\n            Napi::HandleScope scope(env);\n            this->emitOnNode.Call({  Napi::String::New(env, "clicked"), Napi::Value::From(env, checked) });\n        });\n        QObject::connect(this, &QPushButton::released, [=]() {\n            Napi::Env env = this->emitOnNode.Env();\n            Napi::HandleScope scope(env);\n            this->emitOnNode.Call({  Napi::String::New(env, "released") });\n        });\n        QObject::connect(this, &QPushButton::pressed, [=]() {\n            Napi::Env env = this->emitOnNode.Env();\n            Napi::HandleScope scope(env);\n            this->emitOnNode.Call({  Napi::String::New(env, "pressed") });\n        });\n        QObject::connect(this, &QPushButton::toggled, [=](bool checked) {\n            Napi::Env env = this->emitOnNode.Env();\n            Napi::HandleScope scope(env);\n            this->emitOnNode.Call({  Napi::String::New(env, "toggled"), Napi::Value::From(env, checked) });\n        });\n    }\n};\n\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Additional")),Object(o.b)("p",null,"Make sure ",Object(o.b)("inlineCode",{parentName:"p"},"npushbutton.h")," is added to ",Object(o.b)("inlineCode",{parentName:"p"},"config/moc.json"),".\nAnd run ",Object(o.b)("inlineCode",{parentName:"p"},"npm run automoc")," before running ",Object(o.b)("inlineCode",{parentName:"p"},"npm run build:addon")),Object(o.b)("p",null,"We need to run Qt's MOC (Meta Object Compiler) on the file whenever we use Q_OBJECT in a class or use QObject::connect. This is so that Qt can expand the macros and add necessary implementations to our class."),Object(o.b)("h1",{id:"how-does-it-work-"},"How does it work ?"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"On JS side for each widget instance we create an instance of NodeJS's Event Emitter. This is done by the class ",Object(o.b)("inlineCode",{parentName:"li"},"EventWidget")," from which ",Object(o.b)("inlineCode",{parentName:"li"},"NodeWidget")," inherits"),Object(o.b)("li",{parentName:"ol"},"We send this event emiiter's ",Object(o.b)("inlineCode",{parentName:"li"},"emit")," function to the C++ side by calling ",Object(o.b)("inlineCode",{parentName:"li"},"initNodeEventEmitter")," method and store a pointer to the event emitter's emit function using ",Object(o.b)("inlineCode",{parentName:"li"},"emitOnNode"),". initNodeEventEmitter function is added by a macro from EventWidget (c++). You can find the initNodeEventEmitter method with the event widget macros."),Object(o.b)("li",{parentName:"ol"},"We setup Qt's connect method for all the signals that we want to listen to and call the emitOnNode (which is actually emit from Event emitter) whenever a signal arrives. This is done manually on every widget by overriding the method ",Object(o.b)("inlineCode",{parentName:"li"},"connectSignalsToEventEmitter"),". Check ",Object(o.b)("inlineCode",{parentName:"li"},"npushbutton.h")," for details. This takes care of all the signals of the widgets. Now to export all qt events of the widget, we had overriden the widgets ",Object(o.b)("inlineCode",{parentName:"li"},"event(Event*)")," method to listen to events received by the widget and send it to the event emitter. This is done inside the EVENTWIDGET_IMPLEMENTATIONS macro")))}p.isMDXComponent=!0},324:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return p}));var i=n(0),a=n.n(i),o=a.a.createContext({}),s=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},l=function(e){var t=s(e.components);return a.a.createElement(o.Provider,{value:t},e.children)};var c="mdxType",r={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(i.forwardRef)((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&-1===t.indexOf(i)&&(n[i]=e[i]);return n}(e,["components","mdxType","originalType","parentName"]),d=s(n),p=i,h=d[l+"."+p]||d[p]||r[p]||o;return n?a.a.createElement(h,Object.assign({},{ref:t},c,{components:n})):a.a.createElement(h,Object.assign({},{ref:t},c))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l[c]="string"==typeof e?e:i,s[1]=l;for(var p=2;p<o;p++)s[p]=n[p];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);