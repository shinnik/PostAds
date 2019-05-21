
// check phone number for validity and return formatted number
// if phone number is valid or false if it is not
export const formatPhoneNumber = (str) => {
    const var1 = /^(\+7|7|8)+(\([0-9]{3}\)+[0-9]{3}-[0-9]{2}-[0-9]{2})$/;
    const var2 = /^(\+7|7|8)+([0-9]{10})$/;
    const var3 = /^(\+7|7|8)+(\([0-9]{3}\)+[0-9]{7})$/;
    const var4 = /^(\+7|7|8)+-+([0-9]{3})+-+([0-9]{3})+-+([0-9]{2})+-+([0-9]{2})$/;
    if (str.match(var1)) {
        const format = '+7' + str.slice(-14);
        return format;
    } else if (str.match(var2)) {
        const format = '+7' + '(' + str.slice(-10, -7)  + ')' + str.slice(-7, -4)
            + '-' + str.slice(-4, -2) + '-' + str.slice(-2);
        return format;
    } else if (str.match(var3)) {
        const format = '+7' + str.slice(-12, -7) + str.slice(-7, -4)
            + '-' + str.slice(-4, -2) + '-' + str.slice(-2);
        return format;
    } else if (str.match(var4)) {
        const format = '+7' + '(' + str.slice(-13, -10) + ')' + str.slice(-9);
        return format
    } else {
        return false
    }
}
