!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});

function cor_tema()
{

	return $('meta[name="theme-color"]').attr('content');

}

function customizador_tema()
{

	$('#cabecalho > div.conteiner > div.row-fluid > div.conteudo-topo.span9 > div.inferior.row-fluid > div.hidden-phone.itens-menu > div.carrinho.item-menu > div > div > div > a > i').remove();

	if($(window).width() > 767){

		if($('#cabecalho .conteudo-topo .acoes-conta').length > 0){

			$('#cabecalho .conteudo-topo .acoes-conta li i').each(function(){
	
				$(this).removeClass('fundo-principal');
				$(this).addClass('cor-secundaria');
	
			});
	
		}

		if($('#modalNewsletter .newsletter-assinar').length > 0){
			$('#modalNewsletter .newsletter-assinar').html("Cadastrar Agora!");
		}

		$('#rodape .institucional .lista-redes ul li').removeClass('visible-phone');
		$('i.icon-facebook').removeClass('icon-facebook').addClass('fab fa-facebook-f');

		if($('.pagina-produto').length > 0){

			$(document).on('click', '.atributo-item', function(){
				if($('.qtde-adicionar-carrinho').length == 0){

					$('#corpo > div > div.secao-principal.row-fluid.sem-coluna > div > div:nth-child(1) > div:nth-child(2) > div > div.acoes-produto.hide.disponivel > div.comprar > a').css('width', '100%');
	
				}
			});

			if($('.qtde-adicionar-carrinho').length == 0){

				$('#corpo > div > div.secao-principal.row-fluid.sem-coluna > div > div:nth-child(1) > div:nth-child(2) > div > div.acoes-produto.hide.disponivel > div.comprar > a').css('width', '100%');

			}

		}

		$('#cabecalho > div.conteiner > div.row-fluid > div.conteudo-topo.span9 > div.superior.row-fluid.hidden-phone').html('');

		// Newsletter
		$('#barraNewsletter .interno-conteudo').prepend('<div class="newsletter-corpo"></div>');

		$('#barraNewsletter .interno-conteudo').prepend('<div class="newsletter-conteudo"></div>');
		$('#barraNewsletter .componente .interno-conteudo p').appendTo('.newsletter-conteudo');
		
		$('.newsletter-conteudo').appendTo('.newsletter-corpo');
		$('#barraNewsletter div.newsletter-cadastro').appendTo('.newsletter-corpo');

		if($('.listagem-linha').length > 0){

			setTimeout(function(){

				$('.listagem-linha').each(function(k, linha){

					var altura = 0;

					$($(linha).find('.listagem-item')).each(function(kk, item){

						var altura_div = $(item).height();
		
						if(altura_div > altura){
							altura = altura_div;
						}

					});

					$(linha).find('.listagem-item').height(altura);
		
				});

			}, 1400);

		}

	}else{

		$('#rodape .tel-whatsapp a i').removeClass('fa').addClass('fab');
		$('#rodape .tel-skype a i').removeClass('fa').addClass('fab');

		if($('#modalNewsletter .newsletter .botao').length > 0){
			$('#modalNewsletter .newsletter .botao').text('Cadastrar Agora');
		}

		$(document).on('touchstart', '.listagem-item', function(){ 
		
			var img = $(this).find('.imagem-produto img');
			var img_src = $(img).attr('src');
			var img_2 = $(img).attr('data-imagem-caminho');
			
			$(img).attr('src', img_2);
			$(img).attr('data-imagem-caminho', img_src);
			 
		});
		
		$(document).on('touchend', '.listagem-item', function(){ 
			
			var img = $(this).find('.imagem-produto img');
			var img_src = $(img).attr('src');
			var img_2 = $(img).attr('data-imagem-caminho');
			
			$(img).attr('src', img_2);
			$(img).attr('data-imagem-caminho', img_src);
			 
		});

		if($('#formCalcularFrete').length > 0){
			
			$('#formCalcularFrete').parent().parent().removeClass('hidden-phone');

		}

		$('.finalizar-compra .bg-dark').each(function(k, item){

			if($(item).text().trim() == ''){
				$(item).remove();
			}

		});

	}

	if($('.listagem-item').length > 0){

		// Input quantidade produtos
		$('.listagem-item .acoes-produto > a').each(function(){
			if($(this).attr('href').includes('/adicionar')){
				$(this).parent().prepend('<div class="contador-quantidade"><input type="number" min="1" value="1" class="quantidade-produto" disabled><div class="contador-setas"><i class="fas fa-plus"></i><i class="fas fa-minus"></i></div>');
			}
		});

		/* Setas Produto Item */
		$(document).on('click', '.contador-setas .fas.fa-plus', function(){

			let valor = parseInt($(this).parent().parent().children('input').val());     
			valor += 1;

			let replacer = '/adicionar/'+ valor;
			let url = $(this).parent().parent().parent().children('a').attr('href');
			let indice = url.indexOf('/adicionar');

			url = url.slice(0, indice);        
			url += replacer;

			$(this).parent().parent().children('input').val(valor);
			$(this).parent().parent().parent().children('a').attr('href', url);

		});
	
		$(document).on('click', '.contador-setas .fas.fa-minus', function(){

			let valor = parseInt($(this).parent().parent().children('input').val());

			if(valor <= 1){
				valor = 1;
			}else{
				valor -= 1;
			}
				 
			let replacer = '/adicionar/'+ valor;
			let url = $(this).parent().parent().parent().children('a').attr('href');
			let indice = url.indexOf('/adicionar');

			url = url.slice(0, indice);     
			url += replacer;

			$(this).parent().parent().children('input').val(valor);
			$(this).parent().parent().parent().children('a').attr('href', url);

		});
		/* Fim - Setas Produto Item */

	}

	if($('.pagina-produto').length > 0){

		var marca = $('meta[itemprop="name"]');
		var span = $('span[itemprop="brand"]');

		span.load(window.location.origin + "/ .marcas li a", function () {
			span.find("img").each(function (k, item) {
				if ($(item).attr("alt") !== marca.attr("content")) {
					$(item).parent().remove();
				}
			});
			span.append(marca);
		});

	}

	if(
		$('.pagina-conta').length > 0 
		|| $('.pagina-pedido-listar').length > 0 
		|| $('.pagina-favorito-listar').length > 0
	){

		if($(window).width() < 768){

			if(
				$('#corpo > div > div.secao-principal.row-fluid.sem-coluna > div.conteudo.span9 > div > ul').length > 0 
				&& $('.icon-signout').length > 0
			){

				var div_sair = '<div style="text-align: right;"> <a href="/conta/logout"> &nbsp; SAIR &nbsp; </a> </div>';

				$(div_sair).insertAfter('#corpo > div > div.breadcrumbs.borda-alpha');

			}

		}else{

			if(
				$('#corpo > div > div.secao-principal.row-fluid.sem-coluna > div.coluna.span3 > div').length > 0 
				&& $('.icon-signout').length > 0 
			){
	
				var div_sair = '<li class="divisor borda-alpha"></li> <li> <a href="/conta/logout"> Sair </a> <li>';
				$('#corpo > div > div.secao-principal.row-fluid.sem-coluna > div.coluna.span3 > div > ul').append(div_sair);
	
			}

		}

	}

}

function barra_contato()
{

	if(typeof devrocket_barra_contato !== 'undefined' && devrocket_barra_contato !== null && devrocket_barra_contato === false){
		$('.barra-inicial').hide();
	}
	
	if(typeof devrocket_barra_contato !== 'undefined' && devrocket_barra_contato !== null && devrocket_barra_contato === true){
		$('.barra-inicial').show();
	}

}

function barra_ofertas()
{

	if(typeof devrocket_barra_oferta !== 'undefined' && devrocket_barra_oferta !== null){

		let altura_menu_celular = ($(window).width() < 768) ? ';margin-top: '+$('#cabecalho .menu-mobile-devrocket').height()+'px' : '';
		let barra_oferta_div = '<div class="barra-oferta" style="background: '+devrocket_barra_oferta.cor + altura_menu_celular +';">'+devrocket_barra_oferta.frase+'</div>';

		if($('.barra-inicial').length > 0){
			$(barra_oferta_div).insertBefore('.barra-inicial');
		}else if($('.conteiner-principal').length > 0){
			$(barra_oferta_div).insertBefore('.conteiner-principal');
		}

	}else{

		$('#cabecalho .conteiner').css('margin-top', $('#cabecalho .menu-mobile-devrocket').height()+'px');

	}

}

