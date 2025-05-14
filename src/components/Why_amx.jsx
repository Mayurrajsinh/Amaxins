import React from 'react'

function Why_amx() {
    const heading_page = 'Why Use Amax'
 const tataItems = [
    {
      img: "https://www.tataaig.com/s3/Group_1497_cf38de5cfc.svg",
      text: "1 Cr + Policies Issued last year",
      link: "!#",
    },
    {
      img: "https://www.tataaig.com/s3/Group_1366_2766986325.svg",
      text: "5 Cr + Customers Served since Inception",
      link: "!#",
    },
    {
      img: "https://www.tataaig.com/s3/Group_4134_4e0aedee05.svg",
      text: "Instant Policy For All Products",
      link: "!#",
    },
    {
      img: "https://www.tataaig.com/s3/Group_3624_d8635bfcef.svg",
      text: "7500+ Network Garages",
      link: "/locator/cashless-car-network-garages",
      linkText: "View Motor Insurance",
    },
    {
      img: "https://www.tataaig.com/s3/Group_3623_60bfbdb020.svg",
      text: "12,000+ Hospitals",
      link: "/locator/cashless-network-hospitals",
      linkText: "View Health Insurance",
    },
    {
      img: "https://www.tataaig.com/s3/Group_3651_5537ce339f.svg",
      text: "200+ Destinations Covered",
      link: "/travel-insurance",
      linkText: "View Travel Insurance",
    },
  ];

  return (
    <div>
        <h1>{heading_page}</h1>

     <section className="whyTataBox mDisplayNone whyTataImage">
      <article>&nbsp;</article>
      <section className="w-100 h-100 d-flex justify-content-between flex-wrap">
        {tataItems.map((item, index) => (
          <div
            key={index}
            className={`whyTataItems whyTataItem${index}Position`}
          >
            <section className="circleItem">
              <img
                src={item.img}
                loading="lazy"
                alt="network.png"
                fetchpriority="low"
              />
            </section>
            <aside className="boldContentClass2" style={{ color: "#264a9f" }}>
              {item.text}
              <a
                className="contentClass3 d-block whyTataDetails"
                href={item.link}
              >
                {item.linkText || ""}
              </a>
            </aside>
          </div>
        ))}
      </section>
    </section>

    </div>
  )
}

export default Why_amx