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
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
          <div className="border rounded-lg overflow-hidden">
            {/* <img
              src="https://support.content.office.net/en-us/media/02cd7402-1116-40fe-98d9-65bb8a48544c.png"
              className="w-full aspect-[1.8] object-cover"
            /> */}
            <img
              src="https://www.sketchappsources.com/resources/source-image/microsoft-teams-illustration.png"
              className="w-full aspect-[1.8] object-cover"
            />
            <div className="p-5">
              <p className="text-xl">CommunityX</p>
              <p className="text-sm mt-4 mb-2 line-clamp-4">
                A simple, easy-to-use community management platform to build
                rich conversations, enabling them with all the tools and
                features to build rich communities, set out to create engaging
                experiences, and solve the problems of the people around them.
              </p>
              <div>
                <p className="inline-flex py-[6px] px-[8px] rounded-md mx-[3px] my-[3px] border text-sm border-neutral-500 text-neutral-600">
                  Multiplatform
                </p>
                <p className="inline-flex py-[6px] px-[8px] rounded-md mx-[3px] my-[3px] border text-sm border-neutral-500 text-neutral-600">
                  Kotlin
                </p>
                <p className="inline-flex py-[6px] px-[8px] rounded-md mx-[3px] my-[3px] border text-sm border-neutral-500 text-neutral-600">
                  Swift
                </p>
                <p className="inline-flex py-[6px] px-[8px] rounded-md mx-[3px] my-[3px] border text-sm border-neutral-500 text-neutral-600">
                  Typescript
                </p>
              </div>
              <button className="border py-2 px-6 text-sm mt-8 text-blue-500 rounded-md font-medium">
                View Project
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
