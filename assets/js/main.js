(async function(){
  const dataUrl = 'properties.json';
  let properties = [];
  try {
    const res = await fetch(dataUrl);
    properties = await res.json();
  } catch(e){ console.error('Could not load properties.json', e); }

  const grid = document.getElementById('propertiesGrid');

  function card(p){
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
})();
