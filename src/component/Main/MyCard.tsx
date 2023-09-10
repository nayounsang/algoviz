import React from "react";
import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button
} from "@mui/material";

interface proptype {
    img: string,
    title: string,
    text: string,
    onClick: () => void,
}

const MyCard = ({ img, title, text, onClick }: proptype) => {
    return (
        <Card sx={{ width: 345,maxWidth: 345,marginBottom:'20px',marginTop:'20px',borderColor:'black' }}>
            <CardActionArea onClick={onClick}>
                <CardMedia
                    component="img"
                    height="140"
                    image={img}
                    alt="이미지"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {text}
                    </Typography>
                </CardContent>
            </CardActionArea>
            
        </Card>
    )
}

export default MyCard;