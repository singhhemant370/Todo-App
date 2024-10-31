 let form = document.querySelector("form");

form.addEventListener("submit", function(event){
    event.preventDefault();
    let inp = document.querySelector("input");
    let ul = document.querySelector("ul");
    let li = document.createElement("li");
    li.innerText = inp.value;
    let btn = document.createElement("button");
    btn.innerText = "Delete";
    btn.classList.add("delete");

    ul.appendChild(li);
    li.appendChild(btn);
    inp.value="";
    
    console.dir(ul.children);
});

let delbtns = document.querySelectorAll(".delete");

// for(delbtn of delbtns){
//     delbtn.addEventListener("click", function(){
//         let listItem = delbtn.parentElement;
//         listItem.remove();
//     });
// }

let ulList = document.querySelector("ul");

ulList.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
        event.target.parentElement.remove();;
        console.log("item deteted..");
    }
    // console.log(event);
});


