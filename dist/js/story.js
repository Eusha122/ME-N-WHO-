export const chapters = [
 {name:'The Kingdom',roman:'I',at:0},
 {name:'The Princess',roman:'II',at:.10},
 {name:'The Knight',roman:'III',at:.20},
 {name:'Our Memories',roman:'IV',at:.29},
 {name:'The Promise',roman:'V',at:.48},
 {name:'The Little Things',roman:'VI',at:.58},
 {name:'Imperfect Chapters',roman:'VII',at:.67},
 {name:"Shoily’s Garden",roman:'VIII',at:.75},
 {name:'The Letter',roman:'IX',at:.84},
 {name:'Still Being Written',roman:'X',at:.93}
];
const p=s=>`<p class="prose">${s}</p>`;
const e=s=>`<p class="eyebrow"><span class="fine-rule"></span>${s}</p>`;
export const beats=[
 {from:0,to:.085,cls:'hero',html:`${e('THE TALE OF A KNIGHT & HIS PRINCESS')}<h1><span>Eusha <em>&</em></span><span>Shoily.</span></h1>${p('Once upon a time, in a kingdom that was never really a kingdom…')}<div class="start-line">JUST TWO PEOPLE. AND A STORY OF THEIR OWN.</div>`},
 {from:.101,to:.19,cls:'',html:`${e('II · THE PRINCESS')}<h2>Some people<br>feel like <em>home.</em></h2>${p('In a kingdom of stone and gold, she was the part that felt real. Not because she needed a knight, but because knowing her changed what he wanted to be.')}${p('Shoily. My lady. Entirely herself, and loved for it.')}`},
 {from:.202,to:.28,cls:'',html:`${e('III · THE KNIGHT')}<h2>No crown.<br>Just a place<br><em>beside you.</em></h2>${p('Eusha had no wish to rule a kingdom. He wanted something quieter: to be someone Shoily could trust, in the little moments as much as the difficult ones.')}${p('A knight, if that means showing up. A person who keeps learning how to love you well.')}`},
 {from:.29,to:.324,cls:'gallery-beat',html:`${e('IV · OUR MEMORIES')}<h2>The little moments<br><em>we get to keep.</em></h2>${p('Not every memory needs a grand story. Some just need a place to stay.')}`},
 {from:.482,to:.566,cls:'center promise',html:`${e('V · THE KNIGHT’S PROMISE')}<div class="quote-mark">“</div><h2>I wanna serve you<br>like a knight,<br>and treat you like<br><em>a princess.</em></h2>${p('My lady, I would choose to stand beside you.')}`},
 {from:.585,to:.614,cls:'parchment right',html:`${e('VI · THE LITTLE THINGS')}<h2>You matter to me,<br><em>Shoily.</em></h2>${p('I want you to feel valued in the everyday things. In being listened to. In being remembered. In knowing there is room for what matters to you.')}`},
 {from:.615,to:.643,cls:'parchment',html:`${e('A PAGE FOR MY LADY')}<h2>Thank you<br><em>for being here.</em></h2>${p('For the memories we have, and the person you are in them. I’m grateful I get to know you, beyond what any photograph could hold.')}`},
 {from:.644,to:.668,cls:'parchment right',html:`${e('ANOTHER SMALL PROMISE')}<h2>Again.<br><em>And again.</em></h2>${p('Choosing you means making an effort. Being kinder. Listening properly. Becoming someone whose actions match the things he says.')}${p('That is the story I want to keep writing with you.')}`},
 {from:.677,to:.745,cls:'',html:`${e('VII · IMPERFECT CHAPTERS')}<h2>Even here,<br>we are <em>human.</em></h2>${p('I know I don’t always get things right. When I hurt you or misunderstand you, it’s my responsibility to listen and do better.')}${p('You don’t owe me a quick answer or an easy forgiveness. I want to understand what you need, and let my actions show you I mean it.')}`},
 {from:.758,to:.828,cls:'',html:`${e('VIII · SHOILY’S GARDEN')}<h2>A little quiet.<br><em>A little us.</em></h2>${p('No great speeches here, my lady. Just a little room to breathe, with the light falling softly and our memories close by.')}${p('We don’t have to know the whole path to enjoy this part of it.')}`},
 {from:.842,to:.928,cls:'parchment letter center',html:`${e('IX · THE LETTER')}<h2>Shoily, my lady,</h2>${p('<span class="letter-line" data-line="0">You never needed a kingdom to matter to me.</span>')}${p('<span class="letter-line" data-line="1">I’m grateful for you: your smile, your own way of seeing things, and the ordinary moments I get to keep with you.</span>')}${p('<span class="letter-line" data-line="2">I won’t promise to get everything right. I want to listen, take responsibility, and keep showing up with care.</span>')}${p('<span class="letter-line" data-line="3">I don’t know what every chapter of our story will look like. But I know I want to keep writing it with you.</span>')}<div class="signature letter-line" data-line="4">Yours truly,<br>Eusha</div>`},
 {from:.943,to:1.01,cls:'center ending',html:`${e('X · TO BE CONTINUED')}<h2>Our story<br><em>isn’t finished.</em></h2>${p('There’s still so much left to write.')}<div class="signature">Yours truly,<br>Eusha</div><button id="replay" class="start-line" style="margin:34px auto 0">RETURN TO THE FIRST PAGE ↺</button>`}
];
export const clamp=(v,a=0,b=1)=>Math.min(b,Math.max(a,v));
export const smooth=(a,b,v)=>{const x=clamp((v-a)/(b-a));return x*x*(3-2*x)};
// One timeline drives a connected world. Duplicate/nearby key poses create breathing room.
export const cameraKeys=[
 [0,[63,34,110],[0,12,0],47],
 [.055,[49,27,89],[-3,11,0],47],
 [.095,[-17,12,38],[-12,8.5,15],48],
 [.12,[-18,9.5,29],[-13,8.5,15],44],
 [.17,[-17.5,9.4,28.5],[-13,8.5,15],44],
 [.20,[-1,4.5,25],[2,3.2,10],49],
 [.235,[-2.4,3.6,17],[2.7,2.8,5],48],
 [.275,[-1,3.5,10],[1,3,-3],51],
 [.30,[-1.2,3.5,6],[1,3.5,-7],52],
 [.335,[-.5,3.5,-1],[2,3.2,-7],52],
 [.37,[.5,3.5,-10],[-1,3.5,-18],54],
 [.405,[-.7,3.7,-19],[1.5,3.5,-27],54],
 [.44,[.3,3.8,-29],[-1,3.3,-37],53],
 [.475,[-1,4,-39],[0,3,-53],54],
 [.50,[0,4.5,-42],[0,4,-55],55],
 [.555,[.5,4.4,-43],[0,4,-55],55],
 [.58,[6,4.5,-47],[12,4,-57],52],
 [.62,[13,4,-50],[20,4,-57],52],
 [.66,[18,3.8,-51],[29,3.2,-52],51],
 [.69,[24,3.5,-49],[32,3,-56],49],
 [.735,[25,3.6,-49],[33,3,-58],49],
 [.765,[32,3.2,-45],[39,2.5,-52],52],
 [.80,[40,3.5,-38],[39,2,-48],51],
 [.83,[34,6,-25],[28,8,-15],52],
 [.851,[29,11,-12],[27,8.6,-16],45],
 [.913,[29.2,11,-11.8],[27,8.6,-16],45],
 [.938,[36,14,7],[26,10,-15],48],
 [.972,[62,29,63],[17,12,-13],49],
 [1,[97,57,127],[5,12,-15],51]
];
export function sampleCamera(t){let i=0;while(i<cameraKeys.length-2&&t>cameraKeys[i+1][0])i++;const a=cameraKeys[i],b=cameraKeys[i+1],u=smooth(a[0],b[0],t);return {position:a[1].map((v,k)=>v+(b[1][k]-v)*u),target:a[2].map((v,k)=>v+(b[2][k]-v)*u),fov:a[3]+(b[3]-a[3])*u}}
