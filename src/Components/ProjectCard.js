import React from 'react';
import '../assets/css/ProjectCard.css';
import {makeStyles} from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import {Link} from "react-router-dom";
import Radium, {StyleRoot} from "radium";
import {fadeIn, fadeInLeft, fadeInRight} from "react-animations";

function ProjectCard({img, title, description, demoLink, infoLink, index}) {
    const useStyles = makeStyles({
        root: {
            width: 400,
            height: 400
        },
        media: {
            height: 200,
        },
    });

    const styles = {
        fadeInLeft: {
            animation: 'x 4s',
            animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft')
        },
        fadeInRight: {
            animation: 'x 4s',
            animationName: Radium.keyframes(fadeInRight, 'fadeInRight')
        },
        fadeIn: {
            animation: 'x 3s',
            animationName: Radium.keyframes(fadeIn, 'fadeIn')
        }
    };

    const classes = useStyles();

    return (
        <StyleRoot>
            <div className="projectCard" style={styles.fadeIn}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            {infoLink ?
                                <Link to={infoLink}>
                                    <CardMedia
                                        className={classes.media}
                                        image={img}
                                        title="Contemplative Reptile"
                                    />
                                </Link>
                                :
                                <CardMedia
                                    className={classes.media}
                                    image={img}
                                    title="Contemplative Reptile"
                                />
                            }
                            <CardContent className="projectCard__text">
                                <Typography gutterBottom variant="h5" component="h2">
                                    {title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" onClick={()=> window.open(demoLink, "_blank")}>
                                Demo
                            </Button>
                            {infoLink ?
                                <Link to={infoLink}>
                                    <Button size="small" color="primary">
                                        Learn More
                                    </Button>
                                </Link>
                                :
                                ''
                            }

                        </CardActions>
                    </Card>
            </div>
        </StyleRoot>
    )
}

export default ProjectCard;