---
layout: pub
type: article
title: >
    DiveR-CT: Diversity-enhanced Red Teaming Large Language Model Assistants with Relaxing Constraints
author: Zhao, Andrew and Xu, Quentin and Liu, Matthieu and Wang, Shenzhi and Liu, Yong-jin and Zheng, Zilong and Huang, Gao
abbr: AAAI'25
correspondence: Zheng, Zilong and Huang, Gao
code: https://github.com/LeapLabTHU/diver-ct
website: https://andrewzh112.github.io/diver-ct/
# pdf: https://aclanthology.org/2023.emnlp-main.334.pdf
journal: AAAI
arxiv: 2405.19026
year: 2025
selected: true
abstract: >
    Recent advances in large language models (LLMs) have made them indispensable, raising significant concerns over managing their safety. Automated red teaming offers a promising alternative to the labor-intensive and error-prone manual probing for vulnerabilities, providing more consistent and scalable safety evaluations. However, existing approaches often compromise diversity by focusing on maximizing attack success rate. Additionally, methods that decrease the cosine similarity from historical embeddings with semantic diversity rewards lead to novelty stagnation as history grows. To address these issues, we introduce DiveR-CT, which relaxes conventional constraints on the objective and semantic reward, granting greater freedom for the policy to enhance diversity. Our experiments demonstrate DiveR-CT's marked superiority over baselines by 1) generating data that perform better in various diversity metrics across different attack success rate levels, 2) better-enhancing resiliency in blue team models through safety tuning based on collected data, 3) allowing dynamic control of objective weights for reliable and controllable attack success rates, and 4) reducing susceptibility to reward overoptimization. Project details and code can be found at https://andrewzh112.github.io/#diverct.
bibtex: >
    @article{zhao2025diverct,
        title={DiveR-CT: Diversity-enhanced Red Teaming Large Language Model Assistants with Relaxing Constraints},
        author={Zhao, Andrew and Xu, Quentin and Liu, Matthieu and Wang, Shenzhi and Liu, Yong-jin and Zheng, Zilong and Huang, Gao},
        journal={Proceedings of the AAAI Conference on Artificial Intelligence},
        volume={39},
        year={2025}
    }
---