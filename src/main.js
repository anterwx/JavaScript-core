/**
 * Created by Administrator on 2016/11/8.
 */
console.log('---------------------Class 继承扩展-----------------------');
function Student(x,y){
    this.x = x;
    this.y = y;
}
Student.prototype.toString = function(){
    console.log(this.x + " " + this.y);
};
Student.prototype.excute = function(){
    console.log('总数：2');
};

var s = new Student(1,2);
s.toString();
s.excute();

console.log('---------------------function作用域-----------------------');

var teacher = function(name){
    this.name = name;
    var teacherSomeThing = function(name){
        console.log(this.name + " and  "+ name);
    };
    return function(name){
        teacherSomeThing(name);
    }
};

var wx = teacher('wx');
    wx('hh');
teacher('yy')('pm');

console.log('--------------------Object作用域------------------------');

function master(name){
    var master = {};
    master.name = name;
    master.teacherSomeThing = function(name){
        console.log("Who is Teachering something for "+name+".");
    }
    return master;
};
master().teacherSomeThing('yf');

console.log('--------------------setTimeout-事件作用域-----------------------');

for(var i=0;i<5;i++){
    setTimeout(function(){
        console.log(i);
    },0)
}

console.log('---------------------可立即执行函数-----------------------');

for(var i=0;i<5;i++){
    (function(){
        console.log(i);
    })(this.i);
}
console.log('--------------------call()------------------------');

for(var i = 0;i<5;i++){
    (function(){
        console.log(i+' ' +arguments.length+ ' ' + arguments[0]);
    }).call(this.i,'someArgs1','someArgs2');
}

console.log('--------------------apply()----------------------');

for(var i = 0;i<5;i++){
    (function(){
        console.log(i+' ' +arguments.length+ ' ' + arguments[1]);
    }).apply(this.i,['someArgs1','someArgs2']);
}


console.log('--------------------函数绑定立即执行----------------------');

var lis = document.querySelectorAll('li');
var li_click = function(i){
    console.log("bind :" + i)
};
for(var i = 0;i<lis.length;i++){
   lis[i].addEventListener('click',li_click(i),false);
}

console.log('--------------------bind()不调用函数----------------------');
var li_click1 = function(i){
    console.log("bind :" + i);
};
for(var i=0;i<lis.length;i++){
    lis[i].addEventListener('click',li_click1.bind(this,i),false);
}


