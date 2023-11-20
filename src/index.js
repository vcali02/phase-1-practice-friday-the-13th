
document.addEventListener("DOMContentLoaded", () => {
    //DOMContentLoaded START

    //CONST
    const movieListNav = document.querySelector("#movie-list")
    const detailImg = document.querySelector("#detail-image")
    const detailTitle = document.querySelector("#title")
    const detailYrReleased = document.querySelector("#year-released")
    const detailDescription = document.querySelector("#description")
    const detailWatched = document.querySelector("#watched")
    const detailBloodAm = document.querySelector("#amount")

    const bloodAmBox = document.querySelector("#blood-amount")
    const bloodForm = document.querySelector("#blood-form")


    
    
    
    
//1 take image, and add to movie-list nav element
    //fetch data
    fetch("http://localhost:3000/movies")
    //GET the data
    .then(res => res.json())
    //then promises to return the data into json data
    .then(movies => {
        movies.map(movies => {
            const movieListImg = document.createElement("img")
            movieListImg.src = movies.image
            movieListNav.appendChild(movieListImg)
            
            //3 CLICK list to FEATURE
                movieListImg.addEventListener("click", (e) => {
                    e.preventDefault()
                    detailImg.src = movies.image
                    detailTitle.textContent = movies.title
                    detailYrReleased.textContent = movies.release_year
                    detailDescription.textContent = movies.description
                    detailBloodAm.textContent = movies.blood_amount
                    detailWatched.textContent = movies.watched ? "watched" : "unwatched"
            
                })
        })
        
    })



//2 movie details as featured movie
    
    //fetch first movie details
    fetch("http://localhost:3000/movies/1")
    .then(res => res.json())
    .then(movie => {
        detailImg.src = movie.image
        detailTitle.textContent = movie.title
        detailYrReleased.textContent = movie.release_year
        detailDescription.textContent = movie.description
        detailBloodAm.textContent = movie.blood_amount
        detailWatched.textContent = movie.watched ? "watched" : "unwatched"

//4 watched button toggles
        detailWatched.addEventListener("click" , (e) => {
            e.preventDefault()

            movie.watched =! movie.watched
            detailWatched.textContent = movie.watched ? "watched" : "unwatched"

        })
        addBlood(movie)
        
    })



//5 add blood
    function addBlood(movie){
        bloodAmBox.addEventListener("change", (e) => {
            e.preventDefault()
            movie.blood_amount += Number(e.target.value)
            
            bloodForm.addEventListener("submit", (e) => {
                e.preventDefault()
                detailBloodAm.textContent = movie.blood_amount
                e.target["blood-amount"].value= ""
            })
        })

    }
















    //DOMContentLoaded END
})





















































// /**REFERENCE START*************************/

// document.addEventListener( "DOMContentLoaded", () => {
    
    
    
    
//     //step 1 const movie list area
//     const movieListNav= document.querySelector("#movie-list")
    

//     //step 2 feature movie info
//     const detailImg= document.querySelector("#detail-image")
//     const detailTitle= document.querySelector("#title")
//     const detailYear= document.querySelector("#year-released")
//     const detailDescription= document.querySelector("#description")
//     const watchedBtn= document.querySelector("#watched")
//     const detailBloodAmount= document.querySelector("#amount")


//     //blood form step 5
//     const bloodForm= document.querySelector("#blood-form")
//     const bloodAmountBox= document.querySelector("#blood-amount")


//     //all movies up top
//     fetch("http://localhost:3000/movies")
//     .then(res => res.json())
//     .then(movies =>{
//         movies.map(movies => {
//             const movieListImg= document.createElement("img")
//             movieListImg.src= movies.image
//             movieListNav.appendChild(movieListImg)

//             movieListImg.addEventListener("click", (e) => {
//                 e.preventDefault()

//                 detailImg.src= movies.image
//                 detailTitle.textContent= movies.title
//                 detailYear.textContent= movies.release_year
//                 detailDescription.textContent= movies.description
//                 watchedBtn.textContent= movies.watched? "Watched" : "Unwatched"
//                 detailBloodAmount.textContent= movies.blood_amount


//             })
//         })
//     })
    
    
    
//     //featured movie right in front
//     fetch("http://localhost:3000/movies/1")
//     .then(res => res.json())
//     .then(movie =>{
//         detailImg.src= movie.image
//         detailTitle.textContent= movie.title
//         detailYear.textContent= movie.release_year
//         detailDescription.textContent= movie.description
//         watchedBtn.textContent= movie.watched? "Watched" : "Unwatched"
//         detailBloodAmount.textContent= movie.blood_amount
        
//         watchedBtn.addEventListener("click", (e) => {
//             e.preventDefault()
//             movie.watched =! movie.watched
//             watchedBtn.textContent= movie.watched? "Watched" : "Unwatched"
            
//         })
        
//         addBlood(movie)
//     })
// //BLOOD FORM
// function addBlood(movie){ //the name of my instructions is ""addBlood" and I will give you something to apply these instructions to by putting it in your ()

//     bloodAmountBox.addEventListener("change", (e) => { //HEY bloodAmountBox, I need you to listen for a CHANGE and apply the following instructions
//         e. preventDefault()
//         movie.blood_amount += Number(e.target.value) //take the object.key value that we are trying to affect, and add whatever we insert into the target (the input box). since we are applying this event TO this box, it is our event target, or e.target. but that's not really what we want, we want the e.target VALUE, so: e.target.value
//        
            //now that we know this change is going to happen, we'll need to complete this by giving this action a home

            
//         bloodForm.addEventListener("submit", (e) => {//HEY bloodForm, I need you to keep an ear out for a SUBMISSION,and when you hear it, I need you to apply the following instructions
//             e.preventDefault()
//             detailBloodAmount.textContent= movie.blood_amount //where did you want this change to be seen? grab that. and set the textContent to the value you want. here, the object.key because up top, we told it that it may be affected by a change, and if it is, is needs to apply that change. so here, referencing the object.key will give us the total value BECAUSE of the instructions we gave it above

//             e.target["blood-amount"].value= "" //this is fancy, and just says HEY target area, when you're done with the order of operations, reset yourself.


//         })


//     })

// }

    
// //end of DOMContentLoaded    
// })
    
    
    
    
    
    













