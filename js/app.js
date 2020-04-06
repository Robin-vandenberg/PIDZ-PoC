/*! jQuery v2.2.4 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="2.2.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isPlainObject:function(a){var b;if("object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype||{},"isPrototypeOf"))return!1;for(b in a);return void 0===b||k.call(a,b)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=d.createElement("script"),b.text=a,d.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:h.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(d=e.call(arguments,2),f=function(){return a.apply(b||this,d.concat(e.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return h.call(b,a)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&f.parentNode&&(this.length=1,this[0]=f),this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?void 0!==c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?h.call(n(a),this[0]):h.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||n.uniqueSort(e),D.test(a)&&e.reverse()),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.removeEventListener("DOMContentLoaded",J),a.removeEventListener("load",J),n.ready()}n.ready.promise=function(b){return I||(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(n.ready):(d.addEventListener("DOMContentLoaded",J),a.addEventListener("load",J))),I.promise(b)},n.ready.promise();var K=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)K(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},L=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function M(){this.expando=n.expando+M.uid++}M.uid=1,M.prototype={register:function(a,b){var c=b||{};return a.nodeType?a[this.expando]=c:Object.defineProperty(a,this.expando,{value:c,writable:!0,configurable:!0}),a[this.expando]},cache:function(a){if(!L(a))return{};var b=a[this.expando];return b||(b={},L(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[b]=c;else for(d in b)e[d]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=a[this.expando];if(void 0!==f){if(void 0===b)this.register(a);else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in f?d=[b,e]:(d=e,d=d in f?[d]:d.match(G)||[])),c=d.length;while(c--)delete f[d[c]]}(void 0===b||n.isEmptyObject(f))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!n.isEmptyObject(b)}};var N=new M,O=new M,P=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Q=/[A-Z]/g;function R(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Q,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:P.test(c)?n.parseJSON(c):c;
}catch(e){}O.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return O.hasData(a)||N.hasData(a)},data:function(a,b,c){return O.access(a,b,c)},removeData:function(a,b){O.remove(a,b)},_data:function(a,b,c){return N.access(a,b,c)},_removeData:function(a,b){N.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=O.get(f),1===f.nodeType&&!N.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),R(f,d,e[d])));N.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){O.set(this,a)}):K(this,function(b){var c,d;if(f&&void 0===b){if(c=O.get(f,a)||O.get(f,a.replace(Q,"-$&").toLowerCase()),void 0!==c)return c;if(d=n.camelCase(a),c=O.get(f,d),void 0!==c)return c;if(c=R(f,d,void 0),void 0!==c)return c}else d=n.camelCase(a),this.each(function(){var c=O.get(this,d);O.set(this,d,b),a.indexOf("-")>-1&&void 0!==c&&O.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){O.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=N.get(a,b),c&&(!d||n.isArray(c)?d=N.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return N.get(a,c)||N.access(a,c,{empty:n.Callbacks("once memory").add(function(){N.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=N.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function W(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&T.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var X=/^(?:checkbox|radio)$/i,Y=/<([\w:-]+)/,Z=/^$|\/(?:java|ecma)script/i,$={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};$.optgroup=$.option,$.tbody=$.tfoot=$.colgroup=$.caption=$.thead,$.th=$.td;function _(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function aa(a,b){for(var c=0,d=a.length;d>c;c++)N.set(a[c],"globalEval",!b||N.get(b[c],"globalEval"))}var ba=/<|&#?\w+;/;function ca(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],o=0,p=a.length;p>o;o++)if(f=a[o],f||0===f)if("object"===n.type(f))n.merge(m,f.nodeType?[f]:f);else if(ba.test(f)){g=g||l.appendChild(b.createElement("div")),h=(Y.exec(f)||["",""])[1].toLowerCase(),i=$[h]||$._default,g.innerHTML=i[1]+n.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;n.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",o=0;while(f=m[o++])if(d&&n.inArray(f,d)>-1)e&&e.push(f);else if(j=n.contains(f.ownerDocument,f),g=_(l.appendChild(f),"script"),j&&aa(g),c){k=0;while(f=g[k++])Z.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var da=/^key/,ea=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,fa=/^([^.]*)(?:\.(.+)|)/;function ga(){return!0}function ha(){return!1}function ia(){try{return d.activeElement}catch(a){}}function ja(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ja(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ha;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return"undefined"!=typeof n&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(G)||[""],j=b.length;while(j--)h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.hasData(a)&&N.get(a);if(r&&(i=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&N.remove(a,"handle events")}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(N.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||d,e=c.documentElement,f=c.body,a.pageX=b.clientX+(e&&e.scrollLeft||f&&f.scrollLeft||0)-(e&&e.clientLeft||f&&f.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||f&&f.scrollTop||0)-(e&&e.clientTop||f&&f.clientTop||0)),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ea.test(f)?this.mouseHooks:da.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=d),3===a.target.nodeType&&(a.target=a.target.parentNode),h.filter?h.filter(a,g):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==ia()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===ia()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ga:ha):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:ha,isPropagationStopped:ha,isImmediatePropagationStopped:ha,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ga,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ga,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ga,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),n.fn.extend({on:function(a,b,c,d){return ja(this,a,b,c,d)},one:function(a,b,c,d){return ja(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=ha),this.each(function(){n.event.remove(this,a,c,b)})}});var ka=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,la=/<script|<style|<link/i,ma=/checked\s*(?:[^=]|=\s*.checked.)/i,na=/^true\/(.*)/,oa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function pa(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function qa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function ra(a){var b=na.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function sa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(N.hasData(a)&&(f=N.access(a),g=N.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}O.hasData(a)&&(h=O.access(a),i=n.extend({},h),O.set(b,i))}}function ta(a,b){var c=b.nodeName.toLowerCase();"input"===c&&X.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function ua(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&ma.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),ua(f,b,c,d)});if(o&&(e=ca(b,a[0].ownerDocument,!1,a,d),g=e.firstChild,1===e.childNodes.length&&(e=g),g||d)){for(h=n.map(_(e,"script"),qa),i=h.length;o>m;m++)j=e,m!==p&&(j=n.clone(j,!0,!0),i&&n.merge(h,_(j,"script"))),c.call(a[m],j,m);if(i)for(k=h[h.length-1].ownerDocument,n.map(h,ra),m=0;i>m;m++)j=h[m],Z.test(j.type||"")&&!N.access(j,"globalEval")&&n.contains(k,j)&&(j.src?n._evalUrl&&n._evalUrl(j.src):n.globalEval(j.textContent.replace(oa,"")))}return a}function va(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(_(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&aa(_(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(ka,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=_(h),f=_(a),d=0,e=f.length;e>d;d++)ta(f[d],g[d]);if(b)if(c)for(f=f||_(a),g=g||_(h),d=0,e=f.length;e>d;d++)sa(f[d],g[d]);else sa(a,h);return g=_(h,"script"),g.length>0&&aa(g,!i&&_(a,"script")),h},cleanData:function(a){for(var b,c,d,e=n.event.special,f=0;void 0!==(c=a[f]);f++)if(L(c)){if(b=c[N.expando]){if(b.events)for(d in b.events)e[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);c[N.expando]=void 0}c[O.expando]&&(c[O.expando]=void 0)}}}),n.fn.extend({domManip:ua,detach:function(a){return va(this,a,!0)},remove:function(a){return va(this,a)},text:function(a){return K(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.appendChild(a)}})},prepend:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(_(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return K(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!la.test(a)&&!$[(Y.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(_(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return ua(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(_(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),f=e.length-1,h=0;f>=h;h++)c=h===f?this:this.clone(!0),n(e[h])[b](c),g.apply(d,c.get());return this.pushStack(d)}});var wa,xa={HTML:"block",BODY:"block"};function ya(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function za(a){var b=d,c=xa[a];return c||(c=ya(a,b),"none"!==c&&c||(wa=(wa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=wa[0].contentDocument,b.write(),b.close(),c=ya(a,b),wa.detach()),xa[a]=c),c}var Aa=/^margin/,Ba=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ca=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Ea=d.documentElement;!function(){var b,c,e,f,g=d.createElement("div"),h=d.createElement("div");if(h.style){h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,g.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",g.appendChild(h);function i(){h.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",h.innerHTML="",Ea.appendChild(g);var d=a.getComputedStyle(h);b="1%"!==d.top,f="2px"===d.marginLeft,c="4px"===d.width,h.style.marginRight="50%",e="4px"===d.marginRight,Ea.removeChild(g)}n.extend(l,{pixelPosition:function(){return i(),b},boxSizingReliable:function(){return null==c&&i(),c},pixelMarginRight:function(){return null==c&&i(),e},reliableMarginLeft:function(){return null==c&&i(),f},reliableMarginRight:function(){var b,c=h.appendChild(d.createElement("div"));return c.style.cssText=h.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",h.style.width="1px",Ea.appendChild(g),b=!parseFloat(a.getComputedStyle(c).marginRight),Ea.removeChild(g),h.removeChild(c),b}})}}();function Fa(a,b,c){var d,e,f,g,h=a.style;return c=c||Ca(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Ba.test(g)&&Aa.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0!==g?g+"":g}function Ga(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Ha=/^(none|table(?!-c[ea]).+)/,Ia={position:"absolute",visibility:"hidden",display:"block"},Ja={letterSpacing:"0",fontWeight:"400"},Ka=["Webkit","O","Moz","ms"],La=d.createElement("div").style;function Ma(a){if(a in La)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ka.length;while(c--)if(a=Ka[c]+b,a in La)return a}function Na(a,b,c){var d=T.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Oa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Pa(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ca(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Fa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ba.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Oa(a,b,c||(g?"border":"content"),d,f)+"px"}function Qa(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=N.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=N.access(d,"olddisplay",za(d.nodeName)))):(e=V(d),"none"===c&&e||N.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Fa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=T.exec(c))&&e[1]&&(c=W(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Fa(a,b,d)),"normal"===e&&b in Ja&&(e=Ja[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Ha.test(n.css(a,"display"))&&0===a.offsetWidth?Da(a,Ia,function(){return Pa(a,b,d)}):Pa(a,b,d):void 0},set:function(a,c,d){var e,f=d&&Ca(a),g=d&&Oa(a,b,d,"border-box"===n.css(a,"boxSizing",!1,f),f);return g&&(e=T.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=n.css(a,b)),Na(a,c,g)}}}),n.cssHooks.marginLeft=Ga(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Fa(a,"marginLeft"))||a.getBoundingClientRect().left-Da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px":void 0}),n.cssHooks.marginRight=Ga(l.reliableMarginRight,function(a,b){return b?Da(a,{display:"inline-block"},Fa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Aa.test(a)||(n.cssHooks[a+b].set=Na)}),n.fn.extend({css:function(a,b){return K(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ca(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Qa(this,!0)},hide:function(){return Qa(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function Ra(a,b,c,d,e){return new Ra.prototype.init(a,b,c,d,e)}n.Tween=Ra,Ra.prototype={constructor:Ra,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ra.propHooks[this.prop];return a&&a.get?a.get(this):Ra.propHooks._default.get(this)},run:function(a){var b,c=Ra.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ra.propHooks._default.set(this),this}},Ra.prototype.init.prototype=Ra.prototype,Ra.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},Ra.propHooks.scrollTop=Ra.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=Ra.prototype.init,n.fx.step={};var Sa,Ta,Ua=/^(?:toggle|show|hide)$/,Va=/queueHooks$/;function Wa(){return a.setTimeout(function(){Sa=void 0}),Sa=n.now()}function Xa(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=U[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ya(a,b,c){for(var d,e=(_a.tweeners[b]||[]).concat(_a.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Za(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&V(a),q=N.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?N.get(a,"olddisplay")||za(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Ua.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?za(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=N.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;N.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ya(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function $a(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function _a(a,b,c){var d,e,f=0,g=_a.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Sa||Wa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:Sa||Wa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for($a(k,j.opts.specialEasing);g>f;f++)if(d=_a.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,Ya,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(_a,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return W(c.elem,a,T.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],_a.tweeners[c]=_a.tweeners[c]||[],_a.tweeners[c].unshift(b)},prefilters:[Za],prefilter:function(a,b){b?_a.prefilters.unshift(a):_a.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=_a(this,n.extend({},a),f);(e||N.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=N.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Va.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=N.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Xa(b,!0),a,d,e)}}),n.each({slideDown:Xa("show"),slideUp:Xa("hide"),slideToggle:Xa("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Sa=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Sa=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ta||(Ta=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(Ta),Ta=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=d.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var ab,bb=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return K(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ab:void 0)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)}}),ab={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=bb[b]||n.find.attr;bb[b]=function(a,b,d){var e,f;return d||(f=bb[b],bb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,bb[b]=f),e}});var cb=/^(?:input|select|textarea|button)$/i,db=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return K(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),
void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):cb.test(a.nodeName)||db.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var eb=/[\t\r\n\f]/g;function fb(a){return a.getAttribute&&a.getAttribute("class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,fb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,fb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,fb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=fb(this),b&&N.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":N.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+fb(c)+" ").replace(eb," ").indexOf(b)>-1)return!0;return!1}});var gb=/\r/g,hb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(gb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(hb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(n.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var ib=/^(?:focusinfocus|focusoutblur)$/;n.extend(n.event,{trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!ib.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),l=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},f||!o.trigger||o.trigger.apply(e,c)!==!1)){if(!f&&!o.noBubble&&!n.isWindow(e)){for(j=o.delegateType||q,ib.test(j+q)||(h=h.parentNode);h;h=h.parentNode)p.push(h),i=h;i===(e.ownerDocument||d)&&p.push(i.defaultView||i.parentWindow||a)}g=0;while((h=p[g++])&&!b.isPropagationStopped())b.type=g>1?j:o.bindType||q,m=(N.get(h,"events")||{})[b.type]&&N.get(h,"handle"),m&&m.apply(h,c),m=l&&h[l],m&&m.apply&&L(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=q,f||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!L(e)||l&&n.isFunction(e[q])&&!n.isWindow(e)&&(i=e[l],i&&(e[l]=null),n.event.triggered=q,e[q](),n.event.triggered=void 0,i&&(e[l]=i)),b.result}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b)}}),n.fn.extend({trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),l.focusin="onfocusin"in a,l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=N.access(d,b);e||d.addEventListener(a,c,!0),N.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=N.access(d,b)-1;e?N.access(d,b,e):(d.removeEventListener(a,c,!0),N.remove(d,b))}}});var jb=a.location,kb=n.now(),lb=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var mb=/#.*$/,nb=/([?&])_=[^&]*/,ob=/^(.*?):[ \t]*([^\r\n]*)$/gm,pb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,qb=/^(?:GET|HEAD)$/,rb=/^\/\//,sb={},tb={},ub="*/".concat("*"),vb=d.createElement("a");vb.href=jb.href;function wb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function xb(a,b,c,d){var e={},f=a===tb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function yb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function zb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Ab(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:jb.href,type:"GET",isLocal:pb.test(jb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":ub,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?yb(yb(a,n.ajaxSettings),b):yb(n.ajaxSettings,a)},ajaxPrefilter:wb(sb),ajaxTransport:wb(tb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m=n.ajaxSetup({},c),o=m.context||m,p=m.context&&(o.nodeType||o.jquery)?n(o):n.event,q=n.Deferred(),r=n.Callbacks("once memory"),s=m.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,getResponseHeader:function(a){var b;if(2===v){if(!h){h={};while(b=ob.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===v?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return v||(a=u[c]=u[c]||a,t[a]=b),this},overrideMimeType:function(a){return v||(m.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>v)for(b in a)s[b]=[s[b],a[b]];else x.always(a[x.status]);return this},abort:function(a){var b=a||w;return e&&e.abort(b),z(0,b),this}};if(q.promise(x).complete=r.add,x.success=x.done,x.error=x.fail,m.url=((b||m.url||jb.href)+"").replace(mb,"").replace(rb,jb.protocol+"//"),m.type=c.method||c.type||m.method||m.type,m.dataTypes=n.trim(m.dataType||"*").toLowerCase().match(G)||[""],null==m.crossDomain){j=d.createElement("a");try{j.href=m.url,j.href=j.href,m.crossDomain=vb.protocol+"//"+vb.host!=j.protocol+"//"+j.host}catch(y){m.crossDomain=!0}}if(m.data&&m.processData&&"string"!=typeof m.data&&(m.data=n.param(m.data,m.traditional)),xb(sb,m,c,x),2===v)return x;k=n.event&&m.global,k&&0===n.active++&&n.event.trigger("ajaxStart"),m.type=m.type.toUpperCase(),m.hasContent=!qb.test(m.type),f=m.url,m.hasContent||(m.data&&(f=m.url+=(lb.test(f)?"&":"?")+m.data,delete m.data),m.cache===!1&&(m.url=nb.test(f)?f.replace(nb,"$1_="+kb++):f+(lb.test(f)?"&":"?")+"_="+kb++)),m.ifModified&&(n.lastModified[f]&&x.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&x.setRequestHeader("If-None-Match",n.etag[f])),(m.data&&m.hasContent&&m.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",m.contentType),x.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+ub+"; q=0.01":""):m.accepts["*"]);for(l in m.headers)x.setRequestHeader(l,m.headers[l]);if(m.beforeSend&&(m.beforeSend.call(o,x,m)===!1||2===v))return x.abort();w="abort";for(l in{success:1,error:1,complete:1})x[l](m[l]);if(e=xb(tb,m,c,x)){if(x.readyState=1,k&&p.trigger("ajaxSend",[x,m]),2===v)return x;m.async&&m.timeout>0&&(i=a.setTimeout(function(){x.abort("timeout")},m.timeout));try{v=1,e.send(t,z)}catch(y){if(!(2>v))throw y;z(-1,y)}}else z(-1,"No Transport");function z(b,c,d,h){var j,l,t,u,w,y=c;2!==v&&(v=2,i&&a.clearTimeout(i),e=void 0,g=h||"",x.readyState=b>0?4:0,j=b>=200&&300>b||304===b,d&&(u=zb(m,x,d)),u=Ab(m,u,x,j),j?(m.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(n.lastModified[f]=w),w=x.getResponseHeader("etag"),w&&(n.etag[f]=w)),204===b||"HEAD"===m.type?y="nocontent":304===b?y="notmodified":(y=u.state,l=u.data,t=u.error,j=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),x.status=b,x.statusText=(c||y)+"",j?q.resolveWith(o,[l,y,x]):q.rejectWith(o,[x,y,t]),x.statusCode(s),s=void 0,k&&p.trigger(j?"ajaxSuccess":"ajaxError",[x,m,j?l:t]),r.fireWith(o,[x,y]),k&&(p.trigger("ajaxComplete",[x,m]),--n.active||n.event.trigger("ajaxStop")))}return x},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return!n.expr.filters.visible(a)},n.expr.filters.visible=function(a){return a.offsetWidth>0||a.offsetHeight>0||a.getClientRects().length>0};var Bb=/%20/g,Cb=/\[\]$/,Db=/\r?\n/g,Eb=/^(?:submit|button|image|reset|file)$/i,Fb=/^(?:input|select|textarea|keygen)/i;function Gb(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Cb.test(a)?d(a,e):Gb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Gb(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Gb(c,a[c],b,e);return d.join("&").replace(Bb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Fb.test(this.nodeName)&&!Eb.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Db,"\r\n")}}):{name:b.name,value:c.replace(Db,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Hb={0:200,1223:204},Ib=n.ajaxSettings.xhr();l.cors=!!Ib&&"withCredentials"in Ib,l.ajax=Ib=!!Ib,n.ajaxTransport(function(b){var c,d;return l.cors||Ib&&!b.crossDomain?{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Hb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=n("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Jb=[],Kb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Jb.pop()||n.expando+"_"+kb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Kb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Kb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Kb,"$1"+e):b.jsonp!==!1&&(b.url+=(lb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Jb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ca([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var Lb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Lb)return Lb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function Mb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(e=d.getBoundingClientRect(),c=Mb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ea})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;n.fn[a]=function(d){return K(this,function(a,d,e){var f=Mb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ga(l.pixelPosition,function(a,c){return c?(c=Fa(a,b),Ba.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return K(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)},size:function(){return this.length}}),n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Nb=a.jQuery,Ob=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Ob),b&&a.jQuery===n&&(a.jQuery=Nb),n},b||(a.jQuery=a.$=n),n});

/*!
 * Bootstrap v3.4.0 (https://getbootstrap.com/)
 * Copyright 2011-2018 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");!function(t){"use strict";var e=jQuery.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1||3<e[0])throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(),function(n){"use strict";n.fn.emulateTransitionEnd=function(t){var e=!1,i=this;n(this).one("bsTransitionEnd",function(){e=!0});return setTimeout(function(){e||n(i).trigger(n.support.transition.end)},t),this},n(function(){n.support.transition=function o(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in e)if(t.style[i]!==undefined)return{end:e[i]};return!1}(),n.support.transition&&(n.event.special.bsTransitionEnd={bindType:n.support.transition.end,delegateType:n.support.transition.end,handle:function(t){if(n(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}})})}(jQuery),function(s){"use strict";var e='[data-dismiss="alert"]',a=function(t){s(t).on("click",e,this.close)};a.VERSION="3.4.0",a.TRANSITION_DURATION=150,a.prototype.close=function(t){var e=s(this),i=e.attr("data-target");i||(i=(i=e.attr("href"))&&i.replace(/.*(?=#[^\s]*$)/,"")),i="#"===i?[]:i;var o=s(document).find(i);function n(){o.detach().trigger("closed.bs.alert").remove()}t&&t.preventDefault(),o.length||(o=e.closest(".alert")),o.trigger(t=s.Event("close.bs.alert")),t.isDefaultPrevented()||(o.removeClass("in"),s.support.transition&&o.hasClass("fade")?o.one("bsTransitionEnd",n).emulateTransitionEnd(a.TRANSITION_DURATION):n())};var t=s.fn.alert;s.fn.alert=function o(i){return this.each(function(){var t=s(this),e=t.data("bs.alert");e||t.data("bs.alert",e=new a(this)),"string"==typeof i&&e[i].call(t)})},s.fn.alert.Constructor=a,s.fn.alert.noConflict=function(){return s.fn.alert=t,this},s(document).on("click.bs.alert.data-api",e,a.prototype.close)}(jQuery),function(s){"use strict";var n=function(t,e){this.$element=s(t),this.options=s.extend({},n.DEFAULTS,e),this.isLoading=!1};function i(o){return this.each(function(){var t=s(this),e=t.data("bs.button"),i="object"==typeof o&&o;e||t.data("bs.button",e=new n(this,i)),"toggle"==o?e.toggle():o&&e.setState(o)})}n.VERSION="3.4.0",n.DEFAULTS={loadingText:"loading..."},n.prototype.setState=function(t){var e="disabled",i=this.$element,o=i.is("input")?"val":"html",n=i.data();t+="Text",null==n.resetText&&i.data("resetText",i[o]()),setTimeout(s.proxy(function(){i[o](null==n[t]?this.options[t]:n[t]),"loadingText"==t?(this.isLoading=!0,i.addClass(e).attr(e,e).prop(e,!0)):this.isLoading&&(this.isLoading=!1,i.removeClass(e).removeAttr(e).prop(e,!1))},this),0)},n.prototype.toggle=function(){var t=!0,e=this.$element.closest('[data-toggle="buttons"]');if(e.length){var i=this.$element.find("input");"radio"==i.prop("type")?(i.prop("checked")&&(t=!1),e.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==i.prop("type")&&(i.prop("checked")!==this.$element.hasClass("active")&&(t=!1),this.$element.toggleClass("active")),i.prop("checked",this.$element.hasClass("active")),t&&i.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var t=s.fn.button;s.fn.button=i,s.fn.button.Constructor=n,s.fn.button.noConflict=function(){return s.fn.button=t,this},s(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(t){var e=s(t.target).closest(".btn");i.call(e,"toggle"),s(t.target).is('input[type="radio"], input[type="checkbox"]')||(t.preventDefault(),e.is("input,button")?e.trigger("focus"):e.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(t){s(t.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(t.type))})}(jQuery),function(p){"use strict";var c=function(t,e){this.$element=p(t),this.$indicators=this.$element.find(".carousel-indicators"),this.options=e,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",p.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",p.proxy(this.pause,this)).on("mouseleave.bs.carousel",p.proxy(this.cycle,this))};function r(n){return this.each(function(){var t=p(this),e=t.data("bs.carousel"),i=p.extend({},c.DEFAULTS,t.data(),"object"==typeof n&&n),o="string"==typeof n?n:i.slide;e||t.data("bs.carousel",e=new c(this,i)),"number"==typeof n?e.to(n):o?e[o]():i.interval&&e.pause().cycle()})}c.VERSION="3.4.0",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(t){if(!/input|textarea/i.test(t.target.tagName)){switch(t.which){case 37:this.prev();break;case 39:this.next();break;default:return}t.preventDefault()}},c.prototype.cycle=function(t){return t||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(p.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(t){return this.$items=t.parent().children(".item"),this.$items.index(t||this.$active)},c.prototype.getItemForDirection=function(t,e){var i=this.getItemIndex(e);if(("prev"==t&&0===i||"next"==t&&i==this.$items.length-1)&&!this.options.wrap)return e;var o=(i+("prev"==t?-1:1))%this.$items.length;return this.$items.eq(o)},c.prototype.to=function(t){var e=this,i=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(t>this.$items.length-1||t<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){e.to(t)}):i==t?this.pause().cycle():this.slide(i<t?"next":"prev",this.$items.eq(t))},c.prototype.pause=function(t){return t||(this.paused=!0),this.$element.find(".next, .prev").length&&p.support.transition&&(this.$element.trigger(p.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){if(!this.sliding)return this.slide("next")},c.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},c.prototype.slide=function(t,e){var i=this.$element.find(".item.active"),o=e||this.getItemForDirection(t,i),n=this.interval,s="next"==t?"left":"right",a=this;if(o.hasClass("active"))return this.sliding=!1;var r=o[0],l=p.Event("slide.bs.carousel",{relatedTarget:r,direction:s});if(this.$element.trigger(l),!l.isDefaultPrevented()){if(this.sliding=!0,n&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var h=p(this.$indicators.children()[this.getItemIndex(o)]);h&&h.addClass("active")}var d=p.Event("slid.bs.carousel",{relatedTarget:r,direction:s});return p.support.transition&&this.$element.hasClass("slide")?(o.addClass(t),"object"==typeof o&&o.length&&o[0].offsetWidth,i.addClass(s),o.addClass(s),i.one("bsTransitionEnd",function(){o.removeClass([t,s].join(" ")).addClass("active"),i.removeClass(["active",s].join(" ")),a.sliding=!1,setTimeout(function(){a.$element.trigger(d)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(i.removeClass("active"),o.addClass("active"),this.sliding=!1,this.$element.trigger(d)),n&&this.cycle(),this}};var t=p.fn.carousel;p.fn.carousel=r,p.fn.carousel.Constructor=c,p.fn.carousel.noConflict=function(){return p.fn.carousel=t,this};var e=function(t){var e=p(this),i=e.attr("href");i&&(i=i.replace(/.*(?=#[^\s]+$)/,""));var o=e.attr("data-target")||i,n=p(document).find(o);if(n.hasClass("carousel")){var s=p.extend({},n.data(),e.data()),a=e.attr("data-slide-to");a&&(s.interval=!1),r.call(n,s),a&&n.data("bs.carousel").to(a),t.preventDefault()}};p(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),p(window).on("load",function(){p('[data-ride="carousel"]').each(function(){var t=p(this);r.call(t,t.data())})})}(jQuery),function(a){"use strict";var r=function(t,e){this.$element=a(t),this.options=a.extend({},r.DEFAULTS,e),this.$trigger=a('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};function n(t){var e,i=t.attr("data-target")||(e=t.attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"");return a(document).find(i)}function l(o){return this.each(function(){var t=a(this),e=t.data("bs.collapse"),i=a.extend({},r.DEFAULTS,t.data(),"object"==typeof o&&o);!e&&i.toggle&&/show|hide/.test(o)&&(i.toggle=!1),e||t.data("bs.collapse",e=new r(this,i)),"string"==typeof o&&e[o]()})}r.VERSION="3.4.0",r.TRANSITION_DURATION=350,r.DEFAULTS={toggle:!0},r.prototype.dimension=function(){return this.$element.hasClass("width")?"width":"height"},r.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var t,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(t=e.data("bs.collapse"))&&t.transitioning)){var i=a.Event("show.bs.collapse");if(this.$element.trigger(i),!i.isDefaultPrevented()){e&&e.length&&(l.call(e,"hide"),t||e.data("bs.collapse",null));var o=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[o](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var n=function(){this.$element.removeClass("collapsing").addClass("collapse in")[o](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return n.call(this);var s=a.camelCase(["scroll",o].join("-"));this.$element.one("bsTransitionEnd",a.proxy(n,this)).emulateTransitionEnd(r.TRANSITION_DURATION)[o](this.$element[0][s])}}}},r.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var t=a.Event("hide.bs.collapse");if(this.$element.trigger(t),!t.isDefaultPrevented()){var e=this.dimension();this.$element[e](this.$element[e]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var i=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};if(!a.support.transition)return i.call(this);this.$element[e](0).one("bsTransitionEnd",a.proxy(i,this)).emulateTransitionEnd(r.TRANSITION_DURATION)}}},r.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},r.prototype.getParent=function(){return a(document).find(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(t,e){var i=a(e);this.addAriaAndCollapsedClass(n(i),i)},this)).end()},r.prototype.addAriaAndCollapsedClass=function(t,e){var i=t.hasClass("in");t.attr("aria-expanded",i),e.toggleClass("collapsed",!i).attr("aria-expanded",i)};var t=a.fn.collapse;a.fn.collapse=l,a.fn.collapse.Constructor=r,a.fn.collapse.noConflict=function(){return a.fn.collapse=t,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(t){var e=a(this);e.attr("data-target")||t.preventDefault();var i=n(e),o=i.data("bs.collapse")?"toggle":e.data();l.call(i,o)})}(jQuery),function(a){"use strict";var r='[data-toggle="dropdown"]',o=function(t){a(t).on("click.bs.dropdown",this.toggle)};function l(t){var e=t.attr("data-target");e||(e=(e=t.attr("href"))&&/#[A-Za-z]/.test(e)&&e.replace(/.*(?=#[^\s]*$)/,""));var i=e&&a(document).find(e);return i&&i.length?i:t.parent()}function s(o){o&&3===o.which||(a(".dropdown-backdrop").remove(),a(r).each(function(){var t=a(this),e=l(t),i={relatedTarget:this};e.hasClass("open")&&(o&&"click"==o.type&&/input|textarea/i.test(o.target.tagName)&&a.contains(e[0],o.target)||(e.trigger(o=a.Event("hide.bs.dropdown",i)),o.isDefaultPrevented()||(t.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",i)))))}))}o.VERSION="3.4.0",o.prototype.toggle=function(t){var e=a(this);if(!e.is(".disabled, :disabled")){var i=l(e),o=i.hasClass("open");if(s(),!o){"ontouchstart"in document.documentElement&&!i.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",s);var n={relatedTarget:this};if(i.trigger(t=a.Event("show.bs.dropdown",n)),t.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),i.toggleClass("open").trigger(a.Event("shown.bs.dropdown",n))}return!1}},o.prototype.keydown=function(t){if(/(38|40|27|32)/.test(t.which)&&!/input|textarea/i.test(t.target.tagName)){var e=a(this);if(t.preventDefault(),t.stopPropagation(),!e.is(".disabled, :disabled")){var i=l(e),o=i.hasClass("open");if(!o&&27!=t.which||o&&27==t.which)return 27==t.which&&i.find(r).trigger("focus"),e.trigger("click");var n=i.find(".dropdown-menu li:not(.disabled):visible a");if(n.length){var s=n.index(t.target);38==t.which&&0<s&&s--,40==t.which&&s<n.length-1&&s++,~s||(s=0),n.eq(s).trigger("focus")}}}};var t=a.fn.dropdown;a.fn.dropdown=function e(i){return this.each(function(){var t=a(this),e=t.data("bs.dropdown");e||t.data("bs.dropdown",e=new o(this)),"string"==typeof i&&e[i].call(t)})},a.fn.dropdown.Constructor=o,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=t,this},a(document).on("click.bs.dropdown.data-api",s).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",r,o.prototype.toggle).on("keydown.bs.dropdown.data-api",r,o.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",o.prototype.keydown)}(jQuery),function(a){"use strict";var s=function(t,e){this.options=e,this.$body=a(document.body),this.$element=a(t),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.fixedContent=".navbar-fixed-top, .navbar-fixed-bottom",this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};function r(o,n){return this.each(function(){var t=a(this),e=t.data("bs.modal"),i=a.extend({},s.DEFAULTS,t.data(),"object"==typeof o&&o);e||t.data("bs.modal",e=new s(this,i)),"string"==typeof o?e[o](n):i.show&&e.show(n)})}s.VERSION="3.4.0",s.TRANSITION_DURATION=300,s.BACKDROP_TRANSITION_DURATION=150,s.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},s.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},s.prototype.show=function(i){var o=this,t=a.Event("show.bs.modal",{relatedTarget:i});this.$element.trigger(t),this.isShown||t.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){o.$element.one("mouseup.dismiss.bs.modal",function(t){a(t.target).is(o.$element)&&(o.ignoreBackdropClick=!0)})}),this.backdrop(function(){var t=a.support.transition&&o.$element.hasClass("fade");o.$element.parent().length||o.$element.appendTo(o.$body),o.$element.show().scrollTop(0),o.adjustDialog(),t&&o.$element[0].offsetWidth,o.$element.addClass("in"),o.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:i});t?o.$dialog.one("bsTransitionEnd",function(){o.$element.trigger("focus").trigger(e)}).emulateTransitionEnd(s.TRANSITION_DURATION):o.$element.trigger("focus").trigger(e)}))},s.prototype.hide=function(t){t&&t.preventDefault(),t=a.Event("hide.bs.modal"),this.$element.trigger(t),this.isShown&&!t.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(s.TRANSITION_DURATION):this.hideModal())},s.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(t){document===t.target||this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},s.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},s.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},s.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$body.removeClass("modal-open"),t.resetAdjustments(),t.resetScrollbar(),t.$element.trigger("hidden.bs.modal")})},s.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},s.prototype.backdrop=function(t){var e=this,i=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var o=a.support.transition&&i;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+i).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(t){this.ignoreBackdropClick?this.ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide())},this)),o&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!t)return;o?this.$backdrop.one("bsTransitionEnd",t).emulateTransitionEnd(s.BACKDROP_TRANSITION_DURATION):t()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var n=function(){e.removeBackdrop(),t&&t()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",n).emulateTransitionEnd(s.BACKDROP_TRANSITION_DURATION):n()}else t&&t()},s.prototype.handleUpdate=function(){this.adjustDialog()},s.prototype.adjustDialog=function(){var t=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&t?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!t?this.scrollbarWidth:""})},s.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},s.prototype.checkScrollbar=function(){var t=window.innerWidth;if(!t){var e=document.documentElement.getBoundingClientRect();t=e.right-Math.abs(e.left)}this.bodyIsOverflowing=document.body.clientWidth<t,this.scrollbarWidth=this.measureScrollbar()},s.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"";var n=this.scrollbarWidth;this.bodyIsOverflowing&&(this.$body.css("padding-right",t+n),a(this.fixedContent).each(function(t,e){var i=e.style.paddingRight,o=a(e).css("padding-right");a(e).data("padding-right",i).css("padding-right",parseFloat(o)+n+"px")}))},s.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad),a(this.fixedContent).each(function(t,e){var i=a(e).data("padding-right");a(e).removeData("padding-right"),e.style.paddingRight=i||""})},s.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),e};var t=a.fn.modal;a.fn.modal=r,a.fn.modal.Constructor=s,a.fn.modal.noConflict=function(){return a.fn.modal=t,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(t){var e=a(this),i=e.attr("href"),o=e.attr("data-target")||i&&i.replace(/.*(?=#[^\s]+$)/,""),n=a(document).find(o),s=n.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(i)&&i},n.data(),e.data());e.is("a")&&t.preventDefault(),n.one("show.bs.modal",function(t){t.isDefaultPrevented()||n.one("hidden.bs.modal",function(){e.is(":visible")&&e.trigger("focus")})}),r.call(n,s,this)})}(jQuery),function(g){"use strict";var m=function(t,e){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",t,e)};m.VERSION="3.4.0",m.TRANSITION_DURATION=150,m.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},m.prototype.init=function(t,e,i){if(this.enabled=!0,this.type=t,this.$element=g(e),this.options=this.getOptions(i),this.$viewport=this.options.viewport&&g(document).find(g.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var o=this.options.trigger.split(" "),n=o.length;n--;){var s=o[n];if("click"==s)this.$element.on("click."+this.type,this.options.selector,g.proxy(this.toggle,this));else if("manual"!=s){var a="hover"==s?"mouseenter":"focusin",r="hover"==s?"mouseleave":"focusout";this.$element.on(a+"."+this.type,this.options.selector,g.proxy(this.enter,this)),this.$element.on(r+"."+this.type,this.options.selector,g.proxy(this.leave,this))}}this.options.selector?this._options=g.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},m.prototype.getDefaults=function(){return m.DEFAULTS},m.prototype.getOptions=function(t){return(t=g.extend({},this.getDefaults(),this.$element.data(),t)).delay&&"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),t},m.prototype.getDelegateOptions=function(){var i={},o=this.getDefaults();return this._options&&g.each(this._options,function(t,e){o[t]!=e&&(i[t]=e)}),i},m.prototype.enter=function(t){var e=t instanceof this.constructor?t:g(t.currentTarget).data("bs."+this.type);if(e||(e=new this.constructor(t.currentTarget,this.getDelegateOptions()),g(t.currentTarget).data("bs."+this.type,e)),t instanceof g.Event&&(e.inState["focusin"==t.type?"focus":"hover"]=!0),e.tip().hasClass("in")||"in"==e.hoverState)e.hoverState="in";else{if(clearTimeout(e.timeout),e.hoverState="in",!e.options.delay||!e.options.delay.show)return e.show();e.timeout=setTimeout(function(){"in"==e.hoverState&&e.show()},e.options.delay.show)}},m.prototype.isInStateTrue=function(){for(var t in this.inState)if(this.inState[t])return!0;return!1},m.prototype.leave=function(t){var e=t instanceof this.constructor?t:g(t.currentTarget).data("bs."+this.type);if(e||(e=new this.constructor(t.currentTarget,this.getDelegateOptions()),g(t.currentTarget).data("bs."+this.type,e)),t instanceof g.Event&&(e.inState["focusout"==t.type?"focus":"hover"]=!1),!e.isInStateTrue()){if(clearTimeout(e.timeout),e.hoverState="out",!e.options.delay||!e.options.delay.hide)return e.hide();e.timeout=setTimeout(function(){"out"==e.hoverState&&e.hide()},e.options.delay.hide)}},m.prototype.show=function(){var t=g.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(t);var e=g.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(t.isDefaultPrevented()||!e)return;var i=this,o=this.tip(),n=this.getUID(this.type);this.setContent(),o.attr("id",n),this.$element.attr("aria-describedby",n),this.options.animation&&o.addClass("fade");var s="function"==typeof this.options.placement?this.options.placement.call(this,o[0],this.$element[0]):this.options.placement,a=/\s?auto?\s?/i,r=a.test(s);r&&(s=s.replace(a,"")||"top"),o.detach().css({top:0,left:0,display:"block"}).addClass(s).data("bs."+this.type,this),this.options.container?o.appendTo(g(document).find(this.options.container)):o.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var l=this.getPosition(),h=o[0].offsetWidth,d=o[0].offsetHeight;if(r){var p=s,c=this.getPosition(this.$viewport);s="bottom"==s&&l.bottom+d>c.bottom?"top":"top"==s&&l.top-d<c.top?"bottom":"right"==s&&l.right+h>c.width?"left":"left"==s&&l.left-h<c.left?"right":s,o.removeClass(p).addClass(s)}var f=this.getCalculatedOffset(s,l,h,d);this.applyPlacement(f,s);var u=function(){var t=i.hoverState;i.$element.trigger("shown.bs."+i.type),i.hoverState=null,"out"==t&&i.leave(i)};g.support.transition&&this.$tip.hasClass("fade")?o.one("bsTransitionEnd",u).emulateTransitionEnd(m.TRANSITION_DURATION):u()}},m.prototype.applyPlacement=function(t,e){var i=this.tip(),o=i[0].offsetWidth,n=i[0].offsetHeight,s=parseInt(i.css("margin-top"),10),a=parseInt(i.css("margin-left"),10);isNaN(s)&&(s=0),isNaN(a)&&(a=0),t.top+=s,t.left+=a,g.offset.setOffset(i[0],g.extend({using:function(t){i.css({top:Math.round(t.top),left:Math.round(t.left)})}},t),0),i.addClass("in");var r=i[0].offsetWidth,l=i[0].offsetHeight;"top"==e&&l!=n&&(t.top=t.top+n-l);var h=this.getViewportAdjustedDelta(e,t,r,l);h.left?t.left+=h.left:t.top+=h.top;var d=/top|bottom/.test(e),p=d?2*h.left-o+r:2*h.top-n+l,c=d?"offsetWidth":"offsetHeight";i.offset(t),this.replaceArrow(p,i[0][c],d)},m.prototype.replaceArrow=function(t,e,i){this.arrow().css(i?"left":"top",50*(1-t/e)+"%").css(i?"top":"left","")},m.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},m.prototype.hide=function(t){var e=this,i=g(this.$tip),o=g.Event("hide.bs."+this.type);function n(){"in"!=e.hoverState&&i.detach(),e.$element&&e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),t&&t()}if(this.$element.trigger(o),!o.isDefaultPrevented())return i.removeClass("in"),g.support.transition&&i.hasClass("fade")?i.one("bsTransitionEnd",n).emulateTransitionEnd(m.TRANSITION_DURATION):n(),this.hoverState=null,this},m.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},m.prototype.hasContent=function(){return this.getTitle()},m.prototype.getPosition=function(t){var e=(t=t||this.$element)[0],i="BODY"==e.tagName,o=e.getBoundingClientRect();null==o.width&&(o=g.extend({},o,{width:o.right-o.left,height:o.bottom-o.top}));var n=window.SVGElement&&e instanceof window.SVGElement,s=i?{top:0,left:0}:n?null:t.offset(),a={scroll:i?document.documentElement.scrollTop||document.body.scrollTop:t.scrollTop()},r=i?{width:g(window).width(),height:g(window).height()}:null;return g.extend({},o,a,r,s)},m.prototype.getCalculatedOffset=function(t,e,i,o){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-i/2}:"top"==t?{top:e.top-o,left:e.left+e.width/2-i/2}:"left"==t?{top:e.top+e.height/2-o/2,left:e.left-i}:{top:e.top+e.height/2-o/2,left:e.left+e.width}},m.prototype.getViewportAdjustedDelta=function(t,e,i,o){var n={top:0,left:0};if(!this.$viewport)return n;var s=this.options.viewport&&this.options.viewport.padding||0,a=this.getPosition(this.$viewport);if(/right|left/.test(t)){var r=e.top-s-a.scroll,l=e.top+s-a.scroll+o;r<a.top?n.top=a.top-r:l>a.top+a.height&&(n.top=a.top+a.height-l)}else{var h=e.left-s,d=e.left+s+i;h<a.left?n.left=a.left-h:d>a.right&&(n.left=a.left+a.width-d)}return n},m.prototype.getTitle=function(){var t=this.$element,e=this.options;return t.attr("data-original-title")||("function"==typeof e.title?e.title.call(t[0]):e.title)},m.prototype.getUID=function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},m.prototype.tip=function(){if(!this.$tip&&(this.$tip=g(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},m.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},m.prototype.enable=function(){this.enabled=!0},m.prototype.disable=function(){this.enabled=!1},m.prototype.toggleEnabled=function(){this.enabled=!this.enabled},m.prototype.toggle=function(t){var e=this;t&&((e=g(t.currentTarget).data("bs."+this.type))||(e=new this.constructor(t.currentTarget,this.getDelegateOptions()),g(t.currentTarget).data("bs."+this.type,e))),t?(e.inState.click=!e.inState.click,e.isInStateTrue()?e.enter(e):e.leave(e)):e.tip().hasClass("in")?e.leave(e):e.enter(e)},m.prototype.destroy=function(){var t=this;clearTimeout(this.timeout),this.hide(function(){t.$element.off("."+t.type).removeData("bs."+t.type),t.$tip&&t.$tip.detach(),t.$tip=null,t.$arrow=null,t.$viewport=null,t.$element=null})};var t=g.fn.tooltip;g.fn.tooltip=function e(o){return this.each(function(){var t=g(this),e=t.data("bs.tooltip"),i="object"==typeof o&&o;!e&&/destroy|hide/.test(o)||(e||t.data("bs.tooltip",e=new m(this,i)),"string"==typeof o&&e[o]())})},g.fn.tooltip.Constructor=m,g.fn.tooltip.noConflict=function(){return g.fn.tooltip=t,this}}(jQuery),function(n){"use strict";var s=function(t,e){this.init("popover",t,e)};if(!n.fn.tooltip)throw new Error("Popover requires tooltip.js");s.VERSION="3.4.0",s.DEFAULTS=n.extend({},n.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),((s.prototype=n.extend({},n.fn.tooltip.Constructor.prototype)).constructor=s).prototype.getDefaults=function(){return s.DEFAULTS},s.prototype.setContent=function(){var t=this.tip(),e=this.getTitle(),i=this.getContent();t.find(".popover-title")[this.options.html?"html":"text"](e),t.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof i?"html":"append":"text"](i),t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()},s.prototype.hasContent=function(){return this.getTitle()||this.getContent()},s.prototype.getContent=function(){var t=this.$element,e=this.options;return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)},s.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var t=n.fn.popover;n.fn.popover=function e(o){return this.each(function(){var t=n(this),e=t.data("bs.popover"),i="object"==typeof o&&o;!e&&/destroy|hide/.test(o)||(e||t.data("bs.popover",e=new s(this,i)),"string"==typeof o&&e[o]())})},n.fn.popover.Constructor=s,n.fn.popover.noConflict=function(){return n.fn.popover=t,this}}(jQuery),function(s){"use strict";function n(t,e){this.$body=s(document.body),this.$scrollElement=s(t).is(document.body)?s(window):s(t),this.options=s.extend({},n.DEFAULTS,e),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",s.proxy(this.process,this)),this.refresh(),this.process()}function e(o){return this.each(function(){var t=s(this),e=t.data("bs.scrollspy"),i="object"==typeof o&&o;e||t.data("bs.scrollspy",e=new n(this,i)),"string"==typeof o&&e[o]()})}n.VERSION="3.4.0",n.DEFAULTS={offset:10},n.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},n.prototype.refresh=function(){var t=this,o="offset",n=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),s.isWindow(this.$scrollElement[0])||(o="position",n=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var t=s(this),e=t.data("target")||t.attr("href"),i=/^#./.test(e)&&s(e);return i&&i.length&&i.is(":visible")&&[[i[o]().top+n,e]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){t.offsets.push(this[0]),t.targets.push(this[1])})},n.prototype.process=function(){var t,e=this.$scrollElement.scrollTop()+this.options.offset,i=this.getScrollHeight(),o=this.options.offset+i-this.$scrollElement.height(),n=this.offsets,s=this.targets,a=this.activeTarget;if(this.scrollHeight!=i&&this.refresh(),o<=e)return a!=(t=s[s.length-1])&&this.activate(t);if(a&&e<n[0])return this.activeTarget=null,this.clear();for(t=n.length;t--;)a!=s[t]&&e>=n[t]&&(n[t+1]===undefined||e<n[t+1])&&this.activate(s[t])},n.prototype.activate=function(t){this.activeTarget=t,this.clear();var e=this.selector+'[data-target="'+t+'"],'+this.selector+'[href="'+t+'"]',i=s(e).parents("li").addClass("active");i.parent(".dropdown-menu").length&&(i=i.closest("li.dropdown").addClass("active")),i.trigger("activate.bs.scrollspy")},n.prototype.clear=function(){s(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var t=s.fn.scrollspy;s.fn.scrollspy=e,s.fn.scrollspy.Constructor=n,s.fn.scrollspy.noConflict=function(){return s.fn.scrollspy=t,this},s(window).on("load.bs.scrollspy.data-api",function(){s('[data-spy="scroll"]').each(function(){var t=s(this);e.call(t,t.data())})})}(jQuery),function(r){"use strict";var a=function(t){this.element=r(t)};function e(i){return this.each(function(){var t=r(this),e=t.data("bs.tab");e||t.data("bs.tab",e=new a(this)),"string"==typeof i&&e[i]()})}a.VERSION="3.4.0",a.TRANSITION_DURATION=150,a.prototype.show=function(){var t=this.element,e=t.closest("ul:not(.dropdown-menu)"),i=t.data("target");if(i||(i=(i=t.attr("href"))&&i.replace(/.*(?=#[^\s]*$)/,"")),!t.parent("li").hasClass("active")){var o=e.find(".active:last a"),n=r.Event("hide.bs.tab",{relatedTarget:t[0]}),s=r.Event("show.bs.tab",{relatedTarget:o[0]});if(o.trigger(n),t.trigger(s),!s.isDefaultPrevented()&&!n.isDefaultPrevented()){var a=r(document).find(i);this.activate(t.closest("li"),e),this.activate(a,a.parent(),function(){o.trigger({type:"hidden.bs.tab",relatedTarget:t[0]}),t.trigger({type:"shown.bs.tab",relatedTarget:o[0]})})}}},a.prototype.activate=function(t,e,i){var o=e.find("> .active"),n=i&&r.support.transition&&(o.length&&o.hasClass("fade")||!!e.find("> .fade").length);function s(){o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),n?(t[0].offsetWidth,t.addClass("in")):t.removeClass("fade"),t.parent(".dropdown-menu").length&&t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),i&&i()}o.length&&n?o.one("bsTransitionEnd",s).emulateTransitionEnd(a.TRANSITION_DURATION):s(),o.removeClass("in")};var t=r.fn.tab;r.fn.tab=e,r.fn.tab.Constructor=a,r.fn.tab.noConflict=function(){return r.fn.tab=t,this};var i=function(t){t.preventDefault(),e.call(r(this),"show")};r(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',i).on("click.bs.tab.data-api",'[data-toggle="pill"]',i)}(jQuery),function(l){"use strict";var h=function(t,e){this.options=l.extend({},h.DEFAULTS,e);var i=this.options.target===h.DEFAULTS.target?l(this.options.target):l(document).find(this.options.target);this.$target=i.on("scroll.bs.affix.data-api",l.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",l.proxy(this.checkPositionWithEventLoop,this)),this.$element=l(t),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};function i(o){return this.each(function(){var t=l(this),e=t.data("bs.affix"),i="object"==typeof o&&o;e||t.data("bs.affix",e=new h(this,i)),"string"==typeof o&&e[o]()})}h.VERSION="3.4.0",h.RESET="affix affix-top affix-bottom",h.DEFAULTS={offset:0,target:window},h.prototype.getState=function(t,e,i,o){var n=this.$target.scrollTop(),s=this.$element.offset(),a=this.$target.height();if(null!=i&&"top"==this.affixed)return n<i&&"top";if("bottom"==this.affixed)return null!=i?!(n+this.unpin<=s.top)&&"bottom":!(n+a<=t-o)&&"bottom";var r=null==this.affixed,l=r?n:s.top;return null!=i&&n<=i?"top":null!=o&&t-o<=l+(r?a:e)&&"bottom"},h.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(h.RESET).addClass("affix");var t=this.$target.scrollTop(),e=this.$element.offset();return this.pinnedOffset=e.top-t},h.prototype.checkPositionWithEventLoop=function(){setTimeout(l.proxy(this.checkPosition,this),1)},h.prototype.checkPosition=function(){if(this.$element.is(":visible")){var t=this.$element.height(),e=this.options.offset,i=e.top,o=e.bottom,n=Math.max(l(document).height(),l(document.body).height());"object"!=typeof e&&(o=i=e),"function"==typeof i&&(i=e.top(this.$element)),"function"==typeof o&&(o=e.bottom(this.$element));var s=this.getState(n,t,i,o);if(this.affixed!=s){null!=this.unpin&&this.$element.css("top","");var a="affix"+(s?"-"+s:""),r=l.Event(a+".bs.affix");if(this.$element.trigger(r),r.isDefaultPrevented())return;this.affixed=s,this.unpin="bottom"==s?this.getPinnedOffset():null,this.$element.removeClass(h.RESET).addClass(a).trigger(a.replace("affix","affixed")+".bs.affix")}"bottom"==s&&this.$element.offset({top:n-t-o})}};var t=l.fn.affix;l.fn.affix=i,l.fn.affix.Constructor=h,l.fn.affix.noConflict=function(){return l.fn.affix=t,this},l(window).on("load",function(){l('[data-spy="affix"]').each(function(){var t=l(this),e=t.data();e.offset=e.offset||{},null!=e.offsetBottom&&(e.offset.bottom=e.offsetBottom),null!=e.offsetTop&&(e.offset.top=e.offsetTop),i.call(t,e)})})}(jQuery);
//! moment.js
//! version : 2.11.2
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
!function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):a.moment=b()}(this,function(){"use strict";function a(){return Uc.apply(null,arguments)}function b(a){Uc=a}function c(a){return"[object Array]"===Object.prototype.toString.call(a)}function d(a){return a instanceof Date||"[object Date]"===Object.prototype.toString.call(a)}function e(a,b){var c,d=[];for(c=0;c<a.length;++c)d.push(b(a[c],c));return d}function f(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function g(a,b){for(var c in b)f(b,c)&&(a[c]=b[c]);return f(b,"toString")&&(a.toString=b.toString),f(b,"valueOf")&&(a.valueOf=b.valueOf),a}function h(a,b,c,d){return Da(a,b,c,d,!0).utc()}function i(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function j(a){return null==a._pf&&(a._pf=i()),a._pf}function k(a){if(null==a._isValid){var b=j(a);a._isValid=!(isNaN(a._d.getTime())||!(b.overflow<0)||b.empty||b.invalidMonth||b.invalidWeekday||b.nullInput||b.invalidFormat||b.userInvalidated),a._strict&&(a._isValid=a._isValid&&0===b.charsLeftOver&&0===b.unusedTokens.length&&void 0===b.bigHour)}return a._isValid}function l(a){var b=h(NaN);return null!=a?g(j(b),a):j(b).userInvalidated=!0,b}function m(a){return void 0===a}function n(a,b){var c,d,e;if(m(b._isAMomentObject)||(a._isAMomentObject=b._isAMomentObject),m(b._i)||(a._i=b._i),m(b._f)||(a._f=b._f),m(b._l)||(a._l=b._l),m(b._strict)||(a._strict=b._strict),m(b._tzm)||(a._tzm=b._tzm),m(b._isUTC)||(a._isUTC=b._isUTC),m(b._offset)||(a._offset=b._offset),m(b._pf)||(a._pf=j(b)),m(b._locale)||(a._locale=b._locale),Wc.length>0)for(c in Wc)d=Wc[c],e=b[d],m(e)||(a[d]=e);return a}function o(b){n(this,b),this._d=new Date(null!=b._d?b._d.getTime():NaN),Xc===!1&&(Xc=!0,a.updateOffset(this),Xc=!1)}function p(a){return a instanceof o||null!=a&&null!=a._isAMomentObject}function q(a){return 0>a?Math.ceil(a):Math.floor(a)}function r(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=q(b)),c}function s(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;e>d;d++)(c&&a[d]!==b[d]||!c&&r(a[d])!==r(b[d]))&&g++;return g+f}function t(){}function u(a){return a?a.toLowerCase().replace("_","-"):a}function v(a){for(var b,c,d,e,f=0;f<a.length;){for(e=u(a[f]).split("-"),b=e.length,c=u(a[f+1]),c=c?c.split("-"):null;b>0;){if(d=w(e.slice(0,b).join("-")))return d;if(c&&c.length>=b&&s(e,c,!0)>=b-1)break;b--}f++}return null}function w(a){var b=null;if(!Yc[a]&&"undefined"!=typeof module&&module&&module.exports)try{b=Vc._abbr,require("./locale/"+a),x(b)}catch(c){}return Yc[a]}function x(a,b){var c;return a&&(c=m(b)?z(a):y(a,b),c&&(Vc=c)),Vc._abbr}function y(a,b){return null!==b?(b.abbr=a,Yc[a]=Yc[a]||new t,Yc[a].set(b),x(a),Yc[a]):(delete Yc[a],null)}function z(a){var b;if(a&&a._locale&&a._locale._abbr&&(a=a._locale._abbr),!a)return Vc;if(!c(a)){if(b=w(a))return b;a=[a]}return v(a)}function A(a,b){var c=a.toLowerCase();Zc[c]=Zc[c+"s"]=Zc[b]=a}function B(a){return"string"==typeof a?Zc[a]||Zc[a.toLowerCase()]:void 0}function C(a){var b,c,d={};for(c in a)f(a,c)&&(b=B(c),b&&(d[b]=a[c]));return d}function D(a){return a instanceof Function||"[object Function]"===Object.prototype.toString.call(a)}function E(b,c){return function(d){return null!=d?(G(this,b,d),a.updateOffset(this,c),this):F(this,b)}}function F(a,b){return a.isValid()?a._d["get"+(a._isUTC?"UTC":"")+b]():NaN}function G(a,b,c){a.isValid()&&a._d["set"+(a._isUTC?"UTC":"")+b](c)}function H(a,b){var c;if("object"==typeof a)for(c in a)this.set(c,a[c]);else if(a=B(a),D(this[a]))return this[a](b);return this}function I(a,b,c){var d=""+Math.abs(a),e=b-d.length,f=a>=0;return(f?c?"+":"":"-")+Math.pow(10,Math.max(0,e)).toString().substr(1)+d}function J(a,b,c,d){var e=d;"string"==typeof d&&(e=function(){return this[d]()}),a&&(bd[a]=e),b&&(bd[b[0]]=function(){return I(e.apply(this,arguments),b[1],b[2])}),c&&(bd[c]=function(){return this.localeData().ordinal(e.apply(this,arguments),a)})}function K(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function L(a){var b,c,d=a.match($c);for(b=0,c=d.length;c>b;b++)bd[d[b]]?d[b]=bd[d[b]]:d[b]=K(d[b]);return function(e){var f="";for(b=0;c>b;b++)f+=d[b]instanceof Function?d[b].call(e,a):d[b];return f}}function M(a,b){return a.isValid()?(b=N(b,a.localeData()),ad[b]=ad[b]||L(b),ad[b](a)):a.localeData().invalidDate()}function N(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(_c.lastIndex=0;d>=0&&_c.test(a);)a=a.replace(_c,c),_c.lastIndex=0,d-=1;return a}function O(a,b,c){td[a]=D(b)?b:function(a,d){return a&&c?c:b}}function P(a,b){return f(td,a)?td[a](b._strict,b._locale):new RegExp(Q(a))}function Q(a){return R(a.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e}))}function R(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function S(a,b){var c,d=b;for("string"==typeof a&&(a=[a]),"number"==typeof b&&(d=function(a,c){c[b]=r(a)}),c=0;c<a.length;c++)ud[a[c]]=d}function T(a,b){S(a,function(a,c,d,e){d._w=d._w||{},b(a,d._w,d,e)})}function U(a,b,c){null!=b&&f(ud,a)&&ud[a](b,c._a,c,a)}function V(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function W(a,b){return c(this._months)?this._months[a.month()]:this._months[Ed.test(b)?"format":"standalone"][a.month()]}function X(a,b){return c(this._monthsShort)?this._monthsShort[a.month()]:this._monthsShort[Ed.test(b)?"format":"standalone"][a.month()]}function Y(a,b,c){var d,e,f;for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),d=0;12>d;d++){if(e=h([2e3,d]),c&&!this._longMonthsParse[d]&&(this._longMonthsParse[d]=new RegExp("^"+this.months(e,"").replace(".","")+"$","i"),this._shortMonthsParse[d]=new RegExp("^"+this.monthsShort(e,"").replace(".","")+"$","i")),c||this._monthsParse[d]||(f="^"+this.months(e,"")+"|^"+this.monthsShort(e,""),this._monthsParse[d]=new RegExp(f.replace(".",""),"i")),c&&"MMMM"===b&&this._longMonthsParse[d].test(a))return d;if(c&&"MMM"===b&&this._shortMonthsParse[d].test(a))return d;if(!c&&this._monthsParse[d].test(a))return d}}function Z(a,b){var c;return a.isValid()?"string"==typeof b&&(b=a.localeData().monthsParse(b),"number"!=typeof b)?a:(c=Math.min(a.date(),V(a.year(),b)),a._d["set"+(a._isUTC?"UTC":"")+"Month"](b,c),a):a}function $(b){return null!=b?(Z(this,b),a.updateOffset(this,!0),this):F(this,"Month")}function _(){return V(this.year(),this.month())}function aa(a){return this._monthsParseExact?(f(this,"_monthsRegex")||ca.call(this),a?this._monthsShortStrictRegex:this._monthsShortRegex):this._monthsShortStrictRegex&&a?this._monthsShortStrictRegex:this._monthsShortRegex}function ba(a){return this._monthsParseExact?(f(this,"_monthsRegex")||ca.call(this),a?this._monthsStrictRegex:this._monthsRegex):this._monthsStrictRegex&&a?this._monthsStrictRegex:this._monthsRegex}function ca(){function a(a,b){return b.length-a.length}var b,c,d=[],e=[],f=[];for(b=0;12>b;b++)c=h([2e3,b]),d.push(this.monthsShort(c,"")),e.push(this.months(c,"")),f.push(this.months(c,"")),f.push(this.monthsShort(c,""));for(d.sort(a),e.sort(a),f.sort(a),b=0;12>b;b++)d[b]=R(d[b]),e[b]=R(e[b]),f[b]=R(f[b]);this._monthsRegex=new RegExp("^("+f.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+e.join("|")+")$","i"),this._monthsShortStrictRegex=new RegExp("^("+d.join("|")+")$","i")}function da(a){var b,c=a._a;return c&&-2===j(a).overflow&&(b=c[wd]<0||c[wd]>11?wd:c[xd]<1||c[xd]>V(c[vd],c[wd])?xd:c[yd]<0||c[yd]>24||24===c[yd]&&(0!==c[zd]||0!==c[Ad]||0!==c[Bd])?yd:c[zd]<0||c[zd]>59?zd:c[Ad]<0||c[Ad]>59?Ad:c[Bd]<0||c[Bd]>999?Bd:-1,j(a)._overflowDayOfYear&&(vd>b||b>xd)&&(b=xd),j(a)._overflowWeeks&&-1===b&&(b=Cd),j(a)._overflowWeekday&&-1===b&&(b=Dd),j(a).overflow=b),a}function ea(b){a.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+b)}function fa(a,b){var c=!0;return g(function(){return c&&(ea(a+"\nArguments: "+Array.prototype.slice.call(arguments).join(", ")+"\n"+(new Error).stack),c=!1),b.apply(this,arguments)},b)}function ga(a,b){Jd[a]||(ea(b),Jd[a]=!0)}function ha(a){var b,c,d,e,f,g,h=a._i,i=Kd.exec(h)||Ld.exec(h);if(i){for(j(a).iso=!0,b=0,c=Nd.length;c>b;b++)if(Nd[b][1].exec(i[1])){e=Nd[b][0],d=Nd[b][2]!==!1;break}if(null==e)return void(a._isValid=!1);if(i[3]){for(b=0,c=Od.length;c>b;b++)if(Od[b][1].exec(i[3])){f=(i[2]||" ")+Od[b][0];break}if(null==f)return void(a._isValid=!1)}if(!d&&null!=f)return void(a._isValid=!1);if(i[4]){if(!Md.exec(i[4]))return void(a._isValid=!1);g="Z"}a._f=e+(f||"")+(g||""),wa(a)}else a._isValid=!1}function ia(b){var c=Pd.exec(b._i);return null!==c?void(b._d=new Date(+c[1])):(ha(b),void(b._isValid===!1&&(delete b._isValid,a.createFromInputFallback(b))))}function ja(a,b,c,d,e,f,g){var h=new Date(a,b,c,d,e,f,g);return 100>a&&a>=0&&isFinite(h.getFullYear())&&h.setFullYear(a),h}function ka(a){var b=new Date(Date.UTC.apply(null,arguments));return 100>a&&a>=0&&isFinite(b.getUTCFullYear())&&b.setUTCFullYear(a),b}function la(a){return ma(a)?366:365}function ma(a){return a%4===0&&a%100!==0||a%400===0}function na(){return ma(this.year())}function oa(a,b,c){var d=7+b-c,e=(7+ka(a,0,d).getUTCDay()-b)%7;return-e+d-1}function pa(a,b,c,d,e){var f,g,h=(7+c-d)%7,i=oa(a,d,e),j=1+7*(b-1)+h+i;return 0>=j?(f=a-1,g=la(f)+j):j>la(a)?(f=a+1,g=j-la(a)):(f=a,g=j),{year:f,dayOfYear:g}}function qa(a,b,c){var d,e,f=oa(a.year(),b,c),g=Math.floor((a.dayOfYear()-f-1)/7)+1;return 1>g?(e=a.year()-1,d=g+ra(e,b,c)):g>ra(a.year(),b,c)?(d=g-ra(a.year(),b,c),e=a.year()+1):(e=a.year(),d=g),{week:d,year:e}}function ra(a,b,c){var d=oa(a,b,c),e=oa(a+1,b,c);return(la(a)-d+e)/7}function sa(a,b,c){return null!=a?a:null!=b?b:c}function ta(b){var c=new Date(a.now());return b._useUTC?[c.getUTCFullYear(),c.getUTCMonth(),c.getUTCDate()]:[c.getFullYear(),c.getMonth(),c.getDate()]}function ua(a){var b,c,d,e,f=[];if(!a._d){for(d=ta(a),a._w&&null==a._a[xd]&&null==a._a[wd]&&va(a),a._dayOfYear&&(e=sa(a._a[vd],d[vd]),a._dayOfYear>la(e)&&(j(a)._overflowDayOfYear=!0),c=ka(e,0,a._dayOfYear),a._a[wd]=c.getUTCMonth(),a._a[xd]=c.getUTCDate()),b=0;3>b&&null==a._a[b];++b)a._a[b]=f[b]=d[b];for(;7>b;b++)a._a[b]=f[b]=null==a._a[b]?2===b?1:0:a._a[b];24===a._a[yd]&&0===a._a[zd]&&0===a._a[Ad]&&0===a._a[Bd]&&(a._nextDay=!0,a._a[yd]=0),a._d=(a._useUTC?ka:ja).apply(null,f),null!=a._tzm&&a._d.setUTCMinutes(a._d.getUTCMinutes()-a._tzm),a._nextDay&&(a._a[yd]=24)}}function va(a){var b,c,d,e,f,g,h,i;b=a._w,null!=b.GG||null!=b.W||null!=b.E?(f=1,g=4,c=sa(b.GG,a._a[vd],qa(Ea(),1,4).year),d=sa(b.W,1),e=sa(b.E,1),(1>e||e>7)&&(i=!0)):(f=a._locale._week.dow,g=a._locale._week.doy,c=sa(b.gg,a._a[vd],qa(Ea(),f,g).year),d=sa(b.w,1),null!=b.d?(e=b.d,(0>e||e>6)&&(i=!0)):null!=b.e?(e=b.e+f,(b.e<0||b.e>6)&&(i=!0)):e=f),1>d||d>ra(c,f,g)?j(a)._overflowWeeks=!0:null!=i?j(a)._overflowWeekday=!0:(h=pa(c,d,e,f,g),a._a[vd]=h.year,a._dayOfYear=h.dayOfYear)}function wa(b){if(b._f===a.ISO_8601)return void ha(b);b._a=[],j(b).empty=!0;var c,d,e,f,g,h=""+b._i,i=h.length,k=0;for(e=N(b._f,b._locale).match($c)||[],c=0;c<e.length;c++)f=e[c],d=(h.match(P(f,b))||[])[0],d&&(g=h.substr(0,h.indexOf(d)),g.length>0&&j(b).unusedInput.push(g),h=h.slice(h.indexOf(d)+d.length),k+=d.length),bd[f]?(d?j(b).empty=!1:j(b).unusedTokens.push(f),U(f,d,b)):b._strict&&!d&&j(b).unusedTokens.push(f);j(b).charsLeftOver=i-k,h.length>0&&j(b).unusedInput.push(h),j(b).bigHour===!0&&b._a[yd]<=12&&b._a[yd]>0&&(j(b).bigHour=void 0),b._a[yd]=xa(b._locale,b._a[yd],b._meridiem),ua(b),da(b)}function xa(a,b,c){var d;return null==c?b:null!=a.meridiemHour?a.meridiemHour(b,c):null!=a.isPM?(d=a.isPM(c),d&&12>b&&(b+=12),d||12!==b||(b=0),b):b}function ya(a){var b,c,d,e,f;if(0===a._f.length)return j(a).invalidFormat=!0,void(a._d=new Date(NaN));for(e=0;e<a._f.length;e++)f=0,b=n({},a),null!=a._useUTC&&(b._useUTC=a._useUTC),b._f=a._f[e],wa(b),k(b)&&(f+=j(b).charsLeftOver,f+=10*j(b).unusedTokens.length,j(b).score=f,(null==d||d>f)&&(d=f,c=b));g(a,c||b)}function za(a){if(!a._d){var b=C(a._i);a._a=e([b.year,b.month,b.day||b.date,b.hour,b.minute,b.second,b.millisecond],function(a){return a&&parseInt(a,10)}),ua(a)}}function Aa(a){var b=new o(da(Ba(a)));return b._nextDay&&(b.add(1,"d"),b._nextDay=void 0),b}function Ba(a){var b=a._i,e=a._f;return a._locale=a._locale||z(a._l),null===b||void 0===e&&""===b?l({nullInput:!0}):("string"==typeof b&&(a._i=b=a._locale.preparse(b)),p(b)?new o(da(b)):(c(e)?ya(a):e?wa(a):d(b)?a._d=b:Ca(a),k(a)||(a._d=null),a))}function Ca(b){var f=b._i;void 0===f?b._d=new Date(a.now()):d(f)?b._d=new Date(+f):"string"==typeof f?ia(b):c(f)?(b._a=e(f.slice(0),function(a){return parseInt(a,10)}),ua(b)):"object"==typeof f?za(b):"number"==typeof f?b._d=new Date(f):a.createFromInputFallback(b)}function Da(a,b,c,d,e){var f={};return"boolean"==typeof c&&(d=c,c=void 0),f._isAMomentObject=!0,f._useUTC=f._isUTC=e,f._l=c,f._i=a,f._f=b,f._strict=d,Aa(f)}function Ea(a,b,c,d){return Da(a,b,c,d,!1)}function Fa(a,b){var d,e;if(1===b.length&&c(b[0])&&(b=b[0]),!b.length)return Ea();for(d=b[0],e=1;e<b.length;++e)(!b[e].isValid()||b[e][a](d))&&(d=b[e]);return d}function Ga(){var a=[].slice.call(arguments,0);return Fa("isBefore",a)}function Ha(){var a=[].slice.call(arguments,0);return Fa("isAfter",a)}function Ia(a){var b=C(a),c=b.year||0,d=b.quarter||0,e=b.month||0,f=b.week||0,g=b.day||0,h=b.hour||0,i=b.minute||0,j=b.second||0,k=b.millisecond||0;this._milliseconds=+k+1e3*j+6e4*i+36e5*h,this._days=+g+7*f,this._months=+e+3*d+12*c,this._data={},this._locale=z(),this._bubble()}function Ja(a){return a instanceof Ia}function Ka(a,b){J(a,0,0,function(){var a=this.utcOffset(),c="+";return 0>a&&(a=-a,c="-"),c+I(~~(a/60),2)+b+I(~~a%60,2)})}function La(a,b){var c=(b||"").match(a)||[],d=c[c.length-1]||[],e=(d+"").match(Ud)||["-",0,0],f=+(60*e[1])+r(e[2]);return"+"===e[0]?f:-f}function Ma(b,c){var e,f;return c._isUTC?(e=c.clone(),f=(p(b)||d(b)?+b:+Ea(b))-+e,e._d.setTime(+e._d+f),a.updateOffset(e,!1),e):Ea(b).local()}function Na(a){return 15*-Math.round(a._d.getTimezoneOffset()/15)}function Oa(b,c){var d,e=this._offset||0;return this.isValid()?null!=b?("string"==typeof b?b=La(qd,b):Math.abs(b)<16&&(b=60*b),!this._isUTC&&c&&(d=Na(this)),this._offset=b,this._isUTC=!0,null!=d&&this.add(d,"m"),e!==b&&(!c||this._changeInProgress?cb(this,Za(b-e,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,a.updateOffset(this,!0),this._changeInProgress=null)),this):this._isUTC?e:Na(this):null!=b?this:NaN}function Pa(a,b){return null!=a?("string"!=typeof a&&(a=-a),this.utcOffset(a,b),this):-this.utcOffset()}function Qa(a){return this.utcOffset(0,a)}function Ra(a){return this._isUTC&&(this.utcOffset(0,a),this._isUTC=!1,a&&this.subtract(Na(this),"m")),this}function Sa(){return this._tzm?this.utcOffset(this._tzm):"string"==typeof this._i&&this.utcOffset(La(pd,this._i)),this}function Ta(a){return this.isValid()?(a=a?Ea(a).utcOffset():0,(this.utcOffset()-a)%60===0):!1}function Ua(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Va(){if(!m(this._isDSTShifted))return this._isDSTShifted;var a={};if(n(a,this),a=Ba(a),a._a){var b=a._isUTC?h(a._a):Ea(a._a);this._isDSTShifted=this.isValid()&&s(a._a,b.toArray())>0}else this._isDSTShifted=!1;return this._isDSTShifted}function Wa(){return this.isValid()?!this._isUTC:!1}function Xa(){return this.isValid()?this._isUTC:!1}function Ya(){return this.isValid()?this._isUTC&&0===this._offset:!1}function Za(a,b){var c,d,e,g=a,h=null;return Ja(a)?g={ms:a._milliseconds,d:a._days,M:a._months}:"number"==typeof a?(g={},b?g[b]=a:g.milliseconds=a):(h=Vd.exec(a))?(c="-"===h[1]?-1:1,g={y:0,d:r(h[xd])*c,h:r(h[yd])*c,m:r(h[zd])*c,s:r(h[Ad])*c,ms:r(h[Bd])*c}):(h=Wd.exec(a))?(c="-"===h[1]?-1:1,g={y:$a(h[2],c),M:$a(h[3],c),d:$a(h[4],c),h:$a(h[5],c),m:$a(h[6],c),s:$a(h[7],c),w:$a(h[8],c)}):null==g?g={}:"object"==typeof g&&("from"in g||"to"in g)&&(e=ab(Ea(g.from),Ea(g.to)),g={},g.ms=e.milliseconds,g.M=e.months),d=new Ia(g),Ja(a)&&f(a,"_locale")&&(d._locale=a._locale),d}function $a(a,b){var c=a&&parseFloat(a.replace(",","."));return(isNaN(c)?0:c)*b}function _a(a,b){var c={milliseconds:0,months:0};return c.months=b.month()-a.month()+12*(b.year()-a.year()),a.clone().add(c.months,"M").isAfter(b)&&--c.months,c.milliseconds=+b-+a.clone().add(c.months,"M"),c}function ab(a,b){var c;return a.isValid()&&b.isValid()?(b=Ma(b,a),a.isBefore(b)?c=_a(a,b):(c=_a(b,a),c.milliseconds=-c.milliseconds,c.months=-c.months),c):{milliseconds:0,months:0}}function bb(a,b){return function(c,d){var e,f;return null===d||isNaN(+d)||(ga(b,"moment()."+b+"(period, number) is deprecated. Please use moment()."+b+"(number, period)."),f=c,c=d,d=f),c="string"==typeof c?+c:c,e=Za(c,d),cb(this,e,a),this}}function cb(b,c,d,e){var f=c._milliseconds,g=c._days,h=c._months;b.isValid()&&(e=null==e?!0:e,f&&b._d.setTime(+b._d+f*d),g&&G(b,"Date",F(b,"Date")+g*d),h&&Z(b,F(b,"Month")+h*d),e&&a.updateOffset(b,g||h))}function db(a,b){var c=a||Ea(),d=Ma(c,this).startOf("day"),e=this.diff(d,"days",!0),f=-6>e?"sameElse":-1>e?"lastWeek":0>e?"lastDay":1>e?"sameDay":2>e?"nextDay":7>e?"nextWeek":"sameElse",g=b&&(D(b[f])?b[f]():b[f]);return this.format(g||this.localeData().calendar(f,this,Ea(c)))}function eb(){return new o(this)}function fb(a,b){var c=p(a)?a:Ea(a);return this.isValid()&&c.isValid()?(b=B(m(b)?"millisecond":b),"millisecond"===b?+this>+c:+c<+this.clone().startOf(b)):!1}function gb(a,b){var c=p(a)?a:Ea(a);return this.isValid()&&c.isValid()?(b=B(m(b)?"millisecond":b),"millisecond"===b?+c>+this:+this.clone().endOf(b)<+c):!1}function hb(a,b,c){return this.isAfter(a,c)&&this.isBefore(b,c)}function ib(a,b){var c,d=p(a)?a:Ea(a);return this.isValid()&&d.isValid()?(b=B(b||"millisecond"),"millisecond"===b?+this===+d:(c=+d,+this.clone().startOf(b)<=c&&c<=+this.clone().endOf(b))):!1}function jb(a,b){return this.isSame(a,b)||this.isAfter(a,b)}function kb(a,b){return this.isSame(a,b)||this.isBefore(a,b)}function lb(a,b,c){var d,e,f,g;return this.isValid()?(d=Ma(a,this),d.isValid()?(e=6e4*(d.utcOffset()-this.utcOffset()),b=B(b),"year"===b||"month"===b||"quarter"===b?(g=mb(this,d),"quarter"===b?g/=3:"year"===b&&(g/=12)):(f=this-d,g="second"===b?f/1e3:"minute"===b?f/6e4:"hour"===b?f/36e5:"day"===b?(f-e)/864e5:"week"===b?(f-e)/6048e5:f),c?g:q(g)):NaN):NaN}function mb(a,b){var c,d,e=12*(b.year()-a.year())+(b.month()-a.month()),f=a.clone().add(e,"months");return 0>b-f?(c=a.clone().add(e-1,"months"),d=(b-f)/(f-c)):(c=a.clone().add(e+1,"months"),d=(b-f)/(c-f)),-(e+d)}function nb(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function ob(){var a=this.clone().utc();return 0<a.year()&&a.year()<=9999?D(Date.prototype.toISOString)?this.toDate().toISOString():M(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):M(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}function pb(b){var c=M(this,b||a.defaultFormat);return this.localeData().postformat(c)}function qb(a,b){return this.isValid()&&(p(a)&&a.isValid()||Ea(a).isValid())?Za({to:this,from:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function rb(a){return this.from(Ea(),a)}function sb(a,b){return this.isValid()&&(p(a)&&a.isValid()||Ea(a).isValid())?Za({from:this,to:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function tb(a){return this.to(Ea(),a)}function ub(a){var b;return void 0===a?this._locale._abbr:(b=z(a),null!=b&&(this._locale=b),this)}function vb(){return this._locale}function wb(a){switch(a=B(a)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===a&&this.weekday(0),"isoWeek"===a&&this.isoWeekday(1),"quarter"===a&&this.month(3*Math.floor(this.month()/3)),this}function xb(a){return a=B(a),void 0===a||"millisecond"===a?this:this.startOf(a).add(1,"isoWeek"===a?"week":a).subtract(1,"ms")}function yb(){return+this._d-6e4*(this._offset||0)}function zb(){return Math.floor(+this/1e3)}function Ab(){return this._offset?new Date(+this):this._d}function Bb(){var a=this;return[a.year(),a.month(),a.date(),a.hour(),a.minute(),a.second(),a.millisecond()]}function Cb(){var a=this;return{years:a.year(),months:a.month(),date:a.date(),hours:a.hours(),minutes:a.minutes(),seconds:a.seconds(),milliseconds:a.milliseconds()}}function Db(){return this.isValid()?this.toISOString():"null"}function Eb(){return k(this)}function Fb(){return g({},j(this))}function Gb(){return j(this).overflow}function Hb(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}function Ib(a,b){J(0,[a,a.length],0,b)}function Jb(a){return Nb.call(this,a,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function Kb(a){return Nb.call(this,a,this.isoWeek(),this.isoWeekday(),1,4)}function Lb(){return ra(this.year(),1,4)}function Mb(){var a=this.localeData()._week;return ra(this.year(),a.dow,a.doy)}function Nb(a,b,c,d,e){var f;return null==a?qa(this,d,e).year:(f=ra(a,d,e),b>f&&(b=f),Ob.call(this,a,b,c,d,e))}function Ob(a,b,c,d,e){var f=pa(a,b,c,d,e),g=ka(f.year,0,f.dayOfYear);return this.year(g.getUTCFullYear()),this.month(g.getUTCMonth()),this.date(g.getUTCDate()),this}function Pb(a){return null==a?Math.ceil((this.month()+1)/3):this.month(3*(a-1)+this.month()%3)}function Qb(a){return qa(a,this._week.dow,this._week.doy).week}function Rb(){return this._week.dow}function Sb(){return this._week.doy}function Tb(a){var b=this.localeData().week(this);return null==a?b:this.add(7*(a-b),"d")}function Ub(a){var b=qa(this,1,4).week;return null==a?b:this.add(7*(a-b),"d")}function Vb(a,b){return"string"!=typeof a?a:isNaN(a)?(a=b.weekdaysParse(a),"number"==typeof a?a:null):parseInt(a,10)}function Wb(a,b){return c(this._weekdays)?this._weekdays[a.day()]:this._weekdays[this._weekdays.isFormat.test(b)?"format":"standalone"][a.day()]}function Xb(a){return this._weekdaysShort[a.day()]}function Yb(a){return this._weekdaysMin[a.day()]}function Zb(a,b,c){var d,e,f;for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),d=0;7>d;d++){if(e=Ea([2e3,1]).day(d),c&&!this._fullWeekdaysParse[d]&&(this._fullWeekdaysParse[d]=new RegExp("^"+this.weekdays(e,"").replace(".",".?")+"$","i"),this._shortWeekdaysParse[d]=new RegExp("^"+this.weekdaysShort(e,"").replace(".",".?")+"$","i"),this._minWeekdaysParse[d]=new RegExp("^"+this.weekdaysMin(e,"").replace(".",".?")+"$","i")),this._weekdaysParse[d]||(f="^"+this.weekdays(e,"")+"|^"+this.weekdaysShort(e,"")+"|^"+this.weekdaysMin(e,""),this._weekdaysParse[d]=new RegExp(f.replace(".",""),"i")),c&&"dddd"===b&&this._fullWeekdaysParse[d].test(a))return d;if(c&&"ddd"===b&&this._shortWeekdaysParse[d].test(a))return d;if(c&&"dd"===b&&this._minWeekdaysParse[d].test(a))return d;if(!c&&this._weekdaysParse[d].test(a))return d}}function $b(a){if(!this.isValid())return null!=a?this:NaN;var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=Vb(a,this.localeData()),this.add(a-b,"d")):b}function _b(a){if(!this.isValid())return null!=a?this:NaN;var b=(this.day()+7-this.localeData()._week.dow)%7;return null==a?b:this.add(a-b,"d")}function ac(a){return this.isValid()?null==a?this.day()||7:this.day(this.day()%7?a:a-7):null!=a?this:NaN}function bc(a){var b=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==a?b:this.add(a-b,"d")}function cc(){return this.hours()%12||12}function dc(a,b){J(a,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),b)})}function ec(a,b){return b._meridiemParse}function fc(a){return"p"===(a+"").toLowerCase().charAt(0)}function gc(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"}function hc(a,b){b[Bd]=r(1e3*("0."+a))}function ic(){return this._isUTC?"UTC":""}function jc(){return this._isUTC?"Coordinated Universal Time":""}function kc(a){return Ea(1e3*a)}function lc(){return Ea.apply(null,arguments).parseZone()}function mc(a,b,c){var d=this._calendar[a];return D(d)?d.call(b,c):d}function nc(a){var b=this._longDateFormat[a],c=this._longDateFormat[a.toUpperCase()];return b||!c?b:(this._longDateFormat[a]=c.replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a])}function oc(){return this._invalidDate}function pc(a){return this._ordinal.replace("%d",a)}function qc(a){return a}function rc(a,b,c,d){var e=this._relativeTime[c];return D(e)?e(a,b,c,d):e.replace(/%d/i,a)}function sc(a,b){var c=this._relativeTime[a>0?"future":"past"];return D(c)?c(b):c.replace(/%s/i,b)}function tc(a){var b,c;for(c in a)b=a[c],D(b)?this[c]=b:this["_"+c]=b;this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+/\d{1,2}/.source)}function uc(a,b,c,d){var e=z(),f=h().set(d,b);return e[c](f,a)}function vc(a,b,c,d,e){if("number"==typeof a&&(b=a,a=void 0),a=a||"",null!=b)return uc(a,b,c,e);var f,g=[];for(f=0;d>f;f++)g[f]=uc(a,f,c,e);return g}function wc(a,b){return vc(a,b,"months",12,"month")}function xc(a,b){return vc(a,b,"monthsShort",12,"month")}function yc(a,b){return vc(a,b,"weekdays",7,"day")}function zc(a,b){return vc(a,b,"weekdaysShort",7,"day")}function Ac(a,b){return vc(a,b,"weekdaysMin",7,"day")}function Bc(){var a=this._data;return this._milliseconds=se(this._milliseconds),this._days=se(this._days),this._months=se(this._months),a.milliseconds=se(a.milliseconds),a.seconds=se(a.seconds),a.minutes=se(a.minutes),a.hours=se(a.hours),a.months=se(a.months),a.years=se(a.years),this}function Cc(a,b,c,d){var e=Za(b,c);return a._milliseconds+=d*e._milliseconds,a._days+=d*e._days,a._months+=d*e._months,a._bubble()}function Dc(a,b){return Cc(this,a,b,1)}function Ec(a,b){return Cc(this,a,b,-1)}function Fc(a){return 0>a?Math.floor(a):Math.ceil(a)}function Gc(){var a,b,c,d,e,f=this._milliseconds,g=this._days,h=this._months,i=this._data;return f>=0&&g>=0&&h>=0||0>=f&&0>=g&&0>=h||(f+=864e5*Fc(Ic(h)+g),g=0,h=0),i.milliseconds=f%1e3,a=q(f/1e3),i.seconds=a%60,b=q(a/60),i.minutes=b%60,c=q(b/60),i.hours=c%24,g+=q(c/24),e=q(Hc(g)),h+=e,g-=Fc(Ic(e)),d=q(h/12),h%=12,i.days=g,i.months=h,i.years=d,this}function Hc(a){return 4800*a/146097}function Ic(a){return 146097*a/4800}function Jc(a){var b,c,d=this._milliseconds;if(a=B(a),"month"===a||"year"===a)return b=this._days+d/864e5,c=this._months+Hc(b),"month"===a?c:c/12;switch(b=this._days+Math.round(Ic(this._months)),a){case"week":return b/7+d/6048e5;case"day":return b+d/864e5;case"hour":return 24*b+d/36e5;case"minute":return 1440*b+d/6e4;case"second":return 86400*b+d/1e3;case"millisecond":return Math.floor(864e5*b)+d;default:throw new Error("Unknown unit "+a)}}function Kc(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*r(this._months/12)}function Lc(a){return function(){return this.as(a)}}function Mc(a){return a=B(a),this[a+"s"]()}function Nc(a){return function(){return this._data[a]}}function Oc(){return q(this.days()/7)}function Pc(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function Qc(a,b,c){var d=Za(a).abs(),e=Ie(d.as("s")),f=Ie(d.as("m")),g=Ie(d.as("h")),h=Ie(d.as("d")),i=Ie(d.as("M")),j=Ie(d.as("y")),k=e<Je.s&&["s",e]||1>=f&&["m"]||f<Je.m&&["mm",f]||1>=g&&["h"]||g<Je.h&&["hh",g]||1>=h&&["d"]||h<Je.d&&["dd",h]||1>=i&&["M"]||i<Je.M&&["MM",i]||1>=j&&["y"]||["yy",j];return k[2]=b,k[3]=+a>0,k[4]=c,Pc.apply(null,k)}function Rc(a,b){return void 0===Je[a]?!1:void 0===b?Je[a]:(Je[a]=b,!0)}function Sc(a){var b=this.localeData(),c=Qc(this,!a,b);return a&&(c=b.pastFuture(+this,c)),b.postformat(c)}function Tc(){var a,b,c,d=Ke(this._milliseconds)/1e3,e=Ke(this._days),f=Ke(this._months);a=q(d/60),b=q(a/60),d%=60,a%=60,c=q(f/12),f%=12;var g=c,h=f,i=e,j=b,k=a,l=d,m=this.asSeconds();return m?(0>m?"-":"")+"P"+(g?g+"Y":"")+(h?h+"M":"")+(i?i+"D":"")+(j||k||l?"T":"")+(j?j+"H":"")+(k?k+"M":"")+(l?l+"S":""):"P0D"}var Uc,Vc,Wc=a.momentProperties=[],Xc=!1,Yc={},Zc={},$c=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,_c=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,ad={},bd={},cd=/\d/,dd=/\d\d/,ed=/\d{3}/,fd=/\d{4}/,gd=/[+-]?\d{6}/,hd=/\d\d?/,id=/\d\d\d\d?/,jd=/\d\d\d\d\d\d?/,kd=/\d{1,3}/,ld=/\d{1,4}/,md=/[+-]?\d{1,6}/,nd=/\d+/,od=/[+-]?\d+/,pd=/Z|[+-]\d\d:?\d\d/gi,qd=/Z|[+-]\d\d(?::?\d\d)?/gi,rd=/[+-]?\d+(\.\d{1,3})?/,sd=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,td={},ud={},vd=0,wd=1,xd=2,yd=3,zd=4,Ad=5,Bd=6,Cd=7,Dd=8;J("M",["MM",2],"Mo",function(){return this.month()+1}),J("MMM",0,0,function(a){return this.localeData().monthsShort(this,a)}),J("MMMM",0,0,function(a){return this.localeData().months(this,a)}),A("month","M"),O("M",hd),O("MM",hd,dd),O("MMM",function(a,b){return b.monthsShortRegex(a)}),O("MMMM",function(a,b){return b.monthsRegex(a)}),S(["M","MM"],function(a,b){b[wd]=r(a)-1}),S(["MMM","MMMM"],function(a,b,c,d){var e=c._locale.monthsParse(a,d,c._strict);null!=e?b[wd]=e:j(c).invalidMonth=a});var Ed=/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/,Fd="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),Gd="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),Hd=sd,Id=sd,Jd={};a.suppressDeprecationWarnings=!1;var Kd=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,Ld=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,Md=/Z|[+-]\d\d(?::?\d\d)?/,Nd=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],Od=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Pd=/^\/?Date\((\-?\d+)/i;a.createFromInputFallback=fa("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(a){a._d=new Date(a._i+(a._useUTC?" UTC":""))}),J("Y",0,0,function(){var a=this.year();return 9999>=a?""+a:"+"+a}),J(0,["YY",2],0,function(){return this.year()%100}),J(0,["YYYY",4],0,"year"),J(0,["YYYYY",5],0,"year"),J(0,["YYYYYY",6,!0],0,"year"),A("year","y"),O("Y",od),O("YY",hd,dd),O("YYYY",ld,fd),O("YYYYY",md,gd),O("YYYYYY",md,gd),S(["YYYYY","YYYYYY"],vd),S("YYYY",function(b,c){c[vd]=2===b.length?a.parseTwoDigitYear(b):r(b)}),S("YY",function(b,c){c[vd]=a.parseTwoDigitYear(b)}),S("Y",function(a,b){b[vd]=parseInt(a,10)}),a.parseTwoDigitYear=function(a){return r(a)+(r(a)>68?1900:2e3)};var Qd=E("FullYear",!1);a.ISO_8601=function(){};var Rd=fa("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(){var a=Ea.apply(null,arguments);return this.isValid()&&a.isValid()?this>a?this:a:l()}),Sd=fa("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",function(){var a=Ea.apply(null,arguments);return this.isValid()&&a.isValid()?a>this?this:a:l()}),Td=function(){return Date.now?Date.now():+new Date};Ka("Z",":"),Ka("ZZ",""),O("Z",qd),O("ZZ",qd),S(["Z","ZZ"],function(a,b,c){c._useUTC=!0,c._tzm=La(qd,a)});var Ud=/([\+\-]|\d\d)/gi;a.updateOffset=function(){};var Vd=/^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?\d*)?$/,Wd=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;
Za.fn=Ia.prototype;var Xd=bb(1,"add"),Yd=bb(-1,"subtract");a.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";var Zd=fa("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(a){return void 0===a?this.localeData():this.locale(a)});J(0,["gg",2],0,function(){return this.weekYear()%100}),J(0,["GG",2],0,function(){return this.isoWeekYear()%100}),Ib("gggg","weekYear"),Ib("ggggg","weekYear"),Ib("GGGG","isoWeekYear"),Ib("GGGGG","isoWeekYear"),A("weekYear","gg"),A("isoWeekYear","GG"),O("G",od),O("g",od),O("GG",hd,dd),O("gg",hd,dd),O("GGGG",ld,fd),O("gggg",ld,fd),O("GGGGG",md,gd),O("ggggg",md,gd),T(["gggg","ggggg","GGGG","GGGGG"],function(a,b,c,d){b[d.substr(0,2)]=r(a)}),T(["gg","GG"],function(b,c,d,e){c[e]=a.parseTwoDigitYear(b)}),J("Q",0,"Qo","quarter"),A("quarter","Q"),O("Q",cd),S("Q",function(a,b){b[wd]=3*(r(a)-1)}),J("w",["ww",2],"wo","week"),J("W",["WW",2],"Wo","isoWeek"),A("week","w"),A("isoWeek","W"),O("w",hd),O("ww",hd,dd),O("W",hd),O("WW",hd,dd),T(["w","ww","W","WW"],function(a,b,c,d){b[d.substr(0,1)]=r(a)});var $d={dow:0,doy:6};J("D",["DD",2],"Do","date"),A("date","D"),O("D",hd),O("DD",hd,dd),O("Do",function(a,b){return a?b._ordinalParse:b._ordinalParseLenient}),S(["D","DD"],xd),S("Do",function(a,b){b[xd]=r(a.match(hd)[0],10)});var _d=E("Date",!0);J("d",0,"do","day"),J("dd",0,0,function(a){return this.localeData().weekdaysMin(this,a)}),J("ddd",0,0,function(a){return this.localeData().weekdaysShort(this,a)}),J("dddd",0,0,function(a){return this.localeData().weekdays(this,a)}),J("e",0,0,"weekday"),J("E",0,0,"isoWeekday"),A("day","d"),A("weekday","e"),A("isoWeekday","E"),O("d",hd),O("e",hd),O("E",hd),O("dd",sd),O("ddd",sd),O("dddd",sd),T(["dd","ddd","dddd"],function(a,b,c,d){var e=c._locale.weekdaysParse(a,d,c._strict);null!=e?b.d=e:j(c).invalidWeekday=a}),T(["d","e","E"],function(a,b,c,d){b[d]=r(a)});var ae="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),be="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),ce="Su_Mo_Tu_We_Th_Fr_Sa".split("_");J("DDD",["DDDD",3],"DDDo","dayOfYear"),A("dayOfYear","DDD"),O("DDD",kd),O("DDDD",ed),S(["DDD","DDDD"],function(a,b,c){c._dayOfYear=r(a)}),J("H",["HH",2],0,"hour"),J("h",["hh",2],0,cc),J("hmm",0,0,function(){return""+cc.apply(this)+I(this.minutes(),2)}),J("hmmss",0,0,function(){return""+cc.apply(this)+I(this.minutes(),2)+I(this.seconds(),2)}),J("Hmm",0,0,function(){return""+this.hours()+I(this.minutes(),2)}),J("Hmmss",0,0,function(){return""+this.hours()+I(this.minutes(),2)+I(this.seconds(),2)}),dc("a",!0),dc("A",!1),A("hour","h"),O("a",ec),O("A",ec),O("H",hd),O("h",hd),O("HH",hd,dd),O("hh",hd,dd),O("hmm",id),O("hmmss",jd),O("Hmm",id),O("Hmmss",jd),S(["H","HH"],yd),S(["a","A"],function(a,b,c){c._isPm=c._locale.isPM(a),c._meridiem=a}),S(["h","hh"],function(a,b,c){b[yd]=r(a),j(c).bigHour=!0}),S("hmm",function(a,b,c){var d=a.length-2;b[yd]=r(a.substr(0,d)),b[zd]=r(a.substr(d)),j(c).bigHour=!0}),S("hmmss",function(a,b,c){var d=a.length-4,e=a.length-2;b[yd]=r(a.substr(0,d)),b[zd]=r(a.substr(d,2)),b[Ad]=r(a.substr(e)),j(c).bigHour=!0}),S("Hmm",function(a,b,c){var d=a.length-2;b[yd]=r(a.substr(0,d)),b[zd]=r(a.substr(d))}),S("Hmmss",function(a,b,c){var d=a.length-4,e=a.length-2;b[yd]=r(a.substr(0,d)),b[zd]=r(a.substr(d,2)),b[Ad]=r(a.substr(e))});var de=/[ap]\.?m?\.?/i,ee=E("Hours",!0);J("m",["mm",2],0,"minute"),A("minute","m"),O("m",hd),O("mm",hd,dd),S(["m","mm"],zd);var fe=E("Minutes",!1);J("s",["ss",2],0,"second"),A("second","s"),O("s",hd),O("ss",hd,dd),S(["s","ss"],Ad);var ge=E("Seconds",!1);J("S",0,0,function(){return~~(this.millisecond()/100)}),J(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),J(0,["SSS",3],0,"millisecond"),J(0,["SSSS",4],0,function(){return 10*this.millisecond()}),J(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),J(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),J(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),J(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),J(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),A("millisecond","ms"),O("S",kd,cd),O("SS",kd,dd),O("SSS",kd,ed);var he;for(he="SSSS";he.length<=9;he+="S")O(he,nd);for(he="S";he.length<=9;he+="S")S(he,hc);var ie=E("Milliseconds",!1);J("z",0,0,"zoneAbbr"),J("zz",0,0,"zoneName");var je=o.prototype;je.add=Xd,je.calendar=db,je.clone=eb,je.diff=lb,je.endOf=xb,je.format=pb,je.from=qb,je.fromNow=rb,je.to=sb,je.toNow=tb,je.get=H,je.invalidAt=Gb,je.isAfter=fb,je.isBefore=gb,je.isBetween=hb,je.isSame=ib,je.isSameOrAfter=jb,je.isSameOrBefore=kb,je.isValid=Eb,je.lang=Zd,je.locale=ub,je.localeData=vb,je.max=Sd,je.min=Rd,je.parsingFlags=Fb,je.set=H,je.startOf=wb,je.subtract=Yd,je.toArray=Bb,je.toObject=Cb,je.toDate=Ab,je.toISOString=ob,je.toJSON=Db,je.toString=nb,je.unix=zb,je.valueOf=yb,je.creationData=Hb,je.year=Qd,je.isLeapYear=na,je.weekYear=Jb,je.isoWeekYear=Kb,je.quarter=je.quarters=Pb,je.month=$,je.daysInMonth=_,je.week=je.weeks=Tb,je.isoWeek=je.isoWeeks=Ub,je.weeksInYear=Mb,je.isoWeeksInYear=Lb,je.date=_d,je.day=je.days=$b,je.weekday=_b,je.isoWeekday=ac,je.dayOfYear=bc,je.hour=je.hours=ee,je.minute=je.minutes=fe,je.second=je.seconds=ge,je.millisecond=je.milliseconds=ie,je.utcOffset=Oa,je.utc=Qa,je.local=Ra,je.parseZone=Sa,je.hasAlignedHourOffset=Ta,je.isDST=Ua,je.isDSTShifted=Va,je.isLocal=Wa,je.isUtcOffset=Xa,je.isUtc=Ya,je.isUTC=Ya,je.zoneAbbr=ic,je.zoneName=jc,je.dates=fa("dates accessor is deprecated. Use date instead.",_d),je.months=fa("months accessor is deprecated. Use month instead",$),je.years=fa("years accessor is deprecated. Use year instead",Qd),je.zone=fa("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779",Pa);var ke=je,le={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},me={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},ne="Invalid date",oe="%d",pe=/\d{1,2}/,qe={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},re=t.prototype;re._calendar=le,re.calendar=mc,re._longDateFormat=me,re.longDateFormat=nc,re._invalidDate=ne,re.invalidDate=oc,re._ordinal=oe,re.ordinal=pc,re._ordinalParse=pe,re.preparse=qc,re.postformat=qc,re._relativeTime=qe,re.relativeTime=rc,re.pastFuture=sc,re.set=tc,re.months=W,re._months=Fd,re.monthsShort=X,re._monthsShort=Gd,re.monthsParse=Y,re._monthsRegex=Id,re.monthsRegex=ba,re._monthsShortRegex=Hd,re.monthsShortRegex=aa,re.week=Qb,re._week=$d,re.firstDayOfYear=Sb,re.firstDayOfWeek=Rb,re.weekdays=Wb,re._weekdays=ae,re.weekdaysMin=Yb,re._weekdaysMin=ce,re.weekdaysShort=Xb,re._weekdaysShort=be,re.weekdaysParse=Zb,re.isPM=fc,re._meridiemParse=de,re.meridiem=gc,x("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(a){var b=a%10,c=1===r(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),a.lang=fa("moment.lang is deprecated. Use moment.locale instead.",x),a.langData=fa("moment.langData is deprecated. Use moment.localeData instead.",z);var se=Math.abs,te=Lc("ms"),ue=Lc("s"),ve=Lc("m"),we=Lc("h"),xe=Lc("d"),ye=Lc("w"),ze=Lc("M"),Ae=Lc("y"),Be=Nc("milliseconds"),Ce=Nc("seconds"),De=Nc("minutes"),Ee=Nc("hours"),Fe=Nc("days"),Ge=Nc("months"),He=Nc("years"),Ie=Math.round,Je={s:45,m:45,h:22,d:26,M:11},Ke=Math.abs,Le=Ia.prototype;Le.abs=Bc,Le.add=Dc,Le.subtract=Ec,Le.as=Jc,Le.asMilliseconds=te,Le.asSeconds=ue,Le.asMinutes=ve,Le.asHours=we,Le.asDays=xe,Le.asWeeks=ye,Le.asMonths=ze,Le.asYears=Ae,Le.valueOf=Kc,Le._bubble=Gc,Le.get=Mc,Le.milliseconds=Be,Le.seconds=Ce,Le.minutes=De,Le.hours=Ee,Le.days=Fe,Le.weeks=Oc,Le.months=Ge,Le.years=He,Le.humanize=Sc,Le.toISOString=Tc,Le.toString=Tc,Le.toJSON=Tc,Le.locale=ub,Le.localeData=vb,Le.toIsoString=fa("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Tc),Le.lang=Zd,J("X",0,0,"unix"),J("x",0,0,"valueOf"),O("x",od),O("X",rd),S("X",function(a,b,c){c._d=new Date(1e3*parseFloat(a,10))}),S("x",function(a,b,c){c._d=new Date(r(a))}),a.version="2.11.2",b(Ea),a.fn=ke,a.min=Ga,a.max=Ha,a.now=Td,a.utc=h,a.unix=kc,a.months=wc,a.isDate=d,a.locale=x,a.invalid=l,a.duration=Za,a.isMoment=p,a.weekdays=yc,a.parseZone=lc,a.localeData=z,a.isDuration=Ja,a.monthsShort=xc,a.weekdaysMin=Ac,a.defineLocale=y,a.weekdaysShort=zc,a.normalizeUnits=B,a.relativeTimeThreshold=Rc,a.prototype=ke;var Me=a;return Me});
/**
 * Browser class Plugin v1.0
 *
 * Public repository: https://github.com/hosszukalman/browserclass
 * Examples and documentation at:
 * Author: Kálmán Hosszu
 * - twitter: kalmanhosszu
 * - github: https://github.com/hosszukalman
 * - drupal.org: https://drupal.org/user/267481
 */

var BrowserClass = {
  init: function() {
    this.classes = [];
    this.agent = navigator.userAgent.toLowerCase();
    this.checkBrowser();
    this.checkPlatform();
    if (this.isMobile(this.classes)) {
      this.classes.push('mobile');
    } else {
      this.classes.push('desktop');
    }
  },

  checkBrowser: function() {
    var matches = [];
    var aresult = '';
    var aversion = '';
    var resultant = '';

    var iePattern = /(?:\b(ms)?ie\s+|\btrident\/7\.0;.*\s+rv:)(\d+)/;
    var ieMatch = this.agent.match(iePattern);

    if (ieMatch) {
      this.classes.push('ie');

      if (typeof ieMatch[2] !== 'undefined') {
        this.classes.push('ie' + ieMatch[2]);
      }
    }

    if (this.agent.match(/opera/)) {
      this.classes.push('opera');

      aresult = this.stristr(this.agent, 'version').split('/');
      if(aresult[1]) {
        aversion = aresult[1].split(' ');
        this.classes.push('opera' + this.clearVersion(aversion[0]));
      }
    }

    // Check for chrome desktop first, then chrome mobile, lastly check for
    // safari, as these are mutually exclusive.
    if (this.agent.match(/chrome/)) {
      this.classes.push('chrome');

      aresult = this.getSrtingAfter(this.agent, 'chrome').split('/');
      aversion = aresult[1].split(' ');
      this.classes.push('chrome' + this.clearVersion(aversion[0]));
    } else if (this.agent.match(/crios/)) {
      this.classes.push('chrome');
      aresult = this.getSrtingAfter(this.agent, 'crios').split('/');

      if (aresult[1]) {
        aversion = aresult[1].split(' ');
        this.classes.push('chrome' + this.clearVersion(aversion[0]));
      }
    } else if (this.agent.match(/safari/)) {
      this.classes.push('safari');
      aresult = this.getSrtingAfter(this.agent, 'version').split('/');

      if(aresult[1]) {
        aversion = aresult[1].split(' ');
        this.classes.push('safari' + this.clearVersion(aversion[0]));
      }
    }

    if (this.agent.match(/netscape/)) {
      this.classes.push('netscape');

      matches = this.agent.match(/navigator\/([^ ]*)/);
      if (matches) {
        this.classes.push('netscape' + this.clearVersion(matches[1]));
      }
      else {
        matches = this.agent.match(/netscape6?\/([^ ]*)/);
        if (matches) {
          this.classes.push('netscape' + this.clearVersion(matches[1]));
        }
      }
    }

    if (this.agent.match(/firefox/)) {
      this.classes.push('ff');
      matches = this.agent.match(/firefox[\/ \(]([^ ;\)]+)/);
      if(matches) {
        this.classes.push('ff' + this.clearVersion(matches[1]));
      }
    }

    if (this.agent.match(/konqueror/)) {
      this.classes.push('konqueror');

      aresult = this.getSrtingAfter(this.agent, 'konqueror').split(' ');
      aversion = aresult[0].split('/');
      this.classes.push('konqueror' + this.clearVersion(aversion[1]));
    }

    if (this.agent.match(/dillo/)) {
      this.classes.push('dillo');
    }

    if (this.agent.match(/chimera/)) {
      this.classes.push('chimera');
    }

    if (this.agent.match(/beonex/)) {
      this.classes.push('beonex');
    }

    if (this.agent.match(/aweb/)) {
      this.classes.push('aweb');
    }

    if (this.agent.match(/amaya/)) {
      this.classes.push('amaya');
    }

    if (this.agent.match(/icab/)) {
      this.classes.push('icab');
    }

    if (this.agent.match(/lynx/)) {
      this.classes.push('lynx');
    }

    if (this.agent.match(/galeon/)) {
      this.classes.push('galeon');
    }

    if (this.agent.match(/opera mini/)) {
      this.classes.push('operamini');

      resultant = this.getSrtingAfter(this.agent, 'opera mini');
      if(resultant.match('/\//')) {
        aresult = resultant.split('/');
        aversion = aresult[1].split(' ');
        this.classes.push('operamini' + this.clearVersion(aversion[0]));
      }
      else {
        aversion = this.getSrtingAfter(resultant, 'opera mini').split(' ');
        this.classes.push('operamini' + this.clearVersion(aversion[1]));
      }
    }
  },

  checkPlatform: function() {
    if (this.agent.match(/windows/)) {
      this.classes.push('win');
    }

    if (this.agent.match(/ipad/)) {
      this.classes.push('ipad');
    }

    if (this.agent.match(/ipod/)) {
      this.classes.push('ipod');
    }

    if (this.agent.match(/iphone/)) {
      this.classes.push('iphone');
    }

    if (this.agent.match(/mac/)) {
      this.classes.push('mac');
    }

    if (this.agent.match(/android/)) {
      this.classes.push('android');
    }

    if (this.agent.match(/linux/)) {
      this.classes.push('linux');
    }

    if (this.agent.match(/nokia/)) {
      this.classes.push('nokia');
    }

    if (this.agent.match(/blackberry/)) {
      this.classes.push('blackberry');
    }

    if (this.agent.match(/freebsd/)) {
      this.classes.push('freebsd');
    }

    if (this.agent.match(/openbsd/)) {
      this.classes.push('openbsd');
    }

    if (this.agent.match(/netbsd/)) {
      this.classes.push('netbsd');
    }
  },

  isMobile: function(classes) {
    var mobile_devices = ['ipad', 'ipod', 'iphone', 'android', 'blackberry', 'operamini'];
    var mobile_devices_test = false;

    for (var i = 0; i < mobile_devices.length; i++) {
      if (classes.indexOf(mobile_devices[i]) != -1) {
        mobile_devices_test = true;

        // Terminate the for loop, since a match has been found.
        return false;
      }
    }

    if (mobile_devices_test || this.agent.match(/(up.browser|up.link|mmp|symbian|smartphone|midp|wap|vodafone|o2|pocket|kindle|mobile|pda|psp|treo)/)) {
      return true;
    }
  },

  clearVersion: function(version) {
    version = version.replace('/[^0-9,.,a-z,A-Z-]/', '');
    var find = (version + '').indexOf('.');
    return version.substr(0, find);
  },

  getSrtingAfter: function(string, find) {
    if (matches = string.match('(' + find + '.*)')) {
      return matches[1];
    }

    return null;
  }

};

window.onload = function () {
  BrowserClass.init();
  var element = document.getElementsByTagName("BODY")[0];
  element.className += " " + BrowserClass.classes.join(' ');
}

/*!
 * Chart.js
 * http://chartjs.org/
 * Version: 2.1.3
 *
 * Copyright 2016 Nick Downie
 * Released under the MIT license
 * https://github.com/chartjs/Chart.js/blob/master/LICENSE.md
 */
!function t(e,i,a){function o(n,r){if(!i[n]){if(!e[n]){var h="function"==typeof require&&require;if(!r&&h)return h(n,!0);if(s)return s(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}var c=i[n]={exports:{}};e[n][0].call(c.exports,function(t){var i=e[n][1][t];return o(i?i:t)},c,c.exports,t,e,i,a)}return i[n].exports}for(var s="function"==typeof require&&require,n=0;n<a.length;n++)o(a[n]);return o}({1:[function(t,e,i){},{}],2:[function(t,e,i){function a(t){if(t){var e=/^#([a-fA-F0-9]{3})$/,i=/^#([a-fA-F0-9]{6})$/,a=/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,o=/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,s=/(\w+)/,n=[0,0,0],r=1,h=t.match(e);if(h){h=h[1];for(var l=0;l<n.length;l++)n[l]=parseInt(h[l]+h[l],16)}else if(h=t.match(i)){h=h[1];for(var l=0;l<n.length;l++)n[l]=parseInt(h.slice(2*l,2*l+2),16)}else if(h=t.match(a)){for(var l=0;l<n.length;l++)n[l]=parseInt(h[l+1]);r=parseFloat(h[4])}else if(h=t.match(o)){for(var l=0;l<n.length;l++)n[l]=Math.round(2.55*parseFloat(h[l+1]));r=parseFloat(h[4])}else if(h=t.match(s)){if("transparent"==h[1])return[0,0,0,0];if(n=y[h[1]],!n)return}for(var l=0;l<n.length;l++)n[l]=x(n[l],0,255);return r=r||0==r?x(r,0,1):1,n[3]=r,n}}function o(t){if(t){var e=/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,i=t.match(e);if(i){var a=parseFloat(i[4]),o=x(parseInt(i[1]),0,360),s=x(parseFloat(i[2]),0,100),n=x(parseFloat(i[3]),0,100),r=x(isNaN(a)?1:a,0,1);return[o,s,n,r]}}}function s(t){if(t){var e=/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,i=t.match(e);if(i){var a=parseFloat(i[4]),o=x(parseInt(i[1]),0,360),s=x(parseFloat(i[2]),0,100),n=x(parseFloat(i[3]),0,100),r=x(isNaN(a)?1:a,0,1);return[o,s,n,r]}}}function n(t){var e=a(t);return e&&e.slice(0,3)}function r(t){var e=o(t);return e&&e.slice(0,3)}function h(t){var e=a(t);return e?e[3]:(e=o(t))?e[3]:(e=s(t))?e[3]:void 0}function l(t){return"#"+v(t[0])+v(t[1])+v(t[2])}function c(t,e){return 1>e||t[3]&&t[3]<1?d(t,e):"rgb("+t[0]+", "+t[1]+", "+t[2]+")"}function d(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+e+")"}function u(t,e){if(1>e||t[3]&&t[3]<1)return g(t,e);var i=Math.round(t[0]/255*100),a=Math.round(t[1]/255*100),o=Math.round(t[2]/255*100);return"rgb("+i+"%, "+a+"%, "+o+"%)"}function g(t,e){var i=Math.round(t[0]/255*100),a=Math.round(t[1]/255*100),o=Math.round(t[2]/255*100);return"rgba("+i+"%, "+a+"%, "+o+"%, "+(e||t[3]||1)+")"}function f(t,e){return 1>e||t[3]&&t[3]<1?p(t,e):"hsl("+t[0]+", "+t[1]+"%, "+t[2]+"%)"}function p(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"hsla("+t[0]+", "+t[1]+"%, "+t[2]+"%, "+e+")"}function m(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"hwb("+t[0]+", "+t[1]+"%, "+t[2]+"%"+(void 0!==e&&1!==e?", "+e:"")+")"}function b(t){return k[t.slice(0,3)]}function x(t,e,i){return Math.min(Math.max(e,t),i)}function v(t){var e=t.toString(16).toUpperCase();return e.length<2?"0"+e:e}var y=t("color-name");e.exports={getRgba:a,getHsla:o,getRgb:n,getHsl:r,getHwb:s,getAlpha:h,hexString:l,rgbString:c,rgbaString:d,percentString:u,percentaString:g,hslString:f,hslaString:p,hwbString:m,keyword:b};var k={};for(var S in y)k[y[S]]=S},{"color-name":6}],3:[function(t,e,i){var a=t("color-convert"),o=t("chartjs-color-string"),s=function(t){if(t instanceof s)return t;if(!(this instanceof s))return new s(t);if(this.values={rgb:[0,0,0],hsl:[0,0,0],hsv:[0,0,0],hwb:[0,0,0],cmyk:[0,0,0,0],alpha:1},"string"==typeof t){var e=o.getRgba(t);if(e)this.setValues("rgb",e);else if(e=o.getHsla(t))this.setValues("hsl",e);else{if(!(e=o.getHwb(t)))throw new Error('Unable to parse color from string "'+t+'"');this.setValues("hwb",e)}}else if("object"==typeof t){var e=t;if(void 0!==e.r||void 0!==e.red)this.setValues("rgb",e);else if(void 0!==e.l||void 0!==e.lightness)this.setValues("hsl",e);else if(void 0!==e.v||void 0!==e.value)this.setValues("hsv",e);else if(void 0!==e.w||void 0!==e.whiteness)this.setValues("hwb",e);else{if(void 0===e.c&&void 0===e.cyan)throw new Error("Unable to parse color from object "+JSON.stringify(t));this.setValues("cmyk",e)}}};s.prototype={rgb:function(t){return this.setSpace("rgb",arguments)},hsl:function(t){return this.setSpace("hsl",arguments)},hsv:function(t){return this.setSpace("hsv",arguments)},hwb:function(t){return this.setSpace("hwb",arguments)},cmyk:function(t){return this.setSpace("cmyk",arguments)},rgbArray:function(){return this.values.rgb},hslArray:function(){return this.values.hsl},hsvArray:function(){return this.values.hsv},hwbArray:function(){return 1!==this.values.alpha?this.values.hwb.concat([this.values.alpha]):this.values.hwb},cmykArray:function(){return this.values.cmyk},rgbaArray:function(){var t=this.values.rgb;return t.concat([this.values.alpha])},hslaArray:function(){var t=this.values.hsl;return t.concat([this.values.alpha])},alpha:function(t){return void 0===t?this.values.alpha:(this.setValues("alpha",t),this)},red:function(t){return this.setChannel("rgb",0,t)},green:function(t){return this.setChannel("rgb",1,t)},blue:function(t){return this.setChannel("rgb",2,t)},hue:function(t){return this.setChannel("hsl",0,t)},saturation:function(t){return this.setChannel("hsl",1,t)},lightness:function(t){return this.setChannel("hsl",2,t)},saturationv:function(t){return this.setChannel("hsv",1,t)},whiteness:function(t){return this.setChannel("hwb",1,t)},blackness:function(t){return this.setChannel("hwb",2,t)},value:function(t){return this.setChannel("hsv",2,t)},cyan:function(t){return this.setChannel("cmyk",0,t)},magenta:function(t){return this.setChannel("cmyk",1,t)},yellow:function(t){return this.setChannel("cmyk",2,t)},black:function(t){return this.setChannel("cmyk",3,t)},hexString:function(){return o.hexString(this.values.rgb)},rgbString:function(){return o.rgbString(this.values.rgb,this.values.alpha)},rgbaString:function(){return o.rgbaString(this.values.rgb,this.values.alpha)},percentString:function(){return o.percentString(this.values.rgb,this.values.alpha)},hslString:function(){return o.hslString(this.values.hsl,this.values.alpha)},hslaString:function(){return o.hslaString(this.values.hsl,this.values.alpha)},hwbString:function(){return o.hwbString(this.values.hwb,this.values.alpha)},keyword:function(){return o.keyword(this.values.rgb,this.values.alpha)},rgbNumber:function(){return this.values.rgb[0]<<16|this.values.rgb[1]<<8|this.values.rgb[2]},luminosity:function(){for(var t=this.values.rgb,e=[],i=0;i<t.length;i++){var a=t[i]/255;e[i]=.03928>=a?a/12.92:Math.pow((a+.055)/1.055,2.4)}return.2126*e[0]+.7152*e[1]+.0722*e[2]},contrast:function(t){var e=this.luminosity(),i=t.luminosity();return e>i?(e+.05)/(i+.05):(i+.05)/(e+.05)},level:function(t){var e=this.contrast(t);return e>=7.1?"AAA":e>=4.5?"AA":""},dark:function(){var t=this.values.rgb,e=(299*t[0]+587*t[1]+114*t[2])/1e3;return 128>e},light:function(){return!this.dark()},negate:function(){for(var t=[],e=0;3>e;e++)t[e]=255-this.values.rgb[e];return this.setValues("rgb",t),this},lighten:function(t){return this.values.hsl[2]+=this.values.hsl[2]*t,this.setValues("hsl",this.values.hsl),this},darken:function(t){return this.values.hsl[2]-=this.values.hsl[2]*t,this.setValues("hsl",this.values.hsl),this},saturate:function(t){return this.values.hsl[1]+=this.values.hsl[1]*t,this.setValues("hsl",this.values.hsl),this},desaturate:function(t){return this.values.hsl[1]-=this.values.hsl[1]*t,this.setValues("hsl",this.values.hsl),this},whiten:function(t){return this.values.hwb[1]+=this.values.hwb[1]*t,this.setValues("hwb",this.values.hwb),this},blacken:function(t){return this.values.hwb[2]+=this.values.hwb[2]*t,this.setValues("hwb",this.values.hwb),this},greyscale:function(){var t=this.values.rgb,e=.3*t[0]+.59*t[1]+.11*t[2];return this.setValues("rgb",[e,e,e]),this},clearer:function(t){return this.setValues("alpha",this.values.alpha-this.values.alpha*t),this},opaquer:function(t){return this.setValues("alpha",this.values.alpha+this.values.alpha*t),this},rotate:function(t){var e=this.values.hsl[0];return e=(e+t)%360,e=0>e?360+e:e,this.values.hsl[0]=e,this.setValues("hsl",this.values.hsl),this},mix:function(t,e){e=1-(null==e?.5:e);for(var i=2*e-1,a=this.alpha()-t.alpha(),o=((i*a==-1?i:(i+a)/(1+i*a))+1)/2,s=1-o,n=this.rgbArray(),r=t.rgbArray(),h=0;h<n.length;h++)n[h]=n[h]*o+r[h]*s;this.setValues("rgb",n);var l=this.alpha()*e+t.alpha()*(1-e);return this.setValues("alpha",l),this},toJSON:function(){return this.rgb()},clone:function(){return new s(this.rgb())}},s.prototype.getValues=function(t){for(var e={},i=0;i<t.length;i++)e[t.charAt(i)]=this.values[t][i];return 1!=this.values.alpha&&(e.a=this.values.alpha),e},s.prototype.setValues=function(t,e){var i={rgb:["red","green","blue"],hsl:["hue","saturation","lightness"],hsv:["hue","saturation","value"],hwb:["hue","whiteness","blackness"],cmyk:["cyan","magenta","yellow","black"]},o={rgb:[255,255,255],hsl:[360,100,100],hsv:[360,100,100],hwb:[360,100,100],cmyk:[100,100,100,100]},s=1;if("alpha"==t)s=e;else if(e.length)this.values[t]=e.slice(0,t.length),s=e[t.length];else if(void 0!==e[t.charAt(0)]){for(var n=0;n<t.length;n++)this.values[t][n]=e[t.charAt(n)];s=e.a}else if(void 0!==e[i[t][0]]){for(var r=i[t],n=0;n<t.length;n++)this.values[t][n]=e[r[n]];s=e.alpha}if(this.values.alpha=Math.max(0,Math.min(1,void 0!==s?s:this.values.alpha)),"alpha"!=t){for(var n=0;n<t.length;n++){var h=Math.max(0,Math.min(o[t][n],this.values[t][n]));this.values[t][n]=Math.round(h)}for(var l in i){l!=t&&(this.values[l]=a[t][l](this.values[t]));for(var n=0;n<l.length;n++){var h=Math.max(0,Math.min(o[l][n],this.values[l][n]));this.values[l][n]=Math.round(h)}}return!0}},s.prototype.setSpace=function(t,e){var i=e[0];return void 0===i?this.getValues(t):("number"==typeof i&&(i=Array.prototype.slice.call(e)),this.setValues(t,i),this)},s.prototype.setChannel=function(t,e,i){return void 0===i?this.values[t][e]:(this.values[t][e]=i,this.setValues(t,this.values[t]),this)},window.Color=e.exports=s},{"chartjs-color-string":2,"color-convert":5}],4:[function(t,e,i){function a(t){var e,i,a,o=t[0]/255,s=t[1]/255,n=t[2]/255,r=Math.min(o,s,n),h=Math.max(o,s,n),l=h-r;return h==r?e=0:o==h?e=(s-n)/l:s==h?e=2+(n-o)/l:n==h&&(e=4+(o-s)/l),e=Math.min(60*e,360),0>e&&(e+=360),a=(r+h)/2,i=h==r?0:.5>=a?l/(h+r):l/(2-h-r),[e,100*i,100*a]}function o(t){var e,i,a,o=t[0],s=t[1],n=t[2],r=Math.min(o,s,n),h=Math.max(o,s,n),l=h-r;return i=0==h?0:l/h*1e3/10,h==r?e=0:o==h?e=(s-n)/l:s==h?e=2+(n-o)/l:n==h&&(e=4+(o-s)/l),e=Math.min(60*e,360),0>e&&(e+=360),a=h/255*1e3/10,[e,i,a]}function s(t){var e=t[0],i=t[1],o=t[2],s=a(t)[0],n=1/255*Math.min(e,Math.min(i,o)),o=1-1/255*Math.max(e,Math.max(i,o));return[s,100*n,100*o]}function n(t){var e,i,a,o,s=t[0]/255,n=t[1]/255,r=t[2]/255;return o=Math.min(1-s,1-n,1-r),e=(1-s-o)/(1-o)||0,i=(1-n-o)/(1-o)||0,a=(1-r-o)/(1-o)||0,[100*e,100*i,100*a,100*o]}function h(t){return G[JSON.stringify(t)]}function l(t){var e=t[0]/255,i=t[1]/255,a=t[2]/255;e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92,i=i>.04045?Math.pow((i+.055)/1.055,2.4):i/12.92,a=a>.04045?Math.pow((a+.055)/1.055,2.4):a/12.92;var o=.4124*e+.3576*i+.1805*a,s=.2126*e+.7152*i+.0722*a,n=.0193*e+.1192*i+.9505*a;return[100*o,100*s,100*n]}function c(t){var e,i,a,o=l(t),s=o[0],n=o[1],r=o[2];return s/=95.047,n/=100,r/=108.883,s=s>.008856?Math.pow(s,1/3):7.787*s+16/116,n=n>.008856?Math.pow(n,1/3):7.787*n+16/116,r=r>.008856?Math.pow(r,1/3):7.787*r+16/116,e=116*n-16,i=500*(s-n),a=200*(n-r),[e,i,a]}function d(t){return B(c(t))}function u(t){var e,i,a,o,s,n=t[0]/360,r=t[1]/100,h=t[2]/100;if(0==r)return s=255*h,[s,s,s];i=.5>h?h*(1+r):h+r-h*r,e=2*h-i,o=[0,0,0];for(var l=0;3>l;l++)a=n+1/3*-(l-1),0>a&&a++,a>1&&a--,s=1>6*a?e+6*(i-e)*a:1>2*a?i:2>3*a?e+(i-e)*(2/3-a)*6:e,o[l]=255*s;return o}function f(t){var e,i,a=t[0],o=t[1]/100,s=t[2]/100;return 0===s?[0,0,0]:(s*=2,o*=1>=s?s:2-s,i=(s+o)/2,e=2*o/(s+o),[a,100*e,100*i])}function p(t){return s(u(t))}function m(t){return n(u(t))}function x(t){return h(u(t))}function v(t){var e=t[0]/60,i=t[1]/100,a=t[2]/100,o=Math.floor(e)%6,s=e-Math.floor(e),n=255*a*(1-i),r=255*a*(1-i*s),h=255*a*(1-i*(1-s)),a=255*a;switch(o){case 0:return[a,h,n];case 1:return[r,a,n];case 2:return[n,a,h];case 3:return[n,r,a];case 4:return[h,n,a];case 5:return[a,n,r]}}function y(t){var e,i,a=t[0],o=t[1]/100,s=t[2]/100;return i=(2-o)*s,e=o*s,e/=1>=i?i:2-i,e=e||0,i/=2,[a,100*e,100*i]}function k(t){return s(v(t))}function S(t){return n(v(t))}function C(t){return h(v(t))}function w(t){var e,i,a,o,s=t[0]/360,n=t[1]/100,h=t[2]/100,l=n+h;switch(l>1&&(n/=l,h/=l),e=Math.floor(6*s),i=1-h,a=6*s-e,0!=(1&e)&&(a=1-a),o=n+a*(i-n),e){default:case 6:case 0:r=i,g=o,b=n;break;case 1:r=o,g=i,b=n;break;case 2:r=n,g=i,b=o;break;case 3:r=n,g=o,b=i;break;case 4:r=o,g=n,b=i;break;case 5:r=i,g=n,b=o}return[255*r,255*g,255*b]}function D(t){return a(w(t))}function M(t){return o(w(t))}function _(t){return n(w(t))}function A(t){return h(w(t))}function I(t){var e,i,a,o=t[0]/100,s=t[1]/100,n=t[2]/100,r=t[3]/100;return e=1-Math.min(1,o*(1-r)+r),i=1-Math.min(1,s*(1-r)+r),a=1-Math.min(1,n*(1-r)+r),[255*e,255*i,255*a]}function F(t){return a(I(t))}function P(t){return o(I(t))}function T(t){return s(I(t))}function V(t){return h(I(t))}function R(t){var e,i,a,o=t[0]/100,s=t[1]/100,n=t[2]/100;return e=3.2406*o+-1.5372*s+n*-.4986,i=o*-.9689+1.8758*s+.0415*n,a=.0557*o+s*-.204+1.057*n,e=e>.0031308?1.055*Math.pow(e,1/2.4)-.055:e=12.92*e,i=i>.0031308?1.055*Math.pow(i,1/2.4)-.055:i=12.92*i,a=a>.0031308?1.055*Math.pow(a,1/2.4)-.055:a=12.92*a,e=Math.min(Math.max(0,e),1),i=Math.min(Math.max(0,i),1),a=Math.min(Math.max(0,a),1),[255*e,255*i,255*a]}function O(t){var e,i,a,o=t[0],s=t[1],n=t[2];return o/=95.047,s/=100,n/=108.883,o=o>.008856?Math.pow(o,1/3):7.787*o+16/116,s=s>.008856?Math.pow(s,1/3):7.787*s+16/116,n=n>.008856?Math.pow(n,1/3):7.787*n+16/116,e=116*s-16,i=500*(o-s),a=200*(s-n),[e,i,a]}function L(t){return B(O(t))}function W(t){var e,i,a,o,s=t[0],n=t[1],r=t[2];return 8>=s?(i=100*s/903.3,o=7.787*(i/100)+16/116):(i=100*Math.pow((s+16)/116,3),o=Math.pow(i/100,1/3)),e=.008856>=e/95.047?e=95.047*(n/500+o-16/116)/7.787:95.047*Math.pow(n/500+o,3),a=.008859>=a/108.883?a=108.883*(o-r/200-16/116)/7.787:108.883*Math.pow(o-r/200,3),[e,i,a]}function B(t){var e,i,a,o=t[0],s=t[1],n=t[2];return e=Math.atan2(n,s),i=360*e/2/Math.PI,0>i&&(i+=360),a=Math.sqrt(s*s+n*n),[o,a,i]}function z(t){return R(W(t))}function H(t){var e,i,a,o=t[0],s=t[1],n=t[2];return a=n/360*2*Math.PI,e=s*Math.cos(a),i=s*Math.sin(a),[o,e,i]}function N(t){return W(H(t))}function E(t){return z(H(t))}function U(t){return X[t]}function j(t){return a(U(t))}function q(t){return o(U(t))}function Y(t){return s(U(t))}function Q(t){return n(U(t))}function J(t){return c(U(t))}function Z(t){return l(U(t))}e.exports={rgb2hsl:a,rgb2hsv:o,rgb2hwb:s,rgb2cmyk:n,rgb2keyword:h,rgb2xyz:l,rgb2lab:c,rgb2lch:d,hsl2rgb:u,hsl2hsv:f,hsl2hwb:p,hsl2cmyk:m,hsl2keyword:x,hsv2rgb:v,hsv2hsl:y,hsv2hwb:k,hsv2cmyk:S,hsv2keyword:C,hwb2rgb:w,hwb2hsl:D,hwb2hsv:M,hwb2cmyk:_,hwb2keyword:A,cmyk2rgb:I,cmyk2hsl:F,cmyk2hsv:P,cmyk2hwb:T,cmyk2keyword:V,keyword2rgb:U,keyword2hsl:j,keyword2hsv:q,keyword2hwb:Y,keyword2cmyk:Q,keyword2lab:J,keyword2xyz:Z,xyz2rgb:R,xyz2lab:O,xyz2lch:L,lab2xyz:W,lab2rgb:z,lab2lch:B,lch2lab:H,lch2xyz:N,lch2rgb:E};var X={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},G={};for(var $ in X)G[JSON.stringify(X[$])]=$},{}],5:[function(t,e,i){var a=t("./conversions"),o=function(){return new l};for(var s in a){o[s+"Raw"]=function(t){return function(e){return"number"==typeof e&&(e=Array.prototype.slice.call(arguments)),a[t](e)}}(s);var n=/(\w+)2(\w+)/.exec(s),r=n[1],h=n[2];o[r]=o[r]||{},o[r][h]=o[s]=function(t){return function(e){"number"==typeof e&&(e=Array.prototype.slice.call(arguments));var i=a[t](e);if("string"==typeof i||void 0===i)return i;for(var o=0;o<i.length;o++)i[o]=Math.round(i[o]);return i}}(s)}var l=function(){this.convs={}};l.prototype.routeSpace=function(t,e){var i=e[0];return void 0===i?this.getValues(t):("number"==typeof i&&(i=Array.prototype.slice.call(e)),this.setValues(t,i))},l.prototype.setValues=function(t,e){return this.space=t,this.convs={},this.convs[t]=e,this},l.prototype.getValues=function(t){var e=this.convs[t];if(!e){var i=this.space,a=this.convs[i];e=o[i][t](a),this.convs[t]=e}return e},["rgb","hsl","hsv","cmyk","keyword"].forEach(function(t){l.prototype[t]=function(e){return this.routeSpace(t,arguments)}}),e.exports=o},{"./conversions":4}],6:[function(t,e,i){e.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},{}],7:[function(t,e,i){var a=t("./core/core.js")();t("./core/core.helpers")(a),t("./core/core.element")(a),t("./core/core.animation")(a),t("./core/core.controller")(a),t("./core/core.datasetController")(a),t("./core/core.layoutService")(a),t("./core/core.legend")(a),t("./core/core.plugin.js")(a),t("./core/core.scale")(a),t("./core/core.scaleService")(a),t("./core/core.title")(a),t("./core/core.tooltip")(a),t("./controllers/controller.bar")(a),t("./controllers/controller.bubble")(a),t("./controllers/controller.doughnut")(a),t("./controllers/controller.line")(a),t("./controllers/controller.polarArea")(a),t("./controllers/controller.radar")(a),t("./scales/scale.category")(a),t("./scales/scale.linear")(a),t("./scales/scale.logarithmic")(a),t("./scales/scale.radialLinear")(a),t("./scales/scale.time")(a),t("./elements/element.arc")(a),t("./elements/element.line")(a),t("./elements/element.point")(a),t("./elements/element.rectangle")(a),t("./charts/Chart.Bar")(a),t("./charts/Chart.Bubble")(a),t("./charts/Chart.Doughnut")(a),t("./charts/Chart.Line")(a),t("./charts/Chart.PolarArea")(a),t("./charts/Chart.Radar")(a),t("./charts/Chart.Scatter")(a),window.Chart=e.exports=a},{"./charts/Chart.Bar":8,"./charts/Chart.Bubble":9,"./charts/Chart.Doughnut":10,"./charts/Chart.Line":11,"./charts/Chart.PolarArea":12,"./charts/Chart.Radar":13,"./charts/Chart.Scatter":14,"./controllers/controller.bar":15,"./controllers/controller.bubble":16,"./controllers/controller.doughnut":17,"./controllers/controller.line":18,"./controllers/controller.polarArea":19,"./controllers/controller.radar":20,"./core/core.animation":21,"./core/core.controller":22,"./core/core.datasetController":23,"./core/core.element":24,"./core/core.helpers":25,"./core/core.js":26,"./core/core.layoutService":27,"./core/core.legend":28,"./core/core.plugin.js":29,"./core/core.scale":30,"./core/core.scaleService":31,"./core/core.title":32,"./core/core.tooltip":33,"./elements/element.arc":34,"./elements/element.line":35,"./elements/element.point":36,"./elements/element.rectangle":37,"./scales/scale.category":38,"./scales/scale.linear":39,"./scales/scale.logarithmic":40,"./scales/scale.radialLinear":41,"./scales/scale.time":42}],8:[function(t,e,i){"use strict";e.exports=function(t){t.Bar=function(e,i){return i.type="bar",new t(e,i)}}},{}],9:[function(t,e,i){"use strict";e.exports=function(t){t.Bubble=function(e,i){return i.type="bubble",new t(e,i)}}},{}],10:[function(t,e,i){"use strict";e.exports=function(t){t.Doughnut=function(e,i){return i.type="doughnut",new t(e,i)}}},{}],11:[function(t,e,i){"use strict";e.exports=function(t){t.Line=function(e,i){return i.type="line",new t(e,i)}}},{}],12:[function(t,e,i){"use strict";e.exports=function(t){t.PolarArea=function(e,i){return i.type="polarArea",new t(e,i)}}},{}],13:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers,i={aspectRatio:1};t.Radar=function(a,o){return o.options=e.configMerge(i,o.options),o.type="radar",new t(a,o)}}},{}],14:[function(t,e,i){"use strict";e.exports=function(t){var e={hover:{mode:"single"},scales:{xAxes:[{type:"linear",position:"bottom",id:"x-axis-1"}],yAxes:[{type:"linear",position:"left",id:"y-axis-1"}]},tooltips:{callbacks:{title:function(t,e){return""},label:function(t,e){return"("+t.xLabel+", "+t.yLabel+")"}}}};t.defaults.scatter=e,t.controllers.scatter=t.controllers.line,t.Scatter=function(e,i){return i.type="scatter",new t(e,i)}}},{}],15:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.bar={hover:{mode:"label"},scales:{xAxes:[{type:"category",categoryPercentage:.8,barPercentage:.9,gridLines:{offsetGridLines:!0}}],yAxes:[{type:"linear"}]}},t.controllers.bar=t.DatasetController.extend({initialize:function(e,i){t.DatasetController.prototype.initialize.call(this,e,i),this.getMeta().bar=!0},getBarCount:function(){var t=0;return e.each(this.chart.data.datasets,function(e,i){var a=this.chart.getDatasetMeta(i);a.bar&&this.chart.isDatasetVisible(i)&&++t},this),t},addElements:function(){var i=this.getMeta();e.each(this.getDataset().data,function(e,a){i.data[a]=i.data[a]||new t.elements.Rectangle({_chart:this.chart.chart,_datasetIndex:this.index,_index:a})},this)},addElementAndReset:function(e){var i=new t.elements.Rectangle({_chart:this.chart.chart,_datasetIndex:this.index,_index:e}),a=this.getBarCount();this.getMeta().data.splice(e,0,i),this.updateElement(i,e,!0,a)},update:function(t){var i=this.getBarCount();e.each(this.getMeta().data,function(e,a){this.updateElement(e,a,t,i)},this)},updateElement:function(t,i,a,o){var s,n=this.getMeta(),r=this.getScaleForId(n.xAxisID),h=this.getScaleForId(n.yAxisID);s=h.min<0&&h.max<0?h.getPixelForValue(h.max):h.min>0&&h.max>0?h.getPixelForValue(h.min):h.getPixelForValue(0),e.extend(t,{_chart:this.chart.chart,_xScale:r,_yScale:h,_datasetIndex:this.index,_index:i,_model:{x:this.calculateBarX(i,this.index),y:a?s:this.calculateBarY(i,this.index),label:this.chart.data.labels[i],datasetLabel:this.getDataset().label,base:a?s:this.calculateBarBase(this.index,i),width:this.calculateBarWidth(o),backgroundColor:t.custom&&t.custom.backgroundColor?t.custom.backgroundColor:e.getValueAtIndexOrDefault(this.getDataset().backgroundColor,i,this.chart.options.elements.rectangle.backgroundColor),borderSkipped:t.custom&&t.custom.borderSkipped?t.custom.borderSkipped:this.chart.options.elements.rectangle.borderSkipped,borderColor:t.custom&&t.custom.borderColor?t.custom.borderColor:e.getValueAtIndexOrDefault(this.getDataset().borderColor,i,this.chart.options.elements.rectangle.borderColor),borderWidth:t.custom&&t.custom.borderWidth?t.custom.borderWidth:e.getValueAtIndexOrDefault(this.getDataset().borderWidth,i,this.chart.options.elements.rectangle.borderWidth)}}),t.pivot()},calculateBarBase:function(t,e){var i=this.getMeta(),a=(this.getScaleForId(i.xAxisID),this.getScaleForId(i.yAxisID)),o=0;if(a.options.stacked){var s=this.chart.data.datasets[t].data[e];if(0>s)for(var n=0;t>n;n++){var r=this.chart.data.datasets[n],h=this.chart.getDatasetMeta(n);h.bar&&h.yAxisID===a.id&&this.chart.isDatasetVisible(n)&&(o+=r.data[e]<0?r.data[e]:0)}else for(var l=0;t>l;l++){var c=this.chart.data.datasets[l],d=this.chart.getDatasetMeta(l);d.bar&&d.yAxisID===a.id&&this.chart.isDatasetVisible(l)&&(o+=c.data[e]>0?c.data[e]:0)}return a.getPixelForValue(o)}return o=a.getPixelForValue(a.min),a.beginAtZero||a.min<=0&&a.max>=0||a.min>=0&&a.max<=0?o=a.getPixelForValue(0,0):a.min<0&&a.max<0&&(o=a.getPixelForValue(a.max)),o},getRuler:function(){var t=this.getMeta(),e=this.getScaleForId(t.xAxisID),i=(this.getScaleForId(t.yAxisID),this.getBarCount()),a=function(){for(var t=e.getPixelForTick(1)-e.getPixelForTick(0),i=2;i<e.ticks.length;i++)t=Math.min(e.getPixelForTick(i)-e.getPixelForTick(i-1),t);return t}.call(this),o=a*e.options.categoryPercentage,s=(a-a*e.options.categoryPercentage)/2,n=o/i;if(e.ticks.length!==this.chart.data.labels.length){var r=e.ticks.length/this.chart.data.labels.length;n*=r}var h=n*e.options.barPercentage,l=n-n*e.options.barPercentage;return{datasetCount:i,tickWidth:a,categoryWidth:o,categorySpacing:s,fullBarWidth:n,barWidth:h,barSpacing:l}},calculateBarWidth:function(){var t=this.getScaleForId(this.getMeta().xAxisID),e=this.getRuler();return t.options.stacked?e.categoryWidth:e.barWidth},getBarIndex:function(t){var e,i,a=0;for(i=0;t>i;++i)e=this.chart.getDatasetMeta(i),e.bar&&this.chart.isDatasetVisible(i)&&++a;return a},calculateBarX:function(t,e){var i=this.getMeta(),a=(this.getScaleForId(i.yAxisID),this.getScaleForId(i.xAxisID)),o=this.getBarIndex(e),s=this.getRuler(),n=a.getPixelForValue(null,t,e,this.chart.isCombo);return n-=this.chart.isCombo?s.tickWidth/2:0,a.options.stacked?n+s.categoryWidth/2+s.categorySpacing:n+s.barWidth/2+s.categorySpacing+s.barWidth*o+s.barSpacing/2+s.barSpacing*o},calculateBarY:function(t,e){var i=this.getMeta(),a=(this.getScaleForId(i.xAxisID),this.getScaleForId(i.yAxisID)),o=this.getDataset().data[t];if(a.options.stacked){for(var s=0,n=0,r=0;e>r;r++){var h=this.chart.data.datasets[r],l=this.chart.getDatasetMeta(r);l.bar&&l.yAxisID===a.id&&this.chart.isDatasetVisible(r)&&(h.data[t]<0?n+=h.data[t]||0:s+=h.data[t]||0)}return 0>o?a.getPixelForValue(n+o):a.getPixelForValue(s+o)}return a.getPixelForValue(o)},draw:function(t){var i=t||1;e.each(this.getMeta().data,function(t,e){var a=this.getDataset().data[e];null===a||void 0===a||isNaN(a)||t.transition(i).draw()},this)},setHoverStyle:function(t){var i=this.chart.data.datasets[t._datasetIndex],a=t._index;t._model.backgroundColor=t.custom&&t.custom.hoverBackgroundColor?t.custom.hoverBackgroundColor:e.getValueAtIndexOrDefault(i.hoverBackgroundColor,a,e.getHoverColor(t._model.backgroundColor)),
t._model.borderColor=t.custom&&t.custom.hoverBorderColor?t.custom.hoverBorderColor:e.getValueAtIndexOrDefault(i.hoverBorderColor,a,e.getHoverColor(t._model.borderColor)),t._model.borderWidth=t.custom&&t.custom.hoverBorderWidth?t.custom.hoverBorderWidth:e.getValueAtIndexOrDefault(i.hoverBorderWidth,a,t._model.borderWidth)},removeHoverStyle:function(t){var i=(this.chart.data.datasets[t._datasetIndex],t._index);t._model.backgroundColor=t.custom&&t.custom.backgroundColor?t.custom.backgroundColor:e.getValueAtIndexOrDefault(this.getDataset().backgroundColor,i,this.chart.options.elements.rectangle.backgroundColor),t._model.borderColor=t.custom&&t.custom.borderColor?t.custom.borderColor:e.getValueAtIndexOrDefault(this.getDataset().borderColor,i,this.chart.options.elements.rectangle.borderColor),t._model.borderWidth=t.custom&&t.custom.borderWidth?t.custom.borderWidth:e.getValueAtIndexOrDefault(this.getDataset().borderWidth,i,this.chart.options.elements.rectangle.borderWidth)}}),t.defaults.horizontalBar={hover:{mode:"label"},scales:{xAxes:[{type:"linear",position:"bottom"}],yAxes:[{position:"left",type:"category",categoryPercentage:.8,barPercentage:.9,gridLines:{offsetGridLines:!0}}]}},t.controllers.horizontalBar=t.controllers.bar.extend({updateElement:function(t,i,a,o){var s,n=this.getMeta(),r=this.getScaleForId(n.xAxisID),h=this.getScaleForId(n.yAxisID);s=r.min<0&&r.max<0?r.getPixelForValue(r.max):r.min>0&&r.max>0?r.getPixelForValue(r.min):r.getPixelForValue(0),e.extend(t,{_chart:this.chart.chart,_xScale:r,_yScale:h,_datasetIndex:this.index,_index:i,_model:{x:a?s:this.calculateBarX(i,this.index),y:this.calculateBarY(i,this.index),label:this.chart.data.labels[i],datasetLabel:this.getDataset().label,base:a?s:this.calculateBarBase(this.index,i),height:this.calculateBarHeight(o),backgroundColor:t.custom&&t.custom.backgroundColor?t.custom.backgroundColor:e.getValueAtIndexOrDefault(this.getDataset().backgroundColor,i,this.chart.options.elements.rectangle.backgroundColor),borderSkipped:t.custom&&t.custom.borderSkipped?t.custom.borderSkipped:this.chart.options.elements.rectangle.borderSkipped,borderColor:t.custom&&t.custom.borderColor?t.custom.borderColor:e.getValueAtIndexOrDefault(this.getDataset().borderColor,i,this.chart.options.elements.rectangle.borderColor),borderWidth:t.custom&&t.custom.borderWidth?t.custom.borderWidth:e.getValueAtIndexOrDefault(this.getDataset().borderWidth,i,this.chart.options.elements.rectangle.borderWidth)},draw:function(){function t(t){return h[(c+t)%4]}var e=this._chart.ctx,i=this._view,a=i.height/2,o=i.y-a,s=i.y+a,n=i.base-(i.base-i.x),r=i.borderWidth/2;i.borderWidth&&(o+=r,s-=r,n+=r),e.beginPath(),e.fillStyle=i.backgroundColor,e.strokeStyle=i.borderColor,e.lineWidth=i.borderWidth;var h=[[i.base,s],[i.base,o],[n,o],[n,s]],l=["bottom","left","top","right"],c=l.indexOf(i.borderSkipped,0);-1===c&&(c=0),e.moveTo.apply(e,t(0));for(var d=1;4>d;d++)e.lineTo.apply(e,t(d));e.fill(),i.borderWidth&&e.stroke()},inRange:function(t,e){var i=this._view,a=!1;return i&&(a=i.x<i.base?e>=i.y-i.height/2&&e<=i.y+i.height/2&&t>=i.x&&t<=i.base:e>=i.y-i.height/2&&e<=i.y+i.height/2&&t>=i.base&&t<=i.x),a}}),t.pivot()},calculateBarBase:function(t,e){var i=this.getMeta(),a=this.getScaleForId(i.xAxisID),o=(this.getScaleForId(i.yAxisID),0);if(a.options.stacked){var s=this.chart.data.datasets[t].data[e];if(0>s)for(var n=0;t>n;n++){var r=this.chart.data.datasets[n],h=this.chart.getDatasetMeta(n);h.bar&&h.xAxisID===a.id&&this.chart.isDatasetVisible(n)&&(o+=r.data[e]<0?r.data[e]:0)}else for(var l=0;t>l;l++){var c=this.chart.data.datasets[l],d=this.chart.getDatasetMeta(l);d.bar&&d.xAxisID===a.id&&this.chart.isDatasetVisible(l)&&(o+=c.data[e]>0?c.data[e]:0)}return a.getPixelForValue(o)}return o=a.getPixelForValue(a.min),a.beginAtZero||a.min<=0&&a.max>=0||a.min>=0&&a.max<=0?o=a.getPixelForValue(0,0):a.min<0&&a.max<0&&(o=a.getPixelForValue(a.max)),o},getRuler:function(){var t=this.getMeta(),e=(this.getScaleForId(t.xAxisID),this.getScaleForId(t.yAxisID)),i=this.getBarCount(),a=function(){for(var t=e.getPixelForTick(1)-e.getPixelForTick(0),i=2;i<this.getDataset().data.length;i++)t=Math.min(e.getPixelForTick(i)-e.getPixelForTick(i-1),t);return t}.call(this),o=a*e.options.categoryPercentage,s=(a-a*e.options.categoryPercentage)/2,n=o/i;if(e.ticks.length!==this.chart.data.labels.length){var r=e.ticks.length/this.chart.data.labels.length;n*=r}var h=n*e.options.barPercentage,l=n-n*e.options.barPercentage;return{datasetCount:i,tickHeight:a,categoryHeight:o,categorySpacing:s,fullBarHeight:n,barHeight:h,barSpacing:l}},calculateBarHeight:function(){var t=this.getScaleForId(this.getMeta().yAxisID),e=this.getRuler();return t.options.stacked?e.categoryHeight:e.barHeight},calculateBarX:function(t,e){var i=this.getMeta(),a=this.getScaleForId(i.xAxisID),o=(this.getScaleForId(i.yAxisID),this.getDataset().data[t]);if(a.options.stacked){for(var s=0,n=0,r=0;e>r;r++){var h=this.chart.data.datasets[r],l=this.chart.getDatasetMeta(r);l.bar&&l.xAxisID===a.id&&this.chart.isDatasetVisible(r)&&(h.data[t]<0?n+=h.data[t]||0:s+=h.data[t]||0)}return 0>o?a.getPixelForValue(n+o):a.getPixelForValue(s+o)}return a.getPixelForValue(o)},calculateBarY:function(t,e){var i=this.getMeta(),a=this.getScaleForId(i.yAxisID),o=(this.getScaleForId(i.xAxisID),this.getBarIndex(e)),s=this.getRuler(),n=a.getPixelForValue(null,t,e,this.chart.isCombo);return n-=this.chart.isCombo?s.tickHeight/2:0,a.options.stacked?n+s.categoryHeight/2+s.categorySpacing:n+s.barHeight/2+s.categorySpacing+s.barHeight*o+s.barSpacing/2+s.barSpacing*o}})}},{}],16:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.bubble={hover:{mode:"single"},scales:{xAxes:[{type:"linear",position:"bottom",id:"x-axis-0"}],yAxes:[{type:"linear",position:"left",id:"y-axis-0"}]},tooltips:{callbacks:{title:function(t,e){return""},label:function(t,e){var i=e.datasets[t.datasetIndex].label||"",a=e.datasets[t.datasetIndex].data[t.index];return i+": ("+a.x+", "+a.y+", "+a.r+")"}}}},t.controllers.bubble=t.DatasetController.extend({addElements:function(){var i=this.getMeta();e.each(this.getDataset().data,function(e,a){i.data[a]=i.data[a]||new t.elements.Point({_chart:this.chart.chart,_datasetIndex:this.index,_index:a})},this)},addElementAndReset:function(e){var i=new t.elements.Point({_chart:this.chart.chart,_datasetIndex:this.index,_index:e});this.getMeta().data.splice(e,0,i),this.updateElement(i,e,!0)},update:function(t){var i,a=this.getMeta(),o=a.data,s=this.getScaleForId(a.yAxisID);this.getScaleForId(a.xAxisID);i=s.min<0&&s.max<0?s.getPixelForValue(s.max):s.min>0&&s.max>0?s.getPixelForValue(s.min):s.getPixelForValue(0),e.each(o,function(e,i){this.updateElement(e,i,t)},this)},updateElement:function(t,i,a){var o,s=this.getMeta(),n=this.getScaleForId(s.yAxisID),r=this.getScaleForId(s.xAxisID);o=n.min<0&&n.max<0?n.getPixelForValue(n.max):n.min>0&&n.max>0?n.getPixelForValue(n.min):n.getPixelForValue(0),e.extend(t,{_chart:this.chart.chart,_xScale:r,_yScale:n,_datasetIndex:this.index,_index:i,_model:{x:a?r.getPixelForDecimal(.5):r.getPixelForValue(this.getDataset().data[i],i,this.index,this.chart.isCombo),y:a?o:n.getPixelForValue(this.getDataset().data[i],i,this.index),radius:a?0:t.custom&&t.custom.radius?t.custom.radius:this.getRadius(this.getDataset().data[i]),backgroundColor:t.custom&&t.custom.backgroundColor?t.custom.backgroundColor:e.getValueAtIndexOrDefault(this.getDataset().backgroundColor,i,this.chart.options.elements.point.backgroundColor),borderColor:t.custom&&t.custom.borderColor?t.custom.borderColor:e.getValueAtIndexOrDefault(this.getDataset().borderColor,i,this.chart.options.elements.point.borderColor),borderWidth:t.custom&&t.custom.borderWidth?t.custom.borderWidth:e.getValueAtIndexOrDefault(this.getDataset().borderWidth,i,this.chart.options.elements.point.borderWidth),hitRadius:t.custom&&t.custom.hitRadius?t.custom.hitRadius:e.getValueAtIndexOrDefault(this.getDataset().hitRadius,i,this.chart.options.elements.point.hitRadius)}}),t._model.skip=t.custom&&t.custom.skip?t.custom.skip:isNaN(t._model.x)||isNaN(t._model.y),t.pivot()},getRadius:function(t){return t.r||this.chart.options.elements.point.radius},draw:function(t){var i=t||1;e.each(this.getMeta().data,function(t,e){t.transition(i),t.draw()})},setHoverStyle:function(t){var i=this.chart.data.datasets[t._datasetIndex],a=t._index;t._model.radius=t.custom&&t.custom.hoverRadius?t.custom.hoverRadius:e.getValueAtIndexOrDefault(i.hoverRadius,a,this.chart.options.elements.point.hoverRadius)+this.getRadius(this.getDataset().data[t._index]),t._model.backgroundColor=t.custom&&t.custom.hoverBackgroundColor?t.custom.hoverBackgroundColor:e.getValueAtIndexOrDefault(i.hoverBackgroundColor,a,e.getHoverColor(t._model.backgroundColor)),t._model.borderColor=t.custom&&t.custom.hoverBorderColor?t.custom.hoverBorderColor:e.getValueAtIndexOrDefault(i.hoverBorderColor,a,e.getHoverColor(t._model.borderColor)),t._model.borderWidth=t.custom&&t.custom.hoverBorderWidth?t.custom.hoverBorderWidth:e.getValueAtIndexOrDefault(i.hoverBorderWidth,a,t._model.borderWidth)},removeHoverStyle:function(t){var i=(this.chart.data.datasets[t._datasetIndex],t._index);t._model.radius=t.custom&&t.custom.radius?t.custom.radius:this.getRadius(this.getDataset().data[t._index]),t._model.backgroundColor=t.custom&&t.custom.backgroundColor?t.custom.backgroundColor:e.getValueAtIndexOrDefault(this.getDataset().backgroundColor,i,this.chart.options.elements.point.backgroundColor),t._model.borderColor=t.custom&&t.custom.borderColor?t.custom.borderColor:e.getValueAtIndexOrDefault(this.getDataset().borderColor,i,this.chart.options.elements.point.borderColor),t._model.borderWidth=t.custom&&t.custom.borderWidth?t.custom.borderWidth:e.getValueAtIndexOrDefault(this.getDataset().borderWidth,i,this.chart.options.elements.point.borderWidth)}})}},{}],17:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.doughnut={animation:{animateRotate:!0,animateScale:!1},aspectRatio:1,hover:{mode:"single"},legendCallback:function(t){var e=[];if(e.push('<ul class="'+t.id+'-legend">'),t.data.datasets.length)for(var i=0;i<t.data.datasets[0].data.length;++i)e.push('<li><span style="background-color:'+t.data.datasets[0].backgroundColor[i]+'"></span>'),t.data.labels[i]&&e.push(t.data.labels[i]),e.push("</li>");return e.push("</ul>"),e.join("")},legend:{labels:{generateLabels:function(t){var i=t.data;return i.labels.length&&i.datasets.length?i.labels.map(function(a,o){var s=t.getDatasetMeta(0),n=i.datasets[0],r=s.data[o],h=r.custom&&r.custom.backgroundColor?r.custom.backgroundColor:e.getValueAtIndexOrDefault(n.backgroundColor,o,this.chart.options.elements.arc.backgroundColor),l=r.custom&&r.custom.borderColor?r.custom.borderColor:e.getValueAtIndexOrDefault(n.borderColor,o,this.chart.options.elements.arc.borderColor),c=r.custom&&r.custom.borderWidth?r.custom.borderWidth:e.getValueAtIndexOrDefault(n.borderWidth,o,this.chart.options.elements.arc.borderWidth);return{text:a,fillStyle:h,strokeStyle:l,lineWidth:c,hidden:isNaN(n.data[o])||s.data[o].hidden,index:o}},this):[]}},onClick:function(t,e){var i,a,o,s=e.index,n=this.chart;for(i=0,a=(n.data.datasets||[]).length;a>i;++i)o=n.getDatasetMeta(i),o.data[s].hidden=!o.data[s].hidden;n.update()}},cutoutPercentage:50,rotation:Math.PI*-.5,circumference:2*Math.PI,tooltips:{callbacks:{title:function(){return""},label:function(t,e){return e.labels[t.index]+": "+e.datasets[t.datasetIndex].data[t.index]}}}},t.defaults.pie=e.clone(t.defaults.doughnut),e.extend(t.defaults.pie,{cutoutPercentage:0}),t.controllers.doughnut=t.controllers.pie=t.DatasetController.extend({linkScales:function(){},addElements:function(){var i=this.getMeta();e.each(this.getDataset().data,function(e,a){i.data[a]=i.data[a]||new t.elements.Arc({_chart:this.chart.chart,_datasetIndex:this.index,_index:a})},this)},addElementAndReset:function(i,a){var o=new t.elements.Arc({_chart:this.chart.chart,_datasetIndex:this.index,_index:i});a&&e.isArray(this.getDataset().backgroundColor)&&this.getDataset().backgroundColor.splice(i,0,a),this.getMeta().data.splice(i,0,o),this.updateElement(o,i,!0)},getRingIndex:function(t){for(var e=0,i=0;t>i;++i)this.chart.isDatasetVisible(i)&&++e;return e},update:function(t){var i=this.chart.chartArea.right-this.chart.chartArea.left-this.chart.options.elements.arc.borderWidth,a=this.chart.chartArea.bottom-this.chart.chartArea.top-this.chart.options.elements.arc.borderWidth,o=Math.min(i,a),s={x:0,y:0};if(this.chart.options.circumference<2*Math.PI){var n=this.chart.options.rotation%(2*Math.PI);n+=2*Math.PI*(n>=Math.PI?-1:n<-Math.PI?1:0);var r=n+this.chart.options.circumference,h={x:Math.cos(n),y:Math.sin(n)},l={x:Math.cos(r),y:Math.sin(r)},c=0>=n&&r>=0||n<=2*Math.PI&&2*Math.PI<=r,d=n<=.5*Math.PI&&.5*Math.PI<=r||n<=2.5*Math.PI&&2.5*Math.PI<=r,u=n<=-Math.PI&&-Math.PI<=r||n<=Math.PI&&Math.PI<=r,g=n<=.5*-Math.PI&&.5*-Math.PI<=r||n<=1.5*Math.PI&&1.5*Math.PI<=r,f=this.chart.options.cutoutPercentage/100,p={x:u?-1:Math.min(h.x*(h.x<0?1:f),l.x*(l.x<0?1:f)),y:g?-1:Math.min(h.y*(h.y<0?1:f),l.y*(l.y<0?1:f))},m={x:c?1:Math.max(h.x*(h.x>0?1:f),l.x*(l.x>0?1:f)),y:d?1:Math.max(h.y*(h.y>0?1:f),l.y*(l.y>0?1:f))},b={width:.5*(m.x-p.x),height:.5*(m.y-p.y)};o=Math.min(i/b.width,a/b.height),s={x:(m.x+p.x)*-.5,y:(m.y+p.y)*-.5}}this.chart.outerRadius=Math.max(o/2,0),this.chart.innerRadius=Math.max(this.chart.options.cutoutPercentage?this.chart.outerRadius/100*this.chart.options.cutoutPercentage:1,0),this.chart.radiusLength=(this.chart.outerRadius-this.chart.innerRadius)/this.chart.getVisibleDatasetCount(),this.chart.offsetX=s.x*this.chart.outerRadius,this.chart.offsetY=s.y*this.chart.outerRadius,this.getMeta().total=this.calculateTotal(),this.outerRadius=this.chart.outerRadius-this.chart.radiusLength*this.getRingIndex(this.index),this.innerRadius=this.outerRadius-this.chart.radiusLength,e.each(this.getMeta().data,function(e,i){this.updateElement(e,i,t)},this)},updateElement:function(t,i,a){var o=(this.chart.chartArea.left+this.chart.chartArea.right)/2,s=(this.chart.chartArea.top+this.chart.chartArea.bottom)/2,n=this.chart.options.rotation,r=this.chart.options.rotation,h=a&&this.chart.options.animation.animateRotate?0:t.hidden?0:this.calculateCircumference(this.getDataset().data[i])*(this.chart.options.circumference/(2*Math.PI)),l=a&&this.chart.options.animation.animateScale?0:this.innerRadius,c=a&&this.chart.options.animation.animateScale?0:this.outerRadius;e.extend(t,{_chart:this.chart.chart,_datasetIndex:this.index,_index:i,_model:{x:o+this.chart.offsetX,y:s+this.chart.offsetY,startAngle:n,endAngle:r,circumference:h,outerRadius:c,innerRadius:l,backgroundColor:t.custom&&t.custom.backgroundColor?t.custom.backgroundColor:e.getValueAtIndexOrDefault(this.getDataset().backgroundColor,i,this.chart.options.elements.arc.backgroundColor),hoverBackgroundColor:t.custom&&t.custom.hoverBackgroundColor?t.custom.hoverBackgroundColor:e.getValueAtIndexOrDefault(this.getDataset().hoverBackgroundColor,i,this.chart.options.elements.arc.hoverBackgroundColor),borderWidth:t.custom&&t.custom.borderWidth?t.custom.borderWidth:e.getValueAtIndexOrDefault(this.getDataset().borderWidth,i,this.chart.options.elements.arc.borderWidth),borderColor:t.custom&&t.custom.borderColor?t.custom.borderColor:e.getValueAtIndexOrDefault(this.getDataset().borderColor,i,this.chart.options.elements.arc.borderColor),label:e.getValueAtIndexOrDefault(this.getDataset().label,i,this.chart.data.labels[i])}}),a&&this.chart.options.animation.animateRotate||(0===i?t._model.startAngle=this.chart.options.rotation:t._model.startAngle=this.getMeta().data[i-1]._model.endAngle,t._model.endAngle=t._model.startAngle+t._model.circumference),t.pivot()},draw:function(t){var i=t||1;e.each(this.getMeta().data,function(t,e){t.transition(i).draw()})},setHoverStyle:function(t){var i=this.chart.data.datasets[t._datasetIndex],a=t._index;t._model.backgroundColor=t.custom&&t.custom.hoverBackgroundColor?t.custom.hoverBackgroundColor:e.getValueAtIndexOrDefault(i.hoverBackgroundColor,a,e.getHoverColor(t._model.backgroundColor)),t._model.borderColor=t.custom&&t.custom.hoverBorderColor?t.custom.hoverBorderColor:e.getValueAtIndexOrDefault(i.hoverBorderColor,a,e.getHoverColor(t._model.borderColor)),t._model.borderWidth=t.custom&&t.custom.hoverBorderWidth?t.custom.hoverBorderWidth:e.getValueAtIndexOrDefault(i.hoverBorderWidth,a,t._model.borderWidth)},removeHoverStyle:function(t){var i=(this.chart.data.datasets[t._datasetIndex],t._index);t._model.backgroundColor=t.custom&&t.custom.backgroundColor?t.custom.backgroundColor:e.getValueAtIndexOrDefault(this.getDataset().backgroundColor,i,this.chart.options.elements.arc.backgroundColor),t._model.borderColor=t.custom&&t.custom.borderColor?t.custom.borderColor:e.getValueAtIndexOrDefault(this.getDataset().borderColor,i,this.chart.options.elements.arc.borderColor),t._model.borderWidth=t.custom&&t.custom.borderWidth?t.custom.borderWidth:e.getValueAtIndexOrDefault(this.getDataset().borderWidth,i,this.chart.options.elements.arc.borderWidth)},calculateTotal:function(){var t,i=this.getDataset(),a=this.getMeta(),o=0;return e.each(a.data,function(e,a){t=i.data[a],isNaN(t)||e.hidden||(o+=Math.abs(t))}),o},calculateCircumference:function(t){var e=this.getMeta().total;return e>0&&!isNaN(t)?2*Math.PI*(t/e):0}})}},{}],18:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.line={showLines:!0,hover:{mode:"label"},scales:{xAxes:[{type:"category",id:"x-axis-0"}],yAxes:[{type:"linear",id:"y-axis-0"}]}},t.controllers.line=t.DatasetController.extend({addElements:function(){var i=this.getMeta();i.dataset=i.dataset||new t.elements.Line({_chart:this.chart.chart,_datasetIndex:this.index,_points:i.data}),e.each(this.getDataset().data,function(e,a){i.data[a]=i.data[a]||new t.elements.Point({_chart:this.chart.chart,_datasetIndex:this.index,_index:a})},this)},addElementAndReset:function(e){var i=new t.elements.Point({_chart:this.chart.chart,_datasetIndex:this.index,_index:e});this.getMeta().data.splice(e,0,i),this.updateElement(i,e,!0),this.chart.options.showLines&&0!==this.chart.options.elements.line.tension&&this.updateBezierControlPoints()},update:function(t){var i,a=this.getMeta(),o=a.dataset,s=a.data,n=this.getScaleForId(a.yAxisID);this.getScaleForId(a.xAxisID);i=n.min<0&&n.max<0?n.getPixelForValue(n.max):n.min>0&&n.max>0?n.getPixelForValue(n.min):n.getPixelForValue(0),this.chart.options.showLines&&(o._scale=n,o._datasetIndex=this.index,o._children=s,void 0!==this.getDataset().tension&&void 0===this.getDataset().lineTension&&(this.getDataset().lineTension=this.getDataset().tension),o._model={tension:o.custom&&o.custom.tension?o.custom.tension:e.getValueOrDefault(this.getDataset().lineTension,this.chart.options.elements.line.tension),backgroundColor:o.custom&&o.custom.backgroundColor?o.custom.backgroundColor:this.getDataset().backgroundColor||this.chart.options.elements.line.backgroundColor,borderWidth:o.custom&&o.custom.borderWidth?o.custom.borderWidth:this.getDataset().borderWidth||this.chart.options.elements.line.borderWidth,borderColor:o.custom&&o.custom.borderColor?o.custom.borderColor:this.getDataset().borderColor||this.chart.options.elements.line.borderColor,borderCapStyle:o.custom&&o.custom.borderCapStyle?o.custom.borderCapStyle:this.getDataset().borderCapStyle||this.chart.options.elements.line.borderCapStyle,borderDash:o.custom&&o.custom.borderDash?o.custom.borderDash:this.getDataset().borderDash||this.chart.options.elements.line.borderDash,borderDashOffset:o.custom&&o.custom.borderDashOffset?o.custom.borderDashOffset:this.getDataset().borderDashOffset||this.chart.options.elements.line.borderDashOffset,borderJoinStyle:o.custom&&o.custom.borderJoinStyle?o.custom.borderJoinStyle:this.getDataset().borderJoinStyle||this.chart.options.elements.line.borderJoinStyle,fill:o.custom&&o.custom.fill?o.custom.fill:void 0!==this.getDataset().fill?this.getDataset().fill:this.chart.options.elements.line.fill,scaleTop:n.top,scaleBottom:n.bottom,scaleZero:i},o.pivot()),e.each(s,function(e,i){this.updateElement(e,i,t)},this),this.chart.options.showLines&&0!==this.chart.options.elements.line.tension&&this.updateBezierControlPoints()},getPointBackgroundColor:function(t,i){var a=this.chart.options.elements.point.backgroundColor,o=this.getDataset();return t.custom&&t.custom.backgroundColor?a=t.custom.backgroundColor:o.pointBackgroundColor?a=e.getValueAtIndexOrDefault(o.pointBackgroundColor,i,a):o.backgroundColor&&(a=o.backgroundColor),a},getPointBorderColor:function(t,i){var a=this.chart.options.elements.point.borderColor,o=this.getDataset();return t.custom&&t.custom.borderColor?a=t.custom.borderColor:o.pointBorderColor?a=e.getValueAtIndexOrDefault(this.getDataset().pointBorderColor,i,a):o.borderColor&&(a=o.borderColor),a},getPointBorderWidth:function(t,i){var a=this.chart.options.elements.point.borderWidth,o=this.getDataset();return t.custom&&void 0!==t.custom.borderWidth?a=t.custom.borderWidth:void 0!==o.pointBorderWidth?a=e.getValueAtIndexOrDefault(o.pointBorderWidth,i,a):void 0!==o.borderWidth&&(a=o.borderWidth),a},updateElement:function(t,i,a){var o,s=this.getMeta(),n=this.getScaleForId(s.yAxisID),r=this.getScaleForId(s.xAxisID);o=n.min<0&&n.max<0?n.getPixelForValue(n.max):n.min>0&&n.max>0?n.getPixelForValue(n.min):n.getPixelForValue(0),t._chart=this.chart.chart,t._xScale=r,t._yScale=n,t._datasetIndex=this.index,t._index=i,void 0!==this.getDataset().radius&&void 0===this.getDataset().pointRadius&&(this.getDataset().pointRadius=this.getDataset().radius),void 0!==this.getDataset().hitRadius&&void 0===this.getDataset().pointHitRadius&&(this.getDataset().pointHitRadius=this.getDataset().hitRadius),t._model={x:r.getPixelForValue(this.getDataset().data[i],i,this.index,this.chart.isCombo),y:a?o:this.calculatePointY(this.getDataset().data[i],i,this.index,this.chart.isCombo),radius:t.custom&&t.custom.radius?t.custom.radius:e.getValueAtIndexOrDefault(this.getDataset().pointRadius,i,this.chart.options.elements.point.radius),pointStyle:t.custom&&t.custom.pointStyle?t.custom.pointStyle:e.getValueAtIndexOrDefault(this.getDataset().pointStyle,i,this.chart.options.elements.point.pointStyle),backgroundColor:this.getPointBackgroundColor(t,i),borderColor:this.getPointBorderColor(t,i),borderWidth:this.getPointBorderWidth(t,i),tension:s.dataset._model?s.dataset._model.tension:0,hitRadius:t.custom&&t.custom.hitRadius?t.custom.hitRadius:e.getValueAtIndexOrDefault(this.getDataset().pointHitRadius,i,this.chart.options.elements.point.hitRadius)},t._model.skip=t.custom&&t.custom.skip?t.custom.skip:isNaN(t._model.x)||isNaN(t._model.y)},calculatePointY:function(t,e,i,a){var o=this.getMeta(),s=(this.getScaleForId(o.xAxisID),this.getScaleForId(o.yAxisID));if(s.options.stacked){for(var n=0,r=0,h=0;i>h;h++){var l=this.chart.data.datasets[h],c=this.chart.getDatasetMeta(h);"line"===c.type&&this.chart.isDatasetVisible(h)&&(l.data[e]<0?r+=l.data[e]||0:n+=l.data[e]||0)}return 0>t?s.getPixelForValue(r+t):s.getPixelForValue(n+t)}return s.getPixelForValue(t)},updateBezierControlPoints:function(){var t=this.getMeta();e.each(t.data,function(i,a){var o=e.splineCurve(e.previousItem(t.data,a)._model,i._model,e.nextItem(t.data,a)._model,t.dataset._model.tension);i._model.controlPointPreviousX=Math.max(Math.min(o.previous.x,this.chart.chartArea.right),this.chart.chartArea.left),i._model.controlPointPreviousY=Math.max(Math.min(o.previous.y,this.chart.chartArea.bottom),this.chart.chartArea.top),i._model.controlPointNextX=Math.max(Math.min(o.next.x,this.chart.chartArea.right),this.chart.chartArea.left),i._model.controlPointNextY=Math.max(Math.min(o.next.y,this.chart.chartArea.bottom),this.chart.chartArea.top),i.pivot()},this)},draw:function(t){var i=this.getMeta(),a=t||1;e.each(i.data,function(t){t.transition(a)}),this.chart.options.showLines&&i.dataset.transition(a).draw(),e.each(i.data,function(t){t.draw()})},setHoverStyle:function(t){var i=this.chart.data.datasets[t._datasetIndex],a=t._index;t._model.radius=t.custom&&t.custom.hoverRadius?t.custom.hoverRadius:e.getValueAtIndexOrDefault(i.pointHoverRadius,a,this.chart.options.elements.point.hoverRadius),t._model.backgroundColor=t.custom&&t.custom.hoverBackgroundColor?t.custom.hoverBackgroundColor:e.getValueAtIndexOrDefault(i.pointHoverBackgroundColor,a,e.getHoverColor(t._model.backgroundColor)),t._model.borderColor=t.custom&&t.custom.hoverBorderColor?t.custom.hoverBorderColor:e.getValueAtIndexOrDefault(i.pointHoverBorderColor,a,e.getHoverColor(t._model.borderColor)),t._model.borderWidth=t.custom&&t.custom.hoverBorderWidth?t.custom.hoverBorderWidth:e.getValueAtIndexOrDefault(i.pointHoverBorderWidth,a,t._model.borderWidth)},removeHoverStyle:function(t){var i=(this.chart.data.datasets[t._datasetIndex],t._index);void 0!==this.getDataset().radius&&void 0===this.getDataset().pointRadius&&(this.getDataset().pointRadius=this.getDataset().radius),t._model.radius=t.custom&&t.custom.radius?t.custom.radius:e.getValueAtIndexOrDefault(this.getDataset().pointRadius,i,this.chart.options.elements.point.radius),t._model.backgroundColor=this.getPointBackgroundColor(t,i),t._model.borderColor=this.getPointBorderColor(t,i),t._model.borderWidth=this.getPointBorderWidth(t,i)}})}},{}],19:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.polarArea={scale:{type:"radialLinear",lineArc:!0},animation:{animateRotate:!0,animateScale:!0},aspectRatio:1,legendCallback:function(t){var e=[];if(e.push('<ul class="'+t.id+'-legend">'),t.data.datasets.length)for(var i=0;i<t.data.datasets[0].data.length;++i)e.push('<li><span style="background-color:'+t.data.datasets[0].backgroundColor[i]+'">'),t.data.labels[i]&&e.push(t.data.labels[i]),e.push("</span></li>");return e.push("</ul>"),e.join("")},legend:{labels:{generateLabels:function(t){var i=t.data;return i.labels.length&&i.datasets.length?i.labels.map(function(a,o){var s=t.getDatasetMeta(0),n=i.datasets[0],r=s.data[o],h=r.custom&&r.custom.backgroundColor?r.custom.backgroundColor:e.getValueAtIndexOrDefault(n.backgroundColor,o,this.chart.options.elements.arc.backgroundColor),l=r.custom&&r.custom.borderColor?r.custom.borderColor:e.getValueAtIndexOrDefault(n.borderColor,o,this.chart.options.elements.arc.borderColor),c=r.custom&&r.custom.borderWidth?r.custom.borderWidth:e.getValueAtIndexOrDefault(n.borderWidth,o,this.chart.options.elements.arc.borderWidth);return{text:a,fillStyle:h,strokeStyle:l,lineWidth:c,hidden:isNaN(n.data[o])||s.data[o].hidden,index:o}},this):[]}},onClick:function(t,e){var i,a,o,s=e.index,n=this.chart;for(i=0,a=(n.data.datasets||[]).length;a>i;++i)o=n.getDatasetMeta(i),o.data[s].hidden=!o.data[s].hidden;n.update()}},tooltips:{callbacks:{title:function(){return""},label:function(t,e){return e.labels[t.index]+": "+t.yLabel}}}},t.controllers.polarArea=t.DatasetController.extend({linkScales:function(){},addElements:function(){var i=this.getMeta();e.each(this.getDataset().data,function(e,a){i.data[a]=i.data[a]||new t.elements.Arc({_chart:this.chart.chart,_datasetIndex:this.index,_index:a})},this)},addElementAndReset:function(e){var i=new t.elements.Arc({_chart:this.chart.chart,_datasetIndex:this.index,_index:e});this.getMeta().data.splice(e,0,i),this.updateElement(i,e,!0)},update:function(t){var i=this.getMeta(),a=Math.min(this.chart.chartArea.right-this.chart.chartArea.left,this.chart.chartArea.bottom-this.chart.chartArea.top);this.chart.outerRadius=Math.max((a-this.chart.options.elements.arc.borderWidth/2)/2,0),this.chart.innerRadius=Math.max(this.chart.options.cutoutPercentage?this.chart.outerRadius/100*this.chart.options.cutoutPercentage:1,0),this.chart.radiusLength=(this.chart.outerRadius-this.chart.innerRadius)/this.chart.getVisibleDatasetCount(),this.outerRadius=this.chart.outerRadius-this.chart.radiusLength*this.index,this.innerRadius=this.outerRadius-this.chart.radiusLength,i.count=this.countVisibleElements(),e.each(i.data,function(e,i){this.updateElement(e,i,t)},this)},updateElement:function(t,i,a){for(var o=this.calculateCircumference(this.getDataset().data[i]),s=(this.chart.chartArea.left+this.chart.chartArea.right)/2,n=(this.chart.chartArea.top+this.chart.chartArea.bottom)/2,r=0,h=this.getMeta(),l=0;i>l;++l)isNaN(this.getDataset().data[l])||h.data[l].hidden||++r;var c=t.hidden?0:this.chart.scale.getDistanceFromCenterForValue(this.getDataset().data[i]),d=-.5*Math.PI+o*r,u=d+(t.hidden?0:o),g={x:s,y:n,innerRadius:0,outerRadius:this.chart.options.animation.animateScale?0:this.chart.scale.getDistanceFromCenterForValue(this.getDataset().data[i]),startAngle:this.chart.options.animation.animateRotate?Math.PI*-.5:d,endAngle:this.chart.options.animation.animateRotate?Math.PI*-.5:u,backgroundColor:t.custom&&t.custom.backgroundColor?t.custom.backgroundColor:e.getValueAtIndexOrDefault(this.getDataset().backgroundColor,i,this.chart.options.elements.arc.backgroundColor),borderWidth:t.custom&&t.custom.borderWidth?t.custom.borderWidth:e.getValueAtIndexOrDefault(this.getDataset().borderWidth,i,this.chart.options.elements.arc.borderWidth),borderColor:t.custom&&t.custom.borderColor?t.custom.borderColor:e.getValueAtIndexOrDefault(this.getDataset().borderColor,i,this.chart.options.elements.arc.borderColor),label:e.getValueAtIndexOrDefault(this.chart.data.labels,i,this.chart.data.labels[i])};e.extend(t,{_chart:this.chart.chart,_datasetIndex:this.index,_index:i,_scale:this.chart.scale,_model:a?g:{x:s,y:n,innerRadius:0,outerRadius:c,startAngle:d,endAngle:u,backgroundColor:t.custom&&t.custom.backgroundColor?t.custom.backgroundColor:e.getValueAtIndexOrDefault(this.getDataset().backgroundColor,i,this.chart.options.elements.arc.backgroundColor),borderWidth:t.custom&&t.custom.borderWidth?t.custom.borderWidth:e.getValueAtIndexOrDefault(this.getDataset().borderWidth,i,this.chart.options.elements.arc.borderWidth),borderColor:t.custom&&t.custom.borderColor?t.custom.borderColor:e.getValueAtIndexOrDefault(this.getDataset().borderColor,i,this.chart.options.elements.arc.borderColor),label:e.getValueAtIndexOrDefault(this.chart.data.labels,i,this.chart.data.labels[i])}}),t.pivot()},draw:function(t){var i=t||1;e.each(this.getMeta().data,function(t,e){t.transition(i).draw()})},setHoverStyle:function(t){var i=this.chart.data.datasets[t._datasetIndex],a=t._index;t._model.backgroundColor=t.custom&&t.custom.hoverBackgroundColor?t.custom.hoverBackgroundColor:e.getValueAtIndexOrDefault(i.hoverBackgroundColor,a,e.getHoverColor(t._model.backgroundColor)),t._model.borderColor=t.custom&&t.custom.hoverBorderColor?t.custom.hoverBorderColor:e.getValueAtIndexOrDefault(i.hoverBorderColor,a,e.getHoverColor(t._model.borderColor)),t._model.borderWidth=t.custom&&t.custom.hoverBorderWidth?t.custom.hoverBorderWidth:e.getValueAtIndexOrDefault(i.hoverBorderWidth,a,t._model.borderWidth)},removeHoverStyle:function(t){var i=(this.chart.data.datasets[t._datasetIndex],t._index);t._model.backgroundColor=t.custom&&t.custom.backgroundColor?t.custom.backgroundColor:e.getValueAtIndexOrDefault(this.getDataset().backgroundColor,i,this.chart.options.elements.arc.backgroundColor),t._model.borderColor=t.custom&&t.custom.borderColor?t.custom.borderColor:e.getValueAtIndexOrDefault(this.getDataset().borderColor,i,this.chart.options.elements.arc.borderColor),t._model.borderWidth=t.custom&&t.custom.borderWidth?t.custom.borderWidth:e.getValueAtIndexOrDefault(this.getDataset().borderWidth,i,this.chart.options.elements.arc.borderWidth)},countVisibleElements:function(){var t=this.getDataset(),i=this.getMeta(),a=0;return e.each(i.data,function(e,i){isNaN(t.data[i])||e.hidden||a++}),a},calculateCircumference:function(t){var e=this.getMeta().count;return e>0&&!isNaN(t)?2*Math.PI/e:0}})}},{}],20:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.radar={scale:{type:"radialLinear"},elements:{line:{tension:0}}},t.controllers.radar=t.DatasetController.extend({linkScales:function(){},addElements:function(){var i=this.getMeta();i.dataset=i.dataset||new t.elements.Line({_chart:this.chart.chart,_datasetIndex:this.index,_points:i.data,_loop:!0
}),e.each(this.getDataset().data,function(e,a){i.data[a]=i.data[a]||new t.elements.Point({_chart:this.chart.chart,_datasetIndex:this.index,_index:a,_model:{x:0,y:0}})},this)},addElementAndReset:function(e){var i=new t.elements.Point({_chart:this.chart.chart,_datasetIndex:this.index,_index:e});this.getMeta().data.splice(e,0,i),this.updateElement(i,e,!0),this.updateBezierControlPoints()},update:function(t){var i,a=this.getMeta(),o=a.dataset,s=a.data,n=this.chart.scale;i=n.min<0&&n.max<0?n.getPointPositionForValue(0,n.max):n.min>0&&n.max>0?n.getPointPositionForValue(0,n.min):n.getPointPositionForValue(0,0),void 0!==this.getDataset().tension&&void 0===this.getDataset().lineTension&&(this.getDataset().lineTension=this.getDataset().tension),e.extend(a.dataset,{_datasetIndex:this.index,_children:s,_model:{tension:o.custom&&o.custom.tension?o.custom.tension:e.getValueOrDefault(this.getDataset().lineTension,this.chart.options.elements.line.tension),backgroundColor:o.custom&&o.custom.backgroundColor?o.custom.backgroundColor:this.getDataset().backgroundColor||this.chart.options.elements.line.backgroundColor,borderWidth:o.custom&&o.custom.borderWidth?o.custom.borderWidth:this.getDataset().borderWidth||this.chart.options.elements.line.borderWidth,borderColor:o.custom&&o.custom.borderColor?o.custom.borderColor:this.getDataset().borderColor||this.chart.options.elements.line.borderColor,fill:o.custom&&o.custom.fill?o.custom.fill:void 0!==this.getDataset().fill?this.getDataset().fill:this.chart.options.elements.line.fill,borderCapStyle:o.custom&&o.custom.borderCapStyle?o.custom.borderCapStyle:this.getDataset().borderCapStyle||this.chart.options.elements.line.borderCapStyle,borderDash:o.custom&&o.custom.borderDash?o.custom.borderDash:this.getDataset().borderDash||this.chart.options.elements.line.borderDash,borderDashOffset:o.custom&&o.custom.borderDashOffset?o.custom.borderDashOffset:this.getDataset().borderDashOffset||this.chart.options.elements.line.borderDashOffset,borderJoinStyle:o.custom&&o.custom.borderJoinStyle?o.custom.borderJoinStyle:this.getDataset().borderJoinStyle||this.chart.options.elements.line.borderJoinStyle,scaleTop:n.top,scaleBottom:n.bottom,scaleZero:i}}),a.dataset.pivot(),e.each(s,function(e,i){this.updateElement(e,i,t)},this),this.updateBezierControlPoints()},updateElement:function(t,i,a){var o=this.chart.scale.getPointPositionForValue(i,this.getDataset().data[i]);e.extend(t,{_datasetIndex:this.index,_index:i,_scale:this.chart.scale,_model:{x:a?this.chart.scale.xCenter:o.x,y:a?this.chart.scale.yCenter:o.y,tension:t.custom&&t.custom.tension?t.custom.tension:e.getValueOrDefault(this.getDataset().tension,this.chart.options.elements.line.tension),radius:t.custom&&t.custom.radius?t.custom.radius:e.getValueAtIndexOrDefault(this.getDataset().pointRadius,i,this.chart.options.elements.point.radius),backgroundColor:t.custom&&t.custom.backgroundColor?t.custom.backgroundColor:e.getValueAtIndexOrDefault(this.getDataset().pointBackgroundColor,i,this.chart.options.elements.point.backgroundColor),borderColor:t.custom&&t.custom.borderColor?t.custom.borderColor:e.getValueAtIndexOrDefault(this.getDataset().pointBorderColor,i,this.chart.options.elements.point.borderColor),borderWidth:t.custom&&t.custom.borderWidth?t.custom.borderWidth:e.getValueAtIndexOrDefault(this.getDataset().pointBorderWidth,i,this.chart.options.elements.point.borderWidth),pointStyle:t.custom&&t.custom.pointStyle?t.custom.pointStyle:e.getValueAtIndexOrDefault(this.getDataset().pointStyle,i,this.chart.options.elements.point.pointStyle),hitRadius:t.custom&&t.custom.hitRadius?t.custom.hitRadius:e.getValueAtIndexOrDefault(this.getDataset().hitRadius,i,this.chart.options.elements.point.hitRadius)}}),t._model.skip=t.custom&&t.custom.skip?t.custom.skip:isNaN(t._model.x)||isNaN(t._model.y)},updateBezierControlPoints:function(){var t=this.getMeta();e.each(t.data,function(i,a){var o=e.splineCurve(e.previousItem(t.data,a,!0)._model,i._model,e.nextItem(t.data,a,!0)._model,i._model.tension);i._model.controlPointPreviousX=Math.max(Math.min(o.previous.x,this.chart.chartArea.right),this.chart.chartArea.left),i._model.controlPointPreviousY=Math.max(Math.min(o.previous.y,this.chart.chartArea.bottom),this.chart.chartArea.top),i._model.controlPointNextX=Math.max(Math.min(o.next.x,this.chart.chartArea.right),this.chart.chartArea.left),i._model.controlPointNextY=Math.max(Math.min(o.next.y,this.chart.chartArea.bottom),this.chart.chartArea.top),i.pivot()},this)},draw:function(t){var i=this.getMeta(),a=t||1;e.each(i.data,function(t,e){t.transition(a)}),i.dataset.transition(a).draw(),e.each(i.data,function(t){t.draw()})},setHoverStyle:function(t){var i=this.chart.data.datasets[t._datasetIndex],a=t._index;t._model.radius=t.custom&&t.custom.hoverRadius?t.custom.hoverRadius:e.getValueAtIndexOrDefault(i.pointHoverRadius,a,this.chart.options.elements.point.hoverRadius),t._model.backgroundColor=t.custom&&t.custom.hoverBackgroundColor?t.custom.hoverBackgroundColor:e.getValueAtIndexOrDefault(i.pointHoverBackgroundColor,a,e.getHoverColor(t._model.backgroundColor)),t._model.borderColor=t.custom&&t.custom.hoverBorderColor?t.custom.hoverBorderColor:e.getValueAtIndexOrDefault(i.pointHoverBorderColor,a,e.getHoverColor(t._model.borderColor)),t._model.borderWidth=t.custom&&t.custom.hoverBorderWidth?t.custom.hoverBorderWidth:e.getValueAtIndexOrDefault(i.pointHoverBorderWidth,a,t._model.borderWidth)},removeHoverStyle:function(t){var i=(this.chart.data.datasets[t._datasetIndex],t._index);t._model.radius=t.custom&&t.custom.radius?t.custom.radius:e.getValueAtIndexOrDefault(this.getDataset().radius,i,this.chart.options.elements.point.radius),t._model.backgroundColor=t.custom&&t.custom.backgroundColor?t.custom.backgroundColor:e.getValueAtIndexOrDefault(this.getDataset().pointBackgroundColor,i,this.chart.options.elements.point.backgroundColor),t._model.borderColor=t.custom&&t.custom.borderColor?t.custom.borderColor:e.getValueAtIndexOrDefault(this.getDataset().pointBorderColor,i,this.chart.options.elements.point.borderColor),t._model.borderWidth=t.custom&&t.custom.borderWidth?t.custom.borderWidth:e.getValueAtIndexOrDefault(this.getDataset().pointBorderWidth,i,this.chart.options.elements.point.borderWidth)}})}},{}],21:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.global.animation={duration:1e3,easing:"easeOutQuart",onProgress:e.noop,onComplete:e.noop},t.Animation=t.Element.extend({currentStep:null,numSteps:60,easing:"",render:null,onAnimationProgress:null,onAnimationComplete:null}),t.animationService={frameDuration:17,animations:[],dropFrames:0,request:null,addAnimation:function(t,e,i,a){a||(t.animating=!0);for(var o=0;o<this.animations.length;++o)if(this.animations[o].chartInstance===t)return void(this.animations[o].animationObject=e);this.animations.push({chartInstance:t,animationObject:e}),1===this.animations.length&&this.requestAnimationFrame()},cancelAnimation:function(t){var i=e.findIndex(this.animations,function(e){return e.chartInstance===t});-1!==i&&(this.animations.splice(i,1),t.animating=!1)},requestAnimationFrame:function(){var t=this;null===t.request&&(t.request=e.requestAnimFrame.call(window,function(){t.request=null,t.startDigest()}))},startDigest:function(){var t=Date.now(),e=0;this.dropFrames>1&&(e=Math.floor(this.dropFrames),this.dropFrames=this.dropFrames%1);for(var i=0;i<this.animations.length;)null===this.animations[i].animationObject.currentStep&&(this.animations[i].animationObject.currentStep=0),this.animations[i].animationObject.currentStep+=1+e,this.animations[i].animationObject.currentStep>this.animations[i].animationObject.numSteps&&(this.animations[i].animationObject.currentStep=this.animations[i].animationObject.numSteps),this.animations[i].animationObject.render(this.animations[i].chartInstance,this.animations[i].animationObject),this.animations[i].animationObject.onAnimationProgress&&this.animations[i].animationObject.onAnimationProgress.call&&this.animations[i].animationObject.onAnimationProgress.call(this.animations[i].chartInstance,this.animations[i]),this.animations[i].animationObject.currentStep===this.animations[i].animationObject.numSteps?(this.animations[i].animationObject.onAnimationComplete&&this.animations[i].animationObject.onAnimationComplete.call&&this.animations[i].animationObject.onAnimationComplete.call(this.animations[i].chartInstance,this.animations[i]),this.animations[i].chartInstance.animating=!1,this.animations.splice(i,1)):++i;var a=Date.now(),o=(a-t)/this.frameDuration;this.dropFrames+=o,this.animations.length>0&&this.requestAnimationFrame()}}}},{}],22:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;t.types={},t.instances={},t.controllers={},t.Controller=function(i){return this.chart=i,this.config=i.config,this.options=this.config.options=e.configMerge(t.defaults.global,t.defaults[this.config.type],this.config.options||{}),this.id=e.uid(),Object.defineProperty(this,"data",{get:function(){return this.config.data}}),t.instances[this.id]=this,this.options.responsive&&this.resize(!0),this.initialize(),this},e.extend(t.Controller.prototype,{initialize:function(){return t.pluginService.notifyPlugins("beforeInit",[this]),this.bindEvents(),this.ensureScalesHaveIDs(),this.buildOrUpdateControllers(),this.buildScales(),this.buildSurroundingItems(),this.updateLayout(),this.resetElements(),this.initToolTip(),this.update(),t.pluginService.notifyPlugins("afterInit",[this]),this},clear:function(){return e.clear(this.chart),this},stop:function(){return t.animationService.cancelAnimation(this),this},resize:function(t){var i=this.chart.canvas,a=e.getMaximumWidth(this.chart.canvas),o=this.options.maintainAspectRatio&&isNaN(this.chart.aspectRatio)===!1&&isFinite(this.chart.aspectRatio)&&0!==this.chart.aspectRatio?a/this.chart.aspectRatio:e.getMaximumHeight(this.chart.canvas),s=this.chart.width!==a||this.chart.height!==o;return s?(i.width=this.chart.width=a,i.height=this.chart.height=o,e.retinaScale(this.chart),t||(this.stop(),this.update(this.options.responsiveAnimationDuration)),this):this},ensureScalesHaveIDs:function(){var t="x-axis-",i="y-axis-";this.options.scales&&(this.options.scales.xAxes&&this.options.scales.xAxes.length&&e.each(this.options.scales.xAxes,function(e,i){e.id=e.id||t+i}),this.options.scales.yAxes&&this.options.scales.yAxes.length&&e.each(this.options.scales.yAxes,function(t,e){t.id=t.id||i+e}))},buildScales:function(){if(this.scales={},this.options.scales&&(this.options.scales.xAxes&&this.options.scales.xAxes.length&&e.each(this.options.scales.xAxes,function(i,a){var o=e.getValueOrDefault(i.type,"category"),s=t.scaleService.getScaleConstructor(o);if(s){var n=new s({ctx:this.chart.ctx,options:i,chart:this,id:i.id});this.scales[n.id]=n}},this),this.options.scales.yAxes&&this.options.scales.yAxes.length&&e.each(this.options.scales.yAxes,function(i,a){var o=e.getValueOrDefault(i.type,"linear"),s=t.scaleService.getScaleConstructor(o);if(s){var n=new s({ctx:this.chart.ctx,options:i,chart:this,id:i.id});this.scales[n.id]=n}},this)),this.options.scale){var i=t.scaleService.getScaleConstructor(this.options.scale.type);if(i){var a=new i({ctx:this.chart.ctx,options:this.options.scale,chart:this});this.scale=a,this.scales.radialScale=a}}t.scaleService.addScalesToLayout(this)},buildSurroundingItems:function(){this.options.title&&(this.titleBlock=new t.Title({ctx:this.chart.ctx,options:this.options.title,chart:this}),t.layoutService.addBox(this,this.titleBlock)),this.options.legend&&(this.legend=new t.Legend({ctx:this.chart.ctx,options:this.options.legend,chart:this}),t.layoutService.addBox(this,this.legend))},updateLayout:function(){t.layoutService.update(this,this.chart.width,this.chart.height)},buildOrUpdateControllers:function(){var i=[],a=[];if(e.each(this.data.datasets,function(e,o){var s=this.getDatasetMeta(o);s.type||(s.type=e.type||this.config.type),i.push(s.type),s.controller?s.controller.updateIndex(o):(s.controller=new t.controllers[s.type](this,o),a.push(s.controller))},this),i.length>1)for(var o=1;o<i.length;o++)if(i[o]!==i[o-1]){this.isCombo=!0;break}return a},resetElements:function(){e.each(this.data.datasets,function(t,e){this.getDatasetMeta(e).controller.reset()},this)},update:function(i,a){t.pluginService.notifyPlugins("beforeUpdate",[this]),this.tooltip._data=this.data;var o=this.buildOrUpdateControllers();e.each(this.data.datasets,function(t,e){this.getDatasetMeta(e).controller.buildOrUpdateElements()},this),t.layoutService.update(this,this.chart.width,this.chart.height),t.pluginService.notifyPlugins("afterScaleUpdate",[this]),e.each(o,function(t){t.reset()}),e.each(this.data.datasets,function(t,e){this.getDatasetMeta(e).controller.update()},this),t.pluginService.notifyPlugins("afterUpdate",[this]),this.render(i,a)},render:function(i,a){if(t.pluginService.notifyPlugins("beforeRender",[this]),this.options.animation&&("undefined"!=typeof i&&0!==i||"undefined"==typeof i&&0!==this.options.animation.duration)){var o=new t.Animation;o.numSteps=(i||this.options.animation.duration)/16.66,o.easing=this.options.animation.easing,o.render=function(t,i){var a=e.easingEffects[i.easing],o=i.currentStep/i.numSteps,s=a(o);t.draw(s,o,i.currentStep)},o.onAnimationProgress=this.options.animation.onProgress,o.onAnimationComplete=this.options.animation.onComplete,t.animationService.addAnimation(this,o,i,a)}else this.draw(),this.options.animation&&this.options.animation.onComplete&&this.options.animation.onComplete.call&&this.options.animation.onComplete.call(this);return this},draw:function(i){var a=i||1;this.clear(),t.pluginService.notifyPlugins("beforeDraw",[this,a]),e.each(this.boxes,function(t){t.draw(this.chartArea)},this),this.scale&&this.scale.draw(),this.chart.ctx.save(),this.chart.ctx.beginPath(),this.chart.ctx.rect(this.chartArea.left,this.chartArea.top,this.chartArea.right-this.chartArea.left,this.chartArea.bottom-this.chartArea.top),this.chart.ctx.clip(),e.each(this.data.datasets,function(t,e){this.isDatasetVisible(e)&&this.getDatasetMeta(e).controller.draw(i)},this,!0),this.chart.ctx.restore(),this.tooltip.transition(a).draw(),t.pluginService.notifyPlugins("afterDraw",[this,a])},getElementAtEvent:function(t){var i=e.getRelativePosition(t,this.chart),a=[];return e.each(this.data.datasets,function(t,o){if(this.isDatasetVisible(o)){var s=this.getDatasetMeta(o);e.each(s.data,function(t,e){return t.inRange(i.x,i.y)?(a.push(t),a):void 0})}},this),a},getElementsAtEvent:function(t){var i=e.getRelativePosition(t,this.chart),a=[],o=function(){if(this.data.datasets)for(var t=0;t<this.data.datasets.length;t++){var e=this.getDatasetMeta(t);if(this.isDatasetVisible(t))for(var a=0;a<e.data.length;a++)if(e.data[a].inRange(i.x,i.y))return e.data[a]}}.call(this);return o?(e.each(this.data.datasets,function(t,e){if(this.isDatasetVisible(e)){var i=this.getDatasetMeta(e);a.push(i.data[o._index])}},this),a):a},getDatasetAtEvent:function(t){var e=this.getElementAtEvent(t);return e.length>0&&(e=this.getDatasetMeta(e[0]._datasetIndex).data),e},getDatasetMeta:function(t){var e=this.data.datasets[t];e._meta||(e._meta={});var i=e._meta[this.id];return i||(i=e._meta[this.id]={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null}),i},getVisibleDatasetCount:function(){for(var t=0,e=0,i=this.data.datasets.length;i>e;++e)this.isDatasetVisible(e)&&t++;return t},isDatasetVisible:function(t){var e=this.getDatasetMeta(t);return"boolean"==typeof e.hidden?!e.hidden:!this.data.datasets[t].hidden},generateLegend:function(){return this.options.legendCallback(this)},destroy:function(){this.clear(),e.unbindEvents(this,this.events),e.removeResizeListener(this.chart.canvas.parentNode);var i=this.chart.canvas;i.width=this.chart.width,i.height=this.chart.height,void 0!==this.chart.originalDevicePixelRatio&&this.chart.ctx.scale(1/this.chart.originalDevicePixelRatio,1/this.chart.originalDevicePixelRatio),i.style.width=this.chart.originalCanvasStyleWidth,i.style.height=this.chart.originalCanvasStyleHeight,t.pluginService.notifyPlugins("destroy",[this]),delete t.instances[this.id]},toBase64Image:function(){return this.chart.canvas.toDataURL.apply(this.chart.canvas,arguments)},initToolTip:function(){this.tooltip=new t.Tooltip({_chart:this.chart,_chartInstance:this,_data:this.data,_options:this.options},this)},bindEvents:function(){e.bindEvents(this,this.options.events,function(t){this.eventHandler(t)})},eventHandler:function(t){if(this.lastActive=this.lastActive||[],this.lastTooltipActive=this.lastTooltipActive||[],"mouseout"===t.type)this.active=[],this.tooltipActive=[];else{var i=this,a=function(e){switch(e){case"single":return i.getElementAtEvent(t);case"label":return i.getElementsAtEvent(t);case"dataset":return i.getDatasetAtEvent(t);default:return t}};this.active=a(this.options.hover.mode),this.tooltipActive=a(this.options.tooltips.mode)}if(this.options.hover.onHover&&this.options.hover.onHover.call(this,this.active),("mouseup"===t.type||"click"===t.type)&&(this.options.onClick&&this.options.onClick.call(this,t,this.active),this.legend&&this.legend.handleEvent&&this.legend.handleEvent(t)),this.lastActive.length)switch(this.options.hover.mode){case"single":this.getDatasetMeta(this.lastActive[0]._datasetIndex).controller.removeHoverStyle(this.lastActive[0],this.lastActive[0]._datasetIndex,this.lastActive[0]._index);break;case"label":case"dataset":for(var o=0;o<this.lastActive.length;o++)this.lastActive[o]&&this.getDatasetMeta(this.lastActive[o]._datasetIndex).controller.removeHoverStyle(this.lastActive[o],this.lastActive[o]._datasetIndex,this.lastActive[o]._index)}if(this.active.length&&this.options.hover.mode)switch(this.options.hover.mode){case"single":this.getDatasetMeta(this.active[0]._datasetIndex).controller.setHoverStyle(this.active[0]);break;case"label":case"dataset":for(var s=0;s<this.active.length;s++)this.active[s]&&this.getDatasetMeta(this.active[s]._datasetIndex).controller.setHoverStyle(this.active[s])}if((this.options.tooltips.enabled||this.options.tooltips.custom)&&(this.tooltip.initialize(),this.tooltip._active=this.tooltipActive,this.tooltip.update(!0)),this.tooltip.pivot(),!this.animating){var n;e.each(this.active,function(t,e){t!==this.lastActive[e]&&(n=!0)},this),e.each(this.tooltipActive,function(t,e){t!==this.lastTooltipActive[e]&&(n=!0)},this),(this.lastActive.length!==this.active.length||this.lastTooltipActive.length!==this.tooltipActive.length||n)&&(this.stop(),(this.options.tooltips.enabled||this.options.tooltips.custom)&&this.tooltip.update(!0),this.render(this.options.hover.animationDuration,!0))}return this.lastActive=this.active,this.lastTooltipActive=this.tooltipActive,this}})}},{}],23:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers,i=e.noop;t.DatasetController=function(t,e){this.initialize.call(this,t,e)},e.extend(t.DatasetController.prototype,{initialize:function(t,e){this.chart=t,this.index=e,this.linkScales(),this.addElements()},updateIndex:function(t){this.index=t},linkScales:function(){var t=this.getMeta(),e=this.getDataset();null===t.xAxisID&&(t.xAxisID=e.xAxisID||this.chart.options.scales.xAxes[0].id),null===t.yAxisID&&(t.yAxisID=e.yAxisID||this.chart.options.scales.yAxes[0].id)},getDataset:function(){return this.chart.data.datasets[this.index]},getMeta:function(){return this.chart.getDatasetMeta(this.index)},getScaleForId:function(t){return this.chart.scales[t]},reset:function(){this.update(!0)},buildOrUpdateElements:function(){var t=this.getMeta(),e=t.data,i=this.getDataset().data.length,a=e.length;if(a>i)e.splice(i,a-i);else if(i>a)for(var o=a;i>o;++o)this.addElementAndReset(o)},addElements:i,addElementAndReset:i,draw:i,removeHoverStyle:i,setHoverStyle:i,update:i}),t.DatasetController.extend=e.inherits}},{}],24:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;t.elements={},t.Element=function(t){e.extend(this,t),this.initialize.apply(this,arguments)},e.extend(t.Element.prototype,{initialize:function(){this.hidden=!1},pivot:function(){return this._view||(this._view=e.clone(this._model)),this._start=e.clone(this._view),this},transition:function(t){return this._view||(this._view=e.clone(this._model)),1===t?(this._view=this._model,this._start=null,this):(this._start||this.pivot(),e.each(this._model,function(i,a){if("_"!==a[0]&&this._model.hasOwnProperty(a))if(this._view.hasOwnProperty(a))if(i===this._view[a]);else if("string"==typeof i)try{var o=e.color(this._start[a]).mix(e.color(this._model[a]),t);this._view[a]=o.rgbString()}catch(s){this._view[a]=i}else if("number"==typeof i){var n=void 0!==this._start[a]&&isNaN(this._start[a])===!1?this._start[a]:0;this._view[a]=(this._model[a]-n)*t+n}else this._view[a]=i;else"number"!=typeof i||isNaN(this._view[a])?this._view[a]=i:this._view[a]=i*t;else;},this),this)},tooltipPosition:function(){return{x:this._model.x,y:this._model.y}},hasValue:function(){return e.isNumber(this._model.x)&&e.isNumber(this._model.y)}}),t.Element.extend=e.inherits}},{}],25:[function(t,e,i){"use strict";var a=t("chartjs-color");e.exports=function(t){function e(t,e,i){var a;return"string"==typeof t?(a=parseInt(t,10),-1!=t.indexOf("%")&&(a=a/100*e.parentNode[i])):a=t,a}function i(t,i,a){var o,s=document.defaultView.getComputedStyle(t)[i],n=document.defaultView.getComputedStyle(t.parentNode)[i],r=null!==s&&"none"!==s,h=null!==n&&"none"!==n;return(r||h)&&(o=Math.min(r?e(s,t,a):Number.POSITIVE_INFINITY,h?e(n,t.parentNode,a):Number.POSITIVE_INFINITY)),o}var o=t.helpers={};o.each=function(t,e,i,a){var s,n;if(o.isArray(t))if(n=t.length,a)for(s=n-1;s>=0;s--)e.call(i,t[s],s);else for(s=0;n>s;s++)e.call(i,t[s],s);else if("object"==typeof t){var r=Object.keys(t);for(n=r.length,s=0;n>s;s++)e.call(i,t[r[s]],r[s])}},o.clone=function(t){var e={};return o.each(t,function(i,a){t.hasOwnProperty(a)&&(o.isArray(i)?e[a]=i.slice(0):"object"==typeof i&&null!==i?e[a]=o.clone(i):e[a]=i)}),e},o.extend=function(t){for(var e=arguments.length,i=[],a=1;e>a;a++)i.push(arguments[a]);return o.each(i,function(e){o.each(e,function(i,a){e.hasOwnProperty(a)&&(t[a]=i)})}),t},o.configMerge=function(e){var i=o.clone(e);return o.each(Array.prototype.slice.call(arguments,1),function(e){o.each(e,function(a,s){if(e.hasOwnProperty(s))if("scales"===s)i[s]=o.scaleMerge(i.hasOwnProperty(s)?i[s]:{},a);else if("scale"===s)i[s]=o.configMerge(i.hasOwnProperty(s)?i[s]:{},t.scaleService.getScaleDefaults(a.type),a);else if(i.hasOwnProperty(s)&&o.isArray(i[s])&&o.isArray(a)){var n=i[s];o.each(a,function(t,e){e<n.length?"object"==typeof n[e]&&null!==n[e]&&"object"==typeof t&&null!==t?n[e]=o.configMerge(n[e],t):n[e]=t:n.push(t)})}else i.hasOwnProperty(s)&&"object"==typeof i[s]&&null!==i[s]&&"object"==typeof a?i[s]=o.configMerge(i[s],a):i[s]=a})}),i},o.extendDeep=function(t){function e(t){return o.each(arguments,function(i){i!==t&&o.each(i,function(i,a){t[a]&&t[a].constructor&&t[a].constructor===Object?e(t[a],i):t[a]=i})}),t}return e.apply(this,arguments)},o.scaleMerge=function(e,i){var a=o.clone(e);return o.each(i,function(e,s){i.hasOwnProperty(s)&&("xAxes"===s||"yAxes"===s?a.hasOwnProperty(s)?o.each(e,function(e,i){var n=o.getValueOrDefault(e.type,"xAxes"===s?"category":"linear"),r=t.scaleService.getScaleDefaults(n);i>=a[s].length||!a[s][i].type?a[s].push(o.configMerge(r,e)):e.type&&e.type!==a[s][i].type?a[s][i]=o.configMerge(a[s][i],r,e):a[s][i]=o.configMerge(a[s][i],e)}):(a[s]=[],o.each(e,function(e){var i=o.getValueOrDefault(e.type,"xAxes"===s?"category":"linear");a[s].push(o.configMerge(t.scaleService.getScaleDefaults(i),e))})):a.hasOwnProperty(s)&&"object"==typeof a[s]&&null!==a[s]&&"object"==typeof e?a[s]=o.configMerge(a[s],e):a[s]=e)}),a},o.getValueAtIndexOrDefault=function(t,e,i){return void 0===t||null===t?i:o.isArray(t)?e<t.length?t[e]:i:t},o.getValueOrDefault=function(t,e){return void 0===t?e:t},o.indexOf=function(t,e){if(Array.prototype.indexOf)return t.indexOf(e);for(var i=0;i<t.length;i++)if(t[i]===e)return i;return-1},o.where=function(t,e){var i=[];return o.each(t,function(t){e(t)&&i.push(t)}),i},o.findIndex=function(t,e,i){var a=-1;if(Array.prototype.findIndex)a=t.findIndex(e,i);else for(var o=0;o<t.length;++o)if(i=void 0!==i?i:t,e.call(i,t[o],o,t)){a=o;break}return a},o.findNextWhere=function(t,e,i){(void 0===i||null===i)&&(i=-1);for(var a=i+1;a<t.length;a++){var o=t[a];if(e(o))return o}},o.findPreviousWhere=function(t,e,i){(void 0===i||null===i)&&(i=t.length);for(var a=i-1;a>=0;a--){var o=t[a];if(e(o))return o}},o.inherits=function(t){var e=this,i=t&&t.hasOwnProperty("constructor")?t.constructor:function(){return e.apply(this,arguments)},a=function(){this.constructor=i};return a.prototype=e.prototype,i.prototype=new a,i.extend=o.inherits,t&&o.extend(i.prototype,t),i.__super__=e.prototype,i},o.noop=function(){},o.uid=function(){var t=0;return function(){return t++}}(),o.warn=function(t){console&&"function"==typeof console.warn&&console.warn(t)},o.isNumber=function(t){return!isNaN(parseFloat(t))&&isFinite(t)},o.almostEquals=function(t,e,i){return Math.abs(t-e)<i},o.max=function(t){return t.reduce(function(t,e){return isNaN(e)?t:Math.max(t,e)},Number.NEGATIVE_INFINITY)},o.min=function(t){return t.reduce(function(t,e){return isNaN(e)?t:Math.min(t,e)},Number.POSITIVE_INFINITY)},o.sign=function(t){return Math.sign?Math.sign(t):(t=+t,0===t||isNaN(t)?t:t>0?1:-1)},o.log10=function(t){return Math.log10?Math.log10(t):Math.log(t)/Math.LN10},o.toRadians=function(t){return t*(Math.PI/180)},o.toDegrees=function(t){return t*(180/Math.PI)},o.getAngleFromPoint=function(t,e){var i=e.x-t.x,a=e.y-t.y,o=Math.sqrt(i*i+a*a),s=Math.atan2(a,i);return s<-.5*Math.PI&&(s+=2*Math.PI),{angle:s,distance:o}},o.aliasPixel=function(t){return t%2===0?0:.5},o.splineCurve=function(t,e,i,a){var o=t.skip?e:t,s=e,n=i.skip?e:i,r=Math.sqrt(Math.pow(s.x-o.x,2)+Math.pow(s.y-o.y,2)),h=Math.sqrt(Math.pow(n.x-s.x,2)+Math.pow(n.y-s.y,2)),l=r/(r+h),c=h/(r+h);l=isNaN(l)?0:l,c=isNaN(c)?0:c;var d=a*l,u=a*c;return{previous:{x:s.x-d*(n.x-o.x),y:s.y-d*(n.y-o.y)},next:{x:s.x+u*(n.x-o.x),y:s.y+u*(n.y-o.y)}}},o.nextItem=function(t,e,i){return i?e>=t.length-1?t[0]:t[e+1]:e>=t.length-1?t[t.length-1]:t[e+1]},o.previousItem=function(t,e,i){return i?0>=e?t[t.length-1]:t[e-1]:0>=e?t[0]:t[e-1]},o.niceNum=function(t,e){var i,a=Math.floor(o.log10(t)),s=t/Math.pow(10,a);return i=e?1.5>s?1:3>s?2:7>s?5:10:1>=s?1:2>=s?2:5>=s?5:10,i*Math.pow(10,a)};var s=o.easingEffects={linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return-1*t*(t-2)},easeInOutQuad:function(t){return(t/=.5)<1?.5*t*t:-0.5*(--t*(t-2)-1)},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return 1*((t=t/1-1)*t*t+1)},easeInOutCubic:function(t){return(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return-1*((t=t/1-1)*t*t*t-1)},easeInOutQuart:function(t){return(t/=.5)<1?.5*t*t*t*t:-0.5*((t-=2)*t*t*t-2)},easeInQuint:function(t){return 1*(t/=1)*t*t*t*t},easeOutQuint:function(t){return 1*((t=t/1-1)*t*t*t*t+1)},easeInOutQuint:function(t){return(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},easeInSine:function(t){return-1*Math.cos(t/1*(Math.PI/2))+1},easeOutSine:function(t){return 1*Math.sin(t/1*(Math.PI/2))},easeInOutSine:function(t){return-0.5*(Math.cos(Math.PI*t/1)-1)},easeInExpo:function(t){return 0===t?1:1*Math.pow(2,10*(t/1-1))},easeOutExpo:function(t){return 1===t?1:1*(-Math.pow(2,-10*t/1)+1)},easeInOutExpo:function(t){return 0===t?0:1===t?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(-Math.pow(2,-10*--t)+2)},easeInCirc:function(t){return t>=1?t:-1*(Math.sqrt(1-(t/=1)*t)-1)},easeOutCirc:function(t){return 1*Math.sqrt(1-(t=t/1-1)*t)},easeInOutCirc:function(t){return(t/=.5)<1?-0.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},easeInElastic:function(t){var e=1.70158,i=0,a=1;return 0===t?0:1===(t/=1)?1:(i||(i=.3),a<Math.abs(1)?(a=1,e=i/4):e=i/(2*Math.PI)*Math.asin(1/a),-(a*Math.pow(2,10*(t-=1))*Math.sin((1*t-e)*(2*Math.PI)/i)))},easeOutElastic:function(t){var e=1.70158,i=0,a=1;return 0===t?0:1===(t/=1)?1:(i||(i=.3),a<Math.abs(1)?(a=1,e=i/4):e=i/(2*Math.PI)*Math.asin(1/a),a*Math.pow(2,-10*t)*Math.sin((1*t-e)*(2*Math.PI)/i)+1)},easeInOutElastic:function(t){var e=1.70158,i=0,a=1;return 0===t?0:2===(t/=.5)?1:(i||(i=1*(.3*1.5)),a<Math.abs(1)?(a=1,e=i/4):e=i/(2*Math.PI)*Math.asin(1/a),1>t?-.5*(a*Math.pow(2,10*(t-=1))*Math.sin((1*t-e)*(2*Math.PI)/i)):a*Math.pow(2,-10*(t-=1))*Math.sin((1*t-e)*(2*Math.PI)/i)*.5+1)},easeInBack:function(t){var e=1.70158;return 1*(t/=1)*t*((e+1)*t-e)},easeOutBack:function(t){var e=1.70158;return 1*((t=t/1-1)*t*((e+1)*t+e)+1)},easeInOutBack:function(t){var e=1.70158;return(t/=.5)<1?.5*(t*t*(((e*=1.525)+1)*t-e)):.5*((t-=2)*t*(((e*=1.525)+1)*t+e)+2)},easeInBounce:function(t){return 1-s.easeOutBounce(1-t)},easeOutBounce:function(t){return(t/=1)<1/2.75?1*(7.5625*t*t):2/2.75>t?1*(7.5625*(t-=1.5/2.75)*t+.75):2.5/2.75>t?1*(7.5625*(t-=2.25/2.75)*t+.9375):1*(7.5625*(t-=2.625/2.75)*t+.984375)},easeInOutBounce:function(t){return.5>t?.5*s.easeInBounce(2*t):.5*s.easeOutBounce(2*t-1)+.5}};o.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)}}(),o.cancelAnimFrame=function(){return window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame||function(t){return window.clearTimeout(t,1e3/60)}}(),o.getRelativePosition=function(t,e){var i,a,s=t.originalEvent||t,n=t.currentTarget||t.srcElement,r=n.getBoundingClientRect();s.touches&&s.touches.length>0?(i=s.touches[0].clientX,a=s.touches[0].clientY):(i=s.clientX,a=s.clientY);var h=parseFloat(o.getStyle(n,"padding-left")),l=parseFloat(o.getStyle(n,"padding-top")),c=parseFloat(o.getStyle(n,"padding-right")),d=parseFloat(o.getStyle(n,"padding-bottom")),u=r.right-r.left-h-c,g=r.bottom-r.top-l-d;return i=Math.round((i-r.left-h)/u*n.width/e.currentDevicePixelRatio),a=Math.round((a-r.top-l)/g*n.height/e.currentDevicePixelRatio),{x:i,y:a}},o.addEvent=function(t,e,i){t.addEventListener?t.addEventListener(e,i):t.attachEvent?t.attachEvent("on"+e,i):t["on"+e]=i},o.removeEvent=function(t,e,i){t.removeEventListener?t.removeEventListener(e,i,!1):t.detachEvent?t.detachEvent("on"+e,i):t["on"+e]=o.noop},o.bindEvents=function(t,e,i){t.events||(t.events={}),o.each(e,function(e){t.events[e]=function(){i.apply(t,arguments)},o.addEvent(t.chart.canvas,e,t.events[e])})},o.unbindEvents=function(t,e){o.each(e,function(e,i){o.removeEvent(t.chart.canvas,i,e)})},o.getConstraintWidth=function(t){return i(t,"max-width","clientWidth")},o.getConstraintHeight=function(t){return i(t,"max-height","clientHeight")},o.getMaximumWidth=function(t){var e=t.parentNode,i=parseInt(o.getStyle(e,"padding-left"))+parseInt(o.getStyle(e,"padding-right")),a=e.clientWidth-i,s=o.getConstraintWidth(t);return void 0!==s&&(a=Math.min(a,s)),a},o.getMaximumHeight=function(t){var e=t.parentNode,i=parseInt(o.getStyle(e,"padding-top"))+parseInt(o.getStyle(e,"padding-bottom")),a=e.clientHeight-i,s=o.getConstraintHeight(t);return void 0!==s&&(a=Math.min(a,s)),a},o.getStyle=function(t,e){return t.currentStyle?t.currentStyle[e]:document.defaultView.getComputedStyle(t,null).getPropertyValue(e)},o.retinaScale=function(t){var e=t.ctx,i=t.canvas.width,a=t.canvas.height,o=t.currentDevicePixelRatio=window.devicePixelRatio||1;1!==o&&(e.canvas.height=a*o,e.canvas.width=i*o,e.scale(o,o),t.originalDevicePixelRatio=t.originalDevicePixelRatio||o),e.canvas.style.width=i+"px",e.canvas.style.height=a+"px"},o.clear=function(t){t.ctx.clearRect(0,0,t.width,t.height)},o.fontString=function(t,e,i){return e+" "+t+"px "+i},o.longestText=function(t,e,i,a){a=a||{},a.data=a.data||{},a.garbageCollect=a.garbageCollect||[],a.font!==e&&(a.data={},a.garbageCollect=[],a.font=e),t.font=e;var s=0;o.each(i,function(e){if(void 0!==e&&null!==e){var i=a.data[e];i||(i=a.data[e]=t.measureText(e).width,a.garbageCollect.push(e)),
i>s&&(s=i)}});var n=a.garbageCollect.length/2;if(n>i.length){for(var r=0;n>r;r++)delete a.data[a.garbageCollect[r]];a.garbageCollect.splice(0,n)}return s},o.drawRoundedRectangle=function(t,e,i,a,o,s){t.beginPath(),t.moveTo(e+s,i),t.lineTo(e+a-s,i),t.quadraticCurveTo(e+a,i,e+a,i+s),t.lineTo(e+a,i+o-s),t.quadraticCurveTo(e+a,i+o,e+a-s,i+o),t.lineTo(e+s,i+o),t.quadraticCurveTo(e,i+o,e,i+o-s),t.lineTo(e,i+s),t.quadraticCurveTo(e,i,e+s,i),t.closePath()},o.color=function(e){return a?a(e instanceof CanvasGradient?t.defaults.global.defaultColor:e):(console.log("Color.js not found!"),e)},o.addResizeListener=function(t,e){var i=document.createElement("iframe"),a="chartjs-hidden-iframe";i.classlist?i.classlist.add(a):i.setAttribute("class",a),i.style.width="100%",i.style.display="block",i.style.border=0,i.style.height=0,i.style.margin=0,i.style.position="absolute",i.style.left=0,i.style.right=0,i.style.top=0,i.style.bottom=0,t.insertBefore(i,t.firstChild),(i.contentWindow||i).onresize=function(){e&&e()}},o.removeResizeListener=function(t){var e=t.querySelector(".chartjs-hidden-iframe");e&&e.parentNode.removeChild(e)},o.isArray=function(t){return Array.isArray?Array.isArray(t):"[object Array]"===Object.prototype.toString.call(t)},o.pushAllIfDefined=function(t,e){"undefined"!=typeof t&&(o.isArray(t)?e.push.apply(e,t):e.push(t))},o.callCallback=function(t,e,i){t&&"function"==typeof t.call&&t.apply(i,e)},o.getHoverColor=function(t){return t instanceof CanvasPattern?t:o.color(t).saturate(.5).darken(.1).rgbString()}}},{"chartjs-color":3}],26:[function(t,e,i){"use strict";e.exports=function(){var t=function(e,i){this.config=i,e.length&&e[0].getContext&&(e=e[0]),e.getContext&&(e=e.getContext("2d")),this.ctx=e,this.canvas=e.canvas,this.width=e.canvas.width||parseInt(t.helpers.getStyle(e.canvas,"width"))||t.helpers.getMaximumWidth(e.canvas),this.height=e.canvas.height||parseInt(t.helpers.getStyle(e.canvas,"height"))||t.helpers.getMaximumHeight(e.canvas),this.aspectRatio=this.width/this.height,(isNaN(this.aspectRatio)||isFinite(this.aspectRatio)===!1)&&(this.aspectRatio=void 0!==i.aspectRatio?i.aspectRatio:2),this.originalCanvasStyleWidth=e.canvas.style.width,this.originalCanvasStyleHeight=e.canvas.style.height,t.helpers.retinaScale(this),i&&(this.controller=new t.Controller(this));var a=this;return t.helpers.addResizeListener(e.canvas.parentNode,function(){a.controller&&a.controller.config.options.responsive&&a.controller.resize()}),this.controller?this.controller:this};return t.defaults={global:{responsive:!0,responsiveAnimationDuration:0,maintainAspectRatio:!0,events:["mousemove","mouseout","click","touchstart","touchmove"],hover:{onHover:null,mode:"single",animationDuration:400},onClick:null,defaultColor:"rgba(0,0,0,0.1)",defaultFontColor:"#666",defaultFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",defaultFontSize:12,defaultFontStyle:"normal",showLines:!0,elements:{},legendCallback:function(t){var e=[];e.push('<ul class="'+t.id+'-legend">');for(var i=0;i<t.data.datasets.length;i++)e.push('<li><span style="background-color:'+t.data.datasets[i].backgroundColor+'"></span>'),t.data.datasets[i].label&&e.push(t.data.datasets[i].label),e.push("</li>");return e.push("</ul>"),e.join("")}}},t}},{}],27:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;t.layoutService={defaults:{},addBox:function(t,e){t.boxes||(t.boxes=[]),t.boxes.push(e)},removeBox:function(t,e){t.boxes&&t.boxes.splice(t.boxes.indexOf(e),1)},update:function(t,i,a){function o(t){var e,i=t.isHorizontal();i?(e=t.update(t.options.fullWidth?p:k,y),S-=e.height):(e=t.update(v,x),k-=e.width),C.push({horizontal:i,minSize:e,box:t})}function s(t){var i=e.findNextWhere(C,function(e){return e.box===t});if(i)if(t.isHorizontal()){var a={left:w,right:D,top:0,bottom:0};t.update(t.options.fullWidth?p:k,m/2,a)}else t.update(i.minSize.width,S)}function n(t){var i=e.findNextWhere(C,function(e){return e.box===t}),a={left:0,right:0,top:M,bottom:_};i&&t.update(i.minSize.width,S,a)}function r(t){t.isHorizontal()?(t.left=t.options.fullWidth?h:w,t.right=t.options.fullWidth?i-h:w+k,t.top=P,t.bottom=P+t.height,P=t.bottom):(t.left=F,t.right=F+t.width,t.top=M,t.bottom=M+S,F=t.right)}if(t){var h=0,l=0,c=e.where(t.boxes,function(t){return"left"===t.options.position}),d=e.where(t.boxes,function(t){return"right"===t.options.position}),u=e.where(t.boxes,function(t){return"top"===t.options.position}),g=e.where(t.boxes,function(t){return"bottom"===t.options.position}),f=e.where(t.boxes,function(t){return"chartArea"===t.options.position});u.sort(function(t,e){return(e.options.fullWidth?1:0)-(t.options.fullWidth?1:0)}),g.sort(function(t,e){return(t.options.fullWidth?1:0)-(e.options.fullWidth?1:0)});var p=i-2*h,m=a-2*l,b=p/2,x=m/2,v=(i-b)/(c.length+d.length),y=(a-x)/(u.length+g.length),k=p,S=m,C=[];e.each(c.concat(d,u,g),o);var w=h,D=h,M=l,_=l;e.each(c.concat(d),s),e.each(c,function(t){w+=t.width}),e.each(d,function(t){D+=t.width}),e.each(u.concat(g),s),e.each(u,function(t){M+=t.height}),e.each(g,function(t){_+=t.height}),e.each(c.concat(d),n),w=h,D=h,M=l,_=l,e.each(c,function(t){w+=t.width}),e.each(d,function(t){D+=t.width}),e.each(u,function(t){M+=t.height}),e.each(g,function(t){_+=t.height});var A=a-M-_,I=i-w-D;(I!==k||A!==S)&&(e.each(c,function(t){t.height=A}),e.each(d,function(t){t.height=A}),e.each(u,function(t){t.options.fullWidth||(t.width=I)}),e.each(g,function(t){t.options.fullWidth||(t.width=I)}),S=A,k=I);var F=h,P=l;e.each(c.concat(u),r),F+=k,P+=S,e.each(d,r),e.each(g,r),t.chartArea={left:w,top:M,right:w+k,bottom:M+S},e.each(f,function(e){e.left=t.chartArea.left,e.top=t.chartArea.top,e.right=t.chartArea.right,e.bottom=t.chartArea.bottom,e.update(k,S)})}}}}},{}],28:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers,i=e.noop;t.defaults.global.legend={display:!0,position:"top",fullWidth:!0,reverse:!1,onClick:function(t,e){var i=e.datasetIndex,a=this.chart,o=a.getDatasetMeta(i);o.hidden=null===o.hidden?!a.data.datasets[i].hidden:null,a.update()},labels:{boxWidth:40,padding:10,generateLabels:function(t){var i=t.data;return e.isArray(i.datasets)?i.datasets.map(function(e,i){return{text:e.label,fillStyle:e.backgroundColor,hidden:!t.isDatasetVisible(i),lineCap:e.borderCapStyle,lineDash:e.borderDash,lineDashOffset:e.borderDashOffset,lineJoin:e.borderJoinStyle,lineWidth:e.borderWidth,strokeStyle:e.borderColor,datasetIndex:i}},this):[]}}},t.Legend=t.Element.extend({initialize:function(t){e.extend(this,t),this.legendHitBoxes=[],this.doughnutMode=!1},beforeUpdate:i,update:function(t,e,i){return this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this.margins=i,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this.beforeBuildLabels(),this.buildLabels(),this.afterBuildLabels(),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate(),this.minSize},afterUpdate:i,beforeSetDimensions:i,setDimensions:function(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0,this.minSize={width:0,height:0}},afterSetDimensions:i,beforeBuildLabels:i,buildLabels:function(){this.legendItems=this.options.labels.generateLabels.call(this,this.chart),this.options.reverse&&this.legendItems.reverse()},afterBuildLabels:i,beforeFit:i,fit:function(){var i=this.options,a=i.labels,o=i.display,s=this.ctx,n=t.defaults.global,r=e.getValueOrDefault,h=r(a.fontSize,n.defaultFontSize),l=r(a.fontStyle,n.defaultFontStyle),c=r(a.fontFamily,n.defaultFontFamily),d=e.fontString(h,l,c),u=this.legendHitBoxes=[],g=this.minSize,f=this.isHorizontal();if(f?(g.width=this.maxWidth,g.height=o?10:0):(g.width=o?10:0,g.height=this.maxHeight),o&&f){var p=this.lineWidths=[0],m=this.legendItems.length?h+a.padding:0;s.textAlign="left",s.textBaseline="top",s.font=d,e.each(this.legendItems,function(t,e){var i=a.boxWidth+h/2+s.measureText(t.text).width;p[p.length-1]+i+a.padding>=this.width&&(m+=h+a.padding,p[p.length]=this.left),u[e]={left:0,top:0,width:i,height:h},p[p.length-1]+=i+a.padding},this),g.height+=m}this.width=g.width,this.height=g.height},afterFit:i,isHorizontal:function(){return"top"===this.options.position||"bottom"===this.options.position},draw:function(){var i=this.options,a=i.labels,o=t.defaults.global,s=o.elements.line,n=this.width,r=this.lineWidths;if(i.display){var h=this.ctx,l={x:this.left+(n-r[0])/2,y:this.top+a.padding,line:0},c=e.getValueOrDefault,d=c(a.fontColor,o.defaultFontColor),u=c(a.fontSize,o.defaultFontSize),g=c(a.fontStyle,o.defaultFontStyle),f=c(a.fontFamily,o.defaultFontFamily),p=e.fontString(u,g,f);if(this.isHorizontal()){h.textAlign="left",h.textBaseline="top",h.lineWidth=.5,h.strokeStyle=d,h.fillStyle=d,h.font=p;var m=a.boxWidth,b=this.legendHitBoxes;e.each(this.legendItems,function(t,e){var i=h.measureText(t.text).width,d=m+u/2+i,g=l.x,f=l.y;g+d>=n&&(f=l.y+=u+a.padding,l.line++,g=l.x=this.left+(n-r[l.line])/2),h.save(),h.fillStyle=c(t.fillStyle,o.defaultColor),h.lineCap=c(t.lineCap,s.borderCapStyle),h.lineDashOffset=c(t.lineDashOffset,s.borderDashOffset),h.lineJoin=c(t.lineJoin,s.borderJoinStyle),h.lineWidth=c(t.lineWidth,s.borderWidth),h.strokeStyle=c(t.strokeStyle,o.defaultColor),h.setLineDash&&h.setLineDash(c(t.lineDash,s.borderDash)),h.strokeRect(g,f,m,u),h.fillRect(g,f,m,u),h.restore(),b[e].left=g,b[e].top=f,h.fillText(t.text,m+u/2+g,f),t.hidden&&(h.beginPath(),h.lineWidth=2,h.moveTo(m+u/2+g,f+u/2),h.lineTo(m+u/2+g+i,f+u/2),h.stroke()),l.x+=d+a.padding},this)}}},handleEvent:function(t){var i=e.getRelativePosition(t,this.chart.chart),a=i.x,o=i.y,s=this.options;if(a>=this.left&&a<=this.right&&o>=this.top&&o<=this.bottom)for(var n=this.legendHitBoxes,r=0;r<n.length;++r){var h=n[r];if(a>=h.left&&a<=h.left+h.width&&o>=h.top&&o<=h.top+h.height){s.onClick&&s.onClick.call(this,t,this.legendItems[r]);break}}}})}},{}],29:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;t.plugins=[],t.pluginService={register:function(e){var i=t.plugins;-1===i.indexOf(e)&&i.push(e)},remove:function(e){var i=t.plugins,a=i.indexOf(e);-1!==a&&i.splice(a,1)},notifyPlugins:function(i,a,o){e.each(t.plugins,function(t){t[i]&&"function"==typeof t[i]&&t[i].apply(o,a)},o)}};var i=e.noop;t.PluginBase=t.Element.extend({beforeInit:i,afterInit:i,beforeUpdate:i,afterUpdate:i,beforeDraw:i,afterDraw:i,destroy:i})}},{}],30:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.scale={display:!0,position:"left",gridLines:{display:!0,color:"rgba(0, 0, 0, 0.1)",lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickMarkLength:10,zeroLineWidth:1,zeroLineColor:"rgba(0,0,0,0.25)",offsetGridLines:!1},scaleLabel:{labelString:"",display:!1},ticks:{beginAtZero:!1,minRotation:0,maxRotation:50,mirror:!1,padding:10,reverse:!1,display:!0,autoSkip:!0,autoSkipPadding:0,labelOffset:0,callback:function(t){return""+t}}},t.Scale=t.Element.extend({beforeUpdate:function(){e.callCallback(this.options.beforeUpdate,[this])},update:function(t,i,a){return this.beforeUpdate(),this.maxWidth=t,this.maxHeight=i,this.margins=e.extend({left:0,right:0,top:0,bottom:0},a),this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this.beforeBuildTicks(),this.buildTicks(),this.afterBuildTicks(),this.beforeTickToLabelConversion(),this.convertTicksToLabels(),this.afterTickToLabelConversion(),this.beforeCalculateTickRotation(),this.calculateTickRotation(),this.afterCalculateTickRotation(),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate(),this.minSize},afterUpdate:function(){e.callCallback(this.options.afterUpdate,[this])},beforeSetDimensions:function(){e.callCallback(this.options.beforeSetDimensions,[this])},setDimensions:function(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0},afterSetDimensions:function(){e.callCallback(this.options.afterSetDimensions,[this])},beforeDataLimits:function(){e.callCallback(this.options.beforeDataLimits,[this])},determineDataLimits:e.noop,afterDataLimits:function(){e.callCallback(this.options.afterDataLimits,[this])},beforeBuildTicks:function(){e.callCallback(this.options.beforeBuildTicks,[this])},buildTicks:e.noop,afterBuildTicks:function(){e.callCallback(this.options.afterBuildTicks,[this])},beforeTickToLabelConversion:function(){e.callCallback(this.options.beforeTickToLabelConversion,[this])},convertTicksToLabels:function(){this.ticks=this.ticks.map(function(t,e,i){return this.options.ticks.userCallback?this.options.ticks.userCallback(t,e,i):this.options.ticks.callback(t,e,i)},this)},afterTickToLabelConversion:function(){e.callCallback(this.options.afterTickToLabelConversion,[this])},beforeCalculateTickRotation:function(){e.callCallback(this.options.beforeCalculateTickRotation,[this])},calculateTickRotation:function(){var i=e.getValueOrDefault(this.options.ticks.fontSize,t.defaults.global.defaultFontSize),a=e.getValueOrDefault(this.options.ticks.fontStyle,t.defaults.global.defaultFontStyle),o=e.getValueOrDefault(this.options.ticks.fontFamily,t.defaults.global.defaultFontFamily),s=e.fontString(i,a,o);this.ctx.font=s;var n,r=this.ctx.measureText(this.ticks[0]).width,h=this.ctx.measureText(this.ticks[this.ticks.length-1]).width;if(this.labelRotation=this.options.ticks.minRotation||0,this.paddingRight=0,this.paddingLeft=0,this.options.display&&this.isHorizontal()){this.paddingRight=h/2+3,this.paddingLeft=r/2+3,this.longestTextCache||(this.longestTextCache={});for(var l,c,d=e.longestText(this.ctx,s,this.ticks,this.longestTextCache),u=d,g=this.getPixelForTick(1)-this.getPixelForTick(0)-6;u>g&&this.labelRotation<this.options.ticks.maxRotation;){if(l=Math.cos(e.toRadians(this.labelRotation)),c=Math.sin(e.toRadians(this.labelRotation)),n=l*r,n+i/2>this.yLabelWidth&&(this.paddingLeft=n+i/2),this.paddingRight=i/2,c*d>this.maxHeight){this.labelRotation--;break}this.labelRotation++,u=l*d}}this.margins&&(this.paddingLeft=Math.max(this.paddingLeft-this.margins.left,0),this.paddingRight=Math.max(this.paddingRight-this.margins.right,0))},afterCalculateTickRotation:function(){e.callCallback(this.options.afterCalculateTickRotation,[this])},beforeFit:function(){e.callCallback(this.options.beforeFit,[this])},fit:function(){var i=this.minSize={width:0,height:0},a=this.options,o=a.ticks,s=a.scaleLabel,n=t.defaults.global,r=a.display,h=this.isHorizontal(),l=e.getValueOrDefault(o.fontSize,n.defaultFontSize),c=e.getValueOrDefault(o.fontStyle,n.defaultFontStyle),d=e.getValueOrDefault(o.fontFamily,n.defaultFontFamily),u=e.fontString(l,c,d),g=e.getValueOrDefault(s.fontSize,n.defaultFontSize),f=e.getValueOrDefault(s.fontStyle,n.defaultFontStyle),p=e.getValueOrDefault(s.fontFamily,n.defaultFontFamily),m=(e.fontString(g,f,p),a.gridLines.tickMarkLength);if(h?i.width=this.isFullWidth()?this.maxWidth-this.margins.left-this.margins.right:this.maxWidth:i.width=r?m:0,h?i.height=r?m:0:i.height=this.maxHeight,s.display&&r&&(h?i.height+=1.5*g:i.width+=1.5*g),o.display&&r){this.longestTextCache||(this.longestTextCache={});var b=e.longestText(this.ctx,u,this.ticks,this.longestTextCache);if(h){this.longestLabelWidth=b;var x=Math.sin(e.toRadians(this.labelRotation))*this.longestLabelWidth+1.5*l;i.height=Math.min(this.maxHeight,i.height+x),this.ctx.font=u;var v=this.ctx.measureText(this.ticks[0]).width,y=this.ctx.measureText(this.ticks[this.ticks.length-1]).width,k=Math.cos(e.toRadians(this.labelRotation)),S=Math.sin(e.toRadians(this.labelRotation));this.paddingLeft=0!==this.labelRotation?k*v+3:v/2+3,this.paddingRight=0!==this.labelRotation?S*(l/2)+3:y/2+3}else{var C=this.maxWidth-i.width,w=o.mirror;w?b=0:b+=this.options.ticks.padding,C>b?i.width+=b:i.width=this.maxWidth,this.paddingTop=l/2,this.paddingBottom=l/2}}this.margins&&(this.paddingLeft=Math.max(this.paddingLeft-this.margins.left,0),this.paddingTop=Math.max(this.paddingTop-this.margins.top,0),this.paddingRight=Math.max(this.paddingRight-this.margins.right,0),this.paddingBottom=Math.max(this.paddingBottom-this.margins.bottom,0)),this.width=i.width,this.height=i.height},afterFit:function(){e.callCallback(this.options.afterFit,[this])},isHorizontal:function(){return"top"===this.options.position||"bottom"===this.options.position},isFullWidth:function(){return this.options.fullWidth},getRightValue:function i(t){return null===t||"undefined"==typeof t?NaN:"number"==typeof t&&isNaN(t)?NaN:"object"==typeof t?t instanceof Date?t:i(this.isHorizontal()?t.x:t.y):t},getLabelForIndex:e.noop,getPixelForValue:e.noop,getValueForPixel:e.noop,getPixelForTick:function(t,e){if(this.isHorizontal()){var i=this.width-(this.paddingLeft+this.paddingRight),a=i/Math.max(this.ticks.length-(this.options.gridLines.offsetGridLines?0:1),1),o=a*t+this.paddingLeft;e&&(o+=a/2);var s=this.left+Math.round(o);return s+=this.isFullWidth()?this.margins.left:0}var n=this.height-(this.paddingTop+this.paddingBottom);return this.top+t*(n/(this.ticks.length-1))},getPixelForDecimal:function(t){if(this.isHorizontal()){var e=this.width-(this.paddingLeft+this.paddingRight),i=e*t+this.paddingLeft,a=this.left+Math.round(i);return a+=this.isFullWidth()?this.margins.left:0}return this.top+t*this.height},draw:function(i){if(this.options.display){var a,o,s,n,r,h=0!==this.labelRotation,l=this.options.ticks.autoSkip;this.options.ticks.maxTicksLimit&&(r=this.options.ticks.maxTicksLimit);var c=e.getValueOrDefault(this.options.ticks.fontColor,t.defaults.global.defaultFontColor),d=e.getValueOrDefault(this.options.ticks.fontSize,t.defaults.global.defaultFontSize),u=e.getValueOrDefault(this.options.ticks.fontStyle,t.defaults.global.defaultFontStyle),g=e.getValueOrDefault(this.options.ticks.fontFamily,t.defaults.global.defaultFontFamily),f=e.fontString(d,u,g),p=this.options.gridLines.tickMarkLength,m=e.getValueOrDefault(this.options.scaleLabel.fontColor,t.defaults.global.defaultFontColor),b=e.getValueOrDefault(this.options.scaleLabel.fontSize,t.defaults.global.defaultFontSize),x=e.getValueOrDefault(this.options.scaleLabel.fontStyle,t.defaults.global.defaultFontStyle),v=e.getValueOrDefault(this.options.scaleLabel.fontFamily,t.defaults.global.defaultFontFamily),y=e.fontString(b,x,v),k=Math.cos(e.toRadians(this.labelRotation)),S=(Math.sin(e.toRadians(this.labelRotation)),this.longestLabelWidth*k);if(this.ctx.fillStyle=c,this.isHorizontal()){a=!0;var C="bottom"===this.options.position?this.top:this.bottom-p,w="bottom"===this.options.position?this.top+p:this.bottom;if(o=!1,(S/2+this.options.ticks.autoSkipPadding)*this.ticks.length>this.width-(this.paddingLeft+this.paddingRight)&&(o=1+Math.floor((S/2+this.options.ticks.autoSkipPadding)*this.ticks.length/(this.width-(this.paddingLeft+this.paddingRight)))),r&&this.ticks.length>r)for(;!o||this.ticks.length/(o||1)>r;)o||(o=1),o+=1;l||(o=!1),e.each(this.ticks,function(t,s){var n=this.ticks.length===s+1,r=o>1&&s%o>0||s%o===0&&s+o>this.ticks.length;if((!r||n)&&void 0!==t&&null!==t){var l=this.getPixelForTick(s),c=this.getPixelForTick(s,this.options.gridLines.offsetGridLines);this.options.gridLines.display&&(s===("undefined"!=typeof this.zeroLineIndex?this.zeroLineIndex:0)?(this.ctx.lineWidth=this.options.gridLines.zeroLineWidth,this.ctx.strokeStyle=this.options.gridLines.zeroLineColor,a=!0):a&&(this.ctx.lineWidth=this.options.gridLines.lineWidth,this.ctx.strokeStyle=this.options.gridLines.color,a=!1),l+=e.aliasPixel(this.ctx.lineWidth),this.ctx.beginPath(),this.options.gridLines.drawTicks&&(this.ctx.moveTo(l,C),this.ctx.lineTo(l,w)),this.options.gridLines.drawOnChartArea&&(this.ctx.moveTo(l,i.top),this.ctx.lineTo(l,i.bottom)),this.ctx.stroke()),this.options.ticks.display&&(this.ctx.save(),this.ctx.translate(c+this.options.ticks.labelOffset,h?this.top+12:"top"===this.options.position?this.bottom-p:this.top+p),this.ctx.rotate(-1*e.toRadians(this.labelRotation)),this.ctx.font=f,this.ctx.textAlign=h?"right":"center",this.ctx.textBaseline=h?"middle":"top"===this.options.position?"bottom":"top",this.ctx.fillText(t,0,0),this.ctx.restore())}},this),this.options.scaleLabel.display&&(this.ctx.textAlign="center",this.ctx.textBaseline="middle",this.ctx.fillStyle=m,this.ctx.font=y,s=this.left+(this.right-this.left)/2,n="bottom"===this.options.position?this.bottom-b/2:this.top+b/2,this.ctx.fillText(this.options.scaleLabel.labelString,s,n))}else{a=!0;var D="right"===this.options.position?this.left:this.right-5,M="right"===this.options.position?this.left+5:this.right;if(e.each(this.ticks,function(t,o){if(void 0!==t&&null!==t){var s=this.getPixelForTick(o);if(this.options.gridLines.display&&(o===("undefined"!=typeof this.zeroLineIndex?this.zeroLineIndex:0)?(this.ctx.lineWidth=this.options.gridLines.zeroLineWidth,this.ctx.strokeStyle=this.options.gridLines.zeroLineColor,a=!0):a&&(this.ctx.lineWidth=this.options.gridLines.lineWidth,this.ctx.strokeStyle=this.options.gridLines.color,a=!1),s+=e.aliasPixel(this.ctx.lineWidth),this.ctx.beginPath(),this.options.gridLines.drawTicks&&(this.ctx.moveTo(D,s),this.ctx.lineTo(M,s)),this.options.gridLines.drawOnChartArea&&(this.ctx.moveTo(i.left,s),this.ctx.lineTo(i.right,s)),this.ctx.stroke()),this.options.ticks.display){var n,r=this.getPixelForTick(o,this.options.gridLines.offsetGridLines);this.ctx.save(),"left"===this.options.position?this.options.ticks.mirror?(n=this.right+this.options.ticks.padding,this.ctx.textAlign="left"):(n=this.right-this.options.ticks.padding,this.ctx.textAlign="right"):this.options.ticks.mirror?(n=this.left-this.options.ticks.padding,this.ctx.textAlign="right"):(n=this.left+this.options.ticks.padding,this.ctx.textAlign="left"),this.ctx.translate(n,r+this.options.ticks.labelOffset),this.ctx.rotate(-1*e.toRadians(this.labelRotation)),this.ctx.font=f,this.ctx.textBaseline="middle",this.ctx.fillText(t,0,0),this.ctx.restore()}}},this),this.options.scaleLabel.display){s="left"===this.options.position?this.left+b/2:this.right-b/2,n=this.top+(this.bottom-this.top)/2;var _="left"===this.options.position?-.5*Math.PI:.5*Math.PI;this.ctx.save(),this.ctx.translate(s,n),this.ctx.rotate(_),this.ctx.textAlign="center",this.ctx.fillStyle=m,this.ctx.font=y,this.ctx.textBaseline="middle",this.ctx.fillText(this.options.scaleLabel.labelString,0,0),this.ctx.restore()}}this.ctx.lineWidth=this.options.gridLines.lineWidth,this.ctx.strokeStyle=this.options.gridLines.color;var A=this.left,I=this.right,F=this.top,P=this.bottom;this.isHorizontal()?(F=P="top"===this.options.position?this.bottom:this.top,F+=e.aliasPixel(this.ctx.lineWidth),P+=e.aliasPixel(this.ctx.lineWidth)):(A=I="left"===this.options.position?this.right:this.left,A+=e.aliasPixel(this.ctx.lineWidth),I+=e.aliasPixel(this.ctx.lineWidth)),this.ctx.beginPath(),this.ctx.moveTo(A,F),this.ctx.lineTo(I,P),this.ctx.stroke()}}})}},{}],31:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;t.scaleService={constructors:{},defaults:{},registerScaleType:function(t,i,a){this.constructors[t]=i,this.defaults[t]=e.clone(a)},getScaleConstructor:function(t){return this.constructors.hasOwnProperty(t)?this.constructors[t]:void 0},getScaleDefaults:function(i){return this.defaults.hasOwnProperty(i)?e.scaleMerge(t.defaults.scale,this.defaults[i]):{}},updateScaleDefaults:function(t,i){var a=this.defaults;a.hasOwnProperty(t)&&(a[t]=e.extend(a[t],i))},addScalesToLayout:function(i){e.each(i.scales,function(e){t.layoutService.addBox(i,e)})}}}},{}],32:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.global.title={display:!1,position:"top",fullWidth:!0,fontStyle:"bold",padding:10,text:""};var i=e.noop;t.Title=t.Element.extend({initialize:function(i){e.extend(this,i),this.options=e.configMerge(t.defaults.global.title,i.options),this.legendHitBoxes=[]},beforeUpdate:i,update:function(t,e,i){return this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this.margins=i,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this.beforeBuildLabels(),this.buildLabels(),this.afterBuildLabels(),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate(),this.minSize},afterUpdate:i,beforeSetDimensions:i,setDimensions:function(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0,this.minSize={width:0,height:0}},afterSetDimensions:i,beforeBuildLabels:i,buildLabels:i,afterBuildLabels:i,beforeFit:i,fit:function(){var i=(this.ctx,e.getValueOrDefault),a=this.options,o=t.defaults.global,s=a.display,n=i(a.fontSize,o.defaultFontSize),r=this.minSize;this.isHorizontal()?(r.width=this.maxWidth,r.height=s?n+2*a.padding:0):(r.width=s?n+2*a.padding:0,r.height=this.maxHeight),this.width=r.width,this.height=r.height},afterFit:i,isHorizontal:function(){var t=this.options.position;return"top"===t||"bottom"===t},draw:function(){var i=this.ctx,a=e.getValueOrDefault,o=this.options,s=t.defaults.global;if(o.display){var n,r,h=a(o.fontSize,s.defaultFontSize),l=a(o.fontStyle,s.defaultFontStyle),c=a(o.fontFamily,s.defaultFontFamily),d=e.fontString(h,l,c),u=0;i.fillStyle=a(o.fontColor,s.defaultFontColor),i.font=d,this.isHorizontal()?(n=this.left+(this.right-this.left)/2,r=this.top+(this.bottom-this.top)/2):(n="left"===o.position?this.left+h/2:this.right-h/2,r=this.top+(this.bottom-this.top)/2,u=Math.PI*("left"===o.position?-.5:.5)),i.save(),i.translate(n,r),i.rotate(u),i.textAlign="center",i.textBaseline="middle",i.fillText(o.text,0,0),i.restore()}}})}},{}],33:[function(t,e,i){"use strict";e.exports=function(t){function e(t,e){return e&&(i.isArray(e)?t=t.concat(e):t.push(e)),t}var i=t.helpers;t.defaults.global.tooltips={enabled:!0,custom:null,mode:"single",backgroundColor:"rgba(0,0,0,0.8)",titleFontStyle:"bold",titleSpacing:2,titleMarginBottom:6,titleColor:"#fff",titleAlign:"left",bodySpacing:2,bodyColor:"#fff",bodyAlign:"left",footerFontStyle:"bold",footerSpacing:2,footerMarginTop:6,footerColor:"#fff",footerAlign:"left",yPadding:6,xPadding:6,yAlign:"center",xAlign:"center",caretSize:5,cornerRadius:6,multiKeyBackground:"#fff",callbacks:{beforeTitle:i.noop,title:function(t,e){var i="";return t.length>0&&(t[0].xLabel?i=t[0].xLabel:e.labels.length>0&&t[0].index<e.labels.length&&(i=e.labels[t[0].index])),i},afterTitle:i.noop,beforeBody:i.noop,beforeLabel:i.noop,label:function(t,e){var i=e.datasets[t.datasetIndex].label||"";return i+": "+t.yLabel},afterLabel:i.noop,afterBody:i.noop,beforeFooter:i.noop,footer:i.noop,afterFooter:i.noop}},t.Tooltip=t.Element.extend({initialize:function(){var e=this._options;i.extend(this,{_model:{xPadding:e.tooltips.xPadding,yPadding:e.tooltips.yPadding,xAlign:e.tooltips.yAlign,yAlign:e.tooltips.xAlign,bodyColor:e.tooltips.bodyColor,_bodyFontFamily:i.getValueOrDefault(e.tooltips.bodyFontFamily,t.defaults.global.defaultFontFamily),_bodyFontStyle:i.getValueOrDefault(e.tooltips.bodyFontStyle,t.defaults.global.defaultFontStyle),_bodyAlign:e.tooltips.bodyAlign,bodyFontSize:i.getValueOrDefault(e.tooltips.bodyFontSize,t.defaults.global.defaultFontSize),bodySpacing:e.tooltips.bodySpacing,titleColor:e.tooltips.titleColor,_titleFontFamily:i.getValueOrDefault(e.tooltips.titleFontFamily,t.defaults.global.defaultFontFamily),_titleFontStyle:i.getValueOrDefault(e.tooltips.titleFontStyle,t.defaults.global.defaultFontStyle),titleFontSize:i.getValueOrDefault(e.tooltips.titleFontSize,t.defaults.global.defaultFontSize),_titleAlign:e.tooltips.titleAlign,titleSpacing:e.tooltips.titleSpacing,titleMarginBottom:e.tooltips.titleMarginBottom,footerColor:e.tooltips.footerColor,_footerFontFamily:i.getValueOrDefault(e.tooltips.footerFontFamily,t.defaults.global.defaultFontFamily),_footerFontStyle:i.getValueOrDefault(e.tooltips.footerFontStyle,t.defaults.global.defaultFontStyle),footerFontSize:i.getValueOrDefault(e.tooltips.footerFontSize,t.defaults.global.defaultFontSize),_footerAlign:e.tooltips.footerAlign,footerSpacing:e.tooltips.footerSpacing,footerMarginTop:e.tooltips.footerMarginTop,caretSize:e.tooltips.caretSize,cornerRadius:e.tooltips.cornerRadius,backgroundColor:e.tooltips.backgroundColor,opacity:0,legendColorBackground:e.tooltips.multiKeyBackground}})},getTitle:function(){var t=this._options.tooltips.callbacks.beforeTitle.apply(this,arguments),i=this._options.tooltips.callbacks.title.apply(this,arguments),a=this._options.tooltips.callbacks.afterTitle.apply(this,arguments),o=[];return o=e(o,t),o=e(o,i),o=e(o,a)},getBeforeBody:function(){var t=this._options.tooltips.callbacks.beforeBody.apply(this,arguments);return i.isArray(t)?t:void 0!==t?[t]:[]},getBody:function(t,e){var a=[];return i.each(t,function(t){i.pushAllIfDefined(this._options.tooltips.callbacks.beforeLabel.call(this,t,e),a),i.pushAllIfDefined(this._options.tooltips.callbacks.label.call(this,t,e),a),i.pushAllIfDefined(this._options.tooltips.callbacks.afterLabel.call(this,t,e),a)},this),a},getAfterBody:function(){var t=this._options.tooltips.callbacks.afterBody.apply(this,arguments);return i.isArray(t)?t:void 0!==t?[t]:[]},getFooter:function(){var t=this._options.tooltips.callbacks.beforeFooter.apply(this,arguments),i=this._options.tooltips.callbacks.footer.apply(this,arguments),a=this._options.tooltips.callbacks.afterFooter.apply(this,arguments),o=[];return o=e(o,t),o=e(o,i),o=e(o,a)},getAveragePosition:function(t){if(!t.length)return!1;var e=[],a=[];i.each(t,function(t){if(t){var i=t.tooltipPosition();e.push(i.x),a.push(i.y)}});for(var o=0,s=0,n=0;n<e.length;n++)o+=e[n],s+=a[n];return{x:Math.round(o/e.length),y:Math.round(s/e.length)}},update:function(t){if(this._active.length){this._model.opacity=1;var e,a=this._active[0],o=[],s=[];if("single"===this._options.tooltips.mode){var n=a._yScale||a._scale;s.push({xLabel:a._xScale?a._xScale.getLabelForIndex(a._index,a._datasetIndex):"",yLabel:n?n.getLabelForIndex(a._index,a._datasetIndex):"",index:a._index,datasetIndex:a._datasetIndex}),e=this.getAveragePosition(this._active)}else i.each(this._data.datasets,function(t,e){if(this._chartInstance.isDatasetVisible(e)){var i=this._chartInstance.getDatasetMeta(e),o=i.data[a._index];if(o){var n=a._yScale||a._scale;s.push({xLabel:o._xScale?o._xScale.getLabelForIndex(o._index,o._datasetIndex):"",yLabel:n?n.getLabelForIndex(o._index,o._datasetIndex):"",index:a._index,datasetIndex:e})}}},this),i.each(this._active,function(t){t&&o.push({borderColor:t._view.borderColor,backgroundColor:t._view.backgroundColor})},null),e=this.getAveragePosition(this._active);i.extend(this._model,{title:this.getTitle(s,this._data),beforeBody:this.getBeforeBody(s,this._data),body:this.getBody(s,this._data),afterBody:this.getAfterBody(s,this._data),footer:this.getFooter(s,this._data)}),i.extend(this._model,{x:Math.round(e.x),y:Math.round(e.y),caretPadding:i.getValueOrDefault(e.padding,2),labelColors:o});var r=this.getTooltipSize(this._model);this.determineAlignment(r),i.extend(this._model,this.getBackgroundPoint(this._model,r))}else this._model.opacity=0;return t&&this._options.tooltips.custom&&this._options.tooltips.custom.call(this,this._model),this},getTooltipSize:function(t){var e=this._chart.ctx,a={height:2*t.yPadding,width:0},o=t.body.length+t.beforeBody.length+t.afterBody.length;return a.height+=t.title.length*t.titleFontSize,a.height+=(t.title.length-1)*t.titleSpacing,a.height+=t.title.length?t.titleMarginBottom:0,a.height+=o*t.bodyFontSize,a.height+=o?(o-1)*t.bodySpacing:0,a.height+=t.footer.length?t.footerMarginTop:0,a.height+=t.footer.length*t.footerFontSize,a.height+=t.footer.length?(t.footer.length-1)*t.footerSpacing:0,e.font=i.fontString(t.titleFontSize,t._titleFontStyle,t._titleFontFamily),i.each(t.title,function(t){a.width=Math.max(a.width,e.measureText(t).width)}),e.font=i.fontString(t.bodyFontSize,t._bodyFontStyle,t._bodyFontFamily),i.each(t.beforeBody.concat(t.afterBody),function(t){a.width=Math.max(a.width,e.measureText(t).width);
}),i.each(t.body,function(i){a.width=Math.max(a.width,e.measureText(i).width+("single"!==this._options.tooltips.mode?t.bodyFontSize+2:0))},this),e.font=i.fontString(t.footerFontSize,t._footerFontStyle,t._footerFontFamily),i.each(t.footer,function(t){a.width=Math.max(a.width,e.measureText(t).width)}),a.width+=2*t.xPadding,a},determineAlignment:function(t){this._model.y<t.height?this._model.yAlign="top":this._model.y>this._chart.height-t.height&&(this._model.yAlign="bottom");var e,i,a,o,s,n=this,r=(this._chartInstance.chartArea.left+this._chartInstance.chartArea.right)/2,h=(this._chartInstance.chartArea.top+this._chartInstance.chartArea.bottom)/2;"center"===this._model.yAlign?(e=function(t){return r>=t},i=function(t){return t>r}):(e=function(e){return e<=t.width/2},i=function(e){return e>=n._chart.width-t.width/2}),a=function(e){return e+t.width>n._chart.width},o=function(e){return e-t.width<0},s=function(t){return h>=t?"top":"bottom"},e(this._model.x)?(this._model.xAlign="left",a(this._model.x)&&(this._model.xAlign="center",this._model.yAlign=s(this._model.y))):i(this._model.x)&&(this._model.xAlign="right",o(this._model.x)&&(this._model.xAlign="center",this._model.yAlign=s(this._model.y)))},getBackgroundPoint:function(t,e){var i={x:t.x,y:t.y};return"right"===t.xAlign?i.x-=e.width:"center"===t.xAlign&&(i.x-=e.width/2),"top"===t.yAlign?i.y+=t.caretPadding+t.caretSize:"bottom"===t.yAlign?i.y-=e.height+t.caretPadding+t.caretSize:i.y-=e.height/2,"center"===t.yAlign?"left"===t.xAlign?i.x+=t.caretPadding+t.caretSize:"right"===t.xAlign&&(i.x-=t.caretPadding+t.caretSize):"left"===t.xAlign?i.x-=t.cornerRadius+t.caretPadding:"right"===t.xAlign&&(i.x+=t.cornerRadius+t.caretPadding),i},drawCaret:function(t,e,a,o){var s,n,r,h,l,c,d=this._view,u=this._chart.ctx;"center"===d.yAlign?("left"===d.xAlign?(s=t.x,n=s-d.caretSize,r=s):(s=t.x+e.width,n=s+d.caretSize,r=s),l=t.y+e.height/2,h=l-d.caretSize,c=l+d.caretSize):("left"===d.xAlign?(s=t.x+d.cornerRadius,n=s+d.caretSize,r=n+d.caretSize):"right"===d.xAlign?(s=t.x+e.width-d.cornerRadius,n=s-d.caretSize,r=n-d.caretSize):(n=t.x+e.width/2,s=n-d.caretSize,r=n+d.caretSize),"top"===d.yAlign?(h=t.y,l=h-d.caretSize,c=h):(h=t.y+e.height,l=h+d.caretSize,c=h));var g=i.color(d.backgroundColor);u.fillStyle=g.alpha(a*g.alpha()).rgbString(),u.beginPath(),u.moveTo(s,h),u.lineTo(n,l),u.lineTo(r,c),u.closePath(),u.fill()},drawTitle:function(t,e,a,o){if(e.title.length){a.textAlign=e._titleAlign,a.textBaseline="top";var s=i.color(e.titleColor);a.fillStyle=s.alpha(o*s.alpha()).rgbString(),a.font=i.fontString(e.titleFontSize,e._titleFontStyle,e._titleFontFamily),i.each(e.title,function(i,o){a.fillText(i,t.x,t.y),t.y+=e.titleFontSize+e.titleSpacing,o+1===e.title.length&&(t.y+=e.titleMarginBottom-e.titleSpacing)})}},drawBody:function(t,e,a,o){a.textAlign=e._bodyAlign,a.textBaseline="top";var s=i.color(e.bodyColor);a.fillStyle=s.alpha(o*s.alpha()).rgbString(),a.font=i.fontString(e.bodyFontSize,e._bodyFontStyle,e._bodyFontFamily),i.each(e.beforeBody,function(i){a.fillText(i,t.x,t.y),t.y+=e.bodyFontSize+e.bodySpacing}),i.each(e.body,function(s,n){"single"!==this._options.tooltips.mode&&(a.fillStyle=i.color(e.legendColorBackground).alpha(o).rgbaString(),a.fillRect(t.x,t.y,e.bodyFontSize,e.bodyFontSize),a.strokeStyle=i.color(e.labelColors[n].borderColor).alpha(o).rgbaString(),a.strokeRect(t.x,t.y,e.bodyFontSize,e.bodyFontSize),a.fillStyle=i.color(e.labelColors[n].backgroundColor).alpha(o).rgbaString(),a.fillRect(t.x+1,t.y+1,e.bodyFontSize-2,e.bodyFontSize-2),a.fillStyle=i.color(e.bodyColor).alpha(o).rgbaString()),a.fillText(s,t.x+("single"!==this._options.tooltips.mode?e.bodyFontSize+2:0),t.y),t.y+=e.bodyFontSize+e.bodySpacing},this),i.each(e.afterBody,function(i){a.fillText(i,t.x,t.y),t.y+=e.bodyFontSize}),t.y-=e.bodySpacing},drawFooter:function(t,e,a,o){if(e.footer.length){t.y+=e.footerMarginTop,a.textAlign=e._footerAlign,a.textBaseline="top";var s=i.color(e.footerColor);a.fillStyle=s.alpha(o*s.alpha()).rgbString(),a.font=i.fontString(e.footerFontSize,e._footerFontStyle,e._footerFontFamily),i.each(e.footer,function(i){a.fillText(i,t.x,t.y),t.y+=e.footerFontSize+e.footerSpacing})}},draw:function(){var t=this._chart.ctx,e=this._view;if(0!==e.opacity){var a=e.caretPadding,o=this.getTooltipSize(e),s={x:e.x,y:e.y},n=Math.abs(e.opacity<.001)?0:e.opacity;if(this._options.tooltips.enabled){var r=i.color(e.backgroundColor);t.fillStyle=r.alpha(n*r.alpha()).rgbString(),i.drawRoundedRectangle(t,s.x,s.y,o.width,o.height,e.cornerRadius),t.fill(),this.drawCaret(s,o,n,a),s.x+=e.xPadding,s.y+=e.yPadding,this.drawTitle(s,e,t,n),this.drawBody(s,e,t,n),this.drawFooter(s,e,t,n)}}}})}},{}],34:[function(t,e,i){"use strict";e.exports=function(t,e){var i=t.helpers,a=t.defaults.global;a.elements.arc={backgroundColor:a.defaultColor,borderColor:"#fff",borderWidth:2},t.elements.Arc=t.Element.extend({inLabelRange:function(t){var e=this._view;return e?Math.pow(t-e.x,2)<Math.pow(e.radius+e.hoverRadius,2):!1},inRange:function(t,e){var a=this._view;if(a){for(var o=i.getAngleFromPoint(a,{x:t,y:e}),s=o.angle,n=o.distance,r=a.startAngle,h=a.endAngle;r>h;)h+=2*Math.PI;for(;s>h;)s-=2*Math.PI;for(;r>s;)s+=2*Math.PI;var l=s>=r&&h>=s,c=n>=a.innerRadius&&n<=a.outerRadius;return l&&c}return!1},tooltipPosition:function(){var t=this._view,e=t.startAngle+(t.endAngle-t.startAngle)/2,i=(t.outerRadius-t.innerRadius)/2+t.innerRadius;return{x:t.x+Math.cos(e)*i,y:t.y+Math.sin(e)*i}},draw:function(){var t=this._chart.ctx,e=this._view,i=e.startAngle,a=e.endAngle;t.beginPath(),t.arc(e.x,e.y,e.outerRadius,i,a),t.arc(e.x,e.y,e.innerRadius,a,i,!0),t.closePath(),t.strokeStyle=e.borderColor,t.lineWidth=e.borderWidth,t.fillStyle=e.backgroundColor,t.fill(),t.lineJoin="bevel",e.borderWidth&&t.stroke()}})}},{}],35:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.global.elements.line={tension:.4,backgroundColor:t.defaults.global.defaultColor,borderWidth:3,borderColor:t.defaults.global.defaultColor,borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",fill:!0},t.elements.Line=t.Element.extend({lineToNextPoint:function(t,e,i,a,o){var s=this._chart.ctx;e._view.skip?a.call(this,t,e,i):t._view.skip?o.call(this,t,e,i):0===e._view.tension?s.lineTo(e._view.x,e._view.y):s.bezierCurveTo(t._view.controlPointNextX,t._view.controlPointNextY,e._view.controlPointPreviousX,e._view.controlPointPreviousY,e._view.x,e._view.y)},draw:function(){function i(t){n._view.skip||r._view.skip?t&&s.lineTo(a._view.scaleZero.x,a._view.scaleZero.y):s.bezierCurveTo(r._view.controlPointNextX,r._view.controlPointNextY,n._view.controlPointPreviousX,n._view.controlPointPreviousY,n._view.x,n._view.y)}var a=this,o=this._view,s=this._chart.ctx,n=this._children[0],r=this._children[this._children.length-1];s.save(),this._children.length>0&&o.fill&&(s.beginPath(),e.each(this._children,function(t,i){var a=e.previousItem(this._children,i),n=e.nextItem(this._children,i);0===i?(this._loop?s.moveTo(o.scaleZero.x,o.scaleZero.y):s.moveTo(t._view.x,o.scaleZero),t._view.skip?this._loop||s.moveTo(n._view.x,this._view.scaleZero):s.lineTo(t._view.x,t._view.y)):this.lineToNextPoint(a,t,n,function(t,e,i){this._loop?s.lineTo(this._view.scaleZero.x,this._view.scaleZero.y):(s.lineTo(t._view.x,this._view.scaleZero),s.moveTo(i._view.x,this._view.scaleZero))},function(t,e){s.lineTo(e._view.x,e._view.y)})},this),this._loop?i(!0):(s.lineTo(this._children[this._children.length-1]._view.x,o.scaleZero),s.lineTo(this._children[0]._view.x,o.scaleZero)),s.fillStyle=o.backgroundColor||t.defaults.global.defaultColor,s.closePath(),s.fill()),s.lineCap=o.borderCapStyle||t.defaults.global.elements.line.borderCapStyle,s.setLineDash&&s.setLineDash(o.borderDash||t.defaults.global.elements.line.borderDash),s.lineDashOffset=o.borderDashOffset||t.defaults.global.elements.line.borderDashOffset,s.lineJoin=o.borderJoinStyle||t.defaults.global.elements.line.borderJoinStyle,s.lineWidth=o.borderWidth||t.defaults.global.elements.line.borderWidth,s.strokeStyle=o.borderColor||t.defaults.global.defaultColor,s.beginPath(),e.each(this._children,function(t,i){var a=e.previousItem(this._children,i),o=e.nextItem(this._children,i);0===i?s.moveTo(t._view.x,t._view.y):this.lineToNextPoint(a,t,o,function(t,e,i){s.moveTo(i._view.x,i._view.y)},function(t,e){s.moveTo(e._view.x,e._view.y)})},this),this._loop&&this._children.length>0&&i(),s.stroke(),s.restore()}})}},{}],36:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers,i=t.defaults.global;i.elements.point={radius:3,pointStyle:"circle",backgroundColor:i.defaultColor,borderWidth:1,borderColor:i.defaultColor,hitRadius:1,hoverRadius:4,hoverBorderWidth:1},t.elements.Point=t.Element.extend({inRange:function(t,e){var i=this._view;return i?Math.pow(t-i.x,2)+Math.pow(e-i.y,2)<Math.pow(i.hitRadius+i.radius,2):!1},inLabelRange:function(t){var e=this._view;return e?Math.pow(t-e.x,2)<Math.pow(e.radius+e.hitRadius,2):!1},tooltipPosition:function(){var t=this._view;return{x:t.x,y:t.y,padding:t.radius+t.borderWidth}},draw:function(){var i=this._view,a=i.x,o=i.y,s=this._chart.ctx;if(!i.skip){var n=i.pointStyle;if("object"==typeof n&&("[object HTMLImageElement]"===n.toString()||"[object HTMLCanvasElement]"===n.toString()))return void s.drawImage(n,a-n.width/2,o-n.height/2);if(!isNaN(i.radius)&&i.radius>0){s.strokeStyle=i.borderColor||t.defaults.global.defaultColor,s.lineWidth=e.getValueOrDefault(i.borderWidth,t.defaults.global.elements.point.borderWidth),s.fillStyle=i.backgroundColor||t.defaults.global.defaultColor;var r,h,l=i.radius;switch(n){default:s.beginPath(),s.arc(a,o,l,0,2*Math.PI),s.closePath(),s.fill();break;case"triangle":s.beginPath();var c=3*l/Math.sqrt(3),d=c*Math.sqrt(3)/2;s.moveTo(a-c/2,o+d/3),s.lineTo(a+c/2,o+d/3),s.lineTo(a,o-2*d/3),s.closePath(),s.fill();break;case"rect":s.fillRect(a-1/Math.SQRT2*l,o-1/Math.SQRT2*l,2/Math.SQRT2*l,2/Math.SQRT2*l),s.strokeRect(a-1/Math.SQRT2*l,o-1/Math.SQRT2*l,2/Math.SQRT2*l,2/Math.SQRT2*l);break;case"rectRot":s.translate(a,o),s.rotate(Math.PI/4),s.fillRect(-1/Math.SQRT2*l,-1/Math.SQRT2*l,2/Math.SQRT2*l,2/Math.SQRT2*l),s.strokeRect(-1/Math.SQRT2*l,-1/Math.SQRT2*l,2/Math.SQRT2*l,2/Math.SQRT2*l),s.setTransform(1,0,0,1,0,0);break;case"cross":s.beginPath(),s.moveTo(a,o+l),s.lineTo(a,o-l),s.moveTo(a-l,o),s.lineTo(a+l,o),s.closePath();break;case"crossRot":s.beginPath(),r=Math.cos(Math.PI/4)*l,h=Math.sin(Math.PI/4)*l,s.moveTo(a-r,o-h),s.lineTo(a+r,o+h),s.moveTo(a-r,o+h),s.lineTo(a+r,o-h),s.closePath();break;case"star":s.beginPath(),s.moveTo(a,o+l),s.lineTo(a,o-l),s.moveTo(a-l,o),s.lineTo(a+l,o),r=Math.cos(Math.PI/4)*l,h=Math.sin(Math.PI/4)*l,s.moveTo(a-r,o-h),s.lineTo(a+r,o+h),s.moveTo(a-r,o+h),s.lineTo(a+r,o-h),s.closePath();break;case"line":s.beginPath(),s.moveTo(a-l,o),s.lineTo(a+l,o),s.closePath();break;case"dash":s.beginPath(),s.moveTo(a,o),s.lineTo(a+l,o),s.closePath()}s.stroke()}}}})}},{}],37:[function(t,e,i){"use strict";e.exports=function(t){var e=(t.helpers,t.defaults.global);e.elements.rectangle={backgroundColor:e.defaultColor,borderWidth:0,borderColor:e.defaultColor,borderSkipped:"bottom"},t.elements.Rectangle=t.Element.extend({draw:function(){function t(t){return h[(c+t)%4]}var e=this._chart.ctx,i=this._view,a=i.width/2,o=i.x-a,s=i.x+a,n=i.base-(i.base-i.y),r=i.borderWidth/2;i.borderWidth&&(o+=r,s-=r,n+=r),e.beginPath(),e.fillStyle=i.backgroundColor,e.strokeStyle=i.borderColor,e.lineWidth=i.borderWidth;var h=[[o,i.base],[o,n],[s,n],[s,i.base]],l=["bottom","left","top","right"],c=l.indexOf(i.borderSkipped,0);-1===c&&(c=0),e.moveTo.apply(e,t(0));for(var d=1;4>d;d++)e.lineTo.apply(e,t(d));e.fill(),i.borderWidth&&e.stroke()},height:function(){var t=this._view;return t.base-t.y},inRange:function(t,e){var i=this._view;return i?i.y<i.base?t>=i.x-i.width/2&&t<=i.x+i.width/2&&e>=i.y&&e<=i.base:t>=i.x-i.width/2&&t<=i.x+i.width/2&&e>=i.base&&e<=i.y:!1},inLabelRange:function(t){var e=this._view;return e?t>=e.x-e.width/2&&t<=e.x+e.width/2:!1},tooltipPosition:function(){var t=this._view;return{x:t.x,y:t.y}}})}},{}],38:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers,i={position:"bottom"},a=t.Scale.extend({determineDataLimits:function(){this.minIndex=0,this.maxIndex=this.chart.data.labels.length-1;var t;void 0!==this.options.ticks.min&&(t=e.indexOf(this.chart.data.labels,this.options.ticks.min),this.minIndex=-1!==t?t:this.minIndex),void 0!==this.options.ticks.max&&(t=e.indexOf(this.chart.data.labels,this.options.ticks.max),this.maxIndex=-1!==t?t:this.maxIndex),this.min=this.chart.data.labels[this.minIndex],this.max=this.chart.data.labels[this.maxIndex]},buildTicks:function(t){this.ticks=0===this.minIndex&&this.maxIndex===this.chart.data.labels.length-1?this.chart.data.labels:this.chart.data.labels.slice(this.minIndex,this.maxIndex+1)},getLabelForIndex:function(t,e){return this.ticks[t]},getPixelForValue:function(t,e,i,a){var o=Math.max(this.maxIndex+1-this.minIndex-(this.options.gridLines.offsetGridLines?0:1),1);if(this.isHorizontal()){var s=this.width-(this.paddingLeft+this.paddingRight),n=s/o,r=n*(e-this.minIndex)+this.paddingLeft;return this.options.gridLines.offsetGridLines&&a&&(r+=n/2),this.left+Math.round(r)}var h=this.height-(this.paddingTop+this.paddingBottom),l=h/o,c=l*(e-this.minIndex)+this.paddingTop;return this.options.gridLines.offsetGridLines&&a&&(c+=l/2),this.top+Math.round(c)},getPixelForTick:function(t,e){return this.getPixelForValue(this.ticks[t],t+this.minIndex,null,e)},getValueForPixel:function(t){var e,i=Math.max(this.ticks.length-(this.options.gridLines.offsetGridLines?0:1),1),a=this.isHorizontal(),o=a?this.width-(this.paddingLeft+this.paddingRight):this.height-(this.paddingTop+this.paddingBottom),s=o/i;return this.options.gridLines.offsetGridLines&&(t-=s/2),t-=a?this.paddingLeft:this.paddingTop,e=0>=t?0:Math.round(t/s)}});t.scaleService.registerScaleType("category",a,i)}},{}],39:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers,i={position:"left",ticks:{callback:function(t,i,a){var o=a.length>3?a[2]-a[1]:a[1]-a[0];Math.abs(o)>1&&t!==Math.floor(t)&&(o=t-Math.floor(t));var s=e.log10(Math.abs(o)),n="";if(0!==t){var r=-1*Math.floor(s);r=Math.max(Math.min(r,20),0),n=t.toFixed(r)}else n="0";return n}}},a=t.Scale.extend({determineDataLimits:function(){if(this.min=null,this.max=null,this.options.stacked){var t={},i=!1,a=!1;e.each(this.chart.data.datasets,function(o,s){var n=this.chart.getDatasetMeta(s);void 0===t[n.type]&&(t[n.type]={positiveValues:[],negativeValues:[]});var r=t[n.type].positiveValues,h=t[n.type].negativeValues;this.chart.isDatasetVisible(s)&&(this.isHorizontal()?n.xAxisID===this.id:n.yAxisID===this.id)&&e.each(o.data,function(t,e){var o=+this.getRightValue(t);isNaN(o)||n.data[e].hidden||(r[e]=r[e]||0,h[e]=h[e]||0,this.options.relativePoints?r[e]=100:0>o?(a=!0,h[e]+=o):(i=!0,r[e]+=o))},this)},this),e.each(t,function(t){var i=t.positiveValues.concat(t.negativeValues),a=e.min(i),o=e.max(i);this.min=null===this.min?a:Math.min(this.min,a),this.max=null===this.max?o:Math.max(this.max,o)},this)}else e.each(this.chart.data.datasets,function(t,i){var a=this.chart.getDatasetMeta(i);this.chart.isDatasetVisible(i)&&(this.isHorizontal()?a.xAxisID===this.id:a.yAxisID===this.id)&&e.each(t.data,function(t,e){var i=+this.getRightValue(t);isNaN(i)||a.data[e].hidden||(null===this.min?this.min=i:i<this.min&&(this.min=i),null===this.max?this.max=i:i>this.max&&(this.max=i))},this)},this);if(this.options.ticks.beginAtZero){var o=e.sign(this.min),s=e.sign(this.max);0>o&&0>s?this.max=0:o>0&&s>0&&(this.min=0)}void 0!==this.options.ticks.min?this.min=this.options.ticks.min:void 0!==this.options.ticks.suggestedMin&&(this.min=Math.min(this.min,this.options.ticks.suggestedMin)),void 0!==this.options.ticks.max?this.max=this.options.ticks.max:void 0!==this.options.ticks.suggestedMax&&(this.max=Math.max(this.max,this.options.ticks.suggestedMax)),this.min===this.max&&(this.max++,this.options.ticks.beginAtZero||this.min--)},buildTicks:function(){this.ticks=[];var i;if(this.isHorizontal())i=Math.min(this.options.ticks.maxTicksLimit?this.options.ticks.maxTicksLimit:11,Math.ceil(this.width/50));else{var a=e.getValueOrDefault(this.options.ticks.fontSize,t.defaults.global.defaultFontSize);i=Math.min(this.options.ticks.maxTicksLimit?this.options.ticks.maxTicksLimit:11,Math.ceil(this.height/(2*a)))}i=Math.max(2,i);var o,s=this.options.ticks.fixedStepSize&&this.options.ticks.fixedStepSize>0||this.options.ticks.stepSize&&this.options.ticks.stepSize>0;if(s)o=e.getValueOrDefault(this.options.ticks.fixedStepSize,this.options.ticks.stepSize);else{var n=e.niceNum(this.max-this.min,!1);o=e.niceNum(n/(i-1),!0)}var r=Math.floor(this.min/o)*o,h=Math.ceil(this.max/o)*o,l=(h-r)/o;l=e.almostEquals(l,Math.round(l),o/1e3)?Math.round(l):Math.ceil(l),this.ticks.push(void 0!==this.options.ticks.min?this.options.ticks.min:r);for(var c=1;l>c;++c)this.ticks.push(r+c*o);this.ticks.push(void 0!==this.options.ticks.max?this.options.ticks.max:h),("left"===this.options.position||"right"===this.options.position)&&this.ticks.reverse(),this.max=e.max(this.ticks),this.min=e.min(this.ticks),this.options.ticks.reverse?(this.ticks.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max)},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},convertTicksToLabels:function(){this.ticksAsNumbers=this.ticks.slice(),this.zeroLineIndex=this.ticks.indexOf(0),t.Scale.prototype.convertTicksToLabels.call(this)},getPixelForValue:function(t,e,i,a){var o,s=+this.getRightValue(t),n=this.end-this.start;if(this.isHorizontal()){var r=this.width-(this.paddingLeft+this.paddingRight);return o=this.left+r/n*(s-this.start),Math.round(o+this.paddingLeft)}var h=this.height-(this.paddingTop+this.paddingBottom);return o=this.bottom-this.paddingBottom-h/n*(s-this.start),Math.round(o)},getValueForPixel:function(t){var e;if(this.isHorizontal()){var i=this.width-(this.paddingLeft+this.paddingRight);e=(t-this.left-this.paddingLeft)/i}else{var a=this.height-(this.paddingTop+this.paddingBottom);e=(this.bottom-this.paddingBottom-t)/a}return this.start+(this.end-this.start)*e},getPixelForTick:function(t,e){return this.getPixelForValue(this.ticksAsNumbers[t],null,null,e)}});t.scaleService.registerScaleType("linear",a,i)}},{}],40:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers,i={position:"left",ticks:{callback:function(e,i,a){var o=e/Math.pow(10,Math.floor(t.helpers.log10(e)));return 1===o||2===o||5===o||0===i||i===a.length-1?e.toExponential():""}}},a=t.Scale.extend({determineDataLimits:function(){if(this.min=null,this.max=null,this.options.stacked){var t={};e.each(this.chart.data.datasets,function(i,a){var o=this.chart.getDatasetMeta(a);this.chart.isDatasetVisible(a)&&(this.isHorizontal()?o.xAxisID===this.id:o.yAxisID===this.id)&&(void 0===t[o.type]&&(t[o.type]=[]),e.each(i.data,function(e,i){var a=t[o.type],s=+this.getRightValue(e);isNaN(s)||o.data[i].hidden||(a[i]=a[i]||0,this.options.relativePoints?a[i]=100:a[i]+=s)},this))},this),e.each(t,function(t){var i=e.min(t),a=e.max(t);this.min=null===this.min?i:Math.min(this.min,i),this.max=null===this.max?a:Math.max(this.max,a)},this)}else e.each(this.chart.data.datasets,function(t,i){var a=this.chart.getDatasetMeta(i);this.chart.isDatasetVisible(i)&&(this.isHorizontal()?a.xAxisID===this.id:a.yAxisID===this.id)&&e.each(t.data,function(t,e){var i=+this.getRightValue(t);isNaN(i)||a.data[e].hidden||(null===this.min?this.min=i:i<this.min&&(this.min=i),null===this.max?this.max=i:i>this.max&&(this.max=i))},this)},this);this.min=void 0!==this.options.ticks.min?this.options.ticks.min:this.min,this.max=void 0!==this.options.ticks.max?this.options.ticks.max:this.max,this.min===this.max&&(0!==this.min&&null!==this.min?(this.min=Math.pow(10,Math.floor(e.log10(this.min))-1),this.max=Math.pow(10,Math.floor(e.log10(this.max))+1)):(this.min=1,this.max=10))},buildTicks:function(){this.ticks=[];for(var t=void 0!==this.options.ticks.min?this.options.ticks.min:Math.pow(10,Math.floor(e.log10(this.min)));t<this.max;){this.ticks.push(t);var i=Math.floor(e.log10(t)),a=Math.floor(t/Math.pow(10,i))+1;10===a&&(a=1,++i),t=a*Math.pow(10,i)}var o=void 0!==this.options.ticks.max?this.options.ticks.max:t;this.ticks.push(o),("left"===this.options.position||"right"===this.options.position)&&this.ticks.reverse(),this.max=e.max(this.ticks),this.min=e.min(this.ticks),this.options.ticks.reverse?(this.ticks.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max)},convertTicksToLabels:function(){this.tickValues=this.ticks.slice(),t.Scale.prototype.convertTicksToLabels.call(this)},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},getPixelForTick:function(t,e){return this.getPixelForValue(this.tickValues[t],null,null,e)},getPixelForValue:function(t,i,a,o){var s,n=+this.getRightValue(t),r=e.log10(this.end)-e.log10(this.start);if(this.isHorizontal())if(0===n)s=this.left+this.paddingLeft;else{var h=this.width-(this.paddingLeft+this.paddingRight);s=this.left+h/r*(e.log10(n)-e.log10(this.start)),s+=this.paddingLeft}else if(0===n)s=this.top+this.paddingTop;else{var l=this.height-(this.paddingTop+this.paddingBottom);s=this.bottom-this.paddingBottom-l/r*(e.log10(n)-e.log10(this.start))}return s},getValueForPixel:function(t){var i,a=e.log10(this.end)-e.log10(this.start);if(this.isHorizontal()){var o=this.width-(this.paddingLeft+this.paddingRight);i=this.start*Math.pow(10,(t-this.left-this.paddingLeft)*a/o)}else{var s=this.height-(this.paddingTop+this.paddingBottom);i=Math.pow(10,(this.bottom-this.paddingBottom-t)*a/s)/this.start}return i}});t.scaleService.registerScaleType("logarithmic",a,i)}},{}],41:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers,i={display:!0,animate:!0,lineArc:!1,position:"chartArea",angleLines:{display:!0,color:"rgba(0, 0, 0, 0.1)",lineWidth:1},ticks:{showLabelBackdrop:!0,backdropColor:"rgba(255,255,255,0.75)",backdropPaddingY:2,backdropPaddingX:2},pointLabels:{fontSize:10,callback:function(t){return t}}},a=t.Scale.extend({getValueCount:function(){return this.chart.data.labels.length},setDimensions:function(){this.width=this.maxWidth,this.height=this.maxHeight,this.xCenter=Math.round(this.width/2),this.yCenter=Math.round(this.height/2);var i=e.min([this.height,this.width]),a=e.getValueOrDefault(this.options.ticks.fontSize,t.defaults.global.defaultFontSize);this.drawingArea=this.options.display?i/2-(a/2+this.options.ticks.backdropPaddingY):i/2},determineDataLimits:function(){if(this.min=null,this.max=null,e.each(this.chart.data.datasets,function(t,i){if(this.chart.isDatasetVisible(i)){var a=this.chart.getDatasetMeta(i);e.each(t.data,function(t,e){var i=+this.getRightValue(t);isNaN(i)||a.data[e].hidden||(null===this.min?this.min=i:i<this.min&&(this.min=i),null===this.max?this.max=i:i>this.max&&(this.max=i))},this)}},this),this.options.ticks.beginAtZero){var t=e.sign(this.min),i=e.sign(this.max);0>t&&0>i?this.max=0:t>0&&i>0&&(this.min=0)}void 0!==this.options.ticks.min?this.min=this.options.ticks.min:void 0!==this.options.ticks.suggestedMin&&(this.min=Math.min(this.min,this.options.ticks.suggestedMin)),void 0!==this.options.ticks.max?this.max=this.options.ticks.max:void 0!==this.options.ticks.suggestedMax&&(this.max=Math.max(this.max,this.options.ticks.suggestedMax)),this.min===this.max&&(this.min--,this.max++)},buildTicks:function(){this.ticks=[];var i=e.getValueOrDefault(this.options.ticks.fontSize,t.defaults.global.defaultFontSize),a=Math.min(this.options.ticks.maxTicksLimit?this.options.ticks.maxTicksLimit:11,Math.ceil(this.drawingArea/(1.5*i)));a=Math.max(2,a);var o=e.niceNum(this.max-this.min,!1),s=e.niceNum(o/(a-1),!0),n=Math.floor(this.min/s)*s,r=Math.ceil(this.max/s)*s,h=Math.ceil((r-n)/s);this.ticks.push(void 0!==this.options.ticks.min?this.options.ticks.min:n);for(var l=1;h>l;++l)this.ticks.push(n+l*s);this.ticks.push(void 0!==this.options.ticks.max?this.options.ticks.max:r),this.max=e.max(this.ticks),this.min=e.min(this.ticks),this.options.ticks.reverse?(this.ticks.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),this.zeroLineIndex=this.ticks.indexOf(0)},convertTicksToLabels:function(){t.Scale.prototype.convertTicksToLabels.call(this),this.pointLabels=this.chart.data.labels.map(this.options.pointLabels.callback,this)},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},fit:function(){var i,a,o,s,n,r,h,l,c,d,u,g,f=e.getValueOrDefault(this.options.pointLabels.fontSize,t.defaults.global.defaultFontSize),p=e.getValueOrDefault(this.options.pointLabels.fontStyle,t.defaults.global.defaultFontStyle),m=e.getValueOrDefault(this.options.pointLabels.fontFamily,t.defaults.global.defaultFontFamily),b=e.fontString(f,p,m),x=e.min([this.height/2-f-5,this.width/2]),v=this.width,y=0;for(this.ctx.font=b,a=0;a<this.getValueCount();a++)i=this.getPointPosition(a,x),o=this.ctx.measureText(this.pointLabels[a]?this.pointLabels[a]:"").width+5,0===a||a===this.getValueCount()/2?(s=o/2,i.x+s>v&&(v=i.x+s,n=a),i.x-s<y&&(y=i.x-s,h=a)):a<this.getValueCount()/2?i.x+o>v&&(v=i.x+o,n=a):a>this.getValueCount()/2&&i.x-o<y&&(y=i.x-o,h=a);c=y,d=Math.ceil(v-this.width),r=this.getIndexAngle(n),l=this.getIndexAngle(h),u=d/Math.sin(r+Math.PI/2),g=c/Math.sin(l+Math.PI/2),u=e.isNumber(u)?u:0,g=e.isNumber(g)?g:0,this.drawingArea=Math.round(x-(g+u)/2),this.setCenterPoint(g,u)},setCenterPoint:function(t,e){var i=this.width-e-this.drawingArea,a=t+this.drawingArea;this.xCenter=Math.round((a+i)/2+this.left),this.yCenter=Math.round(this.height/2+this.top)},getIndexAngle:function(t){var e=2*Math.PI/this.getValueCount();return t*e-Math.PI/2},getDistanceFromCenterForValue:function(t){if(null===t)return 0;var e=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*e:(t-this.min)*e},getPointPosition:function(t,e){var i=this.getIndexAngle(t);return{x:Math.round(Math.cos(i)*e)+this.xCenter,y:Math.round(Math.sin(i)*e)+this.yCenter}},getPointPositionForValue:function(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))},draw:function(){if(this.options.display){var i=this.ctx;if(e.each(this.ticks,function(a,o){if(o>0||this.options.reverse){var s=this.getDistanceFromCenterForValue(this.ticks[o]),n=this.yCenter-s;if(this.options.gridLines.display)if(i.strokeStyle=this.options.gridLines.color,i.lineWidth=this.options.gridLines.lineWidth,this.options.lineArc)i.beginPath(),i.arc(this.xCenter,this.yCenter,s,0,2*Math.PI),i.closePath(),i.stroke();else{i.beginPath();for(var r=0;r<this.getValueCount();r++){var h=this.getPointPosition(r,this.getDistanceFromCenterForValue(this.ticks[o]));0===r?i.moveTo(h.x,h.y):i.lineTo(h.x,h.y)}i.closePath(),i.stroke()}if(this.options.ticks.display){var l=e.getValueOrDefault(this.options.ticks.fontColor,t.defaults.global.defaultFontColor),c=e.getValueOrDefault(this.options.ticks.fontSize,t.defaults.global.defaultFontSize),d=e.getValueOrDefault(this.options.ticks.fontStyle,t.defaults.global.defaultFontStyle),u=e.getValueOrDefault(this.options.ticks.fontFamily,t.defaults.global.defaultFontFamily),g=e.fontString(c,d,u);if(i.font=g,this.options.ticks.showLabelBackdrop){var f=i.measureText(a).width;i.fillStyle=this.options.ticks.backdropColor,i.fillRect(this.xCenter-f/2-this.options.ticks.backdropPaddingX,n-c/2-this.options.ticks.backdropPaddingY,f+2*this.options.ticks.backdropPaddingX,c+2*this.options.ticks.backdropPaddingY)}i.textAlign="center",i.textBaseline="middle",i.fillStyle=l,i.fillText(a,this.xCenter,n)}}},this),!this.options.lineArc){i.lineWidth=this.options.angleLines.lineWidth,i.strokeStyle=this.options.angleLines.color;for(var a=this.getValueCount()-1;a>=0;a--){if(this.options.angleLines.display){var o=this.getPointPosition(a,this.getDistanceFromCenterForValue(this.options.reverse?this.min:this.max));i.beginPath(),i.moveTo(this.xCenter,this.yCenter),i.lineTo(o.x,o.y),i.stroke(),i.closePath()}var s=this.getPointPosition(a,this.getDistanceFromCenterForValue(this.options.reverse?this.min:this.max)+5),n=e.getValueOrDefault(this.options.pointLabels.fontColor,t.defaults.global.defaultFontColor),r=e.getValueOrDefault(this.options.pointLabels.fontSize,t.defaults.global.defaultFontSize),h=e.getValueOrDefault(this.options.pointLabels.fontStyle,t.defaults.global.defaultFontStyle),l=e.getValueOrDefault(this.options.pointLabels.fontFamily,t.defaults.global.defaultFontFamily),c=e.fontString(r,h,l);i.font=c,i.fillStyle=n;var d=this.pointLabels.length,u=this.pointLabels.length/2,g=u/2,f=g>a||a>d-g,p=a===g||a===d-g;0===a?i.textAlign="center":a===u?i.textAlign="center":u>a?i.textAlign="left":i.textAlign="right",p?i.textBaseline="middle":f?i.textBaseline="bottom":i.textBaseline="top",i.fillText(this.pointLabels[a]?this.pointLabels[a]:"",s.x,s.y)}}}}});t.scaleService.registerScaleType("radialLinear",a,i)}},{}],42:[function(t,e,i){"use strict";var a=t("moment");a="function"==typeof a?a:window.moment,e.exports=function(t){var e=t.helpers,i={units:[{name:"millisecond",steps:[1,2,5,10,20,50,100,250,500]},{name:"second",steps:[1,2,5,10,30]},{name:"minute",steps:[1,2,5,10,30]},{name:"hour",steps:[1,2,3,6,12]},{name:"day",steps:[1,2,5]},{name:"week",maxStep:4},{name:"month",maxStep:3},{name:"quarter",maxStep:4},{name:"year",maxStep:!1}]},o={position:"bottom",time:{parser:!1,format:!1,unit:!1,round:!1,displayFormat:!1,isoWeekday:!1,displayFormats:{millisecond:"h:mm:ss.SSS a",second:"h:mm:ss a",minute:"h:mm:ss a",hour:"MMM D, hA",day:"ll",week:"ll",month:"MMM YYYY",quarter:"[Q]Q - YYYY",year:"YYYY"}},ticks:{autoSkip:!1}},s=t.Scale.extend({initialize:function(){if(!a)throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");t.Scale.prototype.initialize.call(this)},getLabelMoment:function(t,e){return this.labelMoments[t][e]},getMomentStartOf:function(t){return"week"===this.options.time.unit&&this.options.time.isoWeekday!==!1?t.clone().startOf("isoWeek").isoWeekday(this.options.time.isoWeekday):t.clone().startOf(this.tickUnit)},determineDataLimits:function(){this.labelMoments=[];var t=[];this.chart.data.labels&&this.chart.data.labels.length>0?(e.each(this.chart.data.labels,function(e,i){var a=this.parseTime(e);a.isValid()&&(this.options.time.round&&a.startOf(this.options.time.round),t.push(a))},this),this.firstTick=a.min.call(this,t),this.lastTick=a.max.call(this,t)):(this.firstTick=null,this.lastTick=null),e.each(this.chart.data.datasets,function(i,o){var s=[],n=this.chart.isDatasetVisible(o);"object"==typeof i.data[0]?e.each(i.data,function(t,e){var i=this.parseTime(this.getRightValue(t));i.isValid()&&(this.options.time.round&&i.startOf(this.options.time.round),s.push(i),n&&(this.firstTick=null!==this.firstTick?a.min(this.firstTick,i):i,this.lastTick=null!==this.lastTick?a.max(this.lastTick,i):i))},this):s=t,this.labelMoments.push(s)},this),this.options.time.min&&(this.firstTick=this.parseTime(this.options.time.min)),this.options.time.max&&(this.lastTick=this.parseTime(this.options.time.max)),this.firstTick=(this.firstTick||a()).clone(),this.lastTick=(this.lastTick||a()).clone()},buildTicks:function(a){this.ctx.save();var o=e.getValueOrDefault(this.options.ticks.fontSize,t.defaults.global.defaultFontSize),s=e.getValueOrDefault(this.options.ticks.fontStyle,t.defaults.global.defaultFontStyle),n=e.getValueOrDefault(this.options.ticks.fontFamily,t.defaults.global.defaultFontFamily),r=e.fontString(o,s,n);if(this.ctx.font=r,this.ticks=[],this.unitScale=1,this.scaleSizeInUnits=0,this.options.time.unit)this.tickUnit=this.options.time.unit||"day",this.displayFormat=this.options.time.displayFormats[this.tickUnit],this.scaleSizeInUnits=this.lastTick.diff(this.firstTick,this.tickUnit,!0),this.unitScale=e.getValueOrDefault(this.options.time.unitStepSize,1);else{var h=this.isHorizontal()?this.width-(this.paddingLeft+this.paddingRight):this.height-(this.paddingTop+this.paddingBottom),l=this.tickFormatFunction(this.firstTick,0,[]),c=this.ctx.measureText(l).width,d=Math.cos(e.toRadians(this.options.ticks.maxRotation)),u=Math.sin(e.toRadians(this.options.ticks.maxRotation));
c=c*d+o*u;var g=h/c;this.tickUnit="millisecond",this.scaleSizeInUnits=this.lastTick.diff(this.firstTick,this.tickUnit,!0),this.displayFormat=this.options.time.displayFormats[this.tickUnit];for(var f=0,p=i.units[f];f<i.units.length;){if(this.unitScale=1,e.isArray(p.steps)&&Math.ceil(this.scaleSizeInUnits/g)<e.max(p.steps)){for(var m=0;m<p.steps.length;++m)if(p.steps[m]>=Math.ceil(this.scaleSizeInUnits/g)){this.unitScale=e.getValueOrDefault(this.options.time.unitStepSize,p.steps[m]);break}break}if(p.maxStep===!1||Math.ceil(this.scaleSizeInUnits/g)<p.maxStep){this.unitScale=e.getValueOrDefault(this.options.time.unitStepSize,Math.ceil(this.scaleSizeInUnits/g));break}++f,p=i.units[f],this.tickUnit=p.name;var b=this.firstTick.diff(this.getMomentStartOf(this.firstTick),this.tickUnit,!0),x=this.getMomentStartOf(this.lastTick.clone().add(1,this.tickUnit)).diff(this.lastTick,this.tickUnit,!0);this.scaleSizeInUnits=this.lastTick.diff(this.firstTick,this.tickUnit,!0)+b+x,this.displayFormat=this.options.time.displayFormats[p.name]}}var v;if(this.options.time.min?v=this.getMomentStartOf(this.firstTick):(this.firstTick=this.getMomentStartOf(this.firstTick),v=this.firstTick),!this.options.time.max){var y=this.getMomentStartOf(this.lastTick);0!==y.diff(this.lastTick,this.tickUnit,!0)&&(this.lastTick=this.getMomentStartOf(this.lastTick.add(1,this.tickUnit)))}this.smallestLabelSeparation=this.width,e.each(this.chart.data.datasets,function(t,e){for(var i=1;i<this.labelMoments[e].length;i++)this.smallestLabelSeparation=Math.min(this.smallestLabelSeparation,this.labelMoments[e][i].diff(this.labelMoments[e][i-1],this.tickUnit,!0))},this),this.options.time.displayFormat&&(this.displayFormat=this.options.time.displayFormat),this.ticks.push(this.firstTick.clone());for(var k=1;k<=this.scaleSizeInUnits;++k){var S=v.clone().add(k,this.tickUnit);if(this.options.time.max&&S.diff(this.lastTick,this.tickUnit,!0)>=0)break;k%this.unitScale===0&&this.ticks.push(S)}var C=this.ticks[this.ticks.length-1].diff(this.lastTick,this.tickUnit);(0!==C||0===this.scaleSizeInUnits)&&(this.options.time.max?(this.ticks.push(this.lastTick.clone()),this.scaleSizeInUnits=this.lastTick.diff(this.ticks[0],this.tickUnit,!0)):(this.ticks.push(this.lastTick.clone()),this.scaleSizeInUnits=this.lastTick.diff(this.firstTick,this.tickUnit,!0))),this.ctx.restore()},getLabelForIndex:function(t,e){var i=this.chart.data.labels&&t<this.chart.data.labels.length?this.chart.data.labels[t]:"";return"object"==typeof this.chart.data.datasets[e].data[0]&&(i=this.getRightValue(this.chart.data.datasets[e].data[t])),this.options.time.tooltipFormat&&(i=this.parseTime(i).format(this.options.time.tooltipFormat)),i},tickFormatFunction:function(t,i,a){var o=t.format(this.displayFormat),s=this.options.ticks,n=e.getValueOrDefault(s.callback,s.userCallback);return n?n(o,i,a):o},convertTicksToLabels:function(){this.tickMoments=this.ticks,this.ticks=this.ticks.map(this.tickFormatFunction,this)},getPixelForValue:function(t,e,i,a){var o=t&&t.isValid&&t.isValid()?t:this.getLabelMoment(i,e);if(o){var s=o.diff(this.firstTick,this.tickUnit,!0),n=s/this.scaleSizeInUnits;if(this.isHorizontal()){var r=this.width-(this.paddingLeft+this.paddingRight),h=(r/Math.max(this.ticks.length-1,1),r*n+this.paddingLeft);return this.left+Math.round(h)}var l=this.height-(this.paddingTop+this.paddingBottom),c=(l/Math.max(this.ticks.length-1,1),l*n+this.paddingTop);return this.top+Math.round(c)}},getPixelForTick:function(t,e){return this.getPixelForValue(this.tickMoments[t],null,null,e)},getValueForPixel:function(t){var e=this.isHorizontal()?this.width-(this.paddingLeft+this.paddingRight):this.height-(this.paddingTop+this.paddingBottom),i=(t-(this.isHorizontal()?this.left+this.paddingLeft:this.top+this.paddingTop))/e;return i*=this.scaleSizeInUnits,this.firstTick.clone().add(a.duration(i,this.tickUnit).asSeconds(),"seconds")},parseTime:function(t){return"string"==typeof this.options.time.parser?a(t,this.options.time.parser):"function"==typeof this.options.time.parser?this.options.time.parser(t):"function"==typeof t.getMonth||"number"==typeof t?a(t):t.isValid&&t.isValid()?t:"string"!=typeof this.options.time.format&&this.options.time.format.call?(console.warn("options.time.format is deprecated and replaced by options.time.parser. See http://nnnick.github.io/Chart.js/docs-v2/#scales-time-scale"),this.options.time.format(t)):a(t,this.options.time.format)}});t.scaleService.registerScaleType("time",s,o)}},{moment:1}]},{},[7]);
/*
 *	jQuery dotdotdot 1.7.4
 *
 *	Copyright (c) Fred Heusschen
 *	www.frebsite.nl
 *
 *	Plugin website:
 *	dotdotdot.frebsite.nl
 *
 *	Licensed under the MIT license.
 *	http://en.wikipedia.org/wiki/MIT_License
 */
!function(t,e){function n(t,e,n){var r=t.children(),o=!1;t.empty();for(var i=0,d=r.length;d>i;i++){var l=r.eq(i);if(t.append(l),n&&t.append(n),a(t,e)){l.remove(),o=!0;break}n&&n.detach()}return o}function r(e,n,i,d,l){var s=!1,c="a, table, thead, tbody, tfoot, tr, col, colgroup, object, embed, param, ol, ul, dl, blockquote, select, optgroup, option, textarea, script, style",u="script, .dotdotdot-keep";return e.contents().detach().each(function(){var h=this,f=t(h);if("undefined"==typeof h)return!0;if(f.is(u))e.append(f);else{if(s)return!0;e.append(f),!l||f.is(d.after)||f.find(d.after).length||e[e.is(c)?"after":"append"](l),a(i,d)&&(s=3==h.nodeType?o(f,n,i,d,l):r(f,n,i,d,l),s||(f.detach(),s=!0)),s||l&&l.detach()}}),n.addClass("is-truncated"),s}function o(e,n,r,o,d){var c=e[0];if(!c)return!1;var h=s(c),f=-1!==h.indexOf(" ")?" ":"　",p="letter"==o.wrap?"":f,g=h.split(p),v=-1,w=-1,b=0,y=g.length-1;for(o.fallbackToLetter&&0==b&&0==y&&(p="",g=h.split(p),y=g.length-1);y>=b&&(0!=b||0!=y);){var m=Math.floor((b+y)/2);if(m==w)break;w=m,l(c,g.slice(0,w+1).join(p)+o.ellipsis),r.children().each(function(){t(this).toggle().toggle()}),a(r,o)?(y=w,o.fallbackToLetter&&0==b&&0==y&&(p="",g=g[0].split(p),v=-1,w=-1,b=0,y=g.length-1)):(v=w,b=w)}if(-1==v||1==g.length&&0==g[0].length){var x=e.parent();e.detach();var T=d&&d.closest(x).length?d.length:0;x.contents().length>T?c=u(x.contents().eq(-1-T),n):(c=u(x,n,!0),T||x.detach()),c&&(h=i(s(c),o),l(c,h),T&&d&&t(c).parent().append(d))}else h=i(g.slice(0,v+1).join(p),o),l(c,h);return!0}function a(t,e){return t.innerHeight()>e.maxHeight}function i(e,n){for(;t.inArray(e.slice(-1),n.lastCharacter.remove)>-1;)e=e.slice(0,-1);return t.inArray(e.slice(-1),n.lastCharacter.noEllipsis)<0&&(e+=n.ellipsis),e}function d(t){return{width:t.innerWidth(),height:t.innerHeight()}}function l(t,e){t.innerText?t.innerText=e:t.nodeValue?t.nodeValue=e:t.textContent&&(t.textContent=e)}function s(t){return t.innerText?t.innerText:t.nodeValue?t.nodeValue:t.textContent?t.textContent:""}function c(t){do t=t.previousSibling;while(t&&1!==t.nodeType&&3!==t.nodeType);return t}function u(e,n,r){var o,a=e&&e[0];if(a){if(!r){if(3===a.nodeType)return a;if(t.trim(e.text()))return u(e.contents().last(),n)}for(o=c(a);!o;){if(e=e.parent(),e.is(n)||!e.length)return!1;o=c(e[0])}if(o)return u(t(o),n)}return!1}function h(e,n){return e?"string"==typeof e?(e=t(e,n),e.length?e:!1):e.jquery?e:!1:!1}function f(t){for(var e=t.innerHeight(),n=["paddingTop","paddingBottom"],r=0,o=n.length;o>r;r++){var a=parseInt(t.css(n[r]),10);isNaN(a)&&(a=0),e-=a}return e}if(!t.fn.dotdotdot){t.fn.dotdotdot=function(e){if(0==this.length)return t.fn.dotdotdot.debug('No element found for "'+this.selector+'".'),this;if(this.length>1)return this.each(function(){t(this).dotdotdot(e)});var o=this;o.data("dotdotdot")&&o.trigger("destroy.dot"),o.data("dotdotdot-style",o.attr("style")||""),o.css("word-wrap","break-word"),"nowrap"===o.css("white-space")&&o.css("white-space","normal"),o.bind_events=function(){return o.bind("update.dot",function(e,d){switch(o.removeClass("is-truncated"),e.preventDefault(),e.stopPropagation(),typeof l.height){case"number":l.maxHeight=l.height;break;case"function":l.maxHeight=l.height.call(o[0]);break;default:l.maxHeight=f(o)}l.maxHeight+=l.tolerance,"undefined"!=typeof d&&(("string"==typeof d||"nodeType"in d&&1===d.nodeType)&&(d=t("<div />").append(d).contents()),d instanceof t&&(i=d)),g=o.wrapInner('<div class="dotdotdot" />').children(),g.contents().detach().end().append(i.clone(!0)).find("br").replaceWith("  <br />  ").end().css({height:"auto",width:"auto",border:"none",padding:0,margin:0});var c=!1,u=!1;return s.afterElement&&(c=s.afterElement.clone(!0),c.show(),s.afterElement.detach()),a(g,l)&&(u="children"==l.wrap?n(g,l,c):r(g,o,g,l,c)),g.replaceWith(g.contents()),g=null,t.isFunction(l.callback)&&l.callback.call(o[0],u,i),s.isTruncated=u,u}).bind("isTruncated.dot",function(t,e){return t.preventDefault(),t.stopPropagation(),"function"==typeof e&&e.call(o[0],s.isTruncated),s.isTruncated}).bind("originalContent.dot",function(t,e){return t.preventDefault(),t.stopPropagation(),"function"==typeof e&&e.call(o[0],i),i}).bind("destroy.dot",function(t){t.preventDefault(),t.stopPropagation(),o.unwatch().unbind_events().contents().detach().end().append(i).attr("style",o.data("dotdotdot-style")||"").data("dotdotdot",!1)}),o},o.unbind_events=function(){return o.unbind(".dot"),o},o.watch=function(){if(o.unwatch(),"window"==l.watch){var e=t(window),n=e.width(),r=e.height();e.bind("resize.dot"+s.dotId,function(){n==e.width()&&r==e.height()&&l.windowResizeFix||(n=e.width(),r=e.height(),u&&clearInterval(u),u=setTimeout(function(){o.trigger("update.dot")},100))})}else c=d(o),u=setInterval(function(){if(o.is(":visible")){var t=d(o);(c.width!=t.width||c.height!=t.height)&&(o.trigger("update.dot"),c=t)}},500);return o},o.unwatch=function(){return t(window).unbind("resize.dot"+s.dotId),u&&clearInterval(u),o};var i=o.contents(),l=t.extend(!0,{},t.fn.dotdotdot.defaults,e),s={},c={},u=null,g=null;return l.lastCharacter.remove instanceof Array||(l.lastCharacter.remove=t.fn.dotdotdot.defaultArrays.lastCharacter.remove),l.lastCharacter.noEllipsis instanceof Array||(l.lastCharacter.noEllipsis=t.fn.dotdotdot.defaultArrays.lastCharacter.noEllipsis),s.afterElement=h(l.after,o),s.isTruncated=!1,s.dotId=p++,o.data("dotdotdot",!0).bind_events().trigger("update.dot"),l.watch&&o.watch(),o},t.fn.dotdotdot.defaults={ellipsis:"... ",wrap:"word",fallbackToLetter:!0,lastCharacter:{},tolerance:0,callback:null,after:null,height:null,watch:!1,windowResizeFix:!0},t.fn.dotdotdot.defaultArrays={lastCharacter:{remove:[" ","　",",",";",".","!","?"],noEllipsis:[]}},t.fn.dotdotdot.debug=function(){};var p=1,g=t.fn.html;t.fn.html=function(n){return n!=e&&!t.isFunction(n)&&this.data("dotdotdot")?this.trigger("update",[n]):g.apply(this,arguments)};var v=t.fn.text;t.fn.text=function(n){return n!=e&&!t.isFunction(n)&&this.data("dotdotdot")?(n=t("<div />").text(n).html(),this.trigger("update",[n])):v.apply(this,arguments)}}}(jQuery);
/**
* @version: 1.3.21
* @author: Dan Grossman http://www.dangrossman.info/
* @copyright: Copyright (c) 2012-2015 Dan Grossman. All rights reserved.
* @license: Licensed under the MIT license. See http://www.opensource.org/licenses/mit-license.php
* @website: https://www.improvely.com/
*/

(function(root, factory) {

  if (typeof define === 'function' && define.amd) {
    define(['moment', 'jquery', 'exports'], function(momentjs, $, exports) {
      root.daterangepicker = factory(root, exports, momentjs, $);
    });

  } else if (typeof exports !== 'undefined') {
    var momentjs = require('moment');
    var jQuery;
    try {
      jQuery = require('jquery');
    } catch (err) {
      jQuery = window.jQuery;
      if (!jQuery) throw new Error('jQuery dependency not found');
    }

    factory(root, exports, momentjs, jQuery);

  // Finally, as a browser global.
  } else {
    root.daterangepicker = factory(root, {}, root.moment, (root.jQuery || root.Zepto || root.ender || root.$));
  }

}(this, function(root, daterangepicker, moment, $) {

    var DateRangePicker = function (element, options, cb) {

        // by default, the daterangepicker element is placed at the bottom of HTML body
        this.parentEl = 'body';

        //element that triggered the date range picker
        this.element = $(element);

        //tracks visible state
        this.isShowing = false;
        if(options['timePicker'] && typeof(options['id']) == 'undefined') {
            throw new Exception('ID is mandatory');
        }

        //create the picker HTML object
        var DRPTemplate = '<div class="daterangepicker dropdown-menu" id="' + options['id'] + '">' +
                '<div class="calendar first left"></div>' +
                '<div class="calendar second right"></div>' +
                '<div class="ranges">' +
                  '<div class="range_inputs">' +
                    '<div class="daterangepicker_start_input">' +
                      '<label for="daterangepicker_start"></label>' +
                      '<input class="input-mini" type="text" name="daterangepicker_start" value="" />' +
                    '</div>' +
                    '<div class="daterangepicker_end_input">' +
                      '<label for="daterangepicker_end"></label>' +
                      '<input class="input-mini" type="text" name="daterangepicker_end" value="" />' +
                    '</div>' +
                    '<button class="applyBtn" disabled="disabled"></button>&nbsp;' +
                    '<button class="cancelBtn"></button>' +
                  '</div>' +
                '</div>' +
              '</div>';

        //custom options
        if (typeof options !== 'object' || options === null)
            options = {};

        this.parentEl = (typeof options === 'object' && options.parentEl && $(options.parentEl).length) ? $(options.parentEl) : $(this.parentEl);
        this.container = $(DRPTemplate).appendTo(this.parentEl);

        this.setOptions(options, cb);

        //event listeners
        this.container.find('.calendar')
            .on('click.daterangepicker', '.prev', $.proxy(this.clickPrev, this))
            .on('click.daterangepicker', '.next', $.proxy(this.clickNext, this))
            .on('click.daterangepicker', 'td.available', $.proxy(this.clickDate, this))
            .on('mouseenter.daterangepicker', 'td.available', $.proxy(this.hoverDate, this))
            .on('mouseleave.daterangepicker', 'td.available', $.proxy(this.updateFormInputs, this))
            .on('change.daterangepicker', 'select.yearselect', $.proxy(this.updateMonthYear, this))
            .on('change.daterangepicker', 'select.monthselect', $.proxy(this.updateMonthYear, this))
            .on('change.daterangepicker', 'select.hourselect,select.minuteselect,select.secondselect,select.ampmselect', $.proxy(this.updateTime, this));

        this.container.find('.ranges')
            .on('click.daterangepicker', 'button.applyBtn', $.proxy(this.clickApply, this))
            .on('click.daterangepicker', 'button.cancelBtn', $.proxy(this.clickCancel, this))
            .on('click.daterangepicker', '.daterangepicker_start_input,.daterangepicker_end_input', $.proxy(this.showCalendars, this))
            .on('change.daterangepicker', '.daterangepicker_start_input > input[name=\'daterangepicker_start\'],.daterangepicker_end_input > input[name=\'daterangepicker_end\']', $.proxy(this.inputsChanged, this))
            // .on('keydown.daterangepicker', '.daterangepicker_start_input,.daterangepicker_end_input', $.proxy(this.inputsKeydown, this))
            .on('click.daterangepicker', 'li', $.proxy(this.clickRange, this))
            .on('mouseenter.daterangepicker', 'li', $.proxy(this.enterRange, this))
            .on('mouseleave.daterangepicker', 'li', $.proxy(this.updateFormInputs, this));

        if (this.element.is('input')) {
            this.element.on({
                'click.daterangepicker': $.proxy(this.show, this),
                'focus.daterangepicker': $.proxy(this.show, this),
                // 'keyup.daterangepicker': $.proxy(this.updateFromControl, this),
                // 'keydown.daterangepicker': $.proxy(this.keydown, this)
            });
        } else {
            this.element.on('click.daterangepicker', $.proxy(this.toggle, this));
        }

    };

    DateRangePicker.prototype = {

        constructor: DateRangePicker,

        setOptions: function(options, callback) {

            this.startDate = moment().startOf('day');
            this.endDate = moment().endOf('day');
            this.timeZone = moment().utcOffset();
            this.minDate = false;
            this.maxDate = false;
            this.dateLimit = false;

            this.showDropdowns = false;
            this.showWeekNumbers = false;
            this.timePicker = false;
            this.timePickerSeconds = false;
            this.timePickerIncrement = 30;
            this.timePicker12Hour = true;
            this.singleDatePicker = false;
            this.ranges = {};

            this.opens = 'right';
            if (this.element.hasClass('pull-right'))
                this.opens = 'left';

            this.drops = 'down';
            if (this.element.hasClass('dropup'))
                this.drops = 'up';

            this.buttonClasses = ['btn', 'btn-small btn-sm'];
            this.applyClass = 'btn-success';
            this.cancelClass = 'btn-default';

            this.format = 'MM/DD/YYYY';
            this.separator = ' - ';

            this.locale = {
                applyLabel: 'Apply',
                cancelLabel: 'Cancel',
                fromLabel: 'From',
                toLabel: 'To',
                weekLabel: 'W',
                customRangeLabel: 'Custom Range',
                daysOfWeek: moment.weekdaysMin(),
                monthNames: moment.monthsShort(),
                firstDay: moment.localeData()._week.dow
            };

            this.cb = function () { };

            if (typeof options.format === 'string')
                this.format = options.format;

            if (typeof options.separator === 'string')
                this.separator = options.separator;

            if (typeof options.startDate === 'string')
                this.startDate = moment(options.startDate, this.format);

            if (typeof options.endDate === 'string')
                this.endDate = moment(options.endDate, this.format);

            if (typeof options.minDate === 'string')
                this.minDate = moment(options.minDate, this.format);

            if (typeof options.maxDate === 'string')
                this.maxDate = moment(options.maxDate, this.format);

            if (typeof options.startDate === 'object')
                this.startDate = moment(options.startDate);

            if (typeof options.endDate === 'object')
                this.endDate = moment(options.endDate);

            if (typeof options.minDate === 'object')
                this.minDate = moment(options.minDate);

            if (typeof options.maxDate === 'object')
                this.maxDate = moment(options.maxDate);

            if (typeof options.applyClass === 'string')
                this.applyClass = options.applyClass;

            if (typeof options.cancelClass === 'string')
                this.cancelClass = options.cancelClass;

            if (typeof options.dateLimit === 'object')
                this.dateLimit = options.dateLimit;

            if (typeof options.locale === 'object') {

                if (typeof options.locale.daysOfWeek === 'object') {
                    // Create a copy of daysOfWeek to avoid modification of original
                    // options object for reusability in multiple daterangepicker instances
                    this.locale.daysOfWeek = options.locale.daysOfWeek.slice();
                }

                if (typeof options.locale.monthNames === 'object') {
                  this.locale.monthNames = options.locale.monthNames.slice();
                }

                if (typeof options.locale.firstDay === 'number') {
                  this.locale.firstDay = options.locale.firstDay;
                }

                if (typeof options.locale.applyLabel === 'string') {
                  this.locale.applyLabel = options.locale.applyLabel;
                }

                if (typeof options.locale.cancelLabel === 'string') {
                  this.locale.cancelLabel = options.locale.cancelLabel;
                }

                if (typeof options.locale.fromLabel === 'string') {
                  this.locale.fromLabel = options.locale.fromLabel;
                }

                if (typeof options.locale.toLabel === 'string') {
                  this.locale.toLabel = options.locale.toLabel;
                }

                if (typeof options.locale.weekLabel === 'string') {
                  this.locale.weekLabel = options.locale.weekLabel;
                }

                if (typeof options.locale.customRangeLabel === 'string') {
                  this.locale.customRangeLabel = options.locale.customRangeLabel;
                }
            }

            if (typeof options.opens === 'string')
                this.opens = options.opens;

            if (typeof options.drops === 'string')
                this.drops = options.drops;

            if (typeof options.showWeekNumbers === 'boolean') {
                this.showWeekNumbers = options.showWeekNumbers;
            }

            if (typeof options.buttonClasses === 'string') {
                this.buttonClasses = [options.buttonClasses];
            }

            if (typeof options.buttonClasses === 'object') {
                this.buttonClasses = options.buttonClasses;
            }

            if (typeof options.showDropdowns === 'boolean') {
                this.showDropdowns = options.showDropdowns;
            }

            if (typeof options.singleDatePicker === 'boolean') {
                this.singleDatePicker = options.singleDatePicker;
                if (this.singleDatePicker) {
                    this.endDate = this.startDate.clone();
                }
            }

            if (typeof options.timePicker === 'boolean') {
                this.timePicker = options.timePicker;
            }

            if (typeof options.timePickerSeconds === 'boolean') {
                this.timePickerSeconds = options.timePickerSeconds;
            }

            if (typeof options.timePickerIncrement === 'number') {
                this.timePickerIncrement = options.timePickerIncrement;
            }

            if (typeof options.timePicker12Hour === 'boolean') {
                this.timePicker12Hour = options.timePicker12Hour;
            }

            // update day names order to firstDay
            if (this.locale.firstDay != 0) {
                var iterator = this.locale.firstDay;
                while (iterator > 0) {
                    this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift());
                    iterator--;
                }
            }

            var start, end, range;

            //if no start/end dates set, check if an input element contains initial values
            if (typeof options.startDate === 'undefined' && typeof options.endDate === 'undefined') {
                if ($(this.element).is('input[type=text]')) {
                    var val = $(this.element).val(),
                        split = val.split(this.separator);

                    start = end = null;

                    if (split.length == 2) {
                        start = moment(split[0], this.format);
                        end = moment(split[1], this.format);
                    } else if (this.singleDatePicker && val !== "") {
                        start = moment(val, this.format);
                        end = moment(val, this.format);
                    }
                    if (start !== null && end !== null) {
                        this.startDate = start;
                        this.endDate = end;
                    }
                }
            }

            // bind the time zone used to build the calendar to either the timeZone passed in through the options or the zone of the startDate (which will be the local time zone by default)
            if (typeof options.timeZone === 'string' || typeof options.timeZone === 'number') {
            	if (typeof options.timeZone === 'string' && typeof moment.tz !== 'undefined') {
            		this.timeZone = moment.tz.zone(options.timeZone).parse(new Date) * -1;	// Offset is positive if the timezone is behind UTC and negative if it is ahead.
            	} else {
            		this.timeZone = options.timeZone;
            	}
              this.startDate.utcOffset(this.timeZone);
              this.endDate.utcOffset(this.timeZone);
            } else {
                this.timeZone = moment(this.startDate).utcOffset();
            }

            if (typeof options.ranges === 'object') {
                for (range in options.ranges) {

                    if (typeof options.ranges[range][0] === 'string')
                        start = moment(options.ranges[range][0], this.format);
                    else
                        start = moment(options.ranges[range][0]);

                    if (typeof options.ranges[range][1] === 'string')
                        end = moment(options.ranges[range][1], this.format);
                    else
                        end = moment(options.ranges[range][1]);

                    // If we have a min/max date set, bound this range
                    // to it, but only if it would otherwise fall
                    // outside of the min/max.
                    if (this.minDate && start.isBefore(this.minDate))
                        start = moment(this.minDate);

                    if (this.maxDate && end.isAfter(this.maxDate))
                        end = moment(this.maxDate);

                    // If the end of the range is before the minimum (if min is set) OR
                    // the start of the range is after the max (also if set) don't display this
                    // range option.
                    if ((this.minDate && end.isBefore(this.minDate)) || (this.maxDate && start.isAfter(this.maxDate))) {
                        continue;
                    }

                    this.ranges[range] = [start, end];
                }

                var list = '<ul>';
                for (range in this.ranges) {
                    list += '<li>' + range + '</li>';
                }
                list += '<li>' + this.locale.customRangeLabel + '</li>';
                list += '</ul>';
                this.container.find('.ranges ul').remove();
                this.container.find('.ranges').prepend(list);
            }

            if (typeof callback === 'function') {
                this.cb = callback;
            }

            if (!this.timePicker) {
                this.startDate = this.startDate.startOf('day');
                this.endDate = this.endDate.endOf('day');
            }

            if (this.singleDatePicker) {
                this.opens = 'right';
                this.container.addClass('single');
                this.container.find('.calendar.right').show();
                this.container.find('.calendar.left').hide();
                // CHANGED FROM ORIGINAL!
                this.container.find('.ranges .daterangepicker_start_input, .ranges .daterangepicker_end_input').hide();

                if (!this.container.find('.calendar.right').hasClass('single'))
                    this.container.find('.calendar.right').addClass('single');
            } else {
                this.container.removeClass('single');
                this.container.find('.calendar.right').removeClass('single');
                this.container.find('.ranges').show();
            }

            this.oldStartDate = this.startDate.clone();
            this.oldEndDate = this.endDate.clone();
            this.oldChosenLabel = this.chosenLabel;

            this.leftCalendar = {
                month: moment([this.startDate.year(), this.startDate.month(), 1, this.startDate.hour(), this.startDate.minute(), this.startDate.second()]),
                calendar: []
            };

            this.rightCalendar = {
                month: moment([this.endDate.year(), this.endDate.month(), 1, this.endDate.hour(), this.endDate.minute(), this.endDate.second()]),
                calendar: []
            };

            if (this.opens == 'right' || this.opens == 'center') {
                //swap calendar positions
                var first = this.container.find('.calendar.first');
                var second = this.container.find('.calendar.second');

                if (second.hasClass('single')) {
                    second.removeClass('single');
                    first.addClass('single');
                }

                first.removeClass('left').addClass('right');
                second.removeClass('right').addClass('left');

                if (this.singleDatePicker) {
                    first.show();
                    second.hide();
                }
            }

            if (typeof options.ranges === 'undefined' && !this.singleDatePicker) {
                this.container.addClass('show-calendar');
            }

            this.container.removeClass('opensleft opensright').addClass('opens' + this.opens);

            this.updateView();
            this.updateCalendars();

            //apply CSS classes and labels to buttons
            var c = this.container;
            $.each(this.buttonClasses, function (idx, val) {
                c.find('button').addClass(val);
            });
            this.container.find('.daterangepicker_start_input label').html(this.locale.fromLabel);
            this.container.find('.daterangepicker_end_input label').html(this.locale.toLabel);
            if (this.applyClass.length)
                this.container.find('.applyBtn').addClass(this.applyClass);
            if (this.cancelClass.length)
                this.container.find('.cancelBtn').addClass(this.cancelClass);
            this.container.find('.applyBtn').html(this.locale.applyLabel);
            this.container.find('.cancelBtn').html(this.locale.cancelLabel);
        },

        setStartDate: function(startDate) {
            if (typeof startDate === 'string')
                this.startDate = moment(startDate, this.format).utcOffset(this.timeZone);

            if (typeof startDate === 'object')
                this.startDate = moment(startDate);

            if (!this.timePicker)
                this.startDate = this.startDate.startOf('day');

            this.oldStartDate = this.startDate.clone();

            this.updateView();
            this.updateCalendars();
            this.updateInputText();
        },

        setEndDate: function(endDate) {
            if (typeof endDate === 'string')
                this.endDate = moment(endDate, this.format).utcOffset(this.timeZone);

            if (typeof endDate === 'object')
                this.endDate = moment(endDate);

            if (!this.timePicker)
                this.endDate = this.endDate.endOf('day');

            this.oldEndDate = this.endDate.clone();

            this.updateView();
            this.updateCalendars();
            this.updateInputText();
        },

        updateView: function () {
            this.leftCalendar.month.month(this.startDate.month()).year(this.startDate.year()).hour(this.startDate.hour()).minute(this.startDate.minute());
            this.rightCalendar.month.month(this.endDate.month()).year(this.endDate.year()).hour(this.endDate.hour()).minute(this.endDate.minute());
            this.updateFormInputs();
        },

        updateFormInputs: function () {
            this.container.find('input[name=daterangepicker_start]').val(this.startDate.format(this.format));
            this.container.find('input[name=daterangepicker_end]').val(this.endDate.format(this.format));

            if (this.startDate.isSame(this.endDate) || this.startDate.isBefore(this.endDate)) {
                this.container.find('button.applyBtn').removeAttr('disabled');
            } else {
                this.container.find('button.applyBtn').attr('disabled', 'disabled');
            }
        },

        updateFromControl: function () {
            if (!this.element.is('input')) return;
            if (!this.element.val().length) return;

            var dateString = this.element.val().split(this.separator),
                start = null,
                end = null;

            if(dateString.length === 2) {
                start = moment(dateString[0], this.format).utcOffset(this.timeZone);
                end = moment(dateString[1], this.format).utcOffset(this.timeZone);
            }

            if (this.singleDatePicker || start === null || end === null) {
                start = moment(this.element.val(), this.format).utcOffset(this.timeZone);
                end = start;
            }

            if (end.isBefore(start)) return;

            this.oldStartDate = this.startDate.clone();
            this.oldEndDate = this.endDate.clone();

            this.startDate = start;
            this.endDate = end;

            if (!this.startDate.isSame(this.oldStartDate) || !this.endDate.isSame(this.oldEndDate))
                this.notify();

            this.updateCalendars();
        },

        keydown: function (e) {
            //hide on tab or enter
        	if ((e.keyCode === 9) || (e.keyCode === 13)) {
        		this.hide();
        	}
        },

        notify: function () {
            this.updateView();
            this.cb(this.startDate, this.endDate, this.chosenLabel);
        },

        move: function () {
            var parentOffset = { top: 0, left: 0 },
            	containerTop;
            var parentRightEdge = $(window).width();
            if (!this.parentEl.is('body')) {
                parentOffset = {
                    top: this.parentEl.offset().top - this.parentEl.scrollTop(),
                    left: this.parentEl.offset().left - this.parentEl.scrollLeft()
                };
                parentRightEdge = this.parentEl[0].clientWidth + this.parentEl.offset().left;
            }

            if (this.drops == 'up')
            	containerTop = this.element.offset().top - this.container.outerHeight() - parentOffset.top;
            else
            	containerTop = this.element.offset().top + this.element.outerHeight() - parentOffset.top;
            this.container[this.drops == 'up' ? 'addClass' : 'removeClass']('dropup');

            if (this.opens == 'left') {
                this.container.css({
                    top: containerTop,
                    right: parentRightEdge - this.element.offset().left - this.element.outerWidth(),
                    left: 'auto'
                });
                if (this.container.offset().left < 0) {
                    this.container.css({
                        right: 'auto',
                        left: 9
                    });
                }
            } else if (this.opens == 'center') {
                this.container.css({
                    top: containerTop,
                    left: this.element.offset().left - parentOffset.left + this.element.outerWidth() / 2
                            - this.container.outerWidth() / 2,
                    right: 'auto'
                });
                if (this.container.offset().left < 0) {
                    this.container.css({
                        right: 'auto',
                        left: 9
                    });
                }
            } else {
                this.container.css({
                    top: containerTop,
                    left: this.element.offset().left - parentOffset.left,
                    right: 'auto'
                });
                if (this.container.offset().left + this.container.outerWidth() > $(window).width()) {
                    this.container.css({
                        left: 'auto',
                        right: 0
                    });
                }
            }
        },

        toggle: function (e) {
            if (this.element.hasClass('active')) {
                this.hide();
            } else {
                this.show();
            }
        },

        show: function (e) {
            if (this.isShowing) return;

            this.element.addClass('active');
            this.container.show();
            this.move();

            // Create a click proxy that is private to this instance of datepicker, for unbinding
            this._outsideClickProxy = $.proxy(function (e) { this.outsideClick(e); }, this);
            // Bind global datepicker mousedown for hiding and
            $(document)
              .on('mousedown.daterangepicker', this._outsideClickProxy)
              // also support mobile devices
              .on('touchend.daterangepicker', this._outsideClickProxy)
              // also explicitly play nice with Bootstrap dropdowns, which stopPropagation when clicking them
              .on('click.daterangepicker', '[data-toggle=dropdown]', this._outsideClickProxy)
              // and also close when focus changes to outside the picker (eg. tabbing between controls)
              .on('focusin.daterangepicker', this._outsideClickProxy);

            this.isShowing = true;
            this.element.trigger('show.daterangepicker', this);
        },

        outsideClick: function (e) {
            var target = $(e.target);
            // if the page is clicked anywhere except within the daterangerpicker/button
            // itself then call this.hide()
            if (
                // ie modal dialog fix
                e.type == "focusin" ||
                target.closest(this.element).length ||
                target.closest(this.container).length ||
                target.closest('.calendar-date').length
                ) return;
            this.hide();
        },

        hide: function (e) {
            if (!this.isShowing) return;

            $(document)
              .off('.daterangepicker');

            this.element.removeClass('active');
            this.container.hide();

            // if (!this.startDate.isSame(this.oldStartDate) || !this.endDate.isSame(this.oldEndDate))
                this.notify();

            this.oldStartDate = this.startDate.clone();
            this.oldEndDate = this.endDate.clone();

            this.isShowing = false;
            this.element.trigger('hide.daterangepicker', this);
        },

        enterRange: function (e) {
            // mouse pointer has entered a range label
            var label = e.target.innerHTML;
            if (label == this.locale.customRangeLabel) {
                this.updateView();
            } else {
                var dates = this.ranges[label];
                this.container.find('input[name=daterangepicker_start]').val(dates[0].format(this.format));
                this.container.find('input[name=daterangepicker_end]').val(dates[1].format(this.format));
            }
        },

        showCalendars: function() {
            this.container.addClass('show-calendar');
            this.move();
            this.element.trigger('showCalendar.daterangepicker', this);
        },

        hideCalendars: function() {
            this.container.removeClass('show-calendar');
            this.element.trigger('hideCalendar.daterangepicker', this);
        },

        // when a date is typed into the start to end date textboxes
        inputsChanged: function (e) {
            var el = $(e.target);
            var date = moment(el.val(), this.format);
            if (!date.isValid()) return;

            var startDate, endDate;
            if (el.attr('name') === 'daterangepicker_start') {
                startDate = (false !== this.minDate && date.isBefore(this.minDate)) ? this.minDate : date;
                endDate = this.endDate;
            } else {
                startDate = this.startDate;
                endDate = (false !== this.maxDate && date.isAfter(this.maxDate)) ? this.maxDate : date;
            }
            this.setCustomDates(startDate, endDate);
        },

        inputsKeydown: function(e) {
            if (e.keyCode === 13) {
                this.inputsChanged(e);
                this.notify();
            }
        },

        updateInputText: function() {
            if (this.element.is('input') && !this.singleDatePicker) {
                this.element.val(this.startDate.format(this.format) + this.separator + this.endDate.format(this.format));
                this.element.trigger('change');
            } else if (this.element.is('input')) {
                this.element.val(this.endDate.format(this.format));
                this.element.trigger('change');
            }
        },

        clickRange: function (e) {
            var label = e.target.innerHTML;
            this.chosenLabel = label;
            if (label == this.locale.customRangeLabel) {
                this.showCalendars();
            } else {
                var dates = this.ranges[label];

                this.startDate = dates[0];
                this.endDate = dates[1];

                if (!this.timePicker) {
                    this.startDate.startOf('day');
                    this.endDate.endOf('day');
                }

                this.leftCalendar.month.month(this.startDate.month()).year(this.startDate.year()).hour(this.startDate.hour()).minute(this.startDate.minute());
                this.rightCalendar.month.month(this.endDate.month()).year(this.endDate.year()).hour(this.endDate.hour()).minute(this.endDate.minute());
                this.updateCalendars();

                this.updateInputText();

                this.hideCalendars();
                this.hide();
                this.element.trigger('apply.daterangepicker', this);
            }
        },

        clickPrev: function (e) {
            var cal = $(e.target).parents('.calendar');
            if (cal.hasClass('left')) {
                this.leftCalendar.month.subtract(1, 'month');
            } else {
                this.rightCalendar.month.subtract(1, 'month');
            }
            this.updateCalendars();
        },

        clickNext: function (e) {
            var cal = $(e.target).parents('.calendar');
            if (cal.hasClass('left')) {
                this.leftCalendar.month.add(1, 'month');
            } else {
                this.rightCalendar.month.add(1, 'month');
            }
            this.updateCalendars();
        },

        hoverDate: function (e) {
            var title = $(e.target).attr('data-title');
            var row = title.substr(1, 1);
            var col = title.substr(3, 1);
            var cal = $(e.target).parents('.calendar');

            if (cal.hasClass('left')) {
                this.container.find('input[name=daterangepicker_start]').val(this.leftCalendar.calendar[row][col].format(this.format));
            } else {
                this.container.find('input[name=daterangepicker_end]').val(this.rightCalendar.calendar[row][col].format(this.format));
            }
        },

        setCustomDates: function(startDate, endDate) {
            this.chosenLabel = this.locale.customRangeLabel;
            if (startDate.isAfter(endDate)) {
                var difference = this.endDate.diff(this.startDate);
                endDate = moment(startDate).add(difference, 'ms');
                if (this.maxDate && endDate.isAfter(this.maxDate)) {
                  endDate = this.maxDate.clone();
                }
            }
            this.startDate = startDate;
            this.endDate = endDate;

            this.updateView();
            this.updateCalendars();
        },

        clickDate: function (e) {
            var title = $(e.target).attr('data-title');
            var row = title.substr(1, 1);
            var col = title.substr(3, 1);
            var cal = $(e.target).parents('.calendar');

            var startDate, endDate;
            if (cal.hasClass('left')) {
                startDate = this.leftCalendar.calendar[row][col];
                endDate = this.endDate;
                if (typeof this.dateLimit === 'object') {
                    var maxDate = moment(startDate).add(this.dateLimit).startOf('day');
                    if (endDate.isAfter(maxDate)) {
                        endDate = maxDate;
                    }
                }
            } else {
                startDate = this.startDate;
                endDate = this.rightCalendar.calendar[row][col];
                if (typeof this.dateLimit === 'object') {
                    var minDate = moment(endDate).subtract(this.dateLimit).startOf('day');
                    if (startDate.isBefore(minDate)) {
                        startDate = minDate;
                    }
                }
            }

            if (this.singleDatePicker && cal.hasClass('left')) {
                endDate = startDate.clone();
            } else if (this.singleDatePicker && cal.hasClass('right')) {
                startDate = endDate.clone();
            }

            cal.find('td').removeClass('active');

            $(e.target).addClass('active');

            this.setCustomDates(startDate, endDate);

            if (!this.timePicker)
                endDate.endOf('day');

            if (this.singleDatePicker && !this.timePicker)
                this.clickApply();
        },

        clickApply: function (e) {
            this.updateInputText();
            this.hide();
            this.element.trigger('apply.daterangepicker', this);
        },

        clickCancel: function (e) {
            this.startDate = this.oldStartDate;
            this.endDate = this.oldEndDate;
            this.chosenLabel = this.oldChosenLabel;
            this.updateView();
            this.updateCalendars();
            this.hide();
            this.element.trigger('cancel.daterangepicker', this);
        },

        updateMonthYear: function (e) {
            var isLeft = $(e.target).closest('.calendar').hasClass('left'),
                leftOrRight = isLeft ? 'left' : 'right',
                cal = this.container.find('.calendar.'+leftOrRight);

            // Month must be Number for new moment versions
            var month = parseInt(cal.find('.monthselect').val(), 10);
            var year = cal.find('.yearselect').val();

            if (!isLeft && !this.singleDatePicker) {
                if (year < this.startDate.year() || (year == this.startDate.year() && month < this.startDate.month())) {
                    month = this.startDate.month();
                    year = this.startDate.year();
                }
            }

            if (this.minDate) {
                if (year < this.minDate.year() || (year == this.minDate.year() && month < this.minDate.month())) {
                    month = this.minDate.month();
                    year = this.minDate.year();
                }
            }

            if (this.maxDate) {
                if (year > this.maxDate.year() || (year == this.maxDate.year() && month > this.maxDate.month())) {
                    month = this.maxDate.month();
                    year = this.maxDate.year();
                }
            }


            this[leftOrRight+'Calendar'].month.month(month).year(year);
            this.updateCalendars();
        },

        updateTime: function(e) {

            var cal = $(e.target).closest('.calendar'),
                isLeft = cal.hasClass('left');

            var hour = parseInt(cal.find('.hourselect').val(), 10);
            var minute = parseInt(cal.find('.minuteselect').val(), 10);
            var second = 0;

            if (this.timePickerSeconds) {
                second = parseInt(cal.find('.secondselect').val(), 10);
            }

            if (this.timePicker12Hour) {
                var ampm = cal.find('.ampmselect').val();
                if (ampm === 'PM' && hour < 12)
                    hour += 12;
                if (ampm === 'AM' && hour === 12)
                    hour = 0;
            }

            if (isLeft) {
                var start = this.startDate.clone();
                start.hour(hour);
                start.minute(minute);
                start.second(second);
                this.startDate = start;
                this.leftCalendar.month.hour(hour).minute(minute).second(second);
                if (this.singleDatePicker)
                    this.endDate = start.clone();
            } else {
                var end = this.endDate.clone();
                end.hour(hour);
                end.minute(minute);
                end.second(second);
                this.endDate = end;
                if (this.singleDatePicker)
                    this.startDate = end.clone();
                this.rightCalendar.month.hour(hour).minute(minute).second(second);
            }

            this.updateView();
            this.updateCalendars();
        },

        updateCalendars: function () {
            this.leftCalendar.calendar = this.buildCalendar(this.leftCalendar.month.month(), this.leftCalendar.month.year(), this.leftCalendar.month.hour(), this.leftCalendar.month.minute(), this.leftCalendar.month.second(), 'left');
            this.rightCalendar.calendar = this.buildCalendar(this.rightCalendar.month.month(), this.rightCalendar.month.year(), this.rightCalendar.month.hour(), this.rightCalendar.month.minute(), this.rightCalendar.month.second(), 'right');
            this.container.find('.calendar.left').empty().html(this.renderCalendar(this.leftCalendar.calendar, this.startDate, this.minDate, this.maxDate, 'left'));
            this.container.find('.calendar.right').empty().html(this.renderCalendar(this.rightCalendar.calendar, this.endDate, this.singleDatePicker ? this.minDate : this.startDate, this.maxDate, 'right'));

            this.container.find('.ranges li').removeClass('active');
            var customRange = true;
            var i = 0;
            for (var range in this.ranges) {
                if (this.timePicker) {
                    if (this.startDate.isSame(this.ranges[range][0]) && this.endDate.isSame(this.ranges[range][1])) {
                        customRange = false;
                        this.chosenLabel = this.container.find('.ranges li:eq(' + i + ')')
                            .addClass('active').html();
                    }
                } else {
                    //ignore times when comparing dates if time picker is not enabled
                    if (this.startDate.format('YYYY-MM-DD') == this.ranges[range][0].format('YYYY-MM-DD') && this.endDate.format('YYYY-MM-DD') == this.ranges[range][1].format('YYYY-MM-DD')) {
                        customRange = false;
                        this.chosenLabel = this.container.find('.ranges li:eq(' + i + ')')
                            .addClass('active').html();
                    }
                }
                i++;
            }
            if (customRange) {
                this.chosenLabel = this.container.find('.ranges li:last').addClass('active').html();
                this.showCalendars();
            }
        },

        buildCalendar: function (month, year, hour, minute, second, side) {
            var daysInMonth = moment([year, month]).daysInMonth();
            var firstDay = moment([year, month, 1]);
            var lastDay = moment([year, month, daysInMonth]);
            var lastMonth = moment(firstDay).subtract(1, 'month').month();
            var lastYear = moment(firstDay).subtract(1, 'month').year();

            var daysInLastMonth = moment([lastYear, lastMonth]).daysInMonth();

            var dayOfWeek = firstDay.day();

            var i;

            //initialize a 6 rows x 7 columns array for the calendar
            var calendar = [];
            calendar.firstDay = firstDay;
            calendar.lastDay = lastDay;

            for (i = 0; i < 6; i++) {
                calendar[i] = [];
            }

            //populate the calendar with date objects
            var startDay = daysInLastMonth - dayOfWeek + this.locale.firstDay + 1;
            if (startDay > daysInLastMonth)
                startDay -= 7;

            if (dayOfWeek == this.locale.firstDay)
                startDay = daysInLastMonth - 6;

            var curDate = moment([lastYear, lastMonth, startDay, 12, minute, second]).utcOffset(this.timeZone);

            var col, row;
            for (i = 0, col = 0, row = 0; i < 42; i++, col++, curDate = moment(curDate).add(24, 'hour')) {
                if (i > 0 && col % 7 === 0) {
                    col = 0;
                    row++;
                }
                calendar[row][col] = curDate.clone().hour(hour);
                curDate.hour(12);

                if (this.minDate && calendar[row][col].format('YYYY-MM-DD') == this.minDate.format('YYYY-MM-DD') && calendar[row][col].isBefore(this.minDate) && side == 'left') {
                    calendar[row][col] = this.minDate.clone();
                }

                if (this.maxDate && calendar[row][col].format('YYYY-MM-DD') == this.maxDate.format('YYYY-MM-DD') && calendar[row][col].isAfter(this.maxDate) && side == 'right') {
                    calendar[row][col] = this.maxDate.clone();
                }

            }

            return calendar;
        },

        renderDropdowns: function (selected, minDate, maxDate) {
            var currentMonth = selected.month();
            var currentYear = selected.year();
            var maxYear = (maxDate && maxDate.year()) || (currentYear + 12);
            var minYear = (minDate && minDate.year()) || (currentYear - 50);

            var monthHtml = '<select class="monthselect">';
            var inMinYear = currentYear == minYear;
            var inMaxYear = currentYear == maxYear;

            for (var m = 0; m < 12; m++) {
                if ((!inMinYear || m >= minDate.month()) && (!inMaxYear || m <= maxDate.month())) {
                    monthHtml += "<option value='" + m + "'" +
                        (m === currentMonth ? " selected='selected'" : "") +
                        ">" + this.locale.monthNames[m] + "</option>";
                }
            }
            monthHtml += "</select>";

            var yearHtml = '<select class="yearselect">';

            for (var y = minYear; y <= maxYear; y++) {
                yearHtml += '<option value="' + y + '"' +
                    (y === currentYear ? ' selected="selected"' : '') +
                    '>' + y + '</option>';
            }

            yearHtml += '</select>';

            return monthHtml + yearHtml;
        },

        renderCalendar: function (calendar, selected, minDate, maxDate, side) {

            var html = '<div class="calendar-date">';
            html += '<table class="table-condensed">';
            html += '<thead>';
            html += '<tr>';

            // add empty cell for week number
            if (this.showWeekNumbers)
                html += '<th></th>';

            if (!minDate || minDate.isBefore(calendar.firstDay)) {
                html += '<th class="prev available"><i class="fa fa-arrow-left icon icon-arrow-left glyphicon glyphicon-arrow-left"></i></th>';
            } else {
                html += '<th></th>';
            }

            var dateHtml = this.locale.monthNames[calendar[1][1].month()] + calendar[1][1].format(" YYYY");

            if (this.showDropdowns) {
                dateHtml = this.renderDropdowns(calendar[1][1], minDate, maxDate);
            }

            html += '<th colspan="5" class="month">' + dateHtml + '</th>';
            if (!maxDate || maxDate.isAfter(calendar.lastDay)) {
                html += '<th class="next available"><i class="fa fa-arrow-right icon icon-arrow-right glyphicon glyphicon-arrow-right"></i></th>';
            } else {
                html += '<th></th>';
            }

            html += '</tr>';
            html += '<tr>';

            // add week number label
            if (this.showWeekNumbers)
                html += '<th class="week">' + this.locale.weekLabel + '</th>';

            $.each(this.locale.daysOfWeek, function (index, dayOfWeek) {
                html += '<th>' + dayOfWeek + '</th>';
            });

            html += '</tr>';
            html += '</thead>';
            html += '<tbody>';

            for (var row = 0; row < 6; row++) {
                html += '<tr>';

                // add week number
                if (this.showWeekNumbers)
                    html += '<td class="week">' + calendar[row][0].week() + '</td>';

                for (var col = 0; col < 7; col++) {
                    var cname = 'available ';
                    cname += (calendar[row][col].month() == calendar[1][1].month()) ? '' : 'off';

                    if ((minDate && calendar[row][col].isBefore(minDate, 'day')) || (maxDate && calendar[row][col].isAfter(maxDate, 'day'))) {
                        cname = ' off disabled ';
                    } else if (calendar[row][col].format('YYYY-MM-DD') == selected.format('YYYY-MM-DD')) {
                        cname += ' active ';
                        if (calendar[row][col].format('YYYY-MM-DD') == this.startDate.format('YYYY-MM-DD')) {
                            cname += ' start-date ';
                        }
                        if (calendar[row][col].format('YYYY-MM-DD') == this.endDate.format('YYYY-MM-DD')) {
                            cname += ' end-date ';
                        }
                    } else if (calendar[row][col] >= this.startDate && calendar[row][col] <= this.endDate) {
                        cname += ' in-range ';
                        if (calendar[row][col].isSame(this.startDate)) { cname += ' start-date '; }
                        if (calendar[row][col].isSame(this.endDate)) { cname += ' end-date '; }
                    }

                    var title = 'r' + row + 'c' + col;
                    html += '<td class="' + cname.replace(/\s+/g, ' ').replace(/^\s?(.*?)\s?$/, '$1') + '" data-title="' + title + '">' + calendar[row][col].date() + '</td>';
                }
                html += '</tr>';
            }

            html += '</tbody>';
            html += '</table>';
            html += '</div>';

            var i;
            // never render time inputs
            if (false) {

                html += '<div class="calendar-time">';
                html += '<select class="hourselect">';

                // Disallow selections before the minDate or after the maxDate
                var min_hour = 0;
                var max_hour = 23;

                if (minDate && (side == 'left' || this.singleDatePicker) && selected.format('YYYY-MM-DD') == minDate.format('YYYY-MM-DD')) {
                    min_hour = minDate.hour();
                    if (selected.hour() < min_hour)
                        selected.hour(min_hour);
                    if (this.timePicker12Hour && min_hour >= 12 && selected.hour() >= 12)
                        min_hour -= 12;
                    if (this.timePicker12Hour && min_hour == 12)
                        min_hour = 1;
                }

                if (maxDate && (side == 'right' || this.singleDatePicker) && selected.format('YYYY-MM-DD') == maxDate.format('YYYY-MM-DD')) {
                    max_hour = maxDate.hour();
                    if (selected.hour() > max_hour)
                        selected.hour(max_hour);
                    if (this.timePicker12Hour && max_hour >= 12 && selected.hour() >= 12)
                        max_hour -= 12;
                }

                var start = 0;
                var end = 23;
                var selected_hour = selected.hour();
                if (this.timePicker12Hour) {
                    start = 1;
                    end = 12;
                    if (selected_hour >= 12)
                        selected_hour -= 12;
                    if (selected_hour === 0)
                        selected_hour = 12;
                }

                for (i = start; i <= end; i++) {

                    if (i == selected_hour) {
                        html += '<option value="' + i + '" selected="selected">' + i + '</option>';
                    } else if (i < min_hour || i > max_hour) {
                        html += '<option value="' + i + '" disabled="disabled" class="disabled">' + i + '</option>';
                    } else {
                        html += '<option value="' + i + '">' + i + '</option>';
                    }
                }

                html += '</select> : ';

                html += '<select class="minuteselect">';

                // Disallow selections before the minDate or after the maxDate
                var min_minute = 0;
                var max_minute = 59;

                if (minDate && (side == 'left' || this.singleDatePicker) && selected.format('YYYY-MM-DD h A') == minDate.format('YYYY-MM-DD h A')) {
                    min_minute = minDate.minute();
                    if (selected.minute() < min_minute)
                        selected.minute(min_minute);
                }

                if (maxDate && (side == 'right' || this.singleDatePicker) && selected.format('YYYY-MM-DD h A') == maxDate.format('YYYY-MM-DD h A')) {
                    max_minute = maxDate.minute();
                    if (selected.minute() > max_minute)
                        selected.minute(max_minute);
                }

                for (i = 0; i < 60; i += this.timePickerIncrement) {
                    var num = i;
                    if (num < 10)
                        num = '0' + num;
                    if (i == selected.minute()) {
                        html += '<option value="' + i + '" selected="selected">' + num + '</option>';
                    } else if (i < min_minute || i > max_minute) {
                        html += '<option value="' + i + '" disabled="disabled" class="disabled">' + num + '</option>';
                    } else {
                        html += '<option value="' + i + '">' + num + '</option>';
                    }
                }

                html += '</select> ';

                if (this.timePickerSeconds) {
                    html += ': <select class="secondselect">';

                    for (i = 0; i < 60; i += this.timePickerIncrement) {
                        var num = i;
                        if (num < 10)
                            num = '0' + num;
                        if (i == selected.second()) {
                            html += '<option value="' + i + '" selected="selected">' + num + '</option>';
                        } else {
                            html += '<option value="' + i + '">' + num + '</option>';
                        }
                    }

                    html += '</select>';
                }

                if (this.timePicker12Hour) {
                    html += '<select class="ampmselect">';

                    // Disallow selection before the minDate or after the maxDate
                    var am_html = '';
                    var pm_html = '';

                    if (minDate && (side == 'left' || this.singleDatePicker) && selected.format('YYYY-MM-DD') == minDate.format('YYYY-MM-DD') && minDate.hour() >= 12) {
                        am_html = ' disabled="disabled" class="disabled"';
                    }

                    if (maxDate && (side == 'right' || this.singleDatePicker) && selected.format('YYYY-MM-DD') == maxDate.format('YYYY-MM-DD') && maxDate.hour() < 12) {
                        pm_html = ' disabled="disabled" class="disabled"';
                    }

                    if (selected.hour() >= 12) {
                        html += '<option value="AM"' + am_html + '>AM</option><option value="PM" selected="selected"' + pm_html + '>PM</option>';
                    } else {
                        html += '<option value="AM" selected="selected"' + am_html + '>AM</option><option value="PM"' + pm_html + '>PM</option>';
                    }
                    html += '</select>';
                }

                html += '</div>';

            }

            return html;

        },

        remove: function() {

            this.container.remove();
            this.element.off('.daterangepicker');
            this.element.removeData('daterangepicker');

        }

    };

    $.fn.daterangepicker = function (options, cb) {
        this.each(function () {
            var el = $(this);
            if (el.data('daterangepicker'))
                el.data('daterangepicker').remove();
            el.data('daterangepicker', new DateRangePicker(el, options, cb));
        });
        return this;
    };

}));

/*
 * Inline Form Validation Engine 2.6.2, jQuery plugin
 *
 * Copyright(c) 2010, Cedric Dugas
 * http://www.position-absolute.com
 *
 * 2.0 Rewrite by Olivier Refalo
 * http://www.crionics.com
 *
 * Form validation engine allowing custom regex rules to be added.
 * Licensed under the MIT License
 */
 (function($) {

	"use strict";

	var methods = {

		/**
		* Kind of the constructor, called before any action
		* @param {Map} user options
		*/
		init: function(options) {
			var form = this;
			if (!form.data('jqv') || form.data('jqv') == null ) {
				options = methods._saveOptions(form, options);
				// bind all formError elements to close on click
				$(document).on("click", ".formError", function() {
					$(this).fadeOut(150, function() {
						// remove prompt once invisible
						$(this).parent('.formErrorOuter').remove();
						$(this).remove();
					});
				});
			}
			return this;
		 },
		/**
		* Attachs jQuery.validationEngine to form.submit and field.blur events
		* Takes an optional params: a list of options
		* ie. jQuery("#formID1").validationEngine('attach', {promptPosition : "centerRight"});
		*/
		attach: function(userOptions) {

			var form = this;
			var options;

			if(userOptions)
				options = methods._saveOptions(form, userOptions);
			else
				options = form.data('jqv');

			options.validateAttribute = (form.find("[data-validation-engine*=validate]").length) ? "data-validation-engine" : "class";
			if (options.binded) {

				// delegate fields
				form.on(options.validationEventTrigger, "["+options.validateAttribute+"*=validate]:not([type=checkbox]):not([type=radio]):not(.datepicker)", methods._onFieldEvent);
				form.on("click", "["+options.validateAttribute+"*=validate][type=checkbox],["+options.validateAttribute+"*=validate][type=radio]", methods._onFieldEvent);
				form.on(options.validationEventTrigger,"["+options.validateAttribute+"*=validate][class*=datepicker]", {"delay": 300}, methods._onFieldEvent);
			}
			if (options.autoPositionUpdate) {
				$(window).bind("resize", {
					"noAnimation": true,
					"formElem": form
				}, methods.updatePromptsPosition);
			}
			form.on("click","a[data-validation-engine-skip], a[class*='validate-skip'], button[data-validation-engine-skip], button[class*='validate-skip'], input[data-validation-engine-skip], input[class*='validate-skip']", methods._submitButtonClick);
			form.removeData('jqv_submitButton');

			// bind form.submit
			form.on("submit", methods._onSubmitEvent);
			return this;
		},
		/**
		* Unregisters any bindings that may point to jQuery.validaitonEngine
		*/
		detach: function() {

			var form = this;
			var options = form.data('jqv');

			// unbind fields
			form.find("["+options.validateAttribute+"*=validate]").not("[type=checkbox]").off(options.validationEventTrigger, methods._onFieldEvent);
			form.find("["+options.validateAttribute+"*=validate][type=checkbox],[class*=validate][type=radio]").off("click", methods._onFieldEvent);

			// unbind form.submit
			form.off("submit", methods.onAjaxFormComplete);

			// unbind form.submit
			form.off("submit", methods.onAjaxFormComplete);
			form.removeData('jqv');
            
			form.off("click", "a[data-validation-engine-skip], a[class*='validate-skip'], button[data-validation-engine-skip], button[class*='validate-skip'], input[data-validation-engine-skip], input[class*='validate-skip']", methods._submitButtonClick);
			form.removeData('jqv_submitButton');

			if (options.autoPositionUpdate)
				$(window).unbind("resize", methods.updatePromptsPosition);

			return this;
		},
		/**
		* Validates either a form or a list of fields, shows prompts accordingly.
		* Note: There is no ajax form validation with this method, only field ajax validation are evaluated
		*
		* @return true if the form validates, false if it fails
		*/
		validate: function() {
			var element = $(this);
			var valid = null;

			if (element.is("form") || element.hasClass("validationEngineContainer")) {
				if (element.hasClass('validating')) {
					// form is already validating.
					// Should abort old validation and start new one. I don't know how to implement it.
					return false;
				} else {				
					element.addClass('validating');
					var options = element.data('jqv');
					var valid = methods._validateFields(this);

					// If the form doesn't validate, clear the 'validating' class before the user has a chance to submit again
					setTimeout(function(){
						element.removeClass('validating');
					}, 100);
					if (valid && options.onSuccess) {
						options.onSuccess();
					} else if (!valid && options.onFailure) {
						options.onFailure();
					}
				}
			} else if (element.is('form') || element.hasClass('validationEngineContainer')) {
				element.removeClass('validating');
			} else {
				// field validation
				var form = element.closest('form, .validationEngineContainer'),
					options = (form.data('jqv')) ? form.data('jqv') : $.validationEngine.defaults,
					valid = methods._validateField(element, options);

				if (valid && options.onFieldSuccess)
					options.onFieldSuccess();
				else if (options.onFieldFailure && options.InvalidFields.length > 0) {
					options.onFieldFailure();
				}
			}
			if(options.onValidationComplete) {
				// !! ensures that an undefined return is interpreted as return false but allows a onValidationComplete() to possibly return true and have form continue processing
				return !!options.onValidationComplete(form, valid);
			}
			return valid;
		},
		/**
		*  Redraw prompts position, useful when you change the DOM state when validating
		*/
		updatePromptsPosition: function(event) {

			if (event && this == window) {
				var form = event.data.formElem;
				var noAnimation = event.data.noAnimation;
			}
			else
				var form = $(this.closest('form, .validationEngineContainer'));

			var options = form.data('jqv');
			// No option, take default one
			form.find('['+options.validateAttribute+'*=validate]').not(":disabled").each(function(){
				var field = $(this);
				if (options.prettySelect && field.is(":hidden"))
				  field = form.find("#" + options.usePrefix + field.attr('id') + options.useSuffix);
				var prompt = methods._getPrompt(field);
				var promptText = $(prompt).find(".formErrorContent").html();

				if(prompt)
					methods._updatePrompt(field, $(prompt), promptText, undefined, false, options, noAnimation);
			});
			return this;
		},
		/**
		* Displays a prompt on a element.
		* Note that the element needs an id!
		*
		* @param {String} promptText html text to display type
		* @param {String} type the type of bubble: 'pass' (green), 'load' (black) anything else (red)
		* @param {String} possible values topLeft, topRight, bottomLeft, centerRight, bottomRight
		*/
		showPrompt: function(promptText, type, promptPosition, showArrow) {
			var form = this.closest('form, .validationEngineContainer');
			var options = form.data('jqv');
			// No option, take default one
			if(!options)
				options = methods._saveOptions(this, options);
			if(promptPosition)
				options.promptPosition=promptPosition;
			options.showArrow = showArrow==true;

			methods._showPrompt(this, promptText, type, false, options);
			return this;
		},
		/**
		* Closes form error prompts, CAN be invidual
		*/
		hide: function() {
			 var form = $(this).closest('form, .validationEngineContainer');
			 var options = form.data('jqv');
			 var fadeDuration = (options && options.fadeDuration) ? options.fadeDuration : 0.3;
			 var closingtag;
			 
			 if($(this).is("form") || $(this).hasClass("validationEngineContainer")) {
				 closingtag = "parentForm"+methods._getClassName($(this).attr("id"));
			 } else {
				 closingtag = methods._getClassName($(this).attr("id")) +"formError";
			 }
			 $('.'+closingtag).fadeTo(fadeDuration, 0.3, function() {
				 $(this).parent('.formErrorOuter').remove();
				 $(this).remove();
			 });
			 return this;
		 },
		 /**
		 * Closes all error prompts on the page
		 */
		 hideAll: function() {

			 var form = this;
			 var options = form.data('jqv');
			 var duration = options ? options.fadeDuration:300;
			 $('.formError').fadeTo(duration, 300, function() {
				 $(this).parent('.formErrorOuter').remove();
				 $(this).remove();
			 });
			 return this;
		 },
		/**
		* Typically called when user exists a field using tab or a mouse click, triggers a field
		* validation
		*/
		_onFieldEvent: function(event) {
			var field = $(this);
			var form = field.closest('form, .validationEngineContainer');
			var options = form.data('jqv');
			options.eventTrigger = "field";
			// validate the current field
			window.setTimeout(function() {
				methods._validateField(field, options);
				if (options.InvalidFields.length == 0 && options.onFieldSuccess) {
					options.onFieldSuccess();
				} else if (options.InvalidFields.length > 0 && options.onFieldFailure) {
					options.onFieldFailure();
				}
			}, (event.data) ? event.data.delay : 0);

		},
		/**
		* Called when the form is submited, shows prompts accordingly
		*
		* @param {jqObject}
		*            form
		* @return false if form submission needs to be cancelled
		*/
		_onSubmitEvent: function() {
			var form = $(this);
			var options = form.data('jqv');
			
			//check if it is trigger from skipped button
			if (form.data("jqv_submitButton")){
				var submitButton = $("#" + form.data("jqv_submitButton"));
				if (submitButton){
					if (submitButton.length > 0){
						if (submitButton.hasClass("validate-skip") || submitButton.attr("data-validation-engine-skip") == "true")
							return true;
					}
				}
			}

			options.eventTrigger = "submit";

			// validate each field 
			// (- skip field ajax validation, not necessary IF we will perform an ajax form validation)
			var r=methods._validateFields(form);

			if (r && options.ajaxFormValidation) {
				methods._validateFormWithAjax(form, options);
				// cancel form auto-submission - process with async call onAjaxFormComplete
				return false;
			}

			if(options.onValidationComplete) {
				// !! ensures that an undefined return is interpreted as return false but allows a onValidationComplete() to possibly return true and have form continue processing
				return !!options.onValidationComplete(form, r);
			}
			return r;
		},
		/**
		* Return true if the ajax field validations passed so far
		* @param {Object} options
		* @return true, is all ajax validation passed so far (remember ajax is async)
		*/
		_checkAjaxStatus: function(options) {
			var status = true;
			$.each(options.ajaxValidCache, function(key, value) {
				if (!value) {
					status = false;
					// break the each
					return false;
				}
			});
			return status;
		},
		
		/**
		* Return true if the ajax field is validated
		* @param {String} fieldid
		* @param {Object} options
		* @return true, if validation passed, false if false or doesn't exist
		*/
		_checkAjaxFieldStatus: function(fieldid, options) {
			return options.ajaxValidCache[fieldid] == true;
		},
		/**
		* Validates form fields, shows prompts accordingly
		*
		* @param {jqObject}
		*            form
		* @param {skipAjaxFieldValidation}
		*            boolean - when set to true, ajax field validation is skipped, typically used when the submit button is clicked
		*
		* @return true if form is valid, false if not, undefined if ajax form validation is done
		*/
		_validateFields: function(form) {
			var options = form.data('jqv');

			// this variable is set to true if an error is found
			var errorFound = false;

			// Trigger hook, start validation
			form.trigger("jqv.form.validating");
			// first, evaluate status of non ajax fields
			var first_err=null;
			form.find('['+options.validateAttribute+'*=validate]').not(":disabled").each( function() {
				var field = $(this);
				var names = [];
				if ($.inArray(field.attr('name'), names) < 0) {
					errorFound |= methods._validateField(field, options);
					if (errorFound && first_err==null)
						if (field.is(":hidden") && options.prettySelect)
										 first_err = field = form.find("#" + options.usePrefix + methods._jqSelector(field.attr('id')) + options.useSuffix);
									else
										 first_err=field;
					if (options.doNotShowAllErrosOnSubmit)
						return false;
					names.push(field.attr('name'));

					//if option set, stop checking validation rules after one error is found
					if(options.showOneMessage == true && errorFound){
						return false;
					}
				}
			});

			// second, check to see if all ajax calls completed ok
			// errorFound |= !methods._checkAjaxStatus(options);

			// third, check status and scroll the container accordingly
			form.trigger("jqv.form.result", [errorFound]);

			if (errorFound) {
				if (options.scroll) {
					var destination=first_err.offset().top;
					var fixleft = first_err.offset().left;

					//prompt positioning adjustment support. Usage: positionType:Xshift,Yshift (for ex.: bottomLeft:+20 or bottomLeft:-20,+10)
					var positionType=options.promptPosition;
					if (typeof(positionType)=='string' && positionType.indexOf(":")!=-1)
						positionType=positionType.substring(0,positionType.indexOf(":"));

					if (positionType!="bottomRight" && positionType!="bottomLeft") {
						var prompt_err= methods._getPrompt(first_err);
						if (prompt_err) {
							destination=prompt_err.offset().top;
						}
					}
					
					// Offset the amount the page scrolls by an amount in px to accomodate fixed elements at top of page
					if (options.scrollOffset) {
						destination -= options.scrollOffset;
					}

					// get the position of the first error, there should be at least one, no need to check this
					//var destination = form.find(".formError:not('.greenPopup'):first").offset().top;
					if (options.isOverflown) {
						var overflowDIV = $(options.overflownDIV);
						if(!overflowDIV.length) return false;
						var scrollContainerScroll = overflowDIV.scrollTop();
						var scrollContainerPos = -parseInt(overflowDIV.offset().top);

						destination += scrollContainerScroll + scrollContainerPos - 5;
						var scrollContainer = $(options.overflownDIV + ":not(:animated)");

						scrollContainer.animate({ scrollTop: destination }, 1100, function(){
							if(options.focusFirstField) first_err.focus();
						});

					} else {
						$("html, body").animate({
							scrollTop: destination
						}, 1100, function(){
							if(options.focusFirstField) first_err.focus();
						});
						$("html, body").animate({scrollLeft: fixleft},1100)
					}

				} else if(options.focusFirstField)
					first_err.focus();
				return false;
			}
			return true;
		},
		/**
		* This method is called to perform an ajax form validation.
		* During this process all the (field, value) pairs are sent to the server which returns a list of invalid fields or true
		*
		* @param {jqObject} form
		* @param {Map} options
		*/
		_validateFormWithAjax: function(form, options) {

			var data = form.serialize();
									var type = (options.ajaxFormValidationMethod) ? options.ajaxFormValidationMethod : "GET";
			var url = (options.ajaxFormValidationURL) ? options.ajaxFormValidationURL : form.attr("action");
									var dataType = (options.dataType) ? options.dataType : "json";
			$.ajax({
				type: type,
				url: url,
				cache: false,
				dataType: dataType,
				data: data,
				form: form,
				methods: methods,
				options: options,
				beforeSend: function() {
					return options.onBeforeAjaxFormValidation(form, options);
				},
				error: function(data, transport) {
					methods._ajaxError(data, transport);
				},
				success: function(json) {
					if ((dataType == "json") && (json !== true)) {
						// getting to this case doesn't necessary means that the form is invalid
						// the server may return green or closing prompt actions
						// this flag helps figuring it out
						var errorInForm=false;
						for (var i = 0; i < json.length; i++) {
							var value = json[i];

							var errorFieldId = value[0];
							var errorField = $($("#" + errorFieldId)[0]);

							// make sure we found the element
							if (errorField.length == 1) {

								// promptText or selector
								var msg = value[2];
								// if the field is valid
								if (value[1] == true) {

									if (msg == ""  || !msg){
										// if for some reason, status==true and error="", just close the prompt
										methods._closePrompt(errorField);
									} else {
										// the field is valid, but we are displaying a green prompt
										if (options.allrules[msg]) {
											var txt = options.allrules[msg].alertTextOk;
											if (txt)
												msg = txt;
										}
										if (options.showPrompts) methods._showPrompt(errorField, msg, "pass", false, options, true);
									}
								} else {
									// the field is invalid, show the red error prompt
									errorInForm|=true;
									if (options.allrules[msg]) {
										var txt = options.allrules[msg].alertText;
										if (txt)
											msg = txt;
									}
									if(options.showPrompts) methods._showPrompt(errorField, msg, "", false, options, true);
								}
							}
						}
						options.onAjaxFormComplete(!errorInForm, form, json, options);
					} else
						options.onAjaxFormComplete(true, form, json, options);

				}
			});

		},
		/**
		* Validates field, shows prompts accordingly
		*
		* @param {jqObject}
		*            field
		* @param {Array[String]}
		*            field's validation rules
		* @param {Map}
		*            user options
		* @return false if field is valid (It is inversed for *fields*, it return false on validate and true on errors.)
		*/
		_validateField: function(field, options, skipAjaxValidation) {
			if (!field.attr("id")) {
				field.attr("id", "form-validation-field-" + $.validationEngine.fieldIdCounter);
				++$.validationEngine.fieldIdCounter;
			}

           if (!options.validateNonVisibleFields && (field.is(":hidden") && !options.prettySelect || field.parent().is(":hidden")))
				return false;

			var rulesParsing = field.attr(options.validateAttribute);
			var getRules = /validate\[(.*)\]/.exec(rulesParsing);

			if (!getRules)
				return false;
			var str = getRules[1];
			var rules = str.split(/\[|,|\]/);

			// true if we ran the ajax validation, tells the logic to stop messing with prompts
			var isAjaxValidator = false;
			var fieldName = field.attr("name");
			var promptText = "";
			var promptType = "";
			var required = false;
			var limitErrors = false;
			options.isError = false;
			options.showArrow = true;
			
			// If the programmer wants to limit the amount of error messages per field,
			if (options.maxErrorsPerField > 0) {
				limitErrors = true;
			}

			var form = $(field.closest("form, .validationEngineContainer"));
			// Fix for adding spaces in the rules
			for (var i = 0; i < rules.length; i++) {
				rules[i] = rules[i].replace(" ", "");
				// Remove any parsing errors
				if (rules[i] === '') {
					delete rules[i];
				}
			}

			for (var i = 0, field_errors = 0; i < rules.length; i++) {
				
				// If we are limiting errors, and have hit the max, break
				if (limitErrors && field_errors >= options.maxErrorsPerField) {
					// If we haven't hit a required yet, check to see if there is one in the validation rules for this
					// field and that it's index is greater or equal to our current index
					if (!required) {
						var have_required = $.inArray('required', rules);
						required = (have_required != -1 &&  have_required >= i);
					}
					break;
				}
				
				
				var errorMsg = undefined;
				switch (rules[i]) {

					case "required":
						required = true;
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._required);
						break;
					case "custom":
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._custom);
						break;
					case "groupRequired":
						// Check is its the first of group, if not, reload validation with first field
						// AND continue normal validation on present field
						var classGroup = "["+options.validateAttribute+"*=" +rules[i + 1] +"]";
						var firstOfGroup = form.find(classGroup).eq(0);
						if(firstOfGroup[0] != field[0]){

							methods._validateField(firstOfGroup, options, skipAjaxValidation); 
							options.showArrow = true;

						}
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._groupRequired);
						if(errorMsg)  required = true;
						options.showArrow = false;
						break;
					case "ajax":
						// AJAX defaults to returning it's loading message
						errorMsg = methods._ajax(field, rules, i, options);
						if (errorMsg) {
							promptType = "load";
						}
						break;
					case "minSize":
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._minSize);
						break;
					case "maxSize":
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._maxSize);
						break;
					case "min":
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._min);
						break;
					case "max":
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._max);
						break;
					case "past":
						errorMsg = methods._getErrorMessage(form, field,rules[i], rules, i, options, methods._past);
						break;
					case "future":
						errorMsg = methods._getErrorMessage(form, field,rules[i], rules, i, options, methods._future);
						break;
					case "dateRange":
						var classGroup = "["+options.validateAttribute+"*=" + rules[i + 1] + "]";
						options.firstOfGroup = form.find(classGroup).eq(0);
						options.secondOfGroup = form.find(classGroup).eq(1);

						//if one entry out of the pair has value then proceed to run through validation
						if (options.firstOfGroup[0].value || options.secondOfGroup[0].value) {
							errorMsg = methods._getErrorMessage(form, field,rules[i], rules, i, options, methods._dateRange);
						}
						if (errorMsg) required = true;
						options.showArrow = false;
						break;

					case "dateTimeRange":
						var classGroup = "["+options.validateAttribute+"*=" + rules[i + 1] + "]";
						options.firstOfGroup = form.find(classGroup).eq(0);
						options.secondOfGroup = form.find(classGroup).eq(1);

						//if one entry out of the pair has value then proceed to run through validation
						if (options.firstOfGroup[0].value || options.secondOfGroup[0].value) {
							errorMsg = methods._getErrorMessage(form, field,rules[i], rules, i, options, methods._dateTimeRange);
						}
						if (errorMsg) required = true;
						options.showArrow = false;
						break;
					case "maxCheckbox":
						field = $(form.find("input[name='" + fieldName + "']"));
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._maxCheckbox);
						break;
					case "minCheckbox":
						field = $(form.find("input[name='" + fieldName + "']"));
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._minCheckbox);
						break;
					case "equals":
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._equals);
						break;
					case "funcCall":
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._funcCall);
						break;
					case "creditCard":
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._creditCard);
						break;
					case "condRequired":
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._condRequired);
						if (errorMsg !== undefined) {
							required = true;
						}
						break;

					default:
				}
				
				var end_validation = false;
				
				// If we were passed back an message object, check what the status was to determine what to do
				if (typeof errorMsg == "object") {
					switch (errorMsg.status) {
						case "_break":
							end_validation = true;
							break;
						// If we have an error message, set errorMsg to the error message
						case "_error":
							errorMsg = errorMsg.message;
							break;
						// If we want to throw an error, but not show a prompt, return early with true
						case "_error_no_prompt":
							return true;
							break;
						// Anything else we continue on
						default:
							break;
					}
				}
				
				// If it has been specified that validation should end now, break
				if (end_validation) {
					break;
				}
				
				// If we have a string, that means that we have an error, so add it to the error message.
				if (typeof errorMsg == 'string') {
					promptText += errorMsg + "<br/>";
					options.isError = true;
					field_errors++;
				}	
			}
			// If the rules required is not added, an empty field is not validated
			if(!required && !(field.val()) && field.val().length < 1) options.isError = false;

			// Hack for radio/checkbox group button, the validation go into the
			// first radio/checkbox of the group
			var fieldType = field.prop("type");
			var positionType=field.data("promptPosition") || options.promptPosition;

			if ((fieldType == "radio" || fieldType == "checkbox") && form.find("input[name='" + fieldName + "']").size() > 1) {
				if(positionType === 'inline') {
					field = $(form.find("input[name='" + fieldName + "'][type!=hidden]:last"));
				} else {
				field = $(form.find("input[name='" + fieldName + "'][type!=hidden]:first"));
				}
				options.showArrow = false;
			}

			if(field.is(":hidden") && options.prettySelect) {
				field = form.find("#" + options.usePrefix + methods._jqSelector(field.attr('id')) + options.useSuffix);
			}

			if (options.isError && options.showPrompts){
				methods._showPrompt(field, promptText, promptType, false, options);
			}else{
				if (!isAjaxValidator) methods._closePrompt(field);
			}

			if (!isAjaxValidator) {
				field.trigger("jqv.field.result", [field, options.isError, promptText]);
			}

			/* Record error */
			var errindex = $.inArray(field[0], options.InvalidFields);
			if (errindex == -1) {
				if (options.isError)
				options.InvalidFields.push(field[0]);
			} else if (!options.isError) {
				options.InvalidFields.splice(errindex, 1);
			}
				
			methods._handleStatusCssClasses(field, options);
	
			/* run callback function for each field */
			if (options.isError && options.onFieldFailure)
				options.onFieldFailure(field);

			if (!options.isError && options.onFieldSuccess)
				options.onFieldSuccess(field);

			return options.isError;
		},
		/**
		* Handling css classes of fields indicating result of validation 
		*
		* @param {jqObject}
		*            field
		* @param {Array[String]}
		*            field's validation rules            
		* @private
		*/
		_handleStatusCssClasses: function(field, options) {
			/* remove all classes */
			if(options.addSuccessCssClassToField)
				field.removeClass(options.addSuccessCssClassToField);
			
			if(options.addFailureCssClassToField)
				field.removeClass(options.addFailureCssClassToField);
			
			/* Add classes */
			if (options.addSuccessCssClassToField && !options.isError)
				field.addClass(options.addSuccessCssClassToField);
			
			if (options.addFailureCssClassToField && options.isError)
				field.addClass(options.addFailureCssClassToField);		
		},
		
		 /********************
		  * _getErrorMessage
		  *
		  * @param form
		  * @param field
		  * @param rule
		  * @param rules
		  * @param i
		  * @param options
		  * @param originalValidationMethod
		  * @return {*}
		  * @private
		  */
		 _getErrorMessage:function (form, field, rule, rules, i, options, originalValidationMethod) {
			 // If we are using the custon validation type, build the index for the rule.
			 // Otherwise if we are doing a function call, make the call and return the object
			 // that is passed back.
	 		 var rule_index = jQuery.inArray(rule, rules);
			 if (rule === "custom" || rule === "funcCall") {
				 var custom_validation_type = rules[rule_index + 1];
				 rule = rule + "[" + custom_validation_type + "]";
				 // Delete the rule from the rules array so that it doesn't try to call the
			    // same rule over again
			    delete(rules[rule_index]);
			 }
			 // Change the rule to the composite rule, if it was different from the original
			 var alteredRule = rule;


			 var element_classes = (field.attr("data-validation-engine")) ? field.attr("data-validation-engine") : field.attr("class");
			 var element_classes_array = element_classes.split(" ");

			 // Call the original validation method. If we are dealing with dates or checkboxes, also pass the form
			 var errorMsg;
			 if (rule == "future" || rule == "past"  || rule == "maxCheckbox" || rule == "minCheckbox") {
				 errorMsg = originalValidationMethod(form, field, rules, i, options);
			 } else {
				 errorMsg = originalValidationMethod(field, rules, i, options);
			 }

			 // If the original validation method returned an error and we have a custom error message,
			 // return the custom message instead. Otherwise return the original error message.
			 if (errorMsg != undefined) {
				 var custom_message = methods._getCustomErrorMessage($(field), element_classes_array, alteredRule, options);
				 if (custom_message) errorMsg = custom_message;
			 }
			 return errorMsg;

		 },
		 _getCustomErrorMessage:function (field, classes, rule, options) {
			var custom_message = false;
			var validityProp = /^custom\[.*\]$/.test(rule) ? methods._validityProp["custom"] : methods._validityProp[rule];
			 // If there is a validityProp for this rule, check to see if the field has an attribute for it
			if (validityProp != undefined) {
				custom_message = field.attr("data-errormessage-"+validityProp);
				// If there was an error message for it, return the message
				if (custom_message != undefined) 
					return custom_message;
			}
			custom_message = field.attr("data-errormessage");
			 // If there is an inline custom error message, return it
			if (custom_message != undefined) 
				return custom_message;
			var id = '#' + field.attr("id");
			// If we have custom messages for the element's id, get the message for the rule from the id.
			// Otherwise, if we have custom messages for the element's classes, use the first class message we find instead.
			if (typeof options.custom_error_messages[id] != "undefined" &&
				typeof options.custom_error_messages[id][rule] != "undefined" ) {
						  custom_message = options.custom_error_messages[id][rule]['message'];
			} else if (classes.length > 0) {
				for (var i = 0; i < classes.length && classes.length > 0; i++) {
					 var element_class = "." + classes[i];
					if (typeof options.custom_error_messages[element_class] != "undefined" &&
						typeof options.custom_error_messages[element_class][rule] != "undefined") {
							custom_message = options.custom_error_messages[element_class][rule]['message'];
							break;
					}
				}
			}
			if (!custom_message &&
				typeof options.custom_error_messages[rule] != "undefined" &&
				typeof options.custom_error_messages[rule]['message'] != "undefined"){
					 custom_message = options.custom_error_messages[rule]['message'];
			 }
			 return custom_message;
		 },
		 _validityProp: {
			 "required": "value-missing",
			 "custom": "custom-error",
			 "groupRequired": "value-missing",
			 "ajax": "custom-error",
			 "minSize": "range-underflow",
			 "maxSize": "range-overflow",
			 "min": "range-underflow",
			 "max": "range-overflow",
			 "past": "type-mismatch",
			 "future": "type-mismatch",
			 "dateRange": "type-mismatch",
			 "dateTimeRange": "type-mismatch",
			 "maxCheckbox": "range-overflow",
			 "minCheckbox": "range-underflow",
			 "equals": "pattern-mismatch",
			 "funcCall": "custom-error",
			 "creditCard": "pattern-mismatch",
			 "condRequired": "value-missing"
		 },
		/**
		* Required validation
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		*            user options
		* @param {bool} condRequired flag when method is used for internal purpose in condRequired check
		* @return an error string if validation failed
		*/
		_required: function(field, rules, i, options, condRequired) {
			switch (field.prop("type")) {
				case "text":
				case "password":
				case "textarea":
				case "file":
				case "select-one":
				case "select-multiple":
				default:
					var field_val      = $.trim( field.val()                               );
					var dv_placeholder = $.trim( field.attr("data-validation-placeholder") );
					var placeholder    = $.trim( field.attr("placeholder")                 );
					if (
						   ( !field_val                                    )
						|| ( dv_placeholder && field_val == dv_placeholder )
						|| ( placeholder    && field_val == placeholder    )
					) {
						return options.allrules[rules[i]].alertText;
					}
					break;
				case "radio":
				case "checkbox":
					// new validation style to only check dependent field
					if (condRequired) {
						if (!field.attr('checked')) {
							return options.allrules[rules[i]].alertTextCheckboxMultiple;
						}
						break;
					}
					// old validation style
					var form = field.closest("form, .validationEngineContainer");
					var name = field.attr("name");
					if (form.find("input[name='" + name + "']:checked").size() == 0) {
						if (form.find("input[name='" + name + "']:visible").size() == 1)
							return options.allrules[rules[i]].alertTextCheckboxe;
						else
							return options.allrules[rules[i]].alertTextCheckboxMultiple;
					}
					break;
			}
		},
		/**
		* Validate that 1 from the group field is required
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		*            user options
		* @return an error string if validation failed
		*/
		_groupRequired: function(field, rules, i, options) {
			var classGroup = "["+options.validateAttribute+"*=" +rules[i + 1] +"]";
			var isValid = false;
			// Check all fields from the group
			field.closest("form, .validationEngineContainer").find(classGroup).each(function(){
				if(!methods._required($(this), rules, i, options)){
					isValid = true;
					return false;
				}
			}); 

			if(!isValid) {
		  return options.allrules[rules[i]].alertText;
		}
		},
		/**
		* Validate rules
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		*            user options
		* @return an error string if validation failed
		*/
		_custom: function(field, rules, i, options) {
			var customRule = rules[i + 1];
			var rule = options.allrules[customRule];
			var fn;
			if(!rule) {
				alert("jqv:custom rule not found - "+customRule);
				return;
			}
			
			if(rule["regex"]) {
				 var ex=rule.regex;
					if(!ex) {
						alert("jqv:custom regex not found - "+customRule);
						return;
					}
					var pattern = new RegExp(ex);

					if (!pattern.test(field.val())) return options.allrules[customRule].alertText;
					
			} else if(rule["func"]) {
				fn = rule["func"]; 
				 
				if (typeof(fn) !== "function") {
					alert("jqv:custom parameter 'function' is no function - "+customRule);
						return;
				}
				 
				if (!fn(field, rules, i, options))
					return options.allrules[customRule].alertText;
			} else {
				alert("jqv:custom type not allowed "+customRule);
					return;
			}
		},
		/**
		* Validate custom function outside of the engine scope
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		*            user options
		* @return an error string if validation failed
		*/
		_funcCall: function(field, rules, i, options) {
			var functionName = rules[i + 1];
			var fn;
			if(functionName.indexOf('.') >-1)
			{
				var namespaces = functionName.split('.');
				var scope = window;
				while(namespaces.length)
				{
					scope = scope[namespaces.shift()];
				}
				fn = scope;
			}
			else
				fn = window[functionName] || options.customFunctions[functionName];
			if (typeof(fn) == 'function')
				return fn(field, rules, i, options);

		},
		/**
		* Field match
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		*            user options
		* @return an error string if validation failed
		*/
		_equals: function(field, rules, i, options) {
			var equalsField = rules[i + 1];

			if (field.val() != $("#" + equalsField).val())
				return options.allrules.equals.alertText;
		},
		/**
		* Check the maximum size (in characters)
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		*            user options
		* @return an error string if validation failed
		*/
		_maxSize: function(field, rules, i, options) {
			var max = rules[i + 1];
			var len = field.val().length;

			if (len > max) {
				var rule = options.allrules.maxSize;
				return rule.alertText + max + rule.alertText2;
			}
		},
		/**
		* Check the minimum size (in characters)
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		*            user options
		* @return an error string if validation failed
		*/
		_minSize: function(field, rules, i, options) {
			var min = rules[i + 1];
			var len = field.val().length;

			if (len < min) {
				var rule = options.allrules.minSize;
				return rule.alertText + min + rule.alertText2;
			}
		},
		/**
		* Check number minimum value
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		*            user options
		* @return an error string if validation failed
		*/
		_min: function(field, rules, i, options) {
			var min = parseFloat(rules[i + 1]);
			var len = parseFloat(field.val());

			if (len < min) {
				var rule = options.allrules.min;
				if (rule.alertText2) return rule.alertText + min + rule.alertText2;
				return rule.alertText + min;
			}
		},
		/**
		* Check number maximum value
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		*            user options
		* @return an error string if validation failed
		*/
		_max: function(field, rules, i, options) {
			var max = parseFloat(rules[i + 1]);
			var len = parseFloat(field.val());

			if (len >max ) {
				var rule = options.allrules.max;
				if (rule.alertText2) return rule.alertText + max + rule.alertText2;
				//orefalo: to review, also do the translations
				return rule.alertText + max;
			}
		},
		/**
		* Checks date is in the past
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		*            user options
		* @return an error string if validation failed
		*/
		_past: function(form, field, rules, i, options) {

			var p=rules[i + 1];
			var fieldAlt = $(form.find("input[name='" + p.replace(/^#+/, '') + "']"));
			var pdate;

			if (p.toLowerCase() == "now") {
				pdate = new Date();
			} else if (undefined != fieldAlt.val()) {
				if (fieldAlt.is(":disabled"))
					return;
				pdate = methods._parseDate(fieldAlt.val());
			} else {
				pdate = methods._parseDate(p);
			}
			var vdate = methods._parseDate(field.val());

			if (vdate > pdate ) {
				var rule = options.allrules.past;
				if (rule.alertText2) return rule.alertText + methods._dateToString(pdate) + rule.alertText2;
				return rule.alertText + methods._dateToString(pdate);
			}
		},
		/**
		* Checks date is in the future
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		*            user options
		* @return an error string if validation failed
		*/
		_future: function(form, field, rules, i, options) {

			var p=rules[i + 1];
			var fieldAlt = $(form.find("input[name='" + p.replace(/^#+/, '') + "']"));
			var pdate;

			if (p.toLowerCase() == "now") {
				pdate = new Date();
			} else if (undefined != fieldAlt.val()) {
				if (fieldAlt.is(":disabled"))
					return;
				pdate = methods._parseDate(fieldAlt.val());
			} else {
				pdate = methods._parseDate(p);
			}
			var vdate = methods._parseDate(field.val());

			if (vdate < pdate ) {
				var rule = options.allrules.future;
				if (rule.alertText2)
					return rule.alertText + methods._dateToString(pdate) + rule.alertText2;
				return rule.alertText + methods._dateToString(pdate);
			}
		},
		/**
		* Checks if valid date
		*
		* @param {string} date string
		* @return a bool based on determination of valid date
		*/
		_isDate: function (value) {
			var dateRegEx = new RegExp(/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:0?[1-9]|1[0-2])(\/|-)(?:0?[1-9]|1\d|2[0-8]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(0?2(\/|-)29)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/);
			return dateRegEx.test(value);
		},
		/**
		* Checks if valid date time
		*
		* @param {string} date string
		* @return a bool based on determination of valid date time
		*/
		_isDateTime: function (value){
			var dateTimeRegEx = new RegExp(/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1}$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^((1[012]|0?[1-9]){1}\/(0?[1-9]|[12][0-9]|3[01]){1}\/\d{2,4}\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1})$/);
			return dateTimeRegEx.test(value);
		},
		//Checks if the start date is before the end date
		//returns true if end is later than start
		_dateCompare: function (start, end) {
			return (new Date(start.toString()) < new Date(end.toString()));
		},
		/**
		* Checks date range
		*
		* @param {jqObject} first field name
		* @param {jqObject} second field name
		* @return an error string if validation failed
		*/
		_dateRange: function (field, rules, i, options) {
			//are not both populated
			if ((!options.firstOfGroup[0].value && options.secondOfGroup[0].value) || (options.firstOfGroup[0].value && !options.secondOfGroup[0].value)) {
				return options.allrules[rules[i]].alertText + options.allrules[rules[i]].alertText2;
			}

			//are not both dates
			if (!methods._isDate(options.firstOfGroup[0].value) || !methods._isDate(options.secondOfGroup[0].value)) {
				return options.allrules[rules[i]].alertText + options.allrules[rules[i]].alertText2;
			}

			//are both dates but range is off
			if (!methods._dateCompare(options.firstOfGroup[0].value, options.secondOfGroup[0].value)) {
				return options.allrules[rules[i]].alertText + options.allrules[rules[i]].alertText2;
			}
		},
		/**
		* Checks date time range
		*
		* @param {jqObject} first field name
		* @param {jqObject} second field name
		* @return an error string if validation failed
		*/
		_dateTimeRange: function (field, rules, i, options) {
			//are not both populated
			if ((!options.firstOfGroup[0].value && options.secondOfGroup[0].value) || (options.firstOfGroup[0].value && !options.secondOfGroup[0].value)) {
				return options.allrules[rules[i]].alertText + options.allrules[rules[i]].alertText2;
			}
			//are not both dates
			if (!methods._isDateTime(options.firstOfGroup[0].value) || !methods._isDateTime(options.secondOfGroup[0].value)) {
				return options.allrules[rules[i]].alertText + options.allrules[rules[i]].alertText2;
			}
			//are both dates but range is off
			if (!methods._dateCompare(options.firstOfGroup[0].value, options.secondOfGroup[0].value)) {
				return options.allrules[rules[i]].alertText + options.allrules[rules[i]].alertText2;
			}
		},
		/**
		* Max number of checkbox selected
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		*            user options
		* @return an error string if validation failed
		*/
		_maxCheckbox: function(form, field, rules, i, options) {

			var nbCheck = rules[i + 1];
			var groupname = field.attr("name");
			var groupSize = form.find("input[name='" + groupname + "']:checked").size();
			if (groupSize > nbCheck) {
				options.showArrow = false;
				if (options.allrules.maxCheckbox.alertText2)
					 return options.allrules.maxCheckbox.alertText + " " + nbCheck + " " + options.allrules.maxCheckbox.alertText2;
				return options.allrules.maxCheckbox.alertText;
			}
		},
		/**
		* Min number of checkbox selected
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		*            user options
		* @return an error string if validation failed
		*/
		_minCheckbox: function(form, field, rules, i, options) {

			var nbCheck = rules[i + 1];
			var groupname = field.attr("name");
			var groupSize = form.find("input[name='" + groupname + "']:checked").size();
			if (groupSize < nbCheck) {
				options.showArrow = false;
				return options.allrules.minCheckbox.alertText + " " + nbCheck + " " + options.allrules.minCheckbox.alertText2;
			}
		},
		/**
		* Checks that it is a valid credit card number according to the
		* Luhn checksum algorithm.
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		*            user options
		* @return an error string if validation failed
		*/
		_creditCard: function(field, rules, i, options) {
			//spaces and dashes may be valid characters, but must be stripped to calculate the checksum.
			var valid = false, cardNumber = field.val().replace(/ +/g, '').replace(/-+/g, '');

			var numDigits = cardNumber.length;
			if (numDigits >= 14 && numDigits <= 16 && parseInt(cardNumber) > 0) {

				var sum = 0, i = numDigits - 1, pos = 1, digit, luhn = new String();
				do {
					digit = parseInt(cardNumber.charAt(i));
					luhn += (pos++ % 2 == 0) ? digit * 2 : digit;
				} while (--i >= 0)

				for (i = 0; i < luhn.length; i++) {
					sum += parseInt(luhn.charAt(i));
				}
				valid = sum % 10 == 0;
			}
			if (!valid) return options.allrules.creditCard.alertText;
		},
		/**
		* Ajax field validation
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		*            user options
		* @return nothing! the ajax validator handles the prompts itself
		*/
		 _ajax: function(field, rules, i, options) {

			 var errorSelector = rules[i + 1];
			 var rule = options.allrules[errorSelector];
			 var extraData = rule.extraData;
			 var extraDataDynamic = rule.extraDataDynamic;
			 var data = {
				"fieldId" : field.attr("id"),
				"fieldValue" : field.val()
			 };

			 if (typeof extraData === "object") {
				$.extend(data, extraData);
			 } else if (typeof extraData === "string") {
				var tempData = extraData.split("&");
				for(var i = 0; i < tempData.length; i++) {
					var values = tempData[i].split("=");
					if (values[0] && values[0]) {
						data[values[0]] = values[1];
					}
				}
			 }

			 if (extraDataDynamic) {
				 var tmpData = [];
				 var domIds = String(extraDataDynamic).split(",");
				 for (var i = 0; i < domIds.length; i++) {
					 var id = domIds[i];
					 if ($(id).length) {
						 var inputValue = field.closest("form, .validationEngineContainer").find(id).val();
						 var keyValue = id.replace('#', '') + '=' + escape(inputValue);
						 data[id.replace('#', '')] = inputValue;
					 }
				 }
			 }
			 
			 // If a field change event triggered this we want to clear the cache for this ID
			 if (options.eventTrigger == "field") {
				delete(options.ajaxValidCache[field.attr("id")]);
			 }

			 // If there is an error or if the the field is already validated, do not re-execute AJAX
			 if (!options.isError && !methods._checkAjaxFieldStatus(field.attr("id"), options)) {
				 $.ajax({
					 type: options.ajaxFormValidationMethod,
					 url: rule.url,
					 cache: false,
					 dataType: "json",
					 data: data,
					 field: field,
					 rule: rule,
					 methods: methods,
					 options: options,
					 beforeSend: function() {},
					 error: function(data, transport) {
						 methods._ajaxError(data, transport);
					 },
					 success: function(json) {

						 // asynchronously called on success, data is the json answer from the server
						 var errorFieldId = json[0];
						 //var errorField = $($("#" + errorFieldId)[0]);
						 var errorField = $("#"+ errorFieldId).eq(0);

						 // make sure we found the element
						 if (errorField.length == 1) {
							 var status = json[1];
							 // read the optional msg from the server
							 var msg = json[2];
							 if (!status) {
								 // Houston we got a problem - display an red prompt
								 options.ajaxValidCache[errorFieldId] = false;
								 options.isError = true;

								 // resolve the msg prompt
								 if(msg) {
									 if (options.allrules[msg]) {
										 var txt = options.allrules[msg].alertText;
										 if (txt) {
											msg = txt;
							}
									 }
								 }
								 else
									msg = rule.alertText;

								 if (options.showPrompts) methods._showPrompt(errorField, msg, "", true, options);
							 } else {
								 options.ajaxValidCache[errorFieldId] = true;

								 // resolves the msg prompt
								 if(msg) {
									 if (options.allrules[msg]) {
										 var txt = options.allrules[msg].alertTextOk;
										 if (txt) {
											msg = txt;
							}
									 }
								 }
								 else
								 msg = rule.alertTextOk;

								 if (options.showPrompts) {
									 // see if we should display a green prompt
									 if (msg)
										methods._showPrompt(errorField, msg, "pass", true, options);
									 else
										methods._closePrompt(errorField);
								}
								
								 // If a submit form triggered this, we want to re-submit the form
								 if (options.eventTrigger == "submit")
									field.closest("form").submit();
							 }
						 }
						 errorField.trigger("jqv.field.result", [errorField, options.isError, msg]);
					 }
				 });
				 
				 return rule.alertTextLoad;
			 }
		 },
		/**
		* Common method to handle ajax errors
		*
		* @param {Object} data
		* @param {Object} transport
		*/
		_ajaxError: function(data, transport) {
			if(data.status == 0 && transport == null)
				alert("The page is not served from a server! ajax call failed");
			else if(typeof console != "undefined")
				console.log("Ajax error: " + data.status + " " + transport);
		},
		/**
		* date -> string
		*
		* @param {Object} date
		*/
		_dateToString: function(date) {
			return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
		},
		/**
		* Parses an ISO date
		* @param {String} d
		*/
		_parseDate: function(d) {

			var dateParts = d.split("-");
			if(dateParts==d)
				dateParts = d.split("/");
			if(dateParts==d) {
				dateParts = d.split(".");
				return new Date(dateParts[2], (dateParts[1] - 1), dateParts[0]);
			}
			return new Date(dateParts[0], (dateParts[1] - 1) ,dateParts[2]);
		},
		/**
		* Builds or updates a prompt with the given information
		*
		* @param {jqObject} field
		* @param {String} promptText html text to display type
		* @param {String} type the type of bubble: 'pass' (green), 'load' (black) anything else (red)
		* @param {boolean} ajaxed - use to mark fields than being validated with ajax
		* @param {Map} options user options
		*/
		 _showPrompt: function(field, promptText, type, ajaxed, options, ajaxform) {
			 var prompt = methods._getPrompt(field);
			 // The ajax submit errors are not see has an error in the form,
			 // When the form errors are returned, the engine see 2 bubbles, but those are ebing closed by the engine at the same time
			 // Because no error was found befor submitting
			 if(ajaxform) prompt = false;
			 // Check that there is indded text
			 if($.trim(promptText)){ 
				 if (prompt)
					methods._updatePrompt(field, prompt, promptText, type, ajaxed, options);
				 else
					methods._buildPrompt(field, promptText, type, ajaxed, options);
			}
		 },
		/**
		* Builds and shades a prompt for the given field.
		*
		* @param {jqObject} field
		* @param {String} promptText html text to display type
		* @param {String} type the type of bubble: 'pass' (green), 'load' (black) anything else (red)
		* @param {boolean} ajaxed - use to mark fields than being validated with ajax
		* @param {Map} options user options
		*/
		_buildPrompt: function(field, promptText, type, ajaxed, options) {

			// create the prompt
			var prompt = $('<div>');
			prompt.addClass(methods._getClassName(field.attr("id")) + "formError");
			// add a class name to identify the parent form of the prompt
			prompt.addClass("parentForm"+methods._getClassName(field.closest('form, .validationEngineContainer').attr("id")));
			prompt.addClass("formError");

			switch (type) {
				case "pass":
					prompt.addClass("greenPopup");
					break;
				case "load":
					prompt.addClass("blackPopup");
					break;
				default:
					/* it has error  */
					//alert("unknown popup type:"+type);
			}
			if (ajaxed)
				prompt.addClass("ajaxed");

			// create the prompt content
			var promptContent = $('<div>').addClass("formErrorContent").html(promptText).appendTo(prompt);

			// determine position type
			var positionType=field.data("promptPosition") || options.promptPosition;

			// create the css arrow pointing at the field
			// note that there is no triangle on max-checkbox and radio
			if (options.showArrow) {
				var arrow = $('<div>').addClass("formErrorArrow");

				//prompt positioning adjustment support. Usage: positionType:Xshift,Yshift (for ex.: bottomLeft:+20 or bottomLeft:-20,+10)
				if (typeof(positionType)=='string') 
				{
					var pos=positionType.indexOf(":");
					if(pos!=-1)
						positionType=positionType.substring(0,pos);
				}

				switch (positionType) {
					case "bottomLeft":
					case "bottomRight":
						prompt.find(".formErrorContent").before(arrow);
						arrow.addClass("formErrorArrowBottom").html('<div class="line1"><!-- --></div><div class="line2"><!-- --></div><div class="line3"><!-- --></div><div class="line4"><!-- --></div><div class="line5"><!-- --></div><div class="line6"><!-- --></div><div class="line7"><!-- --></div><div class="line8"><!-- --></div><div class="line9"><!-- --></div><div class="line10"><!-- --></div>');
						break;
					case "topLeft":
					case "topRight":
						arrow.html('<div class="line10"><!-- --></div><div class="line9"><!-- --></div><div class="line8"><!-- --></div><div class="line7"><!-- --></div><div class="line6"><!-- --></div><div class="line5"><!-- --></div><div class="line4"><!-- --></div><div class="line3"><!-- --></div><div class="line2"><!-- --></div><div class="line1"><!-- --></div>');
						prompt.append(arrow);
						break;
				}
			}
			// Add custom prompt class
			if (options.addPromptClass)
				prompt.addClass(options.addPromptClass);

            // Add custom prompt class defined in element
            var requiredOverride = field.attr('data-required-class');
            if(requiredOverride !== undefined) {
                prompt.addClass(requiredOverride);
            } else {
                if(options.prettySelect) {
                    if($('#' + field.attr('id')).next().is('select')) {
                        var prettyOverrideClass = $('#' + field.attr('id').substr(options.usePrefix.length).substring(options.useSuffix.length)).attr('data-required-class');
                        if(prettyOverrideClass !== undefined) {
                            prompt.addClass(prettyOverrideClass);
                        }
                    }
                }
            }

			prompt.css({
				"opacity": 0
			});
			if(positionType === 'inline') {
				prompt.addClass("inline");
				if(typeof field.attr('data-prompt-target') !== 'undefined' && $('#'+field.attr('data-prompt-target')).length > 0) {
					prompt.appendTo($('#'+field.attr('data-prompt-target')));
				} else {
					field.after(prompt);
				}
			} else {
				field.before(prompt);				
			}
			
			var pos = methods._calculatePosition(field, prompt, options);
			prompt.css({
				'position': positionType === 'inline' ? 'relative' : 'absolute',
				"top": pos.callerTopPosition,
				"left": pos.callerleftPosition,
				"marginTop": pos.marginTopSize,
				"opacity": 0
			}).data("callerField", field);
			

			if (options.autoHidePrompt) {
				setTimeout(function(){
					prompt.animate({
						"opacity": 0
					},function(){
						prompt.closest('.formErrorOuter').remove();
						prompt.remove();
					});
				}, options.autoHideDelay);
			} 
			return prompt.animate({
				"opacity": 0.87
			});
		},
		/**
		* Updates the prompt text field - the field for which the prompt
		* @param {jqObject} field
		* @param {String} promptText html text to display type
		* @param {String} type the type of bubble: 'pass' (green), 'load' (black) anything else (red)
		* @param {boolean} ajaxed - use to mark fields than being validated with ajax
		* @param {Map} options user options
		*/
		_updatePrompt: function(field, prompt, promptText, type, ajaxed, options, noAnimation) {

			if (prompt) {
				if (typeof type !== "undefined") {
					if (type == "pass")
						prompt.addClass("greenPopup");
					else
						prompt.removeClass("greenPopup");

					if (type == "load")
						prompt.addClass("blackPopup");
					else
						prompt.removeClass("blackPopup");
				}
				if (ajaxed)
					prompt.addClass("ajaxed");
				else
					prompt.removeClass("ajaxed");

				prompt.find(".formErrorContent").html(promptText);

				var pos = methods._calculatePosition(field, prompt, options);
				var css = {"top": pos.callerTopPosition,
				"left": pos.callerleftPosition,
				"marginTop": pos.marginTopSize};

				if (noAnimation)
					prompt.css(css);
				else
					prompt.animate(css);
			}
		},
		/**
		* Closes the prompt associated with the given field
		*
		* @param {jqObject}
		*            field
		*/
		 _closePrompt: function(field) {
			 var prompt = methods._getPrompt(field);
			 if (prompt)
				 prompt.fadeTo("fast", 0, function() {
					 prompt.parent('.formErrorOuter').remove();
					 prompt.remove();
				 });
		 },
		 closePrompt: function(field) {
			 return methods._closePrompt(field);
		 },
		/**
		* Returns the error prompt matching the field if any
		*
		* @param {jqObject}
		*            field
		* @return undefined or the error prompt (jqObject)
		*/
		_getPrompt: function(field) {
				var formId = $(field).closest('form, .validationEngineContainer').attr('id');
			var className = methods._getClassName(field.attr("id")) + "formError";
				var match = $("." + methods._escapeExpression(className) + '.parentForm' + formId)[0];
			if (match)
			return $(match);
		},
		/**
		  * Returns the escapade classname
		  *
		  * @param {selector}
		  *            className
		  */
		  _escapeExpression: function (selector) {
			  return selector.replace(/([#;&,\.\+\*\~':"\!\^$\[\]\(\)=>\|])/g, "\\$1");
		  },
		/**
		 * returns true if we are in a RTLed document
		 *
		 * @param {jqObject} field
		 */
		isRTL: function(field)
		{
			var $document = $(document);
			var $body = $('body');
			var rtl =
				(field && field.hasClass('rtl')) ||
				(field && (field.attr('dir') || '').toLowerCase()==='rtl') ||
				$document.hasClass('rtl') ||
				($document.attr('dir') || '').toLowerCase()==='rtl' ||
				$body.hasClass('rtl') ||
				($body.attr('dir') || '').toLowerCase()==='rtl';
			return Boolean(rtl);
		},
		/**
		* Calculates prompt position
		*
		* @param {jqObject}
		*            field
		* @param {jqObject}
		*            the prompt
		* @param {Map}
		*            options
		* @return positions
		*/
		_calculatePosition: function (field, promptElmt, options) {

			var promptTopPosition, promptleftPosition, marginTopSize;
			var fieldWidth 	= field.width();
			var fieldLeft 	= field.position().left; 
			var fieldTop 	=  field.position().top;
			var fieldHeight 	=  field.height();	
			var promptHeight = promptElmt.height();


			// is the form contained in an overflown container?
			promptTopPosition = promptleftPosition = 0;
			// compensation for the arrow
			marginTopSize = -promptHeight;
		

			//prompt positioning adjustment support
			//now you can adjust prompt position
			//usage: positionType:Xshift,Yshift
			//for example:
			//   bottomLeft:+20 means bottomLeft position shifted by 20 pixels right horizontally
			//   topRight:20, -15 means topRight position shifted by 20 pixels to right and 15 pixels to top
			//You can use +pixels, - pixels. If no sign is provided than + is default.
			var positionType=field.data("promptPosition") || options.promptPosition;
			var shift1="";
			var shift2="";
			var shiftX=0;
			var shiftY=0;
			if (typeof(positionType)=='string') {
				//do we have any position adjustments ?
				if (positionType.indexOf(":")!=-1) {
					shift1=positionType.substring(positionType.indexOf(":")+1);
					positionType=positionType.substring(0,positionType.indexOf(":"));

					//if any advanced positioning will be needed (percents or something else) - parser should be added here
					//for now we use simple parseInt()

					//do we have second parameter?
					if (shift1.indexOf(",") !=-1) {
						shift2=shift1.substring(shift1.indexOf(",") +1);
						shift1=shift1.substring(0,shift1.indexOf(","));
						shiftY=parseInt(shift2);
						if (isNaN(shiftY)) shiftY=0;
					};

					shiftX=parseInt(shift1);
					if (isNaN(shift1)) shift1=0;

				};
			};

			
			switch (positionType) {
				default:
				case "topRight":
					promptleftPosition +=  fieldLeft + fieldWidth - 30;
					promptTopPosition +=  fieldTop;
					break;

				case "topLeft":
					promptTopPosition +=  fieldTop;
					promptleftPosition += fieldLeft; 
					break;

				case "centerRight":
					promptTopPosition = fieldTop+4;
					marginTopSize = 0;
					promptleftPosition= fieldLeft + field.outerWidth(true)+5;
					break;
				case "centerLeft":
					promptleftPosition = fieldLeft - (promptElmt.width() + 2);
					promptTopPosition = fieldTop+4;
					marginTopSize = 0;
					
					break;

				case "bottomLeft":
					promptTopPosition = fieldTop + field.height() + 5;
					marginTopSize = 0;
					promptleftPosition = fieldLeft;
					break;
				case "bottomRight":
					promptleftPosition = fieldLeft + fieldWidth - 30;
					promptTopPosition =  fieldTop +  field.height() + 5;
					marginTopSize = 0;
					break;
				case "inline":
					promptleftPosition = 0;
					promptTopPosition = 0;
					marginTopSize = 0;
			};

		

			//apply adjusments if any
			promptleftPosition += shiftX;
			promptTopPosition  += shiftY;

			return {
				"callerTopPosition": promptTopPosition + "px",
				"callerleftPosition": promptleftPosition + "px",
				"marginTopSize": marginTopSize + "px"
			};
		},
		/**
		* Saves the user options and variables in the form.data
		*
		* @param {jqObject}
		*            form - the form where the user option should be saved
		* @param {Map}
		*            options - the user options
		* @return the user options (extended from the defaults)
		*/
		 _saveOptions: function(form, options) {

			 // is there a language localisation ?
			 if ($.validationEngineLanguage)
			 var allRules = $.validationEngineLanguage.allRules;
			 else
			 $.error("jQuery.validationEngine rules are not loaded, plz add localization files to the page");
			 // --- Internals DO NOT TOUCH or OVERLOAD ---
			 // validation rules and i18
			 $.validationEngine.defaults.allrules = allRules;

			 var userOptions = $.extend(true,{},$.validationEngine.defaults,options);

			 form.data('jqv', userOptions);
			 return userOptions;
		 },

		 /**
		 * Removes forbidden characters from class name
		 * @param {String} className
		 */
		 _getClassName: function(className) {
			 if(className)
				 return className.replace(/:/g, "_").replace(/\./g, "_");
					  },
		/**
		 * Escape special character for jQuery selector
		 * http://totaldev.com/content/escaping-characters-get-valid-jquery-id
		 * @param {String} selector
		 */
		 _jqSelector: function(str){
			return str.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, '\\$1');
		},
		/**
		* Conditionally required field
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		* user options
		* @return an error string if validation failed
		*/
		_condRequired: function(field, rules, i, options) {
			var idx, dependingField;

			for(idx = (i + 1); idx < rules.length; idx++) {
				dependingField = jQuery("#" + rules[idx]).first();

				/* Use _required for determining wether dependingField has a value.
				 * There is logic there for handling all field types, and default value; so we won't replicate that here
				 * Indicate this special use by setting the last parameter to true so we only validate the dependingField on chackboxes and radio buttons (#462)
				 */
				if (dependingField.length && methods._required(dependingField, ["required"], 0, options, true) == undefined) {
					/* We now know any of the depending fields has a value,
					 * so we can validate this field as per normal required code
					 */
					return methods._required(field, ["required"], 0, options);
				}
			}
		},

	    _submitButtonClick: function(event) {
	        var button = $(this);
	        var form = button.closest('form, .validationEngineContainer');
	        form.data("jqv_submitButton", button.attr("id"));
	    }
		  };

	 /**
	 * Plugin entry point.
	 * You may pass an action as a parameter or a list of options.
	 * if none, the init and attach methods are being called.
	 * Remember: if you pass options, the attached method is NOT called automatically
	 *
	 * @param {String}
	 *            method (optional) action
	 */
	 $.fn.validationEngine = function(method) {

		 var form = $(this);
		 if(!form[0]) return form;  // stop here if the form does not exist

		 if (typeof(method) == 'string' && method.charAt(0) != '_' && methods[method]) {

			 // make sure init is called once
			 if(method != "showPrompt" && method != "hide" && method != "hideAll")
			 methods.init.apply(form);

			 return methods[method].apply(form, Array.prototype.slice.call(arguments, 1));
		 } else if (typeof method == 'object' || !method) {

			 // default constructor with or without arguments
			 methods.init.apply(form, arguments);
			 return methods.attach.apply(form);
		 } else {
			 $.error('Method ' + method + ' does not exist in jQuery.validationEngine');
		 }
	};



	// LEAK GLOBAL OPTIONS
	$.validationEngine= {fieldIdCounter: 0,defaults:{

		// Name of the event triggering field validation
		validationEventTrigger: "blur",
		// Automatically scroll viewport to the first error
		scroll: true,
		// Focus on the first input
		focusFirstField:true,
		// Show prompts, set to false to disable prompts
		showPrompts: true,
       // Should we attempt to validate non-visible input fields contained in the form? (Useful in cases of tabbed containers, e.g. jQuery-UI tabs)
       validateNonVisibleFields: false,
		// Opening box position, possible locations are: topLeft,
		// topRight, bottomLeft, centerRight, bottomRight, inline
		// inline gets inserted after the validated field or into an element specified in data-prompt-target
		promptPosition: "topRight",
		bindMethod:"bind",
		// internal, automatically set to true when it parse a _ajax rule
		inlineAjax: false,
		// if set to true, the form data is sent asynchronously via ajax to the form.action url (get)
		ajaxFormValidation: false,
		// The url to send the submit ajax validation (default to action)
		ajaxFormValidationURL: false,
		// HTTP method used for ajax validation
		ajaxFormValidationMethod: 'get',
		// Ajax form validation callback method: boolean onComplete(form, status, errors, options)
		// retuns false if the form.submit event needs to be canceled.
		onAjaxFormComplete: $.noop,
		// called right before the ajax call, may return false to cancel
		onBeforeAjaxFormValidation: $.noop,
		// Stops form from submitting and execute function assiciated with it
		onValidationComplete: false,

		// Used when you have a form fields too close and the errors messages are on top of other disturbing viewing messages
		doNotShowAllErrosOnSubmit: false,
		// Object where you store custom messages to override the default error messages
		custom_error_messages:{},
		// true if you want to vind the input fields
		binded: true,
		// set to true, when the prompt arrow needs to be displayed
		showArrow: true,
		// did one of the validation fail ? kept global to stop further ajax validations
		isError: false,
		// Limit how many displayed errors a field can have
		maxErrorsPerField: false,
		
		// Caches field validation status, typically only bad status are created.
		// the array is used during ajax form validation to detect issues early and prevent an expensive submit
		ajaxValidCache: {},
		// Auto update prompt position after window resize
		autoPositionUpdate: false,

		InvalidFields: [],
		onFieldSuccess: false,
		onFieldFailure: false,
		onSuccess: false,
		onFailure: false,
		validateAttribute: "class",
		addSuccessCssClassToField: "",
		addFailureCssClassToField: "",
		
		// Auto-hide prompt
		autoHidePrompt: false,
		// Delay before auto-hide
		autoHideDelay: 10000,
		// Fade out duration while hiding the validations
		fadeDuration: 0.3,
	 // Use Prettify select library
	 prettySelect: false,
	 // Add css class on prompt
	 addPromptClass : "",
	 // Custom ID uses prefix
	 usePrefix: "",
	 // Custom ID uses suffix
	 useSuffix: "",
	 // Only show one message per error prompt
	 showOneMessage: false
	}};
	$(function(){$.validationEngine.defaults.promptPosition = methods.isRTL()?'topLeft':"topRight"});
})(jQuery);



(function($){
	$.fn.validationEngineLanguage = function(){
	};
	$.validationEngineLanguage = {
	    newLang: function(){
	        $.validationEngineLanguage.allRules = {
	            "required": { // Add your regex rules here, you can take telephone as an example
	                "regex": "geen",
	                "alertText": "* Dit veld is verplicht",
	                "alertTextCheckboxMultiple": "* Selecteer a.u.b. een optie",
	                "alertTextCheckboxe": "* Dit selectievakje is verplicht"
	            },
	            "requiredInFunction": { 
                    "func": function(field, rules, i, options){
                        return (field.val() == "test") ? true : false;
                    },
                    "alertText": "* Field must equal test"
                	    },
	            "minSize": {
	                "regex": "none",
	                "alertText": "* Minimaal ",
	                "alertText2": " karakters toegestaan"
	            },
	            "maxSize": {
	                "regex": "none",
	                "alertText": "* Maximaal ",
	                "alertText2": " karakters toegestaan"
	            },
				"groupRequired": {
                    "regex": "none",
                    "alertText": "* You must fill one of the following fields"
                },
	            "min": {
	                "regex": "none",
	                "alertText": "* Minimale waarde is "
	            },
	            "max": {
	                "regex": "none",
	                "alertText": "* Maximale waarde is "
	            },
	            "past": {
	                "regex": "none",
	                "alertText": "* Datum voorafgaand aan "
	            },
	            "future": {
	                "regex": "none",
	                "alertText": "* Datum na "
	            },
	            "maxCheckbox": {
	                "regex": "none",
	                "alertText": "* Toegestane aantal vinkjes overschreden"
	            },
	            "minCheckbox": {
	                "regex": "none",
	                "alertText": "* Selecteer a.u.b. ",
	                "alertText2": " opties"
	            },
	            "equals": {
	                "regex": "none",
	                "alertText": "* Velden komen niet overeen"
	            },
                "creditCard": {
                    "regex": "none",
                    "alertText": "* Ongeldige credit card nummer"
                },
	            "phone": {
	                // credit: jquery.h5validate.js / orefalo
	                "regex": /^([\+][0-9]{1,3}[ \.\-])?([\(]{1}[0-9]{2,6}[\)])?([0-9 \.\-\/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/,
	                "alertText": "* Ongeldig telefoonnummer"
	            },
	            "email": {
	                // Shamelessly lifted from Scott Gonzalez via the Bassistance Validation plugin http://projects.scottsplayground.com/email_address_validation/
	                "regex": /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i,
	                "alertText": "* Ongeldig e-mailadres"
	            },
	            "integer": {
	                "regex": /^[\-\+]?\d+$/,
	                "alertText": "* Ongeldig geheel getal"
	            },
	            "number": {
	                // Number, including positive, negative, and floating decimal. credit: orefalo
	                "regex": /^[\-\+]?((([0-9]{1,3})([,][0-9]{3})*)|([0-9]+))?([\.]([0-9]+))?$/,
	                "alertText": "* Ongeldig drijvende comma getal"
	            },
	            "date": {
	                "regex": /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/,
	                "alertText": "* Ongeldige datum, formaat moet JJJJ-MM-DD zijn"
	            },
	            "ipv4": {
	            	"regex": /^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/,
	                "alertText": "* Ongeldig IP-adres"
	            },
	            "url": {
                    "regex": /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
	                "alertText": "* Ongeldige URL"
	            },
	            "onlyNumberSp": {
	                "regex": /^[0-9\ ]+$/,
	                "alertText": "* Alleen cijfers"
	            },
	            "onlyLetterSp": {
	                "regex": /^[a-zA-Z\ \']+$/,
	                "alertText": "* Alleen leestekens"
	            },
	            "onlyLetterNumber": {
	                "regex": /^[0-9a-zA-Z]+$/,
	                "alertText": "* Geen vreemde tekens toegestaan"
	            },
	            // --- CUSTOM RULES -- Those are specific to the demos, they can be removed or changed to your likings
	            "ajaxUserCall": {
	                "url": "ajaxValidateFieldUser",
	                // you may want to pass extra data on the ajax call
	                "extraData": "name=eric",
	                "alertText": "* Deze gebruiker bestaat al",
	                "alertTextLoad": "* Bezig met valideren, even geduld aub"
	            },
	            "ajaxNameCall": {
	                // remote json service location
	                "url": "ajaxValidateFieldName",
	                // error
	                "alertText": "* Deze naam bestaat al",
	                // if you provide an "alertTextOk", it will show as a green prompt when the field validates
	                "alertTextOk": "* Deze naam is beschikbaar",
	                // speaks by itself
	                "alertTextLoad": "* Bezig met valideren, even geduld aub"
	            },
	            "validate2fields": {
	                "alertText": "* Voer aub HELLO in"
	            }
	        };

	    }
	};
	$.validationEngineLanguage.newLang();
})(jQuery);


/**
 * Copyright (c) 2011-2014 Felix Gnass
 * Licensed under the MIT license
 */
(function(root, factory) {

  /* CommonJS */
  if (typeof exports == 'object')  module.exports = factory()

  /* AMD module */
  else if (typeof define == 'function' && define.amd) define(factory)

  /* Browser global */
  else root.Spinner = factory()
}
(this, function() {
  "use strict";

  var prefixes = ['webkit', 'Moz', 'ms', 'O'] /* Vendor prefixes */
    , animations = {} /* Animation rules keyed by their name */
    , useCssAnimations /* Whether to use CSS animations or setTimeout */

  /**
   * Utility function to create elements. If no tag name is given,
   * a DIV is created. Optionally properties can be passed.
   */
  function createEl(tag, prop) {
    var el = document.createElement(tag || 'div')
      , n

    for(n in prop) el[n] = prop[n]
    return el
  }

  /**
   * Appends children and returns the parent.
   */
  function ins(parent /* child1, child2, ...*/) {
    for (var i=1, n=arguments.length; i<n; i++)
      parent.appendChild(arguments[i])

    return parent
  }

  /**
   * Insert a new stylesheet to hold the @keyframe or VML rules.
   */
  var sheet = (function() {
    var el = createEl('style', {type : 'text/css'})
    ins(document.getElementsByTagName('head')[0], el)
    return el.sheet || el.styleSheet
  }())

  /**
   * Creates an opacity keyframe animation rule and returns its name.
   * Since most mobile Webkits have timing issues with animation-delay,
   * we create separate rules for each line/segment.
   */
  function addAnimation(alpha, trail, i, lines) {
    var name = ['opacity', trail, ~~(alpha*100), i, lines].join('-')
      , start = 0.01 + i/lines * 100
      , z = Math.max(1 - (1-alpha) / trail * (100-start), alpha)
      , prefix = useCssAnimations.substring(0, useCssAnimations.indexOf('Animation')).toLowerCase()
      , pre = prefix && '-' + prefix + '-' || ''

    if (!animations[name]) {
      sheet.insertRule(
        '@' + pre + 'keyframes ' + name + '{' +
        '0%{opacity:' + z + '}' +
        start + '%{opacity:' + alpha + '}' +
        (start+0.01) + '%{opacity:1}' +
        (start+trail) % 100 + '%{opacity:' + alpha + '}' +
        '100%{opacity:' + z + '}' +
        '}', sheet.cssRules.length)

      animations[name] = 1
    }

    return name
  }

  /**
   * Tries various vendor prefixes and returns the first supported property.
   */
  function vendor(el, prop) {
    var s = el.style
      , pp
      , i

    prop = prop.charAt(0).toUpperCase() + prop.slice(1)
    for(i=0; i<prefixes.length; i++) {
      pp = prefixes[i]+prop
      if(s[pp] !== undefined) return pp
    }
    if(s[prop] !== undefined) return prop
  }

  /**
   * Sets multiple style properties at once.
   */
  function css(el, prop) {
    for (var n in prop)
      el.style[vendor(el, n)||n] = prop[n]

    return el
  }

  /**
   * Fills in default values.
   */
  function merge(obj) {
    for (var i=1; i < arguments.length; i++) {
      var def = arguments[i]
      for (var n in def)
        if (obj[n] === undefined) obj[n] = def[n]
    }
    return obj
  }

  /**
   * Returns the absolute page-offset of the given element.
   */
  function pos(el) {
    var o = { x:el.offsetLeft, y:el.offsetTop }
    while((el = el.offsetParent))
      o.x+=el.offsetLeft, o.y+=el.offsetTop

    return o
  }

  /**
   * Returns the line color from the given string or array.
   */
  function getColor(color, idx) {
    return typeof color == 'string' ? color : color[idx % color.length]
  }

  // Built-in defaults

  var defaults = {
    lines: 12,            // The number of lines to draw
    length: 7,            // The length of each line
    width: 5,             // The line thickness
    radius: 10,           // The radius of the inner circle
    rotate: 0,            // Rotation offset
    corners: 1,           // Roundness (0..1)
    color: '#000',        // #rgb or #rrggbb
    direction: 1,         // 1: clockwise, -1: counterclockwise
    speed: 1,             // Rounds per second
    trail: 100,           // Afterglow percentage
    opacity: 1/4,         // Opacity of the lines
    fps: 20,              // Frames per second when using setTimeout()
    zIndex: 2e9,          // Use a high z-index by default
    className: 'spinner', // CSS class to assign to the element
    top: '50%',           // center vertically
    left: '50%',          // center horizontally
    position: 'absolute'  // element position
  }

  /** The constructor */
  function Spinner(o) {
    this.opts = merge(o || {}, Spinner.defaults, defaults)
  }

  // Global defaults that override the built-ins:
  Spinner.defaults = {}

  merge(Spinner.prototype, {

    /**
     * Adds the spinner to the given target element. If this instance is already
     * spinning, it is automatically removed from its previous target b calling
     * stop() internally.
     */
    spin: function(target) {
      this.stop()

      var self = this
        , o = self.opts
        , el = self.el = css(createEl(0, {className: o.className}), {position: o.position, width: 0, zIndex: o.zIndex})
        , mid = o.radius+o.length+o.width

      css(el, {
        left: o.left,
        top: o.top
      })
        
      if (target) {
        target.insertBefore(el, target.firstChild||null)
      }

      el.setAttribute('role', 'progressbar')
      self.lines(el, self.opts)

      if (!useCssAnimations) {
        // No CSS animation support, use setTimeout() instead
        var i = 0
          , start = (o.lines - 1) * (1 - o.direction) / 2
          , alpha
          , fps = o.fps
          , f = fps/o.speed
          , ostep = (1-o.opacity) / (f*o.trail / 100)
          , astep = f/o.lines

        ;(function anim() {
          i++;
          for (var j = 0; j < o.lines; j++) {
            alpha = Math.max(1 - (i + (o.lines - j) * astep) % f * ostep, o.opacity)

            self.opacity(el, j * o.direction + start, alpha, o)
          }
          self.timeout = self.el && setTimeout(anim, ~~(1000/fps))
        })()
      }
      return self
    },

    /**
     * Stops and removes the Spinner.
     */
    stop: function() {
      var el = this.el
      if (el) {
        clearTimeout(this.timeout)
        if (el.parentNode) el.parentNode.removeChild(el)
        this.el = undefined
      }
      return this
    },

    /**
     * Internal method that draws the individual lines. Will be overwritten
     * in VML fallback mode below.
     */
    lines: function(el, o) {
      var i = 0
        , start = (o.lines - 1) * (1 - o.direction) / 2
        , seg

      function fill(color, shadow) {
        return css(createEl(), {
          position: 'absolute',
          width: (o.length+o.width) + 'px',
          height: o.width + 'px',
          background: color,
          boxShadow: shadow,
          transformOrigin: 'left',
          transform: 'rotate(' + ~~(360/o.lines*i+o.rotate) + 'deg) translate(' + o.radius+'px' +',0)',
          borderRadius: (o.corners * o.width>>1) + 'px'
        })
      }

      for (; i < o.lines; i++) {
        seg = css(createEl(), {
          position: 'absolute',
          top: 1+~(o.width/2) + 'px',
          transform: o.hwaccel ? 'translate3d(0,0,0)' : '',
          opacity: o.opacity,
          animation: useCssAnimations && addAnimation(o.opacity, o.trail, start + i * o.direction, o.lines) + ' ' + 1/o.speed + 's linear infinite'
        })

        if (o.shadow) ins(seg, css(fill('#000', '0 0 4px ' + '#000'), {top: 2+'px'}))
        ins(el, ins(seg, fill(getColor(o.color, i), '0 0 1px rgba(0,0,0,.1)')))
      }
      return el
    },

    /**
     * Internal method that adjusts the opacity of a single line.
     * Will be overwritten in VML fallback mode below.
     */
    opacity: function(el, i, val) {
      if (i < el.childNodes.length) el.childNodes[i].style.opacity = val
    }

  })


  function initVML() {

    /* Utility function to create a VML tag */
    function vml(tag, attr) {
      return createEl('<' + tag + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', attr)
    }

    // No CSS transforms but VML support, add a CSS rule for VML elements:
    sheet.addRule('.spin-vml', 'behavior:url(#default#VML)')

    Spinner.prototype.lines = function(el, o) {
      var r = o.length+o.width
        , s = 2*r

      function grp() {
        return css(
          vml('group', {
            coordsize: s + ' ' + s,
            coordorigin: -r + ' ' + -r
          }),
          { width: s, height: s }
        )
      }

      var margin = -(o.width+o.length)*2 + 'px'
        , g = css(grp(), {position: 'absolute', top: margin, left: margin})
        , i

      function seg(i, dx, filter) {
        ins(g,
          ins(css(grp(), {rotation: 360 / o.lines * i + 'deg', left: ~~dx}),
            ins(css(vml('roundrect', {arcsize: o.corners}), {
                width: r,
                height: o.width,
                left: o.radius,
                top: -o.width>>1,
                filter: filter
              }),
              vml('fill', {color: getColor(o.color, i), opacity: o.opacity}),
              vml('stroke', {opacity: 0}) // transparent stroke to fix color bleeding upon opacity change
            )
          )
        )
      }

      if (o.shadow)
        for (i = 1; i <= o.lines; i++)
          seg(i, -2, 'progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)')

      for (i = 1; i <= o.lines; i++) seg(i)
      return ins(el, g)
    }

    Spinner.prototype.opacity = function(el, i, val, o) {
      var c = el.firstChild
      o = o.shadow && o.lines || 0
      if (c && i+o < c.childNodes.length) {
        c = c.childNodes[i+o]; c = c && c.firstChild; c = c && c.firstChild
        if (c) c.opacity = val
      }
    }
  }

  var probe = css(createEl('group'), {behavior: 'url(#default#VML)'})

  if (!vendor(probe, 'transform') && probe.adj) initVML()
  else useCssAnimations = vendor(probe, 'animation')

  return Spinner

}));

/*! Select2 4.0.3 | https://github.com/select2/select2/blob/master/LICENSE.md */!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){var b=function(){if(a&&a.fn&&a.fn.select2&&a.fn.select2.amd)var b=a.fn.select2.amd;var b;return function(){if(!b||!b.requirejs){b?c=b:b={};var a,c,d;!function(b){function e(a,b){return u.call(a,b)}function f(a,b){var c,d,e,f,g,h,i,j,k,l,m,n=b&&b.split("/"),o=s.map,p=o&&o["*"]||{};if(a&&"."===a.charAt(0))if(b){for(a=a.split("/"),g=a.length-1,s.nodeIdCompat&&w.test(a[g])&&(a[g]=a[g].replace(w,"")),a=n.slice(0,n.length-1).concat(a),k=0;k<a.length;k+=1)if(m=a[k],"."===m)a.splice(k,1),k-=1;else if(".."===m){if(1===k&&(".."===a[2]||".."===a[0]))break;k>0&&(a.splice(k-1,2),k-=2)}a=a.join("/")}else 0===a.indexOf("./")&&(a=a.substring(2));if((n||p)&&o){for(c=a.split("/"),k=c.length;k>0;k-=1){if(d=c.slice(0,k).join("/"),n)for(l=n.length;l>0;l-=1)if(e=o[n.slice(0,l).join("/")],e&&(e=e[d])){f=e,h=k;break}if(f)break;!i&&p&&p[d]&&(i=p[d],j=k)}!f&&i&&(f=i,h=j),f&&(c.splice(0,h,f),a=c.join("/"))}return a}function g(a,c){return function(){var d=v.call(arguments,0);return"string"!=typeof d[0]&&1===d.length&&d.push(null),n.apply(b,d.concat([a,c]))}}function h(a){return function(b){return f(b,a)}}function i(a){return function(b){q[a]=b}}function j(a){if(e(r,a)){var c=r[a];delete r[a],t[a]=!0,m.apply(b,c)}if(!e(q,a)&&!e(t,a))throw new Error("No "+a);return q[a]}function k(a){var b,c=a?a.indexOf("!"):-1;return c>-1&&(b=a.substring(0,c),a=a.substring(c+1,a.length)),[b,a]}function l(a){return function(){return s&&s.config&&s.config[a]||{}}}var m,n,o,p,q={},r={},s={},t={},u=Object.prototype.hasOwnProperty,v=[].slice,w=/\.js$/;o=function(a,b){var c,d=k(a),e=d[0];return a=d[1],e&&(e=f(e,b),c=j(e)),e?a=c&&c.normalize?c.normalize(a,h(b)):f(a,b):(a=f(a,b),d=k(a),e=d[0],a=d[1],e&&(c=j(e))),{f:e?e+"!"+a:a,n:a,pr:e,p:c}},p={require:function(a){return g(a)},exports:function(a){var b=q[a];return"undefined"!=typeof b?b:q[a]={}},module:function(a){return{id:a,uri:"",exports:q[a],config:l(a)}}},m=function(a,c,d,f){var h,k,l,m,n,s,u=[],v=typeof d;if(f=f||a,"undefined"===v||"function"===v){for(c=!c.length&&d.length?["require","exports","module"]:c,n=0;n<c.length;n+=1)if(m=o(c[n],f),k=m.f,"require"===k)u[n]=p.require(a);else if("exports"===k)u[n]=p.exports(a),s=!0;else if("module"===k)h=u[n]=p.module(a);else if(e(q,k)||e(r,k)||e(t,k))u[n]=j(k);else{if(!m.p)throw new Error(a+" missing "+k);m.p.load(m.n,g(f,!0),i(k),{}),u[n]=q[k]}l=d?d.apply(q[a],u):void 0,a&&(h&&h.exports!==b&&h.exports!==q[a]?q[a]=h.exports:l===b&&s||(q[a]=l))}else a&&(q[a]=d)},a=c=n=function(a,c,d,e,f){if("string"==typeof a)return p[a]?p[a](c):j(o(a,c).f);if(!a.splice){if(s=a,s.deps&&n(s.deps,s.callback),!c)return;c.splice?(a=c,c=d,d=null):a=b}return c=c||function(){},"function"==typeof d&&(d=e,e=f),e?m(b,a,c,d):setTimeout(function(){m(b,a,c,d)},4),n},n.config=function(a){return n(a)},a._defined=q,d=function(a,b,c){if("string"!=typeof a)throw new Error("See almond README: incorrect module build, no module name");b.splice||(c=b,b=[]),e(q,a)||e(r,a)||(r[a]=[a,b,c])},d.amd={jQuery:!0}}(),b.requirejs=a,b.require=c,b.define=d}}(),b.define("almond",function(){}),b.define("jquery",[],function(){var b=a||$;return null==b&&console&&console.error&&console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),b}),b.define("select2/utils",["jquery"],function(a){function b(a){var b=a.prototype,c=[];for(var d in b){var e=b[d];"function"==typeof e&&"constructor"!==d&&c.push(d)}return c}var c={};c.Extend=function(a,b){function c(){this.constructor=a}var d={}.hasOwnProperty;for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},c.Decorate=function(a,c){function d(){var b=Array.prototype.unshift,d=c.prototype.constructor.length,e=a.prototype.constructor;d>0&&(b.call(arguments,a.prototype.constructor),e=c.prototype.constructor),e.apply(this,arguments)}function e(){this.constructor=d}var f=b(c),g=b(a);c.displayName=a.displayName,d.prototype=new e;for(var h=0;h<g.length;h++){var i=g[h];d.prototype[i]=a.prototype[i]}for(var j=(function(a){var b=function(){};a in d.prototype&&(b=d.prototype[a]);var e=c.prototype[a];return function(){var a=Array.prototype.unshift;return a.call(arguments,b),e.apply(this,arguments)}}),k=0;k<f.length;k++){var l=f[k];d.prototype[l]=j(l)}return d};var d=function(){this.listeners={}};return d.prototype.on=function(a,b){this.listeners=this.listeners||{},a in this.listeners?this.listeners[a].push(b):this.listeners[a]=[b]},d.prototype.trigger=function(a){var b=Array.prototype.slice,c=b.call(arguments,1);this.listeners=this.listeners||{},null==c&&(c=[]),0===c.length&&c.push({}),c[0]._type=a,a in this.listeners&&this.invoke(this.listeners[a],b.call(arguments,1)),"*"in this.listeners&&this.invoke(this.listeners["*"],arguments)},d.prototype.invoke=function(a,b){for(var c=0,d=a.length;d>c;c++)a[c].apply(this,b)},c.Observable=d,c.generateChars=function(a){for(var b="",c=0;a>c;c++){var d=Math.floor(36*Math.random());b+=d.toString(36)}return b},c.bind=function(a,b){return function(){a.apply(b,arguments)}},c._convertData=function(a){for(var b in a){var c=b.split("-"),d=a;if(1!==c.length){for(var e=0;e<c.length;e++){var f=c[e];f=f.substring(0,1).toLowerCase()+f.substring(1),f in d||(d[f]={}),e==c.length-1&&(d[f]=a[b]),d=d[f]}delete a[b]}}return a},c.hasScroll=function(b,c){var d=a(c),e=c.style.overflowX,f=c.style.overflowY;return e!==f||"hidden"!==f&&"visible"!==f?"scroll"===e||"scroll"===f?!0:d.innerHeight()<c.scrollHeight||d.innerWidth()<c.scrollWidth:!1},c.escapeMarkup=function(a){var b={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return"string"!=typeof a?a:String(a).replace(/[&<>"'\/\\]/g,function(a){return b[a]})},c.appendMany=function(b,c){if("1.7"===a.fn.jquery.substr(0,3)){var d=a();a.map(c,function(a){d=d.add(a)}),c=d}b.append(c)},c}),b.define("select2/results",["jquery","./utils"],function(a,b){function c(a,b,d){this.$element=a,this.data=d,this.options=b,c.__super__.constructor.call(this)}return b.Extend(c,b.Observable),c.prototype.render=function(){var b=a('<ul class="select2-results__options" role="tree"></ul>');return this.options.get("multiple")&&b.attr("aria-multiselectable","true"),this.$results=b,b},c.prototype.clear=function(){this.$results.empty()},c.prototype.displayMessage=function(b){var c=this.options.get("escapeMarkup");this.clear(),this.hideLoading();var d=a('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),e=this.options.get("translations").get(b.message);d.append(c(e(b.args))),d[0].className+=" select2-results__message",this.$results.append(d)},c.prototype.hideMessages=function(){this.$results.find(".select2-results__message").remove()},c.prototype.append=function(a){this.hideLoading();var b=[];if(null==a.results||0===a.results.length)return void(0===this.$results.children().length&&this.trigger("results:message",{message:"noResults"}));a.results=this.sort(a.results);for(var c=0;c<a.results.length;c++){var d=a.results[c],e=this.option(d);b.push(e)}this.$results.append(b)},c.prototype.position=function(a,b){var c=b.find(".select2-results");c.append(a)},c.prototype.sort=function(a){var b=this.options.get("sorter");return b(a)},c.prototype.highlightFirstItem=function(){var a=this.$results.find(".select2-results__option[aria-selected]"),b=a.filter("[aria-selected=true]");b.length>0?b.first().trigger("mouseenter"):a.first().trigger("mouseenter"),this.ensureHighlightVisible()},c.prototype.setClasses=function(){var b=this;this.data.current(function(c){var d=a.map(c,function(a){return a.id.toString()}),e=b.$results.find(".select2-results__option[aria-selected]");e.each(function(){var b=a(this),c=a.data(this,"data"),e=""+c.id;null!=c.element&&c.element.selected||null==c.element&&a.inArray(e,d)>-1?b.attr("aria-selected","true"):b.attr("aria-selected","false")})})},c.prototype.showLoading=function(a){this.hideLoading();var b=this.options.get("translations").get("searching"),c={disabled:!0,loading:!0,text:b(a)},d=this.option(c);d.className+=" loading-results",this.$results.prepend(d)},c.prototype.hideLoading=function(){this.$results.find(".loading-results").remove()},c.prototype.option=function(b){var c=document.createElement("li");c.className="select2-results__option";var d={role:"treeitem","aria-selected":"false"};b.disabled&&(delete d["aria-selected"],d["aria-disabled"]="true"),null==b.id&&delete d["aria-selected"],null!=b._resultId&&(c.id=b._resultId),b.title&&(c.title=b.title),b.children&&(d.role="group",d["aria-label"]=b.text,delete d["aria-selected"]);for(var e in d){var f=d[e];c.setAttribute(e,f)}if(b.children){var g=a(c),h=document.createElement("strong");h.className="select2-results__group";a(h);this.template(b,h);for(var i=[],j=0;j<b.children.length;j++){var k=b.children[j],l=this.option(k);i.push(l)}var m=a("<ul></ul>",{"class":"select2-results__options select2-results__options--nested"});m.append(i),g.append(h),g.append(m)}else this.template(b,c);return a.data(c,"data",b),c},c.prototype.bind=function(b,c){var d=this,e=b.id+"-results";this.$results.attr("id",e),b.on("results:all",function(a){d.clear(),d.append(a.data),b.isOpen()&&(d.setClasses(),d.highlightFirstItem())}),b.on("results:append",function(a){d.append(a.data),b.isOpen()&&d.setClasses()}),b.on("query",function(a){d.hideMessages(),d.showLoading(a)}),b.on("select",function(){b.isOpen()&&(d.setClasses(),d.highlightFirstItem())}),b.on("unselect",function(){b.isOpen()&&(d.setClasses(),d.highlightFirstItem())}),b.on("open",function(){d.$results.attr("aria-expanded","true"),d.$results.attr("aria-hidden","false"),d.setClasses(),d.ensureHighlightVisible()}),b.on("close",function(){d.$results.attr("aria-expanded","false"),d.$results.attr("aria-hidden","true"),d.$results.removeAttr("aria-activedescendant")}),b.on("results:toggle",function(){var a=d.getHighlightedResults();0!==a.length&&a.trigger("mouseup")}),b.on("results:select",function(){var a=d.getHighlightedResults();if(0!==a.length){var b=a.data("data");"true"==a.attr("aria-selected")?d.trigger("close",{}):d.trigger("select",{data:b})}}),b.on("results:previous",function(){var a=d.getHighlightedResults(),b=d.$results.find("[aria-selected]"),c=b.index(a);if(0!==c){var e=c-1;0===a.length&&(e=0);var f=b.eq(e);f.trigger("mouseenter");var g=d.$results.offset().top,h=f.offset().top,i=d.$results.scrollTop()+(h-g);0===e?d.$results.scrollTop(0):0>h-g&&d.$results.scrollTop(i)}}),b.on("results:next",function(){var a=d.getHighlightedResults(),b=d.$results.find("[aria-selected]"),c=b.index(a),e=c+1;if(!(e>=b.length)){var f=b.eq(e);f.trigger("mouseenter");var g=d.$results.offset().top+d.$results.outerHeight(!1),h=f.offset().top+f.outerHeight(!1),i=d.$results.scrollTop()+h-g;0===e?d.$results.scrollTop(0):h>g&&d.$results.scrollTop(i)}}),b.on("results:focus",function(a){a.element.addClass("select2-results__option--highlighted")}),b.on("results:message",function(a){d.displayMessage(a)}),a.fn.mousewheel&&this.$results.on("mousewheel",function(a){var b=d.$results.scrollTop(),c=d.$results.get(0).scrollHeight-b+a.deltaY,e=a.deltaY>0&&b-a.deltaY<=0,f=a.deltaY<0&&c<=d.$results.height();e?(d.$results.scrollTop(0),a.preventDefault(),a.stopPropagation()):f&&(d.$results.scrollTop(d.$results.get(0).scrollHeight-d.$results.height()),a.preventDefault(),a.stopPropagation())}),this.$results.on("mouseup",".select2-results__option[aria-selected]",function(b){var c=a(this),e=c.data("data");return"true"===c.attr("aria-selected")?void(d.options.get("multiple")?d.trigger("unselect",{originalEvent:b,data:e}):d.trigger("close",{})):void d.trigger("select",{originalEvent:b,data:e})}),this.$results.on("mouseenter",".select2-results__option[aria-selected]",function(b){var c=a(this).data("data");d.getHighlightedResults().removeClass("select2-results__option--highlighted"),d.trigger("results:focus",{data:c,element:a(this)})})},c.prototype.getHighlightedResults=function(){var a=this.$results.find(".select2-results__option--highlighted");return a},c.prototype.destroy=function(){this.$results.remove()},c.prototype.ensureHighlightVisible=function(){var a=this.getHighlightedResults();if(0!==a.length){var b=this.$results.find("[aria-selected]"),c=b.index(a),d=this.$results.offset().top,e=a.offset().top,f=this.$results.scrollTop()+(e-d),g=e-d;f-=2*a.outerHeight(!1),2>=c?this.$results.scrollTop(0):(g>this.$results.outerHeight()||0>g)&&this.$results.scrollTop(f)}},c.prototype.template=function(b,c){var d=this.options.get("templateResult"),e=this.options.get("escapeMarkup"),f=d(b,c);null==f?c.style.display="none":"string"==typeof f?c.innerHTML=e(f):a(c).append(f)},c}),b.define("select2/keys",[],function(){var a={BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46};return a}),b.define("select2/selection/base",["jquery","../utils","../keys"],function(a,b,c){function d(a,b){this.$element=a,this.options=b,d.__super__.constructor.call(this)}return b.Extend(d,b.Observable),d.prototype.render=function(){var b=a('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');return this._tabindex=0,null!=this.$element.data("old-tabindex")?this._tabindex=this.$element.data("old-tabindex"):null!=this.$element.attr("tabindex")&&(this._tabindex=this.$element.attr("tabindex")),b.attr("title",this.$element.attr("title")),b.attr("tabindex",this._tabindex),this.$selection=b,b},d.prototype.bind=function(a,b){var d=this,e=(a.id+"-container",a.id+"-results");this.container=a,this.$selection.on("focus",function(a){d.trigger("focus",a)}),this.$selection.on("blur",function(a){d._handleBlur(a)}),this.$selection.on("keydown",function(a){d.trigger("keypress",a),a.which===c.SPACE&&a.preventDefault()}),a.on("results:focus",function(a){d.$selection.attr("aria-activedescendant",a.data._resultId)}),a.on("selection:update",function(a){d.update(a.data)}),a.on("open",function(){d.$selection.attr("aria-expanded","true"),d.$selection.attr("aria-owns",e),d._attachCloseHandler(a)}),a.on("close",function(){d.$selection.attr("aria-expanded","false"),d.$selection.removeAttr("aria-activedescendant"),d.$selection.removeAttr("aria-owns"),d.$selection.focus(),d._detachCloseHandler(a)}),a.on("enable",function(){d.$selection.attr("tabindex",d._tabindex)}),a.on("disable",function(){d.$selection.attr("tabindex","-1")})},d.prototype._handleBlur=function(b){var c=this;window.setTimeout(function(){document.activeElement==c.$selection[0]||a.contains(c.$selection[0],document.activeElement)||c.trigger("blur",b)},1)},d.prototype._attachCloseHandler=function(b){a(document.body).on("mousedown.select2."+b.id,function(b){var c=a(b.target),d=c.closest(".select2"),e=a(".select2.select2-container--open");e.each(function(){var b=a(this);if(this!=d[0]){var c=b.data("element");c.select2("close")}})})},d.prototype._detachCloseHandler=function(b){a(document.body).off("mousedown.select2."+b.id)},d.prototype.position=function(a,b){var c=b.find(".selection");c.append(a)},d.prototype.destroy=function(){this._detachCloseHandler(this.container)},d.prototype.update=function(a){throw new Error("The `update` method must be defined in child classes.")},d}),b.define("select2/selection/single",["jquery","./base","../utils","../keys"],function(a,b,c,d){function e(){e.__super__.constructor.apply(this,arguments)}return c.Extend(e,b),e.prototype.render=function(){var a=e.__super__.render.call(this);return a.addClass("select2-selection--single"),a.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),a},e.prototype.bind=function(a,b){var c=this;e.__super__.bind.apply(this,arguments);var d=a.id+"-container";this.$selection.find(".select2-selection__rendered").attr("id",d),this.$selection.attr("aria-labelledby",d),this.$selection.on("mousedown",function(a){1===a.which&&c.trigger("toggle",{originalEvent:a})}),this.$selection.on("focus",function(a){}),this.$selection.on("blur",function(a){}),a.on("focus",function(b){a.isOpen()||c.$selection.focus()}),a.on("selection:update",function(a){c.update(a.data)})},e.prototype.clear=function(){this.$selection.find(".select2-selection__rendered").empty()},e.prototype.display=function(a,b){var c=this.options.get("templateSelection"),d=this.options.get("escapeMarkup");return d(c(a,b))},e.prototype.selectionContainer=function(){return a("<span></span>")},e.prototype.update=function(a){if(0===a.length)return void this.clear();var b=a[0],c=this.$selection.find(".select2-selection__rendered"),d=this.display(b,c);c.empty().append(d),c.prop("title",b.title||b.text)},e}),b.define("select2/selection/multiple",["jquery","./base","../utils"],function(a,b,c){function d(a,b){d.__super__.constructor.apply(this,arguments)}return c.Extend(d,b),d.prototype.render=function(){var a=d.__super__.render.call(this);return a.addClass("select2-selection--multiple"),a.html('<ul class="select2-selection__rendered"></ul>'),a},d.prototype.bind=function(b,c){var e=this;d.__super__.bind.apply(this,arguments),this.$selection.on("click",function(a){e.trigger("toggle",{originalEvent:a})}),this.$selection.on("click",".select2-selection__choice__remove",function(b){if(!e.options.get("disabled")){var c=a(this),d=c.parent(),f=d.data("data");e.trigger("unselect",{originalEvent:b,data:f})}})},d.prototype.clear=function(){this.$selection.find(".select2-selection__rendered").empty()},d.prototype.display=function(a,b){var c=this.options.get("templateSelection"),d=this.options.get("escapeMarkup");return d(c(a,b))},d.prototype.selectionContainer=function(){var b=a('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>');return b},d.prototype.update=function(a){if(this.clear(),0!==a.length){for(var b=[],d=0;d<a.length;d++){var e=a[d],f=this.selectionContainer(),g=this.display(e,f);f.append(g),f.prop("title",e.title||e.text),f.data("data",e),b.push(f)}var h=this.$selection.find(".select2-selection__rendered");c.appendMany(h,b)}},d}),b.define("select2/selection/placeholder",["../utils"],function(a){function b(a,b,c){this.placeholder=this.normalizePlaceholder(c.get("placeholder")),a.call(this,b,c)}return b.prototype.normalizePlaceholder=function(a,b){return"string"==typeof b&&(b={id:"",text:b}),b},b.prototype.createPlaceholder=function(a,b){var c=this.selectionContainer();return c.html(this.display(b)),c.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"),c},b.prototype.update=function(a,b){var c=1==b.length&&b[0].id!=this.placeholder.id,d=b.length>1;if(d||c)return a.call(this,b);this.clear();var e=this.createPlaceholder(this.placeholder);this.$selection.find(".select2-selection__rendered").append(e)},b}),b.define("select2/selection/allowClear",["jquery","../keys"],function(a,b){function c(){}return c.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),null==this.placeholder&&this.options.get("debug")&&window.console&&console.error&&console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),this.$selection.on("mousedown",".select2-selection__clear",function(a){d._handleClear(a)}),b.on("keypress",function(a){d._handleKeyboardClear(a,b)})},c.prototype._handleClear=function(a,b){if(!this.options.get("disabled")){var c=this.$selection.find(".select2-selection__clear");if(0!==c.length){b.stopPropagation();for(var d=c.data("data"),e=0;e<d.length;e++){var f={data:d[e]};if(this.trigger("unselect",f),f.prevented)return}this.$element.val(this.placeholder.id).trigger("change"),this.trigger("toggle",{})}}},c.prototype._handleKeyboardClear=function(a,c,d){d.isOpen()||(c.which==b.DELETE||c.which==b.BACKSPACE)&&this._handleClear(c)},c.prototype.update=function(b,c){if(b.call(this,c),!(this.$selection.find(".select2-selection__placeholder").length>0||0===c.length)){var d=a('<span class="select2-selection__clear">&times;</span>');d.data("data",c),this.$selection.find(".select2-selection__rendered").prepend(d)}},c}),b.define("select2/selection/search",["jquery","../utils","../keys"],function(a,b,c){function d(a,b,c){a.call(this,b,c)}return d.prototype.render=function(b){var c=a('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');this.$searchContainer=c,this.$search=c.find("input");var d=b.call(this);return this._transferTabIndex(),d},d.prototype.bind=function(a,b,d){var e=this;a.call(this,b,d),b.on("open",function(){e.$search.trigger("focus")}),b.on("close",function(){e.$search.val(""),e.$search.removeAttr("aria-activedescendant"),e.$search.trigger("focus")}),b.on("enable",function(){e.$search.prop("disabled",!1),e._transferTabIndex()}),b.on("disable",function(){e.$search.prop("disabled",!0)}),b.on("focus",function(a){e.$search.trigger("focus")}),b.on("results:focus",function(a){e.$search.attr("aria-activedescendant",a.id)}),this.$selection.on("focusin",".select2-search--inline",function(a){e.trigger("focus",a)}),this.$selection.on("focusout",".select2-search--inline",function(a){e._handleBlur(a)}),this.$selection.on("keydown",".select2-search--inline",function(a){a.stopPropagation(),e.trigger("keypress",a),e._keyUpPrevented=a.isDefaultPrevented();var b=a.which;if(b===c.BACKSPACE&&""===e.$search.val()){var d=e.$searchContainer.prev(".select2-selection__choice");if(d.length>0){var f=d.data("data");e.searchRemoveChoice(f),a.preventDefault()}}});var f=document.documentMode,g=f&&11>=f;this.$selection.on("input.searchcheck",".select2-search--inline",function(a){return g?void e.$selection.off("input.search input.searchcheck"):void e.$selection.off("keyup.search")}),this.$selection.on("keyup.search input.search",".select2-search--inline",function(a){if(g&&"input"===a.type)return void e.$selection.off("input.search input.searchcheck");var b=a.which;b!=c.SHIFT&&b!=c.CTRL&&b!=c.ALT&&b!=c.TAB&&e.handleSearch(a)})},d.prototype._transferTabIndex=function(a){this.$search.attr("tabindex",this.$selection.attr("tabindex")),this.$selection.attr("tabindex","-1")},d.prototype.createPlaceholder=function(a,b){this.$search.attr("placeholder",b.text)},d.prototype.update=function(a,b){var c=this.$search[0]==document.activeElement;this.$search.attr("placeholder",""),a.call(this,b),this.$selection.find(".select2-selection__rendered").append(this.$searchContainer),this.resizeSearch(),c&&this.$search.focus()},d.prototype.handleSearch=function(){if(this.resizeSearch(),!this._keyUpPrevented){var a=this.$search.val();this.trigger("query",{term:a})}this._keyUpPrevented=!1},d.prototype.searchRemoveChoice=function(a,b){this.trigger("unselect",{data:b}),this.$search.val(b.text),this.handleSearch()},d.prototype.resizeSearch=function(){this.$search.css("width","25px");var a="";if(""!==this.$search.attr("placeholder"))a=this.$selection.find(".select2-selection__rendered").innerWidth();else{var b=this.$search.val().length+1;a=.75*b+"em"}this.$search.css("width",a)},d}),b.define("select2/selection/eventRelay",["jquery"],function(a){function b(){}return b.prototype.bind=function(b,c,d){var e=this,f=["open","opening","close","closing","select","selecting","unselect","unselecting"],g=["opening","closing","selecting","unselecting"];b.call(this,c,d),c.on("*",function(b,c){if(-1!==a.inArray(b,f)){c=c||{};var d=a.Event("select2:"+b,{params:c});e.$element.trigger(d),-1!==a.inArray(b,g)&&(c.prevented=d.isDefaultPrevented())}})},b}),b.define("select2/translation",["jquery","require"],function(a,b){function c(a){this.dict=a||{}}return c.prototype.all=function(){return this.dict},c.prototype.get=function(a){return this.dict[a]},c.prototype.extend=function(b){this.dict=a.extend({},b.all(),this.dict)},c._cache={},c.loadPath=function(a){if(!(a in c._cache)){var d=b(a);c._cache[a]=d}return new c(c._cache[a])},c}),b.define("select2/diacritics",[],function(){var a={"Ⓐ":"A","Ａ":"A","À":"A","Á":"A","Â":"A","Ầ":"A","Ấ":"A","Ẫ":"A","Ẩ":"A","Ã":"A","Ā":"A","Ă":"A","Ằ":"A","Ắ":"A","Ẵ":"A","Ẳ":"A","Ȧ":"A","Ǡ":"A","Ä":"A","Ǟ":"A","Ả":"A","Å":"A","Ǻ":"A","Ǎ":"A","Ȁ":"A","Ȃ":"A","Ạ":"A","Ậ":"A","Ặ":"A","Ḁ":"A","Ą":"A","Ⱥ":"A","Ɐ":"A","Ꜳ":"AA","Æ":"AE","Ǽ":"AE","Ǣ":"AE","Ꜵ":"AO","Ꜷ":"AU","Ꜹ":"AV","Ꜻ":"AV","Ꜽ":"AY","Ⓑ":"B","Ｂ":"B","Ḃ":"B","Ḅ":"B","Ḇ":"B","Ƀ":"B","Ƃ":"B","Ɓ":"B","Ⓒ":"C","Ｃ":"C","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","Ç":"C","Ḉ":"C","Ƈ":"C","Ȼ":"C","Ꜿ":"C","Ⓓ":"D","Ｄ":"D","Ḋ":"D","Ď":"D","Ḍ":"D","Ḑ":"D","Ḓ":"D","Ḏ":"D","Đ":"D","Ƌ":"D","Ɗ":"D","Ɖ":"D","Ꝺ":"D","Ǳ":"DZ","Ǆ":"DZ","ǲ":"Dz","ǅ":"Dz","Ⓔ":"E","Ｅ":"E","È":"E","É":"E","Ê":"E","Ề":"E","Ế":"E","Ễ":"E","Ể":"E","Ẽ":"E","Ē":"E","Ḕ":"E","Ḗ":"E","Ĕ":"E","Ė":"E","Ë":"E","Ẻ":"E","Ě":"E","Ȅ":"E","Ȇ":"E","Ẹ":"E","Ệ":"E","Ȩ":"E","Ḝ":"E","Ę":"E","Ḙ":"E","Ḛ":"E","Ɛ":"E","Ǝ":"E","Ⓕ":"F","Ｆ":"F","Ḟ":"F","Ƒ":"F","Ꝼ":"F","Ⓖ":"G","Ｇ":"G","Ǵ":"G","Ĝ":"G","Ḡ":"G","Ğ":"G","Ġ":"G","Ǧ":"G","Ģ":"G","Ǥ":"G","Ɠ":"G","Ꞡ":"G","Ᵹ":"G","Ꝿ":"G","Ⓗ":"H","Ｈ":"H","Ĥ":"H","Ḣ":"H","Ḧ":"H","Ȟ":"H","Ḥ":"H","Ḩ":"H","Ḫ":"H","Ħ":"H","Ⱨ":"H","Ⱶ":"H","Ɥ":"H","Ⓘ":"I","Ｉ":"I","Ì":"I","Í":"I","Î":"I","Ĩ":"I","Ī":"I","Ĭ":"I","İ":"I","Ï":"I","Ḯ":"I","Ỉ":"I","Ǐ":"I","Ȉ":"I","Ȋ":"I","Ị":"I","Į":"I","Ḭ":"I","Ɨ":"I","Ⓙ":"J","Ｊ":"J","Ĵ":"J","Ɉ":"J","Ⓚ":"K","Ｋ":"K","Ḱ":"K","Ǩ":"K","Ḳ":"K","Ķ":"K","Ḵ":"K","Ƙ":"K","Ⱪ":"K","Ꝁ":"K","Ꝃ":"K","Ꝅ":"K","Ꞣ":"K","Ⓛ":"L","Ｌ":"L","Ŀ":"L","Ĺ":"L","Ľ":"L","Ḷ":"L","Ḹ":"L","Ļ":"L","Ḽ":"L","Ḻ":"L","Ł":"L","Ƚ":"L","Ɫ":"L","Ⱡ":"L","Ꝉ":"L","Ꝇ":"L","Ꞁ":"L","Ǉ":"LJ","ǈ":"Lj","Ⓜ":"M","Ｍ":"M","Ḿ":"M","Ṁ":"M","Ṃ":"M","Ɱ":"M","Ɯ":"M","Ⓝ":"N","Ｎ":"N","Ǹ":"N","Ń":"N","Ñ":"N","Ṅ":"N","Ň":"N","Ṇ":"N","Ņ":"N","Ṋ":"N","Ṉ":"N","Ƞ":"N","Ɲ":"N","Ꞑ":"N","Ꞥ":"N","Ǌ":"NJ","ǋ":"Nj","Ⓞ":"O","Ｏ":"O","Ò":"O","Ó":"O","Ô":"O","Ồ":"O","Ố":"O","Ỗ":"O","Ổ":"O","Õ":"O","Ṍ":"O","Ȭ":"O","Ṏ":"O","Ō":"O","Ṑ":"O","Ṓ":"O","Ŏ":"O","Ȯ":"O","Ȱ":"O","Ö":"O","Ȫ":"O","Ỏ":"O","Ő":"O","Ǒ":"O","Ȍ":"O","Ȏ":"O","Ơ":"O","Ờ":"O","Ớ":"O","Ỡ":"O","Ở":"O","Ợ":"O","Ọ":"O","Ộ":"O","Ǫ":"O","Ǭ":"O","Ø":"O","Ǿ":"O","Ɔ":"O","Ɵ":"O","Ꝋ":"O","Ꝍ":"O","Ƣ":"OI","Ꝏ":"OO","Ȣ":"OU","Ⓟ":"P","Ｐ":"P","Ṕ":"P","Ṗ":"P","Ƥ":"P","Ᵽ":"P","Ꝑ":"P","Ꝓ":"P","Ꝕ":"P","Ⓠ":"Q","Ｑ":"Q","Ꝗ":"Q","Ꝙ":"Q","Ɋ":"Q","Ⓡ":"R","Ｒ":"R","Ŕ":"R","Ṙ":"R","Ř":"R","Ȑ":"R","Ȓ":"R","Ṛ":"R","Ṝ":"R","Ŗ":"R","Ṟ":"R","Ɍ":"R","Ɽ":"R","Ꝛ":"R","Ꞧ":"R","Ꞃ":"R","Ⓢ":"S","Ｓ":"S","ẞ":"S","Ś":"S","Ṥ":"S","Ŝ":"S","Ṡ":"S","Š":"S","Ṧ":"S","Ṣ":"S","Ṩ":"S","Ș":"S","Ş":"S","Ȿ":"S","Ꞩ":"S","Ꞅ":"S","Ⓣ":"T","Ｔ":"T","Ṫ":"T","Ť":"T","Ṭ":"T","Ț":"T","Ţ":"T","Ṱ":"T","Ṯ":"T","Ŧ":"T","Ƭ":"T","Ʈ":"T","Ⱦ":"T","Ꞇ":"T","Ꜩ":"TZ","Ⓤ":"U","Ｕ":"U","Ù":"U","Ú":"U","Û":"U","Ũ":"U","Ṹ":"U","Ū":"U","Ṻ":"U","Ŭ":"U","Ü":"U","Ǜ":"U","Ǘ":"U","Ǖ":"U","Ǚ":"U","Ủ":"U","Ů":"U","Ű":"U","Ǔ":"U","Ȕ":"U","Ȗ":"U","Ư":"U","Ừ":"U","Ứ":"U","Ữ":"U","Ử":"U","Ự":"U","Ụ":"U","Ṳ":"U","Ų":"U","Ṷ":"U","Ṵ":"U","Ʉ":"U","Ⓥ":"V","Ｖ":"V","Ṽ":"V","Ṿ":"V","Ʋ":"V","Ꝟ":"V","Ʌ":"V","Ꝡ":"VY","Ⓦ":"W","Ｗ":"W","Ẁ":"W","Ẃ":"W","Ŵ":"W","Ẇ":"W","Ẅ":"W","Ẉ":"W","Ⱳ":"W","Ⓧ":"X","Ｘ":"X","Ẋ":"X","Ẍ":"X","Ⓨ":"Y","Ｙ":"Y","Ỳ":"Y","Ý":"Y","Ŷ":"Y","Ỹ":"Y","Ȳ":"Y","Ẏ":"Y","Ÿ":"Y","Ỷ":"Y","Ỵ":"Y","Ƴ":"Y","Ɏ":"Y","Ỿ":"Y","Ⓩ":"Z","Ｚ":"Z","Ź":"Z","Ẑ":"Z","Ż":"Z","Ž":"Z","Ẓ":"Z","Ẕ":"Z","Ƶ":"Z","Ȥ":"Z","Ɀ":"Z","Ⱬ":"Z","Ꝣ":"Z","ⓐ":"a","ａ":"a","ẚ":"a","à":"a","á":"a","â":"a","ầ":"a","ấ":"a","ẫ":"a","ẩ":"a","ã":"a","ā":"a","ă":"a","ằ":"a","ắ":"a","ẵ":"a","ẳ":"a","ȧ":"a","ǡ":"a","ä":"a","ǟ":"a","ả":"a","å":"a","ǻ":"a","ǎ":"a","ȁ":"a","ȃ":"a","ạ":"a","ậ":"a","ặ":"a","ḁ":"a","ą":"a","ⱥ":"a","ɐ":"a","ꜳ":"aa","æ":"ae","ǽ":"ae","ǣ":"ae","ꜵ":"ao","ꜷ":"au","ꜹ":"av","ꜻ":"av","ꜽ":"ay","ⓑ":"b","ｂ":"b","ḃ":"b","ḅ":"b","ḇ":"b","ƀ":"b","ƃ":"b","ɓ":"b","ⓒ":"c","ｃ":"c","ć":"c","ĉ":"c","ċ":"c","č":"c","ç":"c","ḉ":"c","ƈ":"c","ȼ":"c","ꜿ":"c","ↄ":"c","ⓓ":"d","ｄ":"d","ḋ":"d","ď":"d","ḍ":"d","ḑ":"d","ḓ":"d","ḏ":"d","đ":"d","ƌ":"d","ɖ":"d","ɗ":"d","ꝺ":"d","ǳ":"dz","ǆ":"dz","ⓔ":"e","ｅ":"e","è":"e","é":"e","ê":"e","ề":"e","ế":"e","ễ":"e","ể":"e","ẽ":"e","ē":"e","ḕ":"e","ḗ":"e","ĕ":"e","ė":"e","ë":"e","ẻ":"e","ě":"e","ȅ":"e","ȇ":"e","ẹ":"e","ệ":"e","ȩ":"e","ḝ":"e","ę":"e","ḙ":"e","ḛ":"e","ɇ":"e","ɛ":"e","ǝ":"e","ⓕ":"f","ｆ":"f","ḟ":"f","ƒ":"f","ꝼ":"f","ⓖ":"g","ｇ":"g","ǵ":"g","ĝ":"g","ḡ":"g","ğ":"g","ġ":"g","ǧ":"g","ģ":"g","ǥ":"g","ɠ":"g","ꞡ":"g","ᵹ":"g","ꝿ":"g","ⓗ":"h","ｈ":"h","ĥ":"h","ḣ":"h","ḧ":"h","ȟ":"h","ḥ":"h","ḩ":"h","ḫ":"h","ẖ":"h","ħ":"h","ⱨ":"h","ⱶ":"h","ɥ":"h","ƕ":"hv","ⓘ":"i","ｉ":"i","ì":"i","í":"i","î":"i","ĩ":"i","ī":"i","ĭ":"i","ï":"i","ḯ":"i","ỉ":"i","ǐ":"i","ȉ":"i","ȋ":"i","ị":"i","į":"i","ḭ":"i","ɨ":"i","ı":"i","ⓙ":"j","ｊ":"j","ĵ":"j","ǰ":"j","ɉ":"j","ⓚ":"k","ｋ":"k","ḱ":"k","ǩ":"k","ḳ":"k","ķ":"k","ḵ":"k","ƙ":"k","ⱪ":"k","ꝁ":"k","ꝃ":"k","ꝅ":"k","ꞣ":"k","ⓛ":"l","ｌ":"l","ŀ":"l","ĺ":"l","ľ":"l","ḷ":"l","ḹ":"l","ļ":"l","ḽ":"l","ḻ":"l","ſ":"l","ł":"l","ƚ":"l","ɫ":"l","ⱡ":"l","ꝉ":"l","ꞁ":"l","ꝇ":"l","ǉ":"lj","ⓜ":"m","ｍ":"m","ḿ":"m","ṁ":"m","ṃ":"m","ɱ":"m","ɯ":"m","ⓝ":"n","ｎ":"n","ǹ":"n","ń":"n","ñ":"n","ṅ":"n","ň":"n","ṇ":"n","ņ":"n","ṋ":"n","ṉ":"n","ƞ":"n","ɲ":"n","ŉ":"n","ꞑ":"n","ꞥ":"n","ǌ":"nj","ⓞ":"o","ｏ":"o","ò":"o","ó":"o","ô":"o","ồ":"o","ố":"o","ỗ":"o","ổ":"o","õ":"o","ṍ":"o","ȭ":"o","ṏ":"o","ō":"o","ṑ":"o","ṓ":"o","ŏ":"o","ȯ":"o","ȱ":"o","ö":"o","ȫ":"o","ỏ":"o","ő":"o","ǒ":"o","ȍ":"o","ȏ":"o","ơ":"o","ờ":"o","ớ":"o","ỡ":"o","ở":"o","ợ":"o","ọ":"o","ộ":"o","ǫ":"o","ǭ":"o","ø":"o","ǿ":"o","ɔ":"o","ꝋ":"o","ꝍ":"o","ɵ":"o","ƣ":"oi","ȣ":"ou","ꝏ":"oo","ⓟ":"p","ｐ":"p","ṕ":"p","ṗ":"p","ƥ":"p","ᵽ":"p","ꝑ":"p","ꝓ":"p","ꝕ":"p","ⓠ":"q","ｑ":"q","ɋ":"q","ꝗ":"q","ꝙ":"q","ⓡ":"r","ｒ":"r","ŕ":"r","ṙ":"r","ř":"r","ȑ":"r","ȓ":"r","ṛ":"r","ṝ":"r","ŗ":"r","ṟ":"r","ɍ":"r","ɽ":"r","ꝛ":"r","ꞧ":"r","ꞃ":"r","ⓢ":"s","ｓ":"s","ß":"s","ś":"s","ṥ":"s","ŝ":"s","ṡ":"s","š":"s","ṧ":"s","ṣ":"s","ṩ":"s","ș":"s","ş":"s","ȿ":"s","ꞩ":"s","ꞅ":"s","ẛ":"s","ⓣ":"t","ｔ":"t","ṫ":"t","ẗ":"t","ť":"t","ṭ":"t","ț":"t","ţ":"t","ṱ":"t","ṯ":"t","ŧ":"t","ƭ":"t","ʈ":"t","ⱦ":"t","ꞇ":"t","ꜩ":"tz","ⓤ":"u","ｕ":"u","ù":"u","ú":"u","û":"u","ũ":"u","ṹ":"u","ū":"u","ṻ":"u","ŭ":"u","ü":"u","ǜ":"u","ǘ":"u","ǖ":"u","ǚ":"u","ủ":"u","ů":"u","ű":"u","ǔ":"u","ȕ":"u","ȗ":"u","ư":"u","ừ":"u","ứ":"u","ữ":"u","ử":"u","ự":"u","ụ":"u","ṳ":"u","ų":"u","ṷ":"u","ṵ":"u","ʉ":"u","ⓥ":"v","ｖ":"v","ṽ":"v","ṿ":"v","ʋ":"v","ꝟ":"v","ʌ":"v","ꝡ":"vy","ⓦ":"w","ｗ":"w","ẁ":"w","ẃ":"w","ŵ":"w","ẇ":"w","ẅ":"w","ẘ":"w","ẉ":"w","ⱳ":"w","ⓧ":"x","ｘ":"x","ẋ":"x","ẍ":"x","ⓨ":"y","ｙ":"y","ỳ":"y","ý":"y","ŷ":"y","ỹ":"y","ȳ":"y","ẏ":"y","ÿ":"y","ỷ":"y","ẙ":"y","ỵ":"y","ƴ":"y","ɏ":"y","ỿ":"y","ⓩ":"z","ｚ":"z","ź":"z","ẑ":"z","ż":"z","ž":"z","ẓ":"z","ẕ":"z","ƶ":"z","ȥ":"z","ɀ":"z","ⱬ":"z","ꝣ":"z","Ά":"Α","Έ":"Ε","Ή":"Η","Ί":"Ι","Ϊ":"Ι","Ό":"Ο","Ύ":"Υ","Ϋ":"Υ","Ώ":"Ω","ά":"α","έ":"ε","ή":"η","ί":"ι","ϊ":"ι","ΐ":"ι","ό":"ο","ύ":"υ","ϋ":"υ","ΰ":"υ","ω":"ω","ς":"σ"};return a}),b.define("select2/data/base",["../utils"],function(a){function b(a,c){b.__super__.constructor.call(this)}return a.Extend(b,a.Observable),b.prototype.current=function(a){throw new Error("The `current` method must be defined in child classes.")},b.prototype.query=function(a,b){throw new Error("The `query` method must be defined in child classes.")},b.prototype.bind=function(a,b){},b.prototype.destroy=function(){},b.prototype.generateResultId=function(b,c){var d=b.id+"-result-";return d+=a.generateChars(4),d+=null!=c.id?"-"+c.id.toString():"-"+a.generateChars(4)},b}),b.define("select2/data/select",["./base","../utils","jquery"],function(a,b,c){function d(a,b){this.$element=a,this.options=b,d.__super__.constructor.call(this)}return b.Extend(d,a),d.prototype.current=function(a){var b=[],d=this;this.$element.find(":selected").each(function(){var a=c(this),e=d.item(a);b.push(e)}),a(b)},d.prototype.select=function(a){var b=this;if(a.selected=!0,c(a.element).is("option"))return a.element.selected=!0,void this.$element.trigger("change");
if(this.$element.prop("multiple"))this.current(function(d){var e=[];a=[a],a.push.apply(a,d);for(var f=0;f<a.length;f++){var g=a[f].id;-1===c.inArray(g,e)&&e.push(g)}b.$element.val(e),b.$element.trigger("change")});else{var d=a.id;this.$element.val(d),this.$element.trigger("change")}},d.prototype.unselect=function(a){var b=this;if(this.$element.prop("multiple"))return a.selected=!1,c(a.element).is("option")?(a.element.selected=!1,void this.$element.trigger("change")):void this.current(function(d){for(var e=[],f=0;f<d.length;f++){var g=d[f].id;g!==a.id&&-1===c.inArray(g,e)&&e.push(g)}b.$element.val(e),b.$element.trigger("change")})},d.prototype.bind=function(a,b){var c=this;this.container=a,a.on("select",function(a){c.select(a.data)}),a.on("unselect",function(a){c.unselect(a.data)})},d.prototype.destroy=function(){this.$element.find("*").each(function(){c.removeData(this,"data")})},d.prototype.query=function(a,b){var d=[],e=this,f=this.$element.children();f.each(function(){var b=c(this);if(b.is("option")||b.is("optgroup")){var f=e.item(b),g=e.matches(a,f);null!==g&&d.push(g)}}),b({results:d})},d.prototype.addOptions=function(a){b.appendMany(this.$element,a)},d.prototype.option=function(a){var b;a.children?(b=document.createElement("optgroup"),b.label=a.text):(b=document.createElement("option"),void 0!==b.textContent?b.textContent=a.text:b.innerText=a.text),a.id&&(b.value=a.id),a.disabled&&(b.disabled=!0),a.selected&&(b.selected=!0),a.title&&(b.title=a.title);var d=c(b),e=this._normalizeItem(a);return e.element=b,c.data(b,"data",e),d},d.prototype.item=function(a){var b={};if(b=c.data(a[0],"data"),null!=b)return b;if(a.is("option"))b={id:a.val(),text:a.text(),disabled:a.prop("disabled"),selected:a.prop("selected"),title:a.prop("title")};else if(a.is("optgroup")){b={text:a.prop("label"),children:[],title:a.prop("title")};for(var d=a.children("option"),e=[],f=0;f<d.length;f++){var g=c(d[f]),h=this.item(g);e.push(h)}b.children=e}return b=this._normalizeItem(b),b.element=a[0],c.data(a[0],"data",b),b},d.prototype._normalizeItem=function(a){c.isPlainObject(a)||(a={id:a,text:a}),a=c.extend({},{text:""},a);var b={selected:!1,disabled:!1};return null!=a.id&&(a.id=a.id.toString()),null!=a.text&&(a.text=a.text.toString()),null==a._resultId&&a.id&&null!=this.container&&(a._resultId=this.generateResultId(this.container,a)),c.extend({},b,a)},d.prototype.matches=function(a,b){var c=this.options.get("matcher");return c(a,b)},d}),b.define("select2/data/array",["./select","../utils","jquery"],function(a,b,c){function d(a,b){var c=b.get("data")||[];d.__super__.constructor.call(this,a,b),this.addOptions(this.convertToOptions(c))}return b.Extend(d,a),d.prototype.select=function(a){var b=this.$element.find("option").filter(function(b,c){return c.value==a.id.toString()});0===b.length&&(b=this.option(a),this.addOptions(b)),d.__super__.select.call(this,a)},d.prototype.convertToOptions=function(a){function d(a){return function(){return c(this).val()==a.id}}for(var e=this,f=this.$element.find("option"),g=f.map(function(){return e.item(c(this)).id}).get(),h=[],i=0;i<a.length;i++){var j=this._normalizeItem(a[i]);if(c.inArray(j.id,g)>=0){var k=f.filter(d(j)),l=this.item(k),m=c.extend(!0,{},j,l),n=this.option(m);k.replaceWith(n)}else{var o=this.option(j);if(j.children){var p=this.convertToOptions(j.children);b.appendMany(o,p)}h.push(o)}}return h},d}),b.define("select2/data/ajax",["./array","../utils","jquery"],function(a,b,c){function d(a,b){this.ajaxOptions=this._applyDefaults(b.get("ajax")),null!=this.ajaxOptions.processResults&&(this.processResults=this.ajaxOptions.processResults),d.__super__.constructor.call(this,a,b)}return b.Extend(d,a),d.prototype._applyDefaults=function(a){var b={data:function(a){return c.extend({},a,{q:a.term})},transport:function(a,b,d){var e=c.ajax(a);return e.then(b),e.fail(d),e}};return c.extend({},b,a,!0)},d.prototype.processResults=function(a){return a},d.prototype.query=function(a,b){function d(){var d=f.transport(f,function(d){var f=e.processResults(d,a);e.options.get("debug")&&window.console&&console.error&&(f&&f.results&&c.isArray(f.results)||console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")),b(f)},function(){d.status&&"0"===d.status||e.trigger("results:message",{message:"errorLoading"})});e._request=d}var e=this;null!=this._request&&(c.isFunction(this._request.abort)&&this._request.abort(),this._request=null);var f=c.extend({type:"GET"},this.ajaxOptions);"function"==typeof f.url&&(f.url=f.url.call(this.$element,a)),"function"==typeof f.data&&(f.data=f.data.call(this.$element,a)),this.ajaxOptions.delay&&null!=a.term?(this._queryTimeout&&window.clearTimeout(this._queryTimeout),this._queryTimeout=window.setTimeout(d,this.ajaxOptions.delay)):d()},d}),b.define("select2/data/tags",["jquery"],function(a){function b(b,c,d){var e=d.get("tags"),f=d.get("createTag");void 0!==f&&(this.createTag=f);var g=d.get("insertTag");if(void 0!==g&&(this.insertTag=g),b.call(this,c,d),a.isArray(e))for(var h=0;h<e.length;h++){var i=e[h],j=this._normalizeItem(i),k=this.option(j);this.$element.append(k)}}return b.prototype.query=function(a,b,c){function d(a,f){for(var g=a.results,h=0;h<g.length;h++){var i=g[h],j=null!=i.children&&!d({results:i.children},!0),k=i.text===b.term;if(k||j)return f?!1:(a.data=g,void c(a))}if(f)return!0;var l=e.createTag(b);if(null!=l){var m=e.option(l);m.attr("data-select2-tag",!0),e.addOptions([m]),e.insertTag(g,l)}a.results=g,c(a)}var e=this;return this._removeOldTags(),null==b.term||null!=b.page?void a.call(this,b,c):void a.call(this,b,d)},b.prototype.createTag=function(b,c){var d=a.trim(c.term);return""===d?null:{id:d,text:d}},b.prototype.insertTag=function(a,b,c){b.unshift(c)},b.prototype._removeOldTags=function(b){var c=(this._lastTag,this.$element.find("option[data-select2-tag]"));c.each(function(){this.selected||a(this).remove()})},b}),b.define("select2/data/tokenizer",["jquery"],function(a){function b(a,b,c){var d=c.get("tokenizer");void 0!==d&&(this.tokenizer=d),a.call(this,b,c)}return b.prototype.bind=function(a,b,c){a.call(this,b,c),this.$search=b.dropdown.$search||b.selection.$search||c.find(".select2-search__field")},b.prototype.query=function(b,c,d){function e(b){var c=g._normalizeItem(b),d=g.$element.find("option").filter(function(){return a(this).val()===c.id});if(!d.length){var e=g.option(c);e.attr("data-select2-tag",!0),g._removeOldTags(),g.addOptions([e])}f(c)}function f(a){g.trigger("select",{data:a})}var g=this;c.term=c.term||"";var h=this.tokenizer(c,this.options,e);h.term!==c.term&&(this.$search.length&&(this.$search.val(h.term),this.$search.focus()),c.term=h.term),b.call(this,c,d)},b.prototype.tokenizer=function(b,c,d,e){for(var f=d.get("tokenSeparators")||[],g=c.term,h=0,i=this.createTag||function(a){return{id:a.term,text:a.term}};h<g.length;){var j=g[h];if(-1!==a.inArray(j,f)){var k=g.substr(0,h),l=a.extend({},c,{term:k}),m=i(l);null!=m?(e(m),g=g.substr(h+1)||"",h=0):h++}else h++}return{term:g}},b}),b.define("select2/data/minimumInputLength",[],function(){function a(a,b,c){this.minimumInputLength=c.get("minimumInputLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){return b.term=b.term||"",b.term.length<this.minimumInputLength?void this.trigger("results:message",{message:"inputTooShort",args:{minimum:this.minimumInputLength,input:b.term,params:b}}):void a.call(this,b,c)},a}),b.define("select2/data/maximumInputLength",[],function(){function a(a,b,c){this.maximumInputLength=c.get("maximumInputLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){return b.term=b.term||"",this.maximumInputLength>0&&b.term.length>this.maximumInputLength?void this.trigger("results:message",{message:"inputTooLong",args:{maximum:this.maximumInputLength,input:b.term,params:b}}):void a.call(this,b,c)},a}),b.define("select2/data/maximumSelectionLength",[],function(){function a(a,b,c){this.maximumSelectionLength=c.get("maximumSelectionLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){var d=this;this.current(function(e){var f=null!=e?e.length:0;return d.maximumSelectionLength>0&&f>=d.maximumSelectionLength?void d.trigger("results:message",{message:"maximumSelected",args:{maximum:d.maximumSelectionLength}}):void a.call(d,b,c)})},a}),b.define("select2/dropdown",["jquery","./utils"],function(a,b){function c(a,b){this.$element=a,this.options=b,c.__super__.constructor.call(this)}return b.Extend(c,b.Observable),c.prototype.render=function(){var b=a('<span class="select2-dropdown"><span class="select2-results"></span></span>');return b.attr("dir",this.options.get("dir")),this.$dropdown=b,b},c.prototype.bind=function(){},c.prototype.position=function(a,b){},c.prototype.destroy=function(){this.$dropdown.remove()},c}),b.define("select2/dropdown/search",["jquery","../utils"],function(a,b){function c(){}return c.prototype.render=function(b){var c=b.call(this),d=a('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');return this.$searchContainer=d,this.$search=d.find("input"),c.prepend(d),c},c.prototype.bind=function(b,c,d){var e=this;b.call(this,c,d),this.$search.on("keydown",function(a){e.trigger("keypress",a),e._keyUpPrevented=a.isDefaultPrevented()}),this.$search.on("input",function(b){a(this).off("keyup")}),this.$search.on("keyup input",function(a){e.handleSearch(a)}),c.on("open",function(){e.$search.attr("tabindex",0),e.$search.focus(),window.setTimeout(function(){e.$search.focus()},0)}),c.on("close",function(){e.$search.attr("tabindex",-1),e.$search.val("")}),c.on("focus",function(){c.isOpen()&&e.$search.focus()}),c.on("results:all",function(a){if(null==a.query.term||""===a.query.term){var b=e.showSearch(a);b?e.$searchContainer.removeClass("select2-search--hide"):e.$searchContainer.addClass("select2-search--hide")}})},c.prototype.handleSearch=function(a){if(!this._keyUpPrevented){var b=this.$search.val();this.trigger("query",{term:b})}this._keyUpPrevented=!1},c.prototype.showSearch=function(a,b){return!0},c}),b.define("select2/dropdown/hidePlaceholder",[],function(){function a(a,b,c,d){this.placeholder=this.normalizePlaceholder(c.get("placeholder")),a.call(this,b,c,d)}return a.prototype.append=function(a,b){b.results=this.removePlaceholder(b.results),a.call(this,b)},a.prototype.normalizePlaceholder=function(a,b){return"string"==typeof b&&(b={id:"",text:b}),b},a.prototype.removePlaceholder=function(a,b){for(var c=b.slice(0),d=b.length-1;d>=0;d--){var e=b[d];this.placeholder.id===e.id&&c.splice(d,1)}return c},a}),b.define("select2/dropdown/infiniteScroll",["jquery"],function(a){function b(a,b,c,d){this.lastParams={},a.call(this,b,c,d),this.$loadingMore=this.createLoadingMore(),this.loading=!1}return b.prototype.append=function(a,b){this.$loadingMore.remove(),this.loading=!1,a.call(this,b),this.showLoadingMore(b)&&this.$results.append(this.$loadingMore)},b.prototype.bind=function(b,c,d){var e=this;b.call(this,c,d),c.on("query",function(a){e.lastParams=a,e.loading=!0}),c.on("query:append",function(a){e.lastParams=a,e.loading=!0}),this.$results.on("scroll",function(){var b=a.contains(document.documentElement,e.$loadingMore[0]);if(!e.loading&&b){var c=e.$results.offset().top+e.$results.outerHeight(!1),d=e.$loadingMore.offset().top+e.$loadingMore.outerHeight(!1);c+50>=d&&e.loadMore()}})},b.prototype.loadMore=function(){this.loading=!0;var b=a.extend({},{page:1},this.lastParams);b.page++,this.trigger("query:append",b)},b.prototype.showLoadingMore=function(a,b){return b.pagination&&b.pagination.more},b.prototype.createLoadingMore=function(){var b=a('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),c=this.options.get("translations").get("loadingMore");return b.html(c(this.lastParams)),b},b}),b.define("select2/dropdown/attachBody",["jquery","../utils"],function(a,b){function c(b,c,d){this.$dropdownParent=d.get("dropdownParent")||a(document.body),b.call(this,c,d)}return c.prototype.bind=function(a,b,c){var d=this,e=!1;a.call(this,b,c),b.on("open",function(){d._showDropdown(),d._attachPositioningHandler(b),e||(e=!0,b.on("results:all",function(){d._positionDropdown(),d._resizeDropdown()}),b.on("results:append",function(){d._positionDropdown(),d._resizeDropdown()}))}),b.on("close",function(){d._hideDropdown(),d._detachPositioningHandler(b)}),this.$dropdownContainer.on("mousedown",function(a){a.stopPropagation()})},c.prototype.destroy=function(a){a.call(this),this.$dropdownContainer.remove()},c.prototype.position=function(a,b,c){b.attr("class",c.attr("class")),b.removeClass("select2"),b.addClass("select2-container--open"),b.css({position:"absolute",top:-999999}),this.$container=c},c.prototype.render=function(b){var c=a("<span></span>"),d=b.call(this);return c.append(d),this.$dropdownContainer=c,c},c.prototype._hideDropdown=function(a){this.$dropdownContainer.detach()},c.prototype._attachPositioningHandler=function(c,d){var e=this,f="scroll.select2."+d.id,g="resize.select2."+d.id,h="orientationchange.select2."+d.id,i=this.$container.parents().filter(b.hasScroll);i.each(function(){a(this).data("select2-scroll-position",{x:a(this).scrollLeft(),y:a(this).scrollTop()})}),i.on(f,function(b){var c=a(this).data("select2-scroll-position");a(this).scrollTop(c.y)}),a(window).on(f+" "+g+" "+h,function(a){e._positionDropdown(),e._resizeDropdown()})},c.prototype._detachPositioningHandler=function(c,d){var e="scroll.select2."+d.id,f="resize.select2."+d.id,g="orientationchange.select2."+d.id,h=this.$container.parents().filter(b.hasScroll);h.off(e),a(window).off(e+" "+f+" "+g)},c.prototype._positionDropdown=function(){var b=a(window),c=this.$dropdown.hasClass("select2-dropdown--above"),d=this.$dropdown.hasClass("select2-dropdown--below"),e=null,f=this.$container.offset();f.bottom=f.top+this.$container.outerHeight(!1);var g={height:this.$container.outerHeight(!1)};g.top=f.top,g.bottom=f.top+g.height;var h={height:this.$dropdown.outerHeight(!1)},i={top:b.scrollTop(),bottom:b.scrollTop()+b.height()},j=i.top<f.top-h.height,k=i.bottom>f.bottom+h.height,l={left:f.left,top:g.bottom},m=this.$dropdownParent;"static"===m.css("position")&&(m=m.offsetParent());var n=m.offset();l.top-=n.top,l.left-=n.left,c||d||(e="below"),k||!j||c?!j&&k&&c&&(e="below"):e="above",("above"==e||c&&"below"!==e)&&(l.top=g.top-n.top-h.height),null!=e&&(this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--"+e),this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--"+e)),this.$dropdownContainer.css(l)},c.prototype._resizeDropdown=function(){var a={width:this.$container.outerWidth(!1)+"px"};this.options.get("dropdownAutoWidth")&&(a.minWidth=a.width,a.position="relative",a.width="auto"),this.$dropdown.css(a)},c.prototype._showDropdown=function(a){this.$dropdownContainer.appendTo(this.$dropdownParent),this._positionDropdown(),this._resizeDropdown()},c}),b.define("select2/dropdown/minimumResultsForSearch",[],function(){function a(b){for(var c=0,d=0;d<b.length;d++){var e=b[d];e.children?c+=a(e.children):c++}return c}function b(a,b,c,d){this.minimumResultsForSearch=c.get("minimumResultsForSearch"),this.minimumResultsForSearch<0&&(this.minimumResultsForSearch=1/0),a.call(this,b,c,d)}return b.prototype.showSearch=function(b,c){return a(c.data.results)<this.minimumResultsForSearch?!1:b.call(this,c)},b}),b.define("select2/dropdown/selectOnClose",[],function(){function a(){}return a.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),b.on("close",function(a){d._handleSelectOnClose(a)})},a.prototype._handleSelectOnClose=function(a,b){if(b&&null!=b.originalSelect2Event){var c=b.originalSelect2Event;if("select"===c._type||"unselect"===c._type)return}var d=this.getHighlightedResults();if(!(d.length<1)){var e=d.data("data");null!=e.element&&e.element.selected||null==e.element&&e.selected||this.trigger("select",{data:e})}},a}),b.define("select2/dropdown/closeOnSelect",[],function(){function a(){}return a.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),b.on("select",function(a){d._selectTriggered(a)}),b.on("unselect",function(a){d._selectTriggered(a)})},a.prototype._selectTriggered=function(a,b){var c=b.originalEvent;c&&c.ctrlKey||this.trigger("close",{originalEvent:c,originalSelect2Event:b})},a}),b.define("select2/i18n/en",[],function(){return{errorLoading:function(){return"The results could not be loaded."},inputTooLong:function(a){var b=a.input.length-a.maximum,c="Please delete "+b+" character";return 1!=b&&(c+="s"),c},inputTooShort:function(a){var b=a.minimum-a.input.length,c="Please enter "+b+" or more characters";return c},loadingMore:function(){return"Loading more results…"},maximumSelected:function(a){var b="You can only select "+a.maximum+" item";return 1!=a.maximum&&(b+="s"),b},noResults:function(){return"No results found"},searching:function(){return"Searching…"}}}),b.define("select2/defaults",["jquery","require","./results","./selection/single","./selection/multiple","./selection/placeholder","./selection/allowClear","./selection/search","./selection/eventRelay","./utils","./translation","./diacritics","./data/select","./data/array","./data/ajax","./data/tags","./data/tokenizer","./data/minimumInputLength","./data/maximumInputLength","./data/maximumSelectionLength","./dropdown","./dropdown/search","./dropdown/hidePlaceholder","./dropdown/infiniteScroll","./dropdown/attachBody","./dropdown/minimumResultsForSearch","./dropdown/selectOnClose","./dropdown/closeOnSelect","./i18n/en"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C){function D(){this.reset()}D.prototype.apply=function(l){if(l=a.extend(!0,{},this.defaults,l),null==l.dataAdapter){if(null!=l.ajax?l.dataAdapter=o:null!=l.data?l.dataAdapter=n:l.dataAdapter=m,l.minimumInputLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,r)),l.maximumInputLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,s)),l.maximumSelectionLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,t)),l.tags&&(l.dataAdapter=j.Decorate(l.dataAdapter,p)),(null!=l.tokenSeparators||null!=l.tokenizer)&&(l.dataAdapter=j.Decorate(l.dataAdapter,q)),null!=l.query){var C=b(l.amdBase+"compat/query");l.dataAdapter=j.Decorate(l.dataAdapter,C)}if(null!=l.initSelection){var D=b(l.amdBase+"compat/initSelection");l.dataAdapter=j.Decorate(l.dataAdapter,D)}}if(null==l.resultsAdapter&&(l.resultsAdapter=c,null!=l.ajax&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,x)),null!=l.placeholder&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,w)),l.selectOnClose&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,A))),null==l.dropdownAdapter){if(l.multiple)l.dropdownAdapter=u;else{var E=j.Decorate(u,v);l.dropdownAdapter=E}if(0!==l.minimumResultsForSearch&&(l.dropdownAdapter=j.Decorate(l.dropdownAdapter,z)),l.closeOnSelect&&(l.dropdownAdapter=j.Decorate(l.dropdownAdapter,B)),null!=l.dropdownCssClass||null!=l.dropdownCss||null!=l.adaptDropdownCssClass){var F=b(l.amdBase+"compat/dropdownCss");l.dropdownAdapter=j.Decorate(l.dropdownAdapter,F)}l.dropdownAdapter=j.Decorate(l.dropdownAdapter,y)}if(null==l.selectionAdapter){if(l.multiple?l.selectionAdapter=e:l.selectionAdapter=d,null!=l.placeholder&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,f)),l.allowClear&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,g)),l.multiple&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,h)),null!=l.containerCssClass||null!=l.containerCss||null!=l.adaptContainerCssClass){var G=b(l.amdBase+"compat/containerCss");l.selectionAdapter=j.Decorate(l.selectionAdapter,G)}l.selectionAdapter=j.Decorate(l.selectionAdapter,i)}if("string"==typeof l.language)if(l.language.indexOf("-")>0){var H=l.language.split("-"),I=H[0];l.language=[l.language,I]}else l.language=[l.language];if(a.isArray(l.language)){var J=new k;l.language.push("en");for(var K=l.language,L=0;L<K.length;L++){var M=K[L],N={};try{N=k.loadPath(M)}catch(O){try{M=this.defaults.amdLanguageBase+M,N=k.loadPath(M)}catch(P){l.debug&&window.console&&console.warn&&console.warn('Select2: The language file for "'+M+'" could not be automatically loaded. A fallback will be used instead.');continue}}J.extend(N)}l.translations=J}else{var Q=k.loadPath(this.defaults.amdLanguageBase+"en"),R=new k(l.language);R.extend(Q),l.translations=R}return l},D.prototype.reset=function(){function b(a){function b(a){return l[a]||a}return a.replace(/[^\u0000-\u007E]/g,b)}function c(d,e){if(""===a.trim(d.term))return e;if(e.children&&e.children.length>0){for(var f=a.extend(!0,{},e),g=e.children.length-1;g>=0;g--){var h=e.children[g],i=c(d,h);null==i&&f.children.splice(g,1)}return f.children.length>0?f:c(d,f)}var j=b(e.text).toUpperCase(),k=b(d.term).toUpperCase();return j.indexOf(k)>-1?e:null}this.defaults={amdBase:"./",amdLanguageBase:"./i18n/",closeOnSelect:!0,debug:!1,dropdownAutoWidth:!1,escapeMarkup:j.escapeMarkup,language:C,matcher:c,minimumInputLength:0,maximumInputLength:0,maximumSelectionLength:0,minimumResultsForSearch:0,selectOnClose:!1,sorter:function(a){return a},templateResult:function(a){return a.text},templateSelection:function(a){return a.text},theme:"default",width:"resolve"}},D.prototype.set=function(b,c){var d=a.camelCase(b),e={};e[d]=c;var f=j._convertData(e);a.extend(this.defaults,f)};var E=new D;return E}),b.define("select2/options",["require","jquery","./defaults","./utils"],function(a,b,c,d){function e(b,e){if(this.options=b,null!=e&&this.fromElement(e),this.options=c.apply(this.options),e&&e.is("input")){var f=a(this.get("amdBase")+"compat/inputData");this.options.dataAdapter=d.Decorate(this.options.dataAdapter,f)}}return e.prototype.fromElement=function(a){var c=["select2"];null==this.options.multiple&&(this.options.multiple=a.prop("multiple")),null==this.options.disabled&&(this.options.disabled=a.prop("disabled")),null==this.options.language&&(a.prop("lang")?this.options.language=a.prop("lang").toLowerCase():a.closest("[lang]").prop("lang")&&(this.options.language=a.closest("[lang]").prop("lang"))),null==this.options.dir&&(a.prop("dir")?this.options.dir=a.prop("dir"):a.closest("[dir]").prop("dir")?this.options.dir=a.closest("[dir]").prop("dir"):this.options.dir="ltr"),a.prop("disabled",this.options.disabled),a.prop("multiple",this.options.multiple),a.data("select2Tags")&&(this.options.debug&&window.console&&console.warn&&console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),a.data("data",a.data("select2Tags")),a.data("tags",!0)),a.data("ajaxUrl")&&(this.options.debug&&window.console&&console.warn&&console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),a.attr("ajax--url",a.data("ajaxUrl")),a.data("ajax--url",a.data("ajaxUrl")));var e={};e=b.fn.jquery&&"1."==b.fn.jquery.substr(0,2)&&a[0].dataset?b.extend(!0,{},a[0].dataset,a.data()):a.data();var f=b.extend(!0,{},e);f=d._convertData(f);for(var g in f)b.inArray(g,c)>-1||(b.isPlainObject(this.options[g])?b.extend(this.options[g],f[g]):this.options[g]=f[g]);return this},e.prototype.get=function(a){return this.options[a]},e.prototype.set=function(a,b){this.options[a]=b},e}),b.define("select2/core",["jquery","./options","./utils","./keys"],function(a,b,c,d){var e=function(a,c){null!=a.data("select2")&&a.data("select2").destroy(),this.$element=a,this.id=this._generateId(a),c=c||{},this.options=new b(c,a),e.__super__.constructor.call(this);var d=a.attr("tabindex")||0;a.data("old-tabindex",d),a.attr("tabindex","-1");var f=this.options.get("dataAdapter");this.dataAdapter=new f(a,this.options);var g=this.render();this._placeContainer(g);var h=this.options.get("selectionAdapter");this.selection=new h(a,this.options),this.$selection=this.selection.render(),this.selection.position(this.$selection,g);var i=this.options.get("dropdownAdapter");this.dropdown=new i(a,this.options),this.$dropdown=this.dropdown.render(),this.dropdown.position(this.$dropdown,g);var j=this.options.get("resultsAdapter");this.results=new j(a,this.options,this.dataAdapter),this.$results=this.results.render(),this.results.position(this.$results,this.$dropdown);var k=this;this._bindAdapters(),this._registerDomEvents(),this._registerDataEvents(),this._registerSelectionEvents(),this._registerDropdownEvents(),this._registerResultsEvents(),this._registerEvents(),this.dataAdapter.current(function(a){k.trigger("selection:update",{data:a})}),a.addClass("select2-hidden-accessible"),a.attr("aria-hidden","true"),this._syncAttributes(),a.data("select2",this)};return c.Extend(e,c.Observable),e.prototype._generateId=function(a){var b="";return b=null!=a.attr("id")?a.attr("id"):null!=a.attr("name")?a.attr("name")+"-"+c.generateChars(2):c.generateChars(4),b=b.replace(/(:|\.|\[|\]|,)/g,""),b="select2-"+b},e.prototype._placeContainer=function(a){a.insertAfter(this.$element);var b=this._resolveWidth(this.$element,this.options.get("width"));null!=b&&a.css("width",b)},e.prototype._resolveWidth=function(a,b){var c=/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;if("resolve"==b){var d=this._resolveWidth(a,"style");return null!=d?d:this._resolveWidth(a,"element")}if("element"==b){var e=a.outerWidth(!1);return 0>=e?"auto":e+"px"}if("style"==b){var f=a.attr("style");if("string"!=typeof f)return null;for(var g=f.split(";"),h=0,i=g.length;i>h;h+=1){var j=g[h].replace(/\s/g,""),k=j.match(c);if(null!==k&&k.length>=1)return k[1]}return null}return b},e.prototype._bindAdapters=function(){this.dataAdapter.bind(this,this.$container),this.selection.bind(this,this.$container),this.dropdown.bind(this,this.$container),this.results.bind(this,this.$container)},e.prototype._registerDomEvents=function(){var b=this;this.$element.on("change.select2",function(){b.dataAdapter.current(function(a){b.trigger("selection:update",{data:a})})}),this.$element.on("focus.select2",function(a){b.trigger("focus",a)}),this._syncA=c.bind(this._syncAttributes,this),this._syncS=c.bind(this._syncSubtree,this),this.$element[0].attachEvent&&this.$element[0].attachEvent("onpropertychange",this._syncA);var d=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;null!=d?(this._observer=new d(function(c){a.each(c,b._syncA),a.each(c,b._syncS)}),this._observer.observe(this.$element[0],{attributes:!0,childList:!0,subtree:!1})):this.$element[0].addEventListener&&(this.$element[0].addEventListener("DOMAttrModified",b._syncA,!1),this.$element[0].addEventListener("DOMNodeInserted",b._syncS,!1),this.$element[0].addEventListener("DOMNodeRemoved",b._syncS,!1))},e.prototype._registerDataEvents=function(){var a=this;this.dataAdapter.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerSelectionEvents=function(){var b=this,c=["toggle","focus"];this.selection.on("toggle",function(){b.toggleDropdown()}),this.selection.on("focus",function(a){b.focus(a)}),this.selection.on("*",function(d,e){-1===a.inArray(d,c)&&b.trigger(d,e)})},e.prototype._registerDropdownEvents=function(){var a=this;this.dropdown.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerResultsEvents=function(){var a=this;this.results.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerEvents=function(){var a=this;this.on("open",function(){a.$container.addClass("select2-container--open")}),this.on("close",function(){a.$container.removeClass("select2-container--open")}),this.on("enable",function(){a.$container.removeClass("select2-container--disabled")}),this.on("disable",function(){a.$container.addClass("select2-container--disabled")}),this.on("blur",function(){a.$container.removeClass("select2-container--focus")}),this.on("query",function(b){a.isOpen()||a.trigger("open",{}),this.dataAdapter.query(b,function(c){a.trigger("results:all",{data:c,query:b})})}),this.on("query:append",function(b){this.dataAdapter.query(b,function(c){a.trigger("results:append",{data:c,query:b})})}),this.on("keypress",function(b){var c=b.which;a.isOpen()?c===d.ESC||c===d.TAB||c===d.UP&&b.altKey?(a.close(),b.preventDefault()):c===d.ENTER?(a.trigger("results:select",{}),b.preventDefault()):c===d.SPACE&&b.ctrlKey?(a.trigger("results:toggle",{}),b.preventDefault()):c===d.UP?(a.trigger("results:previous",{}),b.preventDefault()):c===d.DOWN&&(a.trigger("results:next",{}),b.preventDefault()):(c===d.ENTER||c===d.SPACE||c===d.DOWN&&b.altKey)&&(a.open(),b.preventDefault())})},e.prototype._syncAttributes=function(){this.options.set("disabled",this.$element.prop("disabled")),this.options.get("disabled")?(this.isOpen()&&this.close(),this.trigger("disable",{})):this.trigger("enable",{})},e.prototype._syncSubtree=function(a,b){var c=!1,d=this;if(!a||!a.target||"OPTION"===a.target.nodeName||"OPTGROUP"===a.target.nodeName){if(b)if(b.addedNodes&&b.addedNodes.length>0)for(var e=0;e<b.addedNodes.length;e++){var f=b.addedNodes[e];f.selected&&(c=!0)}else b.removedNodes&&b.removedNodes.length>0&&(c=!0);else c=!0;c&&this.dataAdapter.current(function(a){d.trigger("selection:update",{data:a})})}},e.prototype.trigger=function(a,b){var c=e.__super__.trigger,d={open:"opening",close:"closing",select:"selecting",unselect:"unselecting"};if(void 0===b&&(b={}),a in d){var f=d[a],g={prevented:!1,name:a,args:b};if(c.call(this,f,g),g.prevented)return void(b.prevented=!0)}c.call(this,a,b)},e.prototype.toggleDropdown=function(){this.options.get("disabled")||(this.isOpen()?this.close():this.open())},e.prototype.open=function(){this.isOpen()||this.trigger("query",{})},e.prototype.close=function(){this.isOpen()&&this.trigger("close",{})},e.prototype.isOpen=function(){return this.$container.hasClass("select2-container--open")},e.prototype.hasFocus=function(){return this.$container.hasClass("select2-container--focus")},e.prototype.focus=function(a){this.hasFocus()||(this.$container.addClass("select2-container--focus"),this.trigger("focus",{}))},e.prototype.enable=function(a){this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'),(null==a||0===a.length)&&(a=[!0]);var b=!a[0];this.$element.prop("disabled",b)},e.prototype.data=function(){this.options.get("debug")&&arguments.length>0&&window.console&&console.warn&&console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');var a=[];return this.dataAdapter.current(function(b){a=b}),a},e.prototype.val=function(b){if(this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),null==b||0===b.length)return this.$element.val();var c=b[0];a.isArray(c)&&(c=a.map(c,function(a){return a.toString()})),this.$element.val(c).trigger("change")},e.prototype.destroy=function(){this.$container.remove(),this.$element[0].detachEvent&&this.$element[0].detachEvent("onpropertychange",this._syncA),null!=this._observer?(this._observer.disconnect(),this._observer=null):this.$element[0].removeEventListener&&(this.$element[0].removeEventListener("DOMAttrModified",this._syncA,!1),this.$element[0].removeEventListener("DOMNodeInserted",this._syncS,!1),this.$element[0].removeEventListener("DOMNodeRemoved",this._syncS,!1)),this._syncA=null,this._syncS=null,this.$element.off(".select2"),this.$element.attr("tabindex",this.$element.data("old-tabindex")),this.$element.removeClass("select2-hidden-accessible"),this.$element.attr("aria-hidden","false"),this.$element.removeData("select2"),this.dataAdapter.destroy(),this.selection.destroy(),this.dropdown.destroy(),this.results.destroy(),this.dataAdapter=null,this.selection=null,this.dropdown=null,this.results=null;
},e.prototype.render=function(){var b=a('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');return b.attr("dir",this.options.get("dir")),this.$container=b,this.$container.addClass("select2-container--"+this.options.get("theme")),b.data("element",this.$element),b},e}),b.define("jquery-mousewheel",["jquery"],function(a){return a}),b.define("jquery.select2",["jquery","jquery-mousewheel","./select2/core","./select2/defaults"],function(a,b,c,d){if(null==a.fn.select2){var e=["open","close","destroy"];a.fn.select2=function(b){if(b=b||{},"object"==typeof b)return this.each(function(){var d=a.extend(!0,{},b);new c(a(this),d)}),this;if("string"==typeof b){var d,f=Array.prototype.slice.call(arguments,1);return this.each(function(){var c=a(this).data("select2");null==c&&window.console&&console.error&&console.error("The select2('"+b+"') method was called on an element that is not using Select2."),d=c[b].apply(c,f)}),a.inArray(b,e)>-1?this:d}throw new Error("Invalid arguments for Select2: "+b)}}return null==a.fn.select2.defaults&&(a.fn.select2.defaults=d),c}),{define:b.define,require:b.require}}(),c=b.require("jquery.select2");return a.fn.select2.amd=b,c});
/**
 * Bootstrap Multiselect (https://github.com/davidstutz/bootstrap-multiselect)
 * 
 * Apache License, Version 2.0:
 * Copyright (c) 2012 - 2015 David Stutz
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a
 * copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 * 
 * BSD 3-Clause License:
 * Copyright (c) 2012 - 2015 David Stutz
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *    - Redistributions of source code must retain the above copyright notice,
 *      this list of conditions and the following disclaimer.
 *    - Redistributions in binary form must reproduce the above copyright notice,
 *      this list of conditions and the following disclaimer in the documentation
 *      and/or other materials provided with the distribution.
 *    - Neither the name of David Stutz nor the names of its contributors may be
 *      used to endorse or promote products derived from this software without
 *      specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
 * THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 * PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS;
 * OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 * WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR
 * OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
 * ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
!function ($) {
    "use strict";// jshint ;_;

    if (typeof ko !== 'undefined' && ko.bindingHandlers && !ko.bindingHandlers.multiselect) {
        ko.bindingHandlers.multiselect = {
            after: ['options', 'value', 'selectedOptions', 'enable', 'disable'],

            init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
                var $element = $(element);
                var config = ko.toJS(valueAccessor());

                $element.multiselect(config);

                if (allBindings.has('options')) {
                    var options = allBindings.get('options');
                    if (ko.isObservable(options)) {
                        ko.computed({
                            read: function() {
                                options();
                                setTimeout(function() {
                                    var ms = $element.data('multiselect');
                                    if (ms)
                                        ms.updateOriginalOptions();//Not sure how beneficial this is.
                                    $element.multiselect('rebuild');
                                }, 1);
                            },
                            disposeWhenNodeIsRemoved: element
                        });
                    }
                }

                //value and selectedOptions are two-way, so these will be triggered even by our own actions.
                //It needs some way to tell if they are triggered because of us or because of outside change.
                //It doesn't loop but it's a waste of processing.
                if (allBindings.has('value')) {
                    var value = allBindings.get('value');
                    if (ko.isObservable(value)) {
                        ko.computed({
                            read: function() {
                                value();
                                setTimeout(function() {
                                    $element.multiselect('refresh');
                                }, 1);
                            },
                            disposeWhenNodeIsRemoved: element
                        }).extend({ rateLimit: 100, notifyWhenChangesStop: true });
                    }
                }

                //Switched from arrayChange subscription to general subscription using 'refresh'.
                //Not sure performance is any better using 'select' and 'deselect'.
                if (allBindings.has('selectedOptions')) {
                    var selectedOptions = allBindings.get('selectedOptions');
                    if (ko.isObservable(selectedOptions)) {
                        ko.computed({
                            read: function() {
                                selectedOptions();
                                setTimeout(function() {
                                    $element.multiselect('refresh');
                                }, 1);
                            },
                            disposeWhenNodeIsRemoved: element
                        }).extend({ rateLimit: 100, notifyWhenChangesStop: true });
                    }
                }

                var setEnabled = function (enable) {
                    setTimeout(function () {
                        if (enable)
                            $element.multiselect('enable');
                        else
                            $element.multiselect('disable');
                    });
                };

                if (allBindings.has('enable')) {
                    var enable = allBindings.get('enable');
                    if (ko.isObservable(enable)) {
                        ko.computed({
                            read: function () {
                                setEnabled(enable());
                            },
                            disposeWhenNodeIsRemoved: element
                        }).extend({ rateLimit: 100, notifyWhenChangesStop: true });
                    } else {
                        setEnabled(enable);
                    }
                }

                if (allBindings.has('disable')) {
                    var disable = allBindings.get('disable');
                    if (ko.isObservable(disable)) {
                        ko.computed({
                            read: function () {
                                setEnabled(!disable());
                            },
                            disposeWhenNodeIsRemoved: element
                        }).extend({ rateLimit: 100, notifyWhenChangesStop: true });
                    } else {
                        setEnabled(!disable);
                    }
                }

                ko.utils.domNodeDisposal.addDisposeCallback(element, function() {
                    $element.multiselect('destroy');
                });
            },

            update: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
                var $element = $(element);
                var config = ko.toJS(valueAccessor());

                $element.multiselect('setOptions', config);
                $element.multiselect('rebuild');
            }
        };
    }

    function forEach(array, callback) {
        for (var index = 0; index < array.length; ++index) {
            callback(array[index], index);
        }
    }

    /**
     * Constructor to create a new multiselect using the given select.
     *
     * @param {jQuery} select
     * @param {Object} options
     * @returns {Multiselect}
     */
    function Multiselect(select, options) {

        this.$select = $(select);
        
        // Placeholder via data attributes
        if (this.$select.attr("data-placeholder")) {
            options.nonSelectedText = this.$select.data("placeholder");
        }
        
        this.options = this.mergeOptions($.extend({}, options, this.$select.data()));

        // Initialization.
        // We have to clone to create a new reference.
        this.originalOptions = this.$select.clone()[0].options;
        this.query = '';
        this.searchTimeout = null;
        this.lastToggledInput = null;

        this.options.multiple = this.$select.attr('multiple') === "multiple";
        this.options.onChange = $.proxy(this.options.onChange, this);
        this.options.onDropdownShow = $.proxy(this.options.onDropdownShow, this);
        this.options.onDropdownHide = $.proxy(this.options.onDropdownHide, this);
        this.options.onDropdownShown = $.proxy(this.options.onDropdownShown, this);
        this.options.onDropdownHidden = $.proxy(this.options.onDropdownHidden, this);
        this.options.onInitialized = $.proxy(this.options.onInitialized, this);
        
        // Build select all if enabled.
        this.buildContainer();
        this.buildButton();
        this.buildDropdown();
        this.buildSelectAll();
        this.buildDropdownOptions();
        this.buildFilter();

        this.updateButtonText();
        this.updateSelectAll(true);

        if (this.options.disableIfEmpty && $('option', this.$select).length <= 0) {
            this.disable();
        }
        
        this.$select.hide().after(this.$container);
        this.options.onInitialized(this.$select, this.$container);
    }

    Multiselect.prototype = {

        defaults: {
            /**
             * Default text function will either print 'None selected' in case no
             * option is selected or a list of the selected options up to a length
             * of 3 selected options.
             * 
             * @param {jQuery} options
             * @param {jQuery} select
             * @returns {String}
             */
            buttonText: function(options, select) {
                if (this.disabledText.length > 0 
                        && (this.disableIfEmpty || select.prop('disabled')) 
                        && options.length == 0) {
                    
                    return this.disabledText;
                }
                else if (options.length === 0) {
                    return this.nonSelectedText;
                }
                else if (this.allSelectedText 
                        && options.length === $('option', $(select)).length 
                        && $('option', $(select)).length !== 1 
                        && this.multiple) {

                    if (this.selectAllNumber) {
                        return this.allSelectedText + ' (' + options.length + ')';
                    }
                    else {
                        return this.allSelectedText;
                    }
                }
                else if (options.length > this.numberDisplayed) {
                    return options.length + ' ' + this.nSelectedText;
                }
                else {
                    var selected = '';
                    var delimiter = this.delimiterText;
                    
                    options.each(function() {
                        var label = ($(this).attr('label') !== undefined) ? $(this).attr('label') : $(this).text();
                        selected += label + delimiter;
                    });
                    
                    return selected.substr(0, selected.length - 2);
                }
            },
            /**
             * Updates the title of the button similar to the buttonText function.
             * 
             * @param {jQuery} options
             * @param {jQuery} select
             * @returns {@exp;selected@call;substr}
             */
            buttonTitle: function(options, select) {
                if (options.length === 0) {
                    return this.nonSelectedText;
                }
                else {
                    var selected = '';
                    var delimiter = this.delimiterText;
                    
                    options.each(function () {
                        var label = ($(this).attr('label') !== undefined) ? $(this).attr('label') : $(this).text();
                        selected += label + delimiter;
                    });
                    return selected.substr(0, selected.length - 2);
                }
            },
            /**
             * Create a label.
             *
             * @param {jQuery} element
             * @returns {String}
             */
            optionLabel: function(element){
                return $(element).attr('label') || $(element).text();
            },
            /**
             * Create a class.
             *
             * @param {jQuery} element
             * @returns {String}
             */
            optionClass: function(element) {
                return $(element).attr('class') || '';
            },
            /**
             * Triggered on change of the multiselect.
             * 
             * Not triggered when selecting/deselecting options manually.
             * 
             * @param {jQuery} option
             * @param {Boolean} checked
             */
            onChange : function(option, checked) {

            },
            /**
             * Triggered when the dropdown is shown.
             *
             * @param {jQuery} event
             */
            onDropdownShow: function(event) {

            },
            /**
             * Triggered when the dropdown is hidden.
             *
             * @param {jQuery} event
             */
            onDropdownHide: function(event) {

            },
            /**
             * Triggered after the dropdown is shown.
             * 
             * @param {jQuery} event
             */
            onDropdownShown: function(event) {
                
            },
            /**
             * Triggered after the dropdown is hidden.
             * 
             * @param {jQuery} event
             */
            onDropdownHidden: function(event) {
                
            },
            /**
             * Triggered on select all.
             */
            onSelectAll: function(checked) {
                
            },
            /**
             * Triggered after initializing.
             *
             * @param {jQuery} $select
             * @param {jQuery} $container
             */
            onInitialized: function($select, $container) {

            },
            enableHTML: false,
            buttonClass: 'btn btn-default',
            inheritClass: false,
            buttonWidth: 'auto',
            buttonContainer: '<div class="btn-group" />',
            dropRight: false,
            dropUp: false,
            selectedClass: 'active',
            // Maximum height of the dropdown menu.
            // If maximum height is exceeded a scrollbar will be displayed.
            maxHeight: false,
            checkboxName: false,
            includeSelectAllOption: false,
            includeSelectAllIfMoreThan: 0,
            selectAllText: ' Select all',
            selectAllValue: 'multiselect-all',
            selectAllName: false,
            selectAllNumber: true,
            selectAllJustVisible: true,
            enableFiltering: false,
            enableCaseInsensitiveFiltering: false,
            enableFullValueFiltering: false,
            enableClickableOptGroups: false,
            enableCollapsibelOptGroups: false,
            filterPlaceholder: 'Search',
            // possible options: 'text', 'value', 'both'
            filterBehavior: 'text',
            includeFilterClearBtn: true,
            preventInputChangeEvent: false,
            nonSelectedText: 'None selected',
            nSelectedText: 'selected',
            allSelectedText: 'All selected',
            numberDisplayed: 3,
            disableIfEmpty: false,
            disabledText: '',
            delimiterText: ', ',
            templates: {
                button: '<button type="button" class="multiselect dropdown-toggle" data-toggle="dropdown"><span class="multiselect-selected-text"></span> <b class="caret"></b></button>',
                ul: '<ul class="multiselect-container dropdown-menu"></ul>',
                filter: '<li class="multiselect-item filter"><div class="input-group"><span class="input-group-addon"><i class="glyphicon glyphicon-search"></i></span><input class="form-control multiselect-search" type="text"></div></li>',
                filterClearBtn: '<span class="input-group-btn"><button class="btn btn-default multiselect-clear-filter" type="button"><i class="fa fa-times-circle"></i></button></span>',
                li: '<li><a tabindex="0"><label></label></a></li>',
                divider: '<li class="multiselect-item divider"></li>',
                liGroup: '<li class="multiselect-item multiselect-group"><label></label></li>'
            }
        },

        constructor: Multiselect,

        /**
         * Builds the container of the multiselect.
         */
        buildContainer: function() {
            this.$container = $(this.options.buttonContainer);
            this.$container.on('show.bs.dropdown', this.options.onDropdownShow);
            this.$container.on('hide.bs.dropdown', this.options.onDropdownHide);
            this.$container.on('shown.bs.dropdown', this.options.onDropdownShown);
            this.$container.on('hidden.bs.dropdown', this.options.onDropdownHidden);
        },

        /**
         * Builds the button of the multiselect.
         */
        buildButton: function() {
            this.$button = $(this.options.templates.button).addClass(this.options.buttonClass);
            if (this.$select.attr('class') && this.options.inheritClass) {
                this.$button.addClass(this.$select.attr('class'));
            }
            // Adopt active state.
            if (this.$select.prop('disabled')) {
                this.disable();
            }
            else {
                this.enable();
            }

            // Manually add button width if set.
            if (this.options.buttonWidth && this.options.buttonWidth !== 'auto') {
                this.$button.css({
                    'width' : this.options.buttonWidth,
                    'overflow' : 'hidden',
                    'text-overflow' : 'ellipsis'
                });
                this.$container.css({
                    'width': this.options.buttonWidth
                });
            }

            // Keep the tab index from the select.
            var tabindex = this.$select.attr('tabindex');
            if (tabindex) {
                this.$button.attr('tabindex', tabindex);
            }

            this.$container.prepend(this.$button);
        },

        /**
         * Builds the ul representing the dropdown menu.
         */
        buildDropdown: function() {

            // Build ul.
            this.$ul = $(this.options.templates.ul);

            if (this.options.dropRight) {
                this.$ul.addClass('pull-right');
            }

            // Set max height of dropdown menu to activate auto scrollbar.
            if (this.options.maxHeight) {
                // TODO: Add a class for this option to move the css declarations.
                this.$ul.css({
                    'max-height': this.options.maxHeight + 'px',
                    'overflow-y': 'auto',
                    'overflow-x': 'hidden'
                });
            }
            
            if (this.options.dropUp) {
                
                var height = Math.min(this.options.maxHeight, $('option[data-role!="divider"]', this.$select).length*26 + $('option[data-role="divider"]', this.$select).length*19 + (this.options.includeSelectAllOption ? 26 : 0) + (this.options.enableFiltering || this.options.enableCaseInsensitiveFiltering ? 44 : 0));
                var moveCalc = height + 34;
                
                this.$ul.css({
                    'max-height': height + 'px',
                    'overflow-y': 'auto',
                    'overflow-x': 'hidden',
                    'margin-top': "-" + moveCalc + 'px'
                });
            }
            
            this.$container.append(this.$ul);
        },

        /**
         * Build the dropdown options and binds all nessecary events.
         * 
         * Uses createDivider and createOptionValue to create the necessary options.
         */
        buildDropdownOptions: function() {

            this.$select.children().each($.proxy(function(index, element) {

                var $element = $(element);
                // Support optgroups and options without a group simultaneously.
                var tag = $element.prop('tagName')
                    .toLowerCase();
            
                if ($element.prop('value') === this.options.selectAllValue) {
                    return;
                }

                if (tag === 'optgroup') {
                    this.createOptgroup(element);
                }
                else if (tag === 'option') {

                    if ($element.data('role') === 'divider') {
                        this.createDivider();
                    }
                    else {
                        this.createOptionValue(element);
                    }

                }

                // Other illegal tags will be ignored.
            }, this));

            // Bind the change event on the dropdown elements.
            $('li input', this.$ul).on('change', $.proxy(function(event) {
                var $target = $(event.target);

                var checked = $target.prop('checked') || false;
                var isSelectAllOption = $target.val() === this.options.selectAllValue;

                // Apply or unapply the configured selected class.
                if (this.options.selectedClass) {
                    if (checked) {
                        $target.closest('li')
                            .addClass(this.options.selectedClass);
                    }
                    else {
                        $target.closest('li')
                            .removeClass(this.options.selectedClass);
                    }
                }

                // Get the corresponding option.
                var value = $target.val();
                var $option = this.getOptionByValue(value);

                var $optionsNotThis = $('option', this.$select).not($option);
                var $checkboxesNotThis = $('input', this.$container).not($target);

                if (isSelectAllOption) {
                    if (checked) {
                        this.selectAll(this.options.selectAllJustVisible);
                    }
                    else {
                        this.deselectAll(this.options.selectAllJustVisible);
                    }
                }
                else {
                    if (checked) {
                        $option.prop('selected', true);

                        if (this.options.multiple) {
                            // Simply select additional option.
                            $option.prop('selected', true);
                        }
                        else {
                            // Unselect all other options and corresponding checkboxes.
                            if (this.options.selectedClass) {
                                $($checkboxesNotThis).closest('li').removeClass(this.options.selectedClass);
                            }

                            $($checkboxesNotThis).prop('checked', false);
                            $optionsNotThis.prop('selected', false);

                            // It's a single selection, so close.
                            this.$button.click();
                        }

                        if (this.options.selectedClass === "active") {
                            $optionsNotThis.closest("a").css("outline", "");
                        }
                    }
                    else {
                        // Unselect option.
                        $option.prop('selected', false);
                    }
                    
                    // To prevent select all from firing onChange: #575
                    this.options.onChange($option, checked);
                }

                this.$select.change();

                this.updateButtonText();
                this.updateSelectAll();

                if(this.options.preventInputChangeEvent) {
                    return false;
                }
            }, this));

            $('li a', this.$ul).on('mousedown', function(e) {
                if (e.shiftKey) {
                    // Prevent selecting text by Shift+click
                    return false;
                }
            });
        
            $('li a', this.$ul).on('touchstart click', $.proxy(function(event) {
                event.stopPropagation();

                var $target = $(event.target);
                
                if (event.shiftKey && this.options.multiple) {
                    if($target.is("label")){ // Handles checkbox selection manually (see https://github.com/davidstutz/bootstrap-multiselect/issues/431)
                        event.preventDefault();
                        $target = $target.find("input");
                        $target.prop("checked", !$target.prop("checked"));
                    }
                    var checked = $target.prop('checked') || false;

                    if (this.lastToggledInput !== null && this.lastToggledInput !== $target) { // Make sure we actually have a range
                        var from = $target.closest("li").index();
                        var to = this.lastToggledInput.closest("li").index();
                        
                        if (from > to) { // Swap the indices
                            var tmp = to;
                            to = from;
                            from = tmp;
                        }
                        
                        // Make sure we grab all elements since slice excludes the last index
                        ++to;
                        
                        // Change the checkboxes and underlying options
                        var range = this.$ul.find("li").slice(from, to).find("input");
                        
                        range.prop('checked', checked);
                        
                        if (this.options.selectedClass) {
                            range.closest('li')
                                .toggleClass(this.options.selectedClass, checked);
                        }
                        
                        for (var i = 0, j = range.length; i < j; i++) {
                            var $checkbox = $(range[i]);

                            var $option = this.getOptionByValue($checkbox.val());

                            $option.prop('selected', checked);
                        }                   
                    }
                    
                    // Trigger the select "change" event
                    $target.trigger("change");
                }
                
                // Remembers last clicked option
                if($target.is("input") && !$target.closest("li").is(".multiselect-item")){
                    this.lastToggledInput = $target;
                }

                $target.blur();
            }, this));

            // Keyboard support.
            this.$container.off('keydown.multiselect').on('keydown.multiselect', $.proxy(function(event) {
                if ($('input[type="text"]', this.$container).is(':focus')) {
                    return;
                }

                if (event.keyCode === 9 && this.$container.hasClass('open')) {
                    this.$button.click();
                }
                else {
                    var $items = $(this.$container).find("li:not(.divider):not(.disabled) a").filter(":visible");

                    if (!$items.length) {
                        return;
                    }

                    var index = $items.index($items.filter(':focus'));

                    // Navigation up.
                    if (event.keyCode === 38 && index > 0) {
                        index--;
                    }
                    // Navigate down.
                    else if (event.keyCode === 40 && index < $items.length - 1) {
                        index++;
                    }
                    else if (!~index) {
                        index = 0;
                    }

                    var $current = $items.eq(index);
                    $current.focus();

                    if (event.keyCode === 32 || event.keyCode === 13) {
                        var $checkbox = $current.find('input');

                        $checkbox.prop("checked", !$checkbox.prop("checked"));
                        $checkbox.change();
                    }

                    event.stopPropagation();
                    event.preventDefault();
                }
            }, this));

            if(this.options.enableClickableOptGroups && this.options.multiple) {
                $('li.multiselect-group', this.$ul).on('click', $.proxy(function(event) {
                    event.stopPropagation();
                    var group = $(event.target).parent();

                    // Search all option in optgroup
                    var $options = group.nextUntil('li.multiselect-group');
                    var $visibleOptions = $options.filter(":visible:not(.disabled)");

                    // check or uncheck items
                    var allChecked = true;
                    var optionInputs = $visibleOptions.find('input');
                    var values = [];
                    
                    optionInputs.each(function() {
                        allChecked = allChecked && $(this).prop('checked');
                        values.push($(this).val());
                    });

                    if (!allChecked) {
                        this.select(values, false);
                    }
                    else {
                        this.deselect(values, false);
                    }
                    
                    this.options.onChange(optionInputs, !allChecked);
               }, this));
            }

            if (this.options.enableCollapsibleOptGroups && this.options.multiple) {
                $("li.multiselect-group input", this.$ul).off();
                $("li.multiselect-group", this.$ul).siblings().not("li.multiselect-group, li.multiselect-all", this.$ul).each( function () {
                    $(this).toggleClass('hidden', true);
                });
                
                $("li.multiselect-group", this.$ul).on("click", $.proxy(function(group) {
                    group.stopPropagation();
                }, this));
                
                $("li.multiselect-group > a > b", this.$ul).on("click", $.proxy(function(t) {
                    t.stopPropagation();
                    var n = $(t.target).closest('li');
                    var r = n.nextUntil("li.multiselect-group");
                    var i = true;
                    
                    r.each(function() {
                        i = i && $(this).hasClass('hidden');
                    });
                    
                    r.toggleClass('hidden', !i);
                }, this));
                
                $("li.multiselect-group > a > input", this.$ul).on("change", $.proxy(function(t) {
                    t.stopPropagation();
                    var n = $(t.target).closest('li');
                    var r = n.nextUntil("li.multiselect-group", ':not(.disabled)');
                    var s = r.find("input");
                    
                    var i = true;
                    s.each(function() {
                        i = i && $(this).prop("checked");
                    });
                    
                    s.prop("checked", !i).trigger("change");
                }, this));
                
                // Set the initial selection state of the groups.
                $('li.multiselect-group', this.$ul).each(function() {
                    var r = $(this).nextUntil("li.multiselect-group", ':not(.disabled)');
                    var s = r.find("input");
                    
                    var i = true;
                    s.each(function() {
                        i = i && $(this).prop("checked");
                    });
                    
                    $(this).find('input').prop("checked", i);
                });
                
                // Update the group checkbox based on new selections among the
                // corresponding children.
                $("li input", this.$ul).on("change", $.proxy(function(t) {
                    t.stopPropagation();
                    var n = $(t.target).closest('li');
                    var r1 = n.prevUntil("li.multiselect-group", ':not(.disabled)');
                    var r2 = n.nextUntil("li.multiselect-group", ':not(.disabled)');
                    var s1 = r1.find("input");
                    var s2 = r2.find("input");
                    
                    var i = $(t.target).prop('checked');
                    s1.each(function() {
                        i = i && $(this).prop("checked");
                    });
                    
                    s2.each(function() {
                        i = i && $(this).prop("checked");
                    });
                    
                    n.prevAll('.multiselect-group').find('input').prop('checked', i);
                }, this));
                
                $("li.multiselect-all", this.$ul).css('background', '#f3f3f3').css('border-bottom', '1px solid #eaeaea');
                $("li.multiselect-group > a, li.multiselect-all > a > label.checkbox", this.$ul).css('padding', '3px 20px 3px 35px');
                $("li.multiselect-group > a > input", this.$ul).css('margin', '4px 0px 5px -20px');
            }
        },

        /**
         * Create an option using the given select option.
         *
         * @param {jQuery} element
         */
        createOptionValue: function(element) {
            var $element = $(element);
            if ($element.is(':selected')) {
                $element.prop('selected', true);
            }

            // Support the label attribute on options.
            var label = this.options.optionLabel(element);
            var classes = this.options.optionClass(element);
            var value = $element.val();
            var inputType = this.options.multiple ? "checkbox" : "radio";

            var $li = $(this.options.templates.li);
            var $label = $('label', $li);
            $label.addClass(inputType);
            $li.addClass(classes);

            if (this.options.enableHTML) {
                $label.html(" " + label);
            }
            else {
                $label.text(" " + label);
            }
        
            var id = Math.floor(Math.random() * 10000000000) + 1 ;
            
            var $checkbox = $('<input id="h-mc' + id + '"/><label for="h-mc' + id + '"></label>').attr('type', inputType);

            if (this.options.checkboxName) {
                $checkbox.attr('name', this.options.checkboxName);
            }
            $label.prepend($checkbox);

            var selected = $element.prop('selected') || false;
            $checkbox.val(value);

            if (value === this.options.selectAllValue) {
                $li.addClass("multiselect-item multiselect-all");
                $checkbox.parent().parent()
                    .addClass('multiselect-all');
            }

            $label.attr('title', $element.attr('title'));

            this.$ul.append($li);

            if ($element.is(':disabled')) {
                $checkbox.attr('disabled', 'disabled')
                    .prop('disabled', true)
                    .closest('a')
                    .attr("tabindex", "-1")
                    .closest('li')
                    .addClass('disabled');
            }

            $checkbox.prop('checked', selected);

            if (selected && this.options.selectedClass) {
                $checkbox.closest('li')
                    .addClass(this.options.selectedClass);
            }
        },

        /**
         * Creates a divider using the given select option.
         *
         * @param {jQuery} element
         */
        createDivider: function(element) {
            var $divider = $(this.options.templates.divider);
            this.$ul.append($divider);
        },

        /**
         * Creates an optgroup.
         *
         * @param {jQuery} group
         */
        createOptgroup: function(group) {            
            if (this.options.enableCollapsibleOptGroups && this.options.multiple) {
                var label = $(group).attr("label");
                var value = $(group).attr("value");
                var r = $('<li class="multiselect-item multiselect-group"><a href="javascript:void(0);"><input type="checkbox" value="' + value + '"/><b> ' + label + '<b class="caret"></b></b></a></li>');

                if (this.options.enableClickableOptGroups) {
                    r.addClass("multiselect-group-clickable")
                }
                this.$ul.append(r);
                if ($(group).is(":disabled")) {
                    r.addClass("disabled")
                }
                $("option", group).each($.proxy(function($, group) {
                    this.createOptionValue(group)
                }, this))
            }
            else {
                var groupName = $(group).prop('label');

                // Add a header for the group.
                var $li = $(this.options.templates.liGroup);

                if (this.options.enableHTML) {
                    $('label', $li).html(groupName);
                }
                else {
                    $('label', $li).text(groupName);
                }

                if (this.options.enableClickableOptGroups) {
                    $li.addClass('multiselect-group-clickable');
                }

                this.$ul.append($li);

                if ($(group).is(':disabled')) {
                    $li.addClass('disabled');
                }

                // Add the options of the group.
                $('option', group).each($.proxy(function(index, element) {
                    this.createOptionValue(element);
                }, this));
            }
        },

        /**
         * Build the select all.
         * 
         * Checks if a select all has already been created.
         */
        buildSelectAll: function() {
            if (typeof this.options.selectAllValue === 'number') {
                this.options.selectAllValue = this.options.selectAllValue.toString();
            }
            
            var alreadyHasSelectAll = this.hasSelectAll();

            if (!alreadyHasSelectAll && this.options.includeSelectAllOption && this.options.multiple
                    && $('option', this.$select).length > this.options.includeSelectAllIfMoreThan) {

                // Check whether to add a divider after the select all.
                if (this.options.includeSelectAllDivider) {
                    this.$ul.prepend($(this.options.templates.divider));
                }

                var $li = $(this.options.templates.li);
                $('label', $li).addClass("checkbox");
                
                if (this.options.enableHTML) {
                    $('label', $li).html(" " + this.options.selectAllText);
                }
                else {
                    $('label', $li).text(" " + this.options.selectAllText);
                }
                
                if (this.options.selectAllName) {
                    $('label', $li).prepend('<input type="checkbox" name="' + this.options.selectAllName + '" />');
                }
                else {
                    $('label', $li).prepend('<input type="checkbox" />');
                }
                
                var $checkbox = $('input', $li);
                $checkbox.val(this.options.selectAllValue);

                $li.addClass("multiselect-item multiselect-all");
                $checkbox.parent().parent()
                    .addClass('multiselect-all');

                this.$ul.prepend($li);

                $checkbox.prop('checked', false);
            }
        },

        /**
         * Builds the filter.
         */
        buildFilter: function() {

            // Build filter if filtering OR case insensitive filtering is enabled and the number of options exceeds (or equals) enableFilterLength.
            if (this.options.enableFiltering || this.options.enableCaseInsensitiveFiltering) {
                var enableFilterLength = Math.max(this.options.enableFiltering, this.options.enableCaseInsensitiveFiltering);

                if (this.$select.find('option').length >= enableFilterLength) {

                    this.$filter = $(this.options.templates.filter);
                    $('input', this.$filter).attr('placeholder', this.options.filterPlaceholder);
                    
                    // Adds optional filter clear button
                    if(this.options.includeFilterClearBtn){
                        var clearBtn = $(this.options.templates.filterClearBtn);
                        clearBtn.on('click', $.proxy(function(event){
                            clearTimeout(this.searchTimeout);
                            this.$filter.find('.multiselect-search').val('');
                            $('li', this.$ul).show().removeClass("filter-hidden");
                            this.updateSelectAll();
                        }, this));
                        this.$filter.find('.input-group').append(clearBtn);
                    }
                    
                    this.$ul.prepend(this.$filter);

                    this.$filter.val(this.query).on('click', function(event) {
                        event.stopPropagation();
                    }).on('input keydown', $.proxy(function(event) {
                        // Cancel enter key default behaviour
                        if (event.which === 13) {
                          event.preventDefault();
                        }
                        
                        // This is useful to catch "keydown" events after the browser has updated the control.
                        clearTimeout(this.searchTimeout);

                        this.searchTimeout = this.asyncFunction($.proxy(function() {

                            if (this.query !== event.target.value) {
                                this.query = event.target.value;

                                var currentGroup, currentGroupVisible;
                                $.each($('li', this.$ul), $.proxy(function(index, element) {
                                    var value = $('input', element).length > 0 ? $('input', element).val() : "";
                                    var text = $('label', element).text();

                                    var filterCandidate = '';
                                    if ((this.options.filterBehavior === 'text')) {
                                        filterCandidate = text;
                                    }
                                    else if ((this.options.filterBehavior === 'value')) {
                                        filterCandidate = value;
                                    }
                                    else if (this.options.filterBehavior === 'both') {
                                        filterCandidate = text + '\n' + value;
                                    }

                                    if (value !== this.options.selectAllValue && text) {

                                        // By default lets assume that element is not
                                        // interesting for this search.
                                        var showElement = false;

                                        if (this.options.enableCaseInsensitiveFiltering) {
                                            filterCandidate = filterCandidate.toLowerCase();
                                            this.query = this.query.toLowerCase();
                                        }

                                        if (this.options.enableFullValueFiltering && this.options.filterBehavior !== 'both') {
                                            var valueToMatch = filterCandidate.trim().substring(0, this.query.length);
                                            if (this.query.indexOf(valueToMatch) > -1) {
                                                showElement = true;
                                            }
                                        }
                                        else if (filterCandidate.indexOf(this.query) > -1) {
                                            showElement = true;
                                        }

                                        // Toggle current element (group or group item) according to showElement boolean.
                                        $(element).toggle(showElement).toggleClass('filter-hidden', !showElement);
                                        
                                        // Differentiate groups and group items.
                                        if ($(element).hasClass('multiselect-group')) {
                                            // Remember group status.
                                            currentGroup = element;
                                            currentGroupVisible = showElement;
                                        }
                                        else {
                                            // Show group name when at least one of its items is visible.
                                            if (showElement) {
                                                $(currentGroup).show().removeClass('filter-hidden');
                                            }
                                            
                                            // Show all group items when group name satisfies filter.
                                            if (!showElement && currentGroupVisible) {
                                                $(element).show().removeClass('filter-hidden');
                                            }
                                        }
                                    }
                                }, this));
                            }

                            this.updateSelectAll();
                        }, this), 300, this);
                    }, this));
                }
            }
        },

        /**
         * Unbinds the whole plugin.
         */
        destroy: function() {
            this.$container.remove();
            this.$select.show();
            this.$select.data('multiselect', null);
        },

        /**
         * Refreshs the multiselect based on the selected options of the select.
         */
        refresh: function () {
            var inputs = $.map($('li input', this.$ul), $);
            
            $('option', this.$select).each($.proxy(function (index, element) {
                var $elem = $(element);
                var value = $elem.val();
                var $input;
                for (var i = inputs.length; 0 < i--; /**/) {
                    if (value !== ($input = inputs[i]).val())
                        continue; // wrong li

                    if ($elem.is(':selected')) {
                        $input.prop('checked', true);

                        if (this.options.selectedClass) {
                            $input.closest('li')
                                .addClass(this.options.selectedClass);
                        }
                    }
                    else {
                        $input.prop('checked', false);

                        if (this.options.selectedClass) {
                            $input.closest('li')
                                .removeClass(this.options.selectedClass);
                        }
                    }

                    if ($elem.is(":disabled")) {
                        $input.attr('disabled', 'disabled')
                            .prop('disabled', true)
                            .closest('li')
                            .addClass('disabled');
                    }
                    else {
                        $input.prop('disabled', false)
                            .closest('li')
                            .removeClass('disabled');
                    }
                    break; // assumes unique values
                }
            }, this));

            this.updateButtonText();
            this.updateSelectAll();
        },

        /**
         * Select all options of the given values.
         * 
         * If triggerOnChange is set to true, the on change event is triggered if
         * and only if one value is passed.
         * 
         * @param {Array} selectValues
         * @param {Boolean} triggerOnChange
         */
        select: function(selectValues, triggerOnChange) {
            if(!$.isArray(selectValues)) {
                selectValues = [selectValues];
            }

            for (var i = 0; i < selectValues.length; i++) {
                var value = selectValues[i];

                if (value === null || value === undefined) {
                    continue;
                }

                var $option = this.getOptionByValue(value);
                var $checkbox = this.getInputByValue(value);

                if($option === undefined || $checkbox === undefined) {
                    continue;
                }
                
                if (!this.options.multiple) {
                    this.deselectAll(false);
                }
                
                if (this.options.selectedClass) {
                    $checkbox.closest('li')
                        .addClass(this.options.selectedClass);
                }

                $checkbox.prop('checked', true);
                $option.prop('selected', true);
                
                if (triggerOnChange) {
                    this.options.onChange($option, true);
                }
            }

            this.updateButtonText();
            this.updateSelectAll();
        },

        /**
         * Clears all selected items.
         */
        clearSelection: function () {
            this.deselectAll(false);
            this.updateButtonText();
            this.updateSelectAll();
        },

        /**
         * Deselects all options of the given values.
         * 
         * If triggerOnChange is set to true, the on change event is triggered, if
         * and only if one value is passed.
         * 
         * @param {Array} deselectValues
         * @param {Boolean} triggerOnChange
         */
        deselect: function(deselectValues, triggerOnChange) {
            if(!$.isArray(deselectValues)) {
                deselectValues = [deselectValues];
            }

            for (var i = 0; i < deselectValues.length; i++) {
                var value = deselectValues[i];

                if (value === null || value === undefined) {
                    continue;
                }

                var $option = this.getOptionByValue(value);
                var $checkbox = this.getInputByValue(value);

                if($option === undefined || $checkbox === undefined) {
                    continue;
                }

                if (this.options.selectedClass) {
                    $checkbox.closest('li')
                        .removeClass(this.options.selectedClass);
                }

                $checkbox.prop('checked', false);
                $option.prop('selected', false);
                
                if (triggerOnChange) {
                    this.options.onChange($option, false);
                }
            }

            this.updateButtonText();
            this.updateSelectAll();
        },
        
        /**
         * Selects all enabled & visible options.
         *
         * If justVisible is true or not specified, only visible options are selected.
         *
         * @param {Boolean} justVisible
         * @param {Boolean} triggerOnSelectAll
         */
        selectAll: function (justVisible, triggerOnSelectAll) {
            justVisible = (this.options.enableCollapsibleOptGroups && this.options.multiple) ? false : justVisible;
            
            var justVisible = typeof justVisible === 'undefined' ? true : justVisible;
            var allCheckboxes = $("li input[type='checkbox']:enabled", this.$ul);
            var visibleCheckboxes = allCheckboxes.filter(":visible");
            var allCheckboxesCount = allCheckboxes.length;
            var visibleCheckboxesCount = visibleCheckboxes.length;
            
            if(justVisible) {
                visibleCheckboxes.prop('checked', true);
                $("li:not(.divider):not(.disabled)", this.$ul).filter(":visible").addClass(this.options.selectedClass);
            }
            else {
                allCheckboxes.prop('checked', true);
                $("li:not(.divider):not(.disabled)", this.$ul).addClass(this.options.selectedClass);
            }
                
            if (allCheckboxesCount === visibleCheckboxesCount || justVisible === false) {
                $("option:not([data-role='divider']):enabled", this.$select).prop('selected', true);
            }
            else {
                var values = visibleCheckboxes.map(function() {
                    return $(this).val();
                }).get();
                
                $("option:enabled", this.$select).filter(function(index) {
                    return $.inArray($(this).val(), values) !== -1;
                }).prop('selected', true);
            }
            
            if (triggerOnSelectAll) {
                this.options.onSelectAll();
            }
        },

        /**
         * Deselects all options.
         * 
         * If justVisible is true or not specified, only visible options are deselected.
         * 
         * @param {Boolean} justVisible
         */
        deselectAll: function (justVisible) {
            justVisible = (this.options.enableCollapsibleOptGroups && this.options.multiple) ? false : justVisible;
            justVisible = typeof justVisible === 'undefined' ? true : justVisible;
            
            if(justVisible) {              
                var visibleCheckboxes = $("li input[type='checkbox']:not(:disabled)", this.$ul).filter(":visible");
                visibleCheckboxes.prop('checked', false);
                
                var values = visibleCheckboxes.map(function() {
                    return $(this).val();
                }).get();
                
                $("option:enabled", this.$select).filter(function(index) {
                    return $.inArray($(this).val(), values) !== -1;
                }).prop('selected', false);
                
                if (this.options.selectedClass) {
                    $("li:not(.divider):not(.disabled)", this.$ul).filter(":visible").removeClass(this.options.selectedClass);
                }
            }
            else {
                $("li input[type='checkbox']:enabled", this.$ul).prop('checked', false);
                $("option:enabled", this.$select).prop('selected', false);
                
                if (this.options.selectedClass) {
                    $("li:not(.divider):not(.disabled)", this.$ul).removeClass(this.options.selectedClass);
                }
            }
        },

        /**
         * Rebuild the plugin.
         * 
         * Rebuilds the dropdown, the filter and the select all option.
         */
        rebuild: function() {
            this.$ul.html('');

            // Important to distinguish between radios and checkboxes.
            this.options.multiple = this.$select.attr('multiple') === "multiple";

            this.buildSelectAll();
            this.buildDropdownOptions();
            this.buildFilter();

            this.updateButtonText();
            this.updateSelectAll(true);
            
            if (this.options.disableIfEmpty && $('option', this.$select).length <= 0) {
                this.disable();
            }
            else {
                this.enable();
            }
            
            if (this.options.dropRight) {
                this.$ul.addClass('pull-right');
            }
        },

        /**
         * The provided data will be used to build the dropdown.
         */
        dataprovider: function(dataprovider) {
            
            var groupCounter = 0;
            var $select = this.$select.empty();
            
            $.each(dataprovider, function (index, option) {
                var $tag;
                
                if ($.isArray(option.children)) { // create optiongroup tag
                    groupCounter++;
                    
                    $tag = $('<optgroup/>').attr({
                        label: option.label || 'Group ' + groupCounter,
                        disabled: !!option.disabled
                    });
                    
                    forEach(option.children, function(subOption) { // add children option tags
                        $tag.append($('<option/>').attr({
                            value: subOption.value,
                            label: subOption.label || subOption.value,
                            title: subOption.title,
                            selected: !!subOption.selected,
                            disabled: !!subOption.disabled
                        }));
                    });
                }
                else {
                    $tag = $('<option/>').attr({
                        value: option.value,
                        label: option.label || option.value,
                        title: option.title,
                        class: option.class,
                        selected: !!option.selected,
                        disabled: !!option.disabled
                    });
                    $tag.text(option.label || option.value);
                }
                
                $select.append($tag);
            });
            
            this.rebuild();
        },

        /**
         * Enable the multiselect.
         */
        enable: function() {
            this.$select.prop('disabled', false);
            this.$button.prop('disabled', false)
                .removeClass('disabled');
        },

        /**
         * Disable the multiselect.
         */
        disable: function() {
            this.$select.prop('disabled', true);
            this.$button.prop('disabled', true)
                .addClass('disabled');
        },

        /**
         * Set the options.
         *
         * @param {Array} options
         */
        setOptions: function(options) {
            this.options = this.mergeOptions(options);
        },

        /**
         * Merges the given options with the default options.
         *
         * @param {Array} options
         * @returns {Array}
         */
        mergeOptions: function(options) {
            return $.extend(true, {}, this.defaults, this.options, options);
        },

        /**
         * Checks whether a select all checkbox is present.
         *
         * @returns {Boolean}
         */
        hasSelectAll: function() {
            return $('li.multiselect-all', this.$ul).length > 0;
        },

        /**
         * Updates the select all checkbox based on the currently displayed and selected checkboxes.
         */
        updateSelectAll: function(notTriggerOnSelectAll) {
            if (this.hasSelectAll()) {
                var allBoxes = $("li:not(.multiselect-item):not(.filter-hidden) input:enabled", this.$ul);
                var allBoxesLength = allBoxes.length;
                var checkedBoxesLength = allBoxes.filter(":checked").length;
                var selectAllLi  = $("li.multiselect-all", this.$ul);
                var selectAllInput = selectAllLi.find("input");
                
                if (checkedBoxesLength > 0 && checkedBoxesLength === allBoxesLength) {
                    selectAllInput.prop("checked", true);
                    selectAllLi.addClass(this.options.selectedClass);
                    this.options.onSelectAll(true);
                }
                else {
                    selectAllInput.prop("checked", false);
                    selectAllLi.removeClass(this.options.selectedClass);
                    if (checkedBoxesLength === 0) {
                        if (!notTriggerOnSelectAll) {
                            this.options.onSelectAll(false);
                        }
                    }
                }
            }
        },

        /**
         * Update the button text and its title based on the currently selected options.
         */
        updateButtonText: function() {
            var options = this.getSelected();
            
            // First update the displayed button text.
            if (this.options.enableHTML) {
                $('.multiselect .multiselect-selected-text', this.$container).html(this.options.buttonText(options, this.$select));
            }
            else {
                $('.multiselect .multiselect-selected-text', this.$container).text(this.options.buttonText(options, this.$select));
            }
            
            // Now update the title attribute of the button.
            $('.multiselect', this.$container).attr('title', this.options.buttonTitle(options, this.$select));
        },

        /**
         * Get all selected options.
         *
         * @returns {jQUery}
         */
        getSelected: function() {
            return $('option', this.$select).filter(":selected");
        },

        /**
         * Gets a select option by its value.
         *
         * @param {String} value
         * @returns {jQuery}
         */
        getOptionByValue: function (value) {

            var options = $('option', this.$select);
            var valueToCompare = value.toString();

            for (var i = 0; i < options.length; i = i + 1) {
                var option = options[i];
                if (option.value === valueToCompare) {
                    return $(option);
                }
            }
        },

        /**
         * Get the input (radio/checkbox) by its value.
         *
         * @param {String} value
         * @returns {jQuery}
         */
        getInputByValue: function (value) {

            var checkboxes = $('li input', this.$ul);
            var valueToCompare = value.toString();

            for (var i = 0; i < checkboxes.length; i = i + 1) {
                var checkbox = checkboxes[i];
                if (checkbox.value === valueToCompare) {
                    return $(checkbox);
                }
            }
        },

        /**
         * Used for knockout integration.
         */
        updateOriginalOptions: function() {
            this.originalOptions = this.$select.clone()[0].options;
        },

        asyncFunction: function(callback, timeout, self) {
            var args = Array.prototype.slice.call(arguments, 3);
            return setTimeout(function() {
                callback.apply(self || window, args);
            }, timeout);
        },

        setAllSelectedText: function(allSelectedText) {
            this.options.allSelectedText = allSelectedText;
            this.updateButtonText();
        }
    };

    $.fn.multiselect = function(option, parameter, extraOptions) {
        return this.each(function() {
            var data = $(this).data('multiselect');
            var options = typeof option === 'object' && option;

            // Initialize the multiselect.
            if (!data) {
                data = new Multiselect(this, options);
                $(this).data('multiselect', data);
            }

            // Call multiselect method.
            if (typeof option === 'string') {
                data[option](parameter, extraOptions);
                
                if (option === 'destroy') {
                    $(this).data('multiselect', false);
                }
            }
        });
    };

    $.fn.multiselect.Constructor = Multiselect;

    $(function() {
        $("select[data-role=multiselect]").multiselect();
    });

}(window.jQuery);

function initializeCkEditor(element) {
    if (CKEDITOR.instances[element]) {
        delete CKEDITOR.instances[element];
    }

    var ckeditor_element = CKEDITOR.replace(element, {
        "toolbar": [["Cut", "Copy", "Paste", "PasteText", "PasteFromWord"], ["Undo", "Redo"], ["Scayt"], ["Unlink", "Link"], ["Table", "HorizontalRule", "SpecialChar"], ["Maximize"], "\/", ["Bold", "Italic", "Underline", "Strike"], ["NumberedList", "BulletedList", "Indent", "Outdent"]],
        "skin": "office2013,\/bundles\/pidzuser\/skins\/office2013\/",
        "language": "nl"
    });

    ckeditor_element.on('change', function () {
        ckeditor_element.updateElement();
    });
}


/** GLOBALS **/
var submitActor = null;

/**
 * resizes the menu based on view width
 */
function resizeCallBack() {
    var leftMenuCheckBox = $("#togglingMenu");
    var leftMenu = $(".navbar-static-side, #page-wrapper, #right-wrapper");

    if (leftMenu.length > 0 && $(document).innerWidth() > 767) {
        if (!leftMenuCheckBox.prop("checked")) {
            leftMenu.addClass('notransition'); // Disable transitions
            leftMenuCheckBox.prop("checked", true).trigger("change");
            leftMenu[0].offsetHeight; // Trigger a reflow, flushing the CSS changes
            leftMenu.removeClass('notransition'); // Re-enable transitions
        }
    }
    else {
        if (leftMenuCheckBox.prop("checked")) {
            leftMenuCheckBox.prop("checked", false).trigger("change");
        }
    }
}

/**
 * Generates a random unique Guid
 * @returns {string}
 */
function guidGenerator() {
    var S4 = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}

function hysDetailsOpenInTable(el) {
    var table = $(el).closest("table");
    var blockCollapsed = $(el).parent().children('.collapse');

    var activeLi = $('ul.nav-tabs li.active', blockCollapsed);

    var openedTabs = $('ul.nav-tabs li.active a:visible', table);
    if (openedTabs.length > 0) {
        hysDetailsCloseInTable(openedTabs);
    }

    var elementPosition = $(el).position();

    var tr = $(el).closest("tr").addClass("openedDetails");
    var trPosition = tr.position();

    if (elementPosition === null || elementPosition.top === null || elementPosition.left === null) {
        return false;
    }

    jQuery(el).hide();

    activeLi.css("left", elementPosition.left / table.width() * 100 + "%");
    blockCollapsed.css("top", elementPosition.top).on("shown.bs.collapse", function () {
        var heightOfExpandedArea = blockCollapsed.height();
        tr.outerHeight(heightOfExpandedArea + (elementPosition.top - trPosition.top));
    }).collapse('show');
    return false;
}

function hysDetailsCloseInTable(el, externallyCalled) {
    $(el).parent().parent().parent().parent().collapse('hide');

    $(el).parent().parent().parent().parent().on('hidden.bs.collapse', function () {
        $(el).parent().parent().parent().parent().parent().children('button').show();
    });

    var tr = $(el).closest("tr").removeClass("openedDetails");
    tr.height("auto");

    return false;
}

/**
 * Closes the given popover
 * @param popover
 */
function closePopover(popover) {
    $(popover).popover('hide');
}

/**
 * Close all popovers on the page
 */
function closePopovers() {
    $("[data-toggle='popover']").popover('hide');
}

/**
 * Update the menu items badge with the given route to the given value. A badge will be created if there is none yet.
 * @param route
 * @param value
 */
function addMenuBadge(route, value) {
    var $menuLink = $('.nav').find('a[href="' + route + '"]');
    var $badge = $menuLink.find('.label-warning');
    if (value !== '-') {
        //value is not - so update current badge or create a new one
        if ($badge.length > 0) {
            $badge.text(value);
        } else {
            var content = '<span class="label label-warning">' + value + '</span>';
            $menuLink.append(content);
        }
    } else {
        //value is now - so check if there is an existing badge that needs to be removed
        if ($badge.length > 0) {
            $badge.remove();
        }
    }
}

/**
 * Add a flashmessage to the flashbag_holder with default type danger (other options are success, warning)
 * @param message
 * @param type
 * @param inTab
 */
function addFlash(message, type, inTab) {
    if (undefined === type) {
        type = 'danger';
    }
    if (inTab) {
        $('#flashbag_holder_tab').html('<div class="alert alert-' + type + ' fade in"> <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>' + message + '</div>')
    } else {
        $('#flashbag_holder').html('<div class="alert alert-' + type + ' fade in"> <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>' + message + '</div>')
    }
}

/**
 * Appends a flashmessage to the flashbag_holder with default type danger (other options are success, warning)
 * @param message
 * @param type
 * @param inTab
 */
function appendFlash(message, type, inTab) {
    if (undefined === type) {
        type = 'danger';
    }
    if (inTab) {
        $('#flashbag_holder_tab').append('<div class="alert alert-' + type + ' fade in"> <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>' + message + '</div>')
    } else {
        $('#flashbag_holder').append('<div class="alert alert-' + type + ' fade in"> <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>' + message + '</div>')
    }
}

/** This array contains all functions to call on pageload (or ajaxLoad) to initialize all javascript elements */
var registerFunctions = [baseRegister];
/** This array contains all functions to call after page initialization */
var executeAfterInit = [];

/**
 * This function needs to be called for each dynamically added element on a page to ensure that all javascript libraries work
 * @param element
 */
function registerElement(element) {
    for (var func in registerFunctions) {
        registerFunctions[func](element);
    }
}

/**
 * Basic function that always needs to be part of the register element array that will load on every page
 * @param element
 */
function baseRegister(element) {
    //Each h-multiselects and h-select will get the multiselect.js makeover with default non and all selected texts
    $.each(element.find('.h-multiselects, .h-selects'), function (index, element) {
        var options = {
            nonSelectedText: TWIG.nonSelectedText,
            allSelectedText: TWIG.allSelectedText,
            selectAllText: TWIG.selectAllText,
            nSelectedText: TWIG.nSelectedText,
            maxHeight: 300,
            disableIfEmpty: true
        };
        if ($(element).hasClass('searchable')) {
            options = $.extend(options, {
                enableCaseInsensitiveFiltering: true,
                filterBehavior: 'both',
                onDropdownShown: function (event) {
                    this.$filter.find('.multiselect-search').focus();
                }
            });
        }
        if ($(element).hasClass('select-all')) {
            options = $.extend(options, {
                includeSelectAllOption: true
            });
        }

        $(element).multiselect(options);

    });

    //Add the dotdotdot library to all .ellipsis-multiline classes
    $(".ellipsis-multiline").dotdotdot({
        watch: true
    });

    //Show hidden classes that have a form error
    element.find('input.error-input').each(function (e) {
        if ($(this).is(":hidden") && !$(this).hasClass('h-selects') && !$(this).hasClass('h-multiselects')) {
            $(this).closest('.collapse').collapse('show');
        }
    });
    element.find('input, select, textarea').on('invalid', function (e) {
        if ($(this).prop('required')) {
            if ($(this).is(":hidden") && !$(this).hasClass('h-selects') && !$(this).hasClass('h-multiselects')) {
                $(this).closest('.collapse').collapse('show');
            }
            //Do not remove the double call here... For some reason only the second time the alignment of the prompt is right
            $(this).validationEngine('showPrompt', TWIG.emptyInput, 'load', 'topLeft', true);
            $(this).validationEngine('showPrompt', TWIG.emptyInput, 'load', 'topLeft', true);
            if ($(this).hasClass('h-selects') || $(this).hasClass('h-multiselects')) {
                $(this).one('change', function () {
                    $(this).validationEngine('hide');
                });
            } else {
                $(this).one('focus', function () {
                    $(this).validationEngine('hide');
                });
            }
            e.preventDefault();
        }
    });

    //Initialize data-toggle popover classes with html content unless disabled
    var popovers = element.find('[data-toggle="popover"]:not(.disabled):not([disabled="disabled"])');
    popovers.each(function () {
        $(this).popover({
            html: true
        });

        $(this).on('shown.bs.popover', function (e) {
            registerElement($(this).parent().find('.popover-content'));
        });
    });

    //Enable all tooltips in all pages that have the data-toggle['tooltip']
    element.find('[data-toggle="tooltip"]').tooltip({
        animation: false,
        html: true
    });

    //Register all single and double datepicker elements
    registerPickerElement(element);

    //Register onTimeChange listener on any type=time element or elements with the class onTimeChange
    element.find('input[type="time"]').on('change', onTimeChange);
    element.find('.onTimeChange').on('change', onTimeChange);

    // add clicklisteners on the pagination and sortable buttons to resubmit the data from the filter form
    element.find(".sortable a").on('click', onPaginateClick);
    element.find(".pagination li a").on('click', onPaginateClick);

    // Add listener to submit buttons to set a global submitActor variable
    var submitActors = element.find('[type=submit]:not(.no-spinner)');
    submitActors.click(function (event) {
        submitActor = this;
        var $form = $(this).parents("form")[0];

        // If submit button is SubmitFilterType, remove the 'page=xx' from url parameterss
        if ($(submitActor).hasClass('filter_button')) {
            var newAction = $form.action;
            if ($form.action === "") {
                newAction = $form.baseURI;
            }
            $form.action = removeURLParameter(newAction, "page");
        }

        if ($form.checkValidity()) {
            // Add the clicked input as a hidden field to the form to support symfony's isClicked functionality on submit types
            var clickInput = $("<input>")
                .attr("type", "hidden")
                .attr("name", $(submitActor).prop("name"))
                .val("");
            $form.append(clickInput[0]);
            // Disable all submitactors on the page
            submitActors.each(function () {
                var $submitActor = $(this);
                $submitActor.prop('disabled', true);
            });
            // Show the spinner of the clicked submit actor
            $(submitActor).find('#fa_spinner').removeClass('hidden');
            // Create a submit event that will be fired to execute onSubmit listeners already bound to the form
            event = document.createEvent("HTMLEvents");
            event.initEvent("submit", true, true);
            // If the submit is not cancelled by the listener (e.preventDefault). We should still submit the actual form
            if ($form.dispatchEvent(event)) {
                $form.submit();
            }
        }
        return false;
    });
    // Set a small timeout on flashmessages to "fade in"
    setTimeout(function () {
        element.find(".alert").addClass("in");
    }, 250);

    element.find('.select2entity[data-autostart="true"]').select2entity();
}

function onPaginateClick(e) {
    var form = $('#filter-tr').find('form');
    if (form.length > 0) {
        // If there is a filter form present on the page then prevent original href behavior Set the href in the action from the form and submit the form to get all data in the new response.
        e.preventDefault();
        form.attr('action', e.currentTarget.href);
        form.submit();
    }
}

//This function removed a specific query parameter from a URL
function removeURLParameter(url, parameter) {
    //prefer to use l.search if you have a location/link object
    var urlparts = url.split('?');
    if (urlparts.length >= 2) {

        var prefix = encodeURIComponent(parameter) + '=';
        var pars = urlparts[1].split(/[&;]/g);

        //reverse iteration as may be destructive
        for (var i = pars.length; i-- > 0;) {
            //idiom for string.startsWith
            if (pars[i].lastIndexOf(prefix, 0) !== -1) {
                pars.splice(i, 1);
            }
        }

        url = urlparts[0] + (pars.length > 0 ? '?' + pars.join('&') : "");
        return url;
    } else {
        return url;
    }
}

function formatMoney(amount) {
    return '€' + (amount).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
}

//This function checks if the control key is pressed, if so the page will be loaded in a new tab.
function onClickTr(event, url) {
    if (event.ctrlKey) {
        window.open(url);
    } else {
        window.location = url;
    }
}

// On document ready call the correct functions to initialize all javascript libraries
$(function () {
    resizeCallBack();
    registerElement($(document));
    for (func in executeAfterInit) {
        executeAfterInit[func]();
    }

    $(".navbar-static-side .nav:not(.nav-second-level) > li > a ~ .nav-second-level").on("show.bs.collapse", function () {
        $(this).closest(".navbar-static-side").find(".nav:not(.nav-second-level) > li > a[data-toggle='collapse']:not(.collapsed) ~ .nav-second-level").collapse('hide');
    });

    // Set a small timeout on flashmessages to "fade in"
    setTimeout(function () {
        $(".alert").addClass("in");
    }, 250);

    // Timeout to flip the logo in the top left corner
    setTimeout(function () {
        $('.flip-container').toggleClass("flip");
    }, 3000);
});

var request = null;

$(function () {
    //Register the change event to a locationUpdateListener
    var country = $('.country-input.get-coordinates').on('change', locationUpdate);
    var number = $('.number-input.get-coordinates').on('change', locationUpdate);
    var street = $('.street-input.get-coordinates').on('change', locationUpdate);
    var city = $('.city-input.get-coordinates').on('change', locationUpdate);

    function locationUpdate() {
        if (request) {
            request.abort();
        }

        var cityVal = city.val();
        var streetVal = street.val();
        var countryVal = country.val();
        var numberVal = number.val();

        if (cityVal !== "" && streetVal !== "" && countryVal !== "" && numberVal !== "") {
            $('input[type="submit"], button[type="submit"]').attr('disabled', 'disabled').find('#fa_spinner');
            request = $.getJSON("/location/validate/", {
                "country": countryVal,
                "city": cityVal,
                "street": streetVal,
                "number": numberVal
            })
                .done(function( data ) {
                    if (data === "error") {
                        street.validationEngine('showPrompt', 'Het opgegeven adres kan niet gevonden worden.', 'sometype', 'topLeft', true);
                    } else {
                        street.validationEngine('hideAll');
                        $('.latitude-input').val(data.latitude);
                        $('.longitude-input').val(data.longitude);
                    }
                    $('input[type="submit"], button[type="submit"]').removeAttr('disabled').find('#fa_spinner').addClass('hidden');
                })
                .fail(function () {
                    street.validationEngine('showPrompt', 'Er is iets mis gegaan met het ophalen van de locatie via Google Maps.', 'sometype', 'topLeft', true);
                    $('input[type="submit"], button[type="submit"]').removeAttr('disabled');
                })
                .always(function() {
                    request = null;
                });
        }
    }
});

// ==ClosureCompiler==
// @compilation_level ADVANCED_OPTIMIZATIONS
// @externs_url https://raw.githubusercontent.com/google/closure-compiler/master/contrib/externs/maps/google_maps_api_v3.js
// ==/ClosureCompiler==

/**
 * @name MarkerClusterer for Google Maps v3
 * @version version 1.0
 * @author Luke Mahe
 * @fileoverview
 * The library creates and manages per-zoom-level clusters for large amounts of
 * markers.
 * <br/>
 * This is a v3 implementation of the
 * <a href="http://gmaps-utility-library-dev.googlecode.com/svn/tags/markerclusterer/"
 * >v2 MarkerClusterer</a>.
 */

/**
 * @license
 * Copyright 2010 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * A Marker Clusterer that clusters markers.
 *
 * @param {google.maps.Map} map The Google map to attach to.
 * @param {Array.<google.maps.Marker>=} opt_markers Optional markers to add to
 *   the cluster.
 * @param {Object=} opt_options support the following options:
 *     'gridSize': (number) The grid size of a cluster in pixels.
 *     'maxZoom': (number) The maximum zoom level that a marker can be part of a
 *                cluster.
 *     'zoomOnClick': (boolean) Whether the default behaviour of clicking on a
 *                    cluster is to zoom into it.
 *     'averageCenter': (boolean) Whether the center of each cluster should be
 *                      the average of all markers in the cluster.
 *     'minimumClusterSize': (number) The minimum number of markers to be in a
 *                           cluster before the markers are hidden and a count
 *                           is shown.
 *     'styles': (object) An object that has style properties:
 *       'url': (string) The image url.
 *       'height': (number) The image height.
 *       'width': (number) The image width.
 *       'anchor': (Array) The anchor position of the label text.
 *       'textColor': (string) The text color.
 *       'textSize': (number) The text size.
 *       'backgroundPosition': (string) The position of the backgound x, y.
 *       'iconAnchor': (Array) The anchor position of the icon x, y.
 * @constructor
 * @extends google.maps.OverlayView
 */
function MarkerClusterer(map, opt_markers, opt_options) {
  // MarkerClusterer implements google.maps.OverlayView interface. We use the
  // extend function to extend MarkerClusterer with google.maps.OverlayView
  // because it might not always be available when the code is defined so we
  // look for it at the last possible moment. If it doesn't exist now then
  // there is no point going ahead :)
  this.extend(MarkerClusterer, google.maps.OverlayView);
  this.map_ = map;

  /**
   * @type {Array.<google.maps.Marker>}
   * @private
   */
  this.markers_ = [];

  /**
   *  @type {Array.<Cluster>}
   */
  this.clusters_ = [];

  this.sizes = [53, 56, 66, 78, 90];

  /**
   * @private
   */
  this.styles_ = [];

  /**
   * @type {boolean}
   * @private
   */
  this.ready_ = false;

  var options = opt_options || {};

  /**
   * @type {number}
   * @private
   */
  this.gridSize_ = options['gridSize'] || 60;

  /**
   * @private
   */
  this.minClusterSize_ = options['minimumClusterSize'] || 2;


  /**
   * @type {?number}
   * @private
   */
  this.maxZoom_ = options['maxZoom'] || null;

  this.styles_ = options['styles'] || [];

  /**
   * @type {string}
   * @private
   */
  this.imagePath_ = options['imagePath'] ||
      this.MARKER_CLUSTER_IMAGE_PATH_;

  /**
   * @type {string}
   * @private
   */
  this.imageExtension_ = options['imageExtension'] ||
      this.MARKER_CLUSTER_IMAGE_EXTENSION_;

  /**
   * @type {boolean}
   * @private
   */
  this.zoomOnClick_ = true;

  if (options['zoomOnClick'] != undefined) {
    this.zoomOnClick_ = options['zoomOnClick'];
  }

  /**
   * @type {boolean}
   * @private
   */
  this.averageCenter_ = false;

  if (options['averageCenter'] != undefined) {
    this.averageCenter_ = options['averageCenter'];
  }

  this.setupStyles_();

  this.setMap(map);

  /**
   * @type {number}
   * @private
   */
  this.prevZoom_ = this.map_.getZoom();

  // Add the map event listeners
  var that = this;
  google.maps.event.addListener(this.map_, 'zoom_changed', function() {
    var zoom = that.map_.getZoom();

    if (that.prevZoom_ != zoom) {
      that.prevZoom_ = zoom;
      that.resetViewport();
    }
  });

  google.maps.event.addListener(this.map_, 'idle', function() {
    that.redraw();
  });

  // Finally, add the markers
  if (opt_markers && opt_markers.length) {
    this.addMarkers(opt_markers, false);
  }
}


/**
 * The marker cluster image path.
 *
 * @type {string}
 * @private
 */
MarkerClusterer.prototype.MARKER_CLUSTER_IMAGE_PATH_ = '../images/m';


/**
 * The marker cluster image path.
 *
 * @type {string}
 * @private
 */
MarkerClusterer.prototype.MARKER_CLUSTER_IMAGE_EXTENSION_ = 'png';


/**
 * Extends a objects prototype by anothers.
 *
 * @param {Object} obj1 The object to be extended.
 * @param {Object} obj2 The object to extend with.
 * @return {Object} The new extended object.
 * @ignore
 */
MarkerClusterer.prototype.extend = function(obj1, obj2) {
  return (function(object) {
    for (var property in object.prototype) {
      this.prototype[property] = object.prototype[property];
    }
    return this;
  }).apply(obj1, [obj2]);
};


/**
 * Implementaion of the interface method.
 * @ignore
 */
MarkerClusterer.prototype.onAdd = function() {
  this.setReady_(true);
};

/**
 * Implementaion of the interface method.
 * @ignore
 */
MarkerClusterer.prototype.draw = function() {};

/**
 * Sets up the styles object.
 *
 * @private
 */
MarkerClusterer.prototype.setupStyles_ = function() {
  if (this.styles_.length) {
    return;
  }

  for (var i = 0, size; size = this.sizes[i]; i++) {
    this.styles_.push({
      url: this.imagePath_ + (i + 1) + '.' + this.imageExtension_,
      height: size,
      width: size
    });
  }
};

/**
 *  Fit the map to the bounds of the markers in the clusterer.
 */
MarkerClusterer.prototype.fitMapToMarkers = function() {
  var markers = this.getMarkers();
  var bounds = new google.maps.LatLngBounds();
  for (var i = 0, marker; marker = markers[i]; i++) {
    bounds.extend(marker.getPosition());
  }

  this.map_.fitBounds(bounds);
};


/**
 *  Sets the styles.
 *
 *  @param {Object} styles The style to set.
 */
MarkerClusterer.prototype.setStyles = function(styles) {
  this.styles_ = styles;
};


/**
 *  Gets the styles.
 *
 *  @return {Object} The styles object.
 */
MarkerClusterer.prototype.getStyles = function() {
  return this.styles_;
};


/**
 * Whether zoom on click is set.
 *
 * @return {boolean} True if zoomOnClick_ is set.
 */
MarkerClusterer.prototype.isZoomOnClick = function() {
  return this.zoomOnClick_;
};

/**
 * Whether average center is set.
 *
 * @return {boolean} True if averageCenter_ is set.
 */
MarkerClusterer.prototype.isAverageCenter = function() {
  return this.averageCenter_;
};


/**
 *  Returns the array of markers in the clusterer.
 *
 *  @return {Array.<google.maps.Marker>} The markers.
 */
MarkerClusterer.prototype.getMarkers = function() {
  return this.markers_;
};


/**
 *  Returns the number of markers in the clusterer
 *
 *  @return {Number} The number of markers.
 */
MarkerClusterer.prototype.getTotalMarkers = function() {
  return this.markers_.length;
};


/**
 *  Sets the max zoom for the clusterer.
 *
 *  @param {number} maxZoom The max zoom level.
 */
MarkerClusterer.prototype.setMaxZoom = function(maxZoom) {
  this.maxZoom_ = maxZoom;
};


/**
 *  Gets the max zoom for the clusterer.
 *
 *  @return {number} The max zoom level.
 */
MarkerClusterer.prototype.getMaxZoom = function() {
  return this.maxZoom_;
};


/**
 *  The function for calculating the cluster icon image.
 *
 *  @param {Array.<google.maps.Marker>} markers The markers in the clusterer.
 *  @param {number} numStyles The number of styles available.
 *  @return {Object} A object properties: 'text' (string) and 'index' (number).
 *  @private
 */
MarkerClusterer.prototype.calculator_ = function(markers, numStyles) {
  var index = 0;
  var count = markers.length;
  var dv = count;
  while (dv !== 0) {
    dv = parseInt(dv / 10, 10);
    index++;
  }

  index = Math.min(index, numStyles);
  return {
    text: count,
    index: index
  };
};


/**
 * Set the calculator function.
 *
 * @param {function(Array, number)} calculator The function to set as the
 *     calculator. The function should return a object properties:
 *     'text' (string) and 'index' (number).
 *
 */
MarkerClusterer.prototype.setCalculator = function(calculator) {
  this.calculator_ = calculator;
};


/**
 * Get the calculator function.
 *
 * @return {function(Array, number)} the calculator function.
 */
MarkerClusterer.prototype.getCalculator = function() {
  return this.calculator_;
};


/**
 * Add an array of markers to the clusterer.
 *
 * @param {Array.<google.maps.Marker>} markers The markers to add.
 * @param {boolean=} opt_nodraw Whether to redraw the clusters.
 */
MarkerClusterer.prototype.addMarkers = function(markers, opt_nodraw) {
  for (var i = 0, marker; marker = markers[i]; i++) {
    this.pushMarkerTo_(marker);
  }
  if (!opt_nodraw) {
    this.redraw();
  }
};


/**
 * Pushes a marker to the clusterer.
 *
 * @param {google.maps.Marker} marker The marker to add.
 * @private
 */
MarkerClusterer.prototype.pushMarkerTo_ = function(marker) {
  marker.isAdded = false;
  if (marker['draggable']) {
    // If the marker is draggable add a listener so we update the clusters on
    // the drag end.
    var that = this;
    google.maps.event.addListener(marker, 'dragend', function() {
      marker.isAdded = false;
      that.repaint();
    });
  }
  this.markers_.push(marker);
};


/**
 * Adds a marker to the clusterer and redraws if needed.
 *
 * @param {google.maps.Marker} marker The marker to add.
 * @param {boolean=} opt_nodraw Whether to redraw the clusters.
 */
MarkerClusterer.prototype.addMarker = function(marker, opt_nodraw) {
  this.pushMarkerTo_(marker);
  if (!opt_nodraw) {
    this.redraw();
  }
};


/**
 * Removes a marker and returns true if removed, false if not
 *
 * @param {google.maps.Marker} marker The marker to remove
 * @return {boolean} Whether the marker was removed or not
 * @private
 */
MarkerClusterer.prototype.removeMarker_ = function(marker) {
  var index = -1;
  if (this.markers_.indexOf) {
    index = this.markers_.indexOf(marker);
  } else {
    for (var i = 0, m; m = this.markers_[i]; i++) {
      if (m == marker) {
        index = i;
        break;
      }
    }
  }

  if (index == -1) {
    // Marker is not in our list of markers.
    return false;
  }

  marker.setMap(null);

  this.markers_.splice(index, 1);

  return true;
};


/**
 * Remove a marker from the cluster.
 *
 * @param {google.maps.Marker} marker The marker to remove.
 * @param {boolean=} opt_nodraw Optional boolean to force no redraw.
 * @return {boolean} True if the marker was removed.
 */
MarkerClusterer.prototype.removeMarker = function(marker, opt_nodraw) {
  var removed = this.removeMarker_(marker);

  if (!opt_nodraw && removed) {
    this.resetViewport();
    this.redraw();
    return true;
  } else {
   return false;
  }
};


/**
 * Removes an array of markers from the cluster.
 *
 * @param {Array.<google.maps.Marker>} markers The markers to remove.
 * @param {boolean=} opt_nodraw Optional boolean to force no redraw.
 */
MarkerClusterer.prototype.removeMarkers = function(markers, opt_nodraw) {
  var removed = false;

  for (var i = 0, marker; marker = markers[i]; i++) {
    var r = this.removeMarker_(marker);
    removed = removed || r;
  }

  if (!opt_nodraw && removed) {
    this.resetViewport();
    this.redraw();
    return true;
  }
};


/**
 * Sets the clusterer's ready state.
 *
 * @param {boolean} ready The state.
 * @private
 */
MarkerClusterer.prototype.setReady_ = function(ready) {
  if (!this.ready_) {
    this.ready_ = ready;
    this.createClusters_();
  }
};


/**
 * Returns the number of clusters in the clusterer.
 *
 * @return {number} The number of clusters.
 */
MarkerClusterer.prototype.getTotalClusters = function() {
  return this.clusters_.length;
};


/**
 * Returns the google map that the clusterer is associated with.
 *
 * @return {google.maps.Map} The map.
 */
MarkerClusterer.prototype.getMap = function() {
  return this.map_;
};


/**
 * Sets the google map that the clusterer is associated with.
 *
 * @param {google.maps.Map} map The map.
 */
MarkerClusterer.prototype.setMap = function(map) {
  this.map_ = map;
};


/**
 * Returns the size of the grid.
 *
 * @return {number} The grid size.
 */
MarkerClusterer.prototype.getGridSize = function() {
  return this.gridSize_;
};


/**
 * Sets the size of the grid.
 *
 * @param {number} size The grid size.
 */
MarkerClusterer.prototype.setGridSize = function(size) {
  this.gridSize_ = size;
};


/**
 * Returns the min cluster size.
 *
 * @return {number} The grid size.
 */
MarkerClusterer.prototype.getMinClusterSize = function() {
  return this.minClusterSize_;
};

/**
 * Sets the min cluster size.
 *
 * @param {number} size The grid size.
 */
MarkerClusterer.prototype.setMinClusterSize = function(size) {
  this.minClusterSize_ = size;
};


/**
 * Extends a bounds object by the grid size.
 *
 * @param {google.maps.LatLngBounds} bounds The bounds to extend.
 * @return {google.maps.LatLngBounds} The extended bounds.
 */
MarkerClusterer.prototype.getExtendedBounds = function(bounds) {
  var projection = this.getProjection();

  // Turn the bounds into latlng.
  var tr = new google.maps.LatLng(bounds.getNorthEast().lat(),
      bounds.getNorthEast().lng());
  var bl = new google.maps.LatLng(bounds.getSouthWest().lat(),
      bounds.getSouthWest().lng());

  // Convert the points to pixels and the extend out by the grid size.
  var trPix = projection.fromLatLngToDivPixel(tr);
  trPix.x += this.gridSize_;
  trPix.y -= this.gridSize_;

  var blPix = projection.fromLatLngToDivPixel(bl);
  blPix.x -= this.gridSize_;
  blPix.y += this.gridSize_;

  // Convert the pixel points back to LatLng
  var ne = projection.fromDivPixelToLatLng(trPix);
  var sw = projection.fromDivPixelToLatLng(blPix);

  // Extend the bounds to contain the new bounds.
  bounds.extend(ne);
  bounds.extend(sw);

  return bounds;
};


/**
 * Determins if a marker is contained in a bounds.
 *
 * @param {google.maps.Marker} marker The marker to check.
 * @param {google.maps.LatLngBounds} bounds The bounds to check against.
 * @return {boolean} True if the marker is in the bounds.
 * @private
 */
MarkerClusterer.prototype.isMarkerInBounds_ = function(marker, bounds) {
  return bounds.contains(marker.getPosition());
};


/**
 * Clears all clusters and markers from the clusterer.
 */
MarkerClusterer.prototype.clearMarkers = function() {
  this.resetViewport(true);

  // Set the markers a empty array.
  this.markers_ = [];
};


/**
 * Clears all existing clusters and recreates them.
 * @param {boolean} opt_hide To also hide the marker.
 */
MarkerClusterer.prototype.resetViewport = function(opt_hide) {
  // Remove all the clusters
  for (var i = 0, cluster; cluster = this.clusters_[i]; i++) {
    cluster.remove();
  }

  // Reset the markers to not be added and to be invisible.
  for (var i = 0, marker; marker = this.markers_[i]; i++) {
    marker.isAdded = false;
    if (opt_hide) {
      marker.setMap(null);
    }
  }

  this.clusters_ = [];
};

/**
 *
 */
MarkerClusterer.prototype.repaint = function() {
  var oldClusters = this.clusters_.slice();
  this.clusters_.length = 0;
  this.resetViewport();
  this.redraw();

  // Remove the old clusters.
  // Do it in a timeout so the other clusters have been drawn first.
  window.setTimeout(function() {
    for (var i = 0, cluster; cluster = oldClusters[i]; i++) {
      cluster.remove();
    }
  }, 0);
};


/**
 * Redraws the clusters.
 */
MarkerClusterer.prototype.redraw = function() {
  this.createClusters_();
};


/**
 * Calculates the distance between two latlng locations in km.
 * @see http://www.movable-type.co.uk/scripts/latlong.html
 *
 * @param {google.maps.LatLng} p1 The first lat lng point.
 * @param {google.maps.LatLng} p2 The second lat lng point.
 * @return {number} The distance between the two points in km.
 * @private
*/
MarkerClusterer.prototype.distanceBetweenPoints_ = function(p1, p2) {
  if (!p1 || !p2) {
    return 0;
  }

  var R = 6371; // Radius of the Earth in km
  var dLat = (p2.lat() - p1.lat()) * Math.PI / 180;
  var dLon = (p2.lng() - p1.lng()) * Math.PI / 180;
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(p1.lat() * Math.PI / 180) * Math.cos(p2.lat() * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d;
};


/**
 * Add a marker to a cluster, or creates a new cluster.
 *
 * @param {google.maps.Marker} marker The marker to add.
 * @private
 */
MarkerClusterer.prototype.addToClosestCluster_ = function(marker) {
  var distance = 40000; // Some large number
  var clusterToAddTo = null;
  var pos = marker.getPosition();
  for (var i = 0, cluster; cluster = this.clusters_[i]; i++) {
    var center = cluster.getCenter();
    if (center) {
      var d = this.distanceBetweenPoints_(center, marker.getPosition());
      if (d < distance) {
        distance = d;
        clusterToAddTo = cluster;
      }
    }
  }

  if (clusterToAddTo && clusterToAddTo.isMarkerInClusterBounds(marker)) {
    clusterToAddTo.addMarker(marker);
  } else {
    var cluster = new Cluster(this);
    cluster.addMarker(marker);
    this.clusters_.push(cluster);
  }
};


/**
 * Creates the clusters.
 *
 * @private
 */
MarkerClusterer.prototype.createClusters_ = function() {
  if (!this.ready_) {
    return;
  }

  // Get our current map view bounds.
  // Create a new bounds object so we don't affect the map.
  var mapBounds = new google.maps.LatLngBounds(this.map_.getBounds().getSouthWest(),
      this.map_.getBounds().getNorthEast());
  var bounds = this.getExtendedBounds(mapBounds);

  for (var i = 0, marker; marker = this.markers_[i]; i++) {
    if (!marker.isAdded && this.isMarkerInBounds_(marker, bounds)) {
      this.addToClosestCluster_(marker);
    }
  }
};


/**
 * A cluster that contains markers.
 *
 * @param {MarkerClusterer} markerClusterer The markerclusterer that this
 *     cluster is associated with.
 * @constructor
 * @ignore
 */
function Cluster(markerClusterer) {
  this.markerClusterer_ = markerClusterer;
  this.map_ = markerClusterer.getMap();
  this.gridSize_ = markerClusterer.getGridSize();
  this.minClusterSize_ = markerClusterer.getMinClusterSize();
  this.averageCenter_ = markerClusterer.isAverageCenter();
  this.center_ = null;
  this.markers_ = [];
  this.bounds_ = null;
  this.clusterIcon_ = new ClusterIcon(this, markerClusterer.getStyles(),
      markerClusterer.getGridSize());
}

/**
 * Determins if a marker is already added to the cluster.
 *
 * @param {google.maps.Marker} marker The marker to check.
 * @return {boolean} True if the marker is already added.
 */
Cluster.prototype.isMarkerAlreadyAdded = function(marker) {
  if (this.markers_.indexOf) {
    return this.markers_.indexOf(marker) != -1;
  } else {
    for (var i = 0, m; m = this.markers_[i]; i++) {
      if (m == marker) {
        return true;
      }
    }
  }
  return false;
};


/**
 * Add a marker the cluster.
 *
 * @param {google.maps.Marker} marker The marker to add.
 * @return {boolean} True if the marker was added.
 */
Cluster.prototype.addMarker = function(marker) {
  if (this.isMarkerAlreadyAdded(marker)) {
    return false;
  }

  if (!this.center_) {
    this.center_ = marker.getPosition();
    this.calculateBounds_();
  } else {
    if (this.averageCenter_) {
      var l = this.markers_.length + 1;
      var lat = (this.center_.lat() * (l-1) + marker.getPosition().lat()) / l;
      var lng = (this.center_.lng() * (l-1) + marker.getPosition().lng()) / l;
      this.center_ = new google.maps.LatLng(lat, lng);
      this.calculateBounds_();
    }
  }

  marker.isAdded = true;
  this.markers_.push(marker);

  var len = this.markers_.length;
  if (len < this.minClusterSize_ && marker.getMap() != this.map_) {
    // Min cluster size not reached so show the marker.
    marker.setMap(this.map_);
  }

  if (len == this.minClusterSize_) {
    // Hide the markers that were showing.
    for (var i = 0; i < len; i++) {
      this.markers_[i].setMap(null);
    }
  }

  if (len >= this.minClusterSize_) {
    marker.setMap(null);
  }

  this.updateIcon();
  return true;
};


/**
 * Returns the marker clusterer that the cluster is associated with.
 *
 * @return {MarkerClusterer} The associated marker clusterer.
 */
Cluster.prototype.getMarkerClusterer = function() {
  return this.markerClusterer_;
};


/**
 * Returns the bounds of the cluster.
 *
 * @return {google.maps.LatLngBounds} the cluster bounds.
 */
Cluster.prototype.getBounds = function() {
  var bounds = new google.maps.LatLngBounds(this.center_, this.center_);
  var markers = this.getMarkers();
  for (var i = 0, marker; marker = markers[i]; i++) {
    bounds.extend(marker.getPosition());
  }
  return bounds;
};


/**
 * Removes the cluster
 */
Cluster.prototype.remove = function() {
  this.clusterIcon_.remove();
  this.markers_.length = 0;
  delete this.markers_;
};


/**
 * Returns the center of the cluster.
 *
 * @return {number} The cluster center.
 */
Cluster.prototype.getSize = function() {
  return this.markers_.length;
};


/**
 * Returns the center of the cluster.
 *
 * @return {Array.<google.maps.Marker>} The cluster center.
 */
Cluster.prototype.getMarkers = function() {
  return this.markers_;
};


/**
 * Returns the center of the cluster.
 *
 * @return {google.maps.LatLng} The cluster center.
 */
Cluster.prototype.getCenter = function() {
  return this.center_;
};


/**
 * Calculated the extended bounds of the cluster with the grid.
 *
 * @private
 */
Cluster.prototype.calculateBounds_ = function() {
  var bounds = new google.maps.LatLngBounds(this.center_, this.center_);
  this.bounds_ = this.markerClusterer_.getExtendedBounds(bounds);
};


/**
 * Determines if a marker lies in the clusters bounds.
 *
 * @param {google.maps.Marker} marker The marker to check.
 * @return {boolean} True if the marker lies in the bounds.
 */
Cluster.prototype.isMarkerInClusterBounds = function(marker) {
  return this.bounds_.contains(marker.getPosition());
};


/**
 * Returns the map that the cluster is associated with.
 *
 * @return {google.maps.Map} The map.
 */
Cluster.prototype.getMap = function() {
  return this.map_;
};


/**
 * Updates the cluster icon
 */
Cluster.prototype.updateIcon = function() {
  var zoom = this.map_.getZoom();
  var mz = this.markerClusterer_.getMaxZoom();

  if (mz && zoom > mz) {
    // The zoom is greater than our max zoom so show all the markers in cluster.
    for (var i = 0, marker; marker = this.markers_[i]; i++) {
      marker.setMap(this.map_);
    }
    return;
  }

  if (this.markers_.length < this.minClusterSize_) {
    // Min cluster size not yet reached.
    this.clusterIcon_.hide();
    return;
  }

  var numStyles = this.markerClusterer_.getStyles().length;
  var sums = this.markerClusterer_.getCalculator()(this.markers_, numStyles);
  this.clusterIcon_.setCenter(this.center_);
  this.clusterIcon_.setSums(sums);
  this.clusterIcon_.show();
};


/**
 * A cluster icon
 *
 * @param {Cluster} cluster The cluster to be associated with.
 * @param {Object} styles An object that has style properties:
 *     'url': (string) The image url.
 *     'height': (number) The image height.
 *     'width': (number) The image width.
 *     'anchor': (Array) The anchor position of the label text.
 *     'textColor': (string) The text color.
 *     'textSize': (number) The text size.
 *     'backgroundPosition: (string) The background postition x, y.
 * @param {number=} opt_padding Optional padding to apply to the cluster icon.
 * @constructor
 * @extends google.maps.OverlayView
 * @ignore
 */
function ClusterIcon(cluster, styles, opt_padding) {
  cluster.getMarkerClusterer().extend(ClusterIcon, google.maps.OverlayView);

  this.styles_ = styles;
  this.padding_ = opt_padding || 0;
  this.cluster_ = cluster;
  this.center_ = null;
  this.map_ = cluster.getMap();
  this.div_ = null;
  this.sums_ = null;
  this.visible_ = false;

  this.setMap(this.map_);
}


/**
 * Triggers the clusterclick event and zoom's if the option is set.
 *
 * @param {google.maps.MouseEvent} event The event to propagate
 */
ClusterIcon.prototype.triggerClusterClick = function(event) {
  var markerClusterer = this.cluster_.getMarkerClusterer();

  // Trigger the clusterclick event.
  google.maps.event.trigger(markerClusterer, 'clusterclick', this.cluster_, event);

  if (markerClusterer.isZoomOnClick()) {
    // Zoom into the cluster.
    this.map_.fitBounds(this.cluster_.getBounds());
  }
};


/**
 * Adding the cluster icon to the dom.
 * @ignore
 */
ClusterIcon.prototype.onAdd = function() {
  this.div_ = document.createElement('DIV');
  if (this.visible_) {
    var pos = this.getPosFromLatLng_(this.center_);
    this.div_.style.cssText = this.createCss(pos);
    this.div_.innerHTML = this.sums_.text;
  }

  var panes = this.getPanes();
  panes.overlayMouseTarget.appendChild(this.div_);

  var that = this;
  var isDragging = false;
  google.maps.event.addDomListener(this.div_, 'click', function(event) {
    // Only perform click when not preceded by a drag
    if (!isDragging) {
      that.triggerClusterClick(event);
    }
  });
  google.maps.event.addDomListener(this.div_, 'mousedown', function() {
    isDragging = false;
  });
  google.maps.event.addDomListener(this.div_, 'mousemove', function() {
    isDragging = true;
  });
};


/**
 * Returns the position to place the div dending on the latlng.
 *
 * @param {google.maps.LatLng} latlng The position in latlng.
 * @return {google.maps.Point} The position in pixels.
 * @private
 */
ClusterIcon.prototype.getPosFromLatLng_ = function(latlng) {
  var pos = this.getProjection().fromLatLngToDivPixel(latlng);

  if (typeof this.iconAnchor_ === 'object' && this.iconAnchor_.length === 2) {
    pos.x -= this.iconAnchor_[0];
    pos.y -= this.iconAnchor_[1];
  } else {
    pos.x -= parseInt(this.width_ / 2, 10);
    pos.y -= parseInt(this.height_ / 2, 10);
  }
  return pos;
};


/**
 * Draw the icon.
 * @ignore
 */
ClusterIcon.prototype.draw = function() {
  if (this.visible_) {
    var pos = this.getPosFromLatLng_(this.center_);
    this.div_.style.top = pos.y + 'px';
    this.div_.style.left = pos.x + 'px';
  }
};


/**
 * Hide the icon.
 */
ClusterIcon.prototype.hide = function() {
  if (this.div_) {
    this.div_.style.display = 'none';
  }
  this.visible_ = false;
};


/**
 * Position and show the icon.
 */
ClusterIcon.prototype.show = function() {
  if (this.div_) {
    var pos = this.getPosFromLatLng_(this.center_);
    this.div_.style.cssText = this.createCss(pos);
    this.div_.style.display = '';
  }
  this.visible_ = true;
};


/**
 * Remove the icon from the map
 */
ClusterIcon.prototype.remove = function() {
  this.setMap(null);
};


/**
 * Implementation of the onRemove interface.
 * @ignore
 */
ClusterIcon.prototype.onRemove = function() {
  if (this.div_ && this.div_.parentNode) {
    this.hide();
    this.div_.parentNode.removeChild(this.div_);
    this.div_ = null;
  }
};


/**
 * Set the sums of the icon.
 *
 * @param {Object} sums The sums containing:
 *   'text': (string) The text to display in the icon.
 *   'index': (number) The style index of the icon.
 */
ClusterIcon.prototype.setSums = function(sums) {
  this.sums_ = sums;
  this.text_ = sums.text;
  this.index_ = sums.index;
  if (this.div_) {
    this.div_.innerHTML = sums.text;
  }

  this.useStyle();
};


/**
 * Sets the icon to the the styles.
 */
ClusterIcon.prototype.useStyle = function() {
  var index = Math.max(0, this.sums_.index - 1);
  index = Math.min(this.styles_.length - 1, index);
  var style = this.styles_[index];
  this.url_ = style['url'];
  this.height_ = style['height'];
  this.width_ = style['width'];
  this.textColor_ = style['textColor'];
  this.anchor_ = style['anchor'];
  this.textSize_ = style['textSize'];
  this.backgroundPosition_ = style['backgroundPosition'];
  this.iconAnchor_ = style['iconAnchor'];
};


/**
 * Sets the center of the icon.
 *
 * @param {google.maps.LatLng} center The latlng to set as the center.
 */
ClusterIcon.prototype.setCenter = function(center) {
  this.center_ = center;
};


/**
 * Create the css text based on the position of the icon.
 *
 * @param {google.maps.Point} pos The position.
 * @return {string} The css style text.
 */
ClusterIcon.prototype.createCss = function(pos) {
  var style = [];
  style.push('background-image:url(' + this.url_ + ');');
  var backgroundPosition = this.backgroundPosition_ ? this.backgroundPosition_ : '0 0';
  style.push('background-position:' + backgroundPosition + ';');

  if (typeof this.anchor_ === 'object') {
    if (typeof this.anchor_[0] === 'number' && this.anchor_[0] > 0 &&
        this.anchor_[0] < this.height_) {
      style.push('height:' + (this.height_ - this.anchor_[0]) +
          'px; padding-top:' + this.anchor_[0] + 'px;');
    } else if (typeof this.anchor_[0] === 'number' && this.anchor_[0] < 0 &&
        -this.anchor_[0] < this.height_) {
      style.push('height:' + this.height_ + 'px; line-height:' + (this.height_ + this.anchor_[0]) +
          'px;');
    } else {
      style.push('height:' + this.height_ + 'px; line-height:' + this.height_ +
          'px;');
    }
    if (typeof this.anchor_[1] === 'number' && this.anchor_[1] > 0 &&
        this.anchor_[1] < this.width_) {
      style.push('width:' + (this.width_ - this.anchor_[1]) +
          'px; padding-left:' + this.anchor_[1] + 'px;');
    } else {
      style.push('width:' + this.width_ + 'px; text-align:center;');
    }
  } else {
    style.push('height:' + this.height_ + 'px; line-height:' +
        this.height_ + 'px; width:' + this.width_ + 'px; text-align:center;');
  }

  var txtColor = this.textColor_ ? this.textColor_ : 'black';
  var txtSize = this.textSize_ ? this.textSize_ : 11;

  style.push('cursor:pointer; top:' + pos.y + 'px; left:' +
      pos.x + 'px; color:' + txtColor + '; position:absolute; font-size:' +
      txtSize + 'px; font-family:Arial,sans-serif; font-weight:bold');
  return style.join('');
};


// Export Symbols for Closure
// If you are not going to compile with closure then you can remove the
// code below.
window['MarkerClusterer'] = MarkerClusterer;
MarkerClusterer.prototype['addMarker'] = MarkerClusterer.prototype.addMarker;
MarkerClusterer.prototype['addMarkers'] = MarkerClusterer.prototype.addMarkers;
MarkerClusterer.prototype['clearMarkers'] =
    MarkerClusterer.prototype.clearMarkers;
MarkerClusterer.prototype['fitMapToMarkers'] =
    MarkerClusterer.prototype.fitMapToMarkers;
MarkerClusterer.prototype['getCalculator'] =
    MarkerClusterer.prototype.getCalculator;
MarkerClusterer.prototype['getGridSize'] =
    MarkerClusterer.prototype.getGridSize;
MarkerClusterer.prototype['getExtendedBounds'] =
    MarkerClusterer.prototype.getExtendedBounds;
MarkerClusterer.prototype['getMap'] = MarkerClusterer.prototype.getMap;
MarkerClusterer.prototype['getMarkers'] = MarkerClusterer.prototype.getMarkers;
MarkerClusterer.prototype['getMaxZoom'] = MarkerClusterer.prototype.getMaxZoom;
MarkerClusterer.prototype['getStyles'] = MarkerClusterer.prototype.getStyles;
MarkerClusterer.prototype['getTotalClusters'] =
    MarkerClusterer.prototype.getTotalClusters;
MarkerClusterer.prototype['getTotalMarkers'] =
    MarkerClusterer.prototype.getTotalMarkers;
MarkerClusterer.prototype['redraw'] = MarkerClusterer.prototype.redraw;
MarkerClusterer.prototype['removeMarker'] =
    MarkerClusterer.prototype.removeMarker;
MarkerClusterer.prototype['removeMarkers'] =
    MarkerClusterer.prototype.removeMarkers;
MarkerClusterer.prototype['resetViewport'] =
    MarkerClusterer.prototype.resetViewport;
MarkerClusterer.prototype['repaint'] =
    MarkerClusterer.prototype.repaint;
MarkerClusterer.prototype['setCalculator'] =
    MarkerClusterer.prototype.setCalculator;
MarkerClusterer.prototype['setGridSize'] =
    MarkerClusterer.prototype.setGridSize;
MarkerClusterer.prototype['setMaxZoom'] =
    MarkerClusterer.prototype.setMaxZoom;
MarkerClusterer.prototype['onAdd'] = MarkerClusterer.prototype.onAdd;
MarkerClusterer.prototype['draw'] = MarkerClusterer.prototype.draw;

Cluster.prototype['getCenter'] = Cluster.prototype.getCenter;
Cluster.prototype['getSize'] = Cluster.prototype.getSize;
Cluster.prototype['getMarkers'] = Cluster.prototype.getMarkers;

ClusterIcon.prototype['onAdd'] = ClusterIcon.prototype.onAdd;
ClusterIcon.prototype['draw'] = ClusterIcon.prototype.draw;
ClusterIcon.prototype['onRemove'] = ClusterIcon.prototype.onRemove;

var defaultPickerSettings =
    {
        locale: {
            applyLabel: "Kies",
            cancelLabel: "Annuleren",
            fromLabel: "Van",
            toLabel: "Tot en met",
            firstDay: 1,
            customRangeLabel: "Eigen keuze",
            weekLabel: "W",
            daysOfWeek: [
                "Zo",
                "Ma",
                "Di",
                "Wo",
                "Do",
                "Vr",
                "Za"
            ],
            monthNames: [
                "Januari",
                "Februari",
                "Maart",
                "April",
                "Mei",
                "Juni",
                "Juli",
                "Augustus",
                "September",
                "Oktober",
                "November",
                "December"
            ]
        },
        showDropdowns: true,
        singleDatePicker: true,
        separator: " | ",
        minDate: '01-01-1900',
        format: "DD-MM-YYYY",
        applyClass: "btn-azure",
        cancelClass: "btn-scarlet",
        timePicker: false,
        utc: true
    };

var cancelled = false;

function mergeSettings(input, extraSettings) {
    var settings = Object.assign({}, defaultPickerSettings);
    if (typeof extraSettings !== 'undefined') {
        settings = $.extend(settings, extraSettings);
    }
    settings['id'] = 'datepicker-handle-' + guidGenerator();
    $.each(input.data(), function (key, value) {
        if (key.startsWith('daterangepicker')) {
            settings[key.substr(16)] = value;
        }
    });

    return settings;
}

function registerPickerElement(element) {
    var rangeSettings = {
        ranges: {
            'Vandaag': [moment().startOf('day'), moment().endOf('day')],
            'Morgen': [moment().startOf('day').add(1, 'd'), moment().endOf('day').add(1, 'd')],
            'Deze week': [moment().startOf('isoWeek'), moment().endOf('isoWeek')],
            'Deze Maand': [moment().startOf('month'), moment().endOf('month')],
            'Vorige Maand': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
            'Volgende Maand': [moment().add(1, 'month').startOf('month'), moment().add(1, 'month').endOf('month')],
            'Dit Kwartaal': [moment().startOf('quarter'), moment().endOf('quarter')],
            'Volgend Kwartaal': [moment().add(3, 'month').startOf('quarter'), moment().add(3, 'month').endOf('quarter')]
        }
    };

    element.find('input.singleDatePicker').each(registerSingleDatePicker);
    element.find('input.singleDateTimePicker').each(registerSingleDateTimePicker);
    element.find('input.doubleDatePicker').each(registerDoubleDatePicker);
    element.find('input.doubleDateTimePicker').each(registerDoubleDateTimePicker);
    element.find('input.rangedPicker').each(function () {
        registerDoubleDatePicker($(this), rangeSettings);
    });

    element.find('.cancelkeyeventsplease').on('keydown', function (e) {
        e.preventDefault();
    });
}

function registerSingleDatePicker() {
    var input = $(this);
    input.on('hide.daterangepicker', function (event, datepicker) {
        if (!cancelled) {
            input.val(datepicker.endDate.format(datepicker.format));
        } else {
            cancelled = false;
        }
    });
    var settings = mergeSettings(input);

    if(input.val() !== '') {
        settings.startDate = input.val();
    }

    input.daterangepicker(settings);
    enableCancelButton(input, settings.id);
}

function registerDoubleDatePicker(input, extraSettings) {
    input = typeof input !== 'undefined' && typeof input !== 'number' ? input : $(this);
    var settings = mergeSettings(input, extraSettings);
    input.daterangepicker($.extend(settings, {singleDatePicker: false}));
    input.on('show.daterangepicker', function (event, datepicker) {
        if (input.val() !== null && input.val() !== "") {
            var dates = input.val();
            var startDate = dates.substring(0, dates.indexOf(datepicker.separator));
            var endDate = dates.substring(dates.indexOf(datepicker.separator));
            datepicker.setStartDate(startDate);
            datepicker.setEndDate(endDate);
        }
    });
    input.on('hide.daterangepicker', function (event, datepicker) {
        if (!cancelled) {
            input.val(datepicker.startDate.format(datepicker.format) + datepicker.separator + datepicker.endDate.format(datepicker.format));
        } else {
            cancelled = false;
        }
    });
    enableCancelButton(input, settings.id);
}

function registerSingleDateTimePicker() {
    var input = $(this);
    // Initialize the datepicker with an id, timepicker enabled and a changed format
    var settings = mergeSettings(input, {timePicker: true, format: 'DD-MM-YYYY HH:mm'});
    input.daterangepicker(settings);
    // Add the custom time input field to it
    $("#" + settings.id).find('.applyBtn').before('<div><label for="starttime">Tijd</label><input class="form-control" type="text" name="starttime" value="" maxlength="5"></div>');
    // Add a apply handler to validate and update the data
    input.on('apply.daterangepicker', function (event, datepicker) {
        event.preventDefault();
        updateSingleDateTimePicker(datepicker, settings.id, input, true)
    });

    input.on('hide.daterangepicker', function (event, datepicker) {
        if (!cancelled) {
            updateSingleDateTimePicker(datepicker, settings.id, input, false);
        } else {
            cancelled = false;
        }
    });

    input.on('show.daterangepicker', function (event, datepicker) {
        if (input.val() !== null && input.val() !== "") {
            var startTime = $("#" + settings.id).find('input[name="starttime"]');
            startTime.val(datepicker.startDate.format('HH:mm'));
        }
    });
    enableCancelButton(input, settings.id);
    registerTimeChange(settings.id);
}

function registerDoubleDateTimePicker() {
    var input = $(this);
    var settings = mergeSettings(input, {timePicker: true, singleDatePicker: false, format: 'DD-MM-YYYY HH:mm'});
    input.daterangepicker(settings);
    var $selector = $("#" + settings.id);
    $selector.find('.daterangepicker_start_input').append(
        '<label for="starttime">Starttijd</label><input class="input-mini" name="starttime" value="" tabindex="1" maxlength="5">');
    $selector.find('.daterangepicker_end_input').append(
        '<label for="endtime">Eindtijd</label> <input class="input-mini" name="endtime" value="" tabindex="2" maxlength="5">');
    input.on('apply.daterangepicker', function (event, datepicker) {
        event.preventDefault();
        updateDoubleDateTimePicker(datepicker, settings.id, input, true);
    });
    input.on('hide.daterangepicker', function (event, datepicker) {
        if (!cancelled) {
            updateDoubleDateTimePicker(datepicker, settings.id, input, false);
        } else {
            cancelled = false;
        }
    });
    input.on('show.daterangepicker', function (event, datepicker) {
        if (input.val() !== null && input.val() !== "") {
            var $selector = $("#" + settings.id);
            var startTime = $selector.find('input[name="starttime"]');
            var endTime = $selector.find('input[name="endtime"]');
            startTime.val(datepicker.startDate.format('HH:mm'));
            endTime.val(datepicker.endDate.format('HH:mm'));
        }
    });
    enableCancelButton(input, settings.id);
    registerTimeChange(settings.id);
}

function updateSingleDateTimePicker(datepicker, selector, input, apply) {
    var startInput = $("#" + selector).find('input[name="starttime"]');
    var parsed = parseTime(startInput.val());
    if (parsed === null) {
        if (apply) {
            input.val("");
            // Focus the original input to "prevent" closing of the picker (We cannot really prevent closing so we just open it again..)
            input.focus();
        } else {
            return;
        }
        // Did not pass validation so add validationEngine message and error class
        startInput.validationEngine('showPrompt', 'Geen geldige tijd', 'error', 'topLeft', true);
        startInput.addClass('error-input');
        return;
    }
    // Passed validation so remove error input class and hide validationEngine
    startInput.removeClass('error-input');
    startInput.validationEngine('hide');
    // Update start with only hours because otherwise there is a difference with summer/wintertime.
    // If we do not update the datepicker will disable the applybutton the next time untill you select a new date which is not desired
    datepicker.startDate.hours(parsed.substring(0, 2)).minutes(parsed.substring(3, 5));
    // Update the input value with the formatted start date
    input.val(datepicker.startDate.format(datepicker.format));
}

function updateDoubleDateTimePicker(datepicker, selector, input, apply) {
    var $selector = $("#" + selector);
    var startInput = $selector.find('input[name="starttime"]');
    var endInput = $selector.find('input[name="endtime"]');
    var parsedStart = parseTime(startInput.val());
    var parsedEnd = parseTime(endInput.val());
    if (parsedStart === null || parsedEnd === null) {
        if (apply) {
            input.val("");
            // Focus the original input to "prevent" closing of the picker (We cannot really prevent closing so we just open it again..)
            input.focus();
        } else {
            return;
        }
    }
    if (parsedStart === null) {
        // Did not pass validation so add validationEngine message and error class
        startInput.validationEngine('showPrompt', 'Geen geldige tijd', 'error', 'topLeft', true);
        startInput.addClass('error-input');
        startInput.val("");
    } else {
        startInput.removeClass('error-input');
        startInput.validationEngine('hide');
        // Update start with only hours because otherwise there is a difference with summer/wintertime.
        // If we do not update the datepicker will disable the applybutton the next time untill you select a new date which is not desired
        datepicker.startDate.hours(parsedStart.substring(0, 2)).minutes(parsedStart.substring(3, 5));
    }
    if (parsedEnd === null) {
        // Did not pass validation so add validationEngine message and error class
        endInput.validationEngine('showPrompt', 'Geen geldige tijd', 'error', 'topLeft', true);
        endInput.addClass('error-input');
        endInput.val("");
    } else {
        endInput.removeClass('error-input');
        endInput.validationEngine('hide');
        // Update end with only hours because otherwise there is a difference with summer/wintertime.
        // If we do not update the datepicker will disable the applybutton the next time untill you select a new date which is not desired
        datepicker.endDate.hours(parsedEnd.substring(0, 2)).minutes(parsedEnd.substring(3, 5));
    }
    if (parsedStart === null || parsedEnd === null) {
        return;
    }
    // Update the input value with the formatted start date
    input.val(datepicker.startDate.format(datepicker.format) + datepicker.separator + datepicker.endDate.format(datepicker.format));
}

function parseTime(timeStr) {
    timeStr = timeStr.replace(/([^0-9])/g, '');
    if (/\d+\:?\d*/.exec(timeStr) == null)
        return null;

    var validate = function (hour, minute) {
        var h = parseInt(hour);
        var m = parseInt(minute);

        if (h >= 24)
            return null;
        if (m >= 60)
            return null;
        return hour + ':' + minute;
    };

    if (timeStr.length >= 3) {
        if (timeStr.length == 3) {
            timeStr = String("0" + timeStr).slice(-4);
        } else {
            timeStr = String(timeStr + "0").substr(0, 4);
        }

        var hour = timeStr.substring(0, 2);
        var minute = timeStr.substring(2, 4);
        return validate(hour, minute);
    }

    return validate(String("0" + timeStr).slice(-2), '00');
}

function enableCancelButton(input, selector) {
    if (!$(input).prop('required')) {
        var cancelButton = $('#' + selector).find('.cancelBtn');
        cancelButton.show();
        cancelButton.on('click', function (e) {
            cancelled = true;
            input.val("");
        });
    }
}

function registerTimeChange(element) {
    $("#" + element).find('input[name="starttime"]').on('change', onTimeChange);
    $("#" + element).find('input[name="endtime"]').on('change', onTimeChange);
}

function onTimeChange() {
    var parsed = parseTime($(this).val());

    if (parsed === null) {
        $(this).validationEngine();
        $(this).validationEngine('showPrompt', 'Geen geldige tijd', 'error', 'topLeft', true);
        $(this).val("");
        return;
    }
    else {
        $(this).validationEngine('hide');
    }

    $(this).val(parsed);
}

/*! Select2 4.0.3 | https://github.com/select2/select2/blob/master/LICENSE.md */

(function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var e=jQuery.fn.select2.amd;return e.define("select2/i18n/nl",[],function(){return{errorLoading:function(){return"De resultaten konden niet worden geladen."},inputTooLong:function(e){var t=e.input.length-e.maximum,n="Gelieve "+t+" karakters te verwijderen";return n},inputTooShort:function(e){var t=e.minimum-e.input.length,n="Type "+t+" of meer karakters om te kunnen zoeken";return n},loadingMore:function(){return"Meer resultaten laden…"},maximumSelected:function(e){var t=e.maximum==1?"kan":"kunnen",n="Er "+t+" maar "+e.maximum+" item";return e.maximum!=1&&(n+="s"),n+=" worden geselecteerd",n},noResults:function(){return"Geen resultaten gevonden…"},searching:function(){return"Zoeken…"}}}),{define:e.define,require:e.require}})();