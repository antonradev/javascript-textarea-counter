/* Counts from 0 to 800 */
function countCharactersTextarea(countedArea) {
    var chars = document.getElementById("chars");
    var txtarea = document.getElementById(countedArea);
    var textareaMessage = document.getElementById("textareaMessage");
    var maxchars = 800;

    txtarea.addEventListener("keyup", function() {
        chars.innerHTML = txtarea.value.length;
        if (txtarea.value.length > 800) {
            textareaMessage.innerHTML = "<span>Ok thats enough! :)</span>";
            txtarea.value = txtarea.value.substring(0, maxchars);
        }
    }, true);
}


/* Counts from 800 to 0 */
function countBackCharactersTextarea(countedArea) {
    var chars = document.getElementById("charsTwo");
    var txtarea = document.getElementById(countedArea);
    var textareaMessage = document.getElementById("textareaMessageTwo");
    var maxchars = 800;

    txtarea.addEventListener("keyup", function() {
        chars.innerHTML = maxchars - txtarea.value.length;
        if (txtarea.value.length > 800) {
            textareaMessage.innerHTML = "<span>No more Chars left! :) Sorry</span>";
            txtarea.value = txtarea.value.substring(0, maxchars);

        }
    }, true);
}

