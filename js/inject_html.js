const experienceList = document.getElementById('experience__list');

const experienceDataList = [
  {
    id: 1,
    image: './assets/icons/fpt_logo.svg',
    alt: 'FPT Software',
    companyName: 'FPT Software',
    position: 'Frontend Developer',
    timeStart: '01/2024',
    timeEnd: '3/2025',
    isCurrent: true,
    description: [
      {
        id: 1,
        content: 'Xây dựng giao diện người dùng. ',
      },
      {
        id: 2,
        content: ' Phát triển các tính năng Front-end',
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
        {
          id: 1,
          name: 'JavaScript',
          textColor: 'text-blue-800',
          bg: 'bg-blue-100',
        },
        {
          id: 2,
          name: 'Vue.js',
          textColor: 'bg-green-100',
          bg: 'bg-green-100',
        },
        {
          id: 3,
          name: 'ReactJS',
          textColor: 'bg-cyan-100',
          bg: 'bg-cyan-100',
        },
        {
          id: 4,
          name: 'TypeScript',
          textColor: 'bg-purple-100',
          bg: 'bg-purple-100',
        },
        {
          id: 5,
          name: 'Ant Design',
          textColor: 'bg-sky-100',
          bg: 'bg-sky-100',
        },
      ],

      'dev-tools': [
        {
          id: 1,
          name: 'Git',
          textColor: 'text-orange-800',
          bg: 'bg-orange-100',
        },
        {
          id: 2,
          name: 'Figma',
          textColor: 'bg-pink-100',
          bg: 'bg-pink-100',
        },
        {
          id: 3,
          name: 'Jira',
          textColor: 'bg-indigo-100',
          bg: 'bg-indigo-100',
        },
      ],
      'api-knowledge': [
        {
          id: 1,
          name: 'Git',
          textColor: 'text-teal-800',
          bg: 'bg-teal-100',
        },
        {
          id: 2,
          name: 'Figma',
          textColor: 'bg-pink-100',
          bg: 'bg-pink-100',
        },
        {
          id: 3,
          name: 'Jira',
          textColor: 'bg-indigo-100',
          bg: 'bg-indigo-100',
        },
      ],
    },

    achievements: [
      {
        id: 1,
        content: 'Cải thiện hiệu suất, tối ưu code',
      },
      {
        id: 1,
        content: 'Hỗ trợ team, mentoring junior',
      },
    ],
  },

  {
    id: 2,
    image: './assets/icons/fpt_logo.svg',
    alt: 'FPT Software',
    companyName: 'FPT Software',
    position: 'Frontend Developer',
    timeStart: '01/2024',
    timeEnd: '3/2025',
    isCurrent: true,
    technologies: {},
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
                    <span class="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-medium ${
                      experienceItem.isCurrent ? 'text-green-800' : 'text-blue-800'
                    }">
                        ${experienceItem.isCurrent ? 'Current' : 'Past'}
                    </span>
                  </div>
                </div>

                <!-- Content -->
                <div class="mt-4 space-y-4">
                  <!-- Description -->
                  <div class="rounded-lg bg-gray-50 p-4">
                    <h4 class="mb-2 font-bold text-gray-900">Description:</h4>
                    <ul class="space-y-2 text-sm text-gray-600">
                    ${experienceItem?.description?.map((descItem) => {
                      return `<li key=${descItem.id} class='flex items-start'>
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
                      </li>`;
                    })}
                    
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
                        ${experienceItem?.projects?.map((project, index) => {
                          return `<span
                            key=${project.id}
                            class='font-medium text-orange-600 hover:text-orange-700 hover:cursor-pointer'>
                            ${project.projectName}
                            ${index + 1 < experienceItem.projects.length ? ',' : '.'}
                          </span>`;
                        })}
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
                        ${experienceItem?.technologies['programming-skills']?.map((skillItem) => {
                          return `
                                <span key=${skillItem.id}
                                    class="rounded-full ${skillItem.textColor} px-3 py-1 text-xs font-medium ${skillItem.bg}"
                                    >${skillItem.name}</span
                                  >`;
                        })}
                        </div>
                      </div>

                      <div class="flex items-start">
                        <span class="mr-2 text-sm font-medium text-gray-500"
                          >Development tools:</span
                        >
                        ${experienceItem?.technologies['dev-tools']?.map((devToolItem) => {
                          return `
                                <span key=${devToolItem.id}
                                    class="rounded-full ${devToolItem.textColor} px-3 py-1 text-xs font-medium ${devToolItem.bg}"
                                    >${devToolItem.name}</span
                                  >`;
                        })}
                      </div>

                      <div class="flex items-start">
                        <span class="mr-2 text-sm font-medium text-gray-500">API knowledge:</span>
                        <div class="flex flex-wrap gap-2">
                         ${experienceItem?.technologies['api-knowledge']?.map((item) => {
                           return `
                                <span key=${item.id}
                                    class="rounded-full ${item.textColor} px-3 py-1 text-xs font-medium ${item.bg}"
                                    >${item.name}</span
                                  >`;
                         })}
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Achievements -->
                  <div class="rounded-lg bg-gray-50 p-4">
                    <h4 class="mb-2 font-bold text-gray-900">Achievements:</h4>
                    <ul class="space-y-2 text-sm text-gray-600">
                    ${experienceItem?.achievements?.map((achivementItem) => {
                      return `
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
                        `;
                    })}
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
