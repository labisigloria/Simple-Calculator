let output = document.querySelector('.output');
let result = document.querySelector('.result');
let buttons = Array.from(document.getElementsByClassName('expression'));

buttons.forEach( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                output.innerText = '';
                result.innerText = '0';
                break;
            case '=':
                try{
                    result.innerText = eval(output.innerText);
                    result.style.animation = "0.9s ease-in-out";
                    output.style.animation = "0.9s ease-in-out";
                } catch {
                    result.innerText = "Error"
                }
                break;
            case '←':
                if (output.innerText){
                    output.innerText = output.innerText.slice(0, output.innerText.length-1);
                }
                break;
            default:
                output.innerText += e.target.innerText;
            
        }
    });
});
