"use strict";(function(){var i;i=function(){var i=void 0;return(i=$("[data-bio]")).click(function(){var a,s=void 0,o=void 0;switch(a=$(this).data("bio"),s=$("#bio-full"),o=$("#bio-summary"),a){case"full":return s.show(),o.hide(),i.addClass("link"),$(this).removeClass("link");case"summary":return o.show(),s.hide(),i.addClass("link"),$('[data-bio="summary"]').removeClass("link")}})},$(function(){i()})}).call(void 0);