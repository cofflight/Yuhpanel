$().ready(function(){
const sidebarCollapse = $('.sidebar-menu__collapse');
const chevronCollapse = $('.sidebar-menu__collapse--icon');

let rotateChevron = false;
// Toggle rotate
sidebarCollapse.on('click', toggleChevron);
    
function toggleChevron() {
    if (!rotateChevron) {
        chevronCollapse.addClass('icon-rotate');

        rotateChevron = true;
    }else{
        chevronCollapse.removeClass('icon-rotate');
        
        rotateChevron = false;
    }
}



});