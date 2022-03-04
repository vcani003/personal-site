import React from 'react'
import Typography from "@mui/material/Typography";
import me from './workingcat.gif'
import { SocialIcon } from 'react-social-icons';


const Home = () => {
    return (
        <>
            <img src={me} width={500} height={404} />
            <Typography variant="h4"> Hello friend! I'm Veronica</Typography>
            <Typography variant='h5' component='p'> Frontend Dev @ JPMC </Typography>
            <div>
                <SocialIcon
                    url='https://www.linkedin.com/in/veronicacanido/'
                    bgColor="#b6eca5"
                />
                <SocialIcon
                    url='https://github.com/vcani003/personal-site'
                    bgColor="#b6eca5"
                />
            </div>
        </>
    )
}

export default Home;