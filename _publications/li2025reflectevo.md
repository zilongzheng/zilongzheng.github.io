---
layout: publication
type: inproceedings
title: >
    ReflectEvo: Improving Meta Introspection of Small LLMs by Learning Self-Reflection
author: Li, Jiaqi and Dong, Xinyi and Liu, Yang and Yang, Zhizhuo and Wang, Quansen and Wang, Xiaobo and Zhu, SongChun and Jia#, Zixia and Zheng#, Zilong
year: 2025
abbr: ACL'25
selected: false
booktitle: ACL Findings
arxiv: >
    2505.16475
data: https://huggingface.co/datasets/bigai-nlco/ReflectionEvo
abstract: >
    We present a novel pipeline, ReflectEvo, to demonstrate that small language models (SLMs) can enhance meta introspection through reflection learning. This process iteratively generates self-reflection for self-training, fostering a continuous and self-evolving process. Leveraging this pipeline, we construct ReflectEvo-460k, a large-scale, comprehensive, self-generated reflection dataset with broadened instructions and diverse multi-domain tasks. Building upon this dataset, we demonstrate the effectiveness of reflection learning to improve SLMs' reasoning abilities using SFT and DPO with remarkable performance, substantially boosting Llama-3 from 52.4% to 71.2% and Mistral from 44.4% to 71.1%. It validates that ReflectEvo can rival or even surpass the reasoning capability of the three prominent open-sourced models on BIG-bench without distillation from superior models or fine-grained human annotation. We further conduct a deeper analysis of the high quality of self-generated reflections and their impact on error localization and correction. Our work highlights the potential of continuously enhancing the reasoning performance of SLMs through iterative reflection learning in the long run.
bibtex: >
    @inproceedings{li2025reflectevo,
        title={ReflectEvo: Improving Meta Introspection of Small LLMs by Learning Self-Reflection},
        author={Li, Jiaqi and Dong, Xinyi and Liu, Yang and Yang, Zhizhuo and Wang, Quansen and Wang, Xiaobo and Zhu, SongChun and Jia, Zixia and Zheng, Zilong},
        booktitle={Findings of the Association for Computational Linguistics: ACL-Findings 2025},
        year={2025}
    }
---
