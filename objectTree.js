// ++++++++++++++++++++++++++++++++ sky is the limit ++++++++++++++++++++++++++++++++//
// coded by Mohammad Hossien Lotfazar 
// github link : https://github.com/lotfazardev/

function objTree(obj){ //main func
    const Obj = initObj(obj); 
    visualisationObj(Obj); 
}

function initObj(arg){ //init func
    if ( typeof arg === "object" ) {
        return arg
    }else{
        try{
            return JSON.parse(arg)
        }catch(e){
            console.log("invalid value")
            return({})
        }
    }
}
function visualisationObj(Obj){ // visualisation body func
    const marginTitle = "" ;
    const marginItem = "\t"
    visualisation(Obj, marginTitle, marginItem)
}
function visualisation(Obj, marginTitle, marginItem){ // //visualisation core func
    for(let i in Obj){
        if(typeof Obj[i] === "object" && Obj[i] != null){ //if current element is Object
            if(Obj[i].__proto__.constructor.name == "Object"){ //if we sure it is an object
                console.log(`${marginTitle} [-] ${i} :`)
                visualisation(Obj[i], marginTitle + "\t", marginItem + "\t")
            }else{ //so its itreable
                for(let j in Obj[i]){
                    if(Obj[i][j].__proto__.constructor.name == "Object"){
                        visualisation(Obj[i][j], marginTitle + "\t", marginItem + "\t")
                    }
                }
            }
            continue
        }
        //data item extracting
        let showValue = Obj[i] != null ? Obj[i] : "null"
        //lets show it
        console.log(`${marginTitle} [-] ${i} :`)
        console.log(`${marginItem} ${showValue}`)
    }

}
/* 
    import it to your Nodejs app ussing this statement :
    module.exports = objTree() ;
*/
objTree({
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  });