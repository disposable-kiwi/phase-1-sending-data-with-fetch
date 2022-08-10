const { bodyParser } = require("json-server");

// Add your code here
function submitData(obj){
    return fetch("http://localhost:3000/users",{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'Accept':'application/json'
        },
        body: JSON.stringify({
            name:"Steve",
            email:"steve@steve.com",
        })
    })
        .then(res => res.json())
            .then((data) =>{ 
                let child = document.createElement('h1');
                child.textContent = `${data.id}`;
                document.querySelector("#append-place").appendChild(child);
            })
                .catch((error)=>{
                    let errorMessage = document.createElement('h1');
                    errorMessage.textContent = `${error.message}`;
                    document.querySelector("#append-place").appendChild(errorMessage);
                });
}