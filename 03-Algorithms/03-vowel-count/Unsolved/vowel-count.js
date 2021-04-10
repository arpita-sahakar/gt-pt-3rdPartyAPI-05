// Write code to return the the number of vowels in `str`

// var vowelCount = function(str) {};

let vowelCount = (str) => {
  let vowel = "aeiou";
  let vowelCount = 0;
  let vowelsPresent = [];

  for (i = 0; i < str.length; i++) {
    if (vowel.includes(str[i].toLowerCase())) {
      vowelCount = vowelCount + 1;
      vowelsPresent.push(str[i])
    }
  }
  console.log(vowelCount);
  console.log(vowelsPresent);
};

vowelCount("ArpitaKar");
