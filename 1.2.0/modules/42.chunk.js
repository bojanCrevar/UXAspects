webpackJsonp([42],{1517:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=function(){function t(t,a,e,s,l){this.snippets={compiled:{},raw:{}},this.loadSnippetsFromRequireContext(this.snippets.raw,l),this.snippets.compiled=this.snippets.raw}return t.prototype.loadSnippetsFromRequireContext=function(t,a){a&&a.keys().forEach(function(e){var s=e.replace("./","").replace(/\W+(\w)/g,function(t){return t[1].toUpperCase()});t[s]=a(e)})},t}();a.BaseDocumentationSection=s},1670:function(t,a,e){function s(t){return e(l(t))}function l(t){var a=n[t];if(!(a+1))throw new Error("Cannot find module '"+t+"'.");return a}var n={"./app.html":2506,"./app.ts":2507};s.keys=function(){return Object.keys(n)},s.resolve=l,t.exports=s,s.id=1670},1797:function(t,a,e){"use strict";var s=this&&this.__decorate||function(t,a,e,s){var l,n=arguments.length,r=n<3?a:null===s?s=Object.getOwnPropertyDescriptor(a,e):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,a,e,s);else for(var o=t.length-1;o>=0;o--)(l=t[o])&&(r=(n<3?l(r):n>3?l(a,e,r):l(a,e))||r);return n>3&&r&&Object.defineProperty(a,e,r),r},l=this&&this.__metadata||function(t,a){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,a)};Object.defineProperty(a,"__esModule",{value:!0});var n=e(0),r=e(285),o=function(){function t(){this.htmlCode=e(2503),this.jsCode=e(2504),this.cssCode=e(2502),this.tooltipsHtml=e(2505),this.codepen={html:this.htmlCode,htmlAttributes:{"ng-controller":"SparkChartCtrl as vm"},js:[this.jsCode],css:[this.cssCode]},this.charts=[{type:"spark-chart1",value:35,fillHeight:10,topLeftLabel:"<span class='spark-label hidden-xxxs'><span class='large'>21.7</span><span class='medium light'>&nbsp;MB&nbsp;&nbsp;Items&nbsp;&nbsp;(35%)</span></span>",tooltip:"Spark Line indicator - 2.17MB of 8.2GB occupied (35%)"},{type:"spark-chart3",value:30,fillHeight:5,inlineLabel:"30%"},{type:"spark-chart2",value:35,fillHeight:10,topLeftLabel:"<span class='spark-label hidden-xxxs'><span class='large'>21.7</span><span class='medium light'>&nbsp;MB&nbsp;&nbsp;Items&nbsp;&nbsp;(35%)</span></span>",bottomLeftLabel:'<span class="spark-label hidden-xxxs"><span class="medium light">INDEX COVERAGE</span></span>',tooltip:"Spark Line indicator - 2.17MB of 8.2GB occupied (35%)"},{type:"spark-chart3",value:30,fillHeight:5,inlineLabel:'<span class="spark-label hidden-spark"><span class="x-large">30%</span></span>',topLeftLabel:'<span class="spark-label hidden-xxs"><span class="small">STORAGE ON HOLD</span></span>'},{type:"spark-chart4",value:55,fillHeight:10,topLeftLabel:"<span class='spark-label hidden-xxs'><span class='large'>8.6</span><span class='medium light'>&nbsp;GB&nbsp;Disk Space&nbsp;&nbsp;(55%)</span></span>"},{type:"spark-chart5",value:30,fillHeight:10,topLeftLabel:"30%",topRightLabel:'<span class="spark-label hidden-spark"><span class="medium light">75.0M</span></span>',bottomLeftLabel:'<span class="spark-label hidden-xxxs"><span class="medium light">ITEMS ON HOLD</span></span>',bottomRightLabel:'<span class="spark-label hidden-xxs"><span class="medium light">TOTAL</span></span>'},{type:"spark-vibrant1",value:55,fillHeight:10,topLeftLabel:"<span class='spark-label hidden-xxs'><span class='large'>8.6</span><span class='medium light'>&nbsp;GB&nbsp;Disk Space&nbsp;&nbsp;(55%)</span></span>"},{type:"spark-vibrant2",value:30,fillHeight:10,topLeftLabel:"30%",bottomLeftLabel:'<span class="spark-label hidden-xxxs"><span class="medium light">ITEMS ON HOLD</span></span>',topRightLabel:'<span class="spark-label hidden-spark"><span class="medium light">75.0M</span></span>',bottomRightLabel:'<span class="spark-label hidden-xxs"><span class="medium light">TOTAL</span></span>'}]}return t}();o=s([n.Component({selector:"uxd-charts-spark-chart-ng1",template:e(2158),changeDetection:n.ChangeDetectionStrategy.OnPush}),r.DocumentationSectionComponent("ChartsSparkChartNg1Component"),l("design:paramtypes",[])],o),a.ChartsSparkChartNg1Component=o},1798:function(t,a,e){"use strict";var s=this&&this.__decorate||function(t,a,e,s){var l,n=arguments.length,r=n<3?a:null===s?s=Object.getOwnPropertyDescriptor(a,e):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,a,e,s);else for(var o=t.length-1;o>=0;o--)(l=t[o])&&(r=(n<3?l(r):n>3?l(a,e,r):l(a,e))||r);return n>3&&r&&Object.defineProperty(a,e,r),r},l=this&&this.__metadata||function(t,a){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,a)};Object.defineProperty(a,"__esModule",{value:!0});var n=e(0),r=e(19),o=e(288),c=e(1797),p=e(150),i=e(286),h=e(289),d=e(287),b=e(1799),u=e(151),m=[c.ChartsSparkChartNg1Component,b.ChartsSparkChartsComponent],g=[{path:"**",component:d.DocumentationCategoryComponent,data:{category:p.ResolverService.resolveCategoryData(p.DocumentationPage.Charts,"Spark Charts")}}],f=function(){function t(t,a){a.registerResolver(t)}return t}();f=s([n.NgModule({imports:[o.TabsModule,h.WrappersModule,u.SparkModule,u.ColorServiceModule,i.DocumentationComponentsModule,r.RouterModule.forChild(g)],exports:m,declarations:m,entryComponents:m}),l("design:paramtypes",[n.ComponentFactoryResolver,p.ResolverService])],f),a.ChartsSparkChartsModule=f},1799:function(t,a,e){"use strict";var s=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,a){t.__proto__=a}||function(t,a){for(var e in a)a.hasOwnProperty(e)&&(t[e]=a[e])};return function(a,e){function s(){this.constructor=a}t(a,e),a.prototype=null===e?Object.create(e):(s.prototype=e.prototype,new s)}}(),l=this&&this.__decorate||function(t,a,e,s){var l,n=arguments.length,r=n<3?a:null===s?s=Object.getOwnPropertyDescriptor(a,e):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,a,e,s);else for(var o=t.length-1;o>=0;o--)(l=t[o])&&(r=(n<3?l(r):n>3?l(a,e,r):l(a,e))||r);return n>3&&r&&Object.defineProperty(a,e,r),r},n=this&&this.__metadata||function(t,a){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,a)};Object.defineProperty(a,"__esModule",{value:!0});var r=e(0),o=e(285),c=e(1517),p=e(151),i=function(t){function a(a){var s=t.call(this,null,null,null,null,e(1670))||this;return s.colorService=a,s.charts=[{value:35,barHeight:10,topLeftLabel:"<span class='spark-label hidden-xxxs'><span class='large'>21.7</span><span class='medium light'>&nbsp;MB&nbsp;&nbsp;Items&nbsp;&nbsp;(35%)</span></span>",tooltip:"Spark Line indicator - 2.17MB of 8.2GB occupied (35%)"},{barColor:s.colorService.getColor("chart3").toHex(),trackColor:s.colorService.getColor("chart3").setAlpha(.2).toRgba(),value:30,barHeight:5,inlineLabel:"30%"},{barColor:s.colorService.getColor("chart2").toHex(),trackColor:s.colorService.getColor("chart2").setAlpha(.2).toRgba(),value:35,barHeight:10,topLeftLabel:"<span class='spark-label hidden-xxxs'><span class='large'>21.7</span><span class='medium light'>&nbsp;MB&nbsp;&nbsp;Items&nbsp;&nbsp;(35%)</span></span>",bottomLeftLabel:'<span class="spark-label hidden-xxxs"><span class="medium light">INDEX COVERAGE</span></span>',tooltip:"Spark Line indicator - 2.17MB of 8.2GB occupied (35%)"},{barColor:s.colorService.getColor("chart3").toHex(),trackColor:s.colorService.getColor("chart3").setAlpha(.2).toRgba(),value:30,barHeight:5,inlineLabel:'<span class="spark-label hidden-spark"><span class="x-large">30%</span></span>',topLeftLabel:'<span class="spark-label hidden-xxs"><span class="small">STORAGE ON HOLD</span></span>'},{barColor:s.colorService.getColor("chart4").toHex(),trackColor:s.colorService.getColor("chart4").setAlpha(.2).toRgba(),value:55,barHeight:10,topLeftLabel:"<span class='spark-label hidden-xxs'><span class='large'>8.6</span><span class='medium light'>&nbsp;GB&nbsp;Disk Space&nbsp;&nbsp;(55%)</span></span>"},{barColor:s.colorService.getColor("chart5").toHex(),trackColor:s.colorService.getColor("chart5").setAlpha(.2).toRgba(),value:30,barHeight:10,topLeftLabel:"30%",topRightLabel:'<span class="spark-label hidden-spark"><span class="medium light">75.0M</span></span>',bottomLeftLabel:'<span class="spark-label hidden-xxxs"><span class="medium light">ITEMS ON HOLD</span></span>',bottomRightLabel:'<span class="spark-label hidden-xxs"><span class="medium light">TOTAL</span></span>'},{barColor:s.colorService.getColor("vibrant1").toHex(),trackColor:s.colorService.getColor("vibrant1").setAlpha(.2).toRgba(),value:55,barHeight:10,topLeftLabel:"<span class='spark-label hidden-xxs'><span class='large'>8.6</span><span class='medium light'>&nbsp;GB&nbsp;Disk Space&nbsp;&nbsp;(55%)</span></span>"},{barColor:s.colorService.getColor("vibrant2").toHex(),trackColor:s.colorService.getColor("vibrant2").setAlpha(.2).toRgba(),value:30,barHeight:10,topLeftLabel:"30%",bottomLeftLabel:'<span class="spark-label hidden-xxxs"><span class="medium light">ITEMS ON HOLD</span></span>',topRightLabel:'<span class="spark-label hidden-spark"><span class="medium light">75.0M</span></span>',bottomRightLabel:'<span class="spark-label hidden-xxs"><span class="medium light">TOTAL</span></span>'}],s.plunk={files:{"app.component.html":s.snippets.compiled.appHtml,"app.component.ts":s.snippets.compiled.appTs},modules:[{imports:["SparkModule","ColorServiceModule"],library:"ux-aspects"}]},s}return s(a,t),a}(c.BaseDocumentationSection);i=l([r.Component({selector:"uxd-charts-spark-charts",template:e(2159)}),o.DocumentationSectionComponent("ChartsSparkChartsComponent"),n("design:paramtypes",[p.ColorService])],i),a.ChartsSparkChartsComponent=i},2158:function(t,a){t.exports='<div class="row">\n\n    <ux-spark-ng1 [type]="charts[0].type" [value]="charts[0].value" [fillheight]="charts[0].fillHeight" [topLeftLabel]="charts[0].topLeftLabel"\n        class="col-md-5 col-sm-5 col-xs-5" sparkTooltip="{{ charts[0].tooltip }}"></ux-spark-ng1>\n\n    <div class="col-md-1 col-sm-1 col-xs-1"></div>\n\n    <ux-spark-ng1 [type]="charts[1].type" [value]="charts[1].value" [fillheight]="charts[1].fillHeight" [inlineLabel]="charts[1].inlineLabel"\n        class="col-md-5 col-sm-5 col-xs-5"></ux-spark-ng1>\n</div>\n\n<hr>\n\n<div class="row">\n\n    <ux-spark-ng1 [type]="charts[2].type" [value]="charts[2].value" [fillheight]="charts[2].fillHeight" [topLeftLabel]="charts[2].topLeftLabel"\n        [bottomLeftLabel]="charts[2].bottomLeftLabel" class="col-md-5 col-sm-5 col-xs-5" sparkTooltip="{{ charts[2].tooltip }}"></ux-spark-ng1>\n\n    <div class="col-md-1 col-sm-1 col-xs-1"></div>\n\n    <ux-spark-ng1 [type]="charts[3].type" [value]="charts[3].value" [fillheight]="charts[3].fillHeight" [inlineLabel]="charts[3].inlineLabel"\n        class="col-md-5 col-sm-5 col-xs-5" [topLeftLabel]="charts[3].topLeftLabel"></ux-spark-ng1>\n</div>\n\n<hr>\n\n<div class="row">\n    <ux-spark-ng1 [type]="charts[4].type" [value]="charts[4].value" [fillheight]="charts[4].fillHeight" [topLeftLabel]="charts[4].topLeftLabel"\n        class="col-md-5 col-sm-5 col-xs-5"></ux-spark-ng1>\n\n    <div class="col-md-1 col-sm-1 col-xs-1"></div>\n\n    <ux-spark-ng1 [type]="charts[5].type" [value]="charts[5].value" [fillheight]="charts[5].fillHeight" [topLeftLabel]="charts[5].topLeftLabel"\n        [bottomLeftLabel]="charts[5].bottomLeftLabel" [topRightLabel]="charts[5].topRightLabel" [bottomRightLabel]="charts[5].bottomRightLabel"\n        class="col-md-5 col-sm-5 col-xs-5"></ux-spark-ng1>\n</div>\n\n<hr>\n\n<div class="row">\n\n    <ux-spark-ng1 [type]="charts[6].type" [value]="charts[6].value" [fillheight]="charts[6].fillHeight" [topLeftLabel]="charts[6].topLeftLabel"\n        class="col-md-5 col-sm-5 col-xs-5"></ux-spark-ng1>\n\n    <div class="col-md-1 col-sm-1 col-xs-1"></div>\n\n    <ux-spark-ng1 [type]="charts[7].type" [value]="charts[7].value" [fillheight]="charts[7].fillHeight" [topLeftLabel]="charts[7].topLeftLabel"\n        [bottomLeftLabel]="charts[7].bottomLeftLabel" [topRightLabel]="charts[7].topRightLabel" [bottomRightLabel]="charts[7].bottomRightLabel"\n        class="col-md-5 col-sm-5 col-xs-5"></ux-spark-ng1>\n</div>\n\n<hr>\n\n<p>Spark Line indicator can be created using the <code>spark</code> directive. The attributes of the spark line are explained\n    below:\n</p>\n\n<div class="demo-attributes table-responsive">\n    <table class="table">\n        <tbody>\n            <tr>\n                <th>Property</th>\n                <th>Type</th>\n                <th>Description</th>\n                <th>Optional</th>\n            </tr>\n            <tr>\n                <td class="attribute">type</td>\n                <td>string</td>\n                <td>Defines the class name that is used to specify the spark line color.</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">value</td>\n                <td>number</td>\n                <td>Indicates the current value of the spark line (progress).</td>\n                <td>false</td>\n            </tr>\n            <tr>\n                <td class="attribute">fillheight</td>\n                <td>number</td>\n                <td>Indicates the current value of the spark fill (height).</td>\n                <td>false</td>\n            </tr>\n            <tr>\n                <td class="attribute">inlineLabel</td>\n                <td>HTML</td>\n                <td>Defines the spark line label and works if inline.</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">top</td>\n                <td>number</td>\n                <td>Indicates the top margin alignment of the spark line.</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">topLeftLabel</td>\n                <td>string</td>\n                <td>Defines the top left label value.</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">topRightLabel</td>\n                <td>string</td>\n                <td>Defines the top right label value.</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">bottomLeftLabel</td>\n                <td>string</td>\n                <td>Defines the bottom left label value.</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">bottomRightLabel</td>\n                <td>string</td>\n                <td>Defines the bottom right label value.</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">spark-tooltip</td>\n                <td>string</td>\n                <td>Defines the value of the tooltip on the spark chart.</td>\n                <td>true</td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n\n<p>You can also create your own class to use for the spark colors. Name your class and specify a <code>background-color</code>.\n    Within this class you must specify a <code>fill</code> class which also has a <code>background-color</code> set as the\n    fill for the spark chart. See an example below:</p>\n\n<tabset>\n    <tab heading="HTML">\n        <uxd-snippet language="html" [code]="htmlCode"></uxd-snippet>\n    </tab>\n\n    <tab heading="Javascript">\n        <uxd-snippet language="javascript" [code]="jsCode"></uxd-snippet>\n    </tab>\n\n    <tab heading="CSS">\n        <uxd-snippet language="css" [code]="cssCode"></uxd-snippet>\n    </tab>\n</tabset>\n\nMultiline tooltips can be added to the Spark Line indicator using the `spark-tooltip` attribute to the spark directive.\n\n<uxd-snippet language="html" [code]="tooltipsHtml"></uxd-snippet>\n\n<p>Colors are defined from the set of chart colors and the pre-defined class choices are as follows:</p>\n\n<div class="demo-attributes table-responsive">\n    <table class="table">\n        <tbody>\n            <tr>\n                <th>Property</th>\n                <th>Type</th>\n                <th>Description</th>\n                <th>Optional</th>\n            </tr>\n            <tr>\n                <td class="attribute">spark-chart1</td>\n                <td>color</td>\n                <td>@chart1 fill, 0.1 background opacity.</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">spark-chart2</td>\n                <td>color</td>\n                <td>@chart2 fill, 0.2 background opacity.</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">spark-chart3</td>\n                <td>color</td>\n                <td>@chart3 fill, 0.2 background opacity.</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">spark-chart4</td>\n                <td>color</td>\n                <td>@chart4 fill, 0.2 background opacity.</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">spark-chart5</td>\n                <td>color</td>\n                <td>@chart5 fill, 0.2 background opacity.</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">spark-chart6</td>\n                <td>color</td>\n                <td>@chart6 fill, 0.2 background opacity.</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">spark-ok</td>\n                <td>color</td>\n                <td>@ok fill, 0.25 background opacity.</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">spark-warning</td>\n                <td>color</td>\n                <td>@warning fill, 0.25 background opacity.</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">spark-critical</td>\n                <td>color</td>\n                <td>@critical fill, 0.25 background opacity.</td>\n                <td>true</td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n\n<blockquote>\n    <p><strong>Note</strong>: To upgrade this component to use in an Angular 4 application use: <code>upgradeAdapter.upgradeNg1Component(\'uxSparkNg1\')</code></p>\n</blockquote>'},2159:function(t,a){t.exports='<div class="row">\n\n    <ux-spark [value]="charts[0].value" [barHeight]="charts[0].barHeight" [topLeftLabel]="charts[0].topLeftLabel"\n        class="col-md-5 col-sm-5 col-xs-5" [tooltip]="charts[0].tooltip"></ux-spark>\n\n    <div class="col-md-1 col-sm-1 col-xs-1"></div>\n\n    <ux-spark [barColor]="charts[1].barColor" [trackColor]="charts[1].trackColor" [value]="charts[1].value" [barHeight]="charts[1].barHeight" [inlineLabel]="charts[1].inlineLabel"\n        class="col-md-5 col-sm-5 col-xs-5"></ux-spark>\n</div>\n\n<hr>\n\n<div class="row">\n\n    <ux-spark [barColor]="charts[2].barColor" [trackColor]="charts[2].trackColor" [value]="charts[2].value" [barHeight]="charts[2].barHeight" [topLeftLabel]="charts[2].topLeftLabel"\n        [bottomLeftLabel]="charts[2].bottomLeftLabel" class="col-md-5 col-sm-5 col-xs-5" [tooltip]="charts[2].tooltip"></ux-spark>\n\n    <div class="col-md-1 col-sm-1 col-xs-1"></div>\n\n    <ux-spark [barColor]="charts[3].barColor" [trackColor]="charts[3].trackColor" [value]="charts[3].value" [barHeight]="charts[3].barHeight" [inlineLabel]="charts[3].inlineLabel"\n        class="col-md-5 col-sm-5 col-xs-5" [topLeftLabel]="charts[3].topLeftLabel"></ux-spark>\n</div>\n\n<hr>\n\n<div class="row">\n    <ux-spark [barColor]="charts[4].barColor" [trackColor]="charts[4].trackColor" [value]="charts[4].value" [barHeight]="charts[4].barHeight" [topLeftLabel]="charts[4].topLeftLabel"\n        class="col-md-5 col-sm-5 col-xs-5"></ux-spark>\n\n    <div class="col-md-1 col-sm-1 col-xs-1"></div>\n\n    <ux-spark [barColor]="charts[5].barColor" [trackColor]="charts[5].trackColor" [value]="charts[5].value" [barHeight]="charts[5].barHeight" [topLeftLabel]="charts[5].topLeftLabel"\n        [bottomLeftLabel]="charts[5].bottomLeftLabel" [topRightLabel]="charts[5].topRightLabel" [bottomRightLabel]="charts[5].bottomRightLabel"\n        class="col-md-5 col-sm-5 col-xs-5"></ux-spark>\n</div>\n\n<hr>\n\n<div class="row">\n\n    <ux-spark [barColor]="charts[6].barColor" [trackColor]="charts[6].trackColor" [value]="charts[6].value" [barHeight]="charts[6].barHeight" [topLeftLabel]="charts[6].topLeftLabel"\n        class="col-md-5 col-sm-5 col-xs-5"></ux-spark>\n\n    <div class="col-md-1 col-sm-1 col-xs-1"></div>\n\n    <ux-spark [barColor]="charts[7].barColor" [trackColor]="charts[7].trackColor" [value]="charts[7].value" [barHeight]="charts[7].barHeight" [topLeftLabel]="charts[7].topLeftLabel"\n        [bottomLeftLabel]="charts[7].bottomLeftLabel" [topRightLabel]="charts[7].topRightLabel" [bottomRightLabel]="charts[7].bottomRightLabel"\n        class="col-md-5 col-sm-5 col-xs-5"></ux-spark>\n</div>\n\n<hr>\n\n<p>A spark chart can be created by using the <code>ux-spark</code> directive. The spark chart appearance and behavior can be customized by using the following attributes:</p>\n\n<div class="demo-attributes table-responsive">\n    <table class="table">\n        <tbody>\n            <tr>\n                <th>Property</th>\n                <th>Type</th>\n                <th>Description</th>\n            </tr>\n            <tr>\n                <td class="attribute">barColor</td>\n                <td>string</td>\n                <td>Defines the color of the bar. Defaults to the <code>chart1</code> color in the color palette.</td>\n            </tr>\n            <tr>\n                <td class="attribute">trackColor</td>\n                <td>string</td>\n                <td>Defines the color of the track. Defaults to the <code>chart1</code> color in the color palette with an opacity of 0.2.</td>\n            </tr>\n            <tr>\n                <td class="attribute">value</td>\n                <td>number</td>\n                <td>Indicates the current value of the spark chart. This should be a value between 0-100. Default value is 0.</td>\n            </tr>\n            <tr>\n                <td class="attribute">barHeight</td>\n                <td>number</td>\n                <td>Indicates the height of the bar in pixels. Default value is 10.</td>\n            </tr>\n            <tr>\n                <td class="attribute">inlineLabel</td>\n                <td>string</td>\n                <td>Defines the text to be displayed inline with the bar.</td>\n            </tr>\n            <tr>\n                <td class="attribute">topLeftLabel</td>\n                <td>string</td>\n                <td>Defines the text to be displayed in the top left region of the chart.</td>\n            </tr>\n            <tr>\n                <td class="attribute">topRightLabel</td>\n                <td>string</td>\n                <td>Defines the text to be displayed in the top right region of the chart.</td>\n            </tr>\n            <tr>\n                <td class="attribute">bottomLeftLabel</td>\n                <td>string</td>\n                <td>Defines the text to be displayed in the bottom left region of the chart.</td>\n            </tr>\n            <tr>\n                <td class="attribute">bottomRightLabel</td>\n                <td>string</td>\n                <td>Defines the text to be displayed in the bottom right region of the chart.</td>\n            </tr>\n            <tr>\n                <td class="attribute">tooltip</td>\n                <td>string</td>\n                <td>If defined, this text will be displayed in a tooltip when the mouse is over the bar.</td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n\n<p>The code below can be used to create the example shown above:</p>\n\n<tabset>\n    <tab heading="HTML">\n        <uxd-snippet language="html" [code]="snippets.compiled.appHtml"></uxd-snippet>\n    </tab>\n    <tab heading="TypeScript">\n        <uxd-snippet language="javascript" [code]="snippets.compiled.appTs"></uxd-snippet>\n    </tab>\n</tabset>'},2502:function(t,a){t.exports=".my-class {\n    background-color: rgba(255,255,255. 0.25);\n}\n\n.my-class .fill {\n    background-color: rgb(255, 255, 255);\n}"},2503:function(t,a){t.exports='<div class="row">\n    <spark type="vm.charts[0].type" value="vm.charts[0].value" fillheight="vm.charts[0].fillHeight"\n        top-left-label="vm.charts[0].topLeftLabel" class="col-md-5 col-sm-5 col-xs-5"\n        spark-tooltip="{{vm.charts[0].tooltip}}"></spark>\n    <div class="col-md-1 col-sm-1 col-xs-1"></div>\n    <spark type="vm.charts[1].type" value="vm.charts[1].value" fillheight="vm.charts[1].fillHeight"\n        inline-label="vm.charts[1].inlineLabel" class="col-md-5 col-sm-5 col-xs-5 spark-chart1-demo"></spark>\n</div>\n\n<hr>\n\n<div class="row">\n    <spark type="vm.charts[2].type" value="vm.charts[2].value" fillheight="vm.charts[2].fillHeight"\n        top-left-label="vm.charts[2].topLeftLabel" bottom-left-label="vm.charts[2].bottomLeftLabel"\n        class="col-md-5 col-sm-5 col-xs-5" spark-tooltip="{{vm.charts[2].tooltip}}"></spark>\n    <div class="col-md-1 col-sm-1 col-xs-1"></div>\n    <spark type="vm.charts[3].type" value="vm.charts[3].value" fillheight="vm.charts[3].fillHeight"\n        inline-label="vm.charts[3].inlineLabel" class="col-md-5 col-sm-5 col-xs-5 spark-chart2-demo"\n        top-left-label="vm.charts[3].topLeftLabel"></spark>\n</div>\n\n<hr>\n\n<div class="row">\n    <spark type="vm.charts[4].type" value="vm.charts[4].value" fillheight="vm.charts[4].fillHeight"\n        top-left-label="vm.charts[4].topLeftLabel" class="col-md-5 col-sm-5 col-xs-5 s" ></spark>\n    <div class="col-md-1 col-sm-1 col-xs-1"></div>\n    <spark type="vm.charts[5].type" value="vm.charts[5].value" fillheight="vm.charts[5].fillHeight"\n        top-left-label="vm.charts[5].topLeftLabel" bottom-left-label="vm.charts[5].bottomLeftLabel"\n        top-right-label="vm.charts[5].topRightLabel" bottom-right-label="vm.charts[5].bottomRightLabel"\n        class="col-md-5 col-sm-5 col-xs-5"></spark>\n</div>\n\n<hr>\n\n<div class="row">\n    <spark type="vm.charts[6].type" value="vm.charts[6].value" fillheight="vm.charts[6].fillHeight"\n        top-left-label="vm.charts[6].topLeftLabel" class="col-md-5 col-sm-5 col-xs-5 s"></spark>\n    <div class="col-md-1 col-sm-1 col-xs-1"></div>\n    <spark type="vm.charts[7].type" value="vm.charts[7].value" fillheight="vm.charts[7].fillHeight"\n        top-left-label="vm.charts[7].topLeftLabel" bottom-left-label="vm.charts[7].bottomLeftLabel"\n        top-right-label="vm.charts[7].topRightLabel" bottom-right-label="vm.charts[7].bottomRightLabel"\n        class="col-md-5 col-sm-5 col-xs-5"></spark>\n</div>'},2504:function(t,a){t.exports="angular.module(\"app\").controller(\"SparkChartCtrl\", SparkChartCtrl);\n\nfunction SparkChartCtrl() {\n    var vm = this;\n\n    vm.charts = [\n        {\n            type: 'spark-chart1',\n            value: 35,\n            fillHeight: 10,\n            topLeftLabel: \"<span class='spark-label hidden-xxxs'><span class='large'>21.7</span><span class='medium light'>&nbsp;MB&nbsp;&nbsp;Items&nbsp;&nbsp;(35%)</span></span>\",\n            tooltip: 'Spark Line indicator - 2.17MB of 8.2GB occupied (35%)'\n        },\n        {\n            type: 'spark-chart3',\n            value: 30,\n            fillHeight: 5,\n            inlineLabel: '30%'\n        },\n        {\n            type: 'spark-chart2',\n            value: 35,\n            fillHeight: 10,\n            topLeftLabel: \"<span class='spark-label hidden-xxxs'><span class='large'>21.7</span><span class='medium light'>&nbsp;MB&nbsp;&nbsp;Items&nbsp;&nbsp;(35%)</span></span>\",\n            bottomLeftLabel: \"<span class='spark-label hidden-xxxs'><span class='medium light'>INDEX COVERAGE</span></span>\",\n            tooltip: 'Spark Line indicator - 2.17MB of 8.2GB occupied (35%)'\n        },\n        {\n            type: 'spark-chart3',\n            value: 30,\n            fillHeight: 5,\n            inlineLabel: \"<span class='spark-label hidden-spark'><span class='x-large'>30%</span></span>\",\n            topLeftLabel: \"<span class='spark-label hidden-xxs'><span class='small'>STORAGE ON HOLD</span></span>\"\n        },\n        {\n            type: 'spark-chart4',\n            value: 55,\n            fillHeight: 10,\n            topLeftLabel: \"<span class='spark-label hidden-xxs'><span class='large'>8.6</span><span class='medium light'>&nbsp;GB&nbsp;Disk Space&nbsp;&nbsp;(55%)</span></span>\"\n        },\n        {\n            type: 'spark-chart5',\n            value: 30,\n            fillHeight: 10,\n            topLeftLabel: '30%',\n            topRightLabel: \"<span class='spark-label hidden-spark'><span class='medium light'>75.0M</span></span>\",\n            bottomLeftLabel: \"<span class='spark-label hidden-xxxs'><span class='medium light'>ITEMS ON HOLD</span></span>\",\n            bottomRightLabel: \"<span class='spark-label hidden-xxs'><span class='medium light'>TOTAL</span></span>\"\n        },\n        {\n            type: 'spark-vibrant1',\n            value: 55,\n            fillHeight: 10,\n            topLeftLabel: \"<span class='spark-label hidden-xxs'><span class='large'>8.6</span><span class='medium light'>&nbsp;GB&nbsp;Disk Space&nbsp;&nbsp;(55%)</span></span>\"\n        },\n        {\n            type: 'spark-vibrant2',\n            value: 30,\n            fillHeight: 10,\n            topLeftLabel: '30%',\n            bottomLeftLabel: \"<span class='spark-label hidden-xxxs'><span class='medium light'>ITEMS ON HOLD</span></span>\",\n            topRightLabel: \"<span class='spark-label hidden-spark'><span class='medium light'>75.0M</span></span>\",\n            bottomRightLabel: \"<span class='spark-label hidden-xxs'><span class='medium light'>TOTAL</span></span>\"\n        }\n    ];\n}"},2505:function(t,a){t.exports='<spark type="vm.type" value="vm.percentComplete" fillheight="vm.fillheight" label="vm.label" class="col-md-3 col-sm-3 col-xs-6" spark-tooltip="{{vm.tooltip}}"></spark>'},2506:function(t,a){t.exports='<div class="row">\n\n    <ux-spark [value]="charts[0].value" [barHeight]="charts[0].barHeight" [topLeftLabel]="charts[0].topLeftLabel" class="col-md-5 col-sm-5 col-xs-5"\n        [tooltip]="charts[0].tooltip"></ux-spark>\n\n    <div class="col-md-1 col-sm-1 col-xs-1"></div>\n\n    <ux-spark [barColor]="charts[1].barColor" [trackColor]="charts[1].trackColor" [value]="charts[1].value" [barHeight]="charts[1].barHeight"\n        [inlineLabel]="charts[1].inlineLabel" class="col-md-5 col-sm-5 col-xs-5"></ux-spark>\n</div>\n\n<hr>\n\n<div class="row">\n\n    <ux-spark [barColor]="charts[2].barColor" [trackColor]="charts[2].trackColor" [value]="charts[2].value" [barHeight]="charts[2].barHeight"\n        [topLeftLabel]="charts[2].topLeftLabel" [bottomLeftLabel]="charts[2].bottomLeftLabel" class="col-md-5 col-sm-5 col-xs-5"\n        [tooltip]="charts[2].tooltip"></ux-spark>\n\n    <div class="col-md-1 col-sm-1 col-xs-1"></div>\n\n    <ux-spark [barColor]="charts[3].barColor" [trackColor]="charts[3].trackColor" [value]="charts[3].value" [barHeight]="charts[3].barHeight"\n        [inlineLabel]="charts[3].inlineLabel" class="col-md-5 col-sm-5 col-xs-5" [topLeftLabel]="charts[3].topLeftLabel"></ux-spark>\n</div>\n\n<hr>\n\n<div class="row">\n    <ux-spark [barColor]="charts[4].barColor" [trackColor]="charts[4].trackColor" [value]="charts[4].value" [barHeight]="charts[4].barHeight"\n        [topLeftLabel]="charts[4].topLeftLabel" class="col-md-5 col-sm-5 col-xs-5"></ux-spark>\n\n    <div class="col-md-1 col-sm-1 col-xs-1"></div>\n\n    <ux-spark [barColor]="charts[5].barColor" [trackColor]="charts[5].trackColor" [value]="charts[5].value" [barHeight]="charts[5].barHeight"\n        [topLeftLabel]="charts[5].topLeftLabel" [bottomLeftLabel]="charts[5].bottomLeftLabel" [topRightLabel]="charts[5].topRightLabel"\n        [bottomRightLabel]="charts[5].bottomRightLabel" class="col-md-5 col-sm-5 col-xs-5"></ux-spark>\n</div>\n\n<hr>\n\n<div class="row">\n\n    <ux-spark [barColor]="charts[6].barColor" [trackColor]="charts[6].trackColor" [value]="charts[6].value" [barHeight]="charts[6].barHeight"\n        [topLeftLabel]="charts[6].topLeftLabel" class="col-md-5 col-sm-5 col-xs-5"></ux-spark>\n\n    <div class="col-md-1 col-sm-1 col-xs-1"></div>\n\n    <ux-spark [barColor]="charts[7].barColor" [trackColor]="charts[7].trackColor" [value]="charts[7].value" [barHeight]="charts[7].barHeight"\n        [topLeftLabel]="charts[7].topLeftLabel" [bottomLeftLabel]="charts[7].bottomLeftLabel" [topRightLabel]="charts[7].topRightLabel"\n        [bottomRightLabel]="charts[7].bottomRightLabel" class="col-md-5 col-sm-5 col-xs-5"></ux-spark>\n</div>'},2507:function(t,a){t.exports="import { Component } from '@angular/core';\nimport { ColorService } from 'ux-aspects';\n\n@Component({\n    selector: 'app',\n    templateUrl: './src/app.component.html'\n})\nexport class AppComponent {\n\n    charts: SparkChart[] = [\n        {\n            value: 35,\n            barHeight: 10,\n            topLeftLabel: `<span class='spark-label hidden-xxxs'><span class='large'>21.7</span><span class='medium light'>&nbsp;MB&nbsp;&nbsp;Items&nbsp;&nbsp;(35%)</span></span>`,\n            tooltip: 'Spark Line indicator - 2.17MB of 8.2GB occupied (35%)'\n        },\n        {\n            barColor: this.colorService.getColor('chart3').toHex(),\n            trackColor: this.colorService.getColor('chart3').setAlpha(0.2).toRgba(),\n            value: 30,\n            barHeight: 5,\n            inlineLabel: '30%'\n        },\n        {\n            barColor: this.colorService.getColor('chart2').toHex(),\n            trackColor: this.colorService.getColor('chart2').setAlpha(0.2).toRgba(),\n            value: 35,\n            barHeight: 10,\n            topLeftLabel: `<span class='spark-label hidden-xxxs'><span class='large'>21.7</span><span class='medium light'>&nbsp;MB&nbsp;&nbsp;Items&nbsp;&nbsp;(35%)</span></span>`,\n            bottomLeftLabel: '<span class=\"spark-label hidden-xxxs\"><span class=\"medium light\">INDEX COVERAGE</span></span>',\n            tooltip: 'Spark Line indicator - 2.17MB of 8.2GB occupied (35%)'\n        },\n        {\n            barColor: this.colorService.getColor('chart3').toHex(),\n            trackColor: this.colorService.getColor('chart3').setAlpha(0.2).toRgba(),\n            value: 30,\n            barHeight: 5,\n            inlineLabel: '<span class=\"spark-label hidden-spark\"><span class=\"x-large\">30%</span></span>',\n            topLeftLabel: '<span class=\"spark-label hidden-xxs\"><span class=\"small\">STORAGE ON HOLD</span></span>'\n        },\n        {\n            barColor: this.colorService.getColor('chart4').toHex(),\n            trackColor: this.colorService.getColor('chart4').setAlpha(0.2).toRgba(),\n            value: 55,\n            barHeight: 10,\n            topLeftLabel: \"<span class='spark-label hidden-xxs'><span class='large'>8.6</span><span class='medium light'>&nbsp;GB&nbsp;Disk Space&nbsp;&nbsp;(55%)</span></span>\"\n        },\n        {\n            barColor: this.colorService.getColor('chart5').toHex(),\n            trackColor: this.colorService.getColor('chart5').setAlpha(0.2).toRgba(),\n            value: 30,\n            barHeight: 10,\n            topLeftLabel: '30%',\n            topRightLabel: '<span class=\"spark-label hidden-spark\"><span class=\"medium light\">75.0M</span></span>',\n            bottomLeftLabel: '<span class=\"spark-label hidden-xxxs\"><span class=\"medium light\">ITEMS ON HOLD</span></span>',\n            bottomRightLabel: '<span class=\"spark-label hidden-xxs\"><span class=\"medium light\">TOTAL</span></span>'\n        },\n        {\n            barColor: this.colorService.getColor('vibrant1').toHex(),\n            trackColor: this.colorService.getColor('vibrant1').setAlpha(0.2).toRgba(),\n            value: 55,\n            barHeight: 10,\n            topLeftLabel: \"<span class='spark-label hidden-xxs'><span class='large'>8.6</span><span class='medium light'>&nbsp;GB&nbsp;Disk Space&nbsp;&nbsp;(55%)</span></span>\"\n        },\n        {\n            barColor: this.colorService.getColor('vibrant2').toHex(),\n            trackColor: this.colorService.getColor('vibrant2').setAlpha(0.2).toRgba(),\n            value: 30,\n            barHeight: 10,\n            topLeftLabel: '30%',\n            bottomLeftLabel: '<span class=\"spark-label hidden-xxxs\"><span class=\"medium light\">ITEMS ON HOLD</span></span>',\n            topRightLabel: '<span class=\"spark-label hidden-spark\"><span class=\"medium light\">75.0M</span></span>',\n            bottomRightLabel: '<span class=\"spark-label hidden-xxs\"><span class=\"medium light\">TOTAL</span></span>'\n        }\n    ];\n\n    constructor(private colorService: ColorService) { }\n\n}\n\ninterface SparkChart {\n    value: number;\n    barColor?: string;\n    trackColor?: string;\n    barHeight?: number;\n    topLeftLabel?: string;\n    topRightLabel?: string;\n    bottomLeftLabel?: string;\n    bottomRightLabel?: string;\n    inlineLabel?: string;\n    tooltip?: string;\n}"}});