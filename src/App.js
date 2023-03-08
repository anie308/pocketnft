import {useEffect, useState} from 'react'
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NftLists from "./components/NftLists";
import DetailsModal from './components/DetailsModal';
import { getNfts } from './utils/getNfts';
function App() {
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    const fetchNfts = async () => {
      const data = await getNfts();
      if (data) {
        setNfts(data);
        console.log(data);
      }
    };
    fetchNfts();
  }, []);
  const [id, setId] = useState(null);
  const [modal, setModal]= useState(false)
  return (
    <>
    <div className="bg-primary relative min-h-screen">
      <Navbar />
      <Hero />
      <NftLists nfts={nfts} setId={setId} setModal={setModal} modal={modal} />
      {
        modal && (
          <DetailsModal nfts={nfts} id={id} setModal={setModal}/>
        )
      }
    </div>
    
    </>
  );
}

export default App;
