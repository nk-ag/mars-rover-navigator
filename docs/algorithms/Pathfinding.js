function startsearch(event) {
    console.log(event);
    let algo = document.querySelector('input[name="algo"]:checked').value;
    console.log(algo);
    switch (algo) {
        case 'IDA':
            // allowdiagonal=typeof
            console.log(idastar(matrix, startPos, endPos, true, false, 10000));
            break;
        case "A-star":
            // console.log("Inside a-star");
            out = aStar(matrix, startPos, endPos, null, null, true);
            // console.log(out);
            plotPathAndVertices(out);
            break;
        case "BreadthFS":
            out = breadthFS(matrix, startPos, endPos, false, true);
            plotPathAndVertices(out);
            break;
        default:
            console.log("Select one algo");
    }
}