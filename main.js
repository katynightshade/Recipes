const menuOpen = document.getElementById('open-menu');
const navigation = document.querySelector('.main-nav');
const menuExit = document.getElementById('close-menu');
const title = document.querySelector('.title');
const header = document.querySelector('.header');
const navList = document.querySelector('.nav-list');
const sections = document.querySelectorAll('.boxes');

function handleMenu() {
    menuOpen.addEventListener(('click'), () =>  {
        navigation.style.display = 'flex';
        navigation.style.flexDirection = 'column-reverse';
        navigation.style.width = '95%';
        navList.style.listStyleType = 'none';
        header.style.display = 'flex';
        header.style.flexDirection = 'column-reverse';
        menuOpen.style.display = 'none';
    });
    menuExit.addEventListener(('click'), () => {
        navigation.style.display = 'none';
        menuOpen.style.display = 'initial';
    });
}

function handleClicks() {
    const btnFront = document.querySelectorAll('.btn-front');
    const btnBack = document.querySelectorAll('.btn-back');
    const goBack = document.querySelectorAll('.back-btn');
    const windowWidth = window.screen.width;
    let navGrid = [
        document.getElementById('wow-box').id, 
        document.getElementById('lotr-box').id, 
        document.getElementById('botw-box').id, 
        document.getElementById('ghibli-box').id,
        document.getElementById('hp-box').id,
        document.getElementById('dune-box').id,
        document.getElementById('atla-box').id,
        document.getElementById('skyrim-box').id,
        document.getElementById('nerd-box').id
    ];
    for (let i = 0; i < btnFront.length; i++) {
        for (let i = 0; i < goBack.length; i++) {
            for (let i = 0; i < btnBack.length; i++) {
                for (let i = 0; i < sections.length; i++) {
                    btnFront[i].addEventListener('click', () => {
                        btnFront[i].style.display = 'none';
                        btnBack[i].style.display = 'flex';
                        btnBack[i].style.flexDirection = 'column';
                        btnBack[i].style.gap = '1em';
                        btnBack[i].style.alignItems = 'center';
                        sections[i].style.transition = 'transform 1s';
                        if (windowWidth < 768) {
                            if (sections[i].id == navGrid[0]) {
                                sections[i].style.transform = 'translate(50%, 50%) scale(2)';
                            } else if (sections[i].id == navGrid[1]) {
                                sections[i].style.transform = 'translate(50%, 0) scale(2)';
                            } else if (sections[i].id == navGrid[2]) {
                                sections[i].style.transform = 'translate(50%, 0) scale(2)';
                            } else if (sections[i].id == navGrid[3]) {
                                sections[i].style.transform = 'translate(50%, -50%) scale(2)';
                            } else if ( sections[i].id == navGrid[4]) {
                                sections[i].style.transform = 'translate(-50%, 50%) scale(2)';
                            } else if ( sections[i].id == navGrid[7]) {
                                sections[i].style.transform = 'translate(-50%, -50%) scale(2)';
                            } else {
                                sections[i].style.transform = 'translate(-50%) scale(2)';
                            }
                        } else if (windowWidth >= 768 && windowWidth < 1024) {
                            if (sections[i].id == navGrid[0]) {
                                sections[i].style.transform = 'translate(50%, 50%) scale(2)';
                            } else if (sections[i].id == navGrid[1]) {
                                sections[i].style.transform = 'translate(-50%, 50%) scale(2)';
                            } else if (sections[i].id == navGrid[2]) {
                                sections[i].style.transform = 'scale(2)';
                            } else if (sections[i].id == navGrid[3]) {
                                sections[i].style.transform = 'translate(50%, -50%) scale(2)';
                            } else if(sections[i].id == navGrid[4]) {
                                sections[i].style.transform = 'translate(0, 50%) scale(2)';
                            } else if (sections[i].id == navGrid[5]) {
                                sections[i].style.transform = 'translate(50%, 0) scale(2)';
                            } else if (sections[i].id == navGrid[6]) {
                                sections[i].style.transform = 'translate(-50%, 0) scale(2)';
                            } else if (sections[i].id == navGrid[7]) {
                                sections[i].style.transform = 'translate(0, -50%) scale(2)';
                            } else {
                                sections[i].style.transform = 'translate(-50%, -50%) scale(2)';
                            }
                        } else if (windowWidth > 1024) {
                            if (sections[i].id == navGrid[0]) {
                                sections[i].style.transform = 'translate(50%, 50%) scale(2)';
                            } else if (sections[i].id == navGrid[1] || sections[i].id == navGrid[4]) {
                                sections[i].style.transform = 'translate(0, 50%) scale(2)';
                            } else if (sections[i].id == navGrid[2]) {
                                sections[i].style.transform = 'translate(50%, -50%) scale(2)';
                            } else if (sections[i].id == navGrid[5]) {
                                sections[i].style.transform = 'translate(-50%, 50%) scale(2)';
                            } else if (sections[i].id == navGrid[7]) {
                                sections[i].style.transform = 'translate(-50%, -50%) scale(2)';
                            } else {
                                sections[i].style.transform = 'translate(0, -50%) scale(2)';
                            }
                        }
                        sections[i].style.position = 'relative';
                        sections[i].style.zIndex = '1';
                    });
                    goBack[i].addEventListener('click', () => {
                        btnBack[i].style.display = 'none';
                        btnFront[i].style.display = 'initial';
                        sections[i].style.transform = 'initial';
                        sections[i].style.zIndex = '0';
                    });
                }
            };
        };
    }
}

handleMenu();
handleClicks();