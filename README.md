# BitcoinReactapp


This is a react app I am doing from a tutorial.   Everything worked fine until I installed the react-datepicker from this page https://www.npmjs.com/package/react-datepicker.  This caused the app to show a blank screen.

**Before react-datepicker was installed**


**after react-datepicker was installed**

**What I suspect might be the problem**
After I install datepicker and try to use it in my app in assets/js/app/Home.js line 31
I get an error in my the command line that gives me a `DeprecationWarning:  loaderUtils.parseQuery() 
received a non-string value which can be problematic, see  https://github.com/webpack/loader-utils/issues/56 
parseQuery() will be replaced with getOptions() in the next major version of loader-utils`
I have tried to look at  https://github.com/webpack/loader-utils/issues/56 and still don't understand what I am suppose to change 
in my file to make this work but after searching the web I believe that it might have something to do with the webpack.config.js file.
Still I am unsure of what changes I need to do to get this app to work.

 

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
