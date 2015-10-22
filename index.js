var path = require('path');
var f = module.exports = {
    findUpDirectoryTreeSync: function (fileName, directory) {
        var file;
        var nextDir;
        directory = directory || '.';
        try {
            file = fs.lstatSync(path.resolve(directory, fileName));
        } catch (e) {
            nextDir = path.resolve(directory, '..');
            if (nextDir === directory) {
                throw new Error('Could not find', fileName);
            }
            return f.findUpDirectoryTreeSync(fileName, path.resolve(directory, '..'));
        }

        return path.resolve(directory, fileName);
    }
}
