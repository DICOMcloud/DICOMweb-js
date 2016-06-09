# dicom-webJS
dicom-webJS is an open source JS client for consuming DICOM Web Services - part 18

The code provide a basic library for sending DICOM Web requests and parsing JSON and multipart reposnses in (DIOCM, XML, Buld data...) . 

## Demo Code
The demo uses the library to connect to a DICOM Web server and initiate qido-rs for querying (studies, series and object instances), wado-RS for retrieving  (study, series, object instance) and stow-rs for storing DICOM format images.

Check the [demo page here](http://dicomweb.azurewebsites.net/)

## DICOM Server
The DICOM Server used by the demo is still under development and I am currently working on supporting missing features. This is a new DICOM Web server implementation and detailed feature support will be provided soon.

[Source code on Github](https://github.com/Zaid-Safadi/DICOMcloud)

You can check the [web server API here](https://dicomcloud.azurewebsites.net/Help/)

## Building the code
This is an ASP.NET demo so you will need Visual Studio to build the code, you can download the VS2015 community edition or VS code. 
The JavaScript libraries are also built using Visual Studio and TypeScript.

Or you can use the dist folder to include the compiled JS files in your project.


## About
- Author: [Zaid Safadi]( https://github.com/Zaid-Safadi)
- License: [MIT License](http://opensource.org/licenses/MIT)



