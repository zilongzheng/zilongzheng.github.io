---
layout: pub
type: inproceedings
key: highie
title: >
    Modeling Instance Interactions for Joint Information Extraction with Neural High-Order Conditional Random Field
author: Jia, Zixia and Yan, Zhaohui and Han, Wenjuan and Zheng, Zilong and Tu, Kewei
abbr: ACL'23
# booktitle: Proceedings of the 61st Annual Meeting of the Association for Computational Linguistics (ACL)
booktitle: ACL
correspondence: Zheng, Zilong and Tu, Kewei
year: 2023
selected: false
code: https://github.com/bigai-nlco/CRFIE
pdf: JointIE/acl23joint.pdf
abstract: >
    Prior works on joint Information Extraction (IE) typically model instance (<em>e.g.</em>, event triggers, entities, roles, relations) interactions by representation enhancement, type dependencies scoring, or global decoding. We find that the previous models generally consider binary type dependency scoring of a pair of instances, and leverage local search such as beam search to approximate global solutions. To better integrate cross-instance interactions, in this work, we introduce a joint IE framework (CRFIE) that formulates joint IE as a high-order Conditional Random Field. Specifically, we design binary factors and ternary factors to directly model interactions between not only a pair of instances but also triplets. Then, these factors are utilized to jointly predict labels of all instances. To address the intractability problem of exact high-order inference, we incorporate a high-order neural decoder that is unfolded from a mean-field variational inference method, which achieves consistent learning and inference. The experimental results show that our approach achieves consistent improvements on three IE tasks compared with our baseline and prior work.
bibtex: >
    @inproceedings{jia2023joint,
        title={Modeling Instance Interactions for Joint Information Extraction with Neural High-Order Conditional Random Field},
        author={Jia, Zixia and Yan, Zhaohui and Han, Wenjuan and Zheng, Zilong and Tu, Kewei},
        booktitle={Proceedings of the 61st Annual Meeting of the Association for Computational Linguistics (ACL)},
        year={2023}
    }
---