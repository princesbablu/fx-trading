import Banner from '../components/home/Banner'
import RettingSection from "../components/home/RettingSection"
import Trading from '../components/Trading'
import Howto from "../components/home/Howto"
import Service from "../components/home/Service"

export default function Home() {
  return (
    <div>
      <Banner/>
      <RettingSection/>
      <Trading/>
      <Service/>
      <Howto/>
    </div>
  )
}
