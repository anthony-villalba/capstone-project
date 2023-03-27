/*variables*/
let form = document.querySelector('form');
let button = document.getElementById('button');

/*assigns an event function to my buttton 'getData'*/
button.addEventListener('click', getData);

function getData(event) {
    event.preventDefault();
    let user_name = $('#user').val().trim();
    let email = $('#email').val().trim();
    let password = $('#password').val().trim();
    let bio = $('#bio').val().trim();
    /*if inputs are empty dont proceed*/
    if(user_name === ''){
        alert('please type in a value, name cannot be blank')
        return false;
    }else if (email === ''){
        alert('please type in a value, email cannot be blank')
        return false;
    }
    else if(password === ''){
        alert('please type in a value, password cannot be blank')
        return false;
    }

    /*assigns values to data object*/
    let data = { user_name, email, password, bio };

    /*passes data properties to newProfile variable and assigns values to function constructor User*/
    const newProfile = new User(data);

   /*calls function to pass newProfile objects content*/
    processData(newProfile);

    /*if newProfile exist, greet User and give them conirmation code*/
    if(newProfile){
        return alert(`hello ${newProfile.user_name}! please write down your password and your confirmation code id (this is part of your log in), which is this: ${newProfile.id} -keep this password/code id private...`)

    }
}
//function called in getData event
processData = function(newProfile){
    //stores new User to object and appends data to session profile
    storeObjData(newProfile)
    storeSessionInfo(newProfile)
    changeLocations()
}
function changeLocations(){
    window.location = 'html/profile.html';
}
