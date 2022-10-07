

const Fib = () => {
    const fibonachi = (n) => {
        if (n === 1) {
            return 0
        }
        let a = 0;
        let b = 1;
        for (let i = 3; i <= n; i++) {
            let c = a + b;
            a = b;
            b = c;
        }
        return b;
    }

    // console.log(fibonachi(3));
    // console.log(fibonachi(2));
    // console.log(fibonachi(13));
    // console.log(fibonachi(1));
    // console.log(fibonachi(7));

    //поиск дубликатов
    const Dub = (array) => (
        new Set(array).size !== array.length
    )

    // console.log(Dub([2, 4, 1, 3, 5, 7, 8]))
    // console.log(Dub([2, 4, 1, 2, 5, 7, 8]))

    // Перенос всех нулей в массиве

    const array = [1, 0, 4, 12, 25, 0, 3, 0]



    const moveZeroToEnd = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 0) {
                arr.splice(i, 1);
                arr.push(0);
            }
        }
        return arr;
    }

    // console.log(moveZeroToEnd([1, 0, 0, 0, 4, 12, 25, 0, 0, 3, 0]))

    // Возврат конечной цифры


    const getSumNumbers = (num) => {
        while (num) {
            if (num >= 10 || num <= -10) {
                num = eval(num.toString().split('').join('+'));
                console.log(`Process ${num}`);
            } else {
            return num;
            }
        }
    }

    console.log(`result1: ${getSumNumbers(-997818152542188515)}`)
    console.log(`result2: ${getSumNumbers(7)}`)

    return (
        <>
            <p>Фибоначчи</p>
        </>
    );
};

export { Fib };
