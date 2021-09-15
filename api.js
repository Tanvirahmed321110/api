
function dataLoad(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((responce)=>responce.json())
    .then(data=>btn(data))
}

function btn(data){
    const ul=document.getElementsByTagName('ul')[0]
    const newTag=document.createElement('h3')
    newTag.innerText='adding new '
    ul.appendChild(newTag)
}
// btn()



document.querySelector('.button').addEventListener('click',function(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(responce=>responce.json())
    .then(data=>displayShow(data))
})


//display function
function displayShow(data){
    userData.style.display='block'
    const ol=document.getElementsByTagName('ol')[0]
    for(const userData of data){
        const li=document.createElement('li')
        li.innerText=`name : ${userData.name}
                     email : ${userData.email}
                     address: ${userData.username}\n
                            `
        ol.appendChild(li)
        console.log(userData)    
    }
}




//userPost
function userPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(responce=>responce.json())
    .then(data=>userP(data))
}
userPosts()
function userP(posts){
    const beforeTag=document.getElementById('posts')
    for(const post of posts ){
      const div=document.createElement('div')
      div.classList.add('post')
      div.innerText=`
       title : ${post.title}
       id : ${post.userId}
      `
      console.log(post)
      beforeTag.appendChild(div)
    }
}
