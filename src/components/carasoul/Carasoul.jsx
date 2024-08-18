import React from 'react'
import './data.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Carasoul = () => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear"
    
  };


  return (
    <div className='maindivsec '>
      <div className='second lg:mt-20'>
        <Slider {...settings}>
          {newdata.map((d) => (
            <div className='first' key={d}>
              <div className="dusradiv flex justify-center items-center rounded-xl">
                <img src={d.img} alt="" className='image  rounded-full' />
              </div>
              <div className='descdiv'>
                <p className='name text-md'>{d.Name}</p>
                <p className='descrip text-xs'>{d.desc}</p>
              </div>
            </div>
          ))}
        </Slider>

      </div>

    </div>
  );
}

const newdata = [
  {
    Name: `SELF PORTFOLIO`,
    img: `/web1.jpg`,
    desc: `I'm UI/UX Developer and I'M freelancer and i'm using React js, Scss, Javascript, Jquey, MySql, if you can create website then contact me. in my colledge days i'm participate my activity and win. In hackthon i'm participate 3 times and win the trophy 2 times.`
  },
  {
    Name: `EDUCATION`,
    img: `/web2.jpg`,
    desc: `I'm Complete my 10th and 12th in "C.B.S.E". My gradution complete in 2023 B.TECH (COMPUTER SCIENCE ENGINERRING) FROM MAHARISHI DAYANAND UNIVERSITY, ROHTAK. inmy colledge life im learn different types of computer languages javascript react frontend database etc. `
  },
  {
    Name: `SKILLS`,
    img: `/web3.jpg`,
    desc: `My computer skills is I'm UI/UX Designer, Frontend developer, javascript developer, rectjs developer, i'm good in teamwork, i'm very dedicated to my work, i'm very friendy behaviour man. In present time i'm learn database, backend lenguages in future goes to mernstack developer   `
  },
  {
    Name: `SUMIT MEHENDI ART`,
    img: `/web2.jpg`,
    desc: `My client sumit and he was mehendi designer. and i'm create website for my client all infomation and design of mehendi are available. my client is happy to see my work. anyone need you business to online market then contact me. i will give you good discounts.  `
  },
]
// hello world
export default Carasoul
