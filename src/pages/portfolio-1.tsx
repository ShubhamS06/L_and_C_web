import styles from "../assets/css/portfolio-1-page.module.css";
import { portfolioHighlightsData } from "../constants";

export default function Portfolio1Page() {

  return (
    <>
      <div className={`${styles.header} flex`}>
        <div className="overflow-hidden"><img src="/portfolio-header-img-1.jpeg" alt="" /></div>
        <div className="overflow-hidden"><img src="/portfolio-header-img-2.jpeg" alt="" /></div>
        <div className="overflow-hidden"><img src="/portfolio-header-img-3.png" alt="" /></div>
      </div>

      <div className={`${styles.projectSection} flex flex-col`}>
        <div className="w-full">
          <div className="flex items-end justify-between">
            <div className="heading m-0">Project Name</div>
            <div className="font-bold font-25">Location</div>
          </div>
          <div className="font-semibold font-25">Interior / Architecture / Landscape</div>
        </div>
        <div className="subheading">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra laoreet urna, nec maximus lorem dignissim eget. Aliquam in turpis sit amet ligula mollis tempus sit amet sed leo. Vestibulum finibus est at lacus laoreet, ut viverra nisl egestas. In interdum eu tortor sit amet malesuada.
        </div>
      </div>

      <div className={`${styles.mapSection} flex justify-between items-center`}>
        <img src="/portfolio-map.svg" alt="" />
        <div className={`${styles.highlightGroup} flex flex-wrap`}>
          {portfolioHighlightsData.map(({ icon, text }, index) =>
            <div key={index} className="flex justify-end">
              <div className={`${styles.highlight} flex flex-col items-center`}>
                <div className="flex justify-center items-center"><img src={icon} alt="" /></div>
                <span>{text}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className={`${styles.imagesSection} flex flex-col`}>
        <div className="flex relative justify-between">
          <div className="subheading">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra laoreet urna, nec maximus lorem dignissim eget. Aliquam in turpis sit amet ligula mollis tempus sit amet sed leo. Vestibulum finibus est at lacus laoreet, ut viverra nisl egestas. In interdum eu tortor sit amet malesuada.
          </div>
          <img src="/image 57.png" alt="" />
        </div>
        <div className="flex items-end relative">
          <img src="/image 67.png" alt="" />
          <img src="/Mask group (1).png" alt="" />
          <div className="flex flex-col justify-center justify-between">
            <img src="/image 62.png" alt="" className={`${styles.portfolio_3rd_img}`}/>
            <div className={`${styles.imagesTogglerParent} flex justify-evenly`}>
              <img src="/icons/Arrow 2.svg" alt="" />
              <img src="/icons/Arrow 1.svg" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.textureSection} flex flex-col`}>
        <div className="subheading">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra laoreet urna, nec maximus lorem dignissim eget. Aliquam in turpis sit amet ligula mollis tempus sit amet sed leo. Vestibulum finibus est at lacus laoreet, ut viverra nisl egestas. In interdum eu tortor sit amet malesuada.
        </div>
        <div className="flex flex-col-sm">
          <img className="w-full-sm" src="/texture-03.png" alt="" />
          <img className="w-full-sm" src="/texture-02.png" alt="" />
          <img className="w-full-sm" src="/texture-01.png" alt="" />
        </div>
      </div>

      <div className={`${styles.renderSection} flex items-center justify-between`}>
        <div>
          <div className="heading">
            Quality Renders to Unbelievable Reality
          </div>
          <div className="subheading">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </div>
        </div>

        <div className="stack">
          <img className="w-full stack-bg" src="/render-bg.png" alt="" />

          <div className="flex mt-auto w-full"
            onClick={(e) => {
              ;[...e.currentTarget.children].forEach(child => {
                if (child instanceof HTMLButtonElement)
                  child.dataset.active = child === e.target ? 'true' : 'false'
              })
            }}
          >
            <button className="text-white flex items-center justify-center relative"
              data-active={true}
            >
              <img src="/icons/laptop.svg" alt="" />
              Rendered View
            </button>
            <button className="text-white flex items-center justify-center relative"
              data-active={false}
            >
              <img src="/icons/eye.svg" alt="" />
              Actual View
            </button>
          </div>
        </div>
      </div>

      <div className={`${styles.imagesSection2}`}>
        <img src="/image 64.png" alt="shofa sitting" />
        <img src="/image 66.png" alt="lemp desk" />
        <img src="/image 61.png" alt="bath room" />
        <img src="/image 65.png" alt="chair" />
        <div className={`subheading flex justify-evenly`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex odit veritatis laborum.
        </div>
      </div>

      <div className={`${styles.paraSection} subheading`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra laoreet urna, nec maximus lorem dignissim eget. Aliquam in turpis sit amet ligula mollis tempus sit amet sed leo. Vestibulum finibus est at lacus laoreet, ut viverra nisl egestas. In interdum eu tortor sit amet malesuada.rpis sit amet ligula mollis tempus sit amet sed leo. Vestibulum finibus est at lacus laoreet, ut viverra nisl egestas. In interdum eu tortor sit amet malesuada.
      </div>
      <div className={`${styles.mapSection}`}>
        <img src="/l&C_map.png" alt="map image" width={"100%"} />
      </div>
    </>
  )
}
