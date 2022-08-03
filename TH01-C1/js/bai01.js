function giaiBac2() {
    let a = parseFloat(document.getElementById("aId").value);
    let b = parseFloat(document.getElementById("bId").value);
    let c = parseFloat(document.getElementById("cId").value);

    let msg = ""
    if (a === 0) {
        // bx + c = 0
    } else {
        let delta = Math.pow(b, 2) - 4*a*c;
        if (delta < 0)
            msg = "PT VO NGHIEM";
        else if (delta === 0)
            msg = "PT CO NGHIEM KEP X = " + (-b/(2*a));
        else {
            let x1 = (-b + Math.sqrt(delta))/(2*a);
            let x2 = (-b - Math.sqrt(delta))/(2*a);
            msg = `PT CO 2 NGHIEM x1=${x1} va x2=${x2}`;
        }
    }
    
    let k = document.getElementById("kq");
    k.innerHTML = `<h1 style="color:blue;">${msg}</h1>`
}

function doiTien() {
    let st = parseFloat(document.getElementById("stId").value);
    let dv = document.getElementById("dvId").value;
    let msg = ""
    switch (dv) {
        case "eur":
            msg = st / 26000;
            break;
        case "usd":
            msg = st / 22000;
            break;
        case "aud":
            msg = st / 16000;
            break;
    }

    let k = document.getElementById("kq2");
    k.innerText = `${st} VND = ${msg.toFixed(2)} ${dv.toUpperCase()}`;
}

function init() {
    let im = document.getElementById("mainImg")
    let images = document.querySelectorAll(".thumb img");
    for (let i = 0; i < images.length; i++)
        images[i].addEventListener("mouseenter", function() {
            im.src = this.src;
        })

    
    let buttons = document.querySelectorAll(".buttons button");
    for (let i = 0; i < buttons.length; i++)
        buttons[i].addEventListener("click", function() {
            let prefix = this.getAttribute("rel");

            let im = document.getElementById("mainImg")
            im.src = `images/galaxys8/${prefix}1.jpg`
            
            let images = document.querySelectorAll(".thumb img");
            for (let i = 0; i < images.length; i++)
                images[i].src = `images/galaxys8/${prefix}${i+1}.jpg`
        })
}