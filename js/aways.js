// 观察者模式 & 发布订阅模式
// 观察者模式
function Subject(){
  this.observers = [];
}
Subject.prototype = {
  add:function(observer){
    this.observers.push(observer)
  },
  remove: function(observer){
    var observers = this.observers;
    for(var i = 0; i <= observers.length; i++){
      if(observers[i] === observer){
        observers.splice(i)
      }
    }
  },
  notify:  function(observer) {
    var observers = this.observers;
    for(var i = 0; i < observers.length; i++) {
      observers[i].update();
    }
  }
}

function Observer(name) {
  this.name = name; 
}
Observer.prototype = {
  update: function(){
    console.log('my name is ' + this.name);
  }
}

var sub = new Subject();

var ob1 = new Observer('kiki');
var ob2 = new Observer('kaka');

sub.add(ob1);
sub.add(ob2);
sub.notify();


// 发布订阅模式

// 防抖 && 节流  :防抖动是将多次执行变为最后一次执行，节流是将多次执行变成每隔一段时间执行。
// 防抖（debounce）：触发高频事件 后 n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间
// 【思路】每次触发事件时都取消之前的延时调用方法
function debounce(fn) {
  var  timeout = null;
  return function() {
    clearTimeout(timeout);
    timeout = setTimeout(function(){
      fn.apply(this, arguments);
    },500)
  }
}

function print(){
  console.log('防抖')
}

// var inp = document.getElementById('inp');
// inp.addEventListener('input', debounce(print))

 
// 节流（throttle）： 高频事件触发，但在n秒内只会执行一次，所以节流会稀释函数的执行频率
// 【思路】每次触发事件时都判断当前是否有等待执行的延时函数

function throttle(fn) {
  let canRun = true; 
  return function() {
    if(!canRun) return;  // 在函数开头判断标记是否为true，不为true则retur
    canRun = false; 
    setTimeout(function(){
      fn.apply(this, arguments);
      canRun = true; 
    },500)
  }
}

function sayHi(e) {
  // console.log(e.target.innerWidth, e.target.innerHeight);
}
// window.addEventListener('resize', throttle(sayHi));


// css  通过 sass 的 Stylelint 约束css

// 函数实现new操作
// new的作用 
// new 通过构造函数 Test 创建出来的实例可以访问到构造函数中的属性
// new 通过构造函数 Test 创建出来的实例可以访问到构造函数原型链中的属性，也就是说通过 new 操作符，实例与构造函数通过原型链连接了起来 
function create(Con, ...args) {
  let obj = {};
  Object.setPrototypeOf(obj, Con.prototype);
  let result = Con.apply(obj, args);
  return result instanceof Object? result : obj //判断构造函数返回值是否为对象，如果为对象就使用构造函数返回的值，否则使用 obj，这样就实现了忽略构造函数返回的原始值
}

// 使用
function Test(name, age) {
  this.name = name;
  this.age = age;
};
Test.prototype.printName = function () {
  // console.log(this.name, 'name');
} 
var s = create(Test, 'yoko', 25);
// console.log(s.name);
// console.log(s.age);
s.printName();

// 判断是否是数组
var  arr = ['a','b'];
var bArr = Array.isArray(arr); // ES5新增的方法
var bArr2 = Object.prototype.toString.call(arr); // 当不存在 Array.isArray() ，可以用这种方法
// console.log(bArr, bArr2)

// 重绘和回流（Repaint & Reflow）: 

// 跨域
// 同源： 协议相同 & 域名相同 & 端口相同
// 什么地方有要求同源: Ajax 通信 / Cookie / LocalStorage / IndexDB /DOM 的操作

// 1. JSONP: 动态创建<script>标签向服务器发送 GET 请求
// 创建script标签
function addScript (src) {
  var script = document.createElement('script');
  script.setAttribute('type', 'text/javascript');
  script.src = src;
  document.body.appendChild(script)
}
//当浏览器加载完毕时向服务器发送请求
// window.onload = function(){
//   addScript('http://domain.com/data?callback=getdata')
// }

// 2. document.domain（iframe） 3.nginx 反向代理

// this指向问题  
// 关键：this永远指向最后调用它的那个对象 
var name = 'yoko';
function print(name) {
 var innerName = 'yokoinner'
 console.log(this.name)
 console.log(this,'this')
};
print(); 
console.log(this,'this')
// --> yoko window window







