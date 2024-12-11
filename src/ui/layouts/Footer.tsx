import { BsFacebook } from "react-icons/bs";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterFill } from "react-icons/ri";
import { Container } from "../components/Container";
import Typograthy from "../elements/Typograthy";
import Button from "../elements/Button";

export default function Footer() {
  return (
    <Container>
      <div className="my-9 flex items-center justify-between">
        <Typograthy size="h3">Bandage</Typograthy>
        <div className="flex justify-center items-center mt-5 space-x-3">
          <BsFacebook className="text-primary text-lg" />
          <IoLogoInstagram className="text-primary text-lg" />
          <RiTwitterFill className="text-primary text-lg" />
        </div>
      </div>
      <hr className="text-[#E6E6E6]" />
      <div className="my-9 flex justify-between">
        <div>
          <Typograthy size="h6" component="h6" color="black">
            Company Info
          </Typograthy>

          <div className="space-y-5 mt-5">
            <Typograthy size="link" component="p" color="second">
              About Us
            </Typograthy>
            <Typograthy size="link" component="p" color="second">
              Carrier
            </Typograthy>
            <Typograthy size="link" component="p" color="second">
              We are hiring
            </Typograthy>
            <Typograthy size="link" component="p" color="second">
              Blog
            </Typograthy>
          </div>
        </div>
        <div>
          <Typograthy size="h6" component="h6" color="black">
            Legal
          </Typograthy>
          <div className="space-y-5 mt-5">
            <Typograthy size="link" component="p" color="second">
              About Us
            </Typograthy>
            <Typograthy size="link" component="p" color="second">
              Carrier
            </Typograthy>
            <Typograthy size="link" component="p" color="second">
              We are hiring
            </Typograthy>
            <Typograthy size="link" component="p" color="second">
              Blog
            </Typograthy>
          </div>
        </div>
        <div>
          <Typograthy size="h6" component="h6" color="black">
            Features
          </Typograthy>
          <div className="space-y-5 mt-5">
            <Typograthy size="link" component="p" color="second">
              Business Marketing
            </Typograthy>
            <Typograthy size="link" component="p" color="second">
              User Analytic
            </Typograthy>
            <Typograthy size="link" component="p" color="second">
              Live Chat
            </Typograthy>
            <Typograthy size="link" component="p" color="second">
              Unlimited Support
            </Typograthy>
          </div>
        </div>
        <div>
          <Typograthy size="h6" component="h6" color="black">
            Resources
          </Typograthy>
          <div className="space-y-5 mt-5">
            <Typograthy size="link" component="p" color="second">
              IOS & Android
            </Typograthy>
            <Typograthy size="link" component="p" color="second">
              Watch a Demo
            </Typograthy>
            <Typograthy size="link" component="p" color="second">
              Customers
            </Typograthy>
            <Typograthy size="link" component="p" color="second">
              API
            </Typograthy>
          </div>
        </div>
        <div>
          <Typograthy size="h6" component="h6" color="black">
            Get In Touch
          </Typograthy>
          <div className="space-y-5">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="p-3 rounded-l-md focus:outline-none bg-[#E6E6E6]"
            />
            <Button color="primery" rounded="md-r" className="py-3">
              Subscribe
            </Button>
            <Typograthy size="link" component="p" color="second">
              Lore imp sum dolor Amit
            </Typograthy>
          </div>
        </div>
      </div>
    </Container>
  );
}
