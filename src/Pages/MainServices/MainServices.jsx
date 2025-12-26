// import { useScrollAnimation } from "../../hooks/useScrollAnimation";
// import styles from "./MainServices.module.css";
// import {
//   FaHeart,
//   FaDisease,
//   FaMicroscope,
//   FaWheelchair,
//   FaNotesMedical,
// } from "react-icons/fa";
// import { GiMedicines } from "react-icons/gi";

// const services = [
//   {
//     icon: FaHeart,
//     title: "Cardiovascular Care",
//     description:
//       "Diagnosis and management of hypertension, heart disease, cholesterol disorders, and cardiovascular risk assessment.",
//   },
//   {
//     icon: FaDisease,
//     title: "Chronic Disease Management",
//     description:
//       "Comprehensive care for diabetes, thyroid disorders, asthma, and other long-term medical conditions.",
//   },
//   {
//     icon: GiMedicines,
//     title: "Preventive Medicine",
//     description:
//       "Routine screenings, vaccinations, and lifestyle counseling to prevent illness before it starts.",
//   },
//   {
//     icon: FaNotesMedical,
//     title: "Comprehensive Health Assessments",
//     description:
//       "Detailed physical examinations and medical evaluations tailored to adult patients.",
//   },
//   {
//     icon: FaMicroscope,
//     title: "Diagnostic & Laboratory Services",
//     description:
//       "Accurate and timely diagnostic testing to support precise clinical decisions.",
//   },
//   {
//     icon: FaWheelchair,
//     title: "Personalized Patient Care",
//     description:
//       "Individualized treatment plans focused on patient safety, comfort, and long-term wellbeing.",
//   },
// ];

// function MainServices() {
//   const [headerRef, headerVisible] = useScrollAnimation({ once: true });
//   const [gridRef, gridVisible] = useScrollAnimation({
//     once: true,
//     threshold: 0.1,
//   });

//   return (
//     <section id="services" className={styles.services}>
//       <div className={styles.container}>
//         {/* Header */}
//         <div
//           ref={headerRef}
//           className={`${styles.header} ${
//             headerVisible ? styles.fadeIn : styles.fadeOut
//           }`}
//         >
//           <h2 className={styles.title}>
//             Our Medical Services | አገልግሎቶቻችን
//           </h2>
//           <p className={styles.description}>
//             We provide comprehensive, compassionate, and patient-centered
//             internal medicine services following national and international
//             clinical standards.
//           </p>
//         </div>

//         {/* Intro Card */}
//         <div className={styles.card}>
//           <p>
//             At <strong>Azef Internal Medicine Specialty Clinic</strong>, our
//             services are designed to promote healing, prevention, and long-term
//             health. We combine modern medical practice with ethical care,
//             ensuring every patient receives safe and personalized treatment.
//           </p>
//         </div>

//         {/* Services Grid */}
//         <div
//           ref={gridRef}
//           className={`${styles.grid} ${
//             gridVisible ? styles.fadeIn : styles.fadeOut
//           }`}
//         >
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className={styles.infoCard}
//               style={{ animationDelay: `${index * 0.1}s` }}
//             >
//               <div className={styles.iconWrapper}>
//                 <service.icon size={32} color="#158080" />
//               </div>
//               <h3>{service.title}</h3>
//               <p>{service.description}</p>
//             </div>
//           ))}
//         </div>

//         {/* Amharic Section */}
//         <div className={styles.card}>
//           <p>
//             በ<strong>አዜፍ የውስጥ ሕክምና ስፔሻሊቲ ክሊኒክ</strong> የምንሰጣቸው
//             አገልግሎቶች በመከላከያ፣ በሕክምና እና በታካሚ መንከባከብ ላይ ያተኮሩ
//             ናቸው። ዘመናዊ የሕክምና ቴክኖሎጂን ከሙያዊ ሥነ-ምግባር ጋር በማዋሃድ
//             የተመጣጠነ እና ደህንነቱ የተጠበቀ አገልግሎት እንሰጣለን።
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default MainServices;
import { AlignCenter } from "lucide-react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import styles from "./MainServices.module.css";
import {
  FaCheckCircle,
  FaHeart,
  FaMicroscope,
  FaXRay,
  FaUserMd,
  FaNotesMedical,
} from "react-icons/fa";

