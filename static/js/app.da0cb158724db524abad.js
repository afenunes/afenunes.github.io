webpackJsonp([1],{"2tQM":function(t,o){},NHnr:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var a=e("7+uW"),i={render:function(){var t=this.$createElement,o=this._self._c||t;return o("nav",{staticClass:"nav-extended"},[o("div",{staticClass:"nav-wrapper"},[o("router-link",{staticClass:"brand-logo",attrs:{to:"/"}},[o("h4",[this._v("ImoGest")])])],1)])},staticRenderFns:[]};var n=e("VU/8")(null,i,!1,function(t){e("Ts0V")},"data-v-5def140e",null).exports,r=e("PL78"),l={name:"App",components:{Navbar:n,quickMenu:e.n(r).a}},s={render:function(){var t=this.$createElement,o=this._self._c||t;return o("div",{attrs:{id:"app"}},[o("Navbar"),this._v(" "),o("div",{staticClass:"container"},[o("router-view")],1),this._v(" "),o("div",{staticClass:"small"},[o("quick-menu",{attrs:{position:"bottom-left",backgroundColor:"#70AB8F","menu-count":4,"icon-class":["fa fa-address-book","fa fa-home","fa fa-line-chart","fa fa-upload"],"menu-url-list":["#/cont","#","#","#/"]}})],1)],1)},staticRenderFns:[]};var c=e("VU/8")(l,s,!1,function(t){e("ejGb")},null,null).exports,m=e("/ocq"),d={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("ul",{staticClass:"collection with-header"},[e("li",{staticClass:"collection-header"},[e("h4",[t._v("Atualizações")])]),t._v(" "),e("li",{staticClass:"collection-item"},[e("b",[t._v("V0.0.1")]),t._v(" Listagem, criação, edição e deleção de contatos a funcionar\n    ")]),t._v(" "),e("li",{staticClass:"collection-item"},[e("b",[t._v("V0.0.2")]),t._v(" Menu interactivo a funcionar para contatos e Atualizações\n    ")]),t._v(" "),e("li",{staticClass:"collection-item"},[e("b",[t._v("V0.0.3")]),t._v(" Cores alteradas e bugfix na pagina de edição de contatos\n    ")])])])}]};var u=e("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},d,!1,function(t){e("kVQz")},"data-v-280a7062",null).exports,v=e("Sazm"),p=e.n(v),f=(e("3VHS"),p.a.initializeApp({apiKey:"AIzaSyB8M92-ZOiEYYvH8U51mnNr5abnal9DTrU",authDomain:"imogesta.firebaseapp.com",databaseURL:"https://imogesta.firebaseio.com",projectId:"imogesta",storageBucket:"imogesta.appspot.com",messagingSenderId:"888447591118"}).firestore()),_={name:"Contatos",data:function(){return{contatos:[]}},created:function(){var t=this;f.collection("contatos").orderBy("primeiroNome").get().then(function(o){o.forEach(function(o){console.log(o.data()),console.log(o.id);var e={id:o.id,contato_id:o.data().contato_id,primeiroNome:o.data().primeiroNome,ultimoNome:o.data().ultimoNome,morada:o.data().morada,telemovel:o.data().contacto};t.contatos.push(e)})})}},h={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("ul",{staticClass:"collection with-header"},[t._m(0),t._v(" "),t._l(t.contatos,function(o){return e("li",{key:o.id,staticClass:"collection-item"},[t._v("\n    "+t._s(o.primeiroNome)+"\n    "),e("router-link",{staticClass:"secondary-content",attrs:{to:{name:"view-contato",params:{contato_id:o.contato_id}}}},[e("i",{staticClass:"fa fa-eye",staticStyle:{color:"#70AB8F"}})])],1)})],2),t._v(" "),e("div",{staticClass:"fixed-action-btn"},[e("router-link",{staticClass:"btn-floating",staticStyle:{"background-color":"#70AB8F"},attrs:{to:"/novo_cont"}},[e("i",{staticClass:"fa fa-plus"})])],1)])},staticRenderFns:[function(){var t=this.$createElement,o=this._self._c||t;return o("li",{staticClass:"collection-header"},[o("h3",[this._v("Contatos")])])}]};var N=e("VU/8")(_,h,!1,function(t){e("PAlI")},"data-v-7f9c9f0a",null).exports,C={name:"NovoContato",data:function(){return{contato_id:null,primeiroNome:null,ultimoNome:null,morada:null,telemovel:null}},methods:{guardarContato:function(){var t=this;f.collection("contatos").add({contato_id:this.contato_id,primeiroNome:this.primeiroNome,ultimoNome:this.ultimoNome,morada:this.morada,telemovel:this.telemovel}).then(function(o){t.$router.push("/cont").catch(function(t){return console.log(err)})})}}},g={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("h3",[t._v("Novo Contato")]),t._v(" "),e("div",{staticClass:"row",attrs:{id:"preencher"}},[e("form",{staticClass:"col s12",on:{submit:function(o){return o.preventDefault(),t.guardarContato(o)}}},[e("div",{staticClass:"row"},[e("div",{staticClass:"input-field col s12"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.contato_id,expression:"contato_id"}],attrs:{type:"text",id:"contato_id",required:""},domProps:{value:t.contato_id},on:{input:function(o){o.target.composing||(t.contato_id=o.target.value)}}}),t._v(" "),e("label",{attrs:{for:"contato_id"}},[t._v("ID de utilizador")])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"input-field col s12"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.primeiroNome,expression:"primeiroNome"}],attrs:{type:"text",id:"primeiroNome",required:""},domProps:{value:t.primeiroNome},on:{input:function(o){o.target.composing||(t.primeiroNome=o.target.value)}}}),t._v(" "),e("label",{attrs:{for:"primeiroNome"}},[t._v("Primeiro Nome")])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"input-field col s12"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.ultimoNome,expression:"ultimoNome"}],attrs:{type:"text",id:"ultimoNome",required:""},domProps:{value:t.ultimoNome},on:{input:function(o){o.target.composing||(t.ultimoNome=o.target.value)}}}),t._v(" "),e("label",{attrs:{for:"ultimoNome"}},[t._v("Ultimo Nome")])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"input-field col s12"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.morada,expression:"morada"}],attrs:{type:"text",id:"morada",required:""},domProps:{value:t.morada},on:{input:function(o){o.target.composing||(t.morada=o.target.value)}}}),t._v(" "),e("label",{attrs:{for:"morada"}},[t._v("Morada")])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"input-field col s12"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.telemovel,expression:"telemovel"}],attrs:{type:"text",id:"telemovel",required:""},domProps:{value:t.telemovel},on:{input:function(o){o.target.composing||(t.telemovel=o.target.value)}}}),t._v(" "),e("label",{attrs:{for:"telemovel"}},[t._v("Telemóvel")])])]),t._v(" "),e("button",{staticClass:"btn",attrs:{type:"submit"}},[t._v("Submeter")]),t._v(" "),e("router-link",{staticClass:"btn grey",attrs:{to:"/cont"}},[t._v("Retroceder")])],1)])])},staticRenderFns:[]};var b=e("VU/8")(C,g,!1,function(t){e("W4MN")},"data-v-16a9e472",null).exports,w={name:"ViewContato",data:function(){return{contato_id:null,primeiroNome:null,ultimoNome:null,morada:null,telemovel:null}},beforeRouteEnter:function(t,o,e){f.collection("contatos").where("contato_id","==",t.params.contato_id).get().then(function(t){t.forEach(function(t){e(function(o){o.contato_id=t.data().contato_id,o.primeiroNome=t.data().primeiroNome,o.ultimoNome=t.data().ultimoNome,o.morada=t.data().morada,o.telemovel=t.data().telemovel})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this;f.collection("contatos").where("contato_id","==",this.$route.params.contato_id).get().then(function(o){o.forEach(function(o){t.contato_id=o.data().contato_id,t.primeiroNome=o.data().primeiroNome,t.ultimoNome=o.data().ultimoNome,t.morada=o.data().morada,t.telemovel=o.data().telemovel,console.log(t.contato_id)})})},apagarContato:function(){var t=this;confirm("Tem a certeza que deseja apagar o contacto?")&&f.collection("contatos").where("contato_id","==",this.$route.params.contato_id).get().then(function(o){o.forEach(function(o){o.ref.delete(),t.$router.push("/cont")})})}}},x={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("ul",{staticClass:"collection with-header"},[e("li",{staticClass:"collection-header"},[e("h4",[t._v(t._s(t.primeiroNome)+" "+t._s(t.ultimoNome))])]),t._v(" "),e("li",{staticClass:"collection-item"},[t._v("Rua: "+t._s(t.morada))]),t._v(" "),e("li",{staticClass:"collection-item"},[t._v("Telemovel: "+t._s(t.telemovel))])]),t._v(" "),e("router-link",{staticClass:"btn grey",attrs:{to:"/cont"}},[t._v("Voltar")]),t._v(" "),e("button",{staticClass:"btn red",on:{click:t.apagarContato}},[t._v("Apagar")]),t._v(" "),e("div",{staticClass:"fixed-action-btn"},[e("router-link",{staticClass:"btn-floating",attrs:{to:{name:"editar-contato",params:{contato_id:t.contato_id}}}},[e("i",{staticClass:"fa fa-pencil"})])],1)],1)},staticRenderFns:[]};var y=e("VU/8")(w,x,!1,function(t){e("VjFn")},"data-v-1a590ffe",null).exports,E={name:"editar-contato",data:function(){return{contato_id:null,primeiroNome:null,ultimoNome:null,morada:null,telemovel:null}},beforeRouteEnter:function(t,o,e){f.collection("contatos").where("contato_id","==",t.params.contato_id).get().then(function(t){t.forEach(function(t){e(function(o){o.contato_id=t.data().contato_id,o.primeiroNome=t.data().primeiroNome,o.ultimoNome=t.data().ultimoNome,o.morada=t.data().morada,o.telemovel=t.data().telemovel})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this;f.collection("contatos").where("contato_id","==",this.$route.params.contato_id).get().then(function(o){o.forEach(function(o){t.contato_id=o.data().contato_id,t.primeiroNome=o.data().primeiroNome,t.ultimoNome=o.data().ultimoNome,t.morada=o.data().morada,t.telemovel=o.data().telemovel,console.log(t.contato_id)})})},editarContato:function(){var t=this;f.collection("contatos").where("contato_id","==",this.$route.params.contato_id).get().then(function(o){o.forEach(function(o){o.ref.update({contato_id:t.contato_id,primeiroNome:t.primeiroNome,ultimoNome:t.ultimoNome,morada:t.morada,telemovel:t.telemovel}).then(function(){t.$router.push({name:"view-contato",params:{contato_id:t.contato_id}})})})})}}},V={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{attrs:{id:"editar-contato"}},[e("h3",[t._v("Editar Contato")]),t._v(" "),e("div",{staticClass:"row",attrs:{id:"preencher"}},[e("form",{staticClass:"col s12",on:{submit:function(o){return o.preventDefault(),t.editarContato(o)}}},[e("div",{staticClass:"row"},[e("div",{staticClass:"input-field col s12"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.contato_id,expression:"contato_id"}],attrs:{disabled:"",type:"text",id:"contato_id",required:""},domProps:{value:t.contato_id},on:{input:function(o){o.target.composing||(t.contato_id=o.target.value)}}}),t._v(" "),e("label",{staticClass:"active",attrs:{for:"contato_id"}},[t._v("ID de utilizador")])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"input-field col s12"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.primeiroNome,expression:"primeiroNome"}],attrs:{type:"text",id:"primeiroNome",required:""},domProps:{value:t.primeiroNome},on:{input:function(o){o.target.composing||(t.primeiroNome=o.target.value)}}}),t._v(" "),e("label",{staticClass:"active",attrs:{for:"primeiroNome"}},[t._v("Primeiro Nome")])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"input-field col s12"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.ultimoNome,expression:"ultimoNome"}],attrs:{type:"text",id:"ultimoNome",required:""},domProps:{value:t.ultimoNome},on:{input:function(o){o.target.composing||(t.ultimoNome=o.target.value)}}}),t._v(" "),e("label",{staticClass:"active",attrs:{for:"ultimoNome"}},[t._v("Ultimo Nome")])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"input-field col s12"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.morada,expression:"morada"}],attrs:{type:"text",id:"morada",required:""},domProps:{value:t.morada},on:{input:function(o){o.target.composing||(t.morada=o.target.value)}}}),t._v(" "),e("label",{staticClass:"active",attrs:{for:"morada"}},[t._v("Morada")])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"input-field col s12"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.telemovel,expression:"telemovel"}],attrs:{type:"text",id:"telemovel",required:""},domProps:{value:t.telemovel},on:{input:function(o){o.target.composing||(t.telemovel=o.target.value)}}}),t._v(" "),e("label",{staticClass:"active",attrs:{for:"telemovel"}},[t._v("Telemóvel")])])]),t._v(" "),e("button",{staticClass:"btn",attrs:{type:"submit"}},[t._v("Submeter")]),t._v(" "),e("router-link",{staticClass:"btn grey",attrs:{to:"/cont"}},[t._v("Retroceder")])],1)])])},staticRenderFns:[]};var k=e("VU/8")(E,V,!1,function(t){e("2tQM")},null,null).exports;a.a.use(m.a);var $=new m.a({routes:[{path:"/",name:"HelloWorld",component:u},{path:"/cont",name:"Contatos",component:N},{path:"/novo_cont",name:"NovoContato",component:b},{path:"/:contato_id",name:"view-contato",component:y},{path:"/edit/:contato_id",name:"editar-contato",component:k}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:$,components:{App:c},template:"<App/>"})},PAlI:function(t,o){},Ts0V:function(t,o){},VjFn:function(t,o){},W4MN:function(t,o){},ejGb:function(t,o){},kVQz:function(t,o){}},["NHnr"]);
//# sourceMappingURL=app.da0cb158724db524abad.js.map