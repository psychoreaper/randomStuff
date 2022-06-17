function parseExpression(expression) {
    const priorities = {"+": 1, "-": 1, "x": 2, "/": 2, "%": 2, "√": 2};
    const tokens = expression.split(" ");
    let result = [];
    let stack = [];

    tokens.forEach(token => {
        if (token in priorities) {
            if (!stack.length || priorities[stack[stack.length-1]] < priorities[token]) {
                stack.push(token);
            } else {
                while (priorities[stack[stack.length-1]] >= priorities[token]) {
                    result.push(stack.pop());
                }
                stack.push(token);
            }
        } else {
            result.push(token);
        }
    });
    if (stack.length) result = result.concat(stack.reverse());

    return solveRPN(result);
}

function solveRPN(rpnExpression) {
    const operations = {
        "+": (x, y) => x + y,
        "-": (x, y) => x - y,
        "x": (x, y) => x * y,
        "/": (x, y) => x / y,
        "%": (x, y) => x * (y / 100),
        "√": (x) => Math.sqrt(x)
    };
    const tokens = rpnExpression;
    let stack = [];
    tokens.forEach((token) => {
            if (token in operations) {
                if (token !== "√") {
                    let [y, x] = [stack.pop(), stack.pop()];
                    stack.push(operations[token](x, y));
                } else {
                    let x = stack.pop();
                    stack.push(operations[token](x))
                }
            } else {
                stack.push(parseFloat(token));
            }
        }
    )
    return stack.pop();
}

export {parseExpression, solveRPN};