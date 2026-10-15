const musingPosts = document.querySelector('.musing-posts');

if (musingPosts) {
  const olderMusings = [...musingPosts.children]
    .filter((entry) => entry.matches('article.musing'))
    .slice(3);

  if (olderMusings.length) {
    const archive = document.createElement('details');
    archive.className = 'musing-archive';
    const summary = document.createElement('summary');
    summary.textContent = `Earlier musings (${olderMusings.length})`;
    archive.append(summary, ...olderMusings);
    musingPosts.append(archive);
  }
}
