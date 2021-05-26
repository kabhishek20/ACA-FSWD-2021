const baseURL = "http://127.0.0.1:12345/";

let TOKEN = "";

let tb = document.getElementById("btnToken");
let db = document.getElementById("btnUserData");
let bc = document.getElementById("btnContainer");
let cont = document.getElementById("container");
let ft = document.getElementById("tokenPara");
let form = document.getElementById("registerForm");
let hb = document.getElementById("Home");
let dataContainer = document.getElementById("dataContainer");
let dataForm = document.getElementById("dataForm");
let dataHome = document.getElementById("dataHome");
let dataToken = document.getElementById("dataToken");

const getToken = async () => {
    await fetch(baseURL+"/get_token")
    .then(res => res.json())
    .then(data => {
        TOKEN = data['token'].toString();
        }
    );
};

tb.addEventListener('click', async () =>{
    await getToken();
    bc.style.display = 'none';
    cont.style.display = 'flex';
    console.log(TOKEN);
    ft.innerHTML = "The token is " + TOKEN;
    console.log('token displayed');
});


form.onsubmit = async (e) => {
    e.preventDefault();

    let name = document.getElementById("name");
    let data = document.getElementById("data");
    let token = document.getElementById("token");
    let res = document.getElementById("res")
    let final = {
        "username" : name.value,
        "data" : data.value,
        "token" : token.value
    };
    console.log(final);
    let error = false;
    let response = await fetch(baseURL + "/register", {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(final)
    })
    .then(res => {
        console.log(res.status);
        if(res.status != 200){
            error = true;
            return res.json();
        }else{
            error = false;
            return res.text();
        }
    })
    .then(d => {
        if (error) {
            d = d['error'];
            res.style.color = 'red';
        }
        if(!error){
            res.style.color = 'green';
        }
        console.log(d);
        res.innerHTML = d.toUpperCase();
        name.value = "";
        data.value = "";
        token.value = "";
        return d;
    })
    .catch(err => console.log(err));
};

hb.addEventListener('click', () =>{
    bc.style.display = 'flex';
    cont.style.display = 'none';
});

db.addEventListener('click', () => {
    bc.style.display = 'none';
    dataContainer.style.display = 'flex';
});

dataHome.addEventListener('click', () =>{
    bc.style.display = 'flex';
    dataContainer.style.display = 'none';
});

dataForm.onsubmit = async (e) => {
    e.preventDefault();

    let token = document.getElementById("dataToken");
    let error = false;
    let payload = {
        "token" : token.value
    }
    let respara = document.getElementById("dataRes");

    let response = await fetch(baseURL + "/get_data", {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(res => {
        console.log(res.status);
        if(res.status != 200){
            error = true;
        }else{
            error = false;
        }
        return res.json();
    })
    .then(d => {
        let uname = document.getElementById("user1");
        let udata = document.getElementById("data1");
        if (error) {
            d = d['error'];
            respara.style.color = 'red';
            respara.innerHTML = d.toUpperCase();
            uname.innerHTML = "";
            udata.innerHTML = "";
            document.getElementById("results").style.visibility = 'hidden';
        }

        if(!error){
            respara.innerHTML = "";
            respara.style.color = 'green';
            token.value = "";
            uname.innerHTML = d['username'];
            udata.innerHTML = d['data'];
            document.getElementById("results").style.visibility = 'visible';
        }
    })
    .catch(err => console.log(err));
};