(this["webpackJsonpreact-quiz"]=this["webpackJsonpreact-quiz"]||[]).push([[0],{18:function(n,e,t){n.exports=t.p+"static/media/tyler-devine.5da212d4.jpg"},19:function(n,e,t){n.exports=t(27)},27:function(n,e,t){"use strict";t.r(e);var r,a=t(0),o=t.n(a),c=t(14),i=t.n(c),s=t(2),u=t(3),l=t.n(u),d=t(8),f=t(1),p=t(11);!function(n){n.EASY="easy",n.MEDIUM="medium",n.HARD="hard"}(r||(r={}));var b=function(){var n=Object(d.a)(l.a.mark((function n(e,t){var r,a;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="https://opentdb.com/api.php?amount=".concat(e,"&difficulty=").concat(t,"&type=multiple"),n.next=3,fetch(r);case 3:return n.next=5,n.sent.json();case 5:return a=n.sent,n.abrupt("return",a.results.map((function(n){return Object(p.a)(Object(p.a)({},n),{},{answers:(e=[].concat(Object(s.a)(n.incorrect_answers),[n.correct_answer]),Object(s.a)(e).sort((function(){return Math.random()-.5})))});var e})));case 7:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),m=t(4),g=t(5);function x(){var n=Object(m.a)(["\n  transition: all 0.3 ease;\n  :hover {\n    opacity: 0.8;\n  }\n  button {\n    cursor: pointer;\n    user-select: none;\n    font-size: 0.8rem;\n    width: 100%;\n    height: 40px;\n    margin: 5px 0;\n    background: ",";\n    border: 2px soild #fff;\n    box-shadow: 1px 2px 0px rgba(0,0,0,0.1);\n    border-radius: 10px;\n    color: #fff;\n    \n  }\n"]);return x=function(){return n},n}function h(){var n=Object(m.a)(["\n  max-width: 1100px;\n  background: #ebfeff;\n  border-radius: 10px;\n  border: 1px solid #fff;\n  padding: 20px;\n  margin: 2rem;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0, 12);\n  text-align: center;\n  p {\n    font-size: 1rem;\n  }\n  .name {\n    margin: 2rem;\n  }\n"]);return h=function(){return n},n}var v=g.b.div(h()),w=g.b.div(x(),(function(n){var e=n.correct,t=n.userClicked;return e?"linear-gradient(90deg, #56ffa4, #59bc86)":!e&&t?"linear-gradient(90deg, #ff5656, #c16868)":"linear-gradient(90deg, #56ccff, #6eafb4)"})),j=function(n){var e=n.question,t=n.answers,r=n.userAnswer,a=n.questionNr,c=n.totalQuestions,i=n.callback;return o.a.createElement(v,null,o.a.createElement("p",{className:"number"},"Question: ",a," / ",c),o.a.createElement("p",{dangerouslySetInnerHTML:{__html:e}}),o.a.createElement("div",null,t.map((function(n){return o.a.createElement(w,{key:n,correct:(null===r||void 0===r?void 0:r.correct_answer)===n,userClicked:(null===r||void 0===r?void 0:r.answer)===n},o.a.createElement("button",{disabled:!!r,value:n,onClick:i},o.a.createElement("span",{dangerouslySetInnerHTML:{__html:n}})))}))))},O=t(18),k=t.n(O);function E(){var n=Object(m.a)(['\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  > p {\n    color: white;\n  }\n  .score {\n    color: white;\n    font-size: 2rem;\n    margin: 0;\n  }\n  h1 {\n    font-family: "Open Sans";\n    color: #fff;\n    background-size: 100%;\n    background-clip: text;\n\n    filter: drop-shadow(2px 2px #b351ff);\n    font-size: 70px;\n    text-align: center;\n    margin: 20px;\n  }\n  .start,\n  .next {\n    display: inline-block;\n    border-radius: 3px;\n    padding: 0.5rem 0;\n    margin: 0.5rem 1rem;\n    width: 11rem;\n    background: transparent;\n    color: white;\n    border: 2px solid white;\n    cursor: pointer;\n    -webkit-transition: all 0.2s 0s ease-in-out;\n    -moz-transition: all 0.2s 0s ease-in-out;\n    -o-transition: all 0.2s 0s ease-in-out;\n    transition: all 0.2s 0s ease-in-out;\n  }\n  .start:hover,\n  .next:hover {\n    background-color: rgba(217, 168, 255, 0.1);\n    -webkit-transition: all 0.3s 0s ease-in-out;\n    -moz-transition: all 0.3s 0s ease-in-out;\n    -o-transition: all 0.3s 0s ease-in-out;\n    transition: all 0.3s 0s ease-in-out;\n  }\n']);return E=function(){return n},n}function y(){var n=Object(m.a)(["\n    html {\n        height: 100%;\n    }\n\n    body {\n        background-image: url(",");\n        background-size: cover;\n        margin: 0;\n        padding: 0 20px;\n        display: flex;\n        justify-content: center;\n    }\n    * {\n        box-sizing: border-box;\n        font-family:  'Open Sans';\n    }\n"]);return y=function(){return n},n}var S=Object(g.a)(y(),k.a),z=g.b.div(E()),q=function(){var n=Object(a.useState)(!1),e=Object(f.a)(n,2),t=e[0],c=e[1],i=Object(a.useState)([]),u=Object(f.a)(i,2),p=u[0],m=u[1],g=Object(a.useState)(0),x=Object(f.a)(g,2),h=x[0],v=x[1],w=Object(a.useState)([]),O=Object(f.a)(w,2),k=O[0],E=O[1],y=Object(a.useState)(0),q=Object(f.a)(y,2),_=q[0],N=q[1],A=Object(a.useState)(!0),C=Object(f.a)(A,2),M=C[0],I=C[1],Q=function(){var n=Object(d.a)(l.a.mark((function n(){var e;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c(!0),I(!1),n.next=4,b(10,r.EASY);case 4:e=n.sent,m(e),N(0),E([]),v(0),c(!1);case 10:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return o.a.createElement(o.a.Fragment,null,o.a.createElement(S,null),o.a.createElement(z,null,o.a.createElement("h1",null,"REACT QUIZ"),M||10===k.length?o.a.createElement("button",{className:"start",onClick:Q},"Start"):null,M?null:o.a.createElement("p",{className:"score"},"Score:",_),t&&o.a.createElement("p",null,"Loading Questions ..."),!t&&!M&&o.a.createElement(j,{questionNr:h+1,totalQuestions:10,question:p[h].question,answers:p[h].answers,userAnswer:k&&k[h],callback:function(n){if(!M){var e=n.currentTarget.value,t=p[h].correct_answer===e;t&&N((function(n){return n+1}));var r={question:p[h].question,answer:e,correct:t,correct_answer:p[h].correct_answer};E((function(n){return[].concat(Object(s.a)(n),[r])}))}}}),M||t||k.length!==h+1||9===h?null:o.a.createElement("button",{className:"next",onClick:function(){var n=h+1;10===n?I(!0):v(n)}},"Next question")))};i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(q,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.8ed6a3a5.chunk.js.map