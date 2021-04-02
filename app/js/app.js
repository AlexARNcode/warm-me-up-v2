const app = {
    mainForm: document.querySelector('form'),
    resultPage: document.querySelector('#result-page'),
    subTitle: document.querySelector('#sub-title'),
    workWeight: document.querySelector('#workWeight'),
    exerciseName: document.querySelector('#exerciseName'),
    formErrorEl: document.querySelector('#form-errors'),
    init: function () {
        // Percentage : reps (55 : 8 -> "55%" of the working weight for 8 reps)
        warmupReps = [8, 5, 3, 1];
        warmumPercentage = [55, 70, 80, 90];
        // DOM elements
        const calculateBtn = document.querySelector('#calculateBtn');
        const newWarmUpLink = document.querySelector('#new-warm-up-link');

        // Listeners
        calculateBtn.addEventListener('click', app.handleCalculateSubmit)
        newWarmUpLink.addEventListener('click', app.handleNewWarmUpClick);
    },
    calculateWarmupSets: function () {
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
    },
    checkUserInputValues: function () {
        let exerciseChoiceIsCorrect = false;
        let workWeightIsCorrect = false;

        // Check exercise choice
        if (app.exerciseName.value != 'default') {
            exerciseChoiceIsCorrect = true;
        }

        //  Check working weight input
        if (Number.isInteger(Number(app.workWeight.value)) && app.workWeight.value != '') {
            workWeightIsCorrect = true;
        }

        // Check if both are correct or not, if not, display error message depending on cases
        if (exerciseChoiceIsCorrect && workWeightIsCorrect) {
            return true;
        } else {
            if (exerciseChoiceIsCorrect === false && workWeightIsCorrect === false) {
                app.formErrorEl.innerHTML = 'Please choose an exercise and type a whole number in the text field !';
                app.formErrorEl.classList.remove('--is-hidden');
                app.formErrorEl.classList.add('--is-active');
            } else if (exerciseChoiceIsCorrect === false && workWeightIsCorrect) {
                app.formErrorEl.innerHTML = 'Please choose an exercise in the list !';
                app.formErrorEl.classList.remove('--is-hidden');
                app.formErrorEl.classList.add('--is-active');
                app.exerciseName.focus();
            } else if (exerciseChoiceIsCorrect && workWeightIsCorrect === false) {
                app.formErrorEl.innerHTML = 'Please type a whole number in the text field !';
                app.formErrorEl.classList.remove('--is-hidden');
                app.formErrorEl.classList.add('--is-active');
                app.workWeight.focus();
            }
            return false;
        }
    },
    handleCalculateSubmit: function (evt) {
        evt.preventDefault();

        // Remove potential error message
        app.formErrorEl.innerHTML = '';
        // Check if user value is OK
        if (app.checkUserInputValues()) {
            // Hide main form and Show result page
            app.showResultPage();

            // Show h3 title
            app.showSubTitle();

            // Calculate warm up sets
            app.calculateWarmupSets();
        }
    },
    handleNewWarmUpClick: function () {
        // Show main form and hide result page
        app.showMainForm();

        app.hideSubTitle();
    },
    hideSubTitle: function () {
        app.subTitle.classList.remove('--is-active');
        app.subTitle.classList.add('--is-hidden');
    },
    showMainForm: function () {
        // Show main form
        app.mainForm.classList.remove('--is-hidden');
        app.mainForm.classList.add('--is-active');

        // Hide result page
        app.resultPage.classList.remove('--is-active');
        app.resultPage.classList.add('--is-hidden');
    },
    showResultPage: function () {
        // Hide main form
        app.mainForm.classList.remove('--is-active');
        app.mainForm.classList.add('--is-hidden');

        // Show result page
        app.resultPage.classList.remove('--is-hidden');
        app.resultPage.classList.add('--is-active');
    },
    showSubTitle: function () {
        app.subTitle.classList.remove('--is-hidden');
        app.subTitle.classList.add('--is-active');

        // Get the text value of the selected exercise name
        const exerciseNameSelectText = app.exerciseName.options[app.exerciseName.selectedIndex].text;
        // Modify the subtitle following : Squat - 70 kgs | Exercice - x kgs
        app.subTitle.innerHTML = exerciseNameSelectText + ' - ' + app.workWeight.value + "kg";
    }
}

document.addEventListener('DOMContentLoaded', app.init);