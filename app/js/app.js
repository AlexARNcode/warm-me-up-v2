const app = {
    init: function () {
        // call handleCalculateSubmit when "Calculate" button is clicked
        const calculateBtn = document.querySelector('#calculateBtn');
        calculateBtn.addEventListener('click', app.handleCalculateSubmit)
    },
    handleCalculateSubmit: function (evt) {
        evt.preventDefault();

        const exerciseName = document.querySelector('#exerciseName').value;
        const workWeight = document.querySelector('#workWeight').value;

        console.log (exerciseName + ' -> ' + workWeight);


    }
}

document.addEventListener('DOMContentLoaded', app.init);

/* 
    #1	Just the bar/very light dumbbells.	10-15	45-60 seconds
    #2	55-60% of the weight you will be using for this exercise.	8	45-60 seconds
    #3	70-75% of the weight you will be using for this exercise.	5	45-60 seconds
    #4	80-85% of the weight you will be using for this exercise.	3	45-60 seconds
    #5	90-95% of the weight you will be using for this exercise.	1	Full Amount

    #1 Empty bar or ligth dumbells / 10-15 reps
    #2 55% / 8 reps
    #3 70% / 5 reps
    #4 80% / 3 reps
    #5 90%  / 1 rep
*/