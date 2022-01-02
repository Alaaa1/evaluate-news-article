export const urlChecker = (urlToCheck) => {
    //reference: https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url#:~:text=%2B50-,I%20am,-using%20below%20function
    var res = urlToCheck.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    return (res !== null)
}