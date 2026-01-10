# sol-auth

---

A package for the signUp and logIn with less code.
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

SignUp Option

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

    
``` 
```  
const logInFunction = async () =>{
    const loginData = await auth.logIn({
            username: username,
             password: pass , 
             hashPassword: hashPassword 
    });
}

    
```
<a href="https://www.buymeacoffee.com/satishsolen"><img src="https://img.buymeacoffee.com/button-api/?text=Buymeacoffee&emoji=&slug=satishsolen&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff" /></a>







