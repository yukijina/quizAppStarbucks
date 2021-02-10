const questions = [
  {
    question: 'What is the biggest size called?',
    answers: [' Trenka', ' Trenta', ' Train'],
    images: 'img/question1.jpg',
    correct: 'Trenta'
  },
  {
   question: 'What is this green stuff called',
   answers: [' Matcho', ' Matcha', ' Maccha'],
   images: 'img/question2.jpg',
   correct: 'Matcha'
 },
 {
   question:'What is this rich, craemy coffee is called',
   answers: [' Nitro cold brew', ' Oxygen rich cold brew', ' Guinness'],
   images: 'img/question3.jpeg',
   correct: 'Nitro cold brew'
 },
 {
   question:'Which is the current Starbucks logo?',
   answers: [' 1', ' 2', ' 3', ' 4'],
   images: 'img/question4.png',
   correct: '4'
 },
 {
   question:'What is the image of Starbucks logo?',
   answers: [' Dolphin', ' Angel', ' Mermaid'],
   images: 'img/question5.png',
   correct: 'Mermaid'
 },
 {
   question:'Starbucks has a lot of secret menu, this is called:',
   answers: [' Snickers Frappuccino', ' Oleo Frappuccino', ' Truly cacao Frappuccino'],
   images: 'img/question6.jpg',
   correct: 'Snickers Frappuccino'
 },
 {
   question:'How many Starbucks stores are in San Francisco as of 2014? Roughly: ',
   answers: [' 50', ' 80', ' 100'],
   images: 'img/question7.jpg',
   correct: '80'
 },
 {
   question:'What is this cool old-style house?',
   answers: [' Just house', ' Starbucks store', ' Starbucks Museum'],
   images: 'img/question8.jpeg',
   correct: 'Starbucks store'
 }
];

const myBtn = document.getElementById('enter');

myBtn.onclick = function startGame() {
  //empty elements in questionForm
  // questionForm.innerHTML = '';
  $('#questionForm').empty();
  createQuestion();
};

function createQuestion() {
  //empty elements in questionForm
  // questionForm.innerHTML = '';
  $('body').css({'background': 'none', 'backgroundColor': 'rgba(5, 150, 76, 0.1)'});
  $('#questionForm').empty();

  // i<1 means one question in one page
  for (let i = 0; i < 1; i++) { 
    // contaeinerDiv - variable higher scope
    var containerDiv = document.createElement('div');
    const questionEl = document.createElement('h2');
    const imgDiv = document.createElement('div')
    const questionImg = document.createElement('img');

    questionEl.id = 'questions' + [i];
    questionImg.id = 'questions' + [i];
    questionImg.src = questions[i].images;


    const questionText = document.createTextNode(questions[i].question);
    questionEl.appendChild(questionText);
    containerDiv.appendChild(questionEl);
    containerDiv.appendChild(imgDiv);
    imgDiv.appendChild(questionImg);
    questionForm.appendChild(containerDiv);

    //style
    $(containerDiv).css({'width': '100%', 'margin': '3% auto', 'text-align': 'center'});
    $(imgDiv).css({'width': '350px', 'margin' : '0 auto'});
    $('img').css({'width': '100%', 'border-radius': '8px'});
    $('h2').css({'margin': '5% auto', 'font-size': '2.5rem'});



      for (let j = 0; j < questions[i].answers.length; j++) {
        const answerDiv = document.createElement('div');
        const answerEl = document.createElement('input');

        //text after input: no need to create 'p'
        const answerText = document.createTextNode(questions[i].answers[j]);
        answerDiv.appendChild(answerEl);
        answerDiv.appendChild(answerText); //add text after input box to div

        answerDiv.className = 'questionWrap';
        answerEl.type = 'radio';
        answerEl.name = 'answer';
        answerEl.value = questions[i].answers[j];

        $('.questionWrap').css('margin', '3% 0');
        containerDiv.appendChild(answerDiv);


      } // the end of for loop j
    } // the end of for loop i

    //create submit button
    const submitBtn = document.createElement('button');
    submitBtn.className = 'btn btn-lg btn-outline-success';
    submitBtn.textContent = 'Submit Answer';
    submitBtn.type = 'button';
    submitBtn.style.marginTop = '3%';


    submitBtn.onclick = function() {
      submitAnswer();
    };

    containerDiv.appendChild(submitBtn);
};  // the end of function createQuestion()


function submitAnswer() {
  const inputEl = document.getElementsByTagName('input');

  for (let i = 0; i < inputEl.length; i++) {
    if (inputEl[i].checked && inputEl[i].value.trim() == questions[0].correct.trim()) {
      console.log('correct answer', inputEl[i]);

      questions.shift();

      inputEl[i].parentElement.className = 'questionWrap right';

      //when all the questions were answered,
      if (questions.length == 0) {
        $('#questionForm').empty();

        $('body').css({
          'background-image': 'url(./img/fireworks.jpg)',
          'background-size': 'cover',
          'background-position': 'center',
          'background-repeat': 'no-repeat'
        })
        $('#questionForm').html('<img src="img/text.png" class="animated flip">' ).css('margin-top', '8%')
        return;
      }
      setTimeout(function() {
        createQuestion();
      }, 500);
      return;

    } else if (inputEl[i].checked && inputEl[i].value.trim() !== questions[0].correct.trim()) {
      //when user checked wrong answer,create alert
      alert('Not correct. Choose anoter one!');
    }
  }; //the end of for loop

    //remove check mark in input - this has to be outside of loop
    //otherwise even correct answer clicked, text shows up
    //prop() - get the property value for only first element
    $('input[type="radio"]').prop('checked', false);
    console.log('incorrect answer');

} //the end of function submit()
