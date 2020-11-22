import { Container } from 'inferno-bootstrap';

const Home = props => {
  return <Container class="container-fluid p-0">{props.children}</Container>;
};

export default Home;