function menu()
{

	if($(window).width() > 768){ // Computador

		$('#cabecalho > div.conteiner > div.row-fluid > div.conteudo-topo.span9 > div.inferior.row-fluid > div.span8.busca-mobile').removeClass('span8').addClass('span7');

		var icone_duvidas = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-chat-left-text" viewBox="0 0 16 16"><path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/><path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/></svg>';
		var icone_favoritos = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16"><path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/></svg>';
		var icone_pedidos = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-bag-check" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"/><path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/></svg>';
		var icone_conta = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16"><path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/><path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/></svg>';

		var itens_menu = '<div class="item-menu"> <a href="#modalContato" data-toggle="modal" data-target="#modalContato" class="cor-secundaria">'+icone_duvidas+' DÃºvidas?</a> </div>';
		itens_menu += '<div class="item-menu"> <a href="/conta/favorito/listar" class="cor-secundaria">'+icone_favoritos+' Favoritos</a> </div>';
		itens_menu += '<div class="item-menu"> <a href="/conta/pedido/listar"" class="cor-secundaria">'+icone_pedidos+' Pedidos</a> </div>';
		itens_menu += '<div class="item-menu"> <a href="/conta/login" class="cor-secundaria">'+icone_conta+' Minha&nbsp;Conta</a> </div>';

		$('#cabecalho > div.conteiner > div.row-fluid > div.conteudo-topo.span9 > div.inferior.row-fluid > div.span4.hidden-phone').prepend(itens_menu);
		$('#cabecalho > div.conteiner > div.row-fluid > div.conteudo-topo.span9 > div.inferior.row-fluid > div.span4.hidden-phone').removeClass('span4').addClass('itens-menu');
		$('#cabecalho > div.conteiner > div.row-fluid > div.conteudo-topo.span9 > div.inferior.row-fluid > div.hidden-phone.itens-menu > div.carrinho > a > i').removeClass('fundo-principal');

		$('#cabecalho .conteudo-topo .inferior .carrinho > a i').remove();
		
		var icone_carrinho = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16"><path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg> Carrinho';

		$('#cabecalho .conteudo-topo .inferior .carrinho').addClass('item-menu');
		$('#cabecalho .conteudo-topo .inferior .carrinho > a').prepend(icone_carrinho);

		$('#cabecalho > div.conteiner > div.row-fluid > div.conteudo-topo.span9 > div.inferior.row-fluid > div.hidden-phone.itens-menu > div.carrinho.item-menu > div > div > div > a > i').remove();

		$('#cabecalho .menu ul li a i').each(function(){

			if($(this).hasClass('fundo-secundario')){
				$(this).removeClass('fundo-secundario');
			}

		});

		$('#cabecalho .menu').css({'background-color' : cor_tema()});
		$('#cabecalho .menu .nivel-um').addClass('fundo-menu').css({'background-color' : cor_tema()});
		$('.linha-menu').css({'border-color' : cor_tema()});

		$('#cabecalho .menu ul li a strong').removeClass('cor-secundaria');

		let qtde_categorias_menu = 6;

		if(typeof devrocket_itens_menu !== 'undefined' && devrocket_itens_menu !== null && typeof devrocket_itens_menu === 'number'){
			qtde_categorias_menu = devrocket_itens_menu;
		}

		if($('#cabecalho .menu > .nivel-um > .borda-principal > a').length > qtde_categorias_menu){

			menu_cateogorias(qtde_categorias_menu);

		}

		menu_fixo();

	}else{ // Celular

		$('.atalhos-mobile').remove();

		var icone_pagina_inicial = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/><path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/></svg>';
		var icone_duvidas = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-chat-left-text" viewBox="0 0 16 16"><path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/><path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/></svg>';
		var icone_favoritos = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16"><path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/></svg>';
		var icone_pedidos = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-bag-check" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"/><path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/></svg>';
		var icone_conta = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16"><path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/><path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/></svg>';
		var icone_carrinho = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16"><path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg>'; 

		var itens_menu = '<div class="item-menu-mobile item-menu-mobile-inicio"> <a href="/" class="cor-secundaria">'+icone_pagina_inicial+'</a> </div>';
		itens_menu += '<div class="item-menu-mobile item-menu-mobile-contato"> <a href="#modalContato" data-toggle="modal" data-target="#modalContato" class="cor-secundaria">'+icone_duvidas+'</a> </div>';
		itens_menu += '<div class="item-menu-mobile item-menu-mobile-favoritos"> <a href="/conta/favorito/listar" class="cor-secundaria">'+icone_favoritos+'</a> </div>';
		itens_menu += '<div class="item-menu-mobile item-menu-mobile-pedidos"> <a href="/conta/pedido/listar"" class="cor-secundaria">'+icone_pedidos+'</a> </div>';
		itens_menu += '<div class="item-menu-mobile item-menu-mobile-conta"> <a href="/conta/login" class="cor-secundaria">'+icone_conta+'</a> </div>';
		itens_menu += '<div class="item-menu-mobile item-menu-mobile-carrinho"> <a href="/carrinho/index" class="cor-secundaria">'+icone_carrinho+'</a> </div>';
		itens_menu = '<div class="menu-mobile-devrocket">'+itens_menu+'</div>';

		$('#cabecalho').prepend(itens_menu);

		$('.litem-menu-mobile').css({'color' : cor_tema()});

		var icone_menu = '<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/></svg>';
		$('#cabecalho > div.conteiner > div.row-fluid > div.conteudo-topo.span9 > div.inferior.row-fluid > div.span8.busca-mobile > a').html(icone_menu);
		$('.conteudo-topo .busca-mobile .atalho-menu').css({'color' : cor_tema()});
		$('#cabecalho .menu').addClass('menu-slide');
		$('.menu-slide').attr('data-status', 'hide');

		var icone_menu_fechar = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/><path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/></svg>';
		$('.menu-slide .nivel-um').prepend('<div class="menu-slide-fechar"><span class="menu-slide-fechar-icone">'+icone_menu_fechar+'</span></div>');
		$('.menu-slide-fechar').css({'color' : cor_tema()});

		/* Menu Slide */

		$(document).on('click', '.menu-slide-fechar-icone', function(){

			$('#cabecalho .menu-slide').css('left', '-100%');
			$('#cabecalho .menu-slide').attr('data-status', 'hide');

		});

		$(document).on('click', '.conteudo-topo .busca-mobile .atalho-menu', function(){

			if($('#cabecalho .menu-slide').attr('data-status') == 'hide'){
				$('#cabecalho .menu-slide').css('left', '0%');
				$('#cabecalho .menu-slide').attr('data-status', 'show');
			}else{
				$('#cabecalho .menu-slide').css('left', '-100%');
				$('#cabecalho .menu-slide').attr('data-status', 'hide');
			}

		});

		/* Fim - Menu Slide */

		var form_busca = $('#form-buscar').clone();
		$('.menu-slide-fechar').append('<div class="menu-slide-busca busca"> <form id="form-buscar-menu" action="/buscar" method="get"> '+$(form_busca).html()+' </form> </div>');

		$('.menu .nivel-dois a').each(function(){

			if($(this).find('i').length > 0){

				$(this).find('i').remove();
				$(this).append('<i class="fas fa-chevron-down"></i>');      

			}

		});

		$('.menu li.com-filho > a').attr('href', 'javascript: void(0);');

		let categorias_id = [];

		$('.menu li.com-filho a').click(function(){

			let id = $(this).text();

			if($(this).find('.titulo').length > 0){

				if(categorias_id.indexOf(id) !== -1){
					$(this).next('ul').slideToggle();
				}else{
					categorias_id.push(id);
				}

			}else{
				$(this).next('ul').slideToggle();
			}

		});

	}

}

