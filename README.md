# sails-hook-boilerplate

Boilerplate code for an [Installable Sails Hook](http://sailsjs.org/documentation/concepts/extending-sails/hooks/installable-hooks). Hope that it helps a few lost souls (like I was).

Contains a ```test``` directory as well with a basic ```mocha``` test. Comments are everywhere and are hopefully self-explanatory. Suggestions and PRs are welcome!

### Usage

1. Preferably, switch to a clean and new directory. This is to avoid any clashes with existing ``` node_modules ``` folder. I'm assuming this directory to be ``` ~/Documents/demo ```

2. Install the boilerplate code using ``` sudo npm install sails-hook-boilerplate ```. It is indeed preferred to install using administrator rights, as shall be explained later.

3. After the install, it will ask some basic information, like it does when you ``` npm init ```. This is to automatically update the package.json file which came with the original boilerplate package.

4. Enter the details which shall include,
  * Name of the hook
  * Version
  * Description
  * Entry file
  * Author
  * License

5. Keywords shall be automatically added, and will always be these three : ``` ["sails", "hook", "hookName"] ```.

6. The necessary key which identifies a Sails Hook, ``` {sails: {isHook: true}} ``` , is added as well.

7. Once the info has been entered, it's done! You shall then have a folder called ``` sails-hook-hookName ``` in the ``` test ``` directory. It shall have the relevant content which you need to get off a quick start.

8. The ``` lib ``` folder shall have the ``` index.js ``` file, and the ``` test ``` directory shall have a basic test file which can be run using ``` mocha ``` or ``` npm test ```.

That's it! You're ready!

### Notes

Run ```npm test``` or ```mocha``` when you're done, just in case to detect any screw up well in advance.

Please feel free to open up any [issue on GitHub](https://github.com/sakshamsaxena/sails-hook-boilerplate/issues) to drop in a suggestion or something.