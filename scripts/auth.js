const onSignup = () => {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    console.log({
        firstName, lastName, email, password
    })

    auth.createUserWithEmailAndPassword(email, password)
    .then((userAccount) => {
     db.collection("users").doc().set({firstName, lastName, email, created_at: new Date()})
     .then((userProfile) => {
         alert(("User registered successfully"))
         console.log(userProfile)
         window.location.href = "./login.html";
     })
     .catch((error) => {
        alert("User profile not registered")
        console.log(error)
     })
    
    .catch((error) => {
        alert("Error occurred"); 
        console.log(error)
    })
})}

const onLogin = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password)
    .then((userSession) => {
        alert("user logged in successfully")
        console.log(userSession);
    })
    .catch((error) =>{
        alert("Invalid credentials")
        console.log(error)
    })

}