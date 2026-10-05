


window.history.scrollRestoration = "manual";

document.querySelectorAll('[data-scroll-target]').forEach(button => {
  button.addEventListener('click', () => {
    const target = document.getElementById(button.dataset.scrollTarget);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    }
    });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.animate-on-scroll').forEach(section => {
  observer.observe(section);
});
window.addEventListener("load", () => {
    setTimeout(() => {
      const loadingScreen = document.getElementById("loading-screen");
      if (loadingScreen) {
        loadingScreen.style.opacity = 0;
        setTimeout(() => {
          loadingScreen.style.display = "none";
          const mainContent = document.getElementById("main-content");
          if (mainContent) mainContent.style.display = "block";
        }, 500); // fade duration
      }
    }, 2000); // visible for 2 seconds
  });

const sdgContent = {
  1: { title: 'SDG 1 — No Poverty', goal: 'End poverty and ensure everyone has access to basic needs and opportunities.', problems: ['Lack of access to safe housing', 'Food insecurity', 'Limited healthcare and education'], actions: ['Support local aid programs', 'Promote fair wages', 'Invest in community services'], quote: 'No one should be left behind.' },
  2: { title: 'SDG 2 — Zero Hunger', goal: 'End hunger and promote food security and sustainable agriculture.', problems: ['Food waste', 'Poor soil health', 'Climate stress on crops'], actions: ['Reduce food waste', 'Support local farms', 'Grow sustainable food systems'], quote: 'A hunger-free world starts with healthy soil and fair access.' },
  3: { title: 'SDG 3 — Good Health & Well-being', goal: 'Ensure healthy lives and well-being for people of all ages.', problems: ['Limited healthcare access', 'Unsafe environments', 'Preventable diseases'], actions: ['Support vaccination and care', 'Fight pollution', 'Improve health education'], quote: 'Health is a human right for everyone.' },
  4: { title: 'SDG 4 — Quality Education', goal: 'Provide inclusive and quality education and lifelong learning opportunities.', problems: ['Low school access', 'Gender barriers', 'Unequal learning resources'], actions: ['Invest in schools', 'Promote literacy', 'Support teacher training'], quote: 'Education opens doors to brighter futures.' },
  5: { title: 'SDG 5 — Gender Equality', goal: 'Achieve equality and equal opportunities for all genders.', problems: ['Discrimination', 'Unsafe workplaces', 'Unequal pay'], actions: ['Support equal rights', 'Challenge stereotypes', 'Promote safe opportunity'], quote: 'Equality is essential for strong communities.' },
  6: { title: 'SDG 6 — Clean Water & Sanitation', goal: 'Ensure access to clean water and proper sanitation for everyone.', problems: ['Water pollution', 'Unsafe sanitation', 'Water scarcity'], actions: ['Protect rivers and lakes', 'Fix leaking systems', 'Reuse and conserve water'], quote: 'Clean water is life and dignity.' },
  7: { title: 'SDG 7 — Affordable & Clean Energy', goal: 'Provide reliable, sustainable, and clean energy for all.', problems: ['Fossil fuel dependence', 'Energy poverty', 'Air pollution'], actions: ['Use solar and wind energy', 'Improve energy efficiency', 'Support green grids'], quote: 'Clean energy powers a better tomorrow.' },
  8: { title: 'SDG 8 — Decent Work & Economic Growth', goal: 'Promote decent jobs, workers’ rights, and sustainable economic growth.', problems: ['Unsafe labor conditions', 'Low wages', 'Job insecurity'], actions: ['Support fair labor policies', 'Promote skills training', 'Encourage ethical businesses'], quote: 'Growth should lift people, not leave them behind.' },
  9: { title: 'SDG 9 — Industry, Innovation & Infrastructure', goal: 'Build strong infrastructure and encourage sustainable innovation.', problems: ['Weak infrastructure', 'Limited technology access', 'Unsustainable production'], actions: ['Invest in resilient infrastructure', 'Support green innovation', 'Improve access to technology'], quote: 'Smart infrastructure creates resilient futures.' },
  10: { title: 'SDG 10 — Reduced Inequalities', goal: 'Reduce inequalities within and between countries.', problems: ['Unequal access to services', 'Social exclusion', 'Regional disparities'], actions: ['Support inclusion policies', 'Expand access to opportunity', 'Reduce unfair barriers'], quote: 'A fair world begins with equal opportunity.' },
  11: { title: 'SDG 11 — Sustainable Cities & Communities', goal: 'Make cities safe, inclusive, resilient, and sustainable.', problems: ['Poor urban planning', 'Traffic congestion', 'Housing inequality'], actions: ['Build greener neighborhoods', 'Improve public transport', 'Protect public spaces'], quote: 'Sustainable cities grow with people in mind.' },
  12: { title: 'SDG 12 — Responsible Consumption & Production', goal: 'Use resources wisely and reduce waste.', problems: ['Overconsumption', 'Plastic waste', 'Resource depletion'], actions: ['Choose durable products', 'Reduce single-use items', 'Support circular economies'], quote: 'Less waste, more wisdom.' },
  13: { title: 'SDG 13 — Climate Action', goal: 'Take action to combat climate change and its impacts.', problems: ['Carbon emissions', 'Extreme weather', 'Environmental damage'], actions: ['Cut emissions', 'Protect ecosystems', 'Support climate adaptation'], quote: 'Climate action is a global responsibility.' },
  14: { title: 'SDG 14 — Life Below Water', goal: 'Protect and sustainably use oceans and marine resources.', problems: ['Plastic pollution', 'Overfishing', 'Ocean warming'], actions: ['Reduce plastic use', 'Protect marine life', 'Keep waste out of waterways'], quote: 'Protect our oceans, one action at a time.' },
  15: { title: 'SDG 15 — Life on Land', goal: 'Protect forests, land, wildlife, and biodiversity.', problems: ['Deforestation', 'Habitat loss', 'Soil degradation'], actions: ['Protect forests', 'Restore ecosystems', 'Support biodiversity'], quote: 'Healthy land means a healthy future.' },
  16: { title: 'SDG 16 — Peace, Justice & Strong Institutions', goal: 'Promote peaceful societies, justice, and strong institutions.', problems: ['Conflict', 'Corruption', 'Weak legal systems'], actions: ['Strengthen communities', 'Promote transparency', 'Support fair systems'], quote: 'Peace and justice build lasting progress.' },
  17: { title: 'SDG 17 — Partnerships for the Goals', goal: 'Work together globally to achieve all the SDGs.', problems: ['Limited cooperation', 'Unequal resources', 'Fragmented efforts'], actions: ['Collaborate across borders', 'Share knowledge', 'Support global partnerships'], quote: 'Progress grows when we work together.' }
};

