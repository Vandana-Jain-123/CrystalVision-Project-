import { baseUrl } from "./baseUrl.js"
console.log(baseUrl, "urlooo")
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
    checkData(`${baseUrl}/user`, userData, email)
})



function getData(url) {
    fetch(url)
        .then((res) => {
            return res.json()
        }).then((result) => {
            console.log(result, "data aall")
            return result
        }).catch((err) => {
            console.log("error", err)
        })
}

// function for checkData  from json server
function checkData(url, obj, email) {
    fetch(url)
        .then((res) => {
            return res.json()
        }).then((result) => {
            let checkEmailPresent = result.filter((e) => e.email == email)
            if (checkEmailPresent.length != 0) {
                alert("User already register")
                form.reset()
                window.location.href = `login.html`
            } else {

                postUserData(url, obj)
                console.log(result, "data added in js")

                alert("Signup sucessfully")
                form.reset()
               
            }

        }).catch((err) => {
            console.log("error", err)
        })
}

// // function for post data in json Server

function postUserData(url, userObj) {
    fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
getData(`${baseUrl}/user`)