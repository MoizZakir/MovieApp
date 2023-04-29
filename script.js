(async function(){
  const startYear = 1980;
  const endYear = 2021;
  const arr = [];

  const movieGenres = ["Action","Adventure","Animation","Biography","Comedy","Crime","Documentary","Drama","Family","Fantasy","Film-Noir","History","Horror","Music","Musical","Mystery","Romance","Sci-Fi","Short","Sport","Superhero","Thriller","War","Western"]
  ;
  

for (let year = startYear; year <= endYear; year++) {
  arr.push(year);
}



  
  
  

  const response=await fetch("./data.json");
  const result= await response.json();
  var search=document.getElementById('year');
  var button=document.getElementById('btn');
  var str=document.getElementById('searchelem');
  var lang=document.getElementById('Lan');
  trows=document.getElementById('tbbody')
  table=document.getElementById('tbl');
  arr.forEach((val)=>{
    var opt=document.createElement('option');
    opt.innerText=val
    opt.value=val

   search.appendChild(opt)
  
});

// movieGenres.forEach((gen)=>{
//   var movie_option=document.createElement('option');
//   movie_option.innerText=gen;
//   movie_option.value=gen;
//   str.appendChild(movie_option)
// })

let uniqueArr = [];
   result.forEach(dat=>{
     var a=dat.original_language
     if (!uniqueArr.includes(a)) {
      uniqueArr.push(a);
    }
   });
  uniqueArr.forEach((zuban)=>{
    var zub=document.createElement('option');
     
    zub.innerText=zuban;
    zub.value=zuban;
    lang.appendChild(zub)
  });
//  console.log(uniqueArr)
let genaray=[];

result.forEach((vals)=>{
  let arrval=vals.genres
  // genaray.push(vals.genres)
  
  
  // arrval.forEach((vas)=>{
  //   let vaa=vas;
  //   if (!genaray.includes(vaa)) {
  //     genaray.push(vaa)

  //   }
    
    
  // });
    // console.log(vaa)
    
 

});//console.log(this.genaray)
// console.log(genaray)

    
  
  
  
  
    function searching(){
      
      const inputElem=search.value;
      const strElem=str.value;
      const lanElem=lang.value;
      
      //console.log(inputElem);
      const output=result.filter(function(data){
        
        
          return (data.release_date.toLowerCase().includes(inputElem)&&
          data.genres.toString().toLowerCase().includes(strElem)&& 
          data.original_language.includes(lanElem))
           
    })
    output.forEach(movs=>{
      let tdown=document.createElement('tr')
      tdown.innerHTML=`
      <td >${movs.title}</td>
      <td>${movs.tagline}</td>
      <td>${movs.vote_average}</td>
      <td><img src="https://image.tmdb.org/t/p/w45${movs.poster_path}" alt=""></td>`
   
      
      trows.appendChild(tdown)
    })   
    document.getElementById('tbl').style.display='table'
    
      // console.log(output)
    }
  
  button.addEventListener('click',searching)
//console.log(result)
// console.log(str.value)
})();
