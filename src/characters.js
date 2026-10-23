// Original atlas: four columns (Nova, Pip, Widget, Noodle), neutral/waving rows.
export const characterNames={nova:'Agent Nova',pip:'Agent Pip',widget:'Widget the robot',noodle:'Professor Noodle'};
export function characterArt(p){
 if(p.art==='custom')return null;
 if(Object.hasOwn(characterNames,p.art))return p.art;
 if(Object.hasOwn(characterNames,p.illustration))return p.illustration;
 // Upgrade older saved agency casts without modifying their saved geometry.
 if(p.kind==='agent')return p.colour==='#a73245'||p.shapes?.some(s=>s.colour==='#7d243f')?'pip':'nova';
 return p.kind==='robot'?'widget':p.kind==='alien'?'noodle':null;
}
export function spriteFrame(p,width,height){const key=characterArt(p);if(!key)return null;const column=Object.keys(characterNames).indexOf(key),row=Math.abs(p.pose)>10?1:0;return {sx:column*width/4,sy:row*height/2,sw:width/4,sh:height/2};}
export function createCharacterRenderer(){
 const atlas=new Image(),silhouette=document.createElement('canvas');let ready=false;
 atlas.onload=()=>{silhouette.width=atlas.naturalWidth;silhouette.height=atlas.naturalHeight;const c=silhouette.getContext('2d');c.drawImage(atlas,0,0);c.globalCompositeOperation='source-in';c.fillStyle='#101d32';c.fillRect(0,0,silhouette.width,silhouette.height);ready=true;};
 atlas.src='/agency-cast.webp';
 function draw(ctx,p,light){
  if(!ready)return false;const f=spriteFrame(p,atlas.naturalWidth,atlas.naturalHeight);if(!f)return false;
  ctx.save();
  if(light){const factor=1/(1-p.depth);ctx.translate(light.x+(p.x-light.x)*factor,light.y+(p.y-light.y)*factor);ctx.scale(factor,factor);ctx.globalAlpha=.55;ctx.filter=`blur(${1+p.depth*5}px)`;}
  else ctx.translate(p.x,p.y);
  ctx.rotate(p.angle*Math.PI/180);ctx.scale(p.scale,p.scale);
  if(!light){ctx.fillStyle='#06152355';ctx.beginPath();ctx.ellipse(0,141,70,12,0,0,Math.PI*2);ctx.fill();}
  ctx.drawImage(light?silhouette:atlas,f.sx,f.sy,f.sw,f.sh,-120,-155,240,300);ctx.restore();return true;
 }
 return {draw,dispose(){atlas.onload=null;}};
}
