import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
<<<<<<< HEAD
import NewsletterBox from "../components/NewsletterBox";
=======
import NewsletterBox from '../components/NewsletterBox'
>>>>>>> cf25d1785d34efa5a53683535b1921595e16cb49
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
<<<<<<< HEAD
          <p>
            ShopCArt is a modern and user-friendly e-commerce platform designed
            to offer a seamless shopping experience. From browsing a wide range
            of products to secure checkout and fast delivery, ShopCArt
            simplifies online shopping for everyone. Whether you're looking for
            the latest fashion, electronics, or daily essentials, ShopCArt has
            it all in one place.
          </p>
          <p>
            Our intuitive interface, real-time product filtering, and secure
            payment gateway make every purchase smooth and hassle-free.
            Experience shopping like never before with ShopCArt!
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            At ShopCArt, our mission is to revolutionize the online shopping
            experience by providing a fast, simple, and seamless platform for
            customers. We strive to offer a wide range of high-quality products
            at competitive prices while supporting local and small businesses
            through our digital marketplace. Our focus is on building a secure,
            user-friendly, and responsive interface that ensures convenience and
            trust for every user. We are committed to fast and reliable
            delivery, backed by exceptional customer support to ensure complete
            satisfaction. By continuously embracing innovation and sustainable
            practices, we aim to make ShopCArt not just a shopping platform, but
            a reliable and enjoyable experience for everyone, everywhere.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="text-xl">Quality Assurance</b>
          <p className="text-gray-600">
            At ShopCArt, we are committed to delivering only the best to our
            customers. Every product listed on our platform undergoes strict
            quality checks to ensure it meets our standards of excellence. We
            partner with trusted vendors and monitor user feedback to
            continuously improve our offerings. From sourcing to packaging, our
            quality assurance process is designed to provide a reliable, safe,
            and satisfying shopping experience. Your trust is our priority, and
            we work tirelessly to maintain it with every order you place.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="text-xl">Convenience</b>
          <p className="text-gray-600">
            ShopCArt is designed with your comfort and convenience in mind. Our
            platform offers an intuitive interface that makes browsing,
            searching, and purchasing products incredibly easy. With features
            like smart filters, real-time search, secure payments, and quick
            checkout, shopping becomes hassle-free and enjoyable. Whether you're
            at home or on the go, ShopCArt ensures a smooth and responsive
            experience across all devices. We make online shopping simple, so
            you can focus on what matters most.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="text-xl">Exceptional Customer Service</b>
          <p className="text-gray-600">
            At ShopCArt, customer satisfaction is at the heart of everything we
            do. Our dedicated support team is always ready to assist you with
            any queries, concerns, or issues—before, during, and after your
            purchase. We believe in building long-term trust with our users
            through prompt responses, helpful guidance, and effective
            problem-solving. Whether it's tracking an order, handling returns,
            or answering product-related questions, we’re here to ensure a
            smooth and satisfying shopping experience every time.
          </p>
        </div>
      </div>
      <NewsletterBox />
=======
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
>>>>>>> cf25d1785d34efa5a53683535b1921595e16cb49
    </div>
  );
};

export default About;
