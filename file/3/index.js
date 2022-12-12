//--------------要求1-------------------
function oneLineStr( count, input, max_n, min_n, result ){
    return "<tr>"+"<td>"+count+"</td>"+"<td>"+input+"</td>"+"<td>"+max_n+"</td>"+"<td>"+min_n+"</td>"+"<td>"+result+"</td>"+"</tr>";
}

function bubbleSortl(a){
    var len = a.length;
    for (var i = 0; i < len - 1; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            if (a[j] > a[j+1]) {  
            var temp = a[j+1];      
            a[j+1] = a[j];
            a[j] = temp;
            }
        }
    }
    let b=a.join("");
    return parseInt(b);
}
function bubbleSorth(a){
    var len = a.length;
    for (var i = 0; i < len - 1; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            if (a[j] < a[j+1]) {  
            var temp = a[j+1];      
            a[j+1] = a[j];
            a[j] = temp;
            }
        }
    }
    let b=a.join("");
    return parseInt(b);
}
function takeApart(input,a)
{
    for(let i=0;input!=0;i++){
        a.push(input%10);
        input/=10;
        input=parseInt(input);
        }
        return a;
}
function testReq1(){
    count=1;
    let input=2143;
    b=input;
    var a = [];
    for(let i=0;input!=0;i++){
        a.push(input%10);
        input/=10;
        input=parseInt(input);
        }
    max_n=bubbleSortl(a);
    min_n=bubbleSorth(a);
    result=min_n-max_n;
    s=oneLineStr( count, b, max_n, min_n, result )+oneLineStr( count, b, max_n, min_n, result )+oneLineStr( count, b, max_n, min_n, result )+oneLineStr( count, b, max_n, min_n, result );
    req1.innerHTML=s;
}

//--------------要求2-------------------
function getDigital_s(n){
    var a=n.toString();
    var arr=a.split("");
    return arr;
}

function getDigital_d(n){
    var a=n.toString();
    var arr=a.split("");
    for(let i=0;i<arr.length;i++)
    {
        arr[i]=parseInt(arr[i]);
    }
    return arr;
}

//--------------要求3-------------------
function getDigitalMax_d(digital_list){
    b=bubbleSorth(digital_list)
    return b;
}

function getDigitalMax_s(digital_list){
    b=bubbleSorth(digital_list).toString();
    return b;
}

function getDigitalMin_d(digital_list){
    b=bubbleSortl(digital_list)
    return b;
}

function getDigitalMin_s(digital_list){
    b=bubbleSortl(digital_list).toString();
    return b;
}

//--------------要求4-------------------
function getMax_d(n){
    var a=[];
    b=bubbleSorth(takeApart(n,a));
    return b;
}
function getMax_s(n){
    var a=[];
    b=bubbleSorth(takeApart(n,a)).toString();
    return b;
}

function getMin_d(n){
    var a=[];
    b=bubbleSortl(takeApart(n,a));
    return b;
}
function getMin_s(n){
    var a=[];
    b=bubbleSortl(takeApart(n,a)).toString();
    return b;
}

//--------------要求5-------------------
onButtonClick = function(){
    count=0;
    var arr=[];
    tag = document.getElementById("input");
    var input=tag.value;
    show="";
    calculate(input,arr);
}
function calculate(input,arr){
    arr=takeApart(input,arr);
    max_n=bubbleSorth(arr);
    min_n=bubbleSortl(arr);
    result=max_n-min_n;
    if(result!=input){
        var arr=[];
        count++;
        show+=oneLineStr(count,input,max_n,min_n,result);
        input=result;
        calculate(result,arr);
    }
    output.innerHTML=show;
}
