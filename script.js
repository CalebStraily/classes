//classes

class Car
{
    constructor(make, model)
    {
        this.make = make;
        this.model = model;
        this.speed = 0;
    }

    accelerate(mph)
    {
        this.speed += mph;
        console.log(`this car is going ${this.speed}`);
    }

    brake(mph)
    {
        this.speed -= mph;
        console.log(`this car is going ${this.speed}`);
    }

    honkHorn()
    {
        console.log()
    }
}

const nissan = new Car("Nissan", "Altima");

nissan.accelerate(50);

nissan.brake(25);

class Employee
{
    constructor(name, title, catchPhrase)
    {
        (this.name = name), (this.title = title), (this.catchPhrase = catchPhrase);
    }
    introduce()
    {
        console.log(`Hi I am ${this.name}, I am a ${this.title}, ${this.catchPhrase}`);
    }
}

const spongebob = new Employee("Spongebob", "frycook", "I'm ready!");
const squidward = new Employee("Squidward", "cashier", "I hate my job.");

spongebob.introduce();
squidward.introduce();

class Animal
{
    speak()
    {
        console.log("some animal noise");
    }
    nap()
    {
        console.log("zzz");
    }
}

//examples of class extension
class Dog extends Animal
{
    speak()
    {
        console.log("barking");
    }
}

class Cat extends Animal
{
    speak()
    {
        console.log("meow");
    }
}

//example of function override (uses that function that is read last)
speak();
function speak()
{
    console.log("speak 1");
}

function speak()
{
    console.log("speak override");
}