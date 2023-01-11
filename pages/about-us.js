import Head from "next/head";
import About from "../components/About/About";
import Body from "../components/Body/Body";


const AboutUs = () => {
    return (
        <>
            <Head>
                <title>About Us</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
            </Head>
            <Body>
            <About />
            </Body>
        </>
    )
}
export default AboutUs;