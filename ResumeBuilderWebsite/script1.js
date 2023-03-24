//alert("loading");
function AddNewWEField(){
    // console.log("Adding new Field");
    let newnode=document.createElement("textarea");
    newnode.classList.add('form-control');
    newnode.classList.add('weField');
    newnode.classList.add("mt-2")

    newnode.setAttribute("row",3);
    newnode.setAttribute('placeholder','Enter here');
    let weOb=document.getElementById("we");
    let weAddButtonOb=document.getElementById("weAddButton");
    weOb.insertBefore(newnode,weAddButtonOb);

}
function addNewAQField()
{
    let newnode=document.createElement("textarea");
    newnode.classList.add('form-control');
    newnode.classList.add('aqField');
    newnode.classList.add("mt-2")

    newnode.setAttribute("row",3);
    newnode.setAttribute('placeholder','Enter here');
    let aqOb=document.getElementById("aq");
    let aqAddButtonOb=document.getElementById("aqAddButton");
    aqOb.insertBefore(newnode,aqAddButtonOb);
}
//generating cv
function generateCV()
{
   console.log("Hello World");
    let nameField=document.getElementById("nameField").value;
    let nameT1=document.getElementById("nameT1")
    nameT1.innerHTML=nameField;

    //direct 
    document.getElementById("nameT2").innerHTML=nameField;
    //contact
    document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;
    //address
    document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;
    document.getElementById("fbT").innerHTML=document.getElementById("fbField").value;
    document.getElementById("instaT").innerHTML=document.getElementById("instaField").value;
    document.getElementById("LinkT").innerHTML=document.getElementById("linkedField").value;

//objective
document.getElementById('ObjectiveT').innerHTML=document.getElementById('ObjectiveField').value;


//workExprience
let wes=document.getElementsByClassName("weField");
let str='';
for(let e of wes)
{
    str=str+`<li>${e.value}</li>`;
}

document.getElementById("weT").innerHTML=str;

//for academic qulification 
let aqs=document.getElementsByClassName('aqField')
let str1=''
for(let e of aqs)
{
    str1+=`<li>${e.value}</li>`;
}
document.getElementById('aqT').innerHTML=str1;
//code for setting image
let file=document.getElementById('imgField').files[0]
console.log(file);
let reader=new FileReader()
reader.readAsDataURL(file);
console.log(reader.result);
//set the img to templete
reader.onload=function()
{
document.getElementById('imgTemplate').src=reader.result;
};
document.getElementById('cv-form').style.display='none'
document.getElementById('cv-template').style.display="block";

}
//print cv
function printCV()
{
    window.print();
}