function menu_cateogorias(qtde_categorias_menu)
{

	let categoiras_menu = "";

	$('#cabecalho .menu > .nivel-um > .borda-principal').each(function(k, item){

		let url = $(item).find('a').attr('href');
		let nome = $(item).find('a').find('strong').text();
		let num = k + 1;

		if(num > qtde_categorias_menu){

			let mais_categorias_item = '<li> <a href="'+url+'" title="'+nome+'"> '+nome+' </a> </li>';

			categoiras_menu += mais_categorias_item;

			$(item).remove();

		}

	});

	if(typeof devrocket_itens_menu_texto === 'undefined' || devrocket_itens_menu_texto === null || devrocket_itens_menu_texto.length == 0){
		devrocket_itens_menu_texto = '+ Categorias';
	}

	let mais_categorias = '<li class="mais-categorias com-filho borda-principal"> <a href="#"> <strong class="titulo"> '+devrocket_itens_menu_texto+' </strong> <i class="icon-chevron-down"></i> </a> <ul class="nivel-dois borda-alpha"> '+categoiras_menu+' </ul> </li> ';
	$('#cabecalho .menu .nivel-um').append(mais_categorias);

}

function menu_fixo()
{

	if(typeof devrocket_menu_fixo !== 'undefined' && devrocket_menu_fixo !== null && devrocket_menu_fixo === true){

		if($('#cabecalho .menu').length > 0){

			var offset = $('#cabecalho .menu').offset().top;
			var $menu = $('#cabecalho .menu');

			$(document).on('scroll', function () {
				if (offset <= $(window).scrollTop()) {
					$menu.addClass('fixar-menu');
				} else {
					$menu.removeClass('fixar-menu');
				}
			});

		}

	}

}

function menu_horizontal()
{

	if(typeof devrocket_menu_horizontal !== 'undefined' && devrocket_menu_horizontal !== null && devrocket_menu_horizontal ===  true){
		
		if($(window).width() > 768){
			
			$('#cabecalho').addClass('devrocket-menu-horizontal');

			let tam_menu = $('#corpo .conteiner').width();
			$('#cabecalho .nivel-dois').css('width', tam_menu+'px');
			
			let itens_menu = [];
			
			$('#cabecalho .nivel-um > li').hover(function(){
				
				let nome_classe = $(this).attr('class');
				
				if(itens_menu.indexOf(nome_classe) != -1){
					return false;
				}
			
				let principal_left = parseInt($('.secao-principal').offset().left);
				let item_left = parseInt($(this).find('.nivel-dois').offset().left);
				
				let espaco_left = item_left - principal_left;
				
				$(this).find('.nivel-dois').css('margin-left', '-'+espaco_left+'px');
				
				itens_menu.push(nome_classe);
				
			});
			
		}

	}

}

function newsletter()
{
	
	let frase_newsletter = '';

	if(typeof devrocket_frase_newsletter !== 'undefined' && devrocket_frase_newsletter !== null && devrocket_frase_newsletter.length > 0){
		frase_newsletter = '<p>'+devrocket_frase_newsletter+'</p>';
	}else{
		frase_newsletter = '<p>Receba nossas ofertas exclusivas. Aproveite!</p>';
	}

	$(frase_newsletter).insertAfter('#barraNewsletter .texto-newsletter');

}

function produto_frete()
{

	$('#formCalcularFrete > div > div > div > button > i').remove();

}

function bandeiras_carrinho()
{

	$('.adicionado-carrinho').text('Adicionado');

	$('.bandeira-promocao').each(function(){

		var desconto = $(this).text();
		var desconto_arr = desconto.split(' ');

		$(this).text(desconto_arr[0]+' OFF');

	});

}

function instagram_rodape()
{

	if(typeof devrocket_instagram !== 'undefined' && devrocket_instagram !== null && devrocket_instagram.length > 0){

		if($('#rodape .redes-sociais').length > 0){

			var instagram_usuario = devrocket_instagram.replace("@", "");
			var cor_secundaria = ($(window).width() > 768) ? 'cor-secundaria' : '';
			var instagram = '<br /> <span class="titulo '+cor_secundaria+'">Siga nosso Instagram</span> <div class="instagram-usuario"> <a href="https://instagram.com/'+instagram_usuario+'" target="_blank"> '+devrocket_instagram+' </a> </div>';
			
			$('#rodape .redes-sociais').append(instagram);
		
		}

	}

}

function horario_atendimento()
{

	if(typeof devrocket_horario_atendimento !== 'undefined' && devrocket_horario_atendimento !== null && devrocket_horario_atendimento.length > 0){

		if($('#rodape .sobre-loja-rodape').length > 0){
			var horario_atendimento = '<br /> <span class="titulo cor-secundaria">HorÃ¡rio de Atendimento</span> <div class="horario-atendimento">'+devrocket_horario_atendimento+'</div>';
			$('#rodape .sobre-loja-rodape').append(horario_atendimento);
		}

	}

}

function whatsapp()
{

	if(typeof devrocket_whatapp !== 'undefined' && devrocket_whatapp !== null && devrocket_whatapp.length > 0){

		if($('#rodape .sobre-loja-rodape').length > 0){
			var whatsapp = '<br /> <span class="titulo cor-secundaria">WhatsApp</span> <div class="atendimento-whatsapp"><i class="fab fa-whatsapp"></i> '+devrocket_whatapp+'</div>';
			$('#rodape .sobre-loja-rodape').append(whatsapp);
		}

	}

}

function voltar_topo()
{

	$('<a id="voltar-topo" class="voltar-topo fundo-principal"> <i class="fa fa-chevron-up"></i> </div> </a>').insertAfter('#corpo');

	$(window).scroll(function(){
		if($(this).scrollTop()!=0){
			$("#voltar-topo").fadeIn();
		}else{
			$("#voltar-topo").fadeOut();
		}
	});

	$("#voltar-topo").click(function(){
		$("body, html").animate({scrollTop: 0}, 800);
		return false;
	});

}

function devrocket()
{

	var devrocket = '<a href="https://devrocket.com.br/" class="logo-devrocket" target="_blank"> <img src="https://devrocket.com.br/assets/img/logos/logo-devrocket-pequena-min.png" alt="DevRocket" style="height: 18px; margin-top: -2px; padding-left: 10px; padding-right: 10px;"> </a>';
	var loja_integrada = '<a href="https://www.lojaintegrada.com.br?utm_source=lojas&amp;utm_medium=rodape&amp;utm_campaign=devrocket-max-moda.lojaintegrada.com.br" class="logo-loja-integrada" title="Loja Integrada - Plataforma de loja virtual." target="_blank" style="opacity: 1 !important; display: inline-block !important; visibility: visible !important; margin: 0 !important; position: static !important; overflow: visible !important;"> <img src="https://cdn.awsli.com.br/production/static/whitelabel/lojaintegrada/img/logo-rodape-loja.png?v=7966cff" alt="Logomarca Loja Integrada" style="opacity: 1 !important; display: inline !important; visibility: visible !important; margin: 0 !important; position: static !important; max-width: 1000px !important; max-height: 1000px !important; width: auto !important; height: auto !important;"></a>';

	$('#rodape > div:nth-child(3) > div > div > div:nth-child(2)').remove();
	$('#rodape > div:nth-child(3) > div > div').append('<div class="rodape-logos"> '+loja_integrada+' &nbsp; '+devrocket+' </div>');

}

function cor_barra_topo()
{

	if(typeof devrocket_cor_barra_topo !== 'undefined' && devrocket_cor_barra_topo !== null && devrocket_cor_barra_topo.length > 0){
		$('.barra-inicial').css({'background-color' : devrocket_cor_barra_topo+' !important'});
	}

}

function cor_menu()
{

	if(typeof devrocket_cor_menu !== 'undefined' && devrocket_cor_menu !== null && devrocket_cor_menu.length > 0){
		$('#cabecalho .menu').css({'background-color' : devrocket_cor_menu+' !important'});
		$('#cabecalho .menu .nivel-um').css({'background-color' : devrocket_cor_menu+' !important'});
	}

}

function cor_rodape()
{

	if(typeof devrocket_cor_rodape !== 'undefined' && devrocket_cor_rodape !== null && devrocket_cor_rodape.length > 0){
		$('#rodape .institucional').css({'background-color' : devrocket_cor_rodape+' !important'});
	}

}

function cor_meio_pagamento()
{

	if(typeof devrocket_cor_meio_pagamento !== 'undefined' && devrocket_cor_meio_pagamento !== null && devrocket_cor_meio_pagamento.length > 0){
		$('#rodape .pagamento-selos').css({'background-color' : devrocket_cor_meio_pagamento+' !important'});
	}

}

