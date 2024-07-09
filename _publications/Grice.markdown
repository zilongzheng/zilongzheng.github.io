---
layout: pub
type: inproceedings
key: zheng2021implicature
title: >
    GRICE: A <u>G</u>rammar-based Dataset for <u>R</u>ecovering <u>I</u>mplicature and <u>C</u>onversational r<u>E</u>asoning
author: Zheng, Zilong and Qiu, Shuwen and Fan, Lifeng and Zhu, Yixin and Zhu, Song-Chun
abbr: ACL'21
img: Grice/grice.png
# booktitle: Findings of the Association for Computational Linguistics: ACL-IJCNLP (ACL-Findings), 2021
booktitle: ACL-Findings
pdf: Grice/ACL21_GRICE.pdf
code: https://github.com/zilongzheng/grice-dataset
year: 2021
selected: false
abstract: >
    Understanding what we genuinely mean instead of what we literally say in conversations is challenging for both humans and machines; yet, this direction is mostly left untouched in modern open-ended dialogue systems. To fill in this gap, we present a grammar-based dialogue dataset, GRICE, designed to bring implicature into pragmatic reasoning in the context of conversations. Our design of GRICE also incorporates other essential aspects of modern dialogue modeling (e.g., coreference). The entire dataset is systematically generated using a hierarchical grammar model, such that each dialogue context has intricate implicatures and is temporally consistent. We further present two tasks, the implicature recovery task followed by the pragmatic reasoning task in conversation, to evaluate the model's reasoning capability. In experiments, we adopt baseline methods that claimed to have pragmatics reasoning capability; the results show a large performance gap between baseline methods and human performance. After integrating a simple module that explicitly reasons about implicature, the model shows an overall performance boost in conversational reasoning. These observations demonstrate the significance of implicature recovery for open-ended dialogue reasoning and call for future research in conversational implicature and conversational reasoning.
bibtex: >
    @inproceedings{zheng2021grice,
        title={GRICE: A Grammar-based Dataset for Recovering Implicature and Conversational Reasoning},
        author={Zheng, Zilong and Qiu, Shuwen and Fan, Lifeng and Zhu, Yixin and Zhu, Song-Chun},
        booktitle={Findings of the Association for Computational Linguistics: ACL-IJCNLP 2021},
        year={2021},
        pages = {2074--2085}
    }
---