var addButton = document.getElementById('adder');
var input = document.getElementById('bucketList');
var ul = document.getElementById('listItems');
var noItems = document.getElementById('noItems');
let arr = validInfo[0].bucketList;
console.log(arr);
//console.log(validInfo);

addButton.addEventListener('click',createList,false)

function createList(){
    let inputData = input.value
    /*if nothing is stored on click, ask them to place content*/
    if (inputData.trim() === '') {
        alert('place an item');
    } else {
        /*else, set the content in the array*/
        var randomNum = Math.random(id) * 123456789;
        var id = Math.round(randomNum);
        let li = document.createElement('li');

        li.id = id;
        
        var item = {
            id: id,
            value: inputData
        };
        arr.push(item)
        //shows whats currently in 'arr' variable
        console.log(arr)
        var updatedObj = profile.filter(function (obj) {
            //shows each object in profile array(local storage)
            console.log(obj)
            if((obj.email) === (validInfo[0].email)){
                //if true, show that obj
                console.log(obj)
                return obj.bucketList.push(item);
            }
            else{
                return false;
            }
        })
        console.log(updatedObj)
        for( let idx of arr ) {
            li.innerHTML = displayList(idx);
            ul.append(li);
        }
        updateDatabase(updatedObj)
    }
}

function updateDatabase() {
    sessionStorage.setItem('validInfo', JSON.stringify(validInfo));
    localStorage.setItem('profile', JSON.stringify(profile));
}

function displayList(param){
    return `
        <p class="secFont text-light bucketItem">${param.id}: ${param.value}</p>
        <button id="deleteBtn">&times;</button>
    `
}

function displayData() {
    for( let idx of arr ) {
        let li = document.createElement('li');
        li.id = idx.id;
        li.innerHTML = displayList(idx);
        ul.append(li);
    }
}
 
displayData()

$('div#userContent').on('click', '#deleteBtn',function(e){
    e.preventDefault()
    var parent = document.getElementById(this.parentNode.id);
    var itemId = this.parentNode.id;
    console.log(itemId)
    var updatedList = profile.filter(function(entry){
        console.log(entry)
        for(var i = 0; i < entry.bucketList.length; i++){
            console.log(entry.bucketList[i])
            if(Number(itemId) === Number(entry.bucketList[i].id)){
                //console.log(arr[i])
                arr.splice(i, 1)
                //console.log(arr)
                entry.bucketList = arr
                console.log(entry)
            } 
        }
    })
    console.log(updatedList)
    /*reset the storage*/
    updateDatabase(updatedList)
    /*remove child element from the DOM*/
    parent.remove()
})