function cor_botao_newsletter()
{

	if(typeof devrocket_cor_botao_newsletter !== 'undefined' && devrocket_cor_botao_newsletter !== null && devrocket_cor_botao_newsletter.length > 0){
		$('#barraNewsletter .componente .botao').css({'background-color' : devrocket_cor_botao_newsletter+' !important'});
	}

}

function pagina_categorias()
{

	$('#corpo > div > div.secao-principal.row-fluid.sem-coluna > div.coluna.span3 > div.row-fluid > div > div > div > span > i').remove();
	$('#corpo > div > div.secao-principal.row-fluid.sem-coluna > div.coluna.span3 > div.componente > div > h4 > i').remove();

}

function favoritos()
{

	if($('.listagem-item').length > 0){

		$('.listagem-item').each(function(k, item){

			var produto_id = 0;

			if($(item).find('.trustvox-stars').attr('data-trustvox-product-code')){
				produto_id = $(item).find('.trustvox-stars').attr('data-trustvox-product-code');
			}else{
				produto_id = $(item).find('.botao-comprar').attr('href');
				produto_id = produto_id.match(/\d+/g);
			}

			if(produto_id != 0){
				$(item).prepend('<a href="/conta/favorito/'+produto_id+'/adicionar" class="adicionar-produto-favorito"></a>');
			}
		
		});

	}

}

function produto_compartilhar()
{

	if($('.pagina-produto').length > 0){

		// redes-sociais
		let url_pagina = window.location.href;
		let titulo = encodeURIComponent(document.title);

		let redes = '<div class="social-links"></div>';
		
		// Pinterest
		let descricao = $("meta[name='description']");
		descricao = (!!descricao) ? descricao.attr('content') : null;

		if(!descricao){

			let descricao = $("meta[property='og:description']");
			descricao = (!!descricao) ? descricao.attr('content') : null;
		}

		if(!descricao){
			descricao = document.title;
		}
		
		let link_facebook = '<a class="icone-facebook" href="https://www.facebook.com/sharer/sharer.php?u='+url_pagina+'" target="_blank"><i class="fab fa-facebook-f"></i></a>';
		let link_whatsapp = '<a class="icone-whats" href="https://api.whatsapp.com/send?&text='+ url_pagina +'" target="_blank"><i class="fab fa-whatsapp"></i></a>';
		let link_twitter = '<a class="icone-twitter" href="https://twitter.com/intent/tweet?url='+encodeURIComponent(url_pagina)+'&text='+titulo+'" target="_blank"><i class="fab fa-twitter"></i></a>';
		let link_pinterest = '<a class="icone-pinterest" href="https://www.pinterest.com/pin/create/button/?url='+encodeURIComponent(url_pagina)+'&description='+encodeURIComponent(descricao)+'" target="_blank"><i class="fab fa-pinterest-p"></i></a>';
		let lista_desejos = $('.pagina-produto .produto-compartilhar .lista-redes .hidden-phone a');
		
		$('.pagina-produto .produto-compartilhar .lista-redes ul').remove();
		$('.pagina-produto .produto-compartilhar .lista-redes').append(redes);

		$('.social-links').append(link_facebook);
		$('.social-links').append(link_whatsapp);
		$('.social-links').append(link_twitter);
		$('.social-links').append(link_pinterest);
		$('.social-links').append(lista_desejos);

	}

}

function produto_video()
{

	if($('.pagina-produto').length > 0){

		if($('.produto-video').is(':visible')){
			$('.pagina-produto #corpo .produto > div.row-fluid:nth-child(1)').after('<div class="row-fluid"><div class="span12"><div class="prod-video"></div></div></div>');
			$('.prod-video').html($('.produto-video').html($('#modalVideo .modal-body iframe')));
		}

	}

}

function youtube_pagina_inicial()
{

	if($('.pagina-inicial').length > 0){

		if(typeof devrocket_url_youtube !== 'undefined' && devrocket_url_youtube !== null && devrocket_url_youtube.length > 0){
			
			var youtube_arr = devrocket_url_youtube.split('?v=');

			if(youtube_arr.length > 0){

				var url_youtube = youtube_arr[1];
				url_youtube = 'https://www.youtube.com/embed/'+url_youtube;
				
				var youtube_iframe = '<iframe width="100%" height="400px" src="'+url_youtube+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 4px;" ></iframe>';

				$('#corpo').append('<div class="conteiner text-center"> '+youtube_iframe+' </div>');
						
			}
				
		}

	}

}

function rastrieio_correios()
{

	if(typeof devrocket_rastreio_correios !== 'undefined' && devrocket_rastreio_correios !== null && devrocket_rastreio_correios === true){

		var form_rastreio = '<br /> <span class="titulo cor-secundaria">Rastreio de Pedidos</span> <form melhod="GET" action="https://www.linkcorreios.com.br" target="_blank"> <input type="text" name="id" maxlength="30" placeholder="CÃ³digo de Rastreio" /> <button type="submit"><i class="fas fa-search-location"></i></button> </form>';
		
		$('#rodape .redes-sociais').append('<div class="rastreio-correios">'+form_rastreio+'</div>');

	}

}

function selos_formas_envio()
{

	if(typeof devrocket_formas_envio !== 'undefined' && devrocket_formas_envio !== null && devrocket_formas_envio.length > 0){ 
		$('#rodape .selos .titulo').text('Selos / Formas de Envio');    
		$(devrocket_formas_envio).each(function(k, item){
			$('#rodape .selos ul').append('<li> <img src="'+item+'" class="formas-envio-img" data-id="'+k+'" /> </li>');
		});
	}

}

function depoimentos_clientes()
{

	if($('.pagina-inicial').length > 0){

		if(typeof depoimentos !== 'undefined' && depoimentos !== null && depoimentos.length > 0){

			var div_depoimentos = '';

			$(depoimentos).each(function(k, depoimento){
				let estrelas = '<i class="far fa-star"></i>'.repeat(depoimento.estrelas);
				div_depoimentos += '<div> <div class="depoimento-box" data-id="'+k+'"> <div class="depoimento-box-conteudo"> <div class="depoimento-imagem"> <img src="'+depoimento.imagem+'" loading="lazy" class="lazyload"/> </div> <div class="depoimento-nome">'+depoimento.nome+'</div> <div class="depoimento-mensagem">"'+depoimento.mensagem+'"</div> <div class="depoimento-localidade">'+depoimento.localidade+'</div><div class="depoimento-estrelas">'+estrelas+'</div> </div> </div> </div>'; 
			});
				
			$('<div class="conteiner conteiner-depoimentos"> <div class="listagem"> <div class="titulo-categoria borda-principal cor-principal"> <strong>Depoimentos de Clientes</strong> </div> </div> <div class="depoimentos">'+div_depoimentos+'</div></div>').insertAfter('#corpo');
			
			$('.depoimentos').slick({
				autoplay:true,
				lazyLoad: "ondemand",
				infinite: true,
				slidesToShow: ($(window).width() > 768) ? 3 : 1,
				slidesToScroll: ($(window).width() > 768) ? 3 : 1,
				dots: true,
				nextArrow: '<i class="fas fa-chevron-right devrocket-slick-next"></i>',
				prevArrow: '<i class="fas fa-chevron-left devrocket-slick-prev"></i>',
			});

			var cor = cor_tema();

			setTimeout(function(){
				$('.slick-prev:before').css('color', cor);
				$('.slick-next:before').css('color', cor);
			}, 1000);

		}

	}

}

function banners_lancamentos()
{

	if($('.pagina-inicial').length > 0){

		if(typeof devrocket_lancamentos !== 'undefined' && devrocket_lancamentos !== null && devrocket_lancamentos !== '' && $('.vitrine-lancamento').length > 0){
			
			if(typeof devrocket_lancamentos.lancamento !== 'undefined' && devrocket_lancamentos.lancamento !== null && devrocket_lancamentos.lancamento === true) {
				banners(devrocket_lancamentos);
			}
		
		}

	}

}

function banners_mais_vendidos()
{

	if($('.pagina-inicial').length > 0){

		if(typeof devrocket_mais_vendidos !== 'undefined' && devrocket_mais_vendidos !== null && devrocket_mais_vendidos !== '' && $('.vitrine-mas-vendido').length > 0){
			
			if(typeof devrocket_mais_vendidos.maisvendido !== 'undefined' &&devrocket_mais_vendidos.maisvendido !== null && devrocket_mais_vendidos.maisvendido === true) {
				banners(devrocket_mais_vendidos);
			}
		
		}

	}

}

