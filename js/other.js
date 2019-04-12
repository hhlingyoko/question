// typeof 
// {} [] null --> object 
var arr = [1,2,3]
Object.prototype.toString.call(null)
Object.prototype.toString.call(arr)

//  加法运算会触发三种类型转换：将值转换为原始值，转换为数字，转换为字符串。
// 1 + '1' -> 11 ; 1 - '1' -> 0 ;  1 * 1 -> 1 

// 原型 原型链
// 每个函数都有 prototype 属性
// 每个对象都有 __proto__ 属性，指向了创建该对象的构造函数的原型。
// https://github.com/KieSun/Dream/issues/2

// 闭包
// 循环中使用闭包解决 var 定义函数的问题
// 第一种使用闭包
for (var i = 1; i <= 5; i++) {
  (function (i){ setTimeout((function timer() {
    console.log(i);
  }), i * 1000);})(i)
}
// 第二种，使用 setTimeout 的第三个参数， IE9 及其更早版本不支持该参数
for (var i = 1; i <= 5; i++) {
  setTimeout((function timer() {
    console.log(i);
  }), i * 1000, i);(i)
}

// 第三种就是使用 let 定义 i 了
for ( let i=1; i<=5; i++) {
	setTimeout( function timer() {
		console.log( i );
	}, i*1000 );
}

// 深浅拷贝
// 浅拷贝 Object.assign
// 深拷贝

