var publication_lists = [
    {
        content: "MTZK: Testing and Exploring Bugs in Zero-Knowledge (ZK) Compilers",
        author: "Dongwei Xiao, Zhibo Liu, <ohln>Yiteng Peng</ohln>, and Shuai Wang.",
        conf: "NDSS",
        year: "2025",
        rank: "CCF-A",
        paper: "https://dx.doi.org/10.14722/ndss.2025.230530",
    },
    {
        content: "Testing and Understanding Deviation Behaviors in FHE-hardened Machine Learning Models",
        author: "<ohln>Yiteng Peng</ohln>, Daoyuan Wu, Zhibo Liu, Dongwei Xiao, Zhenlan Ji, Juergen Rahmel, and Shuai Wang.",
        conf: "ICSE",
        year: "2025",
        rank: "CCF-A",
        paper: "https://doi.org/10.1109/ICSE55347.2025.00107",
    },
    {
        content: "Divergence-aware Testing of Graphics Shader Compiler Back-ends",
        author: "Dongwei Xiao, Shuai Wang, Zhibo Liu, <ohln>Yiteng Peng</ohln>, Daoyuan Wu, and Zhendong Su.",
        conf: "PLDI",
        year: "2025",
        rank: "CCF-A",
        paper: "https://doi.org/10.1145/3729305",
    },
    {
        content: "Extraction and Mutation at a High Level: Template-Based Fuzzing for JavaScript Engines",
        author: "Wai Kin Wong, Dongwei Xiao, Cheuk Tung Lai, <ohln>Yiteng Peng</ohln>, Daoyuan Wu, and Shuai Wang.",
        conf: "OOPSLA",
        year: "2025",
        rank: "CCF-A",
        paper: "https://doi.org/10.1145/3763154",
    },
    {
        content: "The Phantom Menace in Crypto-Based PET-Hardened Deep Learning Models: Invisible Configuration-Induced Attacks",
        author: "<ohln>Yiteng Peng</ohln>, Dongwei Xiao, Zhibo Liu, Zhenlan Ji, Daoyuan Wu, Shuai Wang, and Juergen Rahmel.",
        conf: "CCS",
        year: "2025",
        rank: "CCF-A",
        paper: "https://doi.org/10.1145/3719027.3765107",
    },
    {
        content: "MetaSpace: Metamorphic Testing for Spatial Cognition in Embodied Agents",
        author: "Gengyang Xu, Dongwei Xiao, <ohln>Yiteng Peng</ohln>, and Shuai Wang.",
        conf: "OOPSLA",
        year: "2026",
        rank: "CCF-A",
        corresponding: ["Dongwei Xiao", "Yiteng Peng"],
    },
    {
        content: "When Optimizations Backfire: The Paradox of Plaintext Optimizations in Privacy-Preserving ML Compilers",
        author: "Yichen Li, Jin Tan, Dongwei Xiao, <ohln>Yiteng Peng</ohln>, Pingchuan Ma, Junming Ma, Shoumeng Yan, Shuai Wang, and Fengwei Zhang",
        conf: "ISSTA",
        year: "2026",
        rank: "CCF-A",
    },
];

// Mark corresponding authors: append † after their name in the author string
// `names` can be a string or an array of strings
function markCorrespondingAuthor(authorHtml, names) {
    if (!names) return authorHtml;
    var list = Array.isArray(names) ? names : [names];
    list.forEach(function(name) {
        var escaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        var re = new RegExp('(' + escaped + ')', 'g');
        authorHtml = authorHtml.replace(re, '$1<sup class="corr-mark">†</sup>');
    });
    return authorHtml;
}

var container = document.getElementById("pubs_end");

publication_lists.slice().reverse().forEach(function(item) {
    var authorHtml = markCorrespondingAuthor(item.author, item.corresponding || null);

    // Conference badge
    var confBadge = '<span class="pub-conf-badge">'
        + '<span class="pub-conf-name">' + item.conf + '</span>'
        + '<span class="pub-conf-year">' + item.year + '</span>'
        + '</span>';

    // Rank badge
    var rankBadge = item.rank
        ? '<span class="pub-rank-badge pub-rank-ccfa">' + item.rank + '</span>'
        : '';

    // Paper button
    var paperBtn = item.paper
        ? '<a href="' + item.paper + '" target="_blank" class="pub-paper-btn"><i class="fas fa-file-alt"></i> Paper</a>'
        : '';

    var html = '<div class="row pub-item">'
        + '<div class="col-lg-12 col-md-12 col-12">'
        + '<div class="atf-about-content atf-about-text atf-main-about wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">'
        + '<div class="pub-body">'
        + '<h3 class="pub-title">' + item.content + '</h3>'
        + '<p class="pub-authors">' + authorHtml + '</p>'
        + '</div>'
        + '<div class="pub-footer">' + confBadge + rankBadge + paperBtn + '</div>'
        + '</div>'
        + '</div>'
        + '</div>';

    container.insertAdjacentHTML('beforebegin', html);
});
