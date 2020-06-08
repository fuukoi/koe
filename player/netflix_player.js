const netflix = {
    serieInfo: {
        sLogo: 'https://occ-0-217-3697.1.nflxso.net/dnm/api/v5/rendition/1b228f8104852d84b333ad59c146217a9414087b/AAAABbBpk7cCsk7hMB-e9vaMG8NbkfERQLC5VWtOg5pSREvIix63LTPB6FxTYjslqVVJGybcwTBA7wWtcbq9J8RU5YiOnnlv9Ptf1lQSojm3U05gMvrPpxV4I0rtsqRu9IFtrTBhgBjVeghCTZ6sA77ovkvmJuHYa0d0mnlRc5FxWXuRjCWGROe4fLWe_oZH5rcC6P9Vm4xtRoaoZeW86laOq8iqxWaEZncLsz0mgdEQyfJn778ArKBv0Ssb9rycuaxyFRw.png',
        sCapa: 'https://cdn.myanimelist.net/images/anime/1795/95088l.jpg',
        sAgeRating: 16,
        sDate: 2018,
        sSinopse: 'A guerra acabou, e Violet Evergarden precisa de trabalho. Cheia de cicatrizes, ela aceita trabalhar como escritora de cartas para entender a si mesma e seu passado.',
        sName: 'Violet Evergarden',
    },
    playerSeason: 1,
    playerEpisode: 1,
    playerVolume: 0.1,
    playerQuality: '=m37',
    player: null,
    progressBar: null,
    removeBtnLoop: null,
    removeBtn: true,
    fullscreen: false, 
    addedToList: false,
    season_and_episodes: [
        [ // season 1
            { // ep1 
                name: 'Episode 1',
                sinopse: 'Hodgins busca Violet no hospital. Mais tarde, eles conhecem os parentes de Gilbert e ela recebe de Hodgins uma proposta de trabalho.',
                videoUrl: 'https://lh3.googleusercontent.com/Q6zVgqlS3UiGKvG_niriU_xcFMRdF1M61FrQD3As5StvN1BnUYXeXKJhdw5r3LIFXj8U4PikK2XMs-R4eNyHoGf89zBVtrFuEJAAHnYGblqv_LYD3v1n9d8WFFiID2jacnj6_Dta7g',
                image: 'https://i.imgur.com/ly9oBsh.jpg',
                progress: 0,
                duration: 0,
            },
            { // ep2
                name: 'Episode 2',
                sinopse: 'Violet tenta se adaptar ao novo emprego e precisa aprender a digitar. Seus colegas de trabalho questionam se ela tem a conduta certa para escrever cartas.',
                videoUrl: 'https://lh3.googleusercontent.com/aQ24PeCKjdhRhsdcD3HHIZxHbWVTmdYPCEWOfhnPKM2Zfu6-7CJC7c3AxXFDPr6L4DV83BVfNeXYLUm4wQ',
                image: 'https://i.imgur.com/feViX1B.jpg',
                progress: 0,
                duration: 0,
            },
            { // ep3 
                name: 'Episode 3',
                sinopse: 'Hodgins busca Violet no hospital. Mais tarde, eles conhecem os parentes de Gilbert e ela recebe de Hodgins uma proposta de trabalho.',
                videoUrl: 'https://lh3.googleusercontent.com/IessHhkLV4kFNm88LsIC0NsYdhydjLbtDdj7u1i2uTo4FTkcpHrWf2NNMZ9ypk7HMB4G6jKE_ZLa7VuxzA',
                image: 'https://i.imgur.com/ly9oBsh.jpg',
                progress: 0,
                duration: 0,
            },
            { // ep4
                name: 'Episode 4',
                sinopse: 'Violet tenta se adaptar ao novo emprego e precisa aprender a digitar. Seus colegas de trabalho questionam se ela tem a conduta certa para escrever cartas.',
                videoUrl: 'https://lh3.googleusercontent.com/yiWuH6GwXdvQhIFkmpBiK826KlPtbxVQkLUF25nMyJ12lgINVXXIvZ2jWUyTlnRqx3QdsvIYjcQcJQFLLA',
                image: 'https://i.imgur.com/feViX1B.jpg',
                progress: 0,
                duration: 0,
            },
            { // ep5 
                name: 'Episode 5',
                sinopse: 'Hodgins busca Violet no hospital. Mais tarde, eles conhecem os parentes de Gilbert e ela recebe de Hodgins uma proposta de trabalho.',
                videoUrl: 'https://lh3.googleusercontent.com/AnrQWODwAiIgKRnyV5AIPmlhTfnvXfP84ETvfOWIGcdOLyeLojV38KCkWy5oZeTEwrYT73Cn_SYqWA5suw',
                image: 'https://i.imgur.com/ly9oBsh.jpg',
                progress: 0,
                duration: 0,
            },
            { // ep6
                name: 'Episode 6',
                sinopse: 'Violet tenta se adaptar ao novo emprego e precisa aprender a digitar. Seus colegas de trabalho questionam se ela tem a conduta certa para escrever cartas.',
                videoUrl: 'https://lh3.googleusercontent.com/aQ24PeCKjdhRhsdcD3HHIZxHbWVTmdYPCEWOfhnPKM2Zfu6-7CJC7c3AxXFDPr6L4DV83BVfNeXYLUm4wQ',
                image: 'https://i.imgur.com/feViX1B.jpg',
                progress: 0,
                duration: 0,
            },
            { // ep7 
                name: 'Episode 7',
                sinopse: 'Hodgins busca Violet no hospital. Mais tarde, eles conhecem os parentes de Gilbert e ela recebe de Hodgins uma proposta de trabalho.',
                videoUrl: 'https://lh3.googleusercontent.com/X9OjU4k4mjtBoixflDe8p4uscx79OOiCasA62TdqU81LAPKZ6T0U6SmL0elJ_FqEJlb4Pc4hoUuBw16Ohw',              
                image: 'https://i.imgur.com/ly9oBsh.jpg',
                progress: 0,
                duration: 0,
            },
            { // ep8
                name: 'Episode 8',
                sinopse: 'Violet tenta se adaptar ao novo emprego e precisa aprender a digitar. Seus colegas de trabalho questionam se ela tem a conduta certa para escrever cartas.',
                videoUrl: 'https://lh3.googleusercontent.com/xrVXo4iMI2PzA7fQJ0TjF-_FgIulHkwmzqEU1iyUDtn3G8v1P1p6IXPv62Opne7ZCPZjs9aqawZ7yd6bqQ',
                image: 'https://i.imgur.com/feViX1B.jpg',
                progress: 0,
                duration: 0,
            },
            { // ep9
                name: 'Episode 9',
                sinopse: 'Hodgins busca Violet no hospital. Mais tarde, eles conhecem os parentes de Gilbert e ela recebe de Hodgins uma proposta de trabalho.',
                videoUrl: 'https://lh3.googleusercontent.com/spB7IYHPhvuBztPFDnxdLlbZwe9EhJtXNAAFs5OEqDYqIfjL567p210dmgyOZQIZzsF_Em6_QIieQ-M4zw',
                image: 'https://i.imgur.com/ly9oBsh.jpg',
                progress: 0,
                duration: 0,
            },
            { // ep10
                name: 'Episode 10',
                sinopse: 'Violet tenta se adaptar ao novo emprego e precisa aprender a digitar. Seus colegas de trabalho questionam se ela tem a conduta certa para escrever cartas.',
                videoUrl: 'https://lh3.googleusercontent.com/HeUGsVdIACHdRqHYWygKnbU6j6Qgqewl0__3SBHjvK-J-PRZSpPru3GiElDAgk0gBB3IFUXRrKceYH_F6w',
                image: 'https://i.imgur.com/feViX1B.jpg',
                progress: 0,
                duration: 0,
            },
            { // ep11 
                name: 'Episode 11',
                sinopse: 'Hodgins busca Violet no hospital. Mais tarde, eles conhecem os parentes de Gilbert e ela recebe de Hodgins uma proposta de trabalho.',
                videoUrl: 'https://lh3.googleusercontent.com/0M88ijH1ywDCgOrKyzy6OGAqEVbIKY4v9BPp_MrdgTXlWGUjKYKW82WcQ3Y8mCWRJOJ6meshGQulEYOh2g',
                image: 'https://i.imgur.com/ly9oBsh.jpg',
                progress: 0,
                duration: 0,
            },
            { // ep12
                name: 'Episode 12',
                sinopse: 'Violet tenta se adaptar ao novo emprego e precisa aprender a digitar. Seus colegas de trabalho questionam se ela tem a conduta certa para escrever cartas.',
                videoUrl: 'https://lh3.googleusercontent.com/2doIoq3PTnMZPcTdpbNqo8Z0FReTbON7w-KYdSDQ_eOT3dJ2k15algDcpUxC29B8vWPMvkLwVKcCuV3h-A',
                image: 'https://i.imgur.com/feViX1B.jpg',
                progress: 0,
                duration: 0,
            },
            { // ep13 
                name: 'Episode 13',
                sinopse: 'Hodgins busca Violet no hospital. Mais tarde, eles conhecem os parentes de Gilbert e ela recebe de Hodgins uma proposta de trabalho.',
                videoUrl: 'https://lh3.googleusercontent.com/JwoipvsbWEsYPmLI5KA_Iv2t3J97w0UOTTvDcUN8n3UJKPQAw5eFYdXiig1C0uAYc8Cr8ramIndVnP3fGg',
                image: 'https://i.imgur.com/ly9oBsh.jpg',
                progress: 0,
                duration: 0,
            },
        ],
        [ // season 2
            { // ep1
                name: 'Episode 1',
                sinopse: 'Hodgins busca Violet no hospital. Mais tarde, eles conhecem os parentes de Gilbert e ela recebe de Hodgins uma proposta de trabalho.',
                videoUrl: 'https://lh3.googleusercontent.com/Q6zVgqlS3UiGKvG_niriU_xcFMRdF1M61FrQD3As5StvN1BnUYXeXKJhdw5r3LIFXj8U4PikK2XMs-R4eNyHoGf89zBVtrFuEJAAHnYGblqv_LYD3v1n9d8WFFiID2jacnj6_Dta7g',
                image: 'https://i.imgur.com/ly9oBsh.jpg',
                progress: 0,
                duration: 0,
            },
            { // ep2
                name: 'Episode 2',
                sinopse: 'Violet tenta se adaptar ao novo emprego e precisa aprender a digitar. Seus colegas de trabalho questionam se ela tem a conduta certa para escrever cartas.',
                videoUrl: 'https://lh3.googleusercontent.com/HozPLBYBNGLyrw84xtDxS6bhfkTnZs96UijIqOBg2rRZwtCAsRjTKi33BfzuVlAEKHZs-YsJzvsPvorezF3mqXFeGlChsUWjHgQIyVbte1vzooO-EVPz4zroJsf-tnOxw8z4d6oj0A',
                image: 'https://i.imgur.com/feViX1B.jpg',
                progress: 0,
                duration: 0,
            },
        ],
        [ // season 3
            { // ep1
                name: 'Episode 1',
                sinopse: 'Hodgins busca Violet no hospital. Mais tarde, eles conhecem os parentes de Gilbert e ela recebe de Hodgins uma proposta de trabalho.',
                videoUrl: 'https://lh3.googleusercontent.com/Q6zVgqlS3UiGKvG_niriU_xcFMRdF1M61FrQD3As5StvN1BnUYXeXKJhdw5r3LIFXj8U4PikK2XMs-R4eNyHoGf89zBVtrFuEJAAHnYGblqv_LYD3v1n9d8WFFiID2jacnj6_Dta7g',
                image: 'https://i.imgur.com/ly9oBsh.jpg',
                progress: 0,
                duration: 0,
            },
            { // ep2
                name: 'Episode 2',
                sinopse: 'Violet tenta se adaptar ao novo emprego e precisa aprender a digitar. Seus colegas de trabalho questionam se ela tem a conduta certa para escrever cartas.',
                videoUrl: 'https://lh3.googleusercontent.com/HozPLBYBNGLyrw84xtDxS6bhfkTnZs96UijIqOBg2rRZwtCAsRjTKi33BfzuVlAEKHZs-YsJzvsPvorezF3mqXFeGlChsUWjHgQIyVbte1vzooO-EVPz4zroJsf-tnOxw8z4d6oj0A',
                image: 'https://i.imgur.com/feViX1B.jpg',
                progress: 0,
                duration: 0,
            },
        ],
    ],
    startPlayer: function () {
        document.getElementById('loading_page').style.display = 'block';
        document.getElementsByTagName('title')[0].innerHTML = 'Netflix '+this.serieInfo.sName+' S'+this.playerSeason+':E'+this.playerEpisode+' "'+this.season_and_episodes[(this.playerSeason -1)][(this.playerEpisode -1)].name+'"';
        document.getElementById('player').remove();
        this.player = document.createElement('video');
        this.player.src = this.season_and_episodes[(this.playerSeason - 1)][(this.playerEpisode - 1)].videoUrl+this.playerQuality;
        this.player.preload = "auto";
        this.player.id = "player";
        this.player.onloadeddata = function(){document.getElementById('loading_page').style.display = 'none';};
        this.player.volume = this.playerVolume;
        document.body.appendChild(this.player);
    },
    playVideo: function () {
        if(this.player.paused === true){
            this.player.play();
            if(this.player.paused === false){
                this.player.currentTime = this.season_and_episodes[(this.playerSeason - 1)][(this.playerEpisode - 1)].progress;
                netflix.progressBar = setInterval(function () {
                    netflix.season_and_episodes[(netflix.playerSeason - 1)][(netflix.playerEpisode - 1)].duration = netflix.player.duration;
                    console.log('rodando loop progress');
                    netflix.saveData();
                    netflix.setTime.loop();
                    netflix.season_and_episodes[(netflix.playerSeason - 1)][(netflix.playerEpisode - 1)].progress = netflix.player.currentTime;
                            if(netflix.playerSeason === netflix.season_and_episodes.length && netflix.playerEpisode === netflix.season_and_episodes[(netflix.playerSeason - 1)].length){
                                document.getElementsByClassName('next_ep')[0].style.opacity = "0.4";
                            }else{
                                if(netflix.player.currentTime >= (netflix.player.duration - 11)){
                                    document.getElementById('next_-EP-time').innerText = '▶ Próximo episódio em '+Math.floor(netflix.player.duration - netflix.player.currentTime);
                                    document.getElementById('next_-EP-time2').innerText = '▶ Próximo episódio em '+Math.floor(netflix.player.duration - netflix.player.currentTime);
                                    document.getElementById('looseButton').style.display = 'block';
                                }else{
                                    document.getElementById('looseButton').style.display = 'none';
                                }
                                if(netflix.player.currentTime == netflix.player.duration){
                                    netflix.nextEpisode();
                                }
                                document.getElementsByClassName('next_ep')[0].style.opacity = "1";
                            }
                    if(netflix.player.readyState == 1){
                        document.querySelector('#play').style.opacity = "0";
                        document.querySelector('#pause').style.opacity = "0";
                        document.querySelector('.loading_video').style.display = "block";
                    }else{
                        document.querySelector('#play').style.opacity = "1";
                        document.querySelector('#pause').style.opacity = "1";
                        document.querySelector('.loading_video').style.display = "none";
                    }
                }, 500);
                document.getElementById('play').style.display = 'none';
                document.getElementById('pause').style.display = 'block';
                document.getElementById('title').innerText = ''+this.serieInfo.sName+' S'+this.playerSeason+':E'+this.playerEpisode+' "'+this.season_and_episodes[(this.playerSeason-1)][(this.playerEpisode-1)].name+'"';
                this.removeBtn = true;
            }
        }
    },
    pauseVideo: function () {
        if(this.player.paused === false){
            this.player.pause();
            clearInterval(this.progressBar);
            clearInterval(this.removeBtnLoop);
            this.removeBtn = false;
            document.getElementById('play').style.display = 'block';
            document.getElementById('pause').style.display = 'none';
        }
    },
    fullScreen: function () {
        if(this.fullscreen == false){
            if (document.body.requestFullscreen) {
                document.body.requestFullscreen();
            } else if (document.body.mozRequestFullScreen) {
                document.body.mozRequestFullScreen();
            } else if (document.body.webkitRequestFullscreen) {
                document.body.webkitRequestFullscreen();
            } else if (document.body.msRequestFullscreen) {
                document.body.msRequestFullscreen();
            }
            this.fullscreen = true;
            document.getElementsByClassName('fullscreen')[0].style.background = "url(./exet-screen_icon.svg)";
        }else{
            if (document.exitFullscreen) {
                document.exitFullscreen();
              } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
              } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
              } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
              }
              this.fullscreen = false;
              document.getElementsByClassName('fullscreen')[0].style.background = "url(./fullscreen_icon.svg)"
        }
        },
    setTime: {
        input: function (element) {
            netflix.pauseVideo(); 
            netflix.season_and_episodes[(netflix.playerSeason - 1)][(netflix.playerEpisode - 1)].progress = 1*element.value;
            netflix.setTime.color();
            let calcc = 75 * netflix.season_and_episodes[(netflix.playerSeason - 1)][(netflix.playerEpisode - 1)].progress / netflix.player.duration,
                calcc2 = 100 *  netflix.season_and_episodes[(netflix.playerSeason - 1)][(netflix.playerEpisode - 1)].progress / netflix.player.duration
            document.getElementById('mini-moviment').style.left = calcc+"%";
            document.getElementById('mini-time').style.left = calcc2+"%";
            document.getElementById('mini-time').innerText = netflix.setTime.format(netflix.season_and_episodes[(netflix.playerSeason - 1)][(netflix.playerEpisode - 1)].progress);
            document.querySelector('.center_buttons').style.opacity = "0.4";
            document.querySelector('.bottom_buttons').style.opacity = "0.4";
            document.getElementById('mini-player').src = netflix.season_and_episodes[(netflix.playerSeason - 1)][(netflix.playerEpisode - 1)].videoUrl+"=m18"; document.querySelector('.mini_player-progress').style.display = "block";document.getElementById('mini-player').volume = 0;
            document.getElementById('mini-player').currentTime = element.value;
        },
        inputoff: function(){
            document.querySelector('.mini_player-progress').style.display = "none";
            netflix.playVideo();
            document.querySelector('.center_buttons').style.opacity = "1";
            document.querySelector('.bottom_buttons').style.opacity = "1";
        },
        loop: function () {
            document.getElementById('progress_bar').value = netflix.player.currentTime;
            netflix.setTime.color();
            document.getElementById('current').innerText = netflix.setTime.format(netflix.player.currentTime);
            document.getElementById('duration').innerText = netflix.setTime.format(netflix.player.duration);
        },
        color: function () {
            let result = 100 * netflix.season_and_episodes[(netflix.playerSeason - 1)][(netflix.playerEpisode - 1)].progress / netflix.player.duration;
            document.getElementById('progress_bar').style.backgroundSize = result + '% 100%';
        },
        format: function (progress) {
            function z(number) {
                if(number < 10) return '0'+number;
                if(number >= 10) return number;
            }
            s = Math.floor(progress % 60);
            m = Math.floor((progress / 60) % 60);
            h = Math.floor(((progress / 60) / 60) % 60);
            if(progress < 3600) return z(m)+':'+z(s);
            if(progress >= 3600) return z(h)+':'+z(m)+':'+z(s);
        },
    },
    back10: function () {  
        this.player.currentTime-= 10;
        if(this.player.paused == true) this.setTime.loop(); this.season_and_episodes[(this.playerSeason - 1)][(this.playerEpisode - 1)].progress = this.player.currentTime;
    },
    next10: function () {
        this.player.currentTime+= 10;
        if(this.player.paused == true) this.setTime.loop(); this.season_and_episodes[(this.playerSeason - 1)][(this.playerEpisode - 1)].progress = this.player.currentTime;
    },
    setVolume: function (element) {
        var min = element.min,
            max = element.max,
            val = element.value;
            this.playerVolume = 1*val;
            this.player.volume = this.playerVolume;
            element.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%';
    },
    nextEpisode: function () {
        if(netflix.playerSeason == netflix.season_and_episodes.length && netflix.playerEpisode == netflix.season_and_episodes[(netflix.playerSeason - 1)].length){
            console.log('ultimo ep');
        }else{
            clearInterval(this.progressBar);
            this.removeButtons();
            if(this.playerEpisode < this.season_and_episodes[(this.playerSeason- 1)].length){
             this.playerEpisode++;
         }else{
             if(this.playerSeason < this.season_and_episodes.length){
                  this.playerSeason++;
                  this.playerEpisode = 1;
              }else{
                   console.log('fim da série');
              }
          }
          this.startPlayer();
          this.playVideo();
          this.saveData();
        }
    },
    removeButtons: function(){
        if(this.removeBtn == true){
            document.getElementById('netflix_player-buttons').style.cssText = "opacity: 1;";
            clearInterval(this.removeBtnLoop);
            this.removeBtnLoop = setInterval(function(){
                document.getElementById('netflix_player-buttons').style.cssText = "opacity: 0;";
            }, 2000);
        }
    },
    mainMenuPLayy: function(){
        this.playVideo();
        document.getElementById('main_menu').style.display = "none";
        document.getElementById('menuEp').style.display = "none";
        document.getElementById('netflix_player-buttons').style.cssText = "display: block;opacity: 0;";
        document.getElementById('configPage').style.display = "none";
        document.getElementById('looseButton').style.display = "none";
        document.getElementById('navbar').style.cssText = "left:-51px;opacity: 0;";
    },
    backToHome: function(){
        this.pauseVideo();
        document.getElementById('main_menu').style.display = "block";
        document.getElementById('navbar').style.cssText = "left:0px;opacity: 1;";
        document.getElementById('menuEp').style.display = "none";
        document.getElementById('netflix_player-buttons').style.display = "none";
        document.getElementById('configPage').style.display = "none";
        document.getElementById('looseButton').style.display = "none";
        this.buttonStartt();
    },
    seasonAndEp: function(){
        this.pauseVideo();
        document.getElementById('main_menu').style.display = "none";
        document.getElementById('menuEp').style.display = "flex";
        document.getElementById('configPage').style.display = "none";
        document.getElementById('netflix_player-buttons').style.display = "none";
        document.getElementById('looseButton').style.display = "none";
        this.setEpisodes_and_season();
        document.getElementById((netflix.playerSeason - 1)).getElementsByClassName('eppp')[(netflix.playerEpisode - 1)].getElementsByClassName('image_and-info')[0].style.border = "0.2vw solid white";
        document.getElementById((netflix.playerSeason - 1)).getElementsByClassName('eppp')[(netflix.playerEpisode - 1)].scrollIntoView(); 
    },
    openConfig: function(){
        this.pauseVideo();
        document.getElementById('netflix_player-buttons').style.opacity = 0;
        document.getElementById('configPage').style.display = "block";
        document.getElementById('looseButton').style.display = "none";
    },
    selectMovie: function (season ,episode) {
        if((season + 1) == this.playerSeason && (episode + 1) == this.playerEpisode){
            console.log('voce já está nesse episodio');
        }else{
            this.playerEpisode = (episode + 1);
            this.playerSeason = (season + 1);
            if(netflix.season_and_episodes[season][episode].progress == netflix.season_and_episodes[season][episode].duration){
                netflix.season_and_episodes[season][episode].progress = 0;
            }
            this.startPlayer();
            this.playVideo();
            this.saveData();
        }
        this.mainMenuPLayy();
    },
    selectQuality: function(quality){
        this.pauseVideo();
        this.playerQuality = '=m'+quality;
        this.startPlayer();
        this.playVideo();
        this.mainMenuPLayy();
        this.saveData();
    },
    episodesStyle: function(n){
        for(let i in netflix.season_and_episodes){
            document.getElementById('menu_episodes-season').getElementsByClassName(i)[0].style.border = "0.15vw solid transparent";
        }
        document.getElementById('menu_episodes-season').getElementsByClassName(n)[0].style.border = "0.15vw solid white";
    },
    seasonStyle: function(i){
        document.getElementById(i).scrollIntoView({block: "end", behavior: "smooth"});
        this.episodesStyle(i);
    },
    setEpisodes_and_season: function () {
        document.getElementById('menu_episodes-episodes').innerHTML = '';
        document.getElementById('menu_episodes-season').querySelector('ul').innerHTML = '';
        for(let i in this.season_and_episodes){
            document.getElementById('menu_episodes-season').querySelector('ul').innerHTML += '<li class="'+i+'" onclick="netflix.seasonStyle('+i+');"><p>Season '+(Number(i) + 1)+'</p></li>';
            document.getElementById('menu_episodes-episodes').innerHTML += '<ul id="'+i+'" onmouseover="netflix.episodesStyle('+i+');"><h2 class="tempespec">Temporada '+(Number(i) + 1)+'</h2></ul>';
            for(let x in this.season_and_episodes[i]){
                var progressCalc = 100 * netflix.season_and_episodes[i][x].progress / netflix.season_and_episodes[i][x].duration || 0;
                document.getElementById(i).innerHTML += '<li class="eppp" onclick="netflix.selectMovie('+i+','+x+');"><div class="image_and-info" style="background: url('+netflix.season_and_episodes[i][x].image+');"><h4>S'+(Number(i)+1)+':E'+(Number(x)+1)+'</h4><div class="ep-progress"><div class="current-progress" style="width: '+progressCalc+'%;"></div></div></div><div class="description-ep-s"><h1>'+netflix.season_and_episodes[i][x].name+'</h1><p>'+netflix.season_and_episodes[i][x].sinopse+'</p></div></li>';
            }
        }
        document.getElementById('menu_episodes-season').getElementsByClassName((this.playerSeason - 1))[0].style.border = "0.15vw solid white";
    },
    saveData: function(){
        var saving = [
            {
                pS: this.playerSeason,
                pE: this.playerEpisode,
                pV: this.playerVolume,
                pQ: this.playerQuality,
                aDl: this.addedToList,
            },
        ];
        for(let i in netflix.season_and_episodes){
            for(let x in netflix.season_and_episodes[i]){
                saving.push({d: netflix.season_and_episodes[i][x].duration,p: netflix.season_and_episodes[i][x].progress,})
             }
        }
        localStorage.setItem(this.serieInfo.sName+'-player', JSON.stringify(saving));
    },
    loadingData: function(){
        let object = null,
            number = 1;
            object = JSON.parse(localStorage.getItem(this.serieInfo.sName+'-player'));
            this.playerSeason = object[0].pS || 1;
            this.playerEpisode = object[0].pE || 1;
            this.playerVolume = object[0].pV || 1;
            this.playerQuality = object[0].pQ || "=m37";
            this.addedToList = object[0].aDl || false;
        for(let i in this.season_and_episodes){
            for(let x in this.season_and_episodes[i]){
                netflix.season_and_episodes[i][x].progress = object[number].p;
                netflix.season_and_episodes[i][x].duration = object[number].d;
                number++;
            }
        }
    },
    addToList: function(){
        let list = {
            capa: this.serieInfo.sCapa,
            url: window.location.href,
            name: this.serieInfo.sName,
        },
            listNames = JSON.parse(localStorage.getItem('list')) || [];
            listNames.push(this.serieInfo.sName+'-list');
        localStorage.setItem(this.serieInfo.sName+'-list', JSON.stringify(list));
        localStorage.setItem('list', JSON.stringify(listNames));
        this.addedToList = true;
        this.btnAddorRemove();
    },
    removeOfList: function(){
        localStorage.removeItem(this.serieInfo.sName+'-list');
        let listNames = JSON.parse(localStorage.getItem('list'));
        listNames.pop(this.serieInfo.sName+'-list');
        localStorage.setItem('list', JSON.stringify(listNames));
        this.addedToList = false;
        this.btnAddorRemove();
    },
    btnAddorRemove: function(){
        if(netflix.addedToList == false){
            mainMenu.querySelector('.add-to-list').getElementsByClassName('icon')[0].style.background = "url(./more_icon.svg)";
            mainMenu.querySelector('.add-to-list').onclick = function(){
                netflix.addToList();
            };
        }else{
            mainMenu.querySelector('.add-to-list').getElementsByClassName('icon')[0].style.background = "url(./negative_icon.svg)";
            mainMenu.querySelector('.add-to-list').onclick = function(){
                netflix.removeOfList();
            };
        }
    },
    buttonStartt: function(){
        document.querySelector('.watch').getElementsByTagName('div')[0].innerText = 'Continuar S'+this.playerSeason+':'+'E'+this.playerEpisode;
    },
}