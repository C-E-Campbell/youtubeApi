(window.webpackJsonpyoutube=window.webpackJsonpyoutube||[]).push([[0],{19:function(e,t,a){e.exports=a(45)},25:function(e,t,a){},26:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(16),c=a.n(r),o=a(9),s=a.n(o),l=a(17),u=a(3),m=a(4),d=a(6),v=a(5),p=a(7),h=a(2),b=(a(25),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(v.a)(t).call(this))).onInputChange=a.onInputChange.bind(Object(h.a)(a)),a.onFormSubmit=a.onFormSubmit.bind(Object(h.a)(a)),a.state={term:""},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"onInputChange",value:function(e){this.setState({term:e.target.value})}},{key:"onFormSubmit",value:function(e){e.preventDefault(),this.setState({}),this.props.onFormSubmit(this.state.term)}},{key:"render",value:function(){return i.a.createElement("div",{className:"ui segment search-bar"},i.a.createElement("form",{onSubmit:this.onFormSubmit,className:"ui form",action:"#"},i.a.createElement("div",{className:"field"},i.a.createElement("label",{htmlFor:"searchbar"},"Search"),i.a.createElement("input",{type:"text",onChange:this.onInputChange,value:this.state.value,placeholder:"search"}))))}}]),t}(i.a.Component)),f=(a(26),function(e){var t=e.video,a=e.onVideoSelect;return i.a.createElement("div",{onClick:function(){return a(t)},className:"item video-item"},i.a.createElement("img",{className:"ui image",src:t.snippet.thumbnails.medium.url,alt:t.snippet.title}),i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"header"},t.snippet.title)))}),E=function(e){var t=e.videos,a=e.onVideoSelect,n=t.map((function(e){return i.a.createElement(f,{key:e.id.videoId,onVideoSelect:a,video:e})}));return i.a.createElement("div",{className:"ui relaxed divided list"},n)},S=function(e){var t=e.video;return t?i.a.createElement("div",null,i.a.createElement("div",{className:"ui embed"},i.a.createElement("iframe",{title:"video-player",src:"https://www.youtube.com/embed/".concat(t.id.videoId),frameBorder:"0"})),i.a.createElement("div",{className:"ui segment"},i.a.createElement("h4",{className:"ui header"}," ",t.snippet.title),i.a.createElement("p",null,t.snippet.description))):i.a.createElement("div",null,"Loading...")},w=a(18),g=a.n(w).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",maxResults:5,key:"AIzaSyC-SL7LVSFJ19W8DuJzJKtwJWtvj_nxi7o"}}),y=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(d.a)(this,Object(v.a)(t).call(this))).onTermSubmit=function(){var t=Object(l.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.get("/search",{params:{q:a}});case 2:n=t.sent,e.setState({videos:n.data.items,selectedVideo:n.data.items[0]});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onVideoSelect=function(t){e.setState({selectedVideo:t}),console.log(t)},e.state={videos:[],selectedVideo:null},e}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.onTermSubmit("first we feast ashton kutcher")}},{key:"render",value:function(){return i.a.createElement("div",{className:"ui container"},i.a.createElement(b,{onFormSubmit:this.onTermSubmit}),i.a.createElement("div",{className:"ui grid"},i.a.createElement("div",{className:"ui row"},i.a.createElement("div",{className:"eleven wide column"},i.a.createElement(S,{video:this.state.selectedVideo})),i.a.createElement("div",{className:"five wide column"},i.a.createElement(E,{onVideoSelect:this.onVideoSelect,videos:this.state.videos})))))}}]),t}(i.a.Component);c.a.render(i.a.createElement(y,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.defd54c8.chunk.js.map