# BitcoinReactapp


This is a react app I am doing from a tutorial.   Everything worked fine until I installed the react-datepicker from this page https://www.npmjs.com/package/react-datepicker.  This caused the app to show a blank screen.

**Before react-datepicker was installed**
![picture_1_firstscreen](https://user-images.githubusercontent.com/21030885/49704855-bd1fc700-fc5b-11e8-9a3d-464d68fa74f8.jpg)


**depreciation warning**
![picture_2_depreciationwarning](https://user-images.githubusercontent.com/21030885/49704861-d3c61e00-fc5b-11e8-9528-320565aa5e5c.jpg)


**after react-datepicker was installed**
![picture_3_screen_after_react_datepicker](https://user-images.githubusercontent.com/21030885/49704931-8a2a0300-fc5c-11e8-94a4-dcde6041f9e5.jpg)

**assets/js/app/Home.js**
![picture_4_homepage](https://user-images.githubusercontent.com/21030885/49705033-15f05f00-fc5e-11e8-8172-2efec6be2469.jpg)

**What I suspect might be the problem**
After I install datepicker and try to use it in my app in assets/js/app/Home.js line 31
I get an error in my the command line that gives me a `DeprecationWarning:  loaderUtils.parseQuery() 
received a non-string value which can be problematic, see  https://github.com/webpack/loader-utils/issues/56 
parseQuery() will be replaced with getOptions() in the next major version of loader-utils`
I have tried to look at  https://github.com/webpack/loader-utils/issues/56 and still don't understand what I am suppose to change 
in my file to make this work but after searching the web I believe that it might have something to do with the webpack.config.js file.
Still I am unsure of what changes I need to do to get this app to work.

**webpack.config.js**
![picture_5_webpack config js](https://user-images.githubusercontent.com/21030885/49705036-1983e600-fc5e-11e8-80f3-4d5cf96a7a96.jpg)


 

Steps to start this repo

**Steps**
---------

**Download or Pull This Repo**
	Top of this page you can see where it says clone or download

 **Install Node**
	https://nodejs.org/en/

**Download Atom**
	https://atom.io/

 **Install all the node packages** 
On the root of this project run on your terminal (if you want you can do this with yarn but thats optional)
    
    npm install
    
 **Update the node packages** 
On the root of this project run on your terminal (if you want you can do this with yarn but thats optional)
    
    npm update


**Start the server**

  npm run watch
