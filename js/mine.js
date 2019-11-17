//
//
//
//
//
//var data;
//
//
//var req =new XMLHttpRequest();
//req.open("Get","https://jsonplaceholder.typicode.com/posts");
//
//req.onreadystatechange=function(){
//    if( req.status==200 && req.readyState==4 )
//     {
//         
//         data=JSON.parse(req.response);
//         // فكرتها هنا ليه 
//         //علشان البرامجه شغاله طبيعى  اسيركرونسيز 
//         //بمعنى الكود لا  يتنفد تدريجى 
//         display()
//         
//     }
//    
//    
//}
//
//req.send();
//
//
//function display(){
//     var temp="";
//    for(var i=0;i<data.length;i++){
//        temp+= `<div class="col-md-3" >
//            <h5>`+data[i].title+`</h5>
//            <p>`+data[i].body+`</p> 
//         </div>`
//        
//    }
//    
//    
//   document.getElementById("myrow").innerHTML=temp; 
//    
//    
//}
//
//
//
//
//
//
//
//
//
//

var links = document.getElementsByClassName("nav-link");
var sel =document.getElementById("sel");
var input=document.getElementById("inp");
var data;
var country='eg';
var category='general';
var term;
for(var i=0;i<links.length;i++){
    
    links[i].addEventListener("click",function(e){   
        category=  e.target.innerHTML
        getdata()       
    }) 

}

  sel.onchange=function(){ 
        country= sel.value;
        getdata() 
}

input.addEventListener("keyup",function(){
       term=input.value
       search();

    
    
})
 
  
  
getdata();
function getdata(){
    var url=`https://newsapi.org/v2/top-headlines?country=`+country+`&category=`+category+`&apiKey=f35b1830943f4b66a06be6208494b663`;
    var req;
    if (window.XMLHttpRequest) {
     // code for modern browsers
    req=new XMLHttpRequest();
 } else {
    // code for old IE browsers ie5/ie6
    req = new ActiveXObject("Microsoft.XMLHTTP");
}
    
    
    
     req.open("Get",url)
     req.onreadystatechange=function(){
    if(req.status==200 && req.readyState==4){
        data=JSON.parse(req.response);
        // كده عملت اوفر رايد ع نيوز  القديمه بنيوز جديده 
        data=data.articles;
    } 
        dis();
}
     req.send();
}









 
function dis(){
    var  temp="";
    for(var i=0 ;i<data.length;i++){
        temp+= `<div class="col-md-3" >

                      
 <a href="`+data[i].url+`"  target="_blank"> <img src="`+data[i].urlToImage+`" class="img-fluid"/></a>
                <h5>`+data[i].title+`</h5>
                <p>`+data[i].description+`</p> 
                </div>`
    }
    document.getElementById("myrow").innerHTML=temp;
    
}

function search(){
     var url=`https://newsapi.org/v2/everything?q=`+term+`&from=2019-09-28&sortBy=publishedAt&apiKey=f35b1830943f4b66a06be6208494b663
`
    var req;
    if (window.XMLHttpRequest) {
     // code for modern browsers
    req=new XMLHttpRequest();
 } else {
    // code for old IE browsers ie5/ie6
    req = new ActiveXObject("Microsoft.XMLHTTP");
}
    
    
    
     req.open("Get",url)
     req.onreadystatechange=function(){
    if(req.status==200 && req.readyState==4){
        data=JSON.parse(req.response);
        // كده عملت اوفر رايد ع نيوز  القديمه بنيوز جديده 
        data=data.articles;
    } 
        dis();
}
     req.send();
}

    
    
    
    













