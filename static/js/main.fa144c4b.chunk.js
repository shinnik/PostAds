(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(e,t,n){e.exports={AdList:"AdList_AdList__1lvwg",WrapperOne:"AdList_WrapperOne__xJK4W",WrapperTwo:"AdList_WrapperTwo__21Fcb",RemoveEditButtons:"AdList_RemoveEditButtons__dQ_oc",Container:"AdList_Container__31VXt",UserDataItem:"AdList_UserDataItem__3bXuq"}},,function(e,t,n){e.exports={InputWrapper:"Advert_InputWrapper__2Vdua",LabelWrapper:"Advert_LabelWrapper__3pOQv",FileInputWrapper:"Advert_FileInputWrapper__eNMsD",PictureInfoWrapper:"Advert_PictureInfoWrapper__3REBG",PictureNameWrapper:"Advert_PictureNameWrapper__3Zyzn"}},,,function(e,t,n){e.exports={Label:"Icon_Label__1jEyK",Icon:"Icon_Icon__13HT_",info:"Icon_info__1ggYJ",valid:"Icon_valid__2wdC9",invalid:"Icon_invalid__2PW_G",arrowdown:"Icon_arrowdown__hXIch",erase:"Icon_erase__2qp_2",Wrapper:"Icon_Wrapper__39pdN"}},function(e,t,n){e.exports={Input:"Input_Input__2ZMeK",Body:"Input_Body__1Yxpl",Wrapper:"Input_Wrapper__7MPSt",DatalistInput:"Input_DatalistInput__1-ML2",invalid:"Input_invalid__2u9yB",FileInput:"Input_FileInput__3XjY2"}},function(e,t,n){e.exports={DatalistInputWrapper:"Datalist_DatalistInputWrapper__1TYr8",Container:"Datalist_Container__F-FSr",IconWrapper:"Datalist_IconWrapper__wDqVF",List:"Datalist_List__2cOfG",Option:"Datalist_Option__189TP"}},function(e,t,n){e.exports={btn:"Button_btn__3xaJM",ButtonWrapper:"Button_ButtonWrapper__2988v",ApplyButton:"Button_ApplyButton__30VnK",disabled:"Button_disabled__2c3jr",active:"Button_active__TCjlx"}},function(e,t,n){e.exports={Text:"Text_Text__2fSt1",normal:"Text_normal__w1lgn",L:"Text_L__Njion",Filename:"Text_Filename__2eB7L",Remover:"Text_Remover__SdLzb",invalid:"Text_invalid__1KgNh",valid:"Text_valid__1K_ZU",info:"Text_info__2yE0s",AdListHeader:"Text_AdListHeader__13s9k",M:"Text_M__XMSHp",AdvBodyText:"Text_AdvBodyText__-H16z",UserDataText:"Text_UserDataText__3F3oi"}},,,,,,,,,,function(e,t,n){e.exports={Mini:"Picture_Mini__2UV2V",Tag:"Picture_Tag__3tv41",Middle:"Picture_Middle__1yF3O"}},,,,,function(e,t,n){e.exports={Label:"Label_Label__1QlmE",FileInputLabel:"Label_FileInputLabel__Mm5hw",EditLabel:"Label_EditLabel__o6YnA",RemoveLabel:"Label_RemoveLabel__3tvwX"}},,,,function(e,t,n){e.exports=n.p+"static/media/valid.2151cce6.svg"},function(e,t,n){e.exports=n.p+"static/media/invalid.e06d0a84.svg"},function(e,t,n){e.exports=n.p+"static/media/info.7195a963.svg"},function(e,t,n){e.exports=n.p+"static/media/erase.d6858d4a.svg"},function(e,t,n){e.exports=n.p+"static/media/arrow-down.cc6ab263.svg"},function(e,t,n){e.exports=n.p+"static/media/phone.2ffbaf4d.svg"},function(e,t,n){e.exports=n.p+"static/media/location.4e914679.svg"},function(e,t,n){e.exports={Layout:"Layout_Layout__3SBgk"}},function(e,t,n){e.exports=n(49)},,,,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(14),s=n.n(r),l=n(16),o=n(7),c=n(17),u=n(18),p=n(21),d=n(19),m=n(22),_=n(1),v=n(2),I=n.n(v),f=n(32),g=n.n(f),h=n(33),E=n.n(h),b=n(34),y=n.n(b),N=n(35),x=n.n(N),T=n(36),L=n.n(T),A=n(37),O=n.n(A),C=n(38),D=n.n(C),W={info:y.a,valid:g.a,invalid:E.a,erase:x.a,arrowdown:L.a,phone:O.a,location:D.a},F=n(9),j=n.n(F),S=function(e){var t=e.id,n=e.iconType,a=e.className,r=e.onClickAction,s=Object(_.a)(e,["id","iconType","className","onClickAction"]),l=I()(j.a.Icon,j.a[a],j.a[n]);return i.a.createElement(i.a.Fragment,null,i.a.createElement("label",{onClick:r,className:j.a.Wrapper,htmlFor:t},i.a.createElement("img",Object.assign({id:t,className:l,src:W[n],alt:n},s))))};S.defaultProps={id:"",iconType:"info",className:"",onClickAction:function(){}};var P=S,k=n(10),w=n.n(k),B=function(e){var t=e.validation,n=e.className,a=e.placeholder,r=e.multiline,s=Object(_.a)(e,["validation","className","placeholder","multiline"]),l=I()(w.a.Input,w.a[n],w.a[t]),o=r?"textarea":"input";return i.a.createElement("div",{className:w.a.Wrapper},i.a.createElement(o,Object.assign({className:l,placeholder:a},s)))};B.defaultProps={placeholder:null,className:"",validation:"info",multiline:!1};var U=B,R=n(6),M=n.n(R),V=n(20),H=n(11),J=n.n(H),z=function(e){var t=e.options,n=e.value,r=e.onOptionSelected,s=e.onEraseText,l=Object(_.a)(e,["options","value","onOptionSelected","onEraseText"]),o=Object(a.useState)(!1),c=Object(V.a)(o,2),u=c[0],p=c[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:J.a.DatalistInputWrapper},i.a.createElement("div",{className:J.a.Container},i.a.createElement(U,Object.assign({value:n,className:"DatalistInput"},l)),i.a.createElement(P,{onClickAction:s,id:"erase",iconType:"erase"}),i.a.createElement(P,{onClickAction:function(){return p(!u)},id:"arrowdown",iconType:"arrowdown"})),u&&i.a.createElement("ul",{className:J.a.List},t.map(function(e,t){return i.a.createElement("li",{onClick:function(e){r(e),p(!1)},className:J.a.Option,id:t,key:t},e)}))))};z.defaultProps={options:[],value:"",onEraseText:function(){},onOptionSelected:function(){}};var K=z,X=n(28),Y=n.n(X),G=function(e){var t=e.className,n=e.htmlFor,a=e.children,r=Object(_.a)(e,["className","htmlFor","children"]),s=I()(Y.a[t],Y.a.Label);return i.a.createElement("label",Object.assign({htmlFor:n,className:s},r),a)};G.defaultProps={className:"",htmlFor:null};var q=n(12),Q=n.n(q),Z=function(e){var t=e.children,n=e.className,a=e.disabled,r=(e.active,Object(_.a)(e,["children","className","disabled","active"])),s=a?"disabled":"active",l=I()(Q.a.btn,Q.a[n],Q.a[s]),o=r.href?"a":"button";return i.a.createElement("div",{className:Q.a.ButtonWrapper},i.a.createElement(o,Object.assign({className:l,disabled:a},r),t))};Z.defaultProps={children:"Default button",className:"",disabled:!1,active:!1};var $=n(23),ee=n.n($),te=function(e){var t=e.src,n=e.className,a=e.clickable,r=I()(ee.a.Picture,ee.a[n]),s=a?"a":"div";return i.a.createElement(i.a.Fragment,null,t&&i.a.createElement(s,{className:ee.a.Tag,target:"_blank",href:t},i.a.createElement("img",{className:r,src:t,alt:"image"})))};te.defaultProps={className:"",clickable:!1};var ne=n(13),ae=n.n(ne),ie={normal:"p",S:"h3",M:"h2",L:"h1"},re=function(e){var t=e.className,n=e.validator,a=e.children,r=e.size,s=e.onClickAction,l=Object(_.a)(e,["className","validator","children","size","onClickAction"]),o=I()(ae.a.Text,ae.a[t],ae.a[r],ae.a[n]),c=ie[r];return i.a.createElement(c,Object.assign({onClick:s,className:o},l),a)};re.defaultProps={className:"",children:"default text",size:"normal"};var se=function(e){function t(){return Object(c.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"onInputUpdate",value:function(e,t,n){var a={content:e.target.value,id:t,validator:n};this.props.onCheckValidation(a)}},{key:"onTyping",value:function(e,t){var n=t.target.value||t.target.innerText;this.props.onChange(e,n)}},{key:"render",value:function(){var e=this;return console.log(typeof this.props.attachment.getIn(["file"])),i.a.createElement(i.a.Fragment,null,i.a.createElement(re,{size:"L"},"\u041f\u043e\u0434\u0430\u0442\u044c \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0435"),this.props.inputs.map(function(t,n){return i.a.createElement("div",{key:n,className:M.a.LabelWrapper},i.a.createElement(re,null,t.get("name")),i.a.createElement("div",{className:M.a.InputWrapper},i.a.createElement(U,{validation:t.get("status"),className:t.get("id"),multiline:t.get("multiline"),onBlur:function(n){return e.onInputUpdate(n,t.get("id"),t.get("validator"))},value:t.get("content"),onChange:function(n){return e.onTyping(t.get("id"),n)},placeholder:t.get("placeholder")}),i.a.createElement(P,{id:t.get("name"),iconType:t.get("status")}),i.a.createElement(re,{validator:t.get("status")},t.get("text"))))}),i.a.createElement("div",{className:M.a.LabelWrapper},i.a.createElement(re,null,this.props.datalist.getIn(["input","name"])),i.a.createElement(K,{value:this.props.datalist.getIn(["input","content"]),options:this.props.datalist.getIn(["options"]).toArray(),onChange:function(t){return e.onTyping(e.props.datalist.getIn(["input","id"]),t)},onOptionSelected:function(t){return e.onTyping(e.props.datalist.getIn(["input","id"]),t)},onEraseText:function(){return e.props.onChange(e.props.datalist.getIn(["input","id"]),"")}})),i.a.createElement("div",{className:M.a.FileInputWrapper},i.a.createElement(G,{htmlFor:"file",className:"FileInputLabel"},i.a.createElement(U,{id:"file",type:"file",hidden:!0,onChange:function(t){return e.props.onFileUpload(t.target.files)}})),this.props.attachment.getIn(["file"])&&i.a.createElement("div",{className:M.a.PictureInfoWrapper},i.a.createElement(te,{src:this.props.attachment.getIn(["file"]),className:"Mini",clickable:!1}),i.a.createElement("div",{className:M.a.PictureNameWrapper},i.a.createElement(re,{className:"Filename"},this.props.attachment.getIn(["shortfn"])),i.a.createElement(re,{onClickAction:this.props.onCancelPicture,className:"Remover"},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c")))),i.a.createElement(Z,{disabled:this.props.button.get("disable"),onClick:this.props.onApply,className:"ApplyButton"},"\u041f\u043e\u0434\u0430\u0442\u044c"))}}]),t}(a.Component),le=Object(o.b)(function(e){return{inputs:e.getIn(["inputs"]),datalist:e.getIn(["datalist"]),attachment:e.getIn(["attachment"]),button:e.getIn(["button"])}},function(e){return{onCheckValidation:function(t){return e({type:"CHECK_VALIDATION",payload:t})},onChange:function(t,n){return e(function(e,t){return{type:"SET_TEXT",payload:{id:e,text:t}}}(t,n))},onFileUpload:function(t){return e(function(e){return{type:"UPLOAD_FILE",files:e}}(t))},onCancelPicture:function(){return e({type:"CANCEL_PICTURE"})},onApply:function(){return e((console.log("clicked"),{type:"APPLY_ADVERT"}))}}})(se),oe=n(39),ce=n.n(oe),ue=function(e){var t=e.children;return i.a.createElement("div",{className:ce.a.Layout},t)},pe=n(4),de=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).ads=JSON.parse(localStorage.getItem("ads"))||[],n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidUpdate",value:function(){(this.props.published||this.props.deleted)&&(this.ads=JSON.parse(localStorage.getItem("ads")),this.props.endAction())}},{key:"test",value:function(e){console.log(e,"ID")}},{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement(re,{className:"AdListHeader",size:"L"},"\u041e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u044f"),i.a.createElement("ul",{className:pe.AdList},this.ads.map(function(t){return i.a.createElement("li",{id:t.id,className:pe.Container},i.a.createElement("div",{className:pe.WrapperOne},i.a.createElement(re,{size:"M"},t.header),i.a.createElement(re,{className:"AdvBodyText",name:t.id},t.body),t.photo&&i.a.createElement(te,{src:t.photo,className:"Middle"})),i.a.createElement("ul",{className:pe.WrapperTwo},i.a.createElement("li",{className:pe.UserDataItem},i.a.createElement(P,{className:"initial",iconType:"phone"}),i.a.createElement(re,{size:"normal",className:"UserDataText"},t.phone)),t.city&&i.a.createElement("li",{className:pe.UserDataItem},i.a.createElement(P,{className:"initial",iconType:"location"}),i.a.createElement(re,{size:"normal",className:"UserDataText"},t.city)),i.a.createElement("li",{className:pe.RemoveEditButtons},i.a.createElement(G,{htmlFor:t.id+"_edit",className:"EditLabel"},i.a.createElement(U,{onClick:function(){return e.props.onAdvEdit(t.id)},id:t.id+"_edit",hidden:!0})),i.a.createElement(G,{htmlFor:t.id+"_remove",className:"RemoveLabel"},i.a.createElement(U,{onClick:function(){return e.props.onAdvDelete(t.id)},id:t.id+"_remove",hidden:!0})))))}).reverse()))}}]),t}(a.Component),me=Object(o.b)(function(e){return{published:e.getIn(["published"]),deleted:e.getIn(["deleted"])}},function(e){return{endAction:function(){return e({type:"FINISH_ACTION"})},onAdvDelete:function(t){return e(function(e){return{type:"DELETE_ADVERT",id:e}}(t))},onAdvEdit:function(t){return e(function(e){return{type:"EDIT_ADVERT",id:e}}(t))}}})(de);var _e=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(ue,null,i.a.createElement(le,null),i.a.createElement(me,null)))},ve=n(25);function Ie(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;if("string"===typeof e){if(console.log(e.length,"LENGTH"),e.length<=t+1)return e;var n=e.split("."),a=Object(V.a)(n,2),i=a[0],r=a[1];return i.slice(0,t-r.length)+"..."+r}return new Error('Filename must be type of "string"')}var fe=Object(ve.a)({id:null,inputs:[{id:"Header",name:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a",type:"text",validator:"Header",status:"info",placeholder:null,multiline:!1,text:"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435. \u041d\u0435 \u0431\u043e\u043b\u0435\u0435 140 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432.",content:""},{id:"Body",name:"\u0422\u0435\u043a\u0441\u0442 \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u044f",type:"text",validator:"Body",status:"info",placeholder:null,multiline:!0,text:"\u041d\u0435 \u0431\u043e\u043b\u0435\u0435 300 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432",content:""},{id:"Phone",name:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d",type:"tel",validator:"Phone",status:"info",placeholder:"+7 (___) ___-__-__",multiline:!1,text:"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435",content:""}],datalist:{input:{id:"City",name:"\u0413\u043e\u0440\u043e\u0434",type:"text",content:""},options:["\u041c\u043e\u0441\u043a\u0432\u0430","\u042f\u0440\u043e\u0441\u043b\u0430\u0432\u043b\u044c","\u0427\u0435\u0431\u043e\u043a\u0441\u0430\u0440\u044b"]},attachment:{file:"",filename:"",shortfn:""},button:{disable:!0},published:!1,deleted:!1,edit:!1}),ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_VALIDATION":var n=e.getIn(["inputs"]).findIndex(function(e){return e.get("id")===t.payload.id}),a=e.getIn(["inputs",n,"content"]);switch(t.payload.validator){case"Header":var i=(e=a.length>140?e.setIn(["inputs",n,"status"],"invalid").setIn(["inputs",n,"text"],"\u041d\u0435 \u0431\u043e\u043b\u0435\u0435 140 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"):0===a.length?e.setIn(["inputs",n,"status"],"invalid").setIn(["inputs",n,"text"],"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u0435"):e.setIn(["inputs",n,"status"],"valid").setIn(["inputs",n,"text"],"\u0417\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e")).getIn(["inputs"]).every(function(e){return"valid"===e.get("status")});return console.log(i),e=i?e.setIn(["button","disable"],!1):e.setIn(["button","disable"],!0);case"Body":var r=(e=a.length>300?e.setIn(["inputs",n,"status"],"invalid").setIn(["inputs",n,"text"],"\u041d\u0435 \u0431\u043e\u043b\u0435\u0435 300 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"):0===a.length?e.setIn(["inputs",n,"status"],"invalid").setIn(["inputs",n,"text"],"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u0435"):e.setIn(["inputs",n,"status"],"valid").setIn(["inputs",n,"text"],"\u0417\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e")).getIn(["inputs"]).every(function(e){return"valid"===e.get("status")});return console.log(r),e=r?e.setIn(["button","disable"],!1):e.setIn(["button","disable"],!0);case"Phone":var s=(e=0===a.length?e.setIn(["inputs",n,"status"],"invalid").setIn(["inputs",n,"text"],"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u0435"):a.match(/^\+7+(\([0-9]{3}\)+[0-9]{3}-[0-9]{2}-[0-9]{2})$/)?e.setIn(["inputs",n,"status"],"valid").setIn(["inputs",n,"text"],"\u0417\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e"):e.setIn(["inputs",n,"status"],"invalid").setIn(["inputs",n,"text"],"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442")).getIn(["inputs"]).every(function(e){return"valid"===e.get("status")});return e=s?e.setIn(["button","disable"],!1):e.setIn(["button","disable"],!0);default:return e}case"SET_TEXT":if(t.payload.id===e.getIn(["datalist","input","id"]))e=e.setIn(["datalist","input","content"],t.payload.text);else{var l=e.getIn(["inputs"]).findIndex(function(e){return e.get("id")===t.payload.id});e=e.setIn(["inputs",l,"content"],t.payload.text)}return e;case"UPLOAD_FILE":var o=t.files[0],c=o.name,u=Ie(c),p=URL.createObjectURL(o);return e=e.setIn(["attachment","file"],p).setIn(["attachment","filename"],c).setIn(["attachment","shortfn"],u);case"CANCEL_PICTURE":return e=e.setIn(["attachment","file"],"");case"APPLY_ADVERT":console.log("Applying...");var d=e.getIn(["inputs"]).every(function(e){return"valid"===e.get("status")}),m={id:"_"+Math.random().toString(36).substr(2,9),header:e.getIn(["inputs",0,"content"]),body:e.getIn(["inputs",1,"content"]),phone:e.getIn(["inputs",2,"content"]),city:e.getIn(["datalist","input","content"]),photo:e.getIn(["attachment","file"]),photoName:e.getIn(["attachment","filename"])};if(d){var _=JSON.parse(localStorage.getItem("ads"));if(localStorage.getItem("ads")){if(e.get("edit")){var v=_.findIndex(function(t){return t.id===e.get("id")});console.log("EDIT"),_.splice(v,1),m.id=e.get("id"),_.splice(v,0,m)}else console.log("PUSH",_),_.push(m);localStorage.setItem("ads",JSON.stringify(_))}else localStorage.setItem("ads",JSON.stringify([m]));e=e.setIn(["published"],!0).setIn(["edit"],!1)}return e;case"FINISH_ACTION":return e=fe;case"DELETE_ADVERT":console.log(t.id);var I=JSON.parse(localStorage.getItem("ads")),f=I.findIndex(function(e){return e.id===t.id});return I.splice(f,1),localStorage.setItem("ads",JSON.stringify(I)),e=e.setIn(["deleted"],!0);case"EDIT_ADVERT":e=fe;var g=JSON.parse(localStorage.getItem("ads")).find(function(e){return e.id===t.id});if(console.log(g),e=e.setIn(["inputs",0,"content"],g.header).setIn(["inputs",0,"text"],"\u0417\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e").setIn(["inputs",0,"status"],"valid").setIn(["inputs",1,"content"],g.body).setIn(["inputs",1,"text"],"\u0417\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e").setIn(["inputs",1,"status"],"valid").setIn(["inputs",2,"content"],g.phone).setIn(["inputs",2,"text"],"\u0417\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e").setIn(["inputs",2,"status"],"valid"),g.city&&(e=e.setIn(["datalist","input","content"],g.city)),g.photo){var h=Ie(g.photoName);e=e.setIn(["attachment","file"],g.photo).setIn(["attachment","filename"],g.photoName).setIn(["attachment","shortfn"],h)}return e=e.set("edit",!0).set("id",t.id).setIn(["button","disable"],!1),window.scrollTo(0,0),e;default:return e}},he=Object(l.b)(ge);s.a.render(i.a.createElement(o.a,{store:he},i.a.createElement(_e,null)),document.getElementById("root"))}],[[40,1,2]]]);
//# sourceMappingURL=main.fa144c4b.chunk.js.map