import { Wrapper, Container } from './MainPageLayout.styles';
import { Outlet } from 'react-router-dom';
import Navigation from 'components/organisms/Navigation/Navigation';

const MainPageLayout = () => {
  return (
    <Wrapper>
      <Navigation />
      <Container>
        <Outlet />
      </Container>
    </Wrapper>
  );
};

export default MainPageLayout;
