// 99 Bottles of Beer
// Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal. If you're unfamiliar with the song, you can find the lyrics here.

// Make sure your program can handle both singular and plural cases (i.e. both "100 bottles of beer" and "1 bottle of beer").
for (let numberOfBottle = 99; numberOfBottle >= 0; numberOfBottle--) {
  if (numberOfBottle == 0) {
    console.log(
      `No more bottles of beer on the wall, no more bottles of beer.`
    );
    console.log(
      `Go to the store and buy some more, 99 bottles of beer on the wall.`
    );
  } else if (numberOfBottle == 1) {
    console.log(`1 bottle of beer on the wall, 1 bottle of beer.`);
    console.log(
      `Take one down and pass it around, no more bottles of beer on the wall.`
    );
  } else {
    console.log(
      `${numberOfBottle} bottles of beer on the wall, ${numberOfBottle} bottles of beer.`
    );
    console.log(
      `Take one down and pass it around, ${
        numberOfBottle - 1
      } bottles of beer on the wall.`
    );
  }
}
