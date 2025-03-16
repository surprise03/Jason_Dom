function addData(){
  var name= document.getElementById("name");
  var state=document.getElementById("state")
  var city=document.getElementById("city")
  var email=document.getElementById("email")
  var phone=document.getElementById("phone")
  getData(name,state,city,email,phone)

}
function getData(name,state,city,email,phone){
 if (name.value=="" || state.value==""||city.value==""||email.value==""||phone.value==""){
  alert("fill the data ")
 }else{
  var url="https://grandiose-shrub-peanut.glitch.me/users"
 var option={
    "method":"POST",
    "headers":{
      "Content-Type":"application/json"
    
    },
    "body":JSON.stringify({
      "name": name.value,
      "state":state.value,
      "city": city.value,
      "email":email.value,
      "phone":phone.value
    })
 }
 fetch(url,option)
    .then(res=>{
      if (res.ok)
          alert("Data added successfully")
          displayData();
          name.value=""
          state.value=""
          city.value =""
          email.value=""
          phone.value=""
    })
    .catch(err=>{
      alert("something went wrong")
      console.log(err)
    })
 }

}


function displayData(){
  var container=document.getElementById("container2")
  fetch("https://grandiose-shrub-peanut.glitch.me/users")
      .then(respose=>respose.json())
      .then(data=>{
         for (var obj of data){
          var item= document.createElement("div");
          item.className="item";
          var para1=document.createElement("p");
          var para2=document.createElement("p");
          var para3=document.createElement("p")
          var para4=document.createElement("p")
          var para5=document.createElement("p")
            var{name,state,city,email,phone}=obj;
            para1.innerText=name;
            para2.innerText=state;
            para3.innerText=city
            para4.innerText=email;
            para5.innerText=phone

           


            // adding connection to add data 
            item.appendChild(para1);
            item.appendChild(para5)
            item.appendChild(para4)
            item.appendChild(para3)
            item.appendChild(para2)
            
            
            
           

            container.appendChild(item)
           
         }
})
}

displayData();