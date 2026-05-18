import React, { useEffect, useState } from 'react'
// import fff from '../images/image.png'
import ggg from '../images/sertifi.png'
import tog from '../images/tog.png'
function Hero() {
  const baseUrl="https://69fdd5f130ad0a6fd1c18c85.mockapi.io/api/v1"
  const [getData,setGetData]=useState("")
  useEffect(()=>{
    getAllData()

  },[])

  async function getAllData() {
    const res=await fetch(`${baseUrl}/Hero`)

    if(!res.ok){
      console.log("Sen malumotni xato olding!");
      
    }

    const data=await res.json()
    setGetData(data)
    
    
  }
  
  return (
    <section className='hero'>
      <div className="container">
        <div className="hero-container">

          <div className="hero-content">
            <h3 className="hero-subtitle">WELCOME</h3>
            <h1 className="hero-title">
              {getData[0]?.sarlavha}

            </h1>
            <p className="hero-text">
              {getData[0]?.text}
            </p>

            <div className="hero-buttons">
              <button className="btn-primary">Kursga yozilish</button>
              <button className="btn-secondary">Batafsil ma’lumot</button>
            </div>
          </div>


          <div className="hero-image">
            <img src={getData[0]?.rasm} alt="Everest Mountain" />
          </div>
        </div>
      </div>
      <section>
        <div className="val2">
          <h2>O'quvchilar natijalari</h2>
          <div className="val">

            <img src={ggg} alt="" />
            <img src={ggg} alt="" />
            <img src={ggg} alt="" />

          </div>

        </div>


      </section>
      <section>
        <div className="barg">
          <h2>O'quvchilar fikri</h2>
          <div className="barg3">

            <img src={ggg} alt="" />
            <img src={ggg} alt="" />
            <img src={ggg} alt="" />


          </div>
        </div>
      </section>
      <section>
        <div className="ll">

        </div>
        <div className="yer">

          <div className="why-content">


            <div className="why-text">
              <h2>
                <span>Fture</span>
                <br />
                Education
              </h2>
              <p>
                Everest Learning Center creates comfortable conditions for
                students and offers quality education at affordable prices so
                that everyone can receive an education.
              </p>
            </div>


            <div className="why-cards">
              <div className="card active">
                <div className="icon">💰</div>
                <h3>Hamyonbop narxlar</h3>
                <p>
                  Everest o‘quv markazi zamonaviy ta’lim muhitini yaratib, ingliz tili,
                  dasturlash va yapon tili bo‘yicha sifatli kurslarni taqdim etadi. Bizning
                  maqsadimiz – har bir o‘quvchiga qulay sharoit yaratib, ularning bilimini
                  oshirish va kelajakdagi muvaffaqiyatiga mustahkam poydevor qo‘yishdir.
                </p>
              </div>

              <div className="card vertical">Qulay joylashuv</div>
              <div className="card vertical">Sifatli ta’lim</div>
              <div className="card vertical">Malakali ustozlar</div>
              <div className="card vertical">Yuqori natijalar</div>
              <div className="card vertical">Haqiqiy rivojlanish</div>
            </div>

          </div>



        </div>

      </section>




    </section>
  )
}

export default Hero
