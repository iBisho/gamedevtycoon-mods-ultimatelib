/**
 * @class Foswig
 * @author Glenn Conner
 * @version 1.0.0
 * @description Marchov Name Generation Algorithm https://github.com/mrsharpoblunto/foswig.js/blob/master/LICENSE 
 * @fileOverview https://github.com/mrsharpoblunto/foswig.js/blob/master/LICENSE 
 * @constructor
 * @param {object} self An object representing the class itself for extending
 */
 
/* Foswig.js | (c) Glenn Conner. | https://github.com/mrsharpoblunto/foswig.js/blob/master/LICENSE */ 

(function(e){e.foswig={};e.foswig.MarkovChain=function(e){function r(a){a=a.toLowerCase();for(var b=k,c=0;c<a.length;++c)if(b=b.children[a[c]],!b)return!1;return!0}function l(a){1<a.length&&l(a.substr(1));for(var b=k,c=0;c<a.length;++c){var d=b.children[a[c]];d||(d=new m,b.children[a[c]]=d);b=d}}function n(a){this.b=a;this.a=[]}function m(){this.children=[]}var k=new m,h=new n(""),p={};this.addWordsToChain=function(a){for(var b=0;b<a.length;++b)this.addWordToChain(a[b])};this.addWordToChain=function(a){l(a.toLowerCase()); for(var b=h,c="",d=0;d<a.length;++d){var q=a[d],c=c+q;c.length>e&&(c=c.substr(1));var f=p[c];f||(f=new n(q),p[c]=f);b.a.push(f);b=f}b.a.push(null)};this.generateWord=function(a,b,c){var d,e;do{e=!1;var f=Math.floor(Math.random()*h.a.length),g=h.a[f];for(d="";g&&d.length<=b;)d+=g.b,f=Math.floor(Math.random()*g.a.length),g=g.a[f];if(d.length>b||d.length<a)e=!0}while(e||!c&&r(d));return d}};"function"===typeof e.define&&e.define.amd&&e.define("foswig",[],function(){return e.foswig})})("undefined"!== typeof window?window:this);