/*ViewmodeShowcase

ÄndertdieAnordnungderShowcaseItems
############################################################################*/


varviewmodeShowcase={};
viewmodeShowcase.activeMode=false;
viewmodeShowcase.lastButton=false;

document.addEventListener("DOMContentLoaded",function(event){

varactiveElement=document.querySelector("#viewmodeSwitcher.is-active");
viewmodeShowcase.lastButton=activeElement;

document.querySelector("#viewmodeSwitcher").addEventListener("click",function(ev){
varzielElementId=ev.target.dataset.element;
varviewmode=ev.target.dataset.viewmode;
varele=document.querySelector(zielElementId);

if(viewmodeShowcase.activeMode){
ele.classList.remove(viewmodeShowcase.activeMode);
}
ele.classList.add(viewmode);
viewmodeShowcase.activeMode=viewmode;

if(viewmodeShowcase.lastButton){
viewmodeShowcase.lastButton.classList.remove("is-active");
}
ev.target.parentNode.classList.add("is-active");
viewmodeShowcase.lastButton=ev.target.parentNode;
});

});