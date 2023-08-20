/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/




interface KeyValuePair<T, U> {
  key: T;
  value: U;
}


const instance: KeyValuePair<string, number | string>[] = [
  { key: "name", value: "It's me" },
  { key: "age", value: 100 },
];
 
export {};