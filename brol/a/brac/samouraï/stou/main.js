import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  initTableOfContents();
  initScrollProgress();
  initScrollToTop();
  initSmoothScrolling();
  initActiveSection();
});

function initTableOfContents() {
  const tocList = document.getElementById('tocList');
  const tocToggle = document.getElementById('tocToggle');
  const tocContent = document.getElementById('tocContent');
  const sections = document.querySelectorAll('article section[id]');

  if (!tocList || !tocToggle || !tocContent) {
    return;
  }

  sections.forEach(section => {
    const id = section.id;
    const heading = section.querySelector('h2');

    if (heading) {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = `#${id}`;
      a.textContent = heading.textContent;
      a.setAttribute('data-section', id);
      li.appendChild(a);
      tocList.appendChild(li);
    }
  });

  tocToggle.addEventListener('click', (e) => {
    e.preventDefault();
    tocContent.classList.toggle('open');
  });

  tocList.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      if (window.innerWidth < 768) {
        tocContent.classList.remove('open');
      }
    }
  });
}

function initScrollProgress() {
  const progressBar = document.getElementById('progressBar');

  window.addEventListener('scroll', () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrolled = window.scrollY;
    const progress = (scrolled / documentHeight) * 100;

    progressBar.style.transform = `scaleX(${progress / 100})`;
  });
}

function initScrollToTop() {
  const scrollButton = document.getElementById('scrollToTop');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      scrollButton.classList.add('visible');
    } else {
      scrollButton.classList.remove('visible');
    }
  });

  scrollButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));

      if (target) {
        const tocNav = document.getElementById('tocNav');
        const tocHeight = tocNav ? tocNav.offsetHeight : 0;
        const targetPosition = target.offsetTop - tocHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

function initActiveSection() {
  const sections = document.querySelectorAll('article section[id]');
  const tocLinks = document.querySelectorAll('.toc-list a');

  const observerOptions = {
    root: null,
    rootMargin: '-100px 0px -66%',
    threshold: 0
  };

  const observerCallback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;

        tocLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('data-section') === id) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  sections.forEach(section => {
    observer.observe(section);
  });
}
