var grunt = require("grunt");
grunt.config.init({
    pkg: grunt.file.readJSON('package.json'),
    'create-windows-installer': {
        x64: {
            appDirectory: './react-desktop-app-template-win32-x64',
            outputDirectory: './installer',
            authors: 'xkzero',
            exe: 'react-desktop-app-template.exe',
            description:"template",
        }       
    }
})

grunt.loadNpmTasks('grunt-electron-installer');
grunt.registerTask('default', ['create-windows-installer']);