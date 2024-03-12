import React, { useState } from "react";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import axios from "axios";
import { useEffect } from "react";
function Photos() {

    const [currentImage, setCurrentImage] = useState(0);
    const [pics, setPics] = useState([]);

    const photo = [
        { src: p1, name: 'Amanda Cooper', role: 'Lorem Ipsum Role' },
        { src: p2, name: 'Amanda Cooper', role: 'Lorem Ipsum Role' },
        { src: p3, name: 'Amanda Cooper', role: 'Lorem Ipsum Role' },
        { src: p1, name: 'Amanda Cooper', role: 'Lorem Ipsum Role' },
    ];

    const getImages = async () => {
        let config = {
            method: "get",
            maxBodyLength: Infinity,
            url: "http://localhost:4000/api/gallery/65edb6299b2c9622f9286293",
            headers: {},
        };

        axios
            .request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setPics(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getImages();
    }, []);

    const handleScroll = (event) => {
        setCurrentImage(event.target.scrollLeft);
    };
    return (
        <div className="overflow-x-auto whitespace-nowrap scroll-wheel lg:hidden md:block">
            <div className="text-2xl font-bold text-slate-500 w-[90%] mx-auto py-6 " >Photos</div>
            <div className="overflow-x-auto whitespace-nowrap scroll-wheel lg:hidden md:block no-scrollbar sm:px-4  w-[90%] mx-auto">
                <div className="flex" style={{ width: photo.length * 310 }} >
                    {pics.map((image, index) => (
                        <div key={index} className="relative w-[18.75rem] h-[23rem] m-1">
                            <img
                                src={image.image}
                                alt={image.alt}
                                className="w-[18.75rem] h-[18.75rem] mr-3 object-fill"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Photos;