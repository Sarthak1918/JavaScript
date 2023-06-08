let obj = {
    name : "Sarthak",
    age : 22,
    about : function(){
        console.log(this) //this refers to the object that will call this function
    }
}

obj.about()

