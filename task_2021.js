/**
Написать функцию, которая будет принимать объект и копировать из него только те свойства, 
которые прописаны в условиях. Изменение этих ключей в новом объекте не должны менять значения в старом. 
Пример вызова функции copy(obj, ['key1.key2.key3', 'key2.key1']).
Второй аргумент функции - это массив путей, по которым нужно выполнять копирование. 
Этот аргумент может отсутствовать в объекте, например:

a = {
b: null
}

a.b.c
*/
a = {
  b: 1,
  c: null,
  d: "aaa",
};
function copy(obj, pathArray) {
  alert(pathArray.map((path) => path.join(".")));
  // Object.keys()
}
copy(a, ["a.b.c", "a.c"]);
/**
Есть компонент A, принимающий слот, внутри компонента A лежит компонент B, внутри которого компонент C. Задача - передать слот из компонента A в компонент C

Уточнение - прокинуть слот с ограниченной областью видимости из родительского компонента в самый нижний.
Допустим есть таблица, внутри которой компонент строки, внутри которого компонент ячейки.
И в этот компонент ячейки должен передаться слот с ограниченной областью видимости из компонента таблицы.

Передача слота в компонент A:
MainComponent
	ComponentA
		SlotComponent

Иерархия в компоненте A:
ComponentA
	ComponentB
		ComponentC

*/

/**
Реализовать функцию, которая принимает любой тип данных, и преобразовывать тип boolean (при его наличии) в числовое значение.
В качестве параметров могут быть объекты любого уровня вложенности, массивы, строки, числа и т.д.
Т.е. пример
*/

booleanToInt("qwerty"); // 'qwerty'
booleanToInt(1); // 1
booleanToInt(false); // 0
booleanToInt(true); // 1
booleanToInt([1, "qwerty", false]); // [1, 'qwerty', 0]
booleanToInt([1, "qwerty", { a: true }]); // [1, 'qwerty', { a: 1 }]
booleanToInt({ a: { b: true }, c: false, d: "qwerty" }); // { a: { b: 1 }, c: 0, d: 'qwerty' }
booleanToInt({
  date1: {
    date1_1: 1,
    date1_2: [
      {
        date2_1: false,
        date2_2: "str1",
      },
      {
        date2_3: true,
        date2_4: "str2",
      },
      {
        date2_5: false,
        date2_6: "str1",
      },
    ],
    date1_3: false,
    date1_4: {
      date3_1: true,
      date3_2: false,
      date3_3: "str1",
      date3_4: true,
      date3_4: 123,
    },
    date1_5: "true",
  },
});
/**
  date1: {
    date1_1: 1,
    date1_2: [
      {
        date2_1: 0,
        date2_2: 'str1',
      },
      {
        date2_3: 1,
        date2_4: 'str2',
      },
      {
        date2_5: 0,
        date2_6: 'str1',
      },
    ],
    date1_3: 0,
    date1_4: {
      date3_1: 1,
      date3_2: 0,
      date3_3: 'str1',
      date3_4: 1,
      date3_4: 123,
    },
    date1_5: 'true',
  }
  */
