$(function() {


    // $(".box").mouseover(function() {
    //   $(this).attr("src", "./images/britton.png");
    // }).mouseleave(function() {
    //     $(this).attr("src", "./images/machado.png");
    // });

    // window.sr = ScrollReveal();
    // sr.reveal('.spoon' { duration: 2000 });

    // const projectOne = $('.spoon');
    // console.log(projectOne)

    // const logoGif = $('<img>')
    // logoGif.attr('src', './images/logos.gif')
    // logoGif.addClass('logos')
    // projectOne.append(logoGif);

    // const logosHeader = $('<h3>')
    // logosHeader.text("THE SPORTS LOGOS GAME")
    // logosHeader.addClass('logosHeader')
    // projectOne.append(logosHeader);

    // const moreLink = $('#more');
    $('#more').mouseover(function() {
        $(this).text("Me, Me, Me... Amirite?")
    }).mouseleave(function() {
        $(this).text("About Me");
    });


    window.sr = ScrollReveal({ reset: true });

    sr.reveal('.spoon', { duration: 2000 });
    sr.reveal('.fork', { duration: 4000 });
    sr.reveal('.knife', { duration: 6000 });
    // sr.reveal('.skills', { duration: 2500 });


    let highlights = [{
            title: "Delmon Young's double",
            embed: '<iframe id="video" width="475" height="250" src="https://www.youtube.com/embed/t5tgZcAm87o" frameborder="0" allowfullscreen></iframe>'
        },
        {
            title: "The Drew Nicholas Shot",
            embed: '<iframe id="video" width="475" height="250" src="https://www.youtube.com/embed/LQhNDWnlflE" frameborder="0" allowfullscreen></iframe>'
        },
        {
            title: "The Ovechkin Goal",
            embed: '<iframe id="video" width="475" height="250" src="https://www.youtube.com/embed/vzbmI6-YSnQ?rel=0" frameborder="0" allowfullscreen></iframe>'
        },
        {
            title: "Cal's 2131 Homer",
            embed: '<iframe id="video" width="475" height="250" src="https://www.youtube.com/embed/l2JiKu_wpIU?rel=0" frameborder="0" allowfullscreen></iframe>'
        },
        {
            title: "Orioles Clinch 2014 Division Title",
            embed: '<iframe id="video" width="475" height="250" src="https://www.youtube.com/embed/lxN0W3M6608" frameborder="0" allowfullscreen></iframe>'
        },
        {
            title: "Maryland vs. UConn Elite 8",
            embed: '<iframe id="video" width="475" height="250" src="https://www.youtube.com/embed/4dbFtYTG91U" frameborder="0" allowfullscreen></iframe>'
        },
        {
            title: "Paul Pierce's Game-Winner",
            embed: '<iframe id="video" width="475" height="250" src="https://www.youtube.com/embed/KGnTSu0orgc" frameborder="0" allowfullscreen></iframe>'
        },
        {
            title: "John Wall Forces Game 7",
            embed: '<iframe id="video" width="475" height="250" src="https://www.youtube.com/embed/gdwaLtKmo60" frameborder="0" allowfullscreen></iframe>'
        },
        {
        	title: "Melo's Buzzer Beater vs. Michigan State",
        	embed: '<iframe id="video" width="475" height="250" src="https://www.youtube.com/embed/sbTXxA26rl4" frameborder="0" allowfullscreen></iframe>'
        },
        {
            title: "Penn State vs. Ohio State 2005",
            embed: '<iframe id="video" width="475" height="250" src="https://www.youtube.com/embed/OUv7gaHPERE" frameborder="0" allowfullscreen></iframe>'
        },
        {
            title: "Orioles' 6-Homer Game vs. Yankees",
            embed: '<iframe id="video" width="475" height="250" src="https://www.youtube.com/embed/25BsOOMFeeM" frameborder="0" allowfullscreen></iframe>'
        },
        {
            title: "Greivis Dances Through ACC",
            embed: '<iframe id="video" width="475" height="250" src="https://www.youtube.com/embed/13p2ij2XLnE" frameborder="0" allowfullscreen></iframe>'
        },
        {
        	title: "Terps Win ACC Tournament",
        	embed: '<iframe id="video" width="475" height="250" src="https://www.youtube.com/embed/YSGMiRCvd3g" frameborder="0" allowfullscreen></iframe>'
        },
        {
        	title: "The Steve Blake Steal",
        	embed: '<iframe id="video" width="475" height="250" src="https://www.youtube.com/embed/T2UUyAzKLMg" frameborder="0" allowfullscreen></iframe>'
        },
        {
        	title: "Manny Machado's Best Play Ever",
        	embed: '<iframe id="video" width="475" height="250" src="https://www.youtube.com/embed/QtaU2aDXuhI" frameborder="0" allowfullscreen></iframe>'
        },
        {
        	title: "My Favorite Gilbert Buzzer Beater",
        	embed: '<iframe id="video" width="475" height="250" src="https://www.youtube.com/embed/V4bO2fStWYY" frameborder="0" allowfullscreen></iframe>'
        },
        {
        	title: "Maryland Knocks Off No. 1 Florida",
        	embed: '<iframe id="video" width="475" height="250" src="https://www.youtube.com/embed/NOUV-7qhwXM" frameborder="0" allowfullscreen></iframe>'
        },
        {
        	title: "Ovechkin's 500th Goal",
        	embed: '<iframe id="video" width="475" height="250" src="https://www.youtube.com/embed/HXH5GER3ivs" frameborder="0" allowfullscreen></iframe>'
        },
        {
        	title: "Another Gorgeous Ovechkin Goal",
        	embed: '<iframe id="video" width="475" height="250" src="https://www.youtube.com/embed/YzZAOrpzlas" frameborder="0" allowfullscreen></iframe>'
        },
        {
        	title: "Melo's Buzzer Beater vs. Wisconsin",
        	embed: '<iframe id="video" width="475" height="250" src="https://www.youtube.com/embed/VK3BW3IP_4s" frameborder="0" allowfullscreen></iframe>'
        },
        {
        	title: "Chris Davis' 53-Homer Season",
        	embed: '<iframe id="video" width="475" height="250" src="https://www.youtube.com/embed/stWeiBVLMJA" frameborder="0" allowfullscreen></iframe>'
        },
        {
        	title: "Manny Fakes Everyone Out",
        	embed: '<iframe id="video" width="475" height="250" src="https://www.youtube.com/embed/fGdTKPZxmA8" frameborder="0" allowfullscreen></iframe>'
        },
        {
        	title: "John Wall's Behind-The-Back Dunk",
        	embed: '<iframe id="video" width="475" height="250" src="https://www.youtube.com/embed/wcrOfrfi63g" frameborder="0" allowfullscreen></iframe>'
        },
        {
        	title: "Maryland Wins 2002 National Title",
        	embed: '<iframe id="video" width="475" height="250" src="https://www.youtube.com/embed/8EgsMpPyFhg" frameborder="0" allowfullscreen></iframe>'
        },
        {
        	title: "Maryland Makes First Final Four Ever",
        	embed: '<iframe id="video" width="475" height="250" src="https://www.youtube.com/embed/cJF3EU2AWqM" frameborder="0" allowfullscreen></iframe>'
        },
        {
        	title: "O's End Boston's Season",
        	embed: '<iframe id="video" width="475" height="250" src="https://www.youtube.com/embed/vTjPQtNsG04" frameborder="0" allowfullscreen></iframe>'
        },
        {
        	title: "Dez Saves The Day",
        	embed: '<iframe id="video" width="475" height="250" src="https://www.youtube.com/embed/OXMFjAbX1Q4" frameborder="0" allowfullscreen></iframe>'
        },
        {
        	title: "Kuznetzov's Game 7 Game-Winner",
        	embed: '<iframe id="video" width="475" height="250" src="https://www.youtube.com/embed/Q2iXKJChy_s" frameborder="0" allowfullscreen></iframe>'
        },
        {
        	title: "The Cliff Tucker Buzzer Beater",
        	embed: '<iframe id="video" width="475" height="250" src="https://www.youtube.com/embed/6tfbIn8GDl0" frameborder="0" allowfullscreen></iframe>'
        },
        {
        	title: "Fedorov's Game-Winner And Final Career Goal",
        	embed: '<iframe id="video" width="475" height="250" src="https://www.youtube.com/embed/13YovsXTL-A" frameborder="0" allowfullscreen></iframe>'
        },
        {
        	title: "Cal Homers In Final ASG",
        	embed: '<iframe id="video" width="475" height="250" src="https://www.youtube.com/embed/b_etvGI7WfU" frameborder="0" allowfullscreen></iframe>'
        },
        {
        	title: "My Favorite Gary Williams Moment",
        	embed: '<iframe id="video" width="475" height="250" src="https://www.youtube.com/embed/TDghwElDxMk" frameborder="0" allowfullscreen></iframe>'
        },
        {
        	title: "Maryland Ruins Duke's 2001 Senior Night",
        	embed: '<iframe id="video" width="475" height="250" src="https://www.youtube.com/embed/wMTrkOGd-X0" frameborder="0" allowfullscreen></iframe>'
        }
    ]

    var shuffleHighlights = function(highlights) {
        for (var i = highlights.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = highlights[i];
            highlights[i] = highlights[j];
            highlights[j] = temp;
        }
        return highlights;
    }

    let randomHighlights = shuffleHighlights(highlights);

    let videoContainer = $('.videoContainer');
    let playButton = $('#playButton');
    let videoEmbed = $('.videoEmbed');



    playButton.click(function(){
    	var randomVideo = randomHighlights[Math.floor(Math.random()*randomHighlights.length)];
    	console.log(randomVideo);
    	$('.videoTitle').html('<h3>"' + randomVideo.title + '"</h3>');
    	videoEmbed.html(randomVideo.embed);
    });
 	


    





















































});