import React from 'react';
import ImageGallery from 'react-image-gallery';
import useScrollFadeIn from '..//hooks/useScrollFadeIn';
import chae from '../assets/member/chae.jpg';
import choBass from '../assets/member/cho_bass.jpg';
import choDrum from '../assets/member/cho_drum.jpg';
import choi from '../assets/member/choi.jpg';
import hyeong from '../assets/member/hyeong.jpg';
import kimPiano from '../assets/member/kim_piano.jpg';
import kimVocal from '../assets/member/kim_vocal.jpg';
import lee from '../assets/member/lee.jpg';
import lim from '../assets/member/lim.jpg';

const images = [
    { original: chae, thumbnail: chae },
    { original: choBass, thumbnail: choBass },
    { original: choDrum, thumbnail: choDrum },
    { original: choi, thumbnail: choi },
    { original: hyeong, thumbnail: hyeong },
    { original: kimPiano, thumbnail: kimPiano },
    { original: kimVocal, thumbnail: kimVocal },
    { original: lee, thumbnail: lee },
    { original: lim, thumbnail: lim }
];
function Gallery() {
    const animatedItem = useScrollFadeIn('up', 1, 0);
    return (
        <div {...animatedItem} className="content gallery">
            <h2 className="title">갤러리</h2>
            <ImageGallery showPlayButton={false} showFullscreenButton={false} items={images} />
        </div>
    );
}

export default Gallery;
