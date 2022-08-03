function giai() {
    let a = parseFloat(document.getElementById("aId").value);
    let b = parseFloat(document.getElementById("bId").value);
    let c = parseFloat(document.getElementById("cId").value);

    let msg = "";
    if (a == 0) {
        // bx + c = 0
    } else {
        let delta = Math.pow(b, 2) - 4*a*c;
        if (delta < 0)
            msg = "PT VO NGHIEM";
        else if (delta === 0)
            msg = "NGHIEM KEP x = " + (-b/(2*a));
        else {
            let x1 = (-b - Math.sqrt(delta))/(2*a);
            let x2 = (-b + Math.sqrt(delta))/(2*a);

            msg = `PT CO 2 NGHIEM x1=${x1.toFixed(2)} va x2=${x2.toFixed(2)}`
        }
    }

    let k = document.getElementById("kq");
    k.innerHTML = `<h1 style="color:blue">${msg}</h1>`
}

function doiTien() {
    let t = parseFloat(document.getElementById("stId").value);
    let dv = document.getElementById("dvId").value;

    let kq = "";
    switch (dv) {
        case "eur":
            kq = t / 26000;
            break;
        case "usd":
            kq = t / 22000;
            break;
        case "aud":
            kq = t / 16000;
            break;
    }

    let k = document.getElementById("kq2");
    k.innerText = `${t} VND = ${kq.toFixed(2)} ${dv.toUpperCase()}` 
}

function init() {
    let im = document.getElementById("mainIm");
    let images = document.querySelectorAll(".thumb img");
    for (let i = 0; i < images.length; i++)
        images[i].addEventListener("mouseenter", function() {
            im.src = this.src;
        })

    let buttons = document.querySelectorAll(".buttons button");
    for (let i = 0; i < buttons.length; i++)
        buttons[i].addEventListener("click", function() {
            let prefix = this.getAttribute("rel");
            im.src = `images/galaxys8/${prefix}1.jpg`;

            for (let i = 0; i < images.length; i++)
                images[i].src = `images/galaxys8/${prefix}${i+1}.jpg`
        })
}