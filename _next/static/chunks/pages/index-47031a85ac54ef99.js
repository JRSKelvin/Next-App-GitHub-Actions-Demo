(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3454:function(e,t,r){"use strict";var n,i;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(i=r.g.process)?void 0:i.env)?r.g.process:r(7663)},8312:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(2603)}])},3740:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(6495).Z,i=r(2648).Z,a=r(1598).Z,o=r(7273).Z,s=a(r(7294)),c=i(r(2636)),l=r(7757),u=r(3735),d=r(3341);r(4210);var f=i(r(5182));let m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/Next-App-GitHub-Actions-Demo/_next/image/",loader:"custom",dangerouslyAllowSVG:!1,unoptimized:!1};function p(e){return void 0!==e.default}function h(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function g(e,t,r,i,a,o,s){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let c="decode"in e?e.decode():Promise.resolve();c.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===r&&o(!0),null==i?void 0:i.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,a=!1;i.current(n({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>a,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{a=!0,t.stopPropagation()}}))}(null==a?void 0:a.current)&&a.current(e)}})}let v=s.forwardRef((e,t)=>{var{imgAttributes:r,heightInt:i,widthInt:a,qualityInt:c,className:l,imgStyle:u,blurStyle:d,isLazy:f,fill:m,placeholder:p,loading:h,srcString:v,config:x,unoptimized:_,loader:w,onLoadRef:y,onLoadingCompleteRef:b,setBlurComplete:j,setShowAltText:N,onLoad:E,onError:S}=e,k=o(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return h=f?"lazy":h,s.default.createElement(s.default.Fragment,null,s.default.createElement("img",Object.assign({},k,{loading:h,width:a,height:i,decoding:"async","data-nimg":m?"fill":"1",className:l,style:n({},u,d)},r,{ref:s.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(S&&(e.src=e.src),e.complete&&g(e,v,p,y,b,j,_))},[v,p,y,b,j,S,_,t]),onLoad:e=>{let t=e.currentTarget;g(t,v,p,y,b,j,_)},onError:e=>{N(!0),"blur"===p&&j(!0),S&&S(e)}})))}),x=s.forwardRef((e,t)=>{let r,i;var a,{src:g,sizes:x,unoptimized:_=!1,priority:w=!1,loading:y,className:b,quality:j,width:N,height:E,fill:S,style:k,onLoad:C,onLoadingComplete:T,placeholder:L="empty",blurDataURL:z,layout:I,objectFit:R,objectPosition:O,lazyBoundary:A,lazyRoot:P}=e,H=o(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let M=s.useContext(d.ImageConfigContext),F=s.useMemo(()=>{let e=m||M||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return n({},e,{allSizes:t,deviceSizes:r})},[M]),D=H,B=D.loader||f.default;delete D.loader;let G="__next_img_default"in B;if(G){if("custom"===F.loader)throw Error('Image with src "'.concat(g,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=B;B=t=>{let{config:r}=t,n=o(t,["config"]);return e(n)}}if(I){"fill"===I&&(S=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[I];e&&(k=n({},k,e));let t={responsive:"100vw",fill:"100vw"}[I];t&&!x&&(x=t)}let W="",V=h(N),Z=h(E);if("object"==typeof(a=g)&&(p(a)||void 0!==a.src)){let e=p(g)?g.default:g;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(r=e.blurWidth,i=e.blurHeight,z=z||e.blurDataURL,W=e.src,!S){if(V||Z){if(V&&!Z){let t=V/e.width;Z=Math.round(e.height*t)}else if(!V&&Z){let t=Z/e.height;V=Math.round(e.width*t)}}else V=e.width,Z=e.height}}let q=!w&&("lazy"===y||void 0===y);((g="string"==typeof g?g:W).startsWith("data:")||g.startsWith("blob:"))&&(_=!0,q=!1),F.unoptimized&&(_=!0),G&&g.endsWith(".svg")&&!F.dangerouslyAllowSVG&&(_=!0);let[U,X]=s.useState(!1),[Y,J]=s.useState(!1),Q=h(j),$=Object.assign(S?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:R,objectPosition:O}:{},Y?{}:{color:"transparent"},k),K="blur"===L&&z&&!U?{backgroundSize:$.objectFit||"cover",backgroundPosition:$.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(l.getImageBlurSvg({widthInt:V,heightInt:Z,blurWidth:r,blurHeight:i,blurDataURL:z,objectFit:$.objectFit}),'")')}:{},ee=function(e){let{config:t,src:r,unoptimized:n,width:i,quality:a,sizes:o,loader:s}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:c,kind:l}=function(e,t,r){let{deviceSizes:n,allSizes:i}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:i,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let a=[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))];return{widths:a,kind:"x"}}(t,i,o),u=c.length-1;return{sizes:o||"w"!==l?o:"100vw",srcSet:c.map((e,n)=>"".concat(s({config:t,src:r,quality:a,width:e})," ").concat("w"===l?e:n+1).concat(l)).join(", "),src:s({config:t,src:r,quality:a,width:c[u]})}}({config:F,src:g,unoptimized:_,width:V,quality:Q,sizes:x,loader:B}),et=g,er={imageSrcSet:ee.srcSet,imageSizes:ee.sizes,crossOrigin:D.crossOrigin},en=s.useRef(C);s.useEffect(()=>{en.current=C},[C]);let ei=s.useRef(T);s.useEffect(()=>{ei.current=T},[T]);let ea=n({isLazy:q,imgAttributes:ee,heightInt:Z,widthInt:V,qualityInt:Q,className:b,imgStyle:$,blurStyle:K,loading:y,config:F,fill:S,unoptimized:_,placeholder:L,loader:B,srcString:et,onLoadRef:en,onLoadingCompleteRef:ei,setBlurComplete:X,setShowAltText:J},D);return s.default.createElement(s.default.Fragment,null,s.default.createElement(v,Object.assign({},ea,{ref:t})),w?s.default.createElement(c.default,null,s.default.createElement("link",Object.assign({key:"__nimg-"+ee.src+ee.srcSet+ee.sizes,rel:"preload",as:"image",href:ee.srcSet?void 0:ee.src},er))):null)});t.default=x,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7757:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:i,blurDataURL:a,objectFit:o}=e,s=n||t,c=i||r,l=a.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return s&&c?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(s," ").concat(c,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(n&&i?"1":"20","'/%3E").concat(l,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(a,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none","' x='0' y='0' height='100%25' width='100%25' href='").concat(a,"'/%3E%3C/svg%3E")}},2603:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var n=r(5893),i=r(183),a=r.n(i),o=r(9008),s=r.n(o),c=r(5675),l=r.n(c),u=r(9034),d=r.n(u);function f(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s(),{children:[(0,n.jsx)("title",{children:"Create Next App"}),(0,n.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsxs)("main",{className:d().main,children:[(0,n.jsxs)("div",{className:d().description,children:[(0,n.jsxs)("p",{children:["Get started by editing\xa0",(0,n.jsx)("code",{className:d().code,children:"pages/index.tsx"})]}),(0,n.jsx)("div",{children:(0,n.jsxs)("a",{href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["By"," ",(0,n.jsx)(l(),{src:"/vercel.svg",alt:"Vercel Logo",className:d().vercelLogo,width:100,height:24,priority:!0})]})})]}),(0,n.jsxs)("div",{className:d().center,children:[(0,n.jsx)(l(),{className:d().logo,src:"/next.svg",alt:"Next.js Logo",width:180,height:37,priority:!0}),(0,n.jsx)("div",{className:d().thirteen,children:(0,n.jsx)(l(),{src:"/thirteen.svg",alt:"13",width:40,height:31,priority:!0})})]}),(0,n.jsxs)("div",{className:d().grid,children:[(0,n.jsxs)("a",{href:"https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:d().card,target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsxs)("h2",{className:a().className,children:["Docs ",(0,n.jsx)("span",{children:"->"})]}),(0,n.jsx)("p",{className:a().className,children:"Find in-depth information about Next.js features and\xa0API."})]}),(0,n.jsxs)("a",{href:"https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:d().card,target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsxs)("h2",{className:a().className,children:["Learn ",(0,n.jsx)("span",{children:"->"})]}),(0,n.jsx)("p",{className:a().className,children:"Learn about Next.js in an interactive course with\xa0quizzes!"})]}),(0,n.jsxs)("a",{href:"https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:d().card,target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsxs)("h2",{className:a().className,children:["Templates ",(0,n.jsx)("span",{children:"->"})]}),(0,n.jsx)("p",{className:a().className,children:"Discover and deploy boilerplate example Next.js\xa0projects."})]}),(0,n.jsxs)("a",{href:"https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:d().card,target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsxs)("h2",{className:a().className,children:["Deploy ",(0,n.jsx)("span",{children:"->"})]}),(0,n.jsx)("p",{className:a().className,children:"Instantly deploy your Next.js site to a shareable URL with\xa0Vercel."})]})]})]})]})}},5182:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return i}});var n=r(3454);function i(e){var t;let{src:r,width:i,quality:a}=e,o=null===(t=n.env.GITHUB_REPOSITORY)||void 0===t?void 0:t.replace(/.*?\//,"");return o?"/".concat(o).concat(r):"".concat(r)}},183:function(e){e.exports={style:{fontFamily:"'__Inter_19fdc4', '__Inter_Fallback_19fdc4'",fontStyle:"normal"},className:"__className_19fdc4"}},9034:function(e){e.exports={main:"Home_main__nLjiQ",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",center:"Home_center__4BFgC",logo:"Home_logo__27_tb",thirteen:"Home_thirteen__cMI_k",rotate:"Home_rotate____XsI",content:"Home_content__Zy02X",vercelLogo:"Home_vercelLogo__dtSk9"}},7663:function(e){!function(){var t={229:function(e){var t,r,n,i=e.exports={};function a(){throw Error("setTimeout has not been defined")}function o(){throw Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===a||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:a}catch(e){t=a}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var c=[],l=!1,u=-1;function d(){l&&n&&(l=!1,n.length?c=n.concat(c):u=-1,c.length&&f())}function f(){if(!l){var e=s(d);l=!0;for(var t=c.length;t;){for(n=c,c=[];++u<t;)n&&n[u].run();u=-1,t=c.length}n=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function p(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new m(e,t)),1!==c.length||l||s(f)},m.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=p,i.addListener=p,i.once=p,i.off=p,i.removeListener=p,i.removeAllListeners=p,i.emit=p,i.prependListener=p,i.prependOnceListener=p,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var a=r[e]={exports:{}},o=!0;try{t[e](a,a.exports,n),o=!1}finally{o&&delete r[e]}return a.exports}n.ab="//";var i=n(229);e.exports=i}()},9008:function(e,t,r){e.exports=r(2636)},5675:function(e,t,r){e.exports=r(3740)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);