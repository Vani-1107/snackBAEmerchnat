import React,{useState} from "react";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
function Photos(){
    const [currentImage, setCurrentImage] = useState(0);

    const photo = [
        { src: p1, name: 'Amanda Cooper', role: 'Lorem Ipsum Role' },
        { src: p2, name: 'Amanda Cooper', role: 'Lorem Ipsum Role' },
        { src: p3, name: 'Amanda Cooper', role: 'Lorem Ipsum Role' },
        { src: p1, name: 'Amanda Cooper', role: 'Lorem Ipsum Role' },
  
    ];
    const handleScroll = (event) => {
        setCurrentImage(event.target.scrollLeft);
    };
    return (
        <div className="overflow-x-auto whitespace-nowrap scroll-wheel lg:hidden md:block">
            <div className="text-2xl font-bold text-slate-500 w-[90%] mx-auto py-6 " >Photos</div>
            <div className="overflow-x-auto whitespace-nowrap scroll-wheel lg:hidden md:block no-scrollbar sm:px-4">
            <div className="flex" style={{ width: photo.length * 310 }}>
                {photo.map((image, index) => (
                    <div key={index} className="relative w-[18.75rem] h-[23rem] m-1">
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-[18.75rem] h-[18.75rem] mr-3"
                        />
                        {/* <p className="font-roboto text-base font-medium">
                            {image.name}
                        </p> */}
                        {/* <p className="font-sans text-sm font-normal">
                            {image.role}
                        </p> */}
                    </div>
                ))}
            </div>
            </div>
        </div>
    )
}
export default Photos;