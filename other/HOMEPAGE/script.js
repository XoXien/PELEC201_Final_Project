// ============================
// Splash Screen Logic
// ============================
(function(){
  const app = document.getElementById('app');
  const progress = document.getElementById('progress');
  const skipBtn = document.getElementById('skipBtn');

  if(!app || !progress || !skipBtn) return;

  let value = 0;
  const duration = 2200; // total splash duration
  const step = 50;       // interval
  const increments = Math.ceil(duration / step);
  const per = 100 / increments;

  const timer = setInterval(()=>{
    value += per * (0.6 + Math.random()*0.8); // slightly random speed
    if(value >= 99){ value = 100; finish(); }
    progress.style.width = Math.min(100, value).toFixed(2) + '%';
  }, step);

  function finish(){
    clearInterval(timer);
    setTimeout(()=>{
      app.classList.add('loaded'); // trigger CSS transitions
      setTimeout(()=>{
        const s = document.querySelector('.splash');
        if(s && s.parentNode) s.parentNode.removeChild(s);
      },700);
    },300);
  }

  skipBtn.addEventListener('click',finish);
  window.addEventListener('keydown', e => { if(e.key === 'Escape') finish(); });
})();

// ============================
// Horizontal Scroll Logic (Services Cards)
// ============================
(function(){
  const slider = document.querySelector('.cards-section_services');
  if(!slider) return;

  let isDown = false;
  let startX;
  let scrollLeft;

  // Mouse events
  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener('mouseleave', () => { isDown = false; slider.classList.remove('active'); });
  slider.addEventListener('mouseup', () => { isDown = false; slider.classList.remove('active'); });
  slider.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // scroll speed
    slider.scrollLeft = scrollLeft - walk;
  });

  // Touch events
  slider.addEventListener('touchstart', (e) => {
    startX = e.touches[0].pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener('touchmove', (e) => {
    const x = e.touches[0].pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
  });
})();

// ============================
// FAQ Toggle Logic
// ============================
(function(){
  const faqItems = document.querySelectorAll('.faq-item');
  if(!faqItems.length) return;

  faqItems.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('open');
    });
  });
})();
