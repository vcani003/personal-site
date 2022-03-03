//just checking this rlly does work without react import
//amazing wow

import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useEffect } from "react";

const useStyles = makeStyles({
    cardsContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
    },
    card: {
        maxWidth: '500px',
        border: '2px dotted #b6eca5',
        padding: '12px',
        margin: '8px'
    },
    img: {
        filter: 'grayscale(100)',
        //cross-browser support
        '-webkit-filter': 'grayscale(100%)',
        '-moz-filter': 'grayscale(100%)',
        '-ms-filter': 'grayscale(100%)',
        filter: 'gray', /* IE 6-9 */
        transition: 'filter .3s ease-in-out',
        '&:hover': {
            filter: 'none',
            '-webkit-filter': 'none',
            '-moz-filter': 'none',
            '-ms-filter': 'none'
        }
    }
})

const Card = ({ title, img, imgWidth, imgHeight, desc }) => {
    const classes = useStyles();
    return (
        <div className={classes.card}>
            <img className={classes.img} width={imgWidth} height={imgHeight} src={img} />
            <div>{title}</div>
            <div>{desc}</div>
        </div>
    )
}

const Cats = () => {
    //embed google photos https://www.labnol.org/embed/google/photos/
    const classes = useStyles();
    return (

        <>
            <Typography variant='h5'>
                The Loco Gang
            </Typography>
            {/* <p>Fun fact! I've had over a dozen cats when I was growing up and living with my parents. We were a big cat family and loved to take in rescues and give them a place to call home</p> */}
            <div className={classes.cardsContainer}>

                <Card
                    title="Lumi"
                    imgWidth={270}
                    imgHeight={350}
                    img='https://lh3.googleusercontent.com/cqF0VhsNedmfW3IKrrIVOFoS4y9yaHwpXDggAgewCMbJ-k_sCmD9hSlYJh3cdrZ6_3Y_lFlMRGJEUMwa2__obJHkO_MUV39GRyOx5haoQMdDBuaBP26RDiGfzq4Tkt17M4MPrdf-9ag=w2400'
                    desc={`Luci's sister. This one's got thumbs! She's a sweet gal, 
            her favorite toy is a small bell tied to string from an old broken toy. 
            She likes to play fetch and pat you on the face for attention. 
            She loves to give love and be loved. Knows how to give high fives if you bring treats.`}
                />

                <Card
                    title="Luci"
                    imgWidth={300}
                    imgHeight={350}
                    img='https://lh3.googleusercontent.com/QUT-VHVivt61L0s68lT7typT5vnibFPKXtBZU8TxTkGB4rZbmWHjBq-kza2C9t8AazolvxP5HwZimzDNLR9q-HoQYhZLfk1c-4XMi86DlTuIK3Uv_a7loXqhlMmr3yWxxUr73j5llgg=w2400'
                    desc={`Lumi's sister. An absolute angel, she's got strong vocals 
                and isn't afraid to show it. Tiny but chonkin'. 
                She yells if you don't sit by her to watch her eat. 
                If you show her treats and hold out your hand, she will give you a handshake for thanks. 
                Likes to pick fights with Coco as payback for bullying her as a kitten.`}
                />

                <Card
                    title="Coco"
                    imgWidth={450}
                    imgHeight={270}
                    img='https://lh3.googleusercontent.com/OnKnq3FVXKmC1qv_4wXfr4QV90FKrxIxFVEpdN1StowpaabFnCgitXHd3u2-ZGg-ENZfnjCTjAYg8QIi07ZcWLFIiW9stMeoKvNixDe_Fj8GROgjMGtNVAkcFzD-3nr4YPYapVdYJqo=w2400'
                    desc={`Our first kitty, comes to visit when family is in (cat) town. 
                She's an absolute fiend, villain, devil. She sizes me up and doesn't like me 
                even though I helped raised her since she could fit the palm of my hand. 
                I know she is a queen of this lawless land, I don't dare try to cross her 
                but I try to win her love on the daily. Only sweet when you feed her wet food 
                and likes to instigate a fight with the other Lu's.`}
                />
            </div>
        </>
    )
}

export default Cats;