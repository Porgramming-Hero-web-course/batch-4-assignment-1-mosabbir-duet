class Car {
  constructor(
    public companyName: string,
    public model: string,
    public year: number
  ) {}

  getCarAge() {
    const currentYear: number = new Date().getFullYear();
    return currentYear - this.year;
  }
}

const car = new Car("Honda", "Civic", 2018);
car.getCarAge();
