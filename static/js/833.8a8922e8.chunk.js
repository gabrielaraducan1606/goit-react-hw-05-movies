"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[833],{833:function(e,t,c){c.r(t),c.d(t,{default:function(){return s}});var r=c(439),n=c(791),a=c(689),i=c(24),o=c(184);function s(){var e=(0,a.UO)().movieId,t=(0,n.useState)([]),c=(0,r.Z)(t,2),s=c[0],u=c[1];return(0,n.useEffect)((function(){i.Z.get("".concat("https://api.themoviedb.org/3/movie","/").concat(e,"/credits?api_key=").concat("6e17ff225f02e05661d0fb89e3b2e351")).then((function(e){return u(e.data.cast)})).catch((function(e){return console.error("Error fetching cast:",e)}))}),[e]),(0,o.jsx)("div",{children:(0,o.jsx)("ul",{children:s.map((function(e){return(0,o.jsxs)("li",{children:[(0,o.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(e.profile_path),alt:e.name,style:{width:"100px"}}),(0,o.jsxs)("p",{children:[e.name," as ",e.character]})]},e.id)}))})})}}}]);
//# sourceMappingURL=833.8a8922e8.chunk.js.map