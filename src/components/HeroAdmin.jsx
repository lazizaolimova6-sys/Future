import React, { useRef } from 'react'
import '../styles/heroAdmin.css'
function HeroAdmin() {
    const base_api = 'https://69fdd5f130ad0a6fd1c18c85.mockapi.io/api/v1'

    const title = useRef(null)
    const sub_title = useRef(null)
    const image = useRef(null)

    async function postData() {
        const data_hero = {
            sarlavha:title.current.value,
            text:sub_title.current.value,
            rasm:image.current.value
        }

        try {
            const res = await fetch(`${base_api}/Hero`, {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data_hero)
            })
            if (!res.ok) {
                console.log("Xato");

            }

            const data = await res.json();
            console.log(data);


        } catch (error) {
            console.log(error);


        }

    }



    return (
        <section className='hero_admin'>
            <div className="container">
                <form action="" className='hero_admin_wrapper' onSubmit={postData}>
                    <label >Title:</label>
                    <input type="text" ref={title} />
                    <label >Taglavha:</label>
                    <input type="text" ref={sub_title} />
                    <label >Rasmni kiriting:</label>
                    <input type="file" ref={image} />
                    <button type='submit'>Yaratish</button>
                </form>
            </div>
        </section>
    )
}

export default HeroAdmin
