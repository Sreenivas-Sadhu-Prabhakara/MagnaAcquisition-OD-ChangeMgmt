/* =============================================================
   Magna x Quess — OD & Change Management
   Main JavaScript
   ============================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ── GSAP Setup ─────────────────────────────────────── */
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    /* Hero stagger */
    gsap.from('.gsap-hero', {
      y: 48,
      opacity: 0,
      duration: 1,
      stagger: 0.18,
      ease: 'power3.out',
      delay: 0.25
    });

    /* Kotter cards stagger */
    gsap.from('.kotter-card', {
      scrollTrigger: { trigger: '#kotter', start: 'top 70%' },
      y: 32,
      opacity: 0,
      duration: 0.75,
      stagger: 0.08,
      ease: 'power2.out'
    });

    /* ADKAR items stagger */
    gsap.from('.adkar-item', {
      scrollTrigger: { trigger: '#kotter', start: 'top 40%' },
      x: -28,
      opacity: 0,
      duration: 0.75,
      stagger: 0.12,
      ease: 'power2.out'
    });
  }

  /* ── Intersection Observer — reveal-card ─────────────── */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -48px 0px' }
  );

  document.querySelectorAll('.reveal-card').forEach(el => revealObserver.observe(el));

  /* ── Animated Counters ───────────────────────────────── */
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  document.querySelectorAll('.counter, .stat-num').forEach(el => counterObserver.observe(el));

  function animateCounter(el) {
    const target = parseInt(el.dataset.target, 10);
    if (isNaN(target)) return;
    const duration = 1600;
    const start    = performance.now();
    const update   = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const ease     = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(ease * target);
      if (progress < 1) requestAnimationFrame(update);
      else el.textContent = target;
    };
    requestAnimationFrame(update);
  }

  /* ── Navbar: scroll shrink + active link ────────────── */
  const navbar  = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  const onScroll = () => {
    /* Navbar shrink */
    if (window.scrollY > 60) {
      navbar?.classList.add('py-2', 'shadow-xl');
    } else {
      navbar?.classList.remove('py-2', 'shadow-xl');
    }

    /* Active link highlight */
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
    });
    navLinks.forEach(link => {
      link.classList.toggle(
        'active',
        link.getAttribute('href') === `#${current}`
      );
    });

    /* Back-to-top visibility */
    const btn = document.getElementById('back-to-top');
    if (btn) {
      btn.classList.toggle('visible', window.scrollY > 400);
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ── Mobile Menu ─────────────────────────────────────── */
  const menuBtn  = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  menuBtn?.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    mobileMenu.classList.toggle('hidden', false); /* ensure not hidden */
    menuBtn.setAttribute('aria-expanded', open);
  });

  /* Close mobile menu when a link is tapped */
  mobileMenu?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
    });
  });

  /* ── Smooth Scroll (supplement native CSS) ───────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  /* ── Back to Top ─────────────────────────────────────── */
  document.getElementById('back-to-top')?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

});
