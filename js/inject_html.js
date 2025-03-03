const experienceList = document.getElementById('experience__list');
const skillsListEl = document.getElementById('skills__list');
const projectsListEl = document.getElementById('projects__list');

const skillsList = [
  {
    id: 1,
    name: 'HTML',
    level: 'Advanced',
    bgColor: 'bg-orange-500/10',
    iconColor: 'text-orange-500',
    svg: `
      <path d="M4 5L10 3L16 5L22 3V19L16 21L10 19L4 21V5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M10 3V19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M16 5V21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    `,
  },
  {
    id: 2,
    name: 'CSS / SCSS',
    level: 'Advanced',
    bgColor: 'bg-blue-500/10',
    iconColor: 'text-blue-500',
    svg: `
      <path d="M4 3L20 3C21.1046 3 22 3.89543 22 5V19C22 20.1046 21.1046 21 20 21H4C2.89543 21 2 20.1046 2 19V5C2 3.89543 2.89543 2 4 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M8 12L12 16L16 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    `,
    textColor: 'text-white',
  },
  {
    id: 3,
    name: 'Tailwind CSS',
    level: 'Intermediate',
    bgColor: 'bg-cyan-500/10',
    iconColor: 'text-cyan-500',
    svg: `
      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    `,
  },
  {
    id: 4,
    name: 'Javascript',
    level: 'Intermediate',
    bgColor: 'bg-yellow-500/10',
    iconColor: 'text-yellow-500',
    svg: `
      <path fill="currentColor" d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
    `,
  },
  {
    id: 5,
    name: 'ReactJS',
    level: 'Intermediate',
    bgColor: 'bg-cyan-500/10',
    iconColor: 'text-cyan-500',
    svg: `
      <path fill="currentColor" d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278z"/>
    `,
  },
  {
    id: 6,
    name: 'VueJS',
    level: 'Intermediate',
    bgColor: 'bg-emerald-500/10',
    iconColor: 'text-emerald-500',
    svg: `
      <path fill="currentColor" d="M24 1.61h-9.94L12 5.16 9.94 1.61H0l12 20.78ZM12 14.08L5.16 2.23h4.43L12 6.41l2.41-4.18h4.43Z"/>
    `,
  },
  {
    id: 7,
    name: 'RESTful API',
    level: 'Intermediate',
    bgColor: 'bg-blue-500/10',
    iconColor: 'text-blue-500',
    svg: `
      <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
    `,
  },
  {
    id: 8,
    name: 'Spring Boot',
    level: 'Intermediate',
    bgColor: 'bg-green-500/10',
    iconColor: 'text-green-500',
    svg: `
      <path fill="currentColor" d="M21.8537 1.4158a10.4504 10.4504 0 0 1-1.284 2.2471A11.9666 11.9666 0 0 1 3.8004 20.5L3.7 20.4a11.9543 11.9543 0 0 1 6.0997-15.8248 11.9607 11.9607 0 0 1 9.8592.4652c.0125.0053.0266.0083.0391.0136c.2148.1034.4246.2152.6307.3355a.0585.0585 0 0 0 .0542.0054c.1195-.0663.2406-.1293.3616-.1923l.0681-.0348a.0317.0317 0 0 1 .0391.0027c.0139.0127.0266.0269.0391.0409c.2224.2576.4375.5207.6459.7917a.0293.0293 0 0 1 .0088.0334a12.0198 12.0198 0 0 1-.5917 15.5742a11.9606 11.9606 0 0 1-8.5167 3.6099a11.9557 11.9557 0 0 1-9.1664-4.2854a.0293.0293 0 0 1 .0027-.0414l.0642-.0386c.1153-.0689.2312-.1371.3465-.2053a.0611.0611 0 0 1 .0569-.0027a11.9543 11.9543 0 0 0 13.6819-1.7686a11.9547 11.9547 0 0 0 3.5467-8.5052a11.9604 11.9604 0 0 0-2.0825-6.7799c-.038-.0579-.0773-.1151-.1165-.172a.0667.0667 0 0 1-.0125-.0549c.0461-.1033.0935-.2059.1397-.3092c.0064-.0146.0142-.0286.0213-.0429l.0562-.1124c.0088-.0167.0209-.0314.0321-.0455Z"/>
    `,
  },
  {
    id: 9,
    name: 'SQL',
    level: 'Intermediate',
    bgColor: 'bg-indigo-500/10',
    iconColor: 'text-indigo-500',
    svg: `
      <path fill="currentColor" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2zM12 4c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2zM12 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2z"/>
      <path fill="currentColor" d="M17.87 8.6c-.002-.387-.071-.753-.189-1.095-.46-1.309-2.528-2.444-5.681-2.444-3.154 0-5.222 1.135-5.681 2.444-.118.342-.187.708-.189 1.095 0 0-.13 1.4-.13 2.4s.13 2.4.13 2.4c.002.387.071.753.189 1.095.46 1.309 2.528 2.444 5.681 2.444 3.154 0 5.222-1.135 5.681-2.444.118-.342.187-.708.189-1.095 0 0 .13-1.4.13-2.4s-.13-2.4-.13-2.4z"/>
    `,
  },
  {
    id: 10,
    name: 'Git/GitHub',
    level: 'Intermediate',
    bgColor: 'bg-gray-500/10',
    iconColor: 'text-gray-700',
    svg: `
      <path fill="currentColor" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z"/>
    `,
  },
];

