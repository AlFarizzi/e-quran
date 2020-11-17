import React,{useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from "@material-ui/core/Grid";
import Typhography from '@material-ui/core/Typography';

function Baca(props) {
    let params = useParams();
    const [nomor,setNomor] = useState(params.nomor);
    const [detail,setDetail] = useState([]);
    useEffect(() => {
        const getData = async() => {
            let response = await axios(`https://equran.id/api/surat/${nomor}`);
            await setDetail(response.data);
        }
        getData();
    }, [nomor]);
    console.log(detail);
    return (
        <div>
            <CssBaseline/>
            <Container maxWidth="lg" style={{height: "100vh"}}>
                <Grid container direction="column" spacing={2} style={{flexGrow:1, marginTop:"1%"}}>
                    {
                        detail.ayat?.map(e => {
                            return(
                                <Grid item md={12} xs={12} key={e.nomor} style={{marginTop:'1%'}}>
                                    <Card>
                                        <CardContent>
                                            <Typhography>
                                                {e.ar}
                                            </Typhography>
                                            <Typhography style={{marginTop:'2%'}}>
                                                {e.idn}
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

export default Baca;