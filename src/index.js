// const, let等の変数宣言
// let val1 = 'let変数'
// console.log(val1);

// val1 = 'let変数を上書き';
// console.log(val1);

//letは再宣言不可能
// let val1 = 'let変数を再宣言';

// const val2 = 'const変数';
// console.log(val2);

// val2 = 'const変数を上書き'

// const val2 = 'constを再宣言';
// console.log(val2);

//constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: 'aaa',
//   age: '28',
// }
// console.log(val4);

// val4.name = 'jakee';
// val4.address = 'hiroshima';
// console.log(val4);

const val5 = ["dog", "cat"];
val5[0] = "bard";
val5.push("monkey");
console.log(val5);
