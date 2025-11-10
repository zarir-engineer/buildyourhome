// main.js
(async function(){
  const dataUrl = '/assets/data/properties.json';
  let properties = [];
  try {
    const res = await fetch(dataUrl);
    properties = await res.json();
  } catch (e) {
    console.error('Could not load properties.json', e);
    properties = [];
  }

  const grid = document.getElementById('propertiesGrid');

  function formatCard(p) {
    return `
      <div class="col-md-4">
        <div class="card h-100 shadow-sm">
          <img src="${p.image}" class="card-img-top" alt="${p.title}">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${p.title}</h5>
            <p class="text-muted mb-1">${p.location} • ${p.details}</p>
            <div class="mt-auto d-flex justify-content-between align-items-center">
              <div class="fw-bold">${p.price}</div>
              <a class="btn btn-sm btn-primary" href="#contact" onclick="prefillEnquiry('${p.id}')">Enquire</a>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function render(list) {
    if (!grid) return;
    if (list.length === 0) {
      grid.innerHTML = `<div class="col-12"><div class="alert alert-warning">No properties found</div></div>`;
      return;
    }
    grid.innerHTML = list.map(formatCard).join('');
  }

  // Initial render
  render(properties);

  // Search handling
  const searchForm = document.getElementById('searchForm');
  if (searchForm) {
    searchForm.addEventListener('submit', function(e){
      e.preventDefault();
      const q = (document.getElementById('searchInput').value || '').toLowerCase().trim();
      const type = (document.getElementById('typeSelect').value || '').toLowerCase();
      const beds = (document.getElementById('bedsSelect').value || '');
      const filtered = properties.filter(p => {
        const matchText = q === '' || (p.title + ' ' + p.location + ' ' + p.details).toLowerCase().includes(q);
        const matchType = type === '' || (p.type || '').toLowerCase() === type;
        const matchBeds = beds === '' || (p.beds >= parseInt(beds));
        return matchText && matchType && matchBeds;
      });
      render(filtered);
    });
  }

  const resetBtn = document.getElementById('resetBtn');
  if (resetBtn) resetBtn.addEventListener('click', function(){
    document.getElementById('searchInput').value = '';
    document.getElementById('typeSelect').value = '';
    document.getElementById('bedsSelect').value = '';
    render(properties);
  });

  // prefillEnquiry adds property id to message in the contact form
  window.prefillEnquiry = function(id) {
    const f = document.getElementById('contactForm');
    if (!f) return;
    const txt = f.querySelector('textarea[name="message"]');
    if (txt) {
      const p = properties.find(x => x.id === id);
      txt.value = `Enquiry about: ${p ? p.title : id}\n\nPlease contact me for details.`;
      window.location.hash = '#contact';
      txt.focus();
    }
  };
})();
