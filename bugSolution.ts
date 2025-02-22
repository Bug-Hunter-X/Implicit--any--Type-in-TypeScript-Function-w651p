function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); //Prints 1 to 5 correctly

//Example of type error
//printNumbers("hello"); //This will throw a type error at compile time because n is explicitly typed as number.