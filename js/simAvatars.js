/*class constructor for imitation profiles*/
class AvatarUser {
  constructor( first, last, email, bio, img ) {
    this.first = first;
    this.last = last;
    this.email = email;
    this.bio = bio;
    this.img = img;
  }
}

/*array of static object 'profiles'*/
let simObj = [
  {"first":"Joanna","last":"Jefferson","email":"johanna@tlm.cloud","bio":"i want to help clean up the earths climate", "img":"../images/simulationImgs/sunset.jpg"},
  {"first":"Kimberly","last":"Kruschev","email":"kimmy@tlm.cloud","bio":"i want to help the world see the joy that lil puppies can bring!", "img":"../images/simulationImgs/puppies.jpg"},
  {"first":"DeJuan", "last":"Joseph", "email":"dejuan@tlm.cloud", "bio":"wants to travel the world", "img":"../images/simulationImgs/travel.jpg"},
  {"first":"Carlos","last":"Guerrero","email":"carlitos@tlm.cloud","bio":"wants to earn a masters degree in fitness", "img":"../images/simulationImgs/collegeSuccess.jpg"},
  {"first":"Jude","last":"Meraz","email":"jude@tlm.cloud","bio":"wants to be of service.", "img":"../images/simulationImgs/servitude.jpg"},
  {"first":"Desmond","last":"Davis","email":"dez@tlm.cloud","bio":"wants to help the community", "img":"../images/simulationImgs/helpingHand.jpg"},
  {"first":"Gabino","last":"Rosales","email":"bino@tlm.cloud","bio":"wants to be a world-class barber", "img":"../images/simulationImgs/hairCuts.jpg"},
  {"first":"Albert","last":"Martinez-Jara","email":"alberto@tlm.cloud","bio":"wants to help the world through coding", "img":"../images/simulationImgs/coders.jpg"},
  {"first":"Jerry","last":"Killedjian","email":"jerry@tlm.cloud","bio":"wants to impact the community through stories", "img":"../images/simulationImgs/stories.jpg"},
  {"first":"Christopher","last":"Scott","email":"chris@tlm.cloud","bio":"wants to give back to others", "img":"../images/simulationImgs/community.jpg"},
  {"first":"Larry","last":"Darry","email":"ld@tlm.cloud","bio":"wants to own a start up company", "img":"../images/simulationImgs/startUp.jpg"},
  {"first":"Bilbo","last":"Baggins","email":"bilbo@tlm.cloud","bio":"wants to go places unseen", "img":"../images/simulationImgs/unknownPlaces.jpg"},
  {"first":"David","last":"Donaldson","email":"david@tlm.cloud","bio":"wants to write a book", "img":"../images/simulationImgs/books.jpg"},
  {"first":"Allen","last":"Albertson","email":"allen@tlm.cloud","bio":"wants to own a chain of grocer stores", "img":"../images/simulationImgs/groceries.jpg"},
  {"first":"Billy","last":"Burgess","email":"billy@tlm.cloud","bio":"wants to visit the ocean", "img":"../images/simulationImgs/oceanicView.jpg"},
  {"first":"Charlie","last":"Chaplin","email":"charlie@tlm.cloud","bio":"wants to make people laugh", "img":"../images/simulationImgs/goodTimes.jpg"},
  {"first":"Eric","last":"Ericson","email":"eric@tlm.cloud","bio":"wants to become a pro-athlete", "img":"../images/simulationImgs/athlete.jpg"},
  {"first":"Francesca","last":"Fredricburg","email":"Frank@tlm.cloud","bio":"wants to  own a dog", "img":"../images/simulationImgs/petFriend.jpg"},
  {"first":"Garry","last":"Gains","email":"garry@tlm.cloud","bio":"wants to eat at hells kitchen", "img":"../images/simulationImgs/dining.jpg"},
  {"first":"Hector","last":"Hillsby","email":"hector@tlm.cloud","bio":"wants to visit the north pole", "img":"../images/simulationImgs/frozenTundra.jpg"},
  {"first":"Inez","last":"Ingrig","email":"inez@tlm.cloud","bio":"i want to help through art", "img":"../images/simulationImgs/art.jpg"},
]
/*function to display array data from simObj*/
function avatarGenerator(simObj){
  /*iterate through each index of the array*/
  for( let idx of simObj ) {
    let div = document.createElement('div');
    /*assigns object to DOM construct*/
    div.innerHTML = showSim(idx);
    div.classList.add('col-12','col-lg-4','mb-3');
    /*assigns template literal to this div*/
    simContent.append(div);
  }
}
/*function with template literal content that takes parameters*/
function showSim(avatar) {
  return ` 
      <div class="card h-100 box-shadow">
        <img class="m-auto card-img-top" src="${avatar.img}" alt="avatar image">
        <div class="card-body p-2">
          <div class="card-text custFont text-dark">${avatar.first} ${avatar.last}</div>
            <p class="card-subtitle mb-3 text-black-50">${avatar.email}</p>
            <section class="card-text secFont">${avatar.bio}</section>
          </div>
        </div>
      </div>
  `;
}
/*fires function*/
avatarGenerator(simObj);
