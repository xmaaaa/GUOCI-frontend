(function(bd,L){var av=bd.document,bu=bd.navigator,bm=bd.location;var b=(function(){var bF=function(b0,b1){return new bF.fn.init(b0,b1,bD)},bU=bd.jQuery,bH=bd.$,bD,bY=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,bM=/\S/,bI=/^\s+/,bE=/\s+$/,bA=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,bN=/^[\],:{}\s]*$/,bW=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,bP=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,bJ=/(?:^|:|,)(?:\s*\[)+/g,by=/(webkit)[ \/]([\w.]+)/,bR=/(opera)(?:.*version)?[ \/]([\w.]+)/,bQ=/(msie) ([\w.]+)/,bS=/(mozilla)(?:.*? rv:([\w.]+))?/,bB=/-([a-z]|[0-9])/ig,bZ=/^-ms-/,bT=function(b0,b1){return(b1+"").toUpperCase()},bX=bu.userAgent,bV,bC,e,bL=Object.prototype.toString,bG=Object.prototype.hasOwnProperty,bz=Array.prototype.push,bK=Array.prototype.slice,bO=String.prototype.trim,bv=Array.prototype.indexOf,bx={};bF.fn=bF.prototype={constructor:bF,init:function(b0,b4,b3){var b2,b5,b1,b6;if(!b0){return this}if(b0.nodeType){this.context=this[0]=b0;this.length=1;return this}if(b0==="body"&&!b4&&av.body){this.context=av;this[0]=av.body;this.selector=b0;this.length=1;return this}if(typeof b0==="string"){if(b0.charAt(0)==="<"&&b0.charAt(b0.length-1)===">"&&b0.length>=3){b2=[null,b0,null]}else{b2=bY.exec(b0)}if(b2&&(b2[1]||!b4)){if(b2[1]){b4=b4 instanceof bF?b4[0]:b4;b6=(b4?b4.ownerDocument||b4:av);b1=bA.exec(b0);if(b1){if(bF.isPlainObject(b4)){b0=[av.createElement(b1[1])];bF.fn.attr.call(b0,b4,true)}else{b0=[b6.createElement(b1[1])]}}else{b1=bF.buildFragment([b2[1]],[b6]);b0=(b1.cacheable?bF.clone(b1.fragment):b1.fragment).childNodes}return bF.merge(this,b0)}else{b5=av.getElementById(b2[2]);if(b5&&b5.parentNode){if(b5.id!==b2[2]){return b3.find(b0)}this.length=1;this[0]=b5}this.context=av;this.selector=b0;return this}}else{if(!b4||b4.jquery){return(b4||b3).find(b0)}else{return this.constructor(b4).find(b0)}}}else{if(bF.isFunction(b0)){return b3.ready(b0)}}if(b0.selector!==L){this.selector=b0.selector;this.context=b0.context}return bF.makeArray(b0,this)},selector:"",jquery:"3.6.1",length:0,size:function(){return this.length},toArray:function(){return bK.call(this,0)},get:function(b0){return b0==null?this.toArray():(b0<0?this[this.length+b0]:this[b0])},pushStack:function(b1,b3,b0){var b2=this.constructor();if(bF.isArray(b1)){bz.apply(b2,b1)}else{bF.merge(b2,b1)}b2.prevObject=this;b2.context=this.context;if(b3==="find"){b2.selector=this.selector+(this.selector?" ":"")+b0}else{if(b3){b2.selector=this.selector+"."+b3+"("+b0+")"}}return b2},each:function(b1,b0){return bF.each(this,b1,b0)},ready:function(b0){bF.bindReady();bC.add(b0);return this},eq:function(b0){b0=+b0;return b0===-1?this.slice(b0):this.slice(b0,b0+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(bK.apply(this,arguments),"slice",bK.call(arguments).join(","))},map:function(b0){return this.pushStack(bF.map(this,function(b2,b1){return b0.call(b2,b1,b2)}))},end:function(){return this.prevObject||this.constructor(null)},push:bz,sort:[].sort,splice:[].splice};bF.fn.init.prototype=bF.fn;bF.extend=bF.fn.extend=function(){var b9,b2,b0,b1,b6,b7,b5=arguments[0]||{},b4=1,b3=arguments.length,b8=false;if(typeof b5==="boolean"){b8=b5;b5=arguments[1]||{};b4=2}if(typeof b5!=="object"&&!bF.isFunction(b5)){b5={}}if(b3===b4){b5=this;--b4}for(;b4<b3;b4++){if((b9=arguments[b4])!=null){for(b2 in b9){b0=b5[b2];b1=b9[b2];if(b2==="__proto__"||b5===b1){continue}if(b8&&b1&&(bF.isPlainObject(b1)||(b6=bF.isArray(b1)))){if(b6){b6=false;b7=b0&&bF.isArray(b0)?b0:[]}else{b7=b0&&bF.isPlainObject(b0)?b0:{}}b5[b2]=bF.extend(b8,b7,b1)}else{if(b1!==L){b5[b2]=b1}}}}}return b5};bF.extend({noConflict:function(b0){if(bd.$===bF){bd.$=bH}if(b0&&bd.jQuery===bF){bd.jQuery=bU}return bF},isReady:false,readyWait:1,holdReady:function(b0){if(b0){bF.readyWait++}else{bF.ready(true)}},ready:function(b0){if((b0===true&&!--bF.readyWait)||(b0!==true&&!bF.isReady)){if(!av.body){return setTimeout(bF.ready,1)}bF.isReady=true;if(b0!==true&&--bF.readyWait>0){return}bC.fireWith(av,[bF]);if(bF.fn.trigger){bF(av).trigger("ready").off("ready")}}},bindReady:function(){if(bC){return}bC=bF.Callbacks("once memory");if(av.readyState==="complete"){return setTimeout(bF.ready,1)}if(av.addEventListener){av.addEventListener("DOMContentLoaded",e,false);bd.addEventListener("load",bF.ready,false)}else{if(av.attachEvent){av.attachEvent("onreadystatechange",e);bd.attachEvent("onload",bF.ready);var b0=false;try{b0=bd.frameElement==null}catch(b1){}if(av.documentElement.doScroll&&b0){bw()}}}},isFunction:function(b0){return bF.type(b0)==="function"},isArray:Array.isArray||function(b0){return bF.type(b0)==="array"},isWindow:function(b0){return b0!=null&&b0==b0.window
},isNumeric:function(b0){return !isNaN(parseFloat(b0))&&isFinite(b0)},type:function(b0){return b0==null?String(b0):bx[bL.call(b0)]||"object"},isPlainObject:function(b2){if(!b2||bF.type(b2)!=="object"||b2.nodeType||bF.isWindow(b2)){return false}try{if(b2.constructor&&!bG.call(b2,"constructor")&&!bG.call(b2.constructor.prototype,"isPrototypeOf")){return false}}catch(b1){return false}var b0;for(b0 in b2){}return b0===L||bG.call(b2,b0)},isEmptyObject:function(b1){for(var b0 in b1){return false}return true},error:function(b0){throw new Error(b0)},parseJSON:function(b0){if(typeof b0!=="string"||!b0){return null}b0=bF.trim(b0);if(bd.JSON&&bd.JSON.parse){return bd.JSON.parse(b0)}if(bN.test(b0.replace(bW,"@").replace(bP,"]").replace(bJ,""))){return(new Function("return "+b0))()}bF.error("Invalid JSON: "+b0)},parseXML:function(b2){if(typeof b2!=="string"||!b2){return null}var b0,b1;try{if(bd.DOMParser){b1=new DOMParser();b0=b1.parseFromString(b2,"text/xml")}else{b0=new ActiveXObject("Microsoft.XMLDOM");b0.async="false";b0.loadXML(b2)}}catch(b3){b0=L}if(!b0||!b0.documentElement||b0.getElementsByTagName("parsererror").length){bF.error("Invalid XML: "+b2)}return b0},noop:function(){},globalEval:function(b0){if(b0&&bM.test(b0)){(bd.execScript||function(b1){bd["eval"].call(bd,b1)})(b0)}},camelCase:function(b0){return b0.replace(bZ,"ms-").replace(bB,bT)},nodeName:function(b1,b0){return b1.nodeName&&b1.nodeName.toUpperCase()===b0.toUpperCase()},each:function(b3,b6,b2){var b1,b4=0,b5=b3.length,b0=b5===L||bF.isFunction(b3);if(b2){if(b0){for(b1 in b3){if(b6.apply(b3[b1],b2)===false){break}}}else{for(;b4<b5;){if(b6.apply(b3[b4++],b2)===false){break}}}}else{if(b0){for(b1 in b3){if(b6.call(b3[b1],b1,b3[b1])===false){break}}}else{for(;b4<b5;){if(b6.call(b3[b4],b4,b3[b4++])===false){break}}}}return b3},trim:bO?function(b0){return b0==null?"":bO.call(b0)}:function(b0){return b0==null?"":b0.toString().replace(bI,"").replace(bE,"")},makeArray:function(b3,b1){var b0=b1||[];if(b3!=null){var b2=bF.type(b3);if(b3.length==null||b2==="string"||b2==="function"||b2==="regexp"||bF.isWindow(b3)){bz.call(b0,b3)}else{bF.merge(b0,b3)}}return b0},inArray:function(b2,b3,b1){var b0;if(b3){if(bv){return bv.call(b3,b2,b1)}b0=b3.length;b1=b1?b1<0?Math.max(0,b0+b1):b1:0;for(;b1<b0;b1++){if(b1 in b3&&b3[b1]===b2){return b1}}}return -1},merge:function(b4,b2){var b3=b4.length,b1=0;if(typeof b2.length==="number"){for(var b0=b2.length;b1<b0;b1++){b4[b3++]=b2[b1]}}else{while(b2[b1]!==L){b4[b3++]=b2[b1++]}}b4.length=b3;return b4},grep:function(b1,b6,b0){var b2=[],b5;b0=!!b0;for(var b3=0,b4=b1.length;b3<b4;b3++){b5=!!b6(b1[b3],b3);if(b0!==b5){b2.push(b1[b3])}}return b2},map:function(b0,b7,b8){var b5,b6,b4=[],b2=0,b1=b0.length,b3=b0 instanceof bF||b1!==L&&typeof b1==="number"&&((b1>0&&b0[0]&&b0[b1-1])||b1===0||bF.isArray(b0));if(b3){for(;b2<b1;b2++){b5=b7(b0[b2],b2,b8);if(b5!=null){b4[b4.length]=b5}}}else{for(b6 in b0){b5=b7(b0[b6],b6,b8);if(b5!=null){b4[b4.length]=b5}}}return b4.concat.apply([],b4)},guid:1,proxy:function(b4,b3){if(typeof b3==="string"){var b2=b4[b3];b3=b4;b4=b2}if(!bF.isFunction(b4)){return L}var b0=bK.call(arguments,2),b1=function(){return b4.apply(b3,b0.concat(bK.call(arguments)))};b1.guid=b4.guid=b4.guid||b1.guid||bF.guid++;return b1},access:function(b0,b6,b9,b7,b4,ca,b8){var b2,b5=b9==null,b3=0,b1=b0.length;if(b9&&typeof b9==="object"){for(b3 in b9){bF.access(b0,b6,b3,b9[b3],1,ca,b7)}b4=1}else{if(b7!==L){b2=b8===L&&bF.isFunction(b7);if(b5){if(b2){b2=b6;b6=function(cc,cb,cd){return b2.call(bF(cc),cd)}}else{b6.call(b0,b7);b6=null}}if(b6){for(;b3<b1;b3++){b6(b0[b3],b9,b2?b7.call(b0[b3],b3,b6(b0[b3],b9)):b7,b8)}}b4=1}}return b4?b0:b5?b6.call(b0):b1?b6(b0[0],b9):ca},now:function(){return(new Date()).getTime()},uaMatch:function(b1){b1=b1.toLowerCase();var b0=by.exec(b1)||bR.exec(b1)||bQ.exec(b1)||b1.indexOf("compatible")<0&&bS.exec(b1)||[];return{browser:b0[1]||"",version:b0[2]||"0"}},sub:function(){function b0(b3,b4){return new b0.fn.init(b3,b4)}bF.extend(true,b0,this);b0.superclass=this;b0.fn=b0.prototype=this();b0.fn.constructor=b0;b0.sub=this.sub;b0.fn.init=function b2(b3,b4){if(b4&&b4 instanceof bF&&!(b4 instanceof b0)){b4=b0(b4)}return bF.fn.init.call(this,b3,b4,b1)};b0.fn.init.prototype=b0.fn;var b1=b0(av);return b0},browser:{}});bF.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(b1,b0){bx["[object "+b0+"]"]=b0.toLowerCase()});bV=bF.uaMatch(bX);if(bV.browser){bF.browser[bV.browser]=true;bF.browser.version=bV.version}if(bF.browser.webkit){bF.browser.safari=true}if(bM.test("\xA0")){bI=/^[\s\xA0]+/;bE=/[\s\xA0]+$/}bD=bF(av);if(av.addEventListener){e=function(){av.removeEventListener("DOMContentLoaded",e,false);bF.ready()}}else{if(av.attachEvent){e=function(){if(av.readyState==="complete"){av.detachEvent("onreadystatechange",e);bF.ready()}}}}function bw(){if(bF.isReady){return}try{av.documentElement.doScroll("left")}catch(b0){setTimeout(bw,1);return}bF.ready()}return bF})();var a3={};function X(e){var bv=a3[e]={},bw,bx;
e=e.split(/\s+/);for(bw=0,bx=e.length;bw<bx;bw++){bv[e[bw]]=true}return bv}b.Callbacks=function(bx){bx=bx?(a3[bx]||X(bx)):{};var bC=[],bD=[],by,e,bz,bw,bA,bB,bF=function(bG){var bH,bK,bJ,bI,bL;for(bH=0,bK=bG.length;bH<bK;bH++){bJ=bG[bH];bI=b.type(bJ);if(bI==="array"){bF(bJ)}else{if(bI==="function"){if(!bx.unique||!bE.has(bJ)){bC.push(bJ)}}}}},bv=function(bH,bG){bG=bG||[];by=!bx.memory||[bH,bG];e=true;bz=true;bB=bw||0;bw=0;bA=bC.length;for(;bC&&bB<bA;bB++){if(bC[bB].apply(bH,bG)===false&&bx.stopOnFalse){by=true;break}}bz=false;if(bC){if(!bx.once){if(bD&&bD.length){by=bD.shift();bE.fireWith(by[0],by[1])}}else{if(by===true){bE.disable()}else{bC=[]}}}},bE={add:function(){if(bC){var bG=bC.length;bF(arguments);if(bz){bA=bC.length}else{if(by&&by!==true){bw=bG;bv(by[0],by[1])}}}return this},remove:function(){if(bC){var bG=arguments,bI=0,bJ=bG.length;for(;bI<bJ;bI++){for(var bH=0;bH<bC.length;bH++){if(bG[bI]===bC[bH]){if(bz){if(bH<=bA){bA--;if(bH<=bB){bB--}}}bC.splice(bH--,1);if(bx.unique){break}}}}}return this},has:function(bH){if(bC){var bG=0,bI=bC.length;for(;bG<bI;bG++){if(bH===bC[bG]){return true}}}return false},empty:function(){bC=[];return this},disable:function(){bC=bD=by=L;return this},disabled:function(){return !bC},lock:function(){bD=L;if(!by||by===true){bE.disable()}return this},locked:function(){return !bD},fireWith:function(bH,bG){if(bD){if(bz){if(!bx.once){bD.push([bH,bG])}}else{if(!(bx.once&&by)){bv(bH,bG)}}}return this},fire:function(){bE.fireWith(this,arguments);return this},fired:function(){return !!e}};return bE};var aK=[].slice;b.extend({Deferred:function(by){var bx=b.Callbacks("once memory"),bw=b.Callbacks("once memory"),bv=b.Callbacks("memory"),e="pending",bA={resolve:bx,reject:bw,notify:bv},bC={done:bx.add,fail:bw.add,progress:bv.add,state:function(){return e},isResolved:bx.fired,isRejected:bw.fired,then:function(bE,bD,bF){bB.done(bE).fail(bD).progress(bF);return this},always:function(){bB.done.apply(bB,arguments).fail.apply(bB,arguments);return this},pipe:function(bF,bE,bD){return b.Deferred(function(bG){b.each({done:[bF,"resolve"],fail:[bE,"reject"],progress:[bD,"notify"]},function(bI,bL){var bH=bL[0],bK=bL[1],bJ;if(b.isFunction(bH)){bB[bI](function(){bJ=bH.apply(this,arguments);if(bJ&&b.isFunction(bJ.promise)){bJ.promise().then(bG.resolve,bG.reject,bG.notify)}else{bG[bK+"With"](this===bB?bG:this,[bJ])}})}else{bB[bI](bG[bK])}})}).promise()},promise:function(bE){if(bE==null){bE=bC}else{for(var bD in bC){bE[bD]=bC[bD]}}return bE}},bB=bC.promise({}),bz;for(bz in bA){bB[bz]=bA[bz].fire;bB[bz+"With"]=bA[bz].fireWith}bB.done(function(){e="resolved"},bw.disable,bv.lock).fail(function(){e="rejected"},bx.disable,bv.lock);if(by){by.call(bB,bB)}return bB},when:function(bA){var bx=aK.call(arguments,0),bv=0,e=bx.length,bB=new Array(e),bw=e,by=e,bC=e<=1&&bA&&b.isFunction(bA.promise)?bA:b.Deferred(),bE=bC.promise();function bD(bF){return function(bG){bx[bF]=arguments.length>1?aK.call(arguments,0):bG;if(!(--bw)){bC.resolveWith(bC,bx)}}}function bz(bF){return function(bG){bB[bF]=arguments.length>1?aK.call(arguments,0):bG;bC.notifyWith(bE,bB)}}if(e>1){for(;bv<e;bv++){if(bx[bv]&&bx[bv].promise&&b.isFunction(bx[bv].promise)){bx[bv].promise().then(bD(bv),bC.reject,bz(bv))}else{--bw}}if(!bw){bC.resolveWith(bC,bx)}}else{if(bC!==bA){bC.resolveWith(bC,e?[bA]:[])}}return bE}});b.support=(function(){var bI,bH,bE,bF,bx,bD,bC,bz,bJ,bA,by,bw,bv=av.createElement("div"),bG=av.documentElement;bv.setAttribute("className","t");bv.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";bH=bv.getElementsByTagName("*");bE=bv.getElementsByTagName("a")[0];if(!bH||!bH.length||!bE){return{}}bF=av.createElement("select");bx=bF.appendChild(av.createElement("option"));bD=bv.getElementsByTagName("input")[0];bI={leadingWhitespace:(bv.firstChild.nodeType===3),tbody:!bv.getElementsByTagName("tbody").length,htmlSerialize:!!bv.getElementsByTagName("link").length,style:/top/.test(bE.getAttribute("style")),hrefNormalized:(bE.getAttribute("href")==="/a"),opacity:/^0.55/.test(bE.style.opacity),cssFloat:!!bE.style.cssFloat,checkOn:(bD.value==="on"),optSelected:bx.selected,getSetAttribute:bv.className!=="t",enctype:!!av.createElement("form").enctype,html5Clone:av.createElement("nav").cloneNode(true).outerHTML!=="<:nav></:nav>",submitBubbles:true,changeBubbles:true,focusinBubbles:false,deleteExpando:true,noCloneEvent:true,inlineBlockNeedsLayout:false,shrinkWrapBlocks:false,reliableMarginRight:true,pixelMargin:true};b.boxModel=bI.boxModel=(av.compatMode==="CSS1Compat");bD.checked=true;bI.noCloneChecked=bD.cloneNode(true).checked;bF.disabled=true;bI.optDisabled=!bx.disabled;try{delete bv.test}catch(bB){bI.deleteExpando=false}if(!bv.addEventListener&&bv.attachEvent&&bv.fireEvent){bv.attachEvent("onclick",function(){bI.noCloneEvent=false});bv.cloneNode(true).fireEvent("onclick")}bD=av.createElement("input");bD.value="t";bD.setAttribute("type","radio");bI.radioValue=bD.value==="t";bD.setAttribute("checked","checked");
bD.setAttribute("name","t");bv.appendChild(bD);bC=av.createDocumentFragment();bC.appendChild(bv.lastChild);bI.checkClone=bC.cloneNode(true).cloneNode(true).lastChild.checked;bI.appendChecked=bD.checked;bC.removeChild(bD);bC.appendChild(bv);if(bv.attachEvent){for(by in {submit:1,change:1,focusin:1}){bA="on"+by;bw=(bA in bv);if(!bw){bv.setAttribute(bA,"return;");bw=(typeof bv[bA]==="function")}bI[by+"Bubbles"]=bw}}bC.removeChild(bv);bC=bF=bx=bv=bD=null;b(function(){var bM,bV,bW,bU,bO,bP,bR,bL,bK,bQ,bN,e,bT,bS=av.getElementsByTagName("body")[0];if(!bS){return}bL=1;bT="padding:0;margin:0;border:";bN="position:absolute;top:0;left:0;width:1px;height:1px;";e=bT+"0;visibility:hidden;";bK="style='"+bN+bT+"5px solid #000;";bQ="<div "+bK+"display:block;'><div style='"+bT+"0;display:block;overflow:hidden;'></div></div>"+"<table "+bK+"' cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>";bM=av.createElement("div");bM.style.cssText=e+"width:0;height:0;position:static;top:0;margin-top:"+bL+"px";bS.insertBefore(bM,bS.firstChild);bv=av.createElement("div");bM.appendChild(bv);bv.innerHTML="<table><tr><td style='"+bT+"0;display:none'></td><td>t</td></tr></table>";bz=bv.getElementsByTagName("td");bw=(bz[0].offsetHeight===0);bz[0].style.display="";bz[1].style.display="none";bI.reliableHiddenOffsets=bw&&(bz[0].offsetHeight===0);if(bd.getComputedStyle){bv.innerHTML="";bR=av.createElement("div");bR.style.width="0";bR.style.marginRight="0";bv.style.width="2px";bv.appendChild(bR);bI.reliableMarginRight=(parseInt((bd.getComputedStyle(bR,null)||{marginRight:0}).marginRight,10)||0)===0}if(typeof bv.style.zoom!=="undefined"){bv.innerHTML="";bv.style.width=bv.style.padding="1px";bv.style.border=0;bv.style.overflow="hidden";bv.style.display="inline";bv.style.zoom=1;bI.inlineBlockNeedsLayout=(bv.offsetWidth===3);bv.style.display="block";bv.style.overflow="visible";bv.innerHTML="<div style='width:5px;'></div>";bI.shrinkWrapBlocks=(bv.offsetWidth!==3)}bv.style.cssText=bN+e;bv.innerHTML=bQ;bV=bv.firstChild;bW=bV.firstChild;bO=bV.nextSibling.firstChild.firstChild;bP={doesNotAddBorder:(bW.offsetTop!==5),doesAddBorderForTableAndCells:(bO.offsetTop===5)};bW.style.position="fixed";bW.style.top="20px";bP.fixedPosition=(bW.offsetTop===20||bW.offsetTop===15);bW.style.position=bW.style.top="";bV.style.overflow="hidden";bV.style.position="relative";bP.subtractsBorderForOverflowNotVisible=(bW.offsetTop===-5);bP.doesNotIncludeMarginInBodyOffset=(bS.offsetTop!==bL);if(bd.getComputedStyle){bv.style.marginTop="1%";bI.pixelMargin=(bd.getComputedStyle(bv,null)||{marginTop:0}).marginTop!=="1%"}if(typeof bM.style.zoom!=="undefined"){bM.style.zoom=1}bS.removeChild(bM);bR=bv=bM=null;b.extend(bI,bP)});return bI})();var aT=/^(?:\{.*\}|\[.*\])$/,aA=/([A-Z])/g;b.extend({cache:{},uuid:0,expando:"jQuery"+(b.fn.jquery+Math.random()).replace(/\D/g,""),noData:{"embed":true,"object":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000","applet":true},hasData:function(e){e=e.nodeType?b.cache[e[b.expando]]:e[b.expando];return !!e&&!S(e)},data:function(bx,bv,bz,by){if(!b.acceptData(bx)){return}var bG,bA,bD,bE=b.expando,bC=typeof bv==="string",bF=bx.nodeType,e=bF?b.cache:bx,bw=bF?bx[bE]:bx[bE]&&bE,bB=bv==="events";if((!bw||!e[bw]||(!bB&&!by&&!e[bw].data))&&bC&&bz===L){return}if(!bw){if(bF){bx[bE]=bw=++b.uuid}else{bw=bE}}if(!e[bw]){e[bw]={};if(!bF){e[bw].toJSON=b.noop}}if(typeof bv==="object"||typeof bv==="function"){if(by){e[bw]=b.extend(e[bw],bv)}else{e[bw].data=b.extend(e[bw].data,bv)}}bG=bA=e[bw];if(!by){if(!bA.data){bA.data={}}bA=bA.data}if(bz!==L){bA[b.camelCase(bv)]=bz}if(bB&&!bA[bv]){return bG.events}if(bC){bD=bA[bv];if(bD==null){bD=bA[b.camelCase(bv)]}}else{bD=bA}return bD},removeData:function(bx,bv,by){if(!b.acceptData(bx)){return}var bB,bA,bz,bC=b.expando,bD=bx.nodeType,e=bD?b.cache:bx,bw=bD?bx[bC]:bC;if(!e[bw]){return}if(bv){bB=by?e[bw]:e[bw].data;if(bB){if(!b.isArray(bv)){if(bv in bB){bv=[bv]}else{bv=b.camelCase(bv);if(bv in bB){bv=[bv]}else{bv=bv.split(" ")}}}for(bA=0,bz=bv.length;bA<bz;bA++){delete bB[bv[bA]]}if(!(by?S:b.isEmptyObject)(bB)){return}}}if(!by){delete e[bw].data;if(!S(e[bw])){return}}if(b.support.deleteExpando||!e.setInterval){delete e[bw]}else{e[bw]=null}if(bD){if(b.support.deleteExpando){delete bx[bC]}else{if(bx.removeAttribute){bx.removeAttribute(bC)}else{bx[bC]=null}}}},_data:function(bv,e,bw){return b.data(bv,e,bw,true)},acceptData:function(bv){if(bv.nodeName){var e=b.noData[bv.nodeName.toLowerCase()];if(e){return !(e===true||bv.getAttribute("classid")!==e)}}return true}});b.fn.extend({data:function(bD,bC){var by,bv,bB,e,bx,bw=this[0],bA=0,bz=null;if(bD===L){if(this.length){bz=b.data(bw);if(bw.nodeType===1&&!b._data(bw,"parsedAttrs")){bB=bw.attributes;for(bx=bB.length;bA<bx;bA++){e=bB[bA].name;if(e.indexOf("data-")===0){e=b.camelCase(e.substring(5));a6(bw,e,bz[e])}}b._data(bw,"parsedAttrs",true)}}return bz}if(typeof bD==="object"){return this.each(function(){b.data(this,bD)})}by=bD.split(".",2);by[1]=by[1]?"."+by[1]:"";bv=by[1]+"!";return b.access(this,function(bE){if(bE===L){bz=this.triggerHandler("getData"+bv,[by[0]]);
if(bz===L&&bw){bz=b.data(bw,bD);bz=a6(bw,bD,bz)}return bz===L&&by[1]?this.data(by[0]):bz}by[1]=bE;this.each(function(){var bF=b(this);bF.triggerHandler("setData"+bv,by);b.data(this,bD,bE);bF.triggerHandler("changeData"+bv,by)})},null,bC,arguments.length>1,null,false)},removeData:function(e){return this.each(function(){b.removeData(this,e)})}});function a6(bx,bw,by){if(by===L&&bx.nodeType===1){var bv="data-"+bw.replace(aA,"-$1").toLowerCase();by=bx.getAttribute(bv);if(typeof by==="string"){try{by=by==="true"?true:by==="false"?false:by==="null"?null:b.isNumeric(by)?+by:aT.test(by)?b.parseJSON(by):by}catch(bz){}b.data(bx,bw,by)}else{by=L}}return by}function S(bv){for(var e in bv){if(e==="data"&&b.isEmptyObject(bv[e])){continue}if(e!=="toJSON"){return false}}return true}function bj(by,bx,bA){var bw=bx+"defer",bv=bx+"queue",e=bx+"mark",bz=b._data(by,bw);if(bz&&(bA==="queue"||!b._data(by,bv))&&(bA==="mark"||!b._data(by,e))){setTimeout(function(){if(!b._data(by,bv)&&!b._data(by,e)){b.removeData(by,bw,true);bz.fire()}},0)}}b.extend({_mark:function(bv,e){if(bv){e=(e||"fx")+"mark";b._data(bv,e,(b._data(bv,e)||0)+1)}},_unmark:function(by,bx,bv){if(by!==true){bv=bx;bx=by;by=false}if(bx){bv=bv||"fx";var e=bv+"mark",bw=by?0:((b._data(bx,e)||1)-1);if(bw){b._data(bx,e,bw)}else{b.removeData(bx,e,true);bj(bx,bv,"mark")}}},queue:function(bv,e,bx){var bw;if(bv){e=(e||"fx")+"queue";bw=b._data(bv,e);if(bx){if(!bw||b.isArray(bx)){bw=b._data(bv,e,b.makeArray(bx))}else{bw.push(bx)}}return bw||[]}},dequeue:function(by,bx){bx=bx||"fx";var bv=b.queue(by,bx),bw=bv.shift(),e={};if(bw==="inprogress"){bw=bv.shift()}if(bw){if(bx==="fx"){bv.unshift("inprogress")}b._data(by,bx+".run",e);bw.call(by,function(){b.dequeue(by,bx)},e)}if(!bv.length){b.removeData(by,bx+"queue "+bx+".run",true);bj(by,bx,"queue")}}});b.fn.extend({queue:function(e,bv){var bw=2;if(typeof e!=="string"){bv=e;e="fx";bw--}if(arguments.length<bw){return b.queue(this[0],e)}return bv===L?this:this.each(function(){var bx=b.queue(this,e,bv);if(e==="fx"&&bx[0]!=="inprogress"){b.dequeue(this,e)}})},dequeue:function(e){return this.each(function(){b.dequeue(this,e)})},delay:function(bv,e){bv=b.fx?b.fx.speeds[bv]||bv:bv;e=e||"fx";return this.queue(e,function(bx,bw){var by=setTimeout(bx,bv);bw.stop=function(){clearTimeout(by)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(bD,bw){if(typeof bD!=="string"){bw=bD;bD=L}bD=bD||"fx";var e=b.Deferred(),bv=this,by=bv.length,bB=1,bz=bD+"defer",bA=bD+"queue",bC=bD+"mark",bx;function bE(){if(!(--bB)){e.resolveWith(bv,[bv])}}while(by--){if((bx=b.data(bv[by],bz,L,true)||(b.data(bv[by],bA,L,true)||b.data(bv[by],bC,L,true))&&b.data(bv[by],bz,b.Callbacks("once memory"),true))){bB++;bx.add(bE)}}bE();return e.promise(bw)}});var aQ=/[\n\t\r]/g,ag=/\s+/,aV=/\r/g,g=/^(?:button|input)$/i,C=/^(?:button|input|object|select|textarea)$/i,l=/^a(?:rea)?$/i,ao=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,E=b.support.getSetAttribute,bf,aZ,aG;b.fn.extend({attr:function(e,bv){if($(this).is("#layer89D66E0F70E654D1A364638424313489")&&e=="deleted"){console.trace()}return b.access(this,b.attr,e,bv,arguments.length>1)},removeAttr:function(e){return this.each(function(){b.removeAttr(this,e)})},prop:function(e,bv){if($(this).is(".wp-new-prodcuts-detail-button-c img")){console.log(e,bv)}return b.access(this,b.prop,e,bv,arguments.length>1)},removeProp:function(e){e=b.propFix[e]||e;return this.each(function(){try{this[e]=L;delete this[e]}catch(bv){}})},addClass:function(by){var bA,bw,bv,bx,bz,bB,e;if(b.isFunction(by)){return this.each(function(bC){b(this).addClass(by.call(this,bC,this.className))})}if(by&&typeof by==="string"){bA=by.split(ag);for(bw=0,bv=this.length;bw<bv;bw++){bx=this[bw];if(bx.nodeType===1){if(!bx.className&&bA.length===1){bx.className=by}else{bz=" "+bx.className+" ";for(bB=0,e=bA.length;bB<e;bB++){if(!~bz.indexOf(" "+bA[bB]+" ")){bz+=bA[bB]+" "}}bx.className=b.trim(bz)}}}}return this},removeClass:function(bz){var bA,bw,bv,by,bx,bB,e;if(b.isFunction(bz)){return this.each(function(bC){b(this).removeClass(bz.call(this,bC,this.className))})}if((bz&&typeof bz==="string")||bz===L){bA=(bz||"").split(ag);for(bw=0,bv=this.length;bw<bv;bw++){by=this[bw];if(by.nodeType===1&&by.className){if(bz){bx=(" "+by.className+" ").replace(aQ," ");for(bB=0,e=bA.length;bB<e;bB++){bx=bx.replace(" "+bA[bB]+" "," ")}by.className=b.trim(bx)}else{by.className=""}}}}return this},toggleClass:function(bx,bv){var bw=typeof bx,e=typeof bv==="boolean";if(b.isFunction(bx)){return this.each(function(by){b(this).toggleClass(bx.call(this,by,this.className,bv),bv)})}return this.each(function(){if(bw==="string"){var bA,bz=0,by=b(this),bB=bv,bC=bx.split(ag);while((bA=bC[bz++])){bB=e?bB:!by.hasClass(bA);by[bB?"addClass":"removeClass"](bA)}}else{if(bw==="undefined"||bw==="boolean"){if(this.className){b._data(this,"__className__",this.className)}this.className=this.className||bx===false?"":b._data(this,"__className__")||""
}}})},hasClass:function(e){var bx=" "+e+" ",bw=0,bv=this.length;for(;bw<bv;bw++){if(this[bw].nodeType===1&&(" "+this[bw].className+" ").replace(aQ," ").indexOf(bx)>-1){return true}}return false},val:function(bx){var e,bv,by,bw=this[0];if(!arguments.length){if(bw){e=b.valHooks[bw.type]||b.valHooks[bw.nodeName.toLowerCase()];if(e&&"get" in e&&(bv=e.get(bw,"value"))!==L){return bv}bv=bw.value;return typeof bv==="string"?bv.replace(aV,""):bv==null?"":bv}return}by=b.isFunction(bx);return this.each(function(bA){var bz=b(this),bB;if(this.nodeType!==1){return}if(by){bB=bx.call(this,bA,bz.val())}else{bB=bx}if(bB==null){bB=""}else{if(typeof bB==="number"){bB+=""}else{if(b.isArray(bB)){bB=b.map(bB,function(bC){return bC==null?"":bC+""})}}}e=b.valHooks[this.type]||b.valHooks[this.nodeName.toLowerCase()];if(!e||!("set" in e)||e.set(this,bB,"value")===L){this.value=bB}})}});b.extend({valHooks:{option:{get:function(e){var bv=e.attributes.value;return !bv||bv.specified?e.value:e.text}},select:{get:function(e){var bA,bv,bz,bx,by=e.selectedIndex,bB=[],bC=e.options,bw=e.type==="select-one";if(by<0){return null}bv=bw?by:0;bz=bw?by+1:bC.length;for(;bv<bz;bv++){bx=bC[bv];if(bx.selected&&(b.support.optDisabled?!bx.disabled:bx.getAttribute("disabled")===null)&&(!bx.parentNode.disabled||!b.nodeName(bx.parentNode,"optgroup"))){bA=b(bx).val();if(bw){return bA}bB.push(bA)}}if(bw&&!bB.length&&bC.length){return b(bC[by]).val()}return bB},set:function(bv,bw){var e=b.makeArray(bw);b(bv).find("option").each(function(){this.selected=b.inArray(b(this).val(),e)>=0});if(!e.length){bv.selectedIndex=-1}return e}}},attrFn:{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true},attr:function(bA,bx,bB,bz){var bw,e,by,bv=bA.nodeType;if(!bA||bv===3||bv===8||bv===2){return}if(bz&&bx in b.attrFn){return b(bA)[bx](bB)}if(typeof bA.getAttribute==="undefined"){return b.prop(bA,bx,bB)}by=bv!==1||!b.isXMLDoc(bA);if(by){bx=bx.toLowerCase();e=b.attrHooks[bx]||(ao.test(bx)?aZ:bf)}if(bB!==L){if(bB===null){b.removeAttr(bA,bx);return}else{if(e&&"set" in e&&by&&(bw=e.set(bA,bB,bx))!==L){return bw}else{bA.setAttribute(bx,""+bB);return bB}}}else{if(e&&"get" in e&&by&&(bw=e.get(bA,bx))!==null){return bw}else{bw=bA.getAttribute(bx);return bw===null?L:bw}}},removeAttr:function(by,bA){var bz,bB,bw,e,bv,bx=0;if(bA&&by.nodeType===1){bB=bA.toLowerCase().split(ag);e=bB.length;for(;bx<e;bx++){bw=bB[bx];if(bw){bz=b.propFix[bw]||bw;bv=ao.test(bw);if(!bv){b.attr(by,bw,"")}by.removeAttribute(E?bw:bz);if(bv&&bz in by){by[bz]=false}}}}},attrHooks:{type:{set:function(e,bv){if(g.test(e.nodeName)&&e.parentNode){b.error("type property can't be changed")}else{if(!b.support.radioValue&&bv==="radio"&&b.nodeName(e,"input")){var bw=e.value;e.setAttribute("type",bv);if(bw){e.value=bw}return bv}}}},value:{get:function(bv,e){if(bf&&b.nodeName(bv,"button")){return bf.get(bv,e)}return e in bv?bv.value:null},set:function(bv,bw,e){if(bf&&b.nodeName(bv,"button")){return bf.set(bv,bw,e)}bv.value=bw}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(bz,bx,bA){var bw,e,by,bv=bz.nodeType;if(!bz||bv===3||bv===8||bv===2){return}by=bv!==1||!b.isXMLDoc(bz);if(by){bx=b.propFix[bx]||bx;e=b.propHooks[bx]}if(bA!==L){if(e&&"set" in e&&(bw=e.set(bz,bA,bx))!==L){return bw}else{return(bz[bx]=bA)}}else{if(e&&"get" in e&&(bw=e.get(bz,bx))!==null){return bw}else{return bz[bx]}}},propHooks:{tabIndex:{get:function(bv){var e=bv.getAttributeNode("tabindex");return e&&e.specified?parseInt(e.value,10):C.test(bv.nodeName)||l.test(bv.nodeName)&&bv.href?0:L}}}});b.attrHooks.tabindex=b.propHooks.tabIndex;aZ={get:function(bv,e){var bx,bw=b.prop(bv,e);return bw===true||typeof bw!=="boolean"&&(bx=bv.getAttributeNode(e))&&bx.nodeValue!==false?e.toLowerCase():L},set:function(bv,bx,e){var bw;if(bx===false){b.removeAttr(bv,e)}else{bw=b.propFix[e]||e;if(bw in bv){bv[bw]=true}bv.setAttribute(e,e.toLowerCase())}return e}};if(!E){aG={name:true,id:true,coords:true};bf=b.valHooks.button={get:function(bw,bv){var e;e=bw.getAttributeNode(bv);return e&&(aG[bv]?e.nodeValue!=="":e.specified)?e.nodeValue:L},set:function(bw,bx,bv){var e=bw.getAttributeNode(bv);if(!e){e=av.createAttribute(bv);bw.setAttributeNode(e)}return(e.nodeValue=bx+"")}};b.attrHooks.tabindex.set=bf.set;b.each(["width","height"],function(bv,e){b.attrHooks[e]=b.extend(b.attrHooks[e],{set:function(bw,bx){if(bx===""){bw.setAttribute(e,"auto");return bx}}})});b.attrHooks.contenteditable={get:bf.get,set:function(bv,bw,e){if(bw===""){bw="false"}bf.set(bv,bw,e)}}}if(!b.support.hrefNormalized){b.each(["href","src","width","height"],function(bv,e){b.attrHooks[e]=b.extend(b.attrHooks[e],{get:function(bx){var bw=bx.getAttribute(e,2);return bw===null?L:bw}})})}if(!b.support.style){b.attrHooks.style={get:function(e){return e.style.cssText.toLowerCase()||L
},set:function(e,bv){return(e.style.cssText=""+bv)}}}if(!b.support.optSelected){b.propHooks.selected=b.extend(b.propHooks.selected,{get:function(bv){var e=bv.parentNode;if(e){e.selectedIndex;if(e.parentNode){e.parentNode.selectedIndex}}return null}})}if(!b.support.enctype){b.propFix.enctype="encoding"}if(!b.support.checkOn){b.each(["radio","checkbox"],function(){b.valHooks[this]={get:function(e){return e.getAttribute("value")===null?"on":e.value}}})}b.each(["radio","checkbox"],function(){b.valHooks[this]=b.extend(b.valHooks[this],{set:function(e,bv){if(b.isArray(bv)){return(e.checked=b.inArray(b(e).val(),bv)>=0)}}})});var be=/^(?:textarea|input|select)$/i,n=/^([^\.]*)?(?:\.(.+))?$/,J=/(?:^|\s)hover(\.\S+)?\b/,aP=/^key/,bg=/^(?:mouse|contextmenu)|click/,T=/^(?:focusinfocus|focusoutblur)$/,U=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,Y=function(e){var bv=U.exec(e);if(bv){bv[1]=(bv[1]||"").toLowerCase();bv[3]=bv[3]&&new RegExp("(?:^|\\s)"+bv[3]+"(?:\\s|$)")}return bv},j=function(bw,e){var bv=bw.attributes||{};return((!e[1]||bw.nodeName.toLowerCase()===e[1])&&(!e[2]||(bv.id||{}).value===e[2])&&(!e[3]||e[3].test((bv["class"]||{}).value)))},bt=function(e){return b.event.special.hover?e:e.replace(J,"mouseenter$1 mouseleave$1")};b.event={add:function(bx,bC,bJ,bA,by){var bD,bB,bK,bI,bH,bF,e,bG,bv,bz,bw,bE;if(bx.nodeType===3||bx.nodeType===8||!bC||!bJ||!(bD=b._data(bx))){return}if(bJ.handler){bv=bJ;bJ=bv.handler;by=bv.selector}if(!bJ.guid){bJ.guid=b.guid++}bK=bD.events;if(!bK){bD.events=bK={}}bB=bD.handle;if(!bB){bD.handle=bB=function(bL){return typeof b!=="undefined"&&(!bL||b.event.triggered!==bL.type)?b.event.dispatch.apply(bB.elem,arguments):L};bB.elem=bx}bC=b.trim(bt(bC)).split(" ");for(bI=0;bI<bC.length;bI++){bH=n.exec(bC[bI])||[];bF=bH[1];e=(bH[2]||"").split(".").sort();bE=b.event.special[bF]||{};bF=(by?bE.delegateType:bE.bindType)||bF;bE=b.event.special[bF]||{};bG=b.extend({type:bF,origType:bH[1],data:bA,handler:bJ,guid:bJ.guid,selector:by,quick:by&&Y(by),namespace:e.join(".")},bv);bw=bK[bF];if(!bw){bw=bK[bF]=[];bw.delegateCount=0;if(!bE.setup||bE.setup.call(bx,bA,e,bB)===false){if(bx.addEventListener){bx.addEventListener(bF,bB,false)}else{if(bx.attachEvent){bx.attachEvent("on"+bF,bB)}}}}if(bE.add){bE.add.call(bx,bG);if(!bG.handler.guid){bG.handler.guid=bJ.guid}}if(by){bw.splice(bw.delegateCount++,0,bG)}else{bw.push(bG)}b.event.global[bF]=true}bx=null},global:{},remove:function(bJ,bE,bv,bH,bB){var bI=b.hasData(bJ)&&b._data(bJ),bF,bx,bz,bL,bC,bA,bG,bw,by,bK,bD,e;if(!bI||!(bw=bI.events)){return}bE=b.trim(bt(bE||"")).split(" ");for(bF=0;bF<bE.length;bF++){bx=n.exec(bE[bF])||[];bz=bL=bx[1];bC=bx[2];if(!bz){for(bz in bw){b.event.remove(bJ,bz+bE[bF],bv,bH,true)}continue}by=b.event.special[bz]||{};bz=(bH?by.delegateType:by.bindType)||bz;bD=bw[bz]||[];bA=bD.length;bC=bC?new RegExp("(^|\\.)"+bC.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(bG=0;bG<bD.length;bG++){e=bD[bG];if((bB||bL===e.origType)&&(!bv||bv.guid===e.guid)&&(!bC||bC.test(e.namespace))&&(!bH||bH===e.selector||bH==="**"&&e.selector)){bD.splice(bG--,1);if(e.selector){bD.delegateCount--}if(by.remove){by.remove.call(bJ,e)}}}if(bD.length===0&&bA!==bD.length){if(!by.teardown||by.teardown.call(bJ,bC)===false){b.removeEvent(bJ,bz,bI.handle)}delete bw[bz]}}if(b.isEmptyObject(bw)){bK=bI.handle;if(bK){bK.elem=null}b.removeData(bJ,["events","handle"],true)}},customEvent:{"getData":true,"setData":true,"changeData":true},trigger:function(bv,bD,bA,bJ){if(bA&&(bA.nodeType===3||bA.nodeType===8)){return}var bG=bv.type||bv,bx=[],e,bw,bC,bH,bz,by,bF,bE,bB,bI;if(T.test(bG+b.event.triggered)){return}if(bG.indexOf("!")>=0){bG=bG.slice(0,-1);bw=true}if(bG.indexOf(".")>=0){bx=bG.split(".");bG=bx.shift();bx.sort()}if((!bA||b.event.customEvent[bG])&&!b.event.global[bG]){return}bv=typeof bv==="object"?bv[b.expando]?bv:new b.Event(bG,bv):new b.Event(bG);bv.type=bG;bv.isTrigger=true;bv.exclusive=bw;bv.namespace=bx.join(".");bv.namespace_re=bv.namespace?new RegExp("(^|\\.)"+bx.join("\\.(?:.*\\.)?")+"(\\.|$)"):null;by=bG.indexOf(":")<0?"on"+bG:"";if(!bA){e=b.cache;for(bC in e){if(e[bC].events&&e[bC].events[bG]){b.event.trigger(bv,bD,e[bC].handle.elem,true)}}return}bv.result=L;if(!bv.target){bv.target=bA}bD=bD!=null?b.makeArray(bD):[];bD.unshift(bv);bF=b.event.special[bG]||{};if(bF.trigger&&bF.trigger.apply(bA,bD)===false){return}bB=[[bA,bF.bindType||bG]];if(!bJ&&!bF.noBubble&&!b.isWindow(bA)){bI=bF.delegateType||bG;bH=T.test(bI+bG)?bA:bA.parentNode;bz=null;for(;bH;bH=bH.parentNode){bB.push([bH,bI]);bz=bH}if(bz&&bz===bA.ownerDocument){bB.push([bz.defaultView||bz.parentWindow||bd,bI])}}for(bC=0;bC<bB.length&&!bv.isPropagationStopped();bC++){bH=bB[bC][0];bv.type=bB[bC][1];bE=(b._data(bH,"events")||{})[bv.type]&&b._data(bH,"handle");if(bE){bE.apply(bH,bD)}bE=by&&bH[by];if(bE&&b.acceptData(bH)&&bE.apply(bH,bD)===false){bv.preventDefault()}}bv.type=bG;if(!bJ&&!bv.isDefaultPrevented()){if((!bF._default||bF._default.apply(bA.ownerDocument,bD)===false)&&!(bG==="click"&&b.nodeName(bA,"a"))&&b.acceptData(bA)){if(by&&bA[bG]&&((bG!=="focus"&&bG!=="blur")||bv.target.offsetWidth!==0)&&!b.isWindow(bA)){bz=bA[by];
if(bz){bA[by]=null}b.event.triggered=bG;bA[bG]();b.event.triggered=L;if(bz){bA[by]=bz}}}}return bv.result},dispatch:function(bH){bH=b.event.fix(bH||bd.event);var bD=((b._data(this,"events")||{})[bH.type]||[]),bC=bD.delegateCount,bx=[].slice.call(arguments,0),bE=!bH.exclusive&&!bH.namespace,bz=b.event.special[bH.type]||{},bv=[],bJ,bG,by,bA,bK,bI,bB,bw,e,bF,bL;bx[0]=bH;bH.delegateTarget=this;if(bz.preDispatch&&bz.preDispatch.call(this,bH)===false){return}if(bC&&!(bH.button&&bH.type==="click")){bA=b(this);bA.context=this.ownerDocument||this;for(by=bH.target;by!=this;by=by.parentNode||this){if(by.disabled!==true){bI={};bw=[];bA[0]=by;for(bJ=0;bJ<bC;bJ++){e=bD[bJ];bF=e.selector;if(bI[bF]===L){bI[bF]=(e.quick?j(by,e.quick):bA.is(bF))}if(bI[bF]){bw.push(e)}}if(bw.length){bv.push({elem:by,matches:bw})}}}}if(bD.length>bC){bv.push({elem:this,matches:bD.slice(bC)})}for(bJ=0;bJ<bv.length&&!bH.isPropagationStopped();bJ++){bB=bv[bJ];bH.currentTarget=bB.elem;for(bG=0;bG<bB.matches.length&&!bH.isImmediatePropagationStopped();bG++){e=bB.matches[bG];if(bE||(!bH.namespace&&!e.namespace)||bH.namespace_re&&bH.namespace_re.test(e.namespace)){bH.data=e.data;bH.handleObj=e;bK=((b.event.special[e.origType]||{}).handle||e.handler).apply(bB.elem,bx);if(bK!==L){bH.result=bK;if(bK===false){bH.preventDefault();bH.stopPropagation()}}}}}if(bz.postDispatch){bz.postDispatch.call(this,bH)}return bH.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(bv,e){if(bv.which==null){bv.which=e.charCode!=null?e.charCode:e.keyCode}return bv}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(bx,bw){var by,bz,e,bv=bw.button,bA=bw.fromElement;if(bx.pageX==null&&bw.clientX!=null){by=bx.target.ownerDocument||av;bz=by.documentElement;e=by.body;bx.pageX=bw.clientX+(bz&&bz.scrollLeft||e&&e.scrollLeft||0)-(bz&&bz.clientLeft||e&&e.clientLeft||0);bx.pageY=bw.clientY+(bz&&bz.scrollTop||e&&e.scrollTop||0)-(bz&&bz.clientTop||e&&e.clientTop||0)}if(!bx.relatedTarget&&bA){bx.relatedTarget=bA===bx.target?bw.toElement:bA}if(!bx.which&&bv!==L){bx.which=(bv&1?1:(bv&2?3:(bv&4?2:0)))}return bx}},fix:function(bw){if(bw[b.expando]){return bw}var bv,bz,e=bw,bx=b.event.fixHooks[bw.type]||{},by=bx.props?this.props.concat(bx.props):this.props;bw=b.Event(e);for(bv=by.length;bv;){bz=by[--bv];bw[bz]=e[bz]}if(!bw.target){bw.target=e.srcElement||av}if(bw.target.nodeType===3){bw.target=bw.target.parentNode}if(bw.metaKey===L){bw.metaKey=bw.ctrlKey}return bx.filter?bx.filter(bw,e):bw},special:{ready:{setup:b.bindReady},load:{noBubble:true},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(bw,bv,e){if(b.isWindow(this)){this.onbeforeunload=e}},teardown:function(bv,e){if(this.onbeforeunload===e){this.onbeforeunload=null}}}},simulate:function(bw,by,bx,bv){var bz=b.extend(new b.Event(),bx,{type:bw,isSimulated:true,originalEvent:{}});if(bv){b.event.trigger(bz,null,by)}else{b.event.dispatch.call(by,bz)}if(bz.isDefaultPrevented()){bx.preventDefault()}}};b.event.handle=b.event.dispatch;b.removeEvent=av.removeEventListener?function(bv,e,bw){if(bv.removeEventListener){bv.removeEventListener(e,bw,false)}}:function(bv,e,bw){if(bv.detachEvent){bv.detachEvent("on"+e,bw)}};b.Event=function(bv,e){if(!(this instanceof b.Event)){return new b.Event(bv,e)}if(bv&&bv.type){this.originalEvent=bv;this.type=bv.type;this.isDefaultPrevented=(bv.defaultPrevented||bv.returnValue===false||bv.getPreventDefault&&bv.getPreventDefault())?i:bl}else{this.type=bv}if(e){b.extend(this,e)}this.timeStamp=bv&&bv.timeStamp||b.now();this[b.expando]=true};function bl(){return false}function i(){return true}b.Event.prototype={preventDefault:function(){this.isDefaultPrevented=i;var bv=this.originalEvent;if(!bv){return}if(bv.preventDefault){bv.preventDefault()}else{bv.returnValue=false}},stopPropagation:function(){this.isPropagationStopped=i;var bv=this.originalEvent;if(!bv){return}if(bv.stopPropagation){bv.stopPropagation()}bv.cancelBubble=true},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=i;this.stopPropagation()},isDefaultPrevented:bl,isPropagationStopped:bl,isImmediatePropagationStopped:bl};b.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(bv,e){b.event.special[bv]={delegateType:e,bindType:e,handle:function(bz){var bB=this,bA=bz.relatedTarget,by=bz.handleObj,bw=by.selector,bx;if(!bA||(bA!==bB&&!b.contains(bB,bA))){bz.type=by.origType;bx=by.handler.apply(this,arguments);bz.type=e}return bx}}});if(!b.support.submitBubbles){b.event.special.submit={setup:function(){if(b.nodeName(this,"form")){return false}b.event.add(this,"click._submit keypress._submit",function(bx){var bw=bx.target,bv=b.nodeName(bw,"input")||b.nodeName(bw,"button")?bw.form:L;if(bv&&!bv._submit_attached){b.event.add(bv,"submit._submit",function(e){e._submit_bubble=true
});bv._submit_attached=true}})},postDispatch:function(e){if(e._submit_bubble){delete e._submit_bubble;if(this.parentNode&&!e.isTrigger){b.event.simulate("submit",this.parentNode,e,true)}}},teardown:function(){if(b.nodeName(this,"form")){return false}b.event.remove(this,"._submit")}}}if(!b.support.changeBubbles){b.event.special.change={setup:function(){if(be.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio"){b.event.add(this,"propertychange._change",function(e){if(e.originalEvent.propertyName==="checked"){this._just_changed=true}});b.event.add(this,"click._change",function(e){if(this._just_changed&&!e.isTrigger){this._just_changed=false;b.event.simulate("change",this,e,true)}})}return false}b.event.add(this,"beforeactivate._change",function(bw){var bv=bw.target;if(be.test(bv.nodeName)&&!bv._change_attached){b.event.add(bv,"change._change",function(e){if(this.parentNode&&!e.isSimulated&&!e.isTrigger){b.event.simulate("change",this.parentNode,e,true)}});bv._change_attached=true}})},handle:function(bv){var e=bv.target;if(this!==e||bv.isSimulated||bv.isTrigger||(e.type!=="radio"&&e.type!=="checkbox")){return bv.handleObj.handler.apply(this,arguments)}},teardown:function(){b.event.remove(this,"._change");return be.test(this.nodeName)}}}if(!b.support.focusinBubbles){b.each({focus:"focusin",blur:"focusout"},function(bx,e){var bv=0,bw=function(by){b.event.simulate(e,by.target,b.event.fix(by),true)};b.event.special[e]={setup:function(){if(bv++===0){av.addEventListener(bx,bw,true)}},teardown:function(){if(--bv===0){av.removeEventListener(bx,bw,true)}}}})}b.fn.extend({on:function(bw,e,bz,by,bv){var bA,bx;if(typeof bw==="object"){if(typeof e!=="string"){bz=bz||e;e=L}for(bx in bw){this.on(bx,e,bz,bw[bx],bv)}return this}if(bz==null&&by==null){by=e;bz=e=L}else{if(by==null){if(typeof e==="string"){by=bz;bz=L}else{by=bz;bz=e;e=L}}}if(by===false){by=bl}else{if(!by){return this}}if(bv===1){bA=by;by=function(bB){b().off(bB);return bA.apply(this,arguments)};by.guid=bA.guid||(bA.guid=b.guid++)}return this.each(function(){b.event.add(this,bw,by,bz,e)})},one:function(bv,e,bx,bw){return this.on(bv,e,bx,bw,1)},off:function(bw,e,by){if(bw&&bw.preventDefault&&bw.handleObj){var bv=bw.handleObj;b(bw.delegateTarget).off(bv.namespace?bv.origType+"."+bv.namespace:bv.origType,bv.selector,bv.handler);return this}if(typeof bw==="object"){for(var bx in bw){this.off(bx,e,bw[bx])}return this}if(e===false||typeof e==="function"){by=e;e=L}if(by===false){by=bl}return this.each(function(){b.event.remove(this,bw,by,e)})},bind:function(e,bw,bv){return this.on(e,null,bw,bv)},unbind:function(e,bv){return this.off(e,null,bv)},live:function(e,bw,bv){b(this.context).on(e,this.selector,bw,bv);return this},die:function(e,bv){b(this.context).off(e,this.selector||"**",bv);return this},delegate:function(e,bv,bx,bw){return this.on(bv,e,bx,bw)},undelegate:function(e,bv,bw){return arguments.length==1?this.off(e,"**"):this.off(bv,e,bw)},trigger:function(e,bv){return this.each(function(){b.event.trigger(e,bv,this)})},triggerHandler:function(e,bv){if(this[0]){return b.event.trigger(e,bv,this[0],true)}},toggle:function(bx){var bv=arguments,e=bx.guid||b.guid++,bw=0,by=function(bz){var bA=(b._data(this,"lastToggle"+bx.guid)||0)%bw;b._data(this,"lastToggle"+bx.guid,bA+1);bz.preventDefault();return bv[bA].apply(this,arguments)||false};by.guid=e;while(bw<bv.length){bv[bw++].guid=e}return this.click(by)},hover:function(e,bv){return this.mouseenter(e).mouseleave(bv||e)}});b.each(("blur focus focusin focusout load resize scroll unload click dblclick "+"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+"change select submit keydown keypress keyup error contextmenu").split(" "),function(bv,e){b.fn[e]=function(bx,bw){if(bw==null){bw=bx;bx=null}return arguments.length>0?this.on(e,null,bx,bw):this.trigger(e)};if(b.attrFn){b.attrFn[e]=true}if(aP.test(e)){b.event.fixHooks[e]=b.event.keyHooks}if(bg.test(e)){b.event.fixHooks[e]=b.event.mouseHooks}});
(function(){var bH=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,bC="sizcache"+(Math.random()+"").replace(".",""),bI=0,bL=Object.prototype.toString,bB=false,bA=true,bK=/\\/g,bO=/\r\n/g,bQ=/\W/;[0,0].sort(function(){bA=false;return 0});var by=function(bV,e,bY,bZ){bY=bY||[];e=e||av;var b1=e;if(e.nodeType!==1&&e.nodeType!==9){return[]}if(!bV||typeof bV!=="string"){return bY}var bS,b3,b6,bR,b2,b5,b4,bX,bU=true,bT=by.isXML(e),bW=[],b0=bV;do{bH.exec("");bS=bH.exec(b0);if(bS){b0=bS[3];bW.push(bS[1]);if(bS[2]){bR=bS[3];break}}}while(bS);if(bW.length>1&&bD.exec(bV)){if(bW.length===2&&bE.relative[bW[0]]){b3=bM(bW[0]+bW[1],e,bZ)}else{b3=bE.relative[bW[0]]?[e]:by(bW.shift(),e);while(bW.length){bV=bW.shift();if(bE.relative[bV]){bV+=bW.shift()
}b3=bM(bV,b3,bZ)}}}else{if(!bZ&&bW.length>1&&e.nodeType===9&&!bT&&bE.match.ID.test(bW[0])&&!bE.match.ID.test(bW[bW.length-1])){b2=by.find(bW.shift(),e,bT);e=b2.expr?by.filter(b2.expr,b2.set)[0]:b2.set[0]}if(e){b2=bZ?{expr:bW.pop(),set:bF(bZ)}:by.find(bW.pop(),bW.length===1&&(bW[0]==="~"||bW[0]==="+")&&e.parentNode?e.parentNode:e,bT);b3=b2.expr?by.filter(b2.expr,b2.set):b2.set;if(bW.length>0){b6=bF(b3)}else{bU=false}while(bW.length){b5=bW.pop();b4=b5;if(!bE.relative[b5]){b5=""}else{b4=bW.pop()}if(b4==null){b4=e}bE.relative[b5](b6,b4,bT)}}else{b6=bW=[]}}if(!b6){b6=b3}if(!b6){by.error(b5||bV)}if(bL.call(b6)==="[object Array]"){if(!bU){bY.push.apply(bY,b6)}else{if(e&&e.nodeType===1){for(bX=0;b6[bX]!=null;bX++){if(b6[bX]&&(b6[bX]===true||b6[bX].nodeType===1&&by.contains(e,b6[bX]))){bY.push(b3[bX])}}}else{for(bX=0;b6[bX]!=null;bX++){if(b6[bX]&&b6[bX].nodeType===1){bY.push(b3[bX])}}}}}else{bF(b6,bY)}if(bR){by(bR,b1,bY,bZ);by.uniqueSort(bY)}return bY};by.uniqueSort=function(bR){if(bJ){bB=bA;bR.sort(bJ);if(bB){for(var e=1;e<bR.length;e++){if(bR[e]===bR[e-1]){bR.splice(e--,1)}}}}return bR};by.matches=function(e,bR){return by(e,null,null,bR)};by.matchesSelector=function(e,bR){return by(bR,null,null,[e]).length>0};by.find=function(bX,e,bY){var bW,bS,bU,bT,bV,bR;if(!bX){return[]}for(bS=0,bU=bE.order.length;bS<bU;bS++){bV=bE.order[bS];if((bT=bE.leftMatch[bV].exec(bX))){bR=bT[1];bT.splice(1,1);if(bR.substr(bR.length-1)!=="\\"){bT[1]=(bT[1]||"").replace(bK,"");bW=bE.find[bV](bT,e,bY);if(bW!=null){bX=bX.replace(bE.match[bV],"");break}}}}if(!bW){bW=typeof e.getElementsByTagName!=="undefined"?e.getElementsByTagName("*"):[]}return{set:bW,expr:bX}};by.filter=function(b1,b0,b4,bU){var bW,e,bZ,b6,b3,bR,bT,bV,b2,bS=b1,b5=[],bY=b0,bX=b0&&b0[0]&&by.isXML(b0[0]);while(b1&&b0.length){for(bZ in bE.filter){if((bW=bE.leftMatch[bZ].exec(b1))!=null&&bW[2]){bR=bE.filter[bZ];bT=bW[1];e=false;bW.splice(1,1);if(bT.substr(bT.length-1)==="\\"){continue}if(bY===b5){b5=[]}if(bE.preFilter[bZ]){bW=bE.preFilter[bZ](bW,bY,b4,b5,bU,bX);if(!bW){e=b6=true}else{if(bW===true){continue}}}if(bW){for(bV=0;(b3=bY[bV])!=null;bV++){if(b3){b6=bR(b3,bW,bV,bY);b2=bU^b6;if(b4&&b6!=null){if(b2){e=true}else{bY[bV]=false}}else{if(b2){b5.push(b3);e=true}}}}}if(b6!==L){if(!b4){bY=b5}b1=b1.replace(bE.match[bZ],"");if(!e){return[]}break}}}if(b1===bS){if(e==null){by.error(b1)}else{break}}bS=b1}return bY};by.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)};var bw=by.getText=function(bU){var bS,bT,e=bU.nodeType,bR="";if(e){if(e===1||e===9||e===11){if(typeof bU.textContent==="string"){return bU.textContent}else{if(typeof bU.innerText==="string"){return bU.innerText.replace(bO,"")}else{for(bU=bU.firstChild;bU;bU=bU.nextSibling){bR+=bw(bU)}}}}else{if(e===3||e===4){return bU.nodeValue}}}else{for(bS=0;(bT=bU[bS]);bS++){if(bT.nodeType!==8){bR+=bw(bT)}}}return bR};var bE=by.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(e){return e.getAttribute("href")},type:function(e){return e.getAttribute("type")}},relative:{"+":function(bW,bR){var bT=typeof bR==="string",bV=bT&&!bQ.test(bR),bX=bT&&!bV;if(bV){bR=bR.toLowerCase()}for(var bS=0,e=bW.length,bU;bS<e;bS++){if((bU=bW[bS])){while((bU=bU.previousSibling)&&bU.nodeType!==1){}bW[bS]=bX||bU&&bU.nodeName.toLowerCase()===bR?bU||false:bU===bR}}if(bX){by.filter(bR,bW,true)}},">":function(bW,bR){var bV,bU=typeof bR==="string",bS=0,e=bW.length;if(bU&&!bQ.test(bR)){bR=bR.toLowerCase();for(;bS<e;bS++){bV=bW[bS];if(bV){var bT=bV.parentNode;bW[bS]=bT.nodeName.toLowerCase()===bR?bT:false}}}else{for(;bS<e;bS++){bV=bW[bS];if(bV){bW[bS]=bU?bV.parentNode:bV.parentNode===bR}}if(bU){by.filter(bR,bW,true)}}},"":function(bT,bR,bV){var bU,bS=bI++,e=bN;if(typeof bR==="string"&&!bQ.test(bR)){bR=bR.toLowerCase();bU=bR;e=bv}e("parentNode",bR,bS,bT,bU,bV)},"~":function(bT,bR,bV){var bU,bS=bI++,e=bN;if(typeof bR==="string"&&!bQ.test(bR)){bR=bR.toLowerCase();bU=bR;e=bv}e("previousSibling",bR,bS,bT,bU,bV)}},find:{ID:function(bR,bS,bT){if(typeof bS.getElementById!=="undefined"&&!bT){var e=bS.getElementById(bR[1]);return e&&e.parentNode?[e]:[]}},NAME:function(bS,bV){if(typeof bV.getElementsByName!=="undefined"){var bR=[],bU=bV.getElementsByName(bS[1]);for(var bT=0,e=bU.length;bT<e;bT++){if(bU[bT].getAttribute("name")===bS[1]){bR.push(bU[bT])}}return bR.length===0?null:bR}},TAG:function(e,bR){if(typeof bR.getElementsByTagName!=="undefined"){return bR.getElementsByTagName(e[1])
}}},preFilter:{CLASS:function(bT,bR,bS,e,bW,bX){bT=" "+bT[1].replace(bK,"")+" ";if(bX){return bT}for(var bU=0,bV;(bV=bR[bU])!=null;bU++){if(bV){if(bW^(bV.className&&(" "+bV.className+" ").replace(/[\t\n\r]/g," ").indexOf(bT)>=0)){if(!bS){e.push(bV)}}else{if(bS){bR[bU]=false}}}}return false},ID:function(e){return e[1].replace(bK,"")},TAG:function(bR,e){return bR[1].replace(bK,"").toLowerCase()},CHILD:function(e){if(e[1]==="nth"){if(!e[2]){by.error(e[0])}e[2]=e[2].replace(/^\+|\s*/g,"");var bR=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(e[2]==="even"&&"2n"||e[2]==="odd"&&"2n+1"||!/\D/.test(e[2])&&"0n+"+e[2]||e[2]);e[2]=(bR[1]+(bR[2]||1))-0;e[3]=bR[3]-0}else{if(e[2]){by.error(e[0])}}e[0]=bI++;return e},ATTR:function(bU,bR,bS,e,bV,bW){var bT=bU[1]=bU[1].replace(bK,"");if(!bW&&bE.attrMap[bT]){bU[1]=bE.attrMap[bT]}bU[4]=(bU[4]||bU[5]||"").replace(bK,"");if(bU[2]==="~="){bU[4]=" "+bU[4]+" "}return bU},PSEUDO:function(bU,bR,bS,e,bV){if(bU[1]==="not"){if((bH.exec(bU[3])||"").length>1||/^\w/.test(bU[3])){bU[3]=by(bU[3],null,null,bR)}else{var bT=by.filter(bU[3],bR,bS,true^bV);if(!bS){e.push.apply(e,bT)}return false}}else{if(bE.match.POS.test(bU[0])||bE.match.CHILD.test(bU[0])){return true}}return bU},POS:function(e){e.unshift(true);return e}},filters:{enabled:function(e){return e.disabled===false&&e.type!=="hidden"},disabled:function(e){return e.disabled===true},checked:function(e){return e.checked===true},selected:function(e){if(e.parentNode){e.parentNode.selectedIndex}return e.selected===true},parent:function(e){return !!e.firstChild},empty:function(e){return !e.firstChild},has:function(bS,bR,e){return !!by(e[3],bS).length},header:function(e){return(/h\d/i).test(e.nodeName)},text:function(bS){var e=bS.getAttribute("type"),bR=bS.type;return bS.nodeName.toLowerCase()==="input"&&"text"===bR&&(e===bR||e===null)},radio:function(e){return e.nodeName.toLowerCase()==="input"&&"radio"===e.type},checkbox:function(e){return e.nodeName.toLowerCase()==="input"&&"checkbox"===e.type},file:function(e){return e.nodeName.toLowerCase()==="input"&&"file"===e.type},password:function(e){return e.nodeName.toLowerCase()==="input"&&"password"===e.type},submit:function(bR){var e=bR.nodeName.toLowerCase();return(e==="input"||e==="button")&&"submit"===bR.type},image:function(e){return e.nodeName.toLowerCase()==="input"&&"image"===e.type},reset:function(bR){var e=bR.nodeName.toLowerCase();return(e==="input"||e==="button")&&"reset"===bR.type},button:function(bR){var e=bR.nodeName.toLowerCase();return e==="input"&&"button"===bR.type||e==="button"},input:function(e){return(/input|select|textarea|button/i).test(e.nodeName)},focus:function(e){return e===e.ownerDocument.activeElement}},setFilters:{first:function(bR,e){return e===0},last:function(bS,bR,e,bT){return bR===bT.length-1},even:function(bR,e){return e%2===0},odd:function(bR,e){return e%2===1},lt:function(bS,bR,e){return bR<e[3]-0},gt:function(bS,bR,e){return bR>e[3]-0},nth:function(bS,bR,e){return e[3]-0===bR},eq:function(bS,bR,e){return e[3]-0===bR}},filter:{PSEUDO:function(bS,bX,bW,bY){var e=bX[1],bR=bE.filters[e];if(bR){return bR(bS,bW,bX,bY)}else{if(e==="contains"){return(bS.textContent||bS.innerText||bw([bS])||"").indexOf(bX[3])>=0}else{if(e==="not"){var bT=bX[3];for(var bV=0,bU=bT.length;bV<bU;bV++){if(bT[bV]===bS){return false}}return true}else{by.error(e)}}}},CHILD:function(bS,bU){var bT,b0,bW,bZ,e,bV,bY,bX=bU[1],bR=bS;switch(bX){case"only":case"first":while((bR=bR.previousSibling)){if(bR.nodeType===1){return false}}if(bX==="first"){return true}bR=bS;case"last":while((bR=bR.nextSibling)){if(bR.nodeType===1){return false}}return true;case"nth":bT=bU[2];b0=bU[3];if(bT===1&&b0===0){return true}bW=bU[0];bZ=bS.parentNode;if(bZ&&(bZ[bC]!==bW||!bS.nodeIndex)){bV=0;for(bR=bZ.firstChild;bR;bR=bR.nextSibling){if(bR.nodeType===1){bR.nodeIndex=++bV}}bZ[bC]=bW}bY=bS.nodeIndex-b0;if(bT===0){return bY===0}else{return(bY%bT===0&&bY/bT>=0)}}},ID:function(bR,e){return bR.nodeType===1&&bR.getAttribute("id")===e},TAG:function(bR,e){return(e==="*"&&bR.nodeType===1)||!!bR.nodeName&&bR.nodeName.toLowerCase()===e},CLASS:function(bR,e){return(" "+(bR.className||bR.getAttribute("class"))+" ").indexOf(e)>-1},ATTR:function(bV,bT){var bS=bT[1],e=by.attr?by.attr(bV,bS):bE.attrHandle[bS]?bE.attrHandle[bS](bV):bV[bS]!=null?bV[bS]:bV.getAttribute(bS),bW=e+"",bU=bT[2],bR=bT[4];return e==null?bU==="!=":!bU&&by.attr?e!=null:bU==="="?bW===bR:bU==="*="?bW.indexOf(bR)>=0:bU==="~="?(" "+bW+" ").indexOf(bR)>=0:!bR?bW&&e!==false:bU==="!="?bW!==bR:bU==="^="?bW.indexOf(bR)===0:bU==="$="?bW.substr(bW.length-bR.length)===bR:bU==="|="?bW===bR||bW.substr(0,bR.length+1)===bR+"-":false},POS:function(bU,bR,bS,bV){var e=bR[2],bT=bE.setFilters[e];if(bT){return bT(bU,bS,bR,bV)}}}};var bD=bE.match.POS,bx=function(bR,e){return"\\"+(e-0+1)};for(var bz in bE.match){bE.match[bz]=new RegExp(bE.match[bz].source+(/(?![^\[]*\])(?![^\(]*\))/.source));bE.leftMatch[bz]=new RegExp(/(^(?:.|\r|\n)*?)/.source+bE.match[bz].source.replace(/\\(\d+)/g,bx))}bE.match.globalPOS=bD;
var bF=function(bR,e){bR=Array.prototype.slice.call(bR,0);if(e){e.push.apply(e,bR);return e}return bR};try{Array.prototype.slice.call(av.documentElement.childNodes,0)[0].nodeType}catch(bP){bF=function(bU,bT){var bS=0,bR=bT||[];if(bL.call(bU)==="[object Array]"){Array.prototype.push.apply(bR,bU)}else{if(typeof bU.length==="number"){for(var e=bU.length;bS<e;bS++){bR.push(bU[bS])}}else{for(;bU[bS];bS++){bR.push(bU[bS])}}}return bR}}var bJ,bG;if(av.documentElement.compareDocumentPosition){bJ=function(bR,e){if(bR===e){bB=true;return 0}if(!bR.compareDocumentPosition||!e.compareDocumentPosition){return bR.compareDocumentPosition?-1:1}return bR.compareDocumentPosition(e)&4?-1:1}}else{bJ=function(bY,bX){if(bY===bX){bB=true;return 0}else{if(bY.sourceIndex&&bX.sourceIndex){return bY.sourceIndex-bX.sourceIndex}}var bV,bR,bS=[],e=[],bU=bY.parentNode,bW=bX.parentNode,bZ=bU;if(bU===bW){return bG(bY,bX)}else{if(!bU){return -1}else{if(!bW){return 1}}}while(bZ){bS.unshift(bZ);bZ=bZ.parentNode}bZ=bW;while(bZ){e.unshift(bZ);bZ=bZ.parentNode}bV=bS.length;bR=e.length;for(var bT=0;bT<bV&&bT<bR;bT++){if(bS[bT]!==e[bT]){return bG(bS[bT],e[bT])}}return bT===bV?bG(bY,e[bT],-1):bG(bS[bT],bX,1)};bG=function(bR,e,bS){if(bR===e){return bS}var bT=bR.nextSibling;while(bT){if(bT===e){return -1}bT=bT.nextSibling}return 1}}(function(){var bR=av.createElement("div"),bS="script"+(new Date()).getTime(),e=av.documentElement;bR.innerHTML="<a name='"+bS+"'/>";e.insertBefore(bR,e.firstChild);if(av.getElementById(bS)){bE.find.ID=function(bU,bV,bW){if(typeof bV.getElementById!=="undefined"&&!bW){var bT=bV.getElementById(bU[1]);return bT?bT.id===bU[1]||typeof bT.getAttributeNode!=="undefined"&&bT.getAttributeNode("id").nodeValue===bU[1]?[bT]:L:[]}};bE.filter.ID=function(bV,bT){var bU=typeof bV.getAttributeNode!=="undefined"&&bV.getAttributeNode("id");return bV.nodeType===1&&bU&&bU.nodeValue===bT}}e.removeChild(bR);e=bR=null})();(function(){var e=av.createElement("div");e.appendChild(av.createComment(""));if(e.getElementsByTagName("*").length>0){bE.find.TAG=function(bR,bV){var bU=bV.getElementsByTagName(bR[1]);if(bR[1]==="*"){var bT=[];for(var bS=0;bU[bS];bS++){if(bU[bS].nodeType===1){bT.push(bU[bS])}}bU=bT}return bU}}e.innerHTML="<a href='#'></a>";if(e.firstChild&&typeof e.firstChild.getAttribute!=="undefined"&&e.firstChild.getAttribute("href")!=="#"){bE.attrHandle.href=function(bR){return bR.getAttribute("href",2)}}e=null})();if(av.querySelectorAll){(function(){var e=by,bT=av.createElement("div"),bS="__sizzle__";bT.innerHTML="<p class='TEST'></p>";if(bT.querySelectorAll&&bT.querySelectorAll(".TEST").length===0){return}by=function(b4,bV,bZ,b3){bV=bV||av;if(!b3&&!by.isXML(bV)){var b2=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b4);if(b2&&(bV.nodeType===1||bV.nodeType===9)){if(b2[1]){return bF(bV.getElementsByTagName(b4),bZ)}else{if(b2[2]&&bE.find.CLASS&&bV.getElementsByClassName){return bF(bV.getElementsByClassName(b2[2]),bZ)}}}if(bV.nodeType===9){if(b4==="body"&&bV.body){return bF([bV.body],bZ)}else{if(b2&&b2[3]){var bY=bV.getElementById(b2[3]);if(bY&&bY.parentNode){if(bY.id===b2[3]){return bF([bY],bZ)}}else{return bF([],bZ)}}}try{return bF(bV.querySelectorAll(b4),bZ)}catch(b0){}}else{if(bV.nodeType===1&&bV.nodeName.toLowerCase()!=="object"){var bW=bV,bX=bV.getAttribute("id"),bU=bX||bS,b6=bV.parentNode,b5=/^\s*[+~]/.test(b4);if(!bX){bV.setAttribute("id",bU)}else{bU=bU.replace(/'/g,"\\$&")}if(b5&&b6){bV=bV.parentNode}try{if(!b5||b6){return bF(bV.querySelectorAll("[id='"+bU+"'] "+b4),bZ)}}catch(b1){}finally{if(!bX){bW.removeAttribute("id")}}}}}return e(b4,bV,bZ,b3)};for(var bR in e){by[bR]=e[bR]}bT=null})()}(function(){var e=av.documentElement,bS=e.matchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.msMatchesSelector;if(bS){var bU=!bS.call(av.createElement("div"),"div"),bR=false;try{bS.call(av.documentElement,"[test!='']:sizzle")}catch(bT){bR=true}by.matchesSelector=function(bW,bY){bY=bY.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!by.isXML(bW)){try{if(bR||!bE.match.PSEUDO.test(bY)&&!/!=/.test(bY)){var bV=bS.call(bW,bY);if(bV||!bU||bW.document&&bW.document.nodeType!==11){return bV}}}catch(bX){}}return by(bY,null,null,[bW]).length>0}}})();(function(){var e=av.createElement("div");e.innerHTML="<div class='test e'></div><div class='test'></div>";if(!e.getElementsByClassName||e.getElementsByClassName("e").length===0){return}e.lastChild.className="e";if(e.getElementsByClassName("e").length===1){return}bE.order.splice(1,0,"CLASS");bE.find.CLASS=function(bR,bS,bT){if(typeof bS.getElementsByClassName!=="undefined"&&!bT){return bS.getElementsByClassName(bR[1])}};e=null})();function bv(bR,bW,bV,bZ,bX,bY){for(var bT=0,bS=bZ.length;bT<bS;bT++){var e=bZ[bT];if(e){var bU=false;e=e[bR];while(e){if(e[bC]===bV){bU=bZ[e.sizset];break}if(e.nodeType===1&&!bY){e[bC]=bV;e.sizset=bT}if(e.nodeName.toLowerCase()===bW){bU=e;break}e=e[bR]}bZ[bT]=bU}}}function bN(bR,bW,bV,bZ,bX,bY){for(var bT=0,bS=bZ.length;bT<bS;bT++){var e=bZ[bT];if(e){var bU=false;e=e[bR];while(e){if(e[bC]===bV){bU=bZ[e.sizset];
break}if(e.nodeType===1){if(!bY){e[bC]=bV;e.sizset=bT}if(typeof bW!=="string"){if(e===bW){bU=true;break}}else{if(by.filter(bW,[e]).length>0){bU=e;break}}}e=e[bR]}bZ[bT]=bU}}}if(av.documentElement.contains){by.contains=function(bR,e){return bR!==e&&(bR.contains?bR.contains(e):true)}}else{if(av.documentElement.compareDocumentPosition){by.contains=function(bR,e){return !!(bR.compareDocumentPosition(e)&16)}}else{by.contains=function(){return false}}}by.isXML=function(e){var bR=(e?e.ownerDocument||e:0).documentElement;return bR?bR.nodeName!=="HTML":false};var bM=function(bS,e,bW){var bV,bX=[],bU="",bY=e.nodeType?[e]:e;while((bV=bE.match.PSEUDO.exec(bS))){bU+=bV[0];bS=bS.replace(bE.match.PSEUDO,"")}bS=bE.relative[bS]?bS+"*":bS;for(var bT=0,bR=bY.length;bT<bR;bT++){by(bS,bY[bT],bX,bW)}return by.filter(bU,bX)};by.attr=b.attr;by.selectors.attrMap={};b.find=by;b.expr=by.selectors;b.expr[":"]=b.expr.filters;b.unique=by.uniqueSort;b.text=by.getText;b.isXMLDoc=by.isXML;b.contains=by.contains})();var ab=/Until$/,aq=/^(?:parents|prevUntil|prevAll)/,bb=/,/,bp=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,H=b.expr.match.globalPOS,ay={children:true,contents:true,next:true,prev:true};b.fn.extend({find:function(e){var bw=this,by,bv;if(typeof e!=="string"){return b(e).filter(function(){for(by=0,bv=bw.length;by<bv;by++){if(b.contains(bw[by],this)){return true}}})}var bx=this.pushStack("","find",e),bA,bB,bz;for(by=0,bv=this.length;by<bv;by++){bA=bx.length;b.find(e,this[by],bx);if(by>0){for(bB=bA;bB<bx.length;bB++){for(bz=0;bz<bA;bz++){if(bx[bz]===bx[bB]){bx.splice(bB--,1);break}}}}}return bx},has:function(bv){var e=b(bv);return this.filter(function(){for(var bx=0,bw=e.length;bx<bw;bx++){if(b.contains(this,e[bx])){return true}}})},not:function(e){return this.pushStack(aH(this,e,false),"not",e)},filter:function(e){return this.pushStack(aH(this,e,true),"filter",e)},is:function(e){return !!e&&(typeof e==="string"?H.test(e)?b(e,this.context).index(this[0])>=0:b.filter(e,this).length>0:this.filter(e).length>0)},closest:function(by,bx){var bv=[],bw,e,bz=this[0];if(b.isArray(by)){var bB=1;while(bz&&bz.ownerDocument&&bz!==bx){for(bw=0;bw<by.length;bw++){if(b(bz).is(by[bw])){bv.push({selector:by[bw],elem:bz,level:bB})}}bz=bz.parentNode;bB++}return bv}var bA=H.test(by)||typeof by!=="string"?b(by,bx||this.context):0;for(bw=0,e=this.length;bw<e;bw++){bz=this[bw];while(bz){if(bA?bA.index(bz)>-1:b.find.matchesSelector(bz,by)){bv.push(bz);break}else{bz=bz.parentNode;if(!bz||!bz.ownerDocument||bz===bx||bz.nodeType===11){break}}}}bv=bv.length>1?b.unique(bv):bv;return this.pushStack(bv,"closest",by)},index:function(e){if(!e){return(this[0]&&this[0].parentNode)?this.prevAll().length:-1}if(typeof e==="string"){return b.inArray(this[0],b(e))}return b.inArray(e.jquery?e[0]:e,this)},add:function(e,bv){var bx=typeof e==="string"?b(e,bv):b.makeArray(e&&e.nodeType?[e]:e),bw=b.merge(this.get(),bx);return this.pushStack(B(bx[0])||B(bw[0])?bw:b.unique(bw))},andSelf:function(){return this.add(this.prevObject)}});function B(e){return !e||!e.parentNode||e.parentNode.nodeType===11}b.each({parent:function(bv){var e=bv.parentNode;return e&&e.nodeType!==11?e:null},parents:function(e){return b.dir(e,"parentNode")},parentsUntil:function(bv,e,bw){return b.dir(bv,"parentNode",bw)},next:function(e){return b.nth(e,2,"nextSibling")},prev:function(e){return b.nth(e,2,"previousSibling")},nextAll:function(e){return b.dir(e,"nextSibling")},prevAll:function(e){return b.dir(e,"previousSibling")},nextUntil:function(bv,e,bw){return b.dir(bv,"nextSibling",bw)},prevUntil:function(bv,e,bw){return b.dir(bv,"previousSibling",bw)},siblings:function(e){return b.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return b.sibling(e.firstChild)},contents:function(e){return b.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:b.makeArray(e.childNodes)}},function(e,bv){b.fn[e]=function(by,bw){var bx=b.map(this,bv,by);if(!ab.test(e)){bw=by}if(bw&&typeof bw==="string"){bx=b.filter(bw,bx)}bx=this.length>1&&!ay[e]?b.unique(bx):bx;if((this.length>1||bb.test(bw))&&aq.test(e)){bx=bx.reverse()}return this.pushStack(bx,e,P.call(arguments).join(","))}});b.extend({filter:function(bw,e,bv){if(bv){bw=":not("+bw+")"}return e.length===1?b.find.matchesSelector(e[0],bw)?[e[0]]:[]:b.find.matches(bw,e)},dir:function(bw,bv,by){var e=[],bx=bw[bv];while(bx&&bx.nodeType!==9&&(by===L||bx.nodeType!==1||!b(bx).is(by))){if(bx.nodeType===1){e.push(bx)}bx=bx[bv]}return e},nth:function(by,e,bw,bx){e=e||1;var bv=0;for(;by;by=by[bw]){if(by.nodeType===1&&++bv===e){break}}return by},sibling:function(bw,bv){var e=[];for(;bw;bw=bw.nextSibling){if(bw.nodeType===1&&bw!==bv){e.push(bw)}}return e}});function aH(bx,bw,e){bw=bw||0;if(b.isFunction(bw)){return b.grep(bx,function(bz,by){var bA=!!bw.call(bz,by,bz);return bA===e})}else{if(bw.nodeType){return b.grep(bx,function(bz,by){return(bz===bw)===e})}else{if(typeof bw==="string"){var bv=b.grep(bx,function(by){return by.nodeType===1});if(bp.test(bw)){return b.filter(bw,bv,!e)
}else{bw=b.filter(bw,bv)}}}}return b.grep(bx,function(bz,by){return(b.inArray(bz,bw)>=0)===e})}function a(e){var bw=aS.split("|"),bv=e.createDocumentFragment();if(bv.createElement){while(bw.length){bv.createElement(bw.pop())}}return bv}var aS="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|"+"header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",ah=/ jQuery\d+="(?:\d+|null)"/g,ar=/^\s+/,R=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,d=/<([\w:]+)/,v=/<tbody/i,W=/<|&#?\w+;/,ae=/<(?:script|style)/i,O=/<(?:script|object|embed|option|style)/i,ai=new RegExp("<(?:"+aS+")[\\s/>]","i"),o=/checked\s*(?:[^=]|=\s*.checked.)/i,bn=/\/(java|ecma)script/i,aO=/^\s*<!(?:\[CDATA\[|\-\-)/,ax={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},ac=a(av);ax.optgroup=ax.option;ax.tbody=ax.tfoot=ax.colgroup=ax.caption=ax.thead;ax.th=ax.td;if(!b.support.htmlSerialize){ax._default=[1,"div<div>","</div>"]}b.fn.extend({text:function(e){return b.access(this,function(bv){return bv===L?b.text(this):this.empty().append((this[0]&&this[0].ownerDocument||av).createTextNode(bv))},null,e,arguments.length)},wrapAll:function(e){if(b.isFunction(e)){return this.each(function(bw){b(this).wrapAll(e.call(this,bw))})}if(this[0]){var bv=b(e,this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){bv.insertBefore(this[0])}bv.map(function(){var bw=this;while(bw.firstChild&&bw.firstChild.nodeType===1){bw=bw.firstChild}return bw}).append(this)}return this},wrapInner:function(e){if(b.isFunction(e)){return this.each(function(bv){b(this).wrapInner(e.call(this,bv))})}return this.each(function(){var bv=b(this),bw=bv.contents();if(bw.length){bw.wrapAll(e)}else{bv.append(e)}})},wrap:function(e){var bv=b.isFunction(e);return this.each(function(bw){b(this).wrapAll(bv?e.call(this,bw):e)})},unwrap:function(){return this.parent().each(function(){if(!b.nodeName(this,"body")){b(this).replaceWith(this.childNodes)}}).end()},append:function(){return this.domManip(arguments,true,function(e){if(this.nodeType===1){this.appendChild(e)}})},prepend:function(){return this.domManip(arguments,true,function(e){if(this.nodeType===1){this.insertBefore(e,this.firstChild)}})},before:function(){if(this[0]&&this[0].parentNode){return this.domManip(arguments,false,function(bv){this.parentNode.insertBefore(bv,this)})}else{if(arguments.length){var e=b.clean(arguments);e.push.apply(e,this.toArray());return this.pushStack(e,"before",arguments)}}},after:function(){if(this[0]&&this[0].parentNode){return this.domManip(arguments,false,function(bv){this.parentNode.insertBefore(bv,this.nextSibling)})}else{if(arguments.length){var e=this.pushStack(this,"after",arguments);e.push.apply(e,b.clean(arguments));return e}}},remove:function(e,bx){for(var bv=0,bw;(bw=this[bv])!=null;bv++){if(!e||b.filter(e,[bw]).length){if(!bx&&bw.nodeType===1){b.cleanData(bw.getElementsByTagName("*"));b.cleanData([bw])}if(bw.parentNode){bw.parentNode.removeChild(bw)}}}return this},empty:function(){for(var e=0,bv;(bv=this[e])!=null;e++){if(bv.nodeType===1){b.cleanData(bv.getElementsByTagName("*"))}while(bv.firstChild){bv.removeChild(bv.firstChild)}}return this},clone:function(bv,e){bv=bv==null?false:bv;e=e==null?bv:e;return this.map(function(){return b.clone(this,bv,e)})},html:function(e){return b.access(this,function(by){var bx=this[0]||{},bw=0,bv=this.length;if(by===L){return bx.nodeType===1?bx.innerHTML.replace(ah,""):null}if(typeof by==="string"&&!ae.test(by)&&(b.support.leadingWhitespace||!ar.test(by))&&!ax[(d.exec(by)||["",""])[1].toLowerCase()]){by=by.replace(R,"<$1></$2>");try{for(;bw<bv;bw++){bx=this[bw]||{};if(bx.nodeType===1){b.cleanData(bx.getElementsByTagName("*"));bx.innerHTML=by}}bx=0}catch(bz){}}if(bx){this.empty().append(by)}},null,e,arguments.length)},replaceWith:function(e){if(this[0]&&this[0].parentNode){if(b.isFunction(e)){return this.each(function(bx){var bw=b(this),bv=bw.html();bw.replaceWith(e.call(this,bx,bv))})}if(typeof e!=="string"){e=b(e).detach()}return this.each(function(){var bw=this.nextSibling,bv=this.parentNode;b(this).remove();if(bw){b(bw).before(e)}else{b(bv).append(e)}})}else{return this.length?this.pushStack(b(b.isFunction(e)?e():e),"replaceWith",e):this}},detach:function(e){console.log(e);return this.remove(e,true)},domManip:function(bB,bF,bE){var bx,by,bA,bD,bC=bB[0],bv=[];if(!b.support.checkClone&&arguments.length===3&&typeof bC==="string"&&o.test(bC)){return this.each(function(){b(this).domManip(bB,bF,bE,true)})}if(b.isFunction(bC)){return this.each(function(bH){var bG=b(this);bB[0]=bC.call(this,bH,bF?bG.html():L);bG.domManip(bB,bF,bE)})}if(this[0]){bD=bC&&bC.parentNode;if(b.support.parentNode&&bD&&bD.nodeType===11&&bD.childNodes.length===this.length){bx={fragment:bD}
}else{bx=b.buildFragment(bB,this,bv)}bA=bx.fragment;if(bA.childNodes.length===1){by=bA=bA.firstChild}else{by=bA.firstChild}if(by){bF=bF&&b.nodeName(by,"tr");for(var bw=0,e=this.length,bz=e-1;bw<e;bw++){bE.call(bF?bc(this[bw],by):this[bw],bx.cacheable||(e>1&&bw<bz)?b.clone(bA,true,true):bA)}}if(bv.length){b.each(bv,function(bG,bH){if(bH.src){b.ajax({type:"GET",global:false,url:bH.src,async:false,dataType:"script"})}else{b.globalEval((bH.text||bH.textContent||bH.innerHTML||"").replace(aO,"/*$0*/"))}if(bH.parentNode){bH.parentNode.removeChild(bH)}})}}return this}});function bc(e,bv){return b.nodeName(e,"table")?(e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody"))):e}function s(bB,bv){if(bv.nodeType!==1||!b.hasData(bB)){return}var by,bx,e,bA=b._data(bB),bz=b._data(bv,bA),bw=bA.events;if(bw){delete bz.handle;bz.events={};for(by in bw){for(bx=0,e=bw[by].length;bx<e;bx++){b.event.add(bv,by,bw[by][bx])}}}if(bz.data){bz.data=b.extend({},bz.data)}}function aj(bv,e){var bw;if(e.nodeType!==1){return}if(e.clearAttributes){e.clearAttributes()}if(e.mergeAttributes){e.mergeAttributes(bv)}bw=e.nodeName.toLowerCase();if(bw==="object"){e.outerHTML=bv.outerHTML}else{if(bw==="input"&&(bv.type==="checkbox"||bv.type==="radio")){if(bv.checked){e.defaultChecked=e.checked=bv.checked}if(e.value!==bv.value){e.value=bv.value}}else{if(bw==="option"){e.selected=bv.defaultSelected}else{if(bw==="input"||bw==="textarea"){e.defaultValue=bv.defaultValue}else{if(bw==="script"&&e.text!==bv.text){e.text=bv.text}}}}}e.removeAttribute(b.expando);e.removeAttribute("_submit_attached");e.removeAttribute("_change_attached")}b.buildFragment=function(bz,bx,bv){var by,e,bw,bA,bB=bz[0];if(bx&&bx[0]){bA=bx[0].ownerDocument||bx[0]}if(!bA.createDocumentFragment){bA=av}if(bz.length===1&&typeof bB==="string"&&bB.length<512&&bA===av&&bB.charAt(0)==="<"&&!O.test(bB)&&(b.support.checkClone||!o.test(bB))&&(b.support.html5Clone||!ai.test(bB))){e=true;bw=b.fragments[bB];if(bw&&bw!==1){by=bw}}if(!by){by=bA.createDocumentFragment();b.clean(bz,bA,by,bv)}if(e){b.fragments[bB]=bw?by:1}return{fragment:by,cacheable:e}};b.fragments={};b.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,bv){b.fn[e]=function(bw){var bz=[],bC=b(bw),bB=this.length===1&&this[0].parentNode;if(bB&&bB.nodeType===11&&bB.childNodes.length===1&&bC.length===1){bC[bv](this[0]);return this}else{for(var bA=0,bx=bC.length;bA<bx;bA++){var by=(bA>0?this.clone(true):this).get();b(bC[bA])[bv](by);bz=bz.concat(by)}return this.pushStack(bz,e,bC.selector)}}});function bh(e){if(typeof e.getElementsByTagName!=="undefined"){return e.getElementsByTagName("*")}else{if(typeof e.querySelectorAll!=="undefined"){return e.querySelectorAll("*")}else{return[]}}}function az(e){if(e.type==="checkbox"||e.type==="radio"){e.defaultChecked=e.checked}}function D(e){var bv=(e.nodeName||"").toLowerCase();if(bv==="input"){az(e)}else{if(bv!=="script"&&typeof e.getElementsByTagName!=="undefined"){b.grep(e.getElementsByTagName("input"),az)}}}function am(e){var bv=av.createElement("div");ac.appendChild(bv);bv.innerHTML=e.outerHTML;return bv.firstChild}b.extend({clone:function(by,bA,bw){var e,bv,bx,bz=b.support.html5Clone||b.isXMLDoc(by)||!ai.test("<"+by.nodeName+">")?by.cloneNode(true):am(by);if((!b.support.noCloneEvent||!b.support.noCloneChecked)&&(by.nodeType===1||by.nodeType===11)&&!b.isXMLDoc(by)){aj(by,bz);e=bh(by);bv=bh(bz);for(bx=0;e[bx];++bx){if(bv[bx]){aj(e[bx],bv[bx])}}}if(bA){s(by,bz);if(bw){e=bh(by);bv=bh(bz);for(bx=0;e[bx];++bx){s(e[bx],bv[bx])}}}e=bv=null;return bz},clean:function(bI,bw,bv,bx){var bA,bH,bD,bJ=[];bw=bw||av;if(typeof bw.createElement==="undefined"){bw=bw.ownerDocument||bw[0]&&bw[0].ownerDocument||av}for(var bE=0,bG;(bG=bI[bE])!=null;bE++){if(typeof bG==="number"){bG+=""}if(!bG){continue}if(typeof bG==="string"){if(!W.test(bG)){bG=bw.createTextNode(bG)}else{bG=bG.replace(R,"<$1></$2>");var bN=(d.exec(bG)||["",""])[1].toLowerCase(),bz=ax[bN]||ax._default,bK=bz[0],bB=bw.createElement("div"),bL=ac.childNodes,bM;if(bw===av){ac.appendChild(bB)}else{a(bw).appendChild(bB)}bB.innerHTML=bz[1]+bG+bz[2];while(bK--){bB=bB.lastChild}if(!b.support.tbody){var by=v.test(bG),e=bN==="table"&&!by?bB.firstChild&&bB.firstChild.childNodes:bz[1]==="<table>"&&!by?bB.childNodes:[];for(bD=e.length-1;bD>=0;--bD){if(b.nodeName(e[bD],"tbody")&&!e[bD].childNodes.length){e[bD].parentNode.removeChild(e[bD])}}}if(!b.support.leadingWhitespace&&ar.test(bG)){bB.insertBefore(bw.createTextNode(ar.exec(bG)[0]),bB.firstChild)}bG=bB.childNodes;if(bB){bB.parentNode.removeChild(bB);if(bL.length>0){bM=bL[bL.length-1];if(bM&&bM.parentNode){bM.parentNode.removeChild(bM)}}}}}var bF;if(!b.support.appendChecked){if(bG[0]&&typeof(bF=bG.length)==="number"){for(bD=0;bD<bF;bD++){D(bG[bD])}}else{D(bG)}}if(bG.nodeType){bJ.push(bG)}else{bJ=b.merge(bJ,bG)}}if(bv){bA=function(bO){return !bO.type||bn.test(bO.type)};for(bE=0;bJ[bE];bE++){bH=bJ[bE];if(bx&&b.nodeName(bH,"script")&&(!bH.type||bn.test(bH.type))){bx.push(bH.parentNode?bH.parentNode.removeChild(bH):bH)
}else{if(bH.nodeType===1){var bC=b.grep(bH.getElementsByTagName("script"),bA);bJ.splice.apply(bJ,[bE+1,0].concat(bC))}bv.appendChild(bH)}}}return bJ},cleanData:function(bv){var by,bw,e=b.cache,bB=b.event.special,bA=b.support.deleteExpando;for(var bz=0,bx;(bx=bv[bz])!=null;bz++){if(bx.nodeName&&b.noData[bx.nodeName.toLowerCase()]){continue}bw=bx[b.expando];if(bw){by=e[bw];if(by&&by.events){for(var bC in by.events){if(bB[bC]){b.event.remove(bx,bC)}else{b.removeEvent(bx,bC,by.handle)}}if(by.handle){by.handle.elem=null}}if(bA){delete bx[b.expando]}else{if(bx.removeAttribute){bx.removeAttribute(b.expando)}}delete e[bw]}}}});var al=/alpha\([^)]*\)/i,au=/opacity=([^)]*)/,y=/([A-Z]|^ms)/g,bo=/^[\-+]?(?:\d*\.)?\d+$/i,a1=/^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,I=/^([\-+])=([\-+.\de]+)/,aE=/^margin/,a9={position:"absolute",visibility:"hidden",display:"block"},G=["Top","Right","Bottom","Left"],Z,aJ,aY;b.fn.css=function(e,bv){if($(this).is("#layer443839A4830191257A65F2E96470A9D0")){console.log(e,bv);console.trace()}return b.access(this,function(bx,bw,by){return by!==L?b.style(bx,bw,by):b.css(bx,bw)},e,bv,arguments.length>1)};b.extend({cssHooks:{opacity:{get:function(bw,bv){if(bv){var e=Z(bw,"opacity");return e===""?"1":e}else{return bw.style.opacity}}}},cssNumber:{"fillOpacity":true,"fontWeight":true,"lineHeight":true,"opacity":true,"orphans":true,"widows":true,"zIndex":true,"zoom":true},cssProps:{"float":b.support.cssFloat?"cssFloat":"styleFloat"},style:function(bx,bw,bD,by){if(!bx||bx.nodeType===3||bx.nodeType===8||!bx.style){return}if($(bx).is("#layer8E786237F92D3E1D5D1896319EC165AD .fileicon")){console.log(bw,bD,by);console.trace()}var bB,bC,bz=b.camelCase(bw),bv=bx.style,bE=b.cssHooks[bz];bw=b.cssProps[bz]||bz;if(bD!==L){bC=typeof bD;if(bC==="string"&&(bB=I.exec(bD))){bD=(+(bB[1]+1)*+bB[2])+parseFloat(b.css(bx,bw));bC="number"}if(bD==null||bC==="number"&&isNaN(bD)){return}if(bC==="number"&&!b.cssNumber[bz]){bD+="px"}if(!bE||!("set" in bE)||(bD=bE.set(bx,bD))!==L){try{bv[bw]=bD}catch(bA){}}}else{if(bE&&"get" in bE&&(bB=bE.get(bx,false,by))!==L){return bB}return bv[bw]}},css:function(by,bx,bv){var bw,e;bx=b.camelCase(bx);e=b.cssHooks[bx];bx=b.cssProps[bx]||bx;if(bx==="cssFloat"){bx="float"}if(e&&"get" in e&&(bw=e.get(by,true,bv))!==L){return bw}else{if(Z){return Z(by,bx)}}},swap:function(by,bx,bz){var e={},bw,bv;for(bv in bx){e[bv]=by.style[bv];by.style[bv]=bx[bv]}bw=bz.call(by);for(bv in bx){by.style[bv]=e[bv]}return bw}});b.curCSS=b.css;if(av.defaultView&&av.defaultView.getComputedStyle){aJ=function(bA,bw){var bv,bz,e,by,bx=bA.style;bw=bw.replace(y,"-$1").toLowerCase();if((bz=bA.ownerDocument.defaultView)&&(e=bz.getComputedStyle(bA,null))){bv=e.getPropertyValue(bw);if(bv===""&&!b.contains(bA.ownerDocument.documentElement,bA)){bv=b.style(bA,bw)}}if(!b.support.pixelMargin&&e&&aE.test(bw)&&a1.test(bv)){by=bx.width;bx.width=bv;bv=e.width;bx.width=by}return bv}}if(av.documentElement.currentStyle){aY=function(bz,bw){var bA,e,by,bv=bz.currentStyle&&bz.currentStyle[bw],bx=bz.style;if(bv==null&&bx&&(by=bx[bw])){bv=by}if(a1.test(bv)){bA=bx.left;e=bz.runtimeStyle&&bz.runtimeStyle.left;if(e){bz.runtimeStyle.left=bz.currentStyle.left}bx.left=bw==="fontSize"?"1em":bv;bv=bx.pixelLeft+"px";bx.left=bA;if(e){bz.runtimeStyle.left=e}}return bv===""?"auto":bv}}Z=aJ||aY;function af(by,bw,bv){var bz=bw==="width"?by.offsetWidth:by.offsetHeight,bx=bw==="width"?1:0,e=4;if(bz>0){if(bv!=="border"){for(;bx<e;bx+=2){if(!bv){bz-=parseFloat(b.css(by,"padding"+G[bx]))||0}if(bv==="margin"){bz+=parseFloat(b.css(by,bv+G[bx]))||0}else{bz-=parseFloat(b.css(by,"border"+G[bx]+"Width"))||0}}}return bz+"px"}bz=Z(by,bw);if(bz<0||bz==null){bz=by.style[bw]}if(a1.test(bz)){return bz}bz=parseFloat(bz)||0;if(bv){for(;bx<e;bx+=2){bz+=parseFloat(b.css(by,"padding"+G[bx]))||0;if(bv!=="padding"){bz+=parseFloat(b.css(by,"border"+G[bx]+"Width"))||0}if(bv==="margin"){bz+=parseFloat(b.css(by,bv+G[bx]))||0}}}return bz+"px"}b.each(["height","width"],function(bv,e){b.cssHooks[e]={get:function(by,bx,bw){if(bx){if(by.offsetWidth!==0){return af(by,e,bw)}else{return b.swap(by,a9,function(){return af(by,e,bw)})}}},set:function(bw,bx){return bo.test(bx)?bx+"px":bx}}});if(!b.support.opacity){b.cssHooks.opacity={get:function(bv,e){return au.test((e&&bv.currentStyle?bv.currentStyle.filter:bv.style.filter)||"")?(parseFloat(RegExp.$1)/100)+"":e?"1":""},set:function(by,bz){var bx=by.style,bv=by.currentStyle,e=b.isNumeric(bz)?"alpha(opacity="+bz*100+")":"",bw=bv&&bv.filter||bx.filter||"";bx.zoom=1;if(bz>=1&&b.trim(bw.replace(al,""))===""){bx.removeAttribute("filter");if(bv&&!bv.filter){return}}bx.filter=al.test(bw)?bw.replace(al,e):bw+" "+e}}}b(function(){if(!b.support.reliableMarginRight){b.cssHooks.marginRight={get:function(bv,e){return b.swap(bv,{"display":"inline-block"},function(){if(e){return Z(bv,"margin-right")}else{return bv.style.marginRight}})}}}});if(b.expr&&b.expr.filters){b.expr.filters.hidden=function(bw){var bv=bw.offsetWidth,e=bw.offsetHeight;return(bv===0&&e===0)||(!b.support.reliableHiddenOffsets&&((bw.style&&bw.style.display)||b.css(bw,"display"))==="none")
};b.expr.filters.visible=function(e){return !b.expr.filters.hidden(e)}}b.each({margin:"",padding:"",border:"Width"},function(e,bv){b.cssHooks[e+bv]={expand:function(by){var bx,bz=typeof by==="string"?by.split(" "):[by],bw={};for(bx=0;bx<4;bx++){bw[e+G[bx]+bv]=bz[bx]||bz[bx-2]||bz[0]}return bw}}});var k=/%20/g,ap=/\[\]$/,bs=/\r?\n/g,bq=/#.*$/,aD=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,a0=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,aN=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,aR=/^(?:GET|HEAD)$/,c=/^\/\//,M=/\?/,a7=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,p=/^(?:select|textarea)/i,h=/\s+/,br=/([?&])_=[^&]*/,K=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,z=b.fn.load,aa={},q={},aF,r,aW=["*/"]+["*"];try{aF=bm.href}catch(aw){aF=av.createElement("a");aF.href="";aF=aF.href}r=K.exec(aF.toLowerCase())||[];function f(e){return function(by,bA){if(typeof by!=="string"){bA=by;by="*"}if(b.isFunction(bA)){var bx=by.toLowerCase().split(h),bw=0,bz=bx.length,bv,bB,bC;for(;bw<bz;bw++){bv=bx[bw];bC=/^\+/.test(bv);if(bC){bv=bv.substr(1)||"*"}bB=e[bv]=e[bv]||[];bB[bC?"unshift":"push"](bA)}}}}function aX(bv,bE,bz,bD,bB,bx){bB=bB||bE.dataTypes[0];bx=bx||{};bx[bB]=true;var bA=bv[bB],bw=0,e=bA?bA.length:0,by=(bv===aa),bC;for(;bw<e&&(by||!bC);bw++){bC=bA[bw](bE,bz,bD);if(typeof bC==="string"){if(!by||bx[bC]){bC=L}else{bE.dataTypes.unshift(bC);bC=aX(bv,bE,bz,bD,bC,bx)}}}if((by||!bC)&&!bx["*"]){bC=aX(bv,bE,bz,bD,"*",bx)}return bC}function an(bw,bx){var bv,e,by=b.ajaxSettings.flatOptions||{};for(bv in bx){if(bx[bv]!==L){(by[bv]?bw:(e||(e={})))[bv]=bx[bv]}}if(e){b.extend(true,bw,e)}}b.fn.extend({load:function(bw,bz,bA){if(typeof bw!=="string"&&z){return z.apply(this,arguments)}else{if(!this.length){return this}}var by=bw.indexOf(" ");if(by>=0){var e=bw.slice(by,bw.length);bw=bw.slice(0,by)}var bx="GET";if(bz){if(b.isFunction(bz)){bA=bz;bz=L}else{if(typeof bz==="object"){bz=b.param(bz,b.ajaxSettings.traditional);bx="POST"}}}var bv=this;b.ajax({url:bw,type:bx,dataType:"html",data:bz,complete:function(bC,bB,bD){bD=bC.responseText;if(bC.isResolved()){bC.done(function(bE){bD=bE});bv.html(e?b("<div>").append(bD.replace(a7,"")).find(e):bD)}if(bA){bv.each(bA,[bD,bB,bC])}}});return this},serialize:function(){return b.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?b.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||p.test(this.nodeName)||a0.test(this.type))}).map(function(e,bv){var bw=b(this).val();return bw==null?null:b.isArray(bw)?b.map(bw,function(by,bx){return{name:bv.name,value:by.replace(bs,"\r\n")}}):{name:bv.name,value:bw.replace(bs,"\r\n")}}).get()}});b.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(e,bv){b.fn[bv]=function(bw){return this.on(bv,bw)}});b.each(["get","post"],function(e,bv){b[bv]=function(bw,by,bz,bx){if(b.isFunction(by)){bx=bx||bz;bz=by;by=L}return b.ajax({type:bv,url:bw,data:by,success:bz,dataType:bx})}});b.extend({getScript:function(e,bv){return b.get(e,L,bv,"script")},getJSON:function(e,bv,bw){return b.get(e,bv,bw,"json")},ajaxSetup:function(bv,e){if(e){an(bv,b.ajaxSettings)}else{e=bv;bv=b.ajaxSettings}an(bv,e);return bv},ajaxSettings:{url:aF,isLocal:aN.test(r[1]),global:true,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:true,async:true,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":aW},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":bd.String,"text html":true,"text json":b.parseJSON,"text xml":b.parseXML},flatOptions:{context:true,url:true}},ajaxPrefilter:f(aa),ajaxTransport:f(q),ajax:function(bz,bx){if(typeof bz==="object"){bx=bz;bz=L}bx=bx||{};var bD=b.ajaxSetup({},bx),bS=bD.context||bD,bG=bS!==bD&&(bS.nodeType||bS instanceof b)?b(bS):b.event,bR=b.Deferred(),bN=b.Callbacks("once memory"),bB=bD.statusCode||{},bC,bH={},bO={},bQ,by,bL,bE,bI,bA=0,bw,bK,bJ={readyState:0,setRequestHeader:function(bT,bU){if(!bA){var e=bT.toLowerCase();bT=bO[e]=bO[e]||bT;bH[bT]=bU}return this},getAllResponseHeaders:function(){return bA===2?bQ:null},getResponseHeader:function(bT){var e;if(bA===2){if(!by){by={};while((e=aD.exec(bQ))){by[e[1].toLowerCase()]=e[2]}}e=by[bT.toLowerCase()]}return e===L?null:e},overrideMimeType:function(e){if(!bA){bD.mimeType=e}return this},abort:function(e){e=e||"abort";if(bL){bL.abort(e)}bF(0,e);return this}};function bF(bZ,bU,b0,bW){if(bA===2){return}bA=2;if(bE){clearTimeout(bE)}bL=L;bQ=bW||"";bJ.readyState=bZ>0?4:0;var bT,b4,b3,bX=bU,bY=b0?bk(bD,bJ,b0):L,bV,b2;if(bZ>=200&&bZ<300||bZ===304){if(bD.ifModified){if((bV=bJ.getResponseHeader("Last-Modified"))){b.lastModified[bC]=bV}if((b2=bJ.getResponseHeader("Etag"))){b.etag[bC]=b2}}if(bZ===304){bX="notmodified";bT=true}else{try{b4=F(bD,bY);bX="success";
bT=true}catch(b1){bX="parsererror";b3=b1}}}else{b3=bX;if(!bX||bZ){bX="error";if(bZ<0){bZ=0}}}bJ.status=bZ;bJ.statusText=""+(bU||bX);if(bT){bR.resolveWith(bS,[b4,bX,bJ])}else{bR.rejectWith(bS,[bJ,bX,b3])}bJ.statusCode(bB);bB=L;if(bw){bG.trigger("ajax"+(bT?"Success":"Error"),[bJ,bD,bT?b4:b3])}bN.fireWith(bS,[bJ,bX]);if(bw){bG.trigger("ajaxComplete",[bJ,bD]);if(!(--b.active)){b.event.trigger("ajaxStop")}}}bR.promise(bJ);bJ.success=bJ.done;bJ.error=bJ.fail;bJ.complete=bN.add;bJ.statusCode=function(bT){if(bT){var e;if(bA<2){for(e in bT){bB[e]=[bB[e],bT[e]]}}else{e=bT[bJ.status];bJ.then(e,e)}}return this};bD.url=((bz||bD.url)+"").replace(bq,"").replace(c,r[1]+"//");bD.dataTypes=b.trim(bD.dataType||"*").toLowerCase().split(h);if(bD.crossDomain==null){bI=K.exec(bD.url.toLowerCase());bD.crossDomain=!!(bI&&(bI[1]!=r[1]||bI[2]!=r[2]||(bI[3]||(bI[1]==="http:"?80:443))!=(r[3]||(r[1]==="http:"?80:443))))}if(bD.data&&bD.processData&&typeof bD.data!=="string"){bD.data=b.param(bD.data,bD.traditional)}aX(aa,bD,bx,bJ);if(bA===2){return false}bw=bD.global;bD.type=bD.type.toUpperCase();bD.hasContent=!aR.test(bD.type);if(bw&&b.active++===0){b.event.trigger("ajaxStart")}if(!bD.hasContent){if(bD.data){bD.url+=(M.test(bD.url)?"&":"?")+bD.data;delete bD.data}bC=bD.url;if(bD.cache===false){var bv=b.now(),bP=bD.url.replace(br,"$1_="+bv);bD.url=bP+((bP===bD.url)?(M.test(bD.url)?"&":"?")+"_="+bv:"")}}if(bD.data&&bD.hasContent&&bD.contentType!==false||bx.contentType){bJ.setRequestHeader("Content-Type",bD.contentType)}if(bD.ifModified){bC=bC||bD.url;if(b.lastModified[bC]){bJ.setRequestHeader("If-Modified-Since",b.lastModified[bC])}if(b.etag[bC]){bJ.setRequestHeader("If-None-Match",b.etag[bC])}}bJ.setRequestHeader("Accept",bD.dataTypes[0]&&bD.accepts[bD.dataTypes[0]]?bD.accepts[bD.dataTypes[0]]+(bD.dataTypes[0]!=="*"?", "+aW+"; q=0.01":""):bD.accepts["*"]);for(bK in bD.headers){bJ.setRequestHeader(bK,bD.headers[bK])}if(bD.beforeSend&&(bD.beforeSend.call(bS,bJ,bD)===false||bA===2)){bJ.abort();return false}for(bK in {success:1,error:1,complete:1}){bJ[bK](bD[bK])}bL=aX(q,bD,bx,bJ);if(!bL){bF(-1,"No Transport")}else{bJ.readyState=1;if(bw){bG.trigger("ajaxSend",[bJ,bD])}if(bD.async&&bD.timeout>0){bE=setTimeout(function(){bJ.abort("timeout")},bD.timeout)}try{bA=1;bL.send(bH,bF)}catch(bM){if(bA<2){bF(-1,bM)}else{throw bM}}}return bJ},param:function(e,bw){var bv=[],by=function(bz,bA){bA=b.isFunction(bA)?bA():bA;bv[bv.length]=encodeURIComponent(bz)+"="+encodeURIComponent(bA)};if(bw===L){bw=b.ajaxSettings.traditional}if(b.isArray(e)||(e.jquery&&!b.isPlainObject(e))){b.each(e,function(){by(this.name,this.value)})}else{for(var bx in e){u(bx,e[bx],bw,by)}}return bv.join("&").replace(k,"+")}});function u(bw,by,bv,bx){if(b.isArray(by)){b.each(by,function(bA,bz){if(bv||ap.test(bw)){bx(bw,bz)}else{u(bw+"["+(typeof bz==="object"?bA:"")+"]",bz,bv,bx)}})}else{if(!bv&&b.type(by)==="object"){for(var e in by){u(bw+"["+e+"]",by[e],bv,bx)}}else{bx(bw,by)}}}b.extend({active:0,lastModified:{},etag:{}});function bk(bD,bC,bz){var bv=bD.contents,bB=bD.dataTypes,bw=bD.responseFields,by,bA,bx,e;for(bA in bw){if(bA in bz){bC[bw[bA]]=bz[bA]}}while(bB[0]==="*"){bB.shift();if(by===L){by=bD.mimeType||bC.getResponseHeader("content-type")}}if(by){for(bA in bv){if(bv[bA]&&bv[bA].test(by)){bB.unshift(bA);break}}}if(bB[0] in bz){bx=bB[0]}else{for(bA in bz){if(!bB[0]||bD.converters[bA+" "+bB[0]]){bx=bA;break}if(!e){e=bA}}bx=bx||e}if(bx){if(bx!==bB[0]){bB.unshift(bx)}return bz[bx]}}function F(bH,bz){if(bH.dataFilter){bz=bH.dataFilter(bz,bH.dataType)}var bD=bH.dataTypes,bG={},bA,bE,bw=bD.length,bB,bC=bD[0],bx,by,bF,bv,e;for(bA=1;bA<bw;bA++){if(bA===1){for(bE in bH.converters){if(typeof bE==="string"){bG[bE.toLowerCase()]=bH.converters[bE]}}}bx=bC;bC=bD[bA];if(bC==="*"){bC=bx}else{if(bx!=="*"&&bx!==bC){by=bx+" "+bC;bF=bG[by]||bG["* "+bC];if(!bF){e=L;for(bv in bG){bB=bv.split(" ");if(bB[0]===bx||bB[0]==="*"){e=bG[bB[1]+" "+bC];if(e){bv=bG[bv];if(bv===true){bF=e}else{if(e===true){bF=bv}}break}}}}if(!(bF||e)){b.error("No conversion from "+by.replace(" "," to "))}if(bF!==true){bz=bF?bF(bz):e(bv(bz))}}}}return bz}var aC=b.now(),t=/(\=)\?(&|$)|\?\?/i;b.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return b.expando+"_"+(aC++)}});b.ajaxPrefilter("json jsonp",function(bD,bA,bC){var bx=(typeof bD.data==="string")&&/^application\/x\-www\-form\-urlencoded/.test(bD.contentType);if(bD.dataTypes[0]==="jsonp"||bD.jsonp!==false&&(t.test(bD.url)||bx&&t.test(bD.data))){var bB,bw=bD.jsonpCallback=b.isFunction(bD.jsonpCallback)?bD.jsonpCallback():bD.jsonpCallback,bz=bd[bw],e=bD.url,by=bD.data,bv="$1"+bw+"$2";if(bD.jsonp!==false){e=e.replace(t,bv);if(bD.url===e){if(bx){by=by.replace(t,bv)}if(bD.data===by){e+=(/\?/.test(e)?"&":"?")+bD.jsonp+"="+bw}}}bD.url=e;bD.data=by;bd[bw]=function(bE){bB=[bE]};bC.always(function(){bd[bw]=bz;if(bB&&b.isFunction(bz)){bd[bw](bB[0])}});bD.converters["script json"]=function(){if(!bB){b.error(bw+" was not called")}return bB[0]};bD.dataTypes[0]="json";return"script"}});b.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(e){b.globalEval(e);
return e}}});b.ajaxPrefilter("script",function(e){if(e.cache===L){e.cache=false}if(e.crossDomain){e.type="GET";e.global=false}});b.ajaxTransport("script",function(bw){if(bw.crossDomain){var e,bv=av.head||av.getElementsByTagName("head")[0]||av.documentElement;return{send:function(bx,by){e=av.createElement("script");e.async="async";if(bw.scriptCharset){e.charset=bw.scriptCharset}e.src=bw.url;e.onload=e.onreadystatechange=function(bA,bz){if(bz||!e.readyState||/loaded|complete/.test(e.readyState)){e.onload=e.onreadystatechange=null;if(bv&&e.parentNode){bv.removeChild(e)}e=L;if(!bz){by(200,"success")}}};bv.insertBefore(e,bv.firstChild)},abort:function(){if(e){e.onload(0,1)}}}}});var A=bd.ActiveXObject?function(){for(var e in N){N[e](0,1)}}:false,x=0,N;function aM(){try{return new bd.XMLHttpRequest()}catch(bv){}}function ak(){try{return new bd.ActiveXObject("Microsoft.XMLHTTP")}catch(bv){}}b.ajaxSettings.xhr=bd.ActiveXObject?function(){return !this.isLocal&&aM()||ak()}:aM;(function(e){b.extend(b.support,{ajax:!!e,cors:!!e&&("withCredentials" in e)})})(b.ajaxSettings.xhr());if(b.support.ajax){b.ajaxTransport(function(e){if(!e.crossDomain||b.support.cors){var bv;return{send:function(bB,bw){var bA=e.xhr(),bz,by;if(e.username){bA.open(e.type,e.url,e.async,e.username,e.password)}else{bA.open(e.type,e.url,e.async)}if(e.xhrFields){for(by in e.xhrFields){bA[by]=e.xhrFields[by]}}if(e.mimeType&&bA.overrideMimeType){bA.overrideMimeType(e.mimeType)}if(!e.crossDomain&&!bB["X-Requested-With"]){bB["X-Requested-With"]="XMLHttpRequest"}try{for(by in bB){bA.setRequestHeader(by,bB[by])}}catch(bx){}bA.send((e.hasContent&&e.data)||null);bv=function(bK,bE){var bF,bD,bC,bI,bH;try{if(bv&&(bE||bA.readyState===4)){bv=L;if(bz){bA.onreadystatechange=b.noop;if(A){delete N[bz]}}if(bE){if(bA.readyState!==4){bA.abort()}}else{bF=bA.status;bC=bA.getAllResponseHeaders();bI={};bH=bA.responseXML;if(bH&&bH.documentElement){bI.xml=bH}try{bI.text=bA.responseText}catch(bK){}try{bD=bA.statusText}catch(bJ){bD=""}if(!bF&&e.isLocal&&!e.crossDomain){bF=bI.text?200:404}else{if(bF===1223){bF=204}}}}}catch(bG){if(!bE){bw(-1,bG)}}if(bI){bw(bF,bD,bI,bC)}};if(!e.async||bA.readyState===4){bv()}else{bz=++x;if(A){if(!N){N={};b(bd).unload(A)}N[bz]=bv}bA.onreadystatechange=bv}},abort:function(){if(bv){bv(0,1)}}}}})}var Q={},ba,m,aB=/^(?:toggle|show|hide)$/,aU=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,a4,aI=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],a5;b.fn.extend({show:function(bx,bA,bz){var bw,by;if(bx||bx===0){return this.animate(a2("show",3),bx,bA,bz)}else{for(var bv=0,e=this.length;bv<e;bv++){bw=this[bv];if(bw.style){by=bw.style.display;if(!b._data(bw,"olddisplay")&&by==="none"){by=bw.style.display=""}if((by===""&&b.css(bw,"display")==="none")||!b.contains(bw.ownerDocument.documentElement,bw)){b._data(bw,"olddisplay",w(bw.nodeName))}}}for(bv=0;bv<e;bv++){bw=this[bv];if(bw.style){by=bw.style.display;if(by===""||by==="none"){bw.style.display=b._data(bw,"olddisplay")||""}}}return this}},hide:function(bx,bA,bz){if($(this).is(".parametercon")){console.log($(this).is(":visible"));console.trace()}if(bx||bx===0){return this.animate(a2("hide",3),bx,bA,bz)}else{var bw,by,bv=0,e=this.length;for(;bv<e;bv++){bw=this[bv];if(bw.style){by=b.css(bw,"display");if(by!=="none"&&!b._data(bw,"olddisplay")){b._data(bw,"olddisplay",by)}}}for(bv=0;bv<e;bv++){if(this[bv].style){this[bv].style.display="none"}}return this}},_toggle:b.fn.toggle,toggle:function(bw,bv,bx){var e=typeof bw==="boolean";if(b.isFunction(bw)&&b.isFunction(bv)){this._toggle.apply(this,arguments)}else{if(bw==null||e){this.each(function(){var by=e?bw:b(this).is(":hidden");b(this)[by?"show":"hide"]()})}else{this.animate(a2("toggle",3),bw,bv,bx)}}return this},fadeTo:function(e,bx,bw,bv){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:bx},e,bw,bv)},animate:function(bz,bw,by,bx){var e=b.speed(bw,by,bx);if(b.isEmptyObject(bz)){return this.each(e.complete,[false])}bz=b.extend({},bz);function bv(){if(e.queue===false){b._mark(this)}var bE=b.extend({},e),bL=this.nodeType===1,bJ=bL&&b(this).is(":hidden"),bB,bG,bD,bK,bN,bF,bI,bC,bH,bM,bA;bE.animatedProperties={};for(bD in bz){bB=b.camelCase(bD);if(bD!==bB){bz[bB]=bz[bD];delete bz[bD]}if((bN=b.cssHooks[bB])&&"expand" in bN){bF=bN.expand(bz[bB]);delete bz[bB];for(bD in bF){if(!(bD in bz)){bz[bD]=bF[bD]}}}}for(bB in bz){bG=bz[bB];if(b.isArray(bG)){bE.animatedProperties[bB]=bG[1];bG=bz[bB]=bG[0]}else{bE.animatedProperties[bB]=bE.specialEasing&&bE.specialEasing[bB]||bE.easing||"swing"}if(bG==="hide"&&bJ||bG==="show"&&!bJ){return bE.complete.call(this)}if(bL&&(bB==="height"||bB==="width")){bE.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY];if(b.css(this,"display")==="inline"&&b.css(this,"float")==="none"){if(!b.support.inlineBlockNeedsLayout||w(this.nodeName)==="inline"){this.style.display="inline-block"}else{this.style.zoom=1}}}}if(bE.overflow!=null){this.style.overflow="hidden"
}for(bD in bz){bK=new b.fx(this,bE,bD);bG=bz[bD];if(aB.test(bG)){bA=b._data(this,"toggle"+bD)||(bG==="toggle"?bJ?"show":"hide":0);if(bA){b._data(this,"toggle"+bD,bA==="show"?"hide":"show");bK[bA]()}else{bK[bG]()}}else{bI=aU.exec(bG);bC=bK.cur();if(bI){bH=parseFloat(bI[2]);bM=bI[3]||(b.cssNumber[bD]?"":"px");if(bM!=="px"){b.style(this,bD,(bH||1)+bM);bC=((bH||1)/bK.cur())*bC;b.style(this,bD,bC+bM)}if(bI[1]){bH=((bI[1]==="-="?-1:1)*bH)+bC}bK.custom(bC,bH,bM)}else{bK.custom(bC,bG,"")}}}return true}return e.queue===false?this.each(bv):this.queue(e.queue,bv)},stop:function(bw,bv,e){if(typeof bw!=="string"){e=bv;bv=bw;bw=L}if(bv&&bw!==false){this.queue(bw||"fx",[])}return this.each(function(){var bx,by=false,bA=b.timers,bz=b._data(this);if(!e){b._unmark(true,this)}function bB(bE,bF,bD){var bC=bF[bD];b.removeData(bE,bD,true);bC.stop(e)}if(bw==null){for(bx in bz){if(bz[bx]&&bz[bx].stop&&bx.indexOf(".run")===bx.length-4){bB(this,bz,bx)}}}else{if(bz[bx=bw+".run"]&&bz[bx].stop){bB(this,bz,bx)}}for(bx=bA.length;bx--;){if(bA[bx].elem===this&&(bw==null||bA[bx].queue===bw)){if(e){bA[bx](true)}else{bA[bx].saveState()}by=true;bA.splice(bx,1)}}if(!(e&&by)){b.dequeue(this,bw)}})}});function bi(){setTimeout(at,0);return(a5=b.now())}function at(){a5=L}function a2(bv,e){var bw={};b.each(aI.concat.apply([],aI.slice(0,e)),function(){bw[this]=bv});return bw}b.each({slideDown:a2("show",1),slideUp:a2("hide",1),slideToggle:a2("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,bv){b.fn[e]=function(bw,by,bx){return this.animate(bv,bw,by,bx)}});b.extend({speed:function(bw,bx,bv){var e=bw&&typeof bw==="object"?b.extend({},bw):{complete:bv||!bv&&bx||b.isFunction(bw)&&bw,duration:bw,easing:bv&&bx||bx&&!b.isFunction(bx)&&bx};e.duration=b.fx.off?0:typeof e.duration==="number"?e.duration:e.duration in b.fx.speeds?b.fx.speeds[e.duration]:b.fx.speeds._default;if(e.queue==null||e.queue===true){e.queue="fx"}e.old=e.complete;e.complete=function(by){if(b.isFunction(e.old)){e.old.call(this)}if(e.queue){b.dequeue(this,e.queue)}else{if(by!==false){b._unmark(this)}}};return e},easing:{linear:function(e){return e},swing:function(e){return(-Math.cos(e*Math.PI)/2)+0.5}},timers:[],fx:function(bv,e,bw){this.options=e;this.elem=bv;this.prop=bw;e.orig=e.orig||{}}});b.fx.prototype={update:function(){if(this.options.step){this.options.step.call(this.elem,this.now,this)}(b.fx.step[this.prop]||b.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){return this.elem[this.prop]}var e,bv=b.css(this.elem,this.prop);return isNaN(e=parseFloat(bv))?!bv||bv==="auto"?0:bv:e},custom:function(bz,by,bx){var e=this,bw=b.fx;this.startTime=a5||bi();this.end=by;this.now=this.start=bz;this.pos=this.state=0;this.unit=bx||this.unit||(b.cssNumber[this.prop]?"":"px");function bv(bA){return e.step(bA)}bv.queue=this.options.queue;bv.elem=this.elem;bv.saveState=function(){if(b._data(e.elem,"fxshow"+e.prop)===L){if(e.options.hide){b._data(e.elem,"fxshow"+e.prop,e.start)}else{if(e.options.show){b._data(e.elem,"fxshow"+e.prop,e.end)}}}};if(bv()&&b.timers.push(bv)&&!a4){a4=setInterval(bw.tick,bw.interval)}},show:function(){var e=b._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=e||b.style(this.elem,this.prop);this.options.show=true;if(e!==L){this.custom(this.cur(),e)}else{this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur())}b(this.elem).show()},hide:function(){this.options.orig[this.prop]=b._data(this.elem,"fxshow"+this.prop)||b.style(this.elem,this.prop);this.options.hide=true;this.custom(this.cur(),0)},step:function(by){var bA,bB,bv,bx=a5||bi(),e=true,bz=this.elem,bw=this.options;if(by||bx>=bw.duration+this.startTime){this.now=this.end;this.pos=this.state=1;this.update();bw.animatedProperties[this.prop]=true;for(bA in bw.animatedProperties){if(bw.animatedProperties[bA]!==true){e=false}}if(e){if(bw.overflow!=null&&!b.support.shrinkWrapBlocks){b.each(["","X","Y"],function(bC,bD){bz.style["overflow"+bD]=bw.overflow[bC]})}if(bw.hide){b(bz).hide()}if(bw.hide||bw.show){for(bA in bw.animatedProperties){b.style(bz,bA,bw.orig[bA]);b.removeData(bz,"fxshow"+bA,true);b.removeData(bz,"toggle"+bA,true)}}bv=bw.complete;if(bv){bw.complete=false;bv.call(bz)}}return false}else{if(bw.duration==Infinity){this.now=bx}else{bB=bx-this.startTime;this.state=bB/bw.duration;this.pos=b.easing[bw.animatedProperties[this.prop]](this.state,bB,0,1,bw.duration);this.now=this.start+((this.end-this.start)*this.pos)}this.update()}return true}};b.extend(b.fx,{tick:function(){var bw,bv=b.timers,e=0;for(;e<bv.length;e++){bw=bv[e];if(!bw()&&bv[e]===bw){bv.splice(e--,1)}}if(!bv.length){b.fx.stop()}},interval:13,stop:function(){clearInterval(a4);a4=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(e){b.style(e.elem,"opacity",e.now)},_default:function(e){if(e.elem.style&&e.elem.style[e.prop]!=null){e.elem.style[e.prop]=e.now+e.unit}else{e.elem[e.prop]=e.now}}}});
b.each(aI.concat.apply([],aI),function(e,bv){if(bv.indexOf("margin")){b.fx.step[bv]=function(bw){b.style(bw.elem,bv,Math.max(0,bw.now)+bw.unit)}}});if(b.expr&&b.expr.filters){b.expr.filters.animated=function(e){return b.grep(b.timers,function(bv){return e===bv.elem}).length}}function w(bx){if(!Q[bx]){var e=av.body,bv=b("<"+bx+">").appendTo(e),bw=bv.css("display");bv.remove();if(bw==="none"||bw===""){if(!ba){ba=av.createElement("iframe");ba.frameBorder=ba.width=ba.height=0}e.appendChild(ba);if(!m||!ba.createElement){m=(ba.contentWindow||ba.contentDocument).document;m.write((b.support.boxModel?"<!doctype html>":"")+"<html><body>");m.close()}bv=m.createElement(bx);m.body.appendChild(bv);bw=b.css(bv,"display");e.removeChild(ba)}Q[bx]=bw}return Q[bx]}var a8,V=/^t(?:able|d|h)$/i,ad=/^(?:body|html)$/i;if("getBoundingClientRect" in av.documentElement){a8=function(by,bH,bw,bB){try{bB=by.getBoundingClientRect()}catch(bF){}if(!bB||!b.contains(bw,by)){return bB?{top:bB.top,left:bB.left}:{top:0,left:0}}var bC=bH.body,bD=aL(bH),bA=bw.clientTop||bC.clientTop||0,bE=bw.clientLeft||bC.clientLeft||0,bv=bD.pageYOffset||b.support.boxModel&&bw.scrollTop||bC.scrollTop,bz=bD.pageXOffset||b.support.boxModel&&bw.scrollLeft||bC.scrollLeft,bG=bB.top+bv-bA,bx=bB.left+bz-bE;return{top:bG,left:bx}}}else{a8=function(bz,bE,bx){var bC,bw=bz.offsetParent,bv=bz,bA=bE.body,bB=bE.defaultView,e=bB?bB.getComputedStyle(bz,null):bz.currentStyle,bD=bz.offsetTop,by=bz.offsetLeft;while((bz=bz.parentNode)&&bz!==bA&&bz!==bx){if(b.support.fixedPosition&&e.position==="fixed"){break}bC=bB?bB.getComputedStyle(bz,null):bz.currentStyle;bD-=bz.scrollTop;by-=bz.scrollLeft;if(bz===bw){bD+=bz.offsetTop;by+=bz.offsetLeft;if(b.support.doesNotAddBorder&&!(b.support.doesAddBorderForTableAndCells&&V.test(bz.nodeName))){bD+=parseFloat(bC.borderTopWidth)||0;by+=parseFloat(bC.borderLeftWidth)||0}bv=bw;bw=bz.offsetParent}if(b.support.subtractsBorderForOverflowNotVisible&&bC.overflow!=="visible"){bD+=parseFloat(bC.borderTopWidth)||0;by+=parseFloat(bC.borderLeftWidth)||0}e=bC}if(e.position==="relative"||e.position==="static"){bD+=bA.offsetTop;by+=bA.offsetLeft}if(b.support.fixedPosition&&e.position==="fixed"){bD+=Math.max(bx.scrollTop,bA.scrollTop);by+=Math.max(bx.scrollLeft,bA.scrollLeft)}return{top:bD,left:by}}}b.fn.offset=function(e){if(arguments.length){return e===L?this:this.each(function(bx){b.offset.setOffset(this,e,bx)})}var bv=this[0],bw=bv&&bv.ownerDocument;if(!bw){return null}if(bv===bw.body){return b.offset.bodyOffset(bv)}return a8(bv,bw,bw.documentElement)};b.offset={bodyOffset:function(e){var bw=e.offsetTop,bv=e.offsetLeft;if(b.support.doesNotIncludeMarginInBodyOffset){bw+=parseFloat(b.css(e,"marginTop"))||0;bv+=parseFloat(b.css(e,"marginLeft"))||0}return{top:bw,left:bv}},setOffset:function(bx,bG,bA){var bB=b.css(bx,"position");if(bB==="static"){bx.style.position="relative"}var bz=b(bx),bv=bz.offset(),e=b.css(bx,"top"),bE=b.css(bx,"left"),bF=(bB==="absolute"||bB==="fixed")&&b.inArray("auto",[e,bE])>-1,bD={},bC={},bw,by;if(bF){bC=bz.position();bw=bC.top;by=bC.left}else{bw=parseFloat(e)||0;by=parseFloat(bE)||0}if(b.isFunction(bG)){bG=bG.call(bx,bA,bv)}if(bG.top!=null){bD.top=(bG.top-bv.top)+bw}if(bG.left!=null){bD.left=(bG.left-bv.left)+by}if("using" in bG){bG.using.call(bx,bD)}else{bz.css(bD)}}};b.fn.extend({position:function(){if(!this[0]){return null}var bw=this[0],bv=this.offsetParent(),bx=this.offset(),e=ad.test(bv[0].nodeName)?{top:0,left:0}:bv.offset();bx.top-=parseFloat(b.css(bw,"marginTop"))||0;bx.left-=parseFloat(b.css(bw,"marginLeft"))||0;e.top+=parseFloat(b.css(bv[0],"borderTopWidth"))||0;e.left+=parseFloat(b.css(bv[0],"borderLeftWidth"))||0;return{top:bx.top-e.top,left:bx.left-e.left}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||av.body;while(e&&(!ad.test(e.nodeName)&&b.css(e,"position")==="static")){e=e.offsetParent}return e})}});b.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(bw,bv){var e=/Y/.test(bv);b.fn[bw]=function(bx){return b.access(this,function(by,bB,bA){var bz=aL(by);if(bA===L){return bz?(bv in bz)?bz[bv]:b.support.boxModel&&bz.document.documentElement[bB]||bz.document.body[bB]:by[bB]}if(bz){bz.scrollTo(!e?bA:b(bz).scrollLeft(),e?bA:b(bz).scrollTop())}else{by[bB]=bA}},bw,bx,arguments.length,null)}});function aL(e){return b.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:false}b.each({Height:"height",Width:"width"},function(bw,bx){var bv="client"+bw,e="scroll"+bw,by="offset"+bw;b.fn["inner"+bw]=function(){var bz=this[0];return bz?bz.style?parseFloat(b.css(bz,bx,"padding")):this[bx]():null};b.fn["outer"+bw]=function(bA){var bz=this[0];return bz?bz.style?parseFloat(b.css(bz,bx,bA?"margin":"border")):this[bx]():null};b.fn[bx]=function(bz){return b.access(this,function(bC,bB,bD){var bF,bE,bG,bA;if(b.isWindow(bC)){bF=bC.document;bE=bF.documentElement[bv];return b.support.boxModel&&bE||bF.body&&bF.body[bv]||bE}if(bC.nodeType===9){bF=bC.documentElement;if(bF[bv]>=bF[e]){return bF[bv]}return Math.max(bC.body[e],bF[e],bC.body[by],bF[by])
}if(bD===L){bG=b.css(bC,bB);bA=parseFloat(bG);return b.isNumeric(bA)?bA:bG}b(bC).css(bB,bD)},bx,bz,arguments.length,null)}});bd.jQuery=bd.$=b;if(typeof define==="function"&&define.amd&&define.amd.jQuery){define("jquery",[],function(){return b})}})(window);;

var MobileUtils = {
	getScreenWidth: function(){
        var smallerSide = Math.min(screen.width, screen.height);
        if (this.isAndroidMobileDevice() && !this.isNewChromeOnAndroid()) {
            smallerSide = smallerSide / window.devicePixelRatio;
        }
        return smallerSide;
    },
    isAppleMobileDevice: function(){
        return (/iphone|ipod|ipad|Macintosh/i.test(navigator.userAgent.toLowerCase()));
    },
    isAndroidMobileDevice: function(){
        return (/android/i.test(navigator.userAgent.toLowerCase()));
    },
    isNewChromeOnAndroid: function(){
        if (this.isAndroidMobileDevice()) {
            var userAgent = navigator.userAgent.toLowerCase();
            if (/chrome/i.test(userAgent) && !/micromessenger/i.test(userAgent)) {
                var parts = userAgent.split('chrome/');
                var fullVersionString = parts[1].split(" ")[0];
                var versionString = fullVersionString.split('.')[0];
                var version = parseInt(versionString);
                if (version >= 27) return true;
            }
        }
        return false;
    },
    isAndroidOldBrowser: function () {
        var isChrome = (/chrome/i.test(navigator.userAgent.toLowerCase()));
        if (this.isAndroidMobileDevice() && !isChrome) return true;
        return false;
    },
    isSafariOnAndroid: function(){
	    if (this.isAndroidMobileDevice()) {
	    	var userAgent = navigator.userAgent.toLowerCase(),
	    	regarr = /android\s*([\.0-9]+);?/i.exec(userAgent);
	    	if ((regarr == null) || (parseFloat((regarr||[0,0])[1]) >= 4)) return false;
        	if (/micromessenger/i.test(userAgent)
        	 || !(/browser\b[\/\.\s\w]+safari/i.test(userAgent))) return true;
	    }
	    return false;
    },	
	isWeiXin: function (){ 
		var ua = window.navigator.userAgent.toLowerCase(); 
		if(ua.match(/MicroMessenger/i) == 'micromessenger'){ 
			return true; 
		}else{ 
			return false; 
		} 
	},
	isAndroidQqBrowser: function(){
		var ua = navigator.userAgent.toLowerCase();
		if(ua.match(/mqqbrowser/i)){return true;} else{return false;}
	}
};
(function(){
    MobileUtils.isMSMobileDevice = function(){
        return (/iemobile/i.test(navigator.userAgent.toLowerCase()));
    };
	
    MobileUtils._getDevicePixelRatio = function(){
        if (this.isMSMobileDevice()) {
            return Math.round(window.screen.availWidth / document.documentElement.clientWidth);
        }
        return window.devicePixelRatio;
    };
	
    MobileUtils._getDeviceParamsByUA = function(){
        if (!(navigator && navigator.userAgent)) return false;
        var ua = navigator.userAgent.toLowerCase();
		
        var specificAndroidParams = this._paramsForSpecificAndroidDevices(ua);
        var width  = Math.min(screen.width, screen.height);
        var height = Math.max(screen.width, screen.height);
        if (specificAndroidParams) {
            width = specificAndroidParams.width;
            height = specificAndroidParams.height;
        }
		
        switch(true){
            case /ip(hone|od|ad)/i.test(ua):
                break;
            case /android/i.test(ua):
                if (!this.isNewChromeOnAndroid() || specificAndroidParams) {
                    width  = width / this._getDevicePixelRatio();
                    height = height / this._getDevicePixelRatio();
                }
                break;
            case /iemobile/i.test(ua):
                width  = document.documentElement.clientWidth;
                height = document.documentElement.clientHeight;
                break;
            default:
                break;
        }
        return {width:width, height: height};
    };
	
    MobileUtils.getScreenWidth = function(){
        var sizes = this._getDeviceParamsByUA();
        if (sizes && sizes.width) return sizes.width;
        return false;
    };
	
    MobileUtils.getScreenHeight = function(){
        var sizes = this._getDeviceParamsByUA();
        if (sizes && sizes.height) return sizes.height;
        return false;
    };
	
    MobileUtils._paramsForSpecificAndroidDevices = function(userAgent){
        switch(true){
            case (/(GT-S5300B|GT-S5360|GT-S5367|GT-S5570I|GT-S6102B|LG-E400f|LG-E400g|LG-E405f|LG-L38C|LGL35G)/i).test(userAgent):
                return {width:240, height: 320};
                break;
            case (/(Ls 670|GT-S5830|GT-S5839i|GT-S6500D|GT-S6802B|GT-S7500L|H866C|Huawei-U8665|LG-C800|LG-MS695|LG-VM696|LGL55C|M865|Prism|SCH-R720|SCH-R820|SCH-S720C|SPH-M820-BST|SPH-M930BST|U8667|X501_USA_Cricket|ZTE-Z990G)/i).test(userAgent):
                return {width:320, height: 480};
                break;
            case (/(5860E|ADR6300|ADR6330VW|ADR8995|APA9292KT|C771|GT-I8160|GT-I9070|GT-I9100|HTC-A9192|myTouch4G|N860|PantechP9070|PC36100|pcdadr6350|SAMSUNG-SGH-I727|SAMSUNG-SGH-I777|SAMSUNG-SGH-I997|SC-03D|SCH-I405|SCH-I500|SCH-I510|SCH-R760|SGH-S959G|SGH-T679|SGH-T769|SGH-T959V|SGH-T989|SPH-D700)/i).test(userAgent):
                return {width:480, height: 800};
                break;
            case (/(DROIDX|SonyEricssonSO-02C|SonyEricssonST25i)/i).test(userAgent):
                return {width:480, height: 854};
                break;
            case (/(DROID3|MB855)/i).test(userAgent):
                return {width:540, height: 960};
                break;
            case (/F-05D/i).test(userAgent):
                return {width:720, height: 1280};
                break;
            default:
                return false;
                break;
        }
    };
}());
// Adaptive handheld
(function(){
	if (/firefox/i.test(navigator.userAgent.toLowerCase())) return false;
	var event = ("orientation" in window) && ("onorientationchange" in window)?"orientationchange":"resize";
	try {
		// initial
		var mviewport,metas = document.getElementsByTagName('meta')||[];
		for(var i in metas){
			var meta = metas[i]||{},mtname = meta.name||"";
			if (mtname.toLowerCase() == "viewport") {
				mviewport = meta;break;
			}
		}
		if ((mviewport.content||"").length == 0) return false;
		var iswxapp = /^\/wx\.shtml\b/i.test(location.pathname) ? true : false;
		if(window._wxapp_mode_==1){
			iswxapp =true;
		}
		var screenWidth = MobileUtils.getScreenWidth(),screenHeight = MobileUtils.getScreenHeight(),
		uiWidth = iswxapp ? 375 : 320,initContent = mviewport.content;
		// addevent
		var _bind = function(dom, type, fn, ucapture){
			if(window.$){
				$(dom).bind(type,fn);
			}else{
				if (dom.addEventListener) dom.addEventListener(type, fn, ucapture);//DOM2.0
				else if (dom.attachEvent) dom.attachEvent("on"+type, fn);//IE5+
				else dom['on'+type] = fn;//DOM 0
			}
		};
		// orientationchange
		var gtOrientation = function(){
			var orientation = window.orientation||null;
			if (orientation) return ((orientation == 90)||(orientation == -90))?'landspcape':'portrait';
			else return (screen.width > screen.height)?'landspcape':'portrait';
		};
		// fireevent
		_bind(window, event, function(e){
			var newContent = '',envTag = false;
			var layoutWidth = document.documentElement.clientWidth;
			if (!iswxapp && layoutWidth <= uiWidth + 1) return false;
			// Android
			if (MobileUtils.isAndroidMobileDevice()) {
				// target-densitydpi
				if (MobileUtils.isSafariOnAndroid()) newContent = initContent+',width='+uiWidth;
				else if( (/[p|P]ad/i.test(navigator.userAgent.toLowerCase())) && !(/coolpad/i.test(navigator.userAgent.toLowerCase()))  ){
					//适配android平板，未想到更好方案，暂时先这样处理 by lsf 2015.04.10
					var scale = 1.0,
					deviceWidth = (gtOrientation() == 'portrait')?Math.min(screenWidth, screenHeight):Math.max(screenWidth, screenHeight),
			        scale = deviceWidth / uiWidth,propstr = '';
			        if(/ucbrowser/i.test(navigator.userAgent.toLowerCase())) propstr = ',target-densitydpi=device-dpi';//+densitydpi;
			        newContent = 'width='+uiWidth+', initial-scale='+scale+',minimum-scale='+scale+',maximum-scale='+scale+propstr;
			        setTimeout(function(){
			        	document.body.style.width = uiWidth+'px';
					},800);
					
					// fixed bug#4130
					if (MobileUtils.isWeiXin()
						&& /(MI\s*PAD|HuaweiMediaPad)/i.test(navigator.userAgent)) {
						newContent = 'width='+uiWidth+', initial-scale=' + 2 * scale;
					}
				}
				else {
					var androidv = deviceWidth = 0,propstr = '',densitydpi = 'medium-dpi';
					// 70 ~ 640
					var devicePixelRatio = MobileUtils._getDevicePixelRatio();
					deviceWidth = Math[(gtOrientation() == 'portrait')?'min':'max'](screen.width, screen.height);
					densitydpi = Math.floor(uiWidth / deviceWidth * devicePixelRatio * 160);
					propstr = ',target-densitydpi='+densitydpi;
					if (devicePixelRatio < 1.5) propstr = ',initial-scale='+(deviceWidth / uiWidth);
					window._mb_init_scale=deviceWidth / uiWidth;
					if(MobileUtils.isWeiXin() || MobileUtils.isAndroidQqBrowser()){
                        if(/(HMA-AL00)/i.test(navigator.userAgent)){
                            propstr = ',target-densitydpi=device-densitydpi,initial-scale='+(deviceWidth / uiWidth+0.0001);
                            if(!window._wp_weixin_can_scale_) initContent=initContent.replace('user-scalable=yes','user-scalable=no');	
                            if(!window._wp_weixin_can_scale_) initContent=initContent.replace('maximum-scale=5.0','maximum-scale='+(deviceWidth / uiWidth+0.0001));
                        }else if(/(SHT-AL09)/i.test(navigator.userAgent)){
                            propstr = ',target-densitydpi=device-densitydpi,initial-scale='+(deviceWidth / uiWidth);
                            
                        }else{
                            propstr = ',target-densitydpi=device-densitydpi,initial-scale='+(deviceWidth / uiWidth-0.0001);
                            if(!window._wp_weixin_can_scale_) initContent=initContent.replace('user-scalable=yes','user-scalable=no');	
                            if(!window._wp_weixin_can_scale_) initContent=initContent.replace('maximum-scale=5.0','maximum-scale='+(deviceWidth / uiWidth-0.0001));
                        }
						
                    }
					newContent = initContent+',width='+uiWidth+propstr;
				}
				//修复bug(3211/手机访问异常/fpf)
				if(MobileUtils.isAndroidQqBrowser()){
					setTimeout(function(){
						mviewport.content = newContent;
						var ntdom = document.getElementById('wp-mobile_navtab');
						if (ntdom != null) {
							with(ntdom){style.position = 'fixed';style.bottom = '0px';style.left = '0px'}
			}
						var nhdom = document.getElementById('wp-mobile_navhandler');
						if (nhdom != null) {
							with(nhdom){style.position = 'fixed';style.bottom = '30px';style.left = '0px'}
						}
					},0);
				}
			}
			// Apple
			else if (MobileUtils.isAppleMobileDevice()){
				newContent = initContent+',width='+uiWidth;
				newContent +=',viewport-fit=cover';
			} else {
				// Other
		        var scale = 1.0,envTag = true,isOldBrowser = MobileUtils.isAndroidOldBrowser(),
		        deviceWidth = Math[(gtOrientation() == 'portrait')?'min':'max'](MobileUtils.getScreenWidth(), MobileUtils.getScreenHeight());
		        scale = deviceWidth / uiWidth;
		        newContent = 'width='+(uiWidth + (isOldBrowser ? 0 : 1))+',initial-scale='+scale+',maximum-scale='+scale;
			}
			window._mb_viewport_newcontent= newContent;
			// Set viewport
			if(MobileUtils.isWeiXin() || MobileUtils.isAndroidQqBrowser()){
				setTimeout(function(){
					newContent +=',viewport-fit=cover';
					mviewport.content = newContent;
				},0);
			}else{
				mviewport.content = newContent;
			}
			if (envTag && window.WQuickActions) window.WQuickActions.delayedFixZoom();
			if(!$(document).data('mobile_removeLoad')){
				var func=function(){
					if($('#scroll_container').length&&$('.mloading-mask').length){
						$('#scroll_container').css("visibility", 'visible');
						$('.mloading-mask').remove();
					}else{
						setTimeout(func,60);
					}
				}
				func();
				$(document).data('mobile_removeLoad',true);
			}	
		}, false);
		// fireEvent
		if(window.$){
			$(window).trigger(event);
			$(function(){
				$(window).trigger(event);
			});
		}else{
			if (window.dispatchEvent) {
				var e = document.createEvent('Event');
				e.initEvent(event, true, true);
				window.dispatchEvent(e);
			} else {
				window.fireEvent("on"+event);
			}
		}
	} catch(e) {
	}
}());;
(function(D,B){function A(E){return !D(E).parents().andSelf().filter(function(){return D.curCSS(this,"visibility")==="hidden"||D.expr.filters.hidden(this)}).length}function C(H,I){var G=H.nodeName.toLowerCase();if("area"===G){var J=H.parentNode,E=J.name,F;if(!H.href||!E||J.nodeName.toLowerCase()!=="map"){return !1}F=D("img[usemap=#"+E+"]")[0];return !!F&&A(F)}return(/input|select|textarea|button|object/.test(G)?!H.disabled:"a"==G?H.href||I:I)&&A(H)}D.ui=D.ui||{};D.ui.version||(D.extend(D.ui,{version:"1.8.17",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}}),D.fn.extend({propAttr:D.fn.prop||D.fn.attr,_focus:D.fn.focus,focus:function(E,F){return typeof E=="number"?this.each(function(){var G=this;setTimeout(function(){D(G).focus(),F&&F.call(G)},E)}):this._focus.apply(this,arguments)},scrollParent:function(){var E;D.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?E=this.parents().filter(function(){return/(relative|absolute|fixed)/.test(D.curCSS(this,"position",1))&&/(auto|scroll)/.test(D.curCSS(this,"overflow",1)+D.curCSS(this,"overflow-y",1)+D.curCSS(this,"overflow-x",1))}).eq(0):E=this.parents().filter(function(){return/(auto|scroll)/.test(D.curCSS(this,"overflow",1)+D.curCSS(this,"overflow-y",1)+D.curCSS(this,"overflow-x",1))}).eq(0);return/fixed/.test(this.css("position"))||!E.length?D(document):E},zIndex:function(G){if(G!==B){return this.css("zIndex",G)}if(this.length){var E=D(this[0]),F,H;while(E.length&&E[0]!==document){F=E.css("position");if(F==="absolute"||F==="relative"||F==="fixed"){H=parseInt(E.css("zIndex"),10);if(!isNaN(H)&&H!==0){return H}}E=E.parent()}}return 0},disableSelection:function(){return this.bind((D.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(E){E.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),D.each(["Width","Height"],function(I,F){function E(L,M,K,N){D.each(G,function(){M-=parseFloat(D.curCSS(L,"padding"+this,!0))||0,K&&(M-=parseFloat(D.curCSS(L,"border"+this+"Width",!0))||0),N&&(M-=parseFloat(D.curCSS(L,"margin"+this,!0))||0)});return M}var G=F==="Width"?["Left","Right"]:["Top","Bottom"],J=F.toLowerCase(),H={innerWidth:D.fn.innerWidth,innerHeight:D.fn.innerHeight,outerWidth:D.fn.outerWidth,outerHeight:D.fn.outerHeight};D.fn["inner"+F]=function(K){if(K===B){return H["inner"+F].call(this)}return this.each(function(){D(this).css(J,E(this,K)+"px")})},D.fn["outer"+F]=function(K,L){if(typeof K!="number"){return H["outer"+F].call(this,K)}return this.each(function(){D(this).css(J,E(this,K,!0,L)+"px")})}}),D.extend(D.expr[":"],{data:function(F,G,E){return !!D.data(F,E[3])},focusable:function(E){return C(E,!isNaN(D.attr(E,"tabindex")))},tabbable:function(G){var E=D.attr(G,"tabindex"),F=isNaN(E);return(F||E>=0)&&C(G,!F)}}),D(function(){var E=document.body,F=E.appendChild(F=document.createElement("div"));D.extend(F.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0}),D.support.minHeight=F.offsetHeight===100,D.support.selectstart="onselectstart" in F,E.removeChild(F).style.display="none"}),D.extend(D.ui,{plugin:{add:function(G,H,E){var F=D.ui[G].prototype;for(var I in E){F.plugins[I]=F.plugins[I]||[],F.plugins[I].push([H,E[I]])}},call:function(I,G,H){var E=I.plugins[G];if(!!E&&!!I.element[0].parentNode){for(var F=0;F<E.length;F++){I.options[E[F][0]]&&E[F][1].apply(I.element,H)}}}},contains:function(F,E){return document.compareDocumentPosition?F.compareDocumentPosition(E)&16:F!==E&&F.contains(E)},hasScroll:function(G,H){if(D(G).css("overflow")==="hidden"){return !1}var E=H&&H==="left"?"scrollLeft":"scrollTop",F=!1;if(G[E]>0){return !0}G[E]=1,F=G[E]>0,G[E]=0;return F},isOverAxis:function(G,E,F){return G>E&&G<E+F},isOver:function(H,I,F,G,J,E){return D.ui.isOverAxis(H,F,J)&&D.ui.isOverAxis(I,G,E)}}))})(jQuery);(function(D,B){if(D.cleanData){var C=D.cleanData;D.cleanData=function(G){for(var E=0,F;(F=G[E])!=null;E++){try{D(F).triggerHandler("remove")}catch(H){}}C(G)}}else{var A=D.fn.remove;D.fn.remove=function(E,F){return this.each(function(){F||(!E||D.filter(E,[this]).length)&&D("*",this).add([this]).each(function(){try{D(this).triggerHandler("remove")}catch(G){}});return A.call(D(this),E,F)})}}D.widget=function(H,I,F){var G=H.split(".")[0],J;H=H.split(".")[1],J=G+"-"+H,F||(F=I,I=D.Widget),D.expr[":"][J]=function(K){return !!D.data(K,H)},D[G]=D[G]||{},D[G][H]=function(L,K){arguments.length&&this._createWidget(L,K)};var E=new I;E.options=D.extend(!0,{},E.options),D[G][H].prototype=D.extend(!0,E,{namespace:G,widgetName:H,widgetEventPrefix:D[G][H].prototype.widgetEventPrefix||H,widgetBaseClass:J},F),D.widget.bridge(H,D[G][H])},D.widget.bridge=function(F,E){D.fn[F]=function(I){var J=typeof I=="string",G=Array.prototype.slice.call(arguments,1),H=this;I=!J&&G.length?D.extend.apply(null,[!0,I].concat(G)):I;if(J&&I.charAt(0)==="_"){return H}J?this.each(function(){var K=D.data(this,F),L=K&&D.isFunction(K[I])?K[I].apply(K,G):K;if(L!==K&&L!==B){H=L;return !1}}):this.each(function(){var K=D.data(this,F);K?K.option(I||{})._init():D.data(this,F,new E(I,this))});return H}},D.Widget=function(F,E){arguments.length&&this._createWidget(F,E)},D.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:!1},_createWidget:function(F,G){D.data(G,this.widgetName,this),this.element=D(G),this.options=D.extend(!0,{},this.options,this._getCreateOptions(),F);var E=this;this.element.bind("remove."+this.widgetName,function(){E.destroy()}),this._create(),this._trigger("create"),this._init()},_getCreateOptions:function(){return D.metadata&&D.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName),this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled ui-state-disabled")},widget:function(){return this.element},option:function(G,E){var F=G;if(arguments.length===0){return D.extend({},this.options)}if(typeof G=="string"){if(E===B){return this.options[G]}F={},F[G]=E}this._setOptions(F);return this},_setOptions:function(E){var F=this;D.each(E,function(H,G){F._setOption(H,G)});return this},_setOption:function(F,E){this.options[F]=E,F==="disabled"&&this.widget()[E?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",E);return this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_trigger:function(H,I,F){var G,J,E=this.options[H];F=F||{},I=D.Event(I),I.type=(H===this.widgetEventPrefix?H:this.widgetEventPrefix+H).toLowerCase(),I.target=this.element[0],J=I.originalEvent;if(J){for(G in J){G in I||(I[G]=J[G])}}this.element.trigger(I,F);return !(D.isFunction(E)&&E.call(this.element[0],I,F)===!1||I.isDefaultPrevented())}}})(jQuery);(function(C,A){var B=!1;C(document).mouseup(function(D){B=!1}),C.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var D=this;this.element.bind("mousedown."+this.widgetName,function(E){return D._mouseDown(E)}).bind("click."+this.widgetName,function(E){if(!0===C.data(E.target,D.widgetName+".preventClickEvent")){C.removeData(E.target,D.widgetName+".preventClickEvent"),E.stopImmediatePropagation();return !1}}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName)},_mouseDown:function(F){if(!B){this._mouseStarted&&this._mouseUp(F),this._mouseDownEvent=F;var D=this,E=F.which==1,G=typeof this.options.cancel=="string"&&F.target.nodeName?C(F.target).closest(this.options.cancel).length:!1;if(!E||G||!this._mouseCapture(F)){return !0}this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){D.mouseDelayMet=!0},this.options.delay));if(this._mouseDistanceMet(F)&&this._mouseDelayMet(F)){this._mouseStarted=this._mouseStart(F)!==!1;if(!this._mouseStarted){F.preventDefault();return !0}}!0===C.data(F.target,this.widgetName+".preventClickEvent")&&C.removeData(F.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(H){return D._mouseMove(H)},this._mouseUpDelegate=function(H){return D._mouseUp(H)},C(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),F.preventDefault(),B=!0;return !0}},_mouseMove:function(D){if(C.browser.msie&&!(document.documentMode>=9)&&!D.button){return this._mouseUp(D)}if(this._mouseStarted){this._mouseDrag(D);return D.preventDefault()}this._mouseDistanceMet(D)&&this._mouseDelayMet(D)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,D)!==!1,this._mouseStarted?this._mouseDrag(D):this._mouseUp(D));return !this._mouseStarted},_mouseUp:function(D){C(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,D.target==this._mouseDownEvent.target&&C.data(D.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(D));return !1},_mouseDistanceMet:function(D){return Math.max(Math.abs(this._mouseDownEvent.pageX-D.pageX),Math.abs(this._mouseDownEvent.pageY-D.pageY))>=this.options.distance},_mouseDelayMet:function(D){return this.mouseDelayMet},_mouseStart:function(D){},_mouseDrag:function(D){},_mouseStop:function(D){},_mouseCapture:function(D){return !0}})})(jQuery);function get_plugin_css(tagid,css){var setcss=$("#page_set_css").html();setcss=setcss.replace(/<style>/ig,"").replace(/<\/style>/ig,"").replace(/[\r]/g," ").replace(/[\n]/g," ").replace(/[\r\n]/g," ").replace(/\s+/g," ");var reg=eval("/\\/\\*"+tagid+"\\*\\/(.*)\\/\\*"+tagid+"\\*\\//ig");setcss=setcss.replace(reg,"");if(setcss&&$.trim(setcss)!=""){css=css.replace(/@charset [^;]+;/i,"")}var tempcss=setcss+" /*"+tagid+"*/ "+css+" /*"+tagid+"*/ ";tempcss=tempcss.replace(/&gt;/ig,">");$("#page_set_css").html("<style> "+tempcss+"</style>")}(function(B){B.widget("ui.menu",{_create:function(){var A=this;this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({role:"listbox","aria-activedescendant":"ui-active-menuitem"}).click(function(D){if(!B(D.target).closest(".ui-menu-item a").length){return}D.preventDefault();A.select(D)});this.refresh()},refresh:function(){var D=this;var A=this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","menuitem");A.children("a").addClass("ui-corner-all").attr("tabindex",-1).mouseenter(function(C){D.activate(C,B(this).parent())}).mouseleave(function(){D.deactivate()})},activate:function(J,A){this.deactivate();if(this.hasScroll()){var G=A.offset().top-this.element.offset().top,H=this.element.scrollTop(),I=this.element.height();if(G<0){this.element.scrollTop(H+G)}else{if(G>=I){this.element.scrollTop(H+G-I+A.height())}}}this.active=A.eq(0).children("a").addClass("ui-state-hover").attr("id","ui-active-menuitem").end();this._trigger("focus",J,{item:A})},deactivate:function(){if(!this.active){return}this.active.children("a").removeClass("ui-state-hover").removeAttr("id");this._trigger("blur");this.active=null},next:function(A){this.move("next",".ui-menu-item:first",A)},previous:function(A){this.move("prev",".ui-menu-item:last",A)},first:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},last:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},move:function(H,G,A){if(!this.active){this.activate(A,this.element.children(G));return}var F=this.active[H+"All"](".ui-menu-item").eq(0);if(F.length){this.activate(A,F)}else{this.activate(A,this.element.children(G))}},nextPage:function(F){if(this.hasScroll()){if(!this.active||this.last()){this.activate(F,this.element.children(".ui-menu-item:first"));return}var G=this.active.offset().top,A=this.element.height(),H=this.element.children(".ui-menu-item").filter(function(){var C=B(this).offset().top-G-A+B(this).height();return C<10&&C>-10});if(!H.length){H=this.element.children(".ui-menu-item:last")}this.activate(F,H)}else{this.activate(F,this.element.children(".ui-menu-item").filter(!this.active||this.last()?":first":":last"))}},previousPage:function(A){if(this.hasScroll()){if(!this.active||this.first()){this.activate(A,this.element.children(".ui-menu-item:last"));return}var E=this.active.offset().top,F=this.element.height();result=this.element.children(".ui-menu-item").filter(function(){var C=B(this).offset().top-E+F-B(this).height();return C<10&&C>-10});if(!result.length){result=this.element.children(".ui-menu-item:first")}this.activate(A,result)}else{this.activate(A,this.element.children(".ui-menu-item").filter(!this.active||this.first()?":last":":first"))}},hasScroll:function(){return this.element.height()<this.element[B.fn.prop?"prop":"attr"]("scrollHeight")},select:function(A){this._trigger("selected",A,{item:this.active})}})}(jQuery));(function(D,E){var F=0;D.widget("ui.autocomplete",{options:{appendTo:"body",autoFocus:false,delay:300,minLength:1,width:"auto",position:{my:"left top",at:"left bottom",collision:"none"},source:null},pending:0,_create:function(){var A=this,B=this.element[0].ownerDocument,C;this.element.addClass("ui-autocomplete-input").attr("autocomplete","off").attr({role:"textbox","aria-autocomplete":"list","aria-haspopup":"true"}).bind("keydown.autocomplete",function(I){if(A.options.disabled||A.element.propAttr("readOnly")){return}C=false;var J=D.ui.keyCode;switch(I.keyCode){case J.PAGE_UP:A._move("previousPage",I);break;case J.PAGE_DOWN:A._move("nextPage",I);break;case J.UP:A._move("previous",I);I.preventDefault();break;case J.DOWN:A._move("next",I);I.preventDefault();break;case J.ENTER:case J.NUMPAD_ENTER:if(A.menu.active){C=true;I.preventDefault()}case J.TAB:if(!A.menu.active){return}A.menu.select(I);break;case J.ESCAPE:A.element.val(A.term);A.close(I);break;default:clearTimeout(A.searching);A.searching=setTimeout(function(){if(A.term!=A.element.val()){A.selectedItem=null;A.search(null,I)}},A.options.delay);break}}).bind("keypress.autocomplete",function(H){if(C){C=false;H.preventDefault()}}).bind("focus.autocomplete",function(){if(A.options.disabled){return}A.selectedItem=null;A.previous=A.element.val()}).bind("blur.autocomplete",function(H){if(A.options.disabled){return}clearTimeout(A.searching);A.closing=setTimeout(function(){A.close(H);A._change(H)},150)});this._initSource();this.response=function(){return A._response.apply(A,arguments)};this.menu=D("<ul></ul>").addClass("ui-autocomplete").appendTo(D(this.options.appendTo||"body",B)[0]).mousedown(function(J){var I=A.menu.element[0];if(!D(J.target).closest(".ui-menu-item").length){setTimeout(function(){D(document).one("mousedown",function(G){if(G.target!==A.element[0]&&G.target!==I&&!D.ui.contains(I,G.target)){A.close()}})},1)}setTimeout(function(){clearTimeout(A.closing)},13)}).menu({focus:function(K,L){var J=L.item.data("item.autocomplete");if(false!==A._trigger("focus",K,{item:J})){if(/^key/.test(K.originalEvent.type)){A.element.val(J.value)}}},selected:function(L,M){var N=M.item.data("item.autocomplete"),K=A.previous;if(A.element[0]!==B.activeElement){A.element.focus();A.previous=K;setTimeout(function(){A.previous=K;A.selectedItem=N},1)}if(false!==A._trigger("select",L,{item:N})){A.element.val(N.value)}A.term=A.element.val();A.close(L);A.selectedItem=N},blur:function(I,J){if(A.menu.element.is(":visible")&&(A.element.val()!==A.term)){A.element.val(A.term)}}}).zIndex(this.element.zIndex()+1).css({top:0,left:0}).hide().data("menu");if(D.fn.bgiframe){this.menu.element.bgiframe()}A.beforeunloadHandler=function(){A.element.removeAttr("autocomplete")};D(window).bind("beforeunload",A.beforeunloadHandler)},destroy:function(){this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup");this.menu.element.remove();D(window).unbind("beforeunload",this.beforeunloadHandler);D.Widget.prototype.destroy.call(this)},_setOption:function(B,A){D.Widget.prototype._setOption.apply(this,arguments);if(B==="source"){this._initSource()}if(B==="appendTo"){this.menu.element.appendTo(D(A||"body",this.element[0].ownerDocument)[0])}if(B==="disabled"&&A&&this.xhr){this.xhr.abort()}},_initSource:function(){var C=this,A,B;if(D.isArray(this.options.source)){A=this.options.source;this.source=function(I,J){J(D.ui.autocomplete.filter(A,I.term))}}else{if(typeof this.options.source==="string"){B=this.options.source;this.source=function(I,J){if(C.xhr){C.xhr.abort()}C.xhr=D.ajax({url:B,data:I,dataType:"json",autocompleteRequest:++F,success:function(H,G){if(this.autocompleteRequest===F){J(H)}},error:function(){if(this.autocompleteRequest===F){J([])}}})}}else{this.source=this.options.source}}},search:function(A,B){A=A!=null?A:this.element.val();this.term=this.element.val();if(A.length<this.options.minLength){return this.close(B)}clearTimeout(this.closing);if(this._trigger("search",B)===false){return}return this._search(A)},_search:function(A){this.pending++;this.element.addClass("ui-autocomplete-loading");this.source({term:A},this.response)},_response:function(A){if(!this.options.disabled&&A&&A.length){A=this._normalize(A);this._suggest(A);this._trigger("open")}else{this.close()}this.pending--;if(!this.pending){this.element.removeClass("ui-autocomplete-loading")}},close:function(A){clearTimeout(this.closing);if(this.menu.element.is(":visible")){this.menu.element.hide();this.menu.deactivate();this._trigger("close",A)}},_change:function(A){if(this.previous!==this.element.val()){this._trigger("change",A,{item:this.selectedItem})}},_normalize:function(A){if(A.length&&A[0].label&&A[0].value){return A}return D.map(A,function(B){if(typeof B==="string"){return{label:B,value:B}}return D.extend({label:B.label||B.value,value:B.value||B.label},B)})},_suggest:function(A){var B=this.menu.element.empty().zIndex(this.element.zIndex()+1);this._renderMenu(B,A);this.menu.deactivate();this.menu.refresh();B.show();this._resizeMenu();B.position(D.extend({of:this.element},this.options.position));if(this.options.autoFocus){this.menu.next(new D.Event("mouseover"))}},_resizeMenu:function(){var A=this.menu.element;if(this.options.width=="auto"){A.outerWidth(Math.max(A.width("").outerWidth()+1,this.element.outerWidth()))}else{A.outerWidth(this.options.width).css({"overflow-x":"hidden"})}},_renderMenu:function(A,B){var C=this;D.each(B,function(I,J){C._renderItem(A,J)})},_renderItem:function(B,A){return D("<li></li>").data("item.autocomplete",A).append(D("<a></a>").text(A.label)).appendTo(B)},_move:function(A,B){if(!this.menu.element.is(":visible")){this.search(null,B);return}if(this.menu.first()&&/^previous/.test(A)||this.menu.last()&&/^next/.test(A)){this.element.val(this.term);this.menu.deactivate();return}this.menu[A](B)},widget:function(){return this.menu.element}});D.extend(D.ui.autocomplete,{escapeRegex:function(A){return A.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")},filter:function(A,C){var B=new RegExp(D.ui.autocomplete.escapeRegex(C),"i");return D.grep(A,function(H){return B.test(H.label||H.value||H)})}})}(jQuery));;
/*
 * Lazy Load - jQuery plugin for lazy loading images
 *
 * Copyright (c) 2007-2013 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   http://www.appelsiini.net/projects/lazyload
 *
 * Version:  1.9.3
 *
 */

(function($, window, document, undefined) {
    var $window = $(window);

    $.fn.lazyload = function(options) {
        var elements = this;
        var $container;
        var settings = {
            threshold       : 1200,
            failure_limit   : 0,
            event           : "scroll",
            effect          : "show",
            container       : window,
            data_attribute  : "original",
            skip_invisible  : true,
            appear          : null,
            load            : null,
            placeholder     : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
        };

        function update() {
            var counter = 0;

            elements.each(function() {
                var $this = $(this);
                if (settings.skip_invisible && !$this.is(":visible")) {
                    return;
                }
                if($this.data('lazy-loaded')) return;
			if($('.fullpage_alllist').length){
				$this.trigger("appear");
				counter = 0;
			}else{
				if (settings.container === undefined || settings.container === window) {
						var fold = $window.scrollTop();
				} else {
						var fold = $(settings.container).offset().top;
				}
				if($this.offset().top-fold<0){
					$this.trigger("appear");
					/* if we found an image we'll load, reset the counter */
					counter = 0;
				}else if ($.abovethetop(this, settings) ||
						$.leftofbegin(this, settings)) {
								/* Nothing. */
				} else if (!$.belowthefold(this, settings) &&
						!$.rightoffold(this, settings)) {
								$this.trigger("appear");
								/* if we found an image we'll load, reset the counter */
								counter = 0;
				} else {
						if (++counter > settings.failure_limit) {
								return false;
						}
				}
			}
            });

        }

        if(options) {
            /* Maintain BC for a couple of versions. */
            if (undefined !== options.failurelimit) {
                options.failure_limit = options.failurelimit;
                delete options.failurelimit;
            }
            if (undefined !== options.effectspeed) {
                options.effect_speed = options.effectspeed;
                delete options.effectspeed;
            }
            if($(this).is('.cstlayer img.img_lazy_load')){
                if(!options.threshold || options.threshold<1200){
                    options.threshold=1200;
                }
            }
            $.extend(settings, options);
        }

        /* Cache container as jQuery as object. */
        $container = (settings.container === undefined ||
                      settings.container === window) ? $window : $(settings.container);

        /* Fire one scroll event per scroll. Not one scroll event per image. */
        if (0 === settings.event.indexOf("scroll")) {
		  var ret=true;
          var timer;
          $container.bind(settings.event, function(e) {
            if(elements.length==0){
                $container.unbind(e);
                return;
            }
            if(timer) clearTimeout(timer);				
            timer=setTimeout(function(){
                update();
                var els=elements.filter(function(){return $(this).closest('body').length>0 && !$(this).data('lazy-loaded');})
                elements=els;
            },200)
			return ret;
                
          });
        }

        this.each(function() {
            var self = this;
            var $self = $(self);

            /* If no src attribute given use data:uri. */
            if ($self.attr("src") === undefined || $self.attr("src") === false) {
                if ($self.is("img")) {
                    $self.attr("src", settings.placeholder);
                }
            }
            /* fixed bug#1630 */
            //if(parseInt($self.css("top"))<-100) $self.css("top","");
            /* When appear is triggered load original image. */
            $self.one("appear", function() {
                var selffunc=arguments.callee;
                if (!$(this).data('lazy-loaded')) {
                    if (settings.appear) {
                        var elements_left = elements.length;
                        settings.appear.call(self, elements_left, settings);
                    }
                    $self.data('lazy-loaded',true);
                    $("<img />")
                        .bind("load", function() {

                            var original = $self.attr("data-" + settings.data_attribute);
                            $self.hide();
                            if ($self.is("img")) {
                                $self.attr("src", original);
                            } else {
                                $self.css("background-image", "url('" + original + "')");
                            }
                            $self[settings.effect](settings.effect_speed);

                            /* Remove image from array so it is not looped next time. */
                            var temp = $.grep(elements, function(element) {
                                return !element.loaded;
                            });
                            elements = $(temp);

                            if (settings.load) {
                                var elements_left = elements.length;
                                settings.load.call(self, elements_left, settings);
                            }
                        }).bind('error',function(){						
                            $self.data('lazy-loaded',false);
                            if(selffunc){
                                var errortimes=$self.data('lazy_load_error_times');
                                var firsttime=$self.data('lazy_load_error_firsttime');
                                if(!errortimes) errortimes=0;
                                if(!firsttime){
                                    firsttime=new Date();
                                    $self.data('lazy_load_error_firsttime',firsttime);
                                }else{
                                    var nowtime=new Date();
                                    if(nowtime-firsttime<=100) return;
                                }
                                if(errortimes>1) return;
                                $self.data('lazy_load_error_times',errortimes+1);
                                
                                setTimeout(function(){
                                    selffunc();
                                },1000)
                            }	
					})
                    .attr("src", $self.attr("data-" + settings.data_attribute));
                }
            });

            /* When wanted event is triggered load original image */
            /* by triggering appear.                              */
            if (0 !== settings.event.indexOf("scroll")) {
                $self.bind(settings.event, function() {
                    if (!$self.data('lazy-loaded')) {
                        $self.trigger("appear");
                    }
				});
			}
        });

        /* Check if something appears when window is resized. */
        $window.bind("resize", function() {
            update();
        });

        /* With IOS5 force loading images when navigating with back button. */
        /* Non optimal workaround. */
        if ((/(?:iphone|ipod|ipad).*os 5/gi).test(navigator.appVersion)) {
            $window.bind("pageshow", function(event) {
                if (event.originalEvent && event.originalEvent.persisted) {
                    elements.each(function() {
                        if(!$(this).data('lazy-loaded')) $(this).trigger("appear");
                    });
                }
            });
        }
	  update();
        /* Force initial check if images should appear. */
        $(document).ready(function() {
            update();
        });

        return this;
    };

    /* Convenience methods in jQuery namespace.           */
    /* Use as  $.belowthefold(element, {threshold : 100, container : window}) */

    $.belowthefold = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = (window.innerHeight ? window.innerHeight : $window.height()) + $window.scrollTop();
        } else {
            fold = $(settings.container).offset().top + $(settings.container).height();
        }
        return fold <= $(element).offset().top - settings.threshold;
    };

    $.rightoffold = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.width() + $window.scrollLeft();
        } else {
            fold = $(settings.container).offset().left + $(settings.container).width();
        }

        return fold <= $(element).offset().left - settings.threshold;
    };

    $.abovethetop = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.scrollTop();
        } else {
            fold = $(settings.container).offset().top;
        }
        //bug#2660
        var eleparwid = $(element).height();
        if(eleparwid==0&&$(element).parents().parents().attr('class')=='img_over'){
        	var eleparwid = $(element).parents().parents().height();
        }
        return fold >= $(element).offset().top + settings.threshold  + eleparwid;
    };

    $.leftofbegin = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.scrollLeft();
        } else {
            fold = $(settings.container).offset().left;
        }

        return fold >= Math.max($(element).offset().left + $(element).width(),2)+ settings.threshold ;
    };

    $.inviewport = function(element, settings) {
         return !$.rightoffold(element, settings) && !$.leftofbegin(element, settings) &&
                !$.belowthefold(element, settings) && !$.abovethetop(element, settings);
     };

    /* Custom selectors for your convenience.   */
    /* Use as $("img:below-the-fold").something() or */
    /* $("img").filter(":below-the-fold").something() which is faster */

    $.extend($.expr[":"], {
        "below-the-fold" : function(a) { return $.belowthefold(a, {threshold : 0}); },
        "above-the-top"  : function(a) { return !$.belowthefold(a, {threshold : 0}); },
        "right-of-screen": function(a) { return $.rightoffold(a, {threshold : 0}); },
        "left-of-screen" : function(a) { return !$.rightoffold(a, {threshold : 0}); },
        "in-viewport"    : function(a) { return $.inviewport(a, {threshold : 0}); },
        /* Maintain BC for couple of versions. */
        "above-the-fold" : function(a) { return !$.belowthefold(a, {threshold : 0}); },
        "right-of-fold"  : function(a) { return $.rightoffold(a, {threshold : 0}); },
        "left-of-fold"   : function(a) { return !$.rightoffold(a, {threshold : 0}); }
    });

})(jQuery, window, document);;
(function(D,C){var B={0:0};var A={0:1};D.math={};D.math.sin=function(F){if(F<0){F=F+360}if(F>=360){F=F%360}if(B[F]==C){var E=Math.sin(F*Math.PI/180);B[F]=E}return B[F]};D.math.cos=function(F){if(F<0){F=F+360}if(F>=360){F=F%360}if(A[F]==C){var E=Math.cos(F*Math.PI/180);A[F]=E}return A[F]};D.parseInteger=function(F){var E=parseInt(F);if(isNaN(E)){return 0}return E};D.getElementFatherid=function(E){if(E.prop("id")=="canvas"||E.prop("id")=="site_footer"){return"none"}var F=E.attr("fatherid");if(!F||F==""){if(E.closest("#canvas").length>0){F="canvas"}else{if(E.closest("#site_footer").length>0){F="site_footer"}}}if(!D("#"+F).length){if(E.closest("#canvas").length>0){F="canvas"}else{if(E.closest("#site_footer").length>0){F="site_footer"}}E.removeAttr("fatherid")}return F};D.fn.ab_pos=function(F){var E=D(this);if(E.prop("id")=="canvas"||E.prop("id")=="site_footer"){return 0}if(F=="left"||F=="top"){if(!E.attr("fatherid")||E.attr("fatherid")==""){return E.rel_pos(F)}return E.rel_pos(F)+D("#"+E.attr("fatherid")).ab_pos(F)}};D.fn.ab_pos_cnter=function(E){var F=D(this).ab_pos(E);if(D(this).closest("#site_footer").length>0&&E=="top"){return F+D.parseInteger(D("#site_footer").css(E))}return F};D.fn.rel_pos=function(E){if(E=="left"||E=="top"){return D.parseInteger(D(this).css(E))}};D.divrotate=function(K,F,L,E){K=D(K);var G=K.width();var J=K.height();if(E){G=E[0];J=E[1]}if(L){var I=L[0];var H=L[1];if(D.browser.msie&&D.browser.version<9){G=parseInt(K.data("IEWidth"));J=parseInt(K.data("IEHeight"));I=K.data("IELeft");if(I==C){I=L[0];K.data("IELeft",I)}H=K.data("IETop");if(H==C){H=L[1];K.data("IETop",H)}ieRotate({degree:F,left:I,top:H,width:G,height:J,dom:K})}else{K[0].style.left=Math.round(I)+"px";K[0].style.top=Math.round(H)+"px"}}if(D.browser.safari||D.browser.mozilla||D.browser.opera||(D.browser.msie&&D.browser.version=="9.0")){ieRotate({degree:F,dom:K})}};D.divrotate.getDegreeModMaxPointOrigin=function(N,F,M,G,Q){var K=D.getElementFatherid(N);var E=D("#"+K).ab_pos_cnter("top");var F=F;if(!F){var L=0;var I=G[0];var J=G[1];switch(Q){case"left":L=M[0];break;case"right":L=M[0]+I;break;case"top":L=M[1]+E;break;case"buttom":L=M[1]+J+E;break}return L}else{if(D.browser.msie&&D.browser.version<9){var L=0;switch(Q){case"left":L=N.position().left;break;case"right":L=N.position().left+N.width();break;case"top":L=N.position().top;break;case"buttom":L=N.position().top+N.height();break}return L}var L=0;var I=G[0];var J=G[1];var O=M[0];var H=M[1];if(F>360){F=F%360}var P=D.math.cos(F);var R=D.math.sin(F);switch(Q){case"left":if(F<=90){L=O-J*R}else{if(F>90&&F<=180){L=O-J*R+I*P}else{if(F>180&&F<=270){L=O+I*P}else{if(F>270&&F<=360){L=O}}}}break;case"right":if(F<=90){L=O+I*P}else{if(F>90&&F<=180){L=O}else{if(F>180&&F<=270){L=O-J*R}else{if(F>270&&F<=360){L=O-J*R+I*P}}}}break;case"top":if(F<=90){L=H}else{if(F>90&&F<=180){L=H+J*P}else{if(F>180&&F<=270){L=H+J*P+I*R}else{if(F>270&&F<=360){L=H+I*R}}}}L=L+E;break;case"buttom":if(F<=90){L=H+J*P+I*R}else{if(F>90&&F<=180){L=H+I*R}else{if(F>180&&F<=270){L=H}else{if(F>270&&F<=360){L=H+J*P}}}}L=L+E;break}return L}}})(jQuery);;
/*! LAB.js (LABjs :: Loading And Blocking JavaScript)
    v2.0.3 (c) Kyle Simpson
    MIT License
*/
(function(o){var K=o.$LAB,y="UseLocalXHR",z="AlwaysPreserveOrder",u="AllowDuplicates",A="CacheBust",B="BasePath",C=/^[^?#]*\//.exec(location.href)[0],D=/^\w+\:\/\/\/?[^\/]+/.exec(C)[0],i=document.head||document.getElementsByTagName("head"),L=(o.opera&&Object.prototype.toString.call(o.opera)=="[object Opera]")||("MozAppearance"in document.documentElement.style),q=document.createElement("script"),E=typeof q.preload=="boolean",r=E||(q.readyState&&q.readyState=="uninitialized"),F=!r&&q.async===true,M=!r&&!F&&!L;function G(a){return Object.prototype.toString.call(a)=="[object Function]"}function H(a){return Object.prototype.toString.call(a)=="[object Array]"}function N(a,c){var b=/^\w+\:\/\//;if(/^\/\/\/?/.test(a)){a=location.protocol+a}else if(!b.test(a)&&a.charAt(0)!="/"){a=(c||"")+a}return b.test(a)?a:((a.charAt(0)=="/"?D:C)+a)}function s(a,c){for(var b in a){if(a.hasOwnProperty(b)){c[b]=a[b]}}return c}function O(a){var c=false;for(var b=0;b<a.scripts.length;b++){if(a.scripts[b].ready&&a.scripts[b].exec_trigger){c=true;a.scripts[b].exec_trigger();a.scripts[b].exec_trigger=null}}return c}function t(a,c,b,d){a.onload=a.onreadystatechange=function(){if((a.readyState&&a.readyState!="complete"&&a.readyState!="loaded")||c[b])return;a.onload=a.onreadystatechange=null;d()}}function I(a){a.ready=a.finished=true;for(var c=0;c<a.finished_listeners.length;c++){a.finished_listeners[c]()}a.ready_listeners=[];a.finished_listeners=[]}function P(d,f,e,g,h){setTimeout(function(){var a,c=f.real_src,b;if("item"in i){if(!i[0]){setTimeout(arguments.callee,25);return}i=i[0]}a=document.createElement("script");if(f.type)a.type=f.type;if(f.charset)a.charset=f.charset;if(h){if(r){e.elem=a;if(E){a.preload=true;a.onpreload=g}else{a.onreadystatechange=function(){if(a.readyState=="loaded")g()}}a.src=c}else if(h&&c.indexOf(D)==0&&d[y]){b=new XMLHttpRequest();b.onreadystatechange=function(){if(b.readyState==4){b.onreadystatechange=function(){};e.text=b.responseText+"\n//@ sourceURL="+c;g()}};b.open("GET",c);b.send()}else{a.type="text/cache-script";t(a,e,"ready",function(){i.removeChild(a);g()});a.src=c;i.insertBefore(a,i.firstChild)}}else if(F){a.async=false;t(a,e,"finished",g);a.src=c;i.insertBefore(a,i.firstChild)}else{t(a,e,"finished",g);a.src=c;i.insertBefore(a,i.firstChild)}},0)}function J(){var l={},Q=r||M,n=[],p={},m;l[y]=true;l[z]=false;l[u]=false;l[A]=false;l[B]="";function R(a,c,b){var d;function f(){if(d!=null){d=null;I(b)}}if(p[c.src].finished)return;if(!a[u])p[c.src].finished=true;d=b.elem||document.createElement("script");if(c.type)d.type=c.type;if(c.charset)d.charset=c.charset;t(d,b,"finished",f);if(b.elem){b.elem=null}else if(b.text){d.onload=d.onreadystatechange=null;d.text=b.text}else{d.src=c.real_src}i.insertBefore(d,i.firstChild);if(b.text){f()}}function S(c,b,d,f){var e,g,h=function(){b.ready_cb(b,function(){R(c,b,e)})},j=function(){b.finished_cb(b,d)};b.src=N(b.src,c[B]);b.real_src=b.src+(c[A]?((/\?.*$/.test(b.src)?"&_":"?_")+~~(Math.random()*1E9)+"="):"");if(!p[b.src])p[b.src]={items:[],finished:false};g=p[b.src].items;if(c[u]||g.length==0){e=g[g.length]={ready:false,finished:false,ready_listeners:[h],finished_listeners:[j]};P(c,b,e,((f)?function(){e.ready=true;for(var a=0;a<e.ready_listeners.length;a++){e.ready_listeners[a]()}e.ready_listeners=[]}:function(){I(e)}),f)}else{e=g[0];if(e.finished){j()}else{e.finished_listeners.push(j)}}}function v(){var e,g=s(l,{}),h=[],j=0,w=false,k;function T(a,c){a.ready=true;a.exec_trigger=c;x()}function U(a,c){a.ready=a.finished=true;a.exec_trigger=null;for(var b=0;b<c.scripts.length;b++){if(!c.scripts[b].finished)return}c.finished=true;x()}function x(){while(j<h.length){if(G(h[j])){try{h[j++]()}catch(err){}continue}else if(!h[j].finished){if(O(h[j]))continue;break}j++}if(j==h.length){w=false;k=false}}function V(){if(!k||!k.scripts){h.push(k={scripts:[],finished:true})}}e={script:function(){for(var f=0;f<arguments.length;f++){(function(a,c){var b;if(!H(a)){c=[a]}for(var d=0;d<c.length;d++){V();a=c[d];if(G(a))a=a();if(!a)continue;if(H(a)){b=[].slice.call(a);b.unshift(d,1);[].splice.apply(c,b);d--;continue}if(typeof a=="string")a={src:a};a=s(a,{ready:false,ready_cb:T,finished:false,finished_cb:U});k.finished=false;k.scripts.push(a);S(g,a,k,(Q&&w));w=true;if(g[z])e.wait()}})(arguments[f],arguments[f])}return e},wait:function(){if(arguments.length>0){for(var a=0;a<arguments.length;a++){h.push(arguments[a])}k=h[h.length-1]}else k=false;x();return e}};return{script:e.script,wait:e.wait,setOptions:function(a){s(a,g);return e}}}m={setGlobalDefaults:function(a){s(a,l);return m},setOptions:function(){return v().setOptions.apply(null,arguments)},script:function(){return v().script.apply(null,arguments)},wait:function(){return v().wait.apply(null,arguments)},queueScript:function(){n[n.length]={type:"script",args:[].slice.call(arguments)};return m},queueWait:function(){n[n.length]={type:"wait",args:[].slice.call(arguments)};return m},runQueue:function(){var a=m,c=n.length,b=c,d;for(;--b>=0;){d=n.shift();a=a[d.type].apply(null,d.args)}return a},noConflict:function(){o.$LAB=K;return m},sandbox:function(){return J()}};return m}o.$LAB=J();(function(a,c,b){if(document.readyState==null&&document[a]){document.readyState="loading";document[a](c,b=function(){document.removeEventListener(c,b,false);document.readyState="complete"},false)}})("addEventListener","DOMContentLoaded")})(this);;
var mclick = 'click',mtouchstart = 'mousedown',mtouchend = 'mouseup',mtouchmove = 'mousemove';
if (window.ontouchstart !== undefined) {
	mclick = 'click';mtouchstart = 'touchstart';mtouchend = 'touchend';mtouchmove = 'touchmove';
}
/**Global Function**/
function getSessionExpiredUrl()
{
	$(window).unbind('beforeunload');
	alert(translate('page.sessionTimeout')); 
	window.close();
	return null;
}

function wp_heightAdapt(dom,oldHeight){}


function is_website_mobile(){
	var type=getWebSiteType();
	return type=='mobile';
}

function layer_img_lzld(layerid){
	var imgcontainer=$('#scroll_container');
	var ismobile=is_website_mobile();
	if(!ismobile){
		var chromebug=$('#scroll_container').data('chrome_bug');
		if(chromebug){
			imgcontainer=window;
		}
	}else imgcontainer=window;
	$('#'+layerid+'  img.img_lazy_load').lazyload({
		     threshold  : 200,
			failure_limit : $('#'+layerid+'  img.img_lazy_load').length,
			container : imgcontainer,	
			placeholder:relativeToAbsoluteURL('template/default/images/blank.gif'),
			load:function(){
			 var self=$(this);
			 var id=self.closest('.cstlayer').prop('id');
			if(window['set_thumb_'+id]) window['set_thumb_'+id](this);
		 }
	});
}

function initScrollcontainerHeight(){
	var container=$('#scroll_container');
	var cvhgt = window.innerHeight || window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	if (! window.MobileModel) container.height(cvhgt);
	$('#scroll_container_bg').css('height',cvhgt);
}

function noRightClick(){
	//禁用鼠标右键  CTRL+C 复制   CTRL+V  粘贴   CTRL+S 保存
	$(function(){
		document.body.oncontextmenu=function(){return false;}
		$(document).keydown(function(event) {
					if ((event.ctrlKey&&event.which==67) || (event.ctrlKey&&event.which==86)) {
							return false;
					}        
			})
			$(document).keydown(function(event) {
					if ((event.ctrlKey&&event.which==67) || (event.ctrlKey&&event.which==86) || (event.ctrlKey&&event.which==83)) {
							return false;
					}        
			})
	})
}

function doc_end_exec(){
	$(function(){
		$(document).triggerHandler('lastexec');
	})
	$('#scroll_container').css("visibility", 'visible');
	$('.mloading-mask').remove();
	$(window).load(function(){
		var heightadaptel=$("#canvas").find(".cstlayer[type='article_detail'],.cstlayer[type='product_detail'],.cstlayer[type='wzl'],.cstlayer[type='fxdp'],.cstlayer[type='mcoupon'],.cstlayer[type='coupon'],.cstlayer[type='tb_product_detail'],.cstlayer[type='tb_product_list'],.cstlayer[type='product_list'],.cstlayer[type='wkj'],.cstlayer[type='crowdfunding'],.cstlayer[type='btag'],.cstlayer[type='greetingcard'],.cstlayer[type='weiredpack'],.cstlayer[type='mseckill_detail'],.cstlayer[type='mgroupon_detail'],.cstlayer[type='mgroupons_detail'],.cstlayer[type='groupon_detail'],.cstlayer[type='jfpro_detail'],.cstlayer[type='mjfpro_detail'],.cstlayer[type='payknow_detail'],.cstlayer[type='mpayknow_detail']");
		if(heightadaptel.length){
			heightadaptel.each(function(){
				if($(this).data('not_need_heightadapt')) return;
				wp_heightAdapt($(this));
			})
			window.scroll_container_adjust();
		}
	});
	
	var imgcontainer=$('#scroll_container');
	var ismobile=is_website_mobile();
	if(!ismobile){
		var chromebug=$('#scroll_container').data('chrome_bug');
		if(chromebug){
			imgcontainer=window;
		}
	}else imgcontainer=window;
	$('img.img_lazy_load').lazyload({
		     threshold  : 200,
			failure_limit : $('img.img_lazy_load').length,
			container : imgcontainer,	
			placeholder:relativeToAbsoluteURL('template/default/images/blank.gif'),
			load:function(){
			 var self=$(this);
			 var id=self.closest('.cstlayer').prop('id');
			if(window['set_thumb_'+id]) window['set_thumb_'+id](this);
		 }
	});
	
	var showEffectsFunc=true;
	var func=function(){
		if(!showEffectsFunc) return;
		$('.cstlayer').showEffects();
		showEffectsFunc=false;
	}
	$(window).load(function(){
		func();
	})

	$(function(){
		setTimeout(func,1500);
	});
}

function wp_save_cart_num(num){
    $('#canvas').data('wp_shopcart_num',num);
}

function wp_op_cart_num(){
    if($('#canvas').data('wp_shopcart_num')!=null){
        $(".wp-shopping_cart-con-num").each(function(){
            $(this).html( $('#canvas').data('wp_shopcart_num'));
        });
    }
}

function wpfullcolumn_float(unbindFunc){
    var wp_ibody = $('#scroll_container'),wp_icontent = $('#canvas'),wp_icontent_foot = $('#site_footer #footer_content');
    $('.full_column,.cstlayer').filter('[infixed=1]').each(function(){
        var fc_lid = '#'+$(this).attr('id');
        var $fc_lid = $(this);
        var wp_layer_abs = $('#canvas '+fc_lid),wp_layer_abs_footer = $('#site_footer #footer_content '+fc_lid),wp_layer_fix= $('#scroll_container '+fc_lid);
        var currpoor = ($('.full_width').width() - $('.full_content').width())/2;
        var isinfixed = $fc_lid.attr('infixed');
		
		var infixed_html = $(document).data(fc_lid+'infixed_content');
		if(!infixed_html){		 
			infixed_html =$fc_lid.html(); $(document).data(fc_lid+'infixed_content',infixed_html);
		}
		var fullc_wid_bgcolor = $(document).data(fc_lid+'fullc_wid_bgcolor');
		if(!fullc_wid_bgcolor){		 
			fullc_wid_bgcolor =$fc_lid.find('.full_width').css('background-color'); $(document).data(fc_lid+'fullc_wid_bgcolor',fullc_wid_bgcolor);
		}
        var fullc_con_bgcolor = $(document).data(fc_lid+'fullc_con_bgcolor');
		if(!fullc_con_bgcolor){		 
			fullc_con_bgcolor =$fc_lid.find('.full_content').css('background-color'); $(document).data(fc_lid+'fullc_con_bgcolor',fullc_con_bgcolor);
		}
        var fullc_hoverbgcolor = $(document).data(fc_lid+'fullc_hoverbgcolor');
		if(!fullc_hoverbgcolor){		 
			fullc_hoverbgcolor =$fc_lid.attr('zindextopcolor'); $(document).data(fc_lid+'fullc_hoverbgcolor',fullc_hoverbgcolor);
		}
        var fullc_zindextopOpacity = $(document).data(fc_lid+'fullc_zindextopOpacity');
		if(!fullc_zindextopOpacity){		 
			fullc_zindextopOpacity =$fc_lid.attr('zindextopOpacity'); $(document).data(fc_lid+'fullc_zindextopOpacity',fullc_zindextopOpacity);
		}
		var fullc_hoverbgcolorSet = $(document).data(fc_lid+'fullc_hoverbgcolorSet');
		if(!fullc_hoverbgcolorSet){		 
			fullc_hoverbgcolorSet =$fc_lid.attr('infixed');
			var zindextopcolorset =$fc_lid.attr('zindextopcolorset');
            if(!zindextopcolorset)fullc_hoverbgcolorSet=''
            $(document).data(fc_lid+'fullc_hoverbgcolorSet',fullc_hoverbgcolorSet);
		}
        
		
        if(isinfixed==1) {
            var nPos = $('#scroll_container').scrollTop() ;
		  var container=$('#scroll_container');
		  var is_mobile_preview=false;
		  if(is_website_mobile()){
				nPos = $(window).scrollTop() ;
			}
		if($('.wp-mobile-device-premask').length){
			is_mobile_preview=true;
		}
            //oPos get第一次正确的值,以后不再获得
            var oPos_tmp = $(document).data("fixed_"+$(this).attr('id')+"_oPos");
		  var inbuttom=$(document).data("fixed_"+$(this).attr('id')+"_inbuttom");
            if(!oPos_tmp){
                oPos_tmp =  $fc_lid.ab_pos_cnter('top');
                $(document).data("fixed_"+$(this).attr('id')+"_oPos",oPos_tmp);
            }
		if(inbuttom==null){
                inbuttom =  $fc_lid.attr('inbuttom');
                $(document).data("fixed_"+$(this).attr('id')+"_inbuttom",inbuttom);
            }
            var oPos = $(document).data("fixed_"+$(this).attr('id')+"_oPos");
            if(oPos==0 && $fc_lid.parent().is('#canvas')) return;
            if(oPos==0){
				var oldsty = $fc_lid.attr('oldstyle')||'';
				if(oldsty.match(/top:\d+px/)){
					var oldtop = oldsty.match(/top:\d+px/);
					oldtop = oldtop[0].match(/\d+/);
					oPos = oldtop[0];
				}
			}
            if(inbuttom>0){
                //存在页脚中
                if(nPos > oPos){
                    var newleft = $('.full_column').ab_pos('left') + currpoor ;
				if(wp_layer_abs_footer.is('.cstlayer')){
					newleft =wp_layer_abs_footer.offset().left+$(container).scrollLeft();
					if(is_mobile_preview){
						newleft =wp_layer_abs_footer .ab_pos_cnter('left');
					}
				}
                    if(wp_layer_abs_footer.length>0){
                        var oldstyle = wp_layer_abs_footer.attr('style');
                        wp_layer_fix = wp_layer_abs_footer.clone(true).appendTo(container)
                        .attr('oldstyle',oldstyle).attr('inbuttom','1')
                        .attr('fc_fh_istop','1')
                        .addClass('full_column-fixed');
                        wp_op_cart_num();
				if(wp_layer_abs_footer.attr('fatherid')) wp_layer_fix.attr('fatherid',wp_layer_abs.attr('fatherid'));
                    wp_layer_fix.show();wp_layer_fix.css({'position':'fixed','top':'','left':newleft,'z-index':'999'});
				if(is_mobile_preview){
						wp_layer_fix.css({top:nPos+'px'});
				}
                    wp_layer_abs_footer.remove();
                    }else{
					if(is_mobile_preview){
						wp_layer_fix.css({top:nPos+'px'});
					}							
				}
                  if(fullc_hoverbgcolorSet){
                    wp_layer_fix.find('.full_width').css({'background-color':fullc_hoverbgcolor,'transition':'1.2s'})
                    wp_layer_fix.find('.full_content').css({'background-color':'','transition':'1.2s'})
                  }
                }else{
                    oldstyle = wp_layer_fix.attr('oldstyle');
                    if(wp_layer_abs_footer.length==0){
					wp_icontent_foot=$('#site_footer #footer_content');
					if(wp_layer_fix.attr('fatherid')){
						wp_icontent_foot=$('#'+wp_layer_fix.attr('fatherid'));
                    }
                        wp_layer_abs_footer = wp_layer_fix.clone(true).appendTo(wp_icontent_foot)
                        .attr('fc_fh_istop','')
                        .attr('style',oldstyle).attr('inbuttom','1').removeClass('full_column-fixed');
					if(wp_layer_fix.attr('fatherid')){
						wp_layer_abs_footer.attr('fatherid',wp_layer_fix.attr('fatherid'));
					}
                        wp_layer_abs_footer.show();wp_layer_fix.remove();
                    }
                  if(fullc_hoverbgcolorSet){
                    wp_layer_fix.find('.full_width').css('background-color',fullc_wid_bgcolor)
                    wp_layer_fix.find('.full_content').css('background-color',fullc_con_bgcolor)
                  }
                  wp_op_cart_num();
                }
            }else{
              
                if(nPos > oPos){
                    var newleft = Math.abs(parseFloat($('.full_column').find('.full_width').css('left')));
				if(wp_layer_abs.is('.cstlayer')){
					newleft =wp_layer_abs.offset().left+$(container).scrollLeft();
					if(is_mobile_preview){
						newleft =wp_layer_abs.ab_pos_cnter('left');
					}
				}
				var fatherid=$.getElementFatherid(wp_layer_abs);
				$(document).data("fixed_"+wp_layer_abs.attr('id')+"_father",$('#'+fatherid));
                    //clone(true) has true 可以存储data
                    if(wp_layer_abs.length>0){
                        var oldstyle = wp_layer_abs.attr('style');
                        var func=function(){ //未加载完拖拽滚动条为空异常处理
                            var success=true;
                            var newleft = Math.abs(parseFloat($(fc_lid).find('.full_width').css('left')));
                            if(!(newleft)){success=false;}
                            if(success){
                                $(fc_lid).css('left',newleft);
                            }else {
                                setTimeout(func,100);
                            }
                         }
                         func();
                        var layerdiv=$("<div/>").attr({
                                'id':wp_layer_abs.attr('id'),'class':wp_layer_abs.attr('class'),'infixed':1,'style':wp_layer_abs.attr('style'),'zindextopcolor':wp_layer_abs.attr('zindextopcolor'),'zindextopcolorset':wp_layer_abs.attr('zindextopcolorset'),'zindextopopacity':wp_layer_abs.attr('zindextopopacity')});
						if(wp_layer_abs.attr('fatherid')) layerdiv.attr('fatherid',wp_layer_abs.attr('fatherid'));
							container.append(layerdiv);
							wp_layer_abs.remove();
							var wp_layer_fix =$(fc_lid).html(infixed_html)
							.attr('oldstyle',oldstyle)
							.attr('fc_fh_istop',1)
                            .addClass('full_column-fixed');                          
                            wp_layer_fix.show();wp_layer_fix.css({'position':'fixed','top':'','left':newleft,'z-index':'999'});
                             wp_op_cart_num();
						if(is_mobile_preview){
								wp_layer_fix.css({top:nPos+'px'});
						}
                    if(fullc_hoverbgcolorSet){
                        var opacityval = wp_layer_fix.find('.full_width').css('opacity');
                        if(fullc_zindextopOpacity && fullc_zindextopOpacity>0) opacityval = fullc_zindextopOpacity;
                        wp_layer_fix.find('.full_width').css({'background':fullc_hoverbgcolor,'transition':'1.2s','opacity': opacityval})
                        wp_layer_fix.find('.full_content').css({'background-color':"",'transition':'1.2s'})
                    }
                        ////fix时 full_width宽为空异常处理
                        var funco=function(){
                            var full_width_val = Math.abs(parseFloat($(fc_lid).find('.full_width').css('left')));
                            if(!full_width_val){
                                $(fc_lid).children('.full_width').css({left:0-$('#canvas').offset().left-$.parseInteger($('#canvas').css("borderLeftWidth")),width:$('#scroll_container_bg').width()});
                                if(!(Math.abs(parseFloat($(fc_lid).find('.full_width').css('left'))))){
                                    setTimeout(funco,100);
                                }
                            }
                        }
                        funco();
						var imgcontainer=$('#scroll_container');
						var ismobile=is_website_mobile();
						if(!ismobile){
							var chromebug=$('#scroll_container').data('chrome_bug');
							if(chromebug){
								imgcontainer=window;
							}
						}else imgcontainer=window;
                        $('.full_content img.img_lazy_load').lazyload({
                           threshold  : 200,
                        	  failure_limit : $('img.img_lazy_load').length,
                        	  container : imgcontainer,	
                        	  placeholder:relativeToAbsoluteURL('template/default/images/blank.gif'),
                        	  load:function(){
                        		 var self=$(this);
                        		 var id=self.closest('.cstlayer').prop('id');
                        		if(window['set_thumb_'+id]) window['set_thumb_'+id](this);
                        	 }
                        });	
                    }else{
						if(is_mobile_preview){
							wp_layer_fix.css({top:nPos+'px'});
						}	
						if(oPos==0 && $.isFunction(unbindFunc)) {
							var lasttimes=wp_layer_fix.data('last_times');
							wp_layer_fix.data('last_times',1);
							if(fullc_hoverbgcolorSet){
								if(lasttimes!='1'){
									var opacityval = wp_layer_fix.find('.full_width').css('opacity');
									var layer_fix_full_width=wp_layer_fix.children('.full_width');
									var layer_fix_full_content=wp_layer_fix.children('.full_content');
									if(fullc_zindextopOpacity && fullc_zindextopOpacity>0) opacityval = fullc_zindextopOpacity;
									wp_layer_fix.attr('fc_fh_istop','1');
									if(!layer_fix_full_width.data('fixed_is_mousein')) layer_fix_full_width.attr('style',wp_layer_fix.data('full_width_style'));
									if(!layer_fix_full_content.data('fixed_is_mousein')) layer_fix_full_content.attr('style',wp_layer_fix.data('full_content_style'));
									if(!layer_fix_full_width.data('fixed_is_mousein')) layer_fix_full_width.css({'background-color':fullc_hoverbgcolor,'transition':'1.2s','opacity': opacityval})
									if(!layer_fix_full_content.data('fixed_is_mousein')) layer_fix_full_content.css({'background-color':"",'transition':'1.2s'})
								}
							}else{
								unbindFunc();
							}
						}
					}
                }else{
                    if( wp_layer_fix.data('always_fix')){
						if(is_mobile_preview){
							wp_layer_fix.css({top:nPos+'px'});
						}
						var lasttimes=wp_layer_fix.data('last_times');
						wp_layer_fix.data('last_times',2);
						if(fullc_hoverbgcolorSet && lasttimes!=2){
							wp_layer_fix.attr('fc_fh_istop','');
							var layer_fix_full_width=wp_layer_fix.children('.full_width');
							var layer_fix_full_content=wp_layer_fix.children('.full_content');
							if(!layer_fix_full_width.data('fixed_is_mousein')) layer_fix_full_width.attr('style',wp_layer_fix.data('full_width_style'));
							if(!layer_fix_full_content.data('fixed_is_mousein')) layer_fix_full_content.attr('style',wp_layer_fix.data('full_content_style'));
                        }
						return;
					}
                    oldstyle = wp_layer_fix.attr('oldstyle');
                    if(!wp_layer_abs.length>0){
                        var layerdiv=$("<div/>").attr({
                                'id':wp_layer_fix.attr('id'),'class':wp_layer_fix.attr('class'),'infixed':1,'style':wp_layer_fix.attr('oldstyle'),'zindextopcolor':wp_layer_fix.attr('zindextopcolor'),'zindextopcolorset':wp_layer_fix.attr('zindextopcolorset')});
				    if(wp_layer_fix.attr('fatherid')) layerdiv.attr('fatherid',wp_layer_fix.attr('fatherid'));
				    wp_icontent = $(document).data("fixed_"+wp_layer_fix.attr('id')+"_father");
				    if(!wp_icontent.length) wp_icontent=$('#canvas');
						wp_icontent.append(layerdiv);
						var fullwidthshow=wp_layer_fix.children('.full_width').data('fixed_is_mousein');
                        var fullcontentshow=wp_layer_fix.children('.full_content').data('fixed_is_mousein');
                        wp_layer_fix.remove();
                        wp_layer_abs =$(fc_lid).html(infixed_html)
                        .attr('oldstyle',oldstyle)
                        .attr('fc_fh_istop','')
                        .removeClass('full_column-fixed');
                        wp_layer_abs.show();
                        wp_op_cart_num();
                        //
                        if(fullc_hoverbgcolorSet){
                            if(!fullwidthshow && fullc_wid_bgcolor) wp_layer_abs.children('.full_width').css('background-color',fullc_wid_bgcolor)
                            if(!fullcontentshow && fullc_con_bgcolor) wp_layer_abs.children('.full_content').css('background-color',fullc_con_bgcolor)
                        }
                        //为空异常处理
                        var funco=function(){
                            var full_width_val = Math.abs(parseFloat($(fc_lid).find('.full_width').css('left')));
                            if(!(full_width_val)){
                                $(fc_lid).children('.full_width').css({left:0-$('#canvas').offset().left-$.parseInteger($('#canvas').css("borderLeftWidth")),width:$('#scroll_container_bg').width()});
                                if(!(Math.abs(parseFloat($(fc_lid).find('.full_width').css('left'))))){
                                    setTimeout(funco,100);
                                }
                            }
                        }
                        funco();
				    var imgcontainer=$('#scroll_container');
					var ismobile=is_website_mobile();
					if(!ismobile){
						var chromebug=$('#scroll_container').data('chrome_bug');
						if(chromebug){
							imgcontainer=window;
						}
					}else imgcontainer=window;
                        $('.full_content img.img_lazy_load').lazyload({
                           threshold  : 200,
                        	  failure_limit : $('img.img_lazy_load').length,
                        	  container : imgcontainer,	
                        	  placeholder:relativeToAbsoluteURL('template/default/images/blank.gif'),
                        	  load:function(){
                        		 var self=$(this);
                        		 var id=self.closest('.cstlayer').prop('id');
                        		if(window['set_thumb_'+id]) window['set_thumb_'+id](this);
                        	 }
                        });	
                    }
                }
            }
        }
    });
}

function getTop(){//for ie6 css hack
  return document.documentElement.scrollTop;
}

function init_fullcolumn_bottomfixed_code(){
	var bottomel=$('.full_column,.cstlayer').filter('.full_column-bottomfixed');
	bottomel.each(function(){
			var self=$(this);
			var container=$('#scroll_container');
			var newleft=$('#canvas').offset().left;
			var ismobile=is_website_mobile();
			if(ismobile){
				setTimeout(function(){
					var newleft=$('#canvas').offset().left;
					self.css({'left':newleft+'px'})
				},500);
			}else if(self.attr('type')=='box'){
                var old_left = self.offset().left;
                newleft += old_left;
            }
			self.css({'position':'fixed','top':'',bottom:'0','left':newleft+'px','z-index':'999',visibility:'visible'});
	})
	$(function(){
			var is_mobile_preview=false;
			if($('.wp-mobile-device-placeholder').length){
				is_mobile_preview=true;
			}
			if(is_mobile_preview){
				setInterval(function(){
					var oritop=$('#scroll_container').scrollTop();
					bottomel.css('bottom',(0-oritop)+'px');
				},60)
			}
	})
}

function init_fullcolumn_fixed_code(){
	$(function(){
			setTimeout(function(){
					$('.full_column,.cstlayer').filter('[infixed=1]').each(function(){
					var self=$(this);
					 var container=$('#scroll_container');
					 var is_mobile_preview=false;
					 if($('.wp-mobile-device-premask').length){
						is_mobile_preview=true;
					}
					if(self.parent().is('#canvas')&&parseInt(self.css('top'))==0){
					var currpoor = ($('.full_width').width() - $('.full_content').width())/2;
					var newleft = self.ab_pos('left') + currpoor ;
					if(self.is('.cstlayer')){
						newleft =self.offset().left+$('#scroll_container').scrollLeft();
						if(is_mobile_preview){
							newleft =self.ab_pos_cnter('left');
						}
					}
					var wp_layer_abs=self;
					var layerid=wp_layer_abs.attr('id');
					 var oldstyle = wp_layer_abs.attr('style');
					var layerhtml=wp_layer_abs.html();
					var layerattr={
						id:wp_layer_abs.attr('id'),
						'class':wp_layer_abs.attr('class'),
						infixed:1,
						'zindextopcolor':wp_layer_abs.attr('zindextopcolor'),
						style:wp_layer_abs.attr('style'),
					};
					var layerattrparams=['zindextopcolorset','zindextopColor','zindextopOpacity'];
					for(var i=0;i<layerattrparams.length;i++){
						layerattr[layerattrparams[i]]=wp_layer_abs.attr(layerattrparams[i]);
					}
					var layerdiv=$("<div/>").attr(layerattr);
					wp_layer_abs.remove();
					container.append(layerdiv);
					var wp_layer_fix =$('#'+layerid).html(layerhtml)
					.attr('oldstyle',oldstyle)
                    .addClass('full_column-fixed');                   
					wp_layer_fix.data('always_fix',true);
                    wp_layer_fix.show();wp_layer_fix.css({'position':'fixed','top':'','left':newleft,'z-index':'999'})
                    wp_op_cart_num();
					if($.browser.msie && ($.browser.version < 9)){
						wp_layer_fix.css({'top':'0px'});
						wp_layer_fix.find('.full_width').css({'top':'0px'});
					}
					wp_layer_fix.data('full_width_style',wp_layer_fix.children('.full_width').attr('style'));
					wp_layer_fix.data('full_content_style',wp_layer_fix.children('.full_content').attr('style'));
					var ismobile=is_website_mobile();
					var imgcontainer=window;
					if(!ismobile) imgcontainer=$('#scroll_container').add(window);
					wp_layer_fix.find('img.img_lazy_load').lazyload({
							threshold  : 200,
							failure_limit : wp_layer_fix.find('img.img_lazy_load').length,
							container : imgcontainer,
							placeholder:relativeToAbsoluteURL('template/default/images/blank.gif'),
							load:function(){
								 var self=$(this);
								 var id=self.closest('.cstlayer').prop('id');
								if(window['set_thumb_'+id]) window['set_thumb_'+id](this);
							 }
					});	
					// 固定通栏里显示动画
					wp_layer_fix.find('.cstlayer:not(.now_effecting)').showEffects();
									//explain:修复bug(2282多语言模块放置固定的通栏后异常),author:fpf,date:2015/03/30,action:add;
									var $multilingual = $(document).find('.wp-multilingual_content');
									if($multilingual.get(0) != 'undefined'){
											var $multilingual_content = $multilingual.find('.wp-content > .overz');
											if(parseInt($multilingual_content.length) > 1){
													$multilingual.find('.wp-content > .overz:last').remove();
											}
									}
									wp_layer_fix.find('.cstlayer[type=twitter]').each(function(){
										var code=$(this).data('wpcode');
										if(code){
											$(this).find('.wp-twitter_content').html(code);
										}
									})
									wp_layer_fix.find('.cstlayer[type=weibofollowbutton]').each(function(){
										var code=$(this).data('wpcode');
										$LAB.script('//tjs.sjs.sinajs.cn/open/api/js/wb.js');
										if(code){
											$(this).find('.wp-weibofollowbutton_content').html(code);
										}
									})
							}
					});
		// 修复“通栏设置‘固定显示’后导致‘鼠标滚轮’事件异常（bug#4230）”
		$(document).bind("mousewheel DomMouseScroll MozMousePixelScroll", function(e){
			e = e || window.event;			
			var $target = $(e.target).closest('.full_column[infixed="1"],.cstlayer[infixed="1"]');
			if ($target.length > 0) {
				var wheeldelta=e.wheelDelta;
				var detail=e.detail||e.originalEvent.detail;
				if(e.type=='mousewheel'){
					var wheeldelta=e.deltaY || e.originalEvent.deltaY;
					wheeldelta=(wheeldelta>0)?1:-1;
				}else{
					var wheeldelta=e.wheelDelta || e.originalEvent.wheelDelta;
					if(!wheeldelta) wheeldelta=detail;
				}
				var $win = $(window),$stainer = $('#scroll_container'),
				$scroll = $stainer.height() <= $win.height() ? $stainer : $win,
				movey = wheeldelta * -(Math.abs(detail) > 3 ? 1 : 40);
				$scroll.scrollTop($scroll.scrollTop() - movey);
				$win = $stainer = $scroll = movey = null;
			}
			$target = null;
		});
					//explain:修复flash模块在360安全浏览器极速模式下鼠标:hover后无法触发滚动效果，该事件在采用Webkit内核的浏览器下都会触发,author:fpf,date:2015-01-15,action:add;
					$('div.wp-flash_content').each(function(){
							$(this).unbind('mousewheel').bind('mousewheel',function(event){
									var scrolltop=$('#scroll_container').scrollTop();
									if(event.wheelDelta>0){
											$('#scroll_container').scrollTop(scrolltop-50);
									} else{
											$('#scroll_container').scrollTop(scrolltop+50);
									}
							});
					});

			},300);
	})
	
	if(is_website_mobile()){
		var need_unbind=false;
		$(window).scroll(function(e){
			var unbindfunc=function(){
				need_unbind=true;
			}
			wpfullcolumn_float(unbindfunc);
			if(need_unbind){
				$(window).unbind(e);
			}
		});
	}else{
		var need_unbind=false;
		$('#scroll_container').scroll(function(e){
			var unbindfunc=function(){
				need_unbind=true;
			}
			wpfullcolumn_float(unbindfunc);
			if(need_unbind){
				$('#scroll_container').unbind(e);
			}
		});
	}
}

function initCanvasHeight(){
	var maxheight=0;
	var helperfunc=function(dom){
		var degree=dom.data('deg')||dom.attr('deg');
		var pos=[parseInt(dom.css('left')),parseInt(dom.css('top'))]
		var w=dom.width();
		var h=dom.height();
		if(dom.hasClass('cstlayer')){
			var buttompos=$.divrotate.getDegreeModMaxPointOrigin(dom,degree,pos,[w,h],'buttom');
		}else{
			var buttompos=dom.ab_pos_cnter('top')+parseInt(dom.css('height'));
		}
		if(dom.data('wopop_effect_oristyle')) {
			var style=dom.data('wopop_effect_oristyle');
			var topregexp=/(?:^|;)\s*top\s*:\s*(-?\d+)(?:\.\d+)?px/;
			var topmatches=style.match(topregexp);
			if(topmatches){
				var oritop=parseInt(topmatches[1]);
				var nowt=parseInt(dom.css('top'))
				var domfatherid=$.getElementFatherid(dom);
				buttompos=buttompos-nowt+oritop;
				if(domfatherid && domfatherid!='canvas' && domfatherid!='site_footer' && $('#'+domfatherid).length){
					buttompos=oritop+dom.height()+$('#'+domfatherid).ab_pos('top');
				}
			  }
		  }
		  return buttompos;
	}
	var filterfunc=function(){
		return $(this).is(":not(div[deleted='deleted'])") && $(this).attr('childdel') != 'del';
	}
	$('#canvas  .cstlayer,#canvas  .full_column').filter(filterfunc).each(function(){
		var canvheight=helperfunc($(this));
		if(canvheight>maxheight) maxheight=canvheight;
	})
	$("#canvas").data('layermaxheight',maxheight);
	//#5460
	setTimeout(function(){
		$('#site_footer').find('.cstlayer').each(function(){
			var sitetop = parseInt($('#site_footer').css('top'));
			var thistop = parseInt($(this).css('top'))
			if(thistop<0&&sitetop<-thistop) {$(this).css('top',-sitetop);}
		})
	},100)
}

function fullcolumn_HoverInit(params){
    if(!params.full_con.bg)params.full_con.bg=''
    if(!params.full.bg)params.full.bg=''
    var thisFHopacity= 1;
    var fc_lid = '#'+params.full.id
    var zindextopColor =$(fc_lid).attr('zindextopcolor');
    var zindextopOpacity =$(fc_lid).attr('zindextopOpacity');
    var zindextopColorSet =$(fc_lid).attr('zindextopcolorset');
	if(!zindextopColorSet)zindextopColor=''
	$(document).data(fc_lid+'fullc_wid_bgcolor',params.full.bg);
	$(document).data(fc_lid+'fullc_con_bgcolor',params.full_con.bg);
    if(params.full.hover){
		var setElBackgroundColor=function(el,color){
			var bgkey="background-color";
			if(color && color.match(/(-webkit-|-moz-|-ms-|-o-)?([a-z]+)\-gradient\b/i)){
				bgkey='background-image';
			}
			var origin=el.css(bgkey);
			if(origin) el.data('_old_css_key_'+bgkey,origin);
			el.css(bgkey,color);
		}
		var clearElBackgroundColor=function(el,color){
			var bgkey="background-color";
			if(color && color.match(/(-webkit-|-moz-|-ms-|-o-)?([a-z]+)\-gradient\b/i)){
				bgkey='background-image';
			}
			var origin=el.data('_old_css_key_'+bgkey);
			if(!origin) origin='';
			el.css(bgkey,origin);
		}
        $("body").on('mouseover','#'+params.full.id+' .full_width',function(e){
			$("#"+params.full.id+">.full_width").css({"opacity":params.full.opacity}).data('fixed_is_mousein',true);
			setElBackgroundColor($("#"+params.full.id+">.full_width"),params.full.hover);
        }).on('mouseout','#'+params.full.id+' .full_width',function(e){
            if(params.full.bgopacity){thisFHopacity = params.full.bgopacity;}
			else{thisFHopacity = "";}
            var parfbg = ''
            if($(fc_lid).attr('fc_fh_istop')&&zindextopColorSet){
                parfbg=zindextopColor
                thisFHopacity = zindextopOpacity;
                
			}else parfbg = params.full.bg;
			clearElBackgroundColor($("#"+params.full.id+">.full_width"),params.full.hover);
            $("#"+params.full.id+">.full_width").css({"background-color":parfbg,"opacity":thisFHopacity}).data('fixed_is_mousein',false);
        });
        if(params.full_con.hover=='transparent'){
            $("#scroll_container").on('mouseover','#'+params.full.id+' .full_content',function(e){
				$("#"+params.full.id+">.full_content").css({"opacity":params.full.opacity}).data('fixed_is_mousein',true);
				setElBackgroundColor($("#"+params.full.id+">.full_content"),params.full.hover);
            }).on('mouseout','#'+params.full.id+' .full_content',function(e){
				$("#"+params.full.id+">.full_content").css({"opacity":"1"}).data('fixed_is_mousein',false);
				clearElBackgroundColor($("#"+params.full.id+">.full_content"),params.full.hover);
				setElBackgroundColor($("#"+params.full.id+">.full_content"),params.full.bg);
            });
        }
    }
    if(params.full_con.hover||params.full.hover){
        $("body").on('mouseover','#'+params.full_con.id+' .full_content',function(e){
        var fc_opacity = params.full_con.opacity?params.full_con.opacity:''
        if(fc_opacity==0)fc_opacity=''
            $("#"+params.full_con.id+">.full_content").css({"opacity":fc_opacity}).data('fixed_is_mousein',true);
			$("#"+params.full.id+">.full_width").css({"opacity":params.full.opacity}).data('fixed_is_mousein',true);
			setElBackgroundColor($("#"+params.full.id+">.full_width"),params.full.hover);
			setElBackgroundColor($("#"+params.full.id+">.full_content"),params.full_con.hover);
        }).on('mouseout','#'+params.full_con.id+' .full_content',function(e){
            var parfcbg ='', parfbg1 = ''
            if($(fc_lid).attr('fc_fh_istop')&&zindextopColorSet){
              parfbg1 = zindextopColor
              parfcbg=''
            }else{
              parfcbg = params.full_con.bg;parfbg1 = params.full.bg;
			}
			$("#"+params.full_con.id+">.full_content").css({"background-color":parfcbg,"opacity":''}).data('fixed_is_mousein',false);
			clearElBackgroundColor($("#"+params.full.id+">.full_content"),params.full_con.hover);
			setElBackgroundColor($("#"+params.full.id+">.full_content"),parfcbg);
			thisFHopacity ='';
			if(params.full.bgopacity)thisFHopacity = params.full.bgopacity?params.full.bgopacity:'';
			if($(fc_lid).attr('fc_fh_istop')&&zindextopOpacity){
				thisFHopacity=zindextopOpacity;
			}
			$("#"+params.full.id+">.full_width").css({"opacity":thisFHopacity}).data('fixed_is_mousein',false);
			clearElBackgroundColor($("#"+params.full.id+">.full_width"),params.full.hover);
			setElBackgroundColor($("#"+params.full.id+">.full_width"),parfbg1);
        });
    }
}

function fullcolumn_bgvideo_init_func(videoParams){
	var domid=videoParams.id,dom=$('#'+domid),$bauto=videoParams.bgauto,$ctauto=videoParams.ctauto,$buse=videoParams.bVideouse,
		$cuse=videoParams.cVideouse,videoH = videoParams.bgvHeight,videoW = videoParams.bgvWidth;
	var $fullwidth=$('#'+domid+' .full_width'),fheight=$fullwidth.height(),$contentwidth=$('#'+domid+' .full_content');
	var dheight=dom.height();
	if($buse=='usevideo'){
		var $fullDiv=dom.find('.fullwidth_vdiv'),
			$fullBg=dom.find('.fullwidth_bg'),
			vwidht=$('.fullwidth_vdiv').width();
		var videoRatio = videoH / videoW;
		var theight=$.parseInteger(vwidht*videoRatio);
		var newWidth=$.parseInteger(fheight/videoRatio);
		if (theight!='0') {
			var ntheight=theight;
		}else{
			var ntheight=dheight;
		}
		$fullDiv.height(dheight);
		$fullDiv.find('.fullwidth_video').height(dheight);
		$fullDiv.find('.fullwidth_bg').height(dheight);
	}
	if($bauto=='noautoplay' && $buse=='usevideo'){
		var $bvideo=$fullwidth.find('.fullwidth_video');
		$('#'+domid).click(function(){
			$bvideo[0].play();
		});
	}
	if($ctauto=='noautoplay' && $cuse=='usevideo'){
		var $cvideo=$contentwidth.find('.content_video');
		$('#'+domid).click(function(){
			$cvideo[0].play();
		});
	}
}

$.fn.layer_ready=function(func){
	var is_exec=false;
	var execfunc=function(){
		if(is_exec) return;
		try{
			func();
		}catch(e){}
		is_exec=true;
	}
	$(this).bind('layer_ready',function(){
		execfunc();
	})
	
	$(function(){
		execfunc();
	})
};

(function(){
	var is_init=false;
	var init_pageinfo={}
	var is_layer_add={};
	var PageHistory={
		init:function(layerid,pageid){
			if(history && history.pushState){
				init_pageinfo[layerid]=pageid;
				if(is_init) return;
				window.onpopstate=function(e){
					var state=e.state;
					if(state && state.action=='page'){
						var layerid=state.layerid;
						$('#'+layerid).trigger('to_page',state.page);
					}
				}
				is_init=true;
			}
		},
		add_page:function(layerid,pageid){
			if(history && history.pushState){
				var loc=window.location.href;
				var layerend=layerid.replace(/.+(\w{5})$/,'$1');
				var paramregexp=new RegExp(layerend+'_p=[^&]+');
				var newloc='';
				if(loc.match(paramregexp)){
					newloc=loc.replace(paramregexp,layerend+'_p='+pageid);
				}else{
					if(loc.indexOf('?')>0){
						newloc=loc+'&'+layerend+"_p="+pageid
					}else{
						newloc=loc+'?'+layerend+"_p="+pageid
					}
				}
				newloc=newloc.replace(/.+?\?/,'?');
				if(!is_layer_add[layerid] && pageid != init_pageinfo[layerid]){
					history.replaceState({action:'page',layerid:layerid,page:init_pageinfo[layerid]}, document.title, loc);
					is_layer_add[layerid]=true;
				}
				history.pushState({action:'page',layerid:layerid,page:pageid}, document.title, newloc);
			}
		}
	};
	window.PageHistory=PageHistory;
})();
(function(){
	function resizeCanvasHeight(){
		window.canv = $("#canvas");
		var container=$('#scroll_container');
		// 画布高度
		var cvhgt = window.getdeviceheight || window.innerHeight || self.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;//$(window).height();
		var ua = /micromessenger/i.test(navigator.userAgent.toLowerCase());
		if (window.isHandheld&&!ua) cvhgt = Math.min(cvhgt, MobileUtils.getScreenHeight());
		cvhgt -= container.offset().top,mfooterheight = $('#wp-mobile-device-footer').height()||0;
		if (!window.isHandheld) {
			if (! window.MobileModel) container.height(cvhgt - mfooterheight);
		}
		if($('#site_footer').length>0){
			var canvheight=Math.max($("#canvas").data('layermaxheight'),cvhgt-$('#site_footer').height()-mfooterheight);
			if($('#site_footer:not(.only_copyright)').length>0){
				canvheight=Math.max(canvheight,$("#canvas").height());
			}
		}else{
			var canvheight=Math.max($("#canvas").data('layermaxheight'),cvhgt);
			canvheight=Math.max($("#canvas").data('layermaxheight'),cvhgt-mfooterheight);//没有页脚时去设备底部高度，防没有任何模块时有滚动条bug/4574
		}
		// 重置bSlider模块高度 2013/03/25
		$('.cstlayer[type="bslider"]:not(.isplate)').each(function(i, dom){
			$(dom).triggerHandler('resetbsliderheight', [canvheight]);
		});
		if(!canv) var canv = $("#canvas");
		canv.css('height',canvheight+'px');
		var footermargintop=parseInt($('#site_footer').css('margin-top'))||0;
		var bottomfixedheight=0;
		if($('.full_column-bottomfixed:not(.cstlayer)').length){
			bottomfixedheight=$('.full_column-bottomfixed').height();
		}
 
		$('#scroll_container_bg').css('height',(canvheight+$('#site_footer').height()+footermargintop+bottomfixedheight)+'px');
		if($(window).width()-canv.width()<0) $('#scroll_container_bg').width(canv.width());
		else  $('#scroll_container_bg').css('width','100%');
		$('#scroll_container_bg').triggerHandler('after_resize');
		// 更新标尺位置Start 2012/3/2
		var canvleft = canv.offset().left;
		if (typeof $.fn.ruler_locate != 'undefined') {
			$.fn.ruler_locate({
				x : {left:canvleft+'px'},
				y : {height:canvheight+'px', left:(canvleft>17?canvleft-17:0)+'px'}
			});
			$('.line_y').height(canvheight);// 辅助线高度
		}
		// 在手机设备上访问 2014/02/08
		if (window.isHandheld) {
			var $container = $('#scroll_container'),$footer = $('#site_footer'),$footer_ads = $('#footer_ads'),
			maxheight = $('#scroll_container_bg').height() + $('>.mblank_placeholder',$container).height();
			//计算实际的页脚高度，防止页脚内元素超出页脚底部这一情况
			if ($footer.length > 0 && $footer_ads.length > 0) {
				var maxh = $('#site_footer').height();
				$('#site_footer > .full_content').children(':not(script)').each(function(){
					var eleh = parseInt($(this).css('top')) + $(this).outerHeight();
					maxh = (eleh > maxh) ? eleh : maxh;
				});
				maxheight += (maxh - $('#site_footer').height());
			}
			//如果显示页脚广告，再加上页脚广告的高度
			if ($footer_ads.length > 0) maxheight += 35;
			$container.css({"height": maxheight+'px',"overflow-x": 'hidden',"overflow-y": 'hidden'});
			if($footer.length) {
				if (/micromessenger/i.test(navigator.userAgent.toLowerCase())) {
					$footer.css({'position':'absolute','top':$('#canvas').height()});
				}
				$footer.find('#footer_content').andSelf().width($('#canvas').width());
			}
			//设置页脚广告的宽度，和页脚保持一致
			$footer_ads.width($('#canvas').width());
			$('.mloading-mask').remove();
			$container.css("visibility", 'visible');$(window).triggerHandler("pageloaded");
			// 修复ipad中iframe touchmove冲突问题(bug#97) 2014/09/16
			if (/ipad/.test(navigator.userAgent.toLowerCase())) {
				$(document.body).parent().andSelf().css({"overflow-x": 'hidden',"overflow-y": 'auto'});
				container.css({"height": 'auto',"overflow-y": 'auto'});
			}
		}
	}
	window.resizeCanvasHeight=resizeCanvasHeight;
	function correctFooterPos(){
		var canv = $("#canvas");
		var canvheight=canv.height();
		var footertop=canvheight;
		if (window.isHandheld) {
			footertop-=1;
			$('#scroll_container').css('height',($('#scroll_container').height()-1)+'px');
			$('#scroll_container_bg').css('height',($('#scroll_container_bg').height()-1)+'px');
			//手机正式访问时设置页脚广告的宽度，和页脚保持一致
			$('#footer_ads').css('width',$('#canvas').width()+'px');
		}
		var canvwidth=canv.width();
		//编辑，预览，正式访问时都会调用这里来设置页脚的宽度
		$('#site_footer').children('.full_content').andSelf().css('width',$('#canvas').width()+'px');
		var containerOffsetLeft = $('#scroll_container').offset().left;
			$('#site_footer').css({left:canv.offset().left-containerOffsetLeft+$('#scroll_container').scrollLeft()+$.parseInteger($('#canvas').css("borderLeftWidth")),top:footertop});
		$('#site_footer >.full_width').css({left:0-canv.offset().left+containerOffsetLeft-$('#scroll_container').scrollLeft()-$.parseInteger($('#canvas').css("borderLeftWidth")),width:$(window.MobileModel?'#canvas':'#scroll_container_bg').width()});
		if($('#wp-mobile-device-header').length) $('#site_footer >.full_width').css("left", '0px');
		//计算页脚广告的位置，保证在页脚的下边
		var footer_ads = $('#footer_ads');
		if (footer_ads.length > 0) {
			if ($('#site_footer').length > 0) {
				var maxh = $('#site_footer').height();
				$('#site_footer > .full_content').children(':not(script)').each(function(){
					var eleh = parseInt($(this).css('top')) + $(this).outerHeight();
					maxh = (eleh > maxh) ? eleh : maxh;
				});
				footer_ads.css({top:footertop + maxh});
			} else {
				footer_ads.css({top:footertop});
			}
		}
	}
	window.correctFooterPos=correctFooterPos;
	
	window.scroll_container_adjust=function(){
		initCanvasHeight();
        //微信下初始化加载cvans高度过大出现滚动条。bug/4574
        if (/micromessenger/i.test(navigator.userAgent.toLowerCase())) {
		  var fxdpstr = $(window).data("fxdp_scrollpage")||''
            setTimeout(function(){
				// fixed bug#1107
				var _scrtop = $(window).scrollTop();
				if(fxdpstr == 'fxdp'){
					resizeCanvasHeight();
					$(window).scrollTop(_scrtop);
					correctFooterPos();
				}
				// 修复"微信浏览器中锚点异常(bug#1059)"问题
				var hstr = location.hash||'';
				if(hstr.length > 0){location.href = location.href;location.hash = hstr.substr(1)}
            },600)
		   if(fxdpstr != 'fxdp'){
				resizeCanvasHeight();
				correctFooterPos();
		   }
        }else {
            resizeCanvasHeight();
            correctFooterPos();
        }
		
	}
})()
/**document ready js**/
$(document).bind('lastexec',function(){

	// Mobile device 2014/01/06
	if (window.MobileModel) {
		var $scontainer = $('#scroll_container'),canvaswidth = $('#canvas').width();
		$scontainer.unbind(".mbprevredhat.tmpredhat");
		if ($('#wp-mobile-device-header').length > 0) {
			// for '模拟滚轮事件'
			$scontainer.bind('mousewheel DomMouseScroll MozMousePixelScroll', function(e){
				e = e || window.event;
				e.preventDefault();
                if ($('.fullpage_alllist', this).length) return false;
				var wheeldelta = e.wheelDelta,
				detail = e.detail || e.originalEvent.detail;
				if (e.type == 'mousewheel') {
					var _deltay = e.deltaY || e.originalEvent.deltaY;
					wheeldelta = (_deltay > 0) ? 1 : -1
				} else {
					var _wdelta = e.wheelDelta || e.originalEvent.wheelDelta;
					if (!_wdelta) wheeldelta = detail
				}
				
				var movey = wheeldelta * -(Math.abs(detail) > 3 ? 1 : 40);
				$(this).scrollTop($(this).scrollTop() - movey)
			});
			// 手机模型定位
			var mbtimer = setTimeout(function(){
				var _scwidth = $scontainer.width() + 20,
				_scrleft = $scontainer.position().left + _scwidth;
				$scontainer.mscroll({
					difleft: 10,
					maskleft: _scrleft,
					barleft: _scrleft,
					maskbg: '#ccc'
				});
				clearTimeout(mbtimer);
				// for '窗口缩放时重置滚动条LEFT值'
				var $sclbar = $scontainer.prevAll('.wp-mobile-scrollbar'),
				$sclmask = $scontainer.prevAll('.wp-mobile-device-mask');
				$(window).resize(function(e){
					var _scleft = $scontainer.position().left + _scwidth;
					$sclmask.css('left', _scleft +'px');
					$sclbar.css('left', (_scleft + 10) +'px')
				})
			}, 100);
			// var screenWidth = window.innerWidth||self.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,
			// deviceOtherHeight = $('#wp-mobile-device-header').closest('.wp-new-manage-toolbar-position').height() + $('#wp-mobile-device-footer').height();
			// var onlyOnce_resize_width = false;
			// $(window).bind("resize.mbeditor", function(e, status){
			// 	var screenHeight = window.innerHeight||self.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;
			// 	$('#wp-mobile-device-sides').height(screenHeight - deviceOtherHeight).children('.mwrapper').height(screenHeight - deviceOtherHeight - 2);
			// 	// 自定义滚动条样式
			// 	var sidewidth = 14;/* 手机模型边缘宽度 */
			// 	var mbtimer = setTimeout(function(){
			// 		var newleft = ($._parseFloat($('#wp-mobile-device-header').css("left"))||0) + sidewidth;
			// 		$scontainer.css({"left": (newleft - 10)+'px',"width": function(){/*-10是为了修复"缩放句柄被遮"问题*/
			// 			if( onlyOnce_resize_width == false ){
			// 				onlyOnce_resize_width = true;
			// 				return ($(this).width() + (status?(sidewidth + 15 + 10):0))+'px';
			// 			}else{
			// 				return ;
			// 			}
			// 		},"margin": '0',"padding-left": '11px',"top": '-6px',"overflow-y": 'scroll'});
			// 		$('#site_footer').css("left", '11px');/*11px是为了修复"缩放句柄被遮"问题*/
			// 		if (status == undefined) $scontainer.mscroll("destroy");
			// 		$scontainer.mscroll({difleft: 10,maskbg: '#ccc'});clearTimeout(mbtimer);
			// 	}, 100);
			// }).triggerHandler("resize.mbeditor", ['init']);
			// $('#wp-mobile-device-header,#wp-mobile-device-sides,#wp-mobile-device-footer').css({"left": function(){
			// 	return ((screenWidth - $(this).width()) / 2)+'px';
			// }, "visibility": 'visible'});
			// 保存布局
			$('#wp-mobile-device-footer > span').click(function(){
				wp_floatpanel(parseToURL('wp_widgets','save_page'),{
					title: translate('page.saveLayout'),width: 418,overlay: true,isCenter: true,
					contentClass: 'wp-site-set_panel_c',id: 'wp-page_save',zIndex: 9999,isSet:true
				});
			});
		} else {/* 预览模式 */
			$scontainer.css("visibility", 'visible');
			$(window).load(function(){
				var $win = $(this),frmwidth = $win.width(),frmheight = window.getdeviceheight||565;
				$scontainer.height(frmheight);
				var mprevtimer = setTimeout(function(){
					$scontainer.mscroll({"maskcname": 'wp-mobile-device-premask',"difleft": -6,
					"height": frmheight,"barcname": 'wp-mobile-prescrollbar',"maskleft": frmwidth,"barleft": frmwidth});
					$scontainer.css('overflow-y','auto').css('width','350px');
					$win.triggerHandler("pageloaded");clearTimeout(mprevtimer);
					// 模拟“触屏”模式
					var maxtop = frmheight - $('.wp-mobile-prescrollbar > span.pane').height();
					$('.wp-mobile-prescrollbar').css('visibility','hidden');
					var scrollbartimer;
					var lasthidetime=0;
					var isBarShow=false;
					setInterval(function(){
						var nowtime=(new Date()).getTime();
						if(isBarShow && lasthidetime>0 && nowtime-lasthidetime>=600){
							$('.wp-mobile-prescrollbar').css('visibility','hidden');
							isBarShow=false;
							lasthidetime=0;
						}
					},300);
					var showbar=function(){
						if(!isBarShow){
							$('.wp-mobile-prescrollbar').css('visibility','visible');
							isBarShow=true;
						}
						lasthidetime=0;
					}
					var hidebar=function(){
						if(isBarShow && lasthidetime==0){
							lasthidetime=(new Date()).getTime();
						}
					}
					$scontainer.bind("scroll.prescrollbar",function(){
						showbar();
						hidebar();
					})
					$scontainer.data('preview_scroll',false);
					$scontainer.find('a').bind('click',function(e){
						if($scontainer.data('preview_scroll')){
							e.preventDefault();
						}
					})
					$scontainer.bind("mousedown.mbprevredhat", function(e){
						if($(e.target).is('input') || $(e.target).is('textarea')){
							return;
						}
						e.preventDefault();
						$scontainer.data('preview_scroll',false);
						showbar();
						var $prebar = $('.wp-mobile-prescrollbar');var pagey = e.pageY;
						var scrltop = $scontainer.scrollTop(),movey = e.pageY - pagey;
						if (scrltop < 0) scrltop = 0;
						$scontainer.bind("mousemove.tmpredhat", function(e){
							e.preventDefault();
							var movey = e.pageY - pagey;
							if(Math.abs(movey)>5){
								$scontainer.data('preview_scroll',true);
							}
							$scontainer.scrollTop(scrltop - movey);
						}).bind("mouseup.tmpredhat", function(e){
							e.preventDefault();$scontainer.unbind(".tmpredhat");
							$(parent.document).unbind(".rmredhat");
							hidebar();
						});
						$(parent.document).bind("mouseup.rmredhat",function(){$scontainer.unbind(".tmpredhat");hidebar();});
					});
				}, 150);
			});
		}
		//编辑预览模式下设置页脚和页脚广告的宽度
		$('#site_footer,#footer_content,#footer_ads').width(canvaswidth);
	}
	window.scroll_container_adjust();
	if(!canv) var canv = $("#canvas");
	$('.full_column').children('.full_content').andSelf().css('width',$('#canvas').width()+'px');
	$('.full_column>.full_width').css({left:0-canv.offset().left+$('#scroll_container').offset().left-$('#scroll_container').scrollLeft()-$.parseInteger($('#canvas').css("borderLeftWidth")),width:$('#scroll_container_bg').width()});
	//浏览器缩放是自动调整高度
	var me = "orientation" in window && "onorientationchange" in window ? "orientationchange" : "resize";
	$(window).bind(me, function(e){
		if(e.target==window||e.target==document){
			setTimeout(function(){
				resizeCanvasHeight();
				correctFooterPos();
				$('.full_column>.full_width').css({left:0-canv.offset().left+$('#scroll_container').offset().left-$('#scroll_container').scrollLeft()-$.parseInteger($('#canvas').css("borderLeftWidth")),width:$('#scroll_container_bg').width()});
				if($('.full_column-fixed:not(.cstlayer)').length){
					$('.full_column-fixed').css("left",canv.offset().left-$('#scroll_container').offset().left+$('#scroll_container').scrollLeft()+$.parseInteger($('#canvas').css("borderLeftWidth"))+"px");
					if($('.full_column-fixed').data('full_width_style')){
						var widthstyle=$('.full_column-fixed').data('full_width_style');
						widthstyle=$('<div style="'+widthstyle+'"/>').css('width',$('#scroll_container_bg').width()).attr('style');
						if(widthstyle) $('.full_column-fixed').data('full_width_style',widthstyle);
					}
				}
				$('#scroll_container').trigger('container_height_change'); 
			},100);
		}
	})
	
	if (!window.isHandheld) rotateDom($('.cstlayer'));
	//Preview need resize window
	if(window.opener){
		var winH = screen.availHeight || 768,winW = screen.availWidth || 1024;
		window.resizeTo(winW, winH);
	}
	// 新窗口打开超链接
	$.extend({
		openNewWin: function(URI){
			var win = window.open(URI,'_blank');
			win.focus;
		}
	});
})

function getImageProcessType(){
    return 2;
}

function wp_pages_global_func(params) {
    var uname = params.domain, sessid = params.phpsessionid;

    // 修改 parseToURL 以直接跳转页面
    window['parseToURL'] = function (module, action, anotherparams) {
        if (params.isedit == '1') {
            var defaultparams = { "_m": module, "_a": action, "domain": uname, "SessionID": sessid };
        } else if (params.islogin == '1') {
            var defaultparams = { "_m": module, "_a": action, "domain": uname, "_v": 'preview', "SessionID": sessid };
        } else {
            webmodel = {};
            var defaultparams = { "_m": module, "_a": action };
        }
        var urlparams = $.extend({}, anotherparams, defaultparams, webmodel);
        var paramstr = $.param(urlparams);
        var url = params.punyurl;

        // 检查设备类型，如果是Mac设备，使用 rooturl
        var u = navigator.userAgent;
        if (u && u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
            url = params['p_rooturl'];
        }

        // 直接跳转到构建好的 URL
        window.location.href = url + "/detail.html?" + paramstr;
    };

    // 直接跳转到后台管理页面
    window['parseToAdminURL'] = function (module, action, anotherparams) {
        var defaultparams = { '_m': module, '_a': action, 'domain': uname, "SessionID": sessid };
        var urlparams = $.extend({}, anotherparams, defaultparams, webmodel);
        var paramstr = $.param(urlparams);

        // 直接跳转到后台管理页面
        window.location.href = params['p_rooturl'] + "/admin/index.php?" + paramstr;
    };

    window['getSiteCurLang'] = function () { return params['interface_locale']; };
    window['getPreviewSiteCurLang'] = function () { return params['curr_locale']; };
    window['getSystemCurrentDomain'] = function () { return params['domain']; };
}


function wopop_plugin_iframe_retry(iframeel,checkfunc){
	var iframeel=$(iframeel);
	if(iframeel.length>0){
		iframeel[0].onload=function(){
			var timer=setTimeout(function(){
				iframeel[0].src=iframeel[0].src+"&v="+(new Date().getTime());
			},200);
			iframeel[0].onload=function(){}
			try{
				if(checkfunc && checkfunc(iframeel[0].contentWindow)){
					clearTimeout(timer);
				}
			}catch(e){}
		}
	}
}

function wopop_navigator_standalone_func(){
	$(window).load(function(){
		if(location.hash && location.hash !='' && location.hash !='#'){
			location.href=location.hash;
		}
	});
	if(('standalone' in window.navigator)&&window.navigator.standalone){  
        var noddy,remotes=false;  
        document.addEventListener('click',function(event){  
                noddy=event.target;  
                while(noddy.nodeName!=='A'&&noddy.nodeName!=='HTML') noddy=noddy.parentNode;  
                if('href' in noddy&&noddy.href.indexOf('http')!==-1&&(noddy.href.indexOf(document.location.host)!==-1||remotes)){  
                        event.preventDefault();  
                        document.location.href=noddy.href;  
                }  
        },false);  
	} 
}

function wopop_wx_config(config){
	config.openTagList=["wx-open-launch-weapp","wx-open-launch-app"];
	wx.config(config)
}

function wp_wave_render(dom){
    var canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d'),
        width = canvas.width = Math.min(window.innerWidth,1920),
        height = canvas.height = window.innerHeight,
        hasBottom = true,
        offset = width * (90 / 1920),
        y = width * (35 / 1920),
        x = width * .32;

   function wp_render(){
       ctx.fillStyle = '#000'
       ctx.lineWidth = 1 * (window.devicePixelRatio || 1)
       ctx.beginPath()
       ctx.moveTo(0,y)
       ctx.bezierCurveTo(x , offset * 2, width - x , - offset , width,y)
       if(hasBottom){
           ctx.lineTo(width,height - y)
           ctx.bezierCurveTo(width - x, height - offset * 2, x ,height + offset , 0,height - y)
           ctx.lineTo(0,y)
       }else{
           ctx.lineTo(width,height)
           ctx.lineTo(0,height)
           ctx.lineTo(0,y)
       }

       ctx.fill()
   }

    dom.find('.wp_wave_mask_ani').each(function (){
        width = canvas.width = $(this).width()
        height = canvas.height = $(this).height()
        x = width * .32
        offset = width * (90 / 1920)
        y = width * (35 / 1920)

        if($(this).hasClass('no_bottom')){
            hasBottom = false
        }else{
            hasBottom = true
        }
        wp_render()
		var urls = canvas.toDataURL();
        $(this).get(0).style.webkitMaskImage = 'url('+ urls +')'
    })
 
}

/*
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function(A){if(typeof define==="function"&&define.amd){define(["jquery"],A)}else{if(typeof exports==="object"){A(require("jquery"))}else{A(jQuery)}}}(function(F){var G=/\+/g;function D(I){return B.raw?I:encodeURIComponent(I)}function E(I){return B.raw?I:decodeURIComponent(I)}function H(I){return D(B.json?JSON.stringify(I):String(I))}function C(I){if(I.indexOf('"')===0){I=I.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\")}try{I=decodeURIComponent(I.replace(G," "));return B.json?JSON.parse(I):I}catch(J){}}function A(I,J){var K=B.raw?I:C(I);return F.isFunction(J)?J(K):K}var B=F.cookie=function(R,M,O){if(M!==undefined&&!F.isFunction(M)){O=F.extend({},B.defaults,O);if(typeof O.expires==="number"){var K=O.expires,L=O.expires=new Date();L.setTime(+L+K*86400000)}return(document.cookie=[D(R),"=",H(M),O.expires?"; expires="+O.expires.toUTCString():"",O.path?"; path="+O.path:"",O.domain?"; domain="+O.domain:"",O.secure?"; secure":""].join(""))}var J=R?undefined:{};var I=document.cookie?document.cookie.split("; "):[];for(var N=0,P=I.length;N<P;N++){var T=I[N].split("=");var S=E(T.shift());var Q=T.join("=");if(R&&R===S){J=A(Q,M);break}if(!R&&(Q=A(Q))!==undefined){J[S]=Q}}return J};B.defaults={};F.removeCookie=function(I,J){if(F.cookie(I)===undefined){return false}F.cookie(I,"",F.extend({},J,{expires:-1}));return !F.cookie(I)}}));;
/*! VelocityJS.org (1.3.0). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
!function(a){"use strict";function b(a){var b=a.length,d=c.type(a);return"function"!==d&&!c.isWindow(a)&&(!(1!==a.nodeType||!b)||("array"===d||0===b||"number"==typeof b&&b>0&&b-1 in a))}if(!a.jQuery){var c=function(a,b){return new c.fn.init(a,b)};c.isWindow=function(a){return a&&a===a.window},c.type=function(a){return a?"object"==typeof a||"function"==typeof a?e[g.call(a)]||"object":typeof a:a+""},c.isArray=Array.isArray||function(a){return"array"===c.type(a)},c.isPlainObject=function(a){var b;if(!a||"object"!==c.type(a)||a.nodeType||c.isWindow(a))return!1;try{if(a.constructor&&!f.call(a,"constructor")&&!f.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(d){return!1}for(b in a);return void 0===b||f.call(a,b)},c.each=function(a,c,d){var e,f=0,g=a.length,h=b(a);if(d){if(h)for(;f<g&&(e=c.apply(a[f],d),e!==!1);f++);else for(f in a)if(e=c.apply(a[f],d),e===!1)break}else if(h)for(;f<g&&(e=c.call(a[f],f,a[f]),e!==!1);f++);else for(f in a)if(e=c.call(a[f],f,a[f]),e===!1)break;return a},c.data=function(a,b,e){if(void 0===e){var f=a[c.expando],g=f&&d[f];if(void 0===b)return g;if(g&&b in g)return g[b]}else if(void 0!==b){var h=a[c.expando]||(a[c.expando]=++c.uuid);return d[h]=d[h]||{},d[h][b]=e,e}},c.removeData=function(a,b){var e=a[c.expando],f=e&&d[e];f&&(b?c.each(b,function(a,b){delete f[b]}):delete d[e])},c.extend=function(){var a,b,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;for("boolean"==typeof h&&(k=h,h=arguments[i]||{},i++),"object"!=typeof h&&"function"!==c.type(h)&&(h={}),i===j&&(h=this,i--);i<j;i++)if(f=arguments[i])for(e in f)a=h[e],d=f[e],h!==d&&(k&&d&&(c.isPlainObject(d)||(b=c.isArray(d)))?(b?(b=!1,g=a&&c.isArray(a)?a:[]):g=a&&c.isPlainObject(a)?a:{},h[e]=c.extend(k,g,d)):void 0!==d&&(h[e]=d));return h},c.queue=function(a,d,e){function f(a,c){var d=c||[];return a&&(b(Object(a))?!function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;)a[e++]=b[d++];if(c!==c)for(;void 0!==b[d];)a[e++]=b[d++];return a.length=e,a}(d,"string"==typeof a?[a]:a):[].push.call(d,a)),d}if(a){d=(d||"fx")+"queue";var g=c.data(a,d);return e?(!g||c.isArray(e)?g=c.data(a,d,f(e)):g.push(e),g):g||[]}},c.dequeue=function(a,b){c.each(a.nodeType?[a]:a,function(a,d){b=b||"fx";var e=c.queue(d,b),f=e.shift();"inprogress"===f&&(f=e.shift()),f&&("fx"===b&&e.unshift("inprogress"),f.call(d,function(){c.dequeue(d,b)}))})},c.fn=c.prototype={init:function(a){if(a.nodeType)return this[0]=a,this;throw new Error("Not a DOM node.")},offset:function(){var b=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:b.top+(a.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:b.left+(a.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function a(a){for(var b=a.offsetParent||document;b&&"html"!==b.nodeType.toLowerCase&&"static"===b.style.position;)b=b.offsetParent;return b||document}var b=this[0],d=a(b),e=this.offset(),f=/^(?:body|html)$/i.test(d.nodeName)?{top:0,left:0}:c(d).offset();return e.top-=parseFloat(b.style.marginTop)||0,e.left-=parseFloat(b.style.marginLeft)||0,d.style&&(f.top+=parseFloat(d.style.borderTopWidth)||0,f.left+=parseFloat(d.style.borderLeftWidth)||0),{top:e.top-f.top,left:e.left-f.left}}};var d={};c.expando="velocity"+(new Date).getTime(),c.uuid=0;for(var e={},f=e.hasOwnProperty,g=e.toString,h="Boolean Number String Function Array Date RegExp Object Error".split(" "),i=0;i<h.length;i++)e["[object "+h[i]+"]"]=h[i].toLowerCase();c.fn.init.prototype=c.fn,a.Velocity={Utilities:c}}}(window),function(a){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a():"function"==typeof define&&define.amd?define(a):a()}(function(){"use strict";return function(a,b,c,d){function e(a){for(var b=-1,c=a?a.length:0,d=[];++b<c;){var e=a[b];e&&d.push(e)}return d}function f(a){return p.isWrapped(a)?a=[].slice.call(a):p.isNode(a)&&(a=[a]),a}function g(a){var b=m.data(a,"velocity");return null===b?d:b}function h(a){return function(b){return Math.round(b*a)*(1/a)}}function i(a,c,d,e){function f(a,b){return 1-3*b+3*a}function g(a,b){return 3*b-6*a}function h(a){return 3*a}function i(a,b,c){return((f(b,c)*a+g(b,c))*a+h(b))*a}function j(a,b,c){return 3*f(b,c)*a*a+2*g(b,c)*a+h(b)}function k(b,c){for(var e=0;e<p;++e){var f=j(c,a,d);if(0===f)return c;var g=i(c,a,d)-b;c-=g/f}return c}function l(){for(var b=0;b<t;++b)x[b]=i(b*u,a,d)}function m(b,c,e){var f,g,h=0;do g=c+(e-c)/2,f=i(g,a,d)-b,f>0?e=g:c=g;while(Math.abs(f)>r&&++h<s);return g}function n(b){for(var c=0,e=1,f=t-1;e!==f&&x[e]<=b;++e)c+=u;--e;var g=(b-x[e])/(x[e+1]-x[e]),h=c+g*u,i=j(h,a,d);return i>=q?k(b,h):0===i?h:m(b,c,c+u)}function o(){y=!0,a===c&&d===e||l()}var p=4,q=.001,r=1e-7,s=10,t=11,u=1/(t-1),v="Float32Array"in b;if(4!==arguments.length)return!1;for(var w=0;w<4;++w)if("number"!=typeof arguments[w]||isNaN(arguments[w])||!isFinite(arguments[w]))return!1;a=Math.min(a,1),d=Math.min(d,1),a=Math.max(a,0),d=Math.max(d,0);var x=v?new Float32Array(t):new Array(t),y=!1,z=function(b){return y||o(),a===c&&d===e?b:0===b?0:1===b?1:i(n(b),c,e)};z.getControlPoints=function(){return[{x:a,y:c},{x:d,y:e}]};var A="generateBezier("+[a,c,d,e]+")";return z.toString=function(){return A},z}function j(a,b){var c=a;return p.isString(a)?t.Easings[a]||(c=!1):c=p.isArray(a)&&1===a.length?h.apply(null,a):p.isArray(a)&&2===a.length?u.apply(null,a.concat([b])):!(!p.isArray(a)||4!==a.length)&&i.apply(null,a),c===!1&&(c=t.Easings[t.defaults.easing]?t.defaults.easing:s),c}function k(a){if(a){var b=(new Date).getTime(),c=t.State.calls.length;c>1e4&&(t.State.calls=e(t.State.calls),c=t.State.calls.length);for(var f=0;f<c;f++)if(t.State.calls[f]){var h=t.State.calls[f],i=h[0],j=h[2],n=h[3],o=!!n,q=null;n||(n=t.State.calls[f][3]=b-16);for(var r=Math.min((b-n)/j.duration,1),s=0,u=i.length;s<u;s++){var w=i[s],y=w.element;if(g(y)){var z=!1;if(j.display!==d&&null!==j.display&&"none"!==j.display){if("flex"===j.display){var A=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];m.each(A,function(a,b){v.setPropertyValue(y,"display",b)})}v.setPropertyValue(y,"display",j.display)}j.visibility!==d&&"hidden"!==j.visibility&&v.setPropertyValue(y,"visibility",j.visibility);for(var B in w)if("element"!==B){var C,D=w[B],E=p.isString(D.easing)?t.Easings[D.easing]:D.easing;if(1===r)C=D.endValue;else{var F=D.endValue-D.startValue;if(C=D.startValue+F*E(r,j,F),!o&&C===D.currentValue)continue}if(D.currentValue=C,"tween"===B)q=C;else{var G;if(v.Hooks.registered[B]){G=v.Hooks.getRoot(B);var H=g(y).rootPropertyValueCache[G];H&&(D.rootPropertyValue=H)}var I=v.setPropertyValue(y,B,D.currentValue+(0===parseFloat(C)?"":D.unitType),D.rootPropertyValue,D.scrollData);v.Hooks.registered[B]&&(v.Normalizations.registered[G]?g(y).rootPropertyValueCache[G]=v.Normalizations.registered[G]("extract",null,I[1]):g(y).rootPropertyValueCache[G]=I[1]),"transform"===I[0]&&(z=!0)}}j.mobileHA&&g(y).transformCache.translate3d===d&&(g(y).transformCache.translate3d="(0px, 0px, 0px)",z=!0),z&&v.flushTransformCache(y)}}j.display!==d&&"none"!==j.display&&(t.State.calls[f][2].display=!1),j.visibility!==d&&"hidden"!==j.visibility&&(t.State.calls[f][2].visibility=!1),j.progress&&j.progress.call(h[1],h[1],r,Math.max(0,n+j.duration-b),n,q),1===r&&l(f)}}t.State.isTicking&&x(k)}function l(a,b){if(!t.State.calls[a])return!1;for(var c=t.State.calls[a][0],e=t.State.calls[a][1],f=t.State.calls[a][2],h=t.State.calls[a][4],i=!1,j=0,k=c.length;j<k;j++){var l=c[j].element;b||f.loop||("none"===f.display&&v.setPropertyValue(l,"display",f.display),"hidden"===f.visibility&&v.setPropertyValue(l,"visibility",f.visibility));var n=g(l);if(f.loop!==!0&&(m.queue(l)[1]===d||!/\.velocityQueueEntryFlag/i.test(m.queue(l)[1]))&&n){n.isAnimating=!1,n.rootPropertyValueCache={};var o=!1;m.each(v.Lists.transforms3D,function(a,b){var c=/^scale/.test(b)?1:0,e=n.transformCache[b];n.transformCache[b]!==d&&new RegExp("^\\("+c+"[^.]").test(e)&&(o=!0,delete n.transformCache[b])}),f.mobileHA&&(o=!0,delete n.transformCache.translate3d),o&&v.flushTransformCache(l),v.Values.removeClass(l,"velocity-animating")}if(!b&&f.complete&&!f.loop&&j===k-1)try{f.complete.call(e,e)}catch(p){setTimeout(function(){throw p},1)}h&&f.loop!==!0&&h(e),n&&f.loop===!0&&!b&&(m.each(n.tweensContainer,function(a,b){if(/^rotate/.test(a)&&(parseFloat(b.startValue)-parseFloat(b.endValue))%360===0){var c=b.startValue;b.startValue=b.endValue,b.endValue=c}/^backgroundPosition/.test(a)&&100===parseFloat(b.endValue)&&"%"===b.unitType&&(b.endValue=0,b.startValue=100)}),t(l,"reverse",{loop:!0,delay:f.delay})),f.queue!==!1&&m.dequeue(l,f.queue)}t.State.calls[a]=!1;for(var q=0,r=t.State.calls.length;q<r;q++)if(t.State.calls[q]!==!1){i=!0;break}i===!1&&(t.State.isTicking=!1,delete t.State.calls,t.State.calls=[])}var m,n=function(){if(c.documentMode)return c.documentMode;for(var a=7;a>4;a--){var b=c.createElement("div");if(b.innerHTML="<!--[if IE "+a+"]><span></span><![endif]-->",b.getElementsByTagName("span").length)return b=null,a}return d}(),o=function(){var a=0;return b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame||function(b){var c,d=(new Date).getTime();return c=Math.max(0,16-(d-a)),a=d+c,setTimeout(function(){b(d+c)},c)}}(),p={isString:function(a){return"string"==typeof a},isArray:Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)},isFunction:function(a){return"[object Function]"===Object.prototype.toString.call(a)},isNode:function(a){return a&&a.nodeType},isNodeList:function(a){return"object"==typeof a&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(a))&&a.length!==d&&(0===a.length||"object"==typeof a[0]&&a[0].nodeType>0)},isWrapped:function(a){return a&&(a.jquery||b.Zepto&&b.Zepto.zepto.isZ(a))},isSVG:function(a){return b.SVGElement&&a instanceof b.SVGElement},isEmptyObject:function(a){for(var b in a)return!1;return!0}},q=!1;if(a.fn&&a.fn.jquery?(m=a,q=!0):m=b.Velocity.Utilities,n<=8&&!q)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(n<=7)return void(jQuery.fn.velocity=jQuery.fn.animate);var r=400,s="swing",t={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:b.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:c.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:m,Redirects:{},Easings:{},Promise:b.Promise,defaults:{queue:"",duration:r,easing:s,begin:d,complete:d,progress:d,display:d,visibility:d,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(a){m.data(a,"velocity",{isSVG:p.isSVG(a),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:3,patch:0},debug:!1};b.pageYOffset!==d?(t.State.scrollAnchor=b,t.State.scrollPropertyLeft="pageXOffset",t.State.scrollPropertyTop="pageYOffset"):(t.State.scrollAnchor=c.documentElement||c.body.parentNode||c.body,t.State.scrollPropertyLeft="scrollLeft",t.State.scrollPropertyTop="scrollTop");var u=function(){function a(a){return-a.tension*a.x-a.friction*a.v}function b(b,c,d){var e={x:b.x+d.dx*c,v:b.v+d.dv*c,tension:b.tension,friction:b.friction};return{dx:e.v,dv:a(e)}}function c(c,d){var e={dx:c.v,dv:a(c)},f=b(c,.5*d,e),g=b(c,.5*d,f),h=b(c,d,g),i=1/6*(e.dx+2*(f.dx+g.dx)+h.dx),j=1/6*(e.dv+2*(f.dv+g.dv)+h.dv);return c.x=c.x+i*d,c.v=c.v+j*d,c}return function d(a,b,e){var f,g,h,i={x:-1,v:0,tension:null,friction:null},j=[0],k=0,l=1e-4,m=.016;for(a=parseFloat(a)||500,b=parseFloat(b)||20,e=e||null,i.tension=a,i.friction=b,f=null!==e,f?(k=d(a,b),g=k/e*m):g=m;;)if(h=c(h||i,g),j.push(1+h.x),k+=16,!(Math.abs(h.x)>l&&Math.abs(h.v)>l))break;return f?function(a){return j[a*(j.length-1)|0]}:k}}();t.Easings={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},spring:function(a){return 1-Math.cos(4.5*a*Math.PI)*Math.exp(6*-a)}},m.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(a,b){t.Easings[b[0]]=i.apply(null,b[1])});var v=t.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var a=0;a<v.Lists.colors.length;a++){var b="color"===v.Lists.colors[a]?"0 0 0 1":"255 255 255 1";v.Hooks.templates[v.Lists.colors[a]]=["Red Green Blue Alpha",b]}var c,d,e;if(n)for(c in v.Hooks.templates){d=v.Hooks.templates[c],e=d[0].split(" ");var f=d[1].match(v.RegEx.valueSplit);"Color"===e[0]&&(e.push(e.shift()),f.push(f.shift()),v.Hooks.templates[c]=[e.join(" "),f.join(" ")])}for(c in v.Hooks.templates){d=v.Hooks.templates[c],e=d[0].split(" ");for(var g in e){var h=c+e[g],i=g;v.Hooks.registered[h]=[c,i]}}},getRoot:function(a){var b=v.Hooks.registered[a];return b?b[0]:a},cleanRootPropertyValue:function(a,b){return v.RegEx.valueUnwrap.test(b)&&(b=b.match(v.RegEx.valueUnwrap)[1]),v.Values.isCSSNullValue(b)&&(b=v.Hooks.templates[a][1]),b},extractValue:function(a,b){var c=v.Hooks.registered[a];if(c){var d=c[0],e=c[1];return b=v.Hooks.cleanRootPropertyValue(d,b),b.toString().match(v.RegEx.valueSplit)[e]}return b},injectValue:function(a,b,c){var d=v.Hooks.registered[a];if(d){var e,f,g=d[0],h=d[1];return c=v.Hooks.cleanRootPropertyValue(g,c),e=c.toString().match(v.RegEx.valueSplit),e[h]=b,f=e.join(" ")}return c}},Normalizations:{registered:{clip:function(a,b,c){switch(a){case"name":return"clip";case"extract":var d;return v.RegEx.wrappedValueAlreadyExtracted.test(c)?d=c:(d=c.toString().match(v.RegEx.valueUnwrap),d=d?d[1].replace(/,(\s+)?/g," "):c),d;case"inject":return"rect("+c+")"}},blur:function(a,b,c){switch(a){case"name":return t.State.isFirefox?"filter":"-webkit-filter";case"extract":var d=parseFloat(c);if(!d&&0!==d){var e=c.toString().match(/blur\(([0-9]+[A-z]+)\)/i);d=e?e[1]:0}return d;case"inject":return parseFloat(c)?"blur("+c+")":"none"}},opacity:function(a,b,c){if(n<=8)switch(a){case"name":return"filter";case"extract":var d=c.toString().match(/alpha\(opacity=(.*)\)/i);return c=d?d[1]/100:1;case"inject":return b.style.zoom=1,parseFloat(c)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(c),10)+")"}else switch(a){case"name":return"opacity";case"extract":return c;case"inject":return c}}},register:function(){n&&!(n>9)||t.State.isGingerbread||(v.Lists.transformsBase=v.Lists.transformsBase.concat(v.Lists.transforms3D));for(var a=0;a<v.Lists.transformsBase.length;a++)!function(){var b=v.Lists.transformsBase[a];v.Normalizations.registered[b]=function(a,c,e){switch(a){case"name":return"transform";case"extract":return g(c)===d||g(c).transformCache[b]===d?/^scale/i.test(b)?1:0:g(c).transformCache[b].replace(/[()]/g,"");case"inject":var f=!1;switch(b.substr(0,b.length-1)){case"translate":f=!/(%|px|em|rem|vw|vh|\d)$/i.test(e);break;case"scal":case"scale":t.State.isAndroid&&g(c).transformCache[b]===d&&e<1&&(e=1),f=!/(\d)$/i.test(e);break;case"skew":f=!/(deg|\d)$/i.test(e);break;case"rotate":f=!/(deg|\d)$/i.test(e)}return f||(g(c).transformCache[b]="("+e+")"),g(c).transformCache[b]}}}();for(var b=0;b<v.Lists.colors.length;b++)!function(){var a=v.Lists.colors[b];v.Normalizations.registered[a]=function(b,c,e){switch(b){case"name":return a;case"extract":var f;if(v.RegEx.wrappedValueAlreadyExtracted.test(e))f=e;else{var g,h={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(e)?g=h[e]!==d?h[e]:h.black:v.RegEx.isHex.test(e)?g="rgb("+v.Values.hexToRgb(e).join(" ")+")":/^rgba?\(/i.test(e)||(g=h.black),f=(g||e).toString().match(v.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return(!n||n>8)&&3===f.split(" ").length&&(f+=" 1"),f;case"inject":return n<=8?4===e.split(" ").length&&(e=e.split(/\s+/).slice(0,3).join(" ")):3===e.split(" ").length&&(e+=" 1"),(n<=8?"rgb":"rgba")+"("+e.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(a){return a.replace(/-(\w)/g,function(a,b){return b.toUpperCase()})},SVGAttribute:function(a){var b="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(n||t.State.isAndroid&&!t.State.isChrome)&&(b+="|transform"),new RegExp("^("+b+")$","i").test(a)},prefixCheck:function(a){if(t.State.prefixMatches[a])return[t.State.prefixMatches[a],!0];for(var b=["","Webkit","Moz","ms","O"],c=0,d=b.length;c<d;c++){var e;if(e=0===c?a:b[c]+a.replace(/^\w/,function(a){return a.toUpperCase()}),p.isString(t.State.prefixElement.style[e]))return t.State.prefixMatches[a]=e,[e,!0]}return[a,!1]}},Values:{hexToRgb:function(a){var b,c=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,d=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return a=a.replace(c,function(a,b,c,d){return b+b+c+c+d+d}),b=d.exec(a),b?[parseInt(b[1],16),parseInt(b[2],16),parseInt(b[3],16)]:[0,0,0]},isCSSNullValue:function(a){return!a||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(a)},getUnitType:function(a){return/^(rotate|skew)/i.test(a)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(a)?"":"px"},getDisplayType:function(a){var b=a&&a.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(b)?"inline":/^(li)$/i.test(b)?"list-item":/^(tr)$/i.test(b)?"table-row":/^(table)$/i.test(b)?"table":/^(tbody)$/i.test(b)?"table-row-group":"block"},addClass:function(a,b){a.classList?a.classList.add(b):a.className+=(a.className.length?" ":"")+b},removeClass:function(a,b){a.classList?a.classList.remove(b):a.className=a.className.toString().replace(new RegExp("(^|\\s)"+b.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(a,c,e,f){function h(a,c){var e=0;if(n<=8)e=m.css(a,c);else{var i=!1;/^(width|height)$/.test(c)&&0===v.getPropertyValue(a,"display")&&(i=!0,v.setPropertyValue(a,"display",v.Values.getDisplayType(a)));var j=function(){i&&v.setPropertyValue(a,"display","none")};if(!f){if("height"===c&&"border-box"!==v.getPropertyValue(a,"boxSizing").toString().toLowerCase()){var k=a.offsetHeight-(parseFloat(v.getPropertyValue(a,"borderTopWidth"))||0)-(parseFloat(v.getPropertyValue(a,"borderBottomWidth"))||0)-(parseFloat(v.getPropertyValue(a,"paddingTop"))||0)-(parseFloat(v.getPropertyValue(a,"paddingBottom"))||0);return j(),k}if("width"===c&&"border-box"!==v.getPropertyValue(a,"boxSizing").toString().toLowerCase()){var l=a.offsetWidth-(parseFloat(v.getPropertyValue(a,"borderLeftWidth"))||0)-(parseFloat(v.getPropertyValue(a,"borderRightWidth"))||0)-(parseFloat(v.getPropertyValue(a,"paddingLeft"))||0)-(parseFloat(v.getPropertyValue(a,"paddingRight"))||0);return j(),l}}var o;o=g(a)===d?b.getComputedStyle(a,null):g(a).computedStyle?g(a).computedStyle:g(a).computedStyle=b.getComputedStyle(a,null),"borderColor"===c&&(c="borderTopColor"),e=9===n&&"filter"===c?o.getPropertyValue(c):o[c],""!==e&&null!==e||(e=a.style[c]),j()}if("auto"===e&&/^(top|right|bottom|left)$/i.test(c)){var p=h(a,"position");("fixed"===p||"absolute"===p&&/top|left/i.test(c))&&(e=m(a).position()[c]+"px")}return e}var i;if(v.Hooks.registered[c]){var j=c,k=v.Hooks.getRoot(j);e===d&&(e=v.getPropertyValue(a,v.Names.prefixCheck(k)[0])),v.Normalizations.registered[k]&&(e=v.Normalizations.registered[k]("extract",a,e)),i=v.Hooks.extractValue(j,e)}else if(v.Normalizations.registered[c]){var l,o;l=v.Normalizations.registered[c]("name",a),"transform"!==l&&(o=h(a,v.Names.prefixCheck(l)[0]),v.Values.isCSSNullValue(o)&&v.Hooks.templates[c]&&(o=v.Hooks.templates[c][1])),i=v.Normalizations.registered[c]("extract",a,o)}if(!/^[\d-]/.test(i)){var p=g(a);if(p&&p.isSVG&&v.Names.SVGAttribute(c))if(/^(height|width)$/i.test(c))try{i=a.getBBox()[c]}catch(q){i=0}else i=a.getAttribute(c);else i=h(a,v.Names.prefixCheck(c)[0])}return v.Values.isCSSNullValue(i)&&(i=0),t.debug>=2&&console.log("Get "+c+": "+i),i},setPropertyValue:function(a,c,d,e,f){var h=c;if("scroll"===c)f.container?f.container["scroll"+f.direction]=d:"Left"===f.direction?b.scrollTo(d,f.alternateValue):b.scrollTo(f.alternateValue,d);else if(v.Normalizations.registered[c]&&"transform"===v.Normalizations.registered[c]("name",a))v.Normalizations.registered[c]("inject",a,d),h="transform",d=g(a).transformCache[c];else{if(v.Hooks.registered[c]){var i=c,j=v.Hooks.getRoot(c);e=e||v.getPropertyValue(a,j),d=v.Hooks.injectValue(i,d,e),c=j}if(v.Normalizations.registered[c]&&(d=v.Normalizations.registered[c]("inject",a,d),c=v.Normalizations.registered[c]("name",a)),h=v.Names.prefixCheck(c)[0],n<=8)try{a.style[h]=d}catch(k){t.debug&&console.log("Browser does not support ["+d+"] for ["+h+"]")}else{var l=g(a);l&&l.isSVG&&v.Names.SVGAttribute(c)?a.setAttribute(c,d):a.style[h]=d}t.debug>=2&&console.log("Set "+c+" ("+h+"): "+d)}return[h,d]},flushTransformCache:function(a){var b="",c=g(a);if((n||t.State.isAndroid&&!t.State.isChrome)&&c&&c.isSVG){var d=function(b){return parseFloat(v.getPropertyValue(a,b))},e={translate:[d("translateX"),d("translateY")],skewX:[d("skewX")],skewY:[d("skewY")],scale:1!==d("scale")?[d("scale"),d("scale")]:[d("scaleX"),d("scaleY")],rotate:[d("rotateZ"),0,0]};m.each(g(a).transformCache,function(a){/^translate/i.test(a)?a="translate":/^scale/i.test(a)?a="scale":/^rotate/i.test(a)&&(a="rotate"),e[a]&&(b+=a+"("+e[a].join(" ")+") ",delete e[a])})}else{var f,h;m.each(g(a).transformCache,function(c){return f=g(a).transformCache[c],"transformPerspective"===c?(h=f,!0):(9===n&&"rotateZ"===c&&(c="rotate"),void(b+=c+f+" "))}),h&&(b="perspective"+h+" "+b)}v.setPropertyValue(a,"transform",b)}};v.Hooks.register(),v.Normalizations.register(),t.hook=function(a,b,c){var e;return a=f(a),m.each(a,function(a,f){if(g(f)===d&&t.init(f),c===d)e===d&&(e=t.CSS.getPropertyValue(f,b));else{var h=t.CSS.setPropertyValue(f,b,c);"transform"===h[0]&&t.CSS.flushTransformCache(f),e=h}}),e};var w=function(){function a(){return i?C.promise||null:n}function e(a,e){function f(f){var n,o;if(i.begin&&0===z)try{i.begin.call(q,q)}catch(r){setTimeout(function(){throw r},1)}if("scroll"===D){var w,x,A,B=/^x$/i.test(i.axis)?"Left":"Top",E=parseFloat(i.offset)||0;i.container?p.isWrapped(i.container)||p.isNode(i.container)?(i.container=i.container[0]||i.container,w=i.container["scroll"+B],A=w+m(a).position()[B.toLowerCase()]+E):i.container=null:(w=t.State.scrollAnchor[t.State["scrollProperty"+B]],x=t.State.scrollAnchor[t.State["scrollProperty"+("Left"===B?"Top":"Left")]],A=m(a).offset()[B.toLowerCase()]+E),l={scroll:{rootPropertyValue:!1,startValue:w,currentValue:w,endValue:A,unitType:"",easing:i.easing,scrollData:{container:i.container,direction:B,alternateValue:x}},element:a},t.debug&&console.log("tweensContainer (scroll): ",l.scroll,a)}else if("reverse"===D){if(n=g(a),!n)return;if(!n.tweensContainer)return void m.dequeue(a,i.queue);"none"===n.opts.display&&(n.opts.display="auto"),"hidden"===n.opts.visibility&&(n.opts.visibility="visible"),n.opts.loop=!1,n.opts.begin=null,n.opts.complete=null,u.easing||delete i.easing,u.duration||delete i.duration,i=m.extend({},n.opts,i),o=m.extend(!0,{},n?n.tweensContainer:null);for(var F in o)if("element"!==F){var G=o[F].startValue;o[F].startValue=o[F].currentValue=o[F].endValue,o[F].endValue=G,p.isEmptyObject(u)||(o[F].easing=i.easing),t.debug&&console.log("reverse tweensContainer ("+F+"): "+JSON.stringify(o[F]),a)}l=o}else if("start"===D){n=g(a),n&&n.tweensContainer&&n.isAnimating===!0&&(o=n.tweensContainer);var H=function(b,c){var f,g,h;return p.isArray(b)?(f=b[0],!p.isArray(b[1])&&/^[\d-]/.test(b[1])||p.isFunction(b[1])||v.RegEx.isHex.test(b[1])?h=b[1]:(p.isString(b[1])&&!v.RegEx.isHex.test(b[1])||p.isArray(b[1]))&&(g=c?b[1]:j(b[1],i.duration),b[2]!==d&&(h=b[2]))):f=b,c||(g=g||i.easing),p.isFunction(f)&&(f=f.call(a,e,y)),p.isFunction(h)&&(h=h.call(a,e,y)),[f||0,g,h]};m.each(s,function(a,b){if(RegExp("^"+v.Lists.colors.join("$|^")+"$").test(v.Names.camelCase(a))){var c=H(b,!0),e=c[0],f=c[1],g=c[2];if(v.RegEx.isHex.test(e)){for(var h=["Red","Green","Blue"],i=v.Values.hexToRgb(e),j=g?v.Values.hexToRgb(g):d,k=0;k<h.length;k++){var l=[i[k]];f&&l.push(f),j!==d&&l.push(j[k]),s[v.Names.camelCase(a)+h[k]]=l}delete s[a]}}});for(var K in s){var L=H(s[K]),M=L[0],N=L[1],O=L[2];K=v.Names.camelCase(K);var P=v.Hooks.getRoot(K),Q=!1;if(n&&n.isSVG||"tween"===P||v.Names.prefixCheck(P)[1]!==!1||v.Normalizations.registered[P]!==d){(i.display!==d&&null!==i.display&&"none"!==i.display||i.visibility!==d&&"hidden"!==i.visibility)&&/opacity|filter/.test(K)&&!O&&0!==M&&(O=0),i._cacheValues&&o&&o[K]?(O===d&&(O=o[K].endValue+o[K].unitType),Q=n.rootPropertyValueCache[P]):v.Hooks.registered[K]?O===d?(Q=v.getPropertyValue(a,P),O=v.getPropertyValue(a,K,Q)):Q=v.Hooks.templates[P][1]:O===d&&(O=v.getPropertyValue(a,K));var R,S,T,U=!1,V=function(a,b){var c,d;return d=(b||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(a){return c=a,""}),c||(c=v.Values.getUnitType(a)),[d,c]};R=V(K,O),O=R[0],T=R[1],R=V(K,M),M=R[0].replace(/^([+-\/*])=/,function(a,b){return U=b,""}),S=R[1],O=parseFloat(O)||0,M=parseFloat(M)||0,"%"===S&&(/^(fontSize|lineHeight)$/.test(K)?(M/=100,S="em"):/^scale/.test(K)?(M/=100,S=""):/(Red|Green|Blue)$/i.test(K)&&(M=M/100*255,S=""));var W=function(){var d={myParent:a.parentNode||c.body,position:v.getPropertyValue(a,"position"),fontSize:v.getPropertyValue(a,"fontSize")},e=d.position===I.lastPosition&&d.myParent===I.lastParent,f=d.fontSize===I.lastFontSize;I.lastParent=d.myParent,I.lastPosition=d.position,I.lastFontSize=d.fontSize;var g=100,h={};if(f&&e)h.emToPx=I.lastEmToPx,h.percentToPxWidth=I.lastPercentToPxWidth,h.percentToPxHeight=I.lastPercentToPxHeight;else{var i=n&&n.isSVG?c.createElementNS("http://www.w3.org/2000/svg","rect"):c.createElement("div");t.init(i),d.myParent.appendChild(i),m.each(["overflow","overflowX","overflowY"],function(a,b){t.CSS.setPropertyValue(i,b,"hidden")}),t.CSS.setPropertyValue(i,"position",d.position),t.CSS.setPropertyValue(i,"fontSize",d.fontSize),t.CSS.setPropertyValue(i,"boxSizing","content-box"),m.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(a,b){t.CSS.setPropertyValue(i,b,g+"%")}),t.CSS.setPropertyValue(i,"paddingLeft",g+"em"),h.percentToPxWidth=I.lastPercentToPxWidth=(parseFloat(v.getPropertyValue(i,"width",null,!0))||1)/g,h.percentToPxHeight=I.lastPercentToPxHeight=(parseFloat(v.getPropertyValue(i,"height",null,!0))||1)/g,h.emToPx=I.lastEmToPx=(parseFloat(v.getPropertyValue(i,"paddingLeft"))||1)/g,d.myParent.removeChild(i)}return null===I.remToPx&&(I.remToPx=parseFloat(v.getPropertyValue(c.body,"fontSize"))||16),null===I.vwToPx&&(I.vwToPx=parseFloat(b.innerWidth)/100,I.vhToPx=parseFloat(b.innerHeight)/100),h.remToPx=I.remToPx,h.vwToPx=I.vwToPx,h.vhToPx=I.vhToPx,t.debug>=1&&console.log("Unit ratios: "+JSON.stringify(h),a),h};if(/[\/*]/.test(U))S=T;else if(T!==S&&0!==O)if(0===M)S=T;else{h=h||W();var X=/margin|padding|left|right|width|text|word|letter/i.test(K)||/X$/.test(K)||"x"===K?"x":"y";switch(T){case"%":O*="x"===X?h.percentToPxWidth:h.percentToPxHeight;break;case"px":break;default:O*=h[T+"ToPx"]}switch(S){case"%":O*=1/("x"===X?h.percentToPxWidth:h.percentToPxHeight);break;case"px":break;default:O*=1/h[S+"ToPx"]}}switch(U){case"+":M=O+M;break;case"-":M=O-M;break;case"*":M=O*M;break;case"/":M=O/M}l[K]={rootPropertyValue:Q,startValue:O,currentValue:O,endValue:M,unitType:S,easing:N},t.debug&&console.log("tweensContainer ("+K+"): "+JSON.stringify(l[K]),a)}else t.debug&&console.log("Skipping ["+P+"] due to a lack of browser support.")}l.element=a}l.element&&(v.Values.addClass(a,"velocity-animating"),J.push(l),n=g(a),n&&(""===i.queue&&(n.tweensContainer=l,n.opts=i),n.isAnimating=!0),z===y-1?(t.State.calls.push([J,q,i,null,C.resolver]),t.State.isTicking===!1&&(t.State.isTicking=!0,k())):z++)}var h,i=m.extend({},t.defaults,u),l={};switch(g(a)===d&&t.init(a),parseFloat(i.delay)&&i.queue!==!1&&m.queue(a,i.queue,function(b){t.velocityQueueEntryFlag=!0,g(a).delayTimer={setTimeout:setTimeout(b,parseFloat(i.delay)),next:b}}),i.duration.toString().toLowerCase()){case"fast":i.duration=200;break;case"normal":i.duration=r;break;case"slow":i.duration=600;break;default:i.duration=parseFloat(i.duration)||1}t.mock!==!1&&(t.mock===!0?i.duration=i.delay=1:(i.duration*=parseFloat(t.mock)||1,i.delay*=parseFloat(t.mock)||1)),i.easing=j(i.easing,i.duration),i.begin&&!p.isFunction(i.begin)&&(i.begin=null),i.progress&&!p.isFunction(i.progress)&&(i.progress=null),i.complete&&!p.isFunction(i.complete)&&(i.complete=null),i.display!==d&&null!==i.display&&(i.display=i.display.toString().toLowerCase(),"auto"===i.display&&(i.display=t.CSS.Values.getDisplayType(a))),i.visibility!==d&&null!==i.visibility&&(i.visibility=i.visibility.toString().toLowerCase()),i.mobileHA=i.mobileHA&&t.State.isMobile&&!t.State.isGingerbread,i.queue===!1?i.delay?setTimeout(f,i.delay):f():m.queue(a,i.queue,function(a,b){return b===!0?(C.promise&&C.resolver(q),!0):(t.velocityQueueEntryFlag=!0,void f(a))}),""!==i.queue&&"fx"!==i.queue||"inprogress"===m.queue(a)[0]||m.dequeue(a)}var h,i,n,o,q,s,u,x=arguments[0]&&(arguments[0].p||m.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||p.isString(arguments[0].properties));if(p.isWrapped(this)?(i=!1,o=0,q=this,n=this):(i=!0,o=1,q=x?arguments[0].elements||arguments[0].e:arguments[0]),q=f(q)){x?(s=arguments[0].properties||arguments[0].p,u=arguments[0].options||arguments[0].o):(s=arguments[o],u=arguments[o+1]);var y=q.length,z=0;if(!/^(stop|finish|finishAll)$/i.test(s)&&!m.isPlainObject(u)){var A=o+1;u={};for(var B=A;B<arguments.length;B++)p.isArray(arguments[B])||!/^(fast|normal|slow)$/i.test(arguments[B])&&!/^\d/.test(arguments[B])?p.isString(arguments[B])||p.isArray(arguments[B])?u.easing=arguments[B]:p.isFunction(arguments[B])&&(u.complete=arguments[B]):u.duration=arguments[B]}var C={promise:null,resolver:null,rejecter:null};i&&t.Promise&&(C.promise=new t.Promise(function(a,b){C.resolver=a,C.rejecter=b}));var D;switch(s){case"scroll":D="scroll";break;case"reverse":D="reverse";break;case"finish":case"finishAll":case"stop":m.each(q,function(a,b){g(b)&&g(b).delayTimer&&(clearTimeout(g(b).delayTimer.setTimeout),g(b).delayTimer.next&&g(b).delayTimer.next(),delete g(b).delayTimer),"finishAll"!==s||u!==!0&&!p.isString(u)||(m.each(m.queue(b,p.isString(u)?u:""),function(a,b){p.isFunction(b)&&b()}),m.queue(b,p.isString(u)?u:"",[]))});var E=[];return m.each(t.State.calls,function(a,b){
b&&m.each(b[1],function(c,e){var f=u===d?"":u;return f!==!0&&b[2].queue!==f&&(u!==d||b[2].queue!==!1)||void m.each(q,function(c,d){if(d===e)if((u===!0||p.isString(u))&&(m.each(m.queue(d,p.isString(u)?u:""),function(a,b){p.isFunction(b)&&b(null,!0)}),m.queue(d,p.isString(u)?u:"",[])),"stop"===s){var h=g(d);h&&h.tweensContainer&&f!==!1&&m.each(h.tweensContainer,function(a,b){b.endValue=b.currentValue}),E.push(a)}else"finish"!==s&&"finishAll"!==s||(b[2].duration=1)})})}),"stop"===s&&(m.each(E,function(a,b){l(b,!0)}),C.promise&&C.resolver(q)),a();default:if(!m.isPlainObject(s)||p.isEmptyObject(s)){if(p.isString(s)&&t.Redirects[s]){h=m.extend({},u);var F=h.duration,G=h.delay||0;return h.backwards===!0&&(q=m.extend(!0,[],q).reverse()),m.each(q,function(a,b){parseFloat(h.stagger)?h.delay=G+parseFloat(h.stagger)*a:p.isFunction(h.stagger)&&(h.delay=G+h.stagger.call(b,a,y)),h.drag&&(h.duration=parseFloat(F)||(/^(callout|transition)/.test(s)?1e3:r),h.duration=Math.max(h.duration*(h.backwards?1-a/y:(a+1)/y),.75*h.duration,200)),t.Redirects[s].call(b,b,h||{},a,y,q,C.promise?C:d)}),a()}var H="Velocity: First argument ("+s+") was not a property map, a known action, or a registered redirect. Aborting.";return C.promise?C.rejecter(new Error(H)):console.log(H),a()}D="start"}var I={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},J=[];m.each(q,function(a,b){p.isNode(b)&&e(b,a)}),h=m.extend({},t.defaults,u),h.loop=parseInt(h.loop,10);var K=2*h.loop-1;if(h.loop)for(var L=0;L<K;L++){var M={delay:h.delay,progress:h.progress};L===K-1&&(M.display=h.display,M.visibility=h.visibility,M.complete=h.complete),w(q,"reverse",M)}return a()}};t=m.extend(w,t),t.animate=w;var x=b.requestAnimationFrame||o;return t.State.isMobile||c.hidden===d||c.addEventListener("visibilitychange",function(){c.hidden?(x=function(a){return setTimeout(function(){a(!0)},16)},k()):x=b.requestAnimationFrame||o}),a.Velocity=t,a!==b&&(a.fn.velocity=w,a.fn.velocity.defaults=t.defaults),m.each(["Down","Up"],function(a,b){t.Redirects["slide"+b]=function(a,c,e,f,g,h){var i=m.extend({},c),j=i.begin,k=i.complete,l={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},n={};i.display===d&&(i.display="Down"===b?"inline"===t.CSS.Values.getDisplayType(a)?"inline-block":"block":"none"),i.begin=function(){j&&j.call(g,g);for(var c in l){n[c]=a.style[c];var d=t.CSS.getPropertyValue(a,c);l[c]="Down"===b?[d,0]:[0,d]}n.overflow=a.style.overflow,a.style.overflow="hidden"},i.complete=function(){for(var b in n)a.style[b]=n[b];k&&k.call(g,g),h&&h.resolver(g)},t(a,l,i)}}),m.each(["In","Out"],function(a,b){t.Redirects["fade"+b]=function(a,c,e,f,g,h){var i=m.extend({},c),j=i.complete,k={opacity:"In"===b?1:0};e!==f-1?i.complete=i.begin=null:i.complete=function(){j&&j.call(g,g),h&&h.resolver(g)},i.display===d&&(i.display="In"===b?"auto":"none"),t(this,k,i)}}),t}(window.jQuery||window.Zepto||window,window,document)});;
(function(A){if(typeof require==="function"&&typeof exports==="object"){module.exports=A()}else{if(typeof define==="function"&&define.amd){define(["velocity"],A)}else{A()}}}(function(){return function(I,G,E,A){if(!I.Velocity||!I.Velocity.Utilities){G.console&&console.log("Velocity UI Pack: Velocity must be loaded first. Aborting.");return}else{var B=I.Velocity,J=B.Utilities}var H=B.version,K={major:1,minor:1,patch:0};function C(L,M){var N=[];if(!L||!M){return false}J.each([L,M],function(P,O){var Q=[];J.each(O,function(R,S){while(S.toString().length<5){S="0"+S}Q.push(S)});N.push(Q.join(""))});return(parseFloat(N[0])>parseFloat(N[1]))}if(C(K,H)){var D="Velocity UI Pack: You need to update Velocity (jquery.velocity.js) to a newer version. Visit http://github.com/julianshapiro/velocity.";alert(D);throw new Error(D)}B.RegisterEffect=B.RegisterUI=function(M,L){function N(Q,T,P,R){var S=0,O;J.each(Q.nodeType?[Q]:Q,function(U,V){if(R){P+=U*R}O=V.parentNode;J.each(["height","paddingTop","paddingBottom","marginTop","marginBottom"],function(W,X){S+=parseFloat(B.CSS.getPropertyValue(V,X))})});B.animate(O,{height:(T==="In"?"+":"-")+"="+S},{queue:false,easing:"ease-in-out",duration:P*(T==="In"?0.6:1)})}B.Redirects[M]=function(O,Q,T,d,P,a){var U=(T===d-1);if(typeof L.defaultDuration==="function"){L.defaultDuration=L.defaultDuration.call(P,P)}else{L.defaultDuration=parseFloat(L.defaultDuration)}for(var X=0;X<L.calls.length;X++){var V=L.calls[X],S=V[0],Z=(Q.duration||L.defaultDuration||1000),c=V[1],Y=V[2]||{},W={};W.duration=Z*(c||1);W.queue=Q.queue||"";W.easing=Y.easing||"ease";W.delay=parseFloat(Y.delay)||0;W._cacheValues=Y._cacheValues||true;if(X===0){W.delay+=(parseFloat(Q.delay)||0);if(T===0){W.begin=function(){Q.begin&&Q.begin.call(P,P);var e=M.match(/(In|Out)$/);if((e&&e[0]==="In")&&S.opacity!==A){J.each(P.nodeType?[P]:P,function(f,g){B.CSS.setPropertyValue(g,"opacity",0)})}if(Q.animateParentHeight&&e){N(P,e[0],Z+W.delay,Q.stagger)}}}if(Q.display!==null){if(Q.display!==A&&Q.display!=="none"){W.display=Q.display}else{if(/In$/.test(M)){var b=B.CSS.Values.getDisplayType(O);W.display=(b==="inline")?"inline-block":b}}}if(Q.visibility&&Q.visibility!=="hidden"){W.visibility=Q.visibility}}if(X===L.calls.length-1){function R(){if((Q.display===A||Q.display==="none")&&/Out$/.test(M)){J.each(P.nodeType?[P]:P,function(e,f){B.CSS.setPropertyValue(f,"display","none")})}Q.complete&&Q.complete.call(P,P);if(a){a.resolver(P||O)}}W.complete=function(){if(L.reset){for(var e in L.reset){var f=L.reset[e];if(B.CSS.Hooks.registered[e]===A&&(typeof f==="string"||typeof f==="number")){L.reset[e]=[L.reset[e],L.reset[e]]}}var g={duration:0,queue:false};if(U){g.complete=R}B.animate(O,L.reset,g)}else{if(U){R()}}};if(Q.visibility==="hidden"){W.visibility=Q.visibility}}B.animate(O,S,W)}};return B};B.RegisterEffect.packagedEffects={"callout.bounce":{defaultDuration:550,calls:[[{translateY:-30},0.25],[{translateY:0},0.125],[{translateY:-15},0.125],[{translateY:0},0.25]]},"callout.shake":{defaultDuration:800,calls:[[{translateX:-11},0.125],[{translateX:11},0.125],[{translateX:-11},0.125],[{translateX:11},0.125],[{translateX:-11},0.125],[{translateX:11},0.125],[{translateX:-11},0.125],[{translateX:0},0.125]]},"callout.flash":{defaultDuration:1100,calls:[[{opacity:[0,"easeInOutQuad",1]},0.25],[{opacity:[1,"easeInOutQuad"]},0.25],[{opacity:[0,"easeInOutQuad"]},0.25],[{opacity:[1,"easeInOutQuad"]},0.25]]},"callout.pulse":{defaultDuration:825,calls:[[{scaleX:1.1,scaleY:1.1},0.5,{easing:"easeInExpo"}],[{scaleX:1,scaleY:1},0.5]]},"callout.swing":{defaultDuration:950,calls:[[{rotateZ:15},0.2],[{rotateZ:-10},0.2],[{rotateZ:5},0.2],[{rotateZ:-5},0.2],[{rotateZ:0},0.2]]},"callout.tada":{defaultDuration:1000,calls:[[{scaleX:0.9,scaleY:0.9,rotateZ:-3},0.1],[{scaleX:1.1,scaleY:1.1,rotateZ:3},0.1],[{scaleX:1.1,scaleY:1.1,rotateZ:-3},0.1],["reverse",0.125],["reverse",0.125],["reverse",0.125],["reverse",0.125],["reverse",0.125],[{scaleX:1,scaleY:1,rotateZ:0},0.2]]},"transition.fadeIn":{defaultDuration:500,calls:[[{opacity:[1,0]}]]},"transition.fadeOut":{defaultDuration:500,calls:[[{opacity:[0,1]}]]},"transition.flipXIn":{defaultDuration:700,calls:[[{opacity:[1,0],transformPerspective:[800,800],rotateY:[0,-55]}]],reset:{transformPerspective:0}},"transition.flipXOut":{defaultDuration:700,calls:[[{opacity:[0,1],transformPerspective:[800,800],rotateY:55}]],reset:{transformPerspective:0,rotateY:0}},"transition.flipYIn":{defaultDuration:800,calls:[[{opacity:[1,0],transformPerspective:[800,800],rotateX:[0,-45]}]],reset:{transformPerspective:0}},"transition.flipYOut":{defaultDuration:800,calls:[[{opacity:[0,1],transformPerspective:[800,800],rotateX:25}]],reset:{transformPerspective:0,rotateX:0}},"transition.flipBounceXIn":{defaultDuration:900,calls:[[{opacity:[0.725,0],transformPerspective:[400,400],rotateY:[-10,90]},0.5],[{opacity:0.8,rotateY:10},0.25],[{opacity:1,rotateY:0},0.25]],reset:{transformPerspective:0}},"transition.flipBounceXOut":{defaultDuration:800,calls:[[{opacity:[0.9,1],transformPerspective:[400,400],rotateY:-10},0.5],[{opacity:0,rotateY:90},0.5]],reset:{transformPerspective:0,rotateY:0}},"transition.flipBounceYIn":{defaultDuration:850,calls:[[{opacity:[0.725,0],transformPerspective:[400,400],rotateX:[-10,90]},0.5],[{opacity:0.8,rotateX:10},0.25],[{opacity:1,rotateX:0},0.25]],reset:{transformPerspective:0}},"transition.flipBounceYOut":{defaultDuration:800,calls:[[{opacity:[0.9,1],transformPerspective:[400,400],rotateX:-15},0.5],[{opacity:0,rotateX:90},0.5]],reset:{transformPerspective:0,rotateX:0}},"transition.swoopIn":{defaultDuration:850,calls:[[{opacity:[1,0],transformOriginX:["100%","50%"],transformOriginY:["100%","100%"],scaleX:[1,0],scaleY:[1,0],translateX:[0,-700],translateZ:0}]],reset:{transformOriginX:"50%",transformOriginY:"50%"}},"transition.swoopOut":{defaultDuration:850,calls:[[{opacity:[0,1],transformOriginX:["50%","100%"],transformOriginY:["100%","100%"],scaleX:0,scaleY:0,translateX:-700,translateZ:0}]],reset:{transformOriginX:"50%",transformOriginY:"50%",scaleX:1,scaleY:1,translateX:0}},"transition.whirlIn":{defaultDuration:850,calls:[[{opacity:[1,0],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:[1,0],scaleY:[1,0],rotateY:[0,160]},1,{easing:"easeInOutSine"}]]},"transition.whirlOut":{defaultDuration:750,calls:[[{opacity:[0,"easeInOutQuint",1],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:0,scaleY:0,rotateY:160},1,{easing:"swing"}]],reset:{scaleX:1,scaleY:1,rotateY:0}},"transition.shrinkIn":{defaultDuration:750,calls:[[{opacity:[1,0],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:[1,1.5],scaleY:[1,1.5],translateZ:0}]]},"transition.shrinkOut":{defaultDuration:600,calls:[[{opacity:[0,1],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:0.5,scaleY:0.5,translateZ:0}]],reset:{scaleX:1,scaleY:1}},"transition.expandIn":{defaultDuration:700,calls:[[{opacity:[1,0],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:[1,0.625],scaleY:[1,0.625],translateZ:0}]]},"transition.expandOut":{defaultDuration:700,calls:[[{opacity:[0,1],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:1.3,scaleY:1.3,translateZ:0}]],reset:{scaleX:1,scaleY:1}},"transition.bounceIn":{defaultDuration:800,calls:[[{opacity:[1,0],scaleX:[1.05,0.3],scaleY:[1.05,0.3]},0.4],[{scaleX:0.9,scaleY:0.9,translateZ:0},0.2],[{scaleX:1,scaleY:1},0.5]]},"transition.bounceOut":{defaultDuration:800,calls:[[{scaleX:0.95,scaleY:0.95},0.35],[{scaleX:1.1,scaleY:1.1,translateZ:0},0.35],[{opacity:[0,1],scaleX:0.3,scaleY:0.3},0.3]],reset:{scaleX:1,scaleY:1}},"transition.bounceUpIn":{defaultDuration:800,calls:[[{opacity:[1,0],translateY:[-30,1000]},0.6,{easing:"easeOutCirc"}],[{translateY:10},0.2],[{translateY:0},0.2]]},"transition.bounceUpOut":{defaultDuration:1000,calls:[[{translateY:20},0.2],[{opacity:[0,"easeInCirc",1],translateY:-1000},0.8]],reset:{translateY:0}},"transition.bounceDownIn":{defaultDuration:800,calls:[[{opacity:[1,0],translateY:[30,-1000]},0.6,{easing:"easeOutCirc"}],[{translateY:-10},0.2],[{translateY:0},0.2]]},"transition.bounceDownOut":{defaultDuration:1000,calls:[[{translateY:-20},0.2],[{opacity:[0,"easeInCirc",1],translateY:1000},0.8]],reset:{translateY:0}},"transition.bounceLeftIn":{defaultDuration:750,calls:[[{opacity:[1,0],translateX:[30,-1250]},0.6,{easing:"easeOutCirc"}],[{translateX:-10},0.2],[{translateX:0},0.2]]},"transition.bounceLeftOut":{defaultDuration:750,calls:[[{translateX:30},0.2],[{opacity:[0,"easeInCirc",1],translateX:-1250},0.8]],reset:{translateX:0}},"transition.bounceRightIn":{defaultDuration:750,calls:[[{opacity:[1,0],translateX:[-30,1250]},0.6,{easing:"easeOutCirc"}],[{translateX:10},0.2],[{translateX:0},0.2]]},"transition.bounceRightOut":{defaultDuration:750,calls:[[{translateX:-30},0.2],[{opacity:[0,"easeInCirc",1],translateX:1250},0.8]],reset:{translateX:0}},"transition.slideUpIn":{defaultDuration:900,calls:[[{opacity:[1,0],translateY:[0,20],translateZ:0}]]},"transition.slideUpOut":{defaultDuration:900,calls:[[{opacity:[0,1],translateY:-20,translateZ:0}]],reset:{translateY:0}},"transition.slideDownIn":{defaultDuration:900,calls:[[{opacity:[1,0],translateY:[0,-20],translateZ:0}]]},"transition.slideDownOut":{defaultDuration:900,calls:[[{opacity:[0,1],translateY:20,translateZ:0}]],reset:{translateY:0}},"transition.slideLeftIn":{defaultDuration:1000,calls:[[{opacity:[1,0],translateX:[0,-20],translateZ:0}]]},"transition.slideLeftOut":{defaultDuration:1050,calls:[[{opacity:[0,1],translateX:-20,translateZ:0}]],reset:{translateX:0}},"transition.slideRightIn":{defaultDuration:1000,calls:[[{opacity:[1,0],translateX:[0,20],translateZ:0}]]},"transition.slideRightOut":{defaultDuration:1050,calls:[[{opacity:[0,1],translateX:20,translateZ:0}]],reset:{translateX:0}},"transition.slideUpBigIn":{defaultDuration:850,calls:[[{opacity:[1,0],translateY:[0,75],translateZ:0}]]},"transition.slideUpBigOut":{defaultDuration:800,calls:[[{opacity:[0,1],translateY:-75,translateZ:0}]],reset:{translateY:0}},"transition.slideDownBigIn":{defaultDuration:850,calls:[[{opacity:[1,0],translateY:[0,-75],translateZ:0}]]},"transition.slideDownBigOut":{defaultDuration:800,calls:[[{opacity:[0,1],translateY:75,translateZ:0}]],reset:{translateY:0}},"transition.slideLeftBigIn":{defaultDuration:800,calls:[[{opacity:[1,0],translateX:[0,-75],translateZ:0}]]},"transition.slideLeftBigOut":{defaultDuration:750,calls:[[{opacity:[0,1],translateX:-75,translateZ:0}]],reset:{translateX:0}},"transition.slideRightBigIn":{defaultDuration:800,calls:[[{opacity:[1,0],translateX:[0,75],translateZ:0}]]},"transition.slideRightBigOut":{defaultDuration:750,calls:[[{opacity:[0,1],translateX:75,translateZ:0}]],reset:{translateX:0}},"transition.perspectiveUpIn":{defaultDuration:800,calls:[[{opacity:[1,0],transformPerspective:[800,800],transformOriginX:[0,0],transformOriginY:["100%","100%"],rotateX:[0,-180]}]]},"transition.perspectiveUpOut":{defaultDuration:850,calls:[[{opacity:[0,1],transformPerspective:[800,800],transformOriginX:[0,0],transformOriginY:["100%","100%"],rotateX:-180}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%",rotateX:0}},"transition.perspectiveDownIn":{defaultDuration:800,calls:[[{opacity:[1,0],transformPerspective:[800,800],transformOriginX:[0,0],transformOriginY:[0,0],rotateX:[0,180]}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%"}},"transition.perspectiveDownOut":{defaultDuration:850,calls:[[{opacity:[0,1],transformPerspective:[800,800],transformOriginX:[0,0],transformOriginY:[0,0],rotateX:180}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%",rotateX:0}},"transition.perspectiveLeftIn":{defaultDuration:950,calls:[[{opacity:[1,0],transformPerspective:[2000,2000],transformOriginX:[0,0],transformOriginY:[0,0],rotateY:[0,-180]}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%"}},"transition.perspectiveLeftOut":{defaultDuration:950,calls:[[{opacity:[0,1],transformPerspective:[2000,2000],transformOriginX:[0,0],transformOriginY:[0,0],rotateY:-180}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%",rotateY:0}},"transition.perspectiveRightIn":{defaultDuration:950,calls:[[{opacity:[1,0],transformPerspective:[2000,2000],transformOriginX:["100%","100%"],transformOriginY:[0,0],rotateY:[0,180]}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%"}},"transition.perspectiveRightOut":{defaultDuration:950,calls:[[{opacity:[0,1],transformPerspective:[2000,2000],transformOriginX:["100%","100%"],transformOriginY:[0,0],rotateY:180}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%",rotateY:0}}};for(var F in B.RegisterEffect.packagedEffects){B.RegisterEffect(F,B.RegisterEffect.packagedEffects[F])}B.RunSequence=function(M){var L=J.extend(true,[],M);if(L.length>1){J.each(L.reverse(),function(N,R){var Q=L[N+1];if(Q){var O=(R.options&&R.options.sequenceQueue===false)?"begin":"complete",S=Q.options&&Q.options[O],P={};P[O]=function(){var T=Q.elements||Q.e;var U=T.nodeType?[T]:T;S&&S.call(U,U);B(R)};Q.options=J.extend({},Q.options,P)}});L.reverse()}B(L[0])}}((window.jQuery||window.Zepto||window),window,document)}));;
;(function (window) {
	$.WOPOP_EFFECTS={};
	$.WOPOP_EFFECTS['fromleft']=function(dom,options){
		var orileft=parseInt($(dom).css('left'))||0;
		//当弹窗容器设置在右边时，并且不影响其他插件的动画效果
		if ($(dom).attr('type') == 'pop_up' && $(dom).css('left') == 'auto') {
			orileft = $('#scroll_container_bg').width()-$(dom).width();
		}else if ($(dom).attr('type') == 'mpop_up' && $(dom).css('left') == 'auto') {
			orileft = $('#scroll_container_bg').width()-$(dom).width();
		}
		var delay=$.WOPOP_EFFECTS._parseNum(options['delay'],1);
		var duration=$.WOPOP_EFFECTS._parseNum(options['duration'],1);
		
		_getEffectDom(dom).done(function(dom){
			$(dom).css('left',0-$(dom).width());
			dom.velocity({left:orileft+'px'},
			{delay:(delay*1000),duration: (duration*1000),display: "block",easing:'ease',complete:create_complete(options)})
		})
	}
	
	$.WOPOP_EFFECTS['frombottom']=function(dom,options){
		var oritop=parseInt($(dom).css('top'))||0;
		//当弹窗容器设置在底部时，并且不影响其他插件的动画效果
		if ($(dom).attr('type') == 'pop_up' && $(dom).css('top') == 'auto') {
			oritop = $(window).height()-$(dom).height();
		}else if ($(dom).attr('type') == 'mpop_up' && $(dom).css('top') == 'auto') {
			oritop = $(window).height()-$(dom).height();
		}
		var delay=$.WOPOP_EFFECTS._parseNum(options['delay'],1);
		var duration=$.WOPOP_EFFECTS._parseNum(options['duration'],1);
		if(!$.wismobile||$.WOPOP_EFFECTS._isEditMode()){
			var container=$('#scroll_container');
		}else{
			var container=$(window);
		}
		_getEffectDom(dom).done(function(dom){
			//弹窗容器内子插件从下飞出效果调整，不影响其它插件
			if ($(dom).parents('.cstlayer').attr('type') == 'pop_up') {
				$(dom).css('top',$(dom).parents('.cstlayer').height());
			}else if ($(dom).parents('.cstlayer').attr('type') == 'mpop_up') {
				$(dom).css('top',$(dom).parents('.cstlayer').height());
			} else {
				$(dom).css('top',container.scrollTop()+container.height()+$(dom).height());
			}
			dom.velocity({top:oritop+'px'},
			{delay:(delay*1000),duration: (duration*1000),display: "block",easing:'ease',complete:create_complete(options)})
		})
	}
	
	$.WOPOP_EFFECTS['fromright']=function(dom,options){
		var orileft=parseInt($(dom).css('left'))||0;
		//当弹窗容器设置在右边时，并且不影响其他插件的动画效果
		if ($(dom).attr('type') == 'pop_up' && $(dom).css('left') == 'auto') {
			orileft = $('#scroll_container_bg').width()-$(dom).width();
		}else if ($(dom).attr('type') == 'mpop_up' && $(dom).css('left') == 'auto') {
			orileft = $('#scroll_container_bg').width()-$(dom).width();
		}
		var delay=$.WOPOP_EFFECTS._parseNum(options['delay'],1);
		var duration=$.WOPOP_EFFECTS._parseNum(options['duration'],1);
		if(!$.wismobile||$.WOPOP_EFFECTS._isEditMode()){
			var container=$('#scroll_container');
		}else{
			var container=$(window);
		}
		_getEffectDom(dom).done(function(dom){
			//弹窗容器以及其内子插件从右飞出效果调整，不影响其它插件
			if ($(dom).attr('type') == 'pop_up') {
				$(dom).css('left',container.width());
			} else if($(dom).parents('.cstlayer').attr('type') == 'pop_up') {
				$(dom).css('left',$(dom).parents('.cstlayer').width());
			}else if ($(dom).attr('type') == 'mpop_up') {
				$(dom).css('left',container.width());
			} else if($(dom).parents('.cstlayer').attr('type') == 'mpop_up') {
				$(dom).css('left',$(dom).parents('.cstlayer').width());
			} else {
				$(dom).css('left',container.width()+$(dom).width());
			}
			dom.velocity({left:orileft+'px'},
			{delay:(delay*1000),duration: (duration*1000),display: "block",easing:'ease',complete:create_complete(options)})
		})
	}
	
	$.WOPOP_EFFECTS['fromtop']=function(dom,options){
		var oritop=parseInt($(dom).css('top'))||0;
		//当弹窗容器设置在底部时，并且不影响其他插件的动画效果
		if ($(dom).attr('type') == 'pop_up' && $(dom).css('top') == 'auto') {
			oritop = $(window).height()-$(dom).height();
		}else if ($(dom).attr('type') == 'mpop_up' && $(dom).css('top') == 'auto') {
			oritop = $(window).height()-$(dom).height();
		}
		var delay=$.WOPOP_EFFECTS._parseNum(options['delay'],1);
		var duration=$.WOPOP_EFFECTS._parseNum(options['duration'],1);
		if(!$.wismobile||$.WOPOP_EFFECTS._isEditMode()){
			var container=$('#scroll_container');
		}else{
			var container=$(window);
		}
		_getEffectDom(dom).done(function(dom){
			// 考虑「通栏」元素（bug#4284）
			var $layer = $(dom),
			initop = ($layer.attr("fatherid")||"").length ? 0 : (container.scrollTop() - $(dom).height());
			//弹窗容器内子插件从上飞出效果调整，不影响其它插件
			if ($(dom).parents('.cstlayer').attr('type') == 'pop_up' || $layer.attr('type') == 'pop_up' && $layer.css('position')=='fixed') {
				$layer.css('top',0-($(dom).height()));
			} else if ($(dom).parents('.cstlayer').attr('type') == 'mpop_up' || $layer.attr('type') == 'mpop_up' && $layer.css('position')=='fixed') {
				$layer.css('top',0-($(dom).height()));
			} else {
				$layer.css("top", initop);
			}
			//$(dom).css('top',container.scrollTop()-$(dom).height());
			dom.velocity({top:oritop+'px'},
			{delay:(delay*1000),duration: (duration*1000),display: "block",easing:'ease',complete:create_complete(options)})
		})
	}
	
	$.WOPOP_EFFECTS['fade']=function(dom,options){
		var orival=parseInt($(dom).css('opacity'))||1;
		var delay=$.WOPOP_EFFECTS._parseNum(options['delay'],1);
		var duration=$.WOPOP_EFFECTS._parseNum(options['duration'],1);
		
		_getEffectDom(dom).done(function(dom){
			$(dom).css('opacity',0);
			dom.velocity({opacity:orival},
			{delay:(delay*1000),duration: (duration*1000),display: "block",easing:'ease-out',complete:create_complete(options)})
		})
	}
	
	$.WOPOP_EFFECTS['rotation']=function(dom,options){
		var delay=$.WOPOP_EFFECTS._parseNum(options['delay'],1);
		var duration=$.WOPOP_EFFECTS._parseNum(options['duration'],1);
		$.Velocity.hook($(dom), "rotateY", "180deg");
		$(dom).show();
		_getEffectDom(dom).done(function(dom){
			dom.velocity({rotateY:["0deg","180deg"]},
			{delay:(delay*1000),duration: (duration*1000),display: "block",easing:'ease',complete:create_complete(options)})
		})
	}
	
	$.WOPOP_EFFECTS['rotation2d']=function(dom,options){
		var delay=$.WOPOP_EFFECTS._parseNum(options['delay'],1);
		var duration=$.WOPOP_EFFECTS._parseNum(options['duration'],1);
		$(dom).show();
		_getEffectDom(dom).done(function(dom){
			dom.velocity({rotateZ:["360deg","0deg"]},
			{delay:(delay*1000),duration: (duration*1000),display: "block",easing:'linear'})
			.velocity({rotateZ:["360deg","0deg"]},
			{delay:0,duration: (duration*1000),display: "block",loop:true,easing:'linear',complete:create_complete(options)})
		})
	}
	
	$.WOPOP_EFFECTS['bounceIn']=function(dom,options){
		var delay=$.WOPOP_EFFECTS._parseNum(options['delay'],1);
		var duration=$.WOPOP_EFFECTS._parseNum(options['duration'],1);
		$.Velocity.hook($(dom), "scale", "0.3");
		$(dom).css('opacity',0);
		_getEffectDom(dom).done(function(dom){
			dom
			.velocity({scale:[1.05,0.3],opacity:[1,0]},{delay:(delay*1000),duration: (duration*333),display: "block"})
			.velocity({scale:[0.7,1.05]},{delay:0,duration: (duration*333),display: "block"})
			.velocity({scale:[1,0.7]},{delay:0,duration: (duration*333),display: "block",complete:create_complete(options)})
		})
	}
	
	$.WOPOP_EFFECTS['big2small']=function(dom,options){
		var delay=$.WOPOP_EFFECTS._parseNum(options['delay'],1);
		var duration=$.WOPOP_EFFECTS._parseNum(options['duration'],1);
		$.Velocity.hook($(dom), "scale", "2");
		_getEffectDom(dom).done(function(dom){
			dom.velocity({scale:[1,2],opacity:[1,0]},
			{delay:(delay*1000),duration: (duration*1000),display: "block",easing:'ease-in',complete:create_complete(options)})
		})
	}
	
	$.WOPOP_EFFECTS['small2big']=function(dom,options){
		var delay=$.WOPOP_EFFECTS._parseNum(options['delay'],1);
		var duration=$.WOPOP_EFFECTS._parseNum(options['duration'],1);
		$.Velocity.hook($(dom), "scale", "0.5");
		_getEffectDom(dom).done(function(dom){
			dom.velocity({scale:[1,0.5],opacity:[1,0]},
			{delay:(delay*1000),duration: (duration*1000),display: "block",easing:'ease-in',complete:create_complete(options)})
		})
	}
	
	$.WOPOP_EFFECTS['fadeFromLeft']=function(dom,options){
		var orileft=parseInt($(dom).css('left'))||0;
		//当弹窗容器设置在右边时，并且不影响其他插件的动画效果
		if ($(dom).attr('type') == 'pop_up' && $(dom).css('left') == 'auto') {
			orileft = $('#scroll_container_bg').width()-$(dom).width();
		}else if ($(dom).attr('type') == 'mpop_up' && $(dom).css('left') == 'auto') {
			orileft = $('#scroll_container_bg').width()-$(dom).width();
		}
		var orival=parseInt($(dom).css('opacity'))||1;
		var delay=$.WOPOP_EFFECTS._parseNum(options['delay'],1);
		var duration=$.WOPOP_EFFECTS._parseNum(options['duration'],1);
		
		_getEffectDom(dom).done(function(dom){
			$(dom).css('left',0-$(dom).width());
			$(dom).css('opacity',0);
			dom.velocity({left:orileft+'px',opacity:orival},
			{delay:(delay*1000),duration: (duration*1000),display: "block",easing:'ease',complete:create_complete(options)})
		})
	}
	
	$.WOPOP_EFFECTS['fadeFromBottom']=function(dom,options){
		var oritop=parseInt($(dom).css('top'))||0;
		//当弹窗容器设置在底部时，并且不影响其他插件的动画效果
		if ($(dom).attr('type') == 'pop_up' && $(dom).css('top') == 'auto') {
			oritop = $(window).height()-$(dom).height();
		}else if ($(dom).attr('type') == 'mpop_up' && $(dom).css('top') == 'auto') {
			oritop = $(window).height()-$(dom).height();
		}
		var orival=parseInt($(dom).css('opacity'))||1;
		var delay=$.WOPOP_EFFECTS._parseNum(options['delay'],1);
		var duration=$.WOPOP_EFFECTS._parseNum(options['duration'],1);
		if(!$.wismobile||$.WOPOP_EFFECTS._isEditMode()){
			var container=$('#scroll_container');
		}else{
			var container=$(window);
		}
		_getEffectDom(dom).done(function(dom){
			//弹窗容器内子插件从下淡出效果调整，不影响其它插件
			if ($(dom).parents('.cstlayer').attr('type') == 'pop_up') {
				$(dom).css('top',$(dom).parents('.cstlayer').height());
			}else if ($(dom).parents('.cstlayer').attr('type') == 'mpop_up') {
				$(dom).css('top',$(dom).parents('.cstlayer').height());
			} else {
				$(dom).css('top',container.scrollTop()+container.height()+$(dom).height());
			}
			$(dom).css('opacity',0);
			dom.velocity({top:oritop+'px',opacity:orival},
			{delay:(delay*1000),duration: (duration*1000),display: "block",easing:'ease',complete:create_complete(options)})
		})
	}
	
	$.WOPOP_EFFECTS['fadeFromRight']=function(dom,options){
		var orileft=parseInt($(dom).css('left'))||0;
		//当弹窗容器设置在右边时，并且不影响其他插件的动画效果
		if ($(dom).attr('type') == 'pop_up' && $(dom).css('left') == 'auto') {
			orileft = $('#scroll_container_bg').width()-$(dom).width();
		}else if ($(dom).attr('type') == 'mpop_up' && $(dom).css('left') == 'auto') {
			orileft = $('#scroll_container_bg').width()-$(dom).width();
		}
		var orival=parseInt($(dom).css('opacity'))||1;
		var delay=$.WOPOP_EFFECTS._parseNum(options['delay'],1);
		var duration=$.WOPOP_EFFECTS._parseNum(options['duration'],1);
		if(!$.wismobile||$.WOPOP_EFFECTS._isEditMode()){
			var container=$('#scroll_container');
		}else{
			var container=$(window);
		}
		_getEffectDom(dom).done(function(dom){
			//弹窗容器以及其内子插件从右淡出效果调整，不影响其它插件
			if ($(dom).attr('type') == 'pop_up') {
				$(dom).css('left',container.width());
			} else if ($(dom).parents('.cstlayer').attr('type') == 'pop_up') {
				$(dom).css('left',$(dom).parents('.cstlayer').width());
			} else if ($(dom).attr('type') == 'mpop_up') {
				$(dom).css('left',container.width());
			} else if ($(dom).parents('.cstlayer').attr('type') == 'mpop_up') {
				$(dom).css('left',$(dom).parents('.cstlayer').width());
			} else {
				$(dom).css('left',container.width()-$(dom).width());
			}
			dom.velocity({left:orileft+'px',opacity:orival},
			{delay:(delay*1000),duration: (duration*1000),display: "block",easing:'ease',complete:create_complete(options)})
		})
	}
	
	$.WOPOP_EFFECTS['fadeFromTop']=function(dom,options){
		var oritop=parseInt($(dom).css('top'))||0;
		//当弹窗容器设置在底部时，并且不影响其他插件的动画效果
		if ($(dom).attr('type') == 'pop_up' && $(dom).css('top') == 'auto') {
			oritop = $(window).height()-$(dom).height();
		}else if ($(dom).attr('type') == 'mpop_up' && $(dom).css('top') == 'auto') {
			oritop = $(window).height()-$(dom).height();
		}
		var orival=parseInt($(dom).css('opacity'))||1;
		var delay=$.WOPOP_EFFECTS._parseNum(options['delay'],1);
		var duration=$.WOPOP_EFFECTS._parseNum(options['duration'],1);
		if(!$.wismobile||$.WOPOP_EFFECTS._isEditMode()){
			var container=$('#scroll_container');
		}else{
			var container=$(window);
		}
		_getEffectDom(dom).done(function(dom){
			//弹窗容器内子插件从上淡出效果调整，不影响其它插件
			if ($(dom).parents('.cstlayer').attr('type') == 'pop_up') {
				$(dom).css('top',0-($(dom).height()));
			} else if ($(dom).parents('.cstlayer').attr('type') == 'mpop_up') {
				$(dom).css('top',0-($(dom).height()));
			} else {
				$(dom).css('top',0-(container.scrollTop()+$(dom).height()+container.height()));
			}
			dom.velocity({top:oritop+'px',opacity:orival},
			{delay:(delay*1000),duration: (duration*1000),display: "block",easing:'ease',complete:create_complete(options)})
		})
	}
	
	$.WOPOP_EFFECTS['light']=function(dom,options){
		var delay=$.WOPOP_EFFECTS._parseNum(options['delay'],1);
		var duration=$.WOPOP_EFFECTS._parseNum(options['duration'],1);

		_getEffectDom(dom).done(function(dom){
			dom.velocity({opacity: 1},
			{delay:(delay*1000),duration:(duration*500),display: "block",easing:'ease-in-out'})
			.velocity({opacity:[0,1]},
			{delay:0,duration: (duration*500),display: "block",loop:true,easing:'ease-in-out',complete:create_complete(options)})
		})
	}

	$.WOPOP_EFFECTS['effect.frombottom']=function(dom,options){
		var reverse_effect=options['effect']+'reverse';
		var oritop=parseInt($(dom).css('top'))||0;
		var delay=$.WOPOP_EFFECTS._parseNum(options['delay'],1);
		var duration=$.WOPOP_EFFECTS._parseNum(options['duration'],1);
        var type=options['type'];
		if(!$.wismobile||$.WOPOP_EFFECTS._isEditMode()){
			var container=$('#scroll_container');
		}else{
			var container=$(window);
		}
		_getEffectDom(dom).done(function(dom){
            var initop=container.scrollTop()+container.height()+$(dom).height();
            if(type=='jfpro_list' || type=='groupon_list' || type=='seckill_list' || type=='product_list' || type=='tb_product_list' || type=='graphic' || type=='article_list'){
                initop =  $(dom).height();
            }

            initop=parseInt(initop);
            oritop=parseInt(oritop);
			$(dom).css('top',initop+'px');
			dom.velocity({top:oritop+'px'},
				{delay:0,duration: duration,display: "block",easing:'ease',begin:create_begin(),complete:create_complete(options)}).velocity("reverse", { queue: reverse_effect })
		})
	}

    $.WOPOP_EFFECTS['effect.fromtop']=function(dom,options){
		var reverse_effect=options['effect']+'reverse';
        var oritop=parseInt($(dom).css('top'))||0;
        var type=options['type'];
        var delay=$.WOPOP_EFFECTS._parseNum(options['delay'],1);
        var duration=$.WOPOP_EFFECTS._parseNum(options['duration'],1);
        if(!$.wismobile||$.WOPOP_EFFECTS._isEditMode()){
            var container=$('#scroll_container');
        }else{
            var container=$(window);
        }
        _getEffectDom(dom).done(function(dom){
            // 考虑「通栏」元素（bug#4284）
            var $layer = $(dom),
                initop = ($layer.attr("fatherid")||"").length ? 0 : (container.scrollTop() - $(dom).height());
            if(type=='jfpro_list' || type=='groupon_list' || type=='seckill_list' || type=='product_list' || type=='tb_product_list' || type=='graphic' || type=='article_list'){
                initop =  $(dom).height();
                initop='-'+initop;
            }
            initop=parseInt(initop);
            oritop=parseInt(oritop);
            $layer.css("top", initop+'px');
            // $(dom).css('top',container.scrollTop()-$(dom).height());
            dom.velocity({top:oritop+'px'},
                {delay:0,duration: duration,display: "block",easing:'ease',begin:create_begin(),complete:create_complete(options)}).velocity("reverse", { queue: reverse_effect })
        })
    }
    //放大
	$.WOPOP_EFFECTS['effect.zoomin']=function(dom,options,hover){
            var display = 'block';
			var is_product_list = false;
            if(options['type']=='tb_product_list' && dom.css("display")){
                display = dom.css("display");
            }
			 if(options['type']=='product_list'){				
				 is_product_list = true;
			 }
		var reverse_effect=options['effect']+'reverse';
		var delay=$.WOPOP_EFFECTS._parseNum(options['delay'],1);
		var duration=$.WOPOP_EFFECTS._parseNum(options['duration'],1);
		_getEffectDom(dom).done(function(dom){
			if(hover==1){
				dom.velocity({scale:[1.1]},
					{delay:0,duration: duration,display: display,easing:'ease',begin:create_begin(),complete:create_complete(options)})
					.velocity({scale:[1]}, { queue: reverse_effect,duration: duration })
			}else{
				dom.velocity({scale:[1.1]},
					{delay:0,duration: duration,display: "block",easing:'ease',begin:create_begin(),complete:create_complete(options)})
					.velocity({scale:[1]}, {duration: duration })
			}
			if(is_product_list){
				var doms = dom.siblings(".imgmask");
				if(doms){
					var dheight = parseInt(dom.height()*1.05),thisheight = doms.height() ;
					if(hover==1){
						doms.unbind('effect_complete').bind('effect_complete',function(){
							doms.css("margin-top",(dheight-thisheight)+'px');
						})
						doms.velocity({scale:[1.1]},
								{delay:0,duration: duration,display: display,easing:'ease',begin:create_begin(),complete:create_complete(options)})
								.velocity({scale:[1]}, { queue: reverse_effect,duration: duration })
					}else{
						doms.unbind('effect_complete').bind('effect_complete',function(){
							doms.css("margin-top",(dheight-thisheight)+'px');
						})
						doms.velocity({scale:[1.1]},
							{delay:0,duration: duration,display: "block",easing:'ease',begin:create_begin(),complete:create_complete(options)})
							.velocity({scale:[1]}, {duration: duration })
					}
				}
			}
		})
	}

    //从小到大
	$.WOPOP_EFFECTS['effect.small2big']=function(dom,options,hover){
		var reverse_effect=options['effect']+'reverse';
		var delay=$.WOPOP_EFFECTS._parseNum(options['delay'],1);
		var duration=$.WOPOP_EFFECTS._parseNum(options['duration'],1);
		$.Velocity.hook($(dom), "scale", [0]);
		_getEffectDom(dom).done(function(dom){
			if(hover==1){
				dom.velocity({scale:[1.1]},
					{delay:0,duration: duration,display: "block",easing:'ease',begin:create_begin(),complete:create_complete(options)})
					.velocity({scale:[0]}, { queue: reverse_effect,duration: duration })
			}else{
				dom.velocity({scale:[1.1]},
					{delay:0,duration: duration,display: "block",easing:'ease',begin:create_begin(),complete:create_complete(options)})
					.velocity({scale:[0]})
			}
		})
	}
	//缩小
	$.WOPOP_EFFECTS['effect.zoomout']=function(dom,options,hover){
		var delay=$.WOPOP_EFFECTS._parseNum(options['delay'],1);
		var duration=$.WOPOP_EFFECTS._parseNum(options['duration'],1);
		var reverse_effect=options['effect']+'reverse';
		_getEffectDom(dom).done(function(dom){
            var dom_display = 'block';
            var old_dom_display = dom.css('display');
            if(old_dom_display) dom_display = old_dom_display;
			if(hover==1){
				dom.velocity({scale:[.9]},
					{delay:0,duration: duration,display: dom_display,easing:'ease-in',begin:create_begin(),complete:create_complete(options)})
					.velocity({scale:[1]}, { queue: reverse_effect,duration: duration})
			}else{
				dom.velocity({scale:[.9]},
					{delay:0,duration: duration,display: dom_display,easing:'ease-in',begin:create_begin(),complete:create_complete(options)})
					.velocity("reverse")
			}
		})
	}
	//从大到小
	$.WOPOP_EFFECTS['effect.big2small']=function(dom,options,hover){
		var delay=$.WOPOP_EFFECTS._parseNum(options['delay'],1);
		var duration=$.WOPOP_EFFECTS._parseNum(options['duration'],1);
		var reverse_effect=options['effect']+'reverse';
		// $.Velocity.hook($(dom), "scale", [1.3]);
		_getEffectDom(dom).done(function(dom){
			if(hover==1){
				dom.velocity({scale:[.9]},
					{delay:0,duration: duration,display: "block",easing:'ease-in',begin:create_begin(),complete:create_complete(options)})
					.velocity({scale:[1.1]}, { queue: reverse_effect,duration: duration,display: "none"})
			}else{
				dom.velocity({scale:[.9]},
					{delay:0,duration: duration,display: "block",easing:'ease-in',begin:create_begin(),complete:create_complete(options)})
					.velocity({scale:[1.1]}, {duration: duration,display: "none"})
			}
		})
	}

	$.WOPOP_EFFECTS['effect.moveleft']=function(dom,options,hover){
		var delay=$.WOPOP_EFFECTS._parseNum(options['delay'],1);
		var duration=$.WOPOP_EFFECTS._parseNum(options['duration'],1);
		var reverse_effect=options['effect']+'reverse';
		_getEffectDom(dom).done(function(dom){
			if(hover==1){
				dom.velocity({translateX:'-5%'},
					{delay:0,duration: duration,display: "block",easing:'ease-in',begin:create_begin(),complete:create_complete(options)})
					.velocity({translateX:'0'}, { queue: reverse_effect,duration: duration })
			}else{
				dom.velocity({translateX:'-5%'},
					{delay:0,duration: duration,display: "block",easing:'ease-in',begin:create_begin(),complete:create_complete(options)})
					.velocity("reverse")
			}
		})
	}

	$.WOPOP_EFFECTS['effect.moveright']=function(dom,options,hover){
		var delay=$.WOPOP_EFFECTS._parseNum(options['delay'],1);
		var duration=$.WOPOP_EFFECTS._parseNum(options['duration'],1);
		var reverse_effect=options['effect']+'reverse';
		_getEffectDom(dom).done(function(dom){
			if(hover==1){
				dom.velocity({translateX:'5%'},
					{delay:0,duration: duration,display: "block",easing:'ease-in',begin:create_begin(),complete:create_complete(options)})
					.velocity({translateX:"0"}, { queue: reverse_effect,duration: duration })
			}else{
				dom.velocity({translateX:'5%'},
					{delay:0,duration: duration,display: "block",easing:'ease-in',begin:create_begin(),complete:create_complete(options)})
					.velocity("reverse")
			}
		})
	}

	$.WOPOP_EFFECTS['effect.movetop']=function(dom,options,hover){
		var delay=$.WOPOP_EFFECTS._parseNum(options['delay'],1);
		var duration=$.WOPOP_EFFECTS._parseNum(options['duration'],1);
		var reverse_effect=options['effect']+'reverse';
		_getEffectDom(dom).done(function(dom){
			if(hover==1){
				dom.velocity({translateY:'-5%'},
					{delay:0,duration: duration,display: "block",easing:'ease-in',begin:create_begin(),complete:create_complete(options)})
					.velocity({translateY:'0'}, { queue: reverse_effect,duration: duration })
			}else{
				dom.velocity({translateY:'-5%'},
					{delay:0,duration: duration,display: "block",easing:'ease-in',begin:create_begin(),complete:create_complete(options)})
					.velocity("reverse")
			}
		})
	}

	$.WOPOP_EFFECTS['effect.movebottom']=function(dom,options,hover){
		var delay=$.WOPOP_EFFECTS._parseNum(options['delay'],1);
		var duration=$.WOPOP_EFFECTS._parseNum(options['duration'],1);
		var reverse_effect=options['effect']+'reverse';
		_getEffectDom(dom).done(function(dom){
			if(hover==1){
				dom.velocity({translateY:'5%'},
					{delay:0,duration: duration,display: "block",easing:'ease-in',begin:create_begin(),complete:create_complete(options)})
					.velocity({translateY:'0'}, { queue: reverse_effect,duration: duration })
			}else{
				dom.velocity({translateY:'5%'},
					{delay:0,duration: duration,display: "block",easing:'ease-in',begin:create_begin(),complete:create_complete(options)})
					.velocity("reverse")
			}
		})
	}

	$.WOPOP_EFFECTS['effect.rotation']=function(dom,options){
		var delay=$.WOPOP_EFFECTS._parseNum(options['delay'],1);
		var duration=$.WOPOP_EFFECTS._parseNum(options['duration'],1);
		$.Velocity.hook($(dom), "rotateY", "180deg");
		_getEffectDom(dom).done(function(dom){
			dom.velocity({rotateY:["0deg","180deg"]},
				{delay:0,duration: duration,display: "block",easing:'ease',begin:create_begin(),complete:create_complete(options)})
		})
	}

	$.WOPOP_EFFECTS['effect.bounce']=function(dom,options){
		var delay=$.WOPOP_EFFECTS._parseNum(options['delay'],1);
		var duration=$.WOPOP_EFFECTS._parseNum(options['duration'],1);
		$(dom).show();
		_getEffectDom(dom).done(function(dom){
			dom.velocity("callout.bounce",
				{delay:0,duration: duration,display: "block",easing:'ease',begin:create_begin(),complete:create_complete(options)})
		})
	}

	$.WOPOP_EFFECTS['effect.shake']=function(dom,options){
		var delay=$.WOPOP_EFFECTS._parseNum(options['delay'],1);
		var duration=$.WOPOP_EFFECTS._parseNum(options['duration'],1);
		_getEffectDom(dom).done(function(dom){
			dom.velocity("callout.shake",
				{delay:0,duration: duration,display: "block",easing:'ease',begin:create_begin(),complete:create_complete(options)})
		})
	}
	$.WOPOP_EFFECTS['effect.flash']=function(dom,options){
		var delay=$.WOPOP_EFFECTS._parseNum(options['delay'],1);
		var duration=$.WOPOP_EFFECTS._parseNum(options['duration'],1);
		_getEffectDom(dom).done(function(dom){
			dom.velocity("callout.flash",
				{delay:0,duration: duration,display: "block",easing:'ease',begin:create_begin(),complete:create_complete(options)})
		})
	}

	$.WOPOP_EFFECTS['effect.pulse']=function(dom,options){
		var delay=$.WOPOP_EFFECTS._parseNum(options['delay'],1);
		var duration=$.WOPOP_EFFECTS._parseNum(options['duration'],1);
		_getEffectDom(dom).done(function(dom){
			dom.velocity("callout.pulse",
				{delay:0,duration: duration,display: "block",easing:'ease',begin:create_begin(),complete:create_complete(options)})
		})
	}

	$.WOPOP_EFFECTS['effect.swing']=function(dom,options){
		var delay=$.WOPOP_EFFECTS._parseNum(options['delay'],1);
		var duration=$.WOPOP_EFFECTS._parseNum(options['duration'],1);
		_getEffectDom(dom).done(function(dom){
			dom.velocity("callout.swing",
				{delay:0,duration: duration,display: "block",easing:'ease',begin:create_begin(),complete:create_complete(options)})
		})
	}

	$.WOPOP_EFFECTS['effect.tada']=function(dom,options){
		var delay=$.WOPOP_EFFECTS._parseNum(options['delay'],1);
		var duration=$.WOPOP_EFFECTS._parseNum(options['duration'],1);
		_getEffectDom(dom).done(function(dom){
			dom.velocity("callout.tada",
				{delay:0,duration: duration,display: "block",easing:'ease',begin:create_begin(),complete:create_complete(options)})
		})
	}
//transition.fadeIn
	$.WOPOP_EFFECTS['effect.fade']=function(dom,options,hover){
		var reverse_effect=options['effect']+'reverse';
		var delay=$.WOPOP_EFFECTS._parseNum(options['delay'],1);
		var duration=$.WOPOP_EFFECTS._parseNum(options['duration'],1);
		_getEffectDom(dom).done(function(dom){
			if(hover==1){
				dom.velocity("transition.fadeIn", { duration: duration })
					.velocity("transition.fadeOut", { queue: reverse_effect,duration: duration })
			}else{
				dom.velocity("transition.fadeIn", { duration: duration }).velocity("reverse",{delay:500});
			}
		})
	}

	$.WOPOP_EFFECTS['effect.slidedown']=function(dom,options,hover){
		var delay=$.WOPOP_EFFECTS._parseNum(options['delay'],1);
		var duration=$.WOPOP_EFFECTS._parseNum(options['duration'],1);
		var reverse_effect=options['effect']+'reverse';
		_getEffectDom(dom).done(function(dom){
			var domtop=parseInt(dom.css('top'));
			var lasttop='';
			if(domtop){
				lasttop=domtop;
			}else{
				lasttop=0;
			}
			var $top=$(dom).height();
			$(dom).css('top','-'+$top+'px');
			if(hover==1){
				dom.velocity({top:0},
					{delay:0,duration: duration,display: "block",easing:'ease-in',begin:create_begin(),complete:create_complete(options)})
					.velocity({top:-$top}, { queue: reverse_effect,duration: duration })
			}else{
				dom.velocity({top:0},
					{delay:0,duration: duration,display: "block",easing:'ease-in',begin:create_begin(),complete:create_complete(options)})
					.velocity({top:-$top},{delay:600} )
			}

		})
	}

	$.WOPOP_EFFECTS['effect.slidetop']=function(dom,options,hover){
		var delay=$.WOPOP_EFFECTS._parseNum(options['delay'],1);
		var duration=$.WOPOP_EFFECTS._parseNum(options['duration'],1);
		var reverse_effect=options['effect']+'reverse';
		_getEffectDom(dom).done(function(dom){
			var $top=$(dom).height();
                        var org_top = $(dom).attr('data-top');
                        if(!org_top){org_top=0;}
			if(hover==1){
				$(dom).css('top',$top+'px');
				dom.velocity({top:org_top},
					{delay:0,duration: duration,display: "block",easing:'ease-in',begin:create_begin(),complete:create_complete(options)})
					.velocity({top:$top}, { queue: reverse_effect })
			}else{
				$(dom).css('top',$top+'px');
				dom.velocity({top:org_top},
					{delay:0,duration: duration,display: "block",easing:'ease-in',begin:create_begin(),complete:create_complete(options)})
					.velocity({top:$top},{delay:600})
			}
		})
	}

	$.WOPOP_EFFECTS['effect.slideleft']=function(dom,options){
		var delay=$.WOPOP_EFFECTS._parseNum(options['delay'],1);
		var duration=$.WOPOP_EFFECTS._parseNum(options['duration'],1);
		var reverse_effect=options['effect']+'reverse';
		_getEffectDom(dom).done(function(dom){
			var $left=$(dom).width();
			$(dom).css('left','-'+$left+'px');
			dom.velocity({left:0},
				{delay:0,duration: duration,display: "block",easing:'ease-in',begin:create_begin(),complete:create_complete(options)})
				.velocity({left:-$left}, { queue: reverse_effect })
		})
	}


	$.WOPOP_EFFECTS['effect.slideright']=function(dom,options){
		var delay=$.WOPOP_EFFECTS._parseNum(options['delay'],1);
		var duration=$.WOPOP_EFFECTS._parseNum(options['duration'],1);
		var reverse_effect=options['effect']+'reverse';
		_getEffectDom(dom).done(function(dom){
			var $left=$(dom).width();
			$(dom).css('left',$left+'px');
			dom.velocity({left:0},
				{delay:0,duration: duration,display: "block",easing:'ease-in',begin:create_begin(),complete:create_complete(options)})
				.velocity({left:$left}, { queue: reverse_effect })
		})
	}

    $.WOPOP_EFFECTS['shutter.horizontal']=function(dom,options){
        var delay=$.WOPOP_EFFECTS._parseNum(options['delay'],1);
        var duration=$.WOPOP_EFFECTS._parseNum(options['duration'],1);
		var reverse_effect=options['effect']+'reverse';
        $.Velocity.hook($(dom), "transformOriginX", [ "50%", "50%" ]);
        $.Velocity.hook($(dom), "scaleX", 0);
        _getEffectDom(dom).done(function(dom){
            dom.velocity({scaleX: 1},
                {delay:0,duration: duration,display: "block",easing:'ease-out',begin:create_begin(),complete:create_complete(options)})
				.velocity({scaleX:0}, { queue: reverse_effect })
        })
    }

    $.WOPOP_EFFECTS['shutter.vertical']=function(dom,options){
        var delay=$.WOPOP_EFFECTS._parseNum(options['delay'],1);
        var duration=$.WOPOP_EFFECTS._parseNum(options['duration'],1);
		var reverse_effect=options['effect']+'reverse';
        $.Velocity.hook($(dom), "transformOriginY", [ "50%", "50%" ]);
        $.Velocity.hook($(dom), "scaleY", 0);
        _getEffectDom(dom).done(function(dom){
            dom.velocity({scaleY: 1},
                {delay:0,duration: duration,display: "block",easing:'ease-out',begin:create_begin(),complete:create_complete(options)})
				.velocity({scaleY: 0}, { queue: reverse_effect })
        })
    }
	//新增缩放动画
	$.WOPOP_EFFECTS['callout.scale']=function(dom,options){
		var type = dom.attr('type');
		var cont = dom.find('.wp-'+type+'_content');
		var delay = $.WOPOP_EFFECTS._parseNum(options['delay'],1);
		var duration = $.WOPOP_EFFECTS._parseNum(options['duration'],1);
		var zoom = $.WOPOP_EFFECTS._parseNum(options['zoom'],2);
		dom.css('overflow','hidden');
		dom.show();
		$.Velocity.hook($(cont), "scale", zoom);
		_getEffectDom(dom).done(function(dom){
			cont.velocity({scale:[1,zoom]},{delay:(delay*1000),duration: (duration*1000),display: "block",easing:'ease-in',complete:create_complete(options)})
		})
	}
	
	var effect_map = 'callout.bounce,callout.shake,callout.flash,callout.pulse,callout.swing,callout.tada,';
	effect_map += 'transition.flipBounceXOut,transition.flipBounceYOut,transition.whirlOut,transition.shrinkOut,transition.perspectiveLeftOut,';
	effect_map += 'transition.expandOut,transition.bounceOut,transition.slideUpBigOut,transition.slideDownBigOut,transition.perspectiveRightOut,';
	effect_map += 'transition.slideLeftBigOut,transition.slideRightBigOut,transition.perspectiveUpOut,transition.perspectiveDownOut';
	$.each(effect_map.split(','), function(i, effect_name){
		$.WOPOP_EFFECTS[effect_name] = function(dom, options){
			var delay = $.WOPOP_EFFECTS._parseNum(options['delay'], 1);
			var duration = $.WOPOP_EFFECTS._parseNum(options['duration'], 1);
			var l = 0,loop = $.WOPOP_EFFECTS._parseNum(options['loop'], 0),
			loop_infinite = $.WOPOP_EFFECTS._parseNum(options['loop_infinite'], 0);
			
			_getEffectDom(dom).done(function(dom){
				(function(){
					var self = arguments.callee;
					dom.velocity(effect_name, {
						delay: (delay * 1000),duration: (duration * 1000),
						display: 'block',complete: function(){
							if (loop_infinite ? true : l < loop) self();
							else create_complete(options).call(this);
							l++;
						}
					});
				})();
			});
		};
	});
	
	function create_complete(effects){
		//返回conplete函数
		return function(){
			var dom=$(this);
			//缩放动画，this是layer的子元素content，所以这里要取其父元素，否则同插件的图片特效会出问题
			if (effects.effect == 'callout.scale') {
				dom = dom.parent();
			}
            $(dom).data('run',0);
			if(dom.data('wopop_effect_oristyle')){
				dom.attr('style',dom.data('wopop_effect_oristyle')).show();
				dom.removeData('wopop_effect_oristyle');
			}
			dom.trigger('effect_complete');
			dom.removeClass('now_effecting');
			var cancontainer=$('#overflow_canvas_container');
			if(cancontainer.length){
				var stacks=cancontainer.data('stacks');
				if(stacks && stacks.length){
					var newstacks=[];
					for(var i=0;i<stacks.length;i++){
						if(!stacks[i].is(dom)){
							newstacks.push(stacks[i]);
						}
					}
					cancontainer.data('stacks',newstacks);
					if(!newstacks.length){
						cancontainer.css('overflow-y','').css('height','').removeData('is_overflow');
					}
				}
			}
		}
	}
	function create_begin(){
	    return function () {
            var dom=$(this);
            $(dom).data('run',1);
        }
    }
	
	$.fn.showEffects=function(force_show,show_effects,opentype){
		$.Velocity.defaults.mobileHA=false;
		var fullpagedom=$('.fullpage_alllist');
		var browsersupport=!($.browser.msie && $.browser.version <9); //IE 9以下不支持动画效果
		browsersupport=browsersupport&& (!$._wp_previewimgmode);
		if(!opentype) opentype='';
		if(!fullpagedom.length || force_show){
			return this.each(function() {
				var self = $(this); 
				var effects=show_effects;
				if(!(effects&&effects.effect)) effects=self.data('wopop_effects');
				if(effects&&effects.effect){
					var deg=self.data('deg')||self.attr('deg')||0;
					// 固定通栏里显示动画
                    var editmode=false;
                    if($.saveLayout) editmode=true;
                    var infixedparentel=self.closest('.full_column[infixed=1],.cstlayer[infixed=1]');
                    if(infixedparentel.length && !editmode){
                        if(infixedparentel.parent().is('#canvas')&&parseInt(infixedparentel.css('top'))==0){
                            return;
                        }
                        if(self.is('.now_effecting')) return;
                    }
					var inpopupparentel=self.closest('.cstlayer[type=pop_up]');
					if(inpopupparentel.length){
						if(self.is('.now_effecting')) return;
						if(inpopupparentel.data('button_open') && opentype!='button') return;
                    }
                    
                    inpopupparentel=self.closest('.cstlayer[type=mpop_up]');
					if(inpopupparentel.length){
						if(self.is('.now_effecting')) return;
						if(inpopupparentel.data('mbutton_open') && opentype!='mbutton') return;
					}

					var style=self.attr('style').replace(/display:\s*none\s*;?/,'');
					if(!deg){
						style=style.replace(/ (-\w+-)?transform-origin:[^;]+;/g,'');
					}
					if(!self.data('wopop_effect_oristyle')) self.data('wopop_effect_oristyle',style);
					
					$.Velocity.hook($(self), "rotateZ", deg+"deg");
					
					self.hide();
					if($.WOPOP_EFFECTS[effects.effect] && browsersupport){
						self.addClass('now_effecting');
						if(!$.wismobile&&self.closest('#canvas').length ){ 
							_getEffectDom(self).done(function(){
								var cancontainer=$('#overflow_canvas_container');
								if(cancontainer.length && (effects.effect=='frombottom' || effects.effect=='fadeFromBottom')){
									var stacks=cancontainer.data('stacks');
									if(!stacks) stacks=[];
									if(!cancontainer.data('is_overflow')){
										var canh=$('#canvas').outerHeight();
										cancontainer.css('overflow-y','hidden').css('height',(canh+20)+'px').data('is_overflow',true);
										var timer=setInterval(function(){
											if(cancontainer.data('is_overflow')){
												var nowcanh=$('#canvas').outerHeight();
												if(nowcanh != canh){
													canh=nowcanh;
													cancontainer.css('height',(canh+20)+'px');
												}
											}else{
												clearInterval(timer);
											}
										},1000);
									}
									if(effects.effect=='frombottom' || effects.effect=='fadeFromBottom') stacks.push(self);
									cancontainer.data('stacks',stacks);
								}
							})
						}
						//弹窗容器的动画效果需要作用在layerid_pop_up上,在编辑模式下，如果只使用pop_up作动画效果的话，会导致点开动画界面时弹窗容器消失，所以不能使用else
						if (self.attr('type') == 'pop_up' && self.attr('freq') != '1') {
							var pop_up = $('#'+self.attr('id')+'_pop_up');
							if (self.attr('open_type') != '1') {
								$.WOPOP_EFFECTS[effects.effect](pop_up,effects);
							}else{
								self.removeClass('now_effecting');
							}
						} else if (self.attr('type') == 'mpop_up' && self.attr('freq') != '1') {
							var pop_up = $('#'+self.attr('id')+'_mpop_up');
							if (self.attr('open_type') != '1') {
								$.WOPOP_EFFECTS[effects.effect](pop_up,effects);
							}else{
								self.removeClass('now_effecting');
							}
						}
						$.WOPOP_EFFECTS[effects.effect](self,effects);
					}else{
						self.show();
					}
				}
			});
		}
	}

	$.fn.setimgEffects=function(force_show,show_effects,hover){
		var self='';
		$.Velocity.defaults.mobileHA=false;
		var fullpagedom=$('.fullpage_alllist');
		var browsersupport=!($.browser.msie && $.browser.version <9); //IE 9以下不支持动画效果
		if(!fullpagedom.length || force_show){
			self = $(this);
			var imgeffects=show_effects;
			if(!(imgeffects&&imgeffects.effect)) imgeffects=self.data('wopop_imgeffects');
			if(imgeffects&&imgeffects.effect){
				//hover=1时，悬浮事件，对象判断，单图，图片和图文传当前插件DOM，其他有遮罩层的效果传img
				if(hover==1){
					if(imgeffects.type=="media"){
						if(imgeffects.effectrole=='dantu'){
							self=$(this);
						}else{
							self=self.find('img');
						}
					}else{
						self.each(function () {
							if($(this).data('over')==1){
								self=$(this);
							}
						});
					}
				}
				var deg=self.data('deg')||0;
				// 固定通栏里显示动画
				var infixedparentel=self.closest('.full_column[infixed=1],.cstlayer[infixed=1]');
				if(imgeffects.effectrole=='blur'){
					if(!self.siblings('#imgmask').length) {
						if(imgeffects.type=="graphic" || imgeffects.type=='media'){
							var width = self.closest('.img_over').width()+3,height=self.closest('.img_over').height()+4;
						}else{
							var width = self.width()+3,height=self.height()+4;
						}
						var colorval=imgeffects.popcolor,colorrgb=$.WOPOP_EFFECTS.colorRgb(colorval),opacity=(1-(imgeffects.opacity)/100).toFixed(2);
						var bgcolor='rgba('+colorrgb[0]+','+colorrgb[1]+','+colorrgb[2]+','+opacity+')';
						var imgtop=(height-42)/2,imgsrc=imgeffects.src;
						var offsetleft=0;var offsettop=0;
						if(imgeffects.type!="graphic" && imgeffects.type!='media'){
							var myoffset=self.offset();
							var myoffsetparent=self.offsetParent();
							if(myoffset && myoffsetparent.length){
								offsetleft=myoffset.left-myoffsetparent.offset().left;
								if(offsetleft<0) offsetleft=0;
								offsettop=myoffset.top-myoffsetparent.offset().top;
								if(offsettop<0) offsettop=0;
							}
						}
                                                var imgexit = '<img style="width:42px;height:42px;margin-top:'+imgtop+'px" src="'+imgsrc+'" alt="">';
                                                if(imgsrc == ''){
                                                   imgexit = '';
                                                }
						self.after('<div id="imgmask" class="imgmask" data-color="'+colorval+'" data-opacity="'+opacity+'" style="text-align:center;position: absolute; top: '+offsettop+'px;left:'+offsetleft+'px; background:'+bgcolor+';z-index: 1002;width:'+width+'px;height:'+height+'px;">' +
							imgexit+'</div>');
					}
					self = self.siblings('#imgmask');
				}
				if(imgeffects.effectrole=='content'){
					var opacity=(1-(imgeffects.opacity)/100).toFixed(2);
					var colorval=imgeffects.popcolor,colorrgb=$.WOPOP_EFFECTS.colorRgb(colorval);
                    var bgcolor = '';
                    if(colorrgb[1] == 'gradient'){
                        bgcolor = gradientHandler(colorrgb,opacity);
                    }else{
                        bgcolor = 'rgba('+colorrgb[0]+','+colorrgb[1]+','+colorrgb[2]+','+opacity+')';
                    }
                    var t_top=imgeffects.top,c_top=imgeffects.ctop;
                    var clineheight = imgeffects.clineheight;
                    var cmarginleft = imgeffects.cmarginleft;
                    var cmarginright = imgeffects.cmarginright;
                    
                    var lineheight = imgeffects['line-height'];
                    var marginleft = imgeffects['margin-left'];
                    var marginright = imgeffects['margin-right'];
					var t_align=imgeffects['text-align'],c_align=imgeffects['ctext-align'];
					var t_weight=imgeffects['font-weight'],c_weight=imgeffects['cfont-weight'];
					var t_decoration=imgeffects['text-decoration'],c_decoration=imgeffects['ctext-decoration'];
                    var t_family=imgeffects['font-family'],c_family=imgeffects['cfont-family'];
					var t_fontsize=imgeffects['font-size'],c_fontsize=imgeffects['cfont-size'];
					var cfontcolor=imgeffects['ccolor'],tfontcolor=imgeffects['color'];
					var twordcount=imgeffects['titlecount'],cwordcount=imgeffects['contentcount'];
					if(imgeffects.type=="tb_product_list" || imgeffects.type=="product_list" || imgeffects.type=="seckill_list" || imgeffects.type=="groupon_list" || imgeffects.type=="jfpro_list"){
						self.each(function(){
							var width = self.width()+2,height=self.height()+2;
							var imgparent = $(this).closest('li');
							var effecttitle = $(this).attr('alt');
							var effectcontent = imgparent.find('.product_desc').data('desc');
							if(twordcount){
								effecttitle=subString(effecttitle,twordcount);
							}
							if(cwordcount){
								effectcontent=subString(effectcontent,cwordcount);
							}
							var myoffset=$(this).offset();
							var myoffsetparent=$(this).offsetParent();
							if(myoffset && myoffsetparent.length){
								offsetleft=myoffset.left-myoffsetparent.offset().left;
								if(offsetleft<0) offsetleft=0;
							}
                                                        var img_div = $(this).closest('.img');
                                                        var imgmask_top = (img_div.outerHeight()-height)/2;
							if(!$(this).siblings('#imgmask').length) {
								$(this).after('<div id="imgmask" class="imgmask" data-top="'+imgmask_top+'" data-color="'+colorval+'" data-opacity="'+opacity+'" style=" position: absolute; top: 0px;left:'+offsetleft+'px; background:'+bgcolor+';z-index: 1002; width:'+width+'px;height:'+height+'px;">' +
									'<div class="effecttitle" style="color:'+tfontcolor+';margin-top:'+t_top+'px;text-align:'+t_align+';font-weight:'+t_weight+';text-decoration:'+t_decoration+';font-size:'+t_fontsize+'px;font-family:'+t_family+';margin-left:'+marginleft+'px;margin-right:'+marginright+'px;line-height:'+lineheight+'px;">'+effecttitle+'</div>' +
									'<div class="effectcontent" style="color:'+cfontcolor+';margin-top:'+c_top+'px;text-align:'+c_align+';font-weight:'+c_weight+';text-decoration:'+c_decoration+';font-size:'+c_fontsize+'px;font-family:'+c_family+';margin-left:'+cmarginleft+'px;margin-right:'+cmarginright+'px;line-height:'+clineheight+'px;">'+effectcontent+'</div></div>');
							}
						});
					}
					if(imgeffects.type=='article_list'){
						self.each(function(){
							var imgparent = $(this).closest('li');
							var effecttitle = imgparent.find("input[class=articleid]").data('title');
							var effectcontent = imgparent.find("input[class=abstract]").data('desc');
							if(twordcount){
								effecttitle=subString(effecttitle,twordcount);
							}
							if(cwordcount){
								effectcontent=subString(effectcontent,cwordcount);
							}
							if(!$(this).siblings('#imgmask').length) {
								$(this).after('<div id="imgmask" class="imgmask" data-color="'+colorval+'" data-opacity="'+opacity+'" style=" position: absolute; top: 0px;left:0px; background:'+bgcolor+';z-index: 1002; left: 0px;width:100%;height:100%;">' +
									'<div class="effecttitle" style="color:'+tfontcolor+';margin-top:'+t_top+'px;line-height:'+lineheight+'px;text-align:'+t_align+';font-weight:'+t_weight+';text-decoration:'+t_decoration+';font-size:'+t_fontsize+'px;font-family:'+t_family+';margin-left:'+marginleft+'px;margin-right:'+marginright+'px;">'+effecttitle+'</div>' +
									'<div class="effectcontent" style="color:'+cfontcolor+';margin-top:'+c_top+'px;line-height:'+clineheight+'px;text-align:'+c_align+';font-weight:'+c_weight+';text-decoration:'+c_decoration+';font-size:'+c_fontsize+'px;font-family:'+c_family+';margin-left:'+cmarginleft+'px;margin-right:'+cmarginright+'px;">'+effectcontent+'</div></div>');
							}
						});
					}
					if(imgeffects.type=='media' || imgeffects.type=='graphic'){
						var effecttitle=imgeffects.titledesc,effectcontent=imgeffects.contentdesc;
                        effecttitle = effecttitle.replace(/\n/g,"<br />");
                        effectcontent = effectcontent.replace(/\n/g,"<br />");
						if(!self.siblings('#imgmask').length){
							self.after('<div id="imgmask" class="imgmask" data-color="'+colorval+'" data-opacity="'+opacity+'" style=" position: absolute; top: 0px;left:0px; background:'+bgcolor+';z-index: 1002; left: 0px;width:100%;height:100%;">' +
								'<div class="effecttitle" style="line-height:140%;color:'+tfontcolor+';margin-top:'+t_top+'px;line-height:'+lineheight+'px;margin-left:'+marginleft+'px;margin-right:'+marginright+'px;text-align:'+t_align+';font-weight:'+t_weight+';text-decoration:'+t_decoration+';font-size:'+t_fontsize+'px;font-family:'+t_family+';">'+effecttitle+'</div>' +
								'<div class="effectcontent" style="color:'+cfontcolor+';margin-top:'+c_top+'px;line-height:'+clineheight+'px;margin-left:'+cmarginleft+'px;margin-right:'+cmarginright+'px;text-align:'+c_align+';font-weight:'+c_weight+';text-decoration:'+c_decoration+';font-size:'+c_fontsize+'px;font-family:'+c_family+';">'+effectcontent+'</div></div>');
						}
					}

					self = self.siblings('#imgmask');
				}
				if(imgeffects.effectrole=='title'){
					var opacity=(1-(imgeffects.opacity)/100).toFixed(2);
					var colorval=imgeffects.popcolor,colorrgb=$.WOPOP_EFFECTS.colorRgb(colorval);
					var bgcolor='rgba('+colorrgb[0]+','+colorrgb[1]+','+colorrgb[2]+','+opacity+')';
					var t_align=imgeffects['text-align'],t_weight=imgeffects['font-weight'],t_decoration=imgeffects['text-decoration'],t_fontsize=imgeffects['font-size'],t_family=imgeffects['font-family'];
					var tfontcolor=imgeffects['color'];
					var titlecount=imgeffects['titlecount'];
					if(imgeffects.type=="tb_product_list" || imgeffects.type=="product_list" || imgeffects.type=="seckill_list" || imgeffects.type=="groupon_list" || imgeffects.type=="jfpro_list"){
						self.each(function(){
							var imgparent = $(this).closest('li');
							var effecttitle = $(this).attr('alt');
							if(titlecount){
								effecttitle=subString(effecttitle,titlecount);
							}
							var marginLeft=0;
							if(imgeffects.type=="tb_product_list"){var marginLeft=1}else{marginLeft=0}
							var heigth=$(this).height()+1;
							var width=$(this).width();
							var popheight=imgeffects.popheight;
							var margintop=heigth-popheight;
							if(imgeffects.type=="product_list"){
								var p_width = imgparent.find(".img").width()||$(this).width();
								var p_height = imgparent.find(".img").height()||$(this).height();
								marginLeft= (p_width-width)/2;
								margintop= (p_height-popheight);				
							}
							if(!$(this).siblings('#imgmask').length) {
								var iwidth = "100%";
								if ($(this).hasClass("skin6")) {
									iwidth = width + "px";
								} 
								$(this).after('<div id="imgmask" class="imgmask" data-color="'+colorval+'" data-opacity="'+opacity+'" style="position: absolute; top: 0px;left:0px; background:'+bgcolor+';z-index: 1002; left: 0px;width:'+ iwidth +';max-width:'+width+'px;height:'+popheight+'px;margin-top:'+margintop+'px;margin-left:'+marginLeft+'px;">' +
									'<div class="effecttitle" style="color:'+tfontcolor+';line-height:'+popheight+'px;text-align:'+t_align+';font-weight:'+t_weight+';text-decoration:'+t_decoration+';font-size:'+t_fontsize+'px;font-family:'+t_family+';">'+effecttitle+'</div></div>');
							}
						});
					}
					if(imgeffects.type=='article_list'){
						self.each(function(){
							var heigth=$(this).height();
							var popheight=imgeffects.popheight;
							var margintop=heigth-popheight;
							var imgparent = $(this).closest('li');
							if(imgparent.find("input[class=articleid]").length){
								var effecttitle = imgparent.find("input[class=articleid]").data('title');
							}else{
								var effecttitle = imgparent.find("a.articleid img").attr('alt');
							}
							if(titlecount){
								effecttitle=subString(effecttitle,titlecount);
							}
							if(!$(this).siblings('#imgmask').length) {
								$(this).after('<div id="imgmask" class="imgmask" data-color="'+colorval+'" data-opacity="'+opacity+'" style=" position: absolute; top: 0px;left:0px; background:'+bgcolor+';z-index: 1002; left: 0px;width:100%;height:'+popheight+'px;margin-top:'+margintop+'px;">' +
									'<div class="effecttitle" style="color:'+tfontcolor+';line-height:'+popheight+'px;text-align:'+t_align+';font-weight:'+t_weight+';text-decoration:'+t_decoration+';font-size:'+t_fontsize+'px;font-family:'+t_family+';">'+effecttitle+'</div></div>');
							}
						});
					}
					if(imgeffects.type=='media' || imgeffects.type=='graphic'){
						var effecttitle=imgeffects.contentdesc;
						if(!self.siblings('#imgmask').length){
							var heigth=self.closest("div.img_over").height()+4;
							var width=self.width();
							var popheight=imgeffects.popheight;
							var margintop=heigth-popheight;
							self.after('<div id="imgmask" class="imgmask" data-color="'+colorval+'" data-opacity="'+opacity+'" style=" position: absolute; top: 0px;left:0px; background:'+bgcolor+';z-index: 1002; left: 0px;width:100%;height:'+popheight+'px;margin-top:'+margintop+'px;">' +
								'<div class="effecttitle" style="color:'+tfontcolor+';line-height:'+popheight+'px;text-align:'+t_align+';font-weight:'+t_weight+';text-decoration:'+t_decoration+';font-size:'+t_fontsize+'px;font-family:'+t_family+';">'+effecttitle+'</div></div>');
						}
					}

					self = self.siblings('#imgmask');
				}
				if(infixedparentel.length){
					if(infixedparentel.parent().is('#canvas')&&parseInt(infixedparentel.css('top'))==0){
						return;
					}
					if(self.is('.now_effecting')) return;
				}
				if($.WOPOP_EFFECTS[imgeffects.effect] && browsersupport){
					self.addClass('now_effecting');
					if(!$.wismobile&&self.closest('#canvas').length ){
						_getEffectDom(self).done(function(){
							var cancontainer=$('#overflow_canvas_container');
							if(cancontainer.length){
								var stacks=cancontainer.data('stacks');
								if(!stacks) stacks=[];
								if(!cancontainer.data('is_overflow')){
									var canh=$('#canvas').outerHeight();
									//cancontainer.css('overflow-y','hidden').css('height',canh+'px').data('is_overflow',true);
									cancontainer.css('height',canh+'px').data('is_overflow',true);
									var timer=setInterval(function(){
										if(cancontainer.data('is_overflow')){
											var nowcanh=$('#canvas').outerHeight();
											if(nowcanh != canh){
												canh=nowcanh;
												cancontainer.css('height',canh+'px');
											}
										}else{
											clearInterval(timer);
										}
									},1000);
								}
								stacks.push(self);
								cancontainer.data('stacks',stacks);
							}
						})
					}
					$.WOPOP_EFFECTS[imgeffects.effect](self,imgeffects,hover);
				}else{
					self.show();
				}
				if(imgeffects.type=='media' && imgeffects.effectrole =='dantu'){
					var leavedom=self;
					if(self.closest('.cstlayer').data('iseffectrotate'))  leavedom=self.closest('.cstlayer');
				}else if(imgeffects.type=='media' && imgeffects.effectrole !='dantu'){
					var leavedom=self.parent();
					if(self.closest('.cstlayer').data('iseffectrotate'))  leavedom=self.closest('.cstlayer');
				}else{
					var leavedom=self.parent();
				}

				// 文章列表样式动画逻辑
				if (imgeffects.type == 'article_list') {
					if (leavedom[0] && leavedom[0].classList.contains("skin6")) {
						leavedom = leavedom.parents(".pfcla-card-item-wrapper");
					} else if (leavedom[0] && leavedom[0].classList.contains("skin8")) {
						leavedom = leavedom.parents(".article-item");
					}
				}

				leavedom.mouseleave(function(){
					var queue=imgeffects.effect+'reverse';
					self.velocity("finish");
					self.data('run',0);
					self.dequeue(queue);
					if(imgeffects.effectrole !='dantu'){
						setTimeout(function () {
							self.remove();
						}, imgeffects.duration);
					}else{
						self.data('over','');
					}
				});
			}
		}
	}

	$.fn.wopop_effect_command=function(command,args){
		if(command=='stop'){
			return this.each(function() {
				stop_effect($(this));
			});
		}
	}
	
	$.WOPOP_EFFECTS._parseNum=function(num,orival){
		if(num==0) return 0;
		return num || orival;
	}

	function gradientHandler(colorrgb, opacity) {
        var rgbRegex = /rgb\((\d+),\s*(\d+),\s*(\d+)\)/g;
        bgcolor = colorrgb[0][0];
        var colorArr = bgcolor.match(rgbRegex);
        for(var i = 0; i < colorArr.length; i++){
            var tempStr = colorArr[i];
            var colorStr = tempStr.substr(0,tempStr.length - 1);
            colorStr = colorStr + ", " + opacity + ")";
            bgcolor = bgcolor.replace(tempStr,colorStr);
        }
        bgcolor = bgcolor.replace(/rgb/g,"rgba");
        var ua = window.navigator.userAgent;
        if(ua.indexOf('Edge') > 0 || ua.indexOf('Trident') > 0){
            bgcolor = bgcolor.replace("-webkit-linear-gradient","-ms-linear-gradient");
        }

        return bgcolor || '';
    }
	
	function stop_effect(dom){
		dom.velocity("stop", true);
		if(dom.data('wopop_effect_oristyle')) {
			$.Velocity.hook($(dom), "scale", "1");
			$.Velocity.hook($(dom), "rotateY", "0deg");
			var deg=dom.data('deg')||0;
			$.Velocity.hook($(dom), "rotateZ", deg+"deg");

			dom.attr('style',dom.data('wopop_effect_oristyle'));
		}

//		if(dom.data('wopop_effect_oristyle')) console.log(dom,dom.data('wopop_effect_oristyle'))
		dom.removeData('wopop_effect_oristyle');
		dom.removeClass('now_effecting');
		dom.trigger('effect_complete');
		var cancontainer=$('#overflow_canvas_container');
		if(cancontainer.length){
			var stacks=cancontainer.data('stacks');
			if(stacks && stacks.length){
				var newstacks=[];
				for(var i=0;i<stacks.length;i++){
					if(!stacks[i].is(dom)){
						newstacks.push(stacks[i]);
					}
				}
				cancontainer.data('stacks',newstacks);
				if(!newstacks.length){
					cancontainer.css('overflow-y','').css('height','').removeData('is_overflow');
				}
			}
		}
	}
	
	function _getEffectDom(dom){
		var fullpagedom=$('.fullpage_alllist');
		var dfd=$.Deferred();
		if(fullpagedom.length){
			dfd.resolve($(dom));
		}else{
			var ismobile=(typeof(MobileUtils)=='object');
			if(!ismobile){
				var container=$('#scroll_container');
				/**
				 * 修复因“固定背景”而导致chrome下图片显示异常问题（bug#4394）
				 * bug#4394,bug#4162,bug#4172,bug#4208,bug#4322,bug#4337均由“固定背景”的修复方案导致的，伤不起呀！！！
				 */ 
				if (container.data('chrome_bug')) container = window;
			}else{
				var container=window;
			}
			//如果该插件为弹窗容器内子插件，那么直接运行动画，不进行判断
			if(isDomInView($(dom),container) || $(dom).parents('.cstlayer').attr('type') == 'pop_up'|| $(dom).parents('.cstlayer').attr('type') == 'mpop_up'){
					dfd.resolve($(dom));
				}else{
				$(container).bind('scroll',function(e){
					if(isDomInView($(dom),container)){
						dfd.resolve($(dom));
						$(this).unbind(e);
					}
				})
			}
		}
		return dfd;
	}
	
	function isDomInView(dom,container){
		var fold=0;var containerheight=0;
		if (container=== undefined || container === window) {
				fold = $(window).scrollTop();
				containerheight=$(window).height();
		} else {
				fold = $(container).scrollTop();
				containerheight=$(container).height();
		}
		var navheight=$('#wp-mobile_navhandler').height()+$('#wp-mobile_navhandler').height();
		return fold+containerheight-navheight > dom.ab_pos_cnter('top');//parseInt(dom.css('top'));
	}
	
	function truncateHtml(html, maxLength,hasDot) {
		var tempElement = document.createElement('div');
		tempElement.innerHTML = html;
		function recursivelyTruncate(node, remainingLength) {
			if(remainingLength <= 0){
				$(node).remove();
				return remainingLength ;
			}
			if (!node.hasChildNodes()) return remainingLength ;	
			var childNodes = [];
			for (var i = 0; i < node.childNodes.length; i++) {
				childNodes.push(node.childNodes[i]);
			}
	
			for (var i = 0; i < childNodes.length && remainingLength >= 0; i++) {
				var child = childNodes[i];
				if (child.nodeType === Node.TEXT_NODE) {
					if (child.nodeValue.length > remainingLength) {
						if(remainingLength==0) child.nodeValue ='';
						else{
							child.nodeValue = child.nodeValue.substring(0, remainingLength);
							child.nodeValue +='...';
							remainingLength=0;
						}
					} else {
						remainingLength -= child.nodeValue.length;
					}
				} else if (child.nodeType === Node.ELEMENT_NODE) {
					if(remainingLength==0) $(child).remove();
					else {
						remainingLength = recursivelyTruncate(child, remainingLength);
					}
				}
			}
			return remainingLength;
		}
		recursivelyTruncate(tempElement, maxLength);
		var truncatedHtml = tempElement.innerHTML;
		var div = document.createElement('div');
		div.innerHTML = truncatedHtml;
		return div.innerHTML;
	}
 
	function subString(str, len, hasDot)
	{
		if(len>= str.length) return str;
		return truncateHtml(str, len,hasDot);       
	}

	$.WOPOP_EFFECTS.colorRgb=function(orival){
        if ($.isArray(orival) == true){
            return [orival,'gradient'];
        }else{
            var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
            var sColor = orival.toLowerCase();
            if(sColor && reg.test(sColor)){
                if(sColor.length === 4){
                    var sColorNew = "#";
                    for(var i=1; i<4; i+=1){
                        sColorNew += sColor.slice(i,i+1).concat(sColor.slice(i,i+1));
                    }
                    sColor = sColorNew;
                }
                //处理六位的颜色值
                var sColorChange = [];
                for(var i=1; i<7; i+=2){
                    sColorChange.push(parseInt("0x"+sColor.slice(i,i+2)));
                }
                return sColorChange;
            }else{
                return sColor;
            }
        }
	}


	
	$.WOPOP_EFFECTS._hasEffectFilter=function(){
		var self=$(this);
		if(self.attr('deleted')=='deleted') return false;
		var effects=self.data('wopop_effects');
		if(effects&&effects.effect){
			return true;
		}
		return false;
	}
	
	$.WOPOP_EFFECTS._isEditMode=function(){
		if($.saveLayout&&$.isFunction($.saveLayout.save)) return true;
		return false;
	}
	
	var curfullpageindex;
	$.WOPOP_EFFECTS._setindex=function(index){
		curfullpageindex=index;
	}
	
	$.WOPOP_EFFECTS._getindex=function(){
		return curfullpageindex;
	}
	
	var effectparams={
		fromleft:{delay:0,duration:1.20},
		frombottom:{delay:0,duration:1.20},
		fromright:{delay:0,duration:1.20},
		fromtop:{delay:0,duration:1.20},
		fade:{delay:0,duration:0.90},
		rotation:{delay:0,duration:1.20},
		rotation2d:{delay:0,duration:1.20},
		bounceIn:{delay:0,duration:2.20},
		big2small:{delay:0,duration:1.20},
		small2big:{delay:0,duration:1.20},
		fadeFromLeft:{delay:0,duration:1.20},
		fadeFromBottom:{delay:0,duration:1.20},
		fadeFromRight:{delay:0,duration:1.20},
		fadeFromTop:{delay:0,duration:1.20},
		light:{delay:0,duration:1.20}
	}
	$.WOPOP_EFFECTS._getDefaultParam=function(effectname){
		var opts=effectparams[effectname];
		if(!opts) opts={delay:0,duration:1.20}
		return opts;
	}
})(window);

;
function fullpagefooterinit(){
	$('.fullpage_alllist').each(function(){
		if($('.full_column:not([deleted="deleted"])').length > 0){
	        wp_alert(translate('full_column.already in backplane'));
	    }
	})
	$('.full_pagescroll').each(function(){
		fullpagescrollinit($(this));
	})
        //点亮滚亮操作
        $(document).bind('fullpage_scroll_pro',function(e,section){
            setTimeout(function(){
                if($('#wp-property_settings2').length){
                    var index='';
                    $('#canvas #fullPage-nav li').each(function(e){
                    })
                    $('.fullpage_alllist .section').each(function(e){
                        if($(this).hasClass('active')) index = e + 1;
                    })
                    
                    if(index>0){
                        $('#all_extra_img_div .wp-manage-panel-album-img').each(function(i){
                            var j = i + 1;
                            if(j==index) $(this).addClass('action');
                            else         $(this).removeClass('action');
                        })
                    }
                }
            },100)
        })
}

function fullpagescrollinit(dom){
	dom.children('.full_width').css({left:0-canv.offset().left-$.parseInteger($('#canvas').css("borderLeftWidth")),width:$('#scroll_container_bg').width()});
	dom.wp_rightkey(); 
	if(dom.is(':not(.isplate)')){
		fullpagescrollresize(dom);
        setTimeout(function(){
                fullpagescrolldrop(dom);
        },1300);
	}
	
}

function fullpagescrolldrag(dom){
	dom.wp_drag();
}

function fullpagescrollresize(dom){
	var createhandlefunc=function(handle){
		     dom.each(function(){
					 var hname = 'ui-resizable-'+handle;
					var axis = $('<div class="ui-resizable-handle ' + hname + '"><p class="knob "></p></div>');
					
					axis.css({zIndex: 1000});
					$(this).children('.full_width').append(axis);
			 })
				
	}
	var createplaceholderfunc=function(handle){
			  dom.each(function(){
					var hname = 'placeholder-'+handle;
					var axis = $('<div class="li-placeholder  ' + hname + '"></div>');
					axis.css({zIndex: 1000}).hide();
					$(this).children('.full_width').append(axis);
			  })
	}
	createhandlefunc('n');
	createhandlefunc('s');
	createplaceholderfunc('w');
	createplaceholderfunc('e');
	
	var fullpagescrollbuttompos;
	dom.resizable({
			handles: {n: '>.full_width .ui-resizable-n',s: '>.full_width .ui-resizable-s'},
			noinit:true,
			canvascontain: '#canvas',
			distance: 0,
		     concernLock:true,
			scroll: true,
			create:function(){
				$(this).children('.full_width').find('.ui-resizable-handle').hide();
			},
			start: function(event, ui){
				fullpagescrollbuttompos=$.getFullColChildMaxButtomfullpage(dom);
				var self=$(this);
				var resizeundo=new ResizeCommand(self.attr('id'));
				var oldcssarr=['top','height'];
				var oldval={};
				for(var i=0;i<oldcssarr.length;i++){
					oldval[oldcssarr[i]]=self.css(oldcssarr[i]);
				}
				resizeundo.setOldVal(oldval);
				$(document).data('resizeundo',resizeundo);
			},
			resize: function(event, ui){
				
				var curtop=dom.ab_pos_cnter('top');
				var curheight=$.parseInteger(dom.css('height'));
				if($.getElementAreaInf($(this))=='canvas'){
					var maxbuttom=Math.max(curtop+fullpagescrollbuttompos,curtop+curheight);
					$.canvasheightresizeOrigin(maxbuttom);
				}
				
				$(this).children('.full_content,.full_width').height($(this).height());
				$(this).triggerHandler('resize_progress',[{ui:ui}]);
				$.fullpageshowselectbgopt($(this));
				
			},
			stop:function(event, ui){
				$(this).children('.full_content,.full_width').height($(this).height());
				$.fullpageshowselectbgopt($(this));
				var resizeundo=$(document).data('resizeundo');
				$(document).removeData('resizeundo');
				var self=$(this);
				var oldcssarr=['top','height'];
				var newval={};
				for(var i=0;i<oldcssarr.length;i++){
					newval[oldcssarr[i]]=self.css(oldcssarr[i]);
				}
				$(this).triggerHandler('resize_stop',[{ui:ui}]);
				resizeundo.insertWithNewVal(newval);	
			}
			
	});
        //初始化resize 第一屏自适应处理
}

function fullpagescrolldrop(dom){
    if($.wismobile!=1) dom.css({'border':'dashed #AF6935 2px'});
	var createplaceholderfunc=function(handle){
			  dom.each(function(){
					var hname = 'placeholder-'+handle;
					var axis = $('<div class="li-placeholder  ' + hname + '"></div>');
					axis.css({zIndex: 1000});
					$(this).children('.full_content').append(axis);
			  })
	}
	createplaceholderfunc('n');
	createplaceholderfunc('s');
	createplaceholderfunc('w');
	createplaceholderfunc('e');
	
	var contentblock=dom.children('.full_content');
	contentblock.children('.li-placeholder').hide();
	contentblock.children('.placeholder-n').css({'border-top':'#FF9900 dashed 4px'});
	contentblock.children('.placeholder-s').css({'border-bottom':'#FF9900 dashed 4px'});
	contentblock.children('.placeholder-e').css({'border-right':'#FF9900 dashed 4px'});
	contentblock.children('.placeholder-w').css({'border-left':'#FF9900 dashed 4px'});
	contentblock.droppable({
			tolerance: 'pointer',
			accept:'.full_pagescroll,.cstlayer,.wp-new-tool-second-link,.wp-manage-plugin-block',//fullpage拖拽即时响应
			drop: function( event, ui ) {
				var draggable = $.ui.ddmanager.current;
				//弹窗容器以及弹窗容器内的子插件在拖拽时不放在全屏滚动中
				if ($(draggable.element).attr('type') == 'pop_up' || $(draggable.element).parents('.cstlayer').attr('type') == 'pop_up') {
					return;
				}
				if($.getElementAreaInf($(draggable.element))==$.getElementAreaInf(dom)){
					if(!dom.hasClass('ui-modselected')||$(draggable.element).is('.wp-new-tool-second-link')||$(draggable.element).is('.wp-manage-plugin-block')){//fullpage拖拽即时响应
						$(this).children('.li-placeholder').hide();
						var existcolumn=$(document).data('layer_final_drop_id');
						var biggercolumn=$.chooseBiggerColumn(existcolumn,dom.attr('id'));

						$(document).data('layer_final_drop_id',biggercolumn);
					}
				}
			},
			over: function(event, ui){
				//判断是否包含锁定元素
				var has_layer_lock=false;
				$('.ui-modselected').each(function(){
						if($(this).data('cstlayerstatus') == 'unlock' ){
							has_layer_lock=true;
						}
				});
				if(has_layer_lock) return;
				var draggable = $.ui.ddmanager.current;
				if($.getElementAreaInf($(draggable.element))==$.getElementAreaInf(dom) ||$(draggable.element).is('.wp-new-tool-second-link')||$(draggable.element).is('.wp-manage-plugin-block')){//fullpage拖拽即时响应
					if(!dom.hasClass('ui-modselected')||$(draggable.element).is('.wp-new-tool-second-link')||$(draggable.element).is('.wp-manage-plugin-block')){//fullpage拖拽即时响应
						var thisid=dom.attr('id');
						var existid=$(document).data('layer_drop_over_id');
						if(thisid != existid){
							var biggerid=$.chooseBiggerColumn(existid,thisid);
							if(biggerid == thisid){
								var $this=$(this);
								$(this).children('.li-placeholder').show();
								if(existid){
									var existcolumnel = $('#'+existid);
									var dropobj=existcolumnel.children('.full_content').data('droppable');
									dropobj['isover'] = 0;
									dropobj['isout'] = 1;
									dropobj._out.call(dropobj, event);
								}
								$(document).data('layer_drop_over_id', thisid);
							}else{
								var dropobj1=$(this).data('droppable');
								dropobj1['isover'] = 0;
								dropobj1['isout'] = 1;
							}
						}

					}
				}
			},
			out: function(event, ui){
				//判断是否包含锁定元素
				var has_layer_lock=false;
				$('.ui-modselected').each(function(){
						if($(this).data('cstlayerstatus') == 'unlock' ){
							has_layer_lock=true;
						}
				});
				if(has_layer_lock) return;
				var draggable = $.ui.ddmanager.current;
				if($.getElementAreaInf($(draggable.element))==$.getElementAreaInf(dom)){
					if(!dom.hasClass('ui-modselected')||$(draggable.element).is('.wp-new-tool-second-link')||$(draggable.element).is('.wp-manage-plugin-block')){//fullpage拖拽即时响应
						$(this).children('.li-placeholder').hide();
						var curoverid=$(document).data('layer_drop_over_id');
						if(curoverid == dom.attr('id')) $(document).removeData('layer_drop_over_id');
					} 
				}
				
			}
	});

}

function full_page_block_drop(contentBlock){
    var dom=contentBlock.closest('.full_pagescroll');
    contentBlock.droppable({
			tolerance: 'pointer',
			accept:'.full_pagescroll,.cstlayer,.wp-new-tool-second-link,.wp-manage-plugin-block',//fullpage拖拽即时响应
			drop: function( event, ui ) {
				var draggable = $.ui.ddmanager.current;
				if($.getElementAreaInf($(draggable.element))==$.getElementAreaInf(dom)){
					if(!dom.hasClass('ui-modselected')||$(draggable.element).is('.wp-new-tool-second-link')||$(draggable.element).is('.wp-manage-plugin-block')){
						$(this).children('.li-placeholder').hide();
						var existcolumn=$(document).data('layer_final_drop_id');
						var biggercolumn=$.chooseBiggerColumn(existcolumn,dom.attr('id'));

						$(document).data('layer_final_drop_id',biggercolumn);
					}
				}
			},
			over: function(event, ui){
				//判断是否包含锁定元素
				var has_layer_lock=false;
				$('.ui-modselected').each(function(){
						if($(this).data('cstlayerstatus') == 'unlock' ){
							has_layer_lock=true;
						}
				});
                                
				if(has_layer_lock) return;
				var draggable = $.ui.ddmanager.current;
				if($.getElementAreaInf($(draggable.element))==$.getElementAreaInf(dom) ||$(draggable.element).is('.wp-new-tool-second-link')||$(draggable.element).is('.wp-manage-plugin-block')){
					if(!dom.hasClass('ui-modselected')||$(draggable.element).is('.wp-new-tool-second-link')||$(draggable.element).is('.wp-manage-plugin-block')){
						var thisid=dom.attr('id');
						var existid=$(document).data('layer_drop_over_id');
						if(thisid != existid){
							var biggerid=$.chooseBiggerColumn(existid,thisid);
							if(biggerid == thisid){
								var $this=$(this);
								$(this).children('.li-placeholder').show();
								if(existid){
									var existcolumnel = $('#'+existid);
									if(!existcolumnel.is('.wp_droppable')){
										var dropobj=existcolumnel.children('.full_content').data('droppable');
									}else{
										var dropobj=existcolumnel.children('.drop_box').data('droppable');
									}
									dropobj['isover'] = 0;
									dropobj['isout'] = 1;
									dropobj._out.call(dropobj, event);
								}
								$(document).data('layer_drop_over_id', thisid);
							}else{
								var dropobj1=$(this).data('droppable');
								dropobj1['isover'] = 0;
								dropobj1['isout'] = 1;
							}
						}

					}
				}
			},
			out: function(event, ui){
				//判断是否包含锁定元素
				var has_layer_lock=false;
				$('.ui-modselected').each(function(){
						if($(this).data('cstlayerstatus') == 'unlock' ){
							has_layer_lock=true;
						}
				});
				if(has_layer_lock) return;
				var draggable = $.ui.ddmanager.current;
				if($.getElementAreaInf($(draggable.element))==$.getElementAreaInf(dom)){
					if(!dom.hasClass('ui-modselected')||$(draggable.element).is('.wp-new-tool-second-link')||$(draggable.element).is('.wp-manage-plugin-block')){
						$(this).children('.li-placeholder').hide();
						var curoverid=$(document).data('layer_drop_over_id');
						if(curoverid == dom.attr('id')) $(document).removeData('layer_drop_over_id');
					} 
				}
				
			}
	});
}

function fullpagescroll_propblk_init(){
	var lvtimer;
	for(var key in $.fullpagebackgroundPropDefaults){
		(function(){	
			var curkey=key;
			var otherfunc=null;
			if(false){
				var innertxt ='', lvtype = '';
				switch(curkey){
					case 'fullpage_moveto_prevop':
						lvtype = 'top';
						innertxt = '<div class="wp-moveto_fstlevel"><a class="property-bar-top" href="###" title="'+translate('Move to top')+'"><span>&nbsp;</span></a></div>';
						break;
					case 'fullpage_moveto_nextop':
						lvtype = 'bottom';
						innertxt = '<div class="wp-moveto_lstlevel"><a class="property-bar-bottom" href="###" title="'+translate('Move to bottom')+'"><span>&nbsp;</span></a></div>';
						break;
				}
				otherfunc={
					mousedown:function(){
						var $target = $(this)
						var apos =$target.offset();
						var scrollctner=$('#scroll_container');
						var scrolltop=scrollctner.scrollTop();

						$(innertxt).appendTo(scrollctner).css({
							top: function(){
								return (apos.top+scrolltop - 25-39)+'px'
							},left: apos.left+'px'
						}).click(function(e){
							$('#'+$.bgselectedid).wp_setorder(lvtype,$.bgselectedid);
							$(this).remove();
							$target.removeClass('local');
							e.preventDefault();
						});

					},
					mouseup:function(){

					}
				}
			}
			$('#'+curkey).mousedown(function(e){
					var $target = $(this);	
					$target.addClass('local');
					if($('.wp-moveto_fstlevel,.wp-moveto_lstlevel').size()) $('.wp-moveto_fstlevel,.wp-moveto_lstlevel').remove();
					if(otherfunc != null){
						otherfunc.mousedown.apply(this);
					}
					e.preventDefault();
			}).mouseup(function(e){
					var self = this,$target = $(self);
					$target.removeClass('local');
					$.fullpagebackgroundPropDefaults[curkey].apply(this);
					if(otherfunc != null){
						otherfunc.mouseup.apply(this);
					}
					e.preventDefault();
			})
		})();
	}
}

(function($){
function fullpagegetAllParents(el){
	var parents={};
	parents[el.prop('id')]='null';
	var curel=el;
	while(true){
		var parentid=$.getElementFatherid(curel);
		if(parentid =='none') break;
		parents[parentid]=curel.prop('id');
		curel=$('#'+parentid);
	}
	return parents;
}

$.chooseBiggerColumn=function(existcolumnid,newcolumnid){
	var biggercolumnid=newcolumnid;
	if(existcolumnid==newcolumnid) return biggercolumnid;
	if(existcolumnid){
		var existcolumnel=$('#'+existcolumnid);
		var newcolumnel=$('#'+newcolumnid);
		
		var existcolumnfathers=fullpagegetAllParents(existcolumnel);
		var newcolumnfathers=fullpagegetAllParents(newcolumnel);
		var rootid='canvas';
		if(!existcolumnfathers[rootid])  rootid='site_footer';
		var existdifffather=rootid;
		var newdifffather=rootid;
		while(existdifffather == newdifffather){
			existdifffather =existcolumnfathers[existdifffather];
			newdifffather =newcolumnfathers[newdifffather];
			if(existdifffather=='null' || newdifffather=='null') break;
		}
		if(existdifffather=='null') biggercolumnid=newcolumnid;
		else if(newdifffather=='null') biggercolumnid=existcolumnid;
		else{
			var existfatherzindex=$.parseInteger($('#'+existdifffather).css('z-index'));
			var newfatherzindex=$.parseInteger($('#'+newdifffather).css('z-index'));
			if(existfatherzindex > newfatherzindex) biggercolumnid=existcolumnid;
		}
	}
	return biggercolumnid;
}	

$.transferToColumn=function(dom,fathercolid){
	var oldfatherid=$.getElementFatherid(dom);
	if(oldfatherid!=fathercolid){
		var newfatherel=$('#'+fathercolid);
		var domabpos=dom.ab_pos('top');
		var newfatherabpos=newfatherel.ab_pos('top');
		var domableft=dom.ab_pos('left');
		var newfatherl=newfatherel.ab_pos('left');
		var contentblock=newfatherel;
		if(fathercolid!='canvas'){
			if(newfatherel.is('.wp_droppable')){
				contentblock=newfatherel.children('.drop_box');
			}else contentblock=newfatherel.children('.full_content');
		}
		dom.detach().attr('fatherid',fathercolid).css({'top':(domabpos-newfatherabpos),'left':(domableft-newfatherl)}).appendTo(contentblock);
		if(fathercolid=='site_footer'||fathercolid=='canvas') dom.removeAttr('fatherid');
	}
}

$.getElementAreaInf=function(dom){
	return dom.attr('inbuttom')=='1'?'site_footer':'canvas';
}


$.addFullPagescroll=function(top){
    if($.wisplate){
        wp_alert(translate('fullpage.plate do not support add'));
        return false;
    }
    if($('.fullpage_alllist:not([deleted="deleted"])').length > 0){
        wp_alert(translate('fullpage.already plugin'));
        return false;
    }
    if($('.cstlayer[type="mads"]:not([deleted="deleted"])').length>0){
        wp_alert(translate('Multi-filter and fullpage.already plugin'));
        return false;
	}
    if($('.full_column:not([deleted="deleted"])').length > 0){
        wp_alert(translate('full_column.already Please remove'));
        return false;
    }
    //存在页脚元素时移除处理
    setTimeout(function(){
        if($('#site_footer').length > 0){
            var fullpageClass='fullpage';
            if($.wismobile) fullpageClass='mfullpage';
            if (confirm(translate('fullpage.Please hide site_footer'))) {
                    $.post(parseToURL(fullpageClass,"prosf"), {pid:$.page_id},function(response){
                        var o_result = $.parseJSON(response);
                        if(o_result.result == "OK") {
                            $('#site_footer').remove();
                        }else{
                            location.reload();
                            return false;
                        }
                    }).error(function() {
                            location.reload();
                            return false;
                    });
            }else{
                return false;
            }
        }
    },500)
    
    var successfunc=function(resp,needchangeid){
           var fullpagescrollhtml=resp;
           if(needchangeid){
               var fullpagescrollels=$(fullpagescrollhtml).filter('.full_pagescroll');
               var nowid=fullpagescrollels.prop('id');
               var newid='layer'+fGuid();
               fullpagescrollhtml=fullpagescrollhtml.replace(new RegExp(nowid,"g"),newid);
           }
           var fullpagescrollel=$(fullpagescrollhtml).appendTo('#canvas');
                           fullpagescrollel.find('.full_pagescroll').each(function(){
                               fullpagescrollinit($(this));
                           })

           //初始化加截 默认模块内,内容模块加载样式
           fullpagescrollel.css('z-index',100);
           var titlecss=relativeToAbsoluteURL('plugin/title/css/title.css');
                           if($('body').data('title') !=titlecss){
                   $('body').data('title',titlecss);
                   var head = document.getElementsByTagName('head').item(0);
                   var css = document.createElement('link');
                   css.href = titlecss;
                   css.rel = 'stylesheet';
                   css.type = 'text/css';
                   head.appendChild(css);					 
            }          

           $('.ui-modselected').each(function(){
               $.hidWidgetBorder($(this));
               // 图文模块相关 2012/2/14
               if($(this).hasClass('graphic_edited')) actived_graphic();
           });	
           $.fullpageunselectbgdiv(fullpagescrollel);
           //显示属性 初始显示属性.ui-modselected绑定至第一屏上.再根id .fullpage_alllist初始存在问题
           $.fullpageselectbgdiv(fullpagescrollel.find('.full_pagescroll:eq(0)'));
           new AddCommand(fullpagescrollel.prop('id')).insert();

           var objarray=new Array();
           objarray[0]=new Array(parseInt($('#'+fullpagescrollel.prop('id')).css('z-index')),fullpagescrollel.prop('id'));
           $.zindexsort_new(objarray);				
   }	
   //使用缓存有问题 停用
   if($.addFullPagescroll.html_cache){
       successfunc($.addFullPagescroll.html_cache,true);
       return;
   }

   $.ajax({
       type: "GET",
       url: parseToURL("wp_widgets","gtfullpagescroll"),
       success: function(response){
           successfunc(response,false);
       },
       error: function(xhr, textStatus, errorThrown){
           wp_alert((errorThrown||textStatus)+"(add a fullpagescroll).<br/>"+translate("Request failed!"));
           return false;
       }
   });
           
}

$.curSelectableFather=function(){
	var selmods=$('.ui-modselected');
	if(selmods.length==0){
		$(document).data('cur_selectable_father',null);
		return null;
	}else{
		var fatherid=$.getElementFatherid(selmods.filter(':first'));
		$(document).data('cur_selectable_father',fatherid);
		return fatherid;
		
	}
}

$.getElementFatherid=function(dom){
	if(dom.prop('id')=='canvas'||dom.prop('id')=='site_footer') return 'none';
	var fatherid=dom.attr('fatherid');
	if(!fatherid||fatherid==''){
		if(dom.closest('#canvas').length>0){
			fatherid='canvas';
		}else if(dom.closest('#site_footer').length>0){
			fatherid='site_footer';
		}
	}
	if(!$('#'+fatherid).length){
		if(dom.closest('#canvas').length>0){
			fatherid='canvas';
		}else if(dom.closest('#site_footer').length>0){
			fatherid='site_footer';
		}
		dom.removeAttr('fatherid');
	}
	return fatherid;
}

$.getFullColChildMaxButtomfullpage=function(dom){
		var parenttoppos=dom.ab_pos_cnter('top');
		var maxbuttompos=parenttoppos;
		dom.find('.cstlayer,.full_pagescroll').each(function(){
			var el=$(this);
			var buttompos=0;
			if(el.hasClass('cstlayer')) buttompos=$.divrotate.getDegreeModMaxPoint(el,null,'buttom');
			else buttompos=el.ab_pos_cnter('top')+$.parseInteger(el.css('height'));
			if(maxbuttompos<buttompos) maxbuttompos=buttompos
		})
		return maxbuttompos-parenttoppos;
	
}

$.getFullPagescrollButtomPos=function(dom){
	if(dom.hasClass('cstlayer')){
		return $.divrotate.getDegreeModMaxPoint(dom,null,'buttom');
	}else if(dom.hasClass('full_pagescroll')){
		var maxbuttompos=0;
		dom.find('.cstlayer,.full_pagescroll').andSelf().each(function(){
			var el=$(this);
			var buttompos=0;
			if(el.hasClass('cstlayer')) buttompos=$.divrotate.getDegreeModMaxPoint(el,null,'buttom');
			else buttompos=el.ab_pos_cnter('top')+$.parseInteger(el.css('height'));
			if(maxbuttompos<buttompos) maxbuttompos=buttompos
		})
		return maxbuttompos;
	}
}


$.saveFullPagescrollObj=function(dom){
	var footerheight=dom.height();
	var otherparam={};
	if(dom.prop('id') != 'site_footer') otherparam={fullpageext:dom.data('fullpageext'),top:$.parseInteger(dom.css('top'))};
	return $.extend({
		footerheight:footerheight
	},otherparam);
}
$.fullpagecanvasleft=function(){
    if($(window).width()<=$('#canvas').width()) return '0';
    else return ($(window).width()-$('#canvas').width())/2;
}
//fullpage 切屏图片自适应处理
$.wp_fullpagezoom=function(dom,size,originalSize,status){
	// 获取padding或border信息
	var $target = dom;
	var extw = 0,exth = 0,neww = size.width,newh = size.height;
	// 获取缩放信息
	var $imgs = $target.find('.fullimgc');
	$imgs.each(function(){
		var $img=$(this);
		(function(originalSize){
			var func=function(){
				var w=size.width;var h=size.height;
				var imgw=originalSize.width;var imgh=originalSize.height;
				if(w/h==imgw/imgh){
					$img.css({top:'0px',left:0,width:w,height:'auto'});
				}else if(w/h>imgw/imgh){
					var theimgh=imgh*w/imgw
					$img.css({top:Math.ceil((h-theimgh)/2),left:0,width:w,height:'auto'});
				}else{
					var theimgw=imgw*h/imgh;
					$img.css({top:'0px',left:Math.ceil((w-theimgw)/2),width:'auto',height:h});
				}
			}
			$img.css("position", 'relative');// fixed bug#4459
			if(!originalSize || !originalSize.width){
				var imgsrc=$img.prop('src');
				var imgcache=$('#canvas').data('fullpage_imgcache')
				if(imgcache && imgcache[imgsrc]){
					originalSize=imgcache[imgsrc];
					func()
				}else{
					var imgel=new Image()
					originalSize={width:0,height:0}
					imgel.onload=function(){
						originalSize.width=imgel.width
						originalSize.height=imgel.height;
						if(!imgcache) imgcache={};
						imgcache[imgsrc]=$.extend({},originalSize)
						$('#canvas').data('fullpage_imgcache',imgcache)
						func()
					}
					imgel.src=imgsrc
				}
			}else{
				setTimeout(function(){
					func()
				},0)
			}
		})(originalSize)
	})
}
//判断浏览（PC｜手机）
$.wp_fullpag_mobile=function(){
    return (/iphone|ipod|ipad|Macintosh|android|Windows phone/i.test(navigator.userAgent.toLowerCase()));
}
$.wp_fpsjs_weixin=function(){
    return (/micromessenger/i.test(navigator.userAgent.toLowerCase()));
}
$.wp_fpsjs_pad=function(){
    return (/iphone|ipod|ipad/i.test(navigator.userAgent.toLowerCase()));
}

//初始化resize 第一屏自适应处理 手机预览，编辑不处理
setTimeout(function(){
    if($.wismobile&&$.wisviewmode){}else{
        var maxjson = {width:320,height:$(window).height()};
        if(!$.wiseditmode){
            maxjson = {width:$(window).width(),height:$(window).height()};
            var fullnode = $('.fullpage_alllist');
            var $paragraph_image = fullnode.find('.section.active .bg > img');
			var json = {width:0,height:0};
            $.wp_fullpagezoom(fullnode,maxjson,json,'noresize');
        }
    }
},800);

})(jQuery);
/**
 * 个性化下拉框
 */
;(function($,undefined){
	var namespace = '.wpcstselect';
	$.widget('wp.cstselect',{
		options : {
			selectclass:'wp-diy-selected'//样式
		}, // 配置项
		_create : function(){
			var self = this;
			var selectclass=self.options.selectclass;
			if(selectclass.length==0){ selectclass='wp-diy-selected';}
			// 忽略多选的SELECT控件
			if(self.element.prop("multiple")) return;
			self._doinit(self).done(function(dom,selopts){
				var $ctarget = dom,$diysel = $ctarget.next('.'+selectclass+'-outside').find('.'+selectclass+'');
				// 设置默认值
				setTimeout(function(){
					var $cursel = $diysel.children('.'+selectclass+'-left'),difw = $cursel.siblings('.'+selectclass+'-button').outerWidth() + 2,
					pad = self._int($cursel.css("paddingLeft")) + self._int($cursel.css("paddingRight")),finalw = $diysel.width() - difw - pad;
					if (finalw <= 0) finalw = Math.max(65, $ctarget.width()) - pad - 16;
					$cursel.width(finalw).attr("val",$ctarget.val()).html($ctarget.find('option:selected').html());$cursel = difw = finalw = null;
				},50);
				// 绑定CLICK事件
				$diysel.bind('click'+namespace,function(e){
					if(self.options.disabled || !selopts.length) return;
					var $selectedcnt = $(selopts).appendTo('body'),maxheight = $selectedcnt.outerHeight(true);
					self._selected($selectedcnt, $ctarget.val()); // 设置默认值
					// 绑定LI:HOVER及CLICK事件
					if ($selectedcnt.is(':hidden')) {
						var $target = $(this);
						$selectedcnt.find('li').bind('mouseenter'+namespace, function(e){
							$(this).addClass('local').siblings().removeClass('local');
						}).bind('mouseleave'+namespace, function(e){
							$(this).removeClass('local');
						}).bind('click'+namespace, function(e){
							var $li = $(this),selval = $li.attr("val");
							$target.children('.'+selectclass+'-left').html($li.html()).attr("val", selval);
							$ctarget.val(selval).trigger('change');// 捕获已绑定SELECT事件
						}).end().slideDown('slow',function(){
							var $selcnt = $(this);
							// 定位滚动条 2012/11/09
							var selcnt = $selcnt[0],clienth = selcnt.clientHeight,$selected = $selcnt.find('li.local');
							if ($selected.size() > 0) {
								var seltop = $._parseFloat($selcnt.css("top")),
								litop = seltop + $selected[0].offsetTop - selcnt.offsetTop + $selected.height();
								if(clienth < litop) selcnt.scrollTop = litop - clienth;
							}
							// End
							$(document).one('click'+namespace,function(e){
								$selcnt.slideUp().remove();
								return false;
							});
						});
						setSeloptsPos($target,$selectedcnt,maxheight);
						// 绑定RESIZE事件
						$(window).resize(function(){
							setSeloptsPos($target,$selectedcnt,maxheight);
						});
					}
				});
				function setSeloptsPos(target,dom,maxh){
					var $target = target,pos = $target.offset();
					dom.css({
						"top": function(i,val){
							var wnh = window.innerHeight||self.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,
							_top = self._int(pos.top),_oh = $target.outerHeight(true),newtop = 0;
							if (wnh < _top + maxh + _oh) {
								newtop = Math.max(0, _top - maxh - 1);
								$(this).css({"border-bottom": 'none',"border-top": '1px solid #B5B5B5'});
							} else newtop = _top + _oh + 1;
							wnh = _top = _oh = null;
							return newtop+'px';
						},"left": function(i,val){
							return self._int(pos.left)+'px';
						}
					});
				}
			});
		},
	    value : function(value){
	    	var self = this;
			var selectclass=self.options.selectclass;
			if(selectclass.length==0){ selectclass='wp-diy-selected';}
			var $target = self.element,$select = $target.next('.'+selectclass+'-outside');
	    	$target.val(value);
	    	$select.find('.'+selectclass+'-left').attr("val",value).html($target.children('option:selected').html());
	    },
		_doinit : function(dom){
			var dtd = $.Deferred(),self = dom,$target = self.element;
			var selectclass=self.options.selectclass,_stripslashes = function(str){
				return (str + '').replace(/\\(.?)/g, function(s, $1){
				    switch ($1) {
				    	case '\\': return '\\';
				    	case '0': return '\u0000';
				    	case '': return '';
				    	default: return $1;
				    }
			  	});
			};
			if(selectclass.length==0){ selectclass='wp-diy-selected';}
			$target.hide();// 隐藏SELECT控件
			// 自定义类SELECT
			var selopt = '',selw = Math.max($target.width(), 65);
			var selhtm = '<div class="'+selectclass+'-outside overz" style="float:left;width:'+selw+'px;"><div class="'+selectclass+'">';
			$target.children('option').each(function(i,c){
				var self = c;
				selopt += '<li val="'+self.value+'">'+_stripslashes(self.innerHTML)+'</li>';
			});
			selhtm += '<div class="'+selectclass+'-left" val="0">&nbsp;</div><div class="'+selectclass+'-button"><a href="###" onclick="return false;"></a></div></div></div>';
			$target.after(selhtm);
			dtd.resolve($target,'<div class="'+selectclass+'-content overz" style="width:'+(selw-2)+'px;"><ul>'+selopt+'</ul></div>');
			return dtd.promise();
		},
		_int : function(numstr){
			var number = parseInt(numstr);
			if(isNaN(number)) return 0;
			return number;
		},
		_selected : function(dom,value){
			dom.find('li').each(function(i,c){
				var $target = $(c),ent = '';
				ent = ($target.attr("val") == value)?'addClass':'removeClass';
				$target[ent]('local');
			});
			return true;
		},
		enable : function(){
			var self = this;
			var selectclass=self.options.selectclass;
			if(selectclass.length==0){ selectclass='wp-diy-selected';}
			var $select = self.element.next('.'+selectclass+'-outside');
			$select.find('.'+selectclass+'-left').css("color","#5A5A5A");
			$select.find('.'+selectclass+'-button > a').removeClass('disabled');
			$.Widget.prototype.enable.call(self);
		},
		disable : function(){
			var self = this;
			var selectclass=self.options.selectclass;
			if(selectclass.length==0){ selectclass='wp-diy-selected';}
			var $target = self.element,$select = $target.next('.'+selectclass+'-outside');
			// 还原SELECT控件默认值
			var firstopt = $target.find('option')[0];
			$target[0].selectedIndex = 0;
			$select.find('.'+selectclass+'-left').css("color","#7C7C7C").attr("val",firstopt.value).html(firstopt.innerHTML);
			$select.find('.'+selectclass+'-button > a').addClass('disabled');
			$.Widget.prototype.disable.call(self);
		},
		destroy : function(){
			var self = this;
			var selectclass=self.options.selectclass;
			if(selectclass.length==0){ selectclass='wp-diy-selected';}
			$(document).unbind(namespace);
			self.element.next('.'+selectclass+'-outside').unbind(namespace).remove();
			$.Widget.prototype.destroy.call(self);
		}
	});
})(jQuery);

$._parseFloat = function(numString){
	var number = parseFloat(numString);
	if(isNaN(number)) return 0;
	return number;
}

/**
 * 手机站弹窗(模拟新窗口打开) 2014/06/09
 */
function msite_popup(url){
	var $container = $('#scroll_container'),maxh = $(window).height(),
	bgimg = relativeToAbsoluteURL('template/default/images/loading.gif'),
	css = 'position:absolute;top:0;left:0;width:320px;overflow:hidden;z-index:10000',
	ihtml = '<div class="mspopup_mask" style="background:url('+bgimg+') no-repeat 50% 20% #fff;height:'
	+maxh+'px;'+css+'"><iframe allowtransparency="true" frameborder="0" scrolling="no" width="320" height="'
	+maxh+'" src="'+url+'" onload="mspopup_onload(this)"></iframe></div>';
	
	var $mask = $container.children('.mspopup_mask');
	if(! $mask.length) $container.append(ihtml).attr("data-height", $container.height()).height(maxh);
}

function mspopup_onload(win){
	win.height = 'auto';
	var bodh = win.contentWindow.document.body.scrollHeight,
	doch = win.contentWindow.document.documentElement.scrollHeight,
	maxheight = Math.max(bodh, doch);
	
	// Reset height
	win.height = maxheight;
	$(win).parent('.mspopup_mask').height(maxheight)
	.parent('#scroll_container').height(maxheight);
}

function create_pc_media_set_pic(layer_id,editmode){
	var func=function(obj) {
		var callback=function(img){
				img.show();
				img.closest('.img_over').children('.imgloading').remove();
				if(!editmode){
					$(function(){			
						var super_id=layer_id;
						var dom_img=$("#"+super_id).find('.paragraph_image');
						var left_img=parseInt(dom_img.css('left'));
						var top_img=parseInt(dom_img.css('top'));
						var width_img=parseInt(dom_img.css("width"));
						var height_img=parseInt(dom_img.css("height"));
						if(isNaN(left_img)){ left_img=0; }
						if(isNaN(top_img)){ top_img=0; }
						var ii=0;
						$("#"+super_id).find(".wp_mapclass").each(function(){
							var shape="rect";
							shape=$(this).attr('shape');
							if(shape != "circle"){
								shape="rect";
							}

							var leftz=parseInt($(this).css("left"));
							var topz=parseInt($(this).css("top"));
							var widthz=parseInt($(this).css("width"));
							var heightz=parseInt($(this).css("height"));

							if(shape != "circle"){
								var coords='0,0,0,0';
							}else{
								var coords='0,0,0';
							}		
							if( (leftz+widthz) < left_img || (topz+heightz)< top_img){
							}else{
								var cleft=0;
								var ctop=0;
								var r=0;
								if(shape != "circle"){
									cleft=leftz-left_img;
									ctop=topz-top_img;
									coords=cleft+','+ctop+','+(cleft+widthz)+','+(ctop+heightz);
								}else{
									r=widthz/2;
									cleft=leftz-left_img+r;
									ctop=topz-top_img+r;
									coords=cleft+','+ctop+','+r;
								}
							}	

							var classid="map_arear_"+ii;
							ii++;
							var mapd=$(this).parent().find("."+classid);
							mapd.attr('coords',coords);
							$(this).remove();

						});
					})
				}
		}
		$(obj).each(function() {
			var img=$(this);
			callback(img);
		});      
	}
	window['set_thumb_'+layer_id]=func;
};
/*
 * 模块高度自适应，对外接口，功能待扩展
 * 
 */

/**
 * 高度自适应模块,预览模式下触发 TODO:面向对象写法
 */
function wp_heightAdapt(dom,oldHeight)
{	
	if(dom== undefined) return false;
	if ($.inArray(dom.attr("type"), ['bslider']) != -1) return;
	var heightfunc=function(){
		var before=dom.data('oriheight');
		if(!before){
			before=layer_first_div(dom).height();
			dom.data('oriheight',before);
		}
		return before;
	}

	var layer_first_div=function(el){
		var firstdiv=el.children('div').eq(0);
		if(firstdiv.length==0 && el.attr('type')=='title'){
			firstdiv=el.find('.wp-title_content')
		}
		return firstdiv;
	}
	
	var resetPos=function(el){
		var oritop=el.data('adaptoritop');
		var oriheight=el.data('adaptoriheight');
		var pressArr=el.data('adaptpress');
		var wrapArr=el.data('adaptwrap');
		var id=dom.prop('id');
		var toppos=$.parseInteger(el.css('top'));
		if(el.data('wopop_effect_oristyle')){
			var style=el.data('wopop_effect_oristyle');
			var topregexp=/(?:^|;)\s*top\s*:\s*(\d+)px/;
			var topmatches=style.match(topregexp);
			if(topmatches){
				toppos=parseInt(topmatches[1]);
			}
          }
		if(!oritop&&oritop !==0){
			el.data('adaptoritop',toppos);
			el.data('adaptoriheight',el.height());
			return;
		}

		if(pressArr && pressArr.length){
			var newpressarr=[]
			for(var i=0;i<pressArr.length;i++){
				var press=pressArr[i];
				if(press.id !=id){
					oritop+=press.diffY;
					newpressarr.push(press)
				}
			}
			el.data('adaptpress',newpressarr);
		}
		
		if(wrapArr && wrapArr.length){
			var h=oriheight;
			for(var i=0;i<wrapArr.length;i++){
				var wrap=wrapArr[i];
				if(wrap.id !=id){
					h+=wrap.diffH;
				}
			}
			if(h!=el.height()){
				el.css('height',h+'px');
				var wrapListPadding = parseInt(layer_first_div(el).css('padding-top')) + parseInt(layer_first_div(el).css('padding-bottom'));
				var wrapListBorder = parseInt(layer_first_div(el).css('border-top-width')) + parseInt(layer_first_div(el).css('border-bottom-width'));
				layer_first_div(el).height(el.height() - wrapListPadding - wrapListBorder);
			}
		}
		if(oritop!=toppos){ 
			if(el.data('wopop_effect_oristyle')){
				var style=el.data('wopop_effect_oristyle');
				style=style.replace(/((?:^|;)\s*top\s*:\s*)\d+px;/,'$1'+oritop+'px;');
				el.data('wopop_effect_oristyle',style);
			}
			el.css('top',oritop+'px');
		}
	}
	
	var canvheight=$('#canvas').data('adaptoriheight');
	if(!canvheight){
		$('#canvas').data('adaptoriheight',$('#canvas').height());
		canvheight=$('#canvas').data('adaptoriheight');
	}
	var adaptModuleBefore = heightfunc();//自适应之前原始高度
	var actualContentHeight=layer_first_div(dom).height();
	resetPos(dom);
     //有些模块第一个元素不是div，比如：产品详情
	layer_first_div(dom).css('height','auto');//模块自适应
	var adaptModuleAfter = 0;//自适应之后高度
	if($.isFunction(dom.data('calcModuleHeightFunc'))){
		var func=dom.data('calcModuleHeightFunc');
		adaptModuleAfter =func(dom);
	}
	if(!adaptModuleAfter) adaptModuleAfter=layer_first_div(dom).height();
	if(dom.data('layer_height_min_apapt')){
		if(dom.data('layer_height_min_apapt')>adaptModuleAfter) adaptModuleAfter=dom.data('layer_height_min_apapt');
	}
	if(adaptModuleAfter < adaptModuleBefore){ 
		layer_first_div(dom).css('height',adaptModuleBefore+'px');
		if(adaptModuleBefore==actualContentHeight) return;
	}//还原
	else{
		layer_first_div(dom).css('height',adaptModuleAfter+'px');
		if(adaptModuleAfter==actualContentHeight) return;
	}

	//bug 7531 特殊处理  限定mbox内 且高度差不高于10
	var adaptdoms=$('#canvas').data('heightadaptdoms');
	if(!adaptdoms) adaptdoms=[];
	var domfatherid=dom.attr('fatherid');
	var sameTopDiff=0;
	if(domfatherid&&domfatherid!=''&&domfatherid!='canvas' && domfatherid!='site_footer'){
		if(adaptdoms && adaptdoms.length){
			for(var i=0;i<adaptdoms.length;i++){
				var adaptid=adaptdoms[i].id;
				if(dom.prop('id')!=adaptid){
					var adaptdomfatherid=$('#'+adaptid).attr('fatherid');
					if(adaptdomfatherid&&$('#'+adaptdomfatherid).is('[type=mbox]')){
						var adaptdomtop=$('#'+adaptid).ab_pos_cnter('top');
						var domtop=dom.ab_pos_cnter('top');
						if(Math.abs(adaptdomtop-domtop)<10){
							if(sameTopDiff<adaptdoms[i].diff){
								sameTopDiff=adaptdoms[i].diff;
							}
						}
					}
				}
			}
		}
		adaptdoms.push({id:dom.prop('id'),diff:adaptModuleAfter-adaptModuleBefore});
		$('#canvas').data('heightadaptdoms',adaptdoms);
	}
	

	var domPadding = parseInt(layer_first_div(dom).css('padding-top')) + parseInt(layer_first_div(dom).css('padding-bottom'));
	var domBorder = parseInt(layer_first_div(dom).css('border-top-width')) + parseInt(layer_first_div(dom).css('border-bottom-width'));
	var moduleLayerHeight = oldHeight || adaptModuleBefore+domPadding+domBorder;
	var moduleHeight = layer_first_div(dom).outerHeight();//模块取 wp-模块名_content层的高度
	var moduleWidth = dom.outerWidth();
	var moduleTop = dom.ab_pos_cnter('top');//获取画布坐标系y值
	
	var left_boundray = dom.ab_pos_cnter('left');//左右边界
	var right_boundray = left_boundray + dom.outerWidth();
	
	var offsetY = 0;//发生重合后往下压位置与高度自适应模块空出原有高度
	var pressList = new Array();//记录往下压的模块列表
	var wrapList = new Array();//包在高度自适应外层模块列表
	
	var minTop = 0,minId = 0;
	//页面上的模块可能有不同坐标系，但往下压多少像素的相对偏移量都相同的，获取这些偏移量
	var diffY = 0;//向下移动偏移量
	
	$("#canvas").find('.cstlayer,.full_column').each(function(){
		//判断页面模块是不是在高度自适应模块左右边界中,通栏模块肯定在,不需要判断
		resetPos($(this));
		var tmp_left = $(this).ab_pos_cnter('left');
		var tmp_top =$(this).ab_pos_cnter('top'),tmp_width = $(this).outerWidth(),tmp_height = $(this).outerHeight();
		if($(this).data('wopop_effect_oristyle')){
			var style=$(this).data('wopop_effect_oristyle');
			var topregexp=/(?:^|;)\s*top\s*:\s*(\d+)px/;
			var topmatches=style.match(topregexp);
			if(topmatches){
				var toppos=parseInt(topmatches[1]);
				tmp_top=tmp_top-parseInt($(this).css('top'))+toppos;
			}
		}
		if($(this).hasClass('cstlayer'))
		{
			if(tmp_left + tmp_width < left_boundray) return true;
			if(tmp_left > right_boundray) return true;
			if(dom.attr('id') == $(this).attr('id'))  return true;//自己除外
			
			//包在高度自适应模块外面的模块也要改变高度
			if((tmp_left <= left_boundray && tmp_left+tmp_width >= right_boundray) && (tmp_top <= moduleTop && tmp_top+tmp_height >= moduleTop+moduleLayerHeight))
			{
				wrapList.push($(this).attr('id'));
				return true;
			}
		}
		if($(this).parent().hasClass('full_content') || $(this).parent().hasClass('footer_content') || $(this).parent().hasClass('drop_box')) return true;//通栏和底部元素暂时不考虑

		if(tmp_top >= (moduleTop + moduleLayerHeight))
		{
			pressList.push($(this).attr('id'));
			if(minTop == 0) {minTop = tmp_top;minId = $(this).attr('id');}
			else
			{
				if(minTop > tmp_top) {minTop = tmp_top;minId = $(this).attr('id');}
			}
		}
	});
	//ceshi
	offsetY = $("#"+minId).ab_pos_cnter('top') - (moduleTop + moduleLayerHeight);

	if(pressList.length > 0 && (moduleTop + moduleHeight) >= minTop)
	{
		diffY = moduleTop + moduleHeight + offsetY - minTop;
		for(var i = 0;i < pressList.length;i++)
		{
			var theel=$("#"+pressList[i]);
			var eltop=parseInt(theel.ab_pos_cnter('top'))+diffY-sameTopDiff;
			theel.css('top',eltop+'px');
			//bug 5996 自适应导致模块style变化了，动画出错
			if(theel.data('wopop_effect_oristyle')){
				var style=theel.data('wopop_effect_oristyle');
				style=style.replace(/((?:^|;)\s*top\s*:\s*)\d+px;/,'$1'+eltop+'px;');
				theel.data('wopop_effect_oristyle',style);
			}
			var pressArrOld=theel.data('adaptpress');
			if(!pressArrOld) pressArrOld=[];
			var pressArr=[];
			for(var j=0;j<pressArrOld.length;j++){
				if(pressArrOld[j].id != dom.prop('id')) pressArr.push(pressArrOld[j]);
			}
			pressArr.push({id:dom.prop('id'),diffY:diffY-sameTopDiff});
			theel.data('adaptpress',pressArr);
		}
	}
	
	if(wrapList.length > 0)
	{
		for(var i = 0;i < wrapList.length;i++)
		{
			var diffH=moduleHeight-moduleLayerHeight;
			var theel=$("#"+wrapList[i]);
			theel.height($("#"+wrapList[i]).height()+(diffH));
			var wrapListPadding = parseInt(layer_first_div(theel).css('padding-top')) + parseInt(layer_first_div($("#"+wrapList[i])).css('padding-bottom'));
			var wrapListBorder = parseInt(layer_first_div(theel).css('border-top-width')) + parseInt(layer_first_div($("#"+wrapList[i])).css('border-bottom-width'));
			layer_first_div(theel).height(theel.height() - wrapListPadding - wrapListBorder);
			var wrapArrOld=theel.data('adaptwrap');
			if(!wrapArrOld) wrapArrOld=[];
			var wrapArr=[];
			for(var j=0;j<wrapArrOld.length;j++){
				if(wrapArrOld[j].id != dom.prop('id')) wrapArr.push(wrapArrOld[j]);
			}
			wrapArr.push({id:dom.prop('id'),diffH:diffH});
			theel.data('adaptwrap',wrapArr);
			// fixed bug#4119 - Add 'custom-listener-event'
			var events = theel.data("events") || {};
			if (events.hasOwnProperty("wrapmodheightadapt"))
				theel.triggerHandler("wrapmodheightadapt");
		}
	}
	
	if(dom.attr("type")=='fxdp'){
		dom.height(layer_first_div(dom).height() + domPadding + domBorder);
	}else{
		dom.height(layer_first_div(dom).height() + domPadding + domBorder);
	}
	var nowcanvheight=$('#canvas').height();
	if(nowcanvheight != canvheight) $('#canvas').css('height',canvheight);
	setTimeout(function(){
		scroll_container_adjust();
	},100);
	
}