startFilter=document.getElementById("start-filter");
endFilter=document.getElementById("end-filter");
startThumb=document.getElementById("start-thumb");
endThumb=document.getElementById("end-thumb");
backgroundLeft=document.getElementById("background-left");
backgroundRight=document.getElementById("background-right");
endThumb=document.getElementById("end-thumb");

range=document.getElementById("range");
startFilter.addEventListener("input",ev=>{
  value=Math.max(0,Math.min(ev.target.value,endFilter.value));
  ev.target.value=value;
  range.style.left=value+'%';
  startThumb.style.left=value+'%';
},true)
endFilter.addEventListener("input",ev=>{
  value=Math.min(100,Math.max(ev.target.value,startFilter.value));
  ev.target.value=value;
  console.log(ev.target.value);
  range.style.right=100-value+'%';
  endThumb.style.right=100-value+'%';
},true)