const whyContent = {
  planet: { title: 'Protects Our Planet', goal: 'Healthy ecosystems provide clean air, fresh water, food, and safe places for people and wildlife.', problems: ['Pollution harms people and nature', 'Habitat loss puts wildlife at risk', 'Overuse of resources damages ecosystems'], actions: ['Reduce pollution and single-use plastics', 'Protect local green spaces and waterways', 'Choose products made responsibly'], quote: 'A healthy planet supports every part of life.' },
  resources: { title: 'Saves Our Resources', goal: 'Using resources thoughtfully helps make sure there is enough for people now and in the future.', problems: ['Wasted food and energy increase pollution', 'Water scarcity affects communities', 'Finite resources can be depleted'], actions: ['Turn off unused lights and electronics', 'Save water and fix leaks', 'Plan meals and avoid food waste'], quote: 'Use what we need, and value what we use.' },
  lives: { title: 'Improves Lives', goal: 'Sustainable development aims for healthy, safe, and fair communities where everyone has opportunities.', problems: ['Unequal access to education and healthcare', 'Unsafe housing and working conditions', 'Limited opportunities for some communities'], actions: ['Support inclusive education and healthcare', 'Choose fair and ethical businesses', 'Help make communities safe and accessible'], quote: 'Progress matters when it improves life for everyone.' },
  energy: { title: 'Supports Clean Energy', goal: 'Renewable sources such as sunlight and wind can provide energy with less pollution than fossil fuels.', problems: ['Fossil fuels release greenhouse gases', 'Air pollution can harm human health', 'Energy access is unequal around the world'], actions: ['Use energy-efficient appliances', 'Choose renewable electricity where available', 'Support clean-energy projects in your community'], quote: 'Clean energy helps power a healthier future.' },
  waste: { title: 'Reduces Waste', goal: 'Making thoughtful choices keeps useful materials in circulation and reduces pollution.', problems: ['Landfills take up space and can pollute', 'Single-use products consume valuable resources', 'Litter can harm wildlife and waterways'], actions: ['Reuse and repair items before replacing them', 'Recycle correctly in your area', 'Choose durable products with less packaging'], quote: 'The most sustainable waste is the waste we prevent.' },
  future: { title: 'Protects Future Generations', goal: 'Long-term decisions can leave future generations a healthy planet and the resources they need.', problems: ['Climate change creates lasting risks', 'Natural resources may become harder to access', 'Environmental damage can take generations to repair'], actions: ['Make choices with long-term impacts in mind', 'Protect nature and conserve resources today', 'Encourage sustainable decisions in your community'], quote: 'The future is shaped by what we choose today.' }
};

const modal = document.getElementById('sdgModal');
const modalBody = document.getElementById('sdgModalBody');
const closeButton = document.querySelector('.sdg-close');

