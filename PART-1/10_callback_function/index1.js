function printName(information){  //suppose it will be done after fetching 
    console.log(information)
}

function print(callback){ // suppose this function fetches information from backend so we pass the function which we want to be exected after this functin
    callback("sarthak");  //now we want to pass some information to do something
}
print(printName);