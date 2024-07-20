const btns = document.querySelectorAll(".btn-css");
btns.forEach(btn=>{btn.addEventListener("click", ()=>{
    const images = document.querySelectorAll(".images");
    images.forEach(image=>{
        if(image.classList.contains("hide")){
            image.classList.remove("hide");
        }else{
            image.classList.add("hide");
        };
    })
})})


// Firstly check how many elements are in images class or container element



const images = document.querySelectorAll("#container .images");
console.log(images.length);


// btns should have a response where elements have to be created if there is no hard coded images and if there is some json ajax file to be imported then what should be the code
//  scenario 1 if images and elements are hardcoded in html then javascript should allow only 4 elements to have a display of show others should be none
//  in scenario 1 each button element should correspond to total length -(totallength-4indexes) and dynamically respond to those images as per index of the images in total length
// in scenariom 1 previous and next button should judge currently displayed items have index number of what and should correspond to that particular button to display items
// in scenario 1 button should also replace previous or next buttons if there is an index greater than currently avaialable displaying button index

