(async function(){
  const startYear = 1980;
  const endYear = 2021;
  const arr = [];

  
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
// let genaray=[];

// result.forEach((vals)=>{
//   let arrval=vals.genres

 

// });


let err=document.getElementById('heading');
let count=0

    function searching(){
     count++
      output.splice(0,output.length)
      
      const inputElem=search.value;
      const strElem=str.value;
      const lanElem=lang.value;
      output.splice(0,output.length);
      //console.log(inputElem);
      if (inputElem===""&&strElem===""&&lanElem===""){
        
        err.innerText='Please type atleast one field'
        err.style.textAlign='centre'
        err.style.marginTop='20px'
        err.style.color='red'
      }
      else{
       
          
        err.style.display='none'
        // document.getElementById('tbl').style.display='table'
      const output=result.filter(function(data){
        

          return (data.release_date.toLowerCase().includes(inputElem)&&
          data.genres.toString().toLowerCase().includes(strElem)&& 
          data.original_language.includes(lanElem))
          
           
    })
    if (output.length==0){document.getElementById('nodata').innerText='No Data Found!'}
    else{
      document.getElementById('nodata').style.display='none'
     let Section=document.getElementById('sections');
    output.forEach(movs=>{
      let tdown=document.createElement('tr')
      tdown.innerHTML=`
      <td >${movs.title}</td>
      <td>${movs.tagline}</td>
      <td>${movs.vote_average}</td>
      <td><img src="https://image.tmdb.org/t/p/w45${movs.poster_path}" alt=""></td>`
      
      let sec=document.createElement('section');
      sec.style.border='1px solid purple'
      sec.style.borderRadius='15px'
      sec.style.boxShadow='13px 10px lightgrey';
      sec.style.margin='12px 20px 30px'
      sec.innerHTML=`
      <h4>${movs.title}</h4>
      <img src="https://image.tmdb.org/t/p/h100${movs.poster_path}" alt="">
      <p style='color:blue;'>${movs.tagline}</p>
      <p style='color:green;'>${movs.vote_average}</p>
      
      `
   
      Section.appendChild(sec)
      trows.appendChild(tdown)
    })   
    
      }
    }}
  
  button.addEventListener('click',searching)

})();
