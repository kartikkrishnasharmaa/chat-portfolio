var audio = new Audio( 'assets/sentmessage.mp3' );
var contactString = "<div class='social'> <a target='_blank' href='tel:+918302286091'> <div class='socialItem' id='call'><img class='socialItemI' src='images/phone.svg'/><label class='number'>8302286091</label></div> </a> <a href='mailto:kartikkrishnasharmaa@gmail.com'> <div class='socialItem'><img class='socialItemI' src='images/gmail.svg' alt=''></div> </a> <a target='_blank' href='https://github.com/kartikkrishnasharmaa'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a> <a target='_blank' href='https://wa.me/918302286091'> <div class='socialItem'><img class='socialItemI' src='images/whatsapp.svg' alt=''></div> </a> <a target='_blank' href='https://instagram.com/kartikkrishnasharma'> <div class='socialItem'><img class='socialItemI' src='images/instagram.svg' alt=''> </div> </a> <a href='https://www.linkedin.com/in/cse-kartik-sharma' target='_blank' rel='noopener noreferrer'> <div class='socialItem'><img class='socialItemI' src='images/linkedin.svg' alt=''></div> </a> </div>";
var resumeString = "<img src='images/resumeThumbnail.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='images/pdf.png'><label>Kartik Sharma Resume.pdf</label></div><a href='assets/Kartik Sharma Resume.pdf' download='Kartik_Sharma_Resume.pdf'><img class='download' src='images/downloadIcon.svg'></a></div>";
var addressString = "<div class='mapview'><iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56567.77565820857!2d75.10160644012618!3d27.609461616775857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396ca4b82334472b%3A0x7f485cce3a6bf355!2sSikar%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1701170532831!5m2!1sen!2sin' class='map'></iframe></div><label class='add'><address>Rajasthan, INDIA</address>";
function startFunction() {
    setLastSeen();
    waitAndResponce( "intro" );
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById( "lastseen" );
    lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes();
}


function closeFullDP() {
    var x = document.getElementById( "fullScreenDP" );
    if ( x.style.display === 'flex' ) {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById( "fullScreenDP" );
    if ( x.style.display === 'flex' ) {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}


function isEnter( event ) {
    if ( event.keyCode == 13 ) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById( "inputMSG" );
    var ti = input.value;
    if ( input.value == "" ) {
        return;
    }
    var date = new Date();
    var myLI = document.createElement( "li" );
    var myDiv = document.createElement( "div" );
    var greendiv = document.createElement( "div" );
    var dateLabel = document.createElement( "label" );
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute( "class", "sent" );
    greendiv.setAttribute( "class", "green" );
    dateLabel.setAttribute( "class", "dateLabel" );
    greendiv.innerText = input.value;
    myDiv.appendChild( greendiv );
    myLI.appendChild( myDiv );
    greendiv.appendChild( dateLabel );
    document.getElementById( "listUL" ).appendChild( myLI );
    var s = document.getElementById( "chatting" );
    s.scrollTop = s.scrollHeight;
    setTimeout( function () { waitAndResponce( ti ); }, 1500 );
    input.value = "";
    playSound();
}

function waitAndResponce( inputText ) {
    var lastSeen = document.getElementById( "lastseen" );
    lastSeen.innerText = "typing...";
    switch ( inputText.toLowerCase().trim() ) {
        case "intro":
            setTimeout( () => {
                sendTextMessage( "Hello there 👋🏻,<br/>My name is Kartik Sharma.<br/><br/><br/> 👨🏻‍💻📚<br/><br/>I am eager to hear about potential career opportunities, so I would be pleased to chat about job openings in the engineering sphere.<br><br>Send <span class='bold'>'help'</span> to know more about me.<br>" );
            }, 2000 );
            break;
        case "help":
            sendTextMessage( "<span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'address'</span> - to get my address<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'clear'</span> - to clear conversation<br>" );
            break;
        case "resume":
            sendTextMessage( resumeString );
            break;
        case "skills":
            sendTextMessage( "<span class='sk'>I have done Master's in Computer Application<br><br>Highly motivated and detail-oriented Data Analyst and Web developer with a strong foundation in data analysis, visualization tools, and web development.<br/>I can comfortably write code in following languages/Framework and Technologies :<br/><br/><br/><span class='bold'>HTML<br/>CSS<br/>Python<br/>Javascript<br/>SQL<br/>MongoDB<br/>Bootstrap<br/>Tailwind CSS<br/>ReactJs<br/>NextJs<br/><br> </span> I am also a Data Analyst, Skilled in developing and implementing data collection systems, identifying business need using:<br/><br/><br/><span class='bold'>MS Excel<br/>PowerBI <br/> Tableu<br/> Power BI Query<br>" );
            break;

        case "education":
            sendTextMessage( "I have done my Master's in Computer Science and Bachleor from Computer Science." );
            break;

        case "address":
            sendTextMessage( addressString );
            break;
        case "clear":
            clearChat();
            break;

        case "contact":
            sendTextMessage( contactString );
            break;
        case "projects":
            sendTextMessage( "You want to check my projects? Then just jump into my Github Account.<br><br>Click Below <br/><br/><div class='social'><a target='_blank' href='https://github.com/kartikkrishnasharmaa'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a></div>" );
            break;
        case "new":
            sendTextMessage( addressString );
            break;
        default:
            setTimeout( () => {
                sendTextMessage( "Hey I couldn't catch you...😢<br>Send 'help' to know more about usage." );
            }, 2000 );
            break;
    }



}

function clearChat() {
    document.getElementById( "listUL" ).innerHTML = "";
    waitAndResponce( 'intro' );
}



function sendTextMessage( textToSend ) {
    setTimeout( setLastSeen, 1000 );
    var date = new Date();
    var myLI = document.createElement( "li" );
    var myDiv = document.createElement( "div" );
    var greendiv = document.createElement( "div" );
    var dateLabel = document.createElement( "label" );
    dateLabel.setAttribute( "id", "sentlabel" );
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute( "class", "received" );
    greendiv.setAttribute( "class", "grey" );
    greendiv.innerHTML = textToSend;
    myDiv.appendChild( greendiv );
    myLI.appendChild( myDiv );
    greendiv.appendChild( dateLabel );
    document.getElementById( "listUL" ).appendChild( myLI );
    var s = document.getElementById( "chatting" );
    s.scrollTop = s.scrollHeight;
    playSound();
}


function sendResponse() {
    setTimeout( setLastSeen, 1000 );
    var date = new Date();
    var myLI = document.createElement( "li" );
    var myDiv = document.createElement( "div" );
    var greendiv = document.createElement( "div" );
    var dateLabel = document.createElement( "label" );
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute( "class", "received" );
    greendiv.setAttribute( "class", "grey" );
    dateLabel.setAttribute( "class", "dateLabel" );
    greendiv.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
    myDiv.appendChild( greendiv );
    myLI.appendChild( myDiv );
    greendiv.appendChild( dateLabel );
    document.getElementById( "listUL" ).appendChild( myLI );
    var s = document.getElementById( "chatting" );
    s.scrollTop = s.scrollHeight;
    playSound();
}

function playSound() {
    audio.play();
}
