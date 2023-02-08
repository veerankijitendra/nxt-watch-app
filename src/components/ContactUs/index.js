import {ContactUsCon, ContactUsHeading, ContactUsImage} from './styledComponent'

const ContactUs = () => (
  <ContactUsCon>
    <ContactUsHeading>CONTACT US</ContactUsHeading>
    <>
      <ContactUsImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
        alt="facebook logo"
      />
      <ContactUsImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
        alt="twitter logo"
      />
      <ContactUsImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
        alt="linked in logo"
      />
    </>
    <ContactUsHeading>
      Enjoy! Now to see your channels and recommendations!
    </ContactUsHeading>
  </ContactUsCon>
)

export default ContactUs