function banners_destaques()
{

	if($('.pagina-inicial').length > 0){

		if(typeof devrocket_destaques !== 'undefined' && devrocket_destaques !== null && devrocket_destaques !== '' && $('.vitrine-destaque').length > 0){
			
			if(typeof devrocket_destaques.destaque !== 'undefined' && devrocket_destaques.destaque !== null && devrocket_destaques.destaque === true) {
				banners(devrocket_destaques);
			}
		
		}

	}

}

function banners(item){
				
	let devrocketbanners = document.createElement("div");
	devrocketbanners.setAttribute("class", "banner-vitrine");

	let devrocketListagem = document.createElement("div");
	devrocketListagem.setAttribute("class", "banners-listagem");

	devrocketbanners.appendChild(devrocketListagem);

	let devrocket_listagem1 = document.createElement("div");
	devrocket_listagem1.setAttribute("class","banners-listagem1 banner-listagem");

	let devrocket_listagem2 = document.createElement("div");
	devrocket_listagem2.setAttribute("class","banners-listagem2 banner-listagem");

	let devrocket_listagem3 = document.createElement("div");
	devrocket_listagem3.setAttribute("class","banners-listagem3 banner-listagem");

	let categoria = document.querySelector("#corpo .listagem .titulo-categoria.vitrine-" + item.area + "");
	categoria.nextElementSibling.after(devrocketbanners);

	if (item.img1 != "") {

		let a = document.createElement("a");
		a.setAttribute("href", item.link1);

		let img = document.createElement("img");
		img.setAttribute("src", item.img1);
		img.setAttribute('loading', 'lazy');
		img.setAttribute('class', 'lazyload');
		a.appendChild(img);

		devrocket_listagem1.appendChild(a);
		devrocketListagem.appendChild(devrocket_listagem1);

	}

	if (item.img2 != "") {

		let a = document.createElement("a");
		a.setAttribute("href", item.link2);

		let img = document.createElement("img");
		img.setAttribute("src", item.img2); 
		img.setAttribute('loading', 'lazy');
		img.setAttribute('class', 'lazyload');
		a.appendChild(img); 

		devrocket_listagem2.appendChild(a);
		devrocketListagem.appendChild(devrocket_listagem2);

	}

	if (item.img3 != "") {

		let a = document.createElement("a");
		a.setAttribute("href", item.link3);

		let img = document.createElement("img");
		img.setAttribute("src", item.img3);
		img.setAttribute('loading', 'lazy');
		img.setAttribute('class', 'lazyload');

		a.appendChild(img);
		devrocket_listagem3.appendChild(a);
		devrocketListagem.appendChild(devrocket_listagem3);

	}
}

function banners_mobile()
{

	if(typeof devrocket_banner_mobile !== 'undefined' && devrocket_banner_mobile !== null && devrocket_banner_mobile.length > 0){
				
		if($('.pagina-inicial').length > 0 && $(window).width() <= 768){

			$('.secao-banners').before('<div class="banners-mobile" id="banners-mobile"></div>');

			$(devrocket_banner_mobile).each(function(k, banner){
				$('.banners-mobile').append('<div class="banners-mobile-item"> <a href="'+banner.link+'"> <img src="'+banner.img+'" loading="lazy" class="lazyload"> </a> </div>');
			});
				
			$('.banners-mobile').slick({
				autoplay: true,
				lazyLoad: "ondemand",
				infinite: true,
				slidesToShow:  1,
				slidesToScroll: 1,
				dots: true,
				nextArrow: '<i class="fas fa-chevron-right devrocket-slick-next"></i>',
				prevArrow: '<i class="fas fa-chevron-left devrocket-slick-prev"></i>',
			});
				
			$('.secao-banners').hide();

		}

	}

}

function pix_comprar()
{

	if($('.pagina-produto').length > 0){

		if(typeof frase_pix_comprar !== 'undefined' && frase_pix_comprar !== null && frase_pix_comprar.length > 0){
		   
			$('<div class="parcelas-produto borda-alpha padrao">'+ frase_pix_comprar +'</div>').insertAfter('#DelimiterFloat');

		}

	}

}

function produtos_linha_celular()
{

	if($(window).width() < 768 && $(window).width() >= 360){

		if(typeof devrocket_produtos_linha_celular !== 'undefined' && devrocket_produtos_linha_celular !== null && typeof devrocket_produtos_linha_celular === 'number'){

			if(devrocket_produtos_linha_celular == 2){

				$('.listagem-linha').addClass('listagem-linha-celular');

				if($('.pagina-inicial').length > 0){
			
					setTimeout(function(){
						
						if($('.listagem-linha-celular').hasClass('flexslider')){
							
							let tam_div_flexslider = $('.produtos-carrossel').width() / 2;
							$('.listagem .listagem-linha li').width(tam_div_flexslider);
							
							$('.listagem-linha .flex-viewport ul').each(function(k, item){
								
								let itens_li = $(item).html();
								
								$(item).append(itens_li);
								
							});
							
							$('body').append('<style> .listagem .listagem-linha li { width: '+tam_div_flexslider+'px !important; } </style>');
							
						}
						
					}, 200);
					
				}

			}

		}

	}

}

function imagens_categorias()
{

	if(typeof devrocket_imagens_categoria !== 'undefined' && devrocket_imagens_categoria !== null && $(window).width() > 767){

		$('#cabecalho > div.conteiner > div.menu.superior > ul > li.borda-principal > a').each(function(k, item){

			if(devrocket_imagens_categoria[k]){

				let imagem_icone = '<img src="'+devrocket_imagens_categoria[k]+'" class="devrocket-imagem-categoria" />';

				if(devrocket_imagens_categoria_posicao == 'esquerda'){
					$(item).prepend(imagem_icone);
				}else if(devrocket_imagens_categoria_posicao == 'centro'){
					imagem_icone = '<div class="devrocket-imagem-categoria-posicao">'+imagem_icone+'<div>';
					$(item).prepend(imagem_icone);
				}else{
					$(item).append(imagem_icone);
				}

			}

		});

	}

}

function whatsapp_flutuante()
{

	if (typeof devrocket_whatsapp !== 'undefined' && devrocket_whatsapp !== null) {

		let pulse = (devrocket_whatsapp.pulse === true) ? 'devrocket-whatsapp-pulse': '';

		$('<div class="devrocket-whatsapp '+pulse+'"> <a href="https://api.whatsapp.com/send?phone='+devrocket_whatsapp.numero+'&text='+devrocket_whatsapp.mensagem+'" target="_blank"> <i class="fab fa-whatsapp"></i> </a> </div>').insertAfter('body');

	}

}

function instagram_flutuante()
{

	if (typeof devrocket_instagram_flutuante !== 'undefined' && devrocket_instagram_flutuante !== null) {

		let pulse = (devrocket_instagram_flutuante.pulse === true) ? 'devrocket-instagram-pulse': '';

		$('<div class="devrocket-instagram '+pulse+'"> <a href="https://instagram.com/'+devrocket_instagram_flutuante.usuario+'" target="_blank"> <i class="fab fa-instagram"></i> </a> </div>').insertAfter('body');

	}

}

function telegram_flutuante()
{

	if (typeof devrocket_telegram !== 'undefined' && devrocket_telegram !== null) {

		let pulse = (devrocket_telegram.pulse === true) ? 'devrocket-telegram-pulse': '';

		$('<div class="devrocket-telegram '+pulse+'"> <a href="https://t.me/'+devrocket_telegram.usuario+'" target="_blank"> <i class="fab fa-telegram-plane"></i> </a> </div>').insertAfter('body');

	}

}

