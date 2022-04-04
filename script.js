function verificar(params) {
    let aluno = document.getElementById("txtaluno");
    let media = document.getElementById("media");
    let matematica = parseFloat(document.getElementById("matematica").value);
    let portugues = parseFloat(document.getElementById("portugues").value);
    let p = document.querySelector("P");
    let alu = aluno.value;
    if (aluno.value.length == 0 || matematica.value == 0 || portugues.value == 0) {
        alert("[erro] Digite o nome e notas !");
    } 
    media.innerHTML  += " Do Aluno " + alu + " é " + parseFloat(matematica+=portugues) /2;
    if ((matematica+portugues)/2 <=5) {
         p.textContent = "Aluno: Reprovado";
         
    }else{
        p.textContent = "Aluno:  Aprovado";
    }
}     