const workExperienceList = [
  {
    id: 1,
    image: './assets/icons/fpt_logo.svg',
    alt: 'FPT Software',
    companyName: 'FPT Software Miền Trung',
    position: 'Junior Frontend Developer',
    timeStart: '01/2024',
    timeEnd: '03/2025',
    isCurrent: true,
    description: [
      {
        id: 1,
        content: 'Tham gia phát triển giao diện người dùng và các tính năng Frontend cho hệ thống.',
      },
      {
        id: 2,
        content:
          'Kết hợp sử dụng các thư viện và công cụ hỗ trợ nhằm tối ưu hiệu suất và trải nghiệm người dùng.',
      },
      {
        id: 3,
        content: 'Hỗ trợ xây dựng và duy trì tài liệu hệ thống, tài liệu kiểm thử.',
      },
    ],
    projects: [
      {
        id: 1,
        projectName: 'Trang web bán bảo hiểm',
      },
      {
        id: 2,
        projectName: 'Trang web xuất bản file PDF',
      },
    ],
    technologies: {
      'programming-skills': [
        { id: 1, name: 'JavaScript', textColor: 'text-blue-800', bg: 'bg-blue-100' },
        { id: 2, name: 'Vue.js', textColor: 'text-green-800', bg: 'bg-green-100' },
        { id: 3, name: 'ReactJS', textColor: 'text-cyan-800', bg: 'bg-cyan-100' },
        { id: 4, name: 'TypeScript', textColor: 'text-purple-800', bg: 'bg-purple-100' },
        { id: 5, name: 'Ant Design', textColor: 'text-sky-800', bg: 'bg-sky-100' },
      ],
      'dev-tools': [
        { id: 1, name: 'Git', textColor: 'text-orange-800', bg: 'bg-orange-100' },
        { id: 2, name: 'Figma', textColor: 'text-pink-800', bg: 'bg-pink-100' },
        { id: 3, name: 'Jira', textColor: 'text-indigo-800', bg: 'bg-indigo-100' },
      ],
      'api-knowledge': [
        { id: 1, name: 'RESTful API', textColor: 'text-teal-800', bg: 'bg-teal-100' },
        { id: 2, name: 'JWT', textColor: 'text-orange-800', bg: 'bg-orange-100' },
      ],
    },
    achievements: [
      {
        id: 1,
        content:
          'Trực tiếp tham gia tích hợp và kiểm thử API bên thứ ba, đảm bảo sự ổn định và hiệu quả cho hệ thống.',
      },
      {
        id: 2,
        content:
          'Viết tài liệu kiểm thử đơn vị, kiểm thử chức năng và thực hiện kiểm thử bằng Jest.',
      },
      {
        id: 3,
        content:
          'Nâng cao kỹ năng thiết kế giao diện với Figma và hỗ trợ dự án VueJS, kiểm thử với Vitest.',
      },
    ],
  },
  {
    id: 2,
    image: './assets/images/bap_logo.png',
    alt: 'BAP Software',
    companyName: 'BAP Software, HUE',
    position: 'Fresher Frontend Developer',
    timeStart: '03/2023',
    timeEnd: '07/2023',
    isCurrent: false,
    description: [
      {
        id: 1,
        content: 'Phát triển giao diện người dùng và xử lý dữ liệu với RESTful API.',
      },
      {
        id: 3,
        content:
          'Sử dụng ReactJS kết hợp với TypeScript, Redux và Redux Saga để phát triển ứng dụng.',
      },
      {
        id: 4,
        content:
          'Tích hợp và làm việc với các thư viện như Ant Design, Styled Components, i18n,...',
      },
      {
        id: 5,
        content: 'Quản lý mã nguồn và phối hợp làm việc nhóm hiệu quả với Git.',
      },
    ],
    projects: [
      {
        id: 1,
        projectName: 'ONLINE CLINIC - Nền tảng kết nối bệnh nhân và bác sĩ trực tuyến.',
      },
    ],
    technologies: {
      'programming-skills': [
        { id: 1, name: 'JavaScript', textColor: 'text-blue-800', bg: 'bg-blue-100' },
        { id: 3, name: 'ReactJS', textColor: 'text-cyan-800', bg: 'bg-cyan-100' },
        { id: 4, name: 'TypeScript', textColor: 'text-purple-800', bg: 'bg-purple-100' },
        { id: 4, name: 'Redux Toolkit', textColor: 'text-amber-800', bg: 'bg-amber-100' },
        { id: 4, name: 'i18n', textColor: 'text-cyan-800', bg: 'bg-cyan-100' },
        { id: 5, name: 'Ant Design', textColor: 'text-sky-800', bg: 'bg-sky-100' },
      ],
      'dev-tools': [
        { id: 1, name: 'Git', textColor: 'text-orange-800', bg: 'bg-orange-100' },
        { id: 2, name: 'Figma', textColor: 'text-pink-800', bg: 'bg-pink-100' },
        { id: 3, name: 'Jira', textColor: 'text-indigo-800', bg: 'bg-indigo-100' },
      ],
      'api-knowledge': [
        { id: 1, name: 'RESTful API', textColor: 'text-teal-800', bg: 'bg-teal-100' },
        { id: 2, name: 'JWT', textColor: 'text-orange-800', bg: 'bg-orange-100' },
      ],
    },
    achievements: [
      {
        id: 1,
        content: 'Chuyển đổi thiết kế từ Figma sang giao diện chuẩn pixel.',
      },
      {
        id: 2,
        content: 'Nâng cao khả năng làm việc nhóm hiệu quả.',
      },
    ],
  },
  {
    id: 3,
    image: './assets/images/platinum_logo.jpg',
    alt: 'Platinum Technology',
    companyName: 'Platinum Technology, HUE',
    position: 'Frontend Intern',
    timeStart: '07/2022',
    timeEnd: '09/2022',
    isCurrent: false,
    description: [
      {
        id: 1,
        content:
          'Học hỏi và áp dụng ReactJS, Hooks cùng các công cụ liên quan để phát triển website cơ bản.',
      },
      {
        id: 2,
        content:
          'Làm quen với quy trình phát triển phần mềm thực tế trong môi trường doanh nghiệp.',
      },
      {
        id: 3,
        content:
          'Rèn luyện kỹ năng đọc hiểu tài liệu và chuyển đổi yêu cầu thiết kế sang giao diện trực quan.',
      },
    ],
    projects: [
      {
        id: 1,
        projectName: 'Assignment FE - Website giới thiệu sản phẩm cơ bản.',
      },
    ],
    technologies: {
      'programming-skills': [
        { id: 1, name: 'JavaScript', textColor: 'text-blue-800', bg: 'bg-blue-100' },
        { id: 2, name: 'ReactJS', textColor: 'text-cyan-800', bg: 'bg-cyan-100' },
      ],
      'dev-tools': [
        { id: 1, name: 'Git', textColor: 'text-orange-800', bg: 'bg-orange-100' },
        { id: 2, name: 'Figma', textColor: 'text-pink-800', bg: 'bg-pink-100' },
      ],
      'api-knowledge': [
        { id: 1, name: 'RESTful API', textColor: 'text-teal-800', bg: 'bg-teal-100' },
      ],
    },
    achievements: [
      {
        id: 1,
        content:
          'Hoàn thành sản phẩm đầu tay với ReactJS, triển khai giao diện đơn giản nhưng chuẩn chỉnh.',
      },
      {
        id: 2,
        content: 'Cải thiện khả năng tự học và làm việc độc lập trong môi trường mới.',
      },
    ],
  },
];

