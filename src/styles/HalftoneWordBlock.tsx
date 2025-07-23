import React from "react";
import { Box } from "@mui/material";
import PolygonText from "./PolygonText";
import HalftoneDots from "./HalftoneDots";
import Star from "./Star";

const HalftoneWordBlock = ({
    text,
    bgColor,
    dotColor,
    dotSide,
}: {
    text: string;
    bgColor: string;
    dotColor: string;
    dotSide: 'left' | 'right';
}) => {


    return (
        <Box
            sx={{
                position: "relative",
                width: "100%",
                height: 220,
                mt: -60,              // <- negative margin to pull blocks closer
                ":first-of-type": { mt: 0 },
                overflow: "visible",
            }}
        >
            <HalftoneDots side={dotSide} offsetY={0} color={dotColor} />

            <Star x={-30} y={-10} size={24} rotation={0} />
            <Star x={180} y={140} size={30} rotation={15} />
            <PolygonText text={text} bgColor={bgColor} />
        </Box>
    );
};

export default HalftoneWordBlock;