function pedidos_whatsapp()
{

	let mensagem = 'OlÃ¡, tudo bem? Preciso de ajudar com o produto';

	if(typeof devrocket_pedidos_whatsapp_listagem_produtos_dados !== 'undefined' && devrocket_pedidos_whatsapp_listagem_produtos_dados !== null){
		if(typeof devrocket_pedidos_whatsapp_listagem_produtos_dados.mensagem !== 'undefined' || devrocket_pedidos_whatsapp_listagem_produtos_dados.mensagem !== null || devrocket_pedidos_whatsapp_listagem_produtos_dados.mensagem.length > 0){
			mensagem = devrocket_pedidos_whatsapp_listagem_produtos_dados.mensagem;
		}   
	}

	if(typeof devrocket_pedidos_whatsapp_listagem_produtos !== 'undefined' && devrocket_pedidos_whatsapp_listagem_produtos !== null && devrocket_pedidos_whatsapp_listagem_produtos === true){

		if(typeof devrocket_pedidos_whatsapp_listagem_produtos_dados.numero !== 'undefined' && devrocket_pedidos_whatsapp_listagem_produtos_dados.numero !== null){
			
			$('.listagem-linha .listagem-item').each(function(k, item){

				let informacoes_produto = '';

				let link_produto = $(item).find('.nome-produto');

				let nome_produto = $(link_produto).text();

				if(nome_produto.length > 0){ informacoes_produto = ' ' + nome_produto; }

				link_produto = $(link_produto).attr('href');

				if(link_produto.length > 0){ informacoes_produto = informacoes_produto + ', Link: ' + link_produto; }

				let valor_produto = $(item).find('.preco-promocional').text();

				if(valor_produto.length > 0){ informacoes_produto = informacoes_produto + ' e Valor: ' + valor_produto; }

				$(item).append('<div class="devrocket-pedidos-whatsapp-listagem-produtos"> <a href="https://api.whatsapp.com/send?phone='+devrocket_pedidos_whatsapp_listagem_produtos_dados.numero+'&text='+mensagem + informacoes_produto+'" target="_blank"> <i class="fab fa-whatsapp"></i> </a> </div>');

			});

		}

	}

	if($('.pagina-produto').length > 0){

		if(typeof devrocket_pedidos_whatsapp_botao_comprar !== 'undefined' && devrocket_pedidos_whatsapp_botao_comprar !== null && devrocket_pedidos_whatsapp_botao_comprar === true){

			let informacoes_produto = '';

			var nome_produto = $('h1.nome-produto').text();
			var link_produto = $('link[rel="canonical"]').attr('href');
			var valor_produto = $('#corpo > div > div.secao-principal.row-fluid.sem-coluna > div > div:nth-child(1) > div:nth-child(2) > div > div.acoes-produto.disponivel.SKU-JFRSARWLB > div:nth-child(1) > div > div:nth-child(1) > strong').text();

			if(nome_produto.length > 0){ informacoes_produto = ' ' + nome_produto; }

			if(link_produto.length > 0){ informacoes_produto = informacoes_produto + ', Link: ' + link_produto; }

			if(valor_produto.length > 0){ informacoes_produto = informacoes_produto + ' e Valor: ' + valor_produto; }

			$('<div class="devrocket-pedidos-whatsapp-botao-comprar"> <a href="https://api.whatsapp.com/send?phone='+devrocket_pedidos_whatsapp_listagem_produtos_dados.numero+'&text='+mensagem + informacoes_produto+'" target="_blank"> <i class="fab fa-whatsapp"></i> <strong>'+devrocket_pedidos_whatsapp_listagem_produtos_dados.frase_botao+'</strong> </a> </div>').insertAfter('.principal #DelimiterFloat');

		}

	}

}

function timer()
{

	if(typeof devrocket_timer_produtos !== 'undefined' && devrocket_timer_produtos !== null && devrocket_timer_produtos.length > 0){
		
		$(devrocket_timer_produtos).each(function(k, item){
			
			var { produto, data, frase, cor_fundo, cor_texto } = item;
			
			if(typeof produto == 'undefined' || produto == null || produto == ''){ return; }
			if(typeof data == 'undefined' || data == null || data == ''){ return; }
			
			if(typeof cor_fundo == 'undefined' || cor_fundo == null || cor_fundo == ''){ cor_fundo = '#e74c3c'; }
			if(typeof cor_texto == 'undefined' || cor_texto == null || cor_texto == ''){ cor_texto = '#ffffff'; }
			
			$('.prod-id-'+produto+' .info-produto').append('<div class="devrocket-timer timer-'+produto+'" style="background-color: '+cor_fundo+' !important; color: '+cor_texto+' !important;"> </div>');
			
			var data_final = new Date(data).getTime(); 
			
			var x = setInterval(function() {
				
				var agora = new Date().getTime();

				var t = data_final - agora; 
				var dias = Math.floor(t / (1000 * 60 * 60 * 24)); 
				var horas = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
				var minutos = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
				var segundos = Math.floor((t % (1000 * 60)) / 1000);

				var div_timer = ' <strong>' + dias + '</strong> dias <strong>' + horas + '</strong>h <strong>' + minutos + '</strong>m <strong>' + segundos+'</strong>s';

				if($(window).width() > 768){
					div_timer = '<div class="devrocket-timer-cronometro">' + div_timer + '</div>';
				}
				
				$('.prod-id-'+produto+' .timer-'+produto).html(frase + div_timer);
				
				if (t < 0) { 
					clearInterval(x); 
					$('.prod-id-'+produto+' .timer-'+produto).html('PromoÃ§Ã£o Expirada.'); 
				}
				
			}, 1000);
			
		});
		
	}

}

function tabela_medidas()
{

	if(typeof devrocket_tabela_medidas !== 'undefined' && devrocket_tabela_medidas !== null){

		if($('.pagina-produto').length > 0){

			$(devrocket_tabela_medidas.categorias).each(function(k, categoria){

				let categoria_produto = $('#corpo > div > div.secao-principal.row-fluid.sem-coluna > div > div:nth-child(1) > div:nth-child(2) > div > div.info-principal-produto > div.breadcrumbs.borda-alpha > ul > li:nth-child(2) > a').text();

				if(categoria == categoria_produto || categoria == '*'){

					tabela_medidas_botao(devrocket_tabela_medidas.titulo, devrocket_tabela_medidas.imagem);

				}

			});

		}

	}

}

function tabela_medidas_botao(titulo = '', imagem = '')
{

	let botao_tabela_medidas = '<a href="#modalTabelaMedidas" data-toggle="modal" data-target="#modalTabelaMedidas" class="tabela-medidas"> <svg xmlns="http://www.w3.org/2000/svg" height="18px" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /> </svg> &nbsp; '+titulo+' </a>';

	if($(window).width() <= 768){
		$(botao_tabela_medidas).insertBefore('.acoes-produto .preco-produto');
	}else{
		$(botao_tabela_medidas).insertAfter('.info-principal-produto');
	}

	let modal_tabela_medidas = '\
		<div id="modalTabelaMedidas" class="modal hide" tabindex="-1" aria-labelledby="modalTabelaMedidasLabel" aria-hidden="true"> \
			<div class="modal-header"> \
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="icon-remove"></i></button> \
				<span class="titulo cor-secundaria">'+titulo+'</span> \
			</div> \
			<div class="modal-body"> \
				<img src="'+imagem+'" style="max-width: 100%;"> \
			</div> \
		</div> \
	';

	$(modal_tabela_medidas).insertAfter('body');

}

function feed_instagram()
{

	if($('.pagina-inicial').length > 0){

		if(typeof devrocket_feed !== 'undefined' && devrocket_feed !== null && devrocket_feed.length > 0){

			let devrocket_feed_div = '';

			$(devrocket_feed).each(function(k, item){

				let devrocket_feed_div_item = '';

				if(item.url.length > 0){
					devrocket_feed_div_item += '<a href="'+item.url+'" target="_blank">';
				}

				if(item.img.length > 0){
					devrocket_feed_div_item += '<img src="'+item.img+'" class="devrocket-feed-img lazyload" loading="lazy">';
				}

				if(item.url.length > 0){
					devrocket_feed_div_item += '</a>';
				}

				if(devrocket_feed_div_item.length > 0){
					devrocket_feed_div += '<div> <div class="devrocket-feed-item">'+devrocket_feed_div_item+'</div> </div>';
				}

			});

			if(devrocket_feed_div.length > 0){

				devrocket_feed_div = '<div class="conteiner devrocket-feed-conteiner"> <div class="devrocket-feed-titulo">'+devrocket_feed_conta.frase+' <a href="'+devrocket_feed_conta.url+'" target="_blank">'+devrocket_feed_conta.conta+'</a></div> <div class="devrocket-feed">'+devrocket_feed_div+'</div> </div>';

				if($('#barraNewsletter').length > 0){
					$(devrocket_feed_div).insertBefore('#barraNewsletter');
				}else if($('#rodape').length > 0){
					$(devrocket_feed_div).insertBefore('#barraNewsletter');
				}

				setTimeout(function(){

					$('.devrocket-feed').slick({
						dots: true,
						infinite: true,
						slidesToShow: 5,
						slidesToScroll: 5,
						lazyLoad: "ondemand",
						nextArrow: '<i class="fas fa-chevron-right devrocket-slick-next"></i>',
						prevArrow: '<i class="fas fa-chevron-left devrocket-slick-prev"></i>',
						responsive: [
							{
							breakpoint: 1024,
								settings: {
									slidesToShow: 4,
									slidesToScroll: 4,
									infinite: true,
									dots: true
								}
							},
							{
							breakpoint: 767,
								settings: {
									slidesToShow: 3,
									slidesToScroll: 3
								}
							},
							{
							breakpoint: 480,
								settings: {
									slidesToShow: 2,
									slidesToScroll: 4
								}
							}
						]
					});

				}, 100);

			}

		}

	}

}