const projectsList = [
  {
    id: 1,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQphO1iGa3a8wJpd43zAbREvXa8q4DmAIKww&s',
    name: 'Personal portfilo',
    description:
      'A picture in your mind or an idea of how someone or something is: I have an image in my mind of how I want the garden to be.',
  },
  {
    id: 2,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQphO1iGa3a8wJpd43zAbREvXa8q4DmAIKww&s',
    name: 'Media social',
    description:
      'A picture in your mind or an idea of how someone or something is: I have an image in my mind of how I want the garden to be.',
  },
  {
    id: 3,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQphO1iGa3a8wJpd43zAbREvXa8q4DmAIKww&s',
    name: 'Clone Film Web',
    description:
      'A picture in your mind or an idea of how someone or something is: I have an image in my mind of how I want the garden to be.',
  },
  {
    id: 4,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQphO1iGa3a8wJpd43zAbREvXa8q4DmAIKww&s',
    name: 'Clone UI shopee',
    description:
      'A picture in your mind or an idea of how someone or something is: I have an image in my mind of how I want the garden to be.',
  },
];

const renderSkills = () => {
  skillsList.forEach((skill) => {
    skillsListEl.innerHTML += `
     <li key=${skill.id}
      class="group relative overflow-hidden rounded-xl bg-[var(--background-blue-light)]  p-4 text-center transition-all hover:bg-white/10 hover:shadow-xl">
      <div class="flex items-center gap-4">
        <div class="flex h-12 w-12 items-center justify-center rounded-lg ${skill.bgColor}">
          <svg
            class="h-6 w-6 ${skill.iconColor}"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            ${skill.svg}
          </svg>
        </div>
        <div>
          <h3 class="text-sm sm:text-lg font-semibold text-black">${skill.name}</h3>
          <p class="text-sm text-gray-400">${skill.level}</p>
        </div>
      </div>
    </li>`;
  });
};

