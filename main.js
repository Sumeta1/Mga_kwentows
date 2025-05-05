

const parent = document.getElementById("intro");
const element = document.getElementById("button");
const addbut = document.getElementById("add");
const temp_black = document.getElementById("a-ui");
const area = document.getElementById("temp");
const ui = document.getElementById("main");
const switchbut = document.getElementById("switch");

class Contents {
    constructor () {
        this.LIST = ['<div id="04-19-2025"><div><span style="--clr: rgba(255,0,0,0.4);"></span><span style="--clr: rgba(0,255,0,0.4);"></span><span style="--clr: rgba(0,0,255,0.4);"></span></div><p>So yun, kakatapos lang ng part eleven.April 19 today.So yun pala yung bad na yun.Ang intense naman Jilyana.Kakaiba pala dito.Kala ko normal lang na bad. Huhuhu grabe yung mga words.Anyways, ganda nung story, legit. Natutuwa nako. Wala na hahahaha.Napapareact nako ay. Dapat tahimik lang ako eh.Nakakatuwa yung tarayan nung magkaklase.</p></div>'];
    }
    
    addtext (text) {
        if (text != ""){
            let temp = '<div id="04-19-2025"><div><span style="--clr: rgba(255,0,0,0.4);"></span><span style="--clr: rgba(0,255,0,0.4);"></span><span style="--clr: rgba(0,0,255,0.4);"></span></div><p>' + text + '</p></div>';
            this.LIST.unshift(temp);
        }
    }
    
    update_text() {
        text = "";
        for (let i = 0; i < this.LIST.length; i++){
            text += this.LIST[i];
        }
        return text;
    }
}

element.addEventListener("click", function(){
    document.body.classList.add('clicked');
    /*setTimeout(()=> {
        document.body.classList.remove('clicked');
    }, 2000)*/
});


let isadding = false
function addfunc () {
    if (!isadding) {
        addbut.style.left = "25%";
        temp_black.style.visibility = "visible";
        area.value = "";
        document.body.classList.add('addtext');
        isadding = true;
    }else {
        addbut.style.left = "100%";
        temp_black.style.visibility = "hidden";
        document.body.classList.remove('addtext');
        isadding = false;
    }
}

// this is responsible for getting the text in textarea then post it through the Content class.
Content = new Contents;
function tell () {
    text = area.value;
    Content.addtext(text);
    ui.innerHTML = Content.update_text();
    addfunc();
}

let switchstate = "J";
function switch_ui () {
    switchbut.style.animationPlayState = "running";
    setTimeout(()=> {
        switchbut.style.animationPlayState = "paused";
        switchbut.style.top = "0%";
    }, 1000)
    if (switchstate != "J"){
        switchbut.style.background = "pink";
        switchbut.style.backgroundImage = "url('j.png')";
        switchstate = "J";
    }else {
        switchbut.style.background = "skyblue";
        switchbut.style.backgroundImage = "url('c.png')";
        switchstate = "C";
    }
    switchbut.style.backgroundSize = "100%";
}