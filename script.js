let vowelCount = 0;

document.getElementById('checkButton').addEventListener('click', function() {
    var input = document.getElementById('characterInput').value;
    var resultElement = document.getElementById('result');
    var vowelCountElement = document.getElementById('vowelCount');
    
    if (input.length === 1 && (input === 'a' || input === 'e' || input === 'i' || input === 'o' || input === 'u' 
        || input === 'A' || input === 'E' || input === 'I' || input === 'O' || input === 'U')) {
        
        resultElement.textContent = "True: It's a vowel!";
        resultElement.classList.add('true');
        resultElement.classList.remove('false');
        vowelCount++;
    } else {
        resultElement.textContent = "False: Not a vowel.";
        resultElement.classList.add('false');
        resultElement.classList.remove('true');
    }
    
    vowelCountElement.textContent = `Vowels entered: ${vowelCount}`;
    document.getElementById('characterInput').value = '';  // Clear the input field
});
