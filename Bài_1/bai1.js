let objInfor = [
    {
        name: "Nguyễn Hữu Trường",
        age: 21,
        created_at: "01/02/2000"
    },
    {
        name: "Nguyễn Hữu A",
        age: 21,
        created_at: "01/02/2000"
    },
    {
        name: "Nguyễn Hữu B",
        age: 21,
        created_at: "01/02/2000"
    },
    {
        name: "Nguyễn Hữu C",
        age: 21,
        created_at: "01/02/2000"
    },
    {
        name: "Nguyễn Hữu D",
        age: 21,
        created_at: "01/02/2000"
    },
];
// localStorage.setItem('data', JSON.stringify(objInfor));
function saveData() {
    // localStorage.setItem('data', JSON.stringify(objInfor));
    let data = JSON.parse(localStorage.getItem('data'));
    let addName = document.getElementById('addName');
    let addAge = document.getElementById('addAge');
    let addDate = document.getElementById('addDate');
    let addObj = {
        name: addName.value,
        age: addAge.value,
        created_at: addDate.value
    }
    data.push(addObj);
    console.log(objInfor);
    localStorage.setItem('data', JSON.stringify(data));
    loadData();


}



function loadData() {
    let data = JSON.parse(localStorage.getItem('data'));
    // localStorage.setItem('data', JSON.stringify(data));
    let container = document.getElementById('container');
    let strHTML = "";
    for (let i = 0; i < data.length; i++) {
        strHTML += `
        <div class="infor">
                <div class="infor__img">
                    <img src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" alt="">
                </div>
                <div class="infor__detail">
                    <div class="detail__nameAndAge">
                        <div class="nameAndAge__name">
                            <p id="name">${data[i].name}</p>
                        </div>
                        <div class="nameAndAge__age">
                            <p>Tuổi: </p>
                            <p id="age">${data[i].age}</p>
                        </div>
                    </div>
                    <div class="date">
                        <p>Ngày thêm vào: </p>
                        <p id="date">${data[i].created_at}</p>
                    </div>
                </div>
                <div class="btnDelete">
                    <button onclick="xoa()">Delete</button>
                </div>
            </div>
        `
    }
    container.innerHTML = strHTML;
    // localStorage.setItem('data', JSON.stringify(objInfor));
}
// localStorage.setItem('data', JSON.stringify(objInfor));

// loadData()
// function xoa(){
    function xoa(){
        let data = JSON.parse(localStorage.getItem('data'));
        let dele = document.getElementsByClassName('btnDelete');
        for (let i = 0; i < dele.length; i++){
            dele[i].addEventListener('click',function(){
                console.log("da click" + i);
                data.splice(i,1);
                localStorage.setItem('data', JSON.stringify(data));
                loadData();
                })
        }
    }
    
// }








    // Đóng mở popup
    let popup = document.getElementById('popup');
let btnAdd = document.getElementById('btn-add');
let btnClose = document.getElementById('btn-close');
let btnAdd__popup = document.getElementById('btnAdd__popup');
btnAdd.onclick = function () {
    popup.style.opacity = 1;
}
btnClose.onclick = function () {
    popup.style.opacity = 0;
}
