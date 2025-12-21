// import { useState } from "react";
// import { Link } from "react-router-dom";
// import styles from "./Jobs.module.css";
// import jobs from "./jobsData";
// import { Search, MapPin, Clock, Briefcase } from "lucide-react";

// import { useScrollAnimation } from "../../hooks/useScrollAnimation"

// const Jobs = () => {
//   const [search, setSearch] = useState("");
//   const [type, setType] = useState("all");
//     const [headerRef, headerVisible] = useScrollAnimation({ once: true })

//   const filteredJobs = jobs.filter((job) => {
//     const matchSearch =
//       job.title.toLowerCase().includes(search.toLowerCase());
//     const matchType = type === "all" || job.type.includes(type);
//     return matchSearch && matchType;
//   });

//   return (
//     <div>
//     <div className={styles.page}>
      
//       <div className={styles.container}>
//         {/* Sidebar */}
//         <aside className={styles.sidebar}>
//           <div className={styles.searchBox}>
//             <Search size={18} />
//             <input
//               placeholder="Search for jobs..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//             />
//           </div>

//           <h3 className={styles.filterTitle}>Job Type</h3>
//           <ul className={styles.filterList}>
//             <li
//               className={type === "all" ? styles.active : ""}
//               onClick={() => setType("all")}
//             >
//               All Job Types
//             </li>
//             <li onClick={() => setType("Full-Time")}>Full-Time</li>
//             <li onClick={() => setType("Part-Time")}>Part-Time</li>
//           </ul>

//           <div className={styles.count}>
//             Showing {filteredJobs.length} of {jobs.length} jobs
//           </div>
//         </aside>

//         {/* Jobs */}
//         <main className={styles.jobs}>
//           {filteredJobs.map((job) => (
//             <div key={job.id} className={styles.card}>
//               <div className={styles.cardHeader}>
//                 <h2>{job.title}</h2>
//                 <div className={styles.badges}>
//                   {/* <span className={styles.open}>{job.status}</span> */}
//                   <span className={styles.type}>{job.type}</span>
//                 </div>
//               </div>

//               <p className={styles.summary}>{job.summary}</p>

//               <div className={styles.meta}>
//                 <span>
//                   <MapPin size={14} /> {job.location}
//                 </span>
//                 <span>💰 {job.pay}</span>
//                 <span>
//                   <Clock size={14} /> {job.type}
//                 </span>
//               </div>

//               <div className={styles.footer}>
//                 <span className={styles.posted}>
//                   Posted {job.posted}
//                 </span>

//                 <div className={styles.actions}>
//                   {/* <Link
//                     to={`/jobs/${job.id}`}
//                     className={styles.detailsBtn}
//                   >
//                     Details
//                   </Link> */}

//                   <Link
//                     to={`/jobs/${job.id}/apply`}
//                     className={styles.applyBtn}
//                   >
//                     <Briefcase size={14} />
//                     Apply Now
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </main>
//       </div>
//     </div>
 
//         </div>
//   );
// };

// export default Jobs;
import { useState } from "react";
import styles from "./Jobs.module.css";
import jobs from "./jobsData";
import { Search, MapPin, Clock, Briefcase } from "lucide-react";

const Jobs = () => {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");

  // 🔹 Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const filteredJobs = jobs.filter((job) => {
    const matchSearch = job.title.toLowerCase().includes(search.toLowerCase());
    const matchType = type === "all" || job.type.includes(type);
    return matchSearch && matchType;
  });

  const openModal = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };

  return (
    <>
      <div className={styles.page}>
        <div className={styles.container}>
          {/* Sidebar */}
          <aside className={styles.sidebar}>
            <div className={styles.searchBox}>
              <Search size={18} />
              <input
                placeholder="Search for jobs..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <h3 className={styles.filterTitle}>Job Type</h3>
            <ul className={styles.filterList}>
              <li
                className={type === "all" ? styles.active : ""}
                onClick={() => setType("all")}
              >
                All Job Types
              </li>
              <li onClick={() => setType("Full-Time")}>Full-Time</li>
              <li onClick={() => setType("Part-Time")}>Part-Time</li>
            </ul>

            <div className={styles.count}>
              Showing {filteredJobs.length} of {jobs.length} jobs
            </div>
          </aside>

          {/* Jobs */}
          <main className={styles.jobs}>
            {filteredJobs.map((job) => (
              <div key={job.id} className={styles.card}>
                <div className={styles.cardHeader}>
                  <h2>{job.title}</h2>
                  <span className={styles.type}>{job.type}</span>
                </div>

                <p className={styles.summary}>{job.summary}</p>

                <div className={styles.meta}>
                  <span>
                    <MapPin size={14} /> {job.location}
                  </span>
                  <span>💰 {job.pay}</span>
                  <span>
                    <Clock size={14} /> {job.type}
                  </span>
                </div>

                <div className={styles.footer}>
                  <span className={styles.posted}>
                    Posted {job.posted}
                  </span>

                  <button
                    className={styles.applyBtn}
                    onClick={() => openModal(job)}
                  >
                    <Briefcase size={14} />
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </main>
        </div>
      </div>

      {/* 🔹 MODAL */}
      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
          >
            <h3>Apply for {selectedJob?.title}</h3>

            <p>
              Please send us your CV using the email below.  
              Make sure to mention the job position you are applying for
              in the email subject.
            </p>

            <p className={styles.email}>
              azefethiopia@gmail.com
            </p>

            {/* <a
              href={`mailto:azefethiopia@gmail.com?subject=Application for ${selectedJob?.title}`}
              className={styles.sendEmailBtn}
            >
              Send Email
            </a> */}
          </div>
        </div>
      )}
    </>
  );
};

export default Jobs;
