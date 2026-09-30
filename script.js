'use strict';

// Core content is static HTML, readable even without JavaScript.
document.querySelectorAll('.pub-authors').forEach((line, index) => {
  const full = line.querySelector('.authors-full');
  const authors = Array.from(full.querySelectorAll('[data-author]'));
  if (authors.length <= 5) return;
  const selfIndex = authors.findIndex(author => author.querySelector('strong'));
  const shown = new Set([0, 1, 2, selfIndex > 3 ? selfIndex : 3]);
  const preview = document.createElement('span');
  preview.className = 'authors-preview';
  let last = -1;
  [...shown].sort((a, b) => a - b).forEach(i => {
    if (last !== -1) preview.append(i > last + 1 ? ', …, ' : ', ');
    preview.append(authors[i].cloneNode(true));
    last = i;
  });
  preview.append(',');
  const toggle = document.createElement('button');
  toggle.type = 'button';
  toggle.className = 'authors-toggle';
  const count = authors.length - shown.size;
  const collapsedLabel = `${count} more ${count === 1 ? 'author' : 'authors'}`;
  toggle.textContent = collapsedLabel;
  toggle.setAttribute('aria-expanded', 'false');
  full.id = `authors-${index}`;
  toggle.setAttribute('aria-controls', full.id);
  toggle.setAttribute('aria-label', `Show all ${authors.length} authors`);
  full.hidden = true;
  full.before(preview);
  full.after(toggle);
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    full.hidden = expanded;
    preview.hidden = !expanded;
    toggle.setAttribute('aria-expanded', String(!expanded));
    toggle.setAttribute('aria-label', expanded ? `Show all ${authors.length} authors` : 'Show fewer authors');
    toggle.textContent = expanded ? collapsedLabel : 'Show fewer';
  });
});

const publications = Array.from(document.querySelectorAll('.publication'));
const filters = document.querySelector('.publication-filters');
const filterButtons = Array.from(filters.querySelectorAll('button'));
const status = document.querySelector('#publication-count');
function applyFilter(filter) {
  publications.forEach(paper => { paper.hidden = filter === 'selected' && paper.dataset.selected !== 'true'; });
  filterButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === filter)));
  const visible = publications.filter(paper => !paper.hidden).length;
  status.textContent = `${visible} ${filter === 'selected' ? 'selected works' : 'publications and preprints'} · * Equal contribution`;
}
filters.hidden = false;
filterButtons.forEach(button => button.addEventListener('click', () => applyFilter(button.dataset.filter)));
applyFilter('selected');
