(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"00b5":function(t,e,a){},d195:function(t,e,a){"use strict";a("00b5")},f820:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("AboutNavigation")],1)},n=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"aboutnavigation"},[a("v-container",[a("v-responsive",[a("v-row",{attrs:{dense:""}},t._l(t.cards,(function(t){return a("v-col",{key:t.title,attrs:{cols:"12",sm:"6",xl:"3"}},[a("AboutNavigatorCard",{attrs:{cardImage:t.src,cardTitle:t.title,route:t.route}})],1)})),1)],1)],1)],1)},o=[],s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-card",{attrs:{to:t.route,exact:"",tile:"",elevation:"3"}},[i("v-img",{staticClass:"white--text align-end",attrs:{src:a("1771")("./"+t.cardImage),gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",height:t.getHeight},nativeOn:{click:function(e){return t.setTitle()}}},[i("v-card-title",{staticClass:"display-1",domProps:{textContent:t._s(t.$t(t.cardTitle))}})],1)],1)],1)},c=[],u=(a("b0c0"),a("d3b7"),a("ac1f"),a("25f0"),a("1276"),{name:"AboutNavigatorCard",props:{cardImage:String,cardTitle:String,route:String},data:function(){return{orientation:"portrait-primary"}},computed:{getHeight:function(){if(console.log("height is: "+this.height+this.orientation+this.$vuetify.breakpoint.name),"xl"===this.$vuetify.breakpoint.name)return"500";if("portrait-primary"===this.orientation)switch(this.$vuetify.breakpoint.name){case"xs":return"100";case"sm":return"200";case"lg":return"400";default:return"200"}else switch(this.$vuetify.breakpoint.name){case"xs":return"100";case"sm":return"100";case"md":return"300";case"lg":return"500";default:return"200"}}},mounted:function(){window.addEventListener("orientationchange",this.handleOrientationChange)},methods:{handleOrientationChange:function(){this.orientation=window.screen.orientation.type},setTitle:function(){this.$store.dispatch("setTitle",this.cardTitle.toString().split(".").pop())}}}),l=u,d=a("2877"),g=a("6544"),v=a.n(g),f=a("b0af"),h=a("99d9"),b=a("adda"),p=Object(d["a"])(l,s,c,!1,null,null,null),m=p.exports;v()(p,{VCard:f["a"],VCardTitle:h["d"],VImg:b["a"]});var w={name:"AboutNavigatorPortrait",components:{AboutNavigatorCard:m},data:function(){return{cards:[{title:"navigation.hobbies",src:"hobbyImage.jpg",route:"/hobby"},{title:"navigation.travel",src:"travelImage.jpg",route:"/travel"},{title:"navigation.values",src:"valuesImage.jpg",route:"/values"},{title:"navigation.offer",src:"offerImage.jpg",route:"/offer"}]}}},C=w,y=(a("d195"),a("62ad")),x=a("a523"),$=a("6b53"),k=a("0fd9"),I=Object(d["a"])(C,r,o,!1,null,"45fbcb01",null),T=I.exports;v()(I,{VCol:y["a"],VContainer:x["a"],VResponsive:$["a"],VRow:k["a"]});var _={components:{AboutNavigation:T}},j=_,V=Object(d["a"])(j,i,n,!1,null,null,null);e["default"]=V.exports}}]);
//# sourceMappingURL=about.e7a2877b.js.map