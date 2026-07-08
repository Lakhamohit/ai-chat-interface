async function think(question){


let result =
await searchWikipedia(question);



if(result){

return result;

}


return "I could not find information about that.";


}



async function searchWikipedia(query){


try{


let url=
"https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch="
+
encodeURIComponent(query)
+
"&format=json&origin=*";



let response=
await fetch(url);



let data=
await response.json();



if(!data.query.search.length){

return null;

}



let title=
data.query.search[0].title;



let summary=
await fetch(

"https://en.wikipedia.org/api/rest_v1/page/summary/"
+
encodeURIComponent(title)

);



let info=
await summary.json();



return info.extract;



}

catch(error){

console.log(error);

return null;

}


}


module.exports={
think
};
