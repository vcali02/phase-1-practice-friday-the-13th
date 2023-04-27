
/**PRACTICE ROUND 2 START*************************/

document.addEventListener( "DOMContentLoaded", () => {
    
    
    
    
    //step 1 const movie list area
    const movieListNav= document.querySelector("#movie-list")
    

    //step 2 feature movie info
    const detailImg= document.querySelector("#detail-image")
    const detailTitle= document.querySelector("#title")
    const detailYear= document.querySelector("#year-released")
    const detailDescription= document.querySelector("#description")
    const watchedBtn= document.querySelector("#watched")
    const detailBloodAmount= document.querySelector("#amount")


    //blood form step 5
    const bloodForm= document.querySelector("#blood-form")
    const bloodAmountBox= document.querySelector("#blood-amount")


    //all movies up top
    fetch("http://localhost:3000/movies")
    .then(res => res.json())
    .then(movies =>{
        movies.map(movies => {
            const movieListImg= document.createElement("img")
            movieListImg.src= movies.image
            movieListNav.appendChild(movieListImg)

            movieListImg.addEventListener("click", (e) => {
                e.preventDefault()

                detailImg.src= movies.image
                detailTitle.textContent= movies.title
                detailYear.textContent= movies.release_year
                detailDescription.textContent= movies.description
                watchedBtn.textContent= movies.watched? "Watched" : "Unwatched"
                detailBloodAmount.textContent= movies.blood_amount


            })
        })
    })
    
    
    
    //featured movie right in front
    fetch("http://localhost:3000/movies/1")
    .then(res => res.json())
    .then(movie =>{
        detailImg.src= movie.image
        detailTitle.textContent= movie.title
        detailYear.textContent= movie.release_year
        detailDescription.textContent= movie.description
        watchedBtn.textContent= movie.watched? "Watched" : "Unwatched"
        detailBloodAmount.textContent= movie.blood_amount
        
        watchedBtn.addEventListener("click", (e) => {
            e.preventDefault()
            movie.watched =! movie.watched
            watchedBtn.textContent= movie.watched? "Watched" : "Unwatched"
            
        })
        
        addBlood(movie)
    })
//BLOOD FORM
function addBlood(movie){ //the name of my instructions is ""addBlood" and I will give you something to apply these instructions to by putting it in your ()
    bloodAmountBox.addEventListener("change", (e) => { //HEY bloodAmountBox, I need you to listen for a CHANGE and apply the following instructions
        e. preventDefault()
        movie.blood_amount += Number(e.target.value) //take the object.key value that we are trying to affect, and add whatever we insert into the target (the input box). wince we are applying this event TO this box, it is our event target, or e.target. but that's not really what we want, we want the e.target VALUE, so: e.target.value
        //now that we know this change is going to happen, we'll need to complete this by giving this action a home
        bloodForm.addEventListener("submit", (e) => {//HEY bloodForm, I need you to keep an ear out for a SUBMISSION,and when you hear it, I need you to apply the following instructions
            e.preventDefault()
            detailBloodAmount.textContent= movie.blood_amount //where did you want this change to be seen? grab that. and set the textContent to the value you want. here, the object.key because up top, we told it that it may be affected by a change, and if it is, is needs to apply that change. so here, referencing the object.key will give us the total value BECAUSE of the instructions we gave it above
            e.target["blood-amount"].value= "" //this is fancy, and just says HEY target area, when you're done with the order of operations, reset yourself.


        })


    })

}

    
//end of DOMContentLoaded    
})
    
    
    
    
    
    /**PRACTICE ROUND 2 END*************************/
    
    
    
    





    /**ON MY OWN AND THIS WORKED */
// document.addEventListener("DOMContentLoaded", ()=> {
    
//     const movieListNav= document.querySelector("#movie-list")
    
//     const movieInfoDiv= document.querySelector("#movie-info")
//     const detailImg= document.querySelector("#detail-image")
    
    
//     const bloodForm= document.querySelector("#blood-form")
//     const bloodAmountBox = document.querySelector("#blood-amount")
//     const addBlood= document.querySelector("#blood-form input+input")
//     //const bloodDropNumber = document.querySelector("#amount") this isn't working...why?
//     const bloodDropNumber= document.querySelector("#movie-info #amount") //this is working...why?
    


