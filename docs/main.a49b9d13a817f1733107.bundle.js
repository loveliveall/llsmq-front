!function(e){function n(n){for(var o,r,A=n[0],c=n[1],s=n[2],l=0,u=[];l<A.length;l++)r=A[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&u.push(i[r][0]),i[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);for(d&&d(n);u.length;)u.shift()();return a.push.apply(a,s||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],o=!0,A=1;A<t.length;A++){var c=t[A];0!==i[c]&&(o=!1)}o&&(a.splice(n--,1),e=r(r.s=t[0]))}return e}var o={},i={0:0},a=[];function r(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=e,r.c=o,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)r.d(t,o,function(n){return e[n]}.bind(null,o));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="/";var A=window.webpackJsonp=window.webpackJsonp||[],c=A.push.bind(A);A.push=n,A=A.slice();for(var s=0;s<A.length;s++)n(A[s]);var d=c;a.push([14,1]),t()}({14:function(e,n,t){"use strict";t.r(n);var o,i=t(2),a=t(0),r=t(4);!function(e){e.HOME="/",e.PROBLEM="/sunshine"}(o||(o={}));var A=t(3);const c="https://llsmq-api.llasfans.net";function s(){return localStorage.getItem("handle_name")}var d=function(e,n,t,o){return new(t||(t=Promise))((function(i,a){function r(e){try{c(o.next(e))}catch(e){a(e)}}function A(e){try{c(o.throw(e))}catch(e){a(e)}}function c(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(r,A)}c((o=o.apply(e,n||[])).next())}))};var l=()=>{const[e,n]=Object(A.k)(!1);return e?Object(i.a)("button",Object.assign({disabled:!0},{children:"로딩 중..."}),void 0):Object(i.a)("button",Object.assign({onClick:()=>{d(void 0,void 0,void 0,(function*(){n(!0);const e=s(),t=yield fetch(c+"/session",{method:"GET",headers:null===e?void 0:{"X-Handle-Name":e}});t.ok&&(!function(e){localStorage.setItem("handle_name",e)}((yield t.json()).handle_name),Object(r.b)(o.PROBLEM)),n(!1)})).then().catch()}},{children:"시작/이어하기"}),void 0)};const u={A0001:"君のこころは輝いてるかい？",A0002:"Step! ZERO to ONE",A0003:"Aqours☆HEROES",A0004:"恋になりたいAQUARIUM",A0005:"待ってて愛のうた",A0006:"届かない星だとしても",A0007:"元気全開DAY！DAY！DAY！",A0008:"夜空はなんでも知ってるの？",A0009:"トリコリコPLEASE!!",A0010:"ときめき分類学",A0011:"Strawberry Trapper",A0012:"Guilty Night, Guilty Kiss!",A0013:"青空Jumping Heart",A0014:"ハミングフレンド",A0015:"決めたよHand in Hand",A0016:"ダイスキだったらダイジョウブ！",A0017:"ユメ語るよりユメ歌おう",A0018:"サンシャインぴっかぴか音頭",A0019:"夢で夜空を照らしたい",A0020:"未熟DREAMER",A0021:"想いよひとつになれ",A0022:"MIRAI TICKET",A0023:"ジングルベルがとまらない",A0024:"聖なる日の祈り",A0025:"Pops heartで踊るんだもん！",A0026:"空も心も晴れるから",A0027:"Waku-Waku-Week!",A0028:"Daydream Warrior",A0029:"G線上のシンデレラ",A0030:"スリリング・ワンウェイ",A0031:"太陽を追いかけろ！",A0032:"Guilty Eyes Fever",A0033:"P.S.の向こう側",A0034:"LONELY TUNING",A0035:"HAPPY PARTY TRAIN",A0036:"SKY JOURNEY",A0037:"少女以上の恋がしたい",A0038:"近未来ハッピーエンド",A0039:"海岸通りで待ってるよ",A0040:"GALAXY HidE and SeeK",A0041:"INNOCENT BIRD",A0042:"コワレヤスキ",A0043:"Shadow gate to love",A0044:"Landing action Yeah!!",A0045:"夏への扉 Never end ver.",A0046:"真夏は誰のモノ？",A0047:"地元愛♡満タン☆サマーライフ",A0048:"夏の終わりの雨音が",A0049:"未来の僕らは知ってるよ",A0050:"君の瞳を巡る冒険",A0051:"勇気はどこに？君の胸に！",A0052:"“MY LIST” to you!",A0053:"MY舞☆TONIGHT",A0054:"MIRACLE WAVE",A0055:"Awaken the power",A0056:"CRASH MIND",A0057:"DROPOUT!?",A0058:"WATER BLUE NEW WORLD",A0059:"WONDERFUL STORIES",A0060:"One More Sunshine Story",A0061:"おやすみなさん！",A0062:"in this unstable world",A0063:"Pianoforte Monologue",A0064:"Beginner's Sailing",A0065:"RED GEM WINK",A0066:"WHITE FIRST LOVE",A0067:"New winding road",A0068:"さかなかなんだか？",A0069:"キセキヒカル",A0070:"Guilty!? Farewell party",A0071:"サクラバイバイ",A0072:"卒業ですね",A0073:"ホップ・ステップ・ワーイ！",A0074:"Thank you, FRIENDS!!",A0075:"No.10",A0076:"ハジマリロード",A0077:"Marine Border Parasol",A0078:"予測不可能Driving!"},b={G001:{name:"Aqours 1st single",songsId:["A0001","A0002","A0003"]},G002:{name:"Aqours 2nd single",songsId:["A0004","A0005","A0006"]},G003:{name:"Unit 1st single",songsId:["A0007","A0008","A0009","A0010","A0011","A0012"]},G004:{name:"Animation 1st season single",songsId:["A0013","A0014","A0015","A0016","A0017","A0018","A0019","A0020","A0021","A0022"]},G005:{name:"LLSIF collabo single",songsId:["A0023","A0024"]},G006:{name:"Animation 1st season BD special",songsId:["A0025","A0026","A0027","A0028","A0029","A0030","A0031","A0032","A0033","A0034"]},G007:{name:"Aqours 3rd single",songsId:["A0035","A0036","A0037"]},G008:{name:"Unit 2nd single",songsId:["A0038","A0039","A0040","A0041","A0042","A0043"]},G009:{name:"Aqours Next Step! Project",songsId:["A0044"]},G010:{name:"Duo-Trio Collection vol.1",songsId:["A0045","A0046","A0047","A0048"]},G011:{name:"Animation 2nd season single",songsId:["A0049","A0050","A0051","A0052","A0053","A0054","A0055","A0056","A0057","A0058","A0059"]},G012:{name:"Animation 2nd season BD special",songsId:["A0060","A0061","A0062","A0063","A0064","A0065","A0066","A0067","A0068","A0069","A0070","A0071","A0072"]},G013:{name:"Aqours Hop! Step! Jump! Project!",songsId:["A0073"]},G014:{name:"Aqours 4th LoveLive! ~Sailing to the Sunshine~",songsId:["A0074","A0075"]},G015:{name:"Movie Seven-net special",songsId:["A0076","A0077","A0078"]}};var O=function(e,n,t,o){return new(t||(t=Promise))((function(i,a){function r(e){try{c(o.next(e))}catch(e){a(e)}}function A(e){try{c(o.throw(e))}catch(e){a(e)}}function c(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(r,A)}c((o=o.apply(e,n||[])).next())}))};var v=()=>{const[e,n]=Object(A.k)(!1),[t,a]=Object(A.k)({qNo:0,assetPath:""}),[d,l]=Object(A.k)(Object.keys(u)[0]),[v,h]=Object(A.k)(!1),[p,j]=Object(A.k)(!1),[f,g]=Object(A.k)({ok:!0,corrected:0}),m=()=>O(void 0,void 0,void 0,(function*(){const e=s();if(null===e)return void Object(r.b)(o.HOME);n(!0);const t=yield fetch(c+"/gen-problem",{method:"GET",headers:{"X-Handle-Name":e}});if(t.ok){const e=yield t.json();a({qNo:e.q_no,assetPath:e.asset_path})}else Object(r.b)(o.HOME);n(!1)}));Object(A.d)(()=>{m()},[]);const{answer_id:y}=f;return Object(i.b)("div",{children:[e?Object(i.a)("div",{children:"Loading..."},void 0):Object(i.b)("div",{children:[Object(i.a)("div",{children:t.qNo+"번째 문제"},void 0),Object(i.a)("audio",Object.assign({src:t.assetPath,controls:!0},{children:"HTML audio tag is not supported"}),void 0)]},void 0),v?f.ok?Object(i.b)("div",{children:[Object(i.a)("p",{children:"정답입니다 ٩(๑＞◡＜๑)۶"},void 0),Object(i.a)("p",{children:`연속으로 ${f.corrected} 문제를 맞추셨습니다!`},void 0),Object(i.a)("button",Object.assign({onClick:()=>{h(!1),l(Object.keys(u)[0]),m()}},{children:"다음 문제 풀기"}),void 0)]},void 0):Object(i.b)("div",{children:[Object(i.a)("p",{children:"틀렸습니다 ｡°(´∩ω∩`)°｡"},void 0),y&&Object(i.b)("p",{children:[`정답은 ${u[y]} 입니다 (*ﾟДﾟ)`," "]},void 0),Object(i.a)("p",{children:`연속으로 총 ${f.corrected} 문제를 맞추셨습니다`},void 0),Object(i.a)("button",Object.assign({onClick:()=>{Object(r.b)(o.HOME)}},{children:"처음으로 돌아가기"}),void 0)]},void 0):Object(i.b)("div",{children:[Object(i.a)("select",Object.assign({value:d,onChange:e=>l(e.target.value)},{children:Object.keys(b).map(e=>{const n=b[e];return Object(i.a)("optgroup",Object.assign({label:n.name},{children:n.songsId.map(e=>Object(i.a)("option",Object.assign({value:e},{children:u[e]}),void 0))}),e)})}),void 0),Object(i.a)("button",Object.assign({onClick:()=>{O(void 0,void 0,void 0,(function*(){const e=s();if(null===e)return void Object(r.b)(o.HOME);j(!0);const n=yield fetch(c+"/score-it",{method:"POST",headers:{"Content-Type":"application/json","X-Handle-Name":e},body:JSON.stringify({answer:d})});if(n.ok){const e=yield n.json();g(e),h(!0)}else Object(r.b)(o.HOME);j(!1)}))},disabled:p||e},{children:"제출"}),void 0)]},void 0)]},void 0)};var h=()=>Object(i.b)(r.a,{children:[Object(i.a)(l,{path:o.HOME},void 0),Object(i.a)(v,{path:o.PROBLEM},void 0)]},void 0);Object(a.i)(Object(i.a)(h,{},void 0),document.getElementById("app"))}});