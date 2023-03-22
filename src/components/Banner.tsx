import React, { useRef, useEffect } from 'react'
import Marquee from '../styles/containers/Marque.container'
import { CloudUpload, Facebook, Twitter, LinkedIn, Flag, Speaker, SignalCellular0Bar } from '@material-ui/icons';

const Banner = (style:any) => {
  const marqueChild = useRef<HTMLDivElement | null>(null);
  const intervaler = useRef<string | number | NodeJS.Timer | undefined>();
  // const adverts = useState<SvgIconComponent[] | null>([CloudUpload, Flag, Speaker, Facebook, SignalCellular0Bar, Twitter, LinkedIn]);
  let adverts = [CloudUpload, Flag, Speaker, Facebook, SignalCellular0Bar, Twitter, LinkedIn];
  useEffect(() => {
    const child = document.getElementById("marqueChild")!;
    // const parent = child.parentElement!;
    intervaler.current = setInterval((e: any) => {
      const childPosition = child?.offsetLeft;
      const childWidth = child.offsetWidth;
      //if when child is completely offscreen
      if (childPosition >= (-childWidth)) {
        var cr = Number(child!.style.right!.replace("px", ""));
        child!.style.right = `${cr! + 1}px`
      } else {
        child!.style.right = `-${childWidth + 100}px`
      }
      
    }, 10)
    return () => {
      clearInterval(intervaler.current)
    }
  }, [])
  return (
    <Marquee style={{...style}}>
      <div id='marqueChild' className='marqueChild' ref={marqueChild} style={{
        width: "700px",
        height: "100%",
        position: "absolute",
        right: ("-" + marqueChild.current?.style.width),
      }}>
        {adverts.map((Icon, i) => <Icon key={i}/>)}
      </div>
    </Marquee>
  )
}

export default Banner
