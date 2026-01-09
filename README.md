# sol-auth

---

A package for the signIn and logIn with less code.
Just import and use it in your project.


# Install
---
```
     npm i sol-auth 
```
# Uses
---

Import the package

```
     const auth = require("sol-auth");
```

SignIn Option

```  
auth.signUp({
     username: username, 
     password: pass, 
     salt: salt 
});
```

LogIn Option

```
auth.logIn({
    username: username, 
    password: password, 
    hashPassword: hashPassword 
});
```

LogIn with JWT Token

``` 
auth.logIn({
    username: username, 
    password: password , 
    hashPassword: hashPassword ,  
    payload , secret, expiresIn
});
```

# Examples

``` 
const signUpFunction = async () => {
    const signinData = await auth.signUp({
             username: username, 
             password: pass, 
             salt: salt 
    });     
}

    signInFunction()
``` 
```  
const logInFunction = async () =>{
    const loginData = await auth.logIn({
            username: username,
             password: pass , 
             hashPassword: hashPassword 
    });
}

    logInFunction()
```
---