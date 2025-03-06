document.addEventListener('DOMContentLoaded', () => {
const OpenSideMeniu = document.querySelector('.open-side-meniu');
const CloseSideMeniu = document.querySelector('.close-side-meniu');
const BodySideMeniu = document.querySelector('.body-sidebar-meniu');
const SideMeniu = document.querySelector('.sidebar-meniu');
const MainBody = document.querySelector('body');

if (OpenSideMeniu){
    OpenSideMeniu.addEventListener('click',()=>{
    
        MainBody.style.overflow = 'hidden';
        setTimeout(()=>{
            CloseSideMeniu.style.display = 'flex';
            OpenSideMeniu.style.display = 'none';
        },50);
        setTimeout(()=>{
            CloseSideMeniu.style.pointerEvents = 'auto';
            OpenSideMeniu.style.pointerEvents = 'none';
        },700);
            
        BodySideMeniu.style.display = 'flex';
        setTimeout(()=>{
            BodySideMeniu.style.opacity = '1';
        },1);
        setTimeout(()=>{
             SideMeniu.classList.add("active-meniu");
        },200);
    });
}

if (CloseSideMeniu) {
    CloseSideMeniu.addEventListener('click',()=>{
    
        MainBody.style.overflow = 'auto';
        setTimeout(()=>{
        CloseSideMeniu.style.display = 'none';
        OpenSideMeniu.style.display = 'flex'; 
        },50);
        setTimeout(()=>{
            OpenSideMeniu.style.pointerEvents = 'auto';
            CloseSideMeniu.style.pointerEvents = 'none';
        },700);
       
        setTimeout(()=>{
            SideMeniu.classList.remove("active-meniu");
       },200);
        setTimeout( ()=>{
            BodySideMeniu.style.opacity = '0';
        },400);
        setTimeout(()=>{
            BodySideMeniu.style.display = 'none';
        },800);
    })
}



const Body = document.body;
const FundalMeniu = document.querySelector('.body-meniu')
const focusFundal = document.querySelector('.body-focus');
const ImgFocus = document.querySelector('.container-pret-imagine-focus img');
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
        console.log("Ati apasat pe item food")
        const ImgClick = item.querySelector('.container-mancare-pret img');
        const TiltuClick = item.querySelector('.body-meniu h1');
        const pretClick = item.querySelector('.body-meniu .pret');
        const DetailClick = item.querySelector('.descriere-item p');
        const NutrientiClick = item.querySelector('.valori-nutritionale');

        if (ImgClick.id === 'Malibu1' || ImgClick.id === 'Malibu2'){
            ImgFocus.classList.add('resizeImg')
        }
        else {
            ImgFocus.classList.remove('resizeImg')
        }
        if(TiltuClick.textContent.length < 18){
            TiltuFocus.style.fontSize = '20px';
        }
        else{
            TiltuFocus.style.fontSize = '18px';
        }
        ImgFocus.src = ImgClick.src;
        TiltuFocus.textContent = TiltuClick.textContent;
        pretFocus.textContent = pretClick.textContent;
        if(NutrientiClick.innerHTML.trim() == "")
        {
            H3Fous[1].style.display = 'none';
        }
        else {
            H3Fous[1].style.display = 'block';
        }
    
        if(DetailClick.textContent == "") {
            DetailFocus.style.display = 'none';
            H3Fous[0].style.display = 'none';
            H3Fous[1].style.marginTop = '24px';
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
      
    })
})

    if(CloseFcous){
        document.addEventListener('click', (event) => {
            if (!ItemFocus.contains(event.target) && !event.target.closest('.body-meniu')) {
                ItemFocus.classList.remove('selected');
                focusFundal.classList.remove('selected');
                FundalMeniu.classList.remove('hidden');
                CloseFcous.style.display = 'none';
                Body.classList.remove('no-scroll');
            }
    });
   
};

if(CloseFcous){
    CloseFcous.addEventListener('click',()=>{
        ItemFocus.classList.remove('selected');
        focusFundal.classList.remove('selected');
        FundalMeniu.classList.remove('hidden');
        CloseFcous.style.display = 'none';
        Body.classList.remove('no-scroll');
        setTimeout( ()=>{
            OpenCloseSideMeniu.style.display = 'flex';
        },150);
    })
}


const ContainerImgMeniu = document.querySelectorAll('.container-mancare-pret');
ContainerImgMeniu.forEach(container =>{
    const ImgMeniu = container.querySelector('.container-mancare-pret img');
    const LoadingScreen = container.querySelector('.loading-screen-meniuItem');
    
    if (ImgMeniu.complete) {
        LoadingScreen.classList.add('LoadComplete');
    } else {
        ImgMeniu.addEventListener('load', () => {
            setTimeout(()=>{
                LoadingScreen.classList.add('LoadComplete');
            },100);
          
        })};
})

    const ItemSelectorSideBar = document.querySelectorAll('.item-selector-sidebar');
    if(ItemSelectorSideBar[0]){
        ItemSelectorSideBar[0].addEventListener('click',(event)=>{
            event.preventDefault();
            if(sessionStorage.getItem('medgidia') === 'true'){
                window.location.href = 'meniu-medgidia.html';
            }
            else {
                window.location.href = 'meniu-eminescu.html';
            }
        })
    }
  
   
    const LogoMeniu = document.querySelector('.logo-meniu img');
    if (LogoMeniu){
        if(sessionStorage.getItem('medgidia') === 'true'){
            LogoMeniu.src = "logo-medgidia.png";
        }
    }

    const ContainerSubCategorieMeniu = document.querySelectorAll('.container-item-sub-meniu');
    ContainerSubCategorieMeniu.forEach(element =>{
        const LoadingScreen = element.querySelector('.loading-screen-meniuItem');
        const ImgSubCategorie = element.querySelector('.container-item-sub-meniu img');

        if (ImgSubCategorie.complete){
            LoadingScreen.classList.add('LoadComplete');
        }
        ImgSubCategorie.addEventListener('load',()=>{
            setTimeout(()=>{
                LoadingScreen.classList.add('LoadComplete');
            },100);
        })
    })

    const Footers = document.querySelectorAll('.footer');
    if (Footers[0] && Footers[1]){
        if(sessionStorage.getItem('medgidia') === 'true'){
            Footers[1].style.display = 'flex';
            Footers[0].style.display = 'none';
        }
        else{
            Footers[0].style.display = 'flex';
            Footers[1].style.display = 'none';
        }
    }

    const LogoSite = document.querySelector('.logo a');
    if (LogoSite){
        LogoSite.addEventListener('click',(e)=>{
            console.log('Ati apsat de logo')
            e.preventDefault();
            if(sessionStorage.getItem('medgidia') === 'true'){
                window.location.href = 'acasa-medgidia.html';
        }
        else {
            window.location.href = 'acasa-eminescu.html';
        }
       });
    };

});