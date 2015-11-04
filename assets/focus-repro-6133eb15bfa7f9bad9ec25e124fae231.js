define("focus-repro/app",["exports","ember","ember/resolver","ember/load-initializers","focus-repro/config/environment"],function(e,t,r,n,o){"use strict";var a;t["default"].MODEL_FACTORY_INJECTIONS=!0,a=t["default"].Application.extend({modulePrefix:o["default"].modulePrefix,podModulePrefix:o["default"].podModulePrefix,Resolver:r["default"]}),n["default"](a,o["default"].modulePrefix),e["default"]=a}),define("focus-repro/components/ember-wormhole",["exports","ember-wormhole/components/ember-wormhole"],function(e,t){"use strict";e["default"]=t["default"]}),define("focus-repro/components/wormhole-input",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Component.extend({wormholeEnabled:!1,_wormholeDisabled:t["default"].computed.not("wormholeEnabled"),value:"",actions:{keyUp:function(){this.get("value")?this.set("wormholeEnabled",!0):this.set("wormholeEnabled",!1)}}})}),define("focus-repro/controllers/array",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("focus-repro/controllers/object",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("focus-repro/initializers/export-application-global",["exports","ember","focus-repro/config/environment"],function(e,t,r){"use strict";function n(){var e=arguments[1]||arguments[0];if(r["default"].exportApplicationGlobal!==!1){var n,o=r["default"].exportApplicationGlobal;n="string"==typeof o?o:t["default"].String.classify(r["default"].modulePrefix),window[n]||(window[n]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[n]}}))}}e.initialize=n,e["default"]={name:"export-application-global",initialize:n}}),define("focus-repro/instance-initializers/app-version",["exports","focus-repro/config/environment","ember"],function(e,t,r){"use strict";var n=r["default"].String.classify,o=!1;e["default"]={name:"App Version",initialize:function(e){if(!o){var a=n(e.toString());r["default"].libraries.register(a,t["default"].APP.version),o=!0}}}}),define("focus-repro/router",["exports","ember","focus-repro/config/environment"],function(e,t,r){"use strict";var n=t["default"].Router.extend({location:r["default"].locationType});n.map(function(){}),e["default"]=n}),define("focus-repro/templates/application",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.3",loc:{source:null,start:{line:1,column:0},end:{line:9,column:0}},moduleName:"focus-repro/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createElement("h2");e.setAttribute(r,"id","title");var n=e.createTextNode("Welcome to Ember.js");e.appendChild(r,n),e.appendChild(t,r);var r=e.createTextNode("\n\n");e.appendChild(t,r);var r=e.createComment("");e.appendChild(t,r);var r=e.createTextNode("\n\n");e.appendChild(t,r);var r=e.createComment("");e.appendChild(t,r);var r=e.createTextNode("\n");e.appendChild(t,r);var r=e.createElement("div");e.setAttribute(r,"id","top-wormhole"),e.setAttribute(r,"class","top-wormhole");var n=e.createTextNode("\n");e.appendChild(r,n),e.appendChild(t,r);var r=e.createTextNode("\n");return e.appendChild(t,r),t},buildRenderNodes:function(e,t,r){var n=new Array(2);return n[0]=e.createMorphAt(t,2,2,r),n[1]=e.createMorphAt(t,4,4,r),n},statements:[["content","outlet",["loc",[null,[3,0],[3,10]]]],["content","wormhole-input",["loc",[null,[5,0],[5,18]]]]],locals:[],templates:[]}}())}),define("focus-repro/templates/components/wormhole-input",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{revision:"Ember@1.13.3",loc:{source:null,start:{line:1,column:0},end:{line:3,column:0}},moduleName:"focus-repro/templates/components/wormhole-input.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createTextNode("  ");e.appendChild(t,r);var r=e.createComment("");e.appendChild(t,r);var r=e.createTextNode("\n");return e.appendChild(t,r),t},buildRenderNodes:function(e,t,r){var n=new Array(1);return n[0]=e.createMorphAt(t,1,1,r),n},statements:[["inline","input",[],["value",["subexpr","@mut",[["get","value",["loc",[null,[2,16],[2,21]]]]],[],[]],"focus-in","focus","key-up","keyUp","bubbles",!0],["loc",[null,[2,2],[2,68]]]]],locals:[],templates:[]}}();return{meta:{revision:"Ember@1.13.3",loc:{source:null,start:{line:1,column:0},end:{line:6,column:0}},moduleName:"focus-repro/templates/components/wormhole-input.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createComment("");e.appendChild(t,r);var r=e.createTextNode("\n\n");return e.appendChild(t,r),t},buildRenderNodes:function(e,t,r){var n=new Array(1);return n[0]=e.createMorphAt(t,0,0,r),e.insertBoundary(t,0),n},statements:[["block","ember-wormhole",[],["to","top-wormhole","renderInPlace",["subexpr","@mut",[["get","_wormholeDisabled",["loc",[null,[1,50],[1,67]]]]],[],[]]],0,null,["loc",[null,[1,0],[3,19]]]]],locals:[],templates:[e]}}())}),define("focus-repro/config/environment",["ember"],function(e){var t="focus-repro";try{var r=t+"/config/environment",n=e["default"].$('meta[name="'+r+'"]').attr("content"),o=JSON.parse(unescape(n));return{"default":o}}catch(a){throw new Error('Could not read config from meta tag with name "'+r+'".')}}),runningTests?require("focus-repro/tests/test-helper"):require("focus-repro/app")["default"].create({name:"focus-repro",version:"0.0.0+7cf862ae"});