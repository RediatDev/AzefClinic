// import { useScrollAnimation } from "../../hooks/useScrollAnimation";
// import styles from "./About.module.css";
// import { FaHandsHelping, FaEye, FaBullseye, FaHeart } from "react-icons/fa";

// function About() {
//   const [headerRef, headerVisible] = useScrollAnimation({ once: true });
//   const [contentRef, contentVisible] = useScrollAnimation({
//     once: true,
//     threshold: 0.1,
//   });

//   return (
//     <section id="about" className={styles.about}>
//       <div className={styles.container}>
//         {/* Header */}
//         <div
//           ref={headerRef}
//           className={`${styles.header} ${
//             headerVisible ? styles.fadeIn : styles.fadeOut
//           }`}
//         >
//           <h2 className={styles.title}>ABOUT US | ስለ እኛ</h2>
//           <p className={styles.description}>
//             Azef Internal Medicine Specialty Clinic – A Place of Rest, Healing,
//             and Trust.
//           </p>
//         </div>

//         {/* Content */}
//         <div
//           ref={contentRef}
//           className={`${styles.content} ${
//             contentVisible ? styles.fadeIn : styles.fadeOut
//           }`}
//         >
//           <div className={styles.card}>
//             <p>
//               <strong>Azef Internal Medicine Specialty Clinic</strong> is
//               established to serve the community with excellence in internal
//               medicine and related healthcare services. The name <strong>Azef (አዜፍ)</strong> means
//               <em> “A Place of Rest”</em>, representing comfort, healing, and
//               trust.
//             </p>

//             <p>
//               Our clinic follows Ethiopian Ministry of Health policies, national
//               clinical guidelines, and ethical medical standards to ensure safe,
//               reliable, and modern care.
//             </p>
//           </div>

//           {/* Amharic Section */}
//           <div className={styles.card}>
//             <p>
//               <strong>አዜፍ</strong> ማለት የእረፍት ምድር ነው፡፡ ተቋማችን በዚህ ስም
//               እንዲጠራ የተፈለገበት ዋነኛ ምክንያት ደንበኞቻችን በአገልግሎታችን
//               አካላዊ፣ አእምሮዋዊ፣ መንፈሳዊ እና ማህበረሰባዊ እረፍት እንዲያገኙ
//               በሰው ልጅ ጤና ላይ ትኩረት በመስጠት ስለምንሰራ ነው፡፡
//             </p>
//           </div>
//           {/* Mission / Vision / Values */}
//           <div className={styles.grid}>
//             <div className={styles.infoCard}>
//               <FaBullseye size={28} color="#158080" />
//               <h3>Mission</h3>
//               <p>
//                 Deliver high-quality, patient-centered, modern healthcare with
//                 compassion and innovation.
//               </p>
//             </div>
// {/*  */}
//             <div className={styles.infoCard}>
//               <FaEye size={28} color="#158080" />
//               <h3>Vision</h3>
//               <p>Build a healthier future generation.</p>
//             </div>

//             <div className={styles.infoCard}>
//               <FaHeart size={28} color="#158080" />
//               <h3>Values</h3>
//               <p>
//                 Compassion, Integrity, Professionalism, Patient Safety, and
//                 Teamwork.
//               </p>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

// export default About;
import { useScrollAnimation } from "../../hooks/useScrollAnimation"
import styles from "./About.module.css"
import { FaEye, FaBullseye, FaHeart ,FaStar} from "react-icons/fa"
import logo from "../../assets/logo.png"


const InfoCard = ({ icon: Icon, title, description }) => (
  <div className={styles.infoCard}>
    <div className={styles.iconWrapper}>
      <Icon size={32} />
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
)

function About() {
  const [headerRef, headerVisible] = useScrollAnimation({ once: true })
  const [contentRef, contentVisible] = useScrollAnimation({
    once: true,
    threshold: 0.1,
  })

  const infoCardsData = [
    {
      icon: FaBullseye,
      title: "Mission",
      description: "Deliver high-quality, patient-centered, modern healthcare with compassion and innovation.",
    },
    {
      icon: FaEye,
      title: "Vision",
      description: "Build a healthier future generation.",
    },
    {
      icon: FaHeart,
      title: "Values",
      description: "Compassion, Integrity, Professionalism, Patient Safety, and Teamwork.",
    },
  ]

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        {/* Header */}
        <div ref={headerRef} className={`${styles.header} ${headerVisible ? styles.fadeIn : styles.fadeOut}`}>
          <h2 className={styles.title}>ABOUT US <small className={`${styles.standColor}`}>|</small> ስለ እኛ</h2>
          <p className={styles.description}>
            Azef Internal Medicine Specialty Clinic  A Place of Rest, Healing, and Trust.
          </p>
        </div>

        {/* Content */}
        <div ref={contentRef} className={`${styles.content} ${contentVisible ? styles.fadeIn : styles.fadeOut}`}>
          <div className={styles.descriptionWrapper}>
            <div className={styles.card}>
              <p>
                <FaStar color="#158080"/><strong>Azef Internal Medicine Specialty Clinic</strong> is established to serve the community with
                excellence in internal medicine and related healthcare services. The name <strong>Azef (አዜፍ)</strong>{" "}
                means
                <em> "A Place of Rest"</em>, representing comfort, healing, and trust.
              </p>

              <p>
               <FaStar color="#158080"/>  Our clinic follows Ethiopian Ministry of Health policies, national clinical guidelines, and ethical
                medical standards to ensure safe, reliable, and modern care.
              </p>
            </div>

            {/* Amharic Section */}
            <div className={styles.card}>
              <div className={styles.centerImage} >
              <img src={logo} alt="" />

              </div>
              <p>
                <strong>አዜፍ</strong> ማለት የእረፍት ምድር ነው፡፡ ተቋማችን በዚህ ስም እንዲጠራ የተፈለገበት ዋነኛ ምክንያት ደንበኞቻችን በአገልግሎታችን አካላዊ፣
                አእምሮዋዊ፣ መንፈሳዊ እና ማህበረሰባዊ እረፍት እንዲያገኙ በሰው ልጅ ጤና ላይ ትኩረት በመስጠት ስለምንሰራ ነው፡፡
              </p>
            </div>
          </div>

          {/* Mission / Vision / Values */}
          <div className={styles.grid}>
            {infoCardsData.map((card) => (
              <InfoCard key={card.title} icon={card.icon} title={card.title} description={card.description} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
