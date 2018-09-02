var questions = [
  {
    question: 'What is the biggest size called?',
    answers: [' trenka', ' trenta', ' train'],
    images: 'img/question1.jpg',
    correct: 'trenta'
  },
  {
   question: 'What is this green stuff called',
   answers: [' matcho', ' matcha', ' maccha'],
   images: 'img/question2.jpg',
   correct: 'matcha'
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
   answers: [' dolphin', ' angel', ' mermaid'],
   images: 'img/question5.png',
   correct: 'mermaid'
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
   answers: [' just house', ' Starbucks store', ' Starbucks Museum'],
   images: 'img/question8.jpeg',
   correct: 'Starbucks store'
 }
];

var myBtn = document.getElementById('enter');


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

  for (var i = 0; i < 1; i++) { // i<1 means one question in one page
    var containerDiv = document.createElement('div');
    var questionEl = document.createElement('h2');
    var imgDiv = document.createElement('div')
    var questionImg = document.createElement('img');

    questionEl.id = 'questions' + [i];
    questionImg.id = 'questions' + [i];
    questionImg.src = questions[i].images;


    var questionText = document.createTextNode(questions[i].question);
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



    for (var j = 0; j < questions[i].answers.length; j++) {
      var answerDiv = document.createElement('div');
      var answerEl = document.createElement('input');

      //text after input: no need to create 'p'
      var answerText = document.createTextNode(questions[i].answers[j]);
      answerDiv.appendChild(answerEl);
      answerDiv.appendChild(answerText); //add text after input box to div

      answerDiv.className = 'questionWrap';
      answerEl.type = 'checkbox';
      answerEl.name = 'checkbox' + [i];
      answerEl.value = questions[i].answers[j];

      $('.questionWrap').css('margin', '3% 0');
      containerDiv.appendChild(answerDiv);


    } // the end of for loop j
    } // the end of for loop i

    //create submit button
    var submitBtn = document.createElement('button');
    submitBtn.className = 'btn btn-lg btn-outline-success';
    submitBtn.textContent = 'Submit Answer';
    submitBtn.type = 'button';
    submitBtn.style.marginTop = '3%';


    submitBtn.onclick = function() {
      console.log('show me')
      submitAnswer();
    };



    // questionForm.appendChild(submitBtn);
    containerDiv.appendChild(submitBtn);

};  // the end of function createQuestion()

function submitAnswer() {
  var inputEl = document.getElementsByTagName('input');

  for (var i = 0; i < inputEl.length; i++) {
    if(inputEl[i].checked && inputEl[i].value.trim() == questions[0].correct.trim()) {
      console.log('correct answer', inputEl[i]);

      questions.shift();

      inputEl[i].parentElement.className = 'questionWrap right';

      //when all the questions were answered,
      if(questions.length == 0) {
        $('#questionForm').empty();
        // $('body').css({
        //   'background-image': 'url(https://st2.depositphotos.com/4071863/5889/v/950/depositphotos_58896203-stock-illustration-congratulations-typography-lettering-text-card.jpg)',
        //   'background-position': 'center',
        //   'background-repeat': 'no-repeat',
        //   'background-size': 'cover'
        // });

        $('body').css({
          'background-image': 'url(https://s3.envato.com/files/239484194/Shiny%20Gold%20Chains%20%2001_preview1.JPG)',
          'background-size': 'cover',
          'background-position': 'center',
          'background-repeat': 'no-repeat'
        })
        $('#questionForm').html('<img src="https://quotespill.com/wp-content/uploads/2017/04/congratulation-sms-for-achievement-min.png" class="animated flip">' ).css('margin-top', '8%')
        // var lastImg = document.createElement('img');
        // lastImg.src = 'https://st2.depositphotos.com/4071863/5889/v/950/depositphotos_58896203-stock-illustration-congratulations-typography-lettering-text-card.jpg';
        //
        // questionForm.appendChild(lastImg);
        return;
      }
      setTimeout(function() {
        createQuestion();
      }, 500);
      return;

    } else if(inputEl[i].checked && inputEl[i].value.trim() !== questions[0].correct.trim()) {
      //when user checked wrong answer,create alert
      alert('Not correct. Choose anoter one!');
    }
  }; //the end of for loop

    //remove check mark in input - this has to be outside of loop
    //otherwise even correct answer clicked, text shows up
    //prop() - get the property value for only first element
    $('input[type="checkbox"]').prop('checked', false);
    console.log('incorrect answer');

  //   for(var i = 0; i < inputEl.length; i++) {
  //     if (inputEl[i].checked) {
  //       inputEl[i].parentElement.className = 'questionWrap wrong';
  //   }
  // }
} //the end of function submit()
