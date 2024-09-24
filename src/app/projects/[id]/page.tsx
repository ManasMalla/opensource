export default function Page({ params }: { params: { id: string } }) {
  const data = [
    {
      name: "CommunityX",
      description:
        "A simple, easy-to-use community management platform to build rich conversations, enabling them with all the tools and features to build rich communities, set out to create engaging experiences, and solve the problems of the people around them.",
      tags: ["Multiplatform", "Kotlin", "Swift", "Typescript"],
      image:
        "https://www.sketchappsources.com/resources/source-image/microsoft-teams-illustration.png",
      color: "rgb(245,245,245)",
      github: "https://github.com/ManasMalla/CommunityX",
    },
    {
      name: "IndieLingo",
      description:
        "A Duolingo-style language learning application built for over 35+ Indic languages through bite-sized lessons and activities.",
      tags: ["Flutter", "Dart", "Native", "Machine Learning"],
      image:
        "https://blog.duolingo.com/content/images/2024/06/cover_Learning-with-Duolingo-Real-learners-share-their-progress.png",
      color: "rgb(43,112,201)",
      github: "https://github.com/ManasMalla/IndieLingo",
      foregroundColor: "rgb(255, 255, 255)",
    },
    // {
    //   name: "Advaita",
    //   description:
    //     "An AI-based platform for students to analyse their psychological patterns and habits, suggesting a tech stack apt for them.",
    //   tags: ["Flutter", "Dart"],
    //   image:
    //     "https://techcommunity.microsoft.com/t5/image/serverpage/image-id/182266i88209A8AF3421C4C/image-size/original?v=v2&px=-1",
    // },
    {
      name: "Advaita",
      description:
        "An AI-based platform for students to analyse their psychological patterns and habits, suggesting a tech stack apt for them.",
      tags: ["Flutter", "Dart", "Native", "Generative AI"],
      image: "https://cdn.mos.cms.futurecdn.net/9MZGCpvyGjuLKzAeyMd6hh.jpg",
      color: "rgb(248,219,189)",
      github: "https://github.com/ManasMalla/advaita",
    },
    {
      name: "LearnX",
      description:
        "A learning platform to aid in mastering a tech stack with industry level experience based on codelabs, testimonials, and leetcode-style exercises.",
      tags: ["Multiplatform", "Kotin", "Swift", "Typescript"],
      image:
        "https://duet-cdn.vox-cdn.com/thumbor/0x0:2640x1760/2400x1600/filters:focal(1320x880:1321x881):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/19344713/microsoftteams.jpg",
      color: "rgb(255,255,255)",
      github: "https://github.com/ManasMalla/LearnX",
    },
    // {
    //   name: "Mera Diary Dost",
    //   description:
    //     "A learning platform to aid in mastering a tech stack with industry level experience based on codelabs, testimonials, and leetcode-style exercises.",
    //   tags: ["Multiplatform", "Kotin", "Swift", "Typescript"],
    //   image:
    //     "https://as1.ftcdn.net/v2/jpg/05/31/28/72/1000_F_531287298_XVzQIHGhAnngapSvtRJa8nzHkWSPk3iu.jpg",
    // },
    {
      name: "Mera Diary Dost",
      description:
        "An intuitive simple diary application to write your personal diary using English typography in your own language.",
      tags: ["Flutter", "Dart", "Machine Learning"],
      image:
        "https://fostips.com/wp-content/uploads/2022/08/ms-teams-feature.jpg",
      color: "rgb(250,250,250)",
      github: "https://github.com/ManasMalla/mera-diary-dost",
    },
  ];
  const project = data.find(
    (project) => project.name.toLowerCase().replaceAll(" ", "-") == params.id
  );
  return (
    <div className="p-5 pt-0 px-0">
      <div className="p-5 shadow-md fixed top-0 bg-white w-full z-10 flex items-center justify-between text-neutral-500 font-medium">
        <a href="/" className="text-neutral-600">
          Manas Malla
        </a>
        <nav className="flex gap-4 md:gap-8 text-sm md:text-base">
          <a href="/" className="hidden md:flex">
            Home
          </a>
          <a href="https://manasmalla.dev">My Portfolio</a>
          <a
            href="mailto:me@manasmalla.dev"
            className="text-blue-600 font-medium"
          >
            Suggest an idea?
          </a>
        </nav>
      </div>
      <div
        className="flex flex-col md:flex-row w-full justify-between md:items-center text-center pt-24 mb-6 relative overflow-clip"
        style={{
          background: project?.color,
        }}
      >
        <div className="px-8 text-start">
          <img
            src="https://opensource.google/static/images/projects/os-shapes-blue.svg"
            className={`my-6 md:mb-8 max-w-40 md:max-w-[unset] md:h-10 opacity-80 mix-blend-luminosity ${
              project?.name == "IndieLingo" ? "brightness-125" : ""
            }`}
          />
          <h1
            className="text-5xl md:text-6xl mb-6"
            style={{
              color: project?.foregroundColor,
            }}
          >
            {project?.name}
          </h1>
        </div>
        <img src={project?.image} className="mt-12 md:mt-0 md:h-96" />
      </div>
      <div className="px-5 md:px-8 py-4 flex flex-col md:flex-row gap-8 justify-between">
        <div className="leading-8 max-w-[72ch]">
          {/* <p className="font-medium text-lg my-6">
            An operating system for a wide range of devices
          </p> */}
          <p className="font-medium text-lg my-6">Project Description</p>
          <p>{project?.description}</p>
          <p className="font-medium text-lg my-6">Software Requirements</p>
          <p>Coming Soon</p>
          <p className="font-medium text-lg my-6">Workflow</p>
          <p>Coming Soon</p>
          {/* <p className="font-medium text-lg my-6">How Google uses Android</p>
          <p>
            Android powers the Google Pixel and is used by many Googlers to
            quickly bootstrap mobile and hardware projects.
          </p> */}
        </div>
        <div className="grow md:max-w-80 p-5 py-8 bg-neutral-200/45 rounded-lg flex flex-col gap-6">
          <div>
            <p className="text-lg">Repo</p>
            <div className="w-4/5 h-[1px] bg-neutral-400 my-[1px]" />
            <a
              href={project?.github}
              className="text-blue-600 font-medium p-3 text-sm"
            >
              GitHub
            </a>
          </div>
          <div>
            <p className="text-lg">License</p>
            <div className="w-4/5 h-[1px] bg-neutral-400 my-[1px]" />
            <p className="p-1 pb-3 text-sm">See repo</p>
          </div>
          <div>
            <p className="text-lg">Categories</p>
            <div className="w-4/5 h-[1px] bg-neutral-400 my-[1px]" />
            <p className="text-blue-600 font-medium p-3 text-sm">
              {project?.tags[0]}
            </p>
          </div>
          <div>
            <p className="text-lg">Languages</p>
            <div className="w-4/5 h-[1px] bg-neutral-400 my-[1px]" />
            {project?.tags.slice(1).map((tag) => (
              <p className="text-blue-600 font-medium p-3 text-sm">{tag}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-8 mb-8">
        <p className="text-center text-3xl mt-20 mb-10">Related Projects</p>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 md:gap-8">
          {data
            .filter(
              (p0) =>
                p0.tags[0] === project?.tags[0] && p0.name !== project?.name
            )
            .map((project) => {
              return (
                <a
                  key={project.name}
                  href={
                    "/projects/" +
                    project.name.toLowerCase().replaceAll(" ", "-")
                  }
                >
                  <div className="border rounded-lg overflow-hidden">
                    {/* <img
                src="https://support.content.office.net/en-us/media/02cd7402-1116-40fe-98d9-65bb8a48544c.png"
                className="w-full aspect-[1.8] object-cover"
              /> */}
                    <img
                      src={project.image}
                      className="w-full aspect-[1.8] object-cover"
                    />
                    <div className="p-5">
                      <p className="text-xl">{project.name}</p>
                      <p className="text-sm mt-4 mb-2 line-clamp-4">
                        {project.description}
                      </p>
                      <div>
                        {project.tags.map((tag) => {
                          return (
                            <p className="inline-flex py-[6px] px-[8px] rounded-md mx-[3px] my-[3px] border text-sm border-neutral-500 text-neutral-600">
                              {tag}
                            </p>
                          );
                        })}
                      </div>
                      <button className="border py-2 px-6 text-sm mt-8 text-blue-500 rounded-md font-medium">
                        View Project
                      </button>
                    </div>
                  </div>
                </a>
              );
            })}
        </div>
      </div>
    </div>
  );
}
