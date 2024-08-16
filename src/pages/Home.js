import ImageWindow from "../components/ImageWindow";
import WideImageWindow from "../components/WideImageWindow";

export default function Home() {
    return (
        <>  
            <div className="space y-4">
                <p>
                    This website was created for learning purposes: see linked repositiories
                </p>
                <p>
                    <a href="https://github.com/Coff1199/climbing-website-frontend">Frontend</a>
                    </p>
                <p>
                    <a href="https://github.com/Coff1199/climbing-website-backend">Backend</a>
                </p>
            </div>
            <div className="flex min-h-screen">
                <div className="flex flex-col w-1/3"> 
                    <ImageWindow 
                        src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Chogori.jpg"
                        alt="K2's brutal east face"
                        title="Beauty"
                        text="A fortitude of human strength"
                        tags={["strength", "drive", "power"]}
                    />
                    <ImageWindow 
                        src="https://www.switchbacktravel.com/sites/default/files/images/articles/Annapurna%20Sanctuary%20Trek%20Nepal.JPG"
                        alt="Annapura's haunting visage"
                        title="Life on the Edge"
                        text="A homage to mortality"
                        tags={["life", "death"]}
                    />
                </div>  
                <div className="w-2/3">
                    <WideImageWindow src="https://cdn.britannica.com/17/83817-050-67C814CD/Mount-Everest.jpg"
                        alt="Everest's familiar peak"
                        title="Conquering the Highest Peaks"
                        text="A desperate climb to the top"
                        tags={["spirit", "drive", "fortitude"]}/>
                </div>
            </div>
        </>
    );
}