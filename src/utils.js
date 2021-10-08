function isValid(input) {

    let errors = {}
    if (!input.mail) {
        errors.mail = "Mail is required"
    } else if (!/\S+@\S+\.\S+/.test(input.mail)) {
        errors.mail = "The text entered is not an email"
    }
    if (!input.subjet) {
        errors.subjet = "Subjet is required"
    } else if (input.subjet.length < 10) {
        errors.subjet = "The subject must contain a minimum of 10 characters"
    } 
    if (!input.message) {
        errors.message = "Message is required"
    } else if (!input.message.length > 256) {
        errors.message = "The message must contain a maximum of 256 characters"
    }
    return errors;
}

module.exports = isValid;