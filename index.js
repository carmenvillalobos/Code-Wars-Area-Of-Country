// Create a function that takes a country's name and its area as arguments and returns the area of the country's proportion of the total world's landmass.

// Examples
// areaOfCountry("Russia", 17098242) ➞ "Russia is 11.48% of the total world's landmass"
// areaOfCountry("USA", 9372610), "USA is 6.29% of the total world's landmass"
// areaOfCountry("China", 9597158) ➞ "China is 6.44% of the total world's landmass"

// Notes
// The total world's landmass is 148,940,000 [Km^2]
// Round the result to two decimal places.

function areaOfCountry(country, countrysLandmass){
    return `${country} is ${(countrysLandmass/148940000 * 100).toFixed(2)}% of the total world's landmass`
}