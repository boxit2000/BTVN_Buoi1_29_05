
function change() {
    let cot = document.getElementsByClassName('th');
    console.log(cot);
    let popup = document.getElementById('popup');
    let vitri=0;
    let title = document.getElementById('changeTitle');
    let change = document.getElementById('btnAdd__popup');
    for (let i = 0; i < cot.length; i++) {
        cot[i].addEventListener('click', function () {
            console.log("Cot " + i);
            vitri = i;
            change.addEventListener('click',function(){
                cot[i].innerHTML = title.value;
            })
            
        })
        cot[i].onclick = function () {
            popup.style.opacity = 1;
        }
    }
    console.log(vitri);
    
}

let closePopup = document.getElementById('iconClose');
closePopup.onclick = function () {
    popup.style.opacity = 0;
}

