!function(e){function n(n){for(var o,c,r=n[0],a=n[1],d=n[2],l=0,b=[];l<r.length;l++)c=r[l],Object.prototype.hasOwnProperty.call(A,c)&&A[c]&&b.push(A[c][0]),A[c]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);for(s&&s(n);b.length;)b.shift()();return i.push.apply(i,d||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],o=!0,r=1;r<t.length;r++){var a=t[r];0!==A[a]&&(o=!1)}o&&(i.splice(n--,1),e=c(c.s=t[0]))}return e}var o={},A={0:0},i=[];function c(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=e,c.c=o,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)c.d(t,o,function(n){return e[n]}.bind(null,o));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/";var r=window.webpackJsonp=window.webpackJsonp||[],a=r.push.bind(r);r.push=n,r=r.slice();for(var d=0;d<r.length;d++)n(r[d]);var s=a;i.push([44,1]),t()}({44:function(e,n,t){"use strict";t.r(n);var o,A=t(2),i=t(1),c=t(4);!function(e){e.HOME="/",e.PROBLEM="/sunshine"}(o||(o={}));var r=t(3),a=t(5);const d=a.a.div`
  display: flex;
  justify-content: center;
  padding: 4px;
`,s=a.a.button`
  color: white;
  background-color: #019fe8;
  outline: none;
  border: none;
  border-radius: 4px;
  padding: 4px 8px 4px 8px;
  
  &:hover:enabled {
    cursor: pointer;
    opacity: 0.5;
  }

  &:disabled {
    color: grey;
    background-color: #013147;
  }
`,l=a.a.p`
  color: #cccccc;
  text-align: center;
