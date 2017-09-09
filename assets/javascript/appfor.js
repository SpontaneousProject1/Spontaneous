function modalmap() {
    $("#myModal").show();
    $(".form-control:eq(0)").hide();
    $("#zip-button").hide(); 
}

function modalClose(){
    $("#myModal").hide();
    $(".form-control:eq(0)").show();
    $("#zip-button").show();
}

$("#modalButton").on("click", function() {
    modalmap();
    window.dispatchEvent(new Event('resize'));
});

// When the user clicks on <span> (x), close the modal

$(".close:eq(0)").on("click", function(){
    modalClose();
});