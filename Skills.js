// Text appears when hovering over the links of languages,
// and disappear when the mouse is out of the link

$(document).ready(function(){
    // Text for HTML5
    $("ol li:nth-child(1)").hover(function(){
            $("#level").text("HTML5 : Advanced")
           .css("fontSize","20px").css("display","inline-block")
        },
        function(){
            $("#level").text("");
        });

    //Text for CSS3
    $("ol li:nth-child(2)").hover(function(){
            $("#level").text("CSS3 : Advanced");
        },
        function(){
            $("#level").text("");
        });

    //Text for JavaScript
    $("ol li:nth-child(3)").hover(function(){
            $("#level").text("JavaScript : Intermediate");
        },
        function(){
            $("#level").text("");
        });

    //Text for Github
    $("ol li:nth-child(4)").hover(function(){
            $("#level").text("Git(Github) : Intermediate");
        },
        function(){
            $("#level").text("");
        });

    //Text for Linux
    $("ol li:nth-child(5)").hover(function(){
            $("#level").text("Linux : Intermediate");
        },
        function(){
            $("#level").text("");
        });

    //Text for Python
    $("ol li:nth-child(6)").hover(function(){
            $("#level").text("Python : Intermediate");
        },
        function(){
            $("#level").text("");
        });
});