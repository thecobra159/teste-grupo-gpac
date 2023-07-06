import { Banner } from '../../components/banner'
import { ContactUsForm } from '../../components/contactUsForm'
import { ContactUsSection } from '../../components/contactUsSection'

export default function ContactUs(): JSX.Element {
  const bannerSrc = '/background-wallpaper.png'
  const contactUsBannerSrc = '/thumb-hire-us.png'

  const bannerCarouselItems = [
    {
      imageSrc: bannerSrc,
      imageAlt: 'drumms wallpaper',
      firstTitle: 'A safe Kind',
      secondTitle: 'MUSIC is',
      thirdTitle: 'of high',
    },
  ]

  const contactUsSectionContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a tincidunt dui, vitae posuere ipsum. Praesent vehicula nunc eget risus vehicula rutrum. Vestibulum pulvinar sapien tellus, sit amet ultrices turpis vestibulum at.'


  return (
    <>
      <Banner carouselItems={bannerCarouselItems} />
      <ContactUsSection
        imageSrc={contactUsBannerSrc}
        imageAlt="contact us image"
        title="Send a message for us"
        content={contactUsSectionContent}
        btnText='Contact with us'
        btnLink='/contact-us'
      />
      <ContactUsForm />
    </>
  )
}
