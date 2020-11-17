import React,{useEffect,useState} from 'react';
import axios from 'axios';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from "@material-ui/core/Grid";
import Typhography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'

function Home(props) {

    const [surat, setSurat] = useState([]);

    useEffect(() => {
        const getData = async() => {
            let response = await axios('https://equran.id/api/surat');
            setSurat(response.data);
            return;
        }
        getData();
    },[])
    return (
        <div>
            <CssBaseline/>
            <Container maxWidth="lg" style={{height: "100vh"}}>
                <Grid container spacing={2} style={{flexGrow:1, marginTop:"5%"}}>
                    {
                        surat.map(e => {
                            return(
                                <Grid item md={4} xs={6} key={e.nomor}>
                                    <Card>
                                        <CardContent>
                                            <Typhography>
                                                {e.nama}
                                            </Typhography>
                                            <Typhography>
                                                {e.nama_latin}
                                            </Typhography>
                                            <Typhography>
                                                {<Link to={`/baca/${e.nomor}`}>Baca</Link>}
                                            </Typhography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Container>
        </div>
    );
}

export default Home;