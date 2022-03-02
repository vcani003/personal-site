//just checking this rlly does work without react import
//amazing wow

import { Typography } from "@mui/material";
import { useEffect } from "react";

const Cats = () => {
    //embed google photos https://www.labnol.org/embed/google/photos/
    return (

        <>
            <Typography variant='h5'>
                My kitties
            </Typography>
            <p>Fun fact! I've had over a dozen cats when I was growing up and living with my parents. We were a big cat family and loved to take in rescues and give them a place to call home</p>
            <p>The Loco Gang</p>

            <div>
                <img width={300} height={350} src='https://lh3.googleusercontent.com/cqF0VhsNedmfW3IKrrIVOFoS4y9yaHwpXDggAgewCMbJ-k_sCmD9hSlYJh3cdrZ6_3Y_lFlMRGJEUMwa2__obJHkO_MUV39GRyOx5haoQMdDBuaBP26RDiGfzq4Tkt17M4MPrdf-9ag=w2400' ></img>
                <p>Lumi</p>
                Luci's sister. This one's got thumbs! She's a sweet gal, her favorite toy is a small bell tied to string from an old broken toy. She likes to play fetch and pat you on the face for attention. She loves to give love and be loved. Knows how to give high fives if you bring treats.
            </div>

            <div>
                <img width={300} height={350} src='https://lh3.googleusercontent.com/QUT-VHVivt61L0s68lT7typT5vnibFPKXtBZU8TxTkGB4rZbmWHjBq-kza2C9t8AazolvxP5HwZimzDNLR9q-HoQYhZLfk1c-4XMi86DlTuIK3Uv_a7loXqhlMmr3yWxxUr73j5llgg=w2400' ></img>
                <p>Luci</p>
                Lumi's sister. An absolute angel, she's got strong vocals and isn't afraid to show it. Tiny but chonkin'. She yells if you don't sit by her to watch her eat. If you show her treats and hold out your hand, she will give you a handshake for thanks. Likes to pick fights with Coco as payback for bullying her as a kitten.
            </div>

            <div>
                <img width={300} height={350} src='https://lh3.googleusercontent.com/QUT-VHVivt61L0s68lT7typT5vnibFPKXtBZU8TxTkGB4rZbmWHjBq-kza2C9t8AazolvxP5HwZimzDNLR9q-HoQYhZLfk1c-4XMi86DlTuIK3Uv_a7loXqhlMmr3yWxxUr73j5llgg=w2400' ></img>
                <p>Coco</p>
                Our first kitty, comes to visit when family is in (cat) town. She's an absolute fiend, villain, devil. She sizes me up and doesn't like me even though I helped raised her since she could fit the palm of my hand. I know she is a queen of this lawless land, I don't dare try to cross her and try to win her love on the daily. Only sweet when you feed her wet food and likes to instigate a fight with the other Lu's.
            </div>
        </>
    )
}

export default Cats;