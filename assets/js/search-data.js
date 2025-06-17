// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publication",
          title: "publication",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "news-one-paper-is-accepted-to-iclr-22-as-an-oral-paper",
          title: 'One paper is accepted to ICLR’22 as an Oral paper!',
          description: "",
          section: "News",},{id: "news-one-paper-on-fine-grained-vision-language-alignment-is-accepted-to-cvpr-22-congratulations-to-chao-lou",
          title: 'One paper on fine-grained Vision-Language alignment is accepted to CVPR’22. Congratulations to Chao...',
          description: "",
          section: "News",},{id: "news-our-work-on-bidirectional-value-alignment-is-accepted-to-science-robotics-volume-july-sparkles-smile",
          title: 'Our work on bidirectional value alignment is accepted to Science Robotics Volume July!...',
          description: "",
          section: "News",},{id: "news-i-served-as-an-organizer-on-the-first-um-ios-workshop-at-emnlp-22-i-also-presented-a-keynote-speak-on-vison-language-joint-parsing",
          title: 'I served as an organizer on the first UM-IoS workshop at EMNLP’22. I...',
          description: "",
          section: "News",},{id: "news-one-paper-is-accepted-to-iclr-23-congratulations-to-xiaojian-and-silong",
          title: 'One paper is accepted to ICLR’23. Congratulations to Xiaojian and Silong.',
          description: "",
          section: "News",},{id: "news-three-papers-are-accepted-to-acl-23-congratulations-to-yuxuan-and-zixia",
          title: 'Three papers are accepted to ACL’23. Congratulations to Yuxuan and Zixia.',
          description: "",
          section: "News",},{id: "news-two-benchmarks-are-accepted-to-neurips-23-d-amp-amp-b-track-congratulations-to-hengli-and-jieming",
          title: 'Two benchmarks are accepted to NeurIPS’23 D&amp;amp;amp;B Track. Congratulations to Hengli and Jieming....',
          description: "",
          section: "News",},{id: "news-one-short-paper-on-documentre-is-accepted-to-emnlp-23",
          title: 'One short paper on DocumentRE is accepted to EMNLP’23.',
          description: "",
          section: "News",},{id: "news-one-paper-is-accepted-to-naacl-24-congratulations-to-steven-gong",
          title: 'One paper is accepted to NAACL’24. Congratulations to Steven Gong.',
          description: "",
          section: "News",},{id: "news-four-papers-are-accepted-to-acl-24-with-2-main-conference-and-2-findings",
          title: 'Four papers are accepted to ACL’24 with 2 Main conference and 2 Findings....',
          description: "",
          section: "News",},{id: "news-one-paper-on-compositional-visual-reasoning-is-accepted-to-colm-24-congratulations-to-yuxuan",
          title: 'One paper on compositional visual reasoning is accepted to CoLM’24. Congratulations to Yuxuan!...',
          description: "",
          section: "News",},{id: "news-one-paper-on-tom-for-dialogue-modeling-is-accepted-for-an-oral-presentation-at-sigdial-24-congratulations-to-shuwen",
          title: 'One paper on ToM for dialogue modeling is accepted for an Oral presentation...',
          description: "",
          section: "News",},{id: "news-two-papers-on-video-understanding-and-sentence-representation-are-accepted-to-emnlp-24-main-congratulations-to-yuxuan-and-ziyong",
          title: 'Two papers on video understanding and sentence representation are accepted to EMNLP’24 Main....',
          description: "",
          section: "News",},{id: "news-two-papers-on-long-context-window-extension-and-situated-inductive-reasoning-are-accepted-to-neurips-24-congratulations-to-tong-and-xiaojuan",
          title: 'Two papers on long context window extension and situated inductive reasoning are accepted...',
          description: "",
          section: "News",},{id: "news-diver-ct-is-accepted-to-aaai-25-congratulations-to-andrew",
          title: 'Diver-CT is accepted to AAAI’25. Congratulations to Andrew!',
          description: "",
          section: "News",},{id: "news-i-will-co-host-1st-workshop-on-large-language-models-and-structure-modeling-stay-tuned-fire",
          title: 'I will co-host 1st workshop on Large Language Models and Structure Modeling. Stay...',
          description: "",
          section: "News",},{id: "news-three-papers-on-in-context-knowledge-editing-multimodal-knowledge-editing-and-in-context-alignment-are-accepted-to-iclr-25-sparkles-smile",
          title: 'Three papers on in-context knowledge editing, multimodal knowledge editing and in-context alignment are...',
          description: "",
          section: "News",},{id: "news-omnimmi-is-accepted-to-cvpr-25-fire-we-devised-the-first-ever-benchmark-for-streaming-interactive-omni-understanding-please-try-your-models-on-omnimmi-leaderboard",
          title: 'OmniMMI is accepted to CVPR’25 :fire:. We devised the first-ever benchmark for streaming...',
          description: "",
          section: "News",},{id: "news-fire-three-papers-on-tokenswift-long-sequence-acceleration-toedit-llm-model-collapse-and-mcu-open-ended-agent-evaluation-are-accepted-to-icml-25-mcu-is-awarded-as-spotlight-poster-congratulations-to-tong-xuekai-and-xinyue",
          title: ':fire: Three papers on TokenSwift (long sequence acceleration), ToEdit (LLM model collapse) and...',
          description: "",
          section: "News",},{id: "news-fire-three-papers-on-bidirectional-llm-encoder-reflectevo-meta-reflection-learning-and-causal-value-steering-are-accepted-to-acl-25-one-paper-on-combinational-creativity-in-vlms-is-accepted-to-cogsci-25-for-oral-presentation-congratulations-to-ziyong-jiaqi-yipeng-and-yongqian",
          title: ':fire: Three papers on bidirectional LLM Encoder, ReflectEvo (Meta Reflection Learning) and Causal...',
          description: "",
          section: "News",},{id: "news-i-will-be-serving-as-senior-area-chair-for-emnlp",
          title: 'I will be serving as Senior Area Chair for EMNLP.',
          description: "",
          section: "News",},{id: "news-in-context-value-alignment-and-navi2gaze-are-accepted-to-iros-25-for-oral-presentations",
          title: 'In-context Value Alignment and Navi2Gaze are accepted to IROS’25 for Oral Presentations!',
          description: "",
          section: "News",},{id: "publications-energy-based-generative-cooperative-saliency-prediction",
          title: 'Energy-Based Generative Cooperative Saliency Prediction',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/2022/EBMSaliency/";
            },},{id: "publications-sharp-search-based-adversarial-attack-for-structured-prediction",
          title: 'SHARP: Search-Based Adversarial Attack for Structured Prediction',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/2022/SHARP/";
            },},{id: "publications-vgstore-a-multimodal-extension-to-sparql-for-querying-rdf-scene-graph",
          title: 'VGStore: A Multimodal Extension to SPARQL for Querying RDF Scene Graph',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/2022/VGStore22iswc/";
            },},{id: "publications-unsupervised-vision-language-parsing-seamlessly-bridging-visual-scene-graphs-with-language-structures-via-dependency-relationships",
          title: 'Unsupervised Vision-Language Parsing: Seamlessly Bridging Visual Scene Graphs with Language Structures via Dependency...',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/2022/VLGAE/";
            },},{id: "publications-unsupervised-vision-language-grammar-induction-with-shared-structure-modeling",
          title: 'Unsupervised Vision-Language Grammar Induction with Shared Structure Modeling',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/2022/VLGI/";
            },},{id: "publications-in-situ-bidirectional-human-robot-value-alignment",
          title: 'In situ bidirectional human-robot value alignment',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/2022/yuan2022insitu/";
            },},{id: "publications-diplomat-a-dialogue-dataset-for-situated-pragmatic-reasoning",
          title: 'DiPlomat: A Dialogue Dataset for Situated Pragmatic Reasoning',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/2023/Diplomat/";
            },},{id: "publications-semi-automatic-data-enhancement-for-document-level-relation-extraction-with-distant-supervision-from-large-language-models",
          title: 'Semi-automatic Data Enhancement for Document-Level Relation Extraction with Distant Supervision from Large Language...',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/2023/DocGNRE/";
            },},{id: "publications-probio-a-protocol-guided-multimodal-dataset-for-molecular-biology-lab",
          title: 'ProBio: A Protocol-guided Multimodal Dataset for Molecular Biology Lab',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/2023/ProBio/";
            },},{id: "publications-shuo-amp-772-we-amp-769-n-jie-amp-780-zi-amp-768-rethinking-dictionaries-and-glyphs-for-chinese-language-pre-training",
          title: 'Shuo&amp;amp;#772; We&amp;amp;#769;n Jie&amp;amp;#780; Zi&amp;amp;#768;: Rethinking Dictionaries and Glyphs for Chinese Language Pre-training',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/2023/chinesedict/";
            },},{id: "publications-modeling-instance-interactions-for-joint-information-extraction-with-neural-high-order-conditional-random-field",
          title: 'Modeling Instance Interactions for Joint Information Extraction with Neural High-Order Conditional Random Field...',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/2023/jia2023highie/";
            },},{id: "publications-sqa3d-situated-question-answering-in-3d-scenes",
          title: 'SQA3D: Situated Question Answering in 3D Scenes',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/2023/ma2023sqa3d/";
            },},{id: "publications-vstar-a-video-grounded-dialogue-dataset-for-situated-semantic-understanding-with-scene-and-topic-transitions",
          title: 'VSTAR: A Video-grounded Dialogue Dataset for Situated Semantic Understanding with Scene and Topic...',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/2023/vstar/";
            },},{id: "publications-varying-sentence-representations-via-condition-specified-routers",
          title: 'Varying Sentence Representations via Condition-Specified Routers',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/2024/EMNLP24-CSR/";
            },},{id: "publications-combining-supervised-learning-and-reinforcement-learning-for-multi-label-classification-tasks-with-partial-labels",
          title: 'Combining Supervised Learning and Reinforcement Learning for Multi-Label Classification Tasks with Partial Labels...',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/2024/MultiTaskPartialLabel/";
            },},{id: "publications-efficient-temporal-extrapolation-of-multimodal-large-language-models-with-temporal-grounding-bridge-for-long-video-understanding",
          title: 'Efficient Temporal Extrapolation of Multimodal Large Language Models with Temporal Grounding Bridge for...',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/2024/VideoTGB/";
            },},{id: "publications-jarvis-1-open-world-multi-task-agents-with-memory-augmented-multimodal-language-models",
          title: 'JARVIS-1: Open-world Multi-task Agents with Memory-Augmented Multimodal Language Models',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/2024/jarvis-1/";
            },},{id: "publications-langsuit-e-controlling-planning-and-interacting-with-large-language-models-in-embodied-text-environments",
          title: 'LangSuit⋅E: Controlling, Planning, and Interacting with Large Language Models in Embodied Text Environments...',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/2024/langsuite/";
            },},{id: "publications-loogle-can-long-context-language-models-understand-long-contexts",
          title: 'LooGLE: Can Long-Context Language Models Understand Long Contexts?',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/2024/loogle/";
            },},{id: "publications-mindagent-emergent-gaming-interaction",
          title: 'MindAgent: Emergent Gaming Interaction',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/2024/mindagent/";
            },},{id: "publications-minddial-belief-dynamics-tracking-with-theory-of-mind-modeling-for-situated-neural-dialogue-generation",
          title: 'MindDial: Belief Dynamics Tracking with Theory-of-Mind Modeling for Situated Neural Dialogue Generation',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/2024/minddial/";
            },},{id: "publications-boosting-llm-agents-with-recursive-contemplation-for-effective-deception-handling",
          title: 'Boosting LLM Agents with Recursive Contemplation for Effective Deception Handling',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/2024/recon/";
            },},{id: "publications-mars-situated-inductive-reasoning-in-an-open-world-environment",
          title: 'Mars: Situated Inductive Reasoning in an Open-World Environment',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/2024/tang2024mars/";
            },},{id: "publications-exovip-step-by-step-verification-and-exploration-with-exoskeleton-modules-for-compositional-visual-reasoning",
          title: 'ExoViP: Step-by-step Verification and Exploration with Exoskeleton Modules for Compositional Visual Reasoning',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/2024/wang2024ExoVip/";
            },},{id: "publications-an-efficient-recipe-for-long-context-extension-via-middle-focused-positional-encoding",
          title: 'An Efficient Recipe for Long Context Extension via Middle-Focused Positional Encoding',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/2024/wu2024cream/";
            },},{id: "publications-learning-descriptor-networks-for-3d-shape-synthesis-and-analysis",
          title: 'Learning Descriptor Networks for 3D Shape Synthesis and Analysis',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/before2021/3DDescriptorNet/";
            },},{id: "publications-generative-pointnet-deep-energy-based-learning-on-unordered-point-sets-for-3d-generation-reconstruction-and-classification",
          title: 'Generative PointNet: Deep Energy-Based Learning on Unordered Point Sets for 3D Generation, Reconstruction...',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/before2021/GPointNet/";
            },},{id: "publications-generative-voxelnet-learning-energy-based-models-for-3d-shape-synthesis-and-analysis",
          title: 'Generative VoxelNet: Learning Energy-Based Models for 3D Shape Synthesis and Analysis',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/before2021/GVoxelNet/";
            },},{id: "publications-grice-a-grammar-based-dataset-for-recovering-implicature-and-conversational-reasoning",
          title: 'GRICE: A Grammar-based Dataset for Recovering Implicature and Conversational rEasoning',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/before2021/Grice/";
            },},{id: "publications-motion-based-generator-model-unsupervised-disentanglement-of-appearance-trackable-and-intrackable-motions-in-dynamic-patterns",
          title: 'Motion-Based Generator Model: Unsupervised Disentanglement of Appearance, Trackable and Intrackable Motions in Dynamic...',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/before2021/MotionGenerator/";
            },},{id: "publications-learning-cycle-consistent-cooperative-networks-via-alternating-mcmc-teaching-for-unsupervised-cross-domain-translation",
          title: 'Learning Cycle-Consistent Cooperative Networks via Alternating MCMC Teaching for Unsupervised Cross-Domain Translation',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/before2021/cyclecoop/";
            },},{id: "publications-learning-triadic-belief-dynamics-in-nonverbal-communication-from-videos",
          title: 'Learning Triadic Belief Dynamics in Nonverbal Communication from Videos',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/before2021/fan2021tradicbelief/";
            },},{id: "publications-joint-inference-of-states-robot-knowledge-and-human-false-beliefs",
          title: 'Joint Inference of States, Robot Knowledge, and Human (False-)Beliefs',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/before2021/icra20_tom/";
            },},{id: "publications-learning-dynamic-generator-model-by-alternating-back-propagation-through-time",
          title: 'Learning Dynamic Generator Model by Alternating Back-Propagation Through Time',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/before2021/xie2019dyanmicgenerator/";
            },},{id: "publications-cooperative-training-of-fast-thinking-initializer-and-slow-thinking-solver-for-multi-modal-conditional-learning",
          title: 'Cooperative Training of Fast Thinking Initializer and Slow Thinking Solver for Multi-Modal Conditional...',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/before2021/xie2021cooperative/";
            },},{id: "publications-learning-energy-based-model-with-variational-auto-encoder-as-amortized-sampler",
          title: 'Learning Energy-Based Model with Variational Auto-Encoder as Amortized Sampler',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/before2021/xie2021vaeebm/";
            },},{id: "publications-reasoning-visual-dialogs-with-structural-and-partial-observations",
          title: 'Reasoning Visual Dialogs with Structural and Partial Observations',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/before2021/zheng2019visdial-gcnn/";
            },},{id: "publications-patchwise-generative-convnet-training-energy-based-models-from-a-single-natural-image-for-internal-learning",
          title: 'Patchwise Generative ConvNet: Training Energy-Based Models from a Single Natural Image for Internal...',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/before2021/zheng2021patchgconvNet/";
            },},{id: "publications-mmke-bench-a-multimodal-editing-benchmark-for-diverse-visual-knowledge",
          title: 'MMKE-Bench: A Multimodal Editing Benchmark for Diverse Visual Knowledge',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/du2025mmke/";
            },},{id: "publications-are-the-values-of-llms-structurally-aligned-with-humans-a-causal-perspective",
          title: 'Are the Values of LLMs Structurally Aligned with Humans? A Causal Perspective',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/kang2025values/";
            },},{id: "publications-in-situ-value-aligned-human-robot-interactions-with-physical-constraints",
          title: 'In-situ Value-aligned Human-Robot Interactions with Physical Constraints',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/li2025iclhf/";
            },},{id: "publications-seek-in-the-dark-reasoning-via-test-time-instance-level-policy-gradient-in-latent-space",
          title: 'Seek in the Dark: Reasoning via Test-Time Instance-Level Policy Gradient in Latent Space...',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/li2025latentseek/";
            },},{id: "publications-reflectevo-improving-meta-introspection-of-small-llms-by-learning-self-reflection",
          title: 'ReflectEvo: Improving Meta Introspection of Small LLMs by Learning Self-Reflection',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/li2025reflectevo/";
            },},{id: "publications-look-both-ways-and-no-sink-converting-llms-into-text-encoders-without-training",
          title: 'Look Both Ways and No Sink: Converting LLMs into Text Encoders without Training...',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/lin2025converting/";
            },},{id: "publications-probing-and-inducing-combinational-creativity-in-vision-language-models",
          title: 'Probing and Inducing Combinational Creativity in Vision-Language Models',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/peng2025probing/";
            },},{id: "publications-in-context-editing-learning-knowledge-from-self-induced-distributions",
          title: 'In-Context Editing: Learning Knowledge from Self-Induced Distributions',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/qi2025ice/";
            },},{id: "publications-omnimmi-a-comprehensive-multi-modal-interaction-benchmark-in-streaming-video-contexts",
          title: 'OmniMMI: A Comprehensive Multi-modal Interaction Benchmark in Streaming Video Contexts',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/wang2025omnimmi/";
            },},{id: "publications-lossless-acceleration-of-ultra-long-sequence-generation",
          title: 'Lossless Acceleration of Ultra Long Sequence Generation',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/wu2025tokenswift/";
            },},{id: "publications-absolute-zero-reinforced-self-play-reasoning-with-zero-data",
          title: 'Absolute Zero: Reinforced Self-play Reasoning with Zero Data',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/zhao2025absolute/";
            },},{id: "publications-amulet-realignment-during-test-time-for-personalized-preference-adaptation-of-llms",
          title: 'Amulet: ReAlignment During Test Time for Personalized Preference Adaptation of LLMs',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/zhao2025amulet/";
            },},{id: "publications-diver-ct-diversity-enhanced-red-teaming-large-language-model-assistants-with-relaxing-constraints",
          title: 'DiveR-CT: Diversity-enhanced Red Teaming Large Language Model Assistants with Relaxing Constraints',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/zhao2025diverct/";
            },},{id: "publications-mcu-an-evaluation-framework-for-open-ended-game-agents",
          title: 'MCU: An Evaluation Framework for Open-Ended Game Agents',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/zheng2025mcu/";
            },},{id: "publications-navi2gaze-leveraging-foundation-models-for-navigation-and-target-gazing",
          title: 'Navi2Gaze: Leveraging Foundation Models for Navigation and Target Gazing',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/zhu2025navi2gaze/";
            },},{id: "publications-how-to-synthesize-text-data-without-model-collapse",
          title: 'How to Synthesize Text Data without Model Collapse?',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/zhu2025toedit/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%7A.%7A%68%65%6E%67@%75%63%6C%61.%65%64%75", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=9sDx70IAAAAJ", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/zilongzheng", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/zilongzheng0318", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/ZilongZheng", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
