var x:number=4;
var y:number=9;

var employed: boolean=true;

var firstName:string='Kiran';
var lastName:string="Kumar";

var courses:string[] = ['ASP.NET CORE','ANGULAR','JAVA','PHP'];

var info:any = {address:'4567 Ameerpet', email:'kiran@gmail.com', city:'Hyderabad'};

window.onload=function(){
 var z=x+y;
 alert(z);

 for(var i:number; i < courses.length; i++)
 {
   alert(courses[i]);
 }

};