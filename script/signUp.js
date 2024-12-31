import { baseUrl } from "./baseUrl"
console.log(baseUrl,"url")

let form = document.getElementById("form")
let submitButton = document.getElementById("submitBtn")
submitButton.addEventListener(("click"), function (event) {
    event.preventDefault()
    let name = form.username.value
    let email = form.email.value
    let password = form.password.value
    let contact = form.contact.value
    let gender = form.gender.value
    let userData = { name, email, password, contact, gender }
    console.log("user ka data", userData)
    getDataa(`${baseUrl}/user`,userData)
})

getData(`${baseUrl}/user`)

function getData(url) {
    fetch(url)
        .then((res) => {
            return res.json()
        }).then((result) => {
         
            return result.json()
        }).catch((err) => {
            console.log("error", err)
        })
}

// function for getData  from json server
 function getDataa(url ,obj){
    fetch(url)
    .then((res)=>{
        return res.json()
    }).then((result) => {
        postUserData(url,obj)
        return result.json()
    }) .catch((err) => {
       console.log("error",err)
    })
 }

// // function for post data in json Server

function postUserData(url, userObj) {
    fetch(url, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(userObj)
    }).then((res) => {
        return res.json()
    }).then((result) => {
        console.log("result Data", result)
        return result
    }).catch((err) => {
        console.log("error", err)
    })

}