var screen=document.getElementById('screen');
function btnclick(value){
    screen.value+=value;
}
function clearscreen(){
    screen.value='';
}
function findresult(){
    var res=eval(screen.value);
    screen.value=res;
}