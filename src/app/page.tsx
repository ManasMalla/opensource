export default function Page() {
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
          <a className="text-blue-600 font-medium">Suggest an idea?</a>
        </nav>
      </div>
      <div className="text-center pt-36 py-24 mb-6 bg-blue-50 relative overflow-clip">
        <h1 className="text-6xl mb-6">
          Welcome to
          <br />
          Open Source
        </h1>
        <a
          href="/#projects"
          className="bg-blue-600 py-2 px-6 pr-4 text-white rounded-full inline-flex gap-2"
        >
          Explore{" "}
          <span className="material-symbols-rounded">arrow_forward</span>
        </a>
        <img
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiDa_aWprUuwxdb9QLGHWUyUy_kkJfNhH4uj-04R3BCpOBk4TcmDCRQLYyWFXu3VqVV9m41R63WlpeGTPzuu1rI6D6LmdTcSLY5mgpwXud-8S2G9b8_CFJvBCux3YZ0QJa7MwCZXIEyb1naPhbN8Mpx2xwMyKZuBK9pQYCizBO_Xf6FzYekhd34EvjWsjk/s1600/OS-New-Library-for-Network-Optimization-social%20%281%29%20%281%29.png"
          className="mix-blend-luminosity opacity-10 absolute w-1/3 -bottom-12"
        />
        <img
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiDa_aWprUuwxdb9QLGHWUyUy_kkJfNhH4uj-04R3BCpOBk4TcmDCRQLYyWFXu3VqVV9m41R63WlpeGTPzuu1rI6D6LmdTcSLY5mgpwXud-8S2G9b8_CFJvBCux3YZ0QJa7MwCZXIEyb1naPhbN8Mpx2xwMyKZuBK9pQYCizBO_Xf6FzYekhd34EvjWsjk/s1600/OS-New-Library-for-Network-Optimization-social%20%281%29%20%281%29.png"
          className="mix-blend-luminosity opacity-10 absolute w-1/3 -top-12 right-0"
        />
      </div>
      <section id="projects" className="px-5 md:px-8">
        <div className="flex flex-col-reverse md:flex-row my-5 items-start justify-between">
          <div>
            <h3 className="text-xl mb-4 font-medium">Projects</h3>
            <p className="text-sm max-w-[42ch] md:max-w-[50%]">
              I believe open source solves real-world problems for everyone
              through innovation, collaboration, and sustainability. I encourage
              you to browse through my featured projects to find work to use,
              share, and build on!
            </p>
          </div>
          <img
            src="https://opensource.google/static/images/projects/os-shapes-blue.svg"
            className="my-6 md:mt-4 md:mb-0 max-w-40 md:max-w-[unset]"
          />
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 md:gap-8">
          {[
            {
              name: "CommunityX",
              description:
                "A simple, easy-to-use community management platform to build rich conversations, enabling them with all the tools and features to build rich communities, set out to create engaging experiences, and solve the problems of the people around them.",
              tags: ["Multiplatform", "Kotlin", "Swift", "Typescript"],
              image:
                "https://www.sketchappsources.com/resources/source-image/microsoft-teams-illustration.png",
            },
            {
              name: "IndieLingo",
              description:
                "A Duolingo-style language learning application built for over 35+ Indic languages through bite-sized lessons and activities.",
              tags: ["Flutter", "Dart", "Native", "Machine Learning"],
              image:
                "https://blog.duolingo.com/content/images/2024/06/cover_Learning-with-Duolingo-Real-learners-share-their-progress.png",
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
              image:
                "https://cdn.mos.cms.futurecdn.net/9MZGCpvyGjuLKzAeyMd6hh.jpg",
            },
            {
              name: "LearnX",
              description:
                "A learning platform to aid in mastering a tech stack with industry level experience based on codelabs, testimonials, and leetcode-style exercises.",
              tags: ["Multiplatform", "Kotin", "Swift", "Typescript"],
              image:
                "https://duet-cdn.vox-cdn.com/thumbor/0x0:2640x1760/2400x1600/filters:focal(1320x880:1321x881):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/19344713/microsoftteams.jpg",
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
            },
          ].map((project) => {
            return (
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
            );
          })}
        </div>
      </section>
    </div>
  );
}
