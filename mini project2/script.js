const quote=document.getElementById("quote");

const author=document.getElementById("author");

async function loadQuote(){

const res=await fetch("/quote");

const data=await res.json();

quote.innerText=data.text;

author.innerText="- "+data.author;

}

loadQuote();

document.getElementById("quoteForm")

.addEventListener("submit",async function(e){

e.preventDefault();

const authorInput=document.getElementById("authorInput").value;

const quoteInput=document.getElementById("quoteInput").value;

if(authorInput==""||quoteInput==""){

alert("Please fill all fields");

return;

}

const res=await fetch("/quote",{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

author:authorInput,

text:quoteInput

})

});

const data=await res.json();

alert(data.message);

this.reset();

});