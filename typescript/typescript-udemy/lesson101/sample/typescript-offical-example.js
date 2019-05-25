var sortByName = function (a) {
    var result = a.slice(0);
    result.sort(function (x, y) {
        return x.name.localeCompare(y.name);
    });
    return result;
};
sortByName([]);
//# sourceMappingURL=typescript-offical-example.js.map