// fetch("http://localhost:3000/movies")

//     .then((res) => res.json())
//     .then(movies => {
//         movies.map( movies => {
//             let movieListImg = document.createElement("img")
//             movieListImg.src= movies.image
//             movieListNav.appendChild(movieListImg)

//         movieListImg.addEventListener("click", (e) => {
//             e.preventDefault()
            
//             detailsTitle.textContent= movies.title
//             detailsYear.textContent= movies.release_year
//             detailsDesc.textContent= movies.description
//             detailImg.src= movies.image
//             watchedBtn.textContent= movies.watched? "Watched" : "Unwatched"
//             detailsBloodAmount.textContent= movies.blood_amount
            
//         })  
//         addBloodFunction(movies)
//     })
    
    
    
    
    
//         function addBloodFunction(movies){

//             bloodAmountBox.addEventListener("change", (e) => {
//                 movies.blood_amount += Number(e.target.value)
//                 console.log(movies.blood_amount)
    
//                 bloodForm.addEventListener("submit", (e) => {
//                     e.preventDefault()
//                     bloodDropNumber.textContent = movies.blood_amount
//                     e.target["blood-amount"].value= ""
//                     //console.log(e.target)
                        
                        
//                 })        
//             })
//         }
        
     
        






//         const detailsTitle= document.querySelector("#title")
//         const detailsYear= document.querySelector("#year-released")
//         const detailsDesc= document.querySelector("#description")
//         const watchedBtn= document.querySelector("#watched")
//         const detailsBloodAmount= document.querySelector("#amount")



// fetch("http://localhost:3000/movies/1")
// .then((res) => res.json())
// .then(movie => {
    
//     detailsTitle.textContent= movie.title
//     detailsYear.textContent= movie.release_year
//     detailsDesc.textContent= movie.description
//     detailImg.src= movie.image
//     watchedBtn.textContent= movie.watched? "Watched" : "Unwatched"
//     detailsBloodAmount.textContent= movie.blood_amount
    
//     watchedBtn.addEventListener("click", (e) => {
//         e.preventDefault()
//         movie.watched = !movie.watched
//         watchedBtn.textContent= movie.watched? "Watched" : "Unwatched"
        
//     })
// })



// })
// })

/**ON MY OWN AND THIS WORKED */






























































/*****START************************DECLARE VARIABLES IN GLOBAL SCOPE******************************/
// let movieArr
// let currentMovie

// //const baseUrl =`http://localhost:3000/movies`;
// const movieListNav= document.querySelector('#movie-list');//grabs nav parent node
// const movieFeatureImg= document.querySelector('#detail-image')
// const movieTitle= document.querySelector("#title"); //.textContent= movie.title
// const yearReleased= document.querySelector("#year-released"); //.textContent= movie.release_year
// const movieDescription= document.querySelector("#description"); //.textContent= movie.description
// //const movieImg= document.querySelector("#detail-image"); //.src= movie.image
// const watchedBtn= document.querySelector("#watched"); //.textContent= movie.watched
// const bloodDropIcon= document.querySelector(".icon"); 
// const bloodAmount= document.querySelector("#blood-amount"); //.textContent= movie.blood_amount
// const bloodForm= document.querySelector("#blood-form"); 
// const blood= document.querySelector("#movie-info #amount")
// console.log(currentMovie)

// //const movie= document.createElement('img'); //creates child node

// /*****END************************DECLARE VAIRABLES IN GLOBAL SCOPE********************************/
// /*****START******************************************FETCH REQUESTS*******************************/

// function getMovies(){
//     return fetch('http://localhost:3000/movies')//HEY get this data        //.then (res => console.log(res)) USE: to check if populates
//           .then(response => response.json()) 
//           .then(movies => {
//             movieArr = movies
//             currentMovie = movieArr[0]

//             movieArr.map(movie => {
//                 currentMovie = movie
//                 renderMovieCards(currentMovie)
//             }) 

//                 //want to send this information to the next function. invoking the movie detail function
//         })
//     }
        
        
// /*****END******************************************FETCH REQUESTS**********************************/
// /*****START*************************************EVENT LISTENER(S)**********************************/





// /*****END**************************************EVENT LISTENER(S)**********************************/
// /*****START************************************* RENDERING FUNCTION(S)****************************/


