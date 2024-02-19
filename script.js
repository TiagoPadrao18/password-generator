const password = document.getElementById("password");
const includeUppserCase = document.getElementById("upperCase");
const includeLowerCase = document.getElementById("lowerCase");
const includeNumbers = document.getElementById("includeNumbers");
const includeSymbols = document.getElementById("includeSymbols");
const rangeValue = document.getElementById("rangeContent");
const rangeContent = document.getElementById("range");
const submit = document.getElementById("btnSubmit");
const copyBtn = document.getElementById("copy");
let valueStrength = document.getElementById("valuesStrength1");
let valueStrength2 = document.getElementById("valuesStrength2");
let  valueStrength3 = document.getElementById("valuesStrength3");
let valueStrength4 = document.getElementById("valuesStrength4");

rangeContent.addEventListener("input",()=>{
    rangeValue.innerHTML = rangeContent.value;
})



submit.addEventListener("click",()=>{
    let chars = 'abcdefghijklmnopqrstuvwxyz';
    valueStrength.style.backgroundColor = "orange"; 

    if (includeUppserCase.checked) {
        chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        valueStrength2.style.backgroundColor = "orange";
    } else{
        valueStrength2.style.backgroundColor = "transparent";
    }
    if (includeNumbers.checked) {
        chars += '0123456789';
        valueStrength3.style.backgroundColor = "orange";
    } else{
        valueStrength3.style.backgroundColor = "transparent";
    }
    if (includeSymbols.checked) {
        chars += '!@#$%^&*()_+~`|}{[]\:;?><,./-='; 
        valueStrength4.style.backgroundColor = "orange";
    } else{
        valueStrength4.style.backgroundColor = "transparent";
    }

    const generatedPassword = randomPassword(rangeContent.value, chars);
    password.innerHTML = generatedPassword;

})


function randomPassword(length, chars) {
    let randomPassword = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        randomPassword += chars[randomIndex];
    }
    return randomPassword;
}


copyBtn.addEventListener("click",()=>{
    navigator.clipboard.writeText(password.innerText)
    .then(() => {
        alert("Text copied to clipboard")
    })
    .catch(err => {
       alert(err.catch);
    });

})












//Minha logica => Criar um random na string, onde irei buscar o valor, ao rangeValue.  => DONE
// essa string tera que ser de a até z com lower e upperCases. => TO DO
// tbm tem que ter núnmmeros e caracteres especiais. => TO DO
// após isso, simplesmente irei filtrar, consoante o que vier das checkboxs. => TO DO
// feito isso, o utilizador ao clicar no "generate" irá devolver a password. => TO DO
// TCHARAN  => TO DO

//'!@#$%^&*()_+~`|}{[]\:;?><,./-=';