// ==UserScript==
// @name           绿豆瓣·豆瓣电影资源搜索
// @description    老司机专用，一键BT搜索（BTDig、Torrentz2，需要扶墙），一键字幕直达（字幕库、SubHD、伪射手）
// @author         94Léon
// @grant          GM_xmlhttpRequest
// @grant          GM_setClipboard
// @grant          GM_addStyle
// @grant          GM_setValue
// @grant          GM_getValue
// @require        https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js
// @require        https://cdn.bootcss.com/jqueryui/1.12.1/jquery-ui.min.js
// @match          https://movie.douban.com/subject/*
// @version        200418
// ==/UserScript==

const myScriptStyle = document.createElement("style");
myScriptStyle.innerHTML = "@charset utf-8;#dale_movie_subject_top_right,#dale_movie_subject_top_right,#dale_movie_subject_top_midle,#dale_movie_subject_middle_right,#dale_movie_subject_bottom_super_banner,#footer,#dale_movie_subject_download_middle,#dale_movie_subject_inner_middle,#movie_home_left_bottom,#dale_movie_home_top_right,#dale_movie_home_side_top,#dale_movie_home_bottom_right,#dale_movie_home_inner_bottom,#dale_movie_home_download_bottom,#dale_movie_home_bottom_right_down,#dale_movie_towhome_explore_right,#dale_movie_chart_top_right,#dale_movie_tags_top_right,#dale_review_best_top_right,.mobile-app-entrance.block5.app-movie,.qrcode-app,.top-nav-doubanapp,.extra,p.pl,div.ticket{display:none}.c-aside{margin-bottom:30px}.c-aside-body{*letter-spacing:normal}.c-aside-body a{border-radius:6px;color:#37A;display:inline-block;letter-spacing:normal;margin:0 8px 8px 0;padding:0 8px;text-align:center;width:65px}.c-aside-body a:link,.c-aside-body a:visited{background-color:#f5f5f5;color:#37A}.c-aside-body a:hover,.c-aside-body a:active{background-color:#e8e8e8;color:#37A}.c-aside-body a.disabled{text-decoration:line-through}.c-aside-body a.available{background-color:#5ccccc;color:#006363}.c-aside-body a.available:hover,.c-aside-body a.available:active{background-color:#3cc}.c-aside-body a.honse{background-color:#fff0f5;color:#006363}.c-aside-body a.honse:hover,.c-aside-body a.honse:active{background-color:#3cc}.c-aside-body a.sites_r0{text-decoration:line-through}#c_dialog li{margin:10px}#c_dialog{text-align:center}#interest_sectl .rating_imdb{border-bottom:1px solid #eaeaea;padding-bottom:0}#interest_sectl .rating_wrap{padding-top:15px}#interest_sectl .rating_more{border-bottom:1px solid #eaeaea;color:#9b9b9b;margin:0;padding:15px 0;position:relative}#interest_sectl .rating_more a{left:80px;position:absolute}#interest_sectl .rating_more .titleOverviewSprite{background:url(https://coding.net/u/Changhw/p/MyDoubanMovieHelper/git/raw/master/title_overview_sprite.png) no-repeat;display:inline-block;vertical-align:middle}#interest_sectl .rating_more .popularityImageUp{background-position:-14px -478px;height:8px;width:8px}#interest_sectl .rating_more .popularityImageDown{background-position:-34px -478px;height:8px;width:8px}#interest_sectl .rating_more .popularityUpOrFlat{color:#83C40B}#interest_sectl .rating_more .popularityDown{color:#930E02}/*!jQuery UI - v1.12.1 - 2016-09-14 * https://jqueryui.com * Includes:core.css,accordion.css,autocomplete.css,menu.css,button.css,controlgroup.css,checkboxradio.css,datepicker.css,dialog.css,draggable.css,resizable.css,progressbar.css,selectable.css,selectmenu.css,slider.css,sortable.css,spinner.css,tabs.css,tooltip.css,theme.css * To view and modify this theme,visit http://jqueryui.com/themeroller/?bgShadowXPos=&bgOverlayXPos=&bgErrorXPos=&bgHighlightXPos=&bgContentXPos=&bgHeaderXPos=&bgActiveXPos=&bgHoverXPos=&bgDefaultXPos=&bgShadowYPos=&bgOverlayYPos=&bgErrorYPos=&bgHighlightYPos=&bgContentYPos=&bgHeaderYPos=&bgActiveYPos=&bgHoverYPos=&bgDefaultYPos=&bgShadowRepeat=&bgOverlayRepeat=&bgErrorRepeat=&bgHighlightRepeat=&bgContentRepeat=&bgHeaderRepeat=&bgActiveRepeat=&bgHoverRepeat=&bgDefaultRepeat=&iconsHover=url(%22images%2Fui-icons_555555_256x240.png%22)&iconsHighlight=url(%22images%2Fui-icons_777620_256x240.png%22)&iconsHeader=url(%22images%2Fui-icons_444444_256x240.png%22)&iconsError=url(%22images%2Fui-icons_cc0000_256x240.png%22)&iconsDefault=url(%22images%2Fui-icons_777777_256x240.png%22)&iconsContent=url(%22images%2Fui-icons_444444_256x240.png%22)&iconsActive=url(%22images%2Fui-icons_ffffff_256x240.png%22)&bgImgUrlShadow=&bgImgUrlOverlay=&bgImgUrlHover=&bgImgUrlHighlight=&bgImgUrlHeader=&bgImgUrlError=&bgImgUrlDefault=&bgImgUrlContent=&bgImgUrlActive=&opacityFilterShadow=Alpha(Opacity%3D30)&opacityFilterOverlay=Alpha(Opacity%3D30)&opacityShadowPerc=30&opacityOverlayPerc=30&iconColorHover=%23555555&iconColorHighlight=%23777620&iconColorHeader=%23444444&iconColorError=%23cc0000&iconColorDefault=%23777777&iconColorContent=%23444444&iconColorActive=%23ffffff&bgImgOpacityShadow=0&bgImgOpacityOverlay=0&bgImgOpacityError=95&bgImgOpacityHighlight=55&bgImgOpacityContent=75&bgImgOpacityHeader=75&bgImgOpacityActive=65&bgImgOpacityHover=75&bgImgOpacityDefault=75&bgTextureShadow=flat&bgTextureOverlay=flat&bgTextureError=flat&bgTextureHighlight=flat&bgTextureContent=flat&bgTextureHeader=flat&bgTextureActive=flat&bgTextureHover=flat&bgTextureDefault=flat&cornerRadius=3px&fwDefault=normal&ffDefault=Arial%2CHelvetica%2Csans-serif&fsDefault=1em&cornerRadiusShadow=8px&thicknessShadow=5px&offsetLeftShadow=0px&offsetTopShadow=0px&opacityShadow=.3&bgColorShadow=%23666666&opacityOverlay=.3&bgColorOverlay=%23aaaaaa&fcError=%235f3f3f&borderColorError=%23f1a899&bgColorError=%23fddfdf&fcHighlight=%23777620&borderColorHighlight=%23dad55e&bgColorHighlight=%23fffa90&fcContent=%23333333&borderColorContent=%23dddddd&bgColorContent=%23ffffff&fcHeader=%23333333&borderColorHeader=%23dddddd&bgColorHeader=%23e9e9e9&fcActive=%23ffffff&borderColorActive=%23003eff&bgColorActive=%23007fff&fcHover=%232b2b2b&borderColorHover=%23cccccc&bgColorHover=%23ededed&fcDefault=%23454545&borderColorDefault=%23c5c5c5&bgColorDefault=%23f6f6f6 * Copyright jQuery Foundation and other contributors;Licensed MIT */ .ui-helper-hidden{display:none}.ui-helper-hidden-accessible{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.ui-helper-reset{border:0;font-size:100%;line-height:1.3;list-style:none;margin:0;outline:0;padding:0;text-decoration:none}.ui-helper-clearfix:before,.ui-helper-clearfix:after{border-collapse:collapse;content:'';display:table}.ui-helper-clearfix:after{clear:both}.ui-helper-zfix{height:100%;left:0;opacity:0;position:absolute;top:0;width:100%;filter:Alpha(Opacity=0)}.ui-front{z-index:100}.ui-state-disabled{cursor:default !important;pointer-events:none}.ui-icon{background-repeat:no-repeat;display:inline-block;margin-top:-.25em;overflow:hidden;position:relative;text-indent:-99999px;vertical-align:middle}.ui-widget-icon-block{display:block;left:50%;margin-left:-8px}.ui-widget-overlay{height:100%;left:0;position:fixed;top:0;width:100%}.ui-accordion .ui-accordion-header{cursor:pointer;display:block;font-size:100%;margin:2px 0 0 0;padding:.5em .5em .5em .7em;position:relative}.ui-accordion .ui-accordion-content{border-top:0;overflow:auto;padding:1em 2.2em}.ui-autocomplete{cursor:default;left:0;position:absolute;top:0}.ui-menu{display:block;list-style:none;margin:0;outline:0;padding:0}.ui-menu .ui-menu{position:absolute}.ui-menu .ui-menu-item{cursor:pointer;list-style-image:url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7);margin:0}.ui-menu .ui-menu-item-wrapper{padding:3px 1em 3px .4em;position:relative}.ui-menu .ui-menu-divider{border-width:1px 0 0 0;font-size:0;height:0;line-height:0;margin:5px 0}.ui-menu .ui-state-focus,.ui-menu .ui-state-active{margin:-1px}.ui-menu-icons{position:relative}.ui-menu-icons .ui-menu-item-wrapper{padding-left:2em}.ui-menu .ui-icon{bottom:0;left:.2em;margin:auto 0;position:absolute;top:0}.ui-menu .ui-menu-icon{left:auto;right:0}.ui-button{cursor:pointer;display:inline-block;line-height:normal;margin-right:.1em;overflow:visible;padding:.4em 1em;position:relative;text-align:center;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ui-button,.ui-button:link,.ui-button:visited,.ui-button:hover,.ui-button:active{text-decoration:none}.ui-button-icon-only{box-sizing:border-box;text-indent:-9999px;white-space:nowrap;width:2em}input.ui-button.ui-button-icon-only{text-indent:0}.ui-button-icon-only .ui-icon{left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%}.ui-button.ui-icon-notext .ui-icon{height:2.1em;padding:0;text-indent:-9999px;white-space:nowrap;width:2.1em}input.ui-button.ui-icon-notext .ui-icon{height:auto;padding:.4em 1em;text-indent:0;white-space:normal;width:auto}input.ui-button::-moz-focus-inner,button.ui-button::-moz-focus-inner{border:0;padding:0}.ui-controlgroup{display:inline-block;vertical-align:middle}.ui-controlgroup>.ui-controlgroup-item{float:left;margin-left:0;margin-right:0}.ui-controlgroup>.ui-controlgroup-item:focus,.ui-controlgroup>.ui-controlgroup-item.ui-visual-focus{z-index:9999}.ui-controlgroup-vertical>.ui-controlgroup-item{display:block;float:none;margin-bottom:0;margin-top:0;text-align:left;width:100%}.ui-controlgroup-vertical .ui-controlgroup-item{box-sizing:border-box}.ui-controlgroup .ui-controlgroup-label{padding:.4em 1em}.ui-controlgroup .ui-controlgroup-label span{font-size:80%}.ui-controlgroup-horizontal .ui-controlgroup-label + .ui-controlgroup-item{border-left:none}.ui-controlgroup-vertical .ui-controlgroup-label + .ui-controlgroup-item{border-top:none}.ui-controlgroup-horizontal .ui-controlgroup-label.ui-widget-content{border-right:none}.ui-controlgroup-vertical .ui-controlgroup-label.ui-widget-content{border-bottom:none}.ui-controlgroup-vertical .ui-spinner-input{width:75%;width:calc(100% - 2.4em)}.ui-controlgroup-vertical .ui-spinner .ui-spinner-up{border-top-style:solid}.ui-checkboxradio-label .ui-icon-background{border:0;border-radius:.12em;box-shadow:inset 1px 1px 1px #ccc}.ui-checkboxradio-radio-label .ui-icon-background{border:0;border-radius:1em;height:16px;overflow:visible;width:16px}.ui-checkboxradio-radio-label.ui-checkboxradio-checked .ui-icon,.ui-checkboxradio-radio-label.ui-checkboxradio-checked:hover .ui-icon{background-image:none;border-style:solid;border-width:4px;height:8px;width:8px}.ui-checkboxradio-disabled{pointer-events:none}.ui-datepicker{display:none;padding:.2em .2em 0;width:17em}.ui-datepicker .ui-datepicker-header{padding:.2em 0;position:relative}.ui-datepicker .ui-datepicker-prev,.ui-datepicker .ui-datepicker-next{height:1.8em;position:absolute;top:2px;width:1.8em}.ui-datepicker .ui-datepicker-prev-hover,.ui-datepicker .ui-datepicker-next-hover{top:1px}.ui-datepicker .ui-datepicker-prev{left:2px}.ui-datepicker .ui-datepicker-next{right:2px}.ui-datepicker .ui-datepicker-prev-hover{left:1px}.ui-datepicker .ui-datepicker-next-hover{right:1px}.ui-datepicker .ui-datepicker-prev span,.ui-datepicker .ui-datepicker-next span{display:block;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%}.ui-datepicker .ui-datepicker-title{line-height:1.8em;margin:0 2.3em;text-align:center}.ui-datepicker .ui-datepicker-title select{font-size:1em;margin:1px 0}.ui-datepicker select.ui-datepicker-month,.ui-datepicker select.ui-datepicker-year{width:45%}.ui-datepicker table{border-collapse:collapse;font-size:.9em;margin:0 0 .4em;width:100%}.ui-datepicker th{border:0;font-weight:bold;padding:.7em .3em;text-align:center}.ui-datepicker td{border:0;padding:1px}.ui-datepicker td span,.ui-datepicker td a{display:block;padding:.2em;text-align:right;text-decoration:none}.ui-datepicker .ui-datepicker-buttonpane{background-image:none;border-bottom:0;border-left:0;border-right:0;margin:.7em 0 0 0;padding:0 .2em}.ui-datepicker .ui-datepicker-buttonpane button{cursor:pointer;float:right;margin:.5em .2em .4em;overflow:visible;padding:.2em .6em .3em .6em;width:auto}.ui-datepicker .ui-datepicker-buttonpane button.ui-datepicker-current{float:left}.ui-datepicker.ui-datepicker-multi{width:auto}.ui-datepicker-multi .ui-datepicker-group{float:left}.ui-datepicker-multi .ui-datepicker-group table{margin:0 auto .4em;width:95%}.ui-datepicker-multi-2 .ui-datepicker-group{width:50%}.ui-datepicker-multi-3 .ui-datepicker-group{width:33.3%}.ui-datepicker-multi-4 .ui-datepicker-group{width:25%}.ui-datepicker-multi .ui-datepicker-group-last .ui-datepicker-header,.ui-datepicker-multi .ui-datepicker-group-middle .ui-datepicker-header{border-left-width:0}.ui-datepicker-multi .ui-datepicker-buttonpane{clear:left}.ui-datepicker-row-break{clear:both;font-size:0;width:100%}.ui-datepicker-rtl{direction:rtl}.ui-datepicker-rtl .ui-datepicker-prev{left:auto;right:2px}.ui-datepicker-rtl .ui-datepicker-next{left:2px;right:auto}.ui-datepicker-rtl .ui-datepicker-prev:hover{left:auto;right:1px}.ui-datepicker-rtl .ui-datepicker-next:hover{left:1px;right:auto}.ui-datepicker-rtl .ui-datepicker-buttonpane{clear:right}.ui-datepicker-rtl .ui-datepicker-buttonpane button{float:left}.ui-datepicker-rtl .ui-datepicker-buttonpane button.ui-datepicker-current,.ui-datepicker-rtl .ui-datepicker-group{float:right}.ui-datepicker-rtl .ui-datepicker-group-last .ui-datepicker-header,.ui-datepicker-rtl .ui-datepicker-group-middle .ui-datepicker-header{border-left-width:1px;border-right-width:0}.ui-datepicker .ui-icon{background-repeat:no-repeat;display:block;left:.5em;overflow:hidden;text-indent:-99999px;top:.3em}.ui-dialog{left:0;outline:0;padding:.2em;position:absolute;top:0}.ui-dialog .ui-dialog-titlebar{padding:.4em 1em;position:relative}.ui-dialog .ui-dialog-title{float:left;margin:.1em 0;overflow:hidden;white-space:nowrap;width:90%;text-overflow:ellipsis}.ui-dialog .ui-dialog-titlebar-close{height:20px;margin:-10px 0 0 0;padding:1px;position:absolute;right:.3em;top:50%;width:20px}.ui-dialog .ui-dialog-content{background:none;border:0;overflow:auto;padding:.5em 1em;position:relative}.ui-dialog .ui-dialog-buttonpane{background-image:none;border-width:1px 0 0 0;margin-top:.5em;padding:.3em 1em .5em .4em;text-align:left}.ui-dialog .ui-dialog-buttonpane .ui-dialog-buttonset{float:right}.ui-dialog .ui-dialog-buttonpane button{cursor:pointer;margin:.5em .4em .5em 0}.ui-dialog .ui-resizable-n{height:2px;top:0}.ui-dialog .ui-resizable-e{right:0;width:2px}.ui-dialog .ui-resizable-s{bottom:0;height:2px}.ui-dialog .ui-resizable-w{left:0;width:2px}.ui-dialog .ui-resizable-se,.ui-dialog .ui-resizable-sw,.ui-dialog .ui-resizable-ne,.ui-dialog .ui-resizable-nw{height:7px;width:7px}.ui-dialog .ui-resizable-se{bottom:0;right:0}.ui-dialog .ui-resizable-sw{bottom:0;left:0}.ui-dialog .ui-resizable-ne{right:0;top:0}.ui-dialog .ui-resizable-nw{left:0;top:0}.ui-draggable .ui-dialog-titlebar{cursor:move}.ui-draggable-handle{-ms-touch-action:none;touch-action:none}.ui-resizable{position:relative}.ui-resizable-handle{display:block;font-size:.1px;position:absolute;-ms-touch-action:none;touch-action:none}.ui-resizable-disabled .ui-resizable-handle,.ui-resizable-autohide .ui-resizable-handle{display:none}.ui-resizable-n{cursor:n-resize;height:7px;left:0;top:-5px;width:100%}.ui-resizable-s{bottom:-5px;cursor:s-resize;height:7px;left:0;width:100%}.ui-resizable-e{cursor:e-resize;height:100%;right:-5px;top:0;width:7px}.ui-resizable-w{cursor:w-resize;height:100%;left:-5px;top:0;width:7px}.ui-resizable-se{bottom:1px;cursor:se-resize;height:12px;right:1px;width:12px}.ui-resizable-sw{bottom:-5px;cursor:sw-resize;height:9px;left:-5px;width:9px}.ui-resizable-nw{cursor:nw-resize;height:9px;left:-5px;top:-5px;width:9px}.ui-resizable-ne{cursor:ne-resize;height:9px;right:-5px;top:-5px;width:9px}.ui-progressbar{height:2em;overflow:hidden;text-align:left}.ui-progressbar .ui-progressbar-value{height:100%;margin:-1px}.ui-progressbar .ui-progressbar-overlay{background:url(data:image/gif;base64,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);height:100%;opacity:.25;filter:alpha(opacity=25)}.ui-progressbar-indeterminate .ui-progressbar-value{background-image:none}.ui-selectable{-ms-touch-action:none;touch-action:none}.ui-selectable-helper{border:1px dotted black;position:absolute;z-index:100}.ui-selectmenu-menu{display:none;left:0;margin:0;padding:0;position:absolute;top:0}.ui-selectmenu-menu .ui-menu{overflow:auto;overflow-x:hidden;padding-bottom:1px}.ui-selectmenu-menu .ui-menu .ui-selectmenu-optgroup{border:0;font-size:1em;font-weight:bold;height:auto;line-height:1.5;margin:.5em 0 0 0;padding:2px .4em}.ui-selectmenu-open{display:block}.ui-selectmenu-text{display:block;margin-right:20px;overflow:hidden;text-overflow:ellipsis}.ui-selectmenu-button.ui-button{text-align:left;white-space:nowrap;width:14em}.ui-selectmenu-icon.ui-icon{float:right;margin-top:0}.ui-slider{position:relative;text-align:left}.ui-slider .ui-slider-handle{cursor:default;height:1.2em;position:absolute;width:1.2em;z-index:2;-ms-touch-action:none;touch-action:none}.ui-slider .ui-slider-range{background-position:0 0;border:0;display:block;font-size:.7em;position:absolute;z-index:1}.ui-slider.ui-state-disabled .ui-slider-handle,.ui-slider.ui-state-disabled .ui-slider-range{filter:inherit}.ui-slider-horizontal{height:.8em}.ui-slider-horizontal .ui-slider-handle{margin-left:-.6em;top:-.3em}.ui-slider-horizontal .ui-slider-range{height:100%;top:0}.ui-slider-horizontal .ui-slider-range-min{left:0}.ui-slider-horizontal .ui-slider-range-max{right:0}.ui-slider-vertical{height:100px;width:.8em}.ui-slider-vertical .ui-slider-handle{left:-.3em;margin-bottom:-.6em;margin-left:0}.ui-slider-vertical .ui-slider-range{left:0;width:100%}.ui-slider-vertical .ui-slider-range-min{bottom:0}.ui-slider-vertical .ui-slider-range-max{top:0}.ui-sortable-handle{-ms-touch-action:none;touch-action:none}.ui-spinner{display:inline-block;overflow:hidden;padding:0;position:relative;vertical-align:middle}.ui-spinner-input{background:none;border:0;color:inherit;margin:.2em 0;margin-left:.4em;margin-right:2em;padding:.222em 0;vertical-align:middle}.ui-spinner-button{cursor:default;display:block;font-size:.5em;height:50%;margin:0;overflow:hidden;padding:0;position:absolute;right:0;text-align:center;width:1.6em}.ui-spinner a.ui-spinner-button{border-bottom-style:none;border-right-style:none;border-top-style:none}.ui-spinner-up{top:0}.ui-spinner-down{bottom:0}.ui-tabs{padding:.2em;position:relative}.ui-tabs .ui-tabs-nav{margin:0;padding:.2em .2em 0}.ui-tabs .ui-tabs-nav li{border-bottom-width:0;float:left;list-style:none;margin:1px .2em 0 0;padding:0;position:relative;top:0;white-space:nowrap}.ui-tabs .ui-tabs-nav .ui-tabs-anchor{float:left;padding:.5em 1em;text-decoration:none}.ui-tabs .ui-tabs-nav li.ui-tabs-active{margin-bottom:-1px;padding-bottom:1px}.ui-tabs .ui-tabs-nav li.ui-tabs-active .ui-tabs-anchor,.ui-tabs .ui-tabs-nav li.ui-state-disabled .ui-tabs-anchor,.ui-tabs .ui-tabs-nav li.ui-tabs-loading .ui-tabs-anchor{cursor:text}.ui-tabs-collapsible .ui-tabs-nav li.ui-tabs-active .ui-tabs-anchor{cursor:pointer}.ui-tabs .ui-tabs-panel{background:none;border-width:0;display:block;padding:1em 1.4em}.ui-tooltip{max-width:300px;padding:8px;position:absolute;z-index:9999}body .ui-tooltip{border-width:2px}.ui-widget{font-family:Arial,Helvetica,sans-serif;font-size:1em}.ui-widget .ui-widget{font-size:1em}.ui-widget input,.ui-widget select,.ui-widget textarea,.ui-widget button{font-family:Arial,Helvetica,sans-serif;font-size:1em}.ui-widget.ui-widget-content{border:1px solid #c5c5c5}.ui-widget-content{background:#fff;border:1px solid #ddd;color:#333}.ui-widget-content a{color:#333}.ui-widget-header{background:#e9e9e9;border:1px solid #ddd;color:#333;font-weight:bold}.ui-widget-header a{color:#333}.ui-state-default,.ui-widget-content .ui-state-default,.ui-widget-header .ui-state-default,.ui-button,html .ui-button.ui-state-disabled:hover,html .ui-button.ui-state-disabled:active{background:#f6f6f6;border:1px solid #c5c5c5;color:#454545;font-weight:normal}.ui-state-default a,.ui-state-default a:link,.ui-state-default a:visited,a.ui-button,a:link.ui-button,a:visited.ui-button,.ui-button{color:#454545;text-decoration:none}.ui-state-hover,.ui-widget-content .ui-state-hover,.ui-widget-header .ui-state-hover,.ui-state-focus,.ui-widget-content .ui-state-focus,.ui-widget-header .ui-state-focus,.ui-button:hover,.ui-button:focus{background:#ededed;border:1px solid #ccc;color:#2b2b2b;font-weight:normal}.ui-state-hover a,.ui-state-hover a:hover,.ui-state-hover a:link,.ui-state-hover a:visited,.ui-state-focus a,.ui-state-focus a:hover,.ui-state-focus a:link,.ui-state-focus a:visited,a.ui-button:hover,a.ui-button:focus{color:#2b2b2b;text-decoration:none}.ui-visual-focus{box-shadow:0 0 3px 1px #5e9ed6}.ui-state-active,.ui-widget-content .ui-state-active,.ui-widget-header .ui-state-active,a.ui-button:active,.ui-button:active,.ui-button.ui-state-active:hover{background:#007fff;border:1px solid #003eff;color:#fff;font-weight:normal}.ui-icon-background,.ui-state-active .ui-icon-background{background-color:#fff;border:#003eff}.ui-state-active a,.ui-state-active a:link,.ui-state-active a:visited{color:#fff;text-decoration:none}.ui-state-highlight,.ui-widget-content .ui-state-highlight,.ui-widget-header .ui-state-highlight{background:#fffa90;border:1px solid #dad55e;color:#777620}.ui-state-checked{background:#fffa90;border:1px solid #dad55e}.ui-state-highlight a,.ui-widget-content .ui-state-highlight a,.ui-widget-header .ui-state-highlight a{color:#777620}.ui-state-error,.ui-widget-content .ui-state-error,.ui-widget-header .ui-state-error{background:#fddfdf;border:1px solid #f1a899;color:#5f3f3f}.ui-state-error a,.ui-widget-content .ui-state-error a,.ui-widget-header .ui-state-error a{color:#5f3f3f}.ui-state-error-text,.ui-widget-content .ui-state-error-text,.ui-widget-header .ui-state-error-text{color:#5f3f3f}.ui-priority-primary,.ui-widget-content .ui-priority-primary,.ui-widget-header .ui-priority-primary{font-weight:bold}.ui-priority-secondary,.ui-widget-content .ui-priority-secondary,.ui-widget-header .ui-priority-secondary{font-weight:normal;opacity:.7;filter:Alpha(Opacity=70)}.ui-state-disabled,.ui-widget-content .ui-state-disabled,.ui-widget-header .ui-state-disabled{background-image:none;opacity:.35;filter:Alpha(Opacity=35)}.ui-state-disabled .ui-icon{filter:Alpha(Opacity=35)}.ui-icon{height:16px;width:16px}.ui-icon,.ui-widget-content .ui-icon{background-image:url(https://cdn.bootcss.com/jqueryui/1.12.1/images/ui-icons_444444_256x240.png)}.ui-widget-header .ui-icon{background-image:url(https://cdn.bootcss.com/jqueryui/1.12.1/images/ui-icons_444444_256x240.png)}.ui-state-hover .ui-icon,.ui-state-focus .ui-icon,.ui-button:hover .ui-icon,.ui-button:focus .ui-icon{background-image:url(https://cdn.bootcss.com/jqueryui/1.12.1/images/ui-icons_555555_256x240.png)}.ui-state-active .ui-icon,.ui-button:active .ui-icon{background-image:url(https://cdn.bootcss.com/jqueryui/1.12.1/images/ui-icons_ffffff_256x240.png)}.ui-state-highlight .ui-icon,.ui-button .ui-state-highlight.ui-icon{background-image:url(https://cdn.bootcss.com/jqueryui/1.12.1/images/ui-icons_777620_256x240.png)}.ui-state-error .ui-icon,.ui-state-error-text .ui-icon{background-image:url(https://cdn.bootcss.com/jqueryui/1.12.1/images/ui-icons_cc0000_256x240.png)}.ui-button .ui-icon{background-image:url(https://cdn.bootcss.com/jqueryui/1.12.1/images/ui-icons_777777_256x240.png)}.ui-icon-blank{background-position:16px 16px}.ui-icon-caret-1-n{background-position:0 0}.ui-icon-caret-1-ne{background-position:-16px 0}.ui-icon-caret-1-e{background-position:-32px 0}.ui-icon-caret-1-se{background-position:-48px 0}.ui-icon-caret-1-s{background-position:-65px 0}.ui-icon-caret-1-sw{background-position:-80px 0}.ui-icon-caret-1-w{background-position:-96px 0}.ui-icon-caret-1-nw{background-position:-112px 0}.ui-icon-caret-2-n-s{background-position:-128px 0}.ui-icon-caret-2-e-w{background-position:-144px 0}.ui-icon-triangle-1-n{background-position:0 -16px}.ui-icon-triangle-1-ne{background-position:-16px -16px}.ui-icon-triangle-1-e{background-position:-32px -16px}.ui-icon-triangle-1-se{background-position:-48px -16px}.ui-icon-triangle-1-s{background-position:-65px -16px}.ui-icon-triangle-1-sw{background-position:-80px -16px}.ui-icon-triangle-1-w{background-position:-96px -16px}.ui-icon-triangle-1-nw{background-position:-112px -16px}.ui-icon-triangle-2-n-s{background-position:-128px -16px}.ui-icon-triangle-2-e-w{background-position:-144px -16px}.ui-icon-arrow-1-n{background-position:0 -32px}.ui-icon-arrow-1-ne{background-position:-16px -32px}.ui-icon-arrow-1-e{background-position:-32px -32px}.ui-icon-arrow-1-se{background-position:-48px -32px}.ui-icon-arrow-1-s{background-position:-65px -32px}.ui-icon-arrow-1-sw{background-position:-80px -32px}.ui-icon-arrow-1-w{background-position:-96px -32px}.ui-icon-arrow-1-nw{background-position:-112px -32px}.ui-icon-arrow-2-n-s{background-position:-128px -32px}.ui-icon-arrow-2-ne-sw{background-position:-144px -32px}.ui-icon-arrow-2-e-w{background-position:-160px -32px}.ui-icon-arrow-2-se-nw{background-position:-176px -32px}.ui-icon-arrowstop-1-n{background-position:-192px -32px}.ui-icon-arrowstop-1-e{background-position:-208px -32px}.ui-icon-arrowstop-1-s{background-position:-224px -32px}.ui-icon-arrowstop-1-w{background-position:-240px -32px}.ui-icon-arrowthick-1-n{background-position:1px -48px}.ui-icon-arrowthick-1-ne{background-position:-16px -48px}.ui-icon-arrowthick-1-e{background-position:-32px -48px}.ui-icon-arrowthick-1-se{background-position:-48px -48px}.ui-icon-arrowthick-1-s{background-position:-64px -48px}.ui-icon-arrowthick-1-sw{background-position:-80px -48px}.ui-icon-arrowthick-1-w{background-position:-96px -48px}.ui-icon-arrowthick-1-nw{background-position:-112px -48px}.ui-icon-arrowthick-2-n-s{background-position:-128px -48px}.ui-icon-arrowthick-2-ne-sw{background-position:-144px -48px}.ui-icon-arrowthick-2-e-w{background-position:-160px -48px}.ui-icon-arrowthick-2-se-nw{background-position:-176px -48px}.ui-icon-arrowthickstop-1-n{background-position:-192px -48px}.ui-icon-arrowthickstop-1-e{background-position:-208px -48px}.ui-icon-arrowthickstop-1-s{background-position:-224px -48px}.ui-icon-arrowthickstop-1-w{background-position:-240px -48px}.ui-icon-arrowreturnthick-1-w{background-position:0 -64px}.ui-icon-arrowreturnthick-1-n{background-position:-16px -64px}.ui-icon-arrowreturnthick-1-e{background-position:-32px -64px}.ui-icon-arrowreturnthick-1-s{background-position:-48px -64px}.ui-icon-arrowreturn-1-w{background-position:-64px -64px}.ui-icon-arrowreturn-1-n{background-position:-80px -64px}.ui-icon-arrowreturn-1-e{background-position:-96px -64px}.ui-icon-arrowreturn-1-s{background-position:-112px -64px}.ui-icon-arrowrefresh-1-w{background-position:-128px -64px}.ui-icon-arrowrefresh-1-n{background-position:-144px -64px}.ui-icon-arrowrefresh-1-e{background-position:-160px -64px}.ui-icon-arrowrefresh-1-s{background-position:-176px -64px}.ui-icon-arrow-4{background-position:0 -80px}.ui-icon-arrow-4-diag{background-position:-16px -80px}.ui-icon-extlink{background-position:-32px -80px}.ui-icon-newwin{background-position:-48px -80px}.ui-icon-refresh{background-position:-64px -80px}.ui-icon-shuffle{background-position:-80px -80px}.ui-icon-transfer-e-w{background-position:-96px -80px}.ui-icon-transferthick-e-w{background-position:-112px -80px}.ui-icon-folder-collapsed{background-position:0 -96px}.ui-icon-folder-open{background-position:-16px -96px}.ui-icon-document{background-position:-32px -96px}.ui-icon-document-b{background-position:-48px -96px}.ui-icon-note{background-position:-64px -96px}.ui-icon-mail-closed{background-position:-80px -96px}.ui-icon-mail-open{background-position:-96px -96px}.ui-icon-suitcase{background-position:-112px -96px}.ui-icon-comment{background-position:-128px -96px}.ui-icon-person{background-position:-144px -96px}.ui-icon-print{background-position:-160px -96px}.ui-icon-trash{background-position:-176px -96px}.ui-icon-locked{background-position:-192px -96px}.ui-icon-unlocked{background-position:-208px -96px}.ui-icon-bookmark{background-position:-224px -96px}.ui-icon-tag{background-position:-240px -96px}.ui-icon-home{background-position:0 -112px}.ui-icon-flag{background-position:-16px -112px}.ui-icon-calendar{background-position:-32px -112px}.ui-icon-cart{background-position:-48px -112px}.ui-icon-pencil{background-position:-64px -112px}.ui-icon-clock{background-position:-80px -112px}.ui-icon-disk{background-position:-96px -112px}.ui-icon-calculator{background-position:-112px -112px}.ui-icon-zoomin{background-position:-128px -112px}.ui-icon-zoomout{background-position:-144px -112px}.ui-icon-search{background-position:-160px -112px}.ui-icon-wrench{background-position:-176px -112px}.ui-icon-gear{background-position:-192px -112px}.ui-icon-heart{background-position:-208px -112px}.ui-icon-star{background-position:-224px -112px}.ui-icon-link{background-position:-240px -112px}.ui-icon-cancel{background-position:0 -128px}.ui-icon-plus{background-position:-16px -128px}.ui-icon-plusthick{background-position:-32px -128px}.ui-icon-minus{background-position:-48px -128px}.ui-icon-minusthick{background-position:-64px -128px}.ui-icon-close{background-position:-80px -128px}.ui-icon-closethick{background-position:-96px -128px}.ui-icon-key{background-position:-112px -128px}.ui-icon-lightbulb{background-position:-128px -128px}.ui-icon-scissors{background-position:-144px -128px}.ui-icon-clipboard{background-position:-160px -128px}.ui-icon-copy{background-position:-176px -128px}.ui-icon-contact{background-position:-192px -128px}.ui-icon-image{background-position:-208px -128px}.ui-icon-video{background-position:-224px -128px}.ui-icon-script{background-position:-240px -128px}.ui-icon-alert{background-position:0 -144px}.ui-icon-info{background-position:-16px -144px}.ui-icon-notice{background-position:-32px -144px}.ui-icon-help{background-position:-48px -144px}.ui-icon-check{background-position:-64px -144px}.ui-icon-bullet{background-position:-80px -144px}.ui-icon-radio-on{background-position:-96px -144px}.ui-icon-radio-off{background-position:-112px -144px}.ui-icon-pin-w{background-position:-128px -144px}.ui-icon-pin-s{background-position:-144px -144px}.ui-icon-play{background-position:0 -160px}.ui-icon-pause{background-position:-16px -160px}.ui-icon-seek-next{background-position:-32px -160px}.ui-icon-seek-prev{background-position:-48px -160px}.ui-icon-seek-end{background-position:-64px -160px}.ui-icon-seek-start{background-position:-80px -160px}.ui-icon-seek-first{background-position:-80px -160px}.ui-icon-stop{background-position:-96px -160px}.ui-icon-eject{background-position:-112px -160px}.ui-icon-volume-off{background-position:-128px -160px}.ui-icon-volume-on{background-position:-144px -160px}.ui-icon-power{background-position:0 -176px}.ui-icon-signal-diag{background-position:-16px -176px}.ui-icon-signal{background-position:-32px -176px}.ui-icon-battery-0{background-position:-48px -176px}.ui-icon-battery-1{background-position:-64px -176px}.ui-icon-battery-2{background-position:-80px -176px}.ui-icon-battery-3{background-position:-96px -176px}.ui-icon-circle-plus{background-position:0 -192px}.ui-icon-circle-minus{background-position:-16px -192px}.ui-icon-circle-close{background-position:-32px -192px}.ui-icon-circle-triangle-e{background-position:-48px -192px}.ui-icon-circle-triangle-s{background-position:-64px -192px}.ui-icon-circle-triangle-w{background-position:-80px -192px}.ui-icon-circle-triangle-n{background-position:-96px -192px}.ui-icon-circle-arrow-e{background-position:-112px -192px}.ui-icon-circle-arrow-s{background-position:-128px -192px}.ui-icon-circle-arrow-w{background-position:-144px -192px}.ui-icon-circle-arrow-n{background-position:-160px -192px}.ui-icon-circle-zoomin{background-position:-176px -192px}.ui-icon-circle-zoomout{background-position:-192px -192px}.ui-icon-circle-check{background-position:-208px -192px}.ui-icon-circlesmall-plus{background-position:0 -208px}.ui-icon-circlesmall-minus{background-position:-16px -208px}.ui-icon-circlesmall-close{background-position:-32px -208px}.ui-icon-squaresmall-plus{background-position:-48px -208px}.ui-icon-squaresmall-minus{background-position:-64px -208px}.ui-icon-squaresmall-close{background-position:-80px -208px}.ui-icon-grip-dotted-vertical{background-position:0 -224px}.ui-icon-grip-dotted-horizontal{background-position:-16px -224px}.ui-icon-grip-solid-vertical{background-position:-32px -224px}.ui-icon-grip-solid-horizontal{background-position:-48px -224px}.ui-icon-gripsmall-diagonal-se{background-position:-64px -224px}.ui-icon-grip-diagonal-se{background-position:-80px -224px}.ui-corner-all,.ui-corner-top,.ui-corner-left,.ui-corner-tl{border-top-left-radius:3px}.ui-corner-all,.ui-corner-top,.ui-corner-right,.ui-corner-tr{border-top-right-radius:3px}.ui-corner-all,.ui-corner-bottom,.ui-corner-left,.ui-corner-bl{border-bottom-left-radius:3px}.ui-corner-all,.ui-corner-bottom,.ui-corner-right,.ui-corner-br{border-bottom-right-radius:3px}.ui-widget-overlay{background:#aaa;opacity:.003;filter:Alpha(Opacity=.3)}.ui-widget-shadow{-webkit-box-shadow:0 0 5px #666;box-shadow:0 0 5px #666}";
document.getElementsByTagName("head")[0].appendChild(myScriptStyle);
const aside_html = '<div class=c-aside > <h2><i class="">四字标题</i>· · · · · · </h2> <div class=c-aside-body  style="padding: 0 12px;"> <ul class=bs > </ul> </div> </div>';

