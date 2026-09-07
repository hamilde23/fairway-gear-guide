import assert from 'node:assert/strict';
import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { runInNewContext } from 'node:vm';

const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const pages=['index.html','about.html','404.html','gear-reviews/index.html','course-reviews/index.html',...readdirSync(resolve(root,'posts')).filter(p=>p.endsWith('.html')).map(p=>'posts/'+p)];
const idsByFile=new Map();
let links=0,affiliates=0;
for(const file of pages){
 const html=readFileSync(resolve(root,file),'utf8');
 assert.equal((html.match(/<h1[ >]/g)||[]).length,1,`${file}: exactly one h1`);
 assert.equal((html.match(/<main[ >]/g)||[]).length,1,`${file}: exactly one main`);
 assert.match(html,/<meta name="description" content="[^"]+">/);
 assert.match(html,/<link rel="canonical" href="https:\/\/www.fairwaygearguide.com/);
 assert.match(html,/G-YPG4PGB0D3/);
 assert.match(html,/id="primary-nav"/);
 assert.match(html,/As an Amazon Associate I earn from qualifying purchases/);
 assert.doesNotMatch(html,/<artile|\n<\s*\n|[^<]\/(?:div|header)>/);
 const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
 assert.equal(ids.length,new Set(ids).size,`${file}: duplicate IDs`);
 idsByFile.set(file,new Set(ids));
 for(const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g))JSON.parse(m[1]);
 for(const m of html.matchAll(/<img\b[^>]*>/g)){
   assert.match(m[0],/alt="[^"]*"/);assert.match(m[0],/width="\d+"/);assert.match(m[0],/height="\d+"/);
 }
 for(const m of html.matchAll(/<a\b[^>]*href="https:\/\/www.amazon.com[^>]*>/g)){
   affiliates++;assert.match(m[0],/tag=fairwaygeargu-20/);assert.match(m[0],/rel="[^"]*sponsored/);assert.match(m[0],/noopener/);
 }
}
for(const file of pages){
 const html=readFileSync(resolve(root,file),'utf8');
 for(const [,attr,raw] of html.matchAll(/\b(href|src)="([^"]+)"/g)){
   if(/^(https?:|mailto:|data:)/.test(raw))continue;
   const u=new URL(raw,'https://www.fairwaygearguide.com/'+file);
   let dest=decodeURIComponent(u.pathname).slice(1)||'index.html';
   if(dest.endsWith('/'))dest+='index.html';
   assert.ok(existsSync(resolve(root,dest)),`${file}: broken ${attr} ${raw}`);
   assert.ok(statSync(resolve(root,dest)).isFile());
   if(u.hash)assert.ok(idsByFile.get(dest)?.has(decodeURIComponent(u.hash.slice(1))),`${file}: missing anchor ${raw}`);
   links++;
 }
}
const sitemap=readFileSync(resolve(root,'sitemap.xml'),'utf8');
for(const [,value] of sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)){
 const path=new URL(value).pathname;assert.ok(existsSync(resolve(root,path==='/'?'index.html':path.slice(1)+(path.endsWith('/')?'index.html':''))));
}
// Exercise mobile navigation logic without installing browser dependencies.
const events={},navEvents={},docEvents={};let expanded='false',focused=false;
const classes=new Set();
const toggle={hidden:true,setAttribute:(n,v)=>expanded=v,getAttribute:()=>expanded,addEventListener:(n,f)=>events[n]=f,focus:()=>focused=true};
const nav={classList:{remove:c=>classes.delete(c),toggle:(c,on)=>on?classes.add(c):classes.delete(c)},addEventListener:(n,f)=>navEvents[n]=f};
const document={querySelector:s=>s==='.menu-toggle'?toggle:nav,documentElement:{classList:{add(){}}},addEventListener:(n,f)=>docEvents[n]=f};
runInNewContext(readFileSync(resolve(root,'js/site.js'),'utf8'),{document});
assert.equal(toggle.hidden,false);events.click();assert.equal(expanded,'true');assert.ok(classes.has('is-open'));
docEvents.keydown({key:'Escape'});assert.equal(expanded,'false');assert.ok(focused);
events.click();navEvents.click({target:{closest:()=>true}});assert.equal(expanded,'false');
assert.equal(readFileSync(resolve(root,'CNAME'),'utf8').trim(),'www.fairwaygearguide.com');
assert.equal(affiliates,19);
console.log(`PASS: ${pages.length} pages; ${links} local links/assets; ${affiliates} affiliate links; unique IDs, metadata, schema, sitemap and menu behavior.`);
