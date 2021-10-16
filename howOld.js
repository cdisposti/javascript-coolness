// Write your function here:
const howOld = (age, year) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  let calcAge = 0;
  let calcYear = 0;
  let yearBorn = currentYear - age;
  if (year > currentYear) {
    calcAge = age + (year - currentYear)
  return `You will be ${calcAge} in the year ${year}`
  } else if (year < yearBorn) {
    calcYear = yearBorn - year
  return  `The year ${year} was ${calcYear} years before you were born`
  } else if ( year < currentYear && year > yearBorn) {
  calcAge = (year - yearBorn)
  return `You were ${calcAge} in the year ${year}`
}
}



// Once your function is written, write function calls to test your code!
console.log(howOld(44, 2024));
console.log(howOld(44, 1970));
console.log(howOld(44, 1990));