function timer_regua()
{

	if(typeof devrocket_timer_regua !== 'undefined' && devrocket_timer_regua !== null){
				
		var { data, titulo, frase, cor_fundo, cor_texto, url, imagem_fundo } = devrocket_timer_regua;
		
		if(typeof data !== 'undefined' && data !== null && data != ''){
		
			if(typeof cor_fundo == 'undefined' || cor_fundo == null || cor_fundo == ''){ cor_fundo = '#e74c3c'; }
			if(typeof cor_texto == 'undefined' || cor_texto == null || cor_texto == ''){ cor_texto = '#ffffff'; }
			
			let div_timer_barra = '<div class="conteiner"> <div class="devrocket-timer-regua" style="background-color: '+cor_fundo+' !important; color: '+cor_texto+' !important;">';
					div_timer_barra += '<div class="devrocket-timer-regua-data"> '+frase+' <div class="devrocket-timer-regua-data-cronometro"></div> </div>';
					div_timer_barra += '<div class="devrocket-timer-regua-descricao"> <h3>'+titulo+'</h3> <div class="devrocket-timer-regua-frase">'+frase+'</div> </div>';
				div_timer_barra += '</div> </div>';
			
			$(div_timer_barra).insertBefore('.pagina-inicial #corpo > .conteiner:nth-child(1)');

			if(typeof url !== 'undefined' && url !== null && url != ''){ 
				$('.devrocket-timer-regua').wrap('<a href="'+url+'" target="_blank"></a>')
			}
			
			var data_final = new Date(data).getTime(); 
			
			var x = setInterval(function() {
				
				var agora = new Date().getTime();

				var t = data_final - agora; 
				var dias = Math.floor(t / (1000 * 60 * 60 * 24)); 
				var horas = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
				var minutos = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
				var segundos = Math.floor((t % (1000 * 60)) / 1000);

				var div_timer = '<div class="devrocket-timer-regua-cronometro-desc"> <div class="devrocket-timer-regua-cronometro-desc-data">'+dias+'</div> <div class="devrocket-timer-regua-cronometro-desc-data-desc"> dias </div> </div>';
				div_timer += '<div class="devrocket-timer-regua-cronometro-desc"> <div class="devrocket-timer-regua-cronometro-desc-data">'+horas+'</div> <div class="devrocket-timer-regua-cronometro-desc-data-desc"> horas </div> </div>';
				div_timer += '<div class="devrocket-timer-regua-cronometro-desc"> <div class="devrocket-timer-regua-cronometro-desc-data">'+minutos+'</div> <div class="devrocket-timer-regua-cronometro-desc-data-desc"> minutos </div> </div>';
				div_timer += '<div class="devrocket-timer-regua-cronometro-desc"> <div class="devrocket-timer-regua-cronometro-desc-data">'+segundos+'</div> <div class="devrocket-timer-regua-cronometro-desc-data-desc"> segundos </div> </div>';
				
				$('.devrocket-timer-regua-data-cronometro').html(div_timer);
				
				if (t < 0) { 
					clearInterval(x); 
					$('.devrocket-timer-regua-data-cronometro').html('PromoÃ§Ã£o Expirada.'); 
				}
				
			}, 1000);

		}
		
	}

}

function carrossel_categorias()
{

	if($('.pagina-inicial').length > 0){

		if(typeof devrocket_carrossel_categorias !== 'undefined' && devrocket_carrossel_categorias !== null && devrocket_carrossel_categorias.length > 0){

			let devrocket_carrossel_categorias_div = '';

			$(devrocket_carrossel_categorias).each(function(k, item){

				let devrocket_carrossel_categorias_div_item = '';

				if(item.url.length > 0){
					devrocket_carrossel_categorias_div_item += '<a href="'+item.url+'" target="_blank">';
				}

				if(item.img.length > 0){
					devrocket_carrossel_categorias_div_item += '<img src="'+item.img+'" class="devrocket-carrossel-categorias-img lazyload" loading="lazy">';
				}

				if(item.titulo.length > 0){
					devrocket_carrossel_categorias_div_item += '<div class="devrocket-carrossel-categorias-titulo"> '+item.titulo+' </div>';
				}

				if(item.url.length > 0){
					devrocket_carrossel_categorias_div_item += '</a>';
				}

				if(devrocket_carrossel_categorias_div_item.length > 0){
					devrocket_carrossel_categorias_div += '<div> <div class="devrocket-carrossel-categorias-item">'+devrocket_carrossel_categorias_div_item+'</div> </div>';
				}

			});

			if(devrocket_carrossel_categorias_div.length > 0){

				devrocket_carrossel_categorias_div = '<div class="conteiner devrocket-carrossel-categorias-conteiner"> <div class="devrocket-carrossel-categorias">'+devrocket_carrossel_categorias_div+'</div> </div>';

				if(typeof devrocket_carrossel_categorias_posicao !== 'undefined' && devrocket_carrossel_categorias_posicao !== null && devrocket_carrossel_categorias_posicao == 'cabecalho'){
					$(devrocket_carrossel_categorias_div).insertBefore('#corpo');
				}else{
					$(devrocket_carrossel_categorias_div).insertAfter('#corpo');
				}

				setTimeout(function(){

					$('.devrocket-carrossel-categorias').slick({
						dots: true,
						infinite: true,
						slidesToShow: 8,
						slidesToScroll: 8,
						lazyLoad: "ondemand",
						nextArrow: '<i class="fas fa-chevron-right devrocket-slick-next"></i>',
						prevArrow: '<i class="fas fa-chevron-left devrocket-slick-prev"></i>',
						responsive: [
							{
							breakpoint: 1024,
								settings: {
									slidesToShow: 6,
									slidesToScroll: 6,
									infinite: true,
									dots: true
								}
							},
							{
							breakpoint: 767,
								settings: {
									slidesToShow: 4,
									slidesToScroll: 4
								}
							},
							{
							breakpoint: 480,
								settings: {
									slidesToShow: 2,
									slidesToScroll: 2
								}
							}
						]
					});

				}, 100);

			}

		}

	}

}

function paginas_extras_cabecalho()
{

	if(typeof devrocket_paginas_extras_cabecalho !== 'undefined' && devrocket_paginas_extras_cabecalho !== null && devrocket_paginas_extras_cabecalho.length > 0){
	
		let paginas_extras_cabecalho_div = '';

			$(devrocket_paginas_extras_cabecalho).each(function(k, item){

				let paginas_extras_cabecalho_div_item = '';

				if(item.url.length > 0){
					paginas_extras_cabecalho_div_item += '<a href="'+item.url+'" target="_blank">';
				}

				if(item.nome.length > 0){
					paginas_extras_cabecalho_div_item += item.nome;
				}

				if(item.url.length > 0){
					paginas_extras_cabecalho_div_item += '</a>';
				}

				if(paginas_extras_cabecalho_div_item.length > 0){
					paginas_extras_cabecalho_div += paginas_extras_cabecalho_div_item;
				}

			});

			if(paginas_extras_cabecalho_div.length > 0){
				$('#cabecalho > div.conteiner > div.row-fluid > div.conteudo-topo.span9 > div.superior.row-fluid.hidden-phone').html('<div class="devrocket-paginas-extras-cabecalho">'+paginas_extras_cabecalho_div+'</div>');
			}
	
	}

}

