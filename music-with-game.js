


    let pacMusic = document.getElementById('tupac-audio');
    let fortyMusic = document.getElementById('e-40-audio');
    let kuruptMusic = document.getElementById('kurupt-audio');
    let outkastMusic = document.getElementById('outkast-audio');
    let jayMusic = document.getElementById('jayz-audio');


    let pacBeats = document.getElementById('tupac-plays');
    let fortyBeats = document.getElementById('e-40-plays');
    let kuruptBeats = document.getElementById('kurupt-plays');
    let outkastBeats = document.getElementById('outkast-plays');
    let jayBeats = document.getElementById('jayz-plays');
    let stopMusic = document.getElementById('stop');

    function pacBegins() {
      pacMusic.play();
      console.log('Thug Life!');
      fortyMusic.pause() || kuruptMusic.pause() || outkastMusic.pause() || jayMusic.pause()
    }

    function playForty() {
      fortyMusic.play();
      console.log('40 Water!');
      pacMusic.pause() || kuruptMusic.pause() || outkastMusic.pause() || jayMusic.pause()
    }

    function playKurupt() {
      kuruptMusic.play();
      console.log('Young Gotti!');
      pacMusic.pause() || fortyMusic.pause() || outkastMusic.pause() || jayMusic.pause()
    }

    function playOutkast() {
      outkastMusic.play();
      console.log('Stank ya Very Much');
      pacMusic.pause() || fortyMusic.pause() || kuruptMusic.pause() || jayMusic.pause()
    }

    function playJayZ() {
      jayMusic.play();
      console.log('Its the ROC baby!');
      pacMusic.pause() || fortyMusic.pause() || kuruptMusic.pause() || outkastMusic.pause()
    }

    function musicStop() {
      if (pacBegins || playForty || playKurupt || playOutkast || playJayZ) {
        pacMusic.pause() || fortyMusic.pause() || kuruptMusic.pause() || outkastMusic.pause() || jayMusic.pause();
        console.log('stop music')
      }
    }


    pacBeats.addEventListener('click', pacBegins);
    fortyBeats.addEventListener('click', playForty);
    kuruptBeats.addEventListener('click', playKurupt);
    outkastBeats.addEventListener('click', playOutkast);
    jayBeats.addEventListener('click', playJayZ);
    stopMusic.addEventListener('click', musicStop);


export { pacMusic, pacBeats, pacBegins };
export { fortyMusic, fortyBeats, playForty };
export { kuruptMusic, kuruptBeats, playKurupt };
export { outkastMusic, outkastBeats, playOutkast };
export { jayMusic, jayBeats, playJayZ };
export { stopMusic };