const renderExperiences = () => {
  const workExperienceHTML = workExperienceList
    .map(
      (experienceItem) =>
        `
            <li
                class="experience__item group relative rounded-2xl bg-white p-6 shadow-lg transition-all hover:shadow-xl">
                <!-- Header with logo and company name -->
                <div class="flex items-center justify-between border-b pb-4">
                  <div class="flex items-center gap-4">
                    <div class="w-[120px] overflow-hidden">
                      <img
                        src="${experienceItem.image}"
                        alt="${experienceItem.alt}"
                        class="h-[32px] sm:h-[40px] object-contain" />
                    </div>
                    <div>
                      <h3 class="text-md sm:text-xl font-bold text-gray-900">${
                        experienceItem.companyName
                      }</h3>
                      <p class="text-sm sm:text-lg font-semibold text-orange-600">${
                        experienceItem.position
                      }</p>
                    </div>
                  </div>
                  <div class="text-right">
                    <p class="text-[12px] sm:text-sm font-medium text-gray-600">${
                      experienceItem.timeStart
                    } - ${experienceItem.timeEnd}</p>
                    <span class="inline-flex items-center rounded-full ${
                      experienceItem.isCurrent ? 'bg-green-100' : 'bg-blue-100'
                    } px-3 py-1 text-xs font-medium ${
          experienceItem.isCurrent ? 'text-green-800' : 'text-blue-800'
        }">
                        ${experienceItem.isCurrent ? 'Hiện tại' : 'Trước đây'}
                    </span>
                  </div>
                </div>

                <!-- Content -->
                <div class="mt-4 space-y-4">
                  <!-- Description -->
                  <div class="rounded-lg bg-gray-50 p-4">
                    <h4 class="mb-2 font-bold text-gray-900">Description:</h4>
                    <ul class="space-y-2 text-sm text-gray-600">
                    ${experienceItem?.description
                      ?.map(
                        (descItem) => `
                          <li key=${descItem.id} class='flex items-start'>
                            <svg
                              class='mr-2 mt-1 h-4 w-4 text-gray-400'
                              fill='none' 
                              viewBox='0 0 24 24'
                              stroke='currentColor'>
                              <path
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                stroke-width='2'
                                d='M9 5l7 7-7 7'
                              />
                            </svg>
                            ${descItem.content}
                          </li>`
                      )
                      .join('')}
                    
                    <li class="flex items-start">
                        <svg
                        class="mr-2 mt-1 h-4 w-4 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                            <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5l7 7-7 7" />
                        </svg>
                    <div>
                        <span>Dự án đã tham gia: </span>
                        ${experienceItem?.projects
                          ?.map(
                            (project, index) =>
                              `<span
                            key=${project.id}
                            class='font-medium text-orange-600'>
                            ${project.projectName}${
                                index + 1 === experienceItem.projects.length ? '.' : ','
                              }
                          </span>`
                          )
                          .join('')}
                    </div>
                      </li>
                    </ul>
                  </div>

                  <!-- Technologies -->
                  <div class="rounded-lg bg-gray-50 p-4">
                    <h4 class="mb-2 font-bold text-gray-900">Technologies:</h4>
                    <div class="space-y-3">
                      <div class="flex items-start">
                        <span class="mr-2 text-sm font-medium text-gray-500"
                          >Programming skills:</span
                        >
                        <div class="flex flex-wrap gap-2">
                        ${experienceItem?.technologies['programming-skills']
                          ?.map(
                            (skillItem, index) =>
                              `
                            <span key=${skillItem.id}
                                class="rounded-full ${
                                  skillItem.textColor
                                } px-3 py-1 text-xs font-medium ${skillItem.bg}"
                                >${skillItem.name}</span >${
                                index + 1 ===
                                experienceItem?.technologies['programming-skills'].length
                                  ? '.'
                                  : ','
                              }`
                          )
                          .join('')}
                        </div>
                      </div>

                      <div class="flex items-start gap-2">
                        <span class="mr-2 text-sm font-medium text-gray-500"
                          >Development tools:</span
                        >
                        ${experienceItem?.technologies['dev-tools']
                          ?.map(
                            (devToolItem, index) =>
                              `
                            <span key=${devToolItem.id}
                                class="rounded-full ${
                                  devToolItem.textColor
                                } px-3 py-1 text-xs font-medium ${devToolItem.bg}"
                                >${devToolItem.name}</span>${
                                index + 1 === experienceItem?.technologies['dev-tools'].length
                                  ? '.'
                                  : ','
                              }`
                          )
                          .join('')}
                      </div>

                      <div class="flex items-start">
                        <span class="mr-2 text-sm font-medium text-gray-500">API knowledge:</span>
                        <div class="flex flex-wrap gap-2">
                         ${experienceItem?.technologies['api-knowledge']
                           ?.map(
                             (item, index) =>
                               `
                                <span key=${item.id}
                                    class="rounded-full ${
                                      item.textColor
                                    } px-3 py-1 text-xs font-medium ${item.bg}"
                                    >${item.name}</span
                                  >${
                                    index + 1 ===
                                    experienceItem?.technologies['api-knowledge'].length
                                      ? '.'
                                      : ','
                                  }`
                           )
                           .join('')}
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Achievements -->
                  <div class="rounded-lg bg-gray-50 p-4">
                    <h4 class="mb-2 font-bold text-gray-900">Achievements:</h4>
                    <ul class="space-y-2 text-sm text-gray-600">
                    ${experienceItem?.achievements
                      ?.map(
                        (achivementItem) =>
                          `
                            <li key=${achivementItem.id} class="flex items-center">
                                <svg
                                class="mr-2 h-5 w-5 text-green-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M5 13l4 4L19 7" />
                                </svg>
                                ${achivementItem.content}
                            </li>
                        `
                      )
                      .join('')}
                    </ul>
                  </div>
                </div>

                <!-- Expand/Collapse Button -->
                <button class="show-item absolute right-1/2 top-[70px] rounded-full bg-white p-2 text-[#1e3a8a] hover:bg-[#fad400]/5 border border-[#fad400]/20 hover:border-[#fad400]/40 shadow-sm transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </li>`
    )
    .join('');
  experienceList.innerHTML = workExperienceHTML;
};

