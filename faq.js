function toggleAnswer(faqId, image1, image2) {
    const answerDiv = document.getElementById(faqId).getElementsByClassName('answer')[0];
    const toggleButton = document.getElementById(faqId).getElementsByClassName('toggle-button')[0];

    if (answerDiv.style.display === 'none' || answerDiv.style.display === '') {
        answerDiv.style.display = 'block';
        toggleButton.src = image2;
    } else {
        answerDiv.style.display = 'none';
        toggleButton.src = image1;
    }
}

