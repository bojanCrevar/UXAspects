webpackJsonp([44],{1617:function(n,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function n(n){var t=this;this.snippets={compiled:{},raw:{}},n.keys().forEach(function(a){var s=a.replace("./","").replace(/\W+(\w)/g,function(n){return n[1].toUpperCase()}),e=n(a);e.snippet&&(t.snippets.compiled[s]=e.snippet),e.example&&(t.snippets.raw[s]=e.example)})}return n}();t.BaseDocumentationSection=s},3138:function(n,t,a){"use strict";var s=this&&this.__decorate||function(n,t,a,s){var e,p=arguments.length,o=p<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,a):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(n,t,a,s);else for(var c=n.length-1;c>=0;c--)(e=n[c])&&(o=(p<3?e(o):p>3?e(t,a,o):e(t,a))||o);return p>3&&o&&Object.defineProperty(t,a,o),o},e=this&&this.__metadata||function(n,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,t)};Object.defineProperty(t,"__esModule",{value:!0});var p=a(0),o=a(23),c=a(320),l=a(171),r=a(321),u=a(3139),i=a(3143),k=a(3147),d=[u.CssHtmlHeadComponent,i.CssHtmlBodyComponent,k.CssScrollToTopButtonComponent],f=[{path:"**",component:r.DocumentationCategoryComponent,data:{category:l.ResolverService.resolveCategoryData(l.DocumentationPage.Css,"Structure")}}],h=function(){function n(n,t){t.registerResolver(n)}return n}();h=s([p.NgModule({imports:[c.DocumentationComponentsModule,o.RouterModule.forChild(f)],exports:d,declarations:d,entryComponents:d}),e("design:paramtypes",[p.ComponentFactoryResolver,l.ResolverService])],h),t.CssStructureModule=h},3139:function(n,t,a){"use strict";var s=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var a in t)t.hasOwnProperty(a)&&(n[a]=t[a])};return function(t,a){function s(){this.constructor=t}n(t,a),t.prototype=null===a?Object.create(a):(s.prototype=a.prototype,new s)}}(),e=this&&this.__decorate||function(n,t,a,s){var e,p=arguments.length,o=p<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,a):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(n,t,a,s);else for(var c=n.length-1;c>=0;c--)(e=n[c])&&(o=(p<3?e(o):p>3?e(t,a,o):e(t,a))||o);return p>3&&o&&Object.defineProperty(t,a,o),o},p=this&&this.__metadata||function(n,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,t)};Object.defineProperty(t,"__esModule",{value:!0});var o=a(0),c=a(319),l=a(1617),r=function(n){function t(){return n.call(this,a(3140))||this}return s(t,n),t}(l.BaseDocumentationSection);r=e([o.Component({selector:"uxd-css-structure-html-head",template:a(3142)}),c.DocumentationSectionComponent("CssHtmlHeadComponent"),p("design:paramtypes",[])],r),t.CssHtmlHeadComponent=r},3140:function(n,t,a){function s(n){return a(e(n))}function e(n){var t=p[n];if(!(t+1))throw new Error("Cannot find module '"+n+"'.");return t}var p={"./sample.snippet.html":3141};s.keys=function(){return Object.keys(p)},s.resolve=e,n.exports=s,s.id=3140},3141:function(n,t){n.exports={snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>\r\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\r\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>width<span class="token punctuation">=</span>device-width, initial-scale<span class="token punctuation">=</span>1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\r\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>IE<span class="token punctuation">=</span>edge<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\r\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>UX Aspects<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>\r\n\r\n  <span class="token comment" spellcheck="true">&lt;!--Update bootstrap path--\x3e</span>\r\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bootstrap.min.css<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\r\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>dist/css/ux-aspects.css<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\r\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>css/site.css<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\r\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>'}},3142:function(n,t){n.exports='<p>CSS style sheets should be loaded inside the <code>head</code>. Any <code>meta</code> tags should be specified as well.</p>\r\n\r\n<uxd-snippet [content]="snippets.compiled.sampleSnippetHtml"></uxd-snippet>'},3143:function(n,t,a){"use strict";var s=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var a in t)t.hasOwnProperty(a)&&(n[a]=t[a])};return function(t,a){function s(){this.constructor=t}n(t,a),t.prototype=null===a?Object.create(a):(s.prototype=a.prototype,new s)}}(),e=this&&this.__decorate||function(n,t,a,s){var e,p=arguments.length,o=p<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,a):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(n,t,a,s);else for(var c=n.length-1;c>=0;c--)(e=n[c])&&(o=(p<3?e(o):p>3?e(t,a,o):e(t,a))||o);return p>3&&o&&Object.defineProperty(t,a,o),o},p=this&&this.__metadata||function(n,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,t)};Object.defineProperty(t,"__esModule",{value:!0});var o=a(0),c=a(319),l=a(1617),r=function(n){function t(){return n.call(this,a(3144))||this}return s(t,n),t}(l.BaseDocumentationSection);r=e([o.Component({selector:"uxd-css-structure-html-body",template:a(3146)}),c.DocumentationSectionComponent("CssHtmlBodyComponent"),p("design:paramtypes",[])],r),t.CssHtmlBodyComponent=r},3144:function(n,t,a){function s(n){return a(e(n))}function e(n){var t=p[n];if(!(t+1))throw new Error("Cannot find module '"+n+"'.");return t}var p={"./sample.snippet.html":3145};s.keys=function(){return Object.keys(p)},s.resolve=e,n.exports=s,s.id=3144},3145:function(n,t){n.exports={snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>\r\n <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>wrapper<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\r\n   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>navbar-static-side-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\r\n     <span class="token comment" spellcheck="true">&lt;!-- Menu Button --\x3e</span>\r\n     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>navbar-default navbar-static-side navbar-static-side-light <span class="token punctuation">"</span></span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>navigation<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\r\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sidebar-collapse<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\r\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>nav<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\r\n       <span class="token comment" spellcheck="true">&lt;!-- Navigation --\x3e</span>\r\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>\r\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\r\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nav</span><span class="token punctuation">></span></span>\r\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nav</span><span class="token punctuation">></span></span>\r\n\r\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>page-content page-content-navbar-top-dark<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\r\n      <span class="token comment" spellcheck="true">&lt;!-- Insert Header here:\r\n            - Standard Header\r\n            - Standard Header &amp; Toolbar\r\n            - Condensed Header\r\n            - Condensed Header &amp; Toolbar\r\n      --\x3e</span>\r\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>wrapper-content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\r\n        <span class="token comment" spellcheck="true">&lt;!--Main Content--\x3e</span>\r\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\r\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\r\n <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\r\n\r\n  <span class="token comment" spellcheck="true">&lt;!--Update the file paths to include these from the appropriate file--\x3e</span>\r\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>jquery.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\r\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>jquery-ui.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\r\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bootstrap.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\r\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>angular/angular.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\r\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>dist/ux-aspects.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\r\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>app/app.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\r\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>'}},3146:function(n,t){n.exports='<p>The <code>body</code> structure is shown below. Everything except the navigation is contained in the <code>div.page-content</code>.</p>\r\n\r\n<blockquote>\r\n  <p><strong>Note</strong>: All <code>script</code> tags are loaded at the end.</p>\r\n</blockquote>\r\n\r\n<p>By default, <code>body</code> will have full width. Dark background theme is invoked by adding the <code>.body-dark</code> class to the <code>body</code> tag.</p>\r\n\r\n<p>The following classes can be used with the wrapper class to format the <code>body</code> similar to the default style:</p>\r\n\r\n<div class="demo-attributes table-responsive">\r\n<table class="table">\r\n  <tr>\r\n    <th>Class</th>\r\n    <th>Description</th>\r\n  </tr>\r\n  <tr>\r\n    <td class="attribute">.container-max</td>\r\n    <td>Restricts <code>max-width</code> to 1000px</td>\r\n  </tr>\r\n  <tr>\r\n    <td class="attribute">.wrapper-content</td>\r\n    <td>Gives <code>padding</code> as 20px 20px 40px</td>\r\n  </tr>\r\n  <tr>\r\n    <td class="attribute">.container-left</td>\r\n    <td>Keeps <code>margin-left</code> as 0px</td>\r\n  </tr>\r\n  <tr>\r\n    <td class="attribute">.container-fluid</td>\r\n    <td>Keeps <code>padding-left</code> and <code>padding-right</code> as 15px, <code>margin-left</code> and <code>margin-right</code> are auto-aligned.</td>\r\n  </tr>\r\n</table>\r\n</div>\r\n\r\n<br>\r\n\r\n<p>The page header can be set to light or dark theme by adding the <code>page-content-navbar-top-light</code> and <code>page-content-navbar-top-dark</code> classes to the page content respectively.</p>\r\n\r\n<uxd-snippet [content]="snippets.compiled.sampleSnippetHtml"></uxd-snippet>'},3147:function(n,t,a){"use strict";var s=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var a in t)t.hasOwnProperty(a)&&(n[a]=t[a])};return function(t,a){function s(){this.constructor=t}n(t,a),t.prototype=null===a?Object.create(a):(s.prototype=a.prototype,new s)}}(),e=this&&this.__decorate||function(n,t,a,s){var e,p=arguments.length,o=p<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,a):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(n,t,a,s);else for(var c=n.length-1;c>=0;c--)(e=n[c])&&(o=(p<3?e(o):p>3?e(t,a,o):e(t,a))||o);return p>3&&o&&Object.defineProperty(t,a,o),o},p=this&&this.__metadata||function(n,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,t)};Object.defineProperty(t,"__esModule",{value:!0});var o=a(0),c=a(319),l=a(1617),r=function(n){function t(){var t=n.call(this,a(3148))||this;return t.codepen={html:t.snippets.raw.codeExampleHtml},t}return s(t,n),t}(l.BaseDocumentationSection);r=e([o.Component({selector:"uxd-css-structure-scroll-to-top-button",template:a(3151)}),c.DocumentationSectionComponent("CssScrollToTopButtonComponent"),p("design:paramtypes",[])],r),t.CssScrollToTopButtonComponent=r},3148:function(n,t,a){function s(n){return a(e(n))}function e(n){var t=p[n];if(!(t+1))throw new Error("Cannot find module '"+n+"'.");return t}var p={"./code.example.html":3149,"./sample.snippet.html":3150};s.keys=function(){return Object.keys(p)},s.resolve=e,n.exports=s,s.id=3148},3149:function(n,t){n.exports={example:'<scroll-top direction="down" distance="75"></scroll-top>\r\n<div style="height: 800px">\r\n  <p>Top</p>\r\n</div>'}},3150:function(n,t){n.exports={snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scroll-top</span> <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>down<span class="token punctuation">"</span></span> <span class="token attr-name">distance</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>75<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scroll-top</span><span class="token punctuation">></span></span>'}},3151:function(n,t){n.exports='<p>A button can be added to the page that will scroll to the top when clicked. Add the <code>scroll-top</code> directive to the <code>body</code> element.</p>\r\n\r\n<uxd-snippet [content]="snippets.compiled.sampleSnippetHtml"></uxd-snippet>\r\n\r\n<p>Several attributes can be set to customize the behavior of the button:</p>\r\n\r\n<div class="demo-attributes table-responsive">\r\n    <table class="table">\r\n        <tr>\r\n            <th>Name</th>\r\n            <th>Type</th>\r\n            <th>Binding</th>\r\n            <th>Description</th>\r\n            <th>Optional</th>\r\n        </tr>\r\n        <tr>\r\n            <td class="attribute">direction</td>\r\n            <td>string</td>\r\n            <td>literal</td>\r\n            <td>If set to \'up\' then the button will only appear when the user begins to scroll up and hide when they scroll down. The default behavior is to show the button when the page has been scrolled down.</td>\r\n            <td>true</td>\r\n        </tr>\r\n        <tr>\r\n            <td class="attribute">distance</td>\r\n            <td>number</td>\r\n            <td>literal</td>\r\n            <td>This defines the number of pixels the button will be positioned from the bottom of the page. The default is 75px.</td>\r\n            <td>true</td>\r\n        </tr>\r\n    </table>\r\n</div>\r\n\r\n<br>'}});