function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in a)return a[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return a[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var n=r("kEUo3");const l=document.querySelector(".feedback-form"),s=l.querySelector('input[name="email"]'),i=l.querySelector('textarea[name="message"]');window.addEventListener("load",(function(){if(!localStorage.getItem("feedback-form-state"))return;const e=JSON.parse(localStorage.getItem("feedback-form-state"));s.value=e.email,i.value=e.message})),l.addEventListener("input",e(n).throttle((function(e){const t={email:"",message:""};localStorage.getItem("feedback-form-state")&&Object.assign(t,JSON.parse(localStorage.getItem("feedback-form-state"))),t[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(t))}),500)),l.addEventListener("submit",(function(e){e.preventDefault();const{elements:{email:t,message:a}}=e.currentTarget;console.log("email",t.value),console.log("message",a.value),s.value="",i.value="",localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.2c8a0bf3.js.map
