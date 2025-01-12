function checkStatus(a, b, c) {
    let first = typeof a
    let second = typeof b
    let third = typeof c
    let newArr = []

    first == 'string' ? newArr.push(a) : second == 'string' ? newArr.push(b) : newArr.push(c)
    first == 'number' ? newArr.push(a) : second == 'number' ? newArr.push(b) : newArr.push(c)
    first == 'boolean' ? newArr.push(a) : second == 'boolean' ? newArr.push(b) : newArr.push(c)
    
    newArr[2] == true ? (newArr[2] = 'Available') : (newArr[2] = 'Not Available')

    console.log(`Hello ${newArr[0]}, Your Age Is ${newArr[1]}, You are ${newArr[2]} For Hire`)
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"