const renderProjects = () => {
  projectsList.forEach((project) => {
    projectsListEl.innerHTML += `
     <li key=${project.id}
        class="group bg-white shadow-sm border border-gray-100 hover:shadow-lg hover:border-[var(--primary-color)]/10 hover:cursor-pointer transition-all duration-300 md:hover:scale-90">
        <div class="relative overflow-hidden">
          <img
            src="${project.image}"
            alt="project image"
            class="w-full h-[280px] md:h-[430px] object-cover" />
          <!-- Overlay on hover -->
          <div
            class="absolute inset-0 bg-gradient-to-t from-[var(--primary-color)]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <div class="absolute w-full bottom-4 left-0 z-10 p-6">
            <h3 class="text-[12px] font-bold font-poppins uppercase text-white">
              ${project.name}
            </h3>
            <p class="text-white">
              ${project.description}
            </p>
          </div>
        </div>
      </li>`;
  });
};

// Show all content in block
const addShowItemEvent = () => {
  document.querySelectorAll('.show-item').forEach((button) => {
    button.addEventListener('click', (event) => {
      event.stopPropagation(); // Ngăn chặn sự kiện lan ra ngoài
      const item = event.currentTarget.closest('.experience__item');
      item.classList.toggle('show-all-item');
    });
  });
};

document.addEventListener('DOMContentLoaded', () => {
  renderSkills();
  renderExperiences();
  renderProjects();
  addShowItemEvent();
});
