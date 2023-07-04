const SLIDES = {
    Links: [
        {
            link: 'assets/images/Rectangle 130 (1).png'
        },
        {
            link: 'assets/images/Group 290.png'
        },
        {
            link: 'assets/images/Rectangle 130 (2).png'
        },
        
    ]
}



const slider = document.querySelector('.slider')
const slides = document.querySelector('.slides')
const switcher = document.querySelector('.switcher')
const btnNext = document.getElementById('next')
const btnPrev = document.getElementById('prev')
let slideCardHTML = ''
let switchTo = 1
btnPrev.disabled = switchTo === 0
btnNext.disabled = switchTo === 2
for (link of SLIDES.Links) {
    slideCardHTML +=   
    `
        <div class="slide-card" style="background-image: url('${link.link}');">
            <div class="card-body">
                <button class="pill-btn">
                    <img src="assets/images/Ellipse 45.png" alt="dote"> Product Update      
                </button>
                <h3 class="h3-big">
                    3D Networking
                </h3>
                <p class="p-white">
                    GL JS is engineered to render even the most detailed, feature-dense maps at 60 FPS on both desktop and mobile devices. 
                </p>
                <h4 class="h4-slider">Explore more  →</h4>
            </div>
        </div> 
    `
    
}

slides.innerHTML = slideCardHTML
const cards = document.querySelectorAll('.slide-card')
cards[1].classList.add('active')
cards[1].classList.remove('hidden')

btnNext.addEventListener('click', switchCard)
btnPrev.addEventListener('click', switchCard)
function switchCard(event) {
    cards[switchTo/1].classList.remove('active')
    if (event.currentTarget.id === 'next') {
        switchTo += 1
        slides.style.transform += `translateX(-1000px)`
        cards[switchTo/1].classList.add('active')
    }
    if (event.currentTarget.id === 'prev') {
        switchTo -= 1
        slides.style.transform += `translateX(1000px)`
        cards[switchTo/1].classList.add('active')
    }
    btnPrev.disabled = switchTo === 0
    btnNext.disabled = switchTo === 2
}

const Cards = {
    Content: [
        {
            class: 'card',
            img: 'assets/images/Rectangle 135.png',
            pill: 'Design without limits',
            title: 'Design',
            text: 'Style your map with lines, polygons, labels, icons, patterns, extrusions, raster & terrain with hundreds of options and a powerful expression language, not only controlling all visual aspects through the zoom range but having the freedom to change them at any time dynamically.',
            bottom: 'Learn more about design  →',
            id: '0',
        },
        {
            class: 'card card-reverse',
            img: 'assets/images/Rectangle 136.png',
            pill: 'Design without limits',
            title: 'Navigation',
            text: 'Inletsky provides powerful routing engines, accurate, traffic-powered travel times, and intuitive turn-by-turn directions to help you build engaging navigation experiences.',
            bottom: 'more about navigate  →',
            id: '1',
        },
        {
            class: 'card',
            img: 'assets/images/Rectangle 136 (1).png',
            pill: 'See what’s inside our studio',
            title: 'Studio',
            text: 'Inletsky Studio is like Photoshop, for maps. We give designers control over everything from colors and fonts, to 3D features and camera angles, to the pitch of the map as a car enters a turn.',
            bottom: 'know more about design  →',
            id: '2',
        },
        {
            class: 'card card-reverse',
            img: 'assets/images/Rectangle 136 (2).png',
            pill: 'Experience our maps',
            title: 'Maps',
            text: 'Our APIs, SDKs, and live updating map data give developers tools to build better mapping, navigation, and search experiences across platforms.',
            bottom: 'more about maps  →',
            id: '3',
        },
        {
            class: 'card',
            img: 'assets/images/Rectangle 135 (1).png',
            pill: 'Tell us what to explore',
            title: 'Search',
            text: 'Search and geocoding is tied to everything we build — maps, navigation, AR — and underlies every app that helps humans explore their world.',
            bottom: 'discover search  →',
            id: '4',
        },
        {
            class: 'card card-reverse',
            img: 'assets/images/Rectangle 136 (3).png',
            pill: 'The vision behind Inletsky',
            title: 'Vision',
            text: "The Inletsky Vision SDK describes every curb, lane, street sign, and road hazard it sees as data. Developers use the SDK's AI-powered semantic segmentation, object detection, and classification to deliver precise navigation guidance, display driver assistance alerts, and detect and map road incidents.",
            bottom: 'discover search  →',
            id: '5',
        },
        {
            class: 'card',
            img: 'assets/images/Rectangle 135 (2).png',
            pill: 'Your data is our responsibility',
            title: 'Data',
            text: 'Our data is powered by hundreds of data sources, and a distributed global users base of more than half a billion monthly active users.',
            bottom: 'discover search  →',
            id: '6',
        },
        {
            class: 'card card-reverse',
            img: 'assets/images/Rectangle 136 (4).png',
            pill: 'Our Newest Product',
            title: 'Atlas',
            text: 'With Atlas, you can self-host Inletsky maps and geocoding APIs, Streets, Satellite, and Terrain tilesets, and Inletsky Studio on your network, behind a firewall, or even air-gapped. Use Atlas to power on-premises applications using Inletsky GL JS v2 and Inletsky Maps SDKs for iOS and Android.',
            bottom: 'discover search  →',
            id: '7',
        },
    ]
}

