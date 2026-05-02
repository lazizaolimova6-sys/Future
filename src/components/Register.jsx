import React from 'react'

function Register() {
    return (
        <section className='register'>
            <div className="orab_t">
                <h2>O‘quv markazga ro‘yxatdan o‘tish</h2>
                <p>
                    Bizning markazimizda ingliz tili, dasturlash va yapon tili kurslari mavjud.
                    Quyidagi formani to‘ldirib, ro‘yxatdan o‘ting.
                </p>

                <form className="registration-form">
                    <label htmlFor="fullname">To‘liq ism:</label>
                    <input
                        type="text"
                        id="fullname"
                        name="fullname"
                        placeholder="Ismingiz va familiyangiz"
                        required
                    />

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="example@mail.com"
                        required
                    />

                    <label htmlFor="phone">Telefon raqam:</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="+998 90 123 45 67"
                        required
                    />

                    <label htmlFor="course">Kursni tanlang:</label>
                    <select id="course" name="course" required>
                        <option value="">Kursni tanlang</option>
                        <option value="english">Ingliz tili</option>
                        <option value="programming">Dasturlash</option>
                        <option value="japanese">Yapon tili</option>
                    </select>

                    <button type="submit">Ro‘yxatdan o‘tish</button>
                </form>
            </div>

        </section>
    )
}

export default Register
