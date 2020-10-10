(this["webpackJsonpmagic-api"]=this["webpackJsonpmagic-api"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(3),c=n.n(s),i=(n(12),n(1)),o=n(2),l=n(5),u=n(4),d=new(function(){function e(){Object(i.a)(this,e),this.sets=void 0}return Object(o.a)(e,[{key:"buildSetlist",value:function(e){var t=["Tokens","Promos","Oversized"];return e.filter((function(e){var n=!0;return t.forEach((function(t){e.name.includes(t)&&(n=!1)})),n}))}},{key:"Sets",set:function(e){this.sets=this.buildSetlist(e)},get:function(){return this.sets}}]),e}()),m=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={isLoaded:!1,sets:void 0},a.onSetClicked=e.onSetClicked,a.loadSets(),a}return Object(o.a)(n,[{key:"loadSets",value:function(){var e=this;fetch("https://api.scryfall.com/sets").then((function(e){return e.json()})).then((function(t){d.Sets=t.data,e.setState({isLoaded:!0,sets:d.Sets})}),(function(t){e.setState({isLoaded:!0})}))}},{key:"render",value:function(){var e=this;return this.state.isLoaded?r.a.createElement("div",null,r.a.createElement("h1",null,"Found Sets: ",this.state.sets.length),r.a.createElement("ul",null,this.state.sets.map((function(t){return r.a.createElement("li",{key:t.code},r.a.createElement("button",{onClick:e.onSetClicked.bind(e,t.code)},r.a.createElement("img",{src:t.icon_svg_uri,alt:t.code,width:20,height:20}),r.a.createElement("span",null," "+t.name)))})))):r.a.createElement("h1",null,"I am an unloaded Setlist! :-(")}}]),n}(a.Component),h=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={cards:void 0},a}return Object(o.a)(n,[{key:"loadCards",value:function(e){var t=this;fetch("https://api.scryfall.com/cards/search?order=set&q=set:"+e).then((function(e){return e.json()})).then((function(e){t.setState({cards:e.data})}),(function(e){}))}},{key:"shouldComponentUpdate",value:function(e,t){return e.set!==this.props.set||void 0!==t.cards}},{key:"render",value:function(){if(this.props.set){if(this.state.cards){var e=this.state.cards.filter((function(e){return e&&e.image_uris&&e.image_uris.normal}));return this.setState({cards:void 0}),r.a.createElement("div",null,r.a.createElement("h1",null,"Set ",this.props.set,": ",e.length," cards"),r.a.createElement("ul",null,e.map((function(e){return r.a.createElement("li",{key:e.id,class:"Card"},r.a.createElement("img",{src:e.image_uris.normal,alt:e.name}))}))))}return this.loadCards(this.props.set),r.a.createElement("h1",null,"Loading Set: ",this.props.set,"...")}return r.a.createElement("h1",null,"I am an unloaded Cardlist :-(")}}]),n}(a.Component),p=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"handleSetClicked",value:function(e,t){console.log("AppContent: Set clicked!");var n=r.a.createElement(h,{set:e});c.a.render(n,document.getElementById("App-cards"))}},{key:"render",value:function(){return r.a.createElement("div",{id:"App-content",className:"App-content"},r.a.createElement("div",{id:"App-sets",className:"App-sets"},r.a.createElement(m,{onSetClicked:this.handleSetClicked})),r.a.createElement("div",{id:"App-cards",className:"App-cards"}))}}]),n}(a.Component);n(13);function f(){var e=r.a.createElement(p,null);c.a.render(e,document.getElementById("App-content"))}var v=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("button",{value:"Display Sets",onClick:f},"Display Sets")),r.a.createElement("div",{id:"App-content",className:"App-content"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.b344549d.chunk.js.map