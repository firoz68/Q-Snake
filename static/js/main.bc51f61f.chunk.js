(this["webpackJsonpsnake-q-learning"]=this["webpackJsonpsnake-q-learning"]||[]).push([[0],{20:function(e,t,a){e.exports=a.p+"static/media/cyborg-25.e53d843b.png"},23:function(e,t,a){e.exports=a(36)},28:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(16),o=a.n(l),s=(a(28),a(7)),c=a.n(s),i=a(8),u=a(12),m=a(5),d=a(17),p=a(18),f=a(22),E=a(21),h=function(e){return r.a.createElement("div",null,e.snakeDots.map((function(e,t){var a={left:"".concat(e[0],"%"),top:"".concat(e[1],"%")};return r.a.createElement("div",{className:"board-dot",key:t,style:a})})))},b=function(e){var t={left:"".concat(e.food[0],"%"),top:"".concat(e.food[1],"%")};return r.a.createElement("div",{className:"food-dot",style:t})},g=(a(30),a(19)),y=[["66.66%","0%"],["33.33%","0%"],["0%","0%"],["0%","33.33%"],["0%","66.66%"],["33.33%","66.66%"],["66.66%","66.66%"],["66.66%","33.33%"]],v=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,null,r.a.createElement("div",{className:"state-dir-area"},r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"state-dot",key:3,style:{left:"33.33%",top:"33.33%","background-color":"gray"}}),r.a.createElement("div",{className:"state-dot",key:4,style:{left:"33.33%",top:"66.66%","background-color":"gray"}})),1===e.curState[0][0]?r.a.createElement("div",{className:"state-dot",key:0,style:{left:"0%",top:"33.33%"}}):null,1===e.curState[0][1]?r.a.createElement("div",{className:"state-dot",key:1,style:{left:"33.33%",top:"0%"}}):null,1===e.curState[0][2]?r.a.createElement("div",{className:"state-dot",key:2,style:{left:"66.66%",top:"33.33%"}}):null,1===e.curState[0][3]?r.a.createElement("div",{className:"state-dot",key:3,style:{left:"33.33%",top:"66.66%"}}):null)),r.a.createElement(g.a,null,r.a.createElement("div",{className:"state-apple-area"},r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"state-dot",key:5,style:{left:"33.33%",top:"33.33%","background-color":"gray"}}),r.a.createElement("div",{className:"state-dot",key:6,style:{left:"33.33%",top:"66.66%","background-color":"gray"}})),r.a.createElement("div",{className:"state-dot",key:7,style:{left:y[e.curState[1]][0],top:y[e.curState[1]][1],"background-color":"black"}}))))},x=(a(14),a(31),a(37));function k(e){return e.map((function(e,t){return[e,t]})).reduce((function(e,t){return t[0]>e[0]?t:e}))[1]}var w=["L","U","R","D"],S=[[2,1,2,3,1,1,0,3,2,2,2,2,1,1,0,4],[1,1,2,3,1,1,0,3,1,1,2,2,1,1,0,4],[1,1,2,3,0,1,0,3,1,1,0,2,1,1,0,4],[0,3,0,3,0,1,0,3,0,1,0,2,0,1,0,4],[3,3,3,3,0,3,0,3,0,1,0,2,0,1,0,4],[3,3,3,3,3,3,3,3,0,1,0,2,0,1,0,4],[3,2,3,3,3,3,3,3,2,2,2,2,0,1,0,4],[2,2,2,2,3,3,0,3,2,2,2,2,0,1,0,4]],j=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{"margin-top":"30px","margin-bottom":"30px"}},e.curState.map((function(t,a){var n=t.map(k);return r.a.createElement(x.a,null,n.map((function(t,n){var l=n;return!1===e.found[a][l]?r.a.createElement("div",{className:"square",style:{"background-color":"white","text-align":"center"}}):t===S[a][l]?r.a.createElement("div",{className:"square",style:{"background-color":"#18ff85","text-align":"center"}},w[t]):r.a.createElement("div",{className:"square",style:{"background-color":"#ea3c53","text-align":"center"}},w[t])})))}))))},_=a(40),N=a(39),O=a(41),T=function(){return[5*Math.floor(20*Math.random()),5*Math.floor(20*Math.random())]},C=function(e){return new Promise((function(t){return setTimeout(t,e)}))},A=function(e,t){return Math.abs(e[0]-t[0])+Math.abs(e[1]-t[1])},D=function(){for(var e=[],t=0;t<8;t++){for(var a=[],n=0;n<16;n++)a.push([0,0,0,0]);e.push(a)}return e},F=function(){for(var e=[],t=0;t<8;t++){for(var a=[],n=0;n<16;n++)a.push(!1);e.push(a)}return e},M=D(),q=F(),I=[[-5,0],[0,-5],[5,0],[0,5]],B={dots:[T()],food:T(),direction:2,speed:100,score:0,justAte:!1,max_score:0,ep:0,start_epsilon:.9,end_epsilon:0,epsilon:.9,episodes:100,discount_factor:1,agent_state:2},G=function(e){return e[0]<0||e[0]>95||e[1]<0||e[1]>95},R=function(e){Object(f.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state=B,e.onKeyDown=function(t){t=t||window.event(),e.setDir(parseInt(t.keyCode))&&e.gameOver()},e.moveSnake=function(){var t=e.state,a=t.dots[t.dots.length-1][0],n=t.dots[t.dots.length-1][1],r=!1,l=!0;if(a+=I[t.direction][0],n+=I[t.direction][1],a===t.food[0]&&n===t.food[1]){for(;l=!0,t.food=T(),t.dots.forEach((function(e,a){e[0]===t.food[0]&&e[1]===t.food[1]&&(l=!1)})),!l;);t.score++,r=!0}return t.justAte=r,t.dots.push([a,n]),e.checkBorders()||e.checkCollapsed()?(e.gameOver(),!0):(r||t.dots.shift(),e.setState(t),!1)},e.checkBorders=function(){var t=e.state.dots[e.state.dots.length-1];return!!G(t)},e.checkCollapsed=function(){var t=!1,a=e.state.dots[e.state.dots.length-1];return e.state.dots.forEach((function(n,r){0!==r&&r!==e.state.dots.length-1&&a[0]===n[0]&&a[1]===n[1]&&(t=!0)})),t},e.gameOver=function(){e.setState(Object(m.a)(Object(m.a)({},e.state),{},{dots:[T()],food:T(),direction:2,score:0,justAte:!1}))},e.action=function(e,t,a){if(Math.random()<e)return Math.floor(4*Math.random());for(var n=-1e5,r=0,l=0;l<4;l++)M[t][a][l]>n&&(n=M[t][a][l],r=l);return parseInt(r)},e.qlearning=Object(u.a)(c.a.mark((function t(){var a,n,r,l,o,s,u,d,p,f,E,h,b,g,y,v,x,k,w,S,j;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:M=D(),q=F(),n=0,g=e.state.start_epsilon,y=(e.state.start_epsilon-e.state.end_epsilon)/e.state.episodes,v=0;case 6:if(!(v<e.state.episodes)){t.next=45;break}r=!1,x=e.getState(),k=Object(i.a)(x,2),d=k[0],p=k[1],f=d[0]+2*d[1]+4*d[2]+8*d[3],b=0;case 14:if(r){t.next=37;break}if(E=A(e.state.food,e.state.dots[e.state.dots.length-1]),h=e.action(g,p,f),q[p][f]=!0,!e.setDir(h+37)){t.next=22;break}r=!0,t.next=24;break;case 22:return t.next=24,C(e.state.speed);case 24:if((r=r||b>=500||e.moveSnake())||(w=e.getState(),S=Object(i.a)(w,2),o=S[0],s=S[1],u=o[0]+2*o[1]+4*o[2]+8*o[3]),l=r?-100:e.state.justAte?30:A(e.state.food,e.state.dots[e.state.dots.length-1])<E?1:-5,r)a=0;else for(a=-1e5,j=0;j<4;j++)M[s][u][j]>=a&&(a=M[s][u][j]);if(M[p][f][h]+=.01*(l+e.state.discount_factor*a-M[p][f][h]),f=u,p=s,e.state.justAte?b++:b=0,0===e.state.agent_state){t.next=34;break}return t.abrupt("break",37);case 34:e.state.score>n&&(n=e.state.score),t.next=14;break;case 37:if(e.gameOver(),g-y>=e.state.end_epsilon?g-=y:g=e.state.end_epsilon,e.setState(Object(m.a)(Object(m.a)({},e.state),{},{max_score:n,ep:v+1,epsilon:g})),0===e.state.agent_state){t.next=42;break}return t.abrupt("break",45);case 42:v++,t.next=6;break;case 45:console.log(M);case 46:case"end":return t.stop()}}),t)}))),e.getState=function(){var t=[0,0,0,0],a=0,n=e.state.dots[e.state.dots.length-1],r=n[0]-e.state.food[0],l=n[1]-e.state.food[1];r<0&&l<0?a=6:0===r&&l<0?a=5:r>0&&l<0?a=4:r>0&&0===l?a=3:r>0&&l>0?a=2:0===r&&l>0?a=1:r<0&&l>0?a=0:r<0&&0===l&&(a=7);for(var o=0;o<4;o++)G([n[0]+I[o][0],n[1]+I[o][1]])?t[o]=1:e.state.dots.forEach((function(a,r){r<=e.state.dots.length-2&&a[0]===n[0]+I[o][0]&&a[1]===n[1]+I[o][1]&&(t[o]=1)}));return[t,a]},e.changeSpeed=function(t){e.setState(Object(m.a)(Object(m.a)({},e.state),{},{speed:parseInt(t.target.value)})),t.preventDefault()},e.handleSubmit=function(t){e.setState(Object(m.a)(Object(m.a)({},e.state),{},{start_epsilon:parseFloat(t.target[0].value),discount_factor:parseFloat(t.target[1].value),end_epsilon:parseFloat(t.target[2].value),epsilon:parseFloat(t.target[0].value),agent_state:0,episodes:parseInt(t.target[3].value)}),(function(){console.log(e.state),e.qlearning()})),t.preventDefault()},e.testAgent=Object(u.a)(c.a.mark((function t(){var a,n,r,l,o,s,u,d,p,f,E,h,b,g;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=0;case 1:if(1!==e.state.agent_state){t.next=32;break}a=!1,E=e.getState(),h=Object(i.a)(E,2),s=h[0],u=h[1],d=s[0]+2*s[1]+4*s[2]+8*s[3],f=0;case 9:if(a){t.next=28;break}if(A(e.state.food,e.state.dots[e.state.dots.length-1]),p=e.action(0,u,d),!e.setDir(p+37)){t.next=16;break}a=!0,t.next=18;break;case 16:return t.next=18,C(e.state.speed);case 18:if((a=a||f>=500||e.moveSnake())||(b=e.getState(),g=Object(i.a)(b,2),r=g[0],l=g[1],o=r[0]+2*r[1]+4*r[2]+8*r[3]),d=o,u=l,e.state.justAte?f++:f=0,e.state.score>n&&(n=e.state.score),!(1!==e.state.agent_state||f>500)){t.next=26;break}return t.abrupt("break",28);case 26:t.next=9;break;case 28:e.gameOver(),e.setState(Object(m.a)(Object(m.a)({},e.state),{},{max_score:n})),t.next=1;break;case 32:case"end":return t.stop()}}),t)}))),e.setTestAgentState=function(){1!==e.state.agent_state&&e.setState(Object(m.a)(Object(m.a)({},e.state),{},{agent_state:1}),(function(){console.log("State updated to test."),e.testAgent()}))},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){}},{key:"setDir",value:function(e){return 2===this.state.dots.length&&2===Math.abs(this.state.direction-(e-37))?(this.setState({direction:e-37}),!0):e>=37&&e<=40?(this.setState({direction:e-37}),!1):void 0}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,{className:"justify-content-center align-content-center",style:{"margin-top":"30px"}},r.a.createElement(g.a,{md:"auto",lg:"auto",sm:"auto",xs:"auto"},r.a.createElement(_.a,{style:{"min-width":"200px"}},r.a.createElement(_.a.Body,null,r.a.createElement(_.a.Title,null,r.a.createElement("b",null,"Parameters:")),r.a.createElement(_.a.Text,null,r.a.createElement(N.a,{onSubmit:this.handleSubmit},r.a.createElement(N.a.Row,null,r.a.createElement(N.a.Group,{style:{"min-width":"255px"}},r.a.createElement(N.a.Label,null,"Start Epsilon:"),r.a.createElement(N.a.Control,{name:"start_epsilon",type:"number",placeholder:"Around 0.99",min:"0",max:"1",step:"0.01",required:!0}))),r.a.createElement(N.a.Row,null,r.a.createElement(N.a.Group,{style:{"min-width":"255px"}},r.a.createElement(N.a.Label,null,"Discount Factor:"),r.a.createElement(N.a.Control,{name:"discount_factor",type:"number",placeholder:"1.0 is good for this problem",min:"0",max:"1",step:"0.01",required:!0}))),r.a.createElement(N.a.Row,null,r.a.createElement(N.a.Group,{style:{"min-width":"255px"}},r.a.createElement(N.a.Label,null,"End Epsilon:"),r.a.createElement(N.a.Control,{name:"end_epsilon",type:"number",placeholder:"Usually around 0.",min:"0",max:"1",step:"0.01",required:!0}))),r.a.createElement(N.a.Row,null,r.a.createElement(N.a.Group,{style:{"min-width":"255px"}},r.a.createElement(N.a.Label,null,"Episodes:"),r.a.createElement(N.a.Control,{name:"episodes",type:"number",placeholder:"Around 150-200",min:"10",max:"5000",required:!0}))),r.a.createElement(N.a.Row,null,r.a.createElement(N.a.Group,{as:g.a},r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement(O.a,{type:"submit",variant:"primary"},"Train"))),r.a.createElement(N.a.Group,{as:g.a},r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement(O.a,{type:"button",variant:"primary",onClick:function(){e.setState(Object(m.a)(Object(m.a)({},e.state),{},{agent_state:2}))}},"Stop"))),r.a.createElement(N.a.Group,{as:g.a},r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement(O.a,{variant:"primary",onClick:this.setTestAgentState},"Test"))))),r.a.createElement(x.a,{className:"justify-content-center"},r.a.createElement("small",null,"Note: Train button resets Q-table")))))),r.a.createElement(g.a,{md:"auto",lg:"auto",sm:"auto",xs:"auto"},r.a.createElement(_.a,{className:"bg-light",style:{"min-width":"288px"}},r.a.createElement(_.a.Body,null,r.a.createElement(_.a.Title,null,r.a.createElement("b",null,"Speed Control:")),r.a.createElement(_.a.Text,null,r.a.createElement(N.a,null,r.a.createElement(N.a.Group,{style:{"text-align":"center"}},r.a.createElement(N.a.Label,null,"Delay between moves: "),r.a.createElement(N.a.Control,{type:"range",min:"10",max:"200",step:"5",onChange:function(t){return e.changeSpeed(t)}})))),r.a.createElement(_.a.Title,null,r.a.createElement("b",null,"Current Run:")),r.a.createElement(_.a.Text,null,r.a.createElement(x.a,{className:"justify-content-center"},r.a.createElement(g.a,{style:{"margin-left":"20px","text-align":"left","font-size":"15px"}},"Episodes: ",r.a.createElement("br",null),"Start Epsilon: ",r.a.createElement("br",null),"End Epsilon: ",r.a.createElement("br",null),"Current Epsilon: ",r.a.createElement("br",null),"Discount Factor: ",r.a.createElement("br",null),"Current Score: ",r.a.createElement("br",null),"Max Score: ",r.a.createElement("br",null)),r.a.createElement(g.a,{style:{"font-size":"15px","max-width":"110px"}},this.state.ep," / ",this.state.episodes," ",r.a.createElement("br",null),this.state.start_epsilon," ",r.a.createElement("br",null),this.state.end_epsilon," ",r.a.createElement("br",null),parseFloat(this.state.epsilon).toFixed(3)," ",r.a.createElement("br",null),this.state.discount_factor," ",r.a.createElement("br",null),this.state.score," ",r.a.createElement("br",null),this.state.max_score," ",r.a.createElement("br",null)))),r.a.createElement(_.a.Title,null,r.a.createElement("b",null,"What does the ",r.a.createElement("br",null),"agent see?")),r.a.createElement(_.a.Text,null,r.a.createElement(x.a,null,r.a.createElement(g.a,{style:{width:"40px","margin-left":"20px"}},"Click the two boxes present below for the exact details of the state representation."))))))),r.a.createElement(x.a,{className:"justify-content-center"},r.a.createElement(g.a,{md:"auto",lg:"auto",sm:"auto",xs:"auto"},r.a.createElement("div",{className:"board-area"},r.a.createElement(h,{snakeDots:this.state.dots}),r.a.createElement(b,{food:this.state.food}))),r.a.createElement(g.a,{md:"auto",lg:"auto",sm:"auto",xs:"auto"},r.a.createElement(v,{curState:this.getState()}))),r.a.createElement(x.a,{className:"justify-content-center"},r.a.createElement(g.a,{md:"auto",lg:"auto",sm:"auto",xs:"auto"},r.a.createElement(j,{curState:M,found:q}))),r.a.createElement(x.a,{className:"justify-content-center"},r.a.createElement(g.a,{md:"auto",lg:"auto",sm:"auto",xs:"auto",style:{"margin-bottom":"50px"}},r.a.createElement(_.a,{style:{width:"610px"}},r.a.createElement(_.a.Title,{style:{"margin-top":"20px","margin-bottom":"-5px"}},r.a.createElement("b",null,"The Q-Table:")),r.a.createElement(_.a.Body,null,r.a.createElement("ul",null,r.a.createElement("li",null,"The Q-table shown above has dimensions ",r.a.createElement("b",null,"8 x 16")," (with 4 entries in each cell for each move, here we just show the best move learnt so far)."),r.a.createElement("li",null,"Each cell in the grid is a ",r.a.createElement("b",null,"state"),", ie: one situation the snake finds itself in, like the apple is in the top left direction and there is danger to left, which move do I make - up, left, down, or right?"),r.a.createElement("li",null,"The blank entries correspond to unexplored states. So initially, all states are unexplored. As the AI plays the game, it explores the different states and tries to learn what moves work (based on the reward for each action made)."),r.a.createElement("li",null,"The ",r.a.createElement("sp",{style:{color:"red"}},"red")," entries correspond to explored states with wrong move learnt by the AI."),r.a.createElement("li",null,"The ",r.a.createElement("sp",{style:{color:"green"}},"green")," entries correspond to explored states with right move learnt by the AI (ie: what move a human would make)."),r.a.createElement("li",null,"The 8 rows correspond to: Relative location of the apple to the head (8 directions)"),r.a.createElement("li",null,"The 16 columns correspond to: Presence of danger one step ahead of the head in 4 directions (array of 4 numbers, which results in 16 possible values).")))))))}}]),a}(n.Component),L=(a(35),a(38)),Q=a(20),W=a.n(Q);var z=function(){return r.a.createElement(L.a,{fluid:!0,className:"wrapper"},r.a.createElement(x.a,{className:"justify-content-center align-items-center"},r.a.createElement(g.a,{md:"auto",lg:"auto",sm:"auto",xs:"auto"},r.a.createElement("img",{src:W.a,width:"300",alt:"Q-Snake Logo"})),r.a.createElement(g.a,{md:"auto",lg:"auto",sm:"auto",xs:"auto"},r.a.createElement("h1",{style:{"font-family":"FacileSans","font-size":60,color:"white"}},"Q-Snake"))),r.a.createElement(x.a,{className:"justify-content-center align-content-center"},r.a.createElement(g.a,{md:"auto",lg:"auto",sm:"auto",xs:"auto"},r.a.createElement(_.a,{className:"bg-light",style:{"max-width":"18em","min-width":"200px","background-color":"#fafafa"}},r.a.createElement(_.a.Body,null,r.a.createElement(_.a.Title,null,r.a.createElement("b",null,"What is this?")),r.a.createElement(_.a.Text,null,"\u2022 An interactive web visualiser for a Q-learning RL agent that plays Snake.",r.a.createElement("br",null),"\u2022 Set your own hyperparameters and see how the algorithm performs.",r.a.createElement("br",null),"\u2022 Uses ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://en.wikipedia.org/wiki/Q-learning"},"tabular Q-learning"),".")))),r.a.createElement(g.a,{md:"auto",lg:"auto",sm:"auto",xs:"auto"},r.a.createElement(_.a,{className:"bg-light",style:{"max-width":"18em","min-width":"200px","background-color":"#fafafa"}},r.a.createElement(_.a.Body,null,r.a.createElement(_.a.Title,null,r.a.createElement("b",null,"How do I use this?")),r.a.createElement(_.a.Text,null,"\u2022 Just set the parameters below and hit ",r.a.createElement("b",null,"Train"),".",r.a.createElement("br",null),"\u2022 Vary the speed and click ",r.a.createElement("b",null,"Test")," to see how the AI plays after training.",r.a.createElement("br",null),"\u2022 Explanation of each parameter and the code for this project is available on ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.github.com/sid-sr/q-snake"},"GitHub"),"."))))),r.a.createElement(R,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.bc51f61f.chunk.js.map