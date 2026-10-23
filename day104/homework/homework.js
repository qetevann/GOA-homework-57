//1

function addItem(list, newItem) {
    list.push(newItem);
    return list;
}

function addStudent(list, studentName) {
    list.push(studentName);
    console.log("სტუდენტი დამატებულია!");
}


//pop
function removeLastItem(list) {
    return list.pop();
}

function sellLastProduct(products) {
    const soldProduct = products.pop();
    console.log("გაყიდული პროდუქტი იყო: " + soldProduct);
}


//umnshift
function addItemToStart(list, newItem) {
    list.unshift(newItem);
    return list;
}

function addCityToStart(list, cityName) {
    list.unshift(cityName);
    return list;
}


//shift
function removeFirstItem(list) {
    list.shift();
    return list;
}


//length
function countItems(list) {
    return "სიაში არის " + list.length + " ელემენტი";
}


//concat
function mergeLists(list1, list2) {
    return list1.concat(list2);
}

function mergeNamesAndSurnames(names, surnames) {
    return names.concat(surnames);
}


//push + pop
function addTestThenRemoveLast(list) {
    list.push("test");
    list.pop();
    return list;
}


//unshift + shift
function addHelloThenRemoveFirst(list) {
    list.unshift("hello");
    list.shift();
    return list;
}


//concat + length
function mergeAndLogLength(list1, list2) {
    const merged = list1.concat(list2);
    console.log(merged.length);
}


//yvela ertad
function doEverything(list) {
    list.unshift("A");
    list.push("Z");
    list.shift();
    list.pop();

    const anotherList = ["x", "y", "z"];
    const finalList = list.concat(anotherList);

    console.log("საბოლოო სიის სიგრძე არის: " + finalList.length + " და საბოლოო სიაა " + finalList);

    return finalList;
}





//push + for loop

function fillListWithNumbers(list, n) {
    for (let i = 1; i <= n; i++) {
        list.push(i);
    }
    return list;
}


//pop + forloop

function removeLastThree(list) {
    for (let i = 0; i < 3; i++) {
        list.pop();
    }
    return list;
}


//concat + forloop

function mergeAndLogEach(list1, list2) {
    const merged = list1.concat(list2);

    for (let i = 0; i < merged.length; i++) {
        console.log(merged[i]);
    }
}


//yvela metodi forlooptan
function doEverythingWithLoop(list, otherList) {
    list.unshift("Start");
    list.push("End");
    list.shift();
    list.pop();

    const finalList = list.concat(otherList);

    for (let i = 0; i < finalList.length; i++) {
        console.log(finalList[i]);
    }

    return "საბოლოო სიის სიგრძე: " + finalList.length;
}