let getDoc = function (url, meta, callback) {
    GM_xmlhttpRequest({
      method: 'GET',
      url: url,
      headers: {
        'User-agent': window.navigator.userAgent,
        'Content-type': null
      },
      onload: function (responseDetail) {
        let doc;
        doc = '';
        if (responseDetail.status === 200) {
          doc = (new DOMParser).parseFromString(responseDetail.responseText, 'text/html');
          if (doc === undefined) {
            doc = document.implementation.createHTMLDocument('');
            doc.querySelector('html').innerHTML = responseText;
          }
        }
        callback(doc, responseDetail, meta);
      }
    });
  },
  postDoc = function (url, data, meta, callback) {
    GM_xmlhttpRequest({
      anonymous: true,
      method: 'POST',
      url: url,
      headers: {
        'User-agent': window.navigator.userAgent,
        'Content-type': 'application/x-www-form-urlencoded'
      },
      data: data,
      onload: function (responseDetail) {
        callback(responseDetail.responseText, responseDetail, meta);
      }
    });
  },
  getJSON = function (url, callback) {
    GM_xmlhttpRequest({
      method: 'GET',
      url: url,
      headers: {
        'Accept': 'application/json'
      },
      onload: function (response) {
        if (response.status >= 200 && response.status < 400) {
          callback(JSON.parse(response.responseText), url);
        } else {
        }
      }
    });
  };

