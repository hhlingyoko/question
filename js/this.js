
  // 参考地址：https://juejin.im/post/59bfe84351882531b730bac2 
  // this 永远指向最后调用它的那个对象
  // 举例1
  var name = "windowsName";
  function a() {
      var name = "Cherry";
      console.log(this);
      console.log(this.name);          // windowsName

      console.log("inner:" + this);    // inner: Window
  }
  a();
  console.log("outer:" + this)         // outer: Window

  // 举例2
  var name = "windowsName";
  var a = {
    name: "Cherry",
    fn: function() {
      console.log(this.name);
    }
  }
  window.a.fn(); 
  //--> window.a.fin() 和 a.fn() 打印的值都是 Cherry

  // 举例3
  var name = "windowsName";
  var a = {
    // name: "Cherry",
    fn: function() {
      console.log(this.name, 3);
    }
  }
  window.a.fn(); 
  // --> undefined
  var name = "windowsName";
  var a = {
      name : null,
      // name: "Cherry",
      fn : function () {
          console.log(this.name);      
      }
  }

  var f = a.fn; // 这里赋值没有被调用
  f();  // 这里被调用了，验证了 this 永远指向最后调用它的那个对象
  // --> windowsName
  
  // 例子
  var name = "windowsName";
  function fn() {
    var name = 'Cherry';
    innerFunction();
    function innerFunction() {
        console.log(this.name);      
    }
  }
  fn()
  console.log('--------------------')
  // --> windowsName
  // 改变this指向的几种方式
  // 使用 ES6 的箭头函数
  // 在函数内部使用 _this = this
  // 使用 apply、call、bind
  // new 实例化一个对象
 // _this = this
  var wN = 'joke';
  var a = {
    name: 'innerName',
    func1:function() {
      console.log(this.name)
    },
    func2: function() {
      var _this = this; // 指向a
      setTimeout( function() {
        _this.func1()
       },100);
    }
  }
  a.func2()
  // apply call  bind
  // apply() 方法调用一个函数, 其具有一个指定的this值，以及作为一个数组（或类似数组的对象）提供的参数 
  // bind() 方法创建一个新的函数, 当被调用时，将其this关键字设置为提供的值，在调用新函数时，在任何提供之前提供一个给定的参数序列。
  // apply: fun.apply(thisArg, [argsArray])
  // call:  fun.call(thisArg[, arg1[, arg2[, ...]]])
  // 区别： call 方法接受的是若干个参数列表，而 apply 接收的是一个包含多个参数的数组。bind 是创建一个新的函数，我们必须要手动去调用。
  var wN = 'joke';
  var a = {
    name: 'innerName',
    func1:function() {
      console.log(this.name)
    },
    func2: function() {
      setTimeout( function() {
        this.func1()
       }.bind(a)(),100); // call(a)  bind(a)() 需手动调用
    }
  }
  a.func2()

// 函数调用的方法一共有 4 种
//   作为一个函数调用
//   函数作为方法调用
//   使用构造函数调用函数
//   作为函数方法调用函数（call、apply）


// new 的过程 
// 1.创建一个空对象 obj;
// 2.将新创建的空对象的隐式原型指向其构造函数的显示原型。
// 3.使用 call 改变 this 的指向
// 4.如果无返回值或者返回一个非对象值，则将 obj 返回作为新对象；如果返回值是一个新对象的话那么直接直接返回该对象。
/**
 * @param Con { function } 构造函数
 * @param args { string } 参数
 */
function create(Con, ...args) {
  let obj = {};
  Object.setPrototypeOf(obj, Con.prototype); // setPrototypeOf: 设置一个指定的对象的原型
  let result = Con.call(obj, args);
  return result instanceof Object? result : obj 
}
