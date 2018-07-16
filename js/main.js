var questions = [
  {
    question: 'What is the biggest size called?',
    answers: [' trenka', ' trenta', ' train'],
    images: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/12/15/16/starbucks-cup-sizes.jpg?w968h681',
    correct: 'trenta'
  },
  {
   question: 'What is this green stuff called',
   answers: [' matcho', ' matcha', ' maccha'],
   images: 'https://i0.wp.com/www.society19.com/wp-content/uploads/2017/11/matcha.jpg?resize=564%2C347&ssl=1',
   correct: 'matcha'
 },
 {
   question:'What is this rich, craemy coffee is called',
   answers: [' Nitro cold brew', ' Oxygen rich cold brew', ' Guinness'],
   images: 'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fstarbucks-nitro-cold-brew-ft-blog0717.jpg%3Fitok%3DMOzbvzfd&w=700&q=85',
   correct: 'Nitro cold brew'
 },
 {
   question:'Which is the current Starbucks logo?',
   answers: [' 1', ' 2', ' 3', ' 4'],
   images: 'img/question_logo.jpg',
   correct: '4'
 },
 {
   question:'What is the image of Starbucks logo?',
   answers: [' dolphin', ' angel', ' mermaid'],
   images: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw9_mXMz45SNKnubuvGBZbakBahcrG15ka2nYXZdruHbI_c1k_',
   correct: 'mermaid'
 },
 {
   question:'Starbucks has a lot of secret menu, this is called:',
   answers: [' Snickers Frappuccino', ' Oleo Frappuccino', ' Truly cacao Frappuccino'],
   images: 'https://thumbor.thedailymeal.com/TTbXrBWlcczoxt2ozDQepeG8sm0=/774x516/filters:focal(595x384:596x385)/https://www.thedailymeal.com/sites/default/files/2017/08/25/6_Snickers_Slide_Edit.jpg',
   correct: 'Snickers Frappuccino'
 },
 {
   question:'How many Starbucks stores are in San Francisco as of 2014? Roughly: ',
   answers: [' 50', ' 100', ' 80'],
   images: 'https://cdn-starbucks.netdna-ssl.com/uploads/images/_framed/bm4mvsqB-3245-2163.jpg',
   correct: '80'
 },
 {
   question:'What is this cool old-style house?',
   answers: [' just house', ' Starbucks store', ' Starbucks Museum'],
   images: 'https://fullnoteblog.com/wp-content/uploads/2017/07/Starbucks-Kyoto-Yasaka-04.jpg',
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
  $('body').css('background', 'none');
  $('#questionForm').empty();

  for (var i = 0; i < 1; i++) { // i<1 means one question in one page
    var containerDiv = document.createElement('div');
    var questionEl = document.createElement('h2');
    var questionImg = document.createElement('img');

    containerDiv.id = 'containerDiv';
    questionEl.id = 'questions' + [i];
    questionImg.id = 'questions' + [i];
    questionImg.src = questions[i].images;


    var questionText = document.createTextNode(questions[i].question);
    questionEl.appendChild(questionText);
    containerDiv.appendChild(questionEl);
    containerDiv.appendChild(questionImg);
    questionForm.appendChild(containerDiv);

    //style
    $('#containerDiv').css({'width': '100%', 'margin': '0 auto', 'text-align': 'center'});
    $('img').css('width', '40%');
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


      }
    }
    //create submit button
    var submitBtn = document.createElement('button');
    submitBtn.className = 'btn btn-lg btn-outline-danger';
    submitBtn.textContent = 'Submit Answer';
    submitBtn.type = 'button';
    submitBtn.style.marginTop = '3%';


    submitBtn.onclick = function() {
      console.log('show me')
      submitAnswer();
    };



    // questionForm.appendChild(submitBtn);
    containerDiv.appendChild(submitBtn);

};

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
        var lastImg = document.createElement('img');
        lastImg.src = 'https://www.galveston.com/uploads/images/fireworks.png';
        questionForm.appendChild(lastImg);
        return;
      }
      setTimeout(function() {
        createQuestion();
      }, 500);
      return;

    } else {
      //when user checked wrong answer,
      //create text
      var tryText = document.createElement('p');
      tryText.textContent = 'Not correct. Choose anoter one!';
      tryText.style.margin = '2% 0 10% 0';
    }
  };
    //add text to div
    containerDiv.appendChild(tryText);
    //remove check mark in input - this has to be outside of loop
    //otherwise even correct answer clicked, text shows up
    $('input[type="checkbox"]').prop('checked', false);
    console.log('incorrect answer', inputEl[i]);

    for(var i = 0; i < inputEl.length; i++) {
      if (inputEl[i].checked) {
        inputEl[i].parentElement.className = 'questionWrap wrong';
    }
  }
}









// questions.forEach(function(question) {
//   var p = document.createElement('p');
//   p.textContent = question;
//   // $('.box').append($(p));
//
//   jQuery(p).each(function(i) {
//     jQuery('.box').append($(this));
//   })
// });
