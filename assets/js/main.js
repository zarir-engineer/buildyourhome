function escapeHtml(str){ return String(str).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;'); }

(async function(){
  const dataUrl = 'assets/data/properties.json';
  window.properties = [];
  try {
    const res = await fetch(dataUrl);
    const data = await res.json();
    // Support either array or { properties: [...] } structure
    window.properties = Array.isArray(data)
      ? data
      : (Array.isArray(data.properties) ? data.properties : []);
  } catch (e) {
    console.error('Could not load properties.json', e);
    window.properties = [];
  }
  const properties = window.properties; // local alias if you still use `properties` below

  const grid = document.getElementById('propertiesGrid');

  function openPropertyModal(id){
    const p = properties.find(x=>x.id===id);
    if(!p) return;
    const inner = document.getElementById('modalCarouselInner');
    inner.innerHTML = (p.gallery || [p.image]).map((images,i)=>`
      <div class="carousel-item ${i===0?'active':''}">
        <img src="${images}" class="d-block w-100" style="height:420px; object-fit:cover;">
      </div>`).join('');
    document.getElementById('modalTitle').textContent = p.title;
    document.getElementById('modalLocation').textContent = p.location;
    document.getElementById('modalPrice').textContent = p.price;
    document.getElementById('modalDetails').textContent = p.details || '';
    document.getElementById('modalDesc').textContent = p.description || '';
    document.getElementById('modalEnquireBtn').setAttribute('onclick', `prefillEnquiry('${p.id}')`);
    const modal = new bootstrap.Modal(document.getElementById('propertyModal'));
    modal.show();
  }


  function card(p){
    return `
    <div class="col-md-4">
      <article class="card h-100">
        <div style="position:relative">
          <img src="${p.image}" class="card-images-top" alt="${escapeHtml(p.title)}" loading="lazy">
          <div style="position:absolute;left:12px;top:12px;">
            <span class="badge-type">${escapeHtml(p.type)}</span>
          </div>
          <div style="position:absolute;right:12px;top:12px;">
            <span class="badge bg-white text-dark small shadow-sm"> ${escapeHtml(p.beds)} BHK </span>
          </div>
        </div>
        <div class="card-body d-flex flex-column">
          <h5 class="mb-1">${escapeHtml(p.title)}</h5>
          <div class="muted mb-2">${escapeHtml(p.location)}</div>
          <div class="mt-auto d-flex justify-content-between align-items-center">
            <div class="prop-price">${escapeHtml(p.price)}</div>
            <div><button class="btn btn-sm btn-outline-primary" data-id="${p.id}" onclick="openPropertyModal('${p.id}')">View</button></div>
          </div>
        </div>
      </article>
    </div>`;
  }


  function render(list){
    grid.innerHTML = list.length
      ? list.map(card).join('')
      : `<div class="col-12"><div class="alert alert-warning">No properties found</div></div>`;
  }

  render(properties);

  const form=document.getElementById('searchForm');
  form?.addEventListener('submit',e=>{
    e.preventDefault();
    const q=document.getElementById('searchInput').value.toLowerCase().trim();
    const type=document.getElementById('typeSelect').value.toLowerCase();
    const beds=document.getElementById('bedsSelect').value;
    const filtered=properties.filter(p=>{
      const matchQ=!q||(p.title+p.location+p.details).toLowerCase().includes(q);
      const matchT=!type||(p.type||'').toLowerCase()===type;
      const matchB=!beds||(p.beds>=parseInt(beds));
      return matchQ&&matchT&&matchB;
    });
    render(filtered);
  });

  document.getElementById('resetBtn')?.addEventListener('click',()=>{
    document.getElementById('searchInput').value='';
    document.getElementById('typeSelect').value='';
    document.getElementById('bedsSelect').value='';
    render(properties);
  });

  window.prefillEnquiry=function(id){
    const f=document.getElementById('contactForm');
    const t=f?.querySelector('textarea[name="message"]');
    if(t){
      const p=properties.find(x=>x.id===id);
      t.value=`Enquiry about: ${p?p.title:id}\n\nPlease contact me for details.`;
      location.hash='#contact'; t.focus();
    }
  };

  // advanced search handler
  (function(){
    const form = document.getElementById('advancedSearchForm');
    if(!form) return;

    function parseRange(val){
      if(!val) return [0, Infinity];
      const parts = val.split('-').map(Number);
      return [parts[0] || 0, parts[1] || Infinity];
    }

    form.addEventListener('submit', function(e){
      e.preventDefault();
      const q = (document.getElementById('locInput').value || '').toLowerCase().trim();
      const type = (document.getElementById('typeSelect').value || '').toLowerCase();
      const beds = (document.getElementById('bedsSelect').value || '');
      const baths = (document.getElementById('bathsSelect').value || '');
      const priceRange = parseRange(document.getElementById('priceSelect').value || '');

      // filter properties (assumes `properties` array is in scope)
      const filtered = (window.properties || []).filter(p=>{
        const text = (p.title + ' ' + p.location + ' ' + (p.details||'')).toLowerCase();
        const matchText = q === '' || text.includes(q);
        const matchType = type === '' || (p.type||'').toLowerCase() === type;
        const matchBeds = beds === '' || (p.beds >= parseInt(beds));
        const matchBaths = baths === '' || ((p.baths||0) >= parseInt(baths)); // ensure your data has baths if needed
        const priceNum = Number(p.priceNum || 0);
        const matchPrice = priceNum >= priceRange[0] && priceNum <= priceRange[1];

        return matchText && matchType && matchBeds && matchBaths && matchPrice;
      });

      // call existing render function
      if(typeof render === 'function') render(filtered);
      else {
        // fallback: log results
        console.log('Filtered results', filtered);
      }
    });

    // optional: map Enter in location to submit the form
    document.getElementById('locInput').addEventListener('keypress', function(e){
      if(e.key === 'Enter'){ e.preventDefault(); form.dispatchEvent(new Event('submit')); }
    });

  })();

})();

