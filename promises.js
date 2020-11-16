const resolvePromise = true;

const promise = new Promise((resolve, reject) => {
    if(resolvePromise) {
        resolve("Promise resolved");
    } else {
        reject("Promise rejected");
    }
})

console.log(promise);


const asyncPromise = new Promise((resolve,reject) => {
    console.log("Starting timer");
    setTimeout(()=> {
        if(resolvePromise){
            resolve("Successfully resolved after timeout")
        } else {
            reject("Oh no there was an error")
        }
    },5000);
    console.log("End")
})

console.log(asyncPromise);

asyncPromise.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("Finally block executed everytime");
})


const fakeHttpCall = () => {
    console.log("Starting HTTP call");
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve("Result");
        },2000);
    })
}

const testHttpCall = async () => {
    console.log("start");
    let result = await fakeHttpCall();
    console.log("Result",result);
    console.log("end");
}

testHttpCall();