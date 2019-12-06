
[![Join the chat at https://gitter.im/DICOMcloud/Lobby](https://badges.gitter.im/DICOMcloud/Lobby.svg)](https://gitter.im/DICOMcloud/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

# DICOMweb-JS
DICOMweb-JS is an open source JS client for consuming DICOM Web Services - part 13 with a ASP.NET MVC demo that uses the [Cornerstone viewer](https://github.com/chafey/cornerstone) and [cornerstoneWADOImageLoader](https://github.com/chafey/cornerstoneWADOImageLoader)  

The code provide a basic library for sending DICOM Web requests and parsing JSON and multipart reposnses in (DIOCM, XML, Buld data...) . 

## Demo Code
The demo uses the library to connect to a DICOM Web server and initiate qido-rs for querying (studies, series and object instances), wado-RS for retrieving  (study, series, object instance) and stow-rs for storing DICOM format images.

Check the [demo page here](http://dicomweb.azurewebsites.net/)

## DICOM Server

[Source code on Github](https://github.com/DICOMcloud/DICOMcloud)

You can check the [web server API here](https://dicomcloud.azurewebsites.net/)

## Building the code
This is an ASP.NET demo so you will need Visual Studio to build the code, you can download the VS2015 community edition or VS code. 
The JavaScript libraries are also built using Visual Studio and TypeScript.

Or you can use the dist folder to include the compiled JS files in your project.


## About
- Author: [DICOM-webjs Contributors](https://github.com/DICOMcloud/DICOMweb-js/graphs/contributors)
- License: [MIT License](http://opensource.org/licenses/MIT)



