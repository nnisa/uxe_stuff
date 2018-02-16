var create = function (id) {
    var item = document.createElement('div');
    $(item).addClass('item')
      .attr('id', 'item-' + id)
      .text(id)
      .css({top: id * 70});
    return item;
  },

    remove = function (id) {
      $('#item-' + id).remove();
    },


    update = function (container, from, to, isDown) {
      // console.log('update');
      if (isDown) {
        remove(from);
     container.append(create(to+1));
      } else {
        remove(to);
        container.append(create(from-1));
      }
    };




$(document).ready(function () {
  var i, 
      from = 0, 
      to = 9,
      height = $('.container').outerHeight(true),
      itemH, top, bottom, scroll;
  
  //10 items are being created
  for (i = 0; i < 10; i += 1) {
    $('.container').append(create(i));
  }

  itemH = $('.item').outerHeight(true); // height of each div
  top = from * itemH; // item height scroll
  bottom = (to + 1) * itemH - height; // height of all the divs created but not visible 

  $('.container').scroll(function () {
    $this = $(this); //scrolling container 
    scroll = $this.scrollTop(); // vertical position of the element 

    // console.log(scroll + '-' + top + '-' + bottom, from);
    if (scroll <= top+5 && from !== 0) {
      console.log("going up", from, to)
      update($this, from, to, false);
      from --;
      to --;
      top = from * itemH;
      bottom = (to + 1) * itemH - height;
      console.log(from, to, scroll, bottom)
    }
    if (scroll === bottom) {
      console.log("going down:", from, to, scroll, bottom)
      update($this, from, to, true);
      from ++;
      to ++;
      top = from * itemH;
      bottom = (to + 1) * itemH - height;
      console.log(from, to, scroll, bottom, top)
    }
  });
});