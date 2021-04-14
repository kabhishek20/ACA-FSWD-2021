# THINGS TO DO

- [x] **Git Installation**
- [x] **Learning basic commands for windows**
- [x] **Create an account on Github**
- [x] **Trying the commands learnt so far**
- [x] **Reading about few thing**



# CMD COMMANDS 

Below are the list of some commands used very frequently in "***COMMAND PROMPT***".

### 1.  *CHANGE THE WORKING DIRECTORY* ( CD ) :

![Image](https://www.digitalcitizen.life/wp-content/uploads/2020/10/command_prompt_2.png)

This command is used to change the *current directory* in which you are working on. In simplied words it is used to navigate across your system.

### 2.  *CHANGE THE DRIVE* :

![Image](https://www.digitalcitizen.life/wp-content/uploads/2020/10/command_prompt_5.png)

To change the drive simply type the drive name to which you want to go , followed by ":".

### 3.  *VIEW THE CONTENTS OF A DIRECTORY* ( dir ) :

![Image](https://www.digitalcitizen.life/wp-content/uploads/2020/10/command_prompt_6.png)

You can view the contents of a directory by using the command called *DIR*.

### 4.  *CREATE NEW DIRECTORY* ( mkdir ) :

![Image](https://www.digitalcitizen.life/wp-content/uploads/2020/10/command_prompt_10.png)


You can make a new directory or folder by using *MKDIR* command. It creates the folder in the same directory in which you are currently present.

### 5. *RENAME FILES AND FOLDERS* ( ren ) :

![Image](https://www.digitalcitizen.life/wp-content/uploads/2020/10/command_prompt_13.png)

Use the *REN* command to rename the file or folder. First write the ren command followed by the previous name of the file or folder then write the name to which you want it to be changed.

### 6. *COPY FILES* ( copy ) :

![Image](https://www.digitalcitizen.life/wp-content/uploads/2020/10/command_prompt_16.png)

The *COPY* command allows you to copy file from one location to another. To use this command, type "*copylocation\filename.extension newlocation\newname.extension*".

### 7. *COPY FOLDERS* (xcopy) :

![Image](https://www.digitalcitizen.life/wp-content/uploads/2020/10/command_prompt_18.png)

To copy a folder with its contents from one location to another, use the *XCOPY* command followed by "*/s /i*" operators. The "*/s*" parameter ensures that all the directories and subdirectories are going to be copied, except the ones that are empty. The "*/i*" parameter creates a new directory if the destintion folder does not exist and copies everything in that.

###  8. *DELETE FILES* (del) :

![Image](https://www.digitalcitizen.life/wp-content/uploads/2020/10/command_prompt_19.png)

The *DEL* command is used to delete the files from the folders.This command will work only for deleting the files, folder cannot be deleted using this command.
**NOTE:**To delete hidden files add "*/h*" parameter.

### 9. *DELETE FOLDERS* (rd) :

![Image](https://www.digitalcitizen.life/wp-content/uploads/2020/10/command_prompt_21.png)

The *RD* command is used to delete the empty folder.Firstly, you need to delete all files inside the folder then remove the folder as well.

### 10. *LAUNCH AN APP* :

![Image](https://www.digitalcitizen.life/wp-content/uploads/2020/10/command_prompt_22.png)

Go to the location where the executable file of that app is present and the type the app name.Press enter and the app will be launched.

### 11. *GET HELP* ( help ) :

![Image](https://www.digitalcitizen.life/wp-content/uploads/2020/10/command_prompt_9.png)

To access help in the "*COMMAND PROMPT*", you have to type *help* command and then press *Enter*.

# SOME TERMINOLOGY

* ### ***CLIENTSIDE AND SERVERSIDE ***
      
*Server-side* is the systems that run on the server, and *client-side* is the software that runs on a user’s web browser. Client-side web development involves interactivity and displaying data, server-side is about working behind the scenes to manage data.

*Client-side developers* use their coding skills to create visually appealing, functional, and helpful web applications and dynamic websites. These programmers are responsible for every part of a website that users see or interact with. Homepages, shopping pages, slideshows—virtually any visible feature that shows up in a web browser or requires user input falls under this discipline.*Client-side developers* are also known as *Frontend Programmer*.

To understand what a *server-side developer* does, we must first go over how a website works and how it’s different from a picture or an interactive text document. The client-side of a website is simply a display and collection platform for information. The site communicates with web servers, using them to retrieve and send data from databases to provide you with the services you need. This work is done on server side.These programmers are known as *Backend programmer*.

* ### ***HTTP Protocols***

*The Hypertext Transfer Protocol* is an application protocol for distributed, collaborative, hypermedia information systems that allows users to communicate data on the World Wide Web.It was invented alongside HTML to create the first interactive, text-based web browser: the original World Wide Web. Today, the protocol remains one of the primary means of using the Internet.

* ### ***HTTP vs HTTPS***

HTTP | HTTPS
---- | -----
It lacks security mechanism to encript the data. | It provides SSL or TLS digital certificate to secure the communication between server and client.
It operates at application layer. | It operates at transport layer.
By default it operates on port 80. | By default it operates on port 443.
It is fast. | It is slower. 

* ### ***FRAMEWORKS vs LIBRARIES***

The technical difference between a framework and library lies in a term called *inversion of control*.

When you use a library, **you are in charge of the flow** of the application. You are choosing when and where to call the library. When you use a framework, **the framework is in charge of the flow**. It provides some places for you to plug in your code, but it calls the code you plugged in as needed.