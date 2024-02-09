import "./style.css"
import l1 from "./landscape1.webp"
import l2 from "./landscape2.webp"
import l3 from "./landscape3.webp"


const imageLinks = [l1,l2,l3]



const imagesNode = document.querySelectorAll(".carrousel-img")
imagesNode.forEach((image, index) => {
    let counter = index 
    image.src = imageLinks[counter]
})
const images = [...imagesNode]

const updateImage = function(newIndex){
    const imgContainer = document.querySelector(".img-container")
    const imageDisplaying = document.querySelector(".display")
    imageDisplaying.classList.remove("display")
    imgContainer.children[newIndex].classList.add("display")
}

const createButtons = function(){
    const numberButtons = images.length
    for(let i = 0; i < numberButtons; i++ ){
        const dotContainer = document.querySelector(".dot-container")
        const button = document.createElement("button")
        button.className =`dot`
        button.id = `${i}`
        button.addEventListener("click", (event) => {
            dots.forEach((dot) => dot.classList.remove("active"))
            const index = parseInt(event.currentTarget.id, 10)
            updateImage(index)
            event.currentTarget.classList.add("active")
        })
        dotContainer.appendChild(button)
    }
}

const pressArrow = function(event){
    const imageDisplaying = document.querySelector(".display")
    const imageIndex = images.findIndex((image) => imageDisplaying === image)
    let newIndex;
    if(event.target.className === "right arrow"){ 
        newIndex = imageIndex + 1
        if(images.length === newIndex) {
            newIndex = 0
        }
    } else{
        newIndex = imageIndex - 1
        if(newIndex === -1) {
            newIndex = images.length -1
        } 
    }
    updateImage(newIndex)
    dots.forEach((dot) => {
        dot.classList.remove("active")
        if(parseInt(dot.id, 10) === newIndex){
            dot.classList.add("active")
        }
    })
}

document.querySelector(".arrow.right").addEventListener("click", pressArrow)
document.querySelector(".arrow.left").addEventListener("click", pressArrow)

createButtons()
const dots = document.querySelectorAll(".dot")
dots[0].classList.add("active")

// const slideImage = function displayImage(event) {
//     const imgContainer = document.querySelector(".img-container")
//     const imageDisplaying = document.querySelector(".display")
//     imageDisplaying.classList.remove("display")
//     const imageIndex = images.findIndex((image) => imageDisplaying === image)
//     let newIndex;
//     if(event.currentTarget.className.substring(0,5) === "right") {
//         newIndex = imageIndex + 1
//         if(images.length === newIndex) {
//             newIndex = 0
//         }
//         imgContainer.children[newIndex].classList.add("display")
//     } 
//     else{
//         newIndex = imageIndex - 1
//         if(newIndex === -1) {
//             newIndex = images.length -1
//         } 
//         imgContainer.children[newIndex].classList.add("display")
//     }
// }