function Services() {
  const [headerRef, headerVisible] = useScrollAnimation({ once: true });
  const [contentRef, contentVisible] = useScrollAnimation({
    once: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        {/* Header */}
        <div
          ref={headerRef}
          className={`${styles.header} ${
            headerVisible ? styles.fadeIn : styles.fadeOut
          }`}
        >
          <h2 className={styles.title}>
            SERVICES | አገልግሎቶች
          </h2>
          <p className={styles.description}>
            Comprehensive, ethical, and patient-centered medical services
            delivered with modern technology and professional excellence.
          </p>
        </div>

        {/* Main Content */}
        <div
          ref={contentRef}
          className={` ${styles.content} ${
            contentVisible ? styles.fadeIn : styles.fadeOut
          }`}
        >
          {/* Core Principles */}
          <div className={styles.forDisplay}>
          <div className={styles.card}>
            <h3 className={styles.sectionTitle}>የምንሰጣቸው አገልግሎቶች፦</h3>
            <ul className={styles.list}>
              <li>
                <FaCheckCircle color="#158080"/> ጥራትን ማዕከል ያደረገና ያስቀደመ ሕክምና
              </li>
              <li>
                <FaCheckCircle color="#158080"/> ሰውነትንና የሰውነትን ክብር ያስቀደመ አገልግሎት
              </li>
              <li>
                <FaCheckCircle color="#158080"/> ጥራት ያለው በዘመናዊ መሣሪያዎች የታገዘ ምሉዕ
                የላብራቶሪ አገልግሎት
              </li>
              <li>
                <FaCheckCircle color="#158080"/> ቀልጣፋና በዘመናዊ መሣሪያ የታገዘ የራጅ
                እና የአልትራሳውንድ አገልግሎት
              </li>
            </ul>
          </div>

          {/* Internal Medicine Specialties */}
          <div className={styles.card}>
            <h3 className={styles.sectionTitle}>
              በሰፔሻሊስት እና ሰብ ሰፔሻሊስት ሐኪሞች የሚሰጡ አገልግሎቶች
            </h3>

            <ul className={styles.subList}>
              <li><FaCheckCircle color="#158080"/> የውስጥ ደዌ ሕክምና</li>
              <li><FaCheckCircle color="#158080"/> የሳንባ</li>
              <li><FaCheckCircle color="#158080"/> ጉበት፣ አንጀት እና ተያያዥ</li>
              <li><FaCheckCircle color="#158080"/> ሰኳር እና ስነ አመጋገብ</li>
              <li><FaCheckCircle color="#158080"/> ደም ግፊት እና የልብ ሕክምና</li>
            </ul>
          </div>
          </div>


          {/* Cardiology */}
          <div className={styles.forDisplay}>

        
          <div className={styles.card}>
            <h3 className={styles.sectionTitle}>
              የልብ ሕክምና (በልብ ሰብ ሰፔሻሊስት)
            </h3>
            <ul className={styles.subList}>
              <li> <FaHeart color="#158080"/> የልብ እልትራሳውንድ</li>
              <li> <FaHeart color="#158080"/> ECG / ኤሌክትሪካል የልብ ሥራ ምርመራ</li>
            </ul>
          </div>

            <div className={styles.card}>
                <div className={styles.iconWrapper}>

                 <FaNotesMedical size={30} color="#158080"/>
                </div>
            <p className={styles.footerNote}>
             All services follow Ethiopian Ministry of Health (MoH) approved
              protocols and strict infection prevention standards.
            </p>
          </div>
  </div>
          {/* Service Categories Grid */}
          <div className={styles.grid}>
            <div className={styles.infoCard}>
              <FaUserMd size={30} color="#158080" />
              <h4>Internal Medicine</h4>
              <p>የውስጥ ደዌ ሕክምና</p>
            </div>

            <div className={styles.infoCard}>
              <FaUserMd size={30} color="#158080" />
              <h4>General Practice</h4>
              <p>አጠቃላይ ሕክምና</p>
            </div>

            <div className={styles.infoCard}>
              <FaUserMd size={30} color="#158080" />
              <h4>Emergency Care</h4>
              <p>አደጋ ጊዜ ሕክምና</p>
            </div>

            <div className={styles.infoCard}>
              <FaXRay size={30} color="#158080" />
              <h4>Radiology & Ultrasound</h4>
              <p>ራዲዮሎጂ</p>
            </div>

            <div className={styles.infoCard}>
              <FaMicroscope size={30} color="#158080" />
              <h4>Laboratory Services</h4>
              <p>ላቦራቶሪ</p>
            </div>

            <div className={styles.infoCard}>
              <FaUserMd size={30} color="#158080" />
              <h4>Nursing Services</h4>
              <p>ነርሲንግ</p>
            </div>

            <div className={styles.infoCard}>
              <FaUserMd size={30} color="#158080" />
              <h4>Preventive & Health Education</h4>
              <p>መከላከያ ጤና</p>
            </div>

            <div className={styles.infoCard}>
              <FaUserMd size={30} color="#158080" />
              <h4>Minor Procedures</h4>
              <p>ቀላል ቀዶጥገና</p>
            </div>
            <div className={styles.infoCard}>
              <FaUserMd size={30} color="#158080" />
              <h4>Follow Up </h4>
              <p>የክትትል ህክምና</p>
            </div>
          </div>

          {/* Footer Note */}

        </div>
      </div>
    </section>
  );
}

export default Services;
