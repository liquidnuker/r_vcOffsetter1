(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{11:function(t,e,n){"use strict";n.r(e);var r=n(12),a=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);e.default=a.a},12:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(n(19)),a=i(n(39));function i(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{pager:"",itemCount:"",perPageItems:[10,20,50],perPage:10,country:""}},mounted:function(){this.getItemCount()},methods:{getItemCount:function(){var t=this;r.default.get("./src/php/getitemcount.php").then(function(e){t.itemCount=e.data,t.activatePager()}).catch(function(t){console.log(t)})},activatePager:function(){this.pager=new a.default({itemCount:this.itemCount,perPage:this.perPage}),this.getItems()},getItems:function(){var t=this,e=new FormData;e.append("f_offset",this.pager.getCurrentOffset()),e.append("f_limit",this.pager.perPage),r.default.post("./src/php/getdata.php",e,{headers:{"Content-Type":"multipart/form-data"}}).then(function(e){t.country=e.data}).catch(function(){console.log("error")})},flip:function(t){"next"===t?this.pager.next():this.pager.prev(),console.log(this.pager.currentPage),this.getItems()},goToPage:function(t){this.pager.isValidPage(t)?console.log("valid page"):console.log("invalid page")}}}},39:function(t,e,n){"use strict";function r(t){this.itemCount=t.itemCount,this.perPage=t.perPage,this.currentPage=1}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r,r.prototype={getTotalPages:function(){return Math.ceil(this.itemCount/this.perPage)},getCurrentOffset:function(){return(this.currentPage-1)*this.perPage},hasNext:function(){return this.currentPage!==this.getTotalPages()},hasPrev:function(){return 1!==this.currentPage},prev:function(){return this.hasPrev()?this.currentPage=this.currentPage-1:this.currentPage=this.getTotalPages(),this.currentPage},next:function(){return this.hasNext()?this.currentPage=this.currentPage+1:this.currentPage=1,this.currentPage},isValidPage:function(t){return t>0&&t<=this.getTotalPages()}}},40:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._l(t.country,function(e){return n("ul",[n("li",[t._v("\r\n      "+t._s(e.name)+" "+t._s(e.region)+"\r\n    ")])])}),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.perPage,expression:"perPage"}],on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.perPage=e.target.multiple?n:n[0]},function(e){t.activatePager()}]}},t._l(t.perPageItems,function(e){return n("option",{domProps:{value:e}},[t._v("\r\n      "+t._s(e)+"\r\n    ")])})),t._v(" "),n("button",{on:{click:function(e){t.flip()}}},[t._v("< prev")]),t._v(" "),n("button",{on:{click:function(e){t.flip("next")}}},[t._v("next >")]),t._v(" "),n("button",{on:{click:function(e){t.goToPage(30)}}},[t._v("goto")])],2)},a=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return a})},9:function(t,e,n){"use strict";n.r(e);var r=n(40),a=n(11);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);var u=n(3),o=Object(u.a)(a.default,r.a,r.b,!1,null,null,null);e.default=o.exports}}]);