var Elements = document.querySelectorAll('.touche');
var Operateur = document.querySelectorAll('.touche2');
var Restauration = document.querySelectorAll('.rest');
var princi = document.getElementById('Interface');
var Reponse = document.getElementById('reponse');
var auto = true;
var Egal = document.querySelector('.Egal');

for(let i = 0 ; i < Elements.length ; i++){
      Elements[i].addEventListener('click',() => {
            const touches = Elements[i].innerHTML;
            princi.innerHTML += touches;
      });
};
for(let i = 0 ; i < Operateur.length-1 ; i++){ 
      if(auto == true){
            Operateur[i].addEventListener('click',() => {
                  const touches = Operateur[i].innerHTML;
                  princi.innerHTML += touches;
                  auto = false;
            });
      }
};

Restauration[0].addEventListener('click',() => {
      var acces = princi.innerHTML;
      var acces2 = acces.length;
      princi.innerHTML = acces.substring(0,acces2-1);
      Reponse.innerHTML ='0';
});
Restauration[1].addEventListener('click', () => {
      princi.innerHTML = "";
      Reponse.innerHTML ='0';
});
Egal.addEventListener('click', () =>{
      var acces = princi.innerHTML;
      Reponse.innerHTML = eval(acces)
});
