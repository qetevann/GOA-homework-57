const names = [
    "Giorgi",
    "Nika",
    "Gvantsa",
    "Ana",
    "Gigi",
    "Salome",
    "George",
    "Luka",
    "Gabriela",
    "Tornike"
];

const filterGNamesShort = (list) =>
    list.filter((name) => name.length > 5 && name.toLowerCase().startsWith("g"));

console.log(filterGNamesShort(names));


function filterGNamesLong(list) {
    return list.filter(function (name) {
        return name.length > 5 && name.toLowerCase().startsWith("g");
    });
}

console.log(filterGNamesLong(names));
