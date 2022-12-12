let namechange=document.getElementById("nickname");
let printname=document.getElementById("username");
let psdchange=document.getElementById("password");
let isrepeatpsd=document.getElementById("repeatpsd");
let isclick=document.getElementById("protocal");
let warnmsg=document.getElementById("errormsg");
let name1=document.getElementById("nickname");
let psd=document.getElementById("password");
let repeatpsd=document.getElementById("repeatpsd");
let click=document.getElementById("protocal");
let msg="请输入用户名";
document.getElementById("submit").setAttribute('disabled','true');
warnmsg.innerHTML=msg;

let attribute = function(name1,name1ill, psd, repeatpsd, click){
        this.name1=name1;
        this.name1ill=name1ill;
        this.psd=psd;
        this.repeatpsd=repeatpsd;
        this.click=click; 
}
let sit=new attribute(0,0,0,0,0,0)    
namechange.oninput=()=>{
    printname.value=name1.value+"@stu.xmut.edu.cn";
    if(!(/^\w+$/.test(name1.value))){
        printname.value="";
        sit.name1ill=0;
    }
    else{
        sit.name1ill=1;
    }
    if(name1.value==""){
        sit.name1=0;
    }
    else{
        sit.name1=1; 
    }
    checksit(sit);
}
psdchange.oninput=()=>{
    if(psd.value==""){
        sit.psd=0;
    }
    else{
        sit.psd=1;
    }
    isrepeatpsd.oninput();
    checksit(sit);
}
isrepeatpsd.oninput=()=>{
    if(psd.value==repeatpsd.value){
        sit.repeatpsd=1;
        repeatpsd.setAttribute('style','border-color: rgb(206, 212, 218);');
    }
    else{
        sit.repeatpsd=0;
        repeatpsd.setAttribute('style','border-color: red;')
    }
    checksit(sit);  
}
isclick.onclick=()=>{
    if(document.getElementById("protocal").checked){
        sit.click=1;
    }
    else{
        sit.click=0;
    }
    checksit(sit);  
}

let checksit=(sit)=>{
    if(sit.name1==0){
        msg="请输入用户名";
    }
    else if(sit.name1ill==0){
        msg="用户名只能包含数字，字母和下划线";
    }
    else if(sit.psd==0){
        msg="请输入密码";
    }
    else if(sit.repeatpsd==0){
        msg="两次输入的密码不匹配";
    }
    else if(sit.click==0){
        msg="请勾选用户协议";
    }
    else{
        msg="";
    }
    warnmsg.innerHTML=msg;
    if(sit.click&&sit.name1&&sit.name1ill&&sit.psd&&sit.repeatpsd){
        document.getElementById("submit").removeAttribute('disabled');
    }
    else{
        document.getElementById("submit").setAttribute('disabled','true');
    }
}

