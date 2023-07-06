import { AboutUs } from '../components/aboutUs'
import { Banner } from '../components/banner'
import { ContactUsSection } from '../components/contactUsSection'
import { SpotifySection } from '../components/spotifySection'
import { VideoSection } from '../components/videoSection'

export default function Home() {
  const bannerSrc = '/background-wallpaper.png'
  const aboutUsBannerSrc = '/thumb-about-us.png'
  const contactUsBannerSrc = '/thumb-hire-us.png'

  const bannerCarouselItems = [
    {
      imageSrc: bannerSrc,
      imageAlt: 'drumms wallpaper',
      firstTitle: 'A safe Kind',
      secondTitle: 'MUSIC is',
      thirdTitle: 'of high',
    },
    {
      imageSrc: bannerSrc,
      imageAlt: 'drumms wallpaper',
      firstTitle: 'teste 2',
    },
    {
      imageSrc: bannerSrc,
      imageAlt: 'drumms wallpaper',
      firstTitle: 'teste 3',
    },
    {
      imageSrc: bannerSrc,
      imageAlt: 'drumms wallpaper',
      firstTitle: 'teste 4',
    },
  ]

  const aboutUsContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a tincidunt dui, vitae posuere ipsum. Praesent vehicula nunc eget risus vehicula rutrum. Vestibulum pulvinar sapien tellus, sit amet ultrices turpis vestibulum at.'
  const videoSectionContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a tincidunt dui, vitae posuere ipsum. Praesent vehicula nunc eget risus vehicula rutrum. Vestibulum pulvinar sapien tellus, sit amet ultrices turpis vestibulum at.'
  const contactUsSectionContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a tincidunt dui, vitae posuere ipsum. Praesent vehicula nunc eget risus vehicula rutrum. Vestibulum pulvinar sapien tellus, sit amet ultrices turpis vestibulum at.'

  const videoSrc = '/the 1.mp4'

  return (
    <>
      <Banner carouselItems={bannerCarouselItems} />

      <AboutUs
        title="About Us"
        content={aboutUsContent}
        imageSrc={aboutUsBannerSrc}
        imageAlt="concert banner"
        imageTitle="Concert"
      />

      <VideoSection
        title="OUR NEWEST VIDEO"
        content={videoSectionContent}
        videoSrc={videoSrc}
      />

      <SpotifySection />

      <ContactUsSection
        imageSrc={contactUsBannerSrc}
        imageAlt="contact us image"
        title="want to hire us?"
        content={contactUsSectionContent}
        btnText="Contact with us"
        btnLink="/contact-us"
      />
    </>
  )
}
