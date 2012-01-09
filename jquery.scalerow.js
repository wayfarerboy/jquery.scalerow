/*
        jquery.scalerow.js
        
        Copyright 2012 Al Pagan <generamics@gmail.com>
        
        This program is free software; you can redistribute it and/or modify
        it under the terms of the GNU General Public License as published by
        the Free Software Foundation; either version 2 of the License, or
        (at your option) any later version.
        
        This program is distributed in the hope that it will be useful,
        but WITHOUT ANY WARRANTY; without even the implied warranty of
        MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
        GNU General Public License for more details.
        
        You should have received a copy of the GNU General Public License
        along with this program; if not, write to the Free Software
        Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston,
        MA 02110-1301, USA.

        
*/
        
jQuery.fn.ScaleRow = function(itemWrapper, item) {
  var self = jQuery(this);
  self
    .each(function() {
      var totalWidth = totalHeight = 0;
      var maxWidth = jQuery(this).outerWidth() -1;
      self
        .addClass('scalerow')
        .find(itemWrapper)
        .addClass('scalerow-item-wrapper')
        .each(function() {
          var itemObjWrapper = jQuery(this);
          var itemObj = itemObjWrapper.find(item);
          itemObj.addClass('scalerow-item');
          if (totalWidth > maxWidth) {
            self.ScaleRow_CalcRow(self, itemWrapper, item, totalWidth, maxWidth, totalHeight);
            totalHeight = 0;
            totalWidth = 0;
          }
          totalWidth += parseInt(itemObj.attr("width"));
          totalHeight = Math.max(totalHeight, parseInt(itemObj.attr("height")));
          itemObjWrapper.addClass('scalerow-checked');
        })
        self.ScaleRow_CalcRow(self, itemWrapper, item, totalWidth, totalWidth, totalHeight);
    });
};

jQuery.fn.ScaleRow_CalcRow = function(self, itemWrapper, item, totalWidth, maxWidth, totalHeight) {
  var scale = maxWidth / totalWidth;
  var leftVal = 0;
  var maxHeight = totalHeight * scale;
  rowItems = self.find('.scalerow-checked');
  console.log(rowItems.length, totalWidth, maxWidth, scale);
  rowItems
    .each(function() {
      var itemObj = jQuery(this).find(item);
      var w = parseInt(itemObj.attr("width"));
      var h = parseInt(itemObj.attr("height"));
      jQuery(this)
        .css({
          top: (maxHeight - h) * 0.5,
          left: leftVal,
          width: w * scale, 
          height: h * scale
        })
        .find(item)
        .removeAttr('height')
        .removeAttr('width')
        .css({margin: 10, width: w * scale - 20});
      leftVal += w * scale;
    });
  rowItems
    .removeClass('scalerow-checked')
    .wrapAll('<div class="scalerow-wrapper" />')
    .parent()
    .height(totalHeight * scale);
  return jQuery(this);
};
