# Shaohang Wei — personal homepage

A static, text-first homepage. Open `index.html` through any static web server.
GitHub Pages serves the checked-in files directly; no build or package install is needed.

## Editing

- `index.html`: biography, industrial experience, publications, news, and additional activities.
- `style.css`: Nunito Sans / IBM Plex Mono typography, 770 px reading column, responsive layout.
- `script.js`: Selected / All filtering and reversible author-list expansion.
- `asset/paper_fig/`: retained source figures, no longer displayed on the homepage. See its README for provenance.
- `asset/logos/`: original institution marks; source links below.
- `asset/photos/`: enhanced PNG portrait at Victoria Peak, Hong Kong, supplied by the user.
- `asset/fonts/`: locally hosted Nunito Sans (normal and italic), IBM Plex Mono, and the previous Noto Sans fonts, with their SIL Open Font Licenses.
- `asset/icons/`: Font Awesome 5.10.2 and Academicons 1.7.0 source icons and licenses.

Section order: biography, Industrial Experience, News, Open Source Projects & Academic Service, Publications.

The homepage includes every publication and full author list in static HTML, so
content remains readable without JavaScript. Author previews preserve author order
and always show Shaohang Wei. Publications use the full reading column without
figures. Education is summarized in the biography. The original `pages/` fragments and VISR redirect remain available;
the homepage no longer fetches those fragments.

## Source updates

The original site's paper links, static figures, contact destinations, CV files,
news, and additional activities are retained. Publication metadata corrections:

- SWE-Ext: title, authors, and ICSME 2026 venue follow the [official conference record](https://conf.researchr.org/details/icsme-2026/icsme-2026-papers/24/SWE-Ext-Scaling-and-Extending-Augmented-Data-for-Mid-Training-of-Repository-Level-Co).
- MeNTi: final two authors follow the [ACL Anthology record](https://aclanthology.org/2025.naacl-long.263/).
- GRSP: publication year follows its [2025 arXiv record](https://arxiv.org/abs/2510.09535).

Paper summaries are based on the linked paper abstracts. Internship dates and
role labels follow the user's supplied updates. The visual reference is [Haofei Yu's homepage](https://haofeiyu.me/);
author collapsing and short summaries draw on [Zhengyang Qi's publications page](https://jasonqi146.github.io/publications/).

Accepted conference entries show the full venue name with its official edition
number where applicable, followed by the acronym and year in parentheses,
retaining Main, Findings, Spotlight, and track labels. NAACL follows its
[official 2025 conference title](https://2025.naacl.org/), which uses the year
rather than an edition number. ReVuE and VISR are labeled "Preprint (under review)"
as supplied by the user.
Names follow the official [ICLR](https://iclr.cc/Conferences/2026),
[ICML](https://icml.cc/Conferences/2026), [NeurIPS](https://neurips.cc/Conferences/2025),
[ICSME](https://conf.researchr.org/home/icsme-2026), and [ACL](https://2026.aclweb.org/)
sites, plus the [ACL Findings](https://aclanthology.org/2025.findings-acl.655/)
and [NAACL](https://aclanthology.org/2025.naacl-long.263/) proceedings records.

## Asset sources

- [Peking University official identity downloads](https://vim.pku.edu.cn/xzzq/)
- [Beihang University official emblem](https://buaa.edu.cn/xygk/jrbh/bhxh.htm)
- Tencent mark: [the same icon used in the visual reference](https://haofeiyu.me/assets/img/icons/tencent.png)
- [Noto Sans on Google Fonts](https://fonts.google.com/noto/specimen/Noto+Sans) · [license source](https://github.com/google/fonts/blob/main/ofl/notosans/OFL.txt)
- [Nunito Sans on Google Fonts](https://fonts.google.com/specimen/Nunito+Sans) · [license source](https://github.com/google/fonts/blob/main/ofl/nunitosans/OFL.txt)
- [IBM Plex Mono on Google Fonts](https://fonts.google.com/specimen/IBM+Plex+Mono) · [license source](https://github.com/google/fonts/blob/main/ofl/ibmplexmono/OFL.txt)

Institutional marks and paper figures remain subject to their respective owners'
terms. Font licenses are included in `asset/fonts/`.

## Template alignment

The typography follows [Zhengyang Qi's font pairing](https://jasonqi146.github.io/):
Nunito Sans for the name, headings, body, and gray address; IBM Plex Mono for
dates, photo caption, and small metadata. Chinese uses system sans-serif fallbacks.
The name uses the reference's 600 weight and normal tracking. Previous Noto Sans
files remain available. The layout and type sizes retain the Haofei Yu template:
16 px root; 32 px name with 1.2 line height; 15.2 px / 1.7 biography;
24 px / 600 section headings; 17.6 px / 500 paper titles with 1.4 line height;
14 px authors at 1.45 and italic venues at 1.6; 15.2 px / 500 paper links.
The palette uses #fafbfc, #334155, #1e293b, #475569, #64748b, and #1e40af.
The 800 px outer container has 15 px side padding (770 px text area), including
on mobile. Headings use a 2 px #e2e8f0 rule; paper rows have 13.6 px vertical
padding and 1 px #f1f5f9 separators. Contact icon shapes and sizes follow the
reference. The user's additions are industrial experience, TL;DR summaries,
and author expansion; no animations are used.

The enhanced 3840 × 2160 PNG appears between the contact links and biography,
at the reading-column width with its original 16:9 aspect ratio. Photo placement
follows the reference: 24 px after the header, 12 px corner radius and a subtle
shadow, then a centered 12 px caption with 8 px top spacing and 32 px before
the biography. Intrinsic image dimensions reserve its height while loading.
