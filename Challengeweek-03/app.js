suallar = [{
    id: 1,
    sual:'Sah ismayil xetai nece il hakimiyyetde olmusdur?',
    cavablar:['27-il','25-il','18-il','23-il'],
    cavab: 2

},
{
    id: 2,
    sual:'Agqoyunlular ne zaman yaranmisdir?',
    cavablar:['1378-ci il','1290-ci il','1340-ci il','1450-ci il'],
    cavab: 0
},
{
    id: 3,
    sual:'Misirin ilk firavunu kim olmusdur?',
    cavablar:['Ramzes','Tutmes','Menes','Tutankamon'],
    cavab: 3
},
{
    id: 4,
    sual:'Amerikani kim kesf etmisdir?',
    cavablar:['John Adams','Thomas jefferson','Christopher Columbus','Robert Livingston'],
    cavab: 2

}

]

// suallar






// suallarin ekranda gosterilmesi
// gosterilecek olan datalarin istehsal olunmasi (Controller)
// sual 
// cavab
// datalarin gosterileceyi UI elementlerin istehsal olunmasi (View)
// cavablarin ekranda gosterilmesi



function getQuestion(_id, data = suallar) {
    for(let i in data){
        if(_id == data[i].id)
        return data[i].sual
    }
}

function getGuestionChoises(_id, data = suallar){
    for(let i in data){
        if(_id == data[i].id)
        return data[i].cavablar
    }
}

function getCorrectAnswer(_id, data = suallar){
    for(let i in data)
    if(_id == data[i].id)
    return data[i].cavab
}

function checkAnswer(userAnswer,correctAnswer){
    if(userAnswer == correctAnswer){
        return true
    } else {
        return false
    }
}



function showResult(elem, question_id, userAnswer){
    
    if(elem.getAttribute('clicked') == "0"){
        if(checkAnswer(userAnswer,getCorrectAnswer(question_id))){
            elem.style.background = 'yellow'
        } else {
            elem.style.background = 'green'
        }
    }else{
        alert('sadece bir cavab haqqiniz var!')
    }
    for(let i = 0; i < elem.parentElement.children.length; i++){
        elem.parentElement.children[i].setAttribute('clicked','1')
    }
}



function QuestionView(question_id){
    return `<div class="quiz-question alert alert-danger mt-3 mb-0"><span>Sual No:${question_id}</span> ${getQuestion(question_id)}</div>`
}


function QuestionAnswersView(question_id) {
    let answersData = getGuestionChoises(question_id);
    let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ]
    let answers = "";
    for (let i = 0; i < answersData.length; i++) {
        answers += `<div class="quiz-answer alert alert-primary m-0" clicked='0' onclick="showResult(this,${question_id},${i})">${letters[i]} ) ${answersData[i]} </div>`
    }
    let template = `
    <div class="quiz-answers">
            ${answers}
    </div>`
    
    return template;
    }
    





function quizItem(question_id) {

return `
<div class = "quiz-item" >
        ${QuestionView(question_id)}
        ${QuestionAnswersView(question_id)}
</div>
`
}
let quiz = document.querySelector('.quiz')

for(i = 0; i < suallar.length; i++){
    quiz.innerHTML += quizItem( i + 1)
}







// ------------------------------------
