const url = "https://api.funtranslations.com/translate/minion.json?text=";

async function fetchApi(text) {
    let promise = new Promise((resolve, reject)=>{
        resolve(fetch(url + text));
        reject("not get")
    })

    promise.then((message)=>{
        console.log(message.json())
    }).catch((message)=>{
        console.log(message)
    })
}
fetchApi("Hello I eat banana!");

