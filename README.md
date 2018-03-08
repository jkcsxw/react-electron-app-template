## This is a template for building desktop app with react
You can generate your desktop app on difference system by simply using the following instructions.
Make sure you installed npm, then run 
```
npm install  
npm run build    
npm run package
```
Then you can run your app on any platform it generates. If you only want to generate windows app, try
```
npm run package-win32-x64
```
Notice that the two package instruction can take several minutes but less than 10 minutes because you have to download all the packages depends on to your local.
If it takes more than 5 minites, you should check your downloading source, which may caused by that the source is too far from where you are.
## To have a look at your app
```
npm start
```
