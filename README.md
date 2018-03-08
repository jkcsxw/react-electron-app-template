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
then you can run the app under ../{your_app_name}-win32-x64/{your_app_name}.exe

Notice that the two package instruction can take several minutes but less than 10 minutes because you have to download all the packages depends on to your local.
If it takes longer than 10 minites, you should check your downloading source, which may caused by that the source is too far from where you are.   

In order to hide the source code of your application, you should train using asar tool. Try scripts I have wrote below  
```
npm run pack-asar
```
It may take several minutes to pack up your application.

## To have a look at your app
```
npm start
```
## To generate installer file  
use asar or other tools

## Preview
![Preview](./preview.png) 