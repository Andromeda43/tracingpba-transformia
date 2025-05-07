class M{type;options;element;constructor(t,e={}){this.type=t,this.options={size:e.size||Math.random()*40+20,speed:e.speed||Math.random()*5+2,rotation:e.rotation||Math.random()*360,delay:e.delay||Math.random()*5,startX:e.startX||Math.random()*100,startY:e.startY||-10-Math.random()*10,opacity:e.opacity||Math.random()*.3+.1,animation:e.animation||"linear",...e},this.element=this.createElementByType(),this.init()}createElementByType(){const t=document.createElement("div");switch(t.classList.add("animated-item",`item-${this.type}`),this.type){case"cow":t.innerHTML=`<svg width="${this.options.size}" height="${this.options.size}" viewBox="0 0 24 24" fill="none" stroke="rgba(66, 255, 209, ${this.options.opacity})" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 3a4 4 0 0 0-4 4v3a4 4 0 0 0 4 4h1a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Z"></path>
            <path d="M20 3a4 4 0 0 0-4 4v3a4 4 0 0 0 4 4h1a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Z"></path>
            <path d="M5 11v4a7 7 0 0 0 7 7v0a7 7 0 0 0 7-7v-4"></path>
            <line x1="8" y1="15" x2="10" y2="15"></line>
            <line x1="14" y1="15" x2="16" y2="15"></line>
          </svg>`;break;case"pig":t.innerHTML=`<svg width="${this.options.size}" height="${this.options.size}" viewBox="0 0 24 24" fill="none" stroke="rgba(255, 66, 114, ${this.options.opacity})" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10z"></path>
            <path d="M8 11v.01M16 11v.01"></path>
            <path d="M2 12h1M4 9h1M4 15h1M6 6.8l.7.7M6 17.2l.7-.7"></path>
            <path d="M12 5c-1.107-.72-2.435-1-4-1-1.567 0-2.893.28-4 1"></path>
            <path d="M15 8a1 1 0 0 1 0 2 1 1 0 0 1 0-2zM9 8a1 1 0 0 1 0 2 1 1 0 0 1 0-2z"></path>
            <path d="M12 16v.01"></path>
          </svg>`;break;case"dataflow":t.innerHTML=`<svg width="${this.options.size?this.options.size*1.5:30}" height="${this.options.size}" viewBox="0 0 24 24" fill="none" stroke="rgba(66, 255, 209, ${this.options.opacity})" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="2" width="4" height="4" rx="1"></rect>
            <rect x="2" y="10" width="4" height="4" rx="1"></rect>
            <rect x="2" y="18" width="4" height="4" rx="1"></rect>
            <rect x="10" y="2" width="4" height="4" rx="1"></rect>
            <rect x="10" y="10" width="4" height="4" rx="1"></rect>
            <rect x="10" y="18" width="4" height="4" rx="1"></rect>
            <rect x="18" y="2" width="4" height="4" rx="1"></rect>
            <rect x="18" y="10" width="4" height="4" rx="1"></rect>
            <rect x="18" y="18" width="4" height="4" rx="1"></rect>
            <path d="M6 4h4"></path>
            <path d="M14 4h4"></path>
            <path d="M6 12h4"></path>
            <path d="M14 12h4"></path>
            <path d="M6 20h4"></path>
            <path d="M14 20h4"></path>
            <path d="M4 6v4"></path>
            <path d="M4 14v4"></path>
            <path d="M12 6v4"></path>
            <path d="M12 14v4"></path>
            <path d="M20 6v4"></path>
            <path d="M20 14v4"></path>
          </svg>`;break;case"tag":t.innerHTML=`<svg width="${this.options.size}" height="${this.options.size}" viewBox="0 0 24 24" fill="none" stroke="rgba(176, 66, 255, ${this.options.opacity})" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"></path>
            <path d="M7 7h.01"></path>
          </svg>`;break;case"barcode":t.innerHTML=`<svg width="${this.options.size?this.options.size*1.5:30}" height="${this.options.size}" viewBox="0 0 24 24" fill="none" stroke="rgba(255, 255, 255, ${this.options.opacity})" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 5v14"></path>
            <path d="M8 5v14"></path>
            <path d="M12 5v14"></path>
            <path d="M17 5v14"></path>
            <path d="M21 5v14"></path>
          </svg>`;break;case"node":t.style.width=`${this.options.size}px`,t.style.height=`${this.options.size}px`,t.style.backgroundColor=`rgba(66, 255, 209, ${this.options.opacity})`,t.style.borderRadius="50%";const e=this.options.size?this.options.size/2:10;t.style.boxShadow=`0 0 ${e}px rgba(66, 255, 209, ${this.options.opacity})`;break;case"branding-iron":t.innerHTML=`<svg width="${this.options.size}" height="${this.options.size}" viewBox="0 0 24 24" fill="none" stroke="rgba(255, 160, 66, ${this.options.opacity})" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="14" cy="6" r="4"></circle>
            <path d="M14 10v8"></path>
            <path d="M10 14h8"></path>
            <path d="M16 18v2"></path>
            <path d="M8 6h.01"></path>
          </svg>`;break;case"bull":t.innerHTML=`<svg width="${this.options.size}" height="${this.options.size}" viewBox="0 0 24 24" fill="none" stroke="rgba(255, 120, 66, ${this.options.opacity})" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
            <path d="M2 7h10"></path>
            <path d="M12 7h10"></path>
            <path d="M7 2l.5 5"></path>
            <path d="M17 2l-.5 5"></path>
            <path d="M7 14c.64 1.26 1.7 2 3 2h4c1.3 0 2.36-.74 3-2"></path>
            <path d="M5 18a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4H5v4z"></path>
          </svg>`;break;case"chart":t.innerHTML=`<svg width="${this.options.size}" height="${this.options.size}" viewBox="0 0 24 24" fill="none" stroke="rgba(66, 200, 255, ${this.options.opacity})" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="3" y1="9" x2="21" y2="9"></line>
            <line x1="9" y1="21" x2="9" y2="9"></line>
            <line x1="7" y1="15" x2="8" y2="15"></line>
            <line x1="14" y1="15" x2="16" y2="15"></line>
            <line x1="7" y1="18" x2="8" y2="18"></line>
            <line x1="14" y1="18" x2="16" y2="18"></line>
          </svg>`;break;case"gauge":t.innerHTML=`<svg width="${this.options.size}" height="${this.options.size}" viewBox="0 0 24 24" fill="none" stroke="rgba(255, 66, 200, ${this.options.opacity})" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z"></path>
            <path d="M12 12 7 7"></path>
            <path d="M12 12v5"></path>
          </svg>`;break;case"stethoscope":t.innerHTML=`<svg width="${this.options.size}" height="${this.options.size}" viewBox="0 0 24 24" fill="none" stroke="rgba(130, 255, 66, ${this.options.opacity})" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4.7 19.3a9 9 0 1 1 14.6 0"></path>
            <path d="M4 15.24A7 7 0 0 1 3 12c0-3.87 3.13-7 7-7h4c3.87 0 7 3.13 7 7a7 7 0 0 1-1 3.24"></path>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12" y2="16"></line>
          </svg>`;break;case"syringe":t.innerHTML=`<svg width="${this.options.size}" height="${this.options.size}" viewBox="0 0 24 24" fill="none" stroke="rgba(66, 255, 150, ${this.options.opacity})" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
            <path d="m14 16-4-4"></path>
            <path d="m4 6 14 14"></path>
            <path d="m11.5 13.5 1 1"></path>
            <path d="m10 7 5 5"></path>
            <path d="m9 6 6 6"></path>
            <path d="m13 14-1.5-1.5"></path>
            <path d="M4 18h.01"></path>
          </svg>`;break;case"thermometer":t.innerHTML=`<svg width="${this.options.size}" height="${this.options.size}" viewBox="0 0 24 24" fill="none" stroke="rgba(255, 66, 87, ${this.options.opacity})" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"></path>
            <path d="M12 9a1 1 0 0 0-1 1v6.54a1 1 0 0 0 2 0V10a1 1 0 0 0-1-1Z"></path>
          </svg>`;break;case"scales":t.innerHTML=`<svg width="${this.options.size}" height="${this.options.size}" viewBox="0 0 24 24" fill="none" stroke="rgba(220, 255, 66, ${this.options.opacity})" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
            <path d="m3 7 3-3 3 3"></path>
            <path d="M6 4v6"></path>
            <path d="m15 7 3-3 3 3"></path>
            <path d="M18 4v6"></path>
            <path d="M3 17h18"></path>
            <path d="M6 17v3"></path>
            <path d="M18 17v3"></path>
          </svg>`;break;case"farm":t.innerHTML=`<svg width="${this.options.size}" height="${this.options.size}" viewBox="0 0 24 24" fill="none" stroke="rgba(167, 146, 94, ${this.options.opacity})" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
            <path d="M5 8a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v1H5V8z"></path>
          </svg>`;break;case"dashboard":t.innerHTML=`<svg width="${this.options.size}" height="${this.options.size}" viewBox="0 0 24 24" fill="none" stroke="rgba(66, 255, 209, ${this.options.opacity})" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="3" width="7" height="9"></rect>
            <rect x="14" y="3" width="7" height="5"></rect>
            <rect x="14" y="12" width="7" height="9"></rect>
            <rect x="3" y="16" width="7" height="5"></rect>
          </svg>`;break;default:t.style.width=`${this.options.size}px`,t.style.height=`${this.options.size}px`,t.style.backgroundColor=`rgba(66, 255, 209, ${this.options.opacity})`}return t}init(){const t=document.querySelector(".animated-elements");t&&(this.element.style.position="absolute",this.element.style.left=`${this.options.startX}%`,this.element.style.top=`${this.options.startY}%`,this.element.style.transform=`rotate(${this.options.rotation}deg)`,this.element.style.opacity=`${this.options.opacity}`,this.element.style.transition=`top ${this.options.speed}s ${this.options.animation}, left ${this.options.speed}s ${this.options.animation}, transform ${this.options.speed}s ${this.options.animation}`,t.appendChild(this.element),setTimeout(()=>{this.animate()},(this.options.delay||0)*1e3))}animate(){let t,e,h;switch(Math.floor(Math.random()*3)){case 0:t=110+Math.random()*20,e=(this.options.startX||0)-Math.random()*60-10,h=(this.options.rotation||0)+(Math.random()*180-90);break;case 1:t=110+Math.random()*20,e=(this.options.startX||0)+Math.random()*60-10,h=(this.options.rotation||0)+(Math.random()*180-90);break;case 2:t=110+Math.random()*20,e=(this.options.startX||0)+(Math.random()*10-5),h=(this.options.rotation||0)+(Math.random()*90-45);break}this.element.style.top=`${t}%`,this.element.style.left=`${e}%`,this.element.style.transform=`rotate(${h}deg)`,setTimeout(()=>{this.element.remove(),this.options.startY=-10-Math.random()*10,this.options.startX=Math.random()*100,this.options.rotation=Math.random()*360,this.element=this.createElementByType(),this.init()},(this.options.speed||3)*1e3)}}document.addEventListener("DOMContentLoaded",()=>{const r=["cow","pig","dataflow","tag","barcode","node","branding-iron","bull","chart","gauge","stethoscope","syringe","thermometer","scales","farm","dashboard"],t=window.innerWidth<768?30:60;for(let s=0;s<t;s++){const n=r[Math.floor(Math.random()*r.length)];let i,o,a;switch(n){case"bull":case"cow":i=Math.random()*35+25,o=Math.random()*.3+.15,a=Math.random()*6+6;break;case"branding-iron":i=Math.random()*25+20,o=Math.random()*.4+.2,a=Math.random()*7+5;break;case"dashboard":case"chart":i=Math.random()*40+30,o=Math.random()*.35+.15,a=Math.random()*5+4;break;case"stethoscope":case"syringe":case"thermometer":i=Math.random()*25+15,o=Math.random()*.3+.2,a=Math.random()*6+5;break;default:i=Math.random()*30+15,o=Math.random()*.3+.1,a=Math.random()*8+4}new M(n,{size:i,speed:a,opacity:o,delay:Math.random()*15})}function e(s,n,i=2e3){const o=document.getElementById(s);if(!o)return;const a=0,d=1,l=Math.abs(Math.floor(i/(n-a)));let p=a;const c=setInterval(()=>{p+=d,o.textContent=p.toString(),p>=n&&(o.textContent=n.toString(),clearInterval(c))},l)}setTimeout(()=>{e("records-counter",100,1500),e("hours-counter",36,1500),e("points-counter",8,1500)},500);const h=()=>{const s=window.scrollY||window.pageYOffset;document.querySelectorAll(".glow-circle").forEach(i=>{const a=-s*.05;i instanceof HTMLElement&&(i.style.transform=`translateY(${a}px)`)})};window.addEventListener("scroll",h)});
