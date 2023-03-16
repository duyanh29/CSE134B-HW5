let responseType = "";

function methodSelector(){
  document.getElementsByName('typeSelected').forEach((ways) => {
    if(ways.checked){
      responseType = ways.value;
    }
  })
}

let result = document.getElementById('response');
let articleId = document.getElementById('id');
let articleName = document.getElementById('article_name');
let articleBody = document.getElementById('article_body');

let postBtn = document.getElementById('post');
function postFunct(){
  event.preventDefault();
  methodSelector();
  if(responseType == "xml"){
    let xmlRequest = new XMLHttpRequest();
    xmlRequest.open("POST", "https://httpbin.org/post", false);
    xmlRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 

    xmlRequest.send(`id=${articleId.value} & time=${new Date()}` + 
                    `& title=${articleName.value} & article_body=${articleBody.value}`);

    if (xmlRequest.readyState == 4 && xmlRequest.status == 200) {
      result.innerHTML=xmlRequest.responseText;
    }   
  } 
  else if(responseType == "fetch"){
    fetch("https://httpbin.org/post", {
      method: 'post',
      hearder:{'Content-type': 'application/json; charset=UTF-8'},
      body: JSON.stringify({
        article_body: articleBody.value,
          id: articleId.value,
          time: new Date(),
          title: articleName.value
      })
    })
    .then((response) => response.json())
    .then((data) =>  result.innerText = JSON.stringify(data) );
  } 

}
postBtn.addEventListener('click', postFunct);

let getBtn = document.getElementById('get');
function getFunct(){
  event.preventDefault();
  methodSelector()
  if(responseType == "xml"){
    let xmlRequest = new XMLHttpRequest();
    xmlRequest.open("GET", "https://httpbin.org/get", false);
    xmlRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
    xmlRequest.send();
    if (xmlRequest.readyState == 4 && xmlRequest.status == 200) {
      result.innerHTML=xmlRequest.responseText;
    }
  }
    else if(responseType == "fetch"){
        fetch("https://httpbin.org/get")
        .then((response) => response.json())
        .then((data) =>  result.innerHTML = JSON.stringify(data))
    }
    
}
getBtn.addEventListener('click', getFunct);

let putBtn = document.getElementById('put');
function putFunct(){
  event.preventDefault();

    methodSelector();
    if(responseType == "xml"){
      let xmlRequest = new XMLHttpRequest();
      xmlRequest.open("PUT", "https://httpbin.org/put", false);
      xmlRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 

      xmlRequest.send(`id=${articleId.value} & time=${new Date()}` + 
                      `& title=${articleName.value} & article_body=${articleBody.value}`);

      if (xmlRequest.readyState == 4 && xmlRequest.status == 200) {
        result.innerHTML=xmlRequest.responseText;
      }
    }
    else if(responseType == "fetch"){
      fetch("https://httpbin.org/put", {
        method: 'put',
        hearder:{'Content-type': 'application/json; charset=UTF-8'},
        body: JSON.stringify({
          article_body: articleBody.value,

            id: articleId.value,
            time: new Date(),
            title: articleName.value
        })
      })
      .then((response) => response.json())
      .then((data) =>  result.innerHTML = JSON.stringify(data));
    }
     
}
putBtn.addEventListener('click', putFunct);

let deleteBtn = document.getElementById('delete');
function deleteFunct(){
  event.preventDefault();

  methodSelector();
  if(responseType == "xml"){
    let xmlRequest = new XMLHttpRequest();
    xmlRequest.open("DELETE", "https://httpbin.org/delete", false);
    xmlRequest.send();
    if (xmlRequest.readyState == 4 && xmlRequest.status == 200) {
      result.innerHTML=xmlRequest.responseText;
    }
  }
  else if(responseType == "fetch"){
    fetch("https://httpbin.org/delete", {
        method: "delete",
      })
      .then((response) => response.json())
      .then((data) =>  result.innerHTML = JSON.stringify(data));
    }
     
}
deleteBtn.addEventListener('click', deleteFunct);
