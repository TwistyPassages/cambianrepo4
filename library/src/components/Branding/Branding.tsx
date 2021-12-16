import { Avatar } from "@mui/material";
import React from "react";
import {makeStyles} from "@material-ui/core";

export interface BrandingProps {
    imageUrl: string;
    line1: string;
    line2: string;
    size?: string;
    color?: string;
}

const useStyles = makeStyles(theme => ({
    brand: {
        backgroundColor: 'white'
    },
    brandingImage: {
        float: 'left',
        display: 'inline-block'
    },
    brandingText: {
        float: 'left',
        display: 'block',
        paddingLeft: '5px'
    },
    smallBrandingLine1: {
        display: 'block',
        lineHeight: '5px',
        fontSize: '12px',
        paddingTop: '5px'
    },
    mediumBrandingLine1: {
        display: 'block',
        fontSize: '18px'
    },
    largeBrandingLine1: {
        display: 'block',
        fontSize: '28px'
    },
    smallBrandingLine2: {
        display: 'inline-block',
        fontSize: '12px',
        lineHeight: '0.7em'
    },
    mediumBrandingLine2: {
        display: 'inline-block',
        fontSize: '18px',
        lineHeight: '0.7em',
    },
    largeBrandingLine2: {
        display: 'inline-block',
        fontSize: '28px',
        lineHeight: '0.7em',
    }
}));

function Branding(props:BrandingProps)  {
    const {line1, line2, imageUrl, size, color} = props;
    const classes = useStyles();

    let brandSize = 'medium';
    if (size != undefined) {
        brandSize = size;
    }

    let brandColor: string | undefined = '#428bca';
    if (color != undefined) {
        brandColor = color;
    }

    let iconSizeStyle = {};
    let line1Style = classes.mediumBrandingLine1;
    let line2Style = classes.mediumBrandingLine2;
    if (brandSize == 'small') {
        iconSizeStyle = { width: 24, height: 24 };
        line1Style = classes.smallBrandingLine1;
        line2Style = classes.smallBrandingLine2;
    } else if (brandSize == 'large') {
        iconSizeStyle = { width: 56, height: 56 };
        line1Style = classes.largeBrandingLine1;
        line2Style = classes.largeBrandingLine2;
    }
    return(
        <div className={classes.brand}>
            <div className={classes.brandingImage}>
                <Avatar alt={line1} src={imageUrl} sx={iconSizeStyle} />
            </div>
            <div className={classes.brandingText}>
                <div className={line1Style}>
                    {line1}
                </div>
                <div className={line2Style}>
                    <div style={{color: brandColor}}>
                        {line2}
                    </div>
                </div>
            </div>
        </div>
    );
}

export {Branding};