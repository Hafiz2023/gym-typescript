import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Our members tell us that they love our gym and the competitive
            atmosphere to be better. We are a gym for people that are serious
            about their health and fitness. Our gym is almost at capacity for
            monthly members because we want to make sure we don't get
            overcrowded.
          </p>
          <p>© Evogym All Rights Reserved.</p>
          <p> github@Hafiz2023</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Massa orci senectus</p>
          <p className="my-5">Et gravida id et etiam</p>
          <p>Ullamcorper vivamus</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">24/7 Whatsapp.</p>
          <p>+92320-4338215</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
