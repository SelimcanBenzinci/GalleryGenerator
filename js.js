document.addEventListener("DOMContentLoaded", function() {
    // This ensures that the code runs after the DOM is fully loaded

    
    function randomImg() {
        for (let i = 1; i <= 15; i++) { // Change '15' to the total number of images
            document.getElementById('img' + i).src = 'https://source.unsplash.com/random/' + '400x400'  + '/?' + i;
        }
    }


    randomImg();
});