function showModal(content) {
  modalBody.innerHTML = content;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function openSdgModal(sdgId) {
  const data = sdgContent[sdgId];
  if (!data || !modal || !modalBody) return;

  showModal(`
    <span class="goal-label">SDG ${sdgId}</span>
    <h3 id="modal-title">${data.title}</h3>
    <p><strong>The Goal:</strong> ${data.goal}</p>
    <p><strong>Problems:</strong></p>
    <ul>
      ${data.problems.map(item => `<li>${item}</li>`).join('')}
    </ul>
    <p><strong>What can we do?</strong></p>
    <ul>
      ${data.actions.map(item => `<li>${item}</li>`).join('')}
    </ul>
    <div class="action-quote">Your Action → ${data.quote}</div>
  `);
}

function openWhyModal(topicId) {
  const data = whyContent[topicId];
  if (!data || !modal || !modalBody) return;

  showModal(`
    <span class="goal-label">WHY IT MATTERS</span>
    <h3 id="modal-title">${data.title}</h3>
    <p><strong>Why it matters:</strong> ${data.goal}</p>
    <p><strong>Challenges:</strong></p>
    <ul>
      ${data.problems.map(item => `<li>${item}</li>`).join('')}
    </ul>
    <p><strong>What can we do?</strong></p>
    <ul>
      ${data.actions.map(item => `<li>${item}</li>`).join('')}
    </ul>
    <div class="action-quote">${data.quote}</div>
  `);
}

function closeSdgModal() {
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

document.querySelectorAll('.sdg-card').forEach(card => {
  card.addEventListener('click', () => openSdgModal(card.dataset.sdg));
});

document.querySelectorAll('.why-card').forEach(card => {
  card.addEventListener('click', () => openWhyModal(card.dataset.why));
});

const solutionTopics = document.querySelectorAll('.solution-topic-card');
const solutionChoices = document.querySelectorAll('.solution-choice');
const solutionDisplay = document.getElementById('solutionDisplay');
let solutionUpdateTimeout;

function selectSolution(button) {
  const topic = Array.from(solutionTopics).find(item => item.dataset.solution === button.dataset.solutionChoice);
  if (!topic || !solutionDisplay) return;

  solutionChoices.forEach(choice => {
    choice.setAttribute('aria-pressed', String(choice === button));
  });

  window.clearTimeout(solutionUpdateTimeout);
  solutionDisplay.classList.add('is-changing');
  solutionUpdateTimeout = window.setTimeout(() => {
    solutionDisplay.querySelector('.solution-display-title').textContent = topic.querySelector('.solution-topic-title').textContent;
    solutionDisplay.querySelector('.solution-display-problem').textContent = topic.querySelector('.solution-problem').textContent;
    solutionDisplay.querySelector('.solution-display-answer').textContent = topic.querySelector('.solution-answer').textContent;
    solutionDisplay.querySelector('.solution-display-action').textContent = topic.querySelector('.solution-action').textContent;
    solutionDisplay.classList.remove('is-changing');
  }, 140);
}

solutionChoices.forEach(button => {
  button.addEventListener('click', () => selectSolution(button));
});

const energySourceCards = document.querySelectorAll('.energy-source-card');

energySourceCards.forEach(card => {
  card.addEventListener('click', () => {
    const shouldExpand = card.getAttribute('aria-expanded') !== 'true';

    energySourceCards.forEach(source => {
      const isExpanded = source === card && shouldExpand;
      source.setAttribute('aria-expanded', String(isExpanded));
      source.querySelector('.energy-source-details').hidden = !isExpanded;
    });
  });
});

const futureBuildButton = document.getElementById('futureBuildButton');
const futureMessage = document.getElementById('futureMessage');

if (futureBuildButton && futureMessage) {
  futureBuildButton.addEventListener('click', () => {
    const shouldShowMessage = futureBuildButton.getAttribute('aria-expanded') !== 'true';
    futureBuildButton.setAttribute('aria-expanded', String(shouldShowMessage));
    futureMessage.hidden = !shouldShowMessage;
    futureMessage.classList.remove('is-visible');

    if (shouldShowMessage) {
      window.requestAnimationFrame(() => {
        if (!futureMessage.hidden) futureMessage.classList.add('is-visible');
      });
    }
  });
}

if (closeButton) {
  closeButton.addEventListener('click', closeSdgModal);
}

if (modal) {
  modal.addEventListener('click', (event) => {
    if (event.target === modal) closeSdgModal();
  });
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal && modal.classList.contains('open')) {
    closeSdgModal();
  }
});

if (typeof Lenis !== 'undefined') {
  const lenis = new Lenis();
  if (typeof ScrollTrigger !== 'undefined') {
    lenis.on('scroll', ScrollTrigger.update);
  }
  if (typeof gsap !== 'undefined' && gsap.ticker) {
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
  }
}
