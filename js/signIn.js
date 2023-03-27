/*variables for buttons*/
let signInBtn = document.getElementById('signInBtn');
let logOutBtn = document.getElementById('logOut');
var homeIdx = '/Users/anthony.villalba.g09191/Desktop/anthony-villalba-capstone/index.html'
/*assign events to the buttons*/
signInBtn.addEventListener('click', signIn, false);
logOutBtn.addEventListener('click', logOut, false);

/*on click, signIn function fires*/
function signIn(e) {

    e.preventDefault();
    /*jquery variables that take valuse from inputs*/
    let user_name = $('#userName').val().trim();
    let email = $('#signInEmail').val().trim();
    let password = $('#signInPassword').val().trim();
    let id = $('#confirmationCode').val().trim();

    /*iterate through each object in profile array*/
    for(const element of profile){

        /*nested for loop that loops through each key/value in each object*/
        for (const keys in element) {
            
            /*takes input values, assigns them to signInInfo object*/
            let signInInfo = {user_name, email, password, id};

            /*if all these conditions arent true, return message*/
            if((element.user_name !== signInInfo.user_name) && (element.email !== signInInfo.email) && (element.password !== signInInfo.password) && (element.id !== signInInfo.id)) {
                console.log(`sorry, please review your user info and try again...`)
            }
          
            /*elsewise look for these conditions to be true, if so, fire the function and return message, and change location*/
            else if((element.user_name == signInInfo.user_name) && (element.email == signInInfo.email) && (element.password == signInInfo.password) && (element.id == signInInfo.id)){
                /*function call*/
                storeSessionInfo(element)
                alert(`hello ${signInInfo.user_name} and welcome back!`)

                if(window.location.pathname === homeIdx){
                    window.location = 'html/profile.html';
                    return
                }
                else{
                    window.location = 'profile.html';
                    return
                }
            }
        }
    }
}
/*on button click*/
function logOut(){
    /*if answer is yes*/
    if(window.confirm("Do you really want to leave?")) {
        /*clear session storage*/ 
        sessionStorage.clear();
    }
    /*reload the page to clear content*/
    location.reload(true);
}
