import React from 'react';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Card, CardContent, CardHeader, Container, Grid } from '@mui/material';

export default function ArticleCard({article}) {
    return (
        <div>
            <Container>

                <Grid container spacing={3}>
                    <a href='/'>
                        <Grid item xs={12} md={12}>
                                    <Card elevation={1} sx={{ Width: '300px'}} >
                                        <CardHeader 
                                            action={
                                                <IconButton aria-label="settings">
                                                    <MoreVertIcon />
                                                </IconButton>
                                            }
                                            title={article.title}
                                        // subheader={postDateProps} здесь будет дата размещения статьи
                                        />
                                        <CardMedia
                                            component="img"
                                            height="194"
                                            image={article.poster}
                                            alt="Upload your image here"
                                        />
                                        <CardContent>
                                            <Typography variant="body2" color="text.secondary">
                                                {article.body}
                                            </Typography>
                                        </CardContent>
                                        <CardActions disableSpacing>
                                            <IconButton aria-label="add to favorites">
                                                <FavoriteIcon />
                                            </IconButton>
                                            <IconButton aria-label="share">
                                                <ShareIcon />
                                            </IconButton>
                                        </CardActions>
                                    </Card>
                        </Grid>
                    </a>
                </Grid>
            </Container>
        </div>
    )
}