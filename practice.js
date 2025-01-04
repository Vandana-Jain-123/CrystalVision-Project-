let arr = [
    {
        id: 1,
        name: "Ashu",
    },
    {
        id: 5,
        name: "shu",
    },
    {
        id: 2,
        name: "rishu",
    },
    {
        id: 2,
        name: "shiv",
    }

]

const objs={"1":1,"5":1,"2":2}
let  obj={}
for(let i=0;i<arr.length;i++){
   if(obj[arr[i].id]==undefined){
    obj[arr[i].id]={...arr[i],count:1}
   }else{
       console.log("id", obj[arr[i].id],"arr[i]",arr[i])
    obj[arr[i].id].count++
   }
    console.log(obj,"obj")
}
console.log(obj)


