const dot_product = (v1, v2) => {
    console.log({v1});
    console.log({v2});
    var ps = 0;
    for (var i = 0; i < v1.length; i++) {
        ps += v1[i] * v2[i];
    }
    return ps;
}

const areOrthogonal = () => {
    const v1Group = [[1, 3, 4], [2, 1, 4], [2, 3, 4]];
    const v2Group = [[-2, 1, 5], [0, 0, 0], [-4, -3, -2]];

    for (var i = 0; i < v1Group.length; i++) {
        const dotProduct = dot_product(v1Group[i], v2Group[i]);
        console.log({dotProduct});
        if (dotProduct === 0) {
            printResult(`The two vectors (${v1Group[i]}, and ${v2Group[i]}) are orthogonal.`)
            console.log('These two vectors are orthogonal.');
        }
        else {
            printResult(`The two vectors (${v1Group[i]}, and ${v2Group[i]}) are not orthogonal.`)
            console.log('These two vectors are not orthogonal.');
        }
    }
}

const printResult = (msg) => {
    const resultDiv = document.getElementById('result');

    const r = document.createElement('h2');
    r.innerHTML = msg;
    
    resultDiv.appendChild(r);
}

areOrthogonal();