## 1. `describe()`

Метод `describe` у Jest використовується для групування тестів. Він допомагає організовувати тести в блоки, що стосуються конкретної функції або компонента.

```js
describe('sum', () => {
  // Тести для функції sum
});
```

- **Призначення:** Структурувати тести, групуючи їх логічно.

## 2. `it()` або `test()`

Ці два методи взаємозамінні для написання окремих тестів. Вони визначають конкретний тестовий випадок.

```js
it('should return the correct sum of two numbers', () => {
  expect(sum(1, 2)).toBe(3);
});
```

- **Призначення:** Описати конкретний тестовий випадок.

## 3. `expect()`

Це головний метод у Jest, який викликається для перевірки результату функції. Він приймає результат як аргумент і після цього використовується один із матчерів (наприклад, `toBe()`, `toThrow()`) для порівняння.

```js
expect(sum(1, 2)).toBe(3);
```

- **Призначення:** Оголосити результат, який потрібно перевірити.

## 4. **Матчери**

Матчери — це методи, які використовуються разом з `expect()` для визначення того, як саме перевіряється результат.

- **`toBe()`** — Перевіряє, чи значення точно відповідає очікуваному.

```js
expect(sum(1, 2)).toBe(3);
```

- **`toEqual()`** — Перевіряє глибоку рівність для об'єктів або масивів.

```js
expect({ a: 1 }).toEqual({ a: 1 });
```

- **`toThrow()`** — Перевіряє, чи функція кидає помилку.

```js
expect(() => sum(1, 'a')).toThrow('Invalid input');
```

## 5. **`beforeEach()`**

Цей метод використовується для налаштування середовища тестування перед кожним тестом у блоці `describe`. Корисно для створення мок-функцій, підготовки тестових даних або очищення перед кожним тестом.

```js
beforeEach(() => {
  global.fetch = jest.fn(); // Мокінг глобальної функції fetch
});
```

- **Призначення:** Підготувати середовище тестування перед виконанням кожного тесту.

## 6. **Мок-функції (`jest.fn()`)**

Мок-функції дозволяють створювати фейкові версії функцій для контролю їхньої поведінки в тестах.

```js
const mockFunction = jest.fn();

mockFunction('test');
expect(mockFunction).toHaveBeenCalledWith('test');
```

- **Призначення:** Імітувати функції та перевіряти їхні виклики, аргументи або кількість викликів.
