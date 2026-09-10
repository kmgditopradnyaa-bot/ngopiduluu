/* ==========================================================================
   NgopiDuluu - Real-Time Live Search Engine
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search-menu-input');
  const clearSearchBtn = document.getElementById('clear-search-btn');

  // Search Modal Elements
  const searchNavBtn = document.getElementById('search-nav-btn');
  const searchNavBtnMobile = document.getElementById('search-nav-btn-mobile');
  const searchModal = document.getElementById('search-modal');
  const modalSearchInput = document.getElementById('modal-search-input');
  const modalSearchResults = document.getElementById('modal-search-results');

  // Inline Search on Menu Page
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.trim().toLowerCase();
      if (clearSearchBtn) {
        clearSearchBtn.classList.toggle('active', query.length > 0);
      }
      performInlineSearch(query);
    });

    if (clearSearchBtn) {
      clearSearchBtn.addEventListener('click', () => {
        searchInput.value = '';
        clearSearchBtn.classList.remove('active');
        if (typeof renderMenuGrid === 'function') {
          renderMenuGrid();
        }
      });
    }
  }

  // Modal Search Toggle
  function openSearchModal(e) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const modal = document.getElementById('search-modal');
    const input = document.getElementById('modal-search-input');
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
      if (input) {
        input.value = '';
        setTimeout(() => input.focus(), 100);
        renderModalSearchResults('');
      }
    }
  }

  // Global handler for all search buttons across pages
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('#search-nav-btn, #search-nav-btn-mobile');
    if (btn) {
      openSearchModal(e);
    }
  });

  if (modalSearchInput) {
    modalSearchInput.addEventListener('input', (e) => {
      const query = e.target.value.trim().toLowerCase();
      renderModalSearchResults(query);
    });
  }
});

function performInlineSearch(query) {
  if (typeof MENU_DATA === 'undefined') return;

  if (!query) {
    if (typeof renderMenuGrid === 'function') {
      renderMenuGrid();
    }
    return;
  }

  const results = MENU_DATA.filter(item => 
    item.name.toLowerCase().includes(query) || 
    item.desc.toLowerCase().includes(query) ||
    item.category.toLowerCase().includes(query)
  );

  if (typeof renderMenuGrid === 'function') {
    renderMenuGrid(results);
  }
}

function renderModalSearchResults(query) {
  const container = document.getElementById('modal-search-results');
  if (!container || typeof MENU_DATA === 'undefined') return;

  const isEn = (typeof LanguageService !== 'undefined' && LanguageService.getLang() === 'en');

  if (!query) {
    container.innerHTML = `
      <div style="text-align:center; padding: 2rem; color: var(--text-muted);">
        <p>${isEn ? 'Type menu name, e.g.: <i>"Latte"</i>, <i>"Croissant"</i>, <i>"Tiramisu"</i>...' : 'Ketik nama menu, contoh: <i>"Latte"</i>, <i>"Croissant"</i>, <i>"Tiramisu"</i>...'}</p>
      </div>
    `;
    return;
  }

  const results = MENU_DATA.filter(item => 
    item.name.toLowerCase().includes(query) || 
    item.desc.toLowerCase().includes(query) ||
    (item.desc_en && item.desc_en.toLowerCase().includes(query)) ||
    item.category.toLowerCase().includes(query)
  );

  if (results.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding: 2rem; color: var(--text-muted);">
        <p>${isEn ? `No menu items matching "${query}"` : `Tidak ada menu yang sesuai dengan "${query}"`}</p>
      </div>
    `;
    return;
  }

  let html = '<div style="display:flex; flex-direction:column; gap:1rem; max-height:350px; overflow-y:auto; overflow-x:hidden; padding-right:0.5rem;">';
  results.forEach(item => {
    const descText = isEn && item.desc_en ? item.desc_en : item.desc;
    html += `
      <div class="search-result-item" onclick="selectModalSearchResult('${item.id}')">
        <img src="${item.image}" alt="${item.name}">
        <div class="result-info">
          <div class="result-name">${item.name}</div>
          <div class="result-desc">${descText.substring(0, 50)}...</div>
        </div>
        <div class="result-price">${typeof formatRupiah === 'function' ? formatRupiah(item.price) : 'Rp ' + item.price.toLocaleString('id-ID')}</div>
      </div>
    `;
  });
  html += '</div>';

  container.innerHTML = html;
}

function selectModalSearchResult(id) {
  if (typeof MENU_DATA === 'undefined') return;
  const item = MENU_DATA.find(i => i.id === id);
  if (!item) return;

  const searchModal = document.getElementById('search-modal');
  if (searchModal) {
    searchModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (typeof openMenuDetail === 'function') {
    openMenuDetail(item.id);
  } else if (typeof showToast === 'function') {
    showToast(`${item.name} - Rp ${item.price.toLocaleString('id-ID')}`);
  } else {
    window.location.href = 'menu.html';
  }
}
