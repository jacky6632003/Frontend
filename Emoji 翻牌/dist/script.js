// 選擇相對emoji放入陣列
var answers = [
    '🧣', '🎩', '🧢', '👒', '🎓', '⛑', '👑', '👝',
    '🧣', '🎩', '🧢', '👒', '🎓', '⛑', '👑', '👝'
];

for(let i=0;i<=25;i++){
  let rand1=Math.floor(Math.random()*answers.length)
   let rand2=Math.floor(Math.random()*answers.length)
   var temp=answers[rand1];
  answers[rand1]=answers[rand2];
  answers[rand2]=temp;
}
var first;
var second;


var firstEl;
var secondEl;

var lock=true
let count=0;
let firstIndex;
let secondIndex
let c=0;
$('button').click(function () {
if(lock){
  if(first==undefined){
    first=answers[$(this).data('index')];
  $(this).text(first);
    firstEl=$(this);
    firstIndex=$(this).data('index');
  }else if (second==undefined){
    secondIndex=$(this).data('index');
    if(firstIndex==secondIndex){
      return;
    }
    second=answers[$(this).data('index')];
  $(this).text(second);
    secondEl=$(this);
    if(first!=second){
      count++;
      $('#count').text("翻開"+count+"次");
      lock=false;
      setTimeout(function(){
        
        secondEl.text("❓");
        firstEl.text("❓");
         lock=true;
      },500);

    }else{
      if(c==7){
        alert("完成")
      }else{
        c++;
      }
    }
     first=undefined;
    second=undefined;
  }
  
}
  
  

});