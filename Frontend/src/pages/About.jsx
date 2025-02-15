import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from '../components/NewsletterBox'
const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id perferendis ullam modi nihil omnis consequatur. Soluta, molestiae magnam! Cumque aspernatur ea molestiae inventore nisi magni nulla provident. Doloremque soluta adipisci ratione dolore, culpa illo nesciunt ducimus illum rerum natus perferendis similique, unde voluptatum velit fuga quis sapiente consequatur facilis eum.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur hic, veniam officia voluptatibus laborum quisquam quaerat repellendus atque nobis aliquam officiis! Illum aperiam illo itaque!</p>
          <b className="text-gray-800">Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, veniam suscipit? Minus nisi repudiandae recusandae debitis nulla, non ratione earum velit explicabo itaque. Modi magnam, omnis sit labore, reprehenderit sed totam nam fugiat beatae ducimus aliquid officiis quidem est temporibus natus animi ipsum expedita consectetur dolor? Accusamus unde error aliquam.</p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance</b>
          <p className="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto fugit nobis reiciendis doloribus voluptatum porro! Vero reprehenderit, ipsa nostrum provident autem eveniet. Illum, sunt quas iste consectetur minus voluptate fugit, non ad libero autem labore veritatis id suscipit laboriosam nulla!</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience</b>
          <p className="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto fugit nobis reiciendis doloribus voluptatum porro! Vero reprehenderit, ipsa nostrum provident autem eveniet. Illum, sunt quas iste consectetur minus voluptate fugit, non ad libero autem labore veritatis id suscipit laboriosam nulla!</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service</b>
          <p className="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto fugit nobis reiciendis doloribus voluptatum porro! Vero reprehenderit, ipsa nostrum provident autem eveniet. Illum, sunt quas iste consectetur minus voluptate fugit, non ad libero autem labore veritatis id suscipit laboriosam nulla!</p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  );
};

export default About;
