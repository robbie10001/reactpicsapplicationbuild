import React from "react";

class ImageCard extends React.Component {
    render() {
        const { description, urls} = this.props.image;
        return (
            <div>
                <img alt ={description} scr={urls.regular} />
            </div>
        );
    }
}

export default ImageCard;