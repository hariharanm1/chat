function sendsms(){
    value1=document.getElementById("i1").value;
    value2=document.getElementById("i2").value;
    element=document.createElement("ol");
    if(value1!=""){
        text=document.createTextNode(value1);
        element.appendChild(text);
        mydiv=document.getElementById("mydiv");
        mydiv.appendChild(element);
        element.style.color="#f80894";
        element.style.fontsize="1px";
        document.getElementById("i1").value="";
    }
    else if(value2!=""){
        text1=document.createTextNode(value2);
        element.appendChild(text1);
        mydiv=document.getElementById("mydiv");
        mydiv.appendChild(element);
        element.style.color="black";
        document.getElementById("i2").value="";
    }
}