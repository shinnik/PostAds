
export function shortFileName (filename, newLength = 10) {
    if (typeof filename === 'string') {
        console.log(filename.length, 'LENGTH');
        if (filename.length <= newLength + 1) {
            return filename;
        } else {
            const [name, ext] = filename.split('.');
            const ellipsisName = name.slice(0, newLength - ext.length);
            const result = ellipsisName + '...' + ext;
            return result;
        }
    } else {
        return new Error('Filename must be type of "string"')
    }
}
