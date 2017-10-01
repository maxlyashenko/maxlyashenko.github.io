$('input[name="button"]').on("click",function(){
       var val = $("#text").val();
       console.log(val);
});
    

var note = [
    {
        id: 1,
        text: "sxsxsxsxs",
        date: "01.10.2017 22:40"
    },
    {
        id: 2,
        text: "scscs",
        date: "01.10.2017 22:45"
    },    
    {
        id: 3,
        text: "dvvbdvd",
        date: "01.10.2017 22:50"
    }
];

localStorage.setItem("note", JSON.stringify(note));
var savedNote = JSON.parse(localStorage.getItem("note"));
for (var i = 0; i < note.length; i++) {
    document.write(savedNote[i].id + " " + savedNote[i].text + " " + savedNote[i].date);
}



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
