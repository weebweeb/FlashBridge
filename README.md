# FlashBridge
FlashBridge is a compatibility tool for old Flash applications. Currently in testing.

# Abstract
Adobe Flash player was discontinued in 2020. However, some Flash sites and games continue to operate and thrive. These Flash elements however, are disconnected from the rest of the world. Popular sites like Youtube and Facebook have long since moved to HTML5, and so have their API references. This tool is a middleman for those old Flash elements- to give them information they might otherwise need. Currently a work in progress.


# How to use
The tool acts as a standalone web app, with a simple webpage as its index.
![FDfH67N](https://user-images.githubusercontent.com/20445961/109383614-8a525f80-78b5-11eb-9b9e-18785495d92a.png)


The web server takes in requests in the form of search parameters to its `request` folder. This is to be best compatable with ActionScript.
Like so:
![11K4Y5G](https://user-images.githubusercontent.com/20445961/109383596-71e24500-78b5-11eb-985e-30bc1316704d.png)

The app has the current functionalities(more will be added as needed):

# Youtube Grabber
We can search for Youtube videos by submitting a Video ID to `request`, under the term `?vidurl` as shown before:
![11K4Y5G](https://user-images.githubusercontent.com/20445961/109383596-71e24500-78b5-11eb-985e-30bc1316704d.png)

Right now, these videos are saved to the local device, in the folder this program resides in. This will be changed.




# Installation

1. Install the dependancies needed

2. Download the repository ZIP archive

3. Create a new Express app with Pug as the view engine:

`express FlashBridge --view="pug"`

4. Then, unzip the downloaded repository into the directory of your Express app, overwriting filenames and folders when needed.

5. Run as a standard Node app.



# Disclaimer
This program is for personal and educational purposes only. Although downloading the video files is the only known way for Flash applications to retrieve youtube videos, downloading copyrighted material without permission is against YouTube's terms of services and a breach of The Digital Millennium Copyright Act. By using this program, you are solely responsible for any and all violations, copyright or not. We are not responsible for anyone who attempts to use this program in any way that breaks YouTube's terms of services or any law.




# Dependancies
<p>Node.js</p>
<p>Express</p>
<p>Pug</p>
<p><a href ="https://github.com/fent/node-ytdl-core">node-ytdl-core</a></p>

