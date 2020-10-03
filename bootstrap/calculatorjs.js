var elem=document.getElementsByTagName("td");
var f=true;
for(let i=0;i<elem.length;i++){
    elem[i].addEventListener('click',function(event){
        if(i==elem.length-1){
            document.getElementsByTagName("th")[0].innerHTML=eval(document.getElementsByTagName("th")[0].innerHTML);
        }
        else if(i==2){
            document.getElementsByTagName("th")[0].innerHTML="";
        }
        else if(i==3){
            var str=document.getElementsByTagName("th")[0].innerHTML;
            document.getElementsByTagName("th")[0].innerHTML=str.substring(0,str.length-1);
        }
        else if(i==16){
            if(f)  document.getElementsByTagName("th")[0].innerHTML="-"+document.getElementsByTagName("th")[0].innerHTML;
            else    document.getElementsByTagName("th")[0].innerHTML=document.getElementsByTagName("th")[0].innerHTML.substring(1);
            f=!f;
        }
        else{
            document.getElementsByTagName("th")[0].innerHTML+=this.innerHTML;
        }
    });
}
