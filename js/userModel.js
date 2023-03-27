/*function constructor that gives new objects pre-set properties*/
class User {
    constructor(obj) {
        this.user_name = obj.user_name
        this.email = obj.email
        this.password = obj.password
        this.bio = obj.bio
        this.bucketList = []
        this.id = idGenerator();
    }
}

/*id generator that assigns id value to each new User*/
idGenerator = function() {
    const randomizer = Math.floor(Math.random() * 99);
    User.id = randomizer;
    return User.id;
}
