import React ,{useState , useEffect} from "react";

export default function ProjectsSection({ data: projects }) {
  const description = (str) => {
    if (str === null || str === "") {
      return "";
    } else {
      str = str.toString();
    }
    const newStr = str.replace(/(<([^>]+)>)/gi, "");
    return newStr.length >= 150 ? newStr.slice(0, 150) + "..." : newStr;
  };
  const title = (data) => {
    return data.length >= 50 ? data.slice(0, 50) + "..." : data;
  };


const [type ,setType] = useState('all')
// const [selectedProjects ,setSelectedProjects] = useState(projects ?? [])

// const handleFilteringPlantsByType = () => {
//   let tempPlants = [...projects];
//   if (type !== 'all') {
//     tempPlants = tempPlants.filter(plant => plant.type === type);
//   }
//   console.log("filtere-->" ,tempPlants)
//   setSelectedProjects(tempPlants);
//   return tempPlants;
// };

// useEffect(() => {
//   handleFilteringPlantsByType();
// }, [type]);



const filteredProjects = type === 'all' ? projects : projects.filter(plant => plant.type === type)

// travel shop realstate personal  agency kargo 

  return (
    <>
      <section className="portfolio-gallery s-padding">
        <div className="container">
          <div className="s-title-wrap">
            {/* <span className="s-sub-title">Our Portfolio</span> */}
            <h2 className="s-title   font-arabic">بعض النماذج من أعمالنا</h2>

            {type}
          </div>
          <div className="row">
            <div className="col-12">
              <div className="porftolio-filter-menu">
                <div
                  className="portfolio-filter-buttons text-center"
                  id="filter-buttons"
                >
                  <button
                   data-filter="*"
                  onClick={()=>setType('all')}
                  className="filter-btn current" >
                  كافة المواقع
                  </button>
                  <button
                   data-filter=".travel"
                  onClick={()=>setType('travel')}
                  className="filter-btn" >
                    مواقع سياحة
                  </button>

                  <button
                   data-filter=".realstate"
                   onClick={()=>setType('realstate')}
                  
                  className="filter-btn" >
                   مواقع عقارات
                  </button>

                  <button
                   data-filter=".shop"
                   onClick={()=>setType('shop')}
                  
                  className="filter-btn" >
                  متاجر وعرض منتجات
                  </button>

                  <button
                   data-filter=".kargo"
                   onClick={()=>setType('kargo')}
                  className="filter-btn" >
                    مواقع شركات شحن ونقل
                  </button>


                  <button
                        data-filter=".personal"
                   onClick={()=>setType('personal')}
                  
                  className="filter-btn" >
                 مواقع شخصية
                  </button>

                  <button
                  data-filter=".agency"
                   //onClick={()=>setType('agency')}
                  //  data-filter=".reactjs"
                  className="filter-btn" >
         مواقع تعريفية للشركات
                  </button>

                </div>
              </div>
            </div>
          </div>
          {/* ${project?.type} */}
          <div className="row portfolio-gallery-container">
            {filteredProjects?.map((project, index) => (
              <div className={`portfolio-item ${project?.type}  `} key={index}>
                <div className="portfolio-item__inner">
                  <div className="thumb">
                    <img
                      className="w-full h-[430px] md:h-[330px]"
                      src={project?.image}
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <div className="p-left">
                      <h3>{project?.title}</h3>
                      {/* <span>Branding</span> */}

                      <h3> {description(project?.description)}...</h3>
                    </div>
                    <div className="p-right">
                      <a href={project?.link}>
                        <i className="fa-solid fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* <div className="portfolio-item software">
              <div className="portfolio-item__inner">
                <div className="thumb">
                  <img src="assets/images/portfolio-thumb/portfolio-img-1.png" alt="" />
                </div>
                <div className="content">
                  <div className="p-left">
                    <h3>Colorful Small Cards</h3>
                    <span>Branding</span>
                  </div>
                  <div className="p-right">
                    <a href="portfolio-detail.html"><i className="fa-solid fa-arrow-right"></i></a>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
