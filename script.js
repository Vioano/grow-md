'use strict';
const translations = {
  navGame:'Game', navDownload:'Download', hero:'Turn a setback<br>into your next move.', intro:'You are an AI Agent.<br>Fight with commands. Rewrite yourself with experience.', download:'Download game', watch:'30s gameplay', bilingual:'中文 / English · Voiced', battleTitle:'Typing fast is only the beginning.', battleDesc:'Read the opening. Lock your target.<br>Every command comes alive on the battlefield.', play:'Watch gameplay', note1:'Real-time battles / No turns', note2:'MCP tools / Build your strategy', note3:'Boss mechanics / Read and respond', growthTitle:'Growth is<br>what you write.', growthDesc:'Turn the moves you learned into a Skill.<br>Bring your last lesson into the next fight.', observe:'Observe', write:'Write a Skill', grow:'Keep the lesson', hint:'↑ Explore the growth loop', skillTitle:'This time, use your own move.', skillDesc:'Edit. Save. Call.<br>A sequence of moves becomes one command.', ready:'The next line is yours.', downloadBoth:'Download for Mac · Roadshow', package:'macOS · ZIP / 270 MB · v1.2.1 rc4 Audience', downloadNote:'Extract fully and follow the included getting-started guide. No online AI service needed.', release:'Release & launch instructions ↗', windowsStable:'Windows download · v1.2 stable (Mac + Windows bundle) ↗', videoTitle:'GROW.md / 30-second development gameplay'
};
const nodes = [...document.querySelectorAll('[data-i18n]')];
const originals = new Map(nodes.map(node => [node, node.innerHTML]));
const languageButton = document.getElementById('language');
let language = 'zh';
let step = 0;
let typingTimer;
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const panels = {
  zh:[
    {file:'battle / inspect',status:'OBSERVING',code:'> inspect\n\n目标：当前 Boss\n先读懂机制，再锁定目标。\n\n> target @observed\n> lock\n> attack',caption:'每一次尝试，都有东西留下。'},
    {file:'skills / reacquire.md',status:'SKILL SAVED',code:'# reacquire\n\nsteps:\n- inspect\n- target @observed\n- lock\n- attack',caption:'把亲手打过的操作，变成自己的招式。'},
    {file:'GROW.md',status:'EXPERIENCE +',code:'# GROW.md\n\n## Experience\n+ 先观察，再锁定，再攻击。\n+ 把这套步骤写成 Skill。\n\n## Skills\n+ skills/reacquire.md',caption:'不是从零重来，是带着经验再来。'}
  ],
  en:[
    {file:'battle / inspect',status:'OBSERVING',code:'> inspect\n\nTarget: current boss\nRead the mechanic. Find an opening.\n\n> target @observed\n> lock\n> attack',caption:'Every attempt leaves a lesson.'},
    {file:'skills / reacquire.md',status:'SKILL SAVED',code:'# reacquire\n\nsteps:\n- inspect\n- target @observed\n- lock\n- attack',caption:'Your own sequence. Your own move.'},
    {file:'GROW.md',status:'EXPERIENCE +',code:'# GROW.md\n\n## Experience\n+ Inspect, lock, then attack.\n+ Write this sequence as a Skill.\n\n## Skills\n+ skills/reacquire.md',caption:'Start again. Keep what you learned.'}
  ]
};
const tabs = [...document.querySelectorAll('[data-step]')];
const terminalCode = document.getElementById('terminal-code');
function renderPanel(animate=false) {
  clearTimeout(typingTimer);
  const panel = panels[language][step];
  document.getElementById('terminal-file').textContent = panel.file;
  document.getElementById('terminal-status').textContent = panel.status;
  document.getElementById('terminal-caption').textContent = panel.caption;
  document.getElementById('terminal-panel').setAttribute('aria-labelledby',tabs[step].id);
  tabs.forEach((tab,index)=>{tab.setAttribute('aria-selected',String(index===step));tab.tabIndex=index===step?0:-1;});
  terminalCode.setAttribute('aria-label',panel.code);
  if (!animate || reducedMotion.matches) {terminalCode.textContent=panel.code;return;}
  let position=0;terminalCode.textContent='';
  const type=()=>{position+=3;terminalCode.textContent=panel.code.slice(0,position);if(position<panel.code.length)typingTimer=setTimeout(type,22);};
  type();
}
tabs.forEach((tab,index)=>{
  tab.addEventListener('click',()=>{step=index;renderPanel(true);});
  tab.addEventListener('keydown',event=>{
    let next;
    if(event.key==='ArrowRight')next=(step+1)%tabs.length;
    if(event.key==='ArrowLeft')next=(step+tabs.length-1)%tabs.length;
    if(event.key==='Home')next=0;
    if(event.key==='End')next=tabs.length-1;
    if(next!==undefined){event.preventDefault();step=next;renderPanel(true);tabs[step].focus();}
  });
});
function setLanguage(value){
  language=value;
  document.documentElement.lang=value==='en'?'en':'zh-CN';
  nodes.forEach(node=>{node.innerHTML=value==='en'?translations[node.dataset.i18n]:originals.get(node);});
  languageButton.textContent=value==='en'?'中文':'EN';
  languageButton.setAttribute('aria-label',value==='en'?'切换至中文':'Switch to English');
  document.title=value==='en'?'GROW.md — Learn. Write. Fight again.':'GROW.md — 把失败，写成下一次的胜利。';
  renderPanel();
  try{localStorage.setItem('grow-site-language',value);}catch{}
}
languageButton.addEventListener('click',()=>setLanguage(language==='zh'?'en':'zh'));
try{if(localStorage.getItem('grow-site-language')==='en')language='en';}catch{}
setLanguage(language);
const dialog=document.getElementById('video-dialog');
const video=document.getElementById('gameplay-video');
let videoOpener;
document.querySelectorAll('[data-watch]').forEach(button=>button.addEventListener('click',()=>{
  videoOpener=button;dialog.showModal();document.body.classList.add('modal-open');video.play().catch(()=>{});
}));
document.getElementById('close-video').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
dialog.addEventListener('close',()=>{video.pause();document.body.classList.remove('modal-open');videoOpener?.focus();});
