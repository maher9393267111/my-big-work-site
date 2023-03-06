---------PROJECTS---------

 <div className="portfolio-item software">
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
            </div>
            <div className="portfolio-item software">
              <div className="portfolio-item__inner">
                <div className="thumb">
                  <img src="assets/images/portfolio-thumb/portfolio-img-2.png" alt="" />
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
            </div>
            <div className="portfolio-item design">
              <div className="portfolio-item__inner">
                <div className="thumb">
                  <img src="assets/images/portfolio-thumb/portfolio-img-4.png" alt="" />
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
            </div>
            <div className="portfolio-item cyber-security">
              <div className="portfolio-item__inner">
                <div className="thumb">
                  <img src="assets/images/portfolio-thumb/portfolio-img-3.png" alt="" />
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
            </div>
            <div className="portfolio-item consulting">
              <div className="portfolio-item__inner">
                <div className="thumb">
                  <img src="assets/images/portfolio-thumb/portfolio-img-5.png" alt="" />
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
            </div>
            <div className="portfolio-item software">
              <div className="portfolio-item__inner">
                <div className="thumb">
                  <img src="assets/images/portfolio-thumb/porftolio-img-6.png" alt="" />
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
            </div>
            <div className="portfolio-item engineering">
              <div className="portfolio-item__inner">
                <div className="thumb">
                  <img src="assets/images/portfolio-thumb/portfolio-img-7.png" alt="" />
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
            </div>


            --------------------------------------------------

            export async function getStaticProps() {
  const data = [];

  try {
      const querySnapshot = await getDocs(collection(db, 'project'));

      querySnapshot.forEach((doc) => {
          data.push({
              id: doc.id,
              ...doc.data(),
          });
      });
  } catch (error) {
      console.error(error);
  }

  return {
      props: {
          data,
      },
      revalidate: 60,
  };
}

