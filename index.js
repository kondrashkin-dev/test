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

const a = {
  b: 1,
  c: null,
  d: "aaa",
  e: {
    a: {
      a: "11111",
      f: 1110,
    },
    b: "123",
    c: "12",
  },
};

const recursion = (object, prevObj, paths) => {
  const first = paths.shift();

  const newObj = paths.length
    ? {
        [first]: recursion(object[first], prevObj?.[first] || {}, paths),
      }
    : object[first]
    ? { [first]: object[first] }
    : null;

  return { ...prevObj, ...newObj };
};

const copy = (obj, paths) =>
  paths.reduce((prev, curr) => {
    const paths = curr.split(".");
    const newObj = recursion(obj, prev, paths);
    return { ...prev, ...newObj };
  }, {});

console.log("########", copy(a, ["b", "e.a.f", "e.b", "e.d", "a"]));
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
function booleanToInt(param) {
  console.log(myBooleanToInt(param));
}

function myBooleanToInt(data) {
  switch (typeof data) {
    case "boolean":
      return +data;
    case "object":
      for (const key in data) {
        if (Object.hasOwnProperty.call(data, key)) {
          data[key] = myBooleanToInt(data[key]);
        }
      }
    default:
      return data;
  }
}

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
