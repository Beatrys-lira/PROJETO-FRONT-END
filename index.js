document.addEventListener('DOMContent.oaded', function() {
    const items = document.querySelectiorall('.item');
    const prevBtn = document.getElementById('.prevBtn');
    const netxBtn = document.getElementById('.nextBtn');
    const indicators = document.querySelectiorall('.indicators li');
    const numberdisplay = document.querySelectior('.number');
    let currenindex = 0;

    function showitem(index){
        items.forEach(item => item.classList.renove('active'));
        indicators.ForEach(indicator.classList.remove('active'));

        items[index].classList.add('active');
        indicator[index].classList.add('active');
        numberdisplay.textContent=(index + 1).toStringe().padStar(2, '0');
}

    function nextBtn() {
       currentIndex = (currenindex + 1)% items.length;
       showitem(currentindex);
}
 
function prevBtn(){
    currentIndex = (currentIndex - 1 + items.length)% items.length;
    showItem(currentIndex);
}

netxBtn.addEventListener('click', nextItem);
prevBtn.addEventListener('click', prevItem);

//Inicializar
 showitem(currentIndex);
});