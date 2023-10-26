// ==UserScript==
// @name         AtCoderMLEtoHisoka
// @namespace    https://github.com/aplysia56108/AtcoderMLEtoHisoka
// @version      1.0
// @description  atcoder上で「MLE」が「キミの敗因は容量（メモリ）のムダ使い❤︎」になる。
// @author       aplysia56108
// @match        https://atcoder.jp/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.5.2/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';

    $("span.label-warning:contains('MLE')").html("キミの敗因は容量（メモリ）のムダ使い❤︎");
})();