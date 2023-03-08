import React from 'react'



export default function ProjectsSection({data:projects}) {



  const description = (str) => {
    if ((str === null) || (str === '')) {
        return '';
    } else {
        str = str.toString();
    }
    const newStr = str.replace(/(<([^>]+)>)/gi, '')
    return newStr.length >= 150 ? newStr.slice(0, 150) + "..." : newStr
}
const title = (data) => {
    return data.length >= 50 ? data.slice(0, 50) + "..." : data
}




  return (
    <>

      <section className="portfolio-gallery s-padding">
        <div className="container">
          <div className="s-title-wrap">
            <span className="s-sub-title">Our Portfolio</span>
            <h2 className="s-title">Some of Our Finest Work</h2>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="porftolio-filter-menu">
                <div className="portfolio-filter-buttons text-center" id="filter-buttons">
                  <button className="filter-btn current" data-filter="*">
                    All Categories
                  </button>
                  <button className="filter-btn" data-filter=".javascript">
                    Javascript
                      </button>
                 
                  <button className="filter-btn" data-filter=".reactjs">
                    Reactjs
                  </button>
                  <button className="filter-btn" data-filter=".nextjs">
                  Nextjs
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row portfolio-gallery-container">


          {projects.map((project ,  index) => (


<div className={`portfolio-item ${project?.type}`} key={index}>
<div className="portfolio-item__inner">
  <div className="thumb">
    <img className='w-full h-[430px] md:h-[330px]' src={project?.image} alt="" />
  </div>
  <div className="content">
    <div className="p-left">
      <h3>{project?.title}</h3>
      {/* <span>Branding</span> */}

<h3>      {description(project?.description)}...</h3>

    </div>
    <div className="p-right">
      <a href={project?.link}><i className="fa-solid fa-arrow-right"></i></a>
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
  )
}
