import assert from 'node:assert/strict';
import fs from 'node:fs';
import {photos} from './dist/js/photos.js';
import {chapters,beats,cameraKeys,sampleCamera} from './dist/js/story.js';
import * as T from './dist/vendor/three.module.js';
assert.equal(photos.length,15);assert.equal(chapters.length,10);assert.equal(new Set(photos.map(p=>p.src)).size,15);
for(const p of photos){assert(fs.existsSync('dist'+p.src),p.src);assert(p.width>0&&p.height>0);assert(p.caption.length>0)}
for(const f of fs.readdirSync('dist/js')){const s=fs.readFileSync('dist/js/'+f,'utf8');for(const m of s.matchAll(/['"](\/assets\/[^'"]+)['"]/g))assert(fs.existsSync('dist'+m[1]),m[1])}
for(const m of fs.readFileSync('dist/style.css','utf8').matchAll(/url\(['"]?(\/[^)'" ]+)/g))assert(fs.existsSync('dist'+m[1]),m[1]);
assert.equal(cameraKeys[0][0],0);assert.equal(cameraKeys.at(-1)[0],1);
let previous=sampleCamera(0);for(let i=1;i<=10000;i++){const p=sampleCamera(i/10000);for(const n of [...p.position,...p.target,p.fov])assert(Number.isFinite(n));const delta=Math.hypot(...p.position.map((v,k)=>v-previous.position[k]));assert(delta<1,`Camera discontinuity: ${i}, ${delta}`);previous=p}
for(const b of beats){assert(b.to>b.from);assert(b.html.length>0)}
const scene=new T.Scene();scene.add(new T.HemisphereLight(),new T.DirectionalLight(),new T.AmbientLight());scene.fog=new T.FogExp2(0,0.1);
for(const g of [new T.BoxGeometry(),new T.SphereGeometry(),new T.CylinderGeometry(),new T.PlaneGeometry()]){const mesh=new T.Mesh(g,new T.MeshStandardMaterial());scene.add(mesh);g.computeBoundingSphere();assert(g.boundingSphere.radius>0)}
const cam=new T.PerspectiveCamera();cam.position.set(0,0,5);cam.lookAt(0,0,0);cam.updateMatrixWorld();scene.updateMatrixWorld();const ray=new T.Raycaster();ray.setFromCamera({x:0,y:0},cam);assert(ray.intersectObjects(scene.children).length>0);
const sphere=new T.SphereGeometry(1,16,10);const pos=sphere.attributes.position;const idx=sphere.index.array;let found=false;for(let i=0;i<idx.length;i+=3){const a=new T.Vector3().fromBufferAttribute(pos,idx[i]),b=new T.Vector3().fromBufferAttribute(pos,idx[i+1]),c=new T.Vector3().fromBufferAttribute(pos,idx[i+2]);const normal=b.clone().sub(a).cross(c.clone().sub(a));if(normal.length()>.01){assert(normal.dot(a)>0,'Sphere normals face inward');found=true;break}}assert(found);
console.log('Validated 15 local photos, 10 chapters, continuous camera route, asset references, core meshes and ray picking.');
