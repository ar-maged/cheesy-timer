(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{182:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(185),o=n(192);t.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.c,{title:"Page two"}),r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement(i.Link,{to:"/"},"Go back to the homepage"))}},185:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(184),u=n.n(c);n.d(t,"Link",function(){return u.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var l=n(186),s=n.n(l);n.d(t,"PageRenderer",function(){return s.a});var d=n(32);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},186:function(e,t,n){var a;e.exports=(a=n(190))&&a.default||a},188:function(e,t,n){},189:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAaCAYAAAC3g3x9AAAACXBIWXMAAAsSAAALEgHS3X78AAAEMElEQVRIx6VVW28bRRR2Eh7aNHGaxI5vuzuzM+v1+hLbSbBTpw6tozZOXUhSh0CpAknEQ/0IIkiVwhsSCImWp0bwUl5pnwsBxA+r6vV+nBmnoYLKacVKn8+Z2+dznQmF6GtnSqH/+0kp+0ojl9VyPl94d2WhcFiu5w+8QvbLrEfIE0q5vnxZz57igHCYy+XeUxyO44RCG449TPpwWab/vLOUR7mZBvccOI6EtARElEMaQkPrNCfTtCb7SKfTsG37L8URi8WGQuGpqSEajJqW+dRkHJbBnjGbda2o2eUV2XXulbvp79/WUDqvyi6jNbWHMfaMczpjWb8Sx/np6emhUDQSUYQXaPJY2Da44F02YwVyJx94v9QC56AUiI2sRvqLUuA9rgXy43yg9nCb+2SdIvxdcWjCyEuEthSgjb7Y8OA9WYI9J8EumuBxBhazwEkXZYnMkxrUHrXXloMI6d+YyfzMo0XYTRfGxSRMYSGRSsJiJDlDfCIF2fSQ+XkRzGADLGREmOKwl9O++2MVkgsUS0UUCgU0Gg3kC7O4vVbHrdXLsEyOzFEV9hXXV2cs/ipCToRxyuJG1ne+nUNGuLj/4D729/dxdPQQt7a28dG1Ch5//SnSpg3nm3nIdta3Y4wI2WALMz8pdyzk8jldFgqqRJIpE7NZF4KqwX1IFl4dZOG/YiiuZ3QMLcl0/BjFz07bMCYN2NdciuElvfc1s5wFlQfsUj/LLG71QbqaU2tiM/t6WaY69Gkj5G5Bl47zeQniRkZD6WpO7hUUGc6sQ1XYFuO+ZXNwOiAuUfzuUYJ+qMJ9UNG6qFFrUiLoj0GdMpiQ06InLD8nTCQtC0bMQGoiiUQkoXWD9GSUxqkETJMKng+w0Ob8OJZI4ZN2y/9s/0O8M5fFleUlbH2wjZs3W1i7sYZmaw2NlQba7TZKpZIi9YUQryYk848ti2FhoeovLdXhCrLWy9B4AZVKBeVyWUMR1Wo10LWliAZ1CjvmzEBhftmfXVylmqO2M6ndEglEo1EYhqF1uqIwMzOjSM5ymZHLBr463PUfffc+GvPkcn0Je9QprVYLW1tbWF1d1XJ9ff1sQkZJYVyimDP8xVwEwhb6ks3n87qfPc/TULqCugcHZpkWf1MxrJaL3fliMaDuCDhnAQU+IDcDOqSRTCaDeDyu54m0+x9C/aNctvnxTDyO/Tvbfmf3Ni4XHVxfuYrdvT2d1c3NTS2bzSZ2dnZQr9eRSqVeZPmPU0IKuHpTRsnlp4zcmPXSz/MZp0fW9YSQPdd1e+Rqjx4gDbooepRhrZNXz08sVE/AqPZ2YmJCWXh+cnKyEYlM3x0dG+9cGA93aNyhtc74+HhnbGysEw6HT6HGam1qaqpDVt0luaI4aG//KR0ZGXmLxDlCmDD5hlBnzp1w/PMp16m+Rki+EU7ODL/g+Ru3FxvezFLDpAAAAABJRU5ErkJggg==",aspectRatio:.7626582278481012,src:"/static/baec40450c91937569157d3c3896b1bc/b02e1/screenshot1.png",srcSet:"/static/baec40450c91937569157d3c3896b1bc/6801c/screenshot1.png 200w,\n/static/baec40450c91937569157d3c3896b1bc/66edc/screenshot1.png 400w,\n/static/baec40450c91937569157d3c3896b1bc/b02e1/screenshot1.png 482w",sizes:"(max-width: 482px) 100vw, 482px"}}}}}},190:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(58),u=n(2),l=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},191:function(e){e.exports={data:{site:{siteMetadata:{title:"Cheesy Timer",description:"",author:"@ahmedlhanafy"}}}}},192:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(193),o=n(194),c=n.n(o),u=n(195);function l(){var e=c()(["\n  * {\n    font-family: 'Pacifico',\"Segoe UI\", cursive;\n    user-select: none;\n    transition: color 0.7s ease-out, background-color 0.7s ease-out;\n  }\n  body {\n    margin: 0px;\n    padding: 0px;\n  }\n"]);return l=function(){return e},e}var s=Object(u.a)(l()),d=(n(187),{backgroundColor:"#202020",buttonColor:"#2ac940",isDark:!0,primaryTextColor:"white"}),p=(n(188),function(e){var t=e.url;return r.a.createElement("a",{href:t,className:"github-corner","aria-label":"View source on GitHub"},r.a.createElement("svg",{width:"80",height:"80",viewBox:"0 0 250 250",style:{fill:"#fff",color:"#151513",position:"absolute",top:0,border:0,right:0},"aria-hidden":"true"},r.a.createElement("path",{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}),r.a.createElement("path",{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor",style:{transformOrigin:"130px 106px"},className:"octo-arm"}),r.a.createElement("path",{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor",className:"octo-body"})))}),m=i.b.div.withConfig({displayName:"Layout__Container",componentId:"frsb3v-0"})(["height:100vh;width:100%;background-color:",";display:flex;align-items:center;flex-direction:column;padding:0px 16px;overflow-x:hidden;box-sizing:border-box;"],function(e){return e.theme.backgroundColor}),f=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{theme:d},r.a.createElement(m,null,t,r.a.createElement(p,{url:"https://github.com/ahmedlhanafy/cheesy-timer"}))),r.a.createElement(s,null))},h=n(189),g=n(185),b=n(196),y=n.n(b),C=function(){return r.a.createElement(g.StaticQuery,{query:"4004464385",render:function(e){return r.a.createElement(y.a,{style:{width:400,marginTop:16},fluid:e.placeholderImage.childImageSharp.fluid})},data:h})},w=n(191),E=n(197),v=n.n(E),x=function(e){var t=e.description,n=e.lang,a=e.meta,i=e.keywords,o=e.title;return r.a.createElement(g.StaticQuery,{query:"1841633742",render:function(e){var c=t||e.site.siteMetadata.description;return r.a.createElement(v.a,{htmlAttributes:{lang:n},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:o},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:c}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(a)})},data:w})};x.defaultProps={lang:"en",meta:[],keywords:[]};var A=x;n.d(t,"b",function(){return f}),n.d(t,"a",function(){return C}),n.d(t,"c",function(){return A})}}]);
//# sourceMappingURL=component---src-pages-page-2-tsx-de675efe3247109b6ee9.js.map