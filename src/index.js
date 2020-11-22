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

// const val5 = ["dog", "cat"];
// val5[0] = "bard";
// val5.push("monkey");
// console.log(val5);

// const name = "ttt";
// const age = 24;

// const message = `名前は${name}。${age}歳です。`;
// console.log(message);

// アロー関数
//従来の関数
// function func1(str){
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

//アロー
// const func2 = (str) => str;
// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(func3(10, 20));
// const func3 = (num1, num2) => num1 + num2;

// console.log(func3(10, 20));

//分割代入
// const myProf = {
//   name: 'ttt',
//   age: 24,
// };

// const message = `名前は${myProf.name}です。年齢は${myProf.age}です。`;
// console.log(message);

// const {name, age} = myProf;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);

const myProf = ["ttt", 24];
// const message3 = `名前は${myProf[0]}、年齢は${myProf[1]}`;
// console.log(message3);

// const [name, age] = myProf;
// const message3 = `名前は${name}、年齢は${age}`;

// console.log(message3);

//デフォルト値
// const sayHello = (name = "default") => console.log(`こんにちは${name}さん!!`);
// sayHello("ttt");

//スプレッド構文
//配列の展開
// const arr1= [1, 2];
// console.log(arr1);

// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

//まとめる
// const arr2 = [1,2,3,4,5];
// const [num1,num2,...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);
// console.log(...arr7);

// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr4);
// console.log(arr8);
//イコールで配列をコピーするともとの配列もコピーされてしまう
