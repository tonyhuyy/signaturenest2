import {readFileSync, existsSync, readdirSync} from 'node:fs';
import {join, dirname, resolve} from 'node:path';
import assert from 'node:assert/strict';
const root=resolve('dist');
const pages=readdirSync(root).filter(f=>f.endsWith('.html'));
for(const file of pages){
 const html=readFileSync(join(root,file),'utf8');
 assert(html.includes('lang="en"'),`${file}: language missing`);
 assert(html.includes('name="viewport"'),`${file}: viewport missing`);
 for(const match of html.matchAll(/(?:href|src)="([^\"]+)"/g)){
  const url=match[1];
  if(/^(https?:|mailto:|tel:|data:)/.test(url))continue;
  const [path, hash]=url.split('#');
  const target=path?resolve(path.startsWith('/')?root:dirname(join(root,file)),path.replace(/^\//,'')):join(root,file);
  assert(existsSync(target),`${file}: missing ${url}`);
  if(hash){const content=readFileSync(target,'utf8');assert(content.includes(`id="${hash}"`),`${file}: missing anchor ${url}`);}
 }
}
const home=readFileSync(join(root,'index.html'),'utf8');
for(const text of ['SIGNATURE NEST GIFTS LLC','30 N GOULD ST STE N','SHERIDAN, WY, 82801','+16055780401','contact@signaturenestgifts.com']) assert(home.includes(text),`Contact detail missing: ${text}`);
assert.equal((home.match(/class="service"/g)||[]).length,5,'Expected exactly 5 primary services');
const cfg=JSON.parse(readFileSync('vercel.json','utf8'));assert.equal(cfg.outputDirectory,'dist');
console.log(`PASS: ${pages.length} pages, local assets and anchors, business details, five services, Vercel configuration.`);
