

/**
 * Calculates the duration between two dates.
 * @param {Date} startDate - The start date.
 * @param {Date} endDate - The end date.
 * @returns {Object} An object containing the duration and duration type.
 */
function durationCalculator(startDate, endDate) {
    const durations = {
        duration: 0,
        durationType: ''
    };

    var startDateAsNumber = new Date(startDate).getTime();
    var endDateAsNumber = new Date(endDate).getTime();
    var difference = endDateAsNumber - startDateAsNumber;
    var oneHour = 1000 * 60 * 60;
    var numberOfHours = difference / oneHour;

    if (numberOfHours < 1) {
        let numberOfMinutes = Math.floor(difference / (1000 * 60));
        durations.duration = numberOfMinutes;
        durations.durationType = "Minutes";
    } else if (numberOfHours >= 1 && numberOfHours < 24) {
        durations.duration = Math.floor(numberOfHours);
        durations.durationType = "Hours";
    } else if (numberOfHours >= 24 && numberOfHours < 168) {
        durations.duration = Math.floor(numberOfHours / 24);
        durations.durationType = "Days";
    }

    return durations;
}