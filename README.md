# Nightbreed
Attempt to remake nightbreedradio.com with modern browser API and React.JS 

All rights and materials belong to © 2018 Nightbreed Radio (http://nightbreedradio.com )

## Install
````console
foo@bar:~$ git clone https://github.com/Frodo-Web/Nightbreed.git
foo@bar:~$ cd ./Nightbreed
foo@bar:~$ npm install
````
## Run
````console
foo@bar:~$ npm run web // Wait until "listening on port 8080" output
````
Make sure 8080 port is free and opened on your device.
Open http://127.0.0.1:8080/ (OR <http://your_device_ip:8080>) in your browser, ensure your browser is not using https-only mode for this page, otherwise radio functionality will not work.

## Disable HTTPS-only mode in Firefox. Required for radio functionality.
This is because Nightbreed Radio is using http protocol for data-streaming. Radio will not work if your browser is configured with HTTPS-only mode, so you need to disable this option for this particular page http://127.0.0.1:8080 (OR <http://your_device_ip:8080>). Or simply use another browser. <br>  

![disabled https-only mode in firefox](https://user-images.githubusercontent.com/102017064/171218360-5467cac9-09ee-4ef3-816a-5bc7352437a3.png)
## Project Screenshots
### Home page (default), Nightbreed Radio Player at the right with songs played history.
![Home Page](https://raw.githubusercontent.com/Frodo-Web/Nightbreed/main/project%20screenshots/Screenshot%202022-05-31%20at%2012-53-22%20Nightbreed%20Radio%20Join%20The%20Revolution%20Home%20page.png)
### Djs page
![Djs Page](https://raw.githubusercontent.com/Frodo-Web/Nightbreed/main/project%20screenshots/Screenshot%202022-05-31%20at%2012-50-03%20Nightbreed%20Radio%20Join%20The%20Revolution%20Djs%20page.png)
## Video demonstration
https://user-images.githubusercontent.com/102017064/171192276-b10f2ca2-f962-42ff-b894-59d5d4c50184.mp4

