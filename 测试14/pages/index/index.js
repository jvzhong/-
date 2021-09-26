// index.js
var start,end,eend,sum;
Page({
  startNum:function(e){
    start=parseInt(e.detail.value);
  },
  endNum:function(e){
    end=parseFloat(e.detail.value);
  },
  eendNum:function(e){
    eend=parseInt(e.detail.value);
  },
  calc:function(){
    sum=0;
    for(var i=1;i<=eend;i++){
      start += start * end;
    }
    this.setData({
      sum:start
    })
  }
})