function produtos_vitrine()
{

	if($('.pagina-inicial').length > 0){

		if(typeof devrocket_produtos_vitrine !== 'undefined' && devrocket_produtos_vitrine !== null){

			$('#corpo #listagemProdutos').before('<div class="produtos-vitrine" id="produtos-vitrine"><div class="conteiner"><div class="produtos-vitrine-conteudo"></div></div></div>');
			
			$('.produtos-vitrine-conteudo').append('<div class="produtos-vitrine-titulo"></div>');

			$('.produtos-vitrine-titulo').append('<h3 class="titulo">'+devrocket_produtos_vitrine.titulo+'</h3>');

			$('.produtos-vitrine-titulo').append('<div class="titulo">'+devrocket_produtos_vitrine.texto+'</div>');

			$('.produtos-vitrine-titulo').append('<div class="contador-promocao"></div>');

			$('.contador-promocao').append('<div class="duracao">Tempo Limitado</div>');

			$('.contador-promocao').append('<div class="contador"></div>');
			
			$('.contador').append('<div class="contador-dias"></div>');

			$('.contador-dias').append('<div class="dias"></div><strong>Dias</strong>');
			
			$('.contador').append('<div class="contador-horas"></div>');

			$('.contador-horas').append('<div class="horas"></div><strong>h </strong><div class="minutos"></div><strong>m </strong><div class="segundos"></div><strong>s</strong>');
			
			$('.produtos-vitrine-conteudo').append('<div class="produtos-vitrine-produtos"></div>');
			$('.produtos-vitrine-produtos').append('<div class="produtos-vitrine-slide"></div>');
			
			/*Timer Produtos*/
			var data_final = new Date(devrocket_produtos_vitrine.data_final).getTime(); 

			var x = setInterval(function() {
				
				var agora = new Date().getTime();
				var t = data_final - agora; 
				var dias = Math.floor(t / (1000 * 60 * 60 * 24)); 
				var horas = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
				var minutos = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
				var segundos = Math.floor((t % (1000 * 60)) / 1000); 
									
				$('.contador-dias .dias').html('<div> <strong>' + dias + '</strong></div>');
				$('.contador-horas .horas').html('<div> <strong>' + horas + '</strong></div>');
				$('.contador-horas .minutos').html('<div> <strong>' + minutos + '</strong></div>');
				$('.contador-horas .segundos').html('<div> <strong>' + segundos + '</strong></div>');
							
				if (t < 0) { 
					clearInterval(x); 
					$('.contador-promocao').html('PromoÃ§Ã£o Expirada.'); 
				}

			}, 1000);
			
			devrocket_produtos_vitrine.produtos.forEach(function(item){

				let imagem_produto = "";
				if($('.prod-id-'+item+' .imagem-produto img.imagem-principal').length > 0){
					imagem_produto = $('.prod-id-'+item+' .imagem-produto img.imagem-principal').clone()[0];
					imagem_produto = imagem_produto.outerHTML;
				}

				let infoProduto = $('.prod-id-'+item+' .info-produto').clone();
				
				$('.produtos-vitrine-slide').append('<div class="produtos-vitrine-slide-item prod-id-'+item+'"></div>');
				$('.produtos-vitrine-slide .prod-id-'+item).append(infoProduto[0]);
				$('.produtos-vitrine-slide .prod-id-'+item+' .info-produto a').prepend('<div class="produtos-vitrine-item-img">'+imagem_produto+'</div>')

			});
			
			$('.produtos-vitrine-slide').slick({
				autoplay: true,
				lazyLoad: "ondemand",
				infinite: true,
				slidesToShow: ($(window).width() > 768) ? 3 : 1,
				slidesToScroll: ($(window).width() > 768) ? 3 : 1,
				dots: true,
				nextArrow: '<i class="fas fa-chevron-right devrocket-slick-next"></i>',
				prevArrow: '<i class="fas fa-chevron-left devrocket-slick-prev"></i>',
			});
			
			$('.produtos-vitrine-titulo h2').css('color', cor_tema());
			
			if(typeof devrocket_produtos_vitrine.cor_fundo !== 'undefined'|| devrocket_produtos_vitrine.cor_fundo !== null || devrocket_produtos_vitrine.cor_fundo !== '') {
				$('.contador').css('background-color', devrocket_produtos_vitrine.cor_fundo);
			}
			
			if(typeof devrocket_produtos_vitrine.cor_texto === 'undefined'|| devrocket_produtos_vitrine.cor_texto === null || devrocket_produtos_vitrine.cor_texto === '') {
				$('.contador-dias').css('color', cor_tema());
				$('.contador-horas').css('color', cor_tema());
			}else{
				$('.contador-dias').css('color', devrocket_produtos_vitrine.cor_texto);
				$('.contador-horas').css('color', devrocket_produtos_vitrine.cor_texto);
			}

		}
	}

}

function oferta_dia()
{

	if($('#cabecalho > div.conteiner > div.menu.superior > ul').length > 0){

		if(typeof devrocket_oferta_dia !== 'undefined' && devrocket_oferta_dia !== null){

			$('#cabecalho > div.conteiner > div.menu.superior > ul').append('<li class="devrocket-oferta-dia"> <a href="#" style="color: '+devrocket_oferta_dia.cor+';">'+devrocket_oferta_dia.titulo+'</a> </li>');

		}

		$(document).on('click', '.devrocket-oferta-dia', function(){

			if($('.pagina-inicial').length == 0){

				window.location.href = "/#produtos-vitrine";

			}else{

				if($(window).width() < 768){
					$('#cabecalho .menu-slide').css('left', '-100%');
					$('#cabecalho .menu-slide').attr('data-status', 'hide');
				}

				$('html, body').animate({
					scrollTop: $('.produtos-vitrine').offset().top - 100
				}, 1000);

			}

		});

	}

}

function sobre_nos()
{

	if($('#barraNewsletter').length > 0){

		if(typeof devrocket_sobre_nos !== 'undefined' && devrocket_sobre_nos !== null){

			var devrocket_div_sobre_nos = '<div class="devrocket-sobre-nos"> <div class="container"> <div class="row"> ';

				devrocket_div_sobre_nos += '<div class="span8"> <h3>'+devrocket_sobre_nos.titulo+'</h3> '+devrocket_sobre_nos.conteudo+'</div>';
				devrocket_div_sobre_nos += '<div class="span4"> <img src="'+devrocket_sobre_nos.imagem+'"> </div>';

			devrocket_div_sobre_nos += ' </div> <div> </div>';

			$(devrocket_div_sobre_nos).insertAfter('#barraNewsletter');

		}

	}

}

function carrinho_mobile()
{

	if($(window).width() <= 768){

		if($('#cabecalho .conteudo-topo .inferior .carrinho > a strong').length > 0){

			var quantidade_carrinho_mobile = $('#cabecalho .conteudo-topo .inferior .carrinho > a strong').text();

			if($('.item-menu-mobile-carrinho').length > 0){

				var div_carrinho_mobile = '<div class="quantidade-carrinho-mobile">'+quantidade_carrinho_mobile+'</div>';

				$('.item-menu-mobile-carrinho').append(div_carrinho_mobile);

			}

		}

	}

}

$(function() {
	customizador_tema();
	barra_contato();
	menu();
	menu_horizontal();
	barra_ofertas();
	banners_lancamentos();
	banners_mais_vendidos();
	banners_destaques();
	banners_mobile();
	favoritos();
	newsletter();
	produto_frete();
	bandeiras_carrinho();
	instagram_rodape();
	horario_atendimento();
	whatsapp();
	voltar_topo();
	pagina_categorias();
	youtube_pagina_inicial();
	produto_compartilhar();
	produto_video();
	rastrieio_correios();
	selos_formas_envio();
	depoimentos_clientes();
	pix_comprar();
	produtos_linha_celular();
	cor_barra_topo();
	cor_menu();
	cor_rodape();
	cor_meio_pagamento();
	cor_botao_newsletter();
	devrocket();
	imagens_categorias();
	whatsapp_flutuante();
	instagram_flutuante();
	telegram_flutuante();
	pedidos_whatsapp();
	timer();
	tabela_medidas();
	feed_instagram();
	timer_regua();
	carrossel_categorias();
	paginas_extras_cabecalho();
	oferta_dia();
	sobre_nos();
	carrinho_mobile();
	produtos_vitrine();
});