;(function($){
  $.fn.mapChars = function(from, to, reverse) {
    var self = this;
    var start = from;
    var finish = to;
    var type = 'text';
    var toTranslate = self.text();
    var newContent = "";
    if (reverse) {
        start = to;
        finish = from;
    }

    for (i=0;i<toTranslate.length;i++) {
        for (j=0;j<start.length;j++) {
            if (toTranslate[i] === ' ') {
                newContent = newContent + ' ';
            } else if (toTranslate[i] === start[j]) {
                newContent = newContent + finish[j];
            }
        }
    }
    console.log(newContent);
    self.text(newContent);
  };
})(jQuery);