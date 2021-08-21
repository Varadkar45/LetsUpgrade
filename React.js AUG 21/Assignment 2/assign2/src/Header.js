
import Navbar from './Navbar';
import Card from './Card';
function Header(){

  
    const cards=[
        {
            image:"https://tse1.mm.bing.net/th?id=OIP.YYtKLluXwOYRmzQgPW35aQHaDT&pid=Api&P=0&w=385&h=172",
            title:"DY Patil University ",
            subtitle:"Nerul",
            desc:"DY Patil Deemed to be University has been making groundbreaking changes in the arena of education, healthcare, and sports. ",

        },
        {
            image:"https://secureservercdn.net/160.153.137.40/xkt.381.myftpupload.com/wp-content/uploads/2021/07/VJTI-LandingPageV3.jpg",
            title:"VJTI",
            subtitle:"Matunga",
            desc:"VJTI Mumbai (estd. in 1887 as Victoria Jubilee Technical Institute) has pioneered India’s Engineering education,training ecosystem."
        },
        {
            image:"https://www.spit.ac.in/wp-content/uploads/2009/11/Entrance.jpg",
            title:"SPIT",
            subtitle:"Andheri",
            desc:"The institute is located in 47 acres of green campus at Andheri (W), the fastest growing suburb of Mumbai. The campus also houses four Bhavan’s Institutions of great repute namely Bhavan’s College (the arts, commerce and science college), Sardar Patel College of Engineering – Government aided Engineering college, S.P. Jain Institute of Management and Research, a management institute and A.H. Wadia, higher secondary school.",
        },
        {
            image:"http://vesitadmissions.ves.ac.in/images/Slide1.png",
            title:"Vivekanand Education Society's Institute of Technology",
            subtitle:"Chembur",
            desc:"V.E.S.I.T, as on 2017, has been imparting quality education in the field of technology for the last thirty-three years, and is deemed to be one of the most preferred engineering colleges in Mumbai. Students come here to discover an opportunity to explore, to question, to collaborate and improve upon themselves. ",
        },
        {
            image:"https://www.campusoption.com/images/colleges/gallery/30_11_16_090438_VIT.JPG",
            title:"Vidyalankar Institute of Technology ",
            subtitle:"Wadala",
            desc:"Vidyalankar Institute of Technology is an Engineering & Management Institute approved by AICTE, New Delhi and Government of Maharashtra. The Institute is affiliated to University of Mumbai.",
        },
    ]


    return(
        <div>

        <h1 className="container-title">Top Engineering Colleges</h1>
        <div className="container">
           {
               cards.map((card,index)=>(

                <Card key={index} title={card.title} subtitle={card.subtitle} desc={card.desc} image={card.image} />
               ))
           }
        </div>

        </div>
    )
 }

 export default Header;