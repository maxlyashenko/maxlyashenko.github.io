$(document).ready(function() {
    $("textarea").hover(function(){
        $("#delete-note").css("display", "block");
        }, function(){
        $("#delete-note").css("display", "none");
    });

    $(".btn-add-note").click(function(){
        $(".notes").append(`
            <div class="note">
                <textarea name="" id="" cols="30" rows="8"></textarea>
                <span id="delete-note">X</span>
            </div`
        );
    })
});
