export default function selectAge(triggerSelector){
    const trigger = document.querySelector(triggerSelector),
        input = document.querySelector('.div');
    
    trigger.addEventListener('click', function(e) {
        e.preventDefault();
        let {top} = trigger.getBoundingClientRect();
        

        // let filters = document.querySelector('.selects__wrapper');
        // filters.append(input)
        input.style.marginTop = `${top + pageYOffset+ 15}px`

        if(!input.classList.contains('active-inp')){
            input.classList.remove('animate__fadeOut')
            input.classList.add('active-inp', 'animate__fadeIn');
        } else{
            input.classList.remove('animate__fadeIn','active-inp');
            input.classList.add('animate__fadeOut');           
        }
    })
}