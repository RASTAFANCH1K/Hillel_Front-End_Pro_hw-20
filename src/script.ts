// EXERCISE-1:
// 1)создаем файл с расширение ts))
// 2) создать class функция конструктор которого принимает два параметра
// schoolName, position, salary
// создать метод который возвращает обьект с полями position, salary, и создать тип для этого обьекта и указать соответственно возвращаемый тип!
// 3) class должен описывать обязательно один метод который возвращает скулнейм, задать строгость что если его не будет чтобы typescript ругался на класс
// 4) создать enum c Positions где будут константы boss - 'Vasia', hrManager - 'Zina', sales - 'Akakiy'
// SOLUTION:

interface IUserFunctions {
  getSchoolName(): string;
}

interface IGetPosAndSalary {
  position: string;
  salary: number;
}

enum Positions {
  boss = 'Vasia',
  hrManager = 'Zina',
  sales = 'Akakiy'
}

class User implements IUserFunctions {
  constructor(public schoolName: string, public position: string, public salary: number) {}

  public getPosAndSalary(): IGetPosAndSalary {
    return {
      position: this.position,
      salary: this.salary
    }
  }

  public getSchoolName(): string {
    return this.schoolName;
  }
}

const vasia = new User('Hillel', 'director', 100000);

console.log(vasia);
console.log(vasia.getPosAndSalary());
console.log(vasia.getSchoolName());