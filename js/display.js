/*triggers displayContent function to display user data from form*/
displayContent();

function displayContent() {
  let userContent = document.getElementById('userContent');
  userContent.className = 'col-10';
  /*iterates through the array 'validInfo'*/
  for( let idx of validInfo ) {
    let div = document.createElement('div');
    /*assigns idx value as parameter to be read by showUserContent function*/
    div.innerHTML = showUserContent(idx);
    div.id = idx.id;
    div.classList.add('leadDiv');
    /*appends the info to DOM container*/
    userContent.append(div);
  }
}

/*template literal storing values in the DOM via html*/
function showUserContent(param) {
  return ` 
    <div class="card-body mb-3">
      <div class="d-flex align-items-center mb-4">
        <img class="img-fluid img-thumbnail rounded-circle" src="../images/avatar/avatar.png">
        <h2 class="custFont mb-2 pl-3">${param.user_name}</h2>
      </div>
      <p class="card-subtitle mb-2 text-warning">${param.email}</p>
      <section class="secFont text-light">${param.bio}</section>
      <div class="d-flex justify-content-end mt-2" id="listMaker">
        <input type="text" class="col-2 mr-2 form-control" id="bucketList" name="toDo" placeholder="enter bucket list">
        <button class="btn custTxt border-warning" id="adder">&plus; Add More</button>
      </div>
        <p id="noItems"></p>
        <ul id="listItems"></ul>
    </div>    
  `;
}
