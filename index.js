let countBeverage = 1;

let btnAdd = document.querySelector('.add-button');
let btnClose = document.getElementsByClassName('close-field'); //коллекция всех кнопок "закрытия", автообновление
let seqNum = document.getElementsByClassName('sequence-number');

addEventBtnClose(btnClose.item(0)); //назначает onclick на самую первую кнопку, не убирать

btnAdd.addEventListener('click', ()=> {
    countBeverage ++;
    // console.log(countBeverage);
    // let form = document.querySelector('form');
    let el = document.getElementsByClassName('beverage');
    let elClone = el.item(0).cloneNode(true);
    let seqNum = elClone.querySelector('.sequence-number');
    seqNum.innerHTML = countBeverage;
    el.item(el.length - 1).insertAdjacentElement('afterend', elClone);
    addEventBtnClose(btnClose.item(btnClose.length - 1))
});

function addEventBtnClose(btn) {
    btn.addEventListener('click', (el)=> {
        if(countBeverage > 1) {
            // console.log(countBeverage);
            thisElBtn = el.target;
            // console.log(thisElBtn);
            let parent = thisElBtn.parentNode;
            // console.log(parent);
            parent.parentNode.removeChild(parent);
            countBeverage--;
            // console.log(countBeverage);
            updateSeqNum();
        }
    });
}

function updateSeqNum() {
    let len = seqNum.length;
    for(let i = 0; i < len; i++){
        seqNum[i].innerHTML = i + 1;
        // console.log(countBeverageы);
    }
}
