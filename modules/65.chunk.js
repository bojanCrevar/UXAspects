webpackJsonp([65],{2928:function(r,n,o){"use strict";var s=this&&this.__decorate||function(r,n,o,s){var e,a=arguments.length,t=a<3?n:null===s?s=Object.getOwnPropertyDescriptor(n,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)t=Reflect.decorate(r,n,o,s);else for(var c=r.length-1;c>=0;c--)(e=r[c])&&(t=(a<3?e(t):a>3?e(n,o,t):e(n,o))||t);return a>3&&t&&Object.defineProperty(n,o,t),t},e=this&&this.__metadata||function(r,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(r,n)};Object.defineProperty(n,"__esModule",{value:!0});var a=o(0),t=o(23),c=o(320),l=o(171),p=o(321),i=o(2929),g=[i.CssColorPaletteComponent],d=[{path:"**",component:p.DocumentationCategoryComponent,data:{category:l.ResolverService.resolveCategoryData(l.DocumentationPage.Css,"Color Palette")}}],v=function(){function r(r,n){n.registerResolver(r)}return r}();v=s([a.NgModule({imports:[c.DocumentationComponentsModule,t.RouterModule.forChild(d)],exports:g,declarations:g,entryComponents:g}),e("design:paramtypes",[a.ComponentFactoryResolver,l.ResolverService])],v),n.CssColorPaletteModule=v},2929:function(r,n,o){"use strict";var s=this&&this.__decorate||function(r,n,o,s){var e,a=arguments.length,t=a<3?n:null===s?s=Object.getOwnPropertyDescriptor(n,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)t=Reflect.decorate(r,n,o,s);else for(var c=r.length-1;c>=0;c--)(e=r[c])&&(t=(a<3?e(t):a>3?e(n,o,t):e(n,o))||t);return a>3&&t&&Object.defineProperty(n,o,t),t},e=this&&this.__metadata||function(r,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(r,n)};Object.defineProperty(n,"__esModule",{value:!0});var a=o(100),t=o(0),c=o(319),l=function(){function r(r){this._colorService=r,this.colors={primary:this._colorService.getColor("primary"),accent:this._colorService.getColor("accent"),secondary:this._colorService.getColor("secondary"),alternate1:this._colorService.getColor("alternate1"),alternate2:this._colorService.getColor("alternate2"),alternate3:this._colorService.getColor("alternate3"),vibrant1:this._colorService.getColor("vibrant1"),vibrant2:this._colorService.getColor("vibrant2"),grey1:this._colorService.getColor("grey1"),grey2:this._colorService.getColor("grey2"),grey3:this._colorService.getColor("grey3"),grey4:this._colorService.getColor("grey4"),grey5:this._colorService.getColor("grey5"),grey6:this._colorService.getColor("grey6"),grey7:this._colorService.getColor("grey7"),grey8:this._colorService.getColor("grey8"),chart1:this._colorService.getColor("chart1"),chart2:this._colorService.getColor("chart2"),chart3:this._colorService.getColor("chart3"),chart4:this._colorService.getColor("chart4"),chart5:this._colorService.getColor("chart5"),chart6:this._colorService.getColor("chart6"),ok:this._colorService.getColor("ok"),warning:this._colorService.getColor("warning"),critical:this._colorService.getColor("critical")}}return r}();l=s([t.Component({selector:"uxd-css-color-palette",template:o(2930)}),c.DocumentationSectionComponent("CssColorPaletteComponent"),e("design:paramtypes",[a.ColorService])],l),n.CssColorPaletteComponent=l},2930:function(r,n){r.exports='<div class="color-box-container">\r\n    <p class="m-t-sm">Primary</p>\r\n    <div class="color-box primary-color"></div>\r\n    <p class="m-t-sm">HEX <span>{{ colors.primary.toHex() }}</span></p>\r\n    <p>RGB \r\n        <span>{{ colors.primary.getRed() }}</span>, \r\n        <span>{{ colors.primary.getGreen() }}</span>, \r\n        <span>{{ colors.primary.getBlue() }}</span>\r\n    </p>\r\n</div>\r\n<div class="color-box-container">\r\n    <p class="m-t-sm">Accent</p>\r\n    <div class="color-box accent-color"></div>\r\n    <p class="m-t-sm">HEX <span>{{ colors.accent.toHex() }}</span></p>\r\n    <p>RGB \r\n        <span>{{ colors.accent.getRed() }}</span>, \r\n        <span>{{ colors.accent.getGreen() }}</span>, \r\n        <span>{{ colors.accent.getBlue() }}</span>\r\n    </p>\r\n</div>\r\n<div class="color-box-container">\r\n    <p class="m-t-sm">Secondary</p>\r\n    <div class="color-box secondary-color"></div>\r\n    <p class="m-t-sm">HEX <span>{{ colors.secondary.toHex() }}</span></p>\r\n    <p>RGB \r\n        <span>{{ colors.secondary.getRed() }}</span>, \r\n        <span>{{ colors.secondary.getGreen() }}</span>, \r\n        <span>{{ colors.secondary.getBlue() }}</span>\r\n    </p>\r\n</div>\r\n<hr>\r\n<h4>Alternative Colors</h4>\r\n<div class="color-box-container">\r\n    <p class="m-t-sm">Alternate1</p>\r\n    <div class="color-box alternate1-color"></div>\r\n    <p class="m-t-sm">HEX <span>{{ colors.alternate1.toHex() }}</span></p>\r\n    <p>RGB \r\n        <span>{{ colors.alternate1.getRed() }}</span>, \r\n        <span>{{ colors.alternate1.getGreen() }}</span>, \r\n        <span>{{ colors.alternate1.getBlue() }}</span>\r\n    </p>\r\n</div>\r\n<div class="color-box-container">\r\n    <p class="m-t-sm">Alternate2</p>\r\n    <div class="color-box alternate2-color"></div>\r\n    <p class="m-t-sm">HEX <span>{{ colors.alternate2.toHex() }}</span></p>\r\n    <p>RGB \r\n        <span>{{ colors.alternate2.getRed() }}</span>, \r\n        <span>{{ colors.alternate2.getGreen() }}</span>, \r\n        <span>{{ colors.alternate2.getBlue() }}</span>\r\n    </p>\r\n</div>\r\n<div class="color-box-container">\r\n    <p class="m-t-sm">Alternate3</p>\r\n    <div class="color-box alternate3-color"></div>\r\n    <p class="m-t-sm">HEX <span>{{ colors.alternate3.toHex() }}</span></p>\r\n    <p>RGB \r\n        <span>{{ colors.alternate3.getRed() }}</span>, \r\n        <span>{{ colors.alternate3.getGreen() }}</span>, \r\n        <span>{{ colors.alternate3.getBlue() }}</span>\r\n    </p>\r\n</div>\r\n<hr>\r\n<h4>Vibrant Colors</h4>\r\n<div class="color-box-container">\r\n    <p class="m-t-sm">Vibrant1</p>\r\n    <div class="color-box vibrant1-color"></div>\r\n    <p class="m-t-sm">HEX <span>{{ colors.vibrant1.toHex() }}</span></p>\r\n    <p>RGB \r\n        <span>{{ colors.vibrant1.getRed() }}</span>, \r\n        <span>{{ colors.vibrant1.getGreen() }}</span>, \r\n        <span>{{ colors.vibrant1.getBlue() }}</span>\r\n    </p>\r\n</div>\r\n<div class="color-box-container">\r\n    <p class="m-t-sm">Vibrant2</p>\r\n    <div class="color-box vibrant2-color"></div>\r\n    <p class="m-t-sm">HEX <span>{{ colors.vibrant2.toHex() }}</span></p>\r\n    <p>RGB \r\n        <span>{{ colors.vibrant2.getRed() }}</span>,\r\n        <span>{{ colors.vibrant2.getGreen() }}</span>, \r\n        <span>{{ colors.vibrant2.getBlue() }}</span>\r\n    </p>\r\n</div>\r\n<hr>\r\n<h4>Grey Colors</h4>\r\n<div class="color-box-container">\r\n    <p class="m-t-sm">Grey1</p>\r\n    <div class="color-box grey1-color"></div>\r\n    <p class="m-t-sm">HEX <span>{{ colors.grey1.toHex() }}</span></p>\r\n    <p>RGB \r\n        <span>{{ colors.grey1.getRed() }}</span>,\r\n        <span>{{ colors.grey1.getGreen() }}</span>,\r\n        <span>{{ colors.grey1.getBlue() }}</span>\r\n    </p>\r\n</div>\r\n<div class="color-box-container">\r\n    <p class="m-t-sm">Grey2</p>\r\n    <div class="color-box grey2-color"></div>\r\n    <p class="m-t-sm">HEX <span>{{ colors.grey2.toHex() }}</span></p>\r\n    <p>RGB \r\n        <span>{{ colors.grey2.getRed() }}</span>,\r\n        <span>{{ colors.grey2.getGreen() }}</span>,\r\n        <span>{{ colors.grey2.getBlue() }}</span>\r\n    </p>\r\n</div>\r\n<div class="color-box-container">\r\n    <p class="m-t-sm">Grey3</p>\r\n    <div class="color-box grey3-color"></div>\r\n    <p class="m-t-sm">HEX <span>{{ colors.grey3.toHex() }}</span></p>\r\n    <p>RGB \r\n        <span>{{ colors.grey3.getRed() }}</span>,\r\n        <span>{{ colors.grey3.getGreen() }}</span>,\r\n        <span>{{ colors.grey3.getBlue() }}</span>\r\n    </p>\r\n</div>\r\n<div class="color-box-container">\r\n    <p class="m-t-sm">Grey4</p>\r\n    <div class="color-box grey4-color"></div>\r\n    <p class="m-t-sm">HEX <span>{{ colors.grey4.toHex() }}</span></p>\r\n    <p>RGB \r\n        <span>{{ colors.grey4.getRed() }}</span>,\r\n        <span>{{ colors.grey4.getGreen() }}</span>,\r\n        <span>{{ colors.grey4.getBlue() }}</span>\r\n    </p>\r\n</div>\r\n<div class="color-box-container">\r\n    <p class="m-t-sm">Grey5</p>\r\n    <div class="color-box grey5-color"></div>\r\n    <p class="m-t-sm">HEX <span>{{ colors.grey5.toHex() }}</span></p>\r\n    <p>RGB \r\n        <span>{{ colors.grey5.getRed() }}</span>,\r\n        <span>{{ colors.grey5.getGreen() }}</span>,\r\n        <span>{{ colors.grey5.getBlue() }}</span>\r\n    </p>\r\n</div>\r\n<div class="color-box-container">\r\n    <p class="m-t-sm">Grey6</p>\r\n    <div class="color-box grey6-color"></div>\r\n    <p class="m-t-sm">HEX <span>{{ colors.grey6.toHex() }}</span></p>\r\n    <p>RGB \r\n        <span>{{ colors.grey6.getRed() }}</span>,\r\n        <span>{{ colors.grey6.getGreen() }}</span>,\r\n        <span>{{ colors.grey6.getBlue() }}</span>\r\n    </p>\r\n</div>\r\n<div class="color-box-container">\r\n    <p class="m-t-sm">Grey7</p>\r\n    <div class="color-box grey7-color"></div>\r\n    <p class="m-t-sm">HEX <span>{{ colors.grey7.toHex() }}</span></p>\r\n    <p>RGB \r\n        <span>{{ colors.grey7.getRed() }}</span>,\r\n        <span>{{ colors.grey7.getGreen() }}</span>,\r\n        <span>{{ colors.grey7.getBlue() }}</span>\r\n    </p>\r\n</div>\r\n<div class="color-box-container">\r\n    <p class="m-t-sm">Grey8</p>\r\n    <div class="color-box grey8-color"></div>\r\n    <p class="m-t-sm">HEX <span>{{ colors.grey8.toHex() }}</span></p>\r\n    <p>RGB \r\n        <span>{{ colors.grey8.getRed() }}</span>,\r\n        <span>{{ colors.grey8.getGreen() }}</span>,\r\n        <span>{{ colors.grey8.getBlue() }}</span>\r\n    </p>\r\n</div>\r\n<hr>\r\n<h4>Chart Colors</h4>\r\n<div class="color-box-container">\r\n    <p class="m-t-sm">Chart1</p>\r\n    <div class="color-box chart1-color"></div>\r\n    <p class="m-t-sm">HEX <span>{{ colors.chart1.toHex() }}</span></p>\r\n    <p>RGB \r\n        <span>{{ colors.chart1.getRed() }}</span>,\r\n        <span>{{ colors.chart1.getGreen() }}</span>,\r\n        <span>{{ colors.chart1.getBlue() }}</span>\r\n    </p>\r\n</div>\r\n<div class="color-box-container">\r\n    <p class="m-t-sm">Chart2</p>\r\n    <div class="color-box chart2-color"></div>\r\n    <p class="m-t-sm">HEX <span>{{ colors.chart2.toHex() }}</span></p>\r\n    <p>RGB \r\n        <span>{{ colors.chart2.getRed() }}</span>,\r\n        <span>{{ colors.chart2.getGreen() }}</span>,\r\n        <span>{{ colors.chart2.getBlue() }}</span>\r\n    </p>\r\n</div>\r\n<div class="color-box-container">\r\n    <p class="m-t-sm">Chart3</p>\r\n    <div class="color-box chart3-color"></div>\r\n    <p class="m-t-sm">HEX <span>{{ colors.chart3.toHex() }}</span></p>\r\n    <p>RGB \r\n        <span>{{ colors.chart3.getRed() }}</span>,\r\n        <span>{{ colors.chart3.getGreen() }}</span>,\r\n        <span>{{ colors.chart3.getBlue() }}</span>\r\n    </p>\r\n</div>\r\n<div class="color-box-container">\r\n    <p class="m-t-sm">Chart4</p>\r\n    <div class="color-box chart4-color"></div>\r\n    <p class="m-t-sm">HEX <span>{{ colors.chart4.toHex() }}</span></p>\r\n    <p>RGB \r\n        <span>{{ colors.chart4.getRed() }}</span>,\r\n        <span>{{ colors.chart4.getGreen() }}</span>,\r\n        <span>{{ colors.chart4.getBlue() }}</span>\r\n    </p>\r\n</div>\r\n<div class="color-box-container">\r\n    <p class="m-t-sm">Chart5</p>\r\n    <div class="color-box chart5-color"></div>\r\n    <p class="m-t-sm">HEX <span>{{ colors.chart5.toHex() }}</span></p>\r\n    <p>RGB \r\n        <span>{{ colors.chart5.getRed() }}</span>,\r\n        <span>{{ colors.chart5.getGreen() }}</span>,\r\n        <span>{{ colors.chart5.getBlue() }}</span>\r\n    </p>\r\n</div>\r\n<div class="color-box-container">\r\n    <p class="m-t-sm">Chart6</p>\r\n    <div class="color-box chart6-color"></div>\r\n    <p class="m-t-sm">HEX <span>{{ colors.chart6.toHex() }}</span></p>\r\n    <p>RGB \r\n        <span>{{ colors.chart6.getRed() }}</span>,\r\n        <span>{{ colors.chart6.getGreen() }}</span>,\r\n        <span>{{ colors.chart6.getBlue() }}</span>\r\n    </p>\r\n</div>\r\n<hr>\r\n<h4>Status Colors</h4>\r\n<div class="color-box-container">\r\n    <p class="m-t-sm">OK</p>\r\n    <div class="color-box ok-color"></div>\r\n    <p class="m-t-sm">HEX <span>{{ colors.primary.toHex() }}</span></p>\r\n    <p>RGB \r\n        <span>{{ colors.primary.getRed() }}</span>,\r\n        <span>{{ colors.primary.getGreen() }}</span>,\r\n        <span>{{ colors.primary.getBlue() }}</span>\r\n    </p>\r\n</div>\r\n<div class="color-box-container">\r\n    <p class="m-t-sm">Warning</p>\r\n    <div class="color-box warning-color"></div>\r\n    <p class="m-t-sm">HEX <span>{{ colors.warning.toHex() }}</span></p>\r\n    <p>RGB \r\n        <span>{{ colors.warning.getRed() }}</span>,\r\n        <span>{{ colors.warning.getGreen() }}</span>,\r\n        <span>{{ colors.warning.getBlue() }}</span>\r\n    </p>\r\n</div>\r\n<div class="color-box-container">\r\n    <p class="m-t-sm">Critical</p>\r\n    <div class="color-box critical-color"></div>\r\n    <p class="m-t-sm">HEX <span>{{ colors.critical.toHex() }}</span></p>\r\n    <p>RGB \r\n        <span>{{ colors.critical.getRed() }}</span>,\r\n        <span>{{ colors.critical.getGreen() }}</span>,\r\n        <span>{{ colors.critical.getBlue() }}</span>\r\n    </p>\r\n</div>'}});