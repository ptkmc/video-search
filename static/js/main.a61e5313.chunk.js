(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,a){e.exports=a(74)},70:function(e,t,a){},72:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(11),r=a.n(c),s=a(20),o=a.n(s),l=a(30),d=a(4),m=a(5),u=a(7),p=a(6),h=a(8),v=a(13),E=a.n(v),b=E.a.create({baseURL:"https://api.vimeo.com/",headers:{Authorization:"bearer ".concat("d9b55e62af201d7458a7c446af323204")},params:{per_page:"10"}}),f=E.a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",type:"video",maxResults:10,key:"AIzaSyAwShJA1Ag9c1crvJfYUpdRkvMcPxfc0XM"}}),g=a(31),N=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={term:"",placeholder:a.props.default},a.onInputChange=function(e){a.setState({term:e.target.value})},a.onFormSubmit=function(e){e.preventDefault(),""===a.state.term?a.props.onTermSubmit(a.state.placeholder):(a.setState({placeholder:a.state.term}),a.props.onTermSubmit(a.state.term))},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("form",{onSubmit:this.onFormSubmit},i.a.createElement("div",{className:"ui ".concat(this.props.loadingStatus," search")},i.a.createElement("div",{className:"ui icon input",style:{width:"100%"}},i.a.createElement("input",{className:"prompt",type:"text",placeholder:"".concat(this.state.placeholder),onChange:this.onInputChange}),i.a.createElement("i",{className:"search icon"}))))}}]),t}(n.Component),y=a(2),S=a.n(y),V=a(3),w=a.n(V),k=(a(70),function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).getThumbnail=function(e){for(var t=3;t>-1;t--)if(e.pictures.sizes[t])return e.pictures.sizes[t].link;return"https://f.vimeocdn.com/images_v6/logo.png?DEV"},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e,t,a,n=this,c=this.props.video;return c.kind&&"youtube#searchResult"===c.kind?(e=S.a.decode(c.snippet.title),t=S.a.decode(c.snippet.channelTitle),a=c.snippet.thumbnails.medium.url):(e=S.a.decode(c.name),t=S.a.decode(c.user.name),a=this.getThumbnail(this.props.video)),"right"===this.props.contentAlign?i.a.createElement("div",{className:"item right-floated-item video-item",onClick:function(){return n.props.onVideoSelect(c)}},i.a.createElement("div",{className:"ui content"},i.a.createElement("div",{className:"ui right floated"},i.a.createElement("span",{className:"ui header"},i.a.createElement(w.a,{lines:2,className:"clamp-header"},e)),i.a.createElement("div",{className:"ui meta"},i.a.createElement("span",{className:"ui right floated"},i.a.createElement(w.a,{lines:1},t))))),i.a.createElement("div",{className:"ui right floated small image"},i.a.createElement("img",{src:a,alt:e}))):i.a.createElement("div",{className:"item video-item",onClick:function(){return n.props.onVideoSelect(c)}},i.a.createElement("div",{className:"ui small image"},i.a.createElement("img",{src:a,alt:e})),i.a.createElement("div",{className:"ui content"},i.a.createElement("div",{className:"ui header"},i.a.createElement(w.a,{lines:2},e)),i.a.createElement("span",{className:"ui meta"},i.a.createElement(w.a,{lines:1},t))))}}]),t}(i.a.Component)),j=function(e){var t=e.videos,a=e.onVideoSelect,n=t.map(function(e){var t=e.kind&&"youtube#searchResult"===e.kind;return i.a.createElement(k,{key:t?e.id.videoId:e.resource_key,onVideoSelect:a,video:e,contentAlign:t?"right":"left"})});return i.a.createElement("div",{className:"ui relaxed divided items"},n)},O=(a(72),function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={truncatedText:!0},a.toggleTruncatedText=function(){a.setState({truncatedText:!a.state.truncatedText})},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e,t,a,n,c=this.props.video;return void 0===c?i.a.createElement("h3",{className:"ui medium header not-found"},"No Results Found",i.a.createElement("div",{className:"ui sub header"},"Try different keywords")):c?(c.kind&&"youtube#searchResult"===c.kind?(e=S.a.decode(c.snippet.title),t=S.a.decode(c.snippet.channelTitle),a=S.a.decode(c.snippet.description),n="https://www.youtube.com/embed/".concat(c.id.videoId)):(e=S.a.decode(c.name),t=S.a.decode(c.user.name),a=c.description?S.a.decode(c.description):"",n="https://player.vimeo.com/video/".concat(/([^\/]+$)/.exec(c.uri)[0])),i.a.createElement("div",{className:"video-details"},i.a.createElement("div",{className:"ui embed"},i.a.createElement("iframe",{title:"video player",src:n})),i.a.createElement("div",{className:"ui segment video-description",onClick:this.toggleTruncatedText},this.state.truncatedText?i.a.createElement("div",null,i.a.createElement("h2",{className:"ui medium header"},i.a.createElement(w.a,{lines:2},e),i.a.createElement("div",{className:"sub header"},i.a.createElement(w.a,{lines:1},t))),i.a.createElement(w.a,{lines:2},a)):i.a.createElement("div",null,i.a.createElement("h2",{className:"ui medium header"},i.a.createElement("div",null,e),i.a.createElement("div",{className:"sub header"},i.a.createElement("div",null,t))),i.a.createElement("div",null,a))))):i.a.createElement("div",null,"Loading...")}}]),t}(i.a.Component)),T=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={defaultQuery:"travel",youtubeVideos:[],vimeoVideos:[],selectedYoutubeVideo:null,selectedVimeoVideo:null,loadingStatus:""},a.onTermSubmit=function(){var e=Object(l.a)(o.a.mark(function e(t){var n,i;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({loadingStatus:"loading"}),g.animateScroll.scrollToTop(),e.next=4,b.get("/videos",{params:{query:t}});case 4:return n=e.sent,e.next=7,f.get("/search",{params:{q:t}});case 7:i=e.sent,a.setState({youtubeVideos:i.data.items,vimeoVideos:n.data.data,selectedYoutubeVideo:i.data.items[0],selectedVimeoVideo:n.data.data[0],loadingStatus:""});case 9:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.onVideoSelect=function(e){e.kind&&"youtube#searchResult"===e.kind?a.setState({selectedYoutubeVideo:e}):a.setState({selectedVimeoVideo:e})},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.onTermSubmit(this.state.defaultQuery)}},{key:"render",value:function(){return i.a.createElement("div",{className:"ui container"},i.a.createElement("div",{className:"video-details-container"},i.a.createElement("div",{className:"header-search"},i.a.createElement("div",{className:"searchbar-container"},i.a.createElement(N,{default:this.state.defaultQuery,onTermSubmit:this.onTermSubmit,loadingStatus:this.state.loadingStatus,onLoading:this.onLoading}))),i.a.createElement("div",{className:"ui grid"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"eight wide column"},i.a.createElement(O,{video:this.state.selectedYoutubeVideo})),i.a.createElement("div",{className:"eight wide column"},i.a.createElement(O,{video:this.state.selectedVimeoVideo}))))),i.a.createElement("div",{className:"ui grid container"},i.a.createElement("div",{className:"ui row"},i.a.createElement("div",{className:"eight wide column"},i.a.createElement(j,{onVideoSelect:this.onVideoSelect,videos:this.state.youtubeVideos})),i.a.createElement("div",{className:"eight wide column"},i.a.createElement(j,{onVideoSelect:this.onVideoSelect,videos:this.state.vimeoVideos})))))}}]),t}(i.a.Component);r.a.render(i.a.createElement(T,null),document.querySelector("#root"))}},[[32,2,1]]]);
//# sourceMappingURL=main.a61e5313.chunk.js.map