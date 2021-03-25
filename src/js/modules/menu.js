export default function menu(menuItemsSelector){
    const menuItems = document.querySelectorAll(menuItemsSelector);
    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            if(e.target.tagName === 'A' && !item.classList.contains('active')){
                console.log(1);
                menuItems.forEach(item => item.classList.remove('active'));
                item.classList.add('active')
            }
        })
    })
}