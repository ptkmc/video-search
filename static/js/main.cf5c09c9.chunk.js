(this["webpackJsonpvideo-search"]=this["webpackJsonpvideo-search"]||[]).push([[0],{32:function(e,t,a){e.exports=a(70)},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(12),s=a.n(r),c=a(19),o=a.n(c),l=a(30),d=a(4),u=a(5),m=a(7),h=a(6),p=a(8),v=a(13),b=a.n(v),f=10,g=b.a.create({baseURL:"https://api.vimeo.com/",headers:{Authorization:"bearer ".concat("d9b55e62af201d7458a7c446af323204")},params:{per_page:f}}),E={name:"Placeholder Video Title",user:{name:"Channel Title"},description:"We were unable to reach the Vimeo API. Please enjoy this placeholder content in the meantime ...",pictures:{sizes:{0:{link:"https://source.unsplash.com/random/320x180"}}},uri:"/videos/799338z",resource_key:"ebab05df0f597470e4c3114cb465e1d7f27bce5f"};function y(){for(var e,t=[],a=0;a<f;a++)(e=JSON.parse(JSON.stringify(E))).resource_key+=(a+1).toString(),e.name+=" #"+(a+1).toString(),t.push(e);return{data:{data:t}}}var N=10,S=b.a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",type:"video",maxResults:N,key:"AIzaSyApkvMIYO6fiSoF9wY7nbHhN6SjA1tvPRs"}}),k={etag:'"j6xRRd8dTPVVptg711_CSPADRfg/lobTZaMsntdZp4kl5yCraf-v3AM"',id:{kind:"youtube#video",videoId:"NrDsXqJacaxf"},kind:"youtube#searchResult",snippet:{channelTitle:"Channel Title",description:"We were unable to reach the YouTube API. Please enjoy this placeholder content in the meantime ...",thumbnails:{default:{url:"https://source.unsplash.com/random/120x90",width:120,height:90},high:{url:"https://source.unsplash.com/random/480x360",width:480,height:360},medium:{url:"https://source.unsplash.com/random/320x180",width:320,height:180}},title:"Placeholder Video Title"}};function V(){for(var e,t=[],a=0;a<N;a++)(e=JSON.parse(JSON.stringify(k))).id.videoId+=(a+1).toString(),e.snippet.title+=" #"+(a+1).toString(),t.push(e);return{data:{items:t}}}var T=a(31),w=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(i)))).state={term:"",placeholder:a.props.default},a.onInputChange=function(e){a.setState({term:e.target.value})},a.onFormSubmit=function(e){e.preventDefault(),""===a.state.term?a.props.onTermSubmit(a.state.placeholder):(a.setState({placeholder:a.state.term}),a.props.onTermSubmit(a.state.term))},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("form",{onSubmit:this.onFormSubmit},i.a.createElement("div",{className:"ui ".concat(this.props.loadingStatus," search")},i.a.createElement("div",{className:"ui icon input",style:{width:"100%"}},i.a.createElement("input",{className:"prompt",type:"text",placeholder:"".concat(this.state.placeholder),onChange:this.onInputChange}),i.a.createElement("i",{className:"search icon"}))))}}]),t}(n.Component),O=a(2),j=a.n(O),x=a(3),A=a.n(x),C=(a(68),function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(i)))).getThumbnail=function(e){for(var t=3;t>-1;t--)if(e.pictures.sizes[t])return e.pictures.sizes[t].link;return"https://f.vimeocdn.com/images_v6/logo.png?DEV"},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e,t,a,n=this,r=this.props.video;return r.kind&&"youtube#searchResult"===r.kind?(e=j.a.decode(r.snippet.title),t=j.a.decode(r.snippet.channelTitle),a=r.snippet.thumbnails.medium.url):(e=j.a.decode(r.name),t=j.a.decode(r.user.name),a=this.getThumbnail(this.props.video)),"right"===this.props.contentAlign?i.a.createElement("div",{className:"item right-floated-item video-item",onClick:function(){return n.props.onVideoSelect(r)}},i.a.createElement("div",{className:"ui content"},i.a.createElement("div",{className:"ui right floated"},i.a.createElement("span",{className:"ui header"},i.a.createElement(A.a,{lines:2,className:"clamp-header"},e)),i.a.createElement("div",{className:"ui meta"},i.a.createElement("span",{className:"ui right floated"},i.a.createElement(A.a,{lines:1},t))))),i.a.createElement("div",{className:"ui right floated small image"},i.a.createElement("img",{src:a,alt:e}))):i.a.createElement("div",{className:"item video-item",onClick:function(){return n.props.onVideoSelect(r)}},i.a.createElement("div",{className:"ui small image"},i.a.createElement("img",{src:a,alt:e})),i.a.createElement("div",{className:"ui content"},i.a.createElement("div",{className:"ui header"},i.a.createElement(A.a,{lines:2},e)),i.a.createElement("span",{className:"ui meta"},i.a.createElement(A.a,{lines:1},t))))}}]),t}(i.a.Component)),R=function(e){var t=e.videos,a=e.onVideoSelect,n=t.map((function(e){var t=e.kind&&"youtube#searchResult"===e.kind;return i.a.createElement(C,{key:t?e.id.videoId:e.resource_key,onVideoSelect:a,video:e,contentAlign:t?"right":"left"})}));return i.a.createElement("div",{className:"ui relaxed divided items"},n)},I=(a(69),function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(i)))).state={truncatedText:!0},a.toggleTruncatedText=function(){a.setState({truncatedText:!a.state.truncatedText})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e,t,a,n,r=this.props.video;return void 0===r?i.a.createElement("h3",{className:"ui medium header not-found"},"No Results Found",i.a.createElement("div",{className:"ui sub header"},"Try different keywords")):r?(r.kind&&"youtube#searchResult"===r.kind?(e=j.a.decode(r.snippet.title),t=j.a.decode(r.snippet.channelTitle),a=j.a.decode(r.snippet.description),n="https://www.youtube.com/embed/".concat(r.id.videoId)):(e=j.a.decode(r.name),t=j.a.decode(r.user.name),a=r.description?j.a.decode(r.description):"",n="https://player.vimeo.com/video/".concat(/([^/]+$)/.exec(r.uri)[0])),i.a.createElement("div",{className:"video-details"},i.a.createElement("div",{className:"ui embed"},i.a.createElement("iframe",{title:"video player",src:n})),i.a.createElement("div",{className:"ui segment video-description",onClick:this.toggleTruncatedText},this.state.truncatedText?i.a.createElement("div",null,i.a.createElement("h2",{className:"ui medium header"},i.a.createElement(A.a,{lines:2},e),i.a.createElement("div",{className:"sub header"},i.a.createElement(A.a,{lines:1},t))),i.a.createElement(A.a,{lines:2},a)):i.a.createElement("div",null,i.a.createElement("h2",{className:"ui medium header"},i.a.createElement("div",null,e),i.a.createElement("div",{className:"sub header"},i.a.createElement("div",null,t))),i.a.createElement("div",null,a))))):i.a.createElement("div",null,"Loading...")}}]),t}(i.a.Component)),P=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(i)))).state={defaultQuery:"animation",youtubeVideos:[],vimeoVideos:[],selectedYoutubeVideo:null,selectedVimeoVideo:null,loadingStatus:""},a.onTermSubmit=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({loadingStatus:"loading"}),T.animateScroll.scrollToTop(),n=null,i=null,e.prev=4,e.next=7,g.get("/videos",{params:{query:t}});case 7:n=e.sent,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(4),n=null!==n?n:y();case 13:return e.prev=13,e.next=16,S.get("/search",{params:{q:t}});case 16:i=e.sent,e.next=22;break;case 19:e.prev=19,e.t1=e.catch(13),i=null!==i?i:V();case 22:a.setState({youtubeVideos:i&&i.data.items,selectedYoutubeVideo:i&&i.data.items[0],vimeoVideos:n.data.data,selectedVimeoVideo:n.data.data[0],loadingStatus:""});case 23:case"end":return e.stop()}}),e,null,[[4,10],[13,19]])})));return function(t){return e.apply(this,arguments)}}(),a.onVideoSelect=function(e){e.kind&&"youtube#searchResult"===e.kind?a.setState({selectedYoutubeVideo:e}):a.setState({selectedVimeoVideo:e})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.onTermSubmit(this.state.defaultQuery)}},{key:"render",value:function(){return i.a.createElement("div",{className:"ui container"},i.a.createElement("div",{className:"video-details-container"},i.a.createElement("div",{className:"header-search"},i.a.createElement("div",{className:"searchbar-container"},i.a.createElement(w,{default:this.state.defaultQuery,onTermSubmit:this.onTermSubmit,loadingStatus:this.state.loadingStatus,onLoading:this.onLoading}))),i.a.createElement("div",{className:"ui grid"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"eight wide column"},i.a.createElement(I,{video:this.state.selectedYoutubeVideo})),i.a.createElement("div",{className:"eight wide column"},i.a.createElement(I,{video:this.state.selectedVimeoVideo}))))),i.a.createElement("div",{className:"ui grid container"},i.a.createElement("div",{className:"ui row"},i.a.createElement("div",{className:"eight wide column"},i.a.createElement(R,{onVideoSelect:this.onVideoSelect,videos:this.state.youtubeVideos})),i.a.createElement("div",{className:"eight wide column"},i.a.createElement(R,{onVideoSelect:this.onVideoSelect,videos:this.state.vimeoVideos})))))}}]),t}(i.a.Component);s.a.render(i.a.createElement(P,null),document.querySelector("#root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.cf5c09c9.chunk.js.map