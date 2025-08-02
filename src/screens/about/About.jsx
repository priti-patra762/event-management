import React, { useState } from "react";
import Header from "../../components/Header";

import Footer from "../../components/Footer";
function About() {

  const[showModal,setShowModal] =useState(false);
  return (
    <>
      <Header />

      <section className="about-hero">
        <img src="src/assets/images/about_img1.jpeg" alt="About Banner" className="hero-bg" />
        <div className="overlay">
          <div className="hero-text">
            <h1>About Melodia Event Management</h1>
            <p>
              From concept to execution, Kerala’s premier event management company delivers
              flawless experiences tailored to your unique vision.
            </p>
          </div>
        </div>
      </section>



      <div className="container my-5 content_section">
        <div className="row align-items-center">


          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src="src/assets/images/about_img2.jpg"
              alt="About"
              className="img-fluid rounded shadow"
            />
          </div>


          <div className="col-md-6">
            <h3 className="mb-3">Welcome to Melodia Event Management Company</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem iusto dolorum molestiae assumenda, vero quis ex pariatur enim optio explicabo earum, eius est veritatis dolore at libero totam illum, consectetur hic quisquam? Deleniti voluptatibus aliquam deserunt earum iure expedita tenetur molestias veniam tempora sapiente error sequi ipsam perferendis ipsa laboriosam, beatae ab vel, excepturi quae dolores et! Perspiciatis pariatur iste hic, debitis magni consectetur libero tenetur ab nesciunt, a consequatur perferendis non suscipit? Doloribus debitis incidunt veniam qui maiores facilis alias numquam placeat nam nisi molestiae consectetur natus neque doloremque ipsam consequuntur animi amet labore, explicabo laudantium deleniti omnis saepe. Sint iusto corporis molestiae adipisci quisquam quia dolorum maxime officiis amet voluptatem, velit sequi provident voluptatum odio in tempora nobis qui magni, odit nam distinctio cumque accusantium doloribus aliquid. Fugit provident corporis aliquam, vitae ab molestiae beatae iusto eos numquam dignissimos ipsa hic deserunt quibusdam autem reprehenderit, quod ipsam deleniti architecto quidem. Doloremque facilis architecto, perferendis officia at quam quidem unde sit expedita quos molestias ex necessitatibus exercitationem, cum ipsa veniam distinctio corporis nemo tenetur consequatur commodi optio. Porro sint, doloremque, necessitatibus ea eveniet, esse unde placeat rem dolorem architecto minima. Repellat voluptate eligendi necessitatibus beatae neque quaerat. Numquam, voluptatem.
            </p>
          </div>


          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aperiam ipsa commodi minima enim, fugit nesciunt voluptatem laborum illum, voluptatum consequuntur adipisci nobis aliquam hic quo, ad in ex iure. Pariatur quod, tempore in aperiam, ipsa molestias cumque deserunt veniam odit saepe ducimus iusto qui eligendi! Error ea fugiat quidem quae culpa iusto, earum autem, repudiandae minima eius aut, officiis voluptatum dolorem facere. Deserunt temporibus natus vitae earum sint quas aliquid magnam voluptatum cupiditate. Repellendus obcaecati repellat animi quis atque vero odit facilis distinctio vel. Saepe assumenda, fugit nostrum alias sed ut doloribus consequuntur deserunt hic asperiores culpa doloremque placeat.</p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat illum, laboriosam rerum dolores distinctio cumque iusto aut consequatur ut asperiores omnis in quae delectus corporis? Ut voluptatum quod vitae corporis, dolorum necessitatibus asperiores, reiciendis veritatis laborum nostrum natus doloribus, voluptatibus nesciunt. Cumque eligendi vitae omnis libero nostrum ad, ea natus iste suscipit, a placeat? Et voluptatum numquam voluptas quo tempora laborum, id, harum sequi natus deleniti nulla autem unde necessitatibus vel aliquam dignissimos aliquid ab odit atque quaerat fugit, dolore ducimus soluta! Rem recusandae totam iusto nostrum similique ipsam illo reiciendis nobis. Iure soluta odit nisi doloremque recusandae quo ipsum!
          </p>


          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dicta, facilis error vitae aperiam natus perspiciatis velit repellat voluptatibus labore, veritatis, blanditiis possimus quisquam impedit maxime nihil libero! Aspernatur consequatur similique deserunt et ab quia. Obcaecati illo sit quia animi rem repellendus officiis similique maiores quo hic nemo dolor, distinctio, amet blanditiis molestiae. Ducimus similique, mollitia harum ullam animi fugiat in culpa ipsa delectus beatae quis, corrupti, sunt amet? Corporis a harum ipsam beatae facilis saepe, laborum rerum veniam! Neque deserunt aperiam explicabo vel delectus, excepturi inventore, dignissimos beatae animi sit eaque! Voluptatum eligendi veritatis quibusdam nisi quas soluta asperiores natus odio aperiam expedita pariatur, sit quis fugiat qui adipisci repudiandae esse dolorem corporis molestiae atque doloremque tempore deleniti? Dicta quos rerum eveniet, et id voluptatem, ipsa ab aperiam explicabo magnam sint ducimus quas quidem. Modi vitae molestias, similique possimus repudiandae vero culpa nesciunt fugit facere. Rem, deleniti nulla. Nam culpa blanditiis officiis pariatur ullam ab illo, quis est quia aliquid quas sunt rem aperiam non voluptatum, molestias quisquam hic, unde minus autem neque consequatur debitis ducimus quos. Aperiam quod accusamus porro quam optio tempore! Autem commodi repellat repudiandae, temporibus quae, qui quos consequuntur ratione, id ex cumque quis inventore.
          </p>

           </div>

      </div>

      <div className="question" onClick={() => setShowModal(true)}>
        <div className="question_box">
          <h3>Do you have Question?</h3>
          <h6>Request pricing</h6>
        </div>
      </div>

      


      {showModal && (
        <div className="modal_overlay">
          <div className="modal_box">
            <button className="close_btn" onClick={() => setShowModal(false)}>
              ✖
            </button>
            <h4>MELODIA EVENTS</h4>
            <h2>Request Pricing</h2>
            <p>Fill this form and we will contact you shortly.</p>

            <form>
              <div className="form_grid">
                <input type="text" placeholder="Full Name" />
                <input type="tel" placeholder="Phone number" />
                <input type="email" placeholder="Email address" />
                <input type="date" placeholder="Function date" />
                <input type="number" placeholder="Number of guests" />
                <input type="number" placeholder="Number of rooms" />
              </div>

              <div className="radio_group">
                <label>Function Type:</label>
                <label>
                  <input type="radio" name="type" /> Wedding
                </label>
                <label>
                  <input type="radio" name="type" /> Other events
                </label>
              </div>

              <div className="radio_group">
                <label>Function Time:</label>
                <label>
                  <input type="radio" name="time" /> Day
                </label>
                <label>
                  <input type="radio" name="time" /> Evening
                </label>
              </div>

              <button className="submit_btn" type="submit">
                Check Availability & Prices
              </button>
            </form>
          </div>
        </div>
      )}











      <Footer />
    </>
  );
}

export default About;
