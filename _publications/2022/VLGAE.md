---
layout: publication
type: inproceedings
key: vlgae
title: >
    Unsupervised Vision-Language Parsing: Seamlessly Bridging Visual Scene Graphs with Language Structures via Dependency Relationships
author: Lou, Chao and Han#, Wenjuan and Lin, Yuhuan and Zheng#, Zilong
arxiv: "2203.14260"
abbr: CVPR'22
# booktitle: Proceedings of the IEEE conference on computer vision and pattern recognition (CVPR)
booktitle: CVPR
year: 2022
selected: false
abstract: >
    Understanding realistic visual scene images together with language descriptions is a fundamental task towards generic visual understanding. Previous works have shown compelling comprehensive results by building hierarchical structures for visual scenes (e.g., scene graphs) and natural languages (e.g., dependency trees), individually. However, how to construct a joint vision-language (VL) structure has barely been investigated. More challenging but worthwhile, we introduce a new task that targets on inducing such a joint VL structure in an unsupervised manner. Our goal is to bridge the visual scene graphs and linguistic dependency trees seamlessly. Due to the lack of VL structural data, we start by building a new dataset VLParse. Rather than using labor-intensive labeling from scratch, we propose an automatic alignment procedure to produce coarse structures followed by human refinement to produce high-quality ones. Moreover, we benchmark our dataset by proposing a contrastive learning (CL)-based framework VLGAE, short for Vision-Language Graph Autoencoder. Our model obtains superior performance on two derived tasks, i.e., language grammar induction and VL phrase grounding. Ablations show the effectiveness of both visual cues and dependency relationships on fine-grained VL structure construction.
bibtex: >
    @inproceedings{lou2022unsupervised,
        title={Unsupervised Vision-Language Parsing: Seamlessly Bridging Visual Scene Graphs with Language Structures via Dependency Relationships},
        author={Lou, Chao and Han, Wenjuan and Lin, Yuhuan and Zheng, Zilong},
        journal={Proceedings of the IEEE conference on computer vision and pattern recognition (CVPR)},
        year={2022}
    }
---
