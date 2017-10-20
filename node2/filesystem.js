var fs = require("fs");

var readMe = fs.readFileSync('readMe.txt',"utf8");
//console.log(readMe);

// fs.writeFileSync("writeMe.txt","Hello world");

// // 异步 读取 & 写入
// fs.readFile("readMe.txt","utf8",function(err,data){
// 	if(err)throw err;

// 	console.log(data);
// });

// console.log(123);
// fs.writeFile("writeMe.txt","Hello Everyone",function(err,data){
// 	if(err) throw err;
// 	console.log(data);
// });

// 异步读取文件readMe.txt
// 并将读取的文件写入到writeMe.tex中
// fs.readFile("readMe.txt","utf8",function(err,data){
// 	if(err) throw err;
// 	fs.writeFile("writeMe.txt",data);
// });

// fs.unlink("writeMe.txt",function(err,result){
//  	if(err)throw err;
//  	console.log(result)
// };
//创建文件夹
fs.mkdir("stuff",function(){

});
// 删除文件夹
fs.rmdir("stuff");