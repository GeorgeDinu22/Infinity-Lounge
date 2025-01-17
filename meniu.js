document.addEventListener('DOMContentLoaded', () => {
    
    const Body = document.body;
    const FundalMeniu = document.querySelector('.body-meniu')
    const focusFundal = document.querySelector('.body-focus');
    const ImgFocus = document.querySelector('.body-focus img');
    const TiltuFocus = document.querySelector('.body-focus h1');
    const pretFocus = document.querySelector('.body-focus .pret');
    const DetailFocus = document.querySelector('.descriere-item-focus p');
    const NutrientiFocus = document.querySelector('.valori-nutritionale-focus');
    const ItemsFood = document.querySelectorAll('.card-item');
    const ItemFocus = document.querySelector('.card-item-focus');
    const CloseFcous = document.querySelector('.body-focus i');
    const H3Fous = document.querySelectorAll('.body-focus h3');

    ItemsFood.forEach(item => {
        item.addEventListener('click', (event)=>{
            const ImgClick = item.querySelector('.body-meniu img');
            const TiltuClick = item.querySelector('.body-meniu h1');
            const pretClick = item.querySelector('.body-meniu .pret');
            const DetailClick = item.querySelector('.descriere-item p');
            const NutrientiClick = item.querySelector('.valori-nutritionale');

            ImgFocus.src = ImgClick.src;
            TiltuFocus.textContent = TiltuClick.textContent;
            pretFocus.textContent = pretClick.textContent;
            if(DetailClick.textContent == "") {
                DetailFocus.style.display = 'none';
                H3Fous[0].style.display = 'none';
                H3Fous[1].style.marginTop = '40px';
                console.log("Este un string gol la sectiunea descriere")
            }
            else {
                H3Fous[0].style.display = 'flex';
                H3Fous[1].style.marginTop = '20px';
                DetailFocus.style.display = 'flex';
                DetailFocus.textContent = DetailClick.textContent;
            }
            DetailFocus.classList.add('TextStyle')
            NutrientiFocus.innerHTML = NutrientiClick.innerHTML;
            ItemFocus.classList.add('selected');
            focusFundal.classList.add('selected');
            FundalMeniu.classList.add('hidden');
            Body.classList.add('no-scroll');
            setTimeout( ()=>{
                CloseFcous.style.display = 'block';
            },100);
        })
    })

    document.addEventListener('click', (event) => {
        if (!ItemFocus.contains(event.target) && !event.target.closest('.body-meniu')) {
            ItemFocus.classList.remove('selected');
            focusFundal.classList.remove('selected');
            FundalMeniu.classList.remove('hidden');
            CloseFcous.style.display = 'none';
            Body.classList.remove('no-scroll');
        }
    });

    CloseFcous.addEventListener('click',()=>{
        ItemFocus.classList.remove('selected');
        focusFundal.classList.remove('selected');
        FundalMeniu.classList.remove('hidden');
        CloseFcous.style.display = 'none';
        Body.classList.remove('no-scroll');
    })

});