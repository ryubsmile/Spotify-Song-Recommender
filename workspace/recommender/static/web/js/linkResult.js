//gets this as parameter
function parseStringOfButton(self){
    var buttonRawString = self.textContent;

    while(buttonRawString.includes('\n')){ buttonRawString = buttonRawString.replace('\n',''); }
    while(buttonRawString.includes(' ')){ buttonRawString = buttonRawString.replace(' ',''); }

    setInputAs(buttonRawString);
}

//set input hidden value as the text
function setInputAs(text){
    var target = document.getElementById('button-kind');
    target.value = text;
}

function clickedTile(self){
    var parent = self.parentElement;

    parent.className = "clicked-tile";
    self.className = "clicked-tile-text";

    //at the end of this animation, submit data
    parent.addEventListener('animationend', () =>{
        submitValue();
    });
}

function submitValue(){
    var target = document.getElementById('tile-data');
    target.submit();
}