function parseURL (url) {
  let a;
  a = document.createElement('a');
  a.href = url;
  return {
    source: url,
    protocol: a.protocol.replace(':', ''),
    host: a.hostname,
    port: a.port,
    query: a.search,
    params: (function () {
      let i, len, ret, s, seg;
      ret = {};
      seg = a.search.replace(/^\?/, '').split('&');
      len = seg.length;
      i = 0;
      s = void 0;
      while (i < len) {
        if (!seg[i]) {
          i++;
          continue;
        }
        s = seg[i].split('=');
        ret[s[0]] = s[1];
        i++;
      }
      return ret;
    })(),
    file: (a.pathname.match(/\/([^\/?#]+)$/i) || [, ''])[1],
    hash: a.hash.replace('#', ''),
    path: a.pathname.replace(/^([^\/])/, '/$1'),
    relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ''])[1],
    segments: a.pathname.replace(/^\//, '').split('/')
  };
}

function update_bt_site (title, douban_ID, IMDb_ID) {
  let link, link_parsed, name, sites;
  title = encodeURI(title);

  sites = {
    //bt
    'BTDig': 'http://www.btdig.com/search?q=' + title + '+1080p',
    'Torrentz2': 'https://torrentz2.is/searchS?f=' + title + '+1080p',
  };

  for (name in sites) {
    link = sites[name];
    link_parsed = parseURL(link);
    link = $('<a></a>').attr('href', link);
    link.attr('data-host', link_parsed.host);
    link.attr('target', '_blank').attr('rel', 'nofollow');
    link.html(name);
    $('#content div.site-bt-body ul').append(link);
  }
}


function update_sub_site (title, douban_ID, IMDb_ID) {
  let link, link_parsed, name, sites;
  title = encodeURI(title);

  sites = {
    //sub
    'SubHD': 'https://subhd.la/d/' + douban_ID,
    '字幕库': 'http://www.zimuku.net/search?q=' + IMDb_ID,
    '伪射手': 'http://assrt.net/sub/?searchword=' + title,
  };

  for (name in sites) {
    link = sites[name];
    link_parsed = parseURL(link);
    link = $('<a></a>').attr('href', link);
    link.attr('data-host', link_parsed.host);
    link.attr('target', '_blank').attr('rel', 'nofollow');
    link.html(name);
    $('#content div.site-sub-body ul').append(link);
  }
};

function get_other_title_en (other_title) {
  let other_title_en = '';
  other_title.split("/").some((item) => {
    if (/^[a-zA-Z\d\s：:·]+$/.test(item)) {
      other_title_en = item;
      return true;
    }
  });
  return other_title_en
}

(() => {
  const seBwhA = document.createElement("a");
  seBwhA.id = "seBwhA";
  document.getElementsByTagName("html")[0].appendChild(seBwhA);

  $(document).ready(() => {

    let site_sub = $(aside_html);
    site_sub.addClass('name-offline');
    site_sub.find('div.c-aside-body').addClass('site-sub-body');
    site_sub.find('h2 i').text('字幕直达');
    $('#content div.aside').prepend(site_sub);

    let site_bt = $(aside_html);
    site_bt.addClass('site_bt');
    site_bt.find('div.c-aside-body').addClass('site-bt-body');
    site_bt.find('h2 i').text('BT 搜索');
    $('#content div.aside').prepend(site_bt);


    let h1_span, title, title_sub, other_title, bt_title, year, douban_ID, IMDb_ID;

    h1_span = $('#content > h1 > span');

    title = h1_span[0].textContent.match(/^[\u4e00-\u9fa5\d\s：:·,，]+/);//匹配中文简体
    title = title ? title[0].trim() : '';

    title_sub = h1_span[0].textContent.split(title)[1];
    title_sub = /^[a-zA-Z\d\s:·,]+$/.test(title_sub) ? title_sub : '';//过滤非英语

    other_title = $('#info').html().split("又名:</span>")[1];
    other_title = other_title ? other_title.split("<br>")[0] : '';
    other_title = other_title ? get_other_title_en(other_title) : '';

    console.log('title:' + title, '; title_sub:' + title_sub, '; other_title:' + other_title);
    bt_title = title_sub || other_title || title;

    year = h1_span[1].textContent.substr(1, 4);

    douban_ID = location.href.split('\/')[4] || title;
    IMDb_ID = document.querySelector('#info a[href*="://www.imdb.com/"]');
    IMDb_ID = IMDb_ID ? (IMDb_ID.textContent || title) : title;

    update_bt_site(bt_title + " " + year);
    update_sub_site(title, douban_ID, IMDb_ID);

  });
})();
