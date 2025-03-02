const experienceList = document.getElementById('experience__list');

const experienceDataList = [
  {
    id: 1,
    image: './assets/icons/fpt_logo.svg',
    alt: 'FPT Software',
    companyName: 'FPT Software',
    position: 'Frontend Developer',
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
    position: 'Frontend Developer',
    timeStart: '03/2023',
    timeEnd: '07/2023',
    isCurrent: false,
    description: [
      {
        id: 1,
        content: 'Phát triển giao diện người dùng và xử lý dữ liệu với RESTful APIs.',
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

const renderExperiences = () => {
  const experienceHTML = experienceDataList
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
                        class="h-[40px] object-contain" />
                    </div>
                    <div>
                      <h3 class="text-xl font-bold text-gray-900">${experienceItem.companyName}</h3>
                      <p class="text-lg font-semibold text-orange-600">${
                        experienceItem.position
                      }</p>
                    </div>
                  </div>
                  <div class="text-right">
                    <p class="text-sm font-medium text-gray-600">${experienceItem.timeStart} - ${
          experienceItem.timeEnd
        }</p>
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
                <button
                    class="show-item absolute right-1/2 top-[70px] rounded-full bg-gray-100 p-2 text-gray-500 hover:bg-gray-200 hover:text-gray-700">
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
  experienceList.innerHTML = experienceHTML;
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
  renderExperiences();
  addShowItemEvent();
});
