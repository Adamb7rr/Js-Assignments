function ageInTime(theAge) {

    if (theAge > 100 || theAge < 10) {
        console.log('Age Out Of Range')
    } else {
        let months = theAge * 12
        let weeks = months * 4
        let days = weeks * 7
        let hours = days * 24
        let minutes = hours * 60
        let seconds = minutes * 60

        console.log('#'.repeat(50))
        console.log(`Months => ${months} Months.`)
        console.log(`Weeks => ${weeks} Weeks.`)
        console.log(`Days => ${days} Days..`)
        console.log(`Hours => ${hours} Hours.`)
        console.log(`Minutes => ${minutes} Minutes.`)
        console.log(`Seconds => ${seconds} Seconds.`)
        console.log('#'.repeat(50))
    }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months
ageInTime(22);