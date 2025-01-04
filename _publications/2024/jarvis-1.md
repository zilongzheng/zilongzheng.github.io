---
layout: pub
type: journal
title: >
    JARVIS-1: Open-world Multi-task Agents with Memory-Augmented Multimodal Language Models
author: Wang, Zihao  and Cai, Shaofei and Liu, Anji and Jin, Yonggang and Hou, Jinbing and Zhang, Bowei and Lin, Haowei and He, Zhaofeng and Zheng, Zilong and Yang, Yaodong and Ma, Xiaojian and Liang, Yitao
year: 2024
journal: TPAMI
abbr: TPAMI'24
# preprint: true
website: https://craftjarvis-jarvis1.github.io/
abstract: >
    Achieving human-like planning and control with multimodal observations in an open world is a key milestone for more functional generalist agents. Existing approaches can handle certain long-horizon tasks in an open world. However, they still struggle when the number of open-world tasks could potentially be infinite and lack the capability to progressively enhance task completion as game time progresses. We introduce JARVIS-1, an open-world agent that can perceive multimodal input (visual observations and human instructions), generate sophisticated plans, and perform embodied control, all within the popular yet challenging open-world Minecraft universe. Specifically, we develop JARVIS-1 on top of pre-trained multimodal language models, which map visual observations and textual instructions to plans. The plans will be ultimately dispatched to the goal-conditioned controllers. We outfit JARVIS-1 with a multimodal memory, which facilitates planning using both pre-trained knowledge and its actual game survival experiences. JARVIS-1 is the existing most general agent in Minecraft, capable of completing over 200 different tasks using control and observation space similar to humans. These tasks range from short-horizon tasks, e.g., "chopping trees" to long-horizon tasks, e.g., "obtaining a diamond pickaxe". JARVIS-1 performs exceptionally well in short-horizon tasks, achieving nearly perfect performance. In the classic long-term task of ObtainDiamondPickaxe, JARVIS-1 surpasses the reliability of current state-of-the-art agents by 5 times and can successfully complete longer-horizon and more challenging tasks.
bibtex: >
    @article{wang2023jarvis1,
        title   = {JARVIS-1: Open-World Multi-task Agents with Memory-Augmented Multimodal Language Models},
        author  = {Zihao Wang and Shaofei Cai and Anji Liu and Yonggang Jin and Jinbing Hou and Bowei Zhang and Haowei Lin and Zhaofeng He and Zilong Zheng and Yaodong Yang and Xiaojian Ma and Yitao Liang},
        year    = {2023},
        journal = {arXiv preprint arXiv: 2311.05997}
    }
---