export default function slider(left, right){
    const slides = [
        {
            img: './assets/img/slide1.png',
            title: 'ARTCASTING',
            subtitle: 'Это самый удобный, интуитивный сервис кастингов в рунете'
        },
        {
            img: './assets/img/slide2.png',
            title: 'Это слайд 2',
            subtitle: 'Lorem ipsum dolor sit usantium. Deleniti maxime nemo numquam, labore dolore illum. Expedita, adipisci.' 
        },
        {
            img: './assets/img/slide3.png',
            title: 'Это слайд 3',
            subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat inventore in cum laborum delectus sed accusantium. Deleniti maxime nemo numquam, labore dolore illum. Expedita, adipisci.' 
        }
    ];

    const leftArr = document.querySelector(left),
        rightArr = document.querySelector(right),
        img = document.querySelector('.slider-img'),
        title = document.querySelector('.slider-content_title'),
        subtitle = document.querySelector('.slider-content_subtitle'),
        dots = document.querySelectorAll('.dot');

    let currentSlide = 0;

    img.classList.add('animate__animated');
    title.classList.add('animate__animated');
    subtitle.classList.add('animate__animated');

    function plusSlides(n){
        
        currentSlide += n;
        if(currentSlide > slides.length - 1){
            currentSlide = 0;
        }
        if(currentSlide < 0){
            currentSlide = slides.length - 1;
        }
        return currentSlide;
    }

    function deleteClasses(selector){
        selector.forEach(item => {
            item.classList.remove('animate__fadeInRight','animate__fadeInLeft');
            console.log(item);
        })
    }
    // console.log(img, title);
    leftArr.addEventListener('click', () => {
        plusSlides(-1);
        
        
        slides.forEach((slide, i) => {
            dots.forEach((dot, j) => {
                
                if(currentSlide === i && i === j){
                    dots.forEach(dot => dot.classList.remove('active-dot'))
                    dot.classList.add('active-dot')
                    img.setAttribute('src', slide.img);
                    img.classList.add('animate__fadeInLeft')
                    title.textContent = slide.title;
                    title.classList.add('animate__fadeInLeft')
                    subtitle.textContent = slide.subtitle;
                    subtitle.classList.add('animate__fadeInLeft')
                }
            })
        })
        // deleteClasses([img,title,subtitle])
    });
    console.log(img,title,subtitle);
    rightArr.addEventListener('click', () => {
        console.log(img,title,subtitle);
        plusSlides(1);
        
        img.classList.remove('animate__fadeInLeft');
        title.classList.remove('animate__fadeInLeft');
        subtitle.classList.remove('animate__fadeInLeft');

        // deleteClasses([img,title,subtitle])
        slides.forEach((slide, i) => {
            dots.forEach((dot, j) => {
                if(currentSlide === i && i === j){
                    dots.forEach(dot => dot.classList.remove('active-dot'))
                    dot.classList.add('active-dot')
                    img.setAttribute('src', slide.img);
                    title.textContent = slide.title;
                    subtitle.textContent = slide.subtitle;

                    img.classList.add('animate__fadeInLeft');
                    title.classList.add('animate__fadeInLeft');
                    subtitle.classList.add('animate__fadeInLeft');
                }
            })
        })
    })
}