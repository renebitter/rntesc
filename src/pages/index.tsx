import Head from 'next/head';

import SignNext from '../assets/sign-next.svg';
import { Container } from '../styles/pages/Home';

//TODO: update React.FC since its use is discouraged.
const Home: React.FC = () => {
    return (
        <Container>
            <Head>
                <title>
                    React Next Typescript ESlint &amp; Styled Components
                </title>
            </Head>

            <SignNext />
            <h1>React Next Typescript ESlint &amp; Styled Components</h1>
            <p>React Next Typescript ESlint &amp; Styled Components</p>
        </Container>
    );
};

export default Home;
