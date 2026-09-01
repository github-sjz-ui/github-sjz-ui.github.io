/* ============================================================
   SITE CONTENT
   以后修改个人主页内容，只需要改这个文件。
   不需要修改 index.html。
   ============================================================ */

window.SITE_CONTENT = {
  profile: {
    name: 'Jizhong Shen',
    nameZh: '沈纪中',
    githubUser: 'github-sjz-ui',
    githubUrl: 'https://github.com/github-sjz-ui',
    researchGateUrl: 'https://www.researchgate.net/profile/Jizhong-Shen',
    schoolUrl: 'https://www.researchgate.net/institution/Hangzhou-Normal-University',
    semanticScholarAuthorId: '',
    typedWords: {
      zh: ['BESIII 粲物理研究', 'D 介子与粲偶素', '蒙特卡洛模拟', '机器学习分析方法'],
      en: ['BESIII Charm Physics', 'D Mesons & Charmonia', 'Monte Carlo Simulation', 'Machine Learning Methods']
    },
    about: {
      zh: [
        '我是 <b>Jizhong Shen</b>（沈纪中），2024 年至今就读于杭州师范大学物理系，目前在 <b>BESIII（北京谱仪 III）</b>实验上从事<b>粲物理</b>研究，关注 D 介子与粲偶素等粲强子的产生与衰变。',
        '我擅长 <b>蒙特卡洛模拟</b> 与机器学习方法，并在 GitHub（<b>github-sjz-ui</b>）上维护科研工具，让分析流程可复现、可共享。'
      ],
      en: [
        "I'm <b>Jizhong Shen</b>, a B.S. student in the Department of Physics at Hangzhou Normal University since 2024, working on <b>charm physics at BESIII</b> (Beijing Spectrometer III), studying the production and decays of D mesons and charmonia.",
        'I also work with <b>Monte Carlo simulation</b> and machine learning methods, and maintain research tools on GitHub (<b>github-sjz-ui</b>) for reproducible analysis workflows.'
      ]
    },
    tags: [
      'BESIII',
      'Charm Physics',
      'Monte Carlo Simulation',
      'High Energy Physics',
      'Machine Learning',
      'Open Source'
    ]
  },

  stats: {
    papers: 9,
    reads: 64,
    citations: 0
  },

  /* 新增论文：复制一条对象，改 title / venue / year / url。 */
  publications: [
    {
      title: 'Torsional standing waves in a twisted elastic cord: experiment and reduced-order modelling',
      venue: 'Preprint',
      year: 2026,
      url: 'https://www.researchgate.net/publication/413675055_Torsional_standing_waves_in_a_twisted_elastic_cord_experiment_and_reduced-order_modelling'
    },
    {
      title: 'dataset_description.pdf',
      venue: 'Data',
      year: 2026,
      url: 'https://www.researchgate.net/publication/413675077_dataset_descriptionpdf'
    },
    {
      title: 'Boundary-element treatment of electrostatic shielding by an open hemispherical conductor: edge singularity, convergence, and teaching implications',
      venue: 'Preprint',
      year: 2026,
      url: 'https://www.researchgate.net/publication/412837443_Boundary-element_treatment_of_electrostatic_shielding_by_an_open_hemispherical_conductor_edge_singularity_convergence_and_teaching_implications'
    },
    {
      title: 'QuanLLM-v1.0-qm and QuanLLM CLI v0.4.0: A Domain-Adapted Language Model System for Quantum-Mechanics Learning and Problem Solving',
      venue: 'Preprint',
      year: 2026,
      url: 'https://www.researchgate.net/publication/412833936_QuanLLM-v10-qm_and_QuanLLM_CLI_v040_A_Domain-Adapted_Language_Model_System_for_Quantum-Mechanics_Learning_and_Problem_Solving'
    },
    {
      title: 'Kinematics and diversified modeling of an inclined-plane flipping body: a modeling study of the 2026 IYPT "Flipo Flip" problem',
      venue: 'Preprint',
      year: 2026,
      url: 'https://www.researchgate.net/publication/412318211_Kinematics_and_diversified_modeling_of_an_inclined-plane_flipping_body_a_modeling_study_of_the_2026_IYPT_Flipo_Flip_problem'
    },
    {
      title: '折反之间，快慢有律——光屏上两光斑移动速度关联探究',
      venue: 'Preprint',
      year: 2026,
      url: 'https://www.researchgate.net/publication/412298360_zhefanzhijiankuaimanyoulu--guangpingshangliangguangbanyidongsuduguanliantanjiu'
    },
    {
      title: 'Pinhole Sunglasses for IYPT 2027: Aperture Shape, Lattice Arrangement, Ghost Suppression, and Neural-Network-Accelerated Inverse Design',
      venue: 'Article',
      year: 2026,
      url: 'https://www.researchgate.net/publication/412121070_Pinhole_Sunglasses_for_IYPT_2027_Aperture_Shape_Lattice_Arrangement_Ghost_Suppression_and_Neural-Network-Accelerated_Inverse_Design'
    },
    {
      title: 'The Vibrational Dispersion Relations of M (M ≤ 3)-Dimensional N (N ≤ 4)-Atom Lattices: Complete Analytical Solutions and Numerical Verification for 36 Parameter Combinations',
      venue: 'Preprint',
      year: 2026,
      url: 'https://www.researchgate.net/publication/410938152_The_Vibrational_Dispersion_Relations_of_M_M_3-Dimensional_N_N_4-Atom_Lattices_Complete_Analytical_Solutions_and_Numerical_Verification_for_36_Parameter_Combinations'
    },
    {
      title: 'Fractional Physics Informed Neural Networks for Surrogate Modeling of Non-Markovian Discrete-Time Quantum Walks',
      venue: 'Entropy',
      year: 2026,
      url: 'https://www.researchgate.net/publication/410941636_Fractional_Physics_Informed_Neural_Networks_for_Surrogate_Modeling_of_Non-Markovian_Discrete-Time_Quantum_Walks'
    }
  ],

  research: [
    {
      icon: 'fa-solid fa-atom',
      zh: { title: 'BESIII 粲物理', desc: '在北京谱仪 III（BESIII）上开展粲物理研究：D 介子、粲偶素等粲强子的产生与衰变分析。' },
      en: { title: 'Charm Physics at BESIII', desc: 'Charm physics at BESIII (Beijing Spectrometer III): production and decay analyses of D mesons, charmonia and other charmed hadrons.' }
    },
    {
      icon: 'fa-solid fa-diagram-project',
      zh: { title: '蒙特卡洛模拟', desc: '面向粒子物理实验的蒙特卡洛模拟与统计验证，服务 BESIII 事例产生与分析流程。' },
      en: { title: 'Monte Carlo Simulation', desc: 'Monte Carlo simulation and statistical validation for particle physics experiments, supporting BESIII event generation and analysis.' }
    },
    {
      icon: 'fa-solid fa-chart-line',
      zh: { title: '物理与机器学习', desc: '发展物理信息神经网络、代理模型和数据驱动方法，加速复杂物理系统分析。' },
      en: { title: 'Physics & Machine Learning', desc: 'Physics-informed neural networks, surrogate models and data-driven methods for complex physical systems.' }
    },
    {
      icon: 'fa-solid fa-shield-halved',
      zh: { title: '科学工具与教育', desc: '围绕物理学习、IYPT 准备与文档自动化构建开源工具，让研究流程更可复现。' },
      en: { title: 'Scientific Tools & Education', desc: 'Open-source utilities for physics learning, IYPT preparation and reproducible research workflows.' }
    }
  ],

  skills: [
    { name: { zh: 'Python / 科学计算', en: 'Python / Scientific Computing' }, level: 90 },
    { name: { zh: 'Monte Carlo / Computational Physics', en: 'Monte Carlo / Computational Physics' }, level: 86 },
    { name: { zh: 'MATLAB / COMSOL Modeling', en: 'MATLAB / COMSOL Modeling' }, level: 82 },
    { name: { zh: 'PyTorch / Machine Learning', en: 'PyTorch / Machine Learning' }, level: 78 },
    { name: { zh: 'C / C++ / Data Structures', en: 'C / C++ / Data Structures' }, level: 80 },
    { name: { zh: 'Scientific Writing / Documentation', en: 'Scientific Writing / Documentation' }, level: 88 }
  ],

  timeline: [
    {
      when: { zh: '2024 - 至今', en: '2024 - Present' },
      title: { zh: '杭州师范大学 · 物理系', en: 'Hangzhou Normal University · Physics' },
      desc: { zh: '攻读物理学学士，参与 IYPT、计算物理与科学建模研究。', en: 'B.S. student working on IYPT, computational physics and scientific modeling.' }
    }
  ],

  contact: [
    {
      icon: 'fa-solid fa-flask',
      color: '#0aa37c',
      title: { zh: '学术主页 · ResearchGate', en: 'Academic · ResearchGate' },
      value: 'Jizhong-Shen',
      url: 'https://www.researchgate.net/profile/Jizhong-Shen'
    },
    {
      icon: 'fa-brands fa-github',
      color: '',
      title: { zh: '开源 · GitHub', en: 'Open Source · GitHub' },
      value: 'github-sjz-ui',
      url: 'https://github.com/github-sjz-ui'
    },
    {
      icon: 'fa-solid fa-university',
      color: 'var(--pink)',
      title: { zh: '学校 · Hangzhou Normal University', en: 'University · Hangzhou Normal University' },
      value: 'Department of Physics',
      url: 'https://www.researchgate.net/institution/Hangzhou-Normal-University'
    }
  ]
};
