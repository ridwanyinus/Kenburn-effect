import KenBurnsEffect from '@/component/Kenbursy';
import KenBurnsGSAPEffect from '@/component/KenburnGsap';
export default function Home() {
  return (
    <>
      <KenBurnsGSAPEffect />
      <div className='min-h-[10vh]'></div>
      <KenBurnsEffect />
    </>
  );
}
