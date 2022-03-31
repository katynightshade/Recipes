const menuOpen = document.getElementById('open-menu');
const navigation = document.querySelector('.main-nav');
const menuExit = document.getElementById('close-menu');
const title = document.querySelector('.title');
const header = document.querySelector('.header');
const navList = document.querySelector('.nav-list');
const sections = document.querySelectorAll('.boxes');

menuOpen.addEventListener(('click'), () =>  {
    navigation.style.display = 'flex';
    navigation.style.flexDirection = 'column';
    navigation.style.width = '95%';
    navList.style.listStyleType = 'none';
    header.style.display = 'flex';
    header.style.flexDirection = 'column';
    menuOpen.style.display = 'none';
});

menuExit.addEventListener(('click'), () => {
    navigation.style.display = 'none';
    menuOpen.style.display = 'initial';
});

const btnFront = document.querySelectorAll('.btn-front');
const btnBack = document.querySelectorAll('.btn-back');
const sectionIds = document.querySelectorAll('.boxes');
let gridIds = [];

for (let i = 0; i < sectionIds.length; i++) {
    gridIds.push(sectionIds[i].id);
}

let gridLeft = {
    1: gridIds[0],
    2: gridIds[2],
    3: gridIds[4],
    4: gridIds[6],
}
console.log(gridLeft);


for (let i = 0; i < btnFront.length; i++) {
    for (let i = 0; i < btnBack.length; i++) {
        for (let i = 0; i < sections.length; i++) {
            btnFront[i].addEventListener('click', () => {
                btnFront[i].style.display = 'none';
                btnBack[i].style.display = 'flex';
                btnBack[i].style.flexDirection = 'column';
                btnBack[i].style.gap = '1em';
                sections[i].style.transition = 'transform 1s';
                if (gridLeft) {
                    sections[i].style.transform = 'translate(50%) scale(2)';
                } else {
                    sections[i].style.transform = 'translate(-50%) scale(2)'
                }
                sections[i].style.position = 'relative';
            });
            btnBack[i].addEventListener('click', () => {
                btnBack[i].style.display = 'none';
                btnFront[i].style.display = 'initial';
                sections[i].style.transform = 'initial';
            });
        }
    };
}