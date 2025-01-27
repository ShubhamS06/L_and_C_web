import styles from "../assets/css/portfolio-page.module.css";
import ImageCard from "../components/imageCard";
import { cardsData } from "../constants";

export default function PortfolioPage() {

  return (
    <>
      <div className={`${styles.header} flex items-center`}>
        <div className="heading m-0">
          A Kaleidoscope of Architecture, Landscape & Interior Design
        </div>

        <div className="subheading text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra laoreet urna, nec maximus lorem dignissim eget. Aliquam in turpis sit amet ligula mollis tempus sit amet sed leo.

          Vestibulum finibus est at lacus laoreet, ut viverra nisl egestas. In interdum eu tortor sit amet malesuada.      </div>
      </div>

      <div className={`${styles.cardGroup} flex flex-wrap mx-auto justify-between`}>
        {cardsData.map((data, index) => <ImageCard key={index} {...data} />)}
      </div>
    </>
  )
}
