/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum weekDay{ MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY}

const isWorkingDay = (day: string): void => {
  if (day === "SATURDAY" || day === "SUNDAY") {
    console.log("Let's go party. It is weekend!");
  } else {
    console.log("Are You iin Forbes list? That's it, go to the work(");
  }
};