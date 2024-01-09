
var addPopup=document.getElementById("add-popup")
var overlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")

// function to add popup box
addPopup.addEventListener("click",function(){
    overlay.style.display="block"
    popupbox.style.display="block"
})

// function to add the new book details
var add=document.getElementById("add")
add.addEventListener("click",function(event){ 
    event.preventDefault() // preventDefault() is to prevent the form from submitting which causes to refresh the page
    var container=document.querySelector(".container")
    var title=document.getElementById("title")
    var author=document.getElementById("author")
    var description=document.getElementById("description")
    var new_bookcontainer=document.createElement("div")
    new_bookcontainer.setAttribute("class","book-container")
    
    // using template literals -> eg:`<h1>${name.value}</h1>`
    new_bookcontainer.innerHTML=`<h2>${title.value}</h2>
    <h3>${author.value}</h3>
    <br>
    <p>${description.value}</p>
    <button onclick='deleteBookDetails(event)'>Delete</hutton>`
    //new_bookcontainer.innerHTML="<h2>"+title.value+"</h2><h3>"+author.value+"</h3><p>"+description.value+"</p>"+"<button onclick='deleteBookDetails(event)'>Delete</hutton>"
    container.append(new_bookcontainer)

    var bookDetails=document.getElementById("book-details")
    bookDetails.reset()

    
    overlay.style.display="none"
    popupbox.style.display="none"
})

// function to cancel the popup box
var cancel=document.getElementById("cancel")
cancel.addEventListener("click",function(event){
    event.preventDefault()
    overlay.style.display="none"
    popupbox.style.display="none"

})

// function to delete a book details
function deleteBookDetails(event){
    event.target.parentElement.remove()
}

