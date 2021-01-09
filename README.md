# esp8266-controller
This version uses Android APK to communicate with ESP8266

This is my first journey to building an Android app and using Github as version control for a project


Credits:  
https://code.tutsplus.com/tutorials/how-to-create-a-react-native-android-app--cms-35636

Installation of Needed Tools
1. Install Git
   * sudo apt-get install git-all
   * git version
2. Install Node.js
   * curl -sL https://deb.nodesource.com/setup_15.x | sudo -E bash -
   * sudo apt-get install -y nodejs
   * node -v
3. Install Expo Client to your computer
   * sudo  npm install expo-cli --global
   * expo --version
4. Install Expo App for Android to your phone

Building your first APK
1. Create a New Project With Expo
   * expo init nameOfYourApp
   >-The **expo init** command creates a project folder and installs all the dependencies required by the React Native app.  
   >-You will be prompted to choose a template for your project. For now, choose the **blank template**, which gives you minimal dependencies.  
   >-Afterwards, navigate to the project folder of your app, then start the Expo dev tools in that directory
   * cd nameOfYourApp
   * npm start
2. Open the Expo app on your phone and scan the QR Code shown on the terminal
3. Go to actual folder of your app `/home/PcUserName/nameOfYourApp` and look for **App.js**
4. Open **App.js** using your preferred code editor and modify the content of this file to suit your app design
   >-Each time you save the changes you made on this file, the outcome of your app will be shown real-time on the phone where Expo app was installed
5. Once you are done with the code, time to build the APK file of your app using EXPO CLI
   * expo fetch:android:keystore
   >-Get the copy of your keystore first and store it somewhere safe. Path to Keystore:  `/home/PcUserName/nameOfYourApp/tasklist-app.jks`. You will need it at a later time.
   * expo build:android -t apk
   >-Your app components will be uploaded to Expo and they will queue it for building (which may take some time to complete)
6. Download the completed build from https://expo.io/ by logging in to your own account