const container = document.querySelector('.services .container')
let servCards = Cards.Content
let containerHTML = ''
let i = 0
for (card of servCards) {
    containerHTML += `
    <div class="${card.class}">
        <div class="card-body">
            <div class="card-title">
                <button class="pill-btn">
                    <img src="assets/images/Ellipse 45.png" alt="">
                    ${card.pill}
                </button>
                <h2>${card.title}</h2>
            </div>
            <p>
                ${card.text}
            </p>
            <h4 class="h4-blog">${card.bottom}</h4>
        </div>
        <img  class="card-img" src="${card.img}" alt="">
    </div>
    `
    container.innerHTML = containerHTML
    i++;
}


const Comments = {
    CommentInfo: [
        {
            photo: 'assets/images/Ellipse 47.png',
            name: 'Joe Smith',
            text: 'global community is proof that you can be a successful freelancer no matter where you live. Collaborate, network,',
            stars: 0,
        }
    ]
}

const commentsEl = document.querySelector('.comments')
let CommentsHtml = ''
let CommentItem = Comments.CommentInfo
let commentsLength = 10
for (let i = 0; i <= commentsLength; i++) {
    CommentsHtml += `
    <div class="comment-card">
        <div class="card-body">
            <h4 class="h4-card">
                <img src="${CommentItem[0].photo}" alt="">
                ${CommentItem[0].name}
            </h4>
            <p>
                ${CommentItem[0].text}
            </p>
            <div class="stars">
                ${determineStars()}
            </div>
        </div>
    </div>
    `
}

function determineStars() {
    for (item of CommentItem) {
        let activeStars = item.stars
        let noneStars = 5 -activeStars
        let activeStarsHtml = ''
        let noneStarsHtml = ''
        return StarsItecation(activeStars,noneStars,activeStarsHtml,noneStarsHtml)
    }
}

function StarsItecation(activeStars,noneStars,activeStarsHtml,noneStarsHtml) {
    console.log(activeStars)
    for (let i = 1; i <= activeStars; i++) {
        activeStarsHtml += '<img src="assets/images/Star 4.png" alt="">'
    }
    for (let i = 1; i <= noneStars; i++) {
        noneStarsHtml += '<img src="assets/images/Star 5.png" alt="">'
    }
    return activeStarsHtml + noneStarsHtml
}

commentsEl.innerHTML = CommentsHtml

