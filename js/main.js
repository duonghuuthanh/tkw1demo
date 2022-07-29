$(document).ready(function() {
    $("a.go").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    })
    $(window).scroll(function() {
        if ($(this).scrollTop() > 400)
            $("body").css("background-color", "gold")
    })
    $("#addColorBtn").change(function()  {
        let c = $(this).val()
        let b = `<button style='width:100px;height:30px;background-color:${c}'></button`

        $("#colors").append(b)
    })

    $("#colors").on("click", "button", function() {
        let c = $(this).css("background-color")
        $("body").css("background-color", c)
    })

    $("#ball2").on({
        mouseenter: function() {
            $(this).css("width", "200px")
        },
        mouseleave: function() {
            $(this).css("width", "128px")
        }
    })
    // $("#colors > button").click(function() {
    //     let c = $(this).css("background-color")
    //     $("body").css("background-color", c)
    // })

    $("#hide").click(function() {
        $("#ball2").fadeTo(3000, 0.2, function() {
            $("body").css("background-color", "gold")
        })
    })

    $("#show").click(function() {
        $("#ball2").fadeTo(3000, 1.0, function() {
            $("body").css("background-color", "white")
        })
    })

    $("#animate").click(function() {
        $("#ball2").animate({
            "left": "800px",
            "width": "200px"
        }, 3000, function() {
            $("body").css("background-color", "gold")
        }).animate({
            "top": "300px",
            "width": "300px"
        }, 3000).animate({
            "left": "0",
            "top": "0",
            "width": "128px"
        }, 3000)
    })
})

// $(document).ready(() => {
    
// })


function giaiBac1() {
    let k = document.getElementById("kq");

    var a = parseFloat(document.getElementById("aId").value);
    var b = parseFloat(document.getElementById("bId").value);
    let msg = "";
    if (a == 0)
      if (b == 0) msg = "VO SO NGHIEM";
      else msg = "VO NGHIEM";
    else msg = "Nghiem x = " + (-b / a).toFixed(2);

    k.innerHTML = "<h1>" + msg + "</h1>";
  }

  function doiMau(obj) {
    //var d = document.getElementById("color").value;
    var b = document.getElementById("main");
    // b.style.backgroundColor = obj.value;
    b.setAttribute("style", `background-color:${obj.value}`);
  }

  //
  function init() {
    $(".thumbnail img").click(function() {
        doiAnh(this);
    })

    // let images = document.querySelectorAll(".thumbnail img")
    // for (let i = 0; i < images.length; i++)
    //     images[i].addEventListener("click", function() {
    //         doiAnh(this);
    //     })
        // images[i].onclick = function() {
        //     doiAnh(this);
        // }
  }

  function doiAnh(obj) {
    var im = document.getElementById("mainImg");
    im.src = obj.src;
  }

  function doiMauAnh(prefix) {
    var im = document.getElementById("mainImg");
    im.src = `images/galaxys8/${prefix}1.jpg`;

    var images = document.querySelectorAll(".thumbnail img");
    for (var i = 0; i < images.length; i++)
      images[i].src = `images/galaxys8/${prefix}${i + 1}.jpg`;
  }
  var timer = null;
  let to = 0;
    let le = 0;
  function play() {
    let b = document.getElementById("ball");
    let a = document.getElementById("myBall");
    
    let incX = 5;
    let incY = 6;
    timer = setInterval(function() {
        if (to < 0 || to + b.offsetHeight >= a.offsetHeight)
            incY = -incY;
        if (le < 0 || le + b.offsetWidth >= a.offsetWidth)
            incX = -incX;

        to += incY;
        le += incX;

        b.style.left = le + "px";
        b.style.top = to + "px";
    }, 10);
  }

  function stop() {
    if (timer != null)
        clearInterval(timer)
  }