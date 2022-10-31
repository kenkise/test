


// const http=require("http");
// const app=http.createServer((req, res) => {
//     res.writeHead(200,{"content-type": "text/html;charset=utf-8"});
//     // console.log(req.url);   //显示邀请的网址
//     if(req.url==="/"){
//         res.end("여기는 홈페지이");
//     }else if(req.url==="/login") {
//         res.end("여기는 로그인 서버입니다");
//     }
// });

// app.listen(3001,()=>{
//     console.log("http로 가동된 서버입니다.");

// });


//모듈
const express= require("express");
const bodyParser=require("body-parser");
const app = express();


//라우팅
const home =require("./src/routes/home");

//앱세팅
app.set("views","./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`))
app.use(bodyParser.json());
 
app.use(bodyParser.urlencoded({extended:true}));//解决空白问题，和出现乱码问题


app.use("/",home);//미들 웨어를 등록해주는 메소드
 
module.exports = app;




