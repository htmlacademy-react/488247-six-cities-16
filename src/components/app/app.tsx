import MainPage from '../../pages/main-page/main-page';
import { MainPageProps } from '../../pages/main-page/main-page';

export default function App({ rentalOffersCount }: MainPageProps): JSX.Element {
  return <MainPage rentalOffersCount={rentalOffersCount} />;
}
