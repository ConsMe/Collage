(function(t){function e(e){for(var n,r,o=e[0],l=e[1],c=e[2],f=0,u=[];f<o.length;f++)r=o[f],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&u.push(a[r][0]),a[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);d&&d(e);while(u.length)u.shift()();return s.push.apply(s,c||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],n=!0,o=1;o<i.length;o++){var l=i[o];0!==a[l]&&(n=!1)}n&&(s.splice(e--,1),t=r(r.s=i[0]))}return t}var n={},a={app:0},s=[];function r(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=n,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var d=l;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"022d":function(t,e,i){},"0442":function(t,e,i){"use strict";i("9047")},"12f8":function(t,e,i){"use strict";i("022d")},"1ec2":function(t,e,i){},3849:function(t,e,i){},4962:function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),a=i("7591"),s=i.n(a),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"py-3 h-100",attrs:{id:"app"}},[i("div",{staticClass:"row h-100 mx-3"},[i("div",{staticClass:"col-9 h-100 d-flex flex-column"},[i("left-top-block",{on:{newBg:function(e){t.bgImg=e}}}),i("left-center-block",{attrs:{bgImg:t.bgImg}}),i("left-bottom-block"),i("toast")],1),i("div",{staticClass:"col-3 h-100 overflow-auto"},[i("right-block")],1)])])},o=[],l=i("7b17"),c=i("0268"),d=(i("ab8b"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row align-content-center left-top-block align-items-center justify-content-center"},[i("div",{staticClass:"col-auto text-center"},[i("button",{staticClass:"btn btn-primary main-btns me-5",on:{click:function(e){return t.$refs.file.click()}}},[t._v(" Изменить фон ")]),i("input",{ref:"file",staticClass:" d-none",attrs:{type:"file"},on:{change:t.openFile}})]),i("div",{staticClass:"col-auto text-left"},[i("div",{staticClass:"form-check form-switch d-inline-block"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.onlyMarkers,expression:"onlyMarkers"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"flexSwitchCheckDefault"},domProps:{checked:Array.isArray(t.onlyMarkers)?t._i(t.onlyMarkers,null)>-1:t.onlyMarkers},on:{change:function(e){var i=t.onlyMarkers,n=e.target,a=!!n.checked;if(Array.isArray(i)){var s=null,r=t._i(i,s);n.checked?r<0&&(t.onlyMarkers=i.concat([s])):r>-1&&(t.onlyMarkers=i.slice(0,r).concat(i.slice(r+1)))}else t.onlyMarkers=a}}}),i("label",{staticClass:"form-check-label",attrs:{for:"flexSwitchCheckDefault"}},[t._v(" Только разметка ")])])]),i("div",{staticClass:"col-auto text-left"},[i("div",{staticClass:"row"},[i("label",{staticClass:"col-auto col-form-label"},[t._v("Размер маркера")]),i("div",{staticClass:"col"},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.markerSize,expression:"markerSize"}],staticClass:"form-select",on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.markerSize=e.target.multiple?i:i[0]}}},[i("option",{domProps:{value:1}},[t._v("1")]),i("option",{domProps:{value:2}},[t._v("2")]),i("option",{domProps:{value:4}},[t._v("4")]),i("option",{domProps:{value:8}},[t._v("8")])])])])])])}),f=[],u=(i("ac1f"),i("466d"),{data:function(){return{onlyMarkers:!1,markerSize:2}},watch:{onlyMarkers:function(t){this.$store.commit("toggleOnlyMarkers",t)},markerSize:function(t){this.$store.commit("setMarkerSize",t)}},methods:{openFile:function(t){var e=this,i=t.target.files;if(i.length)if(i[0].type.match(/jpeg|gif|bmp|png|jpg/i)){var n=new FileReader;n.onload=function(){var t=n.result;e.loadImage(t)},n.readAsDataURL(i[0]),t.target.value=null}else{var a="Выбранный файл не является изображением";this.$store.commit("addToast",{text:a,type:"warning"})}},loadImage:function(t){var e=this,i=new Image;i.onload=function(t){e.$emit("newBg",t.target);var i=t.target,n=i.width,a=i.height;if(n>a){var s=n/a;e.markerSize=s>4?1:s>2?2:4}else e.markerSize=4},i.src=t}}}),g=u,m=(i("c995"),i("2877")),h=Object(m["a"])(g,d,f,!1,null,"f0cab16a",null),p=h.exports,v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"workingArea",staticClass:"row align-content-center left-center-block"},[i("div",{staticClass:"col d-flex justify-content-center"},[i("context-menu",{attrs:{contextMenuEvent:t.contextMenuEvent},on:{reset:function(e){t.contextMenuEvent=null},moveItem:t.moveItem}}),i("v-stage",{ref:"stage",attrs:{config:t.stageConfig},nativeOn:{drop:function(e){return t.droppedItem(e)},dragover:function(t){t.preventDefault()},dragenter:function(t){t.preventDefault()}}},[i("v-layer",{ref:"layer"},[t.bgImg?i("v-image",{attrs:{config:t.bgImgConfig},on:{click:function(e){t.activeItemId=null},touchstart:function(e){t.activeItemId=null}}}):i("v-rect",{attrs:{config:t.bgConfig},on:{click:function(e){t.activeItemId=null},touchstart:function(e){t.activeItemId=null}}}),t._l(t.images,(function(e){return i("item",{key:e.id,attrs:{data:e,activeItemId:t.activeItemId},on:{newTransform:function(e){t.activeItemId=e},"set-context-menu-event":function(e){t.contextMenuEvent=e}}})}))],2)],1),i("output-file",{attrs:{image:t.outputImage,items:t.outputItems},on:{reset:function(e){t.outputImage=null}}})],1)])},b=[],w=(i("4de4"),i("7db0"),i("c740"),i("4160"),i("d81d"),i("a434"),i("159b"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-image",{ref:"image",attrs:{config:t.data.config},on:{click:t.enableTransformer,touchstart:t.enableTransformer,contextmenu:t.setCtx}}),i("v-transformer",{ref:"transformer",attrs:{config:t.transformerConfig}})],1)}),k=[],y={props:["data","activeItemId"],data:function(){return{transformerConfig:{resizeEnabled:"item"===this.data.type,rotateEnabled:!1,centeredScaling:!0,enabledAnchors:["top-left","top-right","bottom-left","bottom-right"],boundBoxFunc:function(t,e){return e.width<5||e.height<5?t:e}}}},computed:{},watch:{activeItemId:function(t){t!==this.data.id&&this.$refs.transformer.getNode().nodes([])}},methods:{enableTransformer:function(){var t=this.$refs.image.getNode();this.$refs.transformer.getNode().nodes([t]),this.$emit("newTransform",this.data.id)},setCtx:function(t){t.evt.preventDefault(),t.evt.stopPropagation();var e=t.currentTarget.getStage().content,i=t.evt.clientY-e.offsetTop,n=t.evt.clientX-e.offsetLeft;this.$emit("set-context-menu-event",{coords:{top:i,left:n},id:this.data.id})}}},C=y,x=Object(m["a"])(C,w,k,!1,null,null,null),I=x.exports,_=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dropdown"},[i("button",{ref:"toggle",staticClass:"dropdown-toggle border-0 position-absolute overflow-hidden",style:t.coords,attrs:{type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}}),i("ul",{ref:"menu",staticClass:"dropdown-menu",attrs:{role:"menu"}},[i("li",t._l(t.items,(function(e,n){return i("a",{key:n,staticClass:"dropdown-item",attrs:{href:"#"},on:{click:function(i){return i.preventDefault(),t.handleClick(e)}}},[t._v(" "+t._s(e.name)+" ")])})),0),t._m(0),i("li",[i("a",{staticClass:"dropdown-item text-danger",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.handleClick({action:"remove"})}}},[t._v(" Удалить ")])])])])},S=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("hr",{staticClass:"dropdown-divider"})])}],$={props:["contextMenuEvent"],data:function(){return{dropdown:null,coords:{top:0,left:0},itemId:null}},computed:{items:function(){return[{name:"Переместить назад",action:"moveBack"},{name:"Переместить вперед",action:"moveForward"}]}},watch:{contextMenuEvent:function(t){var e=this;t&&(this.coords.top="".concat(t.coords.top,"px"),this.coords.left="".concat(t.coords.left,"px"),this.itemId=t.id,this.dropdown.hide(),this.dropdown.show(),setTimeout((function(){e.$emit("reset")}),0))}},mounted:function(){this.dropdown=new l["a"](this.$refs.toggle)},methods:{handleClick:function(t){var e=this;this.$emit("moveItem",{id:this.itemId,action:t.action}),setTimeout((function(){e.dropdown.hide()}),0)}}},z=$,M=(i("9789"),Object(m["a"])(z,_,S,!1,null,null,null)),O=M.exports,j=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:" d-none"},[i("svg",{ref:"svg",attrs:{"xmlns:rdf":"http://www.w3.org/1999/02/22-rdf-syntax-ns#","xmlns:svg":"http://www.w3.org/2000/svg",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",width:t.width,height:t.height}},[i("g",[i("image",{ref:"image",attrs:{"xlink:href":t.image,width:"100%",height:"100%"}})]),t._l(t.items,(function(e){return i("a",{key:e.id,attrs:{href:"https://yandex.ru?id="+e.finalId,target:"_blank"}},[i("info",{attrs:{coords:e,width:t.markerSize+"%",height:e.height+"%",id:e.finalId}})],1)}))],2)])},T=[],E=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("svg",{attrs:{"xmlns:d":"https://loading.io/stock/","xmlns:dc":"http://purl.org/dc/elements/1.1/","xmlns:cc":"http://creativecommons.org/ns#","xmlns:rdf":"http://www.w3.org/1999/02/22-rdf-syntax-ns#","xmlns:svg":"http://www.w3.org/2000/svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"17 17 54.589806 52.330627",x:t.coords.x+"%",y:t.coords.y+"%",version:"1.1",id:"svg57"}},[i("metadata",{attrs:{id:"metadata63"}},[i("rdf:RDF",[i("cc:Work",{attrs:{"rdf:about":""}},[i("dc:format",[t._v("image/svg+xml")]),i("dc:type",{attrs:{"rdf:resource":"http://purl.org/dc/dcmitype/StillImage"}}),i("dc:title")],1)],1)],1),i("title",[t._v(t._s("id: "+t.id))]),i("defs",{attrs:{id:"defs61"}}),i("g",{staticClass:"ldl-scale",attrs:{id:"g55",transform:"matrix(0.68236768,0,0,0.65412678,10.176334,10.458551)"}},[i("g",{staticClass:"ldl-ani",attrs:{id:"g53"}},[i("linearGradient",{attrs:{y2:"79.426003",x2:"68.331001",y1:"31.426001",x1:"22.830999",gradientUnits:"userSpaceOnUse",id:"a"}},[i("stop",{staticStyle:{"stop-color":"rgb(160, 200, 215)",fill:"rgb(0, 0, 0)"},attrs:{"stop-color":"#a0c8d7",offset:"0",id:"stop4"}}),i("stop",{staticStyle:{"stop-color":"rgb(118, 164, 189)",fill:"rgb(0, 0, 0)"},attrs:{"stop-color":"#76a4bd",offset:"1",id:"stop6"}})],1),i("g",{staticClass:"ldl-layer",attrs:{id:"g13"}},[i("g",{staticClass:"ldl-ani",attrs:{id:"g11"}},[i("path",{staticStyle:{fill:"url(#a)"},attrs:{fill:"url(#a)",d:"m 47.962,10.051 c -20.276,1.006 -36.785,17.429 -37.9,37.699 -0.482,8.762 1.87,16.943 6.206,23.736 l -4.889,14.443 c -0.564,1.667 1.027,3.258 2.693,2.693 l 14.443,-4.889 c 6.793,4.336 14.974,6.688 23.736,6.206 C 72.521,88.824 88.944,72.315 89.95,52.039 91.125,28.338 71.662,8.874 47.962,10.051 Z",id:"path9"}})])]),i("g",{staticClass:"ldl-layer",attrs:{id:"g31"}},[i("g",{staticClass:"ldl-ani",attrs:{id:"g29"}},[i("g",{attrs:{id:"g27"}},[i("g",{staticClass:"ldl-layer",attrs:{id:"g19"}},[i("g",{staticClass:"ldl-ani",attrs:{id:"g17"}},[i("path",{staticStyle:{fill:"#ffffff"},attrs:{fill:"#fff",d:"m 54.435,71.5 h -8.87 A 1.565,1.565 0 0 1 44,69.935 V 49.065 C 44,48.201 44.701,47.5 45.565,47.5 h 8.87 c 0.864,0 1.565,0.701 1.565,1.565 v 20.87 c 0,0.864 -0.701,1.565 -1.565,1.565 z",id:"path15"}})])]),i("g",{staticClass:"ldl-layer",attrs:{id:"g25"}},[i("g",{staticClass:"ldl-ani",attrs:{id:"g23"}},[i("path",{staticStyle:{fill:"#ffffff"},attrs:{fill:"#fff",d:"M 50,28 A 7.25,7.25 0 0 0 50,42.5 7.25,7.25 0 0 0 50,28 Z",id:"path21"}})])])])])]),i("g",{staticClass:"ldl-layer",attrs:{id:"g37"}},[i("g",{staticClass:"ldl-ani",attrs:{id:"g35"}},[i("path",{staticStyle:{fill:"#000000"},attrs:{opacity:"0.1",d:"m 77.639,21.103 c 0.011,0.603 0.04,1.201 0.04,1.808 0,27.323 -11.319,51.604 -28.865,67.069 1.135,0.033 2.28,0.022 3.437,-0.042 20.27,-1.115 36.693,-17.624 37.699,-37.9 0.603,-12.174 -4.247,-23.22 -12.311,-30.935 z",id:"path33"}})])]),i("g",{staticClass:"ldl-layer",attrs:{id:"g43"}},[i("g",{staticClass:"ldl-ani",attrs:{id:"g41"}},[i("path",{staticStyle:{stroke:"#ffffff"},attrs:{"stroke-miterlimit":"10","stroke-linejoin":"round","stroke-linecap":"round","stroke-width":"3",stroke:"#fff",fill:"none",d:"m 17.676,38.688 a 41.09,41.09 0 0 0 -0.542,1.781",id:"path39"}})])]),i("g",{staticClass:"ldl-layer",attrs:{id:"g49"}},[i("g",{staticClass:"ldl-ani",attrs:{id:"g47"}},[i("path",{staticStyle:{stroke:"#ffffff"},attrs:{"stroke-miterlimit":"10","stroke-linejoin":"round","stroke-linecap":"round","stroke-width":"3",stroke:"#fff",fill:"none",d:"m 29.237,22.583 c -3.656,2.599 -6.62,5.91 -8.857,9.908",id:"path45"}})])]),i("metadata",{attrs:{id:"metadata51"}},[i("d:name",[t._v("message")]),i("d:tags",[t._v("message,sns,msg,texting,information,communication,mention,hint,notify")]),i("d:license",[t._v("by")]),i("d:slug",[t._v("hcp9qw")])],1)],1)])],1)},A=[],D={props:["coords","id"]},P=D,B=Object(m["a"])(P,E,A,!1,null,null,null),L=B.exports,N={props:["image","items"],components:{Info:L},data:function(){return{width:null,height:null}},computed:{markerSize:function(){return this.$store.state.markerSize}},watch:{image:function(t){var e=this;if(t){var i=document.createElement("img");i.onload=function(){e.width=i.width,e.height=i.height,setTimeout((function(){e.download()}),0)},i.src=this.image}}},methods:{download:function(){var t=this,e=document.createElement("a");e.download="img.svg";var i=(new XMLSerializer).serializeToString(this.$refs.svg),n=unescape(encodeURIComponent(i));e.href="data:image/svg+xml;base64,".concat(btoa(n)),e.click(),setTimeout((function(){t.$emit("reset")}),0)}}},R=N,X=Object(m["a"])(R,j,T,!1,null,null,null),F=X.exports,W=i("d915"),Y=i.n(W),U={props:["bgImg"],components:{Item:I,ContextMenu:O,OutputFile:F},data:function(){return{stageConfig:{width:0,height:0,visible:!1,type:"stage"},bgConfig:{x:0,y:0,width:0,height:0,fill:"#efefef",type:"bgRect"},bgImgConfig:{},images:[],activeItemId:null,contextMenuEvent:null,outputImage:null,outputItems:[]}},computed:{downloadTrigger:function(){return this.$store.state.downloadTrigger},onlyMarkers:function(){return this.$store.state.onlyMarkers},markerSize:function(){return this.$store.state.markerSize},outputWidth:function(){return this.$store.state.outputWidth},bgSize:function(){var t=this.bgImg?this.bgImgConfig:this.bgConfig,e=t.width,i=t.height;return{width:e,height:i}}},watch:{bgImg:function(t){var e,i,n=this.$refs.workingArea.offsetWidth/this.$refs.workingArea.offsetHeight,a=t.width/t.height;n>a?(i=.9*this.$refs.workingArea.offsetHeight,e=i*a):(e=this.$refs.workingArea.offsetWidth,i=e*a),Object.assign(this.stageConfig,{width:e,height:i}),Object.assign(this.bgConfig,{width:e,height:i}),this.bgImgConfig={width:e,height:i,image:t},this.resizeMarkers()},downloadTrigger:function(){this.download()},markerSize:function(){this.resizeMarkers()}},mounted:function(){var t=this,e=.8*this.$refs.workingArea.offsetWidth,i=this.$refs.workingArea.offsetHeight;this.stageConfig.width=e,this.stageConfig.height=i,this.bgConfig.width=e,this.bgConfig.height=i,this.stageConfig.visible=!0,window.addEventListener("keypress",(function(e){"Delete"===e.key&&t.activeItemId&&t.removeItem()}))},methods:{droppedItem:function(t){var e=this,i=JSON.parse(t.dataTransfer.getData("text/plain")),n=i.src,a=i.offsetX,s=i.offsetY,r=i.id,o=i.finalId,l=new Image;l.onload=function(i){var n,l,c=i.target,d=e.bgSize.width/e.bgSize.height,f=c.width/c.height;e.onlyMarkers?(n=e.bgSize.width*(e.markerSize/100),l=e.bgSize.width*(e.markerSize/100)):d>f?(l=.2*e.bgSize.height,n=l*f):(n=.2*e.bgSize.width,l=n/f);var u="layerX"in t?t.layerX:t.offsetX,g="layerY"in t?t.layerY:t.offsetY;e.images.push({config:{image:i.target,width:n,height:l,draggable:!0,x:u-n*a,y:g-l*s,id:r},id:r,type:e.onlyMarkers?"marker":"item",finalId:o})},l.crossOrigin="Anonymous",l.src=this.onlyMarkers?Y.a:n},moveItem:function(t){if("remove"!==t.action){var e=this.images.findIndex((function(e){return e.id===t.id})),i="moveBack"===t.action?e-1:e+1;i<0||i>=this.images.length||this.images.splice(i,0,this.images.splice(e,1)[0])}else this.removeItem()},removeItem:function(){var t=this;if(this.activeItemId){var e=this.images.findIndex((function(e){return e.id===t.activeItemId}));this.images.splice(e,1)}},download:function(){var t=this;this.activeItemId=null,this.outputItems=this.$refs.layer.getNode().getChildren().filter((function(t){return"Image"===t.getClassName()&&t.id()})).map((function(e){var i=t.images.find((function(t){return t.id===e.id()})),n="item"===i.type?t.markerSize/2:0,a="item"===i.type?e.width()*e.scaleX():0;return{x:(e.x()+a)/t.stageConfig.width*100-n,y:e.y()/t.stageConfig.height*100-n,id:e.id(),height:t.bgSize.width/t.bgSize.height*t.markerSize,finalId:i.finalId}})),this.images.forEach((function(e,i){"marker"===e.type&&t.$set(t.images[i].config,"visible",!1)})),setTimeout((function(){var e={pixelRatio:t.outputWidth/t.stageConfig.width,mimeType:"image/jpeg"},i=t.$refs.stage.getNode().toDataURL(e);t.outputImage=i,t.images.forEach((function(e,i){"marker"===e.type&&t.$set(t.images[i].config,"visible",!0)}))}),0)},resizeMarkers:function(){var t=this;this.images.forEach((function(e,i){"marker"===e.type&&t.$set(t.images[i],"config",Object.assign(e.config,{width:t.bgSize.width*(t.markerSize/100),height:t.bgSize.width*(t.markerSize/100)}))}))}}},J=U,q=(i("f78b"),Object(m["a"])(J,v,b,!1,null,"c952f326",null)),H=q.exports,Z=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row align-content-center left-bottom-block"},[i("div",{staticClass:"col"},[i("div",{staticClass:"row"},[t._m(0),i("div",{staticClass:"col text-center"},[i("button",{staticClass:"btn btn-primary main-btns",on:{click:function(e){return t.$store.commit("setDownloadTrigger")}}},[t._v(" Сохранить ")])])])])])},G=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"col text-center"},[i("button",{staticClass:"btn btn-secondary main-btns"},[t._v(" Назад ")])])}],V={},K=V,Q=(i("12f8"),Object(m["a"])(K,Z,G,!1,null,"ecc0b18e",null)),tt=Q.exports,et=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",t._l(t.items,(function(e,n){return i("div",{key:n,staticClass:"row justify-content-center"},[i("div",{staticClass:"col-6"},[i("div",{staticClass:"card mb-3"},[i("img",{staticClass:"card-img-top",attrs:{src:e.preview_img,alt:"Фото",draggable:"true"},on:{dragstart:function(i){return t.dragImg(e,i)}}}),i("div",{staticClass:"card-body"},[i("small",[t._v(t._s(e.type))]),i("h6",{staticClass:"card-title"},[t._v(" "+t._s(e.name)+" ")]),e.brand.length?i("h6",{staticClass:"card-subtitle mb-2 text-muted"},[t._v(" "+t._s(e.brand)+" ")]):t._e(),i("h4",[t._v(t._s("₽ "+e.price))])])])])])})),0)},it=[],nt=(i("99af"),i("b0c0"),i("5319"),i("bc3a")),at=i.n(nt);at.a.defaults.baseURL="/";var st={data:function(){return{items:[]}},created:function(){var t=this;at.a.get("http://fromrussia.to/ajax/flatfeed.php").then((function(e){t.items=e.data.map((function(t){return Object.assign(t,{name:t.name.replace(/&quot;/g,'"')})}))}))},methods:{dragImg:function(t,e){e.dataTransfer.setData("text/plain",JSON.stringify({offsetX:e.offsetX/e.target.width,offsetY:e.offsetY/e.target.height,src:t.detail_img,id:"".concat(t.id,".").concat(Math.random()),finalId:t.id}))}}},rt=st,ot=(i("e7e3"),Object(m["a"])(rt,et,it,!1,null,"6cc48915",null)),lt=ot.exports,ct=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{"aria-live":"polite","aria-atomic":"true"}},[i("div",{staticClass:"toast-container position-absolute"},t._l(t.toasts,(function(e){return i("div",{key:e.id,ref:e.id,refInFor:!0,staticClass:"toast qwe",class:"bg-"+e.message.type,attrs:{role:"alert","aria-live":"assertive","aria-atomic":"true"}},[i("div",{staticClass:"toast-body d-flex"},[t._v(" "+t._s(e.message.text)+" "),i("button",{staticClass:"btn-close ms-auto",attrs:{type:"button","data-bs-dismiss":"toast","aria-label":"Close"}})])])})),0)])},dt=[],ft={data:function(){return{toasts:[]}},computed:{message:function(){return this.$store.state.toast}},watch:{message:function(t){t.text&&this.addToast(t)}},beforeDestroy:function(){var t=this;this.toasts.forEach((function(e){t.$refs[e.id][0].removeEventListener("hidden.bs.toast",(function(){}))}))},methods:{addToast:function(t){var e=this,i=Math.random();this.toasts.push({message:t,id:i}),this.$nextTick((function(){var t=new l["b"](e.$refs[i][0],{delay:5e3});t.show(),e.$refs[i][0].addEventListener("hidden.bs.toast",(function(){var t=e.toasts.findIndex((function(t){return t.id===i}));e.toasts.splice(t,1)}))}))}}},ut=ft,gt=(i("0442"),Object(m["a"])(ut,ct,dt,!1,null,"7d469e54",null)),mt=gt.exports,ht={name:"App",components:{LeftTopBlock:p,LeftCenterBlock:H,LeftBottomBlock:tt,RightBlock:lt,Toast:mt},data:function(){return{bgImg:null}},created:function(){Object(c["polyfill"])()}},pt=ht,vt=(i("5c0b"),Object(m["a"])(pt,r,o,!1,null,null,null)),bt=vt.exports,wt=i("2f62");n["default"].use(wt["a"]);var kt=new wt["a"].Store({state:{toast:{},downloadTrigger:null,info:null,onlyMarkers:!1,markerSize:2,outputWidth:1600},mutations:{addToast:function(t,e){n["default"].set(t,"toast",e)},setDownloadTrigger:function(t){t.downloadTrigger=Math.random()},setInfo:function(t,e){t.info=e},toggleOnlyMarkers:function(t,e){t.onlyMarkers=e},setMarkerSize:function(t,e){t.markerSize=e}},actions:{},modules:{}});n["default"].config.productionTip=!1,n["default"].use(s.a),new n["default"]({store:kt,render:function(t){return t(bt)}}).$mount("#app")},"5c0b":function(t,e,i){"use strict";i("9c0c")},9047:function(t,e,i){},9789:function(t,e,i){"use strict";i("1ec2")},"9c0c":function(t,e,i){},c995:function(t,e,i){"use strict";i("cb7f")},cb7f:function(t,e,i){},d915:function(t,e,i){t.exports=i.p+"img/info_t.c998f702.svg"},e7e3:function(t,e,i){"use strict";i("3849")},f78b:function(t,e,i){"use strict";i("4962")}});