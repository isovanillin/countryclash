let questions = [] // REMINDER TO SELF - let is initializing
let currentIndex = 0;

function displayQuestion(n)
{
    const q = questions(n);
    document.getElementById('test')
}

async function fetchQuestions(){ 
    const res = await fetch('question.json')  // await for question.json arrival
    questions = await res.json();
    displayQuestion(); 
}
// not done
