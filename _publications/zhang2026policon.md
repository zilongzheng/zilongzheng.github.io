---
layout: publication
type: article
title: >
    PoliCon: Evaluating LLMs on Achieving Diverse Political Consensus Objectives
author: Zhaowei Zhang and Xiaobo Wang and Minghua Yi and Mengmeng Wang and Fengshuo Bai and Zilong Zheng# and Yipeng Kang# and Yaodong Yang#
arxiv: "2505.19558"
year: 2026
abbr: ICLR'26
venue: ICLR
pdf: https://openreview.net/pdf?id=MHlwNs9k1Y
website: https://www.zhangzhaowei.me/projects/PoliCon/
abstract: >
    Achieving political consensus is crucial yet challenging for the effective functioning of social governance. However, although frontier AI systems represented by large language models (LLMs) have developed rapidly in recent years, their capabilities in this scope are still understudied. In this paper, we introduce PoliCon, a novel benchmark constructed from 2,225 high-quality deliberation records of the European Parliament over 13 years, ranging from 2009 to 2022, to evaluate the ability of LLMs to draft consensus resolutions based on divergent party positions under varying collective decision-making contexts and political requirements. Specifically, PoliCon incorporates four factors to build each task environment for finding different political consensus: specific political issues, political goals, participating parties, and power structures based on seat distribution. We also developed an evaluation framework based on social choice theory for PoliCon, which simulates the real voting outcomes of different political parties to assess whether LLM-generated resolutions meet the requirements of the predetermined political consensus. Our experimental results demonstrate that even state-of-the-art models remain undersatisfied with complex tasks like passing resolutions by a two-thirds majority and addressing security issues, while uncovering their inherent partisan biases and revealing some behaviors LLMs show to achieve the consensus, such as prioritizing the stance of the dominant party instead of uniting smaller parties, which highlights PoliCon's promise as an effective platform for studying LLMs' ability to promote political consensus.
bibtex: >
    @inproceedings{zhang2025policon,
          title={PoliCon: Evaluating LLMs on Achieving Diverse Political Consensus Objectives},
          author={Zhaowei Zhang and Xiaobo Wang and Minghua Yi and Mengmeng Wang and Fengshuo Bai and Zilong Zheng and Yipeng Kang and Yaodong Yang},
          year={2026},
          booktitle={The Fourteenth International Conference on Learning Representations}
    }
related_publications:
    - zhao2025absolute
    - li2025latentseek
    - zhang2025amulet
    - wu2025tokenswift
tags:
  - RLVR
  - Reasoning
  - Large Reasoning Model
---
