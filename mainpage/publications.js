var publication_lists = [
    { content: "MTZK: Testing and Exploring Bugs in Zero-Knowledge (ZK) Compilers", 
        author: "Dongwei Xiao, Zhibo Liu, <ohln>Yiteng Peng</ohln>, and Shuai Wang.",
        conf: "NDSS 2025" },
    { content: "Testing and Understanding Deviation Behaviors in FHE-hardened Machine Learning Models", 
        author: "<ohln>Yiteng Peng</ohln>, Daoyuan Wu, Zhibo Liu, Dongwei Xiao, Zhenlan Ji, Juergen Rahmel, and Shuai Wang.",
        conf: "ICSE 2025" },
    { content: "Divergence-aware Testing of Graphics Shader Compiler Back-ends", 
        author: "Dongwei Xiao, Shuai Wang, Zhibo Liu, <ohln>Yiteng Peng</ohln>, Daoyuan Wu, and Zhendong Su.",
        conf: "PLDI 2025" },
    { content: "Extraction and Mutation at a High Level: Template-Based Fuzzing for JavaScript Engines", 
        author: "Wai Kin Wong, Dongwei Xiao, Cheuk Tung Lai, <ohln>Yiteng Peng</ohln>, Daoyuan Wu, and Shuai Wang.",
        conf: "OOPSLA 2025" },
];

// 获取包含这些内容的容器元素
var container = document.getElementById("pubs_end");

// 反转数组并遍历，实现倒序遍历
publication_lists.reverse().forEach(function(item) {
    var html = `
        <div class="row">
            <div class="col-lg-12 col-md-12 col-12">
                <div class="atf-about-content atf-about-text atf-main-about wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
                    <h3>${item.content}</h3>
                    <h5>${item.author} <span class="gray-background">${item.conf}</span></h5>
                </div>
            </div>
        </div>
    `;
    
    container.insertAdjacentHTML('beforebegin', html);
});