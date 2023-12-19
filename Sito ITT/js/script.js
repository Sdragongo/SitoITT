window.addEventListener("scroll", function() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    const clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
    const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
    document.getElementById("progress-bar").style.width = scrollPercent + "%";
  });
  
//////////////////////
const tornaInCima = document.querySelector('.torna-in-cima');
const scrollbar = document.getElementById('progress-bar');
const scrollbar_container = document.getElementById('progress-container');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    tornaInCima.style.opacity = '1';
    scrollbar.style.opacity="1";
    scrollbar_container.style.opacity="1";
  } else {
    tornaInCima.style.opacity = '0';
    scrollbar.style.opacity="0";
    scrollbar_container.style.opacity="0";
  }
});

tornaInCima.addEventListener('click', (e) => {
  e.preventDefault();

  const scrollDuration = 1000; // Durata dello scrolling in millisecondi (1 secondo)
  const scrollStep = -window.scrollY / (scrollDuration / 15);
  
  const scrollInterval = setInterval(() => {
    if (window.scrollY !== 0) {
      window.scrollBy(0, scrollStep);
    } else {
      clearInterval(scrollInterval);
    }
  }, 15);//modifica qqui per velocizzare o rallentare scorrimento verso l'alto
});