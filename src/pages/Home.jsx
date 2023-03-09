import React, {useState, useEffect} from 'react'
import { getNfts } from '../utils/getNfts'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import NftLists from '../components/NftLists'
import DetailsModal from '../components/DetailsModal'
import Footer from '../components/Footer'
function Home() {

  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    //get all nfts
    const fetchNfts = async () => {
      const data = await getNfts();
      if (data) {
        setNfts(data);
      }
    };
    fetchNfts();
  }, []);
  const [id, setId] = useState(null);
  const [modal, setModal] = useState(false)

  return (
    <div>
      <div className="bg-primary relative min-h-screen">
        <Navbar />
        <Hero />
        <NftLists nfts={nfts} setId={setId} setModal={setModal} modal={modal} />

        {
          modal && (
            <DetailsModal nfts={nfts} id={id} setModal={setModal} />
          )
        }
        <Footer />
      </div>

    </div>
  )
}

export default Home;