import SliderInit from '@/component/SliderInit';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <section className='p-10'>
        <div id='main_slider' data-version='5.1.1RC'>
          <ul>
            <li
              data-index='rs-81'
              data-transition='slideoverup'
              data-slotamount='7'
              data-easein='default'
              data-easeout='default'
              data-masterspeed='1000'
              data-thumb='/slider-3.jpeg'
              data-title='Event Video'>
              <Image
                width={1000}
                height={1000}
                src='/slider-3.jpeg'
                alt='man hand with a glowing background'
                data-lazyload='/slider-3.jpeg'
                data-bgposition='left center'
                data-kenburns='on'
                data-duration='30000'
                data-scalestart='110'
                data-scaleend='100'
                className='p-5 max-w-screen'
                data-no-retina
              />
            </li>
          </ul>
        </div>
      </section>
      <SliderInit />
    </>
  );
}
