!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("angular"),require("sanji-auth-ui"),require("sanji-exception-ui"),require("sanji-logger-ui"),require("sanji-rest-ui"),require("sanji-router-ui"),require("sanji-socket-ui")):"function"==typeof define&&define.amd?define(["angular","sanji-auth-ui","sanji-exception-ui","sanji-logger-ui","sanji-rest-ui","sanji-router-ui","sanji-socket-ui"],r):"object"==typeof exports?exports.sjUtils=r(require("angular"),require("sanji-auth-ui"),require("sanji-exception-ui"),require("sanji-logger-ui"),require("sanji-rest-ui"),require("sanji-router-ui"),require("sanji-socket-ui")):e.sjUtils=r(e.angular,e.sjAuth,e.sjException,e.sjLogger,e.sjRest,e.sjRouter,e.sjSocket)}(this,function(e,r,t,i,u,n,o){return function(e){function r(i){if(t[i])return t[i].exports;var u=t[i]={i:i,l:!1,exports:{}};return e[i].call(u.exports,u,u.exports,r),u.l=!0,u.exports}var t={};return r.m=e,r.c=t,r.i=function(e){return e},r.d=function(e,r,t){Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:t})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r.p="",r(r.s=7)}([function(r,t){r.exports=e},function(e,t){e.exports=r},function(e,r){e.exports=t},function(e,r){e.exports=i},function(e,r){e.exports=u},function(e,r){e.exports=n},function(e,r){e.exports=o},function(e,r,t){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(r,"__esModule",{value:!0}),r.sjUtils=void 0;var u=t(0),n=i(u),o=t(3),s=t(2),a=t(6),c=t(5),j=t(4),f=t(1),p=n.default.module("sanji.utils",[o.sjLogger,s.sjException,a.sjSocket,c.sjRouter,j.sjRest,f.sjAuth]).name;r.sjUtils=p}])});