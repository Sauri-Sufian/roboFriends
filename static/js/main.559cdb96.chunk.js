(this.webpackJsonpdemomedia=this.webpackJsonpdemomedia||[]).push([[0],{112:function(e,a){},113:function(e,a){},114:function(e,a){},141:function(e,a){},150:function(e,a){},152:function(e,a){},161:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),i=n(62),o=n.n(i),l=(n(68),n(16)),c=n(17),s=n(19),m=n(18),u=(n(69),function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"1px ",height:"30em"}},e.children)}),h=(n(70),function(e){var a=e.name,n=e.email,t=e.id;return r.a.createElement("div",{className:"cardBody grow"},r.a.createElement("img",{alt:"profile",src:"https://robohash.org/".concat(t,"?200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,a),r.a.createElement("p",null,n)))}),d=function(e){var a=e.robots;try{return r.a.createElement("div",null,a.map((function(e,n){return r.a.createElement(h,{key:n,id:a[n].id,name:a[n].name,email:a[n].email})})))}catch(n){throw new Error("Nooo")}},f=function(e){e.searchfield;var a=e.onSearch;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"searchboox",placeholder:"Robo search",onChange:a}))},p=function(e){Object(s.a)(n,e);var a=Object(m.a)(n);function n(e){var t;return Object(l.a)(this,n),(t=a.call(this,e)).state={hasError:!1},t}return Object(c.a)(n,[{key:"componentDidCatch",value:function(e,a){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"OppSee WoOpSe "):this.props.children}}]),n}(t.Component),b=(n(71),n(20)),v=(n(5),n(84)),E=function(e){Object(s.a)(n,e);var a=Object(m.a)(n);function n(){var e;return Object(l.a)(this,n),(e=a.call(this)).setValue=function(a){var n=document.querySelectorAll("input");e.setState({name:n[1].value}),e.setState({username:n[1].value}),e.setState({email:n[2].value})},e.create=function(){var a={id:b.length-1,name:e.state.name,username:e.state.name,email:e.state.email},n=JSON.stringify(a,null,2);v.writeFile("../components/demoDatabase.json",n),console.log(b)},e.state={name:"",email:"",username:"",id:""},e}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"cardBody"},r.a.createElement("img",{alt:"profile",src:"https://robohash.org/22?200x200"}),r.a.createElement("div",null,r.a.createElement("input",{onChange:this.setValue,type:"text",placeholder:"Name"}),r.a.createElement("hr",null),r.a.createElement("input",{onChange:this.setValue,type:"email",placeholder:"email"}),r.a.createElement("button",{onClick:this.create},"Add card")))}}]),n}(t.Component),g=function(e){Object(s.a)(n,e);var a=Object(m.a)(n);function n(){var e,t;return Object(l.a)(this,n),(e=a.call(this)).onSearch=function(a){e.setState({searchfield:a.target.value})},e.state={robots:(t=b,t.forEach((function(e){e.name.length>20&&(e.name=e.name.substring(0,e.name.indexOf(" ")))})),t),searchfield:"",totalUsers:""},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this,a=this.state.robots.filter((function(a){return a.name.toLocaleLowerCase().includes(e.state.searchfield.toLocaleLowerCase())}));return 0===this.state.robots.length?r.a.createElement("h1",{className:"loading"},"Loading"):r.a.createElement("div",{className:"tc pa2 app"},r.a.createElement("h1",null,"Demo Media"),r.a.createElement(f,{onSearch:this.onSearch}),r.a.createElement(u,null,r.a.createElement(p,null,r.a.createElement(d,{robots:a}))),r.a.createElement(E,{onClick:this.onClick}))}}]),n}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(160);o.a.render(r.a.createElement("div",null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},20:function(e){e.exports=JSON.parse('[{"id":1,"name":"Leanne Graha","username":" Bret","email":" Sincere@april.biz"},{"id":2,"name":"Ervin Howell","username":" Antonette","email":"Shanna@melissa.tv"},{"id":3,"name":"Clementine Buch","username":"Samantha","email":"Nathan@yesenia.net"},{"id":4,"name":"Patricia Leback","username":"Karianne","email":"Julianne.OConner@kory.org"},{"id":5,"name":"Chelsey Dietich","username":"Kamren","email":"Lucio_Hettinger@annie.ca"},{"id":6,"name":"Mrs. Dennis chulist","username":"Leopoldo_Corkery","email":"Karley_Dach@jasper.inf"},{"id":7,"name":"Kurtis Weissat","username":"Elwyn.Skiles","email":"Telly.Hoeger@billy.biz"},{"id":8,"name":"Nicholas Runlfsdottir V","username":"Maxime_Nienow","email":"Sherwood@rosamond.me"},{"id":9,"name":"Glenna Reichrt","username":"Delphine","email":"Chaim_McDermott@dana.io"},{"id":10,"name":"Clementina DBuque","username":"Moriah.Stanton","email":"Rey.Padberg@karina.biz"}]')},63:function(e,a,n){e.exports=n(161)},68:function(e,a,n){},69:function(e,a,n){},70:function(e,a,n){},71:function(e,a,n){},74:function(e,a){},76:function(e,a){}},[[63,1,2]]]);
//# sourceMappingURL=main.559cdb96.chunk.js.map