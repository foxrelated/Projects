function resizeContent(){}function getInternetExplorerVersion(){var e=-1;if(navigator.appName=="Microsoft Internet Explorer"){var t=navigator.userAgent;var n=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");if(n.exec(t)!=null)e=parseFloat(RegExp.$1)}return e}(function(){function y(){b();E();S();x();L();T(f.offsetWidth,f.offsetHeight);N()}function b(){m=new FSS.CanvasRenderer;w(r.renderer)}function w(e){if(c){l.removeChild(c.element)}switch(e){case n:c=m;break}c.setSize(f.offsetWidth,f.offsetHeight);l.appendChild(c.element)}function E(){h=new FSS.Scene}function S(){h.remove(p);c.clear();d=new FSS.Plane(e.width*c.width,e.height*c.height,e.segments,e.slices);v=new FSS.Material(e.ambient,e.diffuse);p=new FSS.Mesh(d,v);h.add(p);var t,n;for(t=d.vertices.length-1;t>=0;t--){n=d.vertices[t];n.anchor=FSS.Vector3.clone(n.position);n.step=FSS.Vector3.create(Math.randomInRange(.2,1),Math.randomInRange(.2,1),Math.randomInRange(.2,1));n.time=Math.randomInRange(0,Math.PIM2)}}function x(){var e,n;for(e=h.lights.length-1;e>=0;e--){n=h.lights[e];h.remove(n)}c.clear();for(e=0;e<t.count;e++){n=new FSS.Light(t.ambient,t.diffuse);n.ambientHex=n.ambient.format();n.diffuseHex=n.diffuse.format();h.add(n);n.mass=Math.randomInRange(.5,1);n.velocity=FSS.Vector3.create();n.acceleration=FSS.Vector3.create();n.force=FSS.Vector3.create()}}function T(e,t){c.setSize(e,t);FSS.Vector3.set(u,c.halfWidth,c.halfHeight);S()}function N(){s=Date.now()-o;C();k();requestAnimationFrame(N)}function C(){var n,r,i,o,f,l,c,p=e.depth/2;FSS.Vector3.copy(t.bounds,u);FSS.Vector3.multiplyScalar(t.bounds,t.xyScalar);FSS.Vector3.setZ(a,t.zOffset);if(t.autopilot){n=Math.sin(t.step[0]*s*t.speed);r=Math.cos(t.step[1]*s*t.speed);FSS.Vector3.set(a,t.bounds[0]*n,t.bounds[1]*r,t.zOffset)}for(o=h.lights.length-1;o>=0;o--){f=h.lights[o];FSS.Vector3.setZ(f.position,t.zOffset);var v=Math.clamp(FSS.Vector3.distanceSquared(f.position,a),t.minDistance,t.maxDistance);var m=t.gravity*f.mass/v;FSS.Vector3.subtractVectors(f.force,a,f.position);FSS.Vector3.normalise(f.force);FSS.Vector3.multiplyScalar(f.force,m);FSS.Vector3.set(f.acceleration);FSS.Vector3.add(f.acceleration,f.force);FSS.Vector3.add(f.velocity,f.acceleration);FSS.Vector3.multiplyScalar(f.velocity,t.dampening);FSS.Vector3.limit(f.velocity,t.minLimit,t.maxLimit);FSS.Vector3.add(f.position,f.velocity)}for(l=d.vertices.length-1;l>=0;l--){c=d.vertices[l];n=Math.sin(c.time+c.step[0]*s*e.speed);r=Math.cos(c.time+c.step[1]*s*e.speed);i=Math.sin(c.time+c.step[2]*s*e.speed);FSS.Vector3.set(c.position,e.xRange*d.segmentWidth*n,e.yRange*d.sliceHeight*r,e.zRange*p*i-p);FSS.Vector3.add(c.position,c.anchor)}d.dirty=true}function k(){c.render(h);if(t.draw){var e,i,s,o;for(e=h.lights.length-1;e>=0;e--){o=h.lights[e];i=o.position[0];s=o.position[1];switch(r.renderer){case n:c.context.lineWidth=.5;c.context.beginPath();c.context.arc(i,s,10,0,Math.PIM2);c.context.strokeStyle=o.ambientHex;c.context.stroke();c.context.beginPath();c.context.arc(i,s,4,0,Math.PIM2);c.context.fillStyle=o.diffuseHex;c.context.fill();break}}}}function L(){window.addEventListener("resize",O);f.addEventListener("click",A)}function A(e){FSS.Vector3.set(a,e.x,c.height-e.y);FSS.Vector3.subtract(a,u);t.autopilot=t.autopilot;g.updateDisplay()}function O(e){T(f.offsetWidth,f.offsetHeight);resizeContent();k()}var e={width:1.2,height:1.2,depth:10,segments:16,slices:8,xRange:.8,yRange:.1,zRange:1,ambient:"#555555",diffuse:"#FFFFFF",speed:1e-4};var t={count:2,xyScalar:1,zOffset:100,ambient:"#880066",diffuse:"#FF8800",speed:1e-4,gravity:1200,dampening:.95,minLimit:10,maxLimit:null,minDistance:20,maxDistance:400,autopilot:false,draw:false,bounds:FSS.Vector3.create(),step:FSS.Vector3.create(Math.randomInRange(.2,1),Math.randomInRange(.2,1),Math.randomInRange(.2,1))};var n="canvas";var r={renderer:n};var i={width:2e3,height:600,drawLights:false,minLightX:.4,maxLightX:.6,minLightY:.2,maxLightY:.4,"export":function(){var i,s,o,a,l=e.depth,p=t.zOffset,d=t.autopilot,v=this.width/c.width;t.autopilot=true;t.draw=this.drawLights;t.zOffset*=v;e.depth*=v;T(this.width,this.height);for(i=h.lights.length-1;i>=0;i--){a=h.lights[i];s=Math.randomInRange(this.width*this.minLightX,this.width*this.maxLightX);o=Math.randomInRange(this.height*this.minLightY,this.height*this.maxLightY);FSS.Vector3.set(a.position,s,this.height-o,this.lightZ);FSS.Vector3.subtract(a.position,u)}C();k();switch(r.renderer){case n:window.open(m.element.toDataURL(),"_blank");break}t.draw=true;t.autopilot=d;t.zOffset=p;e.depth=l;T(f.offsetWidth,f.offsetHeight)}};var s,o=Date.now();var u=FSS.Vector3.create();var a=FSS.Vector3.create();var f=document.getElementById("st-landing");var l=document.getElementById("st-landing-output");var c,h,p,d,v;var m;var g;y()})();$(window).load(function(){var e=getInternetExplorerVersion();if(e==-1||e>8){resizeContent()}})