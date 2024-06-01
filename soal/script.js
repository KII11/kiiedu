document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting traditionally

    const formData = new FormData(this);
    const answers = {
        'question1': '5', 'question2': '8', 'question3': '3', 'question4': '7',
        'question5': '8', 'question6': '9', 'question7': '8', 'question8': '9',
        'question9': '9', 'question10': '10'
    };
    let score = 0;
    const totalQuestions = Object.keys(answers).length;

    for (let key in answers) {
        if (formData.get(key) === answers[key]) {
            score += 1;
        }
    }

    const nilai = (score / totalQuestions) * 100;
    const result = document.getElementById('result');
    result.innerHTML = `<div class="popup">
                            <span class="close-btn">&times;</span>
                            Nilai Anda adalah ${nilai.toFixed(0)}
                        </div>`;
    result.style.display = 'block';

    document.querySelector('.close-btn').addEventListener('click', function() {
        result.style.display = 'none';
        document.getElementById('answer-key').style.display = 'block'; // Menampilkan kunci jawaban
    });
});
