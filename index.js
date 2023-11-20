// $("h2").html("elo") test i pokazanie jak działa jqueryy
var userInput = $(".userInput")

$(".userInput").keypress(function(e){
    if (e.key === "Enter" && userInput.val().length > 0){
        $(".listOfTodos").append("<li>" + userInput.val() + "</li>") 
    }
     console.log($(".userInput").val())
 })

$(".addButton").click(function(){
    if(userInput.val().length > 0){
        Swal.fire({
            title: "Task Added",
            icon: "success"
          }); 
        $(".listOfTodos").append("<li>" + userInput.val() + "</li>")
    }
    else{
        Swal.fire({
            title: "You must write something!",
            icon: "error"
          }); 
    }
})