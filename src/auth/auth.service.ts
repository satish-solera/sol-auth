const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

interface signInput {
    username?: string,
    email?: string,
    password: string,
    salt: Number
}

interface logInput {
    username?: string,
    email?: string,
    password?: string,
    hashPassword: string,
    secret: string,
    payload: any,
    expiresIn?: any
}


async function signIn({ username, email, password, salt }: signInput) {

    if (!((username || email) && password)) {
        return Error("Missing Field")
    }

    if (email) {
        if (!email.includes("@")) {
            return Error("Email should contains @")
        }
    }


    if (password.length != 8) {
        return Error("Password length should be 8")
    }

    if (!/^(?=.*[A-Z])/.test(password)) {
        return Error("Password must contain at least one Uppercase letter")
    } else if (!/(?=.*[a-z])/.test(password)) {
        return Error("Password must contain at least one Lowercase letter")
    } else if (!/(?=.*\d)/.test(password)) {
        return Error("Password must contain at least one digit")
    } else if (!/(?=.*[@$!%*?&])/.test(password)) {
        return Error('Password must contain at least one symbol')
    }

    const hashPassword = await bcrypt.hash(password, salt)

    return { username, email, hashPassword }

}

async function logIn({ username, email, password, hashPassword, payload, secret, expiresIn }: logInput) {
    if (!((username || email) && password)) {
        return Error("Missing Field")
    }

    const isPasswordValid = await bcrypt.compare(password, hashPassword)

    if (!isPasswordValid) {
        return Error("Password is not valid")
    }

    let token : string | undefined = undefined

    if (payload || secret) {
        token = jwt.sign({ payload }, secret, { expiresIn: expiresIn || "2hr" })
    }



    return { username, email, password: isPasswordValid, token }
}



module.exports = { signIn, logIn }