// //gets featured movie 
// const movieDetail = (movie) =>{
//     //1. select the elements
//     //2. add the value using the data
//     movieTitle.textContent= movie.title
//     yearReleased.textContent= movie.release_year
//     movieDescription.textContent= movie.description
//     movieFeatureImg.src= movie.image
//     watchedBtn.textContent= movie.watched? "Watched" : "Unwatched" //truthy:falsey
//     bloodAmount.textContent= movie.blood_amount

//     watchedBtn.addEventListener('click', () => { 
//         movie.watched = !movie.watched
//         watchedBtn.textContent = movie.watched? "Watched" : "Unwatched" 
        
//         console.log("clicked")
//     })  

// }
// // //gets movieS to the NAV
//  function renderMovieCards(movie){ 
//     //console.log(movie)
//     const movieImg= document.createElement('img') //creates child node
//     movieImg.src = movie.image //can also be written: movieImg.setAttribute('src', movie.image) 
// //     movieImg.setAttribute('id', movie.id)
//     movieImg.alt = movie.title
//     movieListNav.append(movieImg) //attaches child to parent
    
//     // adding the click event to the image and the logic is to call the movieDetail function to populate the detail
//     movieImg.addEventListener('click', () => {
//         movieDetail(movie)
//     })
//  }


// function getBloodAmount(){
//     bloodAmount.addEventListener("change", (e) => {
//         submitForm(e.target.value)
//     })
// }

// function submitForm(bloodAmount){
//     bloodForm.addEventListener("submit", (e) => {
//         e.preventDefault()
//         console.log(bloodAmount)
//         currentMovie.blood_amount += Number(bloodAmount) //number bc currently a string and need it to be a number
//         blood.textContent = currentMovie.blood_amount
//         e.target["blood-amount"].value= ""
//     })
// }

// getMovies()
// getBloodAmount()








/*****END***************************************RENDERING FUNCTION(S)*******************************/
/*GENERAL INITIALIZATION*/



















/***************************MY FIRST TRY*****************************/
/*
function getJSON(url){
    return fetch(url)//HEY get this data 
                                                 //.then (res => console.log(res)) USE: to check if populates
          .then(response => response.json()) //use method .jason() to put that data in object format we can use
          .then(movie => {
            movie.forEach(movie => 
            movieCard(movie))
            //if statement???
            renderFeatureMovie(movie[0])
          })
        }

//if(//user clicks individual movie){
    //populate individual movie card
//} else AKA DEFAULT: {First movie option 
//}



//Populates the BIG MAIN movie card on the screen
function renderFeatureMovie(movie){
    const featureMovie= document.querySelector('#featured-movie')
    document.querySelector("#title").textContent= movie.title
    document.querySelector("#year-released").textContent= movie.release_year
    document.querySelector("#description").textContent= movie.description
    document.querySelector("#detail-image").src= movie.image
        
    const watchedBtn= document.querySelector('#watched').value
}      

//adds each movie card to the top list options
function movieCard(movie) {
    const movieList= document.querySelector('#movie-list')//grabs nav parent node
    const movie= document.createElement('img') //creates child node
    movie.setAttribute('src', movie.image)
    movie.setAttribute('id', movie.id)
    movieList.append(movie) //attaches child to parent
    
    //console.log(movieList.img)

    //add event listener INSIDE bc scope

    movieList.addEventListener('click', (e) => {  //add event listener to parent node but still grabs them by id
      featureMovie.textContent = movieDat
            //renderFeatureMovie(movie[e.target.id])
          

       //renderFeatureMovie(movie)
    })

}


//EACH Movie = FEATURE Movie
    
    // nav.addEventListener('click', (e) => {
    //     e.preventDefault()
    
    //     let eachMovie= document.querySelector("nav img")
    //     eachMovie.textContent=
    
    
    //     })

        //"Watched" "Unwatched" STATUS
        // watchedBtn.addEventListener('click', () => {
        //     e.preventDefault()
        //     const watched= movie.watched
        //     if (watched === false){
        //         watchedBtn.textContent = "Unwatched"
        //     }if else ( watched === true) {
        //         watchedBtn.textContent = "Watched"
        //     })
    
        // }
    



    //Get movie details when user clicks on a movie card
    




    ///USE THIS?     eachMovie.forEach(movie => {
     //   movie.classList.toggle('active')


*/