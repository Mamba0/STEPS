<<<<<<< HEAD
const
=======
let currentUser;



//When you log in
firebase.auth().onAuthStateChanged(firebaseUser => {
	if(firebaseUser){
        console.log(firebaseUser);
    }
    else{
        console.log("Not logged in. or not working");
    }
});
>>>>>>> 51bc765356c2d8244125a9bc380b59530f84fe18
