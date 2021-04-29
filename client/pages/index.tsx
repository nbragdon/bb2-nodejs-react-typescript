import Container from '../components/container'
import Layout from '../components/layout'
import NavBar from '../components/navigation';
import Authorize from '../components/authorize';

const Index = ({ }) => {
  return (
    <>
      <Layout>
        <NavBar></NavBar>
        <Container>
          <Authorize></Authorize>
        </Container>
      </Layout>
    </>
  )
}

export default Index
