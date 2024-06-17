import DownloadIcon from "../../public/assets/svg/download.svg";
import ButtonComponent from './components/Button';


export default function Home() {

  return (
    <section className="w-full">
      Home page 입니다.
      {/* <DownloadIcon fill="#04fa9a" /> */} 예시
      {/* Redux 상태 테스트 */}
      <ButtonComponent/>
      <DownloadIcon fill="#04fa9a" />
    </section>
  );
}
