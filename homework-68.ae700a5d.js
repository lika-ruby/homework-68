let e=5;console.log(`\u{414}\u{43E} \u{437}\u{430}\u{43F}\u{443}\u{441}\u{43A}\u{443} \u{440}\u{43E}\u{43A}\u{435}\u{442}\u{438} \u{434}\u{43E} \u{43A}\u{43E}\u{441}\u{43C}\u{43E}\u{441}\u{430} \u{437}\u{430}\u{43B}\u{438}\u{448}\u{438}\u{43B}\u{43E}\u{441}\u{44C}`);const t=setInterval(()=>{e<1?(console.log(`\u{41F}\u{443}\u{441}\u{43A}!!!`),clearInterval(t)):(console.log(e),e-=1)},1e3),u=document.querySelector("#box1"),n=document.querySelector("#box2"),o=document.querySelector("#box3");let l=0;setInterval(()=>{l<100?(l+=1,u.style.width=`${200+ +l}px`):l=0},100);let r=0;setInterval(()=>{r<100?(r+=1,n.style.marginLeft=`${0+5*l}px`):r=0},100);let c=0;setInterval(()=>{c+=1,o.style.transform=`rotate(${6*c}deg)`},100);const a=document.querySelector("#clicks"),d=document.querySelector("#touch");document.querySelector("#field");const s=document.querySelector("#circle");let i=0,m=0;setInterval(()=>{s.style.top=`${Math.round(320*Math.random()+0)}px`,s.style.left=`${Math.round(920*Math.random()+0)}px`},1e3),window.addEventListener("click",()=>{i+=1,a.textContent=`${i}`}),s.addEventListener("click",()=>{m+=1,d.textContent=`${m}`});const v=document.querySelector("#input"),x=document.querySelector("#time");let y=0,q=!1,E=null;v.addEventListener("blur",()=>{E&&clearInterval(E),q=!0,x.textContent=(y=Number(v.value)).toFixed(2),v.value="",E=setInterval(()=>{q&&(y<=0?(clearInterval(E),x.textContent="Час закінчився",q=!1):x.textContent=(y-=.01).toFixed(2))},10)});
//# sourceMappingURL=homework-68.ae700a5d.js.map
