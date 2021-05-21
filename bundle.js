/*! jQuery v2.2.4 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="2.2.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isPlainObject:function(a){var b;if("object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype||{},"isPrototypeOf"))return!1;for(b in a);return void 0===b||k.call(a,b)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=d.createElement("script"),b.text=a,d.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:h.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(d=e.call(arguments,2),f=function(){return a.apply(b||this,d.concat(e.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return h.call(b,a)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&f.parentNode&&(this.length=1,this[0]=f),this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?void 0!==c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?h.call(n(a),this[0]):h.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||n.uniqueSort(e),D.test(a)&&e.reverse()),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.removeEventListener("DOMContentLoaded",J),a.removeEventListener("load",J),n.ready()}n.ready.promise=function(b){return I||(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(n.ready):(d.addEventListener("DOMContentLoaded",J),a.addEventListener("load",J))),I.promise(b)},n.ready.promise();var K=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)K(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},L=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function M(){this.expando=n.expando+M.uid++}M.uid=1,M.prototype={register:function(a,b){var c=b||{};return a.nodeType?a[this.expando]=c:Object.defineProperty(a,this.expando,{value:c,writable:!0,configurable:!0}),a[this.expando]},cache:function(a){if(!L(a))return{};var b=a[this.expando];return b||(b={},L(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[b]=c;else for(d in b)e[d]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=a[this.expando];if(void 0!==f){if(void 0===b)this.register(a);else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in f?d=[b,e]:(d=e,d=d in f?[d]:d.match(G)||[])),c=d.length;while(c--)delete f[d[c]]}(void 0===b||n.isEmptyObject(f))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!n.isEmptyObject(b)}};var N=new M,O=new M,P=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Q=/[A-Z]/g;function R(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Q,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:P.test(c)?n.parseJSON(c):c;
}catch(e){}O.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return O.hasData(a)||N.hasData(a)},data:function(a,b,c){return O.access(a,b,c)},removeData:function(a,b){O.remove(a,b)},_data:function(a,b,c){return N.access(a,b,c)},_removeData:function(a,b){N.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=O.get(f),1===f.nodeType&&!N.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),R(f,d,e[d])));N.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){O.set(this,a)}):K(this,function(b){var c,d;if(f&&void 0===b){if(c=O.get(f,a)||O.get(f,a.replace(Q,"-$&").toLowerCase()),void 0!==c)return c;if(d=n.camelCase(a),c=O.get(f,d),void 0!==c)return c;if(c=R(f,d,void 0),void 0!==c)return c}else d=n.camelCase(a),this.each(function(){var c=O.get(this,d);O.set(this,d,b),a.indexOf("-")>-1&&void 0!==c&&O.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){O.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=N.get(a,b),c&&(!d||n.isArray(c)?d=N.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return N.get(a,c)||N.access(a,c,{empty:n.Callbacks("once memory").add(function(){N.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=N.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function W(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&T.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var X=/^(?:checkbox|radio)$/i,Y=/<([\w:-]+)/,Z=/^$|\/(?:java|ecma)script/i,$={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};$.optgroup=$.option,$.tbody=$.tfoot=$.colgroup=$.caption=$.thead,$.th=$.td;function _(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function aa(a,b){for(var c=0,d=a.length;d>c;c++)N.set(a[c],"globalEval",!b||N.get(b[c],"globalEval"))}var ba=/<|&#?\w+;/;function ca(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],o=0,p=a.length;p>o;o++)if(f=a[o],f||0===f)if("object"===n.type(f))n.merge(m,f.nodeType?[f]:f);else if(ba.test(f)){g=g||l.appendChild(b.createElement("div")),h=(Y.exec(f)||["",""])[1].toLowerCase(),i=$[h]||$._default,g.innerHTML=i[1]+n.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;n.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",o=0;while(f=m[o++])if(d&&n.inArray(f,d)>-1)e&&e.push(f);else if(j=n.contains(f.ownerDocument,f),g=_(l.appendChild(f),"script"),j&&aa(g),c){k=0;while(f=g[k++])Z.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var da=/^key/,ea=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,fa=/^([^.]*)(?:\.(.+)|)/;function ga(){return!0}function ha(){return!1}function ia(){try{return d.activeElement}catch(a){}}function ja(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ja(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ha;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return"undefined"!=typeof n&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(G)||[""],j=b.length;while(j--)h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.hasData(a)&&N.get(a);if(r&&(i=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&N.remove(a,"handle events")}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(N.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||d,e=c.documentElement,f=c.body,a.pageX=b.clientX+(e&&e.scrollLeft||f&&f.scrollLeft||0)-(e&&e.clientLeft||f&&f.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||f&&f.scrollTop||0)-(e&&e.clientTop||f&&f.clientTop||0)),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ea.test(f)?this.mouseHooks:da.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=d),3===a.target.nodeType&&(a.target=a.target.parentNode),h.filter?h.filter(a,g):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==ia()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===ia()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ga:ha):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:ha,isPropagationStopped:ha,isImmediatePropagationStopped:ha,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ga,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ga,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ga,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),n.fn.extend({on:function(a,b,c,d){return ja(this,a,b,c,d)},one:function(a,b,c,d){return ja(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=ha),this.each(function(){n.event.remove(this,a,c,b)})}});var ka=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,la=/<script|<style|<link/i,ma=/checked\s*(?:[^=]|=\s*.checked.)/i,na=/^true\/(.*)/,oa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function pa(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function qa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function ra(a){var b=na.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function sa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(N.hasData(a)&&(f=N.access(a),g=N.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}O.hasData(a)&&(h=O.access(a),i=n.extend({},h),O.set(b,i))}}function ta(a,b){var c=b.nodeName.toLowerCase();"input"===c&&X.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function ua(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&ma.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),ua(f,b,c,d)});if(o&&(e=ca(b,a[0].ownerDocument,!1,a,d),g=e.firstChild,1===e.childNodes.length&&(e=g),g||d)){for(h=n.map(_(e,"script"),qa),i=h.length;o>m;m++)j=e,m!==p&&(j=n.clone(j,!0,!0),i&&n.merge(h,_(j,"script"))),c.call(a[m],j,m);if(i)for(k=h[h.length-1].ownerDocument,n.map(h,ra),m=0;i>m;m++)j=h[m],Z.test(j.type||"")&&!N.access(j,"globalEval")&&n.contains(k,j)&&(j.src?n._evalUrl&&n._evalUrl(j.src):n.globalEval(j.textContent.replace(oa,"")))}return a}function va(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(_(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&aa(_(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(ka,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=_(h),f=_(a),d=0,e=f.length;e>d;d++)ta(f[d],g[d]);if(b)if(c)for(f=f||_(a),g=g||_(h),d=0,e=f.length;e>d;d++)sa(f[d],g[d]);else sa(a,h);return g=_(h,"script"),g.length>0&&aa(g,!i&&_(a,"script")),h},cleanData:function(a){for(var b,c,d,e=n.event.special,f=0;void 0!==(c=a[f]);f++)if(L(c)){if(b=c[N.expando]){if(b.events)for(d in b.events)e[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);c[N.expando]=void 0}c[O.expando]&&(c[O.expando]=void 0)}}}),n.fn.extend({domManip:ua,detach:function(a){return va(this,a,!0)},remove:function(a){return va(this,a)},text:function(a){return K(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.appendChild(a)}})},prepend:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(_(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return K(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!la.test(a)&&!$[(Y.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(_(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return ua(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(_(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),f=e.length-1,h=0;f>=h;h++)c=h===f?this:this.clone(!0),n(e[h])[b](c),g.apply(d,c.get());return this.pushStack(d)}});var wa,xa={HTML:"block",BODY:"block"};function ya(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function za(a){var b=d,c=xa[a];return c||(c=ya(a,b),"none"!==c&&c||(wa=(wa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=wa[0].contentDocument,b.write(),b.close(),c=ya(a,b),wa.detach()),xa[a]=c),c}var Aa=/^margin/,Ba=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ca=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Ea=d.documentElement;!function(){var b,c,e,f,g=d.createElement("div"),h=d.createElement("div");if(h.style){h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,g.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",g.appendChild(h);function i(){h.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",h.innerHTML="",Ea.appendChild(g);var d=a.getComputedStyle(h);b="1%"!==d.top,f="2px"===d.marginLeft,c="4px"===d.width,h.style.marginRight="50%",e="4px"===d.marginRight,Ea.removeChild(g)}n.extend(l,{pixelPosition:function(){return i(),b},boxSizingReliable:function(){return null==c&&i(),c},pixelMarginRight:function(){return null==c&&i(),e},reliableMarginLeft:function(){return null==c&&i(),f},reliableMarginRight:function(){var b,c=h.appendChild(d.createElement("div"));return c.style.cssText=h.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",h.style.width="1px",Ea.appendChild(g),b=!parseFloat(a.getComputedStyle(c).marginRight),Ea.removeChild(g),h.removeChild(c),b}})}}();function Fa(a,b,c){var d,e,f,g,h=a.style;return c=c||Ca(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Ba.test(g)&&Aa.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0!==g?g+"":g}function Ga(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Ha=/^(none|table(?!-c[ea]).+)/,Ia={position:"absolute",visibility:"hidden",display:"block"},Ja={letterSpacing:"0",fontWeight:"400"},Ka=["Webkit","O","Moz","ms"],La=d.createElement("div").style;function Ma(a){if(a in La)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ka.length;while(c--)if(a=Ka[c]+b,a in La)return a}function Na(a,b,c){var d=T.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Oa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Pa(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ca(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Fa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ba.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Oa(a,b,c||(g?"border":"content"),d,f)+"px"}function Qa(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=N.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=N.access(d,"olddisplay",za(d.nodeName)))):(e=V(d),"none"===c&&e||N.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Fa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=T.exec(c))&&e[1]&&(c=W(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Fa(a,b,d)),"normal"===e&&b in Ja&&(e=Ja[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Ha.test(n.css(a,"display"))&&0===a.offsetWidth?Da(a,Ia,function(){return Pa(a,b,d)}):Pa(a,b,d):void 0},set:function(a,c,d){var e,f=d&&Ca(a),g=d&&Oa(a,b,d,"border-box"===n.css(a,"boxSizing",!1,f),f);return g&&(e=T.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=n.css(a,b)),Na(a,c,g)}}}),n.cssHooks.marginLeft=Ga(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Fa(a,"marginLeft"))||a.getBoundingClientRect().left-Da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px":void 0}),n.cssHooks.marginRight=Ga(l.reliableMarginRight,function(a,b){return b?Da(a,{display:"inline-block"},Fa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Aa.test(a)||(n.cssHooks[a+b].set=Na)}),n.fn.extend({css:function(a,b){return K(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ca(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Qa(this,!0)},hide:function(){return Qa(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function Ra(a,b,c,d,e){return new Ra.prototype.init(a,b,c,d,e)}n.Tween=Ra,Ra.prototype={constructor:Ra,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ra.propHooks[this.prop];return a&&a.get?a.get(this):Ra.propHooks._default.get(this)},run:function(a){var b,c=Ra.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ra.propHooks._default.set(this),this}},Ra.prototype.init.prototype=Ra.prototype,Ra.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},Ra.propHooks.scrollTop=Ra.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=Ra.prototype.init,n.fx.step={};var Sa,Ta,Ua=/^(?:toggle|show|hide)$/,Va=/queueHooks$/;function Wa(){return a.setTimeout(function(){Sa=void 0}),Sa=n.now()}function Xa(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=U[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ya(a,b,c){for(var d,e=(_a.tweeners[b]||[]).concat(_a.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Za(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&V(a),q=N.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?N.get(a,"olddisplay")||za(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Ua.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?za(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=N.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;N.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ya(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function $a(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function _a(a,b,c){var d,e,f=0,g=_a.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Sa||Wa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:Sa||Wa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for($a(k,j.opts.specialEasing);g>f;f++)if(d=_a.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,Ya,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(_a,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return W(c.elem,a,T.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],_a.tweeners[c]=_a.tweeners[c]||[],_a.tweeners[c].unshift(b)},prefilters:[Za],prefilter:function(a,b){b?_a.prefilters.unshift(a):_a.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=_a(this,n.extend({},a),f);(e||N.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=N.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Va.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=N.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Xa(b,!0),a,d,e)}}),n.each({slideDown:Xa("show"),slideUp:Xa("hide"),slideToggle:Xa("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Sa=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Sa=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ta||(Ta=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(Ta),Ta=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=d.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var ab,bb=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return K(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ab:void 0)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)}}),ab={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=bb[b]||n.find.attr;bb[b]=function(a,b,d){var e,f;return d||(f=bb[b],bb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,bb[b]=f),e}});var cb=/^(?:input|select|textarea|button)$/i,db=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return K(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),
void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):cb.test(a.nodeName)||db.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var eb=/[\t\r\n\f]/g;function fb(a){return a.getAttribute&&a.getAttribute("class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,fb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,fb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,fb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=fb(this),b&&N.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":N.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+fb(c)+" ").replace(eb," ").indexOf(b)>-1)return!0;return!1}});var gb=/\r/g,hb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(gb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(hb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(n.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var ib=/^(?:focusinfocus|focusoutblur)$/;n.extend(n.event,{trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!ib.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),l=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},f||!o.trigger||o.trigger.apply(e,c)!==!1)){if(!f&&!o.noBubble&&!n.isWindow(e)){for(j=o.delegateType||q,ib.test(j+q)||(h=h.parentNode);h;h=h.parentNode)p.push(h),i=h;i===(e.ownerDocument||d)&&p.push(i.defaultView||i.parentWindow||a)}g=0;while((h=p[g++])&&!b.isPropagationStopped())b.type=g>1?j:o.bindType||q,m=(N.get(h,"events")||{})[b.type]&&N.get(h,"handle"),m&&m.apply(h,c),m=l&&h[l],m&&m.apply&&L(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=q,f||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!L(e)||l&&n.isFunction(e[q])&&!n.isWindow(e)&&(i=e[l],i&&(e[l]=null),n.event.triggered=q,e[q](),n.event.triggered=void 0,i&&(e[l]=i)),b.result}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b)}}),n.fn.extend({trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),l.focusin="onfocusin"in a,l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=N.access(d,b);e||d.addEventListener(a,c,!0),N.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=N.access(d,b)-1;e?N.access(d,b,e):(d.removeEventListener(a,c,!0),N.remove(d,b))}}});var jb=a.location,kb=n.now(),lb=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var mb=/#.*$/,nb=/([?&])_=[^&]*/,ob=/^(.*?):[ \t]*([^\r\n]*)$/gm,pb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,qb=/^(?:GET|HEAD)$/,rb=/^\/\//,sb={},tb={},ub="*/".concat("*"),vb=d.createElement("a");vb.href=jb.href;function wb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function xb(a,b,c,d){var e={},f=a===tb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function yb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function zb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Ab(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:jb.href,type:"GET",isLocal:pb.test(jb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":ub,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?yb(yb(a,n.ajaxSettings),b):yb(n.ajaxSettings,a)},ajaxPrefilter:wb(sb),ajaxTransport:wb(tb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m=n.ajaxSetup({},c),o=m.context||m,p=m.context&&(o.nodeType||o.jquery)?n(o):n.event,q=n.Deferred(),r=n.Callbacks("once memory"),s=m.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,getResponseHeader:function(a){var b;if(2===v){if(!h){h={};while(b=ob.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===v?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return v||(a=u[c]=u[c]||a,t[a]=b),this},overrideMimeType:function(a){return v||(m.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>v)for(b in a)s[b]=[s[b],a[b]];else x.always(a[x.status]);return this},abort:function(a){var b=a||w;return e&&e.abort(b),z(0,b),this}};if(q.promise(x).complete=r.add,x.success=x.done,x.error=x.fail,m.url=((b||m.url||jb.href)+"").replace(mb,"").replace(rb,jb.protocol+"//"),m.type=c.method||c.type||m.method||m.type,m.dataTypes=n.trim(m.dataType||"*").toLowerCase().match(G)||[""],null==m.crossDomain){j=d.createElement("a");try{j.href=m.url,j.href=j.href,m.crossDomain=vb.protocol+"//"+vb.host!=j.protocol+"//"+j.host}catch(y){m.crossDomain=!0}}if(m.data&&m.processData&&"string"!=typeof m.data&&(m.data=n.param(m.data,m.traditional)),xb(sb,m,c,x),2===v)return x;k=n.event&&m.global,k&&0===n.active++&&n.event.trigger("ajaxStart"),m.type=m.type.toUpperCase(),m.hasContent=!qb.test(m.type),f=m.url,m.hasContent||(m.data&&(f=m.url+=(lb.test(f)?"&":"?")+m.data,delete m.data),m.cache===!1&&(m.url=nb.test(f)?f.replace(nb,"$1_="+kb++):f+(lb.test(f)?"&":"?")+"_="+kb++)),m.ifModified&&(n.lastModified[f]&&x.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&x.setRequestHeader("If-None-Match",n.etag[f])),(m.data&&m.hasContent&&m.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",m.contentType),x.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+ub+"; q=0.01":""):m.accepts["*"]);for(l in m.headers)x.setRequestHeader(l,m.headers[l]);if(m.beforeSend&&(m.beforeSend.call(o,x,m)===!1||2===v))return x.abort();w="abort";for(l in{success:1,error:1,complete:1})x[l](m[l]);if(e=xb(tb,m,c,x)){if(x.readyState=1,k&&p.trigger("ajaxSend",[x,m]),2===v)return x;m.async&&m.timeout>0&&(i=a.setTimeout(function(){x.abort("timeout")},m.timeout));try{v=1,e.send(t,z)}catch(y){if(!(2>v))throw y;z(-1,y)}}else z(-1,"No Transport");function z(b,c,d,h){var j,l,t,u,w,y=c;2!==v&&(v=2,i&&a.clearTimeout(i),e=void 0,g=h||"",x.readyState=b>0?4:0,j=b>=200&&300>b||304===b,d&&(u=zb(m,x,d)),u=Ab(m,u,x,j),j?(m.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(n.lastModified[f]=w),w=x.getResponseHeader("etag"),w&&(n.etag[f]=w)),204===b||"HEAD"===m.type?y="nocontent":304===b?y="notmodified":(y=u.state,l=u.data,t=u.error,j=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),x.status=b,x.statusText=(c||y)+"",j?q.resolveWith(o,[l,y,x]):q.rejectWith(o,[x,y,t]),x.statusCode(s),s=void 0,k&&p.trigger(j?"ajaxSuccess":"ajaxError",[x,m,j?l:t]),r.fireWith(o,[x,y]),k&&(p.trigger("ajaxComplete",[x,m]),--n.active||n.event.trigger("ajaxStop")))}return x},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return!n.expr.filters.visible(a)},n.expr.filters.visible=function(a){return a.offsetWidth>0||a.offsetHeight>0||a.getClientRects().length>0};var Bb=/%20/g,Cb=/\[\]$/,Db=/\r?\n/g,Eb=/^(?:submit|button|image|reset|file)$/i,Fb=/^(?:input|select|textarea|keygen)/i;function Gb(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Cb.test(a)?d(a,e):Gb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Gb(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Gb(c,a[c],b,e);return d.join("&").replace(Bb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Fb.test(this.nodeName)&&!Eb.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Db,"\r\n")}}):{name:b.name,value:c.replace(Db,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Hb={0:200,1223:204},Ib=n.ajaxSettings.xhr();l.cors=!!Ib&&"withCredentials"in Ib,l.ajax=Ib=!!Ib,n.ajaxTransport(function(b){var c,d;return l.cors||Ib&&!b.crossDomain?{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Hb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=n("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Jb=[],Kb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Jb.pop()||n.expando+"_"+kb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Kb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Kb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Kb,"$1"+e):b.jsonp!==!1&&(b.url+=(lb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Jb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ca([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var Lb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Lb)return Lb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function Mb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(e=d.getBoundingClientRect(),c=Mb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ea})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;n.fn[a]=function(d){return K(this,function(a,d,e){var f=Mb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ga(l.pixelPosition,function(a,c){return c?(c=Fa(a,b),Ba.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return K(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)},size:function(){return this.length}}),n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Nb=a.jQuery,Ob=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Ob),b&&a.jQuery===n&&(a.jQuery=Nb),n},b||(a.jQuery=a.$=n),n});
/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){if(a(b.target).is(this))return b.handleObj.handler.apply(this,arguments)}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.7",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a("#"===f?[]:f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.7",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c).prop(c,!0)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c).prop(c,!1))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target).closest(".btn");b.call(d,"toggle"),a(c.target).is('input[type="radio"], input[type="checkbox"]')||(c.preventDefault(),d.is("input,button")?d.trigger("focus"):d.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(a>this.$items.length-1||a<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){if(!this.sliding)return this.slide("next")},c.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.7",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.7",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){document===a.target||this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);if(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),!c.isInStateTrue())return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element&&e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);if(this.$element.trigger(g),!g.isDefaultPrevented())return f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=window.SVGElement&&c instanceof window.SVGElement,g=d?{top:0,left:0}:f?null:b.offset(),h={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},i=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,h,i,g)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null,a.$element=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.7",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.7",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){
this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.7",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return e<c&&"top";if("bottom"==this.affixed)return null!=c?!(e+this.unpin<=f.top)&&"bottom":!(e+g<=a-d)&&"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&e<=c?"top":null!=d&&i+j>=a-d&&"bottom"},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
R('node_modules/bobril/index',function(require, module, exports){
// Bobril.Core
"use strict";
;
if (typeof DEBUG === "undefined")
    DEBUG = true;
// PureFuncs: assert, isArray, isObject, flatten
function assert(shoudBeTrue, messageIfFalse) {
    if (DEBUG && !shoudBeTrue)
        throw Error(messageIfFalse || "assertion failed");
}
exports.isArray = Array.isArray;
function createTextNode(content) {
    return document.createTextNode(content);
}
function createEl(name) {
    return document.createElement(name);
}
function null2undefined(value) {
    return value === null ? undefined : value;
}
var hasTextContent = "textContent" in createTextNode("");
function isNumber(val) {
    return typeof val == "number";
}
exports.isNumber = isNumber;
function isString(val) {
    return typeof val == "string";
}
exports.isString = isString;
function isFunction(val) {
    return typeof val == "function";
}
exports.isFunction = isFunction;
function isObject(val) {
    return typeof val === "object";
}
exports.isObject = isObject;
if (Object.assign == null) {
    Object.assign = function assign(target) {
        var _sources = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _sources[_i - 1] = arguments[_i];
        }
        if (target == null)
            throw new TypeError('Target in assign cannot be undefined or null');
        var totalArgs = arguments.length;
        for (var i_1 = 1; i_1 < totalArgs; i_1++) {
            var source = arguments[i_1];
            if (source == null)
                continue;
            var keys = Object.keys(source);
            var totalKeys = keys.length;
            for (var j_1 = 0; j_1 < totalKeys; j_1++) {
                var key = keys[j_1];
                target[key] = source[key];
            }
        }
        return target;
    };
}
exports.assign = Object.assign;
function flatten(a) {
    if (!exports.isArray(a)) {
        if (a == null || a === false || a === true)
            return [];
        return [a];
    }
    a = a.slice(0);
    var alen = a.length;
    for (var i_2 = 0; i_2 < alen;) {
        var item = a[i_2];
        if (exports.isArray(item)) {
            a.splice.apply(a, [i_2, 1].concat(item));
            alen = a.length;
            continue;
        }
        if (item == null || item === false || item === true) {
            a.splice(i_2, 1);
            alen--;
            continue;
        }
        i_2++;
    }
    return a;
}
exports.flatten = flatten;
var inSvg = false;
var inNotFocusable = false;
var updateCall = [];
var updateInstance = [];
var setValueCallback = function (el, _node, newValue, oldValue) {
    if (newValue !== oldValue)
        el[tvalue] = newValue;
};
function setSetValue(callback) {
    var prev = setValueCallback;
    setValueCallback = callback;
    return prev;
}
exports.setSetValue = setSetValue;
function newHashObj() {
    return Object.create(null);
}
var vendors = ["Webkit", "Moz", "ms", "O"];
var testingDivStyle = document.createElement("div").style;
function testPropExistence(name) {
    return isString(testingDivStyle[name]);
}
var mapping = newHashObj();
var isUnitlessNumber = {
    boxFlex: true,
    boxFlexGroup: true,
    columnCount: true,
    flex: true,
    flexGrow: true,
    flexNegative: true,
    flexPositive: true,
    flexShrink: true,
    fontWeight: true,
    lineClamp: true,
    lineHeight: true,
    opacity: true,
    order: true,
    orphans: true,
    strokeDashoffset: true,
    widows: true,
    zIndex: true,
    zoom: true,
};
function renamer(newName) {
    return function (style, value, oldName) {
        style[newName] = value;
        style[oldName] = undefined;
    };
}
;
function renamerpx(newName) {
    return function (style, value, oldName) {
        if (isNumber(value)) {
            style[newName] = value + "px";
        }
        else {
            style[newName] = value;
        }
        style[oldName] = undefined;
    };
}
function pxadder(style, value, name) {
    if (isNumber(value))
        style[name] = value + "px";
}
function ieVersion() {
    return document.documentMode;
}
exports.ieVersion = ieVersion;
function shimStyle(newValue) {
    var k = Object.keys(newValue);
    for (var i = 0, l = k.length; i < l; i++) {
        var ki = k[i];
        var mi = mapping[ki];
        var vi = newValue[ki];
        if (vi === undefined)
            continue; // don't want to map undefined
        if (mi === undefined) {
            if (DEBUG) {
                if (ki === "float" && window.console && console.error)
                    console.error("In style instead of 'float' you have to use 'cssFloat'");
                if (/-/.test(ki) && window.console && console.warn)
                    console.warn("Style property " + ki + " contains dash (must use JS props instead of css names)");
            }
            if (testPropExistence(ki)) {
                mi = (isUnitlessNumber[ki] === true) ? null : pxadder;
            }
            else {
                var titleCaseKi = ki.replace(/^\w/, function (match) { return match.toUpperCase(); });
                for (var j = 0; j < vendors.length; j++) {
                    if (testPropExistence(vendors[j] + titleCaseKi)) {
                        mi = ((isUnitlessNumber[ki] === true) ? renamer : renamerpx)(vendors[j] + titleCaseKi);
                        break;
                    }
                }
                if (mi === undefined) {
                    mi = (isUnitlessNumber[ki] === true) ? null : pxadder;
                    if (DEBUG && window.console && console.warn)
                        console.warn("Style property " + ki + " is not supported in this browser");
                }
            }
            mapping[ki] = mi;
        }
        if (mi !== null)
            mi(newValue, vi, ki);
    }
}
function removeProperty(s, name) {
    s[name] = "";
}
function updateStyle(el, newStyle, oldStyle) {
    var s = el.style;
    if (isObject(newStyle)) {
        shimStyle(newStyle);
        var rule;
        if (isObject(oldStyle)) {
            for (rule in oldStyle) {
                if (!(rule in newStyle))
                    removeProperty(s, rule);
            }
            for (rule in newStyle) {
                var v = newStyle[rule];
                if (v !== undefined) {
                    if (oldStyle[rule] !== v)
                        s[rule] = v;
                }
                else {
                    removeProperty(s, rule);
                }
            }
        }
        else {
            if (oldStyle)
                s.cssText = "";
            for (rule in newStyle) {
                var v = newStyle[rule];
                if (v !== undefined)
                    s[rule] = v;
            }
        }
    }
    else if (newStyle) {
        s.cssText = newStyle;
    }
    else {
        if (isObject(oldStyle)) {
            for (rule in oldStyle) {
                removeProperty(s, rule);
            }
        }
        else if (oldStyle) {
            s.cssText = "";
        }
    }
}
function setClassName(el, className) {
    if (inSvg)
        el.setAttribute("class", className);
    else
        el.className = className;
}
var focusableTag = /^input$|^select$|^textarea$|^button$/;
var tabindexStr = "tabindex";
function updateElement(n, el, newAttrs, oldAttrs, notFocusable) {
    var attrName, newAttr, oldAttr, valueOldAttr, valueNewAttr;
    var wasTabindex = false;
    if (newAttrs != null)
        for (attrName in newAttrs) {
            newAttr = newAttrs[attrName];
            oldAttr = oldAttrs[attrName];
            if (notFocusable && attrName === tabindexStr) {
                newAttr = -1;
                wasTabindex = true;
            }
            else if (attrName === tvalue && !inSvg) {
                if (isFunction(newAttr)) {
                    oldAttrs[bvalue] = newAttr;
                    newAttr = newAttr();
                }
                valueOldAttr = oldAttr;
                valueNewAttr = newAttr;
                oldAttrs[attrName] = newAttr;
                continue;
            }
            if (oldAttr !== newAttr) {
                oldAttrs[attrName] = newAttr;
                if (inSvg) {
                    if (attrName === "href")
                        el.setAttributeNS("http://www.w3.org/1999/xlink", "href", newAttr);
                    else
                        el.setAttribute(attrName, newAttr);
                }
                else if (attrName in el && !(attrName === "list" || attrName === "form")) {
                    el[attrName] = newAttr;
                }
                else
                    el.setAttribute(attrName, newAttr);
            }
        }
    if (notFocusable && !wasTabindex && n.tag && focusableTag.test(n.tag)) {
        el.setAttribute(tabindexStr, "-1");
        oldAttrs[tabindexStr] = -1;
    }
    if (newAttrs == null) {
        for (attrName in oldAttrs) {
            if (oldAttrs[attrName] !== undefined) {
                if (notFocusable && attrName === tabindexStr)
                    continue;
                if (attrName === bvalue)
                    continue;
                oldAttrs[attrName] = undefined;
                el.removeAttribute(attrName);
            }
        }
    }
    else {
        for (attrName in oldAttrs) {
            if (oldAttrs[attrName] !== undefined && !(attrName in newAttrs)) {
                if (notFocusable && attrName === tabindexStr)
                    continue;
                if (attrName === bvalue)
                    continue;
                oldAttrs[attrName] = undefined;
                el.removeAttribute(attrName);
            }
        }
    }
    if (valueNewAttr !== undefined) {
        setValueCallback(el, n, valueNewAttr, valueOldAttr);
    }
    return oldAttrs;
}
function pushInitCallback(c) {
    var cc = c.component;
    if (cc) {
        var fn = cc.postInitDom;
        if (fn) {
            updateCall.push(fn);
            updateInstance.push(c);
        }
    }
}
function pushUpdateCallback(c) {
    var cc = c.component;
    if (cc) {
        var fn = cc.postUpdateDom;
        if (fn) {
            updateCall.push(fn);
            updateInstance.push(c);
        }
        fn = cc.postUpdateDomEverytime;
        if (fn) {
            updateCall.push(fn);
            updateInstance.push(c);
        }
    }
}
function pushUpdateEverytimeCallback(c) {
    var cc = c.component;
    if (cc) {
        var fn = cc.postUpdateDomEverytime;
        if (fn) {
            updateCall.push(fn);
            updateInstance.push(c);
        }
    }
}
function findCfg(parent) {
    var cfg;
    while (parent) {
        cfg = parent.cfg;
        if (cfg !== undefined)
            break;
        if (parent.ctx) {
            cfg = parent.ctx.cfg;
            break;
        }
        parent = parent.parent;
    }
    return cfg;
}
function setRef(ref, value) {
    if (ref == null)
        return;
    if (isFunction(ref)) {
        ref(value);
        return;
    }
    var ctx = ref[0];
    var refs = ctx.refs;
    if (refs == null) {
        refs = newHashObj();
        ctx.refs = refs;
    }
    refs[ref[1]] = value;
}
var focusRootStack = [];
var focusRootTop = null;
function registerFocusRoot(ctx) {
    focusRootStack.push(ctx.me);
    addDisposable(ctx, unregisterFocusRoot);
    ignoreShouldChange();
}
exports.registerFocusRoot = registerFocusRoot;
function unregisterFocusRoot(ctx) {
    var idx = focusRootStack.indexOf(ctx.me);
    if (idx !== -1) {
        focusRootStack.splice(idx, 1);
        ignoreShouldChange();
    }
}
exports.unregisterFocusRoot = unregisterFocusRoot;
function createNode(n, parentNode, createInto, createBefore) {
    var c = {
        tag: n.tag,
        key: n.key,
        ref: n.ref,
        className: n.className,
        style: n.style,
        attrs: n.attrs,
        children: n.children,
        component: n.component,
        data: n.data,
        cfg: n.cfg,
        parent: parentNode,
        element: undefined,
        ctx: undefined
    };
    var backupInSvg = inSvg;
    var backupInNotFocusable = inNotFocusable;
    var component = c.component;
    var el;
    setRef(c.ref, c);
    if (component) {
        var ctx = { data: c.data || {}, me: c, cfg: findCfg(parentNode) };
        c.ctx = ctx;
        if (component.init) {
            component.init(ctx, c);
        }
        if (component.render) {
            component.render(ctx, c);
        }
    }
    var tag = c.tag;
    var children = c.children;
    var inSvgForeignObject = false;
    if (isNumber(children))
        children = "" + children;
    if (tag === undefined) {
        if (isString(children)) {
            el = createTextNode(children);
            c.element = el;
            createInto.insertBefore(el, createBefore);
        }
        else {
            createChildren(c, createInto, createBefore);
        }
        if (component) {
            if (component.postRender) {
                component.postRender(c.ctx, c);
            }
            pushInitCallback(c);
        }
        return c;
    }
    else if (tag === "/") {
        var htmltext = children;
        if (htmltext === "") {
        }
        else if (createBefore == null) {
            var before = createInto.lastChild;
            createInto.insertAdjacentHTML("beforeend", htmltext);
            c.element = [];
            if (before) {
                before = before.nextSibling;
            }
            else {
                before = createInto.firstChild;
            }
            while (before) {
                c.element.push(before);
                before = before.nextSibling;
            }
        }
        else {
            el = createBefore;
            var elprev = createBefore.previousSibling;
            var removeEl = false;
            var parent = createInto;
            if (!el.insertAdjacentHTML) {
                el = parent.insertBefore(createEl("i"), el);
                removeEl = true;
            }
            el.insertAdjacentHTML("beforebegin", htmltext);
            if (elprev) {
                elprev = elprev.nextSibling;
            }
            else {
                elprev = parent.firstChild;
            }
            var newElements = [];
            while (elprev !== el) {
                newElements.push(elprev);
                elprev = elprev.nextSibling;
            }
            c.element = newElements;
            if (removeEl) {
                parent.removeChild(el);
            }
        }
        if (component) {
            if (component.postRender) {
                component.postRender(c.ctx, c);
            }
            pushInitCallback(c);
        }
        return c;
    }
    else if (inSvg || tag === "svg") {
        el = document.createElementNS("http://www.w3.org/2000/svg", tag);
        inSvgForeignObject = tag === "foreignObject";
        inSvg = !inSvgForeignObject;
    }
    else if (!el) {
        el = createEl(tag);
    }
    createInto.insertBefore(el, createBefore);
    c.element = el;
    createChildren(c, el, null);
    if (component) {
        if (component.postRender) {
            component.postRender(c.ctx, c);
        }
    }
    if (inNotFocusable && focusRootTop === c)
        inNotFocusable = false;
    if (inSvgForeignObject)
        inSvg = true;
    if (c.attrs || inNotFocusable)
        c.attrs = updateElement(c, el, c.attrs, {}, inNotFocusable);
    if (c.style)
        updateStyle(el, c.style, undefined);
    var className = c.className;
    if (className)
        setClassName(el, className);
    inSvg = backupInSvg;
    inNotFocusable = backupInNotFocusable;
    pushInitCallback(c);
    return c;
}
exports.createNode = createNode;
function normalizeNode(n) {
    if (n === false || n === true || n === null)
        return undefined;
    if (isString(n)) {
        return { children: n };
    }
    if (isNumber(n)) {
        return { children: "" + n };
    }
    return n;
}
function createChildren(c, createInto, createBefore) {
    var ch = c.children;
    if (!ch)
        return;
    if (!exports.isArray(ch)) {
        if (isString(ch)) {
            if (hasTextContent) {
                createInto.textContent = ch;
            }
            else {
                createInto.innerText = ch;
            }
            return;
        }
        ch = [ch];
    }
    ch = ch.slice(0);
    var i = 0, l = ch.length;
    while (i < l) {
        var item = ch[i];
        if (exports.isArray(item)) {
            ch.splice.apply(ch, [i, 1].concat(item));
            l = ch.length;
            continue;
        }
        item = normalizeNode(item);
        if (item == null) {
            ch.splice(i, 1);
            l--;
            continue;
        }
        ch[i] = createNode(item, c, createInto, createBefore);
        i++;
    }
    c.children = ch;
}
function destroyNode(c) {
    setRef(c.ref, null);
    var ch = c.children;
    if (exports.isArray(ch)) {
        for (var i_3 = 0, l = ch.length; i_3 < l; i_3++) {
            destroyNode(ch[i_3]);
        }
    }
    var component = c.component;
    if (component) {
        var ctx = c.ctx;
        if (component.destroy)
            component.destroy(ctx, c, c.element);
        var disposables = ctx.disposables;
        if (exports.isArray(disposables)) {
            for (var i_4 = disposables.length; i_4-- > 0;) {
                var d = disposables[i_4];
                if (isFunction(d))
                    d(ctx);
                else
                    d.dispose();
            }
        }
    }
}
function addDisposable(ctx, disposable) {
    var disposables = ctx.disposables;
    if (disposables == null) {
        disposables = [];
        ctx.disposables = disposables;
    }
    disposables.push(disposable);
}
exports.addDisposable = addDisposable;
function removeNodeRecursive(c) {
    var el = c.element;
    if (exports.isArray(el)) {
        var pa = el[0].parentNode;
        if (pa) {
            for (var i_5 = 0; i_5 < el.length; i_5++) {
                pa.removeChild(el[i_5]);
            }
        }
    }
    else if (el != null) {
        var p = el.parentNode;
        if (p)
            p.removeChild(el);
    }
    else {
        var ch = c.children;
        if (exports.isArray(ch)) {
            for (var i = 0, l = ch.length; i < l; i++) {
                removeNodeRecursive(ch[i]);
            }
        }
    }
}
function removeNode(c) {
    destroyNode(c);
    removeNodeRecursive(c);
}
var roots = newHashObj();
function nodeContainsNode(c, n, resIndex, res) {
    var el = c.element;
    var ch = c.children;
    if (exports.isArray(el)) {
        for (var ii = 0; ii < el.length; ii++) {
            if (el[ii] === n) {
                res.push(c);
                if (exports.isArray(ch)) {
                    return ch;
                }
                return null;
            }
        }
    }
    else if (el == null) {
        if (exports.isArray(ch)) {
            for (var i = 0; i < ch.length; i++) {
                var result = nodeContainsNode(ch[i], n, resIndex, res);
                if (result !== undefined) {
                    res.splice(resIndex, 0, c);
                    return result;
                }
            }
        }
    }
    else if (el === n) {
        res.push(c);
        if (exports.isArray(ch)) {
            return ch;
        }
        return null;
    }
    return undefined;
}
function vdomPath(n) {
    var res = [];
    if (n == null)
        return res;
    var rootIds = Object.keys(roots);
    var rootElements = rootIds.map(function (i) { return roots[i].e || document.body; });
    var nodeStack = [];
    rootFound: while (n) {
        for (var j = 0; j < rootElements.length; j++) {
            if (n === rootElements[j])
                break rootFound;
        }
        nodeStack.push(n);
        n = n.parentNode;
    }
    if (!n || nodeStack.length === 0)
        return res;
    var currentCacheArray = null;
    var currentNode = nodeStack.pop();
    rootFound2: for (j = 0; j < rootElements.length; j++) {
        if (n === rootElements[j]) {
            var rc = roots[rootIds[j]].c;
            for (var k = 0; k < rc.length; k++) {
                var rck = rc[k];
                var findResult = nodeContainsNode(rck, currentNode, res.length, res);
                if (findResult !== undefined) {
                    currentCacheArray = findResult;
                    break rootFound2;
                }
            }
        }
    }
    subtreeSearch: while (nodeStack.length) {
        currentNode = nodeStack.pop();
        if (currentCacheArray && currentCacheArray.length)
            for (var i = 0, l = currentCacheArray.length; i < l; i++) {
                var bn = currentCacheArray[i];
                var findResult = nodeContainsNode(bn, currentNode, res.length, res);
                if (findResult !== undefined) {
                    currentCacheArray = findResult;
                    continue subtreeSearch;
                }
            }
        res.push(null);
        break;
    }
    return res;
}
exports.vdomPath = vdomPath;
// PureFuncs: deref, getDomNode
function deref(n) {
    var p = vdomPath(n);
    var currentNode = null;
    while (currentNode === null) {
        currentNode = p.pop();
    }
    return currentNode;
}
exports.deref = deref;
function finishUpdateNode(n, c, component) {
    if (component) {
        if (component.postRender) {
            component.postRender(c.ctx, n, c);
        }
    }
    c.data = n.data;
    pushUpdateCallback(c);
}
function updateNode(n, c, createInto, createBefore, deepness) {
    var component = n.component;
    var backupInSvg = inSvg;
    var backupInNotFocusable = inNotFocusable;
    var bigChange = false;
    var ctx = c.ctx;
    if (component && ctx != null) {
        if (ctx[ctxInvalidated] === frameCounter) {
            deepness = Math.max(deepness, ctx[ctxDeepness]);
        }
        if (component.id !== c.component.id) {
            bigChange = true;
        }
        else {
            if (c.parent != undefined)
                ctx.cfg = findCfg(c.parent);
            if (component.shouldChange)
                if (!component.shouldChange(ctx, n, c) && !ignoringShouldChange) {
                    if (exports.isArray(c.children)) {
                        if (c.tag === "svg") {
                            inSvg = true;
                        }
                        else if (inSvg && c.tag === "foreignObject")
                            inSvg = false;
                        if (inNotFocusable && focusRootTop === c)
                            inNotFocusable = false;
                        selectedUpdate(c.children, c.element || createInto, c.element != null ? null : createBefore);
                        inSvg = backupInSvg;
                        inNotFocusable = backupInNotFocusable;
                    }
                    pushUpdateEverytimeCallback(c);
                    return c;
                }
            ctx.data = n.data || {};
            c.component = component;
            if (component.render) {
                n = exports.assign({}, n); // need to clone me because it should not be modified for next updates
                component.render(ctx, n, c);
            }
            c.cfg = n.cfg;
        }
    }
    if (DEBUG) {
        if (!((n.ref == null && c.ref == null) ||
            ((n.ref != null && c.ref != null && (isFunction(n.ref) || isFunction(c.ref) ||
                n.ref[0] === c.ref[0] && n.ref[1] === c.ref[1]))))) {
            if (window.console && console.warn)
                console.warn("ref changed in child in update");
        }
    }
    var newChildren = n.children;
    var cachedChildren = c.children;
    var tag = n.tag;
    if (isNumber(newChildren)) {
        newChildren = "" + newChildren;
    }
    if (bigChange || (component && ctx == null)) {
    }
    else if (tag === "/") {
        if (c.tag === "/" && cachedChildren === newChildren) {
            finishUpdateNode(n, c, component);
            return c;
        }
    }
    else if (tag === c.tag) {
        if (tag === undefined) {
            if (isString(newChildren) && isString(cachedChildren)) {
                if (newChildren !== cachedChildren) {
                    var el = c.element;
                    if (hasTextContent) {
                        el.textContent = newChildren;
                    }
                    else {
                        el.nodeValue = newChildren;
                    }
                    c.children = newChildren;
                }
            }
            else {
                if (inNotFocusable && focusRootTop === c)
                    inNotFocusable = false;
                if (deepness <= 0) {
                    if (exports.isArray(cachedChildren))
                        selectedUpdate(c.children, createInto, createBefore);
                }
                else {
                    c.children = updateChildren(createInto, newChildren, cachedChildren, c, createBefore, deepness - 1);
                }
                inSvg = backupInSvg;
                inNotFocusable = backupInNotFocusable;
            }
            finishUpdateNode(n, c, component);
            return c;
        }
        else {
            var inSvgForeignObject = false;
            if (tag === "svg") {
                inSvg = true;
            }
            else if (inSvg && tag === "foreignObject") {
                inSvgForeignObject = true;
                inSvg = false;
            }
            if (inNotFocusable && focusRootTop === c)
                inNotFocusable = false;
            var el = c.element;
            if ((isString(newChildren)) && !exports.isArray(cachedChildren)) {
                if (newChildren !== cachedChildren) {
                    if (hasTextContent) {
                        el.textContent = newChildren;
                    }
                    else {
                        el.innerText = newChildren;
                    }
                    cachedChildren = newChildren;
                }
            }
            else {
                if (deepness <= 0) {
                    if (exports.isArray(cachedChildren))
                        selectedUpdate(c.children, el, createBefore);
                }
                else {
                    cachedChildren = updateChildren(el, newChildren, cachedChildren, c, null, deepness - 1);
                }
            }
            c.children = cachedChildren;
            if (inSvgForeignObject)
                inSvg = true;
            finishUpdateNode(n, c, component);
            if (c.attrs || n.attrs || inNotFocusable)
                c.attrs = updateElement(c, el, n.attrs, c.attrs || {}, inNotFocusable);
            updateStyle(el, n.style, c.style);
            c.style = n.style;
            var className = n.className;
            if (className !== c.className) {
                setClassName(el, className || "");
                c.className = className;
            }
            inSvg = backupInSvg;
            inNotFocusable = backupInNotFocusable;
            return c;
        }
    }
    var parEl = c.element;
    if (exports.isArray(parEl))
        parEl = parEl[0];
    if (parEl == null)
        parEl = createInto;
    else
        parEl = parEl.parentNode;
    var r = createNode(n, c.parent, parEl, getDomNode(c));
    removeNode(c);
    return r;
}
exports.updateNode = updateNode;
function getDomNode(c) {
    var el = c.element;
    if (el != null) {
        if (exports.isArray(el))
            return el[0];
        return el;
    }
    var ch = c.children;
    if (!exports.isArray(ch))
        return null;
    for (var i = 0; i < ch.length; i++) {
        el = getDomNode(ch[i]);
        if (el)
            return el;
    }
    return null;
}
exports.getDomNode = getDomNode;
function findNextNode(a, i, len, def) {
    while (++i < len) {
        var ai = a[i];
        if (ai == null)
            continue;
        var n = getDomNode(ai);
        if (n != null)
            return n;
    }
    return def;
}
function callPostCallbacks() {
    var count = updateInstance.length;
    for (var i = 0; i < count; i++) {
        var n = updateInstance[i];
        updateCall[i].call(n.component, n.ctx, n, n.element);
    }
    updateCall = [];
    updateInstance = [];
}
exports.callPostCallbacks = callPostCallbacks;
function updateNodeInUpdateChildren(newNode, cachedChildren, cachedIndex, cachedLength, createBefore, element, deepness) {
    cachedChildren[cachedIndex] = updateNode(newNode, cachedChildren[cachedIndex], element, findNextNode(cachedChildren, cachedIndex, cachedLength, createBefore), deepness);
}
function reorderInUpdateChildrenRec(c, element, before) {
    var el = c.element;
    if (el != null) {
        if (exports.isArray(el)) {
            for (var i = 0; i < el.length; i++) {
                element.insertBefore(el[i], before);
            }
        }
        else
            element.insertBefore(el, before);
        return;
    }
    var ch = c.children;
    if (!exports.isArray(ch))
        return;
    for (var i = 0; i < ch.length; i++) {
        reorderInUpdateChildrenRec(ch[i], element, before);
    }
}
function reorderInUpdateChildren(cachedChildren, cachedIndex, cachedLength, createBefore, element) {
    var before = findNextNode(cachedChildren, cachedIndex, cachedLength, createBefore);
    var cur = cachedChildren[cachedIndex];
    var what = getDomNode(cur);
    if (what != null && what !== before) {
        reorderInUpdateChildrenRec(cur, element, before);
    }
}
function reorderAndUpdateNodeInUpdateChildren(newNode, cachedChildren, cachedIndex, cachedLength, createBefore, element, deepness) {
    var before = findNextNode(cachedChildren, cachedIndex, cachedLength, createBefore);
    var cur = cachedChildren[cachedIndex];
    var what = getDomNode(cur);
    if (what != null && what !== before) {
        reorderInUpdateChildrenRec(cur, element, before);
    }
    cachedChildren[cachedIndex] = updateNode(newNode, cur, element, before, deepness);
}
function updateChildren(element, newChildren, cachedChildren, parentNode, createBefore, deepness) {
    if (newChildren == null)
        newChildren = [];
    if (!exports.isArray(newChildren)) {
        newChildren = [newChildren];
    }
    if (cachedChildren == null)
        cachedChildren = [];
    if (!exports.isArray(cachedChildren)) {
        if (element.firstChild)
            element.removeChild(element.firstChild);
        cachedChildren = [];
    }
    var newCh = newChildren;
    newCh = newCh.slice(0);
    var newLength = newCh.length;
    var newIndex;
    for (newIndex = 0; newIndex < newLength;) {
        var item = newCh[newIndex];
        if (exports.isArray(item)) {
            newCh.splice.apply(newCh, [newIndex, 1].concat(item));
            newLength = newCh.length;
            continue;
        }
        item = normalizeNode(item);
        if (item == null) {
            newCh.splice(newIndex, 1);
            newLength--;
            continue;
        }
        newCh[newIndex] = item;
        newIndex++;
    }
    return updateChildrenCore(element, newCh, cachedChildren, parentNode, createBefore, deepness);
}
exports.updateChildren = updateChildren;
function updateChildrenCore(element, newChildren, cachedChildren, parentNode, createBefore, deepness) {
    var newEnd = newChildren.length;
    var cachedLength = cachedChildren.length;
    var cachedEnd = cachedLength;
    var newIndex = 0;
    var cachedIndex = 0;
    while (newIndex < newEnd && cachedIndex < cachedEnd) {
        if (newChildren[newIndex].key === cachedChildren[cachedIndex].key) {
            updateNodeInUpdateChildren(newChildren[newIndex], cachedChildren, cachedIndex, cachedLength, createBefore, element, deepness);
            newIndex++;
            cachedIndex++;
            continue;
        }
        while (true) {
            if (newChildren[newEnd - 1].key === cachedChildren[cachedEnd - 1].key) {
                newEnd--;
                cachedEnd--;
                updateNodeInUpdateChildren(newChildren[newEnd], cachedChildren, cachedEnd, cachedLength, createBefore, element, deepness);
                if (newIndex < newEnd && cachedIndex < cachedEnd)
                    continue;
            }
            break;
        }
        if (newIndex < newEnd && cachedIndex < cachedEnd) {
            if (newChildren[newIndex].key === cachedChildren[cachedEnd - 1].key) {
                cachedChildren.splice(cachedIndex, 0, cachedChildren[cachedEnd - 1]);
                cachedChildren.splice(cachedEnd, 1);
                reorderAndUpdateNodeInUpdateChildren(newChildren[newIndex], cachedChildren, cachedIndex, cachedLength, createBefore, element, deepness);
                newIndex++;
                cachedIndex++;
                continue;
            }
            if (newChildren[newEnd - 1].key === cachedChildren[cachedIndex].key) {
                cachedChildren.splice(cachedEnd, 0, cachedChildren[cachedIndex]);
                cachedChildren.splice(cachedIndex, 1);
                cachedEnd--;
                newEnd--;
                reorderAndUpdateNodeInUpdateChildren(newChildren[newEnd], cachedChildren, cachedEnd, cachedLength, createBefore, element, deepness);
                continue;
            }
        }
        break;
    }
    if (cachedIndex === cachedEnd) {
        if (newIndex === newEnd) {
            return cachedChildren;
        }
        // Only work left is to add new nodes
        while (newIndex < newEnd) {
            cachedChildren.splice(cachedIndex, 0, createNode(newChildren[newIndex], parentNode, element, findNextNode(cachedChildren, cachedIndex - 1, cachedLength, createBefore)));
            cachedIndex++;
            cachedEnd++;
            cachedLength++;
            newIndex++;
        }
        return cachedChildren;
    }
    if (newIndex === newEnd) {
        // Only work left is to remove old nodes
        while (cachedIndex < cachedEnd) {
            cachedEnd--;
            removeNode(cachedChildren[cachedEnd]);
            cachedChildren.splice(cachedEnd, 1);
        }
        return cachedChildren;
    }
    // order of keyed nodes ware changed => reorder keyed nodes first
    var cachedKeys = newHashObj();
    var newKeys = newHashObj();
    var key;
    var node;
    var backupNewIndex = newIndex;
    var backupCachedIndex = cachedIndex;
    var deltaKeyless = 0;
    for (; cachedIndex < cachedEnd; cachedIndex++) {
        node = cachedChildren[cachedIndex];
        key = node.key;
        if (key != null) {
            assert(!(key in cachedKeys));
            cachedKeys[key] = cachedIndex;
        }
        else
            deltaKeyless--;
    }
    var keyLess = -deltaKeyless - deltaKeyless;
    for (; newIndex < newEnd; newIndex++) {
        node = newChildren[newIndex];
        key = node.key;
        if (key != null) {
            assert(!(key in newKeys));
            newKeys[key] = newIndex;
        }
        else
            deltaKeyless++;
    }
    keyLess += deltaKeyless;
    var delta = 0;
    newIndex = backupNewIndex;
    cachedIndex = backupCachedIndex;
    var cachedKey;
    while (cachedIndex < cachedEnd && newIndex < newEnd) {
        if (cachedChildren[cachedIndex] === null) {
            cachedChildren.splice(cachedIndex, 1);
            cachedEnd--;
            cachedLength--;
            delta--;
            continue;
        }
        cachedKey = cachedChildren[cachedIndex].key;
        if (cachedKey == null) {
            cachedIndex++;
            continue;
        }
        key = newChildren[newIndex].key;
        if (key == null) {
            newIndex++;
            while (newIndex < newEnd) {
                key = newChildren[newIndex].key;
                if (key != null)
                    break;
                newIndex++;
            }
            if (key == null)
                break;
        }
        var akpos = cachedKeys[key];
        if (akpos === undefined) {
            // New key
            cachedChildren.splice(cachedIndex, 0, createNode(newChildren[newIndex], parentNode, element, findNextNode(cachedChildren, cachedIndex - 1, cachedLength, createBefore)));
            delta++;
            newIndex++;
            cachedIndex++;
            cachedEnd++;
            cachedLength++;
            continue;
        }
        if (!(cachedKey in newKeys)) {
            // Old key
            removeNode(cachedChildren[cachedIndex]);
            cachedChildren.splice(cachedIndex, 1);
            delta--;
            cachedEnd--;
            cachedLength--;
            continue;
        }
        if (cachedIndex === akpos + delta) {
            // Inplace update
            updateNodeInUpdateChildren(newChildren[newIndex], cachedChildren, cachedIndex, cachedLength, createBefore, element, deepness);
            newIndex++;
            cachedIndex++;
        }
        else {
            // Move
            cachedChildren.splice(cachedIndex, 0, cachedChildren[akpos + delta]);
            delta++;
            cachedChildren[akpos + delta] = null;
            reorderAndUpdateNodeInUpdateChildren(newChildren[newIndex], cachedChildren, cachedIndex, cachedLength, createBefore, element, deepness);
            cachedIndex++;
            cachedEnd++;
            cachedLength++;
            newIndex++;
        }
    }
    // remove old keyed cached nodes
    while (cachedIndex < cachedEnd) {
        if (cachedChildren[cachedIndex] === null) {
            cachedChildren.splice(cachedIndex, 1);
            cachedEnd--;
            cachedLength--;
            continue;
        }
        if (cachedChildren[cachedIndex].key != null) {
            removeNode(cachedChildren[cachedIndex]);
            cachedChildren.splice(cachedIndex, 1);
            cachedEnd--;
            cachedLength--;
            continue;
        }
        cachedIndex++;
    }
    // add new keyed nodes
    while (newIndex < newEnd) {
        key = newChildren[newIndex].key;
        if (key != null) {
            cachedChildren.splice(cachedIndex, 0, createNode(newChildren[newIndex], parentNode, element, findNextNode(cachedChildren, cachedIndex - 1, cachedLength, createBefore)));
            cachedEnd++;
            cachedLength++;
            delta++;
            cachedIndex++;
        }
        newIndex++;
    }
    // Without any keyless nodes we are done
    if (!keyLess)
        return cachedChildren;
    // calculate common (old and new) keyless
    keyLess = (keyLess - Math.abs(deltaKeyless)) >> 1;
    // reorder just nonkeyed nodes
    newIndex = backupNewIndex;
    cachedIndex = backupCachedIndex;
    while (newIndex < newEnd) {
        if (cachedIndex < cachedEnd) {
            cachedKey = cachedChildren[cachedIndex].key;
            if (cachedKey != null) {
                cachedIndex++;
                continue;
            }
        }
        key = newChildren[newIndex].key;
        if (newIndex < cachedEnd && key === cachedChildren[newIndex].key) {
            if (key != null) {
                newIndex++;
                continue;
            }
            updateNodeInUpdateChildren(newChildren[newIndex], cachedChildren, newIndex, cachedLength, createBefore, element, deepness);
            keyLess--;
            newIndex++;
            cachedIndex = newIndex;
            continue;
        }
        if (key != null) {
            assert(newIndex === cachedIndex);
            if (keyLess === 0 && deltaKeyless < 0) {
                while (true) {
                    removeNode(cachedChildren[cachedIndex]);
                    cachedChildren.splice(cachedIndex, 1);
                    cachedEnd--;
                    cachedLength--;
                    deltaKeyless++;
                    assert(cachedIndex !== cachedEnd, "there still need to exist key node");
                    if (cachedChildren[cachedIndex].key != null)
                        break;
                }
                continue;
            }
            while (cachedChildren[cachedIndex].key == null)
                cachedIndex++;
            assert(key === cachedChildren[cachedIndex].key);
            cachedChildren.splice(newIndex, 0, cachedChildren[cachedIndex]);
            cachedChildren.splice(cachedIndex + 1, 1);
            reorderInUpdateChildren(cachedChildren, newIndex, cachedLength, createBefore, element);
            // just moving keyed node it was already updated before
            newIndex++;
            cachedIndex = newIndex;
            continue;
        }
        if (cachedIndex < cachedEnd) {
            cachedChildren.splice(newIndex, 0, cachedChildren[cachedIndex]);
            cachedChildren.splice(cachedIndex + 1, 1);
            reorderAndUpdateNodeInUpdateChildren(newChildren[newIndex], cachedChildren, newIndex, cachedLength, createBefore, element, deepness);
            keyLess--;
            newIndex++;
            cachedIndex++;
        }
        else {
            cachedChildren.splice(newIndex, 0, createNode(newChildren[newIndex], parentNode, element, findNextNode(cachedChildren, newIndex - 1, cachedLength, createBefore)));
            cachedEnd++;
            cachedLength++;
            newIndex++;
            cachedIndex++;
        }
    }
    while (cachedEnd > newIndex) {
        cachedEnd--;
        removeNode(cachedChildren[cachedEnd]);
        cachedChildren.splice(cachedEnd, 1);
    }
    return cachedChildren;
}
var hasNativeRaf = false;
var nativeRaf = window.requestAnimationFrame;
if (nativeRaf) {
    nativeRaf(function (param) { if (param === +param)
        hasNativeRaf = true; });
}
exports.now = Date.now || (function () { return (new Date).getTime(); });
var startTime = exports.now();
var lastTickTime = 0;
function requestAnimationFrame(callback) {
    if (hasNativeRaf) {
        nativeRaf(callback);
    }
    else {
        var delay = 50 / 3 + lastTickTime - exports.now();
        if (delay < 0)
            delay = 0;
        window.setTimeout(function () {
            lastTickTime = exports.now();
            callback(lastTickTime - startTime);
        }, delay);
    }
}
var ctxInvalidated = "$invalidated";
var ctxDeepness = "$deepness";
var fullRecreateRequested = true;
var scheduled = false;
var initializing = true;
var uptimeMs = 0;
var frameCounter = 0;
var lastFrameDurationMs = 0;
var renderFrameBegin = 0;
var regEvents = {};
var registryEvents;
function addEvent(name, priority, callback) {
    if (registryEvents == null)
        registryEvents = {};
    var list = registryEvents[name] || [];
    list.push({ priority: priority, callback: callback });
    registryEvents[name] = list;
}
exports.addEvent = addEvent;
function emitEvent(name, ev, target, node) {
    var events = regEvents[name];
    if (events)
        for (var i = 0; i < events.length; i++) {
            if (events[i](ev, target, node))
                return true;
        }
    return false;
}
exports.emitEvent = emitEvent;
var listeningEventDeepness = 0;
function addListener(el, name) {
    if (name[0] == "!")
        return;
    var capture = (name[0] == "^");
    var eventName = name;
    if (name[0] == "@") {
        eventName = name.slice(1);
        el = document;
    }
    if (capture) {
        eventName = name.slice(1);
    }
    function enhanceEvent(ev) {
        ev = ev || window.event;
        var t = ev.target || ev.srcElement || el;
        var n = deref(t);
        listeningEventDeepness++;
        emitEvent(name, ev, t, n);
        listeningEventDeepness--;
    }
    if (("on" + eventName) in window)
        el = window;
    el.addEventListener(eventName, enhanceEvent, capture);
}
function initEvents() {
    if (registryEvents === undefined)
        return;
    var eventNames = Object.keys(registryEvents);
    for (var j = 0; j < eventNames.length; j++) {
        var eventName = eventNames[j];
        var arr = registryEvents[eventName];
        arr = arr.sort(function (a, b) { return a.priority - b.priority; });
        regEvents[eventName] = arr.map(function (v) { return v.callback; });
    }
    registryEvents = undefined;
    var body = document.body;
    for (var i = 0; i < eventNames.length; i++) {
        addListener(body, eventNames[i]);
    }
}
function selectedUpdate(cache, element, createBefore) {
    var len = cache.length;
    for (var i = 0; i < len; i++) {
        var node = cache[i];
        var ctx = node.ctx;
        if (ctx != null && ctx[ctxInvalidated] === frameCounter) {
            var cloned = { data: ctx.data, component: node.component };
            cache[i] = updateNode(cloned, node, element, createBefore, ctx[ctxDeepness]);
        }
        else if (exports.isArray(node.children)) {
            var backupInSvg = inSvg;
            var backupInNotFocusable = inNotFocusable;
            if (inNotFocusable && focusRootTop === node)
                inNotFocusable = false;
            if (node.tag === "svg")
                inSvg = true;
            else if (inSvg && node.tag === "foreignObject")
                inSvg = false;
            selectedUpdate(node.children, node.element || element, findNextNode(cache, i, len, createBefore));
            pushUpdateEverytimeCallback(node);
            inSvg = backupInSvg;
            inNotFocusable = backupInNotFocusable;
        }
    }
}
var beforeFrameCallback = function () { };
var afterFrameCallback = function () { };
function setBeforeFrame(callback) {
    var res = beforeFrameCallback;
    beforeFrameCallback = callback;
    return res;
}
exports.setBeforeFrame = setBeforeFrame;
function setAfterFrame(callback) {
    var res = afterFrameCallback;
    afterFrameCallback = callback;
    return res;
}
exports.setAfterFrame = setAfterFrame;
function findLastNode(children) {
    for (var i = children.length - 1; i >= 0; i--) {
        var c = children[i];
        var el = c.element;
        if (el != null) {
            if (exports.isArray(el)) {
                var l = el.length;
                if (l === 0)
                    continue;
                return el[l - 1];
            }
            return el;
        }
        var ch = c.children;
        if (!exports.isArray(ch))
            continue;
        var res = findLastNode(ch);
        if (res != null)
            return res;
    }
    return null;
}
function isLogicalParent(parent, child, rootIds) {
    while (child != null) {
        if (parent === child)
            return true;
        var p = child.parent;
        if (p == null) {
            for (var i = 0; i < rootIds.length; i++) {
                var r = roots[rootIds[i]];
                if (!r)
                    continue;
                var rc = r.c;
                if (rc.indexOf(child) >= 0) {
                    p = r.p;
                    break;
                }
            }
        }
        child = p;
    }
    return false;
}
function syncUpdate() {
    internalUpdate(exports.now() - startTime);
}
exports.syncUpdate = syncUpdate;
function update(time) {
    scheduled = false;
    internalUpdate(time);
}
function internalUpdate(time) {
    renderFrameBegin = exports.now();
    initEvents();
    frameCounter++;
    ignoringShouldChange = nextIgnoreShouldChange;
    nextIgnoreShouldChange = false;
    uptimeMs = time;
    beforeFrameCallback();
    focusRootTop = focusRootStack.length === 0 ? null : focusRootStack[focusRootStack.length - 1];
    inNotFocusable = false;
    var fullRefresh = false;
    if (fullRecreateRequested) {
        fullRecreateRequested = false;
        fullRefresh = true;
    }
    var rootIds = Object.keys(roots);
    for (var i = 0; i < rootIds.length; i++) {
        var r = roots[rootIds[i]];
        if (!r)
            continue;
        var rc = r.c;
        var insertBefore = findLastNode(rc);
        if (focusRootTop)
            inNotFocusable = !isLogicalParent(focusRootTop, r.p, rootIds);
        if (insertBefore != null)
            insertBefore = insertBefore.nextSibling;
        if (fullRefresh) {
            var newChildren = r.f();
            if (newChildren === undefined)
                break;
            r.e = r.e || document.body;
            r.c = updateChildren(r.e, newChildren, rc, undefined, insertBefore, 1e6);
        }
        else {
            selectedUpdate(rc, r.e, insertBefore);
        }
    }
    callPostCallbacks();
    var r0 = roots["0"];
    afterFrameCallback(r0 ? r0.c : null);
    lastFrameDurationMs = exports.now() - renderFrameBegin;
}
var nextIgnoreShouldChange = false;
var ignoringShouldChange = false;
function ignoreShouldChange() {
    nextIgnoreShouldChange = true;
    exports.invalidate();
}
exports.ignoreShouldChange = ignoreShouldChange;
function setInvalidate(inv) {
    var prev = exports.invalidate;
    exports.invalidate = inv;
    return prev;
}
exports.setInvalidate = setInvalidate;
exports.invalidate = function (ctx, deepness) {
    if (ctx != null) {
        if (deepness == undefined)
            deepness = 1e6;
        if (ctx[ctxInvalidated] !== frameCounter + 1) {
            ctx[ctxInvalidated] = frameCounter + 1;
            ctx[ctxDeepness] = deepness;
        }
        else {
            if (deepness > ctx[ctxDeepness])
                ctx[ctxDeepness] = deepness;
        }
    }
    else {
        fullRecreateRequested = true;
    }
    if (scheduled || initializing)
        return;
    scheduled = true;
    requestAnimationFrame(update);
};
var lastRootId = 0;
function addRoot(factory, element, parent) {
    lastRootId++;
    var rootId = "" + lastRootId;
    roots[rootId] = { f: factory, e: element, c: [], p: parent };
    exports.invalidate();
    return rootId;
}
exports.addRoot = addRoot;
function removeRoot(id) {
    var root = roots[id];
    if (!root)
        return;
    if (root.c.length) {
        root.c = updateChildren(root.e, [], root.c, undefined, null, 1e9);
    }
    delete roots[id];
}
exports.removeRoot = removeRoot;
function getRoots() {
    return roots;
}
exports.getRoots = getRoots;
function finishInitialize() {
    initializing = false;
    exports.invalidate();
}
var beforeInit = finishInitialize;
function init(factory, element) {
    removeRoot("0");
    roots["0"] = { f: factory, e: element, c: [], p: undefined };
    initializing = true;
    beforeInit();
    beforeInit = finishInitialize;
}
exports.init = init;
function setBeforeInit(callback) {
    var prevBeforeInit = beforeInit;
    beforeInit = function () {
        callback(prevBeforeInit);
    };
}
exports.setBeforeInit = setBeforeInit;
function bubble(node, name, param) {
    while (node) {
        var c = node.component;
        if (c) {
            var ctx = node.ctx;
            var m = c[name];
            if (m) {
                if (m.call(c, ctx, param))
                    return ctx;
            }
            m = c.shouldStopBubble;
            if (m) {
                if (m.call(c, ctx, name, param))
                    break;
            }
        }
        node = node.parent;
    }
    return undefined;
}
exports.bubble = bubble;
function broadcastEventToNode(node, name, param) {
    if (!node)
        return undefined;
    var c = node.component;
    if (c) {
        var ctx = node.ctx;
        var m = c[name];
        if (m) {
            if (m.call(c, ctx, param))
                return ctx;
        }
        m = c.shouldStopBroadcast;
        if (m) {
            if (m.call(c, ctx, name, param))
                return undefined;
        }
    }
    var ch = node.children;
    if (exports.isArray(ch)) {
        for (var i = 0; i < ch.length; i++) {
            var res = broadcastEventToNode(ch[i], name, param);
            if (res != null)
                return res;
        }
    }
    return undefined;
}
function broadcast(name, param) {
    var k = Object.keys(roots);
    for (var i = 0; i < k.length; i++) {
        var ch = roots[k[i]].c;
        if (ch != null) {
            for (var j = 0; j < ch.length; j++) {
                var res = broadcastEventToNode(ch[j], name, param);
                if (res != null)
                    return res;
            }
        }
    }
    return undefined;
}
exports.broadcast = broadcast;
function merge(f1, f2) {
    return function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        var result = f1.apply(this, params);
        if (result)
            return result;
        return f2.apply(this, params);
    };
}
var emptyObject = {};
function mergeComponents(c1, c2) {
    var res = Object.create(c1);
    res.super = c1;
    for (var i in c2) {
        if (!(i in emptyObject)) {
            var m = c2[i];
            var origM = c1[i];
            if (i === "id") {
                res[i] = ((origM != null) ? origM : "") + "/" + m;
            }
            else if (isFunction(m) && origM != null && isFunction(origM)) {
                res[i] = merge(origM, m);
            }
            else {
                res[i] = m;
            }
        }
    }
    return res;
}
function overrideComponents(originalComponent, overridingComponent) {
    var res = Object.create(originalComponent);
    res.super = originalComponent;
    for (var i_6 in overridingComponent) {
        if (!(i_6 in emptyObject)) {
            var m = overridingComponent[i_6];
            var origM = originalComponent[i_6];
            if (i_6 === 'id') {
                res[i_6] = ((origM != null) ? origM : '') + '/' + m;
            }
            else {
                res[i_6] = m;
            }
        }
    }
    return res;
}
function preEnhance(node, methods) {
    var comp = node.component;
    if (!comp) {
        node.component = methods;
        return node;
    }
    node.component = mergeComponents(methods, comp);
    return node;
}
exports.preEnhance = preEnhance;
function postEnhance(node, methods) {
    var comp = node.component;
    if (!comp) {
        node.component = methods;
        return node;
    }
    node.component = mergeComponents(comp, methods);
    return node;
}
exports.postEnhance = postEnhance;
function preventDefault(event) {
    var pd = event.preventDefault;
    if (pd)
        pd.call(event);
    else
        event.returnValue = false;
}
exports.preventDefault = preventDefault;
function cloneNodeArray(a) {
    a = a.slice(0);
    for (var i = 0; i < a.length; i++) {
        var n = a[i];
        if (exports.isArray(n)) {
            a[i] = cloneNodeArray(n);
        }
        else if (isObject(n)) {
            a[i] = cloneNode(n);
        }
    }
    return a;
}
function cloneNode(node) {
    var r = exports.assign({}, node);
    if (r.attrs) {
        r.attrs = exports.assign({}, r.attrs);
    }
    if (isObject(r.style)) {
        r.style = exports.assign({}, r.style);
    }
    var ch = r.children;
    if (ch) {
        if (exports.isArray(ch)) {
            r.children = cloneNodeArray(ch);
        }
        else if (isObject(ch)) {
            r.children = cloneNode(ch);
        }
    }
    return r;
}
exports.cloneNode = cloneNode;
function setStyleShim(name, action) { mapping[name] = action; }
exports.setStyleShim = setStyleShim;
// PureFuncs: uptime, lastFrameDuration, frame, invalidated
function uptime() { return uptimeMs; }
exports.uptime = uptime;
function lastFrameDuration() { return lastFrameDurationMs; }
exports.lastFrameDuration = lastFrameDuration;
function frame() { return frameCounter; }
exports.frame = frame;
function invalidated() { return scheduled; }
exports.invalidated = invalidated;
var media = null;
var breaks = [
    [414, 800, 900],
    [736, 1280, 1440] //landscape widths
];
function emitOnMediaChange() {
    media = null;
    exports.invalidate();
    return false;
}
var events = ["resize", "orientationchange"];
for (var i = 0; i < events.length; i++)
    addEvent(events[i], 10, emitOnMediaChange);
function accDeviceBreaks(newBreaks) {
    if (newBreaks != null) {
        breaks = newBreaks;
        emitOnMediaChange();
    }
    return breaks;
}
exports.accDeviceBreaks = accDeviceBreaks;
var viewport = window.document.documentElement;
var isAndroid = /Android/i.test(navigator.userAgent);
var weirdPortrait; // Some android devices provide reverted orientation
function getMedia() {
    if (media == null) {
        var w = viewport.clientWidth;
        var h = viewport.clientHeight;
        var o = window.orientation;
        var p = h >= w;
        if (o == null)
            o = (p ? 0 : 90);
        if (isAndroid) {
            // without this keyboard change screen rotation because h or w changes
            var op = Math.abs(o) % 180 === 90;
            if (weirdPortrait == null) {
                weirdPortrait = op === p;
            }
            else {
                p = op === weirdPortrait;
            }
        }
        var device = 0;
        while (w > breaks[+!p][device])
            device++;
        media = {
            width: w,
            height: h,
            orientation: o,
            deviceCategory: device,
            portrait: p
        };
    }
    return media;
}
exports.getMedia = getMedia;
exports.asap = (function () {
    var callbacks = [];
    function executeCallbacks() {
        var cbList = callbacks;
        callbacks = [];
        for (var i = 0, len = cbList.length; i < len; i++) {
            cbList[i]();
        }
    }
    var onreadystatechange = 'onreadystatechange';
    // Modern browsers, fastest async
    if (window.MutationObserver) {
        var hiddenDiv = document.createElement("div");
        (new MutationObserver(executeCallbacks)).observe(hiddenDiv, { attributes: true });
        return function (callback) {
            if (!callbacks.length) {
                hiddenDiv.setAttribute('yes', 'no');
            }
            callbacks.push(callback);
        };
    }
    else if (!window.setImmediate && window.postMessage && window.addEventListener) {
        var MESSAGE_PREFIX = "basap" + Math.random(), hasPostMessage = false;
        var onGlobalMessage = function (event) {
            if (event.source === window && event.data === MESSAGE_PREFIX) {
                hasPostMessage = false;
                executeCallbacks();
            }
        };
        window.addEventListener("message", onGlobalMessage, false);
        return function (fn) {
            callbacks.push(fn);
            if (!hasPostMessage) {
                hasPostMessage = true;
                window.postMessage(MESSAGE_PREFIX, "*");
            }
        };
    }
    else if (!window.setImmediate && onreadystatechange in document.createElement('script')) {
        var scriptEl;
        return function (callback) {
            callbacks.push(callback);
            if (!scriptEl) {
                scriptEl = document.createElement("script");
                scriptEl[onreadystatechange] = function () {
                    scriptEl[onreadystatechange] = null;
                    scriptEl.parentNode.removeChild(scriptEl);
                    scriptEl = null;
                    executeCallbacks();
                };
                document.body.appendChild(scriptEl);
            }
        };
    }
    else {
        var timeout;
        var timeoutFn = window.setImmediate || setTimeout;
        return function (callback) {
            callbacks.push(callback);
            if (!timeout) {
                timeout = timeoutFn(function () {
                    timeout = undefined;
                    executeCallbacks();
                }, 0);
            }
        };
    }
})();
if (!window.Promise) {
    (function () {
        // Polyfill for Function.prototype.bind
        function bind(fn, thisArg) {
            return function () {
                fn.apply(thisArg, arguments);
            };
        }
        function handle(deferred) {
            var _this = this;
            if (this.s /*tate*/ === null) {
                this.d /*eferreds*/.push(deferred);
                return;
            }
            exports.asap(function () {
                var cb = _this.s /*tate*/ ? deferred[0] : deferred[1];
                if (cb == null) {
                    (_this.s /*tate*/ ? deferred[2] : deferred[3])(_this.v /*alue*/);
                    return;
                }
                var ret;
                try {
                    ret = cb(_this.v /*alue*/);
                }
                catch (e) {
                    deferred[3](e);
                    return;
                }
                deferred[2](ret);
            });
        }
        function finale() {
            for (var i = 0, len = this.d /*eferreds*/.length; i < len; i++) {
                handle.call(this, this.d /*eferreds*/[i]);
            }
            this.d /*eferreds*/ = null;
        }
        function reject(newValue) {
            this.s /*tate*/ = false;
            this.v /*alue*/ = newValue;
            finale.call(this);
        }
        /**
         * Take a potentially misbehaving resolver function and make sure
         * onFulfilled and onRejected are only called once.
         *
         * Makes no guarantees about asynchrony.
         */
        function doResolve(fn, onFulfilled, onRejected) {
            var done = false;
            try {
                fn(function (value) {
                    if (done)
                        return;
                    done = true;
                    onFulfilled(value);
                }, function (reason) {
                    if (done)
                        return;
                    done = true;
                    onRejected(reason);
                });
            }
            catch (ex) {
                if (done)
                    return;
                done = true;
                onRejected(ex);
            }
        }
        function resolve(newValue) {
            try {
                if (newValue === this)
                    throw new TypeError('Promise selfresolve');
                if (Object(newValue) === newValue) {
                    var then = newValue.then;
                    if (typeof then === 'function') {
                        doResolve(bind(then, newValue), bind(resolve, this), bind(reject, this));
                        return;
                    }
                }
                this.s /*tate*/ = true;
                this.v /*alue*/ = newValue;
                finale.call(this);
            }
            catch (e) {
                reject.call(this, e);
            }
        }
        function Promise(fn) {
            this.s /*tate*/ = null;
            this.v /*alue*/ = null;
            this.d /*eferreds*/ = [];
            doResolve(fn, bind(resolve, this), bind(reject, this));
        }
        Promise.prototype.then = function (onFulfilled, onRejected) {
            var me = this;
            return new Promise(function (resolve, reject) {
                handle.call(me, [onFulfilled, onRejected, resolve, reject]);
            });
        };
        Promise.prototype['catch'] = function (onRejected) {
            return this.then(undefined, onRejected);
        };
        Promise.all = function () {
            var args = [].slice.call(arguments.length === 1 && exports.isArray(arguments[0]) ? arguments[0] : arguments);
            return new Promise(function (resolve, reject) {
                if (args.length === 0) {
                    resolve(args);
                    return;
                }
                var remaining = args.length;
                function res(i, val) {
                    try {
                        if (val && (typeof val === 'object' || typeof val === 'function')) {
                            var then = val.then;
                            if (typeof then === 'function') {
                                then.call(val, function (val) { res(i, val); }, reject);
                                return;
                            }
                        }
                        args[i] = val;
                        if (--remaining === 0) {
                            resolve(args);
                        }
                    }
                    catch (ex) {
                        reject(ex);
                    }
                }
                for (var i = 0; i < args.length; i++) {
                    res(i, args[i]);
                }
            });
        };
        Promise.resolve = function (value) {
            if (value && typeof value === 'object' && value.constructor === Promise) {
                return value;
            }
            return new Promise(function (resolve) {
                resolve(value);
            });
        };
        Promise.reject = function (value) { return new Promise(function (_resolve, reject) {
            reject(value);
        }); };
        Promise.race = function (values) { return new Promise(function (resolve, reject) {
            for (var i = 0, len = values.length; i < len; i++) {
                values[i].then(resolve, reject);
            }
        }); };
        window['Promise'] = Promise;
    })();
}
// Bobril.StyleShim
if (ieVersion() === 9) {
    (function () {
        function addFilter(s, v) {
            if (s.zoom == null)
                s.zoom = "1";
            var f = s.filter;
            s.filter = (f == null) ? v : f + " " + v;
        }
        var simpleLinearGradient = /^linear\-gradient\(to (.+?),(.+?),(.+?)\)/ig;
        setStyleShim("background", function (s, v, oldName) {
            var match = simpleLinearGradient.exec(v);
            if (match == null)
                return;
            var dir = match[1];
            var color1 = match[2];
            var color2 = match[3];
            var tmp;
            switch (dir) {
                case "top":
                    dir = "0";
                    tmp = color1;
                    color1 = color2;
                    color2 = tmp;
                    break;
                case "bottom":
                    dir = "0";
                    break;
                case "left":
                    dir = "1";
                    tmp = color1;
                    color1 = color2;
                    color2 = tmp;
                    break;
                case "right":
                    dir = "1";
                    break;
                default: return;
            }
            s[oldName] = "none";
            addFilter(s, "progid:DXImageTransform.Microsoft.gradient(startColorstr='" + color1 + "',endColorstr='" + color2 + "', gradientType='" + dir + "')");
        });
    })();
}
else {
    (function () {
        var teststyle = document.createElement("div").style;
        teststyle.cssText = "background:-webkit-linear-gradient(top,red,red)";
        if (teststyle.background.length > 0) {
            (function () {
                var startsWithGradient = /^(?:repeating\-)?(?:linear|radial)\-gradient/ig;
                var revdirs = { top: "bottom", bottom: "top", left: "right", right: "left" };
                function gradientWebkitter(style, value, name) {
                    if (startsWithGradient.test(value)) {
                        var pos = value.indexOf("(to ");
                        if (pos > 0) {
                            pos += 4;
                            var posend = value.indexOf(",", pos);
                            var dir = value.slice(pos, posend);
                            dir = dir.split(" ").map(function (v) { return revdirs[v] || v; }).join(" ");
                            value = value.slice(0, pos - 3) + dir + value.slice(posend);
                        }
                        value = "-webkit-" + value;
                    }
                    style[name] = value;
                }
                ;
                setStyleShim("background", gradientWebkitter);
            })();
        }
    })();
}
// Bobril.OnChange
var bvalue = "b$value";
var bSelectionStart = "b$selStart";
var bSelectionEnd = "b$selEnd";
var tvalue = "value";
function isCheckboxlike(el) {
    var t = el.type;
    return t === "checkbox" || t === "radio";
}
function stringArrayEqual(a1, a2) {
    var l = a1.length;
    if (l !== a2.length)
        return false;
    for (var j = 0; j < l; j++) {
        if (a1[j] !== a2[j])
            return false;
    }
    return true;
}
function stringArrayContains(a, v) {
    for (var j = 0; j < a.length; j++) {
        if (a[j] === v)
            return true;
    }
    return false;
}
function selectedArray(options) {
    var res = [];
    for (var j = 0; j < options.length; j++) {
        if (options[j].selected)
            res.push(options[j].value);
    }
    return res;
}
var prevSetValueCallback = setSetValue(function (el, node, newValue, oldValue) {
    var tagName = el.tagName;
    var isSelect = tagName === "SELECT";
    var isInput = tagName === "INPUT" || tagName === "TEXTAREA";
    if (!isInput && !isSelect) {
        prevSetValueCallback(el, node, newValue, oldValue);
        return;
    }
    if (node.ctx === undefined)
        node.ctx = { me: node };
    if (oldValue === undefined) {
        node.ctx[bvalue] = newValue;
    }
    var isMultiSelect = isSelect && el.multiple;
    var emitDiff = false;
    if (isMultiSelect) {
        var options = el.options;
        var currentMulti = selectedArray(options);
        if (!stringArrayEqual(newValue, currentMulti)) {
            if (oldValue === undefined || stringArrayEqual(currentMulti, oldValue) || !stringArrayEqual(newValue, node.ctx[bvalue])) {
                for (var j = 0; j < options.length; j++) {
                    options[j].selected = stringArrayContains(newValue, options[j].value);
                }
                currentMulti = selectedArray(options);
                if (stringArrayEqual(currentMulti, newValue)) {
                    emitDiff = true;
                }
            }
            else {
                emitDiff = true;
            }
        }
    }
    else if (isInput || isSelect) {
        if (isInput && isCheckboxlike(el)) {
            var currentChecked = el.checked;
            if (newValue !== currentChecked) {
                if (oldValue === undefined || currentChecked === oldValue || newValue !== node.ctx[bvalue]) {
                    el.checked = newValue;
                }
                else {
                    emitDiff = true;
                }
            }
        }
        else {
            var isCombobox = isSelect && el.size < 2;
            var currentValue = (el[tvalue]);
            if (newValue !== currentValue) {
                if (oldValue === undefined || currentValue === oldValue || newValue !== node.ctx[bvalue]) {
                    if (isSelect) {
                        if (newValue === "") {
                            el.selectedIndex = isCombobox ? 0 : -1;
                        }
                        else {
                            el[tvalue] = newValue;
                        }
                        if (newValue !== "" || isCombobox) {
                            currentValue = (el[tvalue]);
                            if (newValue !== currentValue) {
                                emitDiff = true;
                            }
                        }
                    }
                    else {
                        el[tvalue] = newValue;
                    }
                }
                else {
                    emitDiff = true;
                }
            }
        }
    }
    if (emitDiff) {
        emitOnChange(undefined, el, node);
    }
    else {
        node.ctx[bvalue] = newValue;
    }
});
function emitOnChange(ev, target, node) {
    if (target && target.nodeName === "OPTION") {
        target = document.activeElement;
        node = deref(target);
    }
    if (!node) {
        return false;
    }
    var c = node.component;
    var hasProp = node.attrs && node.attrs[bvalue];
    var hasOnChange = c && c.onChange != null;
    var hasPropOrOnChange = hasProp || hasOnChange;
    var hasOnSelectionChange = c && c.onSelectionChange != null;
    if (!hasPropOrOnChange && !hasOnSelectionChange)
        return false;
    var ctx = node.ctx;
    var tagName = target.tagName;
    var isSelect = tagName === "SELECT";
    var isMultiSelect = isSelect && target.multiple;
    if (hasPropOrOnChange && isMultiSelect) {
        var vs = selectedArray(target.options);
        if (!stringArrayEqual(ctx[bvalue], vs)) {
            ctx[bvalue] = vs;
            if (hasProp)
                hasProp(vs);
            if (hasOnChange)
                c.onChange(ctx, vs);
        }
    }
    else if (hasPropOrOnChange && isCheckboxlike(target)) {
        // Postpone change event so onClick will be processed before it
        if (ev && ev.type === "change") {
            setTimeout(function () {
                emitOnChange(undefined, target, node);
            }, 10);
            return false;
        }
        if (target.type === "radio") {
            var radios = document.getElementsByName(target.name);
            for (var j = 0; j < radios.length; j++) {
                var radio = radios[j];
                var radionode = deref(radio);
                if (!radionode)
                    continue;
                var rbhasProp = node.attrs[bvalue];
                var radiocomponent = radionode.component;
                var rbhasOnChange = radiocomponent && radiocomponent.onChange != null;
                if (!rbhasProp && !rbhasOnChange)
                    continue;
                var radioctx = radionode.ctx;
                var vrb = radio.checked;
                if (radioctx[bvalue] !== vrb) {
                    radioctx[bvalue] = vrb;
                    if (rbhasProp)
                        rbhasProp(vrb);
                    if (rbhasOnChange)
                        radiocomponent.onChange(radioctx, vrb);
                }
            }
        }
        else {
            var vb = target.checked;
            if (ctx[bvalue] !== vb) {
                ctx[bvalue] = vb;
                if (hasProp)
                    hasProp(vb);
                if (hasOnChange)
                    c.onChange(ctx, vb);
            }
        }
    }
    else {
        if (hasPropOrOnChange) {
            var v = target.value;
            if (ctx[bvalue] !== v) {
                ctx[bvalue] = v;
                if (hasProp)
                    hasProp(v);
                if (hasOnChange)
                    c.onChange(ctx, v);
            }
        }
        if (hasOnSelectionChange) {
            var sStart = target.selectionStart;
            var sEnd = target.selectionEnd;
            var sDir = target.selectionDirection;
            var swap = false;
            var oStart = ctx[bSelectionStart];
            if (sDir == null) {
                if (sEnd === oStart)
                    swap = true;
            }
            else if (sDir === "backward") {
                swap = true;
            }
            if (swap) {
                var s = sStart;
                sStart = sEnd;
                sEnd = s;
            }
            emitOnSelectionChange(node, sStart, sEnd);
        }
    }
    return false;
}
function emitOnSelectionChange(node, start, end) {
    var c = node.component;
    var ctx = node.ctx;
    if (c && (ctx[bSelectionStart] !== start || ctx[bSelectionEnd] !== end)) {
        ctx[bSelectionStart] = start;
        ctx[bSelectionEnd] = end;
        if (c.onSelectionChange)
            c.onSelectionChange(ctx, {
                startPosition: start,
                endPosition: end
            });
    }
}
function select(node, start, end) {
    if (end === void 0) { end = start; }
    node.element.setSelectionRange(Math.min(start, end), Math.max(start, end), start > end ? "backward" : "forward");
    emitOnSelectionChange(node, start, end);
}
exports.select = select;
function emitOnMouseChange(ev, _target, _node) {
    var f = focused();
    if (f)
        emitOnChange(ev, f.element, f);
    return false;
}
// click here must have lower priority (higher number) over mouse handlers
var events = ["input", "cut", "paste", "keydown", "keypress", "keyup", "click", "change"];
for (var i = 0; i < events.length; i++)
    addEvent(events[i], 10, emitOnChange);
var mouseEvents = ["!PointerDown", "!PointerMove", "!PointerUp", "!PointerCancel"];
for (var i = 0; i < mouseEvents.length; i++)
    addEvent(mouseEvents[i], 2, emitOnMouseChange);
function buildParam(ev) {
    return {
        shift: ev.shiftKey,
        ctrl: ev.ctrlKey,
        alt: ev.altKey,
        meta: ev.metaKey || false,
        which: ev.which || ev.keyCode,
    };
}
function emitOnKeyDown(ev, _target, node) {
    if (!node)
        return false;
    var param = buildParam(ev);
    if (bubble(node, "onKeyDown", param)) {
        preventDefault(ev);
        return true;
    }
    return false;
}
function emitOnKeyUp(ev, _target, node) {
    if (!node)
        return false;
    var param = buildParam(ev);
    if (bubble(node, "onKeyUp", param)) {
        preventDefault(ev);
        return true;
    }
    return false;
}
function emitOnKeyPress(ev, _target, node) {
    if (!node)
        return false;
    if (ev.which === 0)
        return false;
    var param = { charCode: ev.which || ev.keyCode };
    if (bubble(node, "onKeyPress", param)) {
        preventDefault(ev);
        return true;
    }
    return false;
}
addEvent("keydown", 50, emitOnKeyDown);
addEvent("keyup", 50, emitOnKeyUp);
addEvent("keypress", 50, emitOnKeyPress);
var ownerCtx = null;
var invokingOwner;
var onClickText = "onClick";
// PureFuncs: isMouseOwner, isMouseOwnerEvent
function isMouseOwner(ctx) {
    return ownerCtx === ctx;
}
exports.isMouseOwner = isMouseOwner;
function isMouseOwnerEvent() {
    return invokingOwner;
}
exports.isMouseOwnerEvent = isMouseOwnerEvent;
function registerMouseOwner(ctx) {
    ownerCtx = ctx;
}
exports.registerMouseOwner = registerMouseOwner;
function releaseMouseOwner() {
    ownerCtx = null;
}
exports.releaseMouseOwner = releaseMouseOwner;
function invokeMouseOwner(handlerName, param) {
    if (ownerCtx == null) {
        return false;
    }
    var handler = ownerCtx.me.component[handlerName];
    if (!handler) {
        return false;
    }
    invokingOwner = true;
    var stop = handler(ownerCtx, param);
    invokingOwner = false;
    return stop;
}
function hasPointerEventsNoneB(node) {
    while (node) {
        var s = node.style;
        if (s) {
            var e = s.pointerEvents;
            if (e !== undefined) {
                if (e === "none")
                    return true;
                return false;
            }
        }
        node = node.parent;
    }
    return false;
}
function hasPointerEventsNone(target) {
    var bNode = deref(target);
    return hasPointerEventsNoneB(bNode);
}
function revertVisibilityChanges(hiddenEls) {
    if (hiddenEls.length) {
        for (var i = hiddenEls.length - 1; i >= 0; --i) {
            hiddenEls[i].t.style.visibility = hiddenEls[i].p;
        }
        return true;
    }
    return false;
}
function pushAndHide(hiddenEls, t) {
    hiddenEls.push({ t: t, p: t.style.visibility });
    t.style.visibility = "hidden";
}
function pointerThroughIE(ev, target, _node) {
    var hiddenEls = [];
    var t = target;
    while (hasPointerEventsNone(t)) {
        pushAndHide(hiddenEls, t);
        t = document.elementFromPoint(ev.x, ev.y);
    }
    if (revertVisibilityChanges(hiddenEls)) {
        try {
            t.dispatchEvent(ev);
        }
        catch (e) {
            return false;
        }
        preventDefault(ev);
        return true;
    }
    return false;
}
function addEvent5(name, callback) {
    addEvent(name, 5, callback);
}
var pointersEventNames = ["PointerDown", "PointerMove", "PointerUp", "PointerCancel"];
var i;
if (ieVersion() && ieVersion() < 11) {
    // emulate pointer-events: none in older ie
    var mouseEvents = [
        "click", "dblclick", "drag", "dragend",
        "dragenter", "dragleave", "dragover", "dragstart",
        "drop", "mousedown", "mousemove", "mouseout",
        "mouseover", "mouseup", "mousewheel", "scroll", "wheel"
    ];
    for (i = 0; i < mouseEvents.length; ++i) {
        addEvent(mouseEvents[i], 1, pointerThroughIE);
    }
}
function type2Bobril(t) {
    if (t === "mouse" || t === 4)
        return 0 /* Mouse */;
    if (t === "pen" || t === 3)
        return 2 /* Pen */;
    return 1 /* Touch */;
}
function pointerEventsNoneFix(x, y, target, node) {
    var hiddenEls = [];
    var t = target;
    while (hasPointerEventsNoneB(node)) {
        pushAndHide(hiddenEls, t);
        t = document.elementFromPoint(x, y);
        node = deref(t);
    }
    revertVisibilityChanges(hiddenEls);
    return [t, node];
}
function buildHandlerPointer(name) {
    return function handlePointerDown(ev, target, node) {
        if (hasPointerEventsNoneB(node)) {
            var fixed = pointerEventsNoneFix(ev.clientX, ev.clientY, target, node);
            target = fixed[0];
            node = fixed[1];
        }
        var button = ev.button + 1;
        var type = type2Bobril(ev.pointerType);
        var buttons = ev.buttons;
        if (button === 0 && type === 0 /* Mouse */ && buttons) {
            button = 1;
            while (!(buttons & 1)) {
                buttons = buttons >> 1;
                button++;
            }
        }
        var param = { id: ev.pointerId, type: type, x: ev.clientX, y: ev.clientY, button: button, shift: ev.shiftKey, ctrl: ev.ctrlKey, alt: ev.altKey, meta: ev.metaKey || false, count: ev.detail };
        if (emitEvent("!" + name, param, target, node)) {
            preventDefault(ev);
            return true;
        }
        return false;
    };
}
function buildHandlerTouch(name) {
    return function handlePointerDown(ev, target, node) {
        var preventDef = false;
        for (var i = 0; i < ev.changedTouches.length; i++) {
            var t = ev.changedTouches[i];
            target = document.elementFromPoint(t.clientX, t.clientY);
            node = deref(target);
            var param = { id: t.identifier + 2, type: 1 /* Touch */, x: t.clientX, y: t.clientY, button: 1, shift: ev.shiftKey, ctrl: ev.ctrlKey, alt: ev.altKey, meta: ev.metaKey || false, count: ev.detail };
            if (emitEvent("!" + name, param, target, node))
                preventDef = true;
        }
        if (preventDef) {
            preventDefault(ev);
            return true;
        }
        return false;
    };
}
function buildHandlerMouse(name) {
    return function handlePointer(ev, target, node) {
        target = document.elementFromPoint(ev.clientX, ev.clientY);
        node = deref(target);
        if (hasPointerEventsNoneB(node)) {
            var fixed = pointerEventsNoneFix(ev.clientX, ev.clientY, target, node);
            target = fixed[0];
            node = fixed[1];
        }
        var param = { id: 1, type: 0 /* Mouse */, x: ev.clientX, y: ev.clientY, button: decodeButton(ev), shift: ev.shiftKey, ctrl: ev.ctrlKey, alt: ev.altKey, meta: ev.metaKey || false, count: ev.detail };
        if (emitEvent("!" + name, param, target, node)) {
            preventDefault(ev);
            return true;
        }
        return false;
    };
}
if (window.onpointerdown !== undefined) {
    for (i = 0; i < 4 /*pointersEventNames.length*/; i++) {
        var name = pointersEventNames[i];
        addEvent5(name.toLowerCase(), buildHandlerPointer(name));
    }
}
else if (window.onmspointerdown !== undefined) {
    for (i = 0; i < 4 /*pointersEventNames.length*/; i++) {
        var name = pointersEventNames[i];
        addEvent5("@MS" + name, buildHandlerPointer(name));
    }
}
else {
    if (window.ontouchstart !== undefined) {
        addEvent5("touchstart", buildHandlerTouch(pointersEventNames[0] /*"PointerDown"*/));
        addEvent5("touchmove", buildHandlerTouch(pointersEventNames[1] /*"PointerMove"*/));
        addEvent5("touchend", buildHandlerTouch(pointersEventNames[2] /*"PointerUp"*/));
        addEvent5("touchcancel", buildHandlerTouch(pointersEventNames[3] /*"PointerCancel"*/));
    }
    addEvent5("mousedown", buildHandlerMouse(pointersEventNames[0] /*"PointerDown"*/));
    addEvent5("mousemove", buildHandlerMouse(pointersEventNames[1] /*"PointerMove"*/));
    addEvent5("mouseup", buildHandlerMouse(pointersEventNames[2] /*"PointerUp"*/));
}
for (var j = 0; j < 4 /*pointersEventNames.length*/; j++) {
    (function (name) {
        var onname = "on" + name;
        addEvent("!" + name, 50, function (ev, _target, node) {
            return invokeMouseOwner(onname, ev) || (bubble(node, onname, ev) != null);
        });
    })(pointersEventNames[j]);
}
var pointersDown = newHashObj();
var toBust = [];
var firstPointerDown = -1;
var firstPointerDownTime = 0;
var firstPointerDownX = 0;
var firstPointerDownY = 0;
var tapCanceled = false;
var lastMouseEv;
function diffLess(n1, n2, diff) {
    return Math.abs(n1 - n2) < diff;
}
var prevMousePath = [];
function revalidateMouseIn() {
    if (lastMouseEv)
        mouseEnterAndLeave(lastMouseEv);
}
exports.revalidateMouseIn = revalidateMouseIn;
function mouseEnterAndLeave(ev) {
    lastMouseEv = ev;
    var t = document.elementFromPoint(ev.x, ev.y);
    var toPath = vdomPath(t);
    var node = toPath.length == 0 ? undefined : toPath[toPath.length - 1];
    if (hasPointerEventsNoneB(node)) {
        var fixed = pointerEventsNoneFix(ev.x, ev.y, t, node == null ? undefined : node);
        t = fixed[0];
        toPath = vdomPath(t);
    }
    bubble(node, "onMouseOver", ev);
    var common = 0;
    while (common < prevMousePath.length && common < toPath.length && prevMousePath[common] === toPath[common])
        common++;
    var n;
    var c;
    var i = prevMousePath.length;
    if (i > 0) {
        n = prevMousePath[i - 1];
        if (n) {
            c = n.component;
            if (c && c.onMouseOut)
                c.onMouseOut(n.ctx, ev);
        }
    }
    while (i > common) {
        i--;
        n = prevMousePath[i];
        if (n) {
            c = n.component;
            if (c && c.onMouseLeave)
                c.onMouseLeave(n.ctx, ev);
        }
    }
    while (i < toPath.length) {
        n = toPath[i];
        if (n) {
            c = n.component;
            if (c && c.onMouseEnter)
                c.onMouseEnter(n.ctx, ev);
        }
        i++;
    }
    prevMousePath = toPath;
    if (i > 0) {
        n = prevMousePath[i - 1];
        if (n) {
            c = n.component;
            if (c && c.onMouseIn)
                c.onMouseIn(n.ctx, ev);
        }
    }
    return false;
}
;
function noPointersDown() {
    return Object.keys(pointersDown).length === 0;
}
function bustingPointerDown(ev, _target, _node) {
    if (firstPointerDown === -1 && noPointersDown()) {
        firstPointerDown = ev.id;
        firstPointerDownTime = exports.now();
        firstPointerDownX = ev.x;
        firstPointerDownY = ev.y;
        tapCanceled = false;
        mouseEnterAndLeave(ev);
    }
    pointersDown[ev.id] = ev.type;
    if (firstPointerDown !== ev.id) {
        tapCanceled = true;
    }
    return false;
}
function bustingPointerMove(ev, target, node) {
    // Browser forgot to send mouse up? Let's fix it
    if (ev.type === 0 /* Mouse */ && ev.button === 0 && pointersDown[ev.id] != null) {
        ev.button = 1;
        emitEvent("!PointerUp", ev, target, node);
        ev.button = 0;
    }
    if (firstPointerDown === ev.id) {
        mouseEnterAndLeave(ev);
        if (!diffLess(firstPointerDownX, ev.x, 13 /* MoveOverIsNotTap */) || !diffLess(firstPointerDownY, ev.y, 13 /* MoveOverIsNotTap */))
            tapCanceled = true;
    }
    else if (noPointersDown()) {
        mouseEnterAndLeave(ev);
    }
    return false;
}
function bustingPointerUp(ev, target, node) {
    delete pointersDown[ev.id];
    if (firstPointerDown == ev.id) {
        mouseEnterAndLeave(ev);
        firstPointerDown = -1;
        if (ev.type == 1 /* Touch */ && !tapCanceled) {
            if (exports.now() - firstPointerDownTime < 750 /* TapShouldBeShorterThanMs */) {
                emitEvent("!PointerCancel", ev, target, node);
                var handled = invokeMouseOwner(onClickText, ev) || (bubble(node, onClickText, ev) != null);
                var delay = (ieVersion()) ? 800 /* MaxBustDelayForIE */ : 500 /* MaxBustDelay */;
                toBust.push([ev.x, ev.y, exports.now() + delay, handled ? 1 : 0]);
                return handled;
            }
        }
    }
    return false;
}
function bustingPointerCancel(ev, _target, _node) {
    delete pointersDown[ev.id];
    if (firstPointerDown == ev.id) {
        firstPointerDown = -1;
    }
    return false;
}
function bustingClick(ev, _target, _node) {
    var n = exports.now();
    for (var i = 0; i < toBust.length; i++) {
        var j = toBust[i];
        if (j[2] < n) {
            toBust.splice(i, 1);
            i--;
            continue;
        }
        if (diffLess(j[0], ev.clientX, 50 /* BustDistance */) && diffLess(j[1], ev.clientY, 50 /* BustDistance */)) {
            toBust.splice(i, 1);
            if (j[3])
                preventDefault(ev);
            return true;
        }
    }
    return false;
}
var bustingEventNames = ["!PointerDown", "!PointerMove", "!PointerUp", "!PointerCancel", "click"];
var bustingEventHandlers = [bustingPointerDown, bustingPointerMove, bustingPointerUp, bustingPointerCancel, bustingClick];
for (var i = 0; i < 5 /*bustingEventNames.length*/; i++) {
    addEvent(bustingEventNames[i], 3, bustingEventHandlers[i]);
}
function createHandlerMouse(handlerName) {
    return function (ev, _target, node) {
        if (firstPointerDown != ev.id && !noPointersDown())
            return false;
        if (invokeMouseOwner(handlerName, ev) || bubble(node, handlerName, ev)) {
            return true;
        }
        return false;
    };
}
var mouseHandlerNames = ["Down", "Move", "Up", "Up"];
for (var i = 0; i < 4; i++) {
    addEvent(bustingEventNames[i], 80, createHandlerMouse("onMouse" + mouseHandlerNames[i]));
}
function decodeButton(ev) {
    return ev.which || ev.button;
}
function createHandler(handlerName, allButtons) {
    return function (ev, target, node) {
        if (listeningEventDeepness == 1 && (node != null || target.nodeName != "INPUT" || ev.clientX != 0 || ev.clientY != 0)) {
            target = document.elementFromPoint(ev.clientX, ev.clientY);
            node = deref(target);
            if (hasPointerEventsNoneB(node)) {
                var fixed = pointerEventsNoneFix(ev.clientX, ev.clientY, target, node);
                target = fixed[0];
                node = fixed[1];
            }
        }
        var button = decodeButton(ev) || 1;
        // Ignore non left mouse click/dblclick event, but not for contextmenu event
        if (!allButtons && button !== 1)
            return false;
        var param = { x: ev.clientX, y: ev.clientY, button: button, shift: ev.shiftKey, ctrl: ev.ctrlKey, alt: ev.altKey, meta: ev.metaKey || false, count: ev.detail || 1 };
        if (invokeMouseOwner(handlerName, param) || bubble(node, handlerName, param)) {
            preventDefault(ev);
            return true;
        }
        return false;
    };
}
function nodeOnPoint(x, y) {
    var target = document.elementFromPoint(x, y);
    var node = deref(target);
    if (hasPointerEventsNoneB(node)) {
        var fixed = pointerEventsNoneFix(x, y, target, node);
        node = fixed[1];
    }
    return node;
}
exports.nodeOnPoint = nodeOnPoint;
function handleSelectStart(ev, _target, node) {
    while (node) {
        var s = node.style;
        if (s) {
            var us = s.userSelect;
            if (us === "none") {
                preventDefault(ev);
                return true;
            }
            if (us) {
                break;
            }
        }
        node = node.parent;
    }
    return false;
}
addEvent5("selectstart", handleSelectStart);
// click must have higher priority over onchange detection
addEvent5("click", createHandler(onClickText));
addEvent5("dblclick", createHandler("onDoubleClick"));
addEvent5("contextmenu", createHandler("onContextMenu", true));
var wheelSupport = ("onwheel" in document.createElement("div") ? "" : "mouse") + "wheel";
function handleMouseWheel(ev, target, node) {
    if (hasPointerEventsNoneB(node)) {
        var fixed = pointerEventsNoneFix(ev.x, ev.y, target, node);
        target = fixed[0];
        node = fixed[1];
    }
    var button = ev.button + 1;
    var buttons = ev.buttons;
    if (button === 0 && buttons) {
        button = 1;
        while (!(buttons & 1)) {
            buttons = buttons >> 1;
            button++;
        }
    }
    var dx = 0, dy;
    if (wheelSupport == "mousewheel") {
        dy = -1 / 40 * ev.wheelDelta;
        ev.wheelDeltaX && (dx = -1 / 40 * ev.wheelDeltaX);
    }
    else {
        dx = ev.deltaX;
        dy = ev.deltaY;
    }
    var param = { dx: dx, dy: dy, x: ev.clientX, y: ev.clientY, button: button, shift: ev.shiftKey, ctrl: ev.ctrlKey, alt: ev.altKey, meta: ev.metaKey || false, count: ev.detail };
    if (invokeMouseOwner("onMouseWheel", param) || bubble(node, "onMouseWheel", param)) {
        preventDefault(ev);
        return true;
    }
    return false;
}
addEvent5(wheelSupport, handleMouseWheel);
exports.pointersDownCount = function () { return Object.keys(pointersDown).length; };
exports.firstPointerDownId = function () { return firstPointerDown; };
exports.ignoreClick = function (x, y) {
    var delay = ieVersion() ? 800 /* MaxBustDelayForIE */ : 500 /* MaxBustDelay */;
    toBust.push([x, y, exports.now() + delay, 1]);
};
// Bobril.Focus
var currentActiveElement = undefined;
var currentFocusedNode = undefined;
var nodestack = [];
function emitOnFocusChange(inFocus) {
    var newActiveElement = (document.hasFocus() || inFocus) ? document.activeElement : undefined;
    if (newActiveElement !== currentActiveElement) {
        currentActiveElement = newActiveElement;
        var newstack = vdomPath(currentActiveElement);
        var common = 0;
        while (common < nodestack.length && common < newstack.length && nodestack[common] === newstack[common])
            common++;
        var i = nodestack.length - 1;
        var n;
        var c;
        if (i >= common) {
            n = nodestack[i];
            if (n) {
                c = n.component;
                if (c && c.onBlur)
                    c.onBlur(n.ctx);
            }
            i--;
        }
        while (i >= common) {
            n = nodestack[i];
            if (n) {
                c = n.component;
                if (c && c.onFocusOut)
                    c.onFocusOut(n.ctx);
            }
            i--;
        }
        i = common;
        while (i + 1 < newstack.length) {
            n = newstack[i];
            if (n) {
                c = n.component;
                if (c && c.onFocusIn)
                    c.onFocusIn(n.ctx);
            }
            i++;
        }
        if (i < newstack.length) {
            n = newstack[i];
            if (n) {
                c = n.component;
                if (c && c.onFocus)
                    c.onFocus(n.ctx);
            }
            i++;
        }
        nodestack = newstack;
        currentFocusedNode = nodestack.length == 0 ? undefined : null2undefined(nodestack[nodestack.length - 1]);
    }
    return false;
}
function emitOnFocusChangeDelayed() {
    setTimeout(function () { return emitOnFocusChange(false); }, 10);
    return false;
}
addEvent("^focus", 50, function () { return emitOnFocusChange(true); });
addEvent("^blur", 50, emitOnFocusChangeDelayed);
function focused() {
    return currentFocusedNode;
}
exports.focused = focused;
function focus(node) {
    if (node == null)
        return false;
    if (isString(node))
        return false;
    var style = node.style;
    if (style != null) {
        if (style.visibility === "hidden")
            return false;
        if (style.display === "none")
            return false;
    }
    var attrs = node.attrs;
    if (attrs != null) {
        var ti = attrs.tabindex != null ? attrs.tabindex : attrs.tabIndex; // < tabIndex is here because of backward compatibility
        if (ti !== undefined || node.tag && focusableTag.test(node.tag)) {
            var el = node.element;
            el.focus();
            emitOnFocusChange(false);
            return true;
        }
    }
    var children = node.children;
    if (exports.isArray(children)) {
        for (var i = 0; i < children.length; i++) {
            if (focus(children[i]))
                return true;
        }
        return false;
    }
    return false;
}
exports.focus = focus;
// Bobril.Scroll
var callbacks = [];
function emitOnScroll(_ev, _target, node) {
    var info = {
        node: node
    };
    for (var i = 0; i < callbacks.length; i++) {
        callbacks[i](info);
    }
    return false;
}
// capturing event to hear everything
addEvent("^scroll", 10, emitOnScroll);
function addOnScroll(callback) {
    callbacks.push(callback);
}
exports.addOnScroll = addOnScroll;
function removeOnScroll(callback) {
    for (var i = 0; i < callbacks.length; i++) {
        if (callbacks[i] === callback) {
            callbacks.splice(i, 1);
            return;
        }
    }
}
exports.removeOnScroll = removeOnScroll;
var isHtml = /^(?:html)$/i;
var isScrollOrAuto = /^(?:auto)$|^(?:scroll)$/i;
// inspired by https://github.com/litera/jquery-scrollintoview/blob/master/jquery.scrollintoview.js
function isScrollable(el) {
    var styles = window.getComputedStyle(el);
    var res = [true, true];
    if (!isHtml.test(el.nodeName)) {
        res[0] = isScrollOrAuto.test(styles.overflowX);
        res[1] = isScrollOrAuto.test(styles.overflowY);
    }
    res[0] = res[0] && el.scrollWidth > el.clientWidth;
    res[1] = res[1] && el.scrollHeight > el.clientHeight;
    return res;
}
exports.isScrollable = isScrollable;
// returns standart X,Y order
function getWindowScroll() {
    var left = window.pageXOffset;
    var top = window.pageYOffset;
    return [left, top];
}
exports.getWindowScroll = getWindowScroll;
// returns node offset on page in standart X,Y order
function nodePagePos(node) {
    var rect = getDomNode(node).getBoundingClientRect();
    var res = getWindowScroll();
    res[0] += rect.left;
    res[1] += rect.top;
    return res;
}
exports.nodePagePos = nodePagePos;
var cachedConvertPointFromClientToNode;
var CSSMatrix = (function () {
    function CSSMatrix(data) {
        this.data = data;
    }
    CSSMatrix.fromString = function (s) {
        var c = s.match(/matrix3?d?\(([^\)]+)\)/i)[1].split(",");
        if (c.length === 6) {
            c = [c[0], c[1], "0", "0", c[2], c[3], "0", "0", "0", "0", "1", "0", c[4], c[5], "0", "1"];
        }
        return new CSSMatrix([
            parseFloat(c[0]), parseFloat(c[4]), parseFloat(c[8]), parseFloat(c[12]),
            parseFloat(c[1]), parseFloat(c[5]), parseFloat(c[9]), parseFloat(c[13]),
            parseFloat(c[2]), parseFloat(c[6]), parseFloat(c[10]), parseFloat(c[14]),
            parseFloat(c[3]), parseFloat(c[7]), parseFloat(c[11]), parseFloat(c[15])
        ]);
    };
    ;
    CSSMatrix.identity = function () {
        return new CSSMatrix([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    };
    CSSMatrix.prototype.multiply = function (m) {
        var a = this.data;
        var b = m.data;
        return new CSSMatrix([
            a[0] * b[0] + a[1] * b[4] + a[2] * b[8] + a[3] * b[12],
            a[0] * b[1] + a[1] * b[5] + a[2] * b[9] + a[3] * b[13],
            a[0] * b[2] + a[1] * b[6] + a[2] * b[10] + a[3] * b[14],
            a[0] * b[3] + a[1] * b[7] + a[2] * b[11] + a[3] * b[15],
            a[4] * b[0] + a[5] * b[4] + a[6] * b[8] + a[7] * b[12],
            a[4] * b[1] + a[5] * b[5] + a[6] * b[9] + a[7] * b[13],
            a[4] * b[2] + a[5] * b[6] + a[6] * b[10] + a[7] * b[14],
            a[4] * b[3] + a[5] * b[7] + a[6] * b[11] + a[7] * b[15],
            a[8] * b[0] + a[9] * b[4] + a[10] * b[8] + a[11] * b[12],
            a[8] * b[1] + a[9] * b[5] + a[10] * b[9] + a[11] * b[13],
            a[8] * b[2] + a[9] * b[6] + a[10] * b[10] + a[11] * b[14],
            a[8] * b[3] + a[9] * b[7] + a[10] * b[11] + a[11] * b[15],
            a[12] * b[0] + a[13] * b[4] + a[14] * b[8] + a[15] * b[12],
            a[12] * b[1] + a[13] * b[5] + a[14] * b[9] + a[15] * b[13],
            a[12] * b[2] + a[13] * b[6] + a[14] * b[10] + a[15] * b[14],
            a[12] * b[3] + a[13] * b[7] + a[14] * b[11] + a[15] * b[15],
        ]);
    };
    ;
    CSSMatrix.prototype.translate = function (tx, ty, tz) {
        var z = new CSSMatrix([1, 0, 0, tx, 0, 1, 0, ty, 0, 0, 1, tz, 0, 0, 0, 1]);
        return this.multiply(z);
    };
    ;
    CSSMatrix.prototype.inverse = function () {
        var m = this.data;
        var a = m[0];
        var b = m[1];
        var c = m[2];
        var d = m[4];
        var e = m[5];
        var f = m[6];
        var g = m[8];
        var h = m[9];
        var k = m[10];
        var A = e * k - f * h;
        var B = f * g - d * k;
        var C = d * h - e * g;
        var D = c * h - b * k;
        var E = a * k - c * g;
        var F = b * g - a * h;
        var G = b * f - c * e;
        var H = c * d - a * f;
        var K = a * e - b * d;
        var det = a * A + b * B + c * C;
        var X = new CSSMatrix([A / det, D / det, G / det, 0,
            B / det, E / det, H / det, 0,
            C / det, F / det, K / det, 0,
            0, 0, 0, 1]);
        var Y = new CSSMatrix([1, 0, 0, -m[3],
            0, 1, 0, -m[7],
            0, 0, 1, -m[11],
            0, 0, 0, 1]);
        return X.multiply(Y);
    };
    ;
    CSSMatrix.prototype.transformPoint = function (x, y) {
        var m = this.data;
        return [m[0] * x + m[1] * y + m[3], m[4] * x + m[5] * y + m[7]];
    };
    ;
    return CSSMatrix;
}());
function getTransformationMatrix(element) {
    var identity = CSSMatrix.identity();
    var transformationMatrix = identity;
    var x = element;
    var doc = x.ownerDocument.documentElement;
    while (x != undefined && x !== doc && x.nodeType != 1)
        x = x.parentNode;
    while (x != undefined && x !== doc) {
        var computedStyle = window.getComputedStyle(x, undefined);
        var c = CSSMatrix.fromString((computedStyle.transform || computedStyle.OTransform || computedStyle.WebkitTransform || computedStyle.msTransform || computedStyle.MozTransform || "none").replace(/^none$/, "matrix(1,0,0,1,0,0)"));
        transformationMatrix = c.multiply(transformationMatrix);
        x = x.parentNode;
    }
    var w;
    var h;
    if ((element.nodeName + "").toLowerCase() === "svg") {
        var cs = getComputedStyle(element, undefined);
        w = parseFloat(cs.getPropertyValue("width")) || 0;
        h = parseFloat(cs.getPropertyValue("height")) || 0;
    }
    else {
        w = element.offsetWidth;
        h = element.offsetHeight;
    }
    var i = 4;
    var left = +Infinity;
    var top = +Infinity;
    while (--i >= 0) {
        var p = transformationMatrix.transformPoint(i === 0 || i === 1 ? 0 : w, i === 0 || i === 3 ? 0 : h);
        if (p[0] < left) {
            left = p[0];
        }
        if (p[1] < top) {
            top = p[1];
        }
    }
    var rect = element.getBoundingClientRect();
    transformationMatrix = identity.translate(rect.left - left, rect.top - top, 0).multiply(transformationMatrix);
    return transformationMatrix;
}
function convertPointFromClientToNode(node, pageX, pageY) {
    var element = getDomNode(node);
    if (cachedConvertPointFromClientToNode == null) {
        var conv_1 = window.webkitConvertPointFromPageToNode;
        if (conv_1) {
            cachedConvertPointFromClientToNode = function (element, x, y) {
                var scr = getWindowScroll();
                var res = conv_1(element, new WebKitPoint(scr[0] + x, scr[1] + y));
                return [res.x, res.y];
            };
        }
        else {
            cachedConvertPointFromClientToNode = function (element, x, y) {
                return getTransformationMatrix(element).inverse().transformPoint(x, y);
            };
        }
    }
    return cachedConvertPointFromClientToNode(element, pageX, pageY);
}
exports.convertPointFromClientToNode = convertPointFromClientToNode;
;
var lastDndId = 0;
var dnds = [];
var systemdnd = null;
var rootId = null;
var bodyCursorBackup;
var userSelectBackup;
var shimedStyle = { userSelect: '' };
shimStyle(shimedStyle);
var shimedStyleKeys = Object.keys(shimedStyle);
var userSelectPropName = shimedStyleKeys[shimedStyleKeys.length - 1]; // renamed is last
var DndCtx = function (pointerId) {
    this.id = ++lastDndId;
    this.pointerid = pointerId;
    this.enabledOperations = 7 /* MoveCopyLink */;
    this.operation = 0 /* None */;
    this.started = false;
    this.beforeDrag = true;
    this.local = true;
    this.system = false;
    this.ended = false;
    this.cursor = null;
    this.overNode = undefined;
    this.targetCtx = null;
    this.dragView = null;
    this.startX = 0;
    this.startY = 0;
    this.distanceToStart = 10;
    this.x = 0;
    this.y = 0;
    this.deltaX = 0;
    this.deltaY = 0;
    this.totalX = 0;
    this.totalY = 0;
    this.lastX = 0;
    this.lastY = 0;
    this.shift = false;
    this.ctrl = false;
    this.alt = false;
    this.meta = false;
    this.data = newHashObj();
    if (pointerId >= 0)
        pointer2Dnd[pointerId] = this;
    dnds.push(this);
};
function lazyCreateRoot() {
    if (rootId == null) {
        var dbs = document.body.style;
        bodyCursorBackup = dbs.cursor;
        userSelectBackup = dbs[userSelectPropName];
        dbs[userSelectPropName] = 'none';
        rootId = addRoot(dndRootFactory);
    }
}
var DndComp = {
    render: function (ctx, me) {
        var dnd = ctx.data;
        me.tag = "div";
        me.style = { position: "absolute", left: dnd.x, top: dnd.y };
        me.children = dnd.dragView(dnd);
    }
};
function currentCursor() {
    var cursor = "no-drop";
    if (dnds.length !== 0) {
        var dnd = dnds[0];
        if (dnd.beforeDrag)
            return "";
        if (dnd.cursor != null)
            return dnd.cursor;
        if (dnd.system)
            return "";
        switch (dnd.operation) {
            case 3 /* Move */:
                cursor = 'move';
                break;
            case 1 /* Link */:
                cursor = 'alias';
                break;
            case 2 /* Copy */:
                cursor = 'copy';
                break;
        }
    }
    return cursor;
}
var DndRootComp = {
    render: function (_ctx, me) {
        var res = [];
        for (var i = 0; i < dnds.length; i++) {
            var dnd = dnds[i];
            if (dnd.beforeDrag)
                continue;
            if (dnd.dragView != null && (dnd.x != 0 || dnd.y != 0)) {
                res.push({ key: "" + dnd.id, data: dnd, component: DndComp });
            }
        }
        me.tag = "div";
        me.style = { position: "fixed", pointerEvents: "none", userSelect: "none", left: 0, top: 0, right: 0, bottom: 0 };
        var dbs = document.body.style;
        var cur = currentCursor();
        if (cur && dbs.cursor !== cur)
            dbs.cursor = cur;
        me.children = res;
    },
    onDrag: function (ctx) {
        exports.invalidate(ctx);
        return false;
    }
};
function dndRootFactory() {
    return { component: DndRootComp };
}
var dndProto = DndCtx.prototype;
dndProto.setOperation = function (operation) {
    this.operation = operation;
};
dndProto.setDragNodeView = function (view) {
    this.dragView = view;
};
dndProto.addData = function (type, data) {
    this.data[type] = data;
    return true;
};
dndProto.listData = function () {
    return Object.keys(this.data);
};
dndProto.hasData = function (type) {
    return this.data[type] !== undefined;
};
dndProto.getData = function (type) {
    return this.data[type];
};
dndProto.setEnabledOps = function (ops) {
    this.enabledOperations = ops;
};
dndProto.cancelDnd = function () {
    dndmoved(undefined, this);
    this.destroy();
};
dndProto.destroy = function () {
    this.ended = true;
    if (this.started)
        broadcast("onDragEnd", this);
    delete pointer2Dnd[this.pointerid];
    for (var i = 0; i < dnds.length; i++) {
        if (dnds[i] === this) {
            dnds.splice(i, 1);
            break;
        }
    }
    if (systemdnd === this) {
        systemdnd = null;
    }
    if (dnds.length === 0 && rootId != null) {
        removeRoot(rootId);
        rootId = null;
        var dbs = document.body.style;
        dbs.cursor = bodyCursorBackup;
        dbs[userSelectPropName] = userSelectBackup;
    }
};
var pointer2Dnd = newHashObj();
function handlePointerDown(ev, _target, node) {
    var dnd = pointer2Dnd[ev.id];
    if (dnd) {
        dnd.cancelDnd();
    }
    if (ev.button <= 1) {
        dnd = new DndCtx(ev.id);
        dnd.startX = ev.x;
        dnd.startY = ev.y;
        dnd.lastX = ev.x;
        dnd.lastY = ev.y;
        dnd.overNode = node;
        updateDndFromPointerEvent(dnd, ev);
        var sourceCtx = bubble(node, "onDragStart", dnd);
        if (sourceCtx) {
            var htmlNode = getDomNode(sourceCtx.me);
            if (htmlNode == null) {
                dnd.destroy();
                return false;
            }
            dnd.started = true;
            var boundFn = htmlNode.getBoundingClientRect;
            if (boundFn) {
                var rect = boundFn.call(htmlNode);
                dnd.deltaX = rect.left - ev.x;
                dnd.deltaY = rect.top - ev.y;
            }
            if (dnd.distanceToStart <= 0) {
                dnd.beforeDrag = false;
                dndmoved(node, dnd);
            }
            lazyCreateRoot();
        }
        else {
            dnd.destroy();
        }
    }
    return false;
}
function dndmoved(node, dnd) {
    dnd.overNode = node;
    dnd.targetCtx = bubble(node, "onDragOver", dnd);
    if (dnd.targetCtx == null) {
        dnd.operation = 0 /* None */;
    }
    broadcast("onDrag", dnd);
}
function updateDndFromPointerEvent(dnd, ev) {
    dnd.shift = ev.shift;
    dnd.ctrl = ev.ctrl;
    dnd.alt = ev.alt;
    dnd.meta = ev.meta;
    dnd.x = ev.x;
    dnd.y = ev.y;
}
function handlePointerMove(ev, _target, node) {
    var dnd = pointer2Dnd[ev.id];
    if (!dnd)
        return false;
    dnd.totalX += Math.abs(ev.x - dnd.lastX);
    dnd.totalY += Math.abs(ev.y - dnd.lastY);
    if (dnd.beforeDrag) {
        if (dnd.totalX + dnd.totalY <= dnd.distanceToStart) {
            dnd.lastX = ev.x;
            dnd.lastY = ev.y;
            return false;
        }
        dnd.beforeDrag = false;
    }
    updateDndFromPointerEvent(dnd, ev);
    dndmoved(node, dnd);
    dnd.lastX = ev.x;
    dnd.lastY = ev.y;
    return true;
}
function handlePointerUp(ev, _target, node) {
    var dnd = pointer2Dnd[ev.id];
    if (!dnd)
        return false;
    if (!dnd.beforeDrag) {
        updateDndFromPointerEvent(dnd, ev);
        dndmoved(node, dnd);
        var t = dnd.targetCtx;
        if (t && bubble(t.me, "onDrop", dnd)) {
            dnd.destroy();
        }
        else {
            dnd.cancelDnd();
        }
        exports.ignoreClick(ev.x, ev.y);
        return true;
    }
    dnd.destroy();
    return false;
}
function handlePointerCancel(ev, _target, _node) {
    var dnd = pointer2Dnd[ev.id];
    if (!dnd)
        return false;
    if (!dnd.beforeDrag) {
        dnd.cancelDnd();
    }
    else {
        dnd.destroy();
    }
    return false;
}
function updateFromNative(dnd, ev) {
    dnd.shift = ev.shiftKey;
    dnd.ctrl = ev.ctrlKey;
    dnd.alt = ev.altKey;
    dnd.meta = ev.metaKey;
    dnd.x = ev.clientX;
    dnd.y = ev.clientY;
    dnd.totalX += Math.abs(dnd.x - dnd.lastX);
    dnd.totalY += Math.abs(dnd.y - dnd.lastY);
    var node = nodeOnPoint(dnd.x, dnd.y); // Needed to correctly emulate pointerEvents:none
    dndmoved(node, dnd);
    dnd.lastX = dnd.x;
    dnd.lastY = dnd.y;
}
var effectAllowedTable = ["none", "link", "copy", "copyLink", "move", "linkMove", "copyMove", "all"];
function handleDragStart(ev, _target, node) {
    var dnd = systemdnd;
    if (dnd != null) {
        dnd.destroy();
    }
    var activePointerIds = Object.keys(pointer2Dnd);
    if (activePointerIds.length > 0) {
        dnd = pointer2Dnd[activePointerIds[0]];
        dnd.system = true;
        systemdnd = dnd;
    }
    else {
        var startX = ev.clientX, startY = ev.clientY;
        dnd = new DndCtx(-1);
        dnd.system = true;
        systemdnd = dnd;
        dnd.x = startX;
        dnd.y = startY;
        dnd.lastX = startX;
        dnd.lastY = startY;
        dnd.startX = startX;
        dnd.startY = startY;
        var sourceCtx = bubble(node, "onDragStart", dnd);
        if (sourceCtx) {
            var htmlNode = getDomNode(sourceCtx.me);
            if (htmlNode == null) {
                dnd.destroy();
                return false;
            }
            dnd.started = true;
            var boundFn = htmlNode.getBoundingClientRect;
            if (boundFn) {
                var rect = boundFn.call(htmlNode);
                dnd.deltaX = rect.left - startX;
                dnd.deltaY = rect.top - startY;
            }
            lazyCreateRoot();
        }
        else {
            dnd.destroy();
            return false;
        }
    }
    dnd.beforeDrag = false;
    var eff = effectAllowedTable[dnd.enabledOperations];
    var dt = ev.dataTransfer;
    dt.effectAllowed = eff;
    if (dt.setDragImage) {
        var div = document.createElement("div");
        div.style.pointerEvents = "none";
        dt.setDragImage(div, 0, 0);
    }
    else {
        // For IE10 and IE11 hack to hide default drag element
        var style = ev.target.style;
        var opacityBackup = style.opacity;
        var widthBackup = style.width;
        var heightBackup = style.height;
        var paddingBackup = style.padding;
        style.opacity = "0";
        style.width = "0";
        style.height = "0";
        style.padding = "0";
        window.setTimeout(function () {
            style.opacity = opacityBackup;
            style.width = widthBackup;
            style.height = heightBackup;
            style.padding = paddingBackup;
        }, 0);
    }
    var datas = dnd.data;
    var dataKeys = Object.keys(datas);
    for (var i = 0; i < dataKeys.length; i++) {
        try {
            var k = dataKeys[i];
            var d = datas[k];
            if (!isString(d))
                d = JSON.stringify(d);
            ev.dataTransfer.setData(k, d);
        }
        catch (e) {
            if (DEBUG)
                if (window.console)
                    console.log("Cannot set dnd data to " + dataKeys[i]);
        }
    }
    updateFromNative(dnd, ev);
    return false;
}
function setDropEffect(ev, op) {
    ev.dataTransfer.dropEffect = ["none", "link", "copy", "move"][op];
}
function handleDragOver(ev, _target, _node) {
    var dnd = systemdnd;
    if (dnd == null) {
        dnd = new DndCtx(-1);
        dnd.system = true;
        systemdnd = dnd;
        dnd.x = ev.clientX;
        dnd.y = ev.clientY;
        dnd.startX = dnd.x;
        dnd.startY = dnd.y;
        dnd.local = false;
        var dt = ev.dataTransfer;
        var eff = 0;
        var effectAllowed = undefined;
        try {
            effectAllowed = dt.effectAllowed;
        }
        catch (e) { }
        for (; eff < 7; eff++) {
            if (effectAllowedTable[eff] === effectAllowed)
                break;
        }
        dnd.enabledOperations = eff;
        var dttypes = dt.types;
        if (dttypes) {
            for (var i = 0; i < dttypes.length; i++) {
                var tt = dttypes[i];
                if (tt === "text/plain")
                    tt = "Text";
                else if (tt === "text/uri-list")
                    tt = "Url";
                dnd.data[tt] = null;
            }
        }
        else {
            if (dt.getData("Text") !== undefined)
                dnd.data["Text"] = null;
        }
    }
    updateFromNative(dnd, ev);
    setDropEffect(ev, dnd.operation);
    if (dnd.operation != 0 /* None */) {
        preventDefault(ev);
        return true;
    }
    return false;
}
function handleDrag(ev, _target, _node) {
    var x = ev.clientX;
    var y = ev.clientY;
    var m = getMedia();
    if (systemdnd != null && (x === 0 && y === 0 || x < 0 || y < 0 || x >= m.width || y >= m.height)) {
        systemdnd.x = 0;
        systemdnd.y = 0;
        systemdnd.operation = 0 /* None */;
        broadcast("onDrag", systemdnd);
    }
    return false;
}
function handleDragEnd(_ev, _target, _node) {
    if (systemdnd != null) {
        systemdnd.destroy();
    }
    return false;
}
function handleDrop(ev, _target, _node) {
    var dnd = systemdnd;
    if (dnd == null)
        return false;
    dnd.x = ev.clientX;
    dnd.y = ev.clientY;
    if (!dnd.local) {
        var dataKeys = Object.keys(dnd.data);
        var dt = ev.dataTransfer;
        for (var i_7 = 0; i_7 < dataKeys.length; i_7++) {
            var k = dataKeys[i_7];
            var d;
            if (k === "Files") {
                d = [].slice.call(dt.files, 0); // What a useless FileList type! Get rid of it.
            }
            else {
                d = dt.getData(k);
            }
            dnd.data[k] = d;
        }
    }
    updateFromNative(dnd, ev);
    var t = dnd.targetCtx;
    if (t && bubble(t.me, "onDrop", dnd)) {
        setDropEffect(ev, dnd.operation);
        dnd.destroy();
        preventDefault(ev);
    }
    else {
        dnd.cancelDnd();
    }
    return true;
}
function justPreventDefault(ev, _target, _node) {
    preventDefault(ev);
    return true;
}
function handleDndSelectStart(ev, _target, _node) {
    if (dnds.length === 0)
        return false;
    preventDefault(ev);
    return true;
}
function anyActiveDnd() {
    for (var i_8 = 0; i_8 < dnds.length; i_8++) {
        var dnd = dnds[i_8];
        if (dnd.beforeDrag)
            continue;
        return dnd;
    }
    return undefined;
}
exports.anyActiveDnd = anyActiveDnd;
addEvent("!PointerDown", 4, handlePointerDown);
addEvent("!PointerMove", 4, handlePointerMove);
addEvent("!PointerUp", 4, handlePointerUp);
addEvent("!PointerCancel", 4, handlePointerCancel);
addEvent("selectstart", 4, handleDndSelectStart);
addEvent("dragstart", 5, handleDragStart);
addEvent("dragover", 5, handleDragOver);
addEvent("dragend", 5, handleDragEnd);
addEvent("drag", 5, handleDrag);
addEvent("drop", 5, handleDrop);
addEvent("dragenter", 5, justPreventDefault);
addEvent("dragleave", 5, justPreventDefault);
exports.getDnds = function () { return dnds; };
var waitingForPopHashChange = -1;
function emitOnHashChange() {
    if (waitingForPopHashChange >= 0)
        clearTimeout(waitingForPopHashChange);
    waitingForPopHashChange = -1;
    exports.invalidate();
    return false;
}
addEvent("hashchange", 10, emitOnHashChange);
var myAppHistoryDeepness = 0;
var programPath = '';
function push(path, inapp) {
    var l = window.location;
    if (inapp) {
        programPath = path;
        l.hash = path.substring(1);
        myAppHistoryDeepness++;
    }
    else {
        l.href = path;
    }
}
function replace(path, inapp) {
    var l = window.location;
    if (inapp) {
        programPath = path;
        l.replace(l.pathname + l.search + path);
    }
    else {
        l.replace(path);
    }
}
function pop(distance) {
    myAppHistoryDeepness -= distance;
    waitingForPopHashChange = setTimeout(emitOnHashChange, 50);
    window.history.go(-distance);
}
var rootRoutes;
var nameRouteMap = {};
function encodeUrl(url) {
    return encodeURIComponent(url).replace(/%20/g, "+");
}
function decodeUrl(url) {
    return decodeURIComponent(url.replace(/\+/g, " "));
}
function encodeUrlPath(path) {
    return String(path).split("/").map(encodeUrl).join("/");
}
var paramCompileMatcher = /:([a-zA-Z_$][a-zA-Z0-9_$]*)|[*.()\[\]\\+|{}^$]/g;
var paramInjectMatcher = /:([a-zA-Z_$][a-zA-Z0-9_$?]*[?]?)|[*]/g;
var compiledPatterns = {};
function compilePattern(pattern) {
    if (!(pattern in compiledPatterns)) {
        var paramNames = [];
        var source = pattern.replace(paramCompileMatcher, function (match, paramName) {
            if (paramName) {
                paramNames.push(paramName);
                return "([^/?#]+)";
            }
            else if (match === "*") {
                paramNames.push("splat");
                return "(.*?)";
            }
            else {
                return "\\" + match;
            }
        });
        compiledPatterns[pattern] = {
            matcher: new RegExp("^" + source + "$", "i"),
            paramNames: paramNames
        };
    }
    return compiledPatterns[pattern];
}
// Extracts the portions of the given URL path that match the given pattern.
// Returns null if the pattern does not match the given path.
function extractParams(pattern, path) {
    var object = compilePattern(pattern);
    var match = decodeUrl(path).match(object.matcher);
    if (!match)
        return null;
    var params = {};
    var pn = object.paramNames;
    var l = pn.length;
    for (var i = 0; i < l; i++) {
        params[pn[i]] = match[i + 1];
    }
    return params;
}
// Returns a version of the given route path with params interpolated.
// Throws if there is a dynamic segment of the route path for which there is no param.
function injectParams(pattern, params) {
    params = params || {};
    var splatIndex = 0;
    return pattern.replace(paramInjectMatcher, function (_match, paramName) {
        paramName = paramName || "splat";
        // If param is optional don't check for existence
        if (paramName.slice(-1) !== "?") {
            if (params[paramName] == null)
                throw new Error("Missing \"" + paramName + "\" parameter for path \"" + pattern + "\"");
        }
        else {
            paramName = paramName.slice(0, -1);
            if (params[paramName] == null) {
                return "";
            }
        }
        var segment;
        if (paramName === "splat" && Array.isArray(params[paramName])) {
            segment = params[paramName][splatIndex++];
            if (segment == null)
                throw new Error("Missing splat # " + splatIndex + " for path \"" + pattern + "\"");
        }
        else {
            segment = params[paramName];
        }
        return encodeUrlPath(segment);
    });
}
function findMatch(path, rs, outParams) {
    var l = rs.length;
    var notFoundRoute;
    var defaultRoute;
    var params;
    for (var i = 0; i < l; i++) {
        var r = rs[i];
        if (r.isNotFound) {
            notFoundRoute = r;
            continue;
        }
        if (r.isDefault) {
            defaultRoute = r;
            continue;
        }
        if (r.children) {
            var res = findMatch(path, r.children, outParams);
            if (res) {
                res.push(r);
                return res;
            }
        }
        if (r.url) {
            params = extractParams(r.url, path);
            if (params) {
                outParams.p = params;
                return [r];
            }
        }
    }
    if (defaultRoute) {
        params = extractParams(defaultRoute.url || "", path);
        if (params) {
            outParams.p = params;
            return [defaultRoute];
        }
    }
    if (notFoundRoute) {
        params = extractParams(notFoundRoute.url || "", path);
        if (params) {
            outParams.p = params;
            return [notFoundRoute];
        }
    }
    return undefined;
}
;
var activeRoutes = [];
var futureRoutes;
var activeParams = newHashObj();
var nodesArray = [];
var setterOfNodesArray = [];
var urlRegex = /.*(?:\:|\/).*/;
function isInApp(name) {
    return !urlRegex.test(name);
}
function isAbsolute(url) {
    return url[0] === "/";
}
function noop() {
    return undefined;
}
function getSetterOfNodesArray(idx) {
    while (idx >= setterOfNodesArray.length) {
        setterOfNodesArray.push((function (a, i) {
            return (function (n) {
                if (n)
                    a[i] = n;
            });
        })(nodesArray, idx));
    }
    return setterOfNodesArray[idx];
}
var firstRouting = true;
function rootNodeFactory() {
    if (waitingForPopHashChange >= 0)
        return undefined;
    var browserPath = window.location.hash;
    var path = browserPath.substr(1);
    if (!isAbsolute(path))
        path = "/" + path;
    var out = { p: {} };
    var matches = findMatch(path, rootRoutes, out) || [];
    if (firstRouting) {
        firstRouting = false;
        currentTransition = { inApp: true, type: 2 /* Pop */, name: undefined, params: undefined };
        transitionState = -1;
        programPath = browserPath;
    }
    else {
        if (!currentTransition && matches.length > 0 && browserPath != programPath) {
            runTransition(createRedirectPush(matches[0].name, out.p));
        }
    }
    if (currentTransition && currentTransition.type === 2 /* Pop */ && transitionState < 0) {
        programPath = browserPath;
        currentTransition.inApp = true;
        if (currentTransition.name == null && matches.length > 0) {
            currentTransition.name = matches[0].name;
            currentTransition.params = out.p;
            nextIteration();
            if (currentTransition != null)
                return undefined;
        }
        else
            return undefined;
    }
    if (currentTransition == null) {
        activeRoutes = matches;
        while (nodesArray.length > activeRoutes.length)
            nodesArray.pop();
        while (nodesArray.length < activeRoutes.length)
            nodesArray.push(undefined);
        activeParams = out.p;
    }
    var fn = noop;
    for (var i = 0; i < activeRoutes.length; i++) {
        (function (fninner, r, routeParams, i) {
            fn = function (otherdata) {
                var data = r.data || {};
                exports.assign(data, otherdata);
                data.activeRouteHandler = fninner;
                data.routeParams = routeParams;
                var handler = r.handler;
                var res;
                if (isFunction(handler)) {
                    res = handler(data);
                }
                else {
                    res = { key: undefined, ref: undefined, data: data, component: handler };
                }
                if (r.keyBuilder)
                    res.key = r.keyBuilder(routeParams);
                else
                    res.key = r.name;
                res.ref = getSetterOfNodesArray(i);
                return res;
            };
        })(fn, activeRoutes[i], activeParams, i);
    }
    return fn();
}
function joinPath(p1, p2) {
    if (isAbsolute(p2))
        return p2;
    if (p1[p1.length - 1] === "/")
        return p1 + p2;
    return p1 + "/" + p2;
}
function registerRoutes(url, rs) {
    var l = rs.length;
    for (var i = 0; i < l; i++) {
        var r = rs[i];
        var u = url;
        var name = r.name;
        if (!name && url === "/") {
            name = "root";
            r.name = name;
            nameRouteMap[name] = r;
        }
        else if (name) {
            nameRouteMap[name] = r;
            u = joinPath(u, name);
        }
        if (r.isDefault) {
            u = url;
        }
        else if (r.isNotFound) {
            u = joinPath(url, "*");
        }
        else if (r.url) {
            u = joinPath(url, r.url);
        }
        r.url = u;
        if (r.children)
            registerRoutes(u, r.children);
    }
}
function routes(rootroutes) {
    if (!exports.isArray(rootroutes)) {
        rootroutes = [rootroutes];
    }
    registerRoutes("/", rootroutes);
    rootRoutes = rootroutes;
    init(rootNodeFactory);
}
exports.routes = routes;
function route(config, nestedRoutes) {
    return { name: config.name, url: config.url, data: config.data, handler: config.handler, keyBuilder: config.keyBuilder, children: nestedRoutes };
}
exports.route = route;
function routeDefault(config) {
    return { name: config.name, data: config.data, handler: config.handler, keyBuilder: config.keyBuilder, isDefault: true };
}
exports.routeDefault = routeDefault;
function routeNotFound(config) {
    return { name: config.name, data: config.data, handler: config.handler, keyBuilder: config.keyBuilder, isNotFound: true };
}
exports.routeNotFound = routeNotFound;
function isActive(name, params) {
    if (params) {
        for (var prop in params) {
            if (params.hasOwnProperty(prop)) {
                if (activeParams[prop] !== params[prop])
                    return false;
            }
        }
    }
    for (var i = 0, l = activeRoutes.length; i < l; i++) {
        if (activeRoutes[i].name === name) {
            return true;
        }
    }
    return false;
}
exports.isActive = isActive;
function urlOfRoute(name, params) {
    if (isInApp(name)) {
        var r = nameRouteMap[name];
        if (DEBUG) {
            if (rootRoutes == null)
                throw Error('Cannot use urlOfRoute before defining routes');
            if (r == null)
                throw Error('Route with name ' + name + ' if not defined in urlOfRoute');
        }
        return "#" + injectParams(r.url, params);
    }
    return name;
}
exports.urlOfRoute = urlOfRoute;
function link(node, name, params) {
    node.data = node.data || {};
    node.data.routeName = name;
    node.data.routeParams = params;
    postEnhance(node, {
        render: function (ctx, me) {
            var data = ctx.data;
            me.attrs = me.attrs || {};
            if (me.tag === "a") {
                me.attrs.href = urlOfRoute(data.routeName, data.routeParams);
            }
            me.className = me.className || "";
            if (isActive(data.routeName, data.routeParams)) {
                me.className += " active";
            }
        },
        onClick: function (ctx) {
            var data = ctx.data;
            runTransition(createRedirectPush(data.routeName, data.routeParams));
            return true;
        }
    });
    return node;
}
exports.link = link;
function createRedirectPush(name, params) {
    return {
        inApp: isInApp(name),
        type: 0 /* Push */,
        name: name,
        params: params || {}
    };
}
exports.createRedirectPush = createRedirectPush;
function createRedirectReplace(name, params) {
    return {
        inApp: isInApp(name),
        type: 1 /* Replace */,
        name: name,
        params: params || {}
    };
}
exports.createRedirectReplace = createRedirectReplace;
function createBackTransition(distance) {
    distance = distance || 1;
    return {
        inApp: myAppHistoryDeepness >= distance,
        type: 2 /* Pop */,
        name: undefined,
        params: {},
        distance: distance
    };
}
exports.createBackTransition = createBackTransition;
var currentTransition = null;
var nextTransition = null;
var transitionState = 0;
function doAction(transition) {
    switch (transition.type) {
        case 0 /* Push */:
            push(urlOfRoute(transition.name, transition.params), transition.inApp);
            break;
        case 1 /* Replace */:
            replace(urlOfRoute(transition.name, transition.params), transition.inApp);
            break;
        case 2 /* Pop */:
            pop(transition.distance);
            break;
    }
    exports.invalidate();
}
function nextIteration() {
    while (true) {
        if (transitionState >= 0 && transitionState < activeRoutes.length) {
            var node = nodesArray[transitionState];
            transitionState++;
            if (!node)
                continue;
            var comp = node.component;
            if (!comp)
                continue;
            var fn = comp.canDeactivate;
            if (!fn)
                continue;
            var res = fn.call(comp, node.ctx, currentTransition);
            if (res === true)
                continue;
            Promise.resolve(res).then(function (resp) {
                if (resp === true) { }
                else if (resp === false) {
                    currentTransition = null;
                    nextTransition = null;
                    return;
                }
                else {
                    nextTransition = resp;
                }
                nextIteration();
            }).catch(function (err) { if (typeof console !== "undefined" && console.log)
                console.log(err); });
            return;
        }
        else if (transitionState == activeRoutes.length) {
            if (nextTransition) {
                if (currentTransition && currentTransition.type == 0 /* Push */) {
                    push(urlOfRoute(currentTransition.name, currentTransition.params), currentTransition.inApp);
                }
                currentTransition = nextTransition;
                nextTransition = null;
            }
            transitionState = -1;
            if (!currentTransition.inApp || currentTransition.type === 2 /* Pop */) {
                var tr = currentTransition;
                if (!currentTransition.inApp)
                    currentTransition = null;
                doAction(tr);
                return;
            }
        }
        else if (transitionState === -1) {
            var out = { p: {} };
            if (currentTransition.inApp) {
                futureRoutes = findMatch(urlOfRoute(currentTransition.name, currentTransition.params).substring(1), rootRoutes, out) || [];
            }
            else {
                futureRoutes = [];
            }
            transitionState = -2;
        }
        else if (transitionState === -2 - futureRoutes.length) {
            if (nextTransition) {
                transitionState = activeRoutes.length;
                continue;
            }
            if (currentTransition.type !== 2 /* Pop */) {
                var tr = currentTransition;
                currentTransition = null;
                doAction(tr);
            }
            else {
                exports.invalidate();
            }
            currentTransition = null;
            return;
        }
        else {
            if (nextTransition) {
                transitionState = activeRoutes.length;
                continue;
            }
            var rr = futureRoutes[futureRoutes.length + 1 + transitionState];
            transitionState--;
            var handler = rr.handler;
            var comp = undefined;
            if (isFunction(handler)) {
                var node = handler({});
                if (!node)
                    continue;
                comp = node.component;
            }
            else {
                comp = handler;
            }
            if (!comp)
                continue;
            var fn = comp.canActivate;
            if (!fn)
                continue;
            var res = fn.call(comp, currentTransition);
            if (res === true)
                continue;
            Promise.resolve(res).then(function (resp) {
                if (resp === true) { }
                else if (resp === false) {
                    currentTransition = null;
                    nextTransition = null;
                    return;
                }
                else {
                    nextTransition = resp;
                }
                nextIteration();
            }).catch(function (err) { if (typeof console !== "undefined" && console.log)
                console.log(err); });
            return;
        }
    }
}
exports.transitionRunCount = 1;
function runTransition(transition) {
    exports.transitionRunCount++;
    if (currentTransition != null) {
        nextTransition = transition;
        return;
    }
    firstRouting = false;
    currentTransition = transition;
    transitionState = 0;
    nextIteration();
}
exports.runTransition = runTransition;
function anchor(children, name, params) {
    return {
        children: children, component: {
            id: "anchor",
            postUpdateDom: function (ctx, me) {
                var routeName;
                if (name) {
                    routeName = name;
                }
                else {
                    var firstChild = (me.children && me.children[0]);
                    routeName = firstChild.attrs && firstChild.attrs.id;
                }
                if (!isActive(routeName, params)) {
                    ctx.l = 0;
                    return;
                }
                if (ctx.l === exports.transitionRunCount)
                    return;
                getDomNode(me).scrollIntoView();
                ctx.l = exports.transitionRunCount;
            }
        }
    };
}
exports.anchor = anchor;
function getRoutes() {
    return rootRoutes;
}
exports.getRoutes = getRoutes;
function getActiveRoutes() {
    return activeRoutes;
}
exports.getActiveRoutes = getActiveRoutes;
function getActiveParams() {
    return activeParams;
}
exports.getActiveParams = getActiveParams;
var allStyles = newHashObj();
var allSprites = newHashObj();
var allNameHints = newHashObj();
var dynamicSprites = [];
var imageCache = newHashObj();
var injectedCss = "";
var rebuildStyles = false;
var htmlStyle = null;
var globalCounter = 0;
var isIE9 = ieVersion() === 9;
var chainedBeforeFrame = setBeforeFrame(beforeFrame);
var cssSubRuleDelimiter = /\:|\ |\>/;
function buildCssSubRule(parent) {
    var matchSplit = cssSubRuleDelimiter.exec(parent);
    if (!matchSplit)
        return allStyles[parent].name;
    var posSplit = matchSplit.index;
    return allStyles[parent.substring(0, posSplit)].name + parent.substring(posSplit);
}
function buildCssRule(parent, name) {
    var result = "";
    if (parent) {
        if (exports.isArray(parent)) {
            for (var i_9 = 0; i_9 < parent.length; i_9++) {
                if (i_9 > 0) {
                    result += ",";
                }
                result += "." + buildCssSubRule(parent[i_9]) + "." + name;
            }
        }
        else {
            result = "." + buildCssSubRule(parent) + "." + name;
        }
    }
    else {
        result = "." + name;
    }
    return result;
}
function flattenStyle(cur, curPseudo, style, stylePseudo) {
    if (isString(style)) {
        var externalStyle = allStyles[style];
        if (externalStyle === undefined) {
            throw new Error("uknown style " + style);
        }
        flattenStyle(cur, curPseudo, externalStyle.style, externalStyle.pseudo);
    }
    else if (isFunction(style)) {
        style(cur, curPseudo);
    }
    else if (exports.isArray(style)) {
        for (var i_10 = 0; i_10 < style.length; i_10++) {
            flattenStyle(cur, curPseudo, style[i_10], undefined);
        }
    }
    else if (typeof style === "object") {
        for (var key in style) {
            if (!Object.prototype.hasOwnProperty.call(style, key))
                continue;
            var val = style[key];
            if (isFunction(val)) {
                val = val(cur, key);
            }
            cur[key] = val;
        }
    }
    if (stylePseudo != null && curPseudo != null) {
        for (var pseudoKey in stylePseudo) {
            var curPseudoVal = curPseudo[pseudoKey];
            if (curPseudoVal === undefined) {
                curPseudoVal = newHashObj();
                curPseudo[pseudoKey] = curPseudoVal;
            }
            flattenStyle(curPseudoVal, undefined, stylePseudo[pseudoKey], undefined);
        }
    }
}
var firstStyles = false;
function beforeFrame() {
    var dbs = document.body.style;
    if (firstStyles && uptimeMs >= 150) {
        dbs.opacity = "1";
        firstStyles = false;
    }
    if (rebuildStyles) {
        // Hack around bug in Chrome to not have FOUC
        if (frameCounter === 1 && "webkitAnimation" in dbs) {
            firstStyles = true;
            dbs.opacity = "0";
            setTimeout(exports.invalidate, 200);
        }
        for (var i_11 = 0; i_11 < dynamicSprites.length; i_11++) {
            var dynSprite = dynamicSprites[i_11];
            var image = imageCache[dynSprite.url];
            if (image == null)
                continue;
            var colorStr = dynSprite.color();
            if (colorStr !== dynSprite.lastColor) {
                dynSprite.lastColor = colorStr;
                if (dynSprite.width == null)
                    dynSprite.width = image.width;
                if (dynSprite.height == null)
                    dynSprite.height = image.height;
                var lastUrl = recolorAndClip(image, colorStr, dynSprite.width, dynSprite.height, dynSprite.left, dynSprite.top);
                var stDef = allStyles[dynSprite.styleid];
                stDef.style = { backgroundImage: "url(" + lastUrl + ")", width: dynSprite.width, height: dynSprite.height, backgroundPosition: 0 };
            }
        }
        var stylestr = injectedCss;
        for (var key in allStyles) {
            var ss = allStyles[key];
            var parent_1 = ss.parent;
            var name_1 = ss.name;
            var sspseudo = ss.pseudo;
            var ssstyle = ss.style;
            if (isFunction(ssstyle) && ssstyle.length === 0) {
                _a = ssstyle(), ssstyle = _a[0], sspseudo = _a[1];
            }
            if (isString(ssstyle) && sspseudo == null) {
                ss.realname = ssstyle;
                assert(name_1 != null, "Cannot link existing class to selector");
                continue;
            }
            ss.realname = name_1;
            var style_1 = newHashObj();
            var flattenPseudo = newHashObj();
            flattenStyle(undefined, flattenPseudo, undefined, sspseudo);
            flattenStyle(style_1, flattenPseudo, ssstyle, undefined);
            var extractedInlStyle = null;
            if (style_1["pointerEvents"]) {
                extractedInlStyle = newHashObj();
                extractedInlStyle["pointerEvents"] = style_1["pointerEvents"];
            }
            if (isIE9) {
                if (style_1["userSelect"]) {
                    if (extractedInlStyle == null)
                        extractedInlStyle = newHashObj();
                    extractedInlStyle["userSelect"] = style_1["userSelect"];
                    delete style_1["userSelect"];
                }
            }
            ss.inlStyle = extractedInlStyle;
            shimStyle(style_1);
            var cssStyle = inlineStyleToCssDeclaration(style_1);
            if (cssStyle.length > 0)
                stylestr += (name_1 == null ? parent_1 : buildCssRule(parent_1, name_1)) + " {" + cssStyle + "}\n";
            for (var key2 in flattenPseudo) {
                var sspi = flattenPseudo[key2];
                shimStyle(sspi);
                stylestr += (name_1 == null ? parent_1 + ":" + key2 : buildCssRule(parent_1, name_1 + ":" + key2))
                    + " {" + inlineStyleToCssDeclaration(sspi) + "}\n";
            }
        }
        var styleElement = document.createElement("style");
        styleElement.type = 'text/css';
        if (styleElement.styleSheet) {
            styleElement.styleSheet.cssText = stylestr;
        }
        else {
            styleElement.appendChild(document.createTextNode(stylestr));
        }
        var head = document.head || document.getElementsByTagName('head')[0];
        if (htmlStyle != null) {
            head.replaceChild(styleElement, htmlStyle);
        }
        else {
            head.appendChild(styleElement);
        }
        htmlStyle = styleElement;
        rebuildStyles = false;
    }
    chainedBeforeFrame();
    var _a;
}
function style(node) {
    var styles = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        styles[_i - 1] = arguments[_i];
    }
    var className = node.className;
    var inlineStyle = node.style;
    var stack = null;
    var i = 0;
    var ca = styles;
    while (true) {
        if (ca.length === i) {
            if (stack === null || stack.length === 0)
                break;
            ca = stack.pop();
            i = stack.pop() + 1;
            continue;
        }
        var s = ca[i];
        if (s == null || s === true || s === false || s === '') {
        }
        else if (isString(s)) {
            var sd = allStyles[s];
            if (className == null)
                className = sd.realname;
            else
                className = className + " " + sd.realname;
            var inls = sd.inlStyle;
            if (inls) {
                if (inlineStyle == null)
                    inlineStyle = {};
                inlineStyle = exports.assign(inlineStyle, inls);
            }
        }
        else if (exports.isArray(s)) {
            if (ca.length > i + 1) {
                if (stack == null)
                    stack = [];
                stack.push(i);
                stack.push(ca);
            }
            ca = s;
            i = 0;
            continue;
        }
        else {
            if (inlineStyle == null)
                inlineStyle = {};
            for (var key in s) {
                if (s.hasOwnProperty(key)) {
                    var val = s[key];
                    if (isFunction(val))
                        val = val();
                    inlineStyle[key] = val;
                }
            }
        }
        i++;
    }
    node.className = className;
    node.style = inlineStyle;
    return node;
}
exports.style = style;
var uppercasePattern = /([A-Z])/g;
var msPattern = /^ms-/;
function hyphenateStyle(s) {
    if (s === "cssFloat")
        return "float";
    return s.replace(uppercasePattern, '-$1').toLowerCase().replace(msPattern, '-ms-');
}
function inlineStyleToCssDeclaration(style) {
    var res = "";
    for (var key in style) {
        var v = style[key];
        if (v === undefined)
            continue;
        res += hyphenateStyle(key) + ":" + (v === "" ? '""' : v) + ";";
    }
    res = res.slice(0, -1);
    return res;
}
// PureFuncs: styleDef, styleDefEx, sprite, spriteb, spritebc, asset
function styleDef(style, pseudo, nameHint) {
    return styleDefEx(undefined, style, pseudo, nameHint);
}
exports.styleDef = styleDef;
function styleDefEx(parent, style, pseudo, nameHint) {
    if (nameHint && nameHint !== "b-") {
        if (allNameHints[nameHint]) {
            var counter = 1;
            while (allNameHints[nameHint + counter])
                counter++;
            nameHint = nameHint + counter;
        }
        allNameHints[nameHint] = true;
    }
    else {
        nameHint = "b-" + globalCounter++;
    }
    allStyles[nameHint] = { name: nameHint, realname: nameHint, parent: parent, style: style, inlStyle: null, pseudo: pseudo };
    invalidateStyles();
    return nameHint;
}
exports.styleDefEx = styleDefEx;
function selectorStyleDef(selector, style, pseudo) {
    allStyles["b-" + globalCounter++] = { name: null, realname: null, parent: selector, style: style, inlStyle: null, pseudo: pseudo };
    invalidateStyles();
}
exports.selectorStyleDef = selectorStyleDef;
function invalidateStyles() {
    rebuildStyles = true;
    exports.invalidate();
}
exports.invalidateStyles = invalidateStyles;
function updateSprite(spDef) {
    var stDef = allStyles[spDef.styleid];
    var style = { backgroundImage: "url(" + spDef.url + ")", width: spDef.width, height: spDef.height };
    style.backgroundPosition = -spDef.left + "px " + -spDef.top + "px";
    stDef.style = style;
    invalidateStyles();
}
function emptyStyleDef(url) {
    return styleDef({ width: 0, height: 0 }, undefined, url.replace(/[^a-z0-9_-]/gi, '_'));
}
var rgbaRegex = /\s*rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d+|\d*\.\d+)\s*\)\s*/;
function recolorAndClip(image, colorStr, width, height, left, top) {
    var canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(image, -left, -top);
    var imgdata = ctx.getImageData(0, 0, width, height);
    var imgd = imgdata.data;
    var rgba = rgbaRegex.exec(colorStr);
    var cred, cgreen, cblue, calpha;
    if (rgba) {
        cred = parseInt(rgba[1], 10);
        cgreen = parseInt(rgba[2], 10);
        cblue = parseInt(rgba[3], 10);
        calpha = Math.round(parseFloat(rgba[4]) * 255);
    }
    else {
        cred = parseInt(colorStr.substr(1, 2), 16);
        cgreen = parseInt(colorStr.substr(3, 2), 16);
        cblue = parseInt(colorStr.substr(5, 2), 16);
        calpha = parseInt(colorStr.substr(7, 2), 16) || 0xff;
    }
    if (calpha === 0xff) {
        for (var i = 0; i < imgd.length; i += 4) {
            // Horrible workaround for imprecisions due to browsers using premultiplied alpha internally for canvas
            var red = imgd[i];
            if (red === imgd[i + 1] && red === imgd[i + 2] && (red === 0x80 || imgd[i + 3] < 0xff && red > 0x70)) {
                imgd[i] = cred;
                imgd[i + 1] = cgreen;
                imgd[i + 2] = cblue;
            }
        }
    }
    else {
        for (var i = 0; i < imgd.length; i += 4) {
            var red = imgd[i];
            var alpha = imgd[i + 3];
            if (red === imgd[i + 1] && red === imgd[i + 2] && (red === 0x80 || alpha < 0xff && red > 0x70)) {
                if (alpha === 0xff) {
                    imgd[i] = cred;
                    imgd[i + 1] = cgreen;
                    imgd[i + 2] = cblue;
                    imgd[i + 3] = calpha;
                }
                else {
                    alpha = alpha * (1.0 / 255);
                    imgd[i] = Math.round(cred * alpha);
                    imgd[i + 1] = Math.round(cgreen * alpha);
                    imgd[i + 2] = Math.round(cblue * alpha);
                    imgd[i + 3] = Math.round(calpha * alpha);
                }
            }
        }
    }
    ctx.putImageData(imgdata, 0, 0);
    return canvas.toDataURL();
}
var lastFuncId = 0;
var funcIdName = "b@funcId";
function sprite(url, color, width, height, left, top) {
    assert(allStyles[url] === undefined, "Wrong sprite url");
    left = left || 0;
    top = top || 0;
    var colorId = color || "";
    var isVarColor = false;
    if (isFunction(color)) {
        isVarColor = true;
        colorId = color[funcIdName];
        if (colorId == null) {
            colorId = "" + (lastFuncId++);
            color[funcIdName] = colorId;
        }
    }
    var key = url + ":" + colorId + ":" + (width || 0) + ":" + (height || 0) + ":" + left + ":" + top;
    var spDef = allSprites[key];
    if (spDef)
        return spDef.styleid;
    var styleid = emptyStyleDef(url);
    spDef = { styleid: styleid, url: url, width: width, height: height, left: left, top: top };
    if (isVarColor) {
        spDef.color = color;
        spDef.lastColor = '';
        spDef.lastUrl = '';
        dynamicSprites.push(spDef);
        if (imageCache[url] === undefined) {
            imageCache[url] = null;
            var image = new Image();
            image.addEventListener("load", function () {
                imageCache[url] = image;
                invalidateStyles();
            });
            image.src = url;
        }
        invalidateStyles();
    }
    else if (width == null || height == null || color != null) {
        var image = new Image();
        image.addEventListener("load", function () {
            if (spDef.width == null)
                spDef.width = image.width;
            if (spDef.height == null)
                spDef.height = image.height;
            if (color != null) {
                spDef.url = recolorAndClip(image, color, spDef.width, spDef.height, spDef.left, spDef.top);
                spDef.left = 0;
                spDef.top = 0;
            }
            updateSprite(spDef);
        });
        image.src = url;
    }
    else {
        updateSprite(spDef);
    }
    allSprites[key] = spDef;
    return styleid;
}
exports.sprite = sprite;
var bundlePath = window['bobrilBPath'] || 'bundle.png';
function setBundlePngPath(path) {
    bundlePath = path;
}
exports.setBundlePngPath = setBundlePngPath;
function spriteb(width, height, left, top) {
    var url = bundlePath;
    var key = url + "::" + width + ":" + height + ":" + left + ":" + top;
    var spDef = allSprites[key];
    if (spDef)
        return spDef.styleid;
    var styleid = styleDef({ width: 0, height: 0 });
    spDef = { styleid: styleid, url: url, width: width, height: height, left: left, top: top };
    updateSprite(spDef);
    allSprites[key] = spDef;
    return styleid;
}
exports.spriteb = spriteb;
function spritebc(color, width, height, left, top) {
    return sprite(bundlePath, color, width, height, left, top);
}
exports.spritebc = spritebc;
function injectCss(css) {
    injectedCss += css;
    invalidateStyles();
}
exports.injectCss = injectCss;
function asset(path) {
    return path;
}
exports.asset = asset;
// Bobril.svgExtensions
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    var angleInRadians = angleInDegrees * Math.PI / 180.0;
    return {
        x: centerX + (radius * Math.sin(angleInRadians)), y: centerY - (radius * Math.cos(angleInRadians))
    };
}
function svgDescribeArc(x, y, radius, startAngle, endAngle, startWithLine) {
    var absDeltaAngle = Math.abs(endAngle - startAngle);
    var close = false;
    if (absDeltaAngle > 360 - 0.01) {
        if (endAngle > startAngle)
            endAngle = startAngle - 359.9;
        else
            endAngle = startAngle + 359.9;
        if (radius === 0)
            return "";
        close = true;
    }
    else {
        if (radius === 0) {
            return [
                startWithLine ? "L" : "M", x, y
            ].join(" ");
        }
    }
    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);
    var arcSweep = (absDeltaAngle <= 180) ? "0" : "1";
    var largeArg = (endAngle > startAngle) ? "0" : "1";
    var d = [
        (startWithLine ? "L" : "M"), start.x, start.y, "A", radius, radius, 0, arcSweep, largeArg, end.x, end.y
    ].join(" ");
    if (close)
        d += "Z";
    return d;
}
function svgPie(x, y, radiusBig, radiusSmall, startAngle, endAngle) {
    var p = svgDescribeArc(x, y, radiusBig, startAngle, endAngle, false);
    var nextWithLine = true;
    if (p[p.length - 1] === "Z")
        nextWithLine = false;
    if (radiusSmall === 0) {
        if (!nextWithLine)
            return p;
    }
    return p + svgDescribeArc(x, y, radiusSmall, endAngle, startAngle, nextWithLine) + "Z";
}
exports.svgPie = svgPie;
function svgCircle(x, y, radius) {
    return svgDescribeArc(x, y, radius, 0, 360, false);
}
exports.svgCircle = svgCircle;
function svgRect(x, y, width, height) {
    return "M" + x + " " + y + "h" + width + "v" + height + "h" + (-width) + "Z";
}
exports.svgRect = svgRect;
// Bobril.helpers
function withKey(node, key) {
    node.key = key;
    return node;
}
exports.withKey = withKey;
// PureFuncs: styledDiv, createVirtualComponent, createComponent, createDerivedComponent, createOverridingComponent, prop, propi, propa, propim, getValue
function styledDiv(children) {
    var styles = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        styles[_i - 1] = arguments[_i];
    }
    return style({ tag: 'div', children: children }, styles);
}
exports.styledDiv = styledDiv;
function createVirtualComponent(component) {
    return function (data, children) {
        if (children !== undefined) {
            if (data == null)
                data = {};
            data.children = children;
        }
        return { data: data, component: component };
    };
}
exports.createVirtualComponent = createVirtualComponent;
function createOverridingComponent(original, after) {
    var originalComponent = original().component;
    var overriding = overrideComponents(originalComponent, after);
    return createVirtualComponent(overriding);
}
exports.createOverridingComponent = createOverridingComponent;
function createComponent(component) {
    var originalRender = component.render;
    if (originalRender) {
        component.render = function (ctx, me, oldMe) {
            me.tag = 'div';
            return originalRender.call(component, ctx, me, oldMe);
        };
    }
    else {
        component.render = function (_ctx, me) { me.tag = 'div'; };
    }
    return createVirtualComponent(component);
}
exports.createComponent = createComponent;
function createDerivedComponent(original, after) {
    var originalComponent = original().component;
    var merged = mergeComponents(originalComponent, after);
    return createVirtualComponent(merged);
}
exports.createDerivedComponent = createDerivedComponent;
function prop(value, onChange) {
    return function (val) {
        if (val !== undefined) {
            if (onChange !== undefined)
                onChange(val, value);
            value = val;
        }
        return value;
    };
}
exports.prop = prop;
function propi(value) {
    return function (val) {
        if (val !== undefined) {
            value = val;
            exports.invalidate();
        }
        return value;
    };
}
exports.propi = propi;
function propa(prop) {
    return function (val) {
        if (val !== undefined) {
            if (typeof val === "object" && isFunction(val.then)) {
                val.then(function (v) {
                    prop(v);
                }, function (err) {
                    if (window["console"] && console.error)
                        console.error(err);
                });
            }
            else {
                return prop(val);
            }
        }
        return prop();
    };
}
exports.propa = propa;
function propim(value, ctx, onChange) {
    return function (val) {
        if (val !== undefined && val !== value) {
            var oldVal = val;
            value = val;
            if (onChange !== undefined)
                onChange(val, oldVal);
            exports.invalidate(ctx);
        }
        return value;
    };
}
exports.propim = propim;
function getValue(value) {
    if (isFunction(value)) {
        return value();
    }
    return value;
}
exports.getValue = getValue;
function emitChange(data, value) {
    if (isFunction(data.value)) {
        data.value(value);
    }
    if (data.onChange !== undefined) {
        data.onChange(value);
    }
}
exports.emitChange = emitChange;
// bobril-clouseau needs this
// bobril-g11n needs ignoreShouldChange and setBeforeInit 
if (!window.b)
    window.b = { deref: deref, getRoots: getRoots, setInvalidate: setInvalidate, invalidateStyles: invalidateStyles, ignoreShouldChange: ignoreShouldChange, setAfterFrame: setAfterFrame, setBeforeFrame: setBeforeFrame, getDnds: exports.getDnds, setBeforeInit: setBeforeInit };
// TSX reactNamespace emulation
// PureFuncs: createElement
function createElement(name, props) {
    var children = [];
    for (var i = 2; i < arguments.length; i++) {
        var ii = arguments[i];
        children.push(ii);
    }
    if (isString(name)) {
        var res = { tag: name, children: children };
        if (props == null) {
            return res;
        }
        var attrs = {};
        var someattrs = false;
        for (var n in props) {
            if (!props.hasOwnProperty(n))
                continue;
            if (n === "style") {
                style(res, props[n]);
                continue;
            }
            if (n === "key" || n === "ref" || n === "className" || n === "component" || n === "data") {
                res[n] = props[n];
                continue;
            }
            someattrs = true;
            attrs[n] = props[n];
        }
        if (someattrs)
            res.attrs = attrs;
        return res;
    }
    else {
        var res_1 = name(props, children);
        if (props != null) {
            if (props.key != null)
                res_1.key = props.key;
            if (props.ref != null)
                res_1.ref = props.ref;
        }
        return res_1;
    }
}
exports.createElement = createElement;
exports.__spread = exports.assign;
});
R('node_modules/bobrilstrap/components/bobrilswipeextension',function(require, module, exports){
"use strict";
var b = require("bobril");
var pointerId;
var startX;
var startY;
var lastX;
var lastY;
var totalX;
var totalY;
function handlePointerDown(ev, _target, _node) {
    if (b.pointersDownCount() === 1) {
        pointerId = ev.id;
        startX = ev.x;
        startY = ev.y;
        lastX = startX;
        lastY = startY;
        totalX = 0;
        totalY = 0;
    }
    else
        pointerId = null;
    return false;
}
function handlePointerMove(ev, _target, _node) {
    if (ev.id === pointerId) {
        totalX += Math.abs(ev.x - lastX);
        totalY += Math.abs(ev.y - lastY);
        lastX = ev.x;
        lastY = ev.y;
    }
    return false;
}
function handlePointerUp(ev, _target, node) {
    if (ev.id === pointerId) {
        pointerId = null;
        var deltaX = Math.abs(ev.x - startX);
        var deltaY = Math.abs(ev.y - startY);
        if (deltaX < 75)
            return false; // too small horizontal move
        if (deltaY / deltaX >= 0.3)
            return false; // too much vertial for horizontal move
        if (totalX > deltaX * 1.5)
            return false; // too much shaking hand
        if (totalY > deltaX * 0.7)
            return false; // too much shaking hand
        var method = 'onSwipe' + (ev.x > startX ? 'Right' : 'Left');
        b.ignoreClick(ev.x, ev.y);
        b.bubble(node, method, ev);
    }
    return false;
}
function init() {
    b.addEvent('!PointerDown', 70, handlePointerDown);
    b.addEvent('!PointerMove', 70, handlePointerMove);
    b.addEvent('!PointerUp', 70, handlePointerUp);
}
exports.init = init;
});
R('node_modules/bobrilstrap/components/bobrilhelpers',function(require, module, exports){
"use strict";
function mergeToChildren(node, item, unshift) {
    var children = node.children
        ? node.children instanceof Array
            ? node.children
            : [node.children]
        : [];
    if (item) {
        if (unshift) {
            children.unshift(item);
        }
        else {
            children.push(item);
        }
    }
    return node.children = children;
}
exports.mergeToChildren = mergeToChildren;
exports.bobrilHelpers = {
    mergeToChildren: mergeToChildren,
    toLowerWithDashes: toLowerWithDashes,
    createDictionary: createDictionary
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.bobrilHelpers;
function createDictionary() {
    var data = {};
    return function (key, value, setEvenUndefined) {
        if (value !== undefined || setEvenUndefined)
            dataValue(data, key, value);
        return dataValue(data, key);
    };
}
exports.createDictionary = createDictionary;
function dataValue(data, key, value) {
    if (typeof key === 'string') {
        var innerData = data;
        if (value !== undefined)
            innerData[key] = value;
        return innerData[key];
    }
    else {
        var innerData = data;
        if (value !== undefined)
            innerData[key] = value;
        return innerData[key];
    }
}
function toLowerWithDashes(value) {
    if (!value)
        return value;
    value = value.charAt(0).toLowerCase() + value.slice(1);
    return value.replace(/[A-Z]/g, '-$&').toLowerCase();
}
exports.toLowerWithDashes = toLowerWithDashes;
function equals(objA, objB) {
    return JSON.stringify(objA) === JSON.stringify(objB);
}
exports.equals = equals;
});
R('node_modules/bobrilstrap/components/element',function(require, module, exports){
"use strict";
var b = require("bobril");
var bobrilHelpers_1 = require("./bobrilHelpers");
exports.e = b.createVirtualComponent({
    id: 'bobrilstrap-element',
    render: function (ctx, me) {
        me.tag = ctx.data.tag || 'div';
        me.children = ctx.data.children;
        me.attrs = ctx.data.attrs || {};
    },
    postRender: function (ctx, me) {
        var aria = ctx.data.aria || {};
        var dataAttrs = ctx.data.data || {};
        if (ctx.data.id)
            me.attrs.id = ctx.data.id;
        if (ctx.data.key)
            b.withKey(me, ctx.data.key);
        if (ctx.data.title)
            me.attrs['title'] = ctx.data.title;
        Object.keys(aria).forEach(function (key) {
            me.attrs["aria-" + bobrilHelpers_1.toLowerWithDashes(key)] = aria[key];
        });
        Object.keys(dataAttrs).forEach(function (key) {
            me.attrs["data-" + bobrilHelpers_1.toLowerWithDashes(key)] = dataAttrs[key];
        });
        b.style(me, ctx.data.style);
    },
    onClick: function (ctx, event) {
        if (!ctx.data.onClick)
            return false;
        return !!ctx.data.onClick(event);
    },
    onChange: function (ctx, value) {
        if (ctx.data.onChange)
            ctx.data.onChange(value);
    }
});
exports.element = exports.e;
exports.elem = exports.e;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.e;
});
R('node_modules/bobrilstrap/components/a',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var Target;
(function (Target) {
    Target[Target["Blank"] = 0] = "Blank";
    Target[Target["Self"] = 1] = "Self";
    Target[Target["Parent"] = 2] = "Parent";
    Target[Target["Top"] = 3] = "Top";
})(Target = exports.Target || (exports.Target = {}));
exports.anchor = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-a',
    render: function (ctx, me) {
        me.tag = 'a';
        if (ctx.data.href)
            me.attrs.href = ctx.data.href;
        if (ctx.data.target !== undefined)
            me.attrs['target'] = "_" + Target[ctx.data.target].toLowerCase();
        if (ctx.data.name)
            me.attrs['name'] = ctx.data.name;
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.anchor;
exports.a = exports.anchor;
});
R('node_modules/bobrilstrap/components/typography',function(require, module, exports){
"use strict";
var b = require("bobril");
exports.typography = {
    caption: b.styleDef('caption'),
    lead: b.styleDef('lead'),
    textLeft: b.styleDef('text-left'),
    textCenter: b.styleDef('text-center'),
    textRight: b.styleDef('text-right'),
    textJustify: b.styleDef('text-justify'),
    textNowrap: b.styleDef('text-nowrap'),
    textLowercase: b.styleDef('text-lowercase'),
    textUppercase: b.styleDef('text-uppercase'),
    textCapitalize: b.styleDef('text-capitalize'),
    initialism: b.styleDef('initialism'),
    blockquoteReverse: b.styleDef('blockquote-reverse'),
    listUnstyled: b.styleDef('list-unstyled'),
    listInline: b.styleDef('list-inline'),
    dlHorizontal: b.styleDef('dl-horizontal'),
    small: b.styleDef('small')
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.typography;
});
R('node_modules/bobrilstrap/components/abbreviation',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var typography_1 = require("./typography");
exports.abbreviation = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-abbreviation',
    render: function (ctx, me) {
        me.tag = 'abbr';
        b.style(me, !!ctx.data.initialism && typography_1.typography.initialism);
    }
});
exports.abbr = exports.abbreviation;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.abbreviation;
});
R('node_modules/bobrilstrap/components/address',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.address = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-address',
    render: function (_ctx, me) {
        me.tag = 'address';
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.address;
});
R('node_modules/bobrilstrap/components/affix',function(require, module, exports){
"use strict";
var b = require("bobril");
exports.affixStyles = {
    affix: b.styleDef('affix'),
    affixTop: b.styleDef('affix-top'),
    affixBottom: b.styleDef('affix-bottom')
};
exports.affix = b.createVirtualComponent({
    id: 'bobrilstrap-affix',
    render: function (ctx, me) {
        me.children = ctx.data.children;
    },
    postInitDom: function (ctx) {
        registerNewAffix(ctx);
    },
    postUpdateDom: function (ctx) {
        registerNewAffix(ctx);
    }
});
function registerNewAffix(ctx) {
    var element = b.getDomNode(ctx.me);
    if (!element || ctx.data.postponeInit || ctx.affixedElement === element)
        return;
    ctx.affixedElement = element;
    $(element).affix({
        offset: { top: getDimension(ctx.data.top), bottom: getDimension(ctx.data.bottom) }
    });
}
function getDimension(dimension) {
    return typeof dimension === 'function' ? dimension() : dimension;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.affix;
});
R('node_modules/bobrilstrap/components/size',function(require, module, exports){
"use strict";
var Size;
(function (Size) {
    Size[Size["Xs"] = 0] = "Xs";
    Size[Size["Sm"] = 1] = "Sm";
    Size[Size["Md"] = 2] = "Md";
    Size[Size["Lg"] = 3] = "Lg";
})(Size = exports.Size || (exports.Size = {}));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Size;
});
R('node_modules/bobrilstrap/components/helpers',function(require, module, exports){
"use strict";
var b = require("bobril");
exports.helpers = {
    text: {
        mutated: b.styleDef('text-mutated'),
        primary: b.styleDef('text-primary'),
        success: b.styleDef('text-success'),
        info: b.styleDef('text-info'),
        warning: b.styleDef('text-warning'),
        danger: b.styleDef('text-danger')
    },
    background: {
        primary: b.styleDef('bg-primary'),
        success: b.styleDef('bg-success'),
        info: b.styleDef('bg-info'),
        warning: b.styleDef('bg-warning'),
        danger: b.styleDef('bg-danger')
    },
    float: {
        pullLeft: b.styleDef('pull-left'),
        pullRight: b.styleDef('pull-right')
    },
    clearfix: b.styleDef('clearfix'),
    close: b.styleDef('close'),
    caret: b.styleDef('caret'),
    centerBlock: b.styleDef('center-block'),
    hidden: b.styleDef('hidden'),
    invisible: b.styleDef('invisible'),
    show: b.styleDef('show'),
    srOnly: b.styleDef('sr-only'),
    srOnlyFocusable: b.styleDef('sr-only-focusable'),
    textHide: b.styleDef('text-hide'),
    thumbnail: b.styleDef('thumbnail')
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.helpers;
});
R('node_modules/bobrilstrap/components/span',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var bobrilHelpers_1 = require("./bobrilHelpers");
var SpanLabelContext;
(function (SpanLabelContext) {
    SpanLabelContext[SpanLabelContext["Default"] = 0] = "Default";
    SpanLabelContext[SpanLabelContext["Primary"] = 1] = "Primary";
    SpanLabelContext[SpanLabelContext["Success"] = 2] = "Success";
    SpanLabelContext[SpanLabelContext["Info"] = 3] = "Info";
    SpanLabelContext[SpanLabelContext["Warning"] = 4] = "Warning";
    SpanLabelContext[SpanLabelContext["Danger"] = 5] = "Danger";
})(SpanLabelContext = exports.SpanLabelContext || (exports.SpanLabelContext = {}));
exports.spanStyles = {
    label: b.styleDef('label'),
    labelDefault: b.styleDef('label-default'),
    labelPrimary: b.styleDef('label-primary'),
    labelSuccess: b.styleDef('label-success'),
    labelInfo: b.styleDef('label-info'),
    labelWarning: b.styleDef('label-warning'),
    labelDanger: b.styleDef('label-danger')
};
exports.spanLabelContextStyles = bobrilHelpers_1.createDictionary();
exports.spanLabelContextStyles(SpanLabelContext.Default, exports.spanStyles.labelDefault);
exports.spanLabelContextStyles(SpanLabelContext.Primary, exports.spanStyles.labelPrimary);
exports.spanLabelContextStyles(SpanLabelContext.Success, exports.spanStyles.labelSuccess);
exports.spanLabelContextStyles(SpanLabelContext.Info, exports.spanStyles.labelInfo);
exports.spanLabelContextStyles(SpanLabelContext.Warning, exports.spanStyles.labelWarning);
exports.spanLabelContextStyles(SpanLabelContext.Danger, exports.spanStyles.labelDanger);
exports.span = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-span',
    render: function (ctx, me) {
        me.tag = 'span';
        b.style(me, ctx.data.labelContext !== undefined && exports.spanStyles.label);
        b.style(me, ctx.data.labelContext !== undefined && exports.spanLabelContextStyles(ctx.data.labelContext));
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.span;
});
R('node_modules/bobrilstrap/components/buttongroup',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var bobrilHelpers_1 = require("./bobrilHelpers");
exports.buttonGroupStyles = {
    btnGroup: b.styleDef('btn-group'),
    lg: b.styleDef('btn-group-lg'),
    sm: b.styleDef('btn-group-sm'),
    xs: b.styleDef('btn-group-xs'),
    justified: b.styleDef('btn-group-justified'),
    vertical: b.styleDef('btn-group-vertical')
};
var ButtonGroupSize;
(function (ButtonGroupSize) {
    ButtonGroupSize[ButtonGroupSize["Lg"] = 0] = "Lg";
    ButtonGroupSize[ButtonGroupSize["Default"] = 1] = "Default";
    ButtonGroupSize[ButtonGroupSize["Sm"] = 2] = "Sm";
    ButtonGroupSize[ButtonGroupSize["Xs"] = 3] = "Xs";
})(ButtonGroupSize = exports.ButtonGroupSize || (exports.ButtonGroupSize = {}));
exports.buttonGroupSizeStyles = bobrilHelpers_1.createDictionary();
exports.buttonGroupSizeStyles(ButtonGroupSize.Lg, exports.buttonGroupStyles.lg);
exports.buttonGroupSizeStyles(ButtonGroupSize.Default, false);
exports.buttonGroupSizeStyles(ButtonGroupSize.Sm, exports.buttonGroupStyles.sm);
exports.buttonGroupSizeStyles(ButtonGroupSize.Xs, exports.buttonGroupStyles.xs);
exports.buttonGroup = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-button-group',
    render: function (ctx, me) {
        b.style(me, ctx.data.vertical ? exports.buttonGroupStyles.vertical : exports.buttonGroupStyles.btnGroup);
        b.style(me, ctx.data.size !== undefined && exports.buttonGroupSizeStyles(ctx.data.size));
        b.style(me, !!ctx.data.justified && exports.buttonGroupStyles.justified);
        me.attrs['role'] = 'group';
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.buttonGroup;
});
R('node_modules/bobrilstrap/components/inputgroupbtn',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.inputGroupBtnStyles = {
    inputGroupBtn: b.styleDef('input-group-btn')
};
exports.inputGroupBtn = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-input-group-button',
    render: function (_ctx, me) {
        b.style(me, exports.inputGroupBtnStyles.inputGroupBtn);
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.inputGroupBtn;
});
R('node_modules/bobrilstrap/components/dropdown',function(require, module, exports){
"use strict";
var b = require("bobril");
var bobrilHelpers_1 = require("./bobrilHelpers");
var element_1 = require("./element");
var button_1 = require("./button");
var buttonGroup_1 = require("./buttonGroup");
var inputGroupBtn_1 = require("./inputGroupBtn");
exports.dropdownStyles = {
    dropdown: b.styleDef('dropdown'),
    dropdownToggle: b.styleDef('dropdown-toggle'),
    dropup: b.styleDef('dropup')
};
exports.dropdown = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-dropdown',
    render: function (ctx, me) {
        addButton(ctx, me);
        if (ctx.data.buttonGroup || ctx.data.inputGroupBtn) {
            me.tag = undefined;
            var groupNode = ctx.data.buttonGroup
                ? buttonGroup_1.buttonGroup(typeof ctx.data.buttonGroup === 'boolean' ? {} : ctx.data.buttonGroup, me.children)
                : inputGroupBtn_1.inputGroupBtn(typeof ctx.data.inputGroupBtn === 'boolean' ? {} : ctx.data.inputGroupBtn, me.children);
            b.style(groupNode, !!ctx.data.up && exports.dropdownStyles.dropup);
            me.children = groupNode;
        }
        else {
            if (ctx.data.button.variant === button_1.ButtonVariant.DropdownNav) {
                me.tag = 'li';
            }
            b.style(me, ctx.data.up ? exports.dropdownStyles.dropup : exports.dropdownStyles.dropdown);
        }
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.dropdown;
function updateButtonDataForDropdown(originalButtonData) {
    var buttonData = b.assign({}, originalButtonData);
    buttonData.variant = originalButtonData.variant !== undefined
        ? originalButtonData.variant
        : button_1.ButtonVariant.Dropdown;
    buttonData.aria = b.assign({}, buttonData.aria);
    buttonData.aria.haspopup = true;
    return buttonData;
}
function addButton(ctx, me) {
    var dropdownButton, caretButton;
    if (ctx.data.splitted) {
        caretButton = button_1.button(updateButtonDataForDropdown({
            option: ctx.data.button.option,
            size: ctx.data.button.size,
            srOnly: ctx.data.splittedSrOnlyText
        }));
        dropdownButton = button_1.button(ctx.data.button);
        bobrilHelpers_1.mergeToChildren(me, caretButton, true);
    }
    else {
        dropdownButton = button_1.button(updateButtonDataForDropdown(ctx.data.button));
    }
    bobrilHelpers_1.mergeToChildren(me, dropdownButton, true);
}
});
R('node_modules/bobrilstrap/components/nav',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.navStyles = {
    navbar: b.styleDef('navbar'),
    navbarDefault: b.styleDef('navbar-default'),
    navbarCollapse: b.styleDef('navbar-collapse'),
    navbarHeader: b.styleDef('navbar-header'),
    navbarToggle: b.styleDef('navbar-toggle'),
    navbarBrand: b.styleDef('navbar-brand'),
    navbarNav: b.styleDef('navbar-nav'),
    nav: b.styleDef('nav'),
    navbarForm: b.styleDef('navbar-form'),
    navbarLeft: b.styleDef('navbar-left'),
    navbarRight: b.styleDef('navbar-right'),
    navbarBtn: b.styleDef('navbar-btn'),
    navbarText: b.styleDef('navbar-text'),
    navbarLink: b.styleDef('navbar-link'),
    navbarFixedTop: b.styleDef('navbar-fixed-top'),
    navbarFixedBottom: b.styleDef('navbar-fixed-bottom'),
    navbarStaticTop: b.styleDef('navbar-static-top'),
    navbarInverse: b.styleDef('navbar-inverse'),
    navbTabs: b.styleDef('nav-tabs'),
    navStacked: b.styleDef('nav-stacked'),
    navJustified: b.styleDef('nav-justified'),
    navPills: b.styleDef('nav-pills'),
    dropdown: b.styleDef('dropdown'),
    disabled: b.styleDef('disabled'),
    collapse: b.styleDef('collapse'),
    iconBar: b.styleDef('icon-bar')
};
var NavbarStatic;
(function (NavbarStatic) {
    NavbarStatic[NavbarStatic["Top"] = 0] = "Top";
})(NavbarStatic = exports.NavbarStatic || (exports.NavbarStatic = {}));
;
var NavbarFixed;
(function (NavbarFixed) {
    NavbarFixed[NavbarFixed["Top"] = 0] = "Top";
    NavbarFixed[NavbarFixed["Bottom"] = 1] = "Bottom";
})(NavbarFixed = exports.NavbarFixed || (exports.NavbarFixed = {}));
;
var NavbarAlignment;
(function (NavbarAlignment) {
    NavbarAlignment[NavbarAlignment["Left"] = 0] = "Left";
    NavbarAlignment[NavbarAlignment["Right"] = 1] = "Right";
})(NavbarAlignment = exports.NavbarAlignment || (exports.NavbarAlignment = {}));
;
exports.nav = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-navbar',
    render: function (ctx, me) {
        me.tag = ctx.data.header ? 'header' : 'nav';
        b.style(me, exports.navStyles.navbar);
        b.style(me, ctx.data.inverse ? exports.navStyles.navbarInverse : exports.navStyles.navbarDefault);
        b.style(me, ctx.data.static === NavbarStatic.Top && exports.navStyles.navbarStaticTop);
        b.style(me, ctx.data.fixed === NavbarFixed.Top && exports.navStyles.navbarFixedTop);
        b.style(me, ctx.data.fixed === NavbarFixed.Bottom && exports.navStyles.navbarFixedBottom);
        b.style(me, ctx.data.alignment === NavbarAlignment.Right && exports.navStyles.navbarRight);
        b.style(me, ctx.data.alignment === NavbarAlignment.Left && exports.navStyles.navbarLeft);
    }
});
exports.navbar = exports.nav;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.nav;
});
R('node_modules/bobrilstrap/components/ul',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var typography_1 = require("./typography");
exports.ul = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-ul',
    render: function (ctx, me) {
        me.tag = 'ul';
        b.style(me, !!ctx.data.unstyled && typography_1.typography.listUnstyled);
        b.style(me, !!ctx.data.inline && typography_1.typography.listInline);
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.ul;
});
R('node_modules/bobrilstrap/components/listgroup',function(require, module, exports){
"use strict";
var b = require("bobril");
var ul_1 = require("./ul");
var bobrilHelpers_1 = require("./bobrilHelpers");
var ListGroupItemContext;
(function (ListGroupItemContext) {
    ListGroupItemContext[ListGroupItemContext["Success"] = 0] = "Success";
    ListGroupItemContext[ListGroupItemContext["Info"] = 1] = "Info";
    ListGroupItemContext[ListGroupItemContext["Warning"] = 2] = "Warning";
    ListGroupItemContext[ListGroupItemContext["Danger"] = 3] = "Danger";
})(ListGroupItemContext = exports.ListGroupItemContext || (exports.ListGroupItemContext = {}));
exports.listGroupStyles = {
    listGroup: b.styleDef('list-group'),
    listGroupItem: b.styleDef('list-group-item'),
    listGroupItemHeading: b.styleDef('list-group-item-heading'),
    listGroupItemText: b.styleDef('list-group-item-text'),
    active: b.styleDef('active'),
    disabled: b.styleDef('disabled'),
    listGroupItemSuccess: b.styleDef('list-group-item-success'),
    listGroupItemInfo: b.styleDef('list-group-item-info'),
    listGroupItemWarning: b.styleDef('list-group-item-warning'),
    listGroupItemDanger: b.styleDef('list-group-item-danger'),
};
exports.listGroupItemContextStyles = bobrilHelpers_1.createDictionary();
exports.listGroupItemContextStyles(ListGroupItemContext.Success, exports.listGroupStyles.listGroupItemSuccess);
exports.listGroupItemContextStyles(ListGroupItemContext.Info, exports.listGroupStyles.listGroupItemInfo);
exports.listGroupItemContextStyles(ListGroupItemContext.Warning, exports.listGroupStyles.listGroupItemWarning);
exports.listGroupItemContextStyles(ListGroupItemContext.Danger, exports.listGroupStyles.listGroupItemDanger);
exports.listGroup = b.createDerivedComponent(ul_1.ul, {
    id: 'bobrilstrap-listgroup',
    render: function (ctx, me) {
        if (ctx.data.linkified)
            me.tag = 'div';
        b.style(me, exports.listGroupStyles.listGroup);
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.listGroup;
});
R('node_modules/bobrilstrap/components/button',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var size_1 = require("./size");
var helpers_1 = require("./helpers");
var span_1 = require("./span");
var bobrilHelpers_1 = require("./bobrilHelpers");
var bobrilHelpers_2 = require("./bobrilHelpers");
var dropdown_1 = require("./dropdown");
var nav_1 = require("./nav");
var listGroup_1 = require("./listGroup");
var ButtonVariant;
(function (ButtonVariant) {
    ButtonVariant[ButtonVariant["Dropdown"] = 0] = "Dropdown";
    ButtonVariant[ButtonVariant["DropdownNav"] = 1] = "DropdownNav";
    ButtonVariant[ButtonVariant["Navbar"] = 2] = "Navbar";
    ButtonVariant[ButtonVariant["NavbarToggle"] = 3] = "NavbarToggle";
    ButtonVariant[ButtonVariant["ListGroup"] = 4] = "ListGroup";
})(ButtonVariant = exports.ButtonVariant || (exports.ButtonVariant = {}));
var ButtonType;
(function (ButtonType) {
    ButtonType[ButtonType["Button"] = 0] = "Button";
    ButtonType[ButtonType["Submit"] = 1] = "Submit";
})(ButtonType = exports.ButtonType || (exports.ButtonType = {}));
var ButtonTag;
(function (ButtonTag) {
    ButtonTag[ButtonTag["Button"] = 0] = "Button";
    ButtonTag[ButtonTag["Input"] = 1] = "Input";
    ButtonTag[ButtonTag["A"] = 2] = "A";
})(ButtonTag = exports.ButtonTag || (exports.ButtonTag = {}));
var ButtonOption;
(function (ButtonOption) {
    ButtonOption[ButtonOption["Default"] = 0] = "Default";
    ButtonOption[ButtonOption["Success"] = 1] = "Success";
    ButtonOption[ButtonOption["Warning"] = 2] = "Warning";
    ButtonOption[ButtonOption["Danger"] = 3] = "Danger";
    ButtonOption[ButtonOption["Info"] = 4] = "Info";
    ButtonOption[ButtonOption["Link"] = 5] = "Link";
    ButtonOption[ButtonOption["Primary"] = 6] = "Primary";
    ButtonOption[ButtonOption["Close"] = 7] = "Close";
})(ButtonOption = exports.ButtonOption || (exports.ButtonOption = {}));
exports.buttonStyles = {
    active: b.styleDef('active'),
    disabled: b.styleDef('disabled'),
    btn: b.styleDef('btn'),
    btnBlock: b.styleDef('btn-block')
};
exports.buttonSizeStyles = generateSizeStyles();
exports.buttonOptiontStyles = generateOptionsStyles();
exports.button = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-button',
    render: function (ctx, me) {
        me.tag = resolveTag(ctx);
        b.style(me, ctx.data.option !== ButtonOption.Close
            && ctx.data.variant !== ButtonVariant.ListGroup
            && ((ctx.data.variant !== ButtonVariant.Navbar
                && ctx.data.variant !== ButtonVariant.DropdownNav
                && ctx.data.variant !== ButtonVariant.NavbarToggle)
                || ctx.data.tag !== ButtonTag.A)
            && exports.buttonStyles.btn);
        b.style(me, !!ctx.data.active && exports.buttonStyles.active);
        b.style(me, !!ctx.data.block && exports.buttonStyles.btnBlock);
        b.style(me, ctx.data.size !== undefined && exports.buttonSizeStyles(ctx.data.size));
        b.style(me, ctx.data.variant !== ButtonVariant.Navbar
            && ctx.data.variant !== ButtonVariant.DropdownNav
            && ctx.data.variant !== ButtonVariant.ListGroup
            && exports.buttonOptiontStyles(ctx.data.option || ButtonOption.Default));
        b.style(me, ctx.data.variant === ButtonVariant.ListGroup && listGroup_1.listGroupStyles.listGroupItem);
        var typeAttr = ctx.data.tag === ButtonTag.A ? 'role' : 'type';
        me.attrs[typeAttr] = ((ctx.data.type && ButtonType[ctx.data.type])
            || me.attrs[typeAttr] || ButtonType[ButtonType.Button]).toString().toLowerCase();
        if (ctx.data.label) {
            if (ctx.data.tag === ButtonTag.Input) {
                me.attrs['value'] = ctx.data.label;
            }
            else {
                bobrilHelpers_1.mergeToChildren(me, ctx.data.label);
            }
        }
        if (ctx.data.tag === ButtonTag.A) {
            me.attrs['href'] = ctx.data.href || 'javascript:void(0)';
        }
        if (ctx.data.disabled) {
            if (ctx.data.tag === ButtonTag.A) {
                b.style(me, exports.buttonStyles.disabled);
            }
            else {
                me.attrs['disabled'] = 'disabled';
            }
        }
        if (ctx.data.variant === ButtonVariant.Dropdown || ctx.data.variant === ButtonVariant.DropdownNav) {
            ctx.data = b.assign({}, ctx.data);
            ctx.data.data = b.assign({}, ctx.data.data);
            ctx.data.aria = b.assign({}, ctx.data.aria);
            ctx.data.aria.haspopup = true;
            ctx.data.data.toggle = 'dropdown';
            b.style(me, dropdown_1.dropdownStyles.dropdownToggle);
            if (ctx.data.tag !== ButtonTag.Input)
                bobrilHelpers_1.mergeToChildren(me, ' ');
            bobrilHelpers_1.mergeToChildren(me, span_1.span({ style: helpers_1.helpers.caret }));
        }
        else if (ctx.data.variant === ButtonVariant.NavbarToggle) {
            ctx.data = b.assign({}, ctx.data);
            ctx.data.data = b.assign({}, ctx.data.data);
            b.style(me, nav_1.navStyles.navbarToggle);
        }
        bobrilHelpers_1.mergeToChildren(me, ctx.data.srOnly && span_1.span({ style: helpers_1.helpers.srOnly }, ctx.data.srOnly));
    }
});
exports.btn = exports.button;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.button;
function generateOptionsStyles() {
    var result = bobrilHelpers_2.createDictionary();
    Object.keys(ButtonOption).forEach(function (key) {
        var castedValue = parseInt(key, 10);
        if (!isNaN(castedValue)) {
            result(castedValue, castedValue === ButtonOption.Close
                ? helpers_1.helpers.close
                : b.styleDef("btn-" + ButtonOption[castedValue].toLowerCase()));
        }
    });
    return result;
}
function generateSizeStyles() {
    var result = bobrilHelpers_2.createDictionary();
    Object.keys(size_1.Size).forEach(function (key) {
        var castedValue = parseInt(key, 10);
        if (!isNaN(castedValue)) {
            result(castedValue, castedValue === size_1.Size.Md
                ? undefined
                : b.styleDef("btn-" + size_1.Size[castedValue].toLowerCase()));
        }
    });
    return result;
}
function resolveTag(ctx) {
    if (ctx.data.tag === undefined) {
        ctx.data = b.assign({
            tag: (ctx.data.variant === ButtonVariant.Navbar || ctx.data.variant === ButtonVariant.DropdownNav)
                ? ButtonTag.A
                : ButtonTag.Button
        }, ctx.data);
    }
    switch (ctx.data.tag) {
        case ButtonTag.A:
            return 'a';
        case ButtonTag.Input:
            return 'input';
        case ButtonTag.Button:
            return 'button';
        default:
            return 'button';
    }
}
});
R('node_modules/bobrilstrap/components/alert',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var button_1 = require("./button");
var span_1 = require("./span");
var bobrilHelpers_1 = require("./bobrilHelpers");
var AlertContext;
(function (AlertContext) {
    AlertContext[AlertContext["Success"] = 0] = "Success";
    AlertContext[AlertContext["Warning"] = 1] = "Warning";
    AlertContext[AlertContext["Danger"] = 2] = "Danger";
    AlertContext[AlertContext["Info"] = 3] = "Info";
})(AlertContext = exports.AlertContext || (exports.AlertContext = {}));
exports.alertStyles = {
    alert: b.styleDef('alert'),
    alertSuccess: b.styleDef('alert-success'),
    alertInfo: b.styleDef('alert-info'),
    alertDanger: b.styleDef('alert-danger'),
    alertWarning: b.styleDef('alert-warning'),
    alertDismissable: b.styleDef('alert-dismissible'),
    alertLink: b.styleDef('alert-link'),
    fade: b.styleDef('fade'),
    in: b.styleDef('in')
};
exports.alertContextStyles = bobrilHelpers_1.createDictionary();
exports.alertContextStyles(AlertContext.Success, exports.alertStyles.alertSuccess);
exports.alertContextStyles(AlertContext.Info, exports.alertStyles.alertInfo);
exports.alertContextStyles(AlertContext.Danger, exports.alertStyles.alertDanger);
exports.alertContextStyles(AlertContext.Warning, exports.alertStyles.alertWarning);
exports.alert = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-alert',
    init: function (ctx) {
        ctx.visible = true;
    },
    render: function (ctx, me) {
        b.style(me, exports.alertStyles.alert);
        b.style(me, exports.alertContextStyles(ctx.data.context));
        me.attrs['role'] = 'alert';
        var animation = ctx.data.animation === undefined || ctx.data.animation;
        var nativeDismiss = ctx.data.nativeDismiss === undefined || ctx.data.nativeDismiss;
        if (ctx.data.dismissButton) {
            b.style(me, exports.alertStyles.alertDismissable, !!animation && exports.alertStyles.fade, !!animation && exports.alertStyles.in);
            var buttonData = b.assign({}, ctx.data.dismissButton, {
                alert: true,
                data: nativeDismiss
                    ? b.assign({}, ctx.data.dismissButton.data, { dismiss: 'alert' })
                    : ctx.data.dismissButton.data,
                option: button_1.ButtonOption.Close
            });
            if (!buttonData.children) {
                bobrilHelpers_1.mergeToChildren(buttonData, span_1.span({ aria: { hidden: true } }, '×'), true);
            }
            var dismissButton = button_1.button(buttonData);
            bobrilHelpers_1.mergeToChildren(me, dismissButton, true);
        }
    },
    postInitDom: function (ctx, _me, element) {
        $(element).on('closed.bs.alert', function () {
            ctx.visible = false;
            if (ctx.data.onClosed)
                ctx.data.onClosed();
        });
        if (ctx.data.timeout) {
            ctx.timeoutId = setTimeout(function () { return dismissOnTimeout(ctx, element); }, ctx.data.timeout);
        }
    },
    destroy: function (ctx) {
        if (ctx.timeoutId)
            clearTimeout(ctx.timeoutId);
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.alert;
function dismissOnTimeout(ctx, element) {
    if (ctx.timeoutId) {
        clearTimeout(ctx.timeoutId);
        ctx.timeoutId = 0;
    }
    if (ctx.visible)
        $(element).alert('close');
}
});
R('node_modules/bobrilstrap/components/badge',function(require, module, exports){
"use strict";
var b = require("bobril");
var span_1 = require("./span");
;
var badgeStyle = b.styleDef('badge', null, "badgeStyle");
exports.badge = b.createDerivedComponent(span_1.span, {
    id: 'bobrilstrap-badge',
    render: function (_ctx, me) {
        b.style(me, badgeStyle);
    }
});
});
R('node_modules/bobrilstrap/components/blockquote',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var typography_1 = require("./typography");
exports.blockquote = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-blockquote',
    render: function (ctx, me) {
        me.tag = 'blockquote';
        b.style(me, !!ctx.data.reverse && typography_1.typography.blockquoteReverse);
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.blockquote;
});
R('node_modules/bobrilstrap/components/ol',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var OlType;
(function (OlType) {
    OlType[OlType["num"] = 0] = "num";
    OlType[OlType["a"] = 1] = "a";
    OlType[OlType["A"] = 2] = "A";
    OlType[OlType["i"] = 3] = "i";
    OlType[OlType["I"] = 4] = "I";
})(OlType = exports.OlType || (exports.OlType = {}));
exports.ol = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-ol',
    render: function (ctx, me) {
        me.tag = 'ol';
        if (ctx.data.type !== undefined) {
            me.attrs['type'] = ctx.data.type === OlType.num ? '1' : OlType[ctx.data.type];
        }
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.ol;
});
R('node_modules/bobrilstrap/components/breadcrumb',function(require, module, exports){
"use strict";
var b = require("bobril");
var ol_1 = require("./ol");
exports.breadcrumbStyles = {
    breadcrumb: b.styleDef('breadcrumb'),
    active: b.styleDef('active')
};
exports.breadcrumb = b.createDerivedComponent(ol_1.ol, {
    id: 'bobrilstrap-breadcrumb',
    render: function (_ctx, me) {
        b.style(me, exports.breadcrumbStyles.breadcrumb);
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.breadcrumb;
});
R('node_modules/bobrilstrap/components/li',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.liStyles = {
    active: b.styleDef('active'),
    disabled: b.styleDef('disabled')
};
exports.li = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-li',
    render: function (ctx, me) {
        me.tag = 'li';
        b.style(me, !!ctx.data.active && exports.liStyles.active);
        b.style(me, !!ctx.data.disabled && exports.liStyles.disabled);
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.li;
});
R('node_modules/bobrilstrap/components/breadcrumbitem',function(require, module, exports){
"use strict";
var b = require("bobril");
var li_1 = require("./li");
var breadcrumb_1 = require("./breadcrumb");
exports.breadcrumbItem = b.createDerivedComponent(li_1.li, {
    id: 'bobrilstrap-breadcrumb-item',
    render: function (ctx, me) {
        b.style(me, !!ctx.data.active && breadcrumb_1.breadcrumbStyles.active);
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.breadcrumbItem;
});
R('node_modules/bobrilstrap/components/buttontoolbar',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.buttonToolbarStyles = {
    btnGroup: b.styleDef('btn-toolbar')
};
exports.buttonToolbar = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-button-toolbar',
    render: function (_ctx, me) {
        b.style(me, exports.buttonToolbarStyles.btnGroup);
        me.attrs['role'] = 'toolbar';
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.buttonToolbar;
});
R('node_modules/bobrilstrap/components/glyphicon',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var bobrilHelpers_1 = require("./bobrilHelpers");
var GlyphIcon;
(function (GlyphIcon) {
    GlyphIcon[GlyphIcon["Asterisk"] = 0] = "Asterisk";
    GlyphIcon[GlyphIcon["Plus"] = 1] = "Plus";
    GlyphIcon[GlyphIcon["Euro"] = 2] = "Euro";
    GlyphIcon[GlyphIcon["Eur"] = 3] = "Eur";
    GlyphIcon[GlyphIcon["Minus"] = 4] = "Minus";
    GlyphIcon[GlyphIcon["Cloud"] = 5] = "Cloud";
    GlyphIcon[GlyphIcon["Envelope"] = 6] = "Envelope";
    GlyphIcon[GlyphIcon["Pencil"] = 7] = "Pencil";
    GlyphIcon[GlyphIcon["Glass"] = 8] = "Glass";
    GlyphIcon[GlyphIcon["Music"] = 9] = "Music";
    GlyphIcon[GlyphIcon["Search"] = 10] = "Search";
    GlyphIcon[GlyphIcon["Heart"] = 11] = "Heart";
    GlyphIcon[GlyphIcon["Star"] = 12] = "Star";
    GlyphIcon[GlyphIcon["StarEmpty"] = 13] = "StarEmpty";
    GlyphIcon[GlyphIcon["User"] = 14] = "User";
    GlyphIcon[GlyphIcon["Film"] = 15] = "Film";
    GlyphIcon[GlyphIcon["ThLarge"] = 16] = "ThLarge";
    GlyphIcon[GlyphIcon["Th"] = 17] = "Th";
    GlyphIcon[GlyphIcon["ThList"] = 18] = "ThList";
    GlyphIcon[GlyphIcon["Ok"] = 19] = "Ok";
    GlyphIcon[GlyphIcon["Remove"] = 20] = "Remove";
    GlyphIcon[GlyphIcon["ZoomIn"] = 21] = "ZoomIn";
    GlyphIcon[GlyphIcon["ZoomOut"] = 22] = "ZoomOut";
    GlyphIcon[GlyphIcon["Off"] = 23] = "Off";
    GlyphIcon[GlyphIcon["Signal"] = 24] = "Signal";
    GlyphIcon[GlyphIcon["Cog"] = 25] = "Cog";
    GlyphIcon[GlyphIcon["Trash"] = 26] = "Trash";
    GlyphIcon[GlyphIcon["Home"] = 27] = "Home";
    GlyphIcon[GlyphIcon["File"] = 28] = "File";
    GlyphIcon[GlyphIcon["Time"] = 29] = "Time";
    GlyphIcon[GlyphIcon["Road"] = 30] = "Road";
    GlyphIcon[GlyphIcon["DownloadAlt"] = 31] = "DownloadAlt";
    GlyphIcon[GlyphIcon["Download"] = 32] = "Download";
    GlyphIcon[GlyphIcon["Upload"] = 33] = "Upload";
    GlyphIcon[GlyphIcon["Inbox"] = 34] = "Inbox";
    GlyphIcon[GlyphIcon["PlayCircle"] = 35] = "PlayCircle";
    GlyphIcon[GlyphIcon["Repeat"] = 36] = "Repeat";
    GlyphIcon[GlyphIcon["Refresh"] = 37] = "Refresh";
    GlyphIcon[GlyphIcon["ListAlt"] = 38] = "ListAlt";
    GlyphIcon[GlyphIcon["Lock"] = 39] = "Lock";
    GlyphIcon[GlyphIcon["Flag"] = 40] = "Flag";
    GlyphIcon[GlyphIcon["Headphones"] = 41] = "Headphones";
    GlyphIcon[GlyphIcon["VolumeOff"] = 42] = "VolumeOff";
    GlyphIcon[GlyphIcon["VolumeDown"] = 43] = "VolumeDown";
    GlyphIcon[GlyphIcon["VolumeUp"] = 44] = "VolumeUp";
    GlyphIcon[GlyphIcon["Qrcode"] = 45] = "Qrcode";
    GlyphIcon[GlyphIcon["Barcode"] = 46] = "Barcode";
    GlyphIcon[GlyphIcon["Tag"] = 47] = "Tag";
    GlyphIcon[GlyphIcon["Tags"] = 48] = "Tags";
    GlyphIcon[GlyphIcon["Book"] = 49] = "Book";
    GlyphIcon[GlyphIcon["Bookmark"] = 50] = "Bookmark";
    GlyphIcon[GlyphIcon["Print"] = 51] = "Print";
    GlyphIcon[GlyphIcon["Camera"] = 52] = "Camera";
    GlyphIcon[GlyphIcon["Font"] = 53] = "Font";
    GlyphIcon[GlyphIcon["Bold"] = 54] = "Bold";
    GlyphIcon[GlyphIcon["Italic"] = 55] = "Italic";
    GlyphIcon[GlyphIcon["TextHeight"] = 56] = "TextHeight";
    GlyphIcon[GlyphIcon["TextWidth"] = 57] = "TextWidth";
    GlyphIcon[GlyphIcon["AlignLeft"] = 58] = "AlignLeft";
    GlyphIcon[GlyphIcon["AlignCenter"] = 59] = "AlignCenter";
    GlyphIcon[GlyphIcon["AlignRight"] = 60] = "AlignRight";
    GlyphIcon[GlyphIcon["AlignJustify"] = 61] = "AlignJustify";
    GlyphIcon[GlyphIcon["List"] = 62] = "List";
    GlyphIcon[GlyphIcon["IndentLeft"] = 63] = "IndentLeft";
    GlyphIcon[GlyphIcon["IndentRight"] = 64] = "IndentRight";
    GlyphIcon[GlyphIcon["FacetimeVideo"] = 65] = "FacetimeVideo";
    GlyphIcon[GlyphIcon["Picture"] = 66] = "Picture";
    GlyphIcon[GlyphIcon["MapMarker"] = 67] = "MapMarker";
    GlyphIcon[GlyphIcon["Adjust"] = 68] = "Adjust";
    GlyphIcon[GlyphIcon["Tint"] = 69] = "Tint";
    GlyphIcon[GlyphIcon["Edit"] = 70] = "Edit";
    GlyphIcon[GlyphIcon["Share"] = 71] = "Share";
    GlyphIcon[GlyphIcon["Check"] = 72] = "Check";
    GlyphIcon[GlyphIcon["Move"] = 73] = "Move";
    GlyphIcon[GlyphIcon["StepBackward"] = 74] = "StepBackward";
    GlyphIcon[GlyphIcon["FastBackward"] = 75] = "FastBackward";
    GlyphIcon[GlyphIcon["Backward"] = 76] = "Backward";
    GlyphIcon[GlyphIcon["Play"] = 77] = "Play";
    GlyphIcon[GlyphIcon["Pause"] = 78] = "Pause";
    GlyphIcon[GlyphIcon["Stop"] = 79] = "Stop";
    GlyphIcon[GlyphIcon["Forward"] = 80] = "Forward";
    GlyphIcon[GlyphIcon["FastForward"] = 81] = "FastForward";
    GlyphIcon[GlyphIcon["StepForward"] = 82] = "StepForward";
    GlyphIcon[GlyphIcon["Eject"] = 83] = "Eject";
    GlyphIcon[GlyphIcon["ChevronLeft"] = 84] = "ChevronLeft";
    GlyphIcon[GlyphIcon["ChevronRight"] = 85] = "ChevronRight";
    GlyphIcon[GlyphIcon["PlusSign"] = 86] = "PlusSign";
    GlyphIcon[GlyphIcon["MinusSign"] = 87] = "MinusSign";
    GlyphIcon[GlyphIcon["RemoveSign"] = 88] = "RemoveSign";
    GlyphIcon[GlyphIcon["OkSign"] = 89] = "OkSign";
    GlyphIcon[GlyphIcon["QuestionSign"] = 90] = "QuestionSign";
    GlyphIcon[GlyphIcon["InfoSign"] = 91] = "InfoSign";
    GlyphIcon[GlyphIcon["Screenshot"] = 92] = "Screenshot";
    GlyphIcon[GlyphIcon["RemoveCircle"] = 93] = "RemoveCircle";
    GlyphIcon[GlyphIcon["OkCircle"] = 94] = "OkCircle";
    GlyphIcon[GlyphIcon["BanCircle"] = 95] = "BanCircle";
    GlyphIcon[GlyphIcon["ArrowLeft"] = 96] = "ArrowLeft";
    GlyphIcon[GlyphIcon["ArrowRight"] = 97] = "ArrowRight";
    GlyphIcon[GlyphIcon["ArrowUp"] = 98] = "ArrowUp";
    GlyphIcon[GlyphIcon["ArrowDown"] = 99] = "ArrowDown";
    GlyphIcon[GlyphIcon["ShareAlt"] = 100] = "ShareAlt";
    GlyphIcon[GlyphIcon["ResizeFull"] = 101] = "ResizeFull";
    GlyphIcon[GlyphIcon["ResizeSmall"] = 102] = "ResizeSmall";
    GlyphIcon[GlyphIcon["ExclamationSign"] = 103] = "ExclamationSign";
    GlyphIcon[GlyphIcon["Gift"] = 104] = "Gift";
    GlyphIcon[GlyphIcon["Leaf"] = 105] = "Leaf";
    GlyphIcon[GlyphIcon["Fire"] = 106] = "Fire";
    GlyphIcon[GlyphIcon["EyeOpen"] = 107] = "EyeOpen";
    GlyphIcon[GlyphIcon["EyeClose"] = 108] = "EyeClose";
    GlyphIcon[GlyphIcon["WarningSign"] = 109] = "WarningSign";
    GlyphIcon[GlyphIcon["Plane"] = 110] = "Plane";
    GlyphIcon[GlyphIcon["Calendar"] = 111] = "Calendar";
    GlyphIcon[GlyphIcon["Random"] = 112] = "Random";
    GlyphIcon[GlyphIcon["Comment"] = 113] = "Comment";
    GlyphIcon[GlyphIcon["Magnet"] = 114] = "Magnet";
    GlyphIcon[GlyphIcon["ChevronUp"] = 115] = "ChevronUp";
    GlyphIcon[GlyphIcon["ChevronDown"] = 116] = "ChevronDown";
    GlyphIcon[GlyphIcon["Retweet"] = 117] = "Retweet";
    GlyphIcon[GlyphIcon["Shoppingcart"] = 118] = "Shoppingcart";
    GlyphIcon[GlyphIcon["FolderClose"] = 119] = "FolderClose";
    GlyphIcon[GlyphIcon["FolderOpen"] = 120] = "FolderOpen";
    GlyphIcon[GlyphIcon["ResizeVertical"] = 121] = "ResizeVertical";
    GlyphIcon[GlyphIcon["ResizeHorizontal"] = 122] = "ResizeHorizontal";
    GlyphIcon[GlyphIcon["Hdd"] = 123] = "Hdd";
    GlyphIcon[GlyphIcon["Bullhorn"] = 124] = "Bullhorn";
    GlyphIcon[GlyphIcon["Bell"] = 125] = "Bell";
    GlyphIcon[GlyphIcon["Certificate"] = 126] = "Certificate";
    GlyphIcon[GlyphIcon["ThumbsUp"] = 127] = "ThumbsUp";
    GlyphIcon[GlyphIcon["ThumbsDown"] = 128] = "ThumbsDown";
    GlyphIcon[GlyphIcon["HandRight"] = 129] = "HandRight";
    GlyphIcon[GlyphIcon["HandUeft"] = 130] = "HandUeft";
    GlyphIcon[GlyphIcon["HandUp"] = 131] = "HandUp";
    GlyphIcon[GlyphIcon["HandDown"] = 132] = "HandDown";
    GlyphIcon[GlyphIcon["CircleArrowRight"] = 133] = "CircleArrowRight";
    GlyphIcon[GlyphIcon["CircleArrowLEft"] = 134] = "CircleArrowLEft";
    GlyphIcon[GlyphIcon["CircleArrowUp"] = 135] = "CircleArrowUp";
    GlyphIcon[GlyphIcon["CircleArrowDown"] = 136] = "CircleArrowDown";
    GlyphIcon[GlyphIcon["Globe"] = 137] = "Globe";
    GlyphIcon[GlyphIcon["Wrench"] = 138] = "Wrench";
    GlyphIcon[GlyphIcon["Tasks"] = 139] = "Tasks";
    GlyphIcon[GlyphIcon["Filter"] = 140] = "Filter";
    GlyphIcon[GlyphIcon["Briefcase"] = 141] = "Briefcase";
    GlyphIcon[GlyphIcon["Fullscreen"] = 142] = "Fullscreen";
    GlyphIcon[GlyphIcon["Dashboard"] = 143] = "Dashboard";
    GlyphIcon[GlyphIcon["Paperclip"] = 144] = "Paperclip";
    GlyphIcon[GlyphIcon["HeartEmpty"] = 145] = "HeartEmpty";
    GlyphIcon[GlyphIcon["Link"] = 146] = "Link";
    GlyphIcon[GlyphIcon["Phone"] = 147] = "Phone";
    GlyphIcon[GlyphIcon["Pushpin"] = 148] = "Pushpin";
    GlyphIcon[GlyphIcon["Usd"] = 149] = "Usd";
    GlyphIcon[GlyphIcon["Gbp"] = 150] = "Gbp";
    GlyphIcon[GlyphIcon["Sort"] = 151] = "Sort";
    GlyphIcon[GlyphIcon["SortByAlphabet"] = 152] = "SortByAlphabet";
    GlyphIcon[GlyphIcon["SortByAlphabetAlt"] = 153] = "SortByAlphabetAlt";
    GlyphIcon[GlyphIcon["SortByOrder"] = 154] = "SortByOrder";
    GlyphIcon[GlyphIcon["SortByOrderAlt"] = 155] = "SortByOrderAlt";
    GlyphIcon[GlyphIcon["SortByAttributes"] = 156] = "SortByAttributes";
    GlyphIcon[GlyphIcon["SortByAttributesAlt"] = 157] = "SortByAttributesAlt";
    GlyphIcon[GlyphIcon["Unchecked"] = 158] = "Unchecked";
    GlyphIcon[GlyphIcon["Expand"] = 159] = "Expand";
    GlyphIcon[GlyphIcon["CollapseDown"] = 160] = "CollapseDown";
    GlyphIcon[GlyphIcon["CollapseUp"] = 161] = "CollapseUp";
    GlyphIcon[GlyphIcon["LogIn"] = 162] = "LogIn";
    GlyphIcon[GlyphIcon["Flash"] = 163] = "Flash";
    GlyphIcon[GlyphIcon["LogOut"] = 164] = "LogOut";
    GlyphIcon[GlyphIcon["NewWindow"] = 165] = "NewWindow";
    GlyphIcon[GlyphIcon["Record"] = 166] = "Record";
    GlyphIcon[GlyphIcon["Save"] = 167] = "Save";
    GlyphIcon[GlyphIcon["Open"] = 168] = "Open";
    GlyphIcon[GlyphIcon["Saved"] = 169] = "Saved";
    GlyphIcon[GlyphIcon["Import"] = 170] = "Import";
    GlyphIcon[GlyphIcon["Export"] = 171] = "Export";
    GlyphIcon[GlyphIcon["Send"] = 172] = "Send";
    GlyphIcon[GlyphIcon["FloppyDisk"] = 173] = "FloppyDisk";
    GlyphIcon[GlyphIcon["FloppySaved"] = 174] = "FloppySaved";
    GlyphIcon[GlyphIcon["FloppyRemove"] = 175] = "FloppyRemove";
    GlyphIcon[GlyphIcon["FloppySave"] = 176] = "FloppySave";
    GlyphIcon[GlyphIcon["FloppyOpen"] = 177] = "FloppyOpen";
    GlyphIcon[GlyphIcon["CreditCard"] = 178] = "CreditCard";
    GlyphIcon[GlyphIcon["Transfer"] = 179] = "Transfer";
    GlyphIcon[GlyphIcon["Cutlery"] = 180] = "Cutlery";
    GlyphIcon[GlyphIcon["Header"] = 181] = "Header";
    GlyphIcon[GlyphIcon["Compressed"] = 182] = "Compressed";
    GlyphIcon[GlyphIcon["Earphone"] = 183] = "Earphone";
    GlyphIcon[GlyphIcon["PhoneAlt"] = 184] = "PhoneAlt";
    GlyphIcon[GlyphIcon["Tower"] = 185] = "Tower";
    GlyphIcon[GlyphIcon["Stats"] = 186] = "Stats";
    GlyphIcon[GlyphIcon["SdVideo"] = 187] = "SdVideo";
    GlyphIcon[GlyphIcon["HdVideo"] = 188] = "HdVideo";
    GlyphIcon[GlyphIcon["Subtitles"] = 189] = "Subtitles";
    GlyphIcon[GlyphIcon["SoundStereo"] = 190] = "SoundStereo";
    GlyphIcon[GlyphIcon["SoundDolby"] = 191] = "SoundDolby";
    GlyphIcon[GlyphIcon["Sound51"] = 192] = "Sound51";
    GlyphIcon[GlyphIcon["Sound61"] = 193] = "Sound61";
    GlyphIcon[GlyphIcon["Sound71"] = 194] = "Sound71";
    GlyphIcon[GlyphIcon["CopyrightMark"] = 195] = "CopyrightMark";
    GlyphIcon[GlyphIcon["RegistrationMark"] = 196] = "RegistrationMark";
    GlyphIcon[GlyphIcon["CloudDownload"] = 197] = "CloudDownload";
    GlyphIcon[GlyphIcon["CloudUpload"] = 198] = "CloudUpload";
    GlyphIcon[GlyphIcon["TreeConifer"] = 199] = "TreeConifer";
    GlyphIcon[GlyphIcon["TreeDeciduous"] = 200] = "TreeDeciduous";
    GlyphIcon[GlyphIcon["Cd"] = 201] = "Cd";
    GlyphIcon[GlyphIcon["SaveFile"] = 202] = "SaveFile";
    GlyphIcon[GlyphIcon["OpenFile"] = 203] = "OpenFile";
    GlyphIcon[GlyphIcon["LevelUp"] = 204] = "LevelUp";
    GlyphIcon[GlyphIcon["Copy"] = 205] = "Copy";
    GlyphIcon[GlyphIcon["Paste"] = 206] = "Paste";
    GlyphIcon[GlyphIcon["Alert"] = 207] = "Alert";
    GlyphIcon[GlyphIcon["Equalizer"] = 208] = "Equalizer";
    GlyphIcon[GlyphIcon["King"] = 209] = "King";
    GlyphIcon[GlyphIcon["Queen"] = 210] = "Queen";
    GlyphIcon[GlyphIcon["Pawn"] = 211] = "Pawn";
    GlyphIcon[GlyphIcon["Bishop"] = 212] = "Bishop";
    GlyphIcon[GlyphIcon["Knight"] = 213] = "Knight";
    GlyphIcon[GlyphIcon["BabyFormula"] = 214] = "BabyFormula";
    GlyphIcon[GlyphIcon["Tent"] = 215] = "Tent";
    GlyphIcon[GlyphIcon["Blackboard"] = 216] = "Blackboard";
    GlyphIcon[GlyphIcon["Bed"] = 217] = "Bed";
    GlyphIcon[GlyphIcon["Apple"] = 218] = "Apple";
    GlyphIcon[GlyphIcon["Erase"] = 219] = "Erase";
    GlyphIcon[GlyphIcon["Hourglass"] = 220] = "Hourglass";
    GlyphIcon[GlyphIcon["Lamp"] = 221] = "Lamp";
    GlyphIcon[GlyphIcon["Duplicate"] = 222] = "Duplicate";
    GlyphIcon[GlyphIcon["PiggyBank"] = 223] = "PiggyBank";
    GlyphIcon[GlyphIcon["Scissors"] = 224] = "Scissors";
    GlyphIcon[GlyphIcon["Bitcoin"] = 225] = "Bitcoin";
    GlyphIcon[GlyphIcon["Btc"] = 226] = "Btc";
    GlyphIcon[GlyphIcon["Xbt"] = 227] = "Xbt";
    GlyphIcon[GlyphIcon["Yen"] = 228] = "Yen";
    GlyphIcon[GlyphIcon["Jpy"] = 229] = "Jpy";
    GlyphIcon[GlyphIcon["Ruble"] = 230] = "Ruble";
    GlyphIcon[GlyphIcon["Rub"] = 231] = "Rub";
    GlyphIcon[GlyphIcon["Scale"] = 232] = "Scale";
    GlyphIcon[GlyphIcon["IceLolly"] = 233] = "IceLolly";
    GlyphIcon[GlyphIcon["IceLollyTasted"] = 234] = "IceLollyTasted";
    GlyphIcon[GlyphIcon["Education"] = 235] = "Education";
    GlyphIcon[GlyphIcon["OptionHorizontal"] = 236] = "OptionHorizontal";
    GlyphIcon[GlyphIcon["OptionVertical"] = 237] = "OptionVertical";
    GlyphIcon[GlyphIcon["MenuHamburger"] = 238] = "MenuHamburger";
    GlyphIcon[GlyphIcon["ModalWindow"] = 239] = "ModalWindow";
    GlyphIcon[GlyphIcon["Oil"] = 240] = "Oil";
    GlyphIcon[GlyphIcon["Grain"] = 241] = "Grain";
    GlyphIcon[GlyphIcon["Sunglasses"] = 242] = "Sunglasses";
    GlyphIcon[GlyphIcon["TextDize"] = 243] = "TextDize";
    GlyphIcon[GlyphIcon["TextColor"] = 244] = "TextColor";
    GlyphIcon[GlyphIcon["TextBackground"] = 245] = "TextBackground";
    GlyphIcon[GlyphIcon["ObjectAlignTop"] = 246] = "ObjectAlignTop";
    GlyphIcon[GlyphIcon["ObjectAlignBottom"] = 247] = "ObjectAlignBottom";
    GlyphIcon[GlyphIcon["ObjectAlignHorizontal"] = 248] = "ObjectAlignHorizontal";
    GlyphIcon[GlyphIcon["ObjectAlignLeft"] = 249] = "ObjectAlignLeft";
    GlyphIcon[GlyphIcon["ObjectAlignVertical"] = 250] = "ObjectAlignVertical";
    GlyphIcon[GlyphIcon["ObjectAlignRight"] = 251] = "ObjectAlignRight";
    GlyphIcon[GlyphIcon["TriangleRight"] = 252] = "TriangleRight";
    GlyphIcon[GlyphIcon["TriangleLeft"] = 253] = "TriangleLeft";
    GlyphIcon[GlyphIcon["TriangleBottom"] = 254] = "TriangleBottom";
    GlyphIcon[GlyphIcon["TriangleTop"] = 255] = "TriangleTop";
    GlyphIcon[GlyphIcon["Console"] = 256] = "Console";
    GlyphIcon[GlyphIcon["Superscript"] = 257] = "Superscript";
    GlyphIcon[GlyphIcon["Subscript"] = 258] = "Subscript";
    GlyphIcon[GlyphIcon["MenuLeft"] = 259] = "MenuLeft";
    GlyphIcon[GlyphIcon["MenuRight"] = 260] = "MenuRight";
    GlyphIcon[GlyphIcon["MenuDown"] = 261] = "MenuDown";
    GlyphIcon[GlyphIcon["MenuUp"] = 262] = "MenuUp";
})(GlyphIcon = exports.GlyphIcon || (exports.GlyphIcon = {}));
exports.glyphIconStyles = {
    glyphicon: b.styleDef('glyphicon'),
    formControlFeedback: b.styleDef('form-control-feedback')
};
exports.glyphIconTypeStyles = generateStyles();
exports.glyphicon = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-glyphicon',
    render: function (ctx, me) {
        me.tag = 'span';
        me.attrs['aria-hidden'] = true;
        b.style(me, exports.glyphIconStyles.glyphicon);
        b.style(me, exports.glyphIconTypeStyles(ctx.data.icon));
        b.style(me, !!ctx.data.formControlFeedback && exports.glyphIconStyles.formControlFeedback);
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.glyphicon;
function generateStyles() {
    var result = bobrilHelpers_1.createDictionary();
    Object.keys(GlyphIcon).forEach(function (key) {
        var castedValue = parseInt(key, 10);
        if (!isNaN(castedValue)) {
            result(castedValue, b.styleDef("glyphicon-" + bobrilHelpers_1.toLowerWithDashes(GlyphIcon[castedValue])));
        }
    });
    return result;
}
});
R('node_modules/bobrilstrap/components/carousel',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var ol_1 = require("./ol");
var li_1 = require("./li");
var a_1 = require("./a");
var glyphicon_1 = require("./glyphicon");
var span_1 = require("./span");
var helpers_1 = require("./helpers");
var CarouselPauseOn;
(function (CarouselPauseOn) {
    CarouselPauseOn[CarouselPauseOn["Hover"] = 0] = "Hover";
    CarouselPauseOn[CarouselPauseOn["MouseEnter"] = 1] = "MouseEnter";
    CarouselPauseOn[CarouselPauseOn["MouseLeave"] = 2] = "MouseLeave";
})(CarouselPauseOn = exports.CarouselPauseOn || (exports.CarouselPauseOn = {}));
exports.carouselStyles = {
    active: b.styleDef('active'),
    carousel: b.styleDef('carousel'),
    carouselCaption: b.styleDef('carousel-caption'),
    carouselIndicators: b.styleDef('carousel-indicators'),
    carouselInner: b.styleDef('carousel-inner'),
    carouselControl: b.styleDef('carousel-control'),
    item: b.styleDef('item'),
    left: b.styleDef('left'),
    right: b.styleDef('right'),
    slide: b.styleDef('slide'),
};
exports.carousel = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-carousel',
    render: function (ctx, me) {
        b.style(me, exports.carouselStyles.carousel, exports.carouselStyles.slide);
        me.attrs['id'] = ctx.data.id;
        if (!(ctx.data.data && ctx.data.data.ride))
            me.attrs['data-ride'] = 'carousel';
        var initialSlide = ctx.data.slideTo === undefined ? 0 : ctx.data.slideTo;
        me.children = [
            b.style(ol_1.ol({}, ctx.data.items.map(function (_item, idx) {
                return b.style(li_1.li({ data: { target: "#" + ctx.data.id, slideTo: idx } }), !ctx.initialSlideChanged && idx === initialSlide && exports.carouselStyles.active);
            })), exports.carouselStyles.carouselIndicators),
            element_1.elem({ style: exports.carouselStyles.carouselInner, attrs: { role: 'listbox' } }, ctx.data.items.map(function (item, idx) { return element_1.elem({ style: [exports.carouselStyles.item, !ctx.initialSlideChanged && idx === initialSlide && exports.carouselStyles.active] }, [item.image, !!item.captionContent && element_1.elem({ style: exports.carouselStyles.carouselCaption }, item.captionContent)]); })),
            a_1.a({
                style: [exports.carouselStyles.left, exports.carouselStyles.carouselControl],
                href: "#" + ctx.data.id,
                attrs: { role: 'button' },
                data: { slide: 'prev' }
            }, [
                glyphicon_1.glyphicon({ icon: glyphicon_1.GlyphIcon.ChevronLeft, aria: { hidden: true } }),
                ctx.data.srOnlyPrev && span_1.span({ style: helpers_1.helpers.srOnly }, ctx.data.srOnlyPrev)
            ]),
            a_1.a({
                style: [exports.carouselStyles.right, exports.carouselStyles.carouselControl],
                href: "#" + ctx.data.id,
                attrs: { role: 'button' },
                data: { slide: 'next' }
            }, [
                glyphicon_1.glyphicon({ icon: glyphicon_1.GlyphIcon.ChevronRight, aria: { hidden: true } }),
                ctx.data.srOnlyNext && span_1.span({ style: helpers_1.helpers.srOnly }, ctx.data.srOnlyNext)
            ])
        ];
    },
    postInitDom: function (ctx, _me, element) {
        var jqueryElement = $(element);
        jqueryElement.carousel({
            interval: ctx.data.interval,
            pause: ctx.data.pauseOn !== undefined ? CarouselPauseOn[ctx.data.pauseOn].toLowerCase() : undefined,
            wrap: ctx.data.wrap,
            keybord: ctx.data.keybord,
        });
        jqueryElement.on('slide.bs.carousel', function () {
            ctx.initialSlideChanged = true;
            if (ctx.data.onSlide)
                ctx.data.onSlide();
        });
        handleSlideTo(ctx, jqueryElement);
    },
    postUpdateDom: function (ctx, _me, element) {
        handleSlideTo(ctx, $(element));
    },
    onSwipeLeft: function (ctx) {
        var element = b.getDomNode(ctx.me);
        $(element).carousel('next');
        return true;
    },
    onSwipeRight: function (ctx) {
        var element = b.getDomNode(ctx.me);
        $(element).carousel('prev');
        return true;
    }
});
function handleSlideTo(ctx, jqueryElement) {
    if (ctx.data.slideTo !== undefined) {
        jqueryElement.carousel(ctx.data.slideTo);
    }
}
});
R('node_modules/bobrilstrap/components/cite',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.cite = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-cite',
    render: function (_ctx, me) {
        me.tag = 'cite';
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.cite;
});
R('node_modules/bobrilstrap/components/collapse',function(require, module, exports){
"use strict";
var b = require("bobril");
exports.collapseStyles = {
    collapse: b.styleDef('collapse'),
    in: b.styleDef('in'),
    collapsed: b.styleDef('collapsed')
};
exports.collapse = b.createVirtualComponent({
    id: 'bobrilstrap-collapse',
    render: function (ctx, me) {
        me.children = ctx.data.children;
    },
    postInitDom: function (ctx) {
        registerNewCollapse(ctx);
    },
    postUpdateDom: function (ctx) {
        registerNewCollapse(ctx);
        handleToggle(ctx);
    }
});
function registerNewCollapse(ctx) {
    var element = b.getDomNode(ctx.me);
    if (!element || ctx.collapsedElement === element)
        return;
    ctx.collapsedElement = element;
    $(element).collapse({ toggle: !ctx.data.collapsed });
    ctx.collapsed = ctx.data.collapsed;
    $(element).on('hidden.bs.collapse', function () {
        if (ctx.data.onCollapsed)
            ctx.data.onCollapsed();
    });
    $(element).on('shown.bs.collapse', function () {
        if (ctx.data.onExpanded)
            ctx.data.onExpanded();
    });
}
function handleToggle(ctx) {
    var element = b.getDomNode(ctx.me);
    if (!!ctx.collapsed !== !!ctx.data.collapsed) {
        ctx.collapsed = !!ctx.data.collapsed;
        $(element).collapse(ctx.collapsed ? 'hide' : 'show');
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.collapse;
});
R('node_modules/bobrilstrap/components/code',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.code = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-code',
    render: function (_ctx, me) {
        me.tag = 'code';
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.code;
});
R('node_modules/bobrilstrap/components/col',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var size_1 = require("./size");
var bobrilHelpers_1 = require("./bobrilHelpers");
exports.col = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-col',
    render: function (ctx, me) {
        applySimplyDefinedStyle(me, ctx.data);
        applyCmpSyles(me, ctx.data.cols, exports.colStyles);
        applyCmpSyles(me, ctx.data.offsets, exports.colOffsetStyles);
        applyCmpSyles(me, ctx.data.pushes, exports.colPushStyles);
        applyCmpSyles(me, ctx.data.pulls, exports.colPullStyles);
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.col;
exports.colStyles = getStyles(function (size, i) { return "col-" + size_1.Size[size].toLowerCase() + "-" + i; });
exports.colOffsetStyles = getStyles(function (size, i) { return "col-" + size_1.Size[size].toLowerCase() + "-offset-" + i; });
exports.colPushStyles = getStyles(function (size, i) { return "col-" + size_1.Size[size].toLowerCase() + "-push-" + i; });
exports.colPullStyles = getStyles(function (size, i) { return "col-" + size_1.Size[size].toLowerCase() + "-pull-" + i; });
function getStyles(decorator) {
    var result = bobrilHelpers_1.createDictionary();
    Object.keys(size_1.Size).forEach(function (size) {
        var castedValue = parseInt(size, 10);
        if (!isNaN(castedValue)) {
            result(castedValue, bobrilHelpers_1.createDictionary());
            for (var i = 1; i <= 12; i++) {
                result(castedValue)(i, b.styleDef(decorator(castedValue, i)));
            }
        }
    });
    return result;
}
function applyCmpSyles(me, colTypes, stylesSource) {
    if (colTypes === undefined || stylesSource === undefined)
        return;
    var styles = getCmpStyles(colTypes, stylesSource);
    if (styles.length === 0)
        return;
    b.style(me, styles);
}
function applySimplyDefinedStyle(me, data) {
    if (isStyleAvailable(exports.colStyles, data)) {
        b.style(me, getStyle(exports.colStyles, data));
    }
}
function getCmpStyles(colTypes, stylesSource) {
    var cols = getColTypeArray(colTypes);
    var styles = cols
        .filter(function (colType) { return isStyleAvailable(stylesSource, colType); })
        .map(function (colType) { return getStyle(stylesSource, colType); });
    return styles;
}
function getColTypeArray(colTypes) {
    return colTypes
        ? colTypes instanceof Array
            ? colTypes
            : [colTypes]
        : [];
}
function isStyleAvailable(stylesSource, colType) {
    return colType.size !== undefined && !!colType.span
        && !!stylesSource(colType.size) && !!stylesSource(colType.size)(colType.span);
}
function getStyle(stylesSource, colType) {
    return stylesSource(colType.size === undefined ? 1 : colType.size)(colType.span === undefined ? 1 : colType.span);
}
});
R('node_modules/bobrilstrap/components/container',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.containerStyle = b.styleDef('container', null, "containerStyle");
exports.containerFluidStyle = b.styleDef('container-fluid', null, "containerFluidStyle");
exports.container = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-container',
    render: function (ctx, me) {
        b.style(me, ctx.data.fluid ? exports.containerFluidStyle : exports.containerStyle);
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.container;
});
R('node_modules/bobrilstrap/components/label',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var helpers_1 = require("./helpers");
var bobrilHelpers_1 = require("./bobrilHelpers");
exports.labelStyles = {
    srOnly: helpers_1.helpers.srOnly,
    controlLabel: b.styleDef('control-label')
};
exports.label = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-label',
    render: function (ctx, me) {
        me.tag = 'label';
        b.style(me, !!ctx.data.srOnly && exports.labelStyles.srOnly);
        b.style(me, !!ctx.data.controlLabel && exports.labelStyles.controlLabel);
        if (ctx.data.for)
            me.attrs['for'] = ctx.data.for;
        if (ctx.data.title)
            bobrilHelpers_1.mergeToChildren(me, ctx.data.title);
        delete me.attrs['title'];
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.label;
});
R('node_modules/bobrilstrap/components/inputcheckbox',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.inputCheckbox = b.createOverridingComponent(element_1.elem, {
    id: 'bobrilstrap-input-checkbox',
    render: function (ctx, me) {
        me.component.super.render(ctx, me);
        if (ctx.data.checked !== undefined) {
            ctx.checked = !!ctx.data.checked;
        }
        else if (ctx.checked === undefined) {
            ctx.checked = false;
        }
        me.tag = 'input';
        me.attrs['type'] = 'checkbox';
        me.attrs.value = ctx.checked;
        if (ctx.data.disabled)
            me.attrs['disabled'] = 'disabled';
        if (ctx.data.readonly)
            me.attrs['readonly'] = 'readonly';
    },
    onChange: function (ctx, value) {
        ctx.checked = value;
        ctx.me.component.super.onChange(ctx, value);
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.inputCheckbox;
});
R('node_modules/bobrilstrap/components/checkbox',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var label_1 = require("./label");
var inputCheckbox_1 = require("./inputCheckbox");
exports.checkboxStyles = {
    checkbox: b.styleDef('checkbox'),
    checkboxInline: b.styleDef('checkbox-inline'),
    disabled: b.styleDef('disabled')
};
exports.checkbox = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-checkbox',
    render: function (ctx, me) {
        b.style(me, exports.checkboxStyles.checkbox);
        var inputCheckboxNode = inputCheckbox_1.inputCheckbox(ctx.data.inputCheckbox || {});
        var lbl = label_1.label(ctx.data.label || {}, inputCheckboxNode);
        if (ctx.data.inline) {
            me.tag = undefined;
            b.style(lbl, exports.checkboxStyles.checkboxInline);
        }
        else if (ctx.data.inputCheckbox && ctx.data.inputCheckbox.disabled) {
            b.style(me, exports.checkboxStyles.disabled);
        }
        me.children = lbl;
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.checkbox;
});
R('node_modules/bobrilstrap/components/dd',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.dd = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-dd',
    render: function (_ctx, me) {
        me.tag = 'dd';
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.dd;
});
R('node_modules/bobrilstrap/components/del',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.del = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-del',
    render: function (_ctx, me) {
        me.tag = 'del';
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.del;
});
R('node_modules/bobrilstrap/components/dl',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var typography_1 = require("./typography");
exports.dl = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-dl',
    render: function (ctx, me) {
        me.tag = 'dl';
        b.style(me, !!ctx.data.horizontal && typography_1.typography.dlHorizontal);
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.dl;
});
R('node_modules/bobrilstrap/components/dropdownitem',function(require, module, exports){
"use strict";
var b = require("bobril");
var li_1 = require("./li");
exports.dropdownItemStyles = b.assign({
    divider: b.styleDef('divider'),
    dropdownHeader: b.styleDef('dropdown-header'),
}, li_1.liStyles);
exports.dropdownItem = b.createDerivedComponent(li_1.li, {
    id: 'bobrilstrap-dropdown-item',
    render: function (ctx, me) {
        b.style(me, !!ctx.data.separator && exports.dropdownItemStyles.divider);
        b.style(me, !!ctx.data.header && exports.dropdownItemStyles.dropdownHeader);
        if (ctx.data.separator) {
            me.attrs['role'] = 'separator';
        }
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.dropdownItem;
});
R('node_modules/bobrilstrap/components/dropdownmenu',function(require, module, exports){
"use strict";
var b = require("bobril");
var ul_1 = require("./ul");
exports.dropdownMenuStyles = {
    dropdownMenu: b.styleDef('dropdown-menu'),
    dropdownMenuRight: b.styleDef('dropdown-menu-right')
};
exports.dropdownMenu = b.createDerivedComponent(ul_1.ul, {
    id: 'bobrilstrap-dropdown-menu',
    render: function (ctx, me) {
        b.style(me, exports.dropdownMenuStyles.dropdownMenu);
        b.style(me, !!ctx.data.right && exports.dropdownMenuStyles.dropdownMenuRight);
        me.attrs['role'] = 'menu';
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.dropdownMenu;
});
R('node_modules/bobrilstrap/components/dt',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.dt = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-dt',
    render: function (_ctx, me) {
        me.tag = 'dt';
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.dt;
});
R('node_modules/bobrilstrap/components/embedresponsive',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var bobrilHelpers_1 = require("./bobrilHelpers");
var EmbedAspectRatio;
(function (EmbedAspectRatio) {
    EmbedAspectRatio[EmbedAspectRatio["SixteenByNine"] = 0] = "SixteenByNine";
    EmbedAspectRatio[EmbedAspectRatio["FourByThree"] = 1] = "FourByThree";
})(EmbedAspectRatio = exports.EmbedAspectRatio || (exports.EmbedAspectRatio = {}));
exports.embedResponsiveStyles = {
    embedResponsive: b.styleDef('embed-responsive'),
    embedResponsiveItem: b.styleDef('embed-responsive-item'),
    embedResponsive16by9: b.styleDef('embed-responsive-16by9'),
    embedResponsive4by3: b.styleDef('embed-responsive-4by3')
};
exports.embedResponsiveAsoectRatioStyles = bobrilHelpers_1.createDictionary();
exports.embedResponsiveAsoectRatioStyles(EmbedAspectRatio.SixteenByNine, exports.embedResponsiveStyles.embedResponsive16by9);
exports.embedResponsiveAsoectRatioStyles(EmbedAspectRatio.FourByThree, exports.embedResponsiveStyles.embedResponsive4by3);
exports.embedResponsive = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-embed-responsive',
    render: function (ctx, me) {
        b.style(me, exports.embedResponsiveStyles.embedResponsive);
        b.style(me, ctx.data.aspectRatio !== undefined && exports.embedResponsiveAsoectRatioStyles(ctx.data.aspectRatio));
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.embedResponsive;
});
R('node_modules/bobrilstrap/components/embed',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var embedResponsive_1 = require("./embedResponsive");
exports.embed = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-embed',
    render: function (ctx, me) {
        me.tag = 'embed';
        b.style(me, !!ctx.data.embedResponsive && embedResponsive_1.embedResponsiveStyles.embedResponsiveItem);
        me.attrs['src'] = ctx.data.src;
        if (ctx.data.type !== undefined)
            me.attrs['type'] = ctx.data.type;
        if (ctx.data.height !== undefined)
            me.attrs['height'] = ctx.data.height;
        if (ctx.data.width !== undefined)
            me.attrs['width'] = ctx.data.width;
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.embed;
});
R('node_modules/bobrilstrap/components/fieldset',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.fieldset = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-fieldset',
    render: function (ctx, me) {
        me.tag = 'fieldset';
        if (ctx.data.disabled)
            me.attrs['disabled'] = 'disabled';
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.fieldset;
});
R('node_modules/bobrilstrap/components/figure',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.figure = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-figure',
    render: function (_ctx, me) {
        me.tag = 'figure';
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.figure;
});
R('node_modules/bobrilstrap/components/footer',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.footer = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-footer',
    render: function (_ctx, me) {
        me.tag = 'footer';
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.footer;
});
R('node_modules/bobrilstrap/components/form',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.formStyles = {
    formHorizontal: b.styleDef('form-horizontal'),
    formInline: b.styleDef('form-inline')
};
exports.form = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-form',
    render: function (ctx, me) {
        me.tag = 'form';
        b.style(me, !!ctx.data.horizontal && exports.formStyles.formHorizontal);
        b.style(me, !!ctx.data.inline && exports.formStyles.formInline);
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.form;
});
R('node_modules/bobrilstrap/components/validations',function(require, module, exports){
"use strict";
var b = require("bobril");
var bobrilHelpers_1 = require("./bobrilHelpers");
exports.validationStyles = {
    hasSuccess: b.styleDef('has-success'),
    hasWarning: b.styleDef('has-warning '),
    hasError: b.styleDef('has-error'),
    hasFeedback: b.styleDef('has-feedback')
};
var ValidationState;
(function (ValidationState) {
    ValidationState[ValidationState["Success"] = 0] = "Success";
    ValidationState[ValidationState["Warning"] = 1] = "Warning";
    ValidationState[ValidationState["Error"] = 2] = "Error";
})(ValidationState = exports.ValidationState || (exports.ValidationState = {}));
exports.validationStateStyles = bobrilHelpers_1.createDictionary();
exports.validationStateStyles(ValidationState.Success, exports.validationStyles.hasSuccess);
exports.validationStateStyles(ValidationState.Warning, exports.validationStyles.hasWarning);
exports.validationStateStyles(ValidationState.Error, exports.validationStyles.hasError);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ValidationState;
});
R('node_modules/bobrilstrap/components/formgroup',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var validations_1 = require("./validations");
var bobrilHelpers_1 = require("./bobrilHelpers");
exports.formGroupStyles = {
    formGroup: b.styleDef('form-group'),
    lg: b.styleDef('form-group-lg'),
    sm: b.styleDef('form-group-sm')
};
var FormGroupSize;
(function (FormGroupSize) {
    FormGroupSize[FormGroupSize["Lg"] = 0] = "Lg";
    FormGroupSize[FormGroupSize["Default"] = 1] = "Default";
    FormGroupSize[FormGroupSize["Sm"] = 2] = "Sm";
})(FormGroupSize = exports.FormGroupSize || (exports.FormGroupSize = {}));
exports.formGroupSizeStyles = bobrilHelpers_1.createDictionary();
exports.formGroupSizeStyles(FormGroupSize.Lg, exports.formGroupStyles.lg);
exports.formGroupSizeStyles(FormGroupSize.Default, false);
exports.formGroupSizeStyles(FormGroupSize.Sm, exports.formGroupStyles.sm);
exports.formGroup = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-form-group',
    render: function (ctx, me) {
        me.tag = 'div';
        b.style(me, exports.formGroupStyles.formGroup);
        b.style(me, !!ctx.data.hasFeedbeck && validations_1.validationStyles.hasFeedback);
        b.style(me, ctx.data.validationState !== undefined && validations_1.validationStateStyles(ctx.data.validationState));
        b.style(me, ctx.data.size !== undefined && exports.formGroupSizeStyles(ctx.data.size));
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.formGroup;
});
R('node_modules/bobrilstrap/components/headings',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.h1 = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-h1',
    render: function (_ctx, me) {
        me.tag = 'h1';
    }
});
exports.h2 = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-h2',
    render: function (_ctx, me) {
        me.tag = 'h2';
    }
});
exports.h3 = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-h3',
    render: function (_ctx, me) {
        me.tag = 'h3';
    }
});
exports.h4 = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-h4',
    render: function (_ctx, me) {
        me.tag = 'h4';
    }
});
exports.h5 = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-h5',
    render: function (_ctx, me) {
        me.tag = 'h5';
    }
});
exports.h6 = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-h6',
    render: function (_ctx, me) {
        me.tag = 'h6';
    }
});
});
R('node_modules/bobrilstrap/components/helptext',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.helpTextStyle = b.styleDef('help-block', null, "helpTextStyle");
exports.helpText = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-help-text',
    render: function (_ctx, me) {
        me.tag = 'span';
        b.style(me, exports.helpTextStyle);
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.helpText;
});
R('node_modules/bobrilstrap/components/iframe',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var embedResponsive_1 = require("./embedResponsive");
exports.iframe = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-iframe',
    render: function (ctx, me) {
        me.tag = 'iframe';
        me.attrs['src'] = ctx.data.src;
        b.style(me, !!ctx.data.embedResponsive && embedResponsive_1.embedResponsiveStyles.embedResponsiveItem);
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.iframe;
});
R('node_modules/bobrilstrap/components/image',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var bobrilHelpers_1 = require("./bobrilHelpers");
var helpers_1 = require("./helpers");
exports.imageStyles = {
    centerBlock: helpers_1.helpers.centerBlock,
    imgResponsive: b.styleDef('img-responsive'),
    imgRounded: b.styleDef('img-rounded'),
    imgCircle: b.styleDef('img-circle'),
    imgThumbnail: b.styleDef('img-thumbnail'),
    ieSvgFix: b.styleDef({ width: '100% \\9' }, undefined, 'ie-svg-fix')
};
var ImageShape;
(function (ImageShape) {
    ImageShape[ImageShape["Rounded"] = 0] = "Rounded";
    ImageShape[ImageShape["Circle"] = 1] = "Circle";
    ImageShape[ImageShape["Thumbnail"] = 2] = "Thumbnail";
})(ImageShape = exports.ImageShape || (exports.ImageShape = {}));
exports.imageShapeStyles = bobrilHelpers_1.createDictionary();
exports.imageShapeStyles(ImageShape.Rounded, exports.imageStyles.imgRounded);
exports.imageShapeStyles(ImageShape.Circle, exports.imageStyles.imgCircle);
exports.imageShapeStyles(ImageShape.Thumbnail, exports.imageStyles.imgThumbnail);
exports.image = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-image',
    render: function (ctx, me) {
        me.tag = 'img';
        me.attrs['src'] = ctx.data.src;
        me.attrs['alt'] = ctx.data.alt;
        if (ctx.data.height !== undefined)
            me.attrs['height'] = ctx.data.height;
        if (ctx.data.width !== undefined)
            me.attrs['width'] = ctx.data.width;
        b.style(me, ctx.data.shape !== undefined && exports.imageShapeStyles(ctx.data.shape));
        b.style(me, !!ctx.data.responsive && exports.imageStyles.imgResponsive);
        b.style(me, !!ctx.data.centerBlock && exports.imageStyles.centerBlock);
        b.style(me, !!ctx.data.ieSvgFix && exports.imageStyles.ieSvgFix);
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.image;
});
R('node_modules/bobrilstrap/components/inputgroup',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var validations_1 = require("./validations");
var bobrilHelpers_1 = require("./bobrilHelpers");
exports.inputGroupStyles = {
    inputGroup: b.styleDef('input-group'),
    lg: b.styleDef('input-group-lg'),
    sm: b.styleDef('input-group-sm')
};
var InputGroupSize;
(function (InputGroupSize) {
    InputGroupSize[InputGroupSize["Lg"] = 0] = "Lg";
    InputGroupSize[InputGroupSize["Sm"] = 1] = "Sm";
})(InputGroupSize = exports.InputGroupSize || (exports.InputGroupSize = {}));
exports.inputGroupSizeStyles = bobrilHelpers_1.createDictionary();
exports.inputGroupSizeStyles(InputGroupSize.Lg, exports.inputGroupStyles.lg);
exports.inputGroupSizeStyles(InputGroupSize.Sm, exports.inputGroupStyles.sm);
exports.inputGroup = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-input-group',
    render: function (ctx, me) {
        me.tag = 'div';
        b.style(me, exports.inputGroupStyles.inputGroup);
        b.style(me, !!ctx.data.hasFeedbeck && validations_1.validationStyles.hasFeedback);
        b.style(me, ctx.data.validationState !== undefined && validations_1.validationStateStyles(ctx.data.validationState));
        b.style(me, ctx.data.size !== undefined && exports.inputGroupSizeStyles(ctx.data.size));
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.inputGroup;
});
R('node_modules/bobrilstrap/components/inputgroupaddon',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.inputGroupAddonStyle = b.styleDef('input-group-addon', null, "inputGroupAddonStyle");
exports.inputGroupAddon = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-input-group-addon',
    render: function (_ctx, me) {
        me.tag = 'span';
        b.style(me, exports.inputGroupAddonStyle);
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.inputGroupAddon;
});
R('node_modules/bobrilstrap/components/inputradio',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.inputRadio = b.createOverridingComponent(element_1.elem, {
    id: 'bobrilstrap-input-radio',
    render: function (ctx, me) {
        me.component.super.render(ctx, me);
        if (ctx.data.value !== undefined && (ctx.data.checked !== undefined || ctx.data.checkedValue !== undefined)) {
            ctx.checked = (!!ctx.data.value && ctx.data.value === ctx.data.checkedValue) || !!ctx.data.checked;
        }
        else if (ctx.checked === undefined) {
            ctx.checked = false;
        }
        me.tag = 'input';
        me.attrs['type'] = 'radio';
        me.attrs.value = ctx.checked;
        me.attrs['name'] = ctx.data.name;
        if (ctx.data.disabled)
            me.attrs['disabled'] = 'disabled';
        if (ctx.data.readonly)
            me.attrs['readonly'] = 'readonly';
    },
    onChange: function (ctx, value) {
        ctx.checked = value;
        ctx.me.component.super.onChange(ctx, value);
        if (value && ctx.data.onChecked)
            ctx.data.onChecked(ctx.data.value);
        if (!value && ctx.data.onUnChecked)
            ctx.data.onUnChecked(ctx.data.value);
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.inputRadio;
});
R('node_modules/bobrilstrap/components/inputtext',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var bobrilHelpers_1 = require("./bobrilHelpers");
var InputTextType;
(function (InputTextType) {
    InputTextType[InputTextType["Color"] = 0] = "Color";
    InputTextType[InputTextType["Date"] = 1] = "Date";
    InputTextType[InputTextType["Datetime"] = 2] = "Datetime";
    InputTextType[InputTextType["DatetimeLocal"] = 3] = "DatetimeLocal";
    InputTextType[InputTextType["Email"] = 4] = "Email";
    InputTextType[InputTextType["Month"] = 5] = "Month";
    InputTextType[InputTextType["Number"] = 6] = "Number";
    InputTextType[InputTextType["Password"] = 7] = "Password";
    InputTextType[InputTextType["Range"] = 8] = "Range";
    InputTextType[InputTextType["Search"] = 9] = "Search";
    InputTextType[InputTextType["Tel"] = 10] = "Tel";
    InputTextType[InputTextType["Text"] = 11] = "Text";
    InputTextType[InputTextType["Time"] = 12] = "Time";
    InputTextType[InputTextType["Url"] = 13] = "Url";
    InputTextType[InputTextType["Week"] = 14] = "Week";
})(InputTextType = exports.InputTextType || (exports.InputTextType = {}));
exports.inputTextStyles = {
    formControl: b.styleDef('form-control'),
    lg: b.styleDef('input-lg'),
    sm: b.styleDef('input-sm')
};
var InputTextSize;
(function (InputTextSize) {
    InputTextSize[InputTextSize["Lg"] = 0] = "Lg";
    InputTextSize[InputTextSize["Default"] = 1] = "Default";
    InputTextSize[InputTextSize["Sm"] = 2] = "Sm";
})(InputTextSize = exports.InputTextSize || (exports.InputTextSize = {}));
exports.inputTextSizeStyles = bobrilHelpers_1.createDictionary();
exports.inputTextSizeStyles(InputTextSize.Lg, exports.inputTextStyles.lg);
exports.inputTextSizeStyles(InputTextSize.Default, false);
exports.inputTextSizeStyles(InputTextSize.Sm, exports.inputTextStyles.sm);
exports.inputText = b.createOverridingComponent(element_1.elem, {
    id: 'bobrilstrap-input-text',
    render: function (ctx, me) {
        me.component.super.render(ctx, me);
        if (ctx.data.value !== undefined) {
            ctx.value = ctx.data.value;
        }
        me.tag = 'input';
        me.attrs['type'] = bobrilHelpers_1.toLowerWithDashes(ctx.data.type !== undefined
            ? InputTextType[ctx.data.type]
            : InputTextType[InputTextType.Text]);
        me.attrs.value = ctx.value;
        b.style(me, exports.inputTextStyles.formControl);
        b.style(me, ctx.data.size !== undefined && exports.inputTextSizeStyles(ctx.data.size));
        if (ctx.data.placeholder)
            me.attrs['placeholder'] = ctx.data.placeholder;
        if (ctx.data.disabled)
            me.attrs['disabled'] = 'disabled';
        if (ctx.data.readonly)
            me.attrs['readonly'] = 'readonly';
    },
    onChange: function (ctx, value) {
        ctx.value = value;
        ctx.me.component.super.onChange(ctx, value);
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.inputText;
});
R('node_modules/bobrilstrap/components/ins',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.ins = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-ins',
    render: function (_ctx, me) {
        me.tag = 'ins';
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.ins;
});
R('node_modules/bobrilstrap/components/italics',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.italics = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-italics',
    render: function (_ctx, me) {
        me.tag = 'em';
    }
});
exports.em = exports.italics;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.italics;
});
R('node_modules/bobrilstrap/components/jumbotron',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.jumbotronStyle = b.styleDef('jumbotron', null, "jumbotronStyle");
exports.jumbotron = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-jumbotron',
    render: function (_ctx, me) {
        b.style(me, exports.jumbotronStyle);
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.jumbotron;
});
R('node_modules/bobrilstrap/components/kbd',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.kbd = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-kbd',
    render: function (_ctx, me) {
        me.tag = 'kbd';
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.kbd;
});
R('node_modules/bobrilstrap/components/listgroupitem',function(require, module, exports){
"use strict";
var b = require("bobril");
var li_1 = require("./li");
var listGroup_1 = require("./listGroup");
exports.listGroupItem = b.createDerivedComponent(li_1.li, {
    id: 'bobrilstrap-listgroup-item',
    render: function (ctx, me) {
        b.style(me, listGroup_1.listGroupStyles.listGroupItem);
        b.style(me, ctx.data.context !== undefined && listGroup_1.listGroupItemContextStyles(ctx.data.context));
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.listGroupItem;
});
R('node_modules/bobrilstrap/components/listgroupitemlink',function(require, module, exports){
"use strict";
var b = require("bobril");
var a_1 = require("./a");
var listGroup_1 = require("./listGroup");
exports.listGroupItemLink = b.createDerivedComponent(a_1.a, {
    id: 'bobrilstrap-listgroup-item-link',
    render: function (ctx, me) {
        b.style(me, listGroup_1.listGroupStyles.listGroupItem);
        b.style(me, !!ctx.data.active && listGroup_1.listGroupStyles.active);
        b.style(me, !!ctx.data.disabled && listGroup_1.listGroupStyles.disabled);
        b.style(me, ctx.data.context !== undefined && listGroup_1.listGroupItemContextStyles(ctx.data.context));
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.listGroupItemLink;
});
R('node_modules/bobrilstrap/components/paragraph',function(require, module, exports){
"use strict";
var b = require("bobril");
var typography_1 = require("./typography");
var element_1 = require("./element");
exports.paragraphStyles = {
    formControlStatic: b.styleDef('form-control-static')
};
exports.p = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-paragraph',
    render: function (ctx, me) {
        me.tag = 'p';
        b.style(me, !!ctx.data.lead && typography_1.typography.lead);
        b.style(me, !!ctx.data.formControlStatic && exports.paragraphStyles.formControlStatic);
    }
});
exports.paragraph = exports.p;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.p;
});
R('node_modules/bobrilstrap/components/listgroupitemtext',function(require, module, exports){
"use strict";
var b = require("bobril");
var paragraph_1 = require("./paragraph");
var listGroup_1 = require("./listGroup");
exports.listGroupItemText = b.createDerivedComponent(paragraph_1.p, {
    id: 'bobrilstrap-listgroup-item-text',
    render: function (_ctx, me) {
        b.style(me, listGroup_1.listGroupStyles.listGroupItemText);
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.listGroupItemText;
});
R('node_modules/bobrilstrap/components/listgroupitemheading',function(require, module, exports){
"use strict";
var b = require("bobril");
var headings_1 = require("./headings");
var listGroup_1 = require("./listGroup");
exports.listGroupItemHeading1 = b.createDerivedComponent(headings_1.h1, {
    id: 'listgroup-item-h1',
    render: function (_ctx, me) {
        b.style(me, listGroup_1.listGroupStyles.listGroupItemHeading);
    }
});
exports.listGroupItemHeading2 = b.createDerivedComponent(headings_1.h2, {
    id: 'listgroup-item-h2',
    render: function (_ctx, me) {
        b.style(me, listGroup_1.listGroupStyles.listGroupItemHeading);
    }
});
exports.listGroupItemHeading3 = b.createDerivedComponent(headings_1.h3, {
    id: 'listgroup-item-h3',
    render: function (_ctx, me) {
        b.style(me, listGroup_1.listGroupStyles.listGroupItemHeading);
    }
});
exports.listGroupItemHeading4 = b.createDerivedComponent(headings_1.h4, {
    id: 'listgroup-item-h4',
    render: function (_ctx, me) {
        b.style(me, listGroup_1.listGroupStyles.listGroupItemHeading);
    }
});
exports.listGroupItemHeading5 = b.createDerivedComponent(headings_1.h5, {
    id: 'listgroup-item-h5',
    render: function (_ctx, me) {
        b.style(me, listGroup_1.listGroupStyles.listGroupItemHeading);
    }
});
exports.listGroupItemHeading6 = b.createDerivedComponent(headings_1.h6, {
    id: 'listgroup-item-h6',
    render: function (_ctx, me) {
        b.style(me, listGroup_1.listGroupStyles.listGroupItemHeading);
    }
});
});
R('node_modules/bobrilstrap/components/object',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var embedResponsive_1 = require("./embedResponsive");
exports.object = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-object',
    render: function (ctx, me) {
        me.tag = 'object';
        b.style(me, !!ctx.data.embedResponsive && embedResponsive_1.embedResponsiveStyles.embedResponsiveItem);
        me.attrs['data'] = ctx.data.dataSrc;
        if (ctx.data.type !== undefined)
            me.attrs['type'] = ctx.data.type;
        if (ctx.data.height !== undefined)
            me.attrs['height'] = ctx.data.height;
        if (ctx.data.width !== undefined)
            me.attrs['width'] = ctx.data.width;
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.object;
});
R('node_modules/bobrilstrap/components/option',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.option = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-option',
    render: function (ctx, me) {
        me.tag = 'option';
        me.attrs.value = ctx.data.value;
        me.children = ctx.data.label || ctx.data.value;
        if (ctx.data.disabled)
            me.attrs['disabled'] = 'disabled';
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.option;
});
R('node_modules/bobrilstrap/components/mark',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.mark = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-mark',
    render: function (_ctx, me) {
        me.tag = 'mark';
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.mark;
});
R('node_modules/bobrilstrap/components/mediacontent',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var bobrilHelpers_1 = require("./bobrilHelpers");
var MediaContentAlignment;
(function (MediaContentAlignment) {
    MediaContentAlignment[MediaContentAlignment["Left"] = 0] = "Left";
    MediaContentAlignment[MediaContentAlignment["Body"] = 1] = "Body";
    MediaContentAlignment[MediaContentAlignment["Right"] = 2] = "Right";
    MediaContentAlignment[MediaContentAlignment["Top"] = 3] = "Top";
    MediaContentAlignment[MediaContentAlignment["Middle"] = 4] = "Middle";
    MediaContentAlignment[MediaContentAlignment["Bottom"] = 5] = "Bottom";
})(MediaContentAlignment = exports.MediaContentAlignment || (exports.MediaContentAlignment = {}));
exports.mediaContentStyles = {
    mediaLeft: b.styleDef('media-left'),
    mediaBody: b.styleDef('media-body'),
    mediaRight: b.styleDef('media-right'),
    mediaTop: b.styleDef('media-top'),
    mediaMiddle: b.styleDef('media-middle'),
    mediaBottom: b.styleDef('media-bottom')
};
exports.medialContentAlignmentStyles = bobrilHelpers_1.createDictionary();
exports.medialContentAlignmentStyles(MediaContentAlignment.Left, exports.mediaContentStyles.mediaLeft);
exports.medialContentAlignmentStyles(MediaContentAlignment.Body, exports.mediaContentStyles.mediaBody);
exports.medialContentAlignmentStyles(MediaContentAlignment.Right, exports.mediaContentStyles.mediaRight);
exports.medialContentAlignmentStyles(MediaContentAlignment.Top, exports.mediaContentStyles.mediaTop);
exports.medialContentAlignmentStyles(MediaContentAlignment.Middle, exports.mediaContentStyles.mediaMiddle);
exports.medialContentAlignmentStyles(MediaContentAlignment.Bottom, exports.mediaContentStyles.mediaBottom);
exports.mediaContent = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-media-content',
    render: function (ctx, me) {
        var alignments = ctx.data.alignment instanceof Array ? ctx.data.alignment : [ctx.data.alignment];
        alignments.forEach(function (alignment) { return b.style(me, exports.medialContentAlignmentStyles(alignment)); });
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.mediaContent;
});
R('node_modules/bobrilstrap/components/media',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var mediaContent_1 = require("./mediaContent");
exports.mediaStyles = {
    media: b.styleDef('media'),
    mediaLeft: mediaContent_1.mediaContentStyles.mediaLeft,
    mediaBody: mediaContent_1.mediaContentStyles.mediaBody,
    mediaRight: mediaContent_1.mediaContentStyles.mediaRight,
    mediaTop: mediaContent_1.mediaContentStyles.mediaTop,
    mediaMiddle: mediaContent_1.mediaContentStyles.mediaMiddle,
    mediaBottom: mediaContent_1.mediaContentStyles.mediaBottom,
    mediaHeading: b.styleDef('media-heading'),
    mediaObject: b.styleDef('media-object'),
    mediaList: b.styleDef('media-list')
};
exports.media = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-media',
    render: function (_ctx, me) {
        b.style(me, exports.mediaStyles.media);
    }
});
});
R('node_modules/bobrilstrap/components/mediaheading',function(require, module, exports){
"use strict";
var b = require("bobril");
var headings_1 = require("./headings");
var media_1 = require("./media");
exports.mediaHeading1 = b.createDerivedComponent(headings_1.h1, {
    id: 'bobrilstrap-media-h1',
    render: function (_ctx, me) {
        b.style(me, media_1.mediaStyles.mediaHeading);
    }
});
exports.mediaHeading2 = b.createDerivedComponent(headings_1.h2, {
    id: 'bobrilstrap-media-h2',
    render: function (_ctx, me) {
        b.style(me, media_1.mediaStyles.mediaHeading);
    }
});
exports.mediaHeading3 = b.createDerivedComponent(headings_1.h3, {
    id: 'bobrilstrap-media-h3',
    render: function (_ctx, me) {
        b.style(me, media_1.mediaStyles.mediaHeading);
    }
});
exports.mediaHeading4 = b.createDerivedComponent(headings_1.h4, {
    id: 'bobrilstrap-media-h4',
    render: function (_ctx, me) {
        b.style(me, media_1.mediaStyles.mediaHeading);
    }
});
exports.mediaHeading5 = b.createDerivedComponent(headings_1.h5, {
    id: 'bobrilstrap-media-h5',
    render: function (_ctx, me) {
        b.style(me, media_1.mediaStyles.mediaHeading);
    }
});
exports.mediaHeading6 = b.createDerivedComponent(headings_1.h6, {
    id: 'bobrilstrap-media-h6',
    render: function (_ctx, me) {
        b.style(me, media_1.mediaStyles.mediaHeading);
    }
});
});
R('node_modules/bobrilstrap/components/modal',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var bobrilHelpers_1 = require("./bobrilHelpers");
var ModalSize;
(function (ModalSize) {
    ModalSize[ModalSize["Lg"] = 0] = "Lg";
    ModalSize[ModalSize["Md"] = 1] = "Md";
    ModalSize[ModalSize["Sm"] = 2] = "Sm";
})(ModalSize = exports.ModalSize || (exports.ModalSize = {}));
exports.modalStyles = {
    modal: b.styleDef('modal'),
    fade: b.styleDef('fade'),
    modalDialog: b.styleDef('modal-dialog'),
    modalContent: b.styleDef('modal-content'),
    modalHeader: b.styleDef('modal-header'),
    modalBody: b.styleDef('modal-body'),
    modalFooter: b.styleDef('modal-footer'),
    modalTitle: b.styleDef('modal-title'),
    lg: b.styleDef('modal-lg'),
    sm: b.styleDef('modal-sm')
};
exports.modalSizeStyles = bobrilHelpers_1.createDictionary();
exports.modalSizeStyles(ModalSize.Lg, exports.modalStyles.lg);
exports.modalSizeStyles(ModalSize.Md, false);
exports.modalSizeStyles(ModalSize.Sm, exports.modalStyles.sm);
exports.modal = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-modal',
    render: function (ctx, me) {
        me.attrs['role'] = 'dialog';
        b.style(me, exports.modalStyles.modal, !!ctx.data.animation && exports.modalStyles.fade);
        me.children = b.styledDiv(b.styledDiv([
            !!ctx.data.header && b.styledDiv(ctx.data.header, exports.modalStyles.modalHeader),
            !!ctx.data.body && b.styledDiv(ctx.data.body, exports.modalStyles.modalBody),
            !!ctx.data.footer && b.styledDiv(ctx.data.footer, exports.modalStyles.modalFooter),
        ], exports.modalStyles.modalContent), exports.modalStyles.modalDialog, ctx.data.size !== undefined && exports.modalSizeStyles(ctx.data.size));
        me.children.attrs = { role: 'document' };
    },
    postInitDom: function (ctx, _me, element) {
        var backdrop = ctx.data.backdrop !== undefined ? ctx.data.backdrop : 'static';
        var modalElement = $(element);
        modalElement.modal({
            keyboard: ctx.data.keyboard,
            show: !!ctx.data.visible,
            backdrop: backdrop
        });
        modalElement.on('hidden.bs.modal', function (ev) {
            if (ctx.data.onHidden) {
                ctx.data.onHidden(ev);
            }
        });
        modalElement.on('shown.bs.modal', function (ev) {
            if (ctx.data.onShown) {
                ctx.data.onShown(ev);
            }
        });
    },
    postUpdateDom: function (ctx, _me, element) {
        if (!!ctx.data.visible !== !!ctx.visible) {
            if (ctx.visible && ctx.data.onHide && !ctx.data.onHide())
                return;
            ctx.visible = ctx.data.visible;
            $(element).modal(ctx.visible ? 'show' : 'hide');
        }
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.modal;
});
R('node_modules/bobrilstrap/components/modaltitle',function(require, module, exports){
"use strict";
var b = require("bobril");
var headings_1 = require("./headings");
var modal_1 = require("./modal");
exports.modalTitle1 = b.createDerivedComponent(headings_1.h1, {
    id: 'bobrilstrap-modal-title-h1',
    render: function (_ctx, me) {
        b.style(me, modal_1.modalStyles.modalTitle);
    }
});
exports.modalTitle2 = b.createDerivedComponent(headings_1.h2, {
    id: 'bobrilstrap-modal-title-h2',
    render: function (_ctx, me) {
        b.style(me, modal_1.modalStyles.modalTitle);
    }
});
exports.modalTitle3 = b.createDerivedComponent(headings_1.h3, {
    id: 'bobrilstrap-modal-title-h3',
    render: function (_ctx, me) {
        b.style(me, modal_1.modalStyles.modalTitle);
    }
});
exports.modalTitle4 = b.createDerivedComponent(headings_1.h4, {
    id: 'bobrilstrap-modal-title-h4',
    render: function (_ctx, me) {
        b.style(me, modal_1.modalStyles.modalTitle);
    }
});
exports.modalTitle5 = b.createDerivedComponent(headings_1.h5, {
    id: 'bobrilstrap-modal-title-h5',
    render: function (_ctx, me) {
        b.style(me, modal_1.modalStyles.modalTitle);
    }
});
exports.modalTitle6 = b.createDerivedComponent(headings_1.h6, {
    id: 'bobrilstrap-modal-title-h6',
    render: function (_ctx, me) {
        b.style(me, modal_1.modalStyles.modalTitle);
    }
});
});
R('node_modules/bobrilstrap/components/navbarbrand',function(require, module, exports){
"use strict";
var b = require("bobril");
var a_1 = require("./a");
var nav_1 = require("./nav");
exports.navbarBrand = b.createDerivedComponent(a_1.a, {
    id: 'bobrilstrap-navbar-brand',
    render: function (ctx, me) {
        b.style(me, nav_1.navStyles.navbarBrand);
        b.style(me, ctx.data.alignment === nav_1.NavbarAlignment.Right && nav_1.navStyles.navbarRight);
        b.style(me, ctx.data.alignment === nav_1.NavbarAlignment.Left && nav_1.navStyles.navbarLeft);
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.navbarBrand;
});
R('node_modules/bobrilstrap/components/navbarcollapse',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var nav_1 = require("./nav");
var collapse_1 = require("./collapse");
exports.navbarCollapse = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-navbar-collapse',
    render: function (_ctx, me) {
        b.style(me, nav_1.navStyles.navbarCollapse, collapse_1.collapseStyles.collapse);
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.navbarCollapse;
});
R('node_modules/bobrilstrap/components/navbarheader',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var nav_1 = require("./nav");
exports.navbarHeader = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-navbar-header',
    render: function (ctx, me) {
        b.style(me, nav_1.navStyles.navbarHeader);
        b.style(me, ctx.data.alignment === nav_1.NavbarAlignment.Right && nav_1.navStyles.navbarRight);
        b.style(me, ctx.data.alignment === nav_1.NavbarAlignment.Left && nav_1.navStyles.navbarLeft);
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.navbarHeader;
});
R('node_modules/bobrilstrap/components/navbarnav',function(require, module, exports){
"use strict";
var b = require("bobril");
var ul_1 = require("./ul");
var nav_1 = require("./nav");
exports.navbarNav = b.createDerivedComponent(ul_1.ul, {
    id: 'bobrilstrap-navbar-nav',
    render: function (ctx, me) {
        b.style(me, nav_1.navStyles.nav);
        b.style(me, nav_1.navStyles.navbarNav);
        b.style(me, !!ctx.data.justified && nav_1.navStyles.navJustified);
        b.style(me, ctx.data.alignment === nav_1.NavbarAlignment.Right && nav_1.navStyles.navbarRight);
        b.style(me, ctx.data.alignment === nav_1.NavbarAlignment.Left && nav_1.navStyles.navbarLeft);
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.navbarNav;
});
R('node_modules/bobrilstrap/components/tab',function(require, module, exports){
"use strict";
var b = require("bobril");
var li_1 = require("./li");
var nav_1 = require("./nav");
exports.tab = b.createDerivedComponent(li_1.li, {
    id: 'bobrilstrap-tab',
    render: function (ctx, me) {
        b.style(me, !!ctx.data.dropdown && nav_1.navStyles.dropdown);
        me.attrs['role'] = 'presentation';
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.tab;
});
R('node_modules/bobrilstrap/components/navbarnavitem',function(require, module, exports){
"use strict";
var b = require("bobril");
var tab_1 = require("./tab");
exports.navbarNavItem = b.createDerivedComponent(tab_1.tab, {
    id: 'bobrilstrap-navbar-nav-item'
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.navbarNavItem;
});
R('node_modules/bobrilstrap/components/pageheader',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.pageHeaderStyle = b.styleDef('page-header', null, "pageHeaderStyle");
exports.pageHeader = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-page-header',
    render: function (_ctx, me) {
        b.style(me, exports.pageHeaderStyle);
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.pageHeader;
});
R('node_modules/bobrilstrap/components/pager',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var ul_1 = require("./ul");
exports.pagerStyles = {
    pager: b.styleDef('pager')
};
exports.pager = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-pager',
    render: function (ctx, me) {
        me.tag = 'nav';
        me.children = b.style(ul_1.ul(ctx.data.ul || {}, ctx.data.children), exports.pagerStyles.pager);
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.pager;
});
R('node_modules/bobrilstrap/components/pageritem',function(require, module, exports){
"use strict";
var b = require("bobril");
var li_1 = require("./li");
var bobrilHelpers_1 = require("./bobrilHelpers");
var PagerItemAlignment;
(function (PagerItemAlignment) {
    PagerItemAlignment[PagerItemAlignment["None"] = 0] = "None";
    PagerItemAlignment[PagerItemAlignment["Previous"] = 1] = "Previous";
    PagerItemAlignment[PagerItemAlignment["Next"] = 2] = "Next";
})(PagerItemAlignment = exports.PagerItemAlignment || (exports.PagerItemAlignment = {}));
exports.pagerItemStyles = {
    previous: b.styleDef('previous'),
    next: b.styleDef('next')
};
exports.pagerItemAlignmentStyles = bobrilHelpers_1.createDictionary();
exports.pagerItemAlignmentStyles(PagerItemAlignment.Previous, exports.pagerItemStyles.previous);
exports.pagerItemAlignmentStyles(PagerItemAlignment.Next, exports.pagerItemStyles.next);
exports.pagerItem = b.createDerivedComponent(li_1.li, {
    id: 'bobrilstrap-pager-item',
    render: function (ctx, me) {
        b.style(me, !!ctx.data.alignment && exports.pagerItemAlignmentStyles(ctx.data.alignment));
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.pagerItem;
});
R('node_modules/bobrilstrap/components/pagination',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var ul_1 = require("./ul");
var bobrilHelpers_1 = require("./bobrilHelpers");
exports.paginationStyles = {
    pagination: b.styleDef('pagination'),
    lg: b.styleDef('pagination-lg'),
    sm: b.styleDef('pagination-sm')
};
var PaginationSize;
(function (PaginationSize) {
    PaginationSize[PaginationSize["Md"] = 0] = "Md";
    PaginationSize[PaginationSize["Lg"] = 1] = "Lg";
    PaginationSize[PaginationSize["Sm"] = 2] = "Sm";
})(PaginationSize = exports.PaginationSize || (exports.PaginationSize = {}));
exports.paginationSizeStyles = bobrilHelpers_1.createDictionary();
exports.paginationSizeStyles(PaginationSize.Lg, exports.paginationStyles.lg);
exports.paginationSizeStyles(PaginationSize.Sm, exports.paginationStyles.sm);
exports.pagination = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-pagination',
    render: function (ctx, me) {
        me.tag = 'nav';
        me.children = b.style(ul_1.ul(ctx.data.ul || {}, ctx.data.children), exports.paginationStyles.pagination, !!ctx.data.size && exports.paginationSizeStyles(ctx.data.size));
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.pagination;
});
R('node_modules/bobrilstrap/components/paginationitem',function(require, module, exports){
"use strict";
var b = require("bobril");
var li_1 = require("./li");
exports.paginationItem = b.createDerivedComponent(li_1.li, {
    id: 'bobrilstrap-pagination-item'
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.paginationItem;
});
R('node_modules/bobrilstrap/components/panelheading',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var panel_1 = require("./panel");
exports.panelHeading = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-panel-heading',
    render: function (_ctx, me) {
        b.style(me, panel_1.panelStyles.panelHeading);
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.panelHeading;
});
R('node_modules/bobrilstrap/components/panelbody',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var panel_1 = require("./panel");
exports.panelBody = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-panel-body',
    render: function (_ctx, me) {
        b.style(me, panel_1.panelStyles.panelBody);
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.panelBody;
});
R('node_modules/bobrilstrap/components/panelfooter',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var panel_1 = require("./panel");
exports.panelFooter = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-panel-footer',
    render: function (_ctx, me) {
        b.style(me, panel_1.panelStyles.panelFooter);
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.panelFooter;
});
R('node_modules/bobrilstrap/components/panel',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var bobrilHelpers_1 = require("./bobrilHelpers");
var panelHeading_1 = require("./panelHeading");
var panelBody_1 = require("./panelBody");
var panelFooter_1 = require("./panelFooter");
var bobrilHelpers_2 = require("./bobrilHelpers");
exports.panelStyles = {
    panel: b.styleDef('panel'),
    panelGroup: b.styleDef('panel-group'),
    panelDefault: b.styleDef('panel-default'),
    panelPrimary: b.styleDef('panel-primary'),
    panelSuccess: b.styleDef('panel-success'),
    panelWarning: b.styleDef('panel-warning'),
    panelDanger: b.styleDef('panel-danger'),
    panelInfo: b.styleDef('panel-info'),
    panelHeading: b.styleDef('panel-heading'),
    panelBody: b.styleDef('panel-body'),
    panelFooter: b.styleDef('panel-footer'),
    panelTitle: b.styleDef('panel-title'),
    panelCollapse: b.styleDef('panel-collapse'),
};
var PanelContext;
(function (PanelContext) {
    PanelContext[PanelContext["Default"] = 0] = "Default";
    PanelContext[PanelContext["Primary"] = 1] = "Primary";
    PanelContext[PanelContext["Success"] = 2] = "Success";
    PanelContext[PanelContext["Warning"] = 3] = "Warning";
    PanelContext[PanelContext["Danger"] = 4] = "Danger";
    PanelContext[PanelContext["Info"] = 5] = "Info";
})(PanelContext = exports.PanelContext || (exports.PanelContext = {}));
exports.panelContextStyles = bobrilHelpers_1.createDictionary();
exports.panelContextStyles(PanelContext.Default, exports.panelStyles.panelDefault);
exports.panelContextStyles(PanelContext.Primary, exports.panelStyles.panelPrimary);
exports.panelContextStyles(PanelContext.Success, exports.panelStyles.panelSuccess);
exports.panelContextStyles(PanelContext.Warning, exports.panelStyles.panelWarning);
exports.panelContextStyles(PanelContext.Danger, exports.panelStyles.panelDanger);
exports.panelContextStyles(PanelContext.Info, exports.panelStyles.panelInfo);
exports.panel = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-panel',
    render: function (ctx, me) {
        b.style(me, exports.panelStyles.panel);
        b.style(me, (ctx.data.context !== undefined && exports.panelContextStyles(ctx.data.context)) || exports.panelStyles.panelDefault);
        if (ctx.data.body)
            bobrilHelpers_2.mergeToChildren(me, panelBody_1.panelBody({}, ctx.data.body), true);
        if (ctx.data.heading)
            bobrilHelpers_2.mergeToChildren(me, panelHeading_1.panelHeading({}, ctx.data.heading), true);
        if (ctx.data.footer)
            bobrilHelpers_2.mergeToChildren(me, panelFooter_1.panelFooter({}, ctx.data.heading));
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.panel;
});
R('node_modules/bobrilstrap/components/panelcollapse',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var panel_1 = require("./panel");
var collapse_1 = require("./collapse");
exports.panelCollapse = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-panel-collapse',
    render: function (_ctx, me) {
        b.style(me, panel_1.panelStyles.panelCollapse, collapse_1.collapseStyles.collapse);
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.panelCollapse;
});
R('node_modules/bobrilstrap/components/panelgroup',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var panel_1 = require("./panel");
exports.panelGroup = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-panel-group',
    render: function (_ctx, me) {
        b.style(me, panel_1.panelStyles.panelGroup);
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.panelGroup;
});
R('node_modules/bobrilstrap/components/paneltitle',function(require, module, exports){
"use strict";
var b = require("bobril");
var panel_1 = require("./panel");
var headings_1 = require("./headings");
exports.panelTitle1 = b.createDerivedComponent(headings_1.h1, {
    id: 'bobrilstrap-panel-title-h1',
    render: function (_ctx, me) {
        b.style(me, panel_1.panelStyles.panelTitle);
    }
});
exports.panelTitle2 = b.createDerivedComponent(headings_1.h2, {
    id: 'bobrilstrap-panel-title-h2',
    render: function (_ctx, me) {
        b.style(me, panel_1.panelStyles.panelTitle);
    }
});
exports.panelTitle3 = b.createDerivedComponent(headings_1.h3, {
    id: 'bobrilstrap-panel-title-h3',
    render: function (_ctx, me) {
        b.style(me, panel_1.panelStyles.panelTitle);
    }
});
exports.panelTitle4 = b.createDerivedComponent(headings_1.h4, {
    id: 'bobrilstrap-panel-title-h4',
    render: function (_ctx, me) {
        b.style(me, panel_1.panelStyles.panelTitle);
    }
});
exports.panelTitle5 = b.createDerivedComponent(headings_1.h5, {
    id: 'bobrilstrap-panel-title-h5',
    render: function (_ctx, me) {
        b.style(me, panel_1.panelStyles.panelTitle);
    }
});
exports.panelTitle6 = b.createDerivedComponent(headings_1.h6, {
    id: 'bobrilstrap-panel-title-h6',
    render: function (_ctx, me) {
        b.style(me, panel_1.panelStyles.panelTitle);
    }
});
});
R('node_modules/bobrilstrap/components/progressbar',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var span_1 = require("./span");
var helpers_1 = require("./helpers");
var bobrilHelpers_1 = require("./bobrilHelpers");
var ProgressBarContext;
(function (ProgressBarContext) {
    ProgressBarContext[ProgressBarContext["Success"] = 0] = "Success";
    ProgressBarContext[ProgressBarContext["Info"] = 1] = "Info";
    ProgressBarContext[ProgressBarContext["Warning"] = 2] = "Warning";
    ProgressBarContext[ProgressBarContext["Danger"] = 3] = "Danger";
})(ProgressBarContext = exports.ProgressBarContext || (exports.ProgressBarContext = {}));
exports.progressBarStyles = {
    progressBar: b.styleDef('progress-bar'),
    progressBarSuccess: b.styleDef('progress-bar-success'),
    progressBarInfo: b.styleDef('progress-bar-info'),
    progressBarWarning: b.styleDef('progress-bar-warning'),
    progressBarDanger: b.styleDef('progress-bar-danger'),
    progressBarStriped: b.styleDef('progress-bar-striped'),
    active: b.styleDef('active'),
};
exports.progressBarContextStyles = bobrilHelpers_1.createDictionary();
exports.progressBarContextStyles(ProgressBarContext.Success, exports.progressBarStyles.progressBarSuccess);
exports.progressBarContextStyles(ProgressBarContext.Info, exports.progressBarStyles.progressBarInfo);
exports.progressBarContextStyles(ProgressBarContext.Warning, exports.progressBarStyles.progressBarWarning);
exports.progressBarContextStyles(ProgressBarContext.Danger, exports.progressBarStyles.progressBarDanger);
exports.progressBar = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-progress-bar',
    render: function (ctx, me) {
        b.style(me, exports.progressBarStyles.progressBar);
        b.style(me, !!ctx.data.active && exports.progressBarStyles.active);
        b.style(me, !!ctx.data.striped && exports.progressBarStyles.progressBarStriped);
        b.style(me, ctx.data.context !== undefined && exports.progressBarContextStyles(ctx.data.context));
        b.style(me, { width: ctx.data.value + "%" });
        b.style(me, !!ctx.data.minWidth, { minWidth: ctx.data.minWidth });
        me.attrs['role'] = 'progressbar';
        bobrilHelpers_1.mergeToChildren(me, ctx.data.srOnlyText && span_1.span({ style: helpers_1.helpers.srOnly }, ctx.data.srOnlyText), true);
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.progressBar;
});
R('node_modules/bobrilstrap/components/progress',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var progressBar_1 = require("./progressBar");
var bobrilHelpers_1 = require("./bobrilHelpers");
exports.progressStyle = b.styleDef('progress', null, "progressStyle");
exports.progress = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-progress',
    render: function (ctx, me) {
        b.style(me, exports.progressStyle);
        if (ctx.data.bars) {
            ctx.data.bars.forEach(function (barData) { return bobrilHelpers_1.mergeToChildren(me, progressBar_1.progressBar(barData)); });
        }
    }
});
});
R('node_modules/bobrilstrap/components/pill',function(require, module, exports){
"use strict";
var b = require("bobril");
var tab_1 = require("./tab");
exports.pill = b.createDerivedComponent(tab_1.tab, {
    id: 'bobrilstrap-pill'
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.pill;
});
R('node_modules/bobrilstrap/components/pills',function(require, module, exports){
"use strict";
var b = require("bobril");
var ul_1 = require("./ul");
var nav_1 = require("./nav");
exports.pills = b.createDerivedComponent(ul_1.ul, {
    id: 'bobrilstrap-pills',
    render: function (ctx, me) {
        b.style(me, nav_1.navStyles.nav);
        b.style(me, nav_1.navStyles.navPills);
        b.style(me, !!ctx.data.justified && nav_1.navStyles.navJustified);
        b.style(me, !!ctx.data.stacked && nav_1.navStyles.navStacked);
        b.style(me, ctx.data.alignment === nav_1.NavbarAlignment.Right && nav_1.navStyles.navbarRight);
        b.style(me, ctx.data.alignment === nav_1.NavbarAlignment.Left && nav_1.navStyles.navbarLeft);
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.pills;
});
R('node_modules/bobrilstrap/components/popover',function(require, module, exports){
"use strict";
var b = require("bobril");
var PopoverPlacement;
(function (PopoverPlacement) {
    PopoverPlacement[PopoverPlacement["Left"] = 0] = "Left";
    PopoverPlacement[PopoverPlacement["Top"] = 1] = "Top";
    PopoverPlacement[PopoverPlacement["Bottom"] = 2] = "Bottom";
    PopoverPlacement[PopoverPlacement["Right"] = 3] = "Right";
    PopoverPlacement[PopoverPlacement["Auto"] = 4] = "Auto";
})(PopoverPlacement = exports.PopoverPlacement || (exports.PopoverPlacement = {}));
var PopoverTrigger;
(function (PopoverTrigger) {
    PopoverTrigger[PopoverTrigger["Click"] = 0] = "Click";
    PopoverTrigger[PopoverTrigger["Hover"] = 1] = "Hover";
    PopoverTrigger[PopoverTrigger["Focus"] = 2] = "Focus";
    PopoverTrigger[PopoverTrigger["Manual"] = 3] = "Manual";
})(PopoverTrigger = exports.PopoverTrigger || (exports.PopoverTrigger = {}));
exports.popover = b.createVirtualComponent({
    id: 'bobrilstrap-popover',
    render: function (ctx, me) {
        me.children = ctx.data.children;
    },
    postInitDom: function (ctx) {
        registerNewPopover(ctx);
    },
    postUpdateDom: function (ctx) {
        registerNewPopover(ctx);
    },
    destroy: function (ctx) {
        unregister(ctx);
    }
});
function registerNewPopover(ctx) {
    var element = b.getDomNode(ctx.me);
    if (!element) {
        ctx.popoveredElement = undefined;
        return;
    }
    var jQueryElement = $(element);
    if (!ctx.popoveredElement) {
        jQueryElement.popover({
            title: ctx.data.title,
            content: ctx.data.content,
            animation: ctx.data.animation,
            placement: ctx.data.placement !== undefined ? PopoverPlacement[ctx.data.placement].toLowerCase() : undefined,
            trigger: ctx.data.trigger ? ctx.data.trigger.map(function (value) { return PopoverTrigger[value].toLowerCase(); }).join(' ') : undefined
        });
        jQueryElement.on('shown.bs.popover', function () { return ctx.visible = true; });
        jQueryElement.on('hidden.bs.popover', function () { return ctx.visible = false; });
        ctx.popoveredElement = element;
    }
    var newTitle = typeof ctx.data.title === 'function' ? ctx.data.title() : ctx.data.title;
    var newContent = typeof ctx.data.content === 'function' ? ctx.data.content() : ctx.data.content;
    if ((ctx.lastTitle !== undefined && ctx.lastTitle !== newTitle) || (ctx.lastContent !== undefined && ctx.lastContent !== newContent)) {
        jQueryElement.popover('setContent');
        if (ctx.visible)
            jQueryElement.popover('show');
    }
    ctx.lastTitle = typeof ctx.data.title === 'function' ? ctx.data.title() : ctx.data.title;
    ctx.lastContent = typeof ctx.data.content === 'function' ? ctx.data.content() : ctx.data.content;
}
function unregister(ctx) {
    if (ctx.popoveredElement) {
        $(ctx.popoveredElement).popover('destroy');
        ctx.popoveredElement = undefined;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.popover;
});
R('node_modules/bobrilstrap/components/pre',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.pre = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-pre',
    render: function (_ctx, me) {
        me.tag = 'pre';
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.pre;
});
R('node_modules/bobrilstrap/components/radio',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var label_1 = require("./label");
var inputRadio_1 = require("./inputRadio");
exports.radioStyles = {
    radio: b.styleDef('radio'),
    radioInline: b.styleDef('radio-inline'),
    disabled: b.styleDef('disabled')
};
exports.radio = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-radio',
    render: function (ctx, me) {
        b.style(me, exports.radioStyles.radio);
        var inputRadioNode = inputRadio_1.inputRadio(ctx.data.inputRadio);
        var lbl = label_1.label(ctx.data.label || {}, inputRadioNode);
        if (ctx.data.inline) {
            me.tag = undefined;
            b.style(lbl, exports.radioStyles.radioInline);
        }
        else if (ctx.data.inputRadio && ctx.data.inputRadio.disabled) {
            b.style(me, exports.radioStyles.disabled);
        }
        me.children = lbl;
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.radio;
});
R('node_modules/bobrilstrap/components/responsive',function(require, module, exports){
"use strict";
var b = require("bobril");
var bobrilHelpers_1 = require("./bobrilHelpers");
var Display;
(function (Display) {
    Display[Display["Block"] = 0] = "Block";
    Display[Display["Inline"] = 1] = "Inline";
    Display[Display["InlineBlock"] = 2] = "InlineBlock";
})(Display = exports.Display || (exports.Display = {}));
var Device;
(function (Device) {
    Device[Device["Xs"] = 0] = "Xs";
    Device[Device["Sm"] = 1] = "Sm";
    Device[Device["Md"] = 2] = "Md";
    Device[Device["Lg"] = 3] = "Lg";
    Device[Device["Print"] = 4] = "Print";
})(Device = exports.Device || (exports.Device = {}));
exports.visibleStyles = getVisbileStyles();
exports.hiddenStyles = getHiddenStyles();
function getVisbileStyles() {
    var result = bobrilHelpers_1.createDictionary();
    Object.keys(Device).forEach(function (device) {
        var castedDeviceValue = parseInt(device, 10);
        if (!isNaN(castedDeviceValue)) {
            result(castedDeviceValue, bobrilHelpers_1.createDictionary());
            Object.keys(Display).forEach(function (display) {
                var castedDisplayValue = parseInt(display, 10);
                if (!isNaN(castedDisplayValue)) {
                    result(castedDeviceValue)(castedDisplayValue, b.styleDef("visible-" + Device[castedDeviceValue].toLowerCase() + "-" + bobrilHelpers_1.toLowerWithDashes(Display[castedDisplayValue])));
                }
            });
        }
    });
    return result;
}
function getHiddenStyles() {
    var result = bobrilHelpers_1.createDictionary();
    Object.keys(Device).forEach(function (device) {
        var castedDeviceValue = parseInt(device, 10);
        if (!isNaN(castedDeviceValue)) {
            result(castedDeviceValue, b.styleDef("hidden-" + Device[castedDeviceValue].toLowerCase()));
        }
    });
    return result;
}
});
R('node_modules/bobrilstrap/components/th',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.th = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-th',
    render: function (ctx, me) {
        me.tag = 'th';
        if (ctx.data.colspan)
            me.attrs['colspan'] = ctx.data.colspan.toString();
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.th;
});
R('node_modules/bobrilstrap/components/td',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var table_1 = require("./table");
exports.td = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-td',
    render: function (ctx, me) {
        me.tag = 'td';
        b.style(me, ctx.data.context !== undefined && table_1.tableContextStyles(ctx.data.context));
        if (ctx.data.colspan)
            me.attrs['colspan'] = ctx.data.colspan.toString();
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.td;
});
R('node_modules/bobrilstrap/components/tr',function(require, module, exports){
"use strict";
var b = require("bobril");
var bobrilHelpers_1 = require("./bobrilHelpers");
var element_1 = require("./element");
var table_1 = require("./table");
var th_1 = require("./th");
var td_1 = require("./td");
exports.tr = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-tr',
    render: function (ctx, me) {
        me.tag = 'tr';
        b.style(me, ctx.data.context !== undefined && table_1.tableContextStyles(ctx.data.context));
        if (ctx.data.headers)
            me.children = bobrilHelpers_1.mergeToChildren(me, ctx.data.headers.map(function (header) { return th_1.th(getColumnData(header)); }));
        if (ctx.data.columns)
            me.children = bobrilHelpers_1.mergeToChildren(me, ctx.data.columns.map(function (column) { return td_1.td(getColumnData(column)); }));
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.tr;
function getColumnData(column) {
    return typeof column === 'string' ? { children: column } : column;
}
});
R('node_modules/bobrilstrap/components/thead',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var tr_1 = require("./tr");
exports.thead = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-thead',
    render: function (ctx, me) {
        me.tag = 'thead';
        if (ctx.data.row)
            me.children = tr_1.tr(ctx.data.row);
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.thead;
});
R('node_modules/bobrilstrap/components/tbody',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var tr_1 = require("./tr");
exports.tbody = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-tbody',
    render: function (ctx, me) {
        me.tag = 'tbody';
        if (ctx.data.rows)
            me.children = ctx.data.rows.map(function (row) { return tr_1.tr(row); });
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.tbody;
});
R('node_modules/bobrilstrap/components/caption',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.caption = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-caption',
    render: function (_ctx, me) {
        me.tag = 'caption';
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.caption;
});
R('node_modules/bobrilstrap/components/table',function(require, module, exports){
"use strict";
var b = require("bobril");
var bobrilHelpers_1 = require("./bobrilHelpers");
var element_1 = require("./element");
var thead_1 = require("./thead");
var tbody_1 = require("./tbody");
var caption_1 = require("./caption");
var bobrilHelpers_2 = require("./bobrilHelpers");
var TableContext;
(function (TableContext) {
    TableContext[TableContext["Active"] = 0] = "Active";
    TableContext[TableContext["Success"] = 1] = "Success";
    TableContext[TableContext["Warning"] = 2] = "Warning";
    TableContext[TableContext["Danger"] = 3] = "Danger";
    TableContext[TableContext["Info"] = 4] = "Info";
})(TableContext = exports.TableContext || (exports.TableContext = {}));
exports.tableContextStyles = bobrilHelpers_2.createDictionary();
exports.tableContextStyles(TableContext.Active, b.styleDef('active'));
exports.tableContextStyles(TableContext.Success, b.styleDef('success'));
exports.tableContextStyles(TableContext.Warning, b.styleDef('warning'));
exports.tableContextStyles(TableContext.Danger, b.styleDef('danger'));
exports.tableContextStyles(TableContext.Info, b.styleDef('info'));
exports.tableStyles = {
    table: b.styleDef('table'),
    responsive: b.styleDef('table-responsive'),
    tableStriped: b.styleDef('table-striped'),
    tableBordered: b.styleDef('table-bordered'),
    tableHover: b.styleDef('table-hover'),
    tableCondensed: b.styleDef('table-condensed')
};
exports.table = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-table',
    render: function (ctx, me) {
        me.tag = 'table';
        b.style(me, exports.tableStyles.table);
        b.style(me, !!ctx.data.striped && exports.tableStyles.tableStriped);
        b.style(me, !!ctx.data.bordered && exports.tableStyles.tableBordered);
        b.style(me, !!ctx.data.hover && exports.tableStyles.tableHover);
        b.style(me, !!ctx.data.condensed && exports.tableStyles.tableCondensed);
        if (ctx.data.caption)
            bobrilHelpers_1.mergeToChildren(me, caption_1.caption({}, ctx.data.caption));
        if (ctx.data.head)
            bobrilHelpers_1.mergeToChildren(me, thead_1.thead(ctx.data.head));
        if (ctx.data.body)
            bobrilHelpers_1.mergeToChildren(me, tbody_1.tbody(ctx.data.body));
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.table;
});
R('node_modules/bobrilstrap/components/responsivetable',function(require, module, exports){
"use strict";
var b = require("bobril");
var bobrilHelpers_1 = require("./bobrilHelpers");
var element_1 = require("./element");
var table_1 = require("./table");
exports.responsiveTable = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-responsive-table',
    render: function (ctx, me) {
        b.style(me, table_1.tableStyles.responsive);
        bobrilHelpers_1.mergeToChildren(me, table_1.table(ctx.data.table));
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.responsiveTable;
});
R('node_modules/bobrilstrap/components/row',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.rowStyle = b.styleDef('row', null, "rowStyle");
exports.row = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-row',
    render: function (_ctx, me) {
        b.style(me, exports.rowStyle);
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.row;
});
R('node_modules/bobrilstrap/components/select',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var option_1 = require("./option");
var bobrilHelpers_1 = require("./bobrilHelpers");
exports.selectStyles = {
    formControl: b.styleDef('form-control'),
    lg: b.styleDef('input-lg'),
    sm: b.styleDef('input-sm')
};
var SelectSize;
(function (SelectSize) {
    SelectSize[SelectSize["Lg"] = 0] = "Lg";
    SelectSize[SelectSize["Default"] = 1] = "Default";
    SelectSize[SelectSize["Sm"] = 2] = "Sm";
})(SelectSize = exports.SelectSize || (exports.SelectSize = {}));
exports.selectSizeStyles = bobrilHelpers_1.createDictionary();
exports.selectSizeStyles(SelectSize.Lg, exports.selectStyles.lg);
exports.selectSizeStyles(SelectSize.Default, false);
exports.selectSizeStyles(SelectSize.Sm, exports.selectStyles.sm);
exports.select = b.createOverridingComponent(element_1.elem, {
    id: 'bobrilstrap-select',
    render: function (ctx, me) {
        me.component.super.render(ctx, me);
        me.tag = 'select';
        if (ctx.data.value !== undefined) {
            ctx.value = ctx.data.value;
        }
        else if (ctx.value === undefined && ctx.data.multiple) {
            ctx.value = [];
        }
        me.attrs.value = ctx.value;
        b.style(me, exports.selectStyles.formControl);
        b.style(me, ctx.data.size !== undefined && exports.selectSizeStyles(ctx.data.size));
        me.children = ctx.data.options.map(function (optionData) { return option_1.option(optionData); });
        if (ctx.data.rows)
            me.attrs['size'] = ctx.data.rows.toString();
        if (ctx.data.disabled)
            me.attrs['disabled'] = 'disabled';
        if (ctx.data.multiple)
            me.attrs['multiple'] = 'multiple';
    },
    onChange: function (ctx, value) {
        ctx.value = value;
        ctx.me.component.super.onChange(ctx, value);
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.select;
});
R('node_modules/bobrilstrap/components/sub',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.sub = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-sub',
    render: function (_ctx, me) {
        me.tag = 'sub';
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.sub;
});
R('node_modules/bobrilstrap/components/sup',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.sup = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-sup',
    render: function (_ctx, me) {
        me.tag = 'sup';
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.sup;
});
R('node_modules/bobrilstrap/components/samp',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.samp = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-samp',
    render: function (_ctx, me) {
        me.tag = 'samp';
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.samp;
});
R('node_modules/bobrilstrap/components/small',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.small = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-small',
    render: function (_ctx, me) {
        me.tag = 'small';
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.small;
});
R('node_modules/bobrilstrap/components/strong',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.strong = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-strong',
    render: function (_ctx, me) {
        me.tag = 'strong';
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.strong;
});
R('node_modules/bobrilstrap/components/strikethrough',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.strikethrough = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-strikethrough',
    render: function (_ctx, me) {
        me.tag = 's';
    }
});
exports.s = exports.strikethrough;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.strikethrough;
});
R('node_modules/bobrilstrap/components/tabs',function(require, module, exports){
"use strict";
var b = require("bobril");
var ul_1 = require("./ul");
var nav_1 = require("./nav");
exports.tabs = b.createDerivedComponent(ul_1.ul, {
    id: 'bobrilstrap-tabs',
    render: function (ctx, me) {
        b.style(me, nav_1.navStyles.nav);
        b.style(me, nav_1.navStyles.navbTabs);
        b.style(me, !!ctx.data.justified && nav_1.navStyles.navJustified);
        b.style(me, ctx.data.alignment === nav_1.NavbarAlignment.Right && nav_1.navStyles.navbarRight);
        b.style(me, ctx.data.alignment === nav_1.NavbarAlignment.Left && nav_1.navStyles.navbarLeft);
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.tabs;
});
R('node_modules/bobrilstrap/components/textarea',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.textareaStyles = {
    formControl: b.styleDef('form-control'),
    fixedSize: b.styleDef({ resize: 'none' }, undefined, 'textarea-fixed-size')
};
exports.textarea = b.createOverridingComponent(element_1.elem, {
    id: 'bobrilstrap-textare',
    render: function (ctx, me) {
        me.component.super.render(ctx, me);
        me.tag = 'textarea';
        if (ctx.data.value !== undefined) {
            ctx.value = ctx.data.value;
        }
        me.attrs.value = ctx.value;
        b.style(me, exports.textareaStyles.formControl);
        b.style(me, !!ctx.data.fixedSize && exports.textareaStyles.fixedSize);
        if (ctx.data.rows)
            me.attrs['rows'] = ctx.data.rows.toString();
        if (ctx.data.placeholder)
            me.attrs['placeholder'] = ctx.data.placeholder.toString();
        if (ctx.data.disabled)
            me.attrs['disabled'] = 'disabled';
        if (ctx.data.readonly)
            me.attrs['readonly'] = 'readonly';
    },
    onChange: function (ctx, value) {
        ctx.value = value;
        ctx.me.component.super.onChange(ctx, value);
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.textarea;
});
R('node_modules/bobrilstrap/components/tooltip',function(require, module, exports){
"use strict";
var b = require("bobril");
var TooltipPlacement;
(function (TooltipPlacement) {
    TooltipPlacement[TooltipPlacement["Left"] = 0] = "Left";
    TooltipPlacement[TooltipPlacement["Top"] = 1] = "Top";
    TooltipPlacement[TooltipPlacement["Bottom"] = 2] = "Bottom";
    TooltipPlacement[TooltipPlacement["Right"] = 3] = "Right";
    TooltipPlacement[TooltipPlacement["Auto"] = 4] = "Auto";
})(TooltipPlacement = exports.TooltipPlacement || (exports.TooltipPlacement = {}));
var TooltipTrigger;
(function (TooltipTrigger) {
    TooltipTrigger[TooltipTrigger["Click"] = 0] = "Click";
    TooltipTrigger[TooltipTrigger["Hover"] = 1] = "Hover";
    TooltipTrigger[TooltipTrigger["Focus"] = 2] = "Focus";
    TooltipTrigger[TooltipTrigger["Manual"] = 3] = "Manual";
})(TooltipTrigger = exports.TooltipTrigger || (exports.TooltipTrigger = {}));
exports.tooltip = b.createVirtualComponent({
    id: 'bobrilstrap-tooltip',
    render: function (ctx, me) {
        me.children = ctx.data.children;
    },
    postInitDom: function (ctx) {
        registerNewTooltip(ctx);
    },
    postUpdateDom: function (ctx) {
        registerNewTooltip(ctx);
    },
    destroy: function (ctx) {
        unregister(ctx);
    }
});
function registerNewTooltip(ctx) {
    var element = b.getDomNode(ctx.me);
    if (!element) {
        ctx.tooltipedElement = undefined;
        return;
    }
    var jQueryElement = $(element);
    if (!ctx.tooltipedElement) {
        jQueryElement.tooltip({
            title: ctx.data.title,
            animation: ctx.data.animation,
            placement: ctx.data.placement !== undefined ? TooltipPlacement[ctx.data.placement].toLowerCase() : undefined,
            trigger: ctx.data.trigger ? ctx.data.trigger.map(function (value) { return TooltipTrigger[value].toLowerCase(); }).join(' ') : undefined
        });
        jQueryElement.on('shown.bs.tooltip', function () { return ctx.visible = true; });
        jQueryElement.on('hidden.bs.tooltip', function () { return ctx.visible = false; });
        ctx.tooltipedElement = element;
    }
    if (ctx.lastTitle !== undefined) {
        var newTitle = typeof ctx.data.title === 'function' ? ctx.data.title() : ctx.data.title;
        if (ctx.lastTitle !== newTitle) {
            jQueryElement.attr('title', newTitle).tooltip('fixTitle');
            if (ctx.visible)
                jQueryElement.tooltip('show');
        }
    }
    ctx.lastTitle = typeof ctx.data.title === 'function' ? ctx.data.title() : ctx.data.title;
}
function unregister(ctx) {
    if (ctx.tooltipedElement) {
        $(ctx.tooltipedElement).tooltip('destroy');
        ctx.tooltipedElement = undefined;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.tooltip;
});
R('node_modules/bobrilstrap/components/underlined',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.underlined = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-underlined',
    render: function (_ctx, me) {
        me.tag = 'u';
    }
});
exports.u = exports.underlined;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.underlined;
});
R('node_modules/bobrilstrap/components/variable',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.variable = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-variable',
    render: function (_ctx, me) {
        me.tag = 'var';
    }
});
exports.v = exports.variable;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.variable;
});
R('node_modules/bobrilstrap/components/video',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var embedResponsive_1 = require("./embedResponsive");
exports.video = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-video',
    render: function (ctx, me) {
        me.tag = 'video';
        b.style(me, !!ctx.data.embedResponsive && embedResponsive_1.embedResponsiveStyles.embedResponsiveItem);
        me.attrs['src'] = ctx.data.src;
        me.attrs['type'] = ctx.data.type;
        if (ctx.data.height !== undefined)
            me.attrs['height'] = ctx.data.height;
        if (ctx.data.width !== undefined)
            me.attrs['width'] = ctx.data.width;
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.video;
});
R('node_modules/bobrilstrap/components/well',function(require, module, exports){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var bobrilHelpers_1 = require("./bobrilHelpers");
exports.wellStyles = {
    well: b.styleDef('well'),
    lg: b.styleDef('well-lg'),
    sm: b.styleDef('well-sm')
};
var WellSize;
(function (WellSize) {
    WellSize[WellSize["Lg"] = 0] = "Lg";
    WellSize[WellSize["Sm"] = 1] = "Sm";
})(WellSize = exports.WellSize || (exports.WellSize = {}));
exports.wellSizeStyles = bobrilHelpers_1.createDictionary();
exports.wellSizeStyles(WellSize.Lg, exports.wellStyles.lg);
exports.wellSizeStyles(WellSize.Sm, exports.wellStyles.sm);
exports.well = b.createDerivedComponent(element_1.elem, {
    id: 'bobrilstrap-well',
    render: function (ctx, me) {
        b.style(me, exports.wellStyles.well);
        b.style(me, ctx.data.size !== undefined && exports.wellSizeStyles(ctx.data.size));
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.well;
});
R('node_modules/bobrilstrap/index',function(require, module, exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
/// <reference path="./typed/bootstrap/bootstrap.d.ts" />
var b = require("bobril");
var bobrilSwipeExtension = require("./components/bobrilSwipeExtension");
__export(require("./components/a"));
__export(require("./components/abbreviation"));
__export(require("./components/address"));
__export(require("./components/affix"));
__export(require("./components/alert"));
__export(require("./components/badge"));
__export(require("./components/blockquote"));
__export(require("./components/bobrilHelpers"));
__export(require("./components/breadcrumb"));
__export(require("./components/breadcrumbItem"));
__export(require("./components/button"));
__export(require("./components/buttonGroup"));
__export(require("./components/buttonToolbar"));
__export(require("./components/carousel"));
__export(require("./components/cite"));
__export(require("./components/collapse"));
__export(require("./components/code"));
__export(require("./components/col"));
__export(require("./components/container"));
__export(require("./components/checkbox"));
__export(require("./components/dd"));
__export(require("./components/del"));
__export(require("./components/dl"));
__export(require("./components/dropdown"));
__export(require("./components/dropdownItem"));
__export(require("./components/dropdownMenu"));
__export(require("./components/dt"));
__export(require("./components/embed"));
__export(require("./components/element"));
__export(require("./components/embedResponsive"));
__export(require("./components/fieldset"));
__export(require("./components/figure"));
__export(require("./components/footer"));
__export(require("./components/form"));
__export(require("./components/formGroup"));
__export(require("./components/glyphicon"));
__export(require("./components/headings"));
__export(require("./components/helpers"));
__export(require("./components/helpText"));
__export(require("./components/iframe"));
__export(require("./components/image"));
__export(require("./components/inputCheckbox"));
__export(require("./components/inputGroup"));
__export(require("./components/inputGroupAddon"));
__export(require("./components/inputGroupBtn"));
__export(require("./components/inputRadio"));
__export(require("./components/inputText"));
__export(require("./components/ins"));
__export(require("./components/italics"));
__export(require("./components/jumbotron"));
__export(require("./components/kbd"));
__export(require("./components/label"));
__export(require("./components/li"));
__export(require("./components/listGroup"));
__export(require("./components/listGroupItem"));
__export(require("./components/listGroupItemLink"));
__export(require("./components/listGroupItemText"));
__export(require("./components/listGroupItemHeading"));
__export(require("./components/object"));
__export(require("./components/ol"));
__export(require("./components/option"));
__export(require("./components/mark"));
__export(require("./components/media"));
__export(require("./components/mediaContent"));
__export(require("./components/mediaHeading"));
__export(require("./components/modal"));
__export(require("./components/modalTitle"));
__export(require("./components/nav"));
__export(require("./components/navbarBrand"));
__export(require("./components/navbarCollapse"));
__export(require("./components/navbarHeader"));
__export(require("./components/navbarNav"));
__export(require("./components/navbarNavItem"));
__export(require("./components/pageHeader"));
__export(require("./components/pager"));
__export(require("./components/pagerItem"));
__export(require("./components/pagination"));
__export(require("./components/paginationItem"));
__export(require("./components/panel"));
__export(require("./components/panelBody"));
__export(require("./components/panelCollapse"));
__export(require("./components/panelFooter"));
__export(require("./components/panelGroup"));
__export(require("./components/panelHeading"));
__export(require("./components/panelTitle"));
__export(require("./components/paragraph"));
__export(require("./components/progress"));
__export(require("./components/progressBar"));
__export(require("./components/pill"));
__export(require("./components/pills"));
__export(require("./components/popover"));
__export(require("./components/pre"));
__export(require("./components/radio"));
__export(require("./components/responsive"));
__export(require("./components/responsiveTable"));
__export(require("./components/row"));
__export(require("./components/select"));
__export(require("./components/size"));
__export(require("./components/span"));
__export(require("./components/sub"));
__export(require("./components/sup"));
__export(require("./components/samp"));
__export(require("./components/small"));
__export(require("./components/strong"));
__export(require("./components/strikethrough"));
__export(require("./components/tab"));
__export(require("./components/table"));
__export(require("./components/tabs"));
__export(require("./components/tbody"));
__export(require("./components/td"));
__export(require("./components/textarea"));
__export(require("./components/th"));
__export(require("./components/thead"));
__export(require("./components/tooltip"));
__export(require("./components/tr"));
__export(require("./components/typography"));
__export(require("./components/ul"));
__export(require("./components/underlined"));
__export(require("./components/validations"));
__export(require("./components/variable"));
__export(require("./components/video"));
__export(require("./components/well"));
function init() {
    b.asset("node_modules/jquery/dist/jquery.min.js");
    b.asset("node_modules/bootstrap/dist/css/bootstrap.min.css");
    b.asset("node_modules/bootstrap/dist/js/bootstrap.min.js");
    bobrilSwipeExtension.init();
}
exports.init = init;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = init;
});
R('theme/init',function(require, module, exports){
"use strict";
var b = require("bobril");
function init() {
    b.asset("theme/css/bootstrap.css");
    b.asset("theme/css/style.css");
}
exports.init = init;
});
R('main/menu',function(require, module, exports){
"use strict";
var b = require("bobril");
var bs = require("bobrilstrap");
exports.menu = b.createVirtualComponent({
    render: function (ctx, me) {
        me.children = [
            b.style(bs.nav({ inverse: true }, [
                bs.container({}, [
                    bs.navbarHeader({}, [bs.navbarBrand({ href: '../' }, bs.h1({}, 'Důkazy z teorie grafů'))]),
                    bs.navbarCollapse({}, bs.navbarNav({}, [
                        // bs.navbarNavItem({}, b.link(bs.a({}, 'Typy důkazů'), 'typyDukazu')),
                        bs.dropdown({ button: { label: 'Výroková logika', tag: bs.ButtonTag.A, variant: bs.ButtonVariant.DropdownNav } }, bs.dropdownMenu({}, [
                            bs.dropdownItem({}, b.link(bs.a({}, 'Výroky'), 'vyroky')),
                            bs.dropdownItem({}, b.link(bs.a({}, 'Negace'), 'negace')),
                            bs.dropdownItem({}, b.link(bs.a({}, 'Věty'), 'vety')),
                        ])),
                        bs.dropdown({ button: { label: 'Typy důkazů', tag: bs.ButtonTag.A, variant: bs.ButtonVariant.DropdownNav } }, bs.dropdownMenu({}, [
                            bs.dropdownItem({}, b.link(bs.a({}, 'Důkaz přímo'), 'primo')),
                            bs.dropdownItem({}, b.link(bs.a({}, 'Důkaz nepřímo'), 'neprimo')),
                            bs.dropdownItem({}, b.link(bs.a({}, 'Důkaz sporem'), 'sporem')),
                            bs.dropdownItem({}, b.link(bs.a({}, 'Důkaz indukcí'), 'indukci')),
                        ])),
                        bs.dropdown({ button: { label: 'Základní pojmy', tag: bs.ButtonTag.A, variant: bs.ButtonVariant.DropdownNav } }, bs.dropdownMenu({}, [
                            bs.dropdownItem({}, b.link(bs.a({}, 'Věta 1.1 (Princip sudosti)'), 'veta11')),
                            // bs.dropdownItem({}, b.link(bs.a({}, 'Věta 1.1 (Princip sudosti) stará'), 'veta11old')),
                            bs.dropdownItem({}, b.link(bs.a({}, 'Tvrzení 1.1'), 'tvrzeni11')),
                            bs.dropdownItem({}, b.link(bs.a({}, 'Tvrzení 1.2'), 'tvrzeni12'))
                        ])),
                        bs.dropdown({ button: { label: 'Typy grafů', tag: bs.ButtonTag.A, variant: bs.ButtonVariant.DropdownNav } }, bs.dropdownMenu({}, [
                            bs.dropdownItem({}, b.link(bs.a({}, 'Věta 2.2'), 'veta22'))
                        ])),
                        // bs.dropdown(
                        //     { button: { label: 'Barvení', tag: bs.ButtonTag.A, variant: bs.ButtonVariant.DropdownNav } },
                        //     bs.dropdownMenu({}, [
                        //         bs.dropdownItem({}, b.link(bs.a({}, 'Nic'), 'tvrzeni41'))
                        //     ])),
                        bs.dropdown({ button: { label: 'Stromy', tag: bs.ButtonTag.A, variant: bs.ButtonVariant.DropdownNav } }, bs.dropdownMenu({}, [
                            bs.dropdownItem({}, b.link(bs.a({}, 'Tvrzení 4.1'), 'tvrzeni41'))
                        ]))
                    ]))
                ])
            ]))
        ];
    }
});
});
R('main/footer',function(require, module, exports){
"use strict";
var b = require("bobril");
var bs = require("bobrilstrap");
exports.footer = b.createVirtualComponent({
    render: function (ctx, me) {
        me.children = [
            bs.e({ tag: 'hr' }),
            bs.footer({}, bs.paragraph({}, 'Copyright © Markéta Šťastná, 2016'))
        ];
    }
});
});
R('main/mainpage',function(require, module, exports){
"use strict";
var b = require("bobril");
var bs = require("bobrilstrap");
var menu_1 = require("./menu");
var footer_1 = require("./footer");
exports.mainPage = b.createVirtualComponent({
    render: function (ctx, me) {
        me.children = [
            menu_1.menu(),
            bs.container({}, [me.data.activeRouteHandler(), footer_1.footer()])
        ];
    }
});
});
R('theme/css/css',function(require, module, exports){
"use strict";
var b = require("bobril");
exports.well = b.styleDef('well-sm', null, "well");
exports.canvas = b.styleDef({
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 800,
    height: 500,
    display: 'block',
    border: 1,
    borderStyle: 'solid',
    borderColor: 'black'
}, null, "canvas");
exports.canvasWindow = b.styleDef({
    border: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    height: '100%',
    width: '100%',
    position: 'fixed'
}, null, "canvasWindow");
exports.svgText = b.styleDef({
    fontSize: 20
}, null, "svgText");
});
R('common/colors',function(require, module, exports){
"use strict";
exports.redHighlight = '#E74B47';
exports.greenHighlight = '#2DE52D';
exports.orangeHighlight = '#FF9A34';
exports.purpleHighlight = '#BF5FFF';
exports.blueHighlight = '#3499FF';
exports.redHighlightLight = '#FFAFB1';
exports.greenHighlightLight = '#89FF89';
exports.orangeHighlightLight = '#FFC199';
exports.purpleHighlightLight = '#DBA5FF';
exports.blueHighlightLight = '#b4e5ff';
exports.defaultBlack = '#000000';
exports.defaultWhite = '#FFFFFF';
exports.defaultVertex = '#FFFF00';
});
R('components/cloud',function(require, module, exports){
"use strict";
var b = require("bobril");
var colors = require("../common/colors");
var cloudStyle = b.styleDef({ stroke: colors.defaultBlack, strokeWidth: '1.5px', fill: 'none', opacity: 0.5 }, null, "cloudStyle");
exports.cloud = b.createComponent({
    render: function (ctx, me, oldMe) {
        me.tag = 'path';
        me.children = ctx.data.children;
        // me.attrs  = {d: 'M 100,200 a 20,20 1 0,0 0,40 h 50 a 200,20 1 0,0 0, 40 a 10,10 1 0,0  15, 10 a 15,15 1 0,0  35,10  z'};
        // me.attrs = { d: 'M 50 125 S 37.5 174 25 250 S 50 323 75 400 S 150 424 225 448 S 312.5 448 400 448 ' +
        // 'S 487.5 448 575 448 S 637.5 411 700 374 S 725 323 750' +
        // ' 273 S 750 213 750 150 S 725 99 700 50.6 S 600 37 500 25.6 ' + 
        // 'S 412.5 25.6 325 25.6 S 250 0 175 25.6 S 125 60 50 125 Z', filter: 'url(#filter)' };
        me.attrs = { d: 'M 50 125 S 0 174 25 250 S 0 323 75 400 S 180 420 250 448 S 312.5 448 ' +
                ' 380 430 S 487.5 448 560 450 S 637.5 400 700 374 S 720 320 750 260 S 750 210 750 150 S' +
                '710 60 650 50.6 S 600 0 500 30 S 412.5 0 325 25.6 S 250 10 175 25.6 S 120 80 50 125 Z', filter: 'url(#filter)' };
        b.style(me, cloudStyle);
    }
});
});
R('components/cloudfilter',function(require, module, exports){
"use strict";
var b = require("bobril");
var bs = require("bobrilstrap");
exports.cloudFilter = b.createComponent({
    render: function (ctx, me, oldMe) {
        me.tag = 'defs';
        me.children = [
            bs.elem({ tag: 'filter', attrs: { x: 0, y: 0, id: 'filter' } }, [
                bs.elem({ tag: 'feOffset', attrs: { result: 'offOut', in: 'SourceAlpha', dx: 2, dy: 2 } }, []),
                bs.elem({ tag: 'feGaussianBlur', attrs: { result: 'blurOut', stdDeviation: 10 } }, []),
                bs.elem({ tag: 'feBlend', attrs: { in: 'SourceGraphic', in2: 'blurOut', mode: 'normal' } }, []),
            ]),
            bs.elem({ tag: 'filter', attrs: { x: 0, y: 0, id: 'filterPath' } }, [
                bs.elem({ tag: 'feOffset', attrs: { result: 'offOut', in: 'SourceGraphic', dx: 1, dy: 1 } }, []),
            ])
        ];
    }
});
});
R('components/vertex',function(require, module, exports){
"use strict";
var b = require("bobril");
var colors = require("../common/colors");
var vertexStyle = b.styleDef({ stroke: colors.defaultBlack, strokeWidth: '3px', fill: colors.defaultVertex }, null, "vertexStyle");
exports.vertex = b.createComponent({
    id: 'vertex',
    render: function (ctx, me) {
        me.tag = 'circle';
        me.children = ctx.data.children;
        if (ctx.data.cx <= 0) {
            ctx.data.cx = 0;
        }
        if (ctx.data.cy <= 0) {
            ctx.data.cy = 0;
        }
        me.attrs = { cx: ctx.data.cx, cy: ctx.data.cy, r: ctx.data.r };
        b.style(me, vertexStyle, !!ctx.data.color && { fill: ctx.data.color }, !!ctx.data.strokeColor && { stroke: ctx.data.strokeColor }, !!ctx.data.strokeWidth && { strokeWidth: ctx.data.strokeWidth });
    },
    onPointerDown: function (ctx, param) {
        b.registerMouseOwner(ctx);
        var svgCircle = ctx.me.element;
        var svg = svgCircle.ownerSVGElement;
        var point = svg.createSVGPoint();
        point.x = param.x;
        point.y = param.y;
        var ctm = svgCircle.getScreenCTM();
        point = point.matrixTransform(ctm.inverse());
        ctx.lastX = point.x;
        ctx.lastY = point.y;
        return true;
    },
    onPointerMove: function (ctx, param) {
        if (!b.isMouseOwner(ctx)) {
            return false;
        }
        var svgCircle = ctx.me.element;
        var svg = svgCircle.ownerSVGElement;
        var point = svg.createSVGPoint();
        point.x = param.x;
        point.y = param.y;
        var ctm = svgCircle.getScreenCTM();
        point = point.matrixTransform(ctm.inverse());
        if ((ctx.lastX === point.x && ctx.lastY === point.y) ||
            point.x <= 0 ||
            point.y <= 0 ||
            point.x >= svg.clientWidth ||
            point.y >= svg.clientHeight) {
            return false;
        }
        if (ctx.data.onMove) {
            ctx.data.onMove(point.x - ctx.lastX, point.y - ctx.lastY);
        }
        ctx.lastX = point.x;
        ctx.lastY = point.y;
        return true;
    },
    onPointerUp: function (ctx, param) {
        b.releaseMouseOwner();
        return true;
    },
    onPointerCancel: function (ctx, param) {
        return true;
    }
});
});
R('components/svg',function(require, module, exports){
"use strict";
var b = require("bobril");
var bs = require("bobrilstrap");
var css = require("../theme/css/css");
var cloud_1 = require("./cloud");
var cloudFilter_1 = require("./cloudFilter");
var vertex_1 = require("./vertex");
var colors = require("../common/colors");
var vertexInvisibleStyle = b.styleDef({ stroke: colors.defaultWhite, strokeWidth: '3px', opacity: 0.001 }, null, "vertexInvisibleStyle");
exports.svg = b.createComponent({
    render: function (ctx, me, oldMe) {
        me.tag = 'svg';
        me.children =
            [
                b.style(vertex_1.vertex({ cx: 0, cy: 0, r: 5 }, []), vertexInvisibleStyle),
                cloudFilter_1.cloudFilter(),
                !!ctx.data.cloud && cloud_1.cloud({}, []),
                ctx.data.children,
                !!ctx.data.journey && b.style(bs.elem({
                    tag: 'path', attrs: {
                        d: ctx.data.journey,
                        stroke: colors.orangeHighlight, fill: 'None', filter: 'url(#filterPath)'
                    }
                }, []), { strokeWidth: '3px' })
            ];
        me.attrs = { viewBox: '0 0 800 500' },
            b.style(me, ctx.data.fullScreen ? css.canvasWindow : css.canvas);
    },
    onPointerDown: function (ctx, param) {
        b.registerMouseOwner(ctx);
        var svg = ctx.me.element;
        var svgCircle = svg.firstChild;
        var point = svg.createSVGPoint();
        point.x = param.x;
        point.y = param.y;
        var ctm = svgCircle.getScreenCTM();
        point = point.matrixTransform(ctm.inverse());
        ctx.startX = point.x;
        ctx.startY = point.y;
        ctx.lastX = point.x;
        ctx.lastY = point.y;
        ctx.data.onJourneyChanged((ctx.data.journey || '').concat('M' + ' ' + point.x + ' ' + point.y + ' '));
        b.invalidate();
        return true;
    },
    onPointerMove: function (ctx, param) {
        if (!b.isMouseOwner(ctx)) {
            return false;
        }
        if (ctx.data.journey === '') {
            return;
        }
        var svg = ctx.me.element;
        var svgCircle = svg.firstChild;
        var point = svg.createSVGPoint();
        point.x = param.x;
        point.y = param.y;
        var ctm = svgCircle.getScreenCTM();
        point = point.matrixTransform(ctm.inverse());
        if (ctx.lastX === point.x || ctx.lastY === point.y) {
            return false;
        }
        ctx.data.onJourneyChanged(ctx.data.journey.concat('L' + ' ' + point.x + ' ' + point.y + ' '));
        ctx.lastX = point.x;
        ctx.lastY = point.y;
        b.invalidate();
        return true;
    },
    onPointerUp: function (ctx, param) {
        b.releaseMouseOwner();
        b.invalidate();
        return true;
    },
    onPointerCancel: function (ctx, param) {
        return true;
    }
});
});
R('main/uvod',function(require, module, exports){
"use strict";
var b = require("bobril");
var bs = require("bobrilstrap");
exports.uvod = b.createVirtualComponent({
    render: function (ctx, me) {
        me.children = [
            // {
            //     tag: 'svg',
            //     children: {
            //         tag: 'image',
            //         attrs: {
            //             'xlink:href': 'https://raw.githubusercontent.com/Bobris/Bobril/master/logo.png',
            //             x: 0,
            //             y: 0,
            //             width: 200,
            //             height: 200
            //         }
            //     }
            // }
            bs.h2({}, 'Úvod'),
            bs.paragraph({}, 'Tato webová stránka vznikla pro podporu výuky předmětů zabývajících se teorií grafů a grafovými algoritmy.')
        ];
    }
});
});
R('model/ipoint',function(require, module, exports){
"use strict";
});
R('model/iitem',function(require, module, exports){
"use strict";
});
R('model/ivertex',function(require, module, exports){
"use strict";
});
R('model/iedge',function(require, module, exports){
"use strict";
});
R('model/ihint',function(require, module, exports){
"use strict";
});
R('model/iaxis',function(require, module, exports){
"use strict";
});
R('model/itext',function(require, module, exports){
"use strict";
});
R('model/ihalfcircle',function(require, module, exports){
"use strict";
});
R('model/iimage',function(require, module, exports){
"use strict";
});
R('model/iscene',function(require, module, exports){
"use strict";
});
R('model/iaction',function(require, module, exports){
"use strict";
});
R('viewer/actions',function(require, module, exports){
"use strict";
var b = require("bobril");
var colors = require("../common/colors");
function addVertex(id, point, label, strokeColor, strokeWidth, color, move) {
    return {
        update: function (scene) { return scene.vertices.push({ id: id, point: point, label: label, strokeColor: strokeColor, strokeWidth: strokeWidth, color: color, move: move }); },
        rollback: function (scene) { return removeById(scene.vertices, id); }
    };
}
exports.addVertex = addVertex;
function checkProperties(source, dest) {
    Object.keys(source).forEach(function (key) {
        if (source[key] !== undefined)
            dest[key] = source[key];
    });
}
exports.checkProperties = checkProperties;
function editVertex(id, point, label, strokeColor, strokeWidth, color, move) {
    var originalVertex = null;
    return {
        update: function (scene) {
            originalVertex = getVertexById(scene, id);
            var index = scene.vertices.indexOf(originalVertex);
            scene.vertices[index] = b.assign({}, originalVertex);
            checkProperties({
                id: id,
                point: point,
                label: label,
                strokeColor: strokeColor,
                strokeWidth: strokeWidth,
                color: color,
                move: move
            }, scene.vertices[index]);
        },
        rollback: function (scene) {
            removeById(scene.vertices, id);
            scene.vertices.push(originalVertex);
        }
    };
}
exports.editVertex = editVertex;
function highlightVertex(id, strokeWidth, strokeColor) {
    if (strokeWidth === void 0) { strokeWidth = 7; }
    if (strokeColor === void 0) { strokeColor = colors.redHighlight; }
    var originalVertex = null;
    return {
        update: function (scene) {
            originalVertex = removeById(scene.vertices, id);
            scene.vertices.push({
                id: id, point: originalVertex.point, label: originalVertex.label,
                strokeColor: strokeColor, strokeWidth: strokeWidth, color: originalVertex.color, move: originalVertex.move
            });
        },
        rollback: function (scene) {
            removeById(scene.vertices, id);
            scene.vertices.push(originalVertex);
        }
    };
}
exports.highlightVertex = highlightVertex;
function unHighlightVertex(id) {
    var originalVertex = null;
    return {
        update: function (scene) {
            originalVertex = removeById(scene.vertices, id);
            scene.vertices.push({ id: id, point: originalVertex.point, label: originalVertex.label });
        },
        rollback: function (scene) {
            removeById(scene.vertices, id);
            scene.vertices.push(originalVertex);
        }
    };
}
exports.unHighlightVertex = unHighlightVertex;
function addEdge(id, startPoint, endPoint, interpolation, strokeWidth, color, dotted, priority) {
    return {
        update: function (scene) { return scene.edges.push({
            id: id,
            startPoint: getPointFromPointOrVertexId(scene, startPoint),
            endPoint: getPointFromPointOrVertexId(scene, endPoint),
            interpolation: interpolation,
            strokeWidth: strokeWidth,
            color: color,
            dotted: dotted,
            priority: priority
        }); },
        rollback: function (scene) { return removeById(scene.edges, id); }
    };
}
exports.addEdge = addEdge;
function addImage(id, point, width, height) {
    return {
        update: function (scene) { return scene.images.push({
            id: id,
            point: point,
            width: width,
            height: height
        }); },
        rollback: function (scene) { return removeById(scene.images, id); }
    };
}
exports.addImage = addImage;
function addUnspecificGraph(id, startPoint, endPoint, priority) {
    var addVertexAction = addVertex(id, startPoint, '');
    var addEdgeAction = addEdge(id + '-line', startPoint, endPoint, undefined, undefined, undefined, true);
    return {
        update: function (scene) {
            addVertexAction.update(scene);
            addEdgeAction.update(scene);
        },
        rollback: function (scene) {
            addEdgeAction.rollback(scene);
            addVertexAction.rollback(scene);
        }
    };
}
exports.addUnspecificGraph = addUnspecificGraph;
var HighlightType;
(function (HighlightType) {
    HighlightType[HighlightType["Start"] = 0] = "Start";
    HighlightType[HighlightType["End"] = 1] = "End";
    HighlightType[HighlightType["Both"] = 2] = "Both";
    HighlightType[HighlightType["Full"] = 3] = "Full";
})(HighlightType = exports.HighlightType || (exports.HighlightType = {}));
function highlightEdge(id, type, strokeWidth, color, dotted) {
    if (strokeWidth === void 0) { strokeWidth = 7; }
    if (color === void 0) { color = colors.redHighlight; }
    return {
        update: function (scene) {
            var edge = getEdgeById(scene, id);
            switch (type) {
                case HighlightType.Start:
                    scene.edges.push({
                        id: id + '-highlight-start',
                        startPoint: edge.startPoint,
                        endPoint: edge.endPoint,
                        interpolation: 1 / 2,
                        strokeWidth: strokeWidth,
                        color: color,
                        priority: 50
                    });
                    break;
                case HighlightType.End:
                    scene.edges.push({
                        id: id + '-highlight-end',
                        startPoint: edge.endPoint,
                        endPoint: edge.startPoint,
                        interpolation: 1 / 2,
                        strokeWidth: strokeWidth,
                        color: color,
                        priority: 50
                    });
                    break;
                case HighlightType.Both:
                    scene.edges.push({
                        id: id + '-highlight-start',
                        startPoint: edge.startPoint,
                        endPoint: edge.endPoint,
                        interpolation: 1 / 3,
                        strokeWidth: strokeWidth,
                        color: color,
                        priority: 50
                    });
                    scene.edges.push({
                        id: id + '-highlight-end',
                        startPoint: edge.endPoint,
                        endPoint: edge.startPoint,
                        interpolation: 1 / 3,
                        strokeWidth: strokeWidth,
                        color: color,
                        priority: 50
                    });
                    break;
                case HighlightType.Full:
                    scene.edges.push({
                        id: id + '-highlight-full',
                        startPoint: edge.startPoint,
                        endPoint: edge.endPoint,
                        strokeWidth: strokeWidth,
                        color: color,
                        dotted: dotted,
                        priority: 50
                    });
                    break;
            }
        },
        rollback: function (scene) {
            switch (type) {
                case HighlightType.Start:
                    removeById(scene.edges, id + '-highlight-start');
                    break;
                case HighlightType.End:
                    removeById(scene.edges, id + '-highlight-end');
                    break;
                case HighlightType.Both:
                    removeById(scene.edges, id + '-highlight-start');
                    removeById(scene.edges, id + '-highlight-end');
                    break;
                case HighlightType.Full:
                    removeById(scene.edges, id + '-highlight-full');
                    break;
            }
        }
    };
}
exports.highlightEdge = highlightEdge;
function unHighlightEdge(id, type) {
    var originalEdges = null;
    return {
        update: function (scene) {
            originalEdges = [];
            switch (type) {
                case HighlightType.Start:
                    originalEdges.push(removeById(scene.edges, id + '-highlight-start'));
                    break;
                case HighlightType.End:
                    originalEdges.push(removeById(scene.edges, id + '-highlight-end'));
                    break;
                case HighlightType.Both:
                    originalEdges.push(removeById(scene.edges, id + '-highlight-start'));
                    originalEdges.push(removeById(scene.edges, id + '-highlight-end'));
                    break;
                case HighlightType.Full:
                    originalEdges.push(removeById(scene.edges, id + '-highlight-full'));
                    break;
            }
        },
        rollback: function (scene) { return originalEdges.forEach(function (edge) { return scene.edges.push(edge); }); }
    };
}
exports.unHighlightEdge = unHighlightEdge;
function addHint(id, point, text, color, backgroundColor) {
    return {
        update: function (scene) { return scene.hints.push({ id: id, point: point, text: text, color: color, backgroundColor: backgroundColor }); },
        rollback: function (scene) { return removeById(scene.hints, id); }
    };
}
exports.addHint = addHint;
function addAxis(id) {
    return {
        update: function (scene) { return scene.axis = { id: id }; },
        rollback: function (scene) { return scene.axis = undefined; }
    };
}
exports.addAxis = addAxis;
function addHalfCircle(id, point, rotation, color, strokeColor, strokeWidth, priority) {
    return {
        update: function (scene) { return scene.halfCircles.push({
            id: id, point: point, rotation: rotation, color: color,
            strokeColor: strokeColor, strokeWidth: strokeWidth, priority: priority
        }); },
        rollback: function (scene) { return removeById(scene.halfCircles, id); }
    };
}
exports.addHalfCircle = addHalfCircle;
function addWhiteboard(id, point, text, color, backgroundColor) {
    return {
        update: function (scene) { return scene.whiteboards.push({ id: id, point: point, text: text, color: color, backgroundColor: backgroundColor }); },
        rollback: function (scene) { return removeById(scene.whiteboards, id); }
    };
}
exports.addWhiteboard = addWhiteboard;
function addText(id, point, text, color, backgroundColor, size) {
    return {
        update: function (scene) { return scene.texts.push({ id: id, point: point, text: text, color: color, backgroundColor: backgroundColor, size: size }); },
        rollback: function (scene) { return removeById(scene.texts, id); }
    };
}
exports.addText = addText;
function removeHint(id) {
    var originalHint = null;
    return {
        update: function (scene) { return originalHint = removeById(scene.hints, id); },
        rollback: function (scene) { return scene.hints.push(originalHint); }
    };
}
exports.removeHint = removeHint;
function removeEdge(id) {
    var originalEdge = null;
    return {
        update: function (scene) { return originalEdge = removeById(scene.edges, id); },
        rollback: function (scene) { return scene.edges.push(originalEdge); }
    };
}
exports.removeEdge = removeEdge;
function removeVertex(id) {
    var originalVertex = null;
    return {
        update: function (scene) { return originalVertex = removeById(scene.vertices, id); },
        rollback: function (scene) { return scene.vertices.push(originalVertex); }
    };
}
exports.removeVertex = removeVertex;
function removeUnspecificGraph(id) {
    var originalEdge = null;
    var originalVertex = null;
    return {
        update: function (scene) {
            originalVertex = removeById(scene.vertices, id);
            originalEdge = removeById(scene.edges, id + '-line');
        },
        rollback: function (scene) {
            scene.vertices.push(originalVertex);
            scene.edges.push(originalEdge);
        }
    };
}
exports.removeUnspecificGraph = removeUnspecificGraph;
function editHint(id, point, text, color, backgroundColor) {
    var originalHint = null;
    return {
        update: function (scene) {
            originalHint = getHintById(scene, id);
            var index = scene.hints.indexOf(originalHint);
            scene.hints[index] = b.assign({}, originalHint);
            checkProperties({
                id: id,
                point: point,
                text: text,
                color: color,
                backgroundColor: backgroundColor,
            }, scene.hints[index]);
        },
        rollback: function (scene) {
            removeById(scene.hints, id);
            scene.hints.push(originalHint);
        }
    };
}
exports.editHint = editHint;
function editHalfCircle(id, point, rotation, color, strokeColor, strokeWidth, priority) {
    var originalHalfCircle = null;
    return {
        update: function (scene) {
            originalHalfCircle = getItemById(scene.halfCircles, id);
            var index = scene.halfCircles.indexOf(originalHalfCircle);
            scene.halfCircles[index] = b.assign({}, originalHalfCircle);
            checkProperties({
                id: id,
                point: point,
                rotation: rotation,
                color: color,
                strokeColor: strokeColor,
                strokeWidth: strokeWidth,
                priority: priority
            }, scene.halfCircles[index]);
        },
        rollback: function (scene) {
            removeById(scene.halfCircles, id);
            scene.halfCircles.push(originalHalfCircle);
        }
    };
}
exports.editHalfCircle = editHalfCircle;
function removeItem(id, array) {
    var originalItem = null;
    return {
        update: function (scene) { return originalItem = removeById(array(scene), id); },
        rollback: function (scene) { return array(scene).push(originalItem); }
    };
}
exports.removeItem = removeItem;
function removeById(items, id) {
    var item = items.filter(function (i) { return i.id === id; })[0];
    var index = items.indexOf(item);
    if (index >= 0) {
        items.splice(index, 1);
    }
    else {
        throw id + " je po\u017Eadov\u00E1n p\u0159ed jeho p\u0159id\u00E1n\u00EDm do sc\u00E9ny";
    }
    return item;
}
exports.removeById = removeById;
function getPointFromPointOrVertexId(scene, pointOrId) {
    if (typeof pointOrId === 'string') {
        var vertex = scene.vertices.filter(function (v) { return v.id === pointOrId; })[0];
        if (!vertex)
            throw "Vertex " + pointOrId + " je po\u017Eadov\u00E1n p\u0159ed jeho p\u0159id\u00E1n\u00EDm do sc\u00E9ny";
        return vertex.point;
    }
    else {
        return pointOrId;
    }
}
exports.getPointFromPointOrVertexId = getPointFromPointOrVertexId;
function getEdgeById(scene, id) {
    var edge = scene.edges.filter(function (e) { return e.id === id; })[0];
    if (!edge)
        throw "Edge " + id + " je po\u017Eadov\u00E1n p\u0159ed jeho p\u0159id\u00E1n\u00EDm do sc\u00E9ny";
    return edge;
}
exports.getEdgeById = getEdgeById;
function getHintById(scene, id) {
    var hint = scene.hints.filter(function (e) { return e.id === id; })[0];
    if (!hint)
        throw "Hint " + id + " je po\u017Eadov\u00E1n p\u0159ed jeho p\u0159id\u00E1n\u00EDm do sc\u00E9ny";
    return hint;
}
exports.getHintById = getHintById;
function getVertexById(scene, id) {
    var vertex = scene.vertices.filter(function (e) { return e.id === id; })[0];
    if (!vertex)
        throw "Vertex " + id + " je po\u017Eadov\u00E1n p\u0159ed jeho p\u0159id\u00E1n\u00EDm do sc\u00E9ny";
    return vertex;
}
exports.getVertexById = getVertexById;
function getItemById(array, id) {
    var item = array.filter(function (e) { return e.id === id; })[0];
    if (!item)
        throw "Item " + id + " je po\u017Eadov\u00E1n p\u0159ed jeho p\u0159id\u00E1n\u00EDm do sc\u00E9ny";
    return item;
}
exports.getItemById = getItemById;
});
R('core/computer',function(require, module, exports){
"use strict";
function linearInterpolation(a, b, t) {
    return (1 - t) * a + t * b;
}
exports.linearInterpolation = linearInterpolation;
});
R('components/svgwrap',function(require, module, exports){
"use strict";
var b = require("bobril");
var colors = require("../common/colors");
var wrapDivStyle = b.styleDef({
    position: 'relative', width: 800, height: 500, marginTop: 50,
    marginBottom: 0, marginLeft: 'auto', marginRight: 'auto'
}, null, "wrapDivStyle");
var wrapDivStyleFull = b.styleDef({
    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, height: '100%', width: '100%', backgroundColor: colors.defaultWhite,
    fontSize: 24
}, null, "wrapDivStyleFull");
var wrap = b.styleDef({}, null, "wrap");
exports.svgWrap = b.createComponent({
    render: function (ctx, me, oldMe) {
        me.children = ctx.data.children;
        b.style(me, ctx.data.fullScreen ? wrapDivStyleFull : wrapDivStyle);
        b.style(me, wrap);
    }
});
});
R('components/edge',function(require, module, exports){
"use strict";
var b = require("bobril");
var colors = require("../common/colors");
var edgeStyle = b.styleDef({ stroke: colors.defaultBlack, strokeWidth: '3px' }, null, "edgeStyle");
var dottedEdgeStyle = b.styleDef({ stroke: colors.defaultBlack, strokeWidth: '5px',
    strokeLinecap: 'round', strokeDasharray: '1, 30' }, null, "dottedEdgeStyle");
exports.edge = b.createComponent({
    id: 'edge',
    render: function (ctx, me) {
        me.tag = 'line';
        me.children = ctx.data.children;
        me.attrs = { x1: ctx.data.x1, y1: ctx.data.y1, x2: ctx.data.x2, y2: ctx.data.y2 };
        b.style(me, ctx.data.dotted ? dottedEdgeStyle : edgeStyle, !!ctx.data.color && { stroke: ctx.data.color }, !!ctx.data.strokeWidth && { strokeWidth: ctx.data.strokeWidth });
    }
});
});
R('components/label',function(require, module, exports){
"use strict";
var b = require("bobril");
exports.label = b.createComponent({
    id: 'label',
    render: function (ctx, me) {
        me.tag = 'text';
        me.children = ctx.data.text;
        me.attrs = (_a = { x: ctx.data.x, y: ctx.data.y }, _a['text-anchor'] = 'middle', _a.dy = 4, _a);
        var _a;
    }
});
});
R('components/vertexwithlabel',function(require, module, exports){
"use strict";
var b = require("bobril");
var vertex_1 = require("./vertex");
var label_1 = require("./label");
var colors = require("../common/colors");
var vertexInvisibleStyle = b.styleDef({ stroke: colors.defaultBlack, strokeWidth: '3px', opacity: 0.001 }, null, "vertexInvisibleStyle");
exports.vertexWithLabel = b.createComponent({
    id: 'vertex-with-label',
    render: function (ctx, me) {
        me.tag = 'g';
        me.children = [
            vertex_1.vertex(ctx.data),
            label_1.label({
                text: ctx.data.label,
                x: ctx.data.cx,
                y: ctx.data.cy
            }),
            b.style(vertex_1.vertex(ctx.data), vertexInvisibleStyle)
        ];
    }
});
});
R('components/proofcontrols',function(require, module, exports){
"use strict";
var b = require("bobril");
var controlsStyle = b.styleDef({ position: 'absolute' }, null, "controlsStyle");
exports.proofControls = b.createComponent({
    id: 'proof-controls',
    render: function (ctx, me) {
        me.tag = 'div';
        me.children = ctx.data.children;
        b.style(me, controlsStyle, (ctx.data.right !== undefined) && { right: ctx.data.right }, (ctx.data.left !== undefined) && { left: ctx.data.left }, { bottom: ctx.data.bottom });
    }
});
});
R('components/buttonleft',function(require, module, exports){
"use strict";
var b = require("bobril");
var bs = require("bobrilstrap");
exports.buttonLeft = b.createVirtualComponent({
    id: 'button-left',
    render: function (ctx, me) {
        me.children = bs.button({ option: bs.ButtonOption.Primary, onClick: ctx.data.onClick }, bs.glyphicon({ icon: bs.GlyphIcon.ChevronLeft }));
    }
});
});
R('components/buttonright',function(require, module, exports){
"use strict";
var b = require("bobril");
var bs = require("bobrilstrap");
exports.buttonRight = b.createVirtualComponent({
    id: 'button-right',
    render: function (ctx, me) {
        me.children = bs.button({ option: bs.ButtonOption.Primary, onClick: ctx.data.onClick }, bs.glyphicon({ icon: bs.GlyphIcon.ChevronRight }));
    }
});
});
R('components/buttonstart',function(require, module, exports){
"use strict";
var b = require("bobril");
var bs = require("bobrilstrap");
exports.buttonStart = b.createVirtualComponent({
    id: 'button-start',
    render: function (ctx, me) {
        me.children = bs.button({ option: bs.ButtonOption.Primary, onClick: ctx.data.onClick }, bs.glyphicon({ icon: bs.GlyphIcon.Home }));
    }
});
});
R('components/buttonerase',function(require, module, exports){
"use strict";
var b = require("bobril");
var bs = require("bobrilstrap");
exports.buttonErase = b.createVirtualComponent({
    id: 'button-erase',
    render: function (ctx, me) {
        me.children = bs.button({ option: bs.ButtonOption.Primary, onClick: ctx.data.onClick }, bs.glyphicon({ icon: bs.GlyphIcon.Erase }));
    }
});
});
R('components/text',function(require, module, exports){
"use strict";
var b = require("bobril");
var colors = require("../common/colors");
var textStyle = b.styleDef({
    color: colors.defaultBlack,
    //  position: 'absolute',
    //  top: 200,
    //  left: 0,
    fontSize: '27px'
}, null, "textStyle");
exports.text = b.createComponent({
    id: 'text',
    render: function (ctx, me) {
        me.tag = 'text';
        me.children = ctx.data.children;
        me.attrs = { x: ctx.data.x, y: ctx.data.y },
            b.style(me, textStyle, !!ctx.data.color && { color: ctx.data.color }, !!ctx.data.backgroundColor && { backgroundColor: ctx.data.backgroundColor }, !!ctx.data.size && { fontSize: ctx.data.size });
    },
});
});
R('components/buttonfullscreen',function(require, module, exports){
"use strict";
var b = require("bobril");
var bs = require("bobrilstrap");
exports.buttonFullScreen = b.createVirtualComponent({
    id: 'button-Fullscreen',
    render: function (ctx, me) {
        me.children = bs.button({ option: bs.ButtonOption.Primary, onClick: ctx.data.onClick }, bs.glyphicon({ icon: bs.GlyphIcon.Fullscreen }));
    }
});
});
R('components/buttonnumber',function(require, module, exports){
"use strict";
var b = require("bobril");
var bs = require("bobrilstrap");
exports.buttonNumber = b.createVirtualComponent({
    id: 'button-number',
    render: function (ctx, me) {
        me.children = bs.button({ option: bs.ButtonOption.Primary, onClick: ctx.data.onClick }, 
        // ctx.data.graphNumber === 0 ? 
        //     bs.strong({}, '\xa0 Obecně \xa0') : 
        //     bs.strong({}, '\xa0 Příklad ' + ctx.data.graphNumber.toString() + '\xa0')
        // );
        bs.strong({}, '\xa0' + (ctx.data.graphNumber + 1).toString() + '\xa0'));
    }
});
});
R('components/hint',function(require, module, exports){
"use strict";
var b = require("bobril");
var css = require("../theme/css/css");
var colors = require("../common/colors");
var hintStyle = b.styleDef({
    color: colors.defaultWhite,
    backgroundColor: colors.redHighlight,
    position: 'absolute',
    top: 0,
    left: 0,
    strokeOpacity: 0.4
}, null, "hintStyle");
exports.hint = b.createComponent({
    id: 'hint',
    init: function (ctx, me) {
        ctx.opac = 0.005;
    },
    render: function (ctx, me) {
        me.children = ctx.data.children;
        b.style(me, hintStyle, css.well, !!ctx.data.top && { top: ctx.data.top }, !!ctx.data.left && { left: ctx.data.left }, !!ctx.data.color && { color: ctx.data.color }, !!ctx.data.backgroundColor && { backgroundColor: ctx.data.backgroundColor }, { opacity: ctx.opac });
        if (ctx.opac < 1) {
            var inter_1 = setInterval(function () {
                ctx.opac += 0.005;
                b.invalidate();
                if (Math.floor(ctx.opac) === 1) {
                    clearInterval(inter_1);
                }
            }, 100);
        }
    },
    onPointerDown: function (ctx, param) {
        b.registerMouseOwner(ctx);
        ctx.lastX = param.x;
        ctx.lastY = param.y;
        return true;
    },
    onPointerMove: function (ctx, param) {
        if (!b.isMouseOwner(ctx)) {
            return false;
        }
        if (ctx.lastX === param.x && ctx.lastY === param.y) {
            return false;
        }
        if (ctx.data.onMove) {
            ctx.data.onMove(param.x - ctx.lastX, param.y - ctx.lastY);
        }
        ctx.lastX = param.x;
        ctx.lastY = param.y;
        return true;
    },
    onPointerUp: function (ctx, param) {
        b.releaseMouseOwner();
        return true;
    },
    onPointerCancel: function (ctx, param) {
        return true;
    }
});
});
R('components/whiteboard',function(require, module, exports){
"use strict";
var b = require("bobril");
var colors = require("../common/colors");
var whiteboardStyle = b.styleDef({
    color: colors.defaultBlack,
    position: 'absolute',
    top: 200,
    left: 0,
    fontSize: '27px'
}, null, "whiteboardStyle");
exports.whiteboard = b.createComponent({
    id: 'whiteboard',
    render: function (ctx, me) {
        me.children = ctx.data.children;
        b.style(me, whiteboardStyle, !!ctx.data.top && { top: ctx.data.top }, !!ctx.data.left && { left: ctx.data.left }, !!ctx.data.color && { color: ctx.data.color }, !!ctx.data.backgroundColor && { backgroundColor: ctx.data.backgroundColor });
    },
});
});
R('components/axis',function(require, module, exports){
"use strict";
var b = require("bobril");
var edge_1 = require("./edge");
exports.axis = b.createComponent({
    id: 'axis',
    render: function (ctx, me) {
        me.tag = 'g';
        me.children = [
            edge_1.edge({ x1: 70, x2: 730, y1: 250, y2: 250 }, []),
            edge_1.edge({ x1: 400, x2: 400, y1: 225, y2: 275 }, [])
        ];
    }
});
});
R('components/image',function(require, module, exports){
"use strict";
var b = require("bobril");
var path = b.asset("images/chocolate.png");
exports.image = b.createVirtualComponent({
    id: 'image',
    render: function (ctx, me) {
        //me.tag = 'image';
        // me.children = ctx.data.children;
        //me.attrs = { 'xlink:href': path, x: ctx.data.x, y: ctx.data.y, width: ctx.data.width, height: ctx.data.height };
        // b.style(
        //     me
        // );
    },
    postInitDom: function (ctx) {
        var element = ctx.me.parent.element;
        var imageElement = document.createElementNS('http://www.w3.org/2000/svg', 'image');
        imageElement.setAttributeNS('http://www.w3.org/1999/xlink', 'href', path);
        imageElement.setAttributeNS(null, 'x', ctx.data.x.toString());
        imageElement.setAttributeNS(null, 'y', ctx.data.y.toString());
        imageElement.setAttributeNS(null, 'width', ctx.data.width.toString());
        imageElement.setAttributeNS(null, 'height', ctx.data.height.toString());
        element.appendChild(imageElement);
        ctx.removeElement = function () {
            element.removeChild(imageElement);
        };
    },
    destroy: function (ctx) {
        ctx.removeElement();
    }
});
});
R('components/halfcircle',function(require, module, exports){
"use strict";
var b = require("bobril");
var colors = require("../common/colors");
var halfCircleStyle = b.styleDef({ stroke: colors.defaultBlack, strokeWidth: '3px', fill: 'none' }, null, "halfCircleStyle");
exports.halfCircle = b.createComponent({
    id: 'halfCircle',
    render: function (ctx, me) {
        me.tag = 'path';
        me.children = ctx.data.children;
        me.attrs = {
            d: 'm' + ctx.data.x + ', ' + ctx.data.y +
                'c -326.166656,9.666672 -303.333344,89.333344 -303.5,129.000015c-0.166656,39.666672 -18.333344,118.333344  303,109',
            transform: ctx.data.rotation === true ? 'rotate(-180, 365, 250)' : undefined
        };
        b.style(me, halfCircleStyle, !!ctx.data.color && { fill: ctx.data.color }, !!ctx.data.strokeColor && { stroke: ctx.data.strokeColor }, !!ctx.data.strokeWidth && { strokeWidth: ctx.data.strokeWidth });
    }
});
});
R('model/istep',function(require, module, exports){
"use strict";
});
R('model/iscenario',function(require, module, exports){
"use strict";
});
R('model/iexamples',function(require, module, exports){
"use strict";
});
R('viewer/viewer',function(require, module, exports){
"use strict";
var b = require("bobril");
var bs = require("bobrilstrap");
var computer_1 = require("../core/computer");
var svg_1 = require("../components/svg");
var svgWrap_1 = require("../components/svgWrap");
var edge_1 = require("../components/edge");
var vertexWithLabel_1 = require("../components/vertexWithLabel");
var proofControls_1 = require("../components/proofControls");
var buttonLeft_1 = require("../components/buttonLeft");
var buttonRight_1 = require("../components/buttonRight");
var buttonStart_1 = require("../components/buttonStart");
var buttonErase_1 = require("../components/buttonErase");
var text_1 = require("../components/text");
var buttonFullScreen_1 = require("../components/buttonFullScreen");
var buttonNumber_1 = require("../components/buttonNumber");
var hint_1 = require("../components/hint");
var whiteboard_1 = require("../components/whiteboard");
var axis_1 = require("../components/axis");
var image_1 = require("../components/image");
var halfCircle_1 = require("../components/halfCircle");
exports.viewer = b.createVirtualComponent({
    id: 'viewer',
    init: function (ctx) {
        ctx.fullScreen = false;
        createScenes(ctx);
        changeExample(ctx, 0);
        performNextStep(ctx);
    },
    render: function (ctx, me) {
        me.children = [
            svgWrap_1.svgWrap({ fullScreen: ctx.fullScreen }, [
                svg_1.svg({
                    fullScreen: ctx.fullScreen,
                    cloud: ctx.data.cloud,
                    onJourneyChanged: function (journey) {
                        ctx.journey = journey;
                        b.invalidate(ctx);
                    },
                    journey: ctx.journey
                }, [
                    ctx.scenes[ctx.exampleIndex].halfCircles
                        .sort(compare)
                        .map(function (halfCircleData) { return b.withKey(halfCircle_1.halfCircle({
                        x: halfCircleData.point.x,
                        y: halfCircleData.point.y,
                        rotation: halfCircleData.rotation,
                        color: halfCircleData.color,
                        strokeColor: halfCircleData.strokeColor,
                        strokeWidth: halfCircleData.strokeWidth
                    }), 'halfCircle' + halfCircleData.id); }),
                    ctx.scenes[ctx.exampleIndex].edges
                        .sort(compare)
                        .map(function (edgeData) { return b.withKey(edge_1.edge({
                        x1: edgeData.startPoint.x,
                        y1: edgeData.startPoint.y,
                        x2: interpolate(edgeData.startPoint.x, edgeData.endPoint.x, edgeData.interpolation),
                        y2: interpolate(edgeData.startPoint.y, edgeData.endPoint.y, edgeData.interpolation),
                        strokeWidth: edgeData.strokeWidth,
                        color: edgeData.color,
                        dotted: edgeData.dotted
                    }), 'edge' + edgeData.id); }),
                    ctx.scenes[ctx.exampleIndex].vertices
                        .map(function (vertexData) { return b.withKey(vertexWithLabel_1.vertexWithLabel({
                        cx: vertexData.point.x,
                        cy: vertexData.point.y,
                        r: 17,
                        onMove: function (dx, dy) {
                            if (vertexData.move === undefined) {
                                vertexData.point.x += dx;
                                vertexData.point.y += dy;
                                b.invalidate(ctx);
                            }
                        },
                        strokeColor: vertexData.strokeColor,
                        strokeWidth: vertexData.strokeWidth,
                        color: vertexData.color,
                        label: vertexData.label
                    }), 'vertex' + vertexData.id); }),
                    ctx.scenes[ctx.exampleIndex].images
                        .sort(compare)
                        .map(function (imageData) { return b.withKey(image_1.image({
                        x: imageData.point.x,
                        y: imageData.point.y,
                        width: imageData.width,
                        height: imageData.height,
                    }), 'image' + imageData.id); }),
                    ctx.scenes[ctx.exampleIndex].texts
                        .sort(compare)
                        .map(function (textData) { return b.withKey(text_1.text({
                        x: textData.point.x,
                        y: textData.point.y,
                        backgroundColor: textData.backgroundColor,
                        color: textData.color,
                        size: textData.size,
                        children: textData.text
                    }), 'text' + textData.id); }),
                    ctx.scenes[ctx.exampleIndex].axis === undefined ? undefined : axis_1.axis()
                ]),
                ctx.scenes[ctx.exampleIndex].hints
                    .sort(compare)
                    .map(function (hintData, hintIndex) { return b.withKey(hint_1.hint({
                    top: hintData.point.y,
                    left: hintData.point.x,
                    onMove: function (dx, dy) {
                        hintData.point.x += dx;
                        hintData.point.y += dy;
                        b.invalidate(ctx);
                    },
                    color: hintData.color,
                    backgroundColor: hintData.backgroundColor,
                    children: hintData.text
                }), 'hint' + hintData.id); }),
                ctx.scenes[ctx.exampleIndex].whiteboards
                    .sort(compare)
                    .map(function (whiteboardData, whiteboardIndex) { return b.withKey(whiteboard_1.whiteboard({
                    top: whiteboardData.point.y,
                    left: whiteboardData.point.x,
                    color: whiteboardData.color,
                    backgroundColor: whiteboardData.backgroundColor,
                    children: whiteboardData.text
                }), 'whiteboard' + whiteboardData.id); }),
                proofControls_1.proofControls({ bottom: 0, left: 0 }, [
                    bs.buttonGroup({}, ctx.examples.map(function (example, index) { return buttonNumber_1.buttonNumber({
                        graphNumber: index,
                        onClick: function () { return changeExample(ctx, index); }
                    }); }))
                ]),
                proofControls_1.proofControls({ bottom: 0, right: 0 }, [
                    bs.buttonGroup({}, [
                        buttonLeft_1.buttonLeft({ onClick: function () { return rollbackStep(ctx); } }),
                        buttonRight_1.buttonRight({ onClick: function () { return performNextStep(ctx); } }),
                        buttonStart_1.buttonStart({ onClick: function () { return resetScene(ctx); } }),
                        buttonErase_1.buttonErase({ onClick: function () { return eraseScene(ctx); } }),
                        buttonFullScreen_1.buttonFullScreen({ onClick: function () { return toggleFullScreen(ctx); } })
                    ])
                ])
            ]),
        ];
    }
});
function toggleFullScreen(ctx) {
    ctx.fullScreen = !ctx.fullScreen;
    b.invalidate();
}
function changeExample(ctx, index) {
    ctx.exampleIndex = index;
    b.invalidate(ctx);
}
function createScenes(ctx) {
    ctx.examples = ctx.data.examples();
    ctx.stepIndex = -1;
    ctx.scenes = [];
    ctx.examples.forEach(function (example) { return ctx.scenes.push({
        edges: [], hints: [], vertices: [],
        whiteboards: [], axis: undefined, halfCircles: [], images: [], texts: []
    }); });
}
function resetScene(ctx, invalidate) {
    if (invalidate === void 0) { invalidate = false; }
    while (ctx.stepIndex !== 0) {
        rollbackStep(ctx);
    }
    ctx.examples[ctx.exampleIndex] = ctx.data.examples()[ctx.exampleIndex];
    ctx.scenes[ctx.exampleIndex] = {
        edges: [], hints: [], vertices: [],
        whiteboards: [], axis: undefined, halfCircles: [], images: [], texts: []
    };
    performActions(ctx.examples[ctx.exampleIndex], ctx.stepIndex, ctx.scenes[ctx.exampleIndex]);
    b.invalidate(ctx);
}
function eraseScene(ctx, invalidate) {
    if (invalidate === void 0) { invalidate = false; }
    ctx.journey = '';
    b.invalidate(ctx);
}
function performNextStep(ctx) {
    if (ctx.stepIndex >= ctx.examples[ctx.exampleIndex].steps.length - 1)
        return;
    ctx.stepIndex++;
    ctx.scenes.forEach(function (scene, index) { return performActions(ctx.examples[index], ctx.stepIndex, scene); });
    b.invalidate(ctx);
}
function performActions(scenario, stepIndex, scene) {
    scenario.steps[stepIndex].actions.forEach(function (action) { return action.update(scene); });
}
function rollbackActions(scenario, stepIndex, scene) {
    scenario.steps[stepIndex].actions.slice().reverse().forEach(function (action) { return action.rollback(scene); });
}
function rollbackStep(ctx) {
    if (ctx.stepIndex <= 0)
        return;
    ctx.scenes.forEach(function (scene, index) { return rollbackActions(ctx.examples[index], ctx.stepIndex, scene); });
    ctx.stepIndex--;
    b.invalidate(ctx);
}
function interpolate(a, b, ratio) {
    if (ratio) {
        return computer_1.linearInterpolation(a, b, ratio);
    }
    else {
        return b;
    }
}
function compare(a, b) {
    var priorityA = a.priority || 0;
    var priorityB = b.priority || 0;
    if (priorityA > priorityB) {
        return 1;
    }
    else if (priorityA < priorityB) {
        return -1;
    }
    return 0;
}
});
R('zakladnipojmy/veta11/veta11',function(require, module, exports){
"use strict";
var b = require("bobril");
var bs = require("bobrilstrap");
var a = require("../../viewer/actions");
var viewer_1 = require("../../viewer/viewer");
exports.veta11 = b.createVirtualComponent({
    id: 'veta11',
    render: function (ctx, me) {
        me.children = [
            bs.h2({}, 'Věta 1.1 (Princip sudosti)'),
            bs.panel({
                body: bs.h4({}, ['Pro každý graf ', bs.em({}, 'G=(V, E)'), ' platí vztah ∑v∈V degG(v) = 2 · |E|.']),
                context: bs.PanelContext.Primary
            }),
            bs.paragraph({}, 'Máme daný graf G, který má množinu vrcholů V a množinu hran E. ' +
                'Součet stupňů všech vrcholů tohoto grafu se rovná dvojnásobnému počtu hran grafu. ' +
                'Každá hrana obsahuje dva vrcholy (jeden na každém konci), takže je v součtu stupňů ' +
                'započítána dvakrát. Když sečteme všechny stupně vrcholů, dostaneme dvojnásobek počtu hran.'),
            viewer_1.viewer({ examples: examples, cloud: true }),
        ];
    }
});
var examples = function () { return [
    {
        name: 'veta11-obecne',
        steps: [
            {
                actions: [
                    a.addVertex('x', { x: 250, y: 250 }, 'x'),
                    a.addVertex('y', { x: 500, y: 170 }, 'y'),
                    a.addVertex('z', { x: 600, y: 350 }, 'z'),
                    a.addVertex('a', { x: 150, y: 160 }, 'a'),
                    a.addVertex('b', { x: 420, y: 300 }, 'b'),
                    a.addVertex('c', { x: 640, y: 170 }, 'c'),
                    a.addEdge('y-x', 'y', 'x'),
                    a.addEdge('y-z', 'y', 'z'),
                    a.addEdge('a-x', 'a', 'x'),
                    a.addEdge('b-x', 'b', 'x'),
                    a.addEdge('c-y', 'c', 'y')
                ]
            },
            {
                actions: [
                    a.addHint('stupen-vrcholu-1', { x: 280, y: 50 }, [
                        'Stupeň vrcholu - počet hran,',
                        bs.e({ tag: 'br' }),
                        ' které z něj vychází. Vrchol y',
                        bs.e({ tag: 'br' }), ' je stupně 2.'
                    ]),
                    a.highlightVertex('y'),
                    a.highlightEdge('y-x', a.HighlightType.Start),
                    a.highlightEdge('y-z', a.HighlightType.Start)
                ]
            },
            {
                actions: [
                    a.removeHint('stupen-vrcholu-1'),
                    a.addHint('soucet-stupnu-vrcholu-1', { x: 230, y: 60 }, [
                        'Každá hrana má dva vrcholy, ',
                        bs.e({ tag: 'br' }),
                        'do součtu stupňů je tedy započítána 2x.'
                    ]),
                    a.unHighlightVertex('y'),
                    a.unHighlightEdge('y-x', a.HighlightType.Start),
                    a.unHighlightEdge('y-z', a.HighlightType.Start),
                    a.highlightEdge('y-x', a.HighlightType.Both)
                ]
            },
            {
                actions: [
                    a.removeHint('soucet-stupnu-vrcholu-1'),
                    a.addHint('soucet-hran-1', { x: 270, y: 40 }, 'Sečteme všechny hrany grafu.'),
                    a.unHighlightEdge('y-x', a.HighlightType.Both),
                    a.highlightEdge('y-x', a.HighlightType.Full),
                    a.highlightEdge('y-z', a.HighlightType.Full),
                    a.highlightEdge('a-x', a.HighlightType.Full),
                    a.highlightEdge('b-x', a.HighlightType.Full),
                    a.highlightEdge('c-y', a.HighlightType.Full)
                ]
            },
            {
                actions: [
                    a.removeHint('soucet-hran-1'),
                    a.addHint('soucet-stupnu-vsech-vrcholu-1', { x: 250, y: 40 }, [
                        'Počet hran vynásobíme dvěma -',
                        bs.e({ tag: 'br' }),
                        ' vyjde součet stupňů všech vrcholů.'
                    ]),
                    a.unHighlightEdge('y-x', a.HighlightType.Full),
                    a.unHighlightEdge('y-z', a.HighlightType.Full),
                    a.unHighlightEdge('a-x', a.HighlightType.Full),
                    a.unHighlightEdge('b-x', a.HighlightType.Full),
                    a.unHighlightEdge('c-y', a.HighlightType.Full),
                    a.highlightEdge('y-x', a.HighlightType.Both),
                    a.highlightEdge('y-z', a.HighlightType.Both),
                    a.highlightEdge('a-x', a.HighlightType.Both),
                    a.highlightEdge('b-x', a.HighlightType.Both),
                    a.highlightEdge('c-y', a.HighlightType.Both)
                ]
            }
        ]
    },
    {
        name: 'veta11-tri-body',
        steps: [
            {
                actions: [
                    a.addVertex('a', { x: 400, y: 120 }, 'a'),
                    a.addVertex('b', { x: 550, y: 380 }, 'b'),
                    a.addVertex('c', { x: 250, y: 380 }, 'c'),
                    a.addEdge('a-b', 'a', 'b'),
                    a.addEdge('b-c', 'b', 'c'),
                    a.addEdge('c-a', 'c', 'a')
                ]
            },
            {
                actions: [
                    a.addHint('stupen-vrcholu-1', { x: 70, y: 170 }, [
                        'Stupeň vrcholu - počet hran,',
                        bs.e({ tag: 'br' }),
                        ' které z něj vychází. Vrchol c',
                        bs.e({ tag: 'br' }), ' je stupně 2.'
                    ]),
                    a.highlightVertex('c'),
                    a.highlightEdge('c-a', a.HighlightType.Start),
                    a.highlightEdge('b-c', a.HighlightType.End)
                ]
            },
            {
                actions: [
                    a.removeHint('stupen-vrcholu-1'),
                    a.addHint('soucet-stupnu-vrcholu-1', { x: 30, y: 170 }, [
                        'Každá hrana má dva vrcholy, ',
                        bs.e({ tag: 'br' }),
                        'do součtu stupňů je tedy započítána 2x.'
                    ]),
                    a.unHighlightVertex('c'),
                    a.unHighlightEdge('c-a', a.HighlightType.Start),
                    a.unHighlightEdge('b-c', a.HighlightType.End),
                    a.highlightEdge('c-a', a.HighlightType.Both)
                ]
            },
            {
                actions: [
                    a.removeHint('soucet-stupnu-vrcholu-1'),
                    a.addHint('soucet-hran-1', { x: 200, y: 20 }, 'Sečteme hrany - graf má tři hrany.'),
                    a.unHighlightEdge('c-a', a.HighlightType.Both),
                    a.highlightEdge('c-a', a.HighlightType.Full),
                    a.highlightEdge('b-c', a.HighlightType.Full),
                    a.highlightEdge('a-b', a.HighlightType.Full)
                ]
            },
            {
                actions: [
                    a.removeHint('soucet-hran-1'),
                    a.addHint('soucet-stupnu-vsech-vrcholu-1', { x: 220, y: 10 }, [
                        'Tři vynásobíme dvěma (hrana má dva vrcholy) -',
                        bs.e({ tag: 'br' }),
                        ' vyjde šest, což je součet stupňů všech vrcholů.'
                    ]),
                    a.unHighlightEdge('c-a', a.HighlightType.Full),
                    a.unHighlightEdge('b-c', a.HighlightType.Full),
                    a.unHighlightEdge('a-b', a.HighlightType.Full),
                    a.highlightEdge('c-a', a.HighlightType.Both),
                    a.highlightEdge('b-c', a.HighlightType.Both),
                    a.highlightEdge('a-b', a.HighlightType.Both)
                ]
            }
        ]
    },
    {
        name: 'veta11-ctyri-body',
        steps: [
            {
                actions: [
                    a.addVertex('a', { x: 250, y: 100 }, 'a'),
                    a.addVertex('b', { x: 550, y: 100 }, 'b'),
                    a.addVertex('c', { x: 550, y: 400 }, 'c'),
                    a.addVertex('d', { x: 250, y: 400 }, 'c'),
                    a.addEdge('a-b', 'a', 'b'),
                    a.addEdge('b-c', 'b', 'c'),
                    a.addEdge('c-d', 'c', 'd'),
                    a.addEdge('d-a', 'd', 'a'),
                    a.addEdge('a-c', 'a', 'c')
                ]
            },
            {
                actions: [
                    a.addHint('stupen-vrcholu-2', { x: 20, y: 20 }, [
                        'Stupeň vrcholu - počet hran,',
                        bs.e({ tag: 'br' }),
                        ' které z něj vychází. Vrchol a',
                        bs.e({ tag: 'br' }), ' je stupně 3.'
                    ]),
                    a.highlightVertex('a'),
                    a.highlightEdge('a-b', a.HighlightType.Start),
                    a.highlightEdge('a-c', a.HighlightType.Start),
                    a.highlightEdge('d-a', a.HighlightType.End)
                ]
            },
            {
                actions: [
                    a.removeHint('stupen-vrcholu-2'),
                    a.addHint('soucet-stupnu-vrcholu-2', { x: 30, y: 170 }, [
                        'Každá hrana má dva vrcholy,',
                        bs.e({ tag: 'br' }),
                        ' do součtu stupňů je tedy',
                        bs.e({ tag: 'br' }),
                        'započítána 2x.'
                    ]),
                    a.unHighlightVertex('a'),
                    a.unHighlightEdge('a-b', a.HighlightType.Start),
                    a.unHighlightEdge('a-c', a.HighlightType.Start),
                    a.unHighlightEdge('d-a', a.HighlightType.End),
                    a.highlightEdge('d-a', a.HighlightType.Both)
                ]
            },
            {
                actions: [
                    a.removeHint('soucet-stupnu-vrcholu-2'),
                    a.addHint('soucet-hran-2', { x: 200, y: 20 }, 'Sečteme hrany - graf má pět hran.'),
                    a.unHighlightEdge('d-a', a.HighlightType.Both),
                    a.highlightEdge('a-b', a.HighlightType.Full),
                    a.highlightEdge('b-c', a.HighlightType.Full),
                    a.highlightEdge('c-d', a.HighlightType.Full),
                    a.highlightEdge('d-a', a.HighlightType.Full),
                    a.highlightEdge('a-c', a.HighlightType.Full)
                ]
            },
            {
                actions: [
                    a.removeHint('soucet-hran-2'),
                    a.addHint('soucet-stupnu-vsech-vrcholu-1', { x: 220, y: 10 }, [
                        'Pět vynásobíme dvěma (hrana má dva vrcholy) -',
                        bs.e({ tag: 'br' }),
                        ' vyjde deset, což je součet stupňů všech vrcholů.'
                    ]),
                    a.unHighlightEdge('a-b', a.HighlightType.Full),
                    a.unHighlightEdge('b-c', a.HighlightType.Full),
                    a.unHighlightEdge('c-d', a.HighlightType.Full),
                    a.unHighlightEdge('d-a', a.HighlightType.Full),
                    a.unHighlightEdge('a-c', a.HighlightType.Full),
                    a.highlightEdge('a-b', a.HighlightType.Both),
                    a.highlightEdge('b-c', a.HighlightType.Both),
                    a.highlightEdge('c-d', a.HighlightType.Both),
                    a.highlightEdge('d-a', a.HighlightType.Both),
                    a.highlightEdge('a-c', a.HighlightType.Both)
                ]
            }
        ]
    }
]; };
});
R('zakladnipojmy/tvrzeni11/tvrzeni11',function(require, module, exports){
"use strict";
var b = require("bobril");
var bs = require("bobrilstrap");
var a = require("../../viewer/actions");
var viewer_1 = require("../../viewer/viewer");
var colors = require("../../common/colors");
exports.tvrzeni11 = b.createVirtualComponent({
    render: function (ctx, me) {
        me.children = [
            bs.h2({}, 'Tvrzení 1.1'),
            bs.panel({
                body: bs.h4({}, ['Pro každý graf ', bs.em({}, 'G=(V, E)'), ' platí: ', bs.e({ tag: 'br' }),
                    'V grafu ', bs.em({}, 'G'), ' existuje cesta z vrcholu ', bs.em({}, 'v'),
                    ' do vrcholu ', bs.em({}, 'w'), ' právě tehdy, když v grafu ', bs.em({}, 'G'), ' existuje sled ' +
                        'z vrcholu ', bs.em({}, 'v'), ' do vrcholu ', bs.em({}, 'w'), '.']),
                context: bs.PanelContext.Primary
            }),
            bs.paragraph({}, ['Dokážeme postupně obě implikace: ', bs.e({ tag: 'br' }),
                '1. Jestliže existuje cesta, pak existuje sled.', bs.e({ tag: 'br' }),
                '2. Jestliže existuje sled, pak existuje cesta.']),
            viewer_1.viewer({ examples: examples, cloud: true })
        ];
    }
});
var examples = function () { return [
    {
        name: 'tvrzeni11-obecne',
        steps: [
            {
                actions: [
                    a.addVertex('v', { x: 200, y: 390 }, 'v', undefined, undefined, colors.blueHighlightLight),
                    a.addVertex('w', { x: 580, y: 260 }, 'w', undefined, undefined, colors.blueHighlightLight),
                    a.addVertex('a', { x: 560, y: 130 }, 'e'),
                    a.addVertex('b', { x: 290, y: 120 }, 'b'),
                    a.addVertex('c', { x: 470, y: 170 }, 'c'),
                    a.addVertex('d', { x: 360, y: 320 }, 'd'),
                    a.addVertex('e', { x: 190, y: 220 }, 'a'),
                    a.addEdge('e-b', 'e', 'b'),
                    a.addEdge('b-c', 'b', 'c'),
                    a.addEdge('c-w', 'c', 'w'),
                    a.addEdge('b-d', 'b', 'd'),
                    a.addEdge('c-d', 'c', 'd'),
                    a.addEdge('c-a', 'c', 'a'),
                    a.addEdge('e-v', 'e', 'v')
                ]
            },
            {
                actions: [
                    a.addHint('implikace-cesta-sled-1', { x: 300, y: 11 }, [
                        '1. implikace: ',
                        bs.e({ tag: 'br' }),
                        'Jestliže existuje cesta z vrcholu v do vrcholu w, ',
                        bs.e({ tag: 'br' }),
                        'pak v G existuje sled z vrcholu v do vrcholu w.',
                    ]),
                    a.highlightVertex('v'),
                    a.highlightVertex('w'),
                    a.highlightEdge('e-b', a.HighlightType.Full),
                    a.highlightEdge('e-v', a.HighlightType.Full),
                    a.highlightEdge('b-c', a.HighlightType.Full),
                    a.highlightEdge('c-w', a.HighlightType.Full)
                ]
            },
            {
                actions: [
                    a.removeHint('implikace-cesta-sled-1'),
                    a.addHint('implikace-cesta-sled-2', { x: 260, y: 20 }, [
                        'Dle definice cesty je každá cesta zároveň sled. ',
                        bs.e({ tag: 'br' }),
                        'Dokázali jsme první implikaci. '
                    ]),
                    a.unHighlightVertex('v'),
                    a.unHighlightVertex('w')
                ]
            },
            {
                actions: [
                    a.removeHint('implikace-cesta-sled-2'),
                    a.addHint('implikace-sled-cesta-1', { x: 65, y: 370 }, [
                        '2. implikace:',
                        bs.e({ tag: 'br' }),
                        'Jestliže existuje sled z vrcholu v do vrcholu w,',
                        bs.e({ tag: 'br' }),
                        'pak v G existuje cesta z vrcholu v do vrcholu w.'
                    ]),
                    a.highlightVertex('v'),
                    a.highlightVertex('w'),
                    a.unHighlightEdge('b-c', a.HighlightType.Full),
                    a.highlightEdge('b-c', a.HighlightType.Full, 14),
                    a.highlightEdge('b-d', a.HighlightType.Full),
                    a.highlightEdge('c-d', a.HighlightType.Full),
                    a.addEdge('b-c-inner', 'b', 'c', undefined, 2, colors.defaultWhite, undefined, 100),
                ]
            },
            {
                actions: [
                    a.removeHint('implikace-sled-cesta-1'),
                    a.addHint('implikace-sled-cesta-2', { x: 330, y: 10 }, [
                        'Uvažujeme jeho podsled Smin',
                        bs.e({ tag: 'br' }),
                        ' z v do w minimální délky.',
                        bs.e({ tag: 'br' }),
                        ' Dokážeme, že Smin je cesta z v do w.'
                    ]),
                    a.unHighlightVertex('v'),
                    a.unHighlightVertex('w'),
                    a.unHighlightEdge('b-d', a.HighlightType.Full),
                    a.unHighlightEdge('b-c', a.HighlightType.Full),
                    a.unHighlightEdge('c-d', a.HighlightType.Full),
                    a.highlightEdge('b-c', a.HighlightType.Full),
                    a.removeEdge('b-c-inner'),
                ]
            },
            {
                actions: [
                    a.removeHint('implikace-sled-cesta-2'),
                    a.addHint('implikace-sled-cesta-3', { x: 330, y: 10 }, [
                        ' Důkaz sporem:',
                        bs.e({ tag: 'br' }),
                        ' Existuje sled Smin minimální délky z v do w',
                        bs.e({ tag: 'br' }),
                        ' a zároveň Smin není cesta z v do w.'
                    ]),
                    a.unHighlightEdge('e-b', a.HighlightType.Full),
                    a.unHighlightEdge('e-v', a.HighlightType.Full),
                    a.highlightEdge('e-b', a.HighlightType.Full, undefined, colors.greenHighlight),
                    a.highlightEdge('e-v', a.HighlightType.Full, undefined, colors.greenHighlight),
                    a.unHighlightEdge('b-c', a.HighlightType.Full),
                    a.highlightEdge('b-c', a.HighlightType.Full, 14, colors.greenHighlight),
                    a.addEdge('b-c-inner', 'b', 'c', undefined, 2, colors.defaultWhite, undefined, 100),
                    a.unHighlightEdge('c-w', a.HighlightType.Full),
                    a.highlightEdge('c-w', a.HighlightType.Full, undefined, colors.greenHighlight),
                    a.highlightEdge('b-d', a.HighlightType.Full, undefined, colors.greenHighlight),
                    a.highlightEdge('c-d', a.HighlightType.Full, undefined, colors.greenHighlight)
                ]
            },
            {
                actions: [
                    a.removeHint('implikace-sled-cesta-3'),
                    a.addHint('implikace-sled-cesta-4', { x: 330, y: 10 }, [
                        ' Jestliže Smin není cesta, pak Smin obsahuje',
                        bs.e({ tag: 'br' }),
                        ' alespoň jeden vrchol x, který se v Smin',
                        bs.e({ tag: 'br' }),
                        ' vyskytuje alespoň dvakrát.'
                    ]),
                    a.highlightVertex('b', undefined, colors.greenHighlight),
                    a.highlightVertex('c', undefined, colors.greenHighlight)
                ]
            },
            {
                actions: [
                    a.removeHint('implikace-sled-cesta-4'),
                    a.addHint('implikace-sled-cesta-5', { x: 330, y: 10 }, [
                        ' Odebráním posloupnosti (x, ... , y) dostaneme také sled',
                        bs.e({ tag: 'br' }),
                        ' z vrcholu do do vrcholu w, který je ale kratší délky než Smin,',
                        bs.e({ tag: 'br' }),
                        ' což je spor s předpokladem. Dokázali jsme druhou implikaci. '
                    ]),
                    a.removeEdge('b-c-inner'),
                    a.unHighlightEdge('b-d', a.HighlightType.Full),
                    a.unHighlightEdge('c-d', a.HighlightType.Full),
                    a.unHighlightEdge('b-c', a.HighlightType.Full),
                    a.highlightEdge('b-c', a.HighlightType.Full, undefined, colors.greenHighlight),
                    a.unHighlightVertex('b'),
                    a.unHighlightVertex('c'),
                ]
            },
        ]
    },
    {
        name: 'tvrzeni11-priklad-1',
        steps: [
            {
                actions: [
                    a.addVertex('v', { x: 250, y: 100 }, 'v', undefined, undefined, colors.blueHighlightLight),
                    a.addVertex('w', { x: 360, y: 400 }, 'w', undefined, undefined, colors.blueHighlightLight),
                    a.addVertex('a', { x: 550, y: 100 }, 'a'),
                    a.addVertex('b', { x: 250, y: 300 }, 'b'),
                    a.addVertex('c', { x: 430, y: 220 }, 'c'),
                    a.addEdge('v-a', 'v', 'a'),
                    a.addEdge('c-a', 'c', 'a'),
                    a.addEdge('c-w', 'c', 'w'),
                    a.addEdge('c-b', 'c', 'b'),
                    a.addEdge('b-w', 'b', 'w'),
                    a.addEdge('v-b', 'v', 'b')
                ]
            },
            {
                actions: [
                    a.addHint('implikace-cesta-sled-1', { x: 300, y: 11 }, [
                        '1. implikace: ',
                        bs.e({ tag: 'br' }),
                        'Jestliže existuje cesta z vrcholu v do vrcholu w, ',
                        bs.e({ tag: 'br' }),
                        'pak v G existuje sled z vrcholu v do vrcholu w.',
                    ]),
                    a.highlightVertex('v'),
                    a.highlightVertex('w'),
                    a.highlightEdge('b-w', a.HighlightType.Full),
                    a.highlightEdge('v-b', a.HighlightType.Full)
                ]
            },
            {
                actions: [
                    a.removeHint('implikace-cesta-sled-1'),
                    a.addHint('implikace-cesta-sled-2', { x: 260, y: 20 }, [
                        'Dle definice cesty je každá cesta zároveň sled. ',
                        bs.e({ tag: 'br' }),
                        'Dokázali jsme první implikaci. '
                    ]),
                    a.unHighlightVertex('v'),
                    a.unHighlightVertex('w')
                ]
            },
            {
                actions: [
                    a.removeHint('implikace-cesta-sled-2'),
                    a.addHint('implikace-sled-cesta-1', { x: 440, y: 280 }, [
                        '2) Jestliže existuje sled z vrcholu v do vrcholu w,',
                        bs.e({ tag: 'br' }),
                        'pak v G existuje cesta z vrcholu v do vrcholu w.'
                    ]),
                    a.highlightVertex('v'),
                    a.highlightVertex('w'),
                    a.highlightEdge('v-a', a.HighlightType.Full),
                    a.highlightEdge('c-a', a.HighlightType.Full),
                    a.highlightEdge('c-b', a.HighlightType.Full),
                    a.highlightEdge('b-w', a.HighlightType.Full),
                    a.unHighlightEdge('v-b', a.HighlightType.Full),
                    a.highlightEdge('v-b', a.HighlightType.Full, 14),
                    a.addEdge('v-b-inner', 'v', 'b', undefined, 2, colors.defaultWhite, undefined, 100),
                ]
            },
            {
                actions: [
                    a.removeHint('implikace-sled-cesta-1'),
                    a.addHint('implikace-sled-cesta-2', { x: 30, y: 360 }, [
                        'Uvažujeme jeho podsled Smin',
                        bs.e({ tag: 'br' }),
                        ' z v do w minimální délky.',
                        bs.e({ tag: 'br' }),
                        ' Dokážeme, že Smin je cesta z v do w.'
                    ]),
                    a.unHighlightVertex('v'),
                    a.unHighlightVertex('w'),
                    a.unHighlightEdge('v-a', a.HighlightType.Full),
                    a.unHighlightEdge('c-a', a.HighlightType.Full),
                    a.unHighlightEdge('c-b', a.HighlightType.Full),
                    a.unHighlightEdge('v-b', a.HighlightType.Full),
                    a.highlightEdge('v-b', a.HighlightType.Full),
                    a.removeEdge('v-b-inner'),
                ]
            },
            {
                actions: [
                    a.removeHint('implikace-sled-cesta-2'),
                    a.addHint('implikace-sled-cesta-3', { x: 470, y: 240 }, [
                        ' Důkaz sporem:',
                        bs.e({ tag: 'br' }),
                        ' Existuje sled Smin minimální délky z v do w',
                        bs.e({ tag: 'br' }),
                        ' a zároveň Smin není cesta z v do w.'
                    ]),
                    a.unHighlightEdge('v-b', a.HighlightType.Full),
                    a.highlightEdge('v-a', a.HighlightType.Full),
                    a.highlightEdge('c-a', a.HighlightType.Full),
                    a.highlightEdge('c-b', a.HighlightType.Full),
                    a.highlightEdge('b-w', a.HighlightType.Full),
                    a.highlightEdge('v-b', a.HighlightType.Full, 14),
                    a.addEdge('v-b-inner', 'v', 'b', undefined, 2, colors.defaultWhite, undefined, 100),
                ]
            },
            {
                actions: [
                    a.removeHint('implikace-sled-cesta-3'),
                    a.addHint('implikace-sled-cesta-4', { x: 470, y: 240 }, [
                        ' Jestliže Smin není cesta, pak Smin obsahuje',
                        bs.e({ tag: 'br' }),
                        ' alespoň jeden vrchol x, který se v Smin',
                        bs.e({ tag: 'br' }),
                        ' vyskytuje alespoň dvakrát.'
                    ]),
                    a.highlightVertex('v'),
                    a.highlightVertex('b')
                ]
            },
            {
                actions: [
                    a.removeHint('implikace-sled-cesta-4'),
                    a.addHint('implikace-sled-cesta-5', { x: 350, y: 260 }, [
                        ' Odebráním posloupnosti (v, ... , y) dostaneme také sled',
                        bs.e({ tag: 'br' }),
                        ' z vrcholu do do vrcholu w, který je ale kratší délky než Smin,',
                        bs.e({ tag: 'br' }),
                        ' což je spor s předpokladem. Dokázali jsme druhou implikaci. '
                    ]),
                    a.unHighlightEdge('v-a', a.HighlightType.Full),
                    a.unHighlightEdge('c-a', a.HighlightType.Full),
                    a.unHighlightEdge('c-b', a.HighlightType.Full),
                    a.unHighlightEdge('v-b', a.HighlightType.Full),
                    a.highlightEdge('v-b', a.HighlightType.Full),
                    a.removeEdge('v-b-inner'),
                    a.unHighlightVertex('v'),
                    a.unHighlightVertex('b'),
                ]
            },
        ]
    }
]; };
});
R('zakladnipojmy/tvrzeni12/tvrzeni12',function(require, module, exports){
"use strict";
var b = require("bobril");
var bs = require("bobrilstrap");
var a = require("../../viewer/actions");
var viewer_1 = require("../../viewer/viewer");
var colors = require("../../common/colors");
exports.tvrzeni12 = b.createVirtualComponent({
    render: function (ctx, me) {
        me.children = [
            bs.h2({}, 'Tvrzení 1.2'),
            bs.panel({
                body: bs.h4({}, ['Nechť graf ', bs.em({}, 'G'), ' je souvislý a nechť obsahuje kružnici ', bs.em({}, 'C'),
                    '. Pak graf ', bs.em({}, 'G - e'), ', kde ', bs.em({}, 'e'), ' je libovolná hrana kružnice ', bs.em({}, 'C'),
                    ' , je také souvislý. ']),
                context: bs.PanelContext.Primary
            }),
            bs.paragraph({}, ['Protože je graf G souvislý, existuje v něm mezi každými dvěma vrcholy x, y cesta P. '
                    + 'Jsou dvě možnosti: ', bs.e({ tag: 'br' }),
                '1. Cesta P neobsahuje hranu e. V tom případě je zároveň cestou v grafu G - e.', bs.e({ tag: 'br' }),
                '2. Cesta P obsahuje hranu e. V tom případě hranu e nahradíme cestou P a získáme sled z vrcholu x do vrcholu y v grafu G, který je sledem i v grafu G - e. Dle tvrzení 1.1 existuje v grafu G - e také cesta z vrcholu x do vrcholu y a graf je souvislý.']),
            viewer_1.viewer({ examples: examples, cloud: true })
        ];
    }
});
var examples = function () { return [
    {
        name: 'tvrzeni12-obecne',
        steps: [
            {
                actions: [
                    a.addVertex('x', { x: 150, y: 315 }, 'x', undefined, undefined, colors.blueHighlightLight),
                    a.addVertex('y', { x: 630, y: 260 }, 'y', undefined, undefined, colors.blueHighlightLight),
                    a.addVertex('v', { x: 400, y: 317 }, 'v'),
                    a.addVertex('w', { x: 520, y: 240 }, 'w'),
                    a.addVertex('a', { x: 270, y: 240 }, ''),
                    a.addVertex('b', { x: 300, y: 100 }, ''),
                    a.addVertex('c', { x: 480, y: 90 }, ''),
                    a.addEdge('a-b', 'a', 'b'),
                    a.addEdge('b-c', 'b', 'c'),
                    a.addEdge('c-w', 'c', 'w'),
                    a.addEdge('v-w', 'v', 'w'),
                    a.addEdge('a-v', 'a', 'v'),
                    a.addEdge('x-a', 'x', 'a'),
                    a.addEdge('w-y', 'w', 'y')
                ]
            },
            {
                actions: [
                    a.addHint('dukaz-1', { x: 40, y: 30 }, [
                        'Graf G je souvislý ',
                        bs.e({ tag: 'br' }),
                        ' a obsahuje kružnici C.',
                    ]),
                    a.highlightEdge('a-b', a.HighlightType.Full),
                    a.highlightEdge('b-c', a.HighlightType.Full),
                    a.highlightEdge('c-w', a.HighlightType.Full),
                    a.highlightEdge('v-w', a.HighlightType.Full),
                    a.highlightEdge('a-v', a.HighlightType.Full)
                ]
            },
            {
                actions: [
                    a.removeHint('dukaz-1'),
                    a.addHint('dukaz-2', { x: 450, y: 350 }, [
                        'e = {v, w} je libovolná hrana kružnice C. ',
                        bs.e({ tag: 'br' }),
                        'Označíme P = C - e jako cestu z vrcholu v do w. '
                    ]),
                    a.unHighlightEdge('v-w', a.HighlightType.Full),
                    a.highlightEdge('v-w', a.HighlightType.Full, undefined, colors.greenHighlight)
                ]
            },
            {
                actions: [
                    a.removeHint('dukaz-2'),
                    a.addHint('dukaz-3', { x: 440, y: 330 }, [
                        'Graf je souvislý, dle definice existuje mezi každými ',
                        bs.e({ tag: 'br' }),
                        'dvěma vrcholy x, y cesta Px,y. '
                    ]),
                    a.highlightVertex('x'),
                    a.highlightVertex('y'),
                    a.unHighlightEdge('a-b', a.HighlightType.Full),
                    a.unHighlightEdge('b-c', a.HighlightType.Full),
                    a.unHighlightEdge('c-w', a.HighlightType.Full),
                    a.unHighlightEdge('v-w', a.HighlightType.Full),
                    a.unHighlightEdge('a-v', a.HighlightType.Full)
                ]
            },
            {
                actions: [
                    a.removeHint('dukaz-3'),
                    a.addHint('dukaz-4', { x: 20, y: 20 }, [
                        '1. Cesta Px,y neobsahuje hranu e.',
                    ]),
                    a.highlightEdge('a-b', a.HighlightType.Full),
                    a.highlightEdge('b-c', a.HighlightType.Full),
                    a.highlightEdge('c-w', a.HighlightType.Full),
                    a.highlightEdge('w-y', a.HighlightType.Full),
                    a.highlightEdge('x-a', a.HighlightType.Full)
                ]
            },
            {
                actions: [
                    a.removeHint('dukaz-4'),
                    a.addHint('dukaz-5', { x: 500, y: 320 }, [
                        'Px,y je zároveň cestou v grafu G - e.',
                    ]),
                    a.removeEdge('v-w')
                ]
            },
            {
                actions: [
                    a.removeHint('dukaz-5'),
                    a.addHint('dukaz-6', { x: 530, y: 340 }, [
                        '2. Px,y obsahuje hranu e.',
                    ]),
                    a.addEdge('v-w', 'v', 'w'),
                    a.unHighlightEdge('a-b', a.HighlightType.Full),
                    a.unHighlightEdge('b-c', a.HighlightType.Full),
                    a.unHighlightEdge('c-w', a.HighlightType.Full),
                    a.highlightEdge('v-w', a.HighlightType.Full),
                    a.highlightEdge('a-v', a.HighlightType.Full)
                ]
            },
            {
                actions: [
                    a.removeHint('dukaz-6'),
                    a.addHint('dukaz-7', { x: 20, y: 10 }, [
                        'V tom případě hranu e nahradíme cestou P ',
                        bs.e({ tag: 'br' }),
                        'a získáme sled z vrcholu x do vrcholu y v G.',
                    ]),
                    a.unHighlightEdge('v-w', a.HighlightType.Full),
                    a.unHighlightEdge('a-v', a.HighlightType.Full),
                    a.highlightEdge('a-v', a.HighlightType.Full, 14),
                    a.highlightEdge('a-b', a.HighlightType.Full),
                    a.highlightEdge('b-c', a.HighlightType.Full),
                    a.highlightEdge('c-w', a.HighlightType.Full),
                    a.addEdge('a-v-inner', 'a', 'v', undefined, 2, colors.defaultWhite, undefined, 100)
                ]
            },
            {
                actions: [
                    a.removeHint('dukaz-7'),
                    a.addHint('dukaz-8', { x: 20, y: 10 }, [
                        'Ten je sledem z vrcholu x ',
                        bs.e({ tag: 'br' }),
                        'do vrcholu y i v grafu G - e.',
                    ]),
                    a.removeEdge('v-w')
                ]
            },
            {
                actions: [
                    a.removeHint('dukaz-8'),
                    a.addHint('dukaz-9', { x: 20, y: 10 }, [
                        'Podle Tvrzení 1.1. tak existuje v G - e',
                        bs.e({ tag: 'br' }),
                        'cesta z vrcholu x do vrcholu y. ',
                        bs.e({ tag: 'br' }),
                        'Dle definice je graf G - e souvislý.',
                    ]),
                    a.removeEdge('a-v-inner'),
                    a.unHighlightEdge('a-v', a.HighlightType.Full)
                ]
            },
        ]
    },
    {
        name: 'tvrzeni12-priklad-1',
        steps: [
            {
                actions: [
                    a.addVertex('x', { x: 200, y: 270 }, 'x', undefined, undefined, colors.blueHighlightLight),
                    a.addVertex('y', { x: 520, y: 420 }, 'y', undefined, undefined, colors.blueHighlightLight),
                    a.addVertex('v', { x: 430, y: 315 }, 'v'),
                    a.addVertex('w', { x: 640, y: 315 }, 'w'),
                    a.addVertex('b', { x: 550, y: 100 }, ''),
                    a.addVertex('a', { x: 250, y: 90 }, ''),
                    a.addVertex('c', { x: 430, y: 220 }, ''),
                    a.addEdge('v-w', 'v', 'w'),
                    a.addEdge('c-v', 'c', 'v'),
                    a.addEdge('b-w', 'b', 'w'),
                    a.addEdge('c-b', 'c', 'b'),
                    a.addEdge('a-x', 'a', 'x'),
                    a.addEdge('a-b', 'a', 'b'),
                    a.addEdge('v-y', 'v', 'y'),
                    a.addEdge('w-y', 'w', 'y'),
                    a.addEdge('a-c', 'a', 'c'),
                    a.addEdge('c-x', 'c', 'x')
                ]
            },
            {
                actions: [
                    a.addHint('dukaz-1', { x: 40, y: 30 }, [
                        'Graf G je souvislý ',
                        bs.e({ tag: 'br' }),
                        ' a obsahuje kružnici C.',
                    ]),
                    a.highlightEdge('c-b', a.HighlightType.Full),
                    a.highlightEdge('b-w', a.HighlightType.Full),
                    a.highlightEdge('v-w', a.HighlightType.Full),
                    a.highlightEdge('c-v', a.HighlightType.Full)
                ]
            },
            {
                actions: [
                    a.removeHint('dukaz-1'),
                    a.addHint('dukaz-2', { x: 70, y: 350 }, [
                        'e = {v, w} je libovolná hrana kružnice C. ',
                        bs.e({ tag: 'br' }),
                        'Označíme P = C - e jako cestu z vrcholu v do w. '
                    ]),
                    a.unHighlightEdge('v-w', a.HighlightType.Full),
                    a.highlightEdge('v-w', a.HighlightType.Full, undefined, colors.greenHighlight)
                ]
            },
            {
                actions: [
                    a.removeHint('dukaz-2'),
                    a.addHint('dukaz-3', { x: 30, y: 340 }, [
                        'Graf je souvislý, dle definice existuje mezi každými ',
                        bs.e({ tag: 'br' }),
                        'dvěma vrcholy x, y cesta Px,y. '
                    ]),
                    a.highlightVertex('x'),
                    a.highlightVertex('y'),
                    a.unHighlightEdge('c-b', a.HighlightType.Full),
                    a.unHighlightEdge('b-w', a.HighlightType.Full),
                    a.unHighlightEdge('c-v', a.HighlightType.Full),
                    a.unHighlightEdge('v-w', a.HighlightType.Full)
                ]
            },
            {
                actions: [
                    a.removeHint('dukaz-3'),
                    a.addHint('dukaz-4', { x: 150, y: 350 }, [
                        '1. Cesta Px,y neobsahuje hranu e.',
                    ]),
                    a.highlightEdge('c-x', a.HighlightType.Full),
                    a.highlightEdge('c-v', a.HighlightType.Full),
                    a.highlightEdge('v-y', a.HighlightType.Full),
                ]
            },
            {
                actions: [
                    a.removeHint('dukaz-4'),
                    a.addHint('dukaz-5', { x: 150, y: 350 }, [
                        'Px,y je zároveň cestou v grafu G - e.',
                    ]),
                    a.removeEdge('v-w')
                ]
            },
            {
                actions: [
                    a.removeHint('dukaz-5'),
                    a.addHint('dukaz-6', { x: 600, y: 130 }, [
                        '2. Px,y obsahuje hranu e.',
                    ]),
                    a.addEdge('v-w', 'v', 'w'),
                    a.unHighlightEdge('c-v', a.HighlightType.Full),
                    a.highlightEdge('v-w', a.HighlightType.Full),
                    a.highlightEdge('c-b', a.HighlightType.Full),
                    a.highlightEdge('b-w', a.HighlightType.Full)
                ]
            },
            {
                actions: [
                    a.removeHint('dukaz-6'),
                    a.addHint('dukaz-7', { x: 480, y: 10 }, [
                        'V tom případě hranu e nahradíme cestou P ',
                        bs.e({ tag: 'br' }),
                        'a získáme sled z vrcholu x do vrcholu y v G.',
                    ]),
                    a.unHighlightEdge('v-w', a.HighlightType.Full),
                    a.unHighlightEdge('c-b', a.HighlightType.Full),
                    a.unHighlightEdge('b-w', a.HighlightType.Full),
                    a.highlightEdge('c-b', a.HighlightType.Full, 14),
                    a.highlightEdge('b-w', a.HighlightType.Full, 14),
                    a.highlightEdge('c-v', a.HighlightType.Full),
                    a.addEdge('c-b-inner', 'c', 'b', undefined, 2, colors.defaultWhite, undefined, 100),
                    a.addEdge('b-w-inner', 'b', 'w', undefined, 2, colors.defaultWhite, undefined, 100)
                ]
            },
            {
                actions: [
                    a.removeHint('dukaz-7'),
                    a.addHint('dukaz-8', { x: 180, y: 330 }, [
                        'Ten je sledem z vrcholu x ',
                        bs.e({ tag: 'br' }),
                        'do vrcholu y i v grafu G - e.',
                    ]),
                    a.removeEdge('v-w')
                ]
            },
            {
                actions: [
                    a.removeHint('dukaz-8'),
                    a.addHint('dukaz-9', { x: 120, y: 340 }, [
                        'Podle Tvrzení 1.1. tak existuje v G - e',
                        bs.e({ tag: 'br' }),
                        'cesta z vrcholu x do vrcholu y. ',
                        bs.e({ tag: 'br' }),
                        'Dle definice je graf G - e souvislý.',
                    ]),
                    a.removeEdge('c-b-inner'),
                    a.removeEdge('b-w-inner'),
                    a.unHighlightEdge('c-b', a.HighlightType.Full),
                    a.unHighlightEdge('b-w', a.HighlightType.Full)
                ]
            },
        ]
    },
]; };
});
R('typygrafu/veta22/veta22',function(require, module, exports){
"use strict";
var b = require("bobril");
var bs = require("bobrilstrap");
var a = require("../../viewer/actions");
var viewer_1 = require("../../viewer/viewer");
var colors = require("../../common/colors");
exports.veta22 = b.createVirtualComponent({
    render: function (ctx, me) {
        me.children = [
            bs.h2({}, 'Věta 2.2'),
            bs.panel({
                body: bs.h4({}, ['Pro každý graf ', bs.em({}, 'G=(V, E)'), ' platí: ', bs.e({ tag: 'br' }),
                    'Graf ', bs.em({}, 'G'), ' je eulerovský právě tehdy, když graf ', bs.em({}, 'G'),
                    ' je souvislý a má buď všechny vrcholy sudého stupně, nebo  právě dva vrcholy lichého stupně.']),
                context: bs.PanelContext.Primary
            }),
            bs.paragraph({}, ['Dokážeme postupně obě implikace: ', bs.e({ tag: 'br' }),
                '1. Jestliže graf je eulerovský, pak je souvislý a má buď všechny vrcholy sudého stupně, nebo  právě dva vrcholy lichého stupně.', bs.e({ tag: 'br' }),
                '2. Jestliže graf G je souvislý a má buď všechny vrcholy sudého stupně, nebo  právě dva vrcholy lichého stupně, pak je eulerovský. ', bs.e({ tag: 'br' }),
                '\xa0\xa0\xa0 a. Uvažujeme souvislý sudý graf (má všechny vrcholy sudého stupně) - dokážeme indukcí.', bs.e({ tag: 'br' }),
                '\xa0\xa0\xa0 b. Uvažujeme souvislý graf s právě dvěma vrcholy lichého stupně - převedeme na sudý graf.', bs.e({ tag: 'br' }),
            ]),
            viewer_1.viewer({ examples: examples, cloud: true })
        ];
    }
});
var examples = function () { return [
    {
        name: 'veta22-obecne',
        steps: [
            {
                actions: [
                    a.addVertex('a', { x: 300, y: 100 }, 'a'),
                    a.addVertex('b', { x: 500, y: 100 }, 'b'),
                    a.addVertex('c', { x: 500, y: 300 }, 'c'),
                    a.addVertex('d', { x: 300, y: 300 }, 'd'),
                    a.addVertex('e', { x: 200, y: 300 }, 'e'),
                    a.addVertex('f', { x: 300, y: 400 }, 'f'),
                    a.addEdge('a-b', 'a', 'b'),
                    a.addEdge('b-c', 'b', 'c'),
                    a.addEdge('c-d', 'c', 'd'),
                    a.addEdge('d-e', 'd', 'e'),
                    a.addEdge('d-f', 'd', 'f'),
                    a.addEdge('e-f', 'e', 'f'),
                    a.addEdge('a-d', 'a', 'd')
                ]
            },
            {
                actions: [
                    a.addHint('implikace-euler-1', { x: 480, y: 350 }, [
                        '1. Jestliže graf je eulerovský, pak je souvislý ',
                        bs.e({ tag: 'br' }),
                        'a má buď všechny vrcholy sudého stupně, ',
                        bs.e({ tag: 'br' }),
                        'nebo právě dva vrcholy lichého stupně.',
                    ]),
                ]
            },
            {
                actions: [
                    a.removeHint('implikace-euler-1'),
                    a.addHint('implikace-euler-2', { x: 480, y: 350 }, [
                        'Dle definice eulerovského grafu je souvislý ',
                        bs.e({ tag: 'br' }),
                        ' a existuje v něm eulerovský tah T',
                        bs.e({ tag: 'br' }),
                        ' obsahující všechny hrany grafu G.',
                    ]),
                ]
            },
            {
                actions: [
                    a.removeHint('implikace-euler-2'),
                    a.addHint('implikace-euler-3', { x: 260, y: 20 }, [
                        'Tah T uzavřený - všechny vrcholy jsou sudého stupně. '
                    ]),
                    a.highlightEdge('a-b', a.HighlightType.Full),
                    a.highlightEdge('b-c', a.HighlightType.Full),
                    a.highlightEdge('c-d', a.HighlightType.Full),
                    a.highlightEdge('d-e', a.HighlightType.Full),
                    a.highlightEdge('d-f', a.HighlightType.Full),
                    a.highlightEdge('e-f', a.HighlightType.Full),
                    a.highlightEdge('a-d', a.HighlightType.Full),
                ]
            },
            {
                actions: [
                    a.removeHint('implikace-euler-3'),
                    a.addHint('implikace-euler-4', { x: 260, y: 20 }, [
                        'Tah T otevřený - právě dva vrcholy mají lichý stupeň. '
                    ]),
                    a.unHighlightEdge('b-c', a.HighlightType.Full),
                    a.removeEdge('b-c')
                ]
            },
            {
                actions: [
                    a.removeHint('implikace-euler-4'),
                    a.addHint('implikace-euler-5', { x: 260, y: 20 }, [
                        'Dokázali jsme první implikaci. '
                    ]),
                ]
            },
            {
                actions: [
                    a.removeHint('implikace-euler-5'),
                    a.addHint('implikace-euler-6', { x: 470, y: 140 }, [
                        '2. Jestliže graf G je souvislý ',
                        bs.e({ tag: 'br' }),
                        'a má buď všechny vrcholy sudého stupně, ',
                        bs.e({ tag: 'br' }),
                        'nebo právě dva vrcholy lichého stupně, ',
                        bs.e({ tag: 'br' }),
                        'pak je Eulerovský. ',
                    ]),
                    a.unHighlightEdge('a-b', a.HighlightType.Full),
                    a.unHighlightEdge('c-d', a.HighlightType.Full),
                    a.unHighlightEdge('d-e', a.HighlightType.Full),
                    a.unHighlightEdge('d-f', a.HighlightType.Full),
                    a.unHighlightEdge('e-f', a.HighlightType.Full),
                    a.unHighlightEdge('a-d', a.HighlightType.Full),
                ]
            },
            {
                actions: [
                    a.removeHint('implikace-euler-6'),
                    a.addHint('implikace-euler-7', { x: 520, y: 160 }, [
                        'a. Uvažujeme souvislý sudý graf ',
                        bs.e({ tag: 'br' }),
                        '(má všechny vrcholy sudého stupně) - ',
                        bs.e({ tag: 'br' }),
                        'dokážeme indukcí.'
                    ]),
                    a.addEdge('b-c', 'b', 'c'),
                ]
            },
            {
                actions: [
                    a.removeHint('implikace-euler-7'),
                    a.addHint('implikace-euler-8', { x: 150, y: 112 }, [
                        ' Nejmenší souvislý sudý graf ',
                        bs.e({ tag: 'br' }),
                        ' je kružnice délky tři. ',
                        bs.e({ tag: 'br' }),
                        ' Ten je jistě eulerovský. '
                    ]),
                    a.removeEdge('a-b'),
                    a.removeEdge('b-c'),
                    a.removeEdge('c-d'),
                    a.removeEdge('a-d'),
                    a.removeVertex('a'),
                    a.removeVertex('b'),
                    a.removeVertex('c')
                ]
            },
            {
                actions: [
                    a.removeHint('implikace-euler-8'),
                    a.addHint('implikace-euler-9', { x: 510, y: 160 }, [
                        'Nechť věta platí pro souvislý ',
                        bs.e({ tag: 'br' }),
                        'sudý graf G = (V, E) ',
                        bs.e({ tag: 'br' }),
                        's počtem hran <= m a m >= 3.',
                        bs.e({ tag: 'br' }),
                        'Dokážeme i pro graf  G s (m + 1) hranami.'
                    ]),
                    a.addVertex('a', { x: 300, y: 100 }, 'a'),
                    a.addVertex('b', { x: 500, y: 100 }, 'b'),
                    a.addVertex('c', { x: 500, y: 300 }, 'c'),
                    a.addEdge('a-b', 'a', 'b'),
                    a.addEdge('b-c', 'b', 'c'),
                    a.addEdge('c-d', 'c', 'd'),
                    a.addEdge('a-d', 'a', 'd')
                ]
            },
            {
                actions: [
                    a.removeHint('implikace-euler-9'),
                    a.addHint('implikace-euler-10', { x: 510, y: 160 }, [
                        'Sudý graf G můžeme chápat jako ',
                        bs.e({ tag: 'br' }),
                        'sjednocení kružnic bez společných hran. ',
                        bs.e({ tag: 'br' }),
                        'Nechť C je libovolná kružnice. '
                    ]),
                    a.highlightEdge('a-b', a.HighlightType.Full),
                    a.highlightEdge('b-c', a.HighlightType.Full),
                    a.highlightEdge('c-d', a.HighlightType.Full),
                    a.highlightEdge('a-d', a.HighlightType.Full),
                    a.highlightEdge('d-e', a.HighlightType.Full, undefined, colors.greenHighlight),
                    a.highlightEdge('d-f', a.HighlightType.Full, undefined, colors.greenHighlight),
                    a.highlightEdge('e-f', a.HighlightType.Full, undefined, colors.greenHighlight),
                ]
            },
            {
                actions: [
                    a.removeHint('implikace-euler-10'),
                    a.addHint('implikace-euler-11', { x: 460, y: 350 }, [
                        'Z grafu G vynecháme hrany kružnice C. ',
                        bs.e({ tag: 'br' }),
                        'V každé komponentě existuje dle předpokladu ',
                        bs.e({ tag: 'br' }),
                        'uzavřený eulerovský tah. '
                    ]),
                    a.unHighlightEdge('d-e', a.HighlightType.Full),
                    a.unHighlightEdge('d-f', a.HighlightType.Full),
                    a.unHighlightEdge('e-f', a.HighlightType.Full),
                    a.removeEdge('d-e'),
                    a.removeEdge('e-f'),
                    a.removeEdge('d-f')
                ]
            },
            {
                actions: [
                    a.removeHint('implikace-euler-11'),
                    a.addHint('implikace-euler-12', { x: 30, y: 150 }, [
                        'Tahy pospojujeme s kružnicí C ',
                        bs.e({ tag: 'br' }),
                        'do uzavřeného tahu ',
                        bs.e({ tag: 'br' }),
                        'obsahujícího všechny hrany grafu G. ',
                        bs.e({ tag: 'br' }),
                        'Tj. graf je eulerovský. '
                    ]),
                    a.highlightEdge('a-d', a.HighlightType.Full),
                    a.addEdge('d-e', 'd', 'e'),
                    a.addEdge('e-f', 'e', 'f'),
                    a.addEdge('d-f', 'd', 'f'),
                    a.highlightEdge('d-e', a.HighlightType.Full, undefined, colors.greenHighlight),
                    a.highlightEdge('d-f', a.HighlightType.Full, undefined, colors.greenHighlight),
                    a.highlightEdge('e-f', a.HighlightType.Full, undefined, colors.greenHighlight),
                ]
            },
            {
                actions: [
                    a.removeHint('implikace-euler-12'),
                    a.addHint('implikace-euler-13', { x: 510, y: 150 }, [
                        'b. Uvažujeme souvislý graf ',
                        bs.e({ tag: 'br' }),
                        's právě dvěma vrcholy lichého stupně ',
                        bs.e({ tag: 'br' }),
                        '- převedeme na sudý graf. '
                    ]),
                    a.unHighlightEdge('a-b', a.HighlightType.Full),
                    a.unHighlightEdge('c-d', a.HighlightType.Full),
                    a.unHighlightEdge('d-e', a.HighlightType.Full),
                    a.unHighlightEdge('d-f', a.HighlightType.Full),
                    a.unHighlightEdge('a-d', a.HighlightType.Full),
                    a.unHighlightEdge('b-c', a.HighlightType.Full),
                    a.unHighlightEdge('e-f', a.HighlightType.Full),
                    a.unHighlightEdge('a-d', a.HighlightType.Full),
                    a.removeEdge('b-c')
                ]
            },
            {
                actions: [
                    a.removeHint('implikace-euler-13'),
                    a.addHint('implikace-euler-14', { x: 530, y: 300 }, [
                        'Spojíme vrcholy lichého stupně ',
                        bs.e({ tag: 'br' }),
                        's novým vrcholem v. ',
                        bs.e({ tag: 'br' }),
                        'Dostaneme sudý graf, ve kterém ',
                        bs.e({ tag: 'br' }),
                        'existuje uzavřený eulerovský tah T.'
                    ]),
                    a.addVertex('v', { x: 600, y: 200 }, 'v'),
                    a.addEdge('b-v', 'b', 'v'),
                    a.addEdge('c-v', 'c', 'v'),
                    a.highlightEdge('a-b', a.HighlightType.Full),
                    a.highlightEdge('c-d', a.HighlightType.Full),
                    a.highlightEdge('b-v', a.HighlightType.Full),
                    a.highlightEdge('c-v', a.HighlightType.Full),
                    a.highlightEdge('d-e', a.HighlightType.Full),
                    a.highlightEdge('d-f', a.HighlightType.Full),
                    a.highlightEdge('e-f', a.HighlightType.Full),
                    a.highlightEdge('a-d', a.HighlightType.Full)
                ]
            },
            {
                actions: [
                    a.removeHint('implikace-euler-14'),
                    a.addHint('implikace-euler-15', { x: 490, y: 340 }, [
                        'Odebráním vrcholu v z tahu T ',
                        bs.e({ tag: 'br' }),
                        'získáme otevřený eulerovský tah v grafu G.',
                        bs.e({ tag: 'br' }),
                        'Tj. graf G je eulerovský. '
                    ]),
                    a.unHighlightEdge('b-v', a.HighlightType.Full),
                    a.unHighlightEdge('c-v', a.HighlightType.Full),
                    a.removeVertex('v'),
                    a.removeEdge('b-v'),
                    a.removeEdge('c-v')
                ]
            },
        ]
    }
]; };
});
R('stromy/tvrzeni41/tvrzeni41',function(require, module, exports){
"use strict";
var b = require("bobril");
var bs = require("bobrilstrap");
var a = require("../../viewer/actions");
var viewer_1 = require("../../viewer/viewer");
var colors = require("../../common/colors");
exports.tvrzeni41 = b.createVirtualComponent({
    render: function (ctx, me) {
        me.children = [
            bs.h2({}, 'Tvrzení 4.1 (O listu)'),
            bs.panel({
                body: bs.h4({}, ['Pro každý graf ', bs.em({}, 'T = (V, E)'), ' platí: ', bs.e({ tag: 'br' }),
                    'Jestliže ', bs.em({}, 'T'), ' je netriviální strom, pak ', bs.em({}, 'T'),
                    ' obsahuje list (resp. obsahuje alespoň dva listy).']),
                context: bs.PanelContext.Primary
            }),
            bs.paragraph({}, ['T = (V, E) je strom s alespoň dvěma vrcholy. Z definice stromu plyne, že strom '
                    + 'je souvislý graf. Dle definice souvislosti pro každé dva vrcholy stromu T existuje cesta, '
                    + 'která tyto vrcholy spojuje. Označme Pmax = (v0, e1, v1, ..., vk) cestu maximální délky ve stromu T. '
                    + 'Tvrdíme, že vrchol v0 je list. Dokážeme sporem: ', bs.e({ tag: 'br' }), bs.e({ tag: 'br' }),
                'Negace: vrchol v0 není list stromu T. Vrchol v0 je tudíž spojen hranou nejen s v1, '
                    + 'ale alespoň s jedním dalším vrcholem v.', bs.e({ tag: 'br' }), bs.e({ tag: 'br' }),
                '1. Jestliže v leží na Pmax, pak posloupnost tvoří kružnici - spor s předpokladem, že T je strom.', bs.e({ tag: 'br' }),
                '2. Jestliže v neleží na Pmax, pak existuje ve stromu T cesta (v, e, Pmax) '
                    + 'o jednu hranu delší než cesta Pmax, což je spor s předpokladem.', bs.e({ tag: 'br' }),
            ]),
            viewer_1.viewer({ examples: examples, cloud: true })
        ];
    }
});
var examples = function () { return [
    {
        name: 'tvrzeni41-obecne',
        steps: [
            {
                actions: [
                    a.addVertex('a', { x: 490, y: 80 }, 'a'),
                    a.addVertex('b', { x: 360, y: 170 }, 'b'),
                    a.addVertex('c', { x: 620, y: 180 }, 'c'),
                    a.addVertex('d', { x: 160, y: 390 }, 'd'),
                    a.addVertex('f', { x: 230, y: 280 }, 'f'),
                    a.addVertex('e', { x: 480, y: 270 }, 'e'),
                    a.addEdge('a-b', 'a', 'b'),
                    a.addEdge('a-c', 'a', 'c'),
                    a.addEdge('b-f', 'b', 'f'),
                    a.addEdge('f-d', 'f', 'd', undefined, undefined, undefined, true),
                    a.addEdge('b-e', 'b', 'e')
                ]
            },
            {
                actions: [
                    a.addHint('list-1', { x: 50, y: 50 }, [
                        'T = (V, E) je strom s alespoň dvěma vrcholy.  ',
                        bs.e({ tag: 'br' }),
                        'Z definice stromu plyne, že strom je souvislý graf. ',
                    ]),
                ]
            },
            {
                actions: [
                    a.removeHint('list-1'),
                    a.addHint('list-2', { x: 50, y: 50 }, [
                        'Dle definice souvislosti pro každé dva vrcholy stromu T ',
                        bs.e({ tag: 'br' }),
                        ' existuje cesta, která tyto vrcholy spojuje. ',
                    ]),
                    a.editVertex('c', undefined, 'y'),
                    a.editVertex('d', undefined, 'x'),
                    a.highlightVertex('c'),
                    a.highlightVertex('d')
                ]
            },
            {
                actions: [
                    a.removeHint('list-2'),
                    a.addHint('list-3', { x: 50, y: 50 }, [
                        'Označme Pmax = (v0, e1, v1, ..., vk) cestu ',
                        bs.e({ tag: 'br' }),
                        'maximální délky ve stromu T.',
                    ]),
                    a.editVertex('c', undefined, 'v0'),
                    a.editVertex('a', undefined, 'v1'),
                    a.editVertex('b', undefined, 'v2'),
                    a.editVertex('f', undefined, 'v3'),
                    a.editVertex('d', undefined, 'vk'),
                    a.highlightEdge('a-b', a.HighlightType.Full),
                    a.highlightEdge('a-c', a.HighlightType.Full),
                    a.highlightEdge('b-f', a.HighlightType.Full),
                    a.highlightEdge('f-d', a.HighlightType.Full, undefined, undefined, true),
                ]
            },
            {
                actions: [
                    a.removeHint('list-3'),
                    a.addHint('list-4', { x: 150, y: 90 }, [
                        'Tvrdíme, že vrchol v0 je list. ',
                        bs.e({ tag: 'br' }),
                        'Dokážeme sporem. ',
                        bs.e({ tag: 'br' }),
                        'Negace: vrchol v0 není list stromu T. ',
                    ]),
                    a.unHighlightVertex('d'),
                    a.unHighlightVertex('c'),
                    a.highlightVertex('c', undefined, colors.greenHighlight)
                ]
            },
            {
                actions: [
                    a.removeHint('list-4'),
                    a.addHint('list-5', { x: 150, y: 90 }, [
                        'Vrchol v0 je tudíž spojen hranou nejen s v1, ',
                        bs.e({ tag: 'br' }),
                        'ale alespoň s jedním dalším vrcholem v.',
                    ]),
                ]
            },
            {
                actions: [
                    a.removeHint('list-5'),
                    a.addHint('list-6', { x: 90, y: 90 }, [
                        '1. Jestliže v leží na Pmax, ',
                        bs.e({ tag: 'br' }),
                        'pak posloupnost tvoří kružnici ',
                        bs.e({ tag: 'br' }),
                        '- spor s předpokladem, že T je strom.',
                    ]),
                    a.editVertex('b', undefined, 'v'),
                    a.addEdge('c-b', 'c', 'b'),
                    a.highlightEdge('c-b', a.HighlightType.Full, undefined, colors.greenHighlight),
                ]
            },
            {
                actions: [
                    a.removeHint('list-6'),
                    a.addHint('list-7', { x: 90, y: 90 }, [
                        '2. Jestliže v neleží na Pmax, ',
                        bs.e({ tag: 'br' }),
                        'pak existuje ve stromu T cesta ',
                        bs.e({ tag: 'br' }),
                        'o jednu hranu delší než cesta Pmax ',
                        bs.e({ tag: 'br' }),
                        '- spor s předpokladem.'
                    ]),
                    a.unHighlightEdge('c-b', a.HighlightType.Full),
                    a.removeEdge('c-b'),
                    a.addVertex('v', { x: 760, y: 120 }, 'v'),
                    a.addEdge('c-v', 'c', 'v'),
                    a.highlightEdge('c-v', a.HighlightType.Full, undefined, colors.greenHighlight),
                ]
            },
            {
                actions: [
                    a.removeHint('list-7'),
                    a.addHint('list-8', { x: 90, y: 90 }, [
                        'Dokázali jsme, že vrchol v0 je list. ',
                        bs.e({ tag: 'br' }),
                        'Analogicky můžeme dokázat, že vrchol vk ',
                        bs.e({ tag: 'br' }),
                        'je list. '
                    ]),
                    a.removeVertex('v'),
                    a.unHighlightEdge('c-v', a.HighlightType.Full),
                    a.removeEdge('c-v')
                ]
            }
        ]
    }
]; };
});
R('vyrokovalogika/vyroky/vyroky',function(require, module, exports){
"use strict";
var b = require("bobril");
var bs = require("bobrilstrap");
exports.vyroky = b.createVirtualComponent({
    id: 'vyroky',
    render: function (ctx, me) {
        me.children = [
            bs.h2({}, 'Výroková logika DODĚLAT'),
            bs.paragraph({}, [bs.strong({}, ['Matematická věta']), ' je výrok o matematických objektech. Často je vyjádřena implikací: ',
                bs.e({ tag: 'br' }), bs.e({ tag: 'br' }),
                bs.panel({
                    body: bs.h4({}, [bs.em({}, 'Pro každé x \u2208 M platí: A(x) \u21D2 B(x)')]),
                    context: bs.PanelContext.Primary
                }),
                bs.strong({}, ['Axiom']), ' je elementární tvrzení, které považujeme za pravdivé bez důkazu.']),
            bs.h3({}, 'Obměněná věta'),
            bs.panel({
                body: bs.h4({}, [bs.em({}, 'Pro každé x \u2208 M platí: B\'(x) \u21D2 A\'(x)')]),
                context: bs.PanelContext.Primary
            }),
            bs.paragraph({}, 'Obměna má stejnou pravdivostní hodnotu jako původní věta.'),
            bs.h3({}, 'Obrácená věta'),
            bs.panel({
                body: bs.h4({}, [bs.em({}, 'Pro každé x \u2208 M platí: B(x) \u21D2 A(x)')]),
                context: bs.PanelContext.Primary
            }),
            bs.paragraph({}, 'Obrácená věta nemusí mít stejnou pravdivostní hodnotu jako původní věta.'),
            bs.h3({}, 'Negace věty'),
            bs.panel({
                body: bs.h4({}, [bs.em({}, 'Pro každé x \u2208 M platí: A(x) \u2227 B\'(x)')]),
                context: bs.PanelContext.Primary
            }),
            bs.paragraph({}, 'Negace má opačnou pravdivostní hodnotu než původní věta.')
        ];
    }
});
});
R('vyrokovalogika/negace/negace',function(require, module, exports){
"use strict";
var b = require("bobril");
var bs = require("bobrilstrap");
var a = require("../../viewer/actions");
var viewer_1 = require("../../viewer/viewer");
var colors = require("../../common/colors");
exports.negace = b.createVirtualComponent({
    id: 'negace',
    render: function (ctx, me) {
        me.children = [
            bs.h2({}, 'Negace'),
            bs.paragraph({}, ['Následují příklady negací výroků.',
                bs.e({ tag: 'br' }), bs.e({ tag: 'br' }),
                bs.paragraph({}, 'Negace má opačnou pravdivostní hodnotu než původní výrok. Výrok a jeho negace musí mít nulový průnik, zatímco jejich sjednocení dá celou reálnou osu.'),
                viewer_1.viewer({ examples: examples, cloud: false })
            ])
        ];
    }
});
var examples = function () { return [
    {
        name: 'negace-priklad-1',
        steps: [
            {
                actions: [
                    a.addHint('negace-1', { x: 280, y: 60 }, [
                        'Proveďte negaci:',
                        bs.e({ tag: 'br' }),
                        ' V batohu mám právě 3 čokolády.'
                    ], undefined, colors.blueHighlight),
                ]
            },
            {
                actions: [
                    // editHint('negace-1', { x: 280, y: 60 }, [
                    //     'Proveďte negaci:',
                    //     bs.e({ tag: 'br' }),
                    //     ' V batohu mám ', bs.underlined({}, 'právě'), ' 3 čokolády.',
                    // ]),
                    a.addAxis('axis'),
                    a.addEdge('edge-2', { x: 300, y: 225 }, { x: 300, y: 275 }),
                    a.addEdge('edge-4', { x: 500, y: 225 }, { x: 500, y: 275 }),
                    a.addText('whiteboard-1', { x: 390, y: 310 }, [
                        '3'
                    ]),
                    a.addText('whiteboard-2', { x: 290, y: 310 }, [
                        '2'
                    ]),
                    a.addText('whiteboard-4', { x: 490, y: 310 }, [
                        '4'
                    ]),
                ]
            },
            {
                actions: [
                    a.editHint('negace-1', undefined, [
                        'Proveďte negaci:',
                        bs.e({ tag: 'br' }),
                        ' V batohu mám ', bs.strong({}, bs.underlined({}, 'právě')), ' 3 čokolády.',
                    ]),
                    a.addVertex('3', { x: 400, y: 250 }, '', colors.blueHighlight, 5, colors.blueHighlightLight, false),
                    a.addImage('chocolate-31', { x: 330, y: 320 }, 90, 90),
                    a.addImage('chocolate-32', { x: 360, y: 320 }, 90, 90),
                    a.addImage('chocolate-33', { x: 390, y: 320 }, 90, 90)
                ]
            },
            {
                actions: [
                    a.removeHint('negace-1'),
                    a.addHint('negace-2', { x: 239, y: 15 }, [
                        'Jak provést negaci: ',
                        bs.e({ tag: 'br' }),
                        'kdy není pravdou výrok, že mám právě 3 čokolády?'
                    ], undefined, colors.redHighlight)
                ]
            },
            {
                actions: [
                    a.removeHint('negace-2'),
                    a.addHint('negace-8', { x: 239, y: 15 }, [
                        'Když mám méně než 3 čokolády - ',
                        bs.e({ tag: 'br' }),
                        'mohu mít 1 čokoládu, 0,5 čokolády, 2 čokolády...',
                    ], undefined, colors.redHighlight),
                    a.addHalfCircle('half-2', { x: 650, y: 125 }, true, colors.redHighlightLight, colors.redHighlight, 5, 1),
                    a.editVertex('3', undefined, undefined, colors.defaultBlack, 3, colors.defaultWhite, false),
                    a.removeItem('chocolate-31', function (scene) { return scene.images; }),
                    a.removeItem('chocolate-32', function (scene) { return scene.images; }),
                    a.removeItem('chocolate-33', function (scene) { return scene.images; }),
                    a.addImage('chocolate-21', { x: 130, y: 270 }, 90, 90),
                    a.addImage('chocolate-22', { x: 160, y: 270 }, 90, 90),
                ]
            },
            {
                actions: [
                    a.removeHint('negace-8'),
                    a.addHint('negace-3', { x: 264, y: 28 }, [
                        'Ale také mohu mít více než 3 čokolády - ',
                        bs.e({ tag: 'br' }),
                        '3,5 čokolády, 20 čokolád, 4 čokolády...',
                    ], undefined, colors.redHighlight),
                    a.addHalfCircle('half-1', { x: 720, y: 125 }, undefined, colors.redHighlightLight, colors.redHighlight, 5, 1),
                    a.addImage('chocolate-41', { x: 530, y: 270 }, 90, 90),
                    a.addImage('chocolate-42', { x: 560, y: 270 }, 90, 90),
                    a.addImage('chocolate-43', { x: 590, y: 270 }, 90, 90),
                    a.addImage('chocolate-44', { x: 620, y: 270 }, 90, 90),
                ]
            },
            {
                actions: [
                    a.removeHint('negace-3'),
                    a.addHint('negace-4', { x: 264, y: 28 }, [
                        'Negace výroku tedy zní:',
                        bs.e({ tag: 'br' }),
                        ' V batohu mám ', bs.strong({}, bs.underlined({}, 'méně nebo více než')), ' 3 čokolády.',
                    ], undefined, colors.redHighlight),
                ]
            },
            {
                actions: [
                    a.removeHint('negace-4'),
                    a.addHint('negace-5', { x: 280, y: 60 }, [
                        'Výrok a negace mají nulový průnik',
                        bs.e({ tag: 'br' }),
                        '(nemají žádné společné body)',
                    ], undefined, colors.redHighlight),
                    a.editVertex('3', undefined, undefined, colors.blueHighlight, 5, colors.blueHighlightLight, false),
                    a.addImage('chocolate-31', { x: 330, y: 320 }, 90, 90),
                    a.addImage('chocolate-32', { x: 360, y: 320 }, 90, 90),
                    a.addImage('chocolate-33', { x: 390, y: 320 }, 90, 90)
                ]
            },
            {
                actions: [
                    a.removeHint('negace-5'),
                    a.addHint('negace-6', { x: 280, y: 60 }, [
                        'Sjednocení výroku a jeho negace',
                        bs.e({ tag: 'br' }),
                        'pokryje celou osu (všechny body)',
                    ], undefined, colors.redHighlight),
                    a.editHalfCircle('half-1', { x: 720, y: 125 }, undefined, colors.purpleHighlightLight, colors.purpleHighlight, 5, 1),
                    a.editHalfCircle('half-2', { x: 650, y: 125 }, true, colors.purpleHighlightLight, colors.purpleHighlight, 5, 1),
                    a.editVertex('3', undefined, undefined, colors.purpleHighlight, 5, colors.purpleHighlightLight, false),
                ]
            }
        ]
    },
]; };
});
R('vyrokovalogika/vety/vety',function(require, module, exports){
"use strict";
var b = require("bobril");
var bs = require("bobrilstrap");
exports.vety = b.createVirtualComponent({
    id: 'vety',
    render: function (ctx, me) {
        me.children = [
            bs.h2({}, 'Výroková logika  DODĚLAT'),
            bs.paragraph({}, [bs.strong({}, ['Matematická věta']), ' je výrok o matematických objektech. Často je vyjádřena implikací: ',
                bs.e({ tag: 'br' }), bs.e({ tag: 'br' }),
                bs.panel({
                    body: bs.h4({}, [bs.em({}, 'Pro každé x \u2208 M platí: A(x) \u21D2 B(x)')]),
                    context: bs.PanelContext.Primary
                }),
                bs.strong({}, ['Axiom']), ' je elementární tvrzení, které považujeme za pravdivé bez důkazu.']),
            bs.h3({}, 'Obměněná věta'),
            bs.panel({
                body: bs.h4({}, [bs.em({}, 'Pro každé x \u2208 M platí: B\'(x) \u21D2 A\'(x)')]),
                context: bs.PanelContext.Primary
            }),
            bs.paragraph({}, 'Obměna má stejnou pravdivostní hodnotu jako původní věta.'),
            bs.h3({}, 'Obrácená věta'),
            bs.panel({
                body: bs.h4({}, [bs.em({}, 'Pro každé x \u2208 M platí: B(x) \u21D2 A(x)')]),
                context: bs.PanelContext.Primary
            }),
            bs.paragraph({}, 'Obrácená věta nemusí mít stejnou pravdivostní hodnotu jako původní věta.'),
            bs.h3({}, 'Negace věty'),
            bs.panel({
                body: bs.h4({}, [bs.em({}, 'Pro každé x \u2208 M platí: A(x) \u2227 B\'(x)')]),
                context: bs.PanelContext.Primary
            }),
            bs.paragraph({}, 'Negace má opačnou pravdivostní hodnotu než původní věta.')
        ];
    }
});
});
R('typydukazu/primo/primo',function(require, module, exports){
"use strict";
var b = require("bobril");
var bs = require("bobrilstrap");
var a = require("../../viewer/actions");
exports.primo = b.createVirtualComponent({
    id: 'primo',
    render: function (ctx, me) {
        me.children = [
            bs.h2({}, 'Důkaz přímo  DODĚLAT'),
            bs.h3({}, 'Tvrzení T'),
            bs.paragraph({}, 'Sestavíme konečný řetězec implikací:'),
            bs.panel({
                body: bs.h4({}, [bs.em({}, ['T', bs.sub({}, '1'), ' \u21D2 T', bs.sub({}, '2'), ' \u21D2 T', bs.sub({}, '3'), ' \u21D2 ... \u21D2 T', bs.sub({}, 'n'), ' \u21D2 T'])]),
                context: bs.PanelContext.Primary
            }),
            bs.paragraph({}, ['Kde T', bs.sub({}, '1'), ', … , T', bs.sub({}, 'n'), ' jsou axiómy nebo dokázaná tvrzení, '
                    + 'každé je logickým  důsledkem předchozího. Posledním členem je dokazované tvrzení T.']),
            bs.h3({}, 'Implikace A \u21D2 B'),
            bs.paragraph({}, 'Předpokládáme, že A platí, a sestavíme řetězec implikací:'),
            bs.panel({
                body: bs.h4({}, [bs.em({}, ['A \u21D2 B', bs.sub({}, '1'), ' \u21D2 B', bs.sub({}, '2'), ' \u21D2 ... \u21D2 B', bs.sub({}, 'n'), ' \u21D2 B'])]),
                context: bs.PanelContext.Primary
            }),
            bs.paragraph({}, ['kde B', bs.sub({}, '1'), ', … , B', bs.sub({}, 'n'), ' jsou axiómy nebo dokázaná tvrzení. '
                    + 'Vyjdeme z předpokladu implikace a přímým řetězcem implikací dojdeme k závěru.']),
        ];
    }
});
var examples = function () { return [
    {
        name: 'primo',
        steps: [
            {
                actions: [
                    a.addHint('primo-1', { x: 200, y: 200 }, [
                        'Dokažte: ',
                        bs.e({ tag: 'br' }),
                        'Pro všechna n \u2208 N platí: n', bs.sup({}, '2'), ' - 3n je dělitelné dvěma.',
                    ]),
                ]
            },
            {
                actions: [
                    a.removeHint('primo-1'),
                    a.addHint('primo-2', { x: 300, y: 30 }, [
                        '1. Pro n sudé:',
                        bs.e({ tag: 'br' }),
                        'n je dvojnásobek hodnoty k,',
                        bs.e({ tag: 'br' }),
                        'tj. tvrzení A je: n = 2k'
                    ]),
                    a.addWhiteboard('whiteboard-1', { x: 380, y: 200 }, [
                        'A'
                    ]),
                    a.addWhiteboard('whiteboard-2', { x: 350, y: 250 }, [
                        'n = 2k'
                    ])
                ]
            },
            {
                actions: [
                    a.removeHint('primo-2'),
                    a.addHint('primo-3', { x: 300, y: 30 }, [
                        'Ve výrazu dosadíme 2k za n.',
                        bs.e({ tag: 'br' }),
                        'Získáme tvrzení B', bs.sub({}, '1'), '.',
                    ]),
                    a.addWhiteboard('whiteboard-1', { x: 350, y: 200 }, [
                        'A \u21D2 B', bs.sub({}, '1'),
                    ]),
                    a.addWhiteboard('whiteboard-2', { x: 200, y: 250 }, [
                        'n = 2k \u21D2 n', bs.sup({}, '2'), ' - 3n = (2k)', bs.sup({}, '2'), ' - 3 \xB7 (2k)'
                    ])
                ]
            },
        ]
    },
]; };
});
R('typydukazu/neprimo/neprimo',function(require, module, exports){
"use strict";
var b = require("bobril");
var bs = require("bobrilstrap");
var a = require("../../viewer/actions");
var viewer_1 = require("../../viewer/viewer");
exports.neprimo = b.createVirtualComponent({
    id: 'neprimo',
    render: function (ctx, me) {
        me.children = [
            bs.h2({}, 'Věta 1.1 (Princip sudosti)'),
            bs.panel({
                body: bs.h4({}, ['Pro každý graf ', bs.em({}, 'G=(V, E)'), ' platí vztah ∑v∈V degG(v) = 2 · |E|.']),
                context: bs.PanelContext.Primary
            }),
            bs.paragraph({}, 'Máme daný graf G, který má množinu vrcholů V a množinu hran E. ' +
                'Součet stupňů všech vrcholů tohoto grafu se rovná dvojnásobnému počtu hran grafu. ' +
                'Každá hrana obsahuje dva vrcholy (jeden na každém konci), takže je v součtu stupňů ' +
                'započítána dvakrát. Když sečteme všechny stupně vrcholů, dostaneme dvojnásobek počtu hran.'),
            viewer_1.viewer({ examples: examples })
        ];
    }
});
var examples = function () { return [
    {
        name: 'veta11-obecne',
        steps: [
            {
                actions: [
                    a.addVertex('x', { x: 250, y: 250 }, 'x'),
                    a.addVertex('y', { x: 500, y: 170 }, 'y'),
                    a.addVertex('z', { x: 600, y: 350 }, ''),
                    a.addEdge('y-x', 'y', 'x'),
                    a.addEdge('y-z', 'y', 'z'),
                    a.addUnspecificGraph('a', { x: 150, y: 90 }, { x: 200, y: 180 }),
                    a.addUnspecificGraph('b', { x: 70, y: 400 }, { x: 180, y: 310 }),
                    a.addUnspecificGraph('c', { x: 640, y: 100 }, { x: 550, y: 140 }),
                    a.addUnspecificGraph('d', { x: 400, y: 350 }, { x: 500, y: 350 })
                ]
            },
            {
                actions: [
                    a.addHint('stupen-vrcholu-1', { x: 280, y: 50 }, [
                        'Stupeň vrcholu - počet hran,',
                        bs.e({ tag: 'br' }),
                        ' které z něj vychází. Vrchol y',
                        bs.e({ tag: 'br' }), ' je stupně 2.'
                    ]),
                    a.highlightVertex('y'),
                    a.highlightEdge('y-x', a.HighlightType.Start),
                    a.highlightEdge('y-z', a.HighlightType.Start)
                ]
            },
            {
                actions: [
                    a.removeHint('stupen-vrcholu-1'),
                    a.addHint('soucet-stupnu-vrcholu-1', { x: 230, y: 60 }, [
                        'Každá hrana má dva vrcholy, ',
                        bs.e({ tag: 'br' }),
                        'do součtu stupňů je tedy započítána 2x.'
                    ]),
                    a.unHighlightVertex('y'),
                    a.unHighlightEdge('y-x', a.HighlightType.Start),
                    a.unHighlightEdge('y-z', a.HighlightType.Start),
                    a.highlightEdge('y-x', a.HighlightType.Both)
                ]
            },
            {
                actions: [
                    a.removeHint('soucet-stupnu-vrcholu-1'),
                    a.addHint('soucet-hran-1', { x: 270, y: 40 }, 'Sečteme všechny hrany grafu.'),
                    a.unHighlightEdge('y-x', a.HighlightType.Both),
                    a.highlightEdge('y-x', a.HighlightType.Full),
                    a.highlightEdge('y-z', a.HighlightType.Full),
                ]
            },
            {
                actions: [
                    a.removeHint('soucet-hran-1'),
                    a.addHint('soucet-stupnu-vsech-vrcholu-1', { x: 250, y: 40 }, [
                        'Počet hran vynásobíme dvěma -',
                        bs.e({ tag: 'br' }),
                        ' vyjde součet stupňů všech vrcholů.'
                    ]),
                    a.unHighlightEdge('y-x', a.HighlightType.Full),
                    a.unHighlightEdge('y-z', a.HighlightType.Full),
                    a.highlightEdge('y-x', a.HighlightType.Both),
                    a.highlightEdge('y-z', a.HighlightType.Both)
                ]
            }
        ]
    },
    {
        name: 'veta11-tri-body',
        steps: [
            {
                actions: [
                    a.addVertex('a', { x: 400, y: 120 }, 'a'),
                    a.addVertex('b', { x: 550, y: 380 }, 'b'),
                    a.addVertex('c', { x: 250, y: 380 }, 'c'),
                    a.addEdge('a-b', 'a', 'b'),
                    a.addEdge('b-c', 'b', 'c'),
                    a.addEdge('c-a', 'c', 'a')
                ]
            },
            {
                actions: [
                    a.addHint('stupen-vrcholu-1', { x: 70, y: 170 }, [
                        'Stupeň vrcholu - počet hran,',
                        bs.e({ tag: 'br' }),
                        ' které z něj vychází. Vrchol c',
                        bs.e({ tag: 'br' }), ' je stupně 2.'
                    ]),
                    a.highlightVertex('c'),
                    a.highlightEdge('c-a', a.HighlightType.Start),
                    a.highlightEdge('b-c', a.HighlightType.End)
                ]
            },
            {
                actions: [
                    a.removeHint('stupen-vrcholu-1'),
                    a.addHint('soucet-stupnu-vrcholu-1', { x: 30, y: 170 }, [
                        'Každá hrana má dva vrcholy, ',
                        bs.e({ tag: 'br' }),
                        'do součtu stupňů je tedy započítána 2x.'
                    ]),
                    a.unHighlightVertex('c'),
                    a.unHighlightEdge('c-a', a.HighlightType.Start),
                    a.unHighlightEdge('b-c', a.HighlightType.End),
                    a.highlightEdge('c-a', a.HighlightType.Both)
                ]
            },
            {
                actions: [
                    a.removeHint('soucet-stupnu-vrcholu-1'),
                    a.addHint('soucet-hran-1', { x: 200, y: 20 }, 'Sečteme hrany - graf má tři hrany.'),
                    a.unHighlightEdge('c-a', a.HighlightType.Both),
                    a.highlightEdge('c-a', a.HighlightType.Full),
                    a.highlightEdge('b-c', a.HighlightType.Full),
                    a.highlightEdge('a-b', a.HighlightType.Full)
                ]
            },
            {
                actions: [
                    a.removeHint('soucet-hran-1'),
                    a.addHint('soucet-stupnu-vsech-vrcholu-1', { x: 220, y: 10 }, [
                        'Tři vynásobíme dvěma (hrana má dva vrcholy) -',
                        bs.e({ tag: 'br' }),
                        ' vyjde šest, což je součet stupňů všech vrcholů.'
                    ]),
                    a.unHighlightEdge('c-a', a.HighlightType.Full),
                    a.unHighlightEdge('b-c', a.HighlightType.Full),
                    a.unHighlightEdge('a-b', a.HighlightType.Full),
                    a.highlightEdge('c-a', a.HighlightType.Both),
                    a.highlightEdge('b-c', a.HighlightType.Both),
                    a.highlightEdge('a-b', a.HighlightType.Both)
                ]
            }
        ]
    },
    {
        name: 'veta11-ctyri-body',
        steps: [
            {
                actions: [
                    a.addVertex('a', { x: 250, y: 100 }, 'a'),
                    a.addVertex('b', { x: 550, y: 100 }, 'b'),
                    a.addVertex('c', { x: 550, y: 400 }, 'c'),
                    a.addVertex('d', { x: 250, y: 400 }, 'c'),
                    a.addEdge('a-b', 'a', 'b'),
                    a.addEdge('b-c', 'b', 'c'),
                    a.addEdge('c-d', 'c', 'd'),
                    a.addEdge('d-a', 'd', 'a'),
                    a.addEdge('a-c', 'a', 'c')
                ]
            },
            {
                actions: [
                    a.addHint('stupen-vrcholu-2', { x: 20, y: 20 }, [
                        'Stupeň vrcholu - počet hran,',
                        bs.e({ tag: 'br' }),
                        ' které z něj vychází. Vrchol a',
                        bs.e({ tag: 'br' }), ' je stupně 3.'
                    ]),
                    a.highlightVertex('a'),
                    a.highlightEdge('a-b', a.HighlightType.Start),
                    a.highlightEdge('a-c', a.HighlightType.Start),
                    a.highlightEdge('d-a', a.HighlightType.End)
                ]
            },
            {
                actions: [
                    a.removeHint('stupen-vrcholu-2'),
                    a.addHint('soucet-stupnu-vrcholu-2', { x: 30, y: 170 }, [
                        'Každá hrana má dva vrcholy,',
                        bs.e({ tag: 'br' }),
                        ' do součtu stupňů je tedy',
                        bs.e({ tag: 'br' }),
                        'započítána 2x.'
                    ]),
                    a.unHighlightVertex('a'),
                    a.unHighlightEdge('a-b', a.HighlightType.Start),
                    a.unHighlightEdge('a-c', a.HighlightType.Start),
                    a.unHighlightEdge('d-a', a.HighlightType.End),
                    a.highlightEdge('d-a', a.HighlightType.Both)
                ]
            },
            {
                actions: [
                    a.removeHint('soucet-stupnu-vrcholu-2'),
                    a.addHint('soucet-hran-2', { x: 200, y: 20 }, 'Sečteme hrany - graf má pět hran.'),
                    a.unHighlightEdge('d-a', a.HighlightType.Both),
                    a.highlightEdge('a-b', a.HighlightType.Full),
                    a.highlightEdge('b-c', a.HighlightType.Full),
                    a.highlightEdge('c-d', a.HighlightType.Full),
                    a.highlightEdge('d-a', a.HighlightType.Full),
                    a.highlightEdge('a-c', a.HighlightType.Full)
                ]
            },
            {
                actions: [
                    a.removeHint('soucet-hran-2'),
                    a.addHint('soucet-stupnu-vsech-vrcholu-1', { x: 220, y: 10 }, [
                        'Pět vynásobíme dvěma (hrana má dva vrcholy) -',
                        bs.e({ tag: 'br' }),
                        ' vyjde deset, což je součet stupňů všech vrcholů.'
                    ]),
                    a.unHighlightEdge('a-b', a.HighlightType.Full),
                    a.unHighlightEdge('b-c', a.HighlightType.Full),
                    a.unHighlightEdge('c-d', a.HighlightType.Full),
                    a.unHighlightEdge('d-a', a.HighlightType.Full),
                    a.unHighlightEdge('a-c', a.HighlightType.Full),
                    a.highlightEdge('a-b', a.HighlightType.Both),
                    a.highlightEdge('b-c', a.HighlightType.Both),
                    a.highlightEdge('c-d', a.HighlightType.Both),
                    a.highlightEdge('d-a', a.HighlightType.Both),
                    a.highlightEdge('a-c', a.HighlightType.Both)
                ]
            }
        ]
    }
]; };
});
R('typydukazu/sporem/sporem',function(require, module, exports){
"use strict";
var b = require("bobril");
var bs = require("bobrilstrap");
var a = require("../../viewer/actions");
var viewer_1 = require("../../viewer/viewer");
exports.sporem = b.createVirtualComponent({
    id: 'sporem',
    render: function (ctx, me) {
        me.children = [
            bs.h2({}, 'Věta 1.1 (Princip sudosti)'),
            bs.panel({
                body: bs.h4({}, ['Pro každý graf ', bs.em({}, 'G=(V, E)'), ' platí vztah ∑v∈V degG(v) = 2 · |E|.']),
                context: bs.PanelContext.Primary
            }),
            bs.paragraph({}, 'Máme daný graf G, který má množinu vrcholů V a množinu hran E. ' +
                'Součet stupňů všech vrcholů tohoto grafu se rovná dvojnásobnému počtu hran grafu. ' +
                'Každá hrana obsahuje dva vrcholy (jeden na každém konci), takže je v součtu stupňů ' +
                'započítána dvakrát. Když sečteme všechny stupně vrcholů, dostaneme dvojnásobek počtu hran.'),
            viewer_1.viewer({ examples: examples })
        ];
    }
});
var examples = function () { return [
    {
        name: 'veta11-obecne',
        steps: [
            {
                actions: [
                    a.addVertex('x', { x: 250, y: 250 }, 'x'),
                    a.addVertex('y', { x: 500, y: 170 }, 'y'),
                    a.addVertex('z', { x: 600, y: 350 }, ''),
                    a.addEdge('y-x', 'y', 'x'),
                    a.addEdge('y-z', 'y', 'z'),
                    a.addUnspecificGraph('a', { x: 150, y: 90 }, { x: 200, y: 180 }),
                    a.addUnspecificGraph('b', { x: 70, y: 400 }, { x: 180, y: 310 }),
                    a.addUnspecificGraph('c', { x: 640, y: 100 }, { x: 550, y: 140 }),
                    a.addUnspecificGraph('d', { x: 400, y: 350 }, { x: 500, y: 350 })
                ]
            },
            {
                actions: [
                    a.addHint('stupen-vrcholu-1', { x: 280, y: 50 }, [
                        'Stupeň vrcholu - počet hran,',
                        bs.e({ tag: 'br' }),
                        ' které z něj vychází. Vrchol y',
                        bs.e({ tag: 'br' }), ' je stupně 2.'
                    ]),
                    a.highlightVertex('y'),
                    a.highlightEdge('y-x', a.HighlightType.Start),
                    a.highlightEdge('y-z', a.HighlightType.Start)
                ]
            },
            {
                actions: [
                    a.removeHint('stupen-vrcholu-1'),
                    a.addHint('soucet-stupnu-vrcholu-1', { x: 230, y: 60 }, [
                        'Každá hrana má dva vrcholy, ',
                        bs.e({ tag: 'br' }),
                        'do součtu stupňů je tedy započítána 2x.'
                    ]),
                    a.unHighlightVertex('y'),
                    a.unHighlightEdge('y-x', a.HighlightType.Start),
                    a.unHighlightEdge('y-z', a.HighlightType.Start),
                    a.highlightEdge('y-x', a.HighlightType.Both)
                ]
            },
            {
                actions: [
                    a.removeHint('soucet-stupnu-vrcholu-1'),
                    a.addHint('soucet-hran-1', { x: 270, y: 40 }, 'Sečteme všechny hrany grafu.'),
                    a.unHighlightEdge('y-x', a.HighlightType.Both),
                    a.highlightEdge('y-x', a.HighlightType.Full),
                    a.highlightEdge('y-z', a.HighlightType.Full),
                ]
            },
            {
                actions: [
                    a.removeHint('soucet-hran-1'),
                    a.addHint('soucet-stupnu-vsech-vrcholu-1', { x: 250, y: 40 }, [
                        'Počet hran vynásobíme dvěma -',
                        bs.e({ tag: 'br' }),
                        ' vyjde součet stupňů všech vrcholů.'
                    ]),
                    a.unHighlightEdge('y-x', a.HighlightType.Full),
                    a.unHighlightEdge('y-z', a.HighlightType.Full),
                    a.highlightEdge('y-x', a.HighlightType.Both),
                    a.highlightEdge('y-z', a.HighlightType.Both)
                ]
            }
        ]
    },
    {
        name: 'veta11-tri-body',
        steps: [
            {
                actions: [
                    a.addVertex('a', { x: 400, y: 120 }, 'a'),
                    a.addVertex('b', { x: 550, y: 380 }, 'b'),
                    a.addVertex('c', { x: 250, y: 380 }, 'c'),
                    a.addEdge('a-b', 'a', 'b'),
                    a.addEdge('b-c', 'b', 'c'),
                    a.addEdge('c-a', 'c', 'a')
                ]
            },
            {
                actions: [
                    a.addHint('stupen-vrcholu-1', { x: 70, y: 170 }, [
                        'Stupeň vrcholu - počet hran,',
                        bs.e({ tag: 'br' }),
                        ' které z něj vychází. Vrchol c',
                        bs.e({ tag: 'br' }), ' je stupně 2.'
                    ]),
                    a.highlightVertex('c'),
                    a.highlightEdge('c-a', a.HighlightType.Start),
                    a.highlightEdge('b-c', a.HighlightType.End)
                ]
            },
            {
                actions: [
                    a.removeHint('stupen-vrcholu-1'),
                    a.addHint('soucet-stupnu-vrcholu-1', { x: 30, y: 170 }, [
                        'Každá hrana má dva vrcholy, ',
                        bs.e({ tag: 'br' }),
                        'do součtu stupňů je tedy započítána 2x.'
                    ]),
                    a.unHighlightVertex('c'),
                    a.unHighlightEdge('c-a', a.HighlightType.Start),
                    a.unHighlightEdge('b-c', a.HighlightType.End),
                    a.highlightEdge('c-a', a.HighlightType.Both)
                ]
            },
            {
                actions: [
                    a.removeHint('soucet-stupnu-vrcholu-1'),
                    a.addHint('soucet-hran-1', { x: 200, y: 20 }, 'Sečteme hrany - graf má tři hrany.'),
                    a.unHighlightEdge('c-a', a.HighlightType.Both),
                    a.highlightEdge('c-a', a.HighlightType.Full),
                    a.highlightEdge('b-c', a.HighlightType.Full),
                    a.highlightEdge('a-b', a.HighlightType.Full)
                ]
            },
            {
                actions: [
                    a.removeHint('soucet-hran-1'),
                    a.addHint('soucet-stupnu-vsech-vrcholu-1', { x: 220, y: 10 }, [
                        'Tři vynásobíme dvěma (hrana má dva vrcholy) -',
                        bs.e({ tag: 'br' }),
                        ' vyjde šest, což je součet stupňů všech vrcholů.'
                    ]),
                    a.unHighlightEdge('c-a', a.HighlightType.Full),
                    a.unHighlightEdge('b-c', a.HighlightType.Full),
                    a.unHighlightEdge('a-b', a.HighlightType.Full),
                    a.highlightEdge('c-a', a.HighlightType.Both),
                    a.highlightEdge('b-c', a.HighlightType.Both),
                    a.highlightEdge('a-b', a.HighlightType.Both)
                ]
            }
        ]
    },
    {
        name: 'veta11-ctyri-body',
        steps: [
            {
                actions: [
                    a.addVertex('a', { x: 250, y: 100 }, 'a'),
                    a.addVertex('b', { x: 550, y: 100 }, 'b'),
                    a.addVertex('c', { x: 550, y: 400 }, 'c'),
                    a.addVertex('d', { x: 250, y: 400 }, 'c'),
                    a.addEdge('a-b', 'a', 'b'),
                    a.addEdge('b-c', 'b', 'c'),
                    a.addEdge('c-d', 'c', 'd'),
                    a.addEdge('d-a', 'd', 'a'),
                    a.addEdge('a-c', 'a', 'c')
                ]
            },
            {
                actions: [
                    a.addHint('stupen-vrcholu-2', { x: 20, y: 20 }, [
                        'Stupeň vrcholu - počet hran,',
                        bs.e({ tag: 'br' }),
                        ' které z něj vychází. Vrchol a',
                        bs.e({ tag: 'br' }), ' je stupně 3.'
                    ]),
                    a.highlightVertex('a'),
                    a.highlightEdge('a-b', a.HighlightType.Start),
                    a.highlightEdge('a-c', a.HighlightType.Start),
                    a.highlightEdge('d-a', a.HighlightType.End)
                ]
            },
            {
                actions: [
                    a.removeHint('stupen-vrcholu-2'),
                    a.addHint('soucet-stupnu-vrcholu-2', { x: 30, y: 170 }, [
                        'Každá hrana má dva vrcholy,',
                        bs.e({ tag: 'br' }),
                        ' do součtu stupňů je tedy',
                        bs.e({ tag: 'br' }),
                        'započítána 2x.'
                    ]),
                    a.unHighlightVertex('a'),
                    a.unHighlightEdge('a-b', a.HighlightType.Start),
                    a.unHighlightEdge('a-c', a.HighlightType.Start),
                    a.unHighlightEdge('d-a', a.HighlightType.End),
                    a.highlightEdge('d-a', a.HighlightType.Both)
                ]
            },
            {
                actions: [
                    a.removeHint('soucet-stupnu-vrcholu-2'),
                    a.addHint('soucet-hran-2', { x: 200, y: 20 }, 'Sečteme hrany - graf má pět hran.'),
                    a.unHighlightEdge('d-a', a.HighlightType.Both),
                    a.highlightEdge('a-b', a.HighlightType.Full),
                    a.highlightEdge('b-c', a.HighlightType.Full),
                    a.highlightEdge('c-d', a.HighlightType.Full),
                    a.highlightEdge('d-a', a.HighlightType.Full),
                    a.highlightEdge('a-c', a.HighlightType.Full)
                ]
            },
            {
                actions: [
                    a.removeHint('soucet-hran-2'),
                    a.addHint('soucet-stupnu-vsech-vrcholu-1', { x: 220, y: 10 }, [
                        'Pět vynásobíme dvěma (hrana má dva vrcholy) -',
                        bs.e({ tag: 'br' }),
                        ' vyjde deset, což je součet stupňů všech vrcholů.'
                    ]),
                    a.unHighlightEdge('a-b', a.HighlightType.Full),
                    a.unHighlightEdge('b-c', a.HighlightType.Full),
                    a.unHighlightEdge('c-d', a.HighlightType.Full),
                    a.unHighlightEdge('d-a', a.HighlightType.Full),
                    a.unHighlightEdge('a-c', a.HighlightType.Full),
                    a.highlightEdge('a-b', a.HighlightType.Both),
                    a.highlightEdge('b-c', a.HighlightType.Both),
                    a.highlightEdge('c-d', a.HighlightType.Both),
                    a.highlightEdge('d-a', a.HighlightType.Both),
                    a.highlightEdge('a-c', a.HighlightType.Both)
                ]
            }
        ]
    }
]; };
});
R('typydukazu/indukci/indukci',function(require, module, exports){
"use strict";
var b = require("bobril");
var bs = require("bobrilstrap");
var a = require("../../viewer/actions");
var viewer_1 = require("../../viewer/viewer");
exports.indukci = b.createVirtualComponent({
    id: 'indukci',
    render: function (ctx, me) {
        me.children = [
            bs.h2({}, 'Věta 1.1 (Princip sudosti)'),
            bs.panel({
                body: bs.h4({}, ['Pro každý graf ', bs.em({}, 'G=(V, E)'), ' platí vztah ∑v∈V degG(v) = 2 · |E|.']),
                context: bs.PanelContext.Primary
            }),
            bs.paragraph({}, 'Máme daný graf G, který má množinu vrcholů V a množinu hran E. ' +
                'Součet stupňů všech vrcholů tohoto grafu se rovná dvojnásobnému počtu hran grafu. ' +
                'Každá hrana obsahuje dva vrcholy (jeden na každém konci), takže je v součtu stupňů ' +
                'započítána dvakrát. Když sečteme všechny stupně vrcholů, dostaneme dvojnásobek počtu hran.'),
            viewer_1.viewer({ examples: examples })
        ];
    }
});
var examples = function () { return [
    {
        name: 'veta11-obecne',
        steps: [
            {
                actions: [
                    a.addVertex('x', { x: 250, y: 250 }, 'x'),
                    a.addVertex('y', { x: 500, y: 170 }, 'y'),
                    a.addVertex('z', { x: 600, y: 350 }, ''),
                    a.addEdge('y-x', 'y', 'x'),
                    a.addEdge('y-z', 'y', 'z'),
                    a.addUnspecificGraph('a', { x: 150, y: 90 }, { x: 200, y: 180 }),
                    a.addUnspecificGraph('b', { x: 70, y: 400 }, { x: 180, y: 310 }),
                    a.addUnspecificGraph('c', { x: 640, y: 100 }, { x: 550, y: 140 }),
                    a.addUnspecificGraph('d', { x: 400, y: 350 }, { x: 500, y: 350 })
                ]
            },
            {
                actions: [
                    a.addHint('stupen-vrcholu-1', { x: 280, y: 50 }, [
                        'Stupeň vrcholu - počet hran,',
                        bs.e({ tag: 'br' }),
                        ' které z něj vychází. Vrchol y',
                        bs.e({ tag: 'br' }), ' je stupně 2.'
                    ]),
                    a.highlightVertex('y'),
                    a.highlightEdge('y-x', a.HighlightType.Start),
                    a.highlightEdge('y-z', a.HighlightType.Start)
                ]
            },
            {
                actions: [
                    a.removeHint('stupen-vrcholu-1'),
                    a.addHint('soucet-stupnu-vrcholu-1', { x: 230, y: 60 }, [
                        'Každá hrana má dva vrcholy, ',
                        bs.e({ tag: 'br' }),
                        'do součtu stupňů je tedy započítána 2x.'
                    ]),
                    a.unHighlightVertex('y'),
                    a.unHighlightEdge('y-x', a.HighlightType.Start),
                    a.unHighlightEdge('y-z', a.HighlightType.Start),
                    a.highlightEdge('y-x', a.HighlightType.Both)
                ]
            },
            {
                actions: [
                    a.removeHint('soucet-stupnu-vrcholu-1'),
                    a.addHint('soucet-hran-1', { x: 270, y: 40 }, 'Sečteme všechny hrany grafu.'),
                    a.unHighlightEdge('y-x', a.HighlightType.Both),
                    a.highlightEdge('y-x', a.HighlightType.Full),
                    a.highlightEdge('y-z', a.HighlightType.Full),
                ]
            },
            {
                actions: [
                    a.removeHint('soucet-hran-1'),
                    a.addHint('soucet-stupnu-vsech-vrcholu-1', { x: 250, y: 40 }, [
                        'Počet hran vynásobíme dvěma -',
                        bs.e({ tag: 'br' }),
                        ' vyjde součet stupňů všech vrcholů.'
                    ]),
                    a.unHighlightEdge('y-x', a.HighlightType.Full),
                    a.unHighlightEdge('y-z', a.HighlightType.Full),
                    a.highlightEdge('y-x', a.HighlightType.Both),
                    a.highlightEdge('y-z', a.HighlightType.Both)
                ]
            }
        ]
    },
    {
        name: 'veta11-tri-body',
        steps: [
            {
                actions: [
                    a.addVertex('a', { x: 400, y: 120 }, 'a'),
                    a.addVertex('b', { x: 550, y: 380 }, 'b'),
                    a.addVertex('c', { x: 250, y: 380 }, 'c'),
                    a.addEdge('a-b', 'a', 'b'),
                    a.addEdge('b-c', 'b', 'c'),
                    a.addEdge('c-a', 'c', 'a')
                ]
            },
            {
                actions: [
                    a.addHint('stupen-vrcholu-1', { x: 70, y: 170 }, [
                        'Stupeň vrcholu - počet hran,',
                        bs.e({ tag: 'br' }),
                        ' které z něj vychází. Vrchol c',
                        bs.e({ tag: 'br' }), ' je stupně 2.'
                    ]),
                    a.highlightVertex('c'),
                    a.highlightEdge('c-a', a.HighlightType.Start),
                    a.highlightEdge('b-c', a.HighlightType.End)
                ]
            },
            {
                actions: [
                    a.removeHint('stupen-vrcholu-1'),
                    a.addHint('soucet-stupnu-vrcholu-1', { x: 30, y: 170 }, [
                        'Každá hrana má dva vrcholy, ',
                        bs.e({ tag: 'br' }),
                        'do součtu stupňů je tedy započítána 2x.'
                    ]),
                    a.unHighlightVertex('c'),
                    a.unHighlightEdge('c-a', a.HighlightType.Start),
                    a.unHighlightEdge('b-c', a.HighlightType.End),
                    a.highlightEdge('c-a', a.HighlightType.Both)
                ]
            },
            {
                actions: [
                    a.removeHint('soucet-stupnu-vrcholu-1'),
                    a.addHint('soucet-hran-1', { x: 200, y: 20 }, 'Sečteme hrany - graf má tři hrany.'),
                    a.unHighlightEdge('c-a', a.HighlightType.Both),
                    a.highlightEdge('c-a', a.HighlightType.Full),
                    a.highlightEdge('b-c', a.HighlightType.Full),
                    a.highlightEdge('a-b', a.HighlightType.Full)
                ]
            },
            {
                actions: [
                    a.removeHint('soucet-hran-1'),
                    a.addHint('soucet-stupnu-vsech-vrcholu-1', { x: 220, y: 10 }, [
                        'Tři vynásobíme dvěma (hrana má dva vrcholy) -',
                        bs.e({ tag: 'br' }),
                        ' vyjde šest, což je součet stupňů všech vrcholů.'
                    ]),
                    a.unHighlightEdge('c-a', a.HighlightType.Full),
                    a.unHighlightEdge('b-c', a.HighlightType.Full),
                    a.unHighlightEdge('a-b', a.HighlightType.Full),
                    a.highlightEdge('c-a', a.HighlightType.Both),
                    a.highlightEdge('b-c', a.HighlightType.Both),
                    a.highlightEdge('a-b', a.HighlightType.Both)
                ]
            }
        ]
    },
    {
        name: 'veta11-ctyri-body',
        steps: [
            {
                actions: [
                    a.addVertex('a', { x: 250, y: 100 }, 'a'),
                    a.addVertex('b', { x: 550, y: 100 }, 'b'),
                    a.addVertex('c', { x: 550, y: 400 }, 'c'),
                    a.addVertex('d', { x: 250, y: 400 }, 'c'),
                    a.addEdge('a-b', 'a', 'b'),
                    a.addEdge('b-c', 'b', 'c'),
                    a.addEdge('c-d', 'c', 'd'),
                    a.addEdge('d-a', 'd', 'a'),
                    a.addEdge('a-c', 'a', 'c')
                ]
            },
            {
                actions: [
                    a.addHint('stupen-vrcholu-2', { x: 20, y: 20 }, [
                        'Stupeň vrcholu - počet hran,',
                        bs.e({ tag: 'br' }),
                        ' které z něj vychází. Vrchol a',
                        bs.e({ tag: 'br' }), ' je stupně 3.'
                    ]),
                    a.highlightVertex('a'),
                    a.highlightEdge('a-b', a.HighlightType.Start),
                    a.highlightEdge('a-c', a.HighlightType.Start),
                    a.highlightEdge('d-a', a.HighlightType.End)
                ]
            },
            {
                actions: [
                    a.removeHint('stupen-vrcholu-2'),
                    a.addHint('soucet-stupnu-vrcholu-2', { x: 30, y: 170 }, [
                        'Každá hrana má dva vrcholy,',
                        bs.e({ tag: 'br' }),
                        ' do součtu stupňů je tedy',
                        bs.e({ tag: 'br' }),
                        'započítána 2x.'
                    ]),
                    a.unHighlightVertex('a'),
                    a.unHighlightEdge('a-b', a.HighlightType.Start),
                    a.unHighlightEdge('a-c', a.HighlightType.Start),
                    a.unHighlightEdge('d-a', a.HighlightType.End),
                    a.highlightEdge('d-a', a.HighlightType.Both)
                ]
            },
            {
                actions: [
                    a.removeHint('soucet-stupnu-vrcholu-2'),
                    a.addHint('soucet-hran-2', { x: 200, y: 20 }, 'Sečteme hrany - graf má pět hran.'),
                    a.unHighlightEdge('d-a', a.HighlightType.Both),
                    a.highlightEdge('a-b', a.HighlightType.Full),
                    a.highlightEdge('b-c', a.HighlightType.Full),
                    a.highlightEdge('c-d', a.HighlightType.Full),
                    a.highlightEdge('d-a', a.HighlightType.Full),
                    a.highlightEdge('a-c', a.HighlightType.Full)
                ]
            },
            {
                actions: [
                    a.removeHint('soucet-hran-2'),
                    a.addHint('soucet-stupnu-vsech-vrcholu-1', { x: 220, y: 10 }, [
                        'Pět vynásobíme dvěma (hrana má dva vrcholy) -',
                        bs.e({ tag: 'br' }),
                        ' vyjde deset, což je součet stupňů všech vrcholů.'
                    ]),
                    a.unHighlightEdge('a-b', a.HighlightType.Full),
                    a.unHighlightEdge('b-c', a.HighlightType.Full),
                    a.unHighlightEdge('c-d', a.HighlightType.Full),
                    a.unHighlightEdge('d-a', a.HighlightType.Full),
                    a.unHighlightEdge('a-c', a.HighlightType.Full),
                    a.highlightEdge('a-b', a.HighlightType.Both),
                    a.highlightEdge('b-c', a.HighlightType.Both),
                    a.highlightEdge('c-d', a.HighlightType.Both),
                    a.highlightEdge('d-a', a.HighlightType.Both),
                    a.highlightEdge('a-c', a.HighlightType.Both)
                ]
            }
        ]
    }
]; };
});
R('index',function(require, module, exports){
"use strict";
var b = require("bobril");
var bs = require("bobrilstrap");
var theme = require("./theme/init");
var mainPage_1 = require("./main/mainPage");
var uvod_1 = require("./main/uvod");
//import { veta11 as veta11old } from './zakladniPojmy/veta11old/veta11';
var veta11_1 = require("./zakladniPojmy/veta11/veta11");
var tvrzeni11_1 = require("./zakladniPojmy/tvrzeni11/tvrzeni11");
var tvrzeni12_1 = require("./zakladniPojmy/tvrzeni12/tvrzeni12");
var veta22_1 = require("./typyGrafu/veta22/veta22");
var tvrzeni41_1 = require("./stromy/tvrzeni41/tvrzeni41");
var vyroky_1 = require("./vyrokovaLogika/vyroky/vyroky");
var negace_1 = require("./vyrokovaLogika/negace/negace");
var vety_1 = require("./vyrokovaLogika/vety/vety");
var primo_1 = require("./typyDukazu/primo/primo");
var neprimo_1 = require("./typyDukazu/neprimo/neprimo");
var sporem_1 = require("./typyDukazu/sporem/sporem");
var indukci_1 = require("./typyDukazu/indukci/indukci");
bs.init();
theme.init();
document.title = 'Důkazy z teorie grafů';
b.routes(b.route({ handler: mainPage_1.mainPage }, [
    // b.route({ url: '/veta11old', name: 'veta11old', handler: veta11old }),
    b.route({ url: '/veta11', name: 'veta11', handler: veta11_1.veta11 }),
    b.route({ url: '/tvrzeni11', name: 'tvrzeni11', handler: tvrzeni11_1.tvrzeni11 }),
    b.route({ url: '/tvrzeni12', name: 'tvrzeni12', handler: tvrzeni12_1.tvrzeni12 }),
    b.route({ url: '/veta22', name: 'veta22', handler: veta22_1.veta22 }),
    b.route({ url: '/tvrzeni41', name: 'tvrzeni41', handler: tvrzeni41_1.tvrzeni41 }),
    b.route({ url: '/vyroky', name: 'vyroky', handler: vyroky_1.vyroky }),
    b.route({ url: '/negace', name: 'negace', handler: negace_1.negace }),
    b.route({ url: '/vety', name: 'vety', handler: vety_1.vety }),
    b.route({ url: '/primo', name: 'primo', handler: primo_1.primo }),
    b.route({ url: '/primo', name: 'neprimo', handler: neprimo_1.neprimo }),
    b.route({ url: '/primo', name: 'sporem', handler: sporem_1.sporem }),
    b.route({ url: '/primo', name: 'indukci', handler: indukci_1.indukci }),
    b.routeDefault({ handler: uvod_1.uvod })
]));
});
//# sourceMappingURL=bundle.js.map
