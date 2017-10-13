$('input[name="button"]').on("click",function(){
       var val = $("#text").val();
       console.log(val);
});
    

var note = [
    {
        id: 1,
        text: "",
        date: ""
    }
];

// document.write(note.text + " " + note.date);

// localStorage.setItem("note", JSON.stringify(note));
// var savedNote = JSON.parse(localStorage.getItem("note"));
// for (var i = 0; i < note.length; i++) {
//     document.write(savedNote[i].id + " " + savedNote[i].text + " " + savedNote[i].date);
// }

$(document).ready(function() {
    $(".notes").hover(function(){
        $("#delete-note").css("display", "block");
        }, function(){
        $("#delete-note").css("display", "none");
    });

    function makeCounter() {
        var currentCount = 1;
      
        return function() { // (**)
          return currentCount++;
        };
      }

      var counter = makeCounter(); // (*)

    $(".add-note").click(function(){
        var id = counter();
        var val = $("#text").val();
        var date = $("#datepicker").val();
        note.push({id, text, date});
        localStorage.setItem("note", JSON.stringify(note));
        var savedNote = JSON.parse(localStorage.getItem("note"));
        for (var i = 0; i < note.length; i++) {
            document.write(savedNote[i].id + " " + savedNote[i].text + " " + savedNote[i].date);
        }
        // $.each(savedNote, function(key, value){
        //     console.log(key + ' ' + value);
        // });
        // console.log(val);
        // console.log(date);
        $(".notes").append(`
            <div class="note">
                <textarea class="text-note" name="" id="savedNote.id" cols="30" rows="8"></textarea>
                <span id="delete-note">X</span>
            </div`
        );
        $(".text-note").val(savedNote.text + "\n" + savedNote.date);
        $("#text").val("");
        $(".window-add-note").css("display", "none");

    });

    $(".btn-add-note").click(function(){
        $(".window-add-note").css("display", "inline-block");
    })
});

