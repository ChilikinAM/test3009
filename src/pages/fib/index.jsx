

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

    console.log(fibonachi(3));
    console.log(fibonachi(2));
    console.log(fibonachi(13));
    console.log(fibonachi(1));
    console.log(fibonachi(7));

    const Dub = (array) => (
        new Set(array).size !== array.length
    )

    console.log(Dub([2, 4, 1, 3, 5, 7, 8]))
    console.log(Dub([2, 4, 1, 2, 5, 7, 8]))

    return (
        <>
            <p>Фибоначчи</p>
        </>
    );
};

export { Fib };
