(window.webpackJsonp=window.webpackJsonp||[]).push([[5,2,4],{333:function(e,t,n){"use strict";n.r(t);n(69),n(56),n(68),n(94),n(57),n(95);var r=n(15),o=n(49),c=(n(80),n(38),n(153),n(246),n(20),n(4)),l=n(96);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var f,m,h=c.a.extend({data:function(){return{loading:!1,newName:""}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({invalidName:function(){var e=this.newName;return!!e&&(!!e[0].match(/[^a-zA-Z]/)||!!this.allTables.find((function(t){return t.list_name===e})))}},Object(l.b)({allTables:function(e){return e.listTable}})),methods:{createTable:(m=Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.newName){e.next=4;break}return e.next=3,this.$store.dispatch("alert",{message:"Please Choose a name for your list"});case 3:return e.abrupt("return");case 4:if(!this.invalidName){e.next=8;break}return e.next=7,this.$store.dispatch("alert",{message:"Sorry the name you chose is not valid. Please make sure the name states with a letter, and only contains letters numbers and the underscore.  Also, names must be unique, so make sure the name isn't already being used"});case 7:return e.abrupt("return");case 8:return this.loading=!0,e.next=11,this.$store.dispatch("createList",{name:this.newName});case 11:e.sent,this.newName="",this.loading=!1;case 14:case"end":return e.stop()}}),e,this)}))),function(){return m.apply(this,arguments)}),loadTable:(f=Object(r.a)(regeneratorRuntime.mark((function e(table){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("loadTable",{name:table.table_name});case 2:case"end":return e.stop()}}),e,this)}))),function(e){return f.apply(this,arguments)})}}),v=h,j=n(81),component=Object(j.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("MjContainer",[n("MjRow",[n("MjInput",{staticClass:"text-poppins",attrs:{placeholder:"list name"},model:{value:e.newName,callback:function(t){e.newName="string"==typeof t?t.trim():t},expression:"newName"}}),e._v(" "),n("MjButton",{staticClass:"ml-2 text-poppins",attrs:{loading:e.loading,disabled:e.invalidName||e.loading,variant:"secondary"},on:{click:e.createTable}},[n("MjIcon",{attrs:{name:"plus"}}),e._v("\n      Mint a List\n    ")],1)],1),e._v(" "),n("MjRow",{staticClass:"py-4"},[e.invalidName?n("MjNote",{staticClass:"text-poppins",attrs:{variant:"danger"}},[e._v("\n      Name is not valid. List names must be unique. List names must start with a letter and can only include alphanumeric characters and the underscore.\n    ")]):e._e()],1),e._v(" "),n("MjRow",{staticClass:"mt-4"},[n("MjTable",{attrs:{density:"tight"}},[n("MjTableHead",[n("MjTableHeader",{staticClass:"text-orbitron"},[e._v("\n          Your Lists\n        ")])],1),e._v(" "),n("MjTableBody",e._l(e.allTables,(function(table){return n("MjTableRow",{key:table.table_id,staticClass:"text-poppins",attrs:{clickable:""},on:{click:function(t){return e.loadTable(table)}}},[n("MjTableCell",[e._v("\n            "+e._s(table.list_name)+"\n          ")])],1)})),1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports},334:function(e,t,n){"use strict";n.r(t);n(69),n(56),n(94),n(57),n(95);var r=n(15),o=n(49),c=(n(80),n(68),n(20),n(70),n(246),n(58),n(4)),l=n(96);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m,h,v,j,k,w=c.a.extend({data:function(){return{loading:!1,showingDeleted:!1,tasksInMem:[]}},computed:Object(l.b)({allChecked:function(e){return this.tasks.length===this.tasks.filter((function(e){return e.complete})).length},tasks:function(e){return e.tasks.filter((function(e){return!e.deleted}))},deletedTasks:function(e){return e.tasks.filter((function(e){return e.deleted}))},listName:function(e){return e.currentTableName}}),watch:{tasks:function(e){var t=this,n=e.map((function(e){var n=t.tasksInMem.find((function(t){return t.id===e.id}));return n&&!t.tasksAreSame(n,e)?n:f(f({},e),{},{dirty:!1})}));this.tasksInMem=n}},methods:{createTask:(k=Object(r.a)(regeneratorRuntime.mark((function e(){var t,n,r,input;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this.loading=!0,e.next=4,this.$store.dispatch("createTask");case 4:t=e.sent,n=this.$refs["task-"+t.id],r=n&&n[0]&&n[0].$el.querySelectorAll("input"),(input=r&&r[0])&&input.focus(),this.loading=!1,e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,this,[[0,12]])}))),function(){return k.apply(this,arguments)}),updateTask:(j=Object(r.a)(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n.dirty=!0,e.next=4,this.$store.dispatch("updateTask",f(f({},n),t));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,this,[[0,6]])}))),function(e,t){return j.apply(this,arguments)}),deleteTask:(v=Object(r.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.$store.dispatch("deleteTask",t);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,this,[[0,5]])}))),function(e){return v.apply(this,arguments)}),tasksAreSame:function(a,b){return a.id===b.id&&(a.name===b.name&&(a.complete===b.complete&&a.deleted===b.deleted))},toggleAll:(h=Object(r.a)(regeneratorRuntime.mark((function e(){var t,i,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("toggle"),t=this.allChecked,i=0;case 3:if(!(i<this.tasksInMem.length)){e.next=10;break}return n=this.tasksInMem[i],e.next=7,this.updateTask({complete:!t},n);case 7:i++,e.next=3;break;case 10:case"end":return e.stop()}}),e,this)}))),function(){return h.apply(this,arguments)}),showDeleted:(m=Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.showingDeleted=!0;case 1:case"end":return e.stop()}}),e,this)}))),function(){return m.apply(this,arguments)}),hideDeleted:function(){this.showingDeleted=!1}}}),y=w,x=n(81),component=Object(x.a)(y,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex items-top items-center sm:pt-0"},[e.listName?n("MjContainer",{staticClass:"text-center"},[n("MjHeadline",{staticClass:"text-orbitron"},[e._v(e._s(e.listName))]),e._v(" "),n("div",{staticClass:"my-4 mx-auto w-64 h-6"},[n("div",{staticClass:"text-left text-poppins"},[n("MjTransitionFadeY",{attrs:{flip:""}},[e.tasks.length>1?n("MjCheckbox",{attrs:{options:e.allChecked},on:{change:e.toggleAll}},[e._v("\n            All\n          ")]):e._e()],1)],1)]),e._v(" "),n("MjTransitionFadeY",{attrs:{flip:"",group:"",tag:"div"}},e._l(e.tasksInMem,(function(t){return n("div",{key:t.id,staticClass:"m-auto w-64"},[n("div",{staticClass:"flex"},[n("MjCheckbox",{staticClass:"flex self-center mr-4",on:{change:function(n){return e.updateTask({complete:n},t)}},model:{value:t.complete,callback:function(n){e.$set(t,"complete",n)},expression:"task.complete"}}),e._v(" "),n("MjInput",{ref:"task-"+t.id,refInFor:!0,staticClass:"text-poppins",attrs:{placeholder:"Choose a name..."},on:{input:function(n){return e.updateTask({name:n},t)}},scopedSlots:e._u([{key:"icon",fn:function(){return[n("MjIcon",{attrs:{name:"edit-2"}})]},proxy:!0}],null,!0),model:{value:t.name,callback:function(n){e.$set(t,"name",n)},expression:"task.name"}}),e._v(" "),n("div",{staticClass:"flex self-center ml-4 cursor-pointer",attrs:{name:"delete"},on:{click:function(n){return e.deleteTask(t)}}},[n("MjIcon",{attrs:{name:"delete"}})],1)],1)])})),0),e._v(" "),n("div",{staticClass:"m-auto w-64 text-left"},[n("MjButton",{staticClass:"mt-2 ml-8 text-poppins",attrs:{loading:e.loading,disabled:e.loading,variant:"secondary"},on:{click:e.createTask}},[n("MjIcon",{attrs:{name:"plus"}}),e._v("\n        New Task\n      ")],1)],1),e._v(" "),e.deletedTasks.length?n("div",{staticClass:"m-auto w-64 text-center"},[e.showingDeleted?e._e():n("MjLink",{staticClass:"cursor-pointer text-poppins",attrs:{color:"gray"},on:{click:e.showDeleted}},[e._v("\n        show deleted\n      ")]),e._v(" "),e.showingDeleted?n("MjLink",{staticClass:"cursor-pointer text-poppins",attrs:{color:"gray"},on:{click:e.hideDeleted}},[e._v("\n        hide deleted\n      ")]):e._e()],1):e._e(),e._v(" "),e._l(e.deletedTasks,(function(t){return e.showingDeleted?n("div",{key:t.id,staticClass:"m-auto w-64"},[n("div",{staticClass:"flex"},[n("MjCheckbox",{staticClass:"flex self-center mr-4",attrs:{options:t.complete,disabled:""}}),e._v(" "),n("MjInput",{ref:"task-"+t.id,refInFor:!0,staticClass:"text-poppins",attrs:{value:t.name,disabled:"",placeholder:"Choose a name..."},scopedSlots:e._u([{key:"icon",fn:function(){return[n("MjIcon",{attrs:{name:"edit-2"}})]},proxy:!0}],null,!0)})],1)]):e._e()}))],2):e._e()],1)}),[],!1,null,null,null);t.default=component.exports},335:function(e,t,n){"use strict";n.r(t);n(69),n(56),n(68),n(20),n(94),n(57),n(95);var r=n(15),o=n(49),c=(n(80),n(4)),l=n(96);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var f,m=c.a.extend({data:function(){return{tableInit:!1,metaMaskConnected:!1,tablelandConnected:!1,loading:!1,ethAddress:null}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(l.b)({tables:function(e){return e.allTables},toastMessage:function(e){return e.alertMessage}})),watch:{toastMessage:function(e){console.log(e),e&&this.showToast(e)}},methods:{connect:(f=Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.loading){e.next=2;break}return e.abrupt("return");case 2:return this.loading=!0,e.prev=3,e.next=6,this.$store.dispatch("connect");case 6:return this.tablelandConnected=!0,e.next=9,this.$store.dispatch("alert",{message:"Connected to Tableland!"});case 9:e.next=16;break;case 11:return e.prev=11,e.t0=e.catch(3),console.log(e.t0),e.next=16,this.$store.dispatch("alert",{message:"Darn! Having trouble connecting to Tableland.  Please make sure you have the MetaMask extension installed in your browser"});case 16:this.loading=!1;case 17:case"end":return e.stop()}}),e,this,[[3,11]])}))),function(){return f.apply(this,arguments)}),showToast:function(e){this.$refs.toast.log(e)}},mounted:function(){document.getElementsByTagName("html")[0].setAttribute("class","dark dark-mode")}}),h=m,v=n(81),component=Object(v.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("MjContainer",[n("div",{staticClass:"ml-4 mt-8 flex justify-between"},[n("div",[n("div",{staticClass:"items-center mr-10 mt-4 font-bold text-orbitron text-3xl"},[e._v("\n        Tableland Todos\n      ")])]),e._v(" "),n("div",{staticClass:"mt-4 mr-4"},[n("MjRow",[n("MjButton",{staticClass:"float-right text-poppins",attrs:{variant:"secondary",loading:e.loading,disabled:e.tablelandConnected},on:{click:e.connect}},[e.tablelandConnected?e._e():n("span",[e._v("\n            Connect to Tableland\n          ")]),e._v(" "),e.tablelandConnected?n("span",[e._v("\n            Disconnect\n          ")]):e._e()])],1)],1)]),e._v(" "),n("MjDivider",{staticClass:"my-8"}),e._v(" "),e.tablelandConnected?e._e():n("MjContainer",[n("MjRow",{staticClass:"justify-center"},[n("MjButton",{staticClass:"text-poppins",attrs:{variant:"secondary",loading:e.loading,disabled:e.tablelandConnected},on:{click:e.connect}},[e._v("\n        Connect to Tableland\n      ")])],1)],1),e._v(" "),e.tablelandConnected?n("MjRow",[n("MjRowItem",{staticClass:"w-1/3 p-2"},[n("div",{staticClass:"p-4 shadow rounded"},[n("TableViewer")],1)]),e._v(" "),n("MjRowItem",{staticClass:"w-2/3 p-2"},[n("div",{staticClass:"p-4 shadow rounded"},[n("Todos")],1)])],1):e._e(),e._v(" "),n("MjToast",{ref:"toast",attrs:{align:"left",position:"top"}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{TableViewer:n(333).default,Todos:n(334).default})}}]);