let commentSwitch = 0
const commentNextBtn = document.querySelector('button#comment-next')
const commentPrevBtn = document.querySelector('button#comment-prev')
commentPrevBtn.disabled = commentSwitch === 0
commentNextBtn.disabled = switchTo === commentsLength
const commentSlider = document.querySelector('.comments.slides')
commentNextBtn.addEventListener('click', switchComentCard)
commentPrevBtn.addEventListener('click', switchComentCard)

function switchComentCard(event) {
    if (event.currentTarget.id === 'comment-next') {
        commentSwitch += 1
        commentSlider.style.transform += `translateX(277px)`
    }
    if (event.currentTarget.id === 'comment-prev') {
        commentSwitch -= 1
        commentSlider.style.transform += `translateX(-277px)`
    }
    commentPrevBtn.disabled = commentSwitch === 0
    commentNextBtn.disabled = commentSwitch === commentsLength
}


const FAQ = {
    questions: [
        {
            id: '0',
            question: 'What is Inletsky GL JS?',
            answer: 'With Atlas, you can self-host Inletsky maps and geocoding APIs, Streets, Satellite, and Terrain tilesets, and Inletsky Studio on your network, behind a firewall, or even air-gapped. Use Atlas to power on-premises applications using Inletsky GL JS v2 and Inletsky Maps SDKs for iOS and Android.',
        },
        {
            id: '1',
            question: 'What are the use cases for Inletsky GL JS?',
            answer: 'With Atlas, you can self-host Inletsky maps and geocoding APIs, Streets, Satellite, and Terrain tilesets, and Inletsky Studio on your network, behind a firewall, or even air-gapped. Use Atlas to power on-premises applications using Inletsky GL JS v2 and Inletsky Maps SDKs for iOS and Android.',
        },
        {
            id: '2',
            question: 'What browsers are supported?',
            answer: 'With Atlas, you can self-host Inletsky maps and geocoding APIs, Streets, Satellite, and Terrain tilesets, and Inletsky Studio on your network, behind a firewall, or even air-gapped. Use Atlas to power on-premises applications using Inletsky GL JS v2 and Inletsky Maps SDKs for iOS and Android.',
        },
        {
            id: '3',
            question: 'How do I get started using Inletsky GL JS?',
            answer: 'With Atlas, you can self-host Inletsky maps and geocoding APIs, Streets, Satellite, and Terrain tilesets, and Inletsky Studio on your network, behind a firewall, or even air-gapped. Use Atlas to power on-premises applications using Inletsky GL JS v2 and Inletsky Maps SDKs for iOS and Android.',
        },
        {
            id: '4',
            question: 'What are the new features in Inletsky GL JS v2?',
            answer: 'With Atlas, you can self-host Inletsky maps and geocoding APIs, Streets, Satellite, and Terrain tilesets, and Inletsky Studio on your network, behind a firewall, or even air-gapped. Use Atlas to power on-premises applications using Inletsky GL JS v2 and Inletsky Maps SDKs for iOS and Android.',
        },
    ]
}

const questionsEl = document.querySelector('.questions')
let questionItem = FAQ.questions
let questionsHTML = ''
for (item of questionItem) {
    questionsHTML += `
    <div class="question-card">
        <div class="question">
            <h3>${item.question}</h3>
            <img width="20px"  id="plus-btn" src="assets/images/5e13492fc5e98c4c71ffb010_Union.svg.png" alt="">
        </div>
        <div class="answer">
            <p>
                ${item.answer}
            </p>
        </div>
    </div>
    `
}
questionsEl.innerHTML = questionsHTML

questionsEl.addEventListener('click', showAnswer)

function showAnswer(event) {
    clickedQuestion = event.target.parentNode.parentNode
    console.log(event.target)
    if (event.target.id == 'plus-btn') {
        clickedQuestion.classList.toggle('active-card')
        clickedQuestion.classList.toggle('question-card')
    }
}