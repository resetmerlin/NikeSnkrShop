export class Duplicated {
  // Constructor method
  constructor(givenArray) {
    this.givenArray = givenArray;
  }

  // Method
  greet() {
    const duplicated = givenArray.reduce((acc, string) => {
      if (
        givenArray.filter((s) => s === string).length > 1 &&
        !acc.includes(string)
      ) {
        acc.push(string);
      }
      return acc;
    }, []);
    for (let index = 0; index < duplicated.length; index++) {
      givenArray = givenArray.filter((word) => word !== duplicated[index]);
    }
  }
}

export class deleteArrayClicked {
  constructor(givenArray1) {
    this.givenArray1 = givenArray1;
  }

  greet(e) {
    givenArray1 = givenArray1.filter((id) => id !== e);
  }
}
