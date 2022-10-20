let name1= document.getElementById('name');
let name2 = document.getElementById('name2');
let output = document.getElementById('output');
let res = document.getElementById('res');
let h2 = document.getElementsByTagName('h2')[0];

res.addEventListener('click', calLv);

let changeH2 = [name1, name2];

changeH2.forEach(eachName => eachName.addEventListener('focus', runEvent =>{
    h2.innerText = 'Ready To Calculate Your Love Rate!😍';
}));

changeH2.forEach(eachName => eachName.addEventListener('focusout', runEvent2 => {
    h2.innerText = 'Calculate Your Love Life! ❤';
}));

function calLv(e) {
    if(name1.value !== '' && name2.value !== '') {
        let percent = Math.floor(Math.random() * 100) + '%';
        output.innerHTML = '<h4>The Love percentage between '+name1.value+ ' and '+name2.value+ ' is '+percent+'</h4>'

    }else {
        output.innerHTML = 'Please fill the correct names! 😥';
    }
}