`,b="https://llsmq-api.llasfans.net";function u(){return localStorage.getItem("handle_name")}var v=function(e,n,t,o){return new(t||(t=Promise))((function(A,i){function c(e){try{a(o.next(e))}catch(e){i(e)}}function r(e){try{a(o.throw(e))}catch(e){i(e)}}function a(e){var n;e.done?A(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(c,r)}a((o=o.apply(e,n||[])).next())}))};var O=()=>{const[e,n]=Object(r.k)(!1);return Object(A.c)(A.a,{children:[Object(A.b)(d,{children:Object(A.b)("h2",Object.assign({style:{color:"#cccccc"}},{children:"LoveLive! Sunshine!! 음악 퀴즈"}),void 0)},void 0),Object(A.b)(d,{children:Object(A.c)("div",{children:[Object(A.b)(l,{children:"주어지는 문제 음원을 듣고 곡을 맞추면 되는 게임입니다."},void 0),Object(A.b)(l,{children:"틀릴 때까지 계속해서 문제가 출제되며, 5문제 단위로 난이도가 상승합니다."},void 0),Object(A.b)(l,{children:"곡의 10~180초 지점을 랜덤하게 선택해 난이도별 길이만큼 자른 음원이 문제로 출제됩니다."},void 0),Object(A.b)(l,{children:Object(A.b)("strong",{children:"세이브 데이터는 3일 동안만 유지됩니다."},void 0)},void 0)]},void 0)},void 0),Object(A.b)(d,{children:e?Object(A.b)(s,Object.assign({disabled:!0},{children:"로딩 중..."}),void 0):Object(A.b)(s,Object.assign({onClick:()=>{v(void 0,void 0,void 0,(function*(){n(!0);const e=u(),t=yield fetch(b+"/session",{method:"GET",headers:null===e?void 0:{"X-Handle-Name":e}});t.ok&&(!function(e){localStorage.setItem("handle_name",e)}((yield t.json()).handle_name),Object(c.b)(o.PROBLEM)),n(!1)})).then().catch()}},{children:"시작하기"}),void 0)},void 0)]},void 0)},h=t(19);const j={A0001:"君のこころは輝いてるかい？",A0002:"Step! ZERO to ONE",A0003:"Aqours☆HEROES",A0004:"恋になりたいAQUARIUM",A0005:"待ってて愛のうた",A0006:"届かない星だとしても",A0007:"元気全開DAY！DAY！DAY！",A0008:"夜空はなんでも知ってるの？",A0009:"トリコリコPLEASE!!",A0010:"ときめき分類学",A0011:"Strawberry Trapper",A0012:"Guilty Night, Guilty Kiss!",A0013:"青空Jumping Heart",A0014:"ハミングフレンド",A0015:"決めたよHand in Hand",A0016:"ダイスキだったらダイジョウブ！",A0017:"ユメ語るよりユメ歌おう",A0018:"サンシャインぴっかぴか音頭",A0019:"夢で夜空を照らしたい",A0020:"未熟DREAMER",A0021:"想いよひとつになれ",A0022:"MIRAI TICKET",A0023:"ジングルベルがとまらない",A0024:"聖なる日の祈り",A0025:"Pops heartで踊るんだもん！",A0026:"空も心も晴れるから",A0027:"Waku-Waku-Week!",A0028:"Daydream Warrior",A0029:"G線上のシンデレラ",A0030:"スリリング・ワンウェイ",A0031:"太陽を追いかけろ！",A0032:"Guilty Eyes Fever",A0033:"P.S.の向こう側",A0034:"LONELY TUNING",A0035:"HAPPY PARTY TRAIN",A0036:"SKY JOURNEY",A0037:"少女以上の恋がしたい",A0038:"近未来ハッピーエンド",A0039:"海岸通りで待ってるよ",A0040:"GALAXY HidE and SeeK",A0041:"INNOCENT BIRD",A0042:"コワレヤスキ",A0043:"Shadow gate to love",A0044:"Landing action Yeah!!",A0045:"夏への扉 Never end ver.",A0046:"真夏は誰のモノ？",A0047:"地元愛♡満タン☆サマーライフ",A0048:"夏の終わりの雨音が",A0049:"未来の僕らは知ってるよ",A0050:"君の瞳を巡る冒険",A0051:"勇気はどこに？君の胸に！",A0052:"“MY LIST” to you!",A0053:"MY舞☆TONIGHT",A0054:"MIRACLE WAVE",A0055:"Awaken the power",A0056:"CRASH MIND",A0057:"DROPOUT!?",A0058:"WATER BLUE NEW WORLD",A0059:"WONDERFUL STORIES",A0060:"One More Sunshine Story",A0061:"おやすみなさん！",A0062:"in this unstable world",A0063:"Pianoforte Monologue",A0064:"Beginner's Sailing",A0065:"RED GEM WINK",A0066:"WHITE FIRST LOVE",A0067:"New winding road",A0068:"さかなかなんだか？",A0069:"キセキヒカル",A0070:"Guilty!? Farewell party",A0071:"サクラバイバイ",A0072:"卒業ですね",A0073:"ホップ・ステップ・ワーイ！",A0074:"Thank you, FRIENDS!!",A0075:"No.10",A0076:"ハジマリロード",A0077:"Marine Border Parasol",A0078:"予測不可能Driving!",A0079:"僕らの走ってきた道は…",A0080:"Next SPARKLING!!",A0081:"逃走迷走メビウスループ",A0082:"Hop? Stop? Nonstop!",A0083:"Believe again",A0084:"Brightest Melody",A0085:"Over The Next Rainbow",A0086:"i-n-g, I TRY!!",A0087:"Jump up HIGH!!",A0088:"冒険Type A, B, C!!",A0089:"未体験HORIZON",A0090:"Deep Resonance",A0091:"Dance with Minotaurus",A0092:'KOKORO Magic "A to Z"',A0093:"Wake up, Challenger!!",A0094:"New Romantic Sailors",A0095:"Love Pulsar",A0096:"Phantom Rocket Adventure",A0097:"Braveheart Coaster",A0098:"CHANGELESS",A0099:"コドク・テレポート",A0100:"Amazing Travel DNA",A0101:"空中恋愛論",A0102:"メイズセカイ",A0103:"シャゼリア☆キッス☆ダダンダーン",A0104:"Fantastic Departure!",A0105:"Aqours Pirates Desire",A0106:"JIMO-AI Dash!",A0107:"Never giving up!",A0108:"PURE PHRASE",A0109:"コットンキャンディえいえいおー！",A0110:"Dazzling White Town",A0111:"Lonely Snow Planet",A0112:"After The Rain",A0113:"Future flight",A0114:"キモチもユメも一緒だね！",A0115:"涙が雪になる前に",A0116:"Misty Frosty Love",A0117:"Party! Party! PaPaPaParty!"},p={G001:{name:"Aqours 1st 싱글",songsId:["A0001","A0002","A0003"]},G002:{name:"Aqours 2nd 싱글",songsId:["A0004","A0005","A0006"]},G003:{name:"유닛 1st 싱글",songsId:["A0007","A0008","A0009","A0010","A0011","A0012"]},G004:{name:"애니메이션 1기 싱글",songsId:["A0013","A0014","A0015","A0016","A0017","A0018","A0019","A0020","A0021","A0022"]},G005:{name:"스쿠페스 콜라보 싱글",songsId:["A0023","A0024"]},G006:{name:"애니메이션 1기 BD 특전곡",songsId:["A0025","A0026","A0027","A0028","A0029","A0030","A0031","A0032","A0033","A0034"]},G007:{name:"Aqours 3rd 싱글",songsId:["A0035","A0036","A0037"]},G008:{name:"유닛 2nd 싱글",songsId:["A0038","A0039","A0040","A0041","A0042","A0043"]},G009:{name:"Aqours Next Step! Project 테마송",songsId:["A0044"]},G010:{name:"듀오트리오 콜렉션 vol.1",songsId:["A0045","A0046","A0047","A0048"]},G011:{name:"애니메이션 2기 싱글",songsId:["A0049","A0050","A0051","A0052","A0053","A0054","A0055","A0056","A0057","A0058","A0059"]},G012:{name:"애니메이션 2기 BD 특전곡",songsId:["A0060","A0061","A0062","A0063","A0064","A0065","A0066","A0067","A0068","A0069","A0070","A0071","A0072"]},G013:{name:"Aqours Hop! Step! Jump! Project! 테마송",songsId:["A0073"]},G014:{name:"Aqours 4th LoveLive! ~Sailing to the Sunshine~ 테마송",songsId:["A0074","A0075"]},G015:{name:"극장판 사전예매권 특전",songsId:["A0076","A0077","A0078"]},G016:{name:"극장판 싱글",songsId:["A0079","A0080","A0081","A0082","A0083","A0084","A0085"]},G017:{name:"극장판 BD 특전곡",songsId:["A0086"]},G018:{name:"Aqours Jumpin'up Project 테마송",songsId:["A0087"]},G019:{name:"리얼 탈출 게임 콜라보 싱글",songsId:["A0088"]},G020:{name:"Aqours 4th 싱글",songsId:["A0089","A0090","A0091"]},G021:{name:"스쿠스타 콜라보 싱글",songsId:["A0092","A0093"]},G022:{name:"유닛 스쿠페스 콜라보 싱글",songsId:["A0094","A0095","A0096","A0097","A0098","A0099","A0100","A0101","A0102"]},G023:{name:"유닛 라이브 어드벤쳐 테마송",songsId:["A0103"]},G024:{name:"Aqours 6th LoveLive! DOME TOUR 2020 테마송",songsId:["A0104","A0105"]},G025:{name:"Aqours 지모아이! Take Me Higher Project 테마송",songsId:["A0106"]},G026:{name:"솔로 앨범 신곡",songsId:["A0107","A0108","A0109"]},G027:{name:"Saint Snow 1st 싱글",songsId:["A0110","A0111","A0112"]},G028:{name:"Aqours CHRONICLE 신곡",songsId:["A0113"]},G029:{name:"듀오트리오 콜렉션 vol.2",songsId:["A0114","A0115","A0116","A0117"]}},g=Object.keys(p).map(e=>({label:p[e].name,options:p[e].songsId.map(e=>({value:e,label:j[e]}))}));var f=function(e,n,t,o){return new(t||(t=Promise))((function(A,i){function c(e){try{a(o.next(e))}catch(e){i(e)}}function r(e){try{a(o.throw(e))}catch(e){i(e)}}function a(e){var n;e.done?A(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(c,r)}a((o=o.apply(e,n||[])).next())}))};const m={value:"A0001",label:j.A0001};var y=()=>{const[e,n]=Object(r.k)(!1),[t,i]=Object(r.k)({qNo:0,assetPath:""}),[a,v]=Object(r.k)(m),[O,p]=Object(r.k)(!1),[y,I]=Object(r.k)(!1),[E,G]=Object(r.k)({ok:!0,corrected:0}),P=()=>f(void 0,void 0,void 0,(function*(){const e=u();if(null===e)return void Object(c.b)(o.HOME);n(!0);const t=yield fetch(b+"/gen-problem",{method:"GET",headers:{"X-Handle-Name":e}});if(t.ok){const e=yield t.json();i({qNo:e.q_no,assetPath:e.asset_path})}else Object(c.b)(o.HOME);n(!1)}));Object(r.d)(()=>{P()},[]);const{answer_id:S}=E;return Object(A.c)("div",{children:[e?Object(A.b)(d,{children:Object(A.b)(l,{children:"문제 생성 중..."},void 0)},void 0):Object(A.c)(A.a,{children:[Object(A.b)(d,{children:Object(A.b)("h2",Object.assign({style:{color:"#cccccc"}},{children:t.qNo+"번째 문제"}),void 0)},void 0),Object(A.b)(d,{children:Object(A.b)(l,{children:`문제 길이: ${N=t.qNo,N<=5?3:N<=10?2:N<=15?1.5:N<=20?1:N<=25?.75:.5}초`},void 0)},void 0),Object(A.b)(d,{children:Object(A.b)("audio",Object.assign({src:t.assetPath,controls:!0},{children:"HTML audio tag is not supported"}),void 0)},void 0)]},void 0),O?E.ok?Object(A.c)(A.a,{children:[Object(A.b)(d,{children:Object(A.c)("div",{children:[Object(A.b)(l,{children:"정답입니다 ٩(๑＞◡＜๑)۶"},void 0),Object(A.b)(l,{children:`연속으로 ${E.corrected} 문제를 맞추셨습니다!`},void 0)]},void 0)},void 0),Object(A.b)(d,{children:Object(A.b)(s,Object.assign({onClick:()=>{p(!1),v(m),P()}},{children:"다음 문제 풀기"}),void 0)},void 0)]},void 0):Object(A.c)(A.a,{children:[Object(A.b)(d,{children:Object(A.c)("div",{children:[Object(A.b)(l,{children:"틀렸습니다 ｡°(´∩ω∩`)°｡"},void 0),S&&Object(A.c)(l,{children:[`정답은 ${j[S]} 입니다 (*ﾟДﾟ)`," "]},void 0),Object(A.b)(l,{children:`연속으로 총 ${E.corrected} 문제를 맞추셨습니다!`},void 0)]},void 0)},void 0),Object(A.b)(d,{children:Object(A.b)(s,Object.assign({onClick:()=>{Object(c.b)(o.HOME)}},{children:"처음으로 돌아가기"}),void 0)},void 0)]},void 0):Object(A.c)(A.a,{children:[Object(A.b)(d,{children:Object(A.b)("div",Object.assign({style:{width:"500px"}},{children:Object(A.b)(h.a,{value:a,onChange:e=>v(e),options:g},void 0)}),void 0)},void 0),Object(A.b)(d,{},void 0),Object(A.b)(d,{children:Object(A.b)(s,Object.assign({onClick:()=>{f(void 0,void 0,void 0,(function*(){const e=u();if(null===e)return void Object(c.b)(o.HOME);I(!0);const n=yield fetch(b+"/score-it",{method:"POST",headers:{"Content-Type":"application/json","X-Handle-Name":e},body:JSON.stringify({answer:a.value})});if(n.ok){const e=yield n.json();G(e),p(!0)}else Object(c.b)(o.HOME);I(!1)}))},disabled:y||e},{children:"제출"}),void 0)},void 0)]},void 0)]},void 0);var N};var I=()=>Object(A.c)(c.a,{children:[Object(A.b)(O,{path:o.HOME},void 0),Object(A.b)(y,{path:o.PROBLEM},void 0)]},void 0);Object(i.i)(Object(A.b)(I,{},void 0),document.getElementById("app"))}});