webpackJsonp([30],{"1dS9":function(t,a,e){"use strict";function r(t){e("nCaf")}Object.defineProperty(a,"__esModule",{value:!0});var o=e("L24G"),s=e("9db5"),n=e("VU/8"),l=r,c=n(o.a,s.a,!1,l,null,null);a.default=c.exports},"3k72":function(t,a,e){"use strict";var r=e("y8ae"),o=e("V8bM"),s=e("FhoZ"),n=e.n(s);a.a={props:["from","defaultURL","cateId","categories"],data:function(){return{formData:{scope:"list",crawlExist:0,articles:[]},urlValidate:{type:"url",required:!0,message:"无效的URL"}}},mounted:function(){this.formData.articles.push({url:this.defaultURL})},methods:{onAdd:function(){this.formData.articles.push({url:""})},onSubmit:function(){var t=this;this.$refs.urlsForm.validate(function(a){if(a){for(var e=[],s=0;s<t.formData.articles.length;s++)e.push(t.formData.articles[s].url);o.a.crawl({body:{scope:t.formData.scope,crawlExist:!!t.formData.crawlExist,urls:e,from:t.from,categoryID:parseInt(t.cateId)}}).then(function(a){if(a.errNo===r.a.ERROR)return void t.$Message.error({duration:n.a.messageDuration,closable:!0,content:a.msg});t.$Message.success({duration:n.a.messageDuration,closable:!0,content:"抓取成功!"})}).catch(function(a){t.$Message.error({duration:n.a.messageDuration,closable:!0,content:a.msg})})}})}}}},"8H7S":function(t,a,e){a=t.exports=e("FZ+f")(!1),a.push([t.i,".crawler-title{font-size:22px;margin:12px 0}",""])},"9db5":function(t,a,e){"use strict";var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("Row",[e("h1",{staticClass:"crawler-title"},[t._v("知乎")]),e("crawler",{attrs:{from:2,defaultURL:t.url,cateId:t.cateId,categories:t.categories}})],1)},o=[],s={render:r,staticRenderFns:o};a.a=s},L24G:function(t,a,e){"use strict";var r=e("TfCd"),o=e("V8bM");a.a={layout:"admin",middleware:"adminRequired",asyncData:function(t){return o.a.getCategories({client:t.req}).then(function(t){var a=t.data.categories;return{cateId:a&&a[0].id+""||"",categories:a}}).catch(function(a){console.log(a),t.error({statusCode:404,message:"Page not found"})})},data:function(){return{url:"https://zhuanlan.zhihu.com/auxten?topic=Go%20%E8%AF%AD%E8%A8%80"}},components:{crawler:r.a},head:function(){return{title:"抓取知乎"}}}},TfCd:function(t,a,e){"use strict";var r=e("3k72"),o=e("j9fR"),s=e("VU/8"),n=s(r.a,o.a,!1,null,null,null);a.a=n.exports},j9fR:function(t,a,e){"use strict";var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("Row",[e("Form",{ref:"urlsForm",attrs:{model:t.formData,"label-width":80}},[e("FormItem",{attrs:{label:"网页类型",prop:"scope"}},[e("Row",[e("Col",[e("RadioGroup",{model:{value:t.formData.scope,callback:function(a){t.formData.scope=a},expression:"formData.scope"}},[e("Radio",{attrs:{label:"list"}},[t._v("文章列表URL")]),e("Radio",{attrs:{label:"page"}},[t._v("文章URL")])],1)],1)],1)],1),e("FormItem",{attrs:{label:"强制抓取"}},[e("Row",[e("Col",[e("RadioGroup",{model:{value:t.formData.crawlExist,callback:function(a){t.formData.crawlExist=a},expression:"formData.crawlExist"}},[e("Radio",{attrs:{label:1}},[t._v("是")]),e("Radio",{attrs:{label:0}},[t._v("否")])],1)],1)],1)],1),e("FormItem",{attrs:{label:"版块"}},[e("Row",[e("Col",{attrs:{span:"12"}},[e("Select",{attrs:{placeholder:"请选择版块"},model:{value:t.cateId,callback:function(a){t.cateId=a},expression:"cateId"}},t._l(t.categories,function(a){return e("Option",{key:a.id,attrs:{value:a.id+""}},[t._v(t._s(a.name))])}))],1)],1)],1),t._l(t.formData.articles,function(a,r){return e("FormItem",{key:r,attrs:{label:"URL",prop:"articles."+r+".url",rules:t.urlValidate}},[e("Row",[e("Col",{attrs:{span:"12"}},[e("Input",{attrs:{placeholder:"请输入URL"},model:{value:a.url,callback:function(t){a.url=t},expression:"article.url"}})],1)],1)],1)}),e("FormItem",[e("Row",[e("Col",{attrs:{span:"4"}},[e("Button",{attrs:{type:"dashed",long:"",icon:"plus-round"},on:{click:t.onAdd}},[t._v("添加URL")])],1)],1)],1),e("FormItem",[e("Button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("开始抓取")])],1)],2)],1)},o=[],s={render:r,staticRenderFns:o};a.a=s},nCaf:function(t,a,e){var r=e("8H7S");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);e("rjj0")("06cd5725",r,!0)}});
//# sourceMappingURL=zhihu.0dc04d43f8c53b3a56c0.js.map