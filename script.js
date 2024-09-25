document.addEventListener('DOMContent.oaded', function() {
    const items = document.querySelectorAll('.item');
    const prevBtn = document.getElementById('.prevBtn');
    const netxBtn = document.getElementById('.nextBtn');
    const indicators = document.querySelectorAll('.indicators li');
    const numberDisplay = document.querySelector('.number');
    let currentIndex = 0;

    function showItem(index) {
        items.forEach(item => item.classList.remove('active'));
        indicators.forEach(indicator=> indicator.classList.remove('active'));

        items[index].classList.add('active');
        indicators[index].classList.add('active');
        numberDisplay.textContent= (index + 1).toString().padStart(2, '0');
    }

    function nextItem() {
       currentIndex = (currentIndex + 1) % items.length;
       showItem(currentIndex);
    }
 
     function prevItem() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showItem(currentIndex);
}

netxBtn.addEventListener('click', nextItem);
prevBtn.addEventListener('click', prevItem);

    //Inicializar
    showitem(currentIndex);
});
