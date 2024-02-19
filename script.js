const password = document.getElementById("password");
const includeUppserCase = document.getElementById("upperCase");
const includeLowerCase = document.getElementById("lowerCase");
const includeNumbers = document.getElementById("includeNumbers");
const includeSymbols = document.getElementById("includeSymbols");
const rangeValue = document.getElementById("rangeContent");
const rangeContent = document.getElementById("range");
const submit = document.getElementById("btnSubmit");
const copyBtn = document.getElementById("copy");

rangeContent.addEventListener("input",()=>{
    rangeValue.innerHTML = rangeContent.value;
})

submit.addEventListener("click",()=>{
    const generatedPassword = randomPassword(rangeContent.value);
    password.innerHTML = generatedPassword;

})

copyBtn.addEventListener("click",()=>{
    navigator.clipboard.writeText(password.innerText)
    .then(() => {
        alert("Text copied to clipboard")
    })
    .catch(err => {
        console.error('Erro ao copiar texto: ', err);
    });

})




function randomPassword(length) {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}







//Minha logica => Criar um random na string, onde irei buscar o valor, ao rangeValue.  => DONE
// essa string tera que ser de a até z com lower e upperCases. => TO DO
// tbm tem que ter núnmmeros e caracteres especiais. => TO DO
// após isso, simplesmente irei filtrar, consoante o que vier das checkboxs. => TO DO
// feito isso, o utilizador ao clicar no "generate" irá devolver a password. => TO DO
// TCHARAN  => TO DO