const app = {
    init: function () {
        // Percentage : reps (55 : 8 -> "55%" of the working weight for 8 reps)
        warmupReps = [8, 5, 3, 1];
        warmumPercentage = [55, 70, 80, 90];
        // call handleCalculateSubmit when "Calculate" button is clicked
        const calculateBtn = document.querySelector('#calculateBtn');
        calculateBtn.addEventListener('click', app.handleCalculateSubmit)
    },
    handleCalculateSubmit: function (evt) {
        evt.preventDefault();

        // Get exercise name and work weight
        const exerciseName = document.querySelector('#exerciseName');
        const workWeight = document.querySelector('#workWeight');

        // Hide main form
        const mainForm = document.querySelector('form');
        mainForm.classList.remove('is--active');
        mainForm.classList.add('--is-hidden');

        // Show result page


        // Calculate warm up sets
        app.calculateWarmupSets();
    },
    calculateWarmupSets() {
        // const firstWarmUpSerieWeight = workWeight.value * warmumPercentage[0] / 100;
        // const secondWarmUpSerieWeight = workWeight.value * warmumPercentage[1] / 100;
        // const thidWarmUpSerieWeight = workWeight.value * warmumPercentage[2] / 100;
        // const fourthWarmUpSerieWeight = workWeight.value * warmumPercentage[3] / 100;
        // console.log('Warm up serie 1 (' + exerciseName.value + ') : '  + firstWarmUpSerieWeight + 'kgs' + ' for ' + warmupReps[0] + ' reps.');
        // console.log('Warm up serie 2 (' + exerciseName.value + ') : '  + secondWarmUpSerieWeight + 'kgs' + ' for ' + warmupReps[1] + ' reps.');
        // console.log('Warm up serie 3 (' + exerciseName.value + ') : '  + thidWarmUpSerieWeight + 'kgs' + ' for ' + warmupReps[2] + ' reps.');
        // console.log('Warm up serie 4 (' + exerciseName.value + ') : '  + fourthWarmUpSerieWeight + 'kgs' + ' for ' + warmupReps[3] + ' reps.');

        // TODO : Même chose avec une boucle. (En cours)
        for (let setNumber = 0; setNumber < 4; setNumber++) {
            const firstWarmUpSerieWeight = workWeight.value * warmumPercentage[setNumber] / 100;
            const secondWarmUpSerieWeight = workWeight.value * warmumPercentage[setNumber] / 100;
            const thidWarmUpSerieWeight = workWeight.value * warmumPercentage[setNumber] / 100;
            const fourthWarmUpSerieWeight = workWeight.value * warmumPercentage[setNumber] / 100;

            console.log(firstWarmUpSerieWeight);
            console.log(secondWarmUpSerieWeight);
        }
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