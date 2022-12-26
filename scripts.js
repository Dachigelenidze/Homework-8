// XMLHttpRequest

function Users(){
let requist = new XMLHttpRequest();
requist.addEventListener('load', function(){
    let Mosuli = this.responseText
    let MosuliJS =JSON.parse(Mosuli)
    console.log(MosuliJS);
    let ul = document.createElement('ul')
    MosuliJS.data.forEach(element => {
        let li =document.createElement('li');
        let p = document.createElement('p');
        p.textContent = `${element.first_name} ${element.last_name}`;
        let img = document.createElement('img');
        img.setAttribute('src', element.avatar);
        li.appendChild(p);
        li.appendChild(img);
        ul.appendChild(li);
    });
    document.getElementById('users').appendChild(ul)
})



  requist.addEventListener("error", function () {
    let p = document.createElement('p');
    p.textContent = 'Server Error'
    p.style.fontSize = '50px'

    document.getElementById('users').appendChild(p);
  });




requist.open('GET', 'https://reqres.in/api/users?page=2');
requist.send();
}
                                   
Users();

//Fetch
fetch('https://reqres.in/api/unknown',{
    method:"GET",
})
.then(function(MosuliJS){
    if (MosuliJS.status !== 200) {
        throw MosuliJS.status;
      }
    return MosuliJS.json()
})
.then(function(MosuliJS){

    let ul = document.createElement('ul')
    MosuliJS.data.forEach(element => {
        let li =document.createElement('li');
        let p = document.createElement('p');
        p.style.fontSize= '50px'
        p.style.margin = '60px auto'
        let feri = element.color;
        li.style.color = feri;

        p.textContent = `${element.name} `;
        li.appendChild(p);
        ul.appendChild(li);
    });
    document.getElementById('users').appendChild(ul)
    console.log(MosuliJS);
})

.catch(function(Error){
    if (Error == 404) {
        let p = document.createElement("p");
        p.textContent = 'Server Error' ;

        document.getElementById("users").appendChild(